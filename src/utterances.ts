import { pageAttributes as page } from './page-attributes';
import {
  Issue,
  setRepoContext,
  loadIssueByTerm,
  loadIssueByNumber,
  loadCommentsPage,
  loadUser,
  postComment,
  createIssue,
  IssueComment
} from './github';
import { TimelineComponent } from './timeline-component';
import { NewCommentComponent } from './new-comment-component';
import { startMeasuring, scheduleMeasure } from './measure';
import { loadTheme } from './theme';
import { getRepoConfig } from './repo-config';
import { loadToken } from './oauth';
import { enableReactions } from './reactions';

setRepoContext(page);

function loadIssue(): Promise<Issue | null> {
  if (page.issueNumber !== null) {
    return loadIssueByNumber(page.issueNumber);
  }
  return loadIssueByTerm(page.issueTerm as string);
}

async function bootstrap() {
  // obtain the token stored in a cookie, which is set when the GitHub App is authorised
  await loadToken();
  // tslint:disable-next-line:prefer-const
  let [issue, user] = await Promise.all([
    loadIssue(),
    loadUser(),
    loadTheme(page.theme, page.origin)
  ]);

  startMeasuring(page.origin);

  const timeline = new TimelineComponent(user, issue);
  document.body.appendChild(timeline.element);

  if (issue && issue.comments > 0) {
    renderComments(issue, timeline);
  }

  scheduleMeasure();

  if (issue && issue.locked) {
    return;
  }

  enableReactions(!!user);

  const submit = async (markdown: string) => {
    // check if the origin is contained in utterances.json, and is allowed to post comments
    await assertOrigin();
    // check if the issue already exists, if not create one by sending a request to utterances-oauth
    // note that to create a new issue, authentication (i.e. token) is required
    if (!issue) {
      issue = await createIssue(
        page.issueTerm as string,
        page.url,
        page.title,
        page.description || '',
        page.label
      );
      timeline.setIssue(issue);
    }
    // directly send request to GitHub using token
    const comment = await postComment(issue.number, markdown);
    timeline.insertComment(comment, true);  // update timeline
    newCommentComponent.clear();
  };

  // add the new comment form
  const newCommentComponent = new NewCommentComponent(user, submit);
  timeline.element.appendChild(newCommentComponent.element);
}

bootstrap();

addEventListener('not-installed', function handleNotInstalled() {
  removeEventListener('not-installed', handleNotInstalled);
  document.querySelector('.timeline')!.insertAdjacentHTML('afterbegin', `
  <div class="flash flash-error">
    Error: utterances is not installed on <code>${page.owner}/${page.repo}</code>.
    If you own this repo,
    <a href="https://github.com/apps/utterances" target="_top"><strong>install the app</strong></a>.
    Read more about this change in
    <a href="https://github.com/utterance/utterances/pull/25" target="_top">the PR</a>.
  </div>`);
  scheduleMeasure();
});

async function renderComments(issue: Issue, timeline: TimelineComponent) {
  const renderPage = (page: IssueComment[]) => {
    for (const comment of page) {
      timeline.insertComment(comment, false);
    }
  };

  const pageCount = Math.ceil(issue.comments / page.size);
  // always load the first page.
  const pageLoads = [loadCommentsPage(issue.number, 1, page.size)];
  // if there are multiple pages, load the last page.
  if (pageCount > 1) {
    pageLoads.push(loadCommentsPage(issue.number, pageCount, page.size));
  }
  // if the last page is small, load the penultimate page.
  if (pageCount > 2 && issue.comments % page.size !== 0 && issue.comments % page.size <= page.size / 2) {
    pageLoads.push(loadCommentsPage(issue.number, pageCount - 1, page.size));
  }
  // await all loads to reduce jank.
  const pages = await Promise.all(pageLoads);
  for (const page of pages) {
    renderPage(page);
  }
  // enable loading hidden pages.
  let hiddenCommentsCount = (pageCount - pageLoads.length) * page.size;
  let nextHiddenPage = 2;
  let dynamicPageSize = page.size;
  const renderLoader = (afterPage: IssueComment[]) => {
    if (hiddenCommentsCount <= 0) {
      return;
    }
    const load = async () => {
      loader.setBusy();
      const page = await loadCommentsPage(issue.number, nextHiddenPage, dynamicPageSize);
      loader.remove();
      renderPage(page);
      hiddenCommentsCount -= dynamicPageSize;
      // page number stays the same if page size growing exponentially, otherwise increase by 1
      nextHiddenPage = (dynamicPageSize < 16) ? nextHiddenPage : nextHiddenPage + 1;
      // maximum page size of 16
      dynamicPageSize = (dynamicPageSize < 16) ? dynamicPageSize * 2 : dynamicPageSize;
      renderLoader(page);
    };
    const afterComment = afterPage.pop()!;
    const loader = timeline.insertPageLoader(afterComment, hiddenCommentsCount, load);
  };
  renderLoader(pages[0]);
}

export async function assertOrigin() {
  const { origins } = await getRepoConfig();
  const { origin, owner, repo } = page;
  if (origins.indexOf(origin) !== -1) {
    return;
  }

  document.querySelector('.timeline')!.lastElementChild!.insertAdjacentHTML('beforebegin', `
  <div class="flash flash-error flash-not-installed">
    Error: <code>${origin}</code> is not permitted to post to <code>${owner}/${repo}</code>.
    Confirm this is the correct repo for this site's comments. If you own this repo,
    <a href="https://github.com/${owner}/${repo}/edit/master/utterances.json" target="_top">
      <strong>update the utterances.json</strong>
    </a>
    to include <code>${origin}</code> in the list of origins.<br/><br/>
    Suggested configuration:<br/>
    <pre><code>${JSON.stringify({ origins: [origin] }, null, 2)}</code></pre>
  </div>`);
  scheduleMeasure();
  throw new Error('Origin not permitted.');
}
