import { deparam } from './deparam';
import repoRegex from './repo-regex';
import { token } from './oauth';

function readPageAttributes() {
  const params = deparam(location.search.substr(1));  // url parameters supplied by client.ts

  let issueTerm: string | null = null;
  let issueNumber: number | null = null;
  if ('issue-term' in params) {
    issueTerm = params['issue-term'];
    if (issueTerm !== undefined) {
      if (issueTerm === '') {
        throw new Error('When issue-term is specified, it cannot be blank.');
      }
      if (['title', 'url', 'pathname', 'og:title'].indexOf(issueTerm) !== -1) {
        if (!params[issueTerm]) {
          throw new Error(`Unable to find "${issueTerm}" metadata.`);
        }
        issueTerm = params[issueTerm];  // 'title', 'pathname' etc are parameters in param
      }
    }
  } else if ('issue-number' in params) {
    issueNumber = +params['issue-number'];
    if (issueNumber.toString(10) !== params['issue-number']) {
      throw new Error(`issue-number is invalid. "${params['issue-number']}`);
    }
  } else {
    throw new Error('"issue-term" or "issue-number" must be specified.');
  }

  if (!('repo' in params)) {
    throw new Error('"repo" is required.');
  }

  if (!('origin' in params)) {
    throw new Error('"origin" is required.');
  }

  const matches = repoRegex.exec(params.repo);
  if (matches === null) {
    throw new Error(`Invalid repo: "${params.repo}"`);
  }

  if (params.token) {
    token.value = params.token;
  }

  return {
    owner: matches[1],
    repo: matches[2],
    issueTerm,
    issueNumber,
    origin: params.origin,
    url: params.url,
    title: params.title,
    description: params.description,
    label: params.label,
    theme: params.theme || 'light',
    size: Math.round(Math.abs(+params.size)) || 25
  };
}

export const pageAttributes = readPageAttributes();
