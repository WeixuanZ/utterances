parcelRequire=function(e){var r="function"==typeof parcelRequire&&parcelRequire,n="function"==typeof require&&require,i={};function u(e,u){if(e in i)return i[e];var t="function"==typeof parcelRequire&&parcelRequire;if(!u&&t)return t(e,!0);if(r)return r(e,!0);if(n&&"string"==typeof e)return n(e);var o=new Error("Cannot find module '"+e+"'");throw o.code="MODULE_NOT_FOUND",o}return u.register=function(e,r){i[e]=r},i=e(u),u.modules=i,u}(function (require) {var g={};function $(){var e=C(location.search.substr(1)),r=null,i=null;if("issue-term"in e){if(void 0!==(r=e["issue-term"])){if(""===r)throw new Error("When issue-term is specified, it cannot be blank.");if(-1!==["title","url","pathname","og:title"].indexOf(r)){if(!e[r])throw new Error("Unable to find \""+r+"\" metadata.");r=e[r]}}}else{if(!("issue-number"in e))throw new Error("\"issue-term\" or \"issue-number\" must be specified.");if((i=+e["issue-number"]).toString(10)!==e["issue-number"])throw new Error("issue-number is invalid. \""+e["issue-number"])}if(!("repo"in e))throw new Error("\"repo\" is required.");if(!("origin"in e))throw new Error("\"origin\" is required.");var t=_.exec(e.repo);if(null===t)throw new Error("Invalid repo: \""+e.repo+"\"");return e.token&&(c.value=e.token),{owner:t[1],repo:t[2],issueTerm:r,issueNumber:i,origin:e.origin,url:e.url,title:e.title,description:e.description,label:e.label,theme:e.theme||"light"}}var o={};function C(e){for(var r,o=/\+/g,n=/([^&=]+)=?([^&]*)/g,p=function(e){return decodeURIComponent(e.replace(o," "))},a={};r=n.exec(e);)a[p(r[1])]=p(r[2]);return a}function t(e){var r=[];for(var o in e)e.hasOwnProperty(o)&&e[o]&&r.push(encodeURIComponent(o)+"="+encodeURIComponent(e[o]));return r.join("&")}o.deparam=C,o.param=t;var _=/^([\w-_]+)\/([\w-_.]+)$/i;var k={};var p="https://utterances.weixuanz.workers.dev";var aa=k&&k.__awaiter||function(e,r,t,n){return new(t||(t=Promise))(function(o,a){function $(e){try{u(n.next(e))}catch(r){a(r)}}function i(e){try{u(n.throw(e))}catch(r){a(r)}}function u(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then($,i)}u((n=n.apply(e,r||[])).next())})},ba=k&&k.__generator||function(e,r){var t,n,o,a,$={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return a={next:i(0),throw:i(1),return:i(2)},"function"==typeof Symbol&&(a[Symbol.iterator]=function(){return this}),a;function i(a){return function(i){return function(a){if(t)throw new TypeError("Generator is already executing.");for(;$;)try{if(t=1,n&&(o=2&a[0]?n.return:a[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,a[1])).done)return o;switch(n=0,o&&(a=[2&a[0],o.value]),a[0]){case 0:case 1:o=a;break;case 4:return $.label++,{value:a[1],done:!1};case 5:$.label++,n=a[1],a=[0];continue;case 7:a=$.ops.pop(),$.trys.pop();continue;default:if(!(o=(o=$.trys).length>0&&o[o.length-1])&&(6===a[0]||2===a[0])){$=0;continue}if(3===a[0]&&(!o||a[1]>o[0]&&a[1]<o[3])){$.label=a[1];break}if(6===a[0]&&$.label<o[1]){$.label=o[1],o=a;break}if(o&&$.label<o[2]){$.label=o[2],$.ops.push(a);break}o[2]&&$.ops.pop(),$.trys.pop();continue;}a=r.call(e,$)}catch(i){a=[6,i],n=0}finally{t=o=0}if(5&a[0])throw a[1];return{value:a[0]?a[1]:void 0,done:!0}}([a,i])}}},c={value:null};function r(e){return p+"/authorize?"+t({redirect_uri:e})}function D(){return aa(this,void 0,Promise,function(){var e,r,t;return ba(this,function(n){switch(n.label){case 0:return c.value?[2,c.value]:(e=p+"/token",[4,fetch(e,{method:"POST",mode:"cors",credentials:"include"})]);case 1:return(r=n.sent()).ok?[4,r.json()]:[3,3];case 2:return t=n.sent(),c.value=t,[2,t];case 3:return[2,null];}})})}k.token=c,k.getLoginUrl=r,k.loadToken=D;var a=$();var b={};function ca(e){return e=e.replace(/\s/g,""),decodeURIComponent(escape(atob(e)))}var da=b&&b.__awaiter||function(n,e,t,r){return new(t||(t=Promise))(function($,o){function a(n){try{i(r.next(n))}catch(e){o(e)}}function s(n){try{i(r.throw(n))}catch(e){o(e)}}function i(n){var e;n.done?$(n.value):(e=n.value,e instanceof t?e:new t(function(n){n(e)})).then(a,s)}i((r=r.apply(n,e||[])).next())})},ea=b&&b.__generator||function(n,e){var t,r,$,o,a={label:0,sent:function(){if(1&$[0])throw $[1];return $[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(t)throw new TypeError("Generator is already executing.");for(;a;)try{if(t=1,r&&($=2&o[0]?r.return:o[0]?r.throw||(($=r.return)&&$.call(r),0):r.next)&&!($=$.call(r,o[1])).done)return $;switch(r=0,$&&(o=[2&o[0],$.value]),o[0]){case 0:case 1:$=o;break;case 4:return a.label++,{value:o[1],done:!1};case 5:a.label++,r=o[1],o=[0];continue;case 7:o=a.ops.pop(),a.trys.pop();continue;default:if(!($=($=a.trys).length>0&&$[$.length-1])&&(6===o[0]||2===o[0])){a=0;continue}if(3===o[0]&&(!$||o[1]>$[0]&&o[1]<$[3])){a.label=o[1];break}if(6===o[0]&&a.label<$[1]){a.label=$[1],$=o;break}if($&&a.label<$[2]){a.label=$[2],a.ops.push(o);break}$[2]&&a.ops.pop(),a.trys.pop();continue;}o=e.call(n,a)}catch(s){o=[6,s],r=0}finally{t=$=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},E="https://api.github.com/",F="application/vnd.github.VERSION.html+json",fa="application/vnd.github.VERSION.html",m="application/vnd.github.squirrel-girl-preview",q=25;b.PAGE_SIZE=q;var i,j,v=["+1","-1","laugh","hooray","confused","heart","rocket","eyes"];b.reactionTypes=v;var G="master";function H(n){i=n.owner,j=n.repo}function h(n,e){(e=e||{}).mode="cors",e.cache="no-cache";var t=new Request(E+n,e);return t.headers.set("Accept",m),/^search\//.test(n)||null===c.value||t.headers.set("Authorization","token "+c.value),t}b.setRepoContext=H;var I={standard:{limit:Number.MAX_VALUE,remaining:Number.MAX_VALUE,reset:0},search:{limit:Number.MAX_VALUE,remaining:Number.MAX_VALUE,reset:0}};function ga(n){var e=n.headers.get("X-RateLimit-Limit"),t=n.headers.get("X-RateLimit-Remaining"),r=n.headers.get("X-RateLimit-Reset"),$=/\/search\//.test(n.url),o=$?I.search:I.standard;if(o.limit=+e,o.remaining=+t,o.reset=+r,403===n.status&&0===o.remaining){var a=new Date(0);a.setUTCSeconds(o.reset);var s=Math.round((a.getTime()-new Date().getTime())/1e3/60),i=$?"search API":"non-search APIs";console.warn("Rate limit exceeded for "+i+". Resets in "+s+" minute"+(1===s?"":"s")+".")}}function ha(n){var e=n.headers.get("link");if(null===e)return 0;var t=/\?page=([2-9][0-9]*)>; rel="next"/.exec(e);return null===t?0:+t[1]}function f(n){return fetch(n).then(function(e){return 401===e.status&&(c.value=null),403===e.status&&e.json().then(function(n){"Resource not accessible by integration"===n.message&&window.dispatchEvent(new CustomEvent("not-installed"))}),ga(e),"GET"===n.method&&-1!==[401,403].indexOf(e.status)&&n.headers.has("Authorization")?(n.headers.delete("Authorization"),f(n)):e})}function J(n,e){void 0===e&&(e=!1);var t=h("repos/"+i+"/"+j+"/contents/"+n+"?ref="+G);return e&&t.headers.set("accept",fa),f(t).then(function(t){if(404===t.status)throw new Error("Repo \""+i+"/"+j+"\" does not have a file named \""+n+"\" in the \""+G+"\" branch.");if(!t.ok)throw new Error("Error fetching "+n+".");return e?t.text():t.json()}).then(function(n){if(e)return n;var t=n.content,r=ca(t);return JSON.parse(r)})}function K(n){var e="\""+n+"\" type:issue in:title repo:"+i+"/"+j;return f(h("search/issues?q="+encodeURIComponent(e)+"&sort=created&order=asc")).then(function(n){if(!n.ok)throw new Error("Error fetching issue via search.");return n.json()}).then(function(t){if(0===t.total_count)return null;t.total_count>1&&console.warn("Multiple issues match \""+e+"\"."),n=n.toLowerCase();for(var r=0,$=t.items;r<$.length;r++){var o=$[r];if(-1!==o.title.toLowerCase().indexOf(n))return o}return console.warn("Issue search results do not contain an issue with title matching \""+n+"\". Using first result."),t.items[0]})}function L(n){return f(h("repos/"+i+"/"+j+"/issues/"+n)).then(function(n){if(!n.ok)throw new Error("Error fetching issue via issue number.");return n.json()})}function ia(n,e){var t=h("repos/"+i+"/"+j+"/issues/"+n+"/comments?page="+e+"&per_page="+q),r=F+","+m;return t.headers.set("Accept",r),t}function w(n,e){return f(ia(n,e)).then(function(n){if(!n.ok)throw new Error("Error fetching comments.");return n.json()})}function M(){return null===c.value?Promise.resolve(null):f(h("user")).then(function(n){return n.ok?n.json():null})}function N(n,e,t,r,$){var o=p+"/repos/"+i+"/"+j+"/issues"+($?"?label="+encodeURIComponent($):""),a=new Request(o,{method:"POST",body:JSON.stringify({title:n,body:"# "+t+"\n\n"+r+"\n\n["+e+"]("+e+")"})});return a.headers.set("Accept",m),a.headers.set("Authorization","token "+c.value),fetch(a).then(function(n){if(!n.ok)throw new Error("Error creating comments container issue");return n.json()})}function O(n,e){var t=h("repos/"+i+"/"+j+"/issues/"+n+"/comments",{method:"POST",body:JSON.stringify({body:e})}),r=F+","+m;return t.headers.set("Accept",r),f(t).then(function(n){if(!n.ok)throw new Error("Error posting comment.");return n.json()})}function P(n,e){return da(this,void 0,void 0,function(){var t,r,$,o,a,s;return ea(this,function(i){switch(i.label){case 0:return n=n.replace(E,""),t=JSON.stringify({content:e}),(r=h(n,{method:"POST",body:t})).headers.set("Accept",m),[4,f(r)];case 1:return($=i.sent()).ok?[4,$.json()]:[3,3];case 2:return a=i.sent(),[3,4];case 3:a=null,i.label=4;case 4:if(o=a,201===$.status)return[2,{reaction:o,deleted:!1}];if(200!==$.status)throw new Error("expected \"201 reaction created\" or \"200 reaction already exists\"");return(s=h("reactions/"+o.id,{method:"DELETE"})).headers.set("Accept",m),[4,f(s)];case 5:return i.sent(),[2,{reaction:o,deleted:!0}];}})})}function Q(n){return f(h("markdown",{method:"POST",body:JSON.stringify({text:n,mode:"gfm",context:i+"/"+j})})).then(function(n){return n.text()})}b.readRelNext=ha,b.loadJsonFile=J,b.loadIssueByTerm=K,b.loadIssueByNumber=L,b.loadCommentsPage=w,b.loadUser=M,b.createIssue=N,b.postComment=O,b.toggleReaction=P,b.renderMarkdown=Q;var n=[1e3,"second",6e4,"minute",36e5,"hour",864e5,"day",6048e5,"week",23328e5,"month"],ja={month:"short",day:"numeric",year:"numeric"};function ka(r,e){var $=r-e.getTime();if($<5e3)return"just now";for(var o=0;o+2<n.length&&1.1*$>n[o+2];)o+=2;var t=n[o],a=n[o+1],h=Math.round($/t);return h>3&&o===n.length-2?"on "+e.toLocaleDateString(void 0,ja):1===h?("hour"===a?"an":"a")+" "+a+" ago":h+" "+a+"s ago"}var la;function ma(e){la=e,addEventListener("resize",d),addEventListener("load",d)}var na=-1;function oa(){var e=document.body.scrollHeight;if(e!==na){na=e;var $={type:"resize",height:e};parent.postMessage($,la)}}var pa=0;function d(){var e=Date.now();e-pa>50&&(pa=e,setTimeout(oa,50))}var e={};var qa=e&&e.__awaiter||function(e,t,n,r){return new(n||(n=Promise))(function(a,o){function i(e){try{c(r.next(e))}catch(t){o(t)}}function s(e){try{c(r.throw(e))}catch(t){o(t)}}function c(e){var t;e.done?a(e.value):(t=e.value,t instanceof n?t:new n(function(e){e(t)})).then(i,s)}c((r=r.apply(e,t||[])).next())})},ra=e&&e.__generator||function(e,t){var n,r,a,o,i={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return o={next:s(0),throw:s(1),return:s(2)},"function"==typeof Symbol&&(o[Symbol.iterator]=function(){return this}),o;function s(o){return function(s){return function(o){if(n)throw new TypeError("Generator is already executing.");for(;i;)try{if(n=1,r&&(a=2&o[0]?r.return:o[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,o[1])).done)return a;switch(r=0,a&&(o=[2&o[0],a.value]),o[0]){case 0:case 1:a=o;break;case 4:return i.label++,{value:o[1],done:!1};case 5:i.label++,r=o[1],o=[0];continue;case 7:o=i.ops.pop(),i.trys.pop();continue;default:if(!(a=(a=i.trys).length>0&&a[a.length-1])&&(6===o[0]||2===o[0])){i=0;continue}if(3===o[0]&&(!a||o[1]>a[0]&&o[1]<a[3])){i.label=o[1];break}if(6===o[0]&&i.label<a[1]){i.label=a[1],a=o;break}if(a&&i.label<a[2]){i.label=a[2],i.ops.push(o);break}a[2]&&i.ops.pop(),i.trys.pop();continue;}o=t.call(e,i)}catch(s){o=[6,s],r=0}finally{n=a=0}if(5&o[0])throw o[1];return{value:o[0]?o[1]:void 0,done:!0}}([o,s])}}},s={"+1":"Thumbs Up","-1":"Thumbs Down",laugh:"Laugh",hooray:"Hooray",confused:"Confused",heart:"Heart",rocket:"Rocket",eyes:"Eyes"};e.reactionNames=s;var R={"+1":"\uD83D\uDC4D","-1":"\uD83D\uDC4E",laugh:"\uFE0F\uD83D\uDE02",hooray:"\uFE0F\uD83C\uDF89",confused:"\uD83D\uDE15",heart:"\u2764\uFE0F",rocket:"\uD83D\uDE80",eyes:"\uD83D\uDC40"};function z(e,t,n,r){return"\n  <button\n    reaction\n    type=\"submit\"\n    action=\"javascript:\"\n    formaction=\""+e+"\"\n    class=\"btn BtnGroup-item btn-outline reaction-button\"\n    value=\""+t+"\"\n    aria-label=\"Toggle "+s[t]+" reaction\"\n    reaction-count=\""+r+"\"\n    "+(n?"disabled":"")+">\n    "+R[t]+"\n  </button>"}function S(e){var t=this;addEventListener("click",function(n){return qa(t,void 0,void 0,function(){var t,r,a,o,i,s,c,f,l,$,u;return ra(this,function(p){switch(p.label){case 0:return(t=n.target instanceof HTMLElement&&n.target.closest("button"))&&t.hasAttribute("reaction")?(n.preventDefault(),e?(t.disabled=!0,(r=t.closest("details"))&&(r.open=!1),a=t.formAction,o=t.value,[4,P(a,o)]):[2]):[2];case 1:for(i=p.sent().deleted,s="button[reaction][formaction=\""+a+"\"][value=\""+o+"\"],[reaction-count][reaction-url=\""+a+"\"]",c=Array.from(document.querySelectorAll(s)),f=i?-1:1,l=0,$=c;l<$.length;l++)(u=$[l]).setAttribute("reaction-count",(parseInt(u.getAttribute("reaction-count"),10)+f).toString());return t.disabled=!1,d(),[2];}})})},!0)}function A(e,t){var n=function(t){return z(e,t,!1,0)+"<span class=\"reaction-name\" aria-hidden=\"true\">"+s[t]+"</span>"};return"\n  <details class=\"details-overlay details-popover reactions-popover\">\n    <summary "+("center"===t?"tabindex=\"-1\"":"")+">"+T+"</summary>\n    <div class=\"Popover\" style=\""+("center"===t?"left: 50%;transform: translateX(-50%)":"right:6px")+"\">\n      <form class=\"Popover-message "+("center"===t?"":"Popover-message--top-right")+" box-shadow-large\" action=\"javascript:\">\n        <span class=\"reaction-name\">Pick your reaction</span>\n        <div class=\"BtnGroup\">\n          "+v.slice(0,4).map(n).join("")+"\n        </div>\n        <div class=\"BtnGroup\">\n          "+v.slice(4).map(n).join("")+"\n        </div>\n      </form>\n    </div>\n  </details>"}function B(e){return"\n  <details class=\"details-overlay details-popover reactions-popover\">\n    <summary aria-label=\"Reactions Menu\">"+T+"</summary>\n    <div class=\"Popover\" style=\""+("center"===e?"left: 50%;transform: translateX(-50%)":"right:6px")+"\">\n      <div class=\"Popover-message "+("center"===e?"":"Popover-message--top-right")+" box-shadow-large\" style=\"padding: 16px\">\n        <span><a href=\""+r(a.url)+"\" target=\"_top\">Sign in</a> to add your reaction.</span>\n      </div>\n    </div>\n  </details>"}e.reactionEmoji=R,e.getReactionHtml=z,e.enableReactions=S,e.getReactionsMenuHtml=A,e.getSignInToReactMenuHtml=B;var T="<svg class=\"octicon\" style=\"margin-right:3px\" viewBox=\"0 0 7 16\" version=\"1.1\" width=\"7\" height=\"16\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M4 4H3v3H0v1h3v3h1V8h3V7H4V4z\"></path></svg><svg class=\"octicon\" viewBox=\"0 0 16 16\" version=\"1.1\" width=\"16\" height=\"16\" aria-hidden=\"true\"><path fill-rule=\"evenodd\" d=\"M8 0C3.58 0 0 3.58 0 8s3.58 8 8 8 8-3.58 8-8-3.58-8-8-8zm4.81 12.81a6.72 6.72 0 0 1-2.17 1.45c-.83.36-1.72.53-2.64.53-.92 0-1.81-.17-2.64-.53-.81-.34-1.55-.83-2.17-1.45a6.773 6.773 0 0 1-1.45-2.17A6.59 6.59 0 0 1 1.21 8c0-.92.17-1.81.53-2.64.34-.81.83-1.55 1.45-2.17.62-.62 1.36-1.11 2.17-1.45A6.59 6.59 0 0 1 8 1.21c.92 0 1.81.17 2.64.53.81.34 1.55.83 2.17 1.45.62.62 1.11 1.36 1.45 2.17.36.83.53 1.72.53 2.64 0 .92-.17 1.81-.53 2.64-.34.81-.83 1.55-1.45 2.17zM4 6.8v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2H5.2C4.53 8 4 7.47 4 6.8zm5 0v-.59c0-.66.53-1.19 1.2-1.19h.59c.66 0 1.19.53 1.19 1.19v.59c0 .67-.53 1.2-1.19 1.2h-.59C9.53 8 9 7.47 9 6.8zm4 3.2c-.72 1.88-2.91 3-5 3s-4.28-1.13-5-3c-.14-.39.23-1 .66-1h8.59c.41 0 .89.61.75 1z\"></path></svg>";var sa="?v=3&s=88",ta={COLLABORATOR:"Collaborator",CONTRIBUTOR:"Contributor",MEMBER:"Member",OWNER:"Owner",FIRST_TIME_CONTRIBUTOR:"First time contributor",FIRST_TIMER:"First timer",NONE:""},ua=function(){function e(e,r,t){this.comment=e,this.currentUser=r;var n=e.user,o=e.html_url,a=e.created_at,i=e.body_html,s=e.author_association,c=e.reactions;this.element=document.createElement("article"),this.element.classList.add("timeline-comment"),n.login===r&&this.element.classList.add("current-user");var l=ta[s],m=v.reduce(function(e,r){return e+c[r]},0),$="",u="";t||(r?($=A(e.reactions.url,"right"),u=A(e.reactions.url,"center")):($=B("right"),u=B("center"))),this.element.innerHTML="\n      <a class=\"avatar\" href=\""+n.html_url+"\" target=\"_blank\" tabindex=\"-1\">\n        <img alt=\"@"+n.login+"\" height=\"44\" width=\"44\"\n              src=\""+n.avatar_url+sa+"\">\n      </a>\n      <div class=\"comment\">\n        <header class=\"comment-header\">\n          <span class=\"comment-meta\">\n            <a class=\"text-link\" href=\""+n.html_url+"\" target=\"_blank\"><strong>"+n.login+"</strong></a>\n            commented\n            <a class=\"text-link\" href=\""+o+"\" target=\"_blank\">"+ka(Date.now(),new Date(a))+"</a>\n          </span>\n          <div class=\"comment-actions\">\n            "+(l?"<span class=\"author-association-badge\">"+l+"</span>":"")+"\n            "+$+"\n          </div>\n        </header>\n        <div class=\"markdown-body markdown-body-scrollable\">\n          "+i+"\n        </div>\n        <div class=\"comment-footer\" reaction-count=\""+m+"\" reaction-url=\""+c.url+"\">\n          <form class=\"reaction-list BtnGroup\" action=\"javascript:\">\n            "+v.map(function(e){return z(c.url,e,!r||t,c[e])}).join("")+"\n          </form>\n          "+u+"\n        </div>\n      </div>";var d=this.element.querySelector(".markdown-body"),p=d.querySelector(".email-hidden-toggle a");if(p){var h=d.querySelector(".email-hidden-reply");p.onclick=function(e){e.preventDefault(),h.classList.toggle("expanded")}}U(d)}return e.prototype.setCurrentUser=function(e){this.currentUser!==e&&(this.currentUser=e,this.comment.user.login===this.currentUser?this.element.classList.add("current-user"):this.element.classList.remove("current-user"))},e}();function U(e){Array.from(e.querySelectorAll(":not(.email-hidden-toggle) > a")).forEach(function(e){e.target="_top",e.rel="noopener noreferrer"}),Array.from(e.querySelectorAll("img")).forEach(function(e){return e.onload=d}),Array.from(e.querySelectorAll("a.commit-tease-sha")).forEach(function(e){return e.href="https://github.com"+e.pathname})}var va=function(){function e(e,t){this.user=e,this.issue=t,this.timeline=[],this.count=0,this.element=document.createElement("main"),this.element.classList.add("timeline"),this.element.innerHTML="\n      <h1 class=\"timeline-header\">\n        <a class=\"text-link\" target=\"_blank\"></a>\n      </h1>",this.countAnchor=this.element.firstElementChild.firstElementChild,this.marker=document.createComment("marker"),this.element.appendChild(this.marker),this.setIssue(this.issue),this.renderCount()}return e.prototype.setUser=function(e){this.user=e;for(var t=e?e.login:null,n=0;n<this.timeline.length;n++)this.timeline[n].setCurrentUser(t);d()},e.prototype.setIssue=function(e){this.issue=e,e?(this.count=e.comments,this.countAnchor.href=e.html_url,this.renderCount()):this.countAnchor.removeAttribute("href")},e.prototype.insertComment=function(e,t){var n=new ua(e,this.user?this.user.login:null,this.issue.locked),i=this.timeline.findIndex(function(t){return t.comment.id>=e.id});if(-1===i)this.timeline.push(n),this.element.insertBefore(n.element,this.marker);else{var s=this.timeline[i],r=s.comment.id===e.id;this.element.insertBefore(n.element,s.element),this.timeline.splice(i,r?1:0,n),r&&s.element.remove()}t&&(this.count++,this.renderCount()),d()},e.prototype.insertPageLoader=function(e,t,n){var i=this.timeline.find(function(t){return t.comment.id>=e.id}).element;i.insertAdjacentHTML("afterend","\n      <div class=\"page-loader\">\n        <div class=\"zigzag\"></div>\n        <button type=\"button\" class=\"btn btn-outline btn-large\">\n          "+t+" hidden items<br/>\n          <span>Load more...</span>\n        </button>\n      </div>\n    ");var s=i.nextElementSibling,r=s.lastElementChild,o=r.lastElementChild;return r.onclick=n,{setBusy:function(){o.textContent="Loading...",r.disabled=!0},remove:function(){r.onclick=null,s.remove()}}},e.prototype.renderCount=function(){this.countAnchor.textContent=this.count+" Comment"+(1===this.count?"":"s")},e}();var l={};var V;function W(){return V||(V=J("utterances.json").then(function(r){return Array.isArray(r.origins)||(r.origins=[]),r},function(){return{origins:[a.origin]}})),V}var X=l&&l.__assign||function(){return(X=Object.assign||function(t){for(var e,n=1,r=arguments.length;n<r;n++)for(var a in e=arguments[n])Object.prototype.hasOwnProperty.call(e,a)&&(t[a]=e[a]);return t}).apply(this,arguments)},wa=l&&l.__awaiter||function(t,e,n,r){return new(n||(n=Promise))(function(a,i){function s(t){try{l(r.next(t))}catch(e){i(e)}}function o(t){try{l(r.throw(t))}catch(e){i(e)}}function l(t){var e;t.done?a(t.value):(e=t.value,e instanceof n?e:new n(function(t){t(e)})).then(s,o)}l((r=r.apply(t,e||[])).next())})},xa=l&&l.__generator||function(t,e){var n,r,a,i,s={label:0,sent:function(){if(1&a[0])throw a[1];return a[1]},trys:[],ops:[]};return i={next:o(0),throw:o(1),return:o(2)},"function"==typeof Symbol&&(i[Symbol.iterator]=function(){return this}),i;function o(i){return function(o){return function(i){if(n)throw new TypeError("Generator is already executing.");for(;s;)try{if(n=1,r&&(a=2&i[0]?r.return:i[0]?r.throw||((a=r.return)&&a.call(r),0):r.next)&&!(a=a.call(r,i[1])).done)return a;switch(r=0,a&&(i=[2&i[0],a.value]),i[0]){case 0:case 1:a=i;break;case 4:return s.label++,{value:i[1],done:!1};case 5:s.label++,r=i[1],i=[0];continue;case 7:i=s.ops.pop(),s.trys.pop();continue;default:if(!(a=(a=s.trys).length>0&&a[a.length-1])&&(6===i[0]||2===i[0])){s=0;continue}if(3===i[0]&&(!a||i[1]>a[0]&&i[1]<a[3])){s.label=i[1];break}if(6===i[0]&&s.label<a[1]){s.label=a[1],a=i;break}if(a&&s.label<a[2]){s.label=a[2],s.ops.push(i);break}a[2]&&s.ops.pop(),s.trys.pop();continue;}i=e.call(t,s)}catch(o){i=[6,o],r=0}finally{n=a=0}if(5&i[0])throw i[1];return{value:i[0]?i[1]:void 0,done:!0}}([i,o])}}},ya="<svg xmlns=\"http://www.w3.org/2000/svg\" viewBox=\"0 0 14 16\" version=\"1.1\"><path fill=\"rgb(179,179,179)\" fill-rule=\"evenodd\" d=\"M8 10.5L9 14H5l1-3.5L5.25 9h3.5L8 10.5zM10 6H4L2 7h10l-2-1zM9 2L7 3 5 2 4 5h6L9 2zm4.03 7.75L10 9l1 2-2 3h3.22c.45 0 .86-.31.97-.75l.56-2.28c.14-.53-.19-1.08-.72-1.22zM4 9l-3.03.75c-.53.14-.86.69-.72 1.22l.56 2.28c.11.44.52.75.97.75H5l-2-3 1-2z\"></path></svg>",za="data:image/svg+xml;base64,"+btoa(ya),u="Nothing to preview",Y=function(){function t(t,e){var n=this;this.user=t,this.submit=e,this.submitting=!1,this.renderTimeout=0,this.handleInput=function(){W();var t=n.textarea.value,e=/^\s*$/.test(t);n.submitButton.disabled=e,n.textarea.scrollHeight<450&&n.textarea.offsetHeight<n.textarea.scrollHeight&&(n.textarea.style.height=n.textarea.scrollHeight+"px",d()),clearTimeout(n.renderTimeout),e?n.preview.textContent=u:(n.preview.textContent="Loading preview...",n.renderTimeout=setTimeout(function(){return Q(t).then(function(t){return n.preview.innerHTML=t}).then(function(){return U(n.preview)}).then(d)},500))},this.handleSubmit=function(t){return wa(n,void 0,void 0,function(){return xa(this,function(e){switch(e.label){case 0:return t.preventDefault(),this.submitting?[2]:(this.submitting=!0,this.textarea.disabled=!0,this.submitButton.disabled=!0,[4,this.submit(this.textarea.value).catch(function(){return 0})]);case 1:return e.sent(),this.submitting=!1,this.textarea.disabled=!this.user,this.textarea.value="",this.submitButton.disabled=!1,this.handleClick(X(X({},t),{target:this.form.querySelector(".tabnav-tab.tab-write")})),this.preview.textContent=u,[2];}})})},this.handleClick=function(t){var e=t.target;if(e instanceof HTMLButtonElement&&e.classList.contains("tabnav-tab")&&"true"!==e.getAttribute("aria-selected")){n.form.querySelector(".tabnav-tab[aria-selected=\"true\"]").setAttribute("aria-selected","false"),e.setAttribute("aria-selected","true");var r=e.classList.contains("tab-preview");n.textarea.style.display=r?"none":"",n.preview.style.display=r?"":"none",d()}},this.handleKeyDown=function(t){var e=t.which,r=t.ctrlKey;13===e&&r&&!n.submitButton.disabled&&n.form.dispatchEvent(new CustomEvent("submit"))},this.element=document.createElement("article"),this.element.classList.add("timeline-comment"),this.element.innerHTML="\n      <a class=\"avatar\" target=\"_blank\" tabindex=\"-1\">\n        <img height=\"44\" width=\"44\">\n      </a>\n      <form class=\"comment\" accept-charset=\"UTF-8\" action=\"javascript:\">\n        <header class=\"new-comment-header tabnav\">\n          <div class=\"tabnav-tabs\" role=\"tablist\">\n            <button type=\"button\" class=\"tabnav-tab tab-write\"\n                    role=\"tab\" aria-selected=\"true\">\n              Write\n            </button>\n            <button type=\"button\" class=\"tabnav-tab tab-preview\"\n                    role=\"tab\">\n              Preview\n            </button>\n          </div>\n        </header>\n        <div class=\"comment-body\">\n          <textarea class=\"form-control\" placeholder=\"Leave a comment\" aria-label=\"comment\"></textarea>\n          <div class=\"markdown-body\" style=\"display: none\">\n            "+u+"\n          </div>\n        </div>\n        <footer class=\"new-comment-footer\">\n          <a class=\"text-link markdown-info\" tabindex=\"-1\" target=\"_blank\"\n             href=\"https://guides.github.com/features/mastering-markdown/\">\n            <svg class=\"octicon v-align-bottom\" viewBox=\"0 0 16 16\" version=\"1.1\"\n              width=\"16\" height=\"16\" aria-hidden=\"true\">\n              <path fill-rule=\"evenodd\" d=\"M14.85 3H1.15C.52 3 0 3.52 0 4.15v7.69C0 12.48.52 13 1.15\n                13h13.69c.64 0 1.15-.52 1.15-1.15v-7.7C16 3.52 15.48 3 14.85 3zM9 11H7V8L5.5 9.92 4\n                8v3H2V5h2l1.5 2L7 5h2v6zm2.99.5L9.5 8H11V5h2v3h1.5l-2.51 3.5z\">\n              </path>\n            </svg>\n            Styling with Markdown is supported\n          </a>\n          <button class=\"btn btn-primary\" type=\"submit\">Comment</button>\n          <a class=\"btn btn-primary\" href=\""+r(a.url)+"\" target=\"_top\">Sign in to comment</a>\n        </footer>\n      </form>",this.avatarAnchor=this.element.firstElementChild,this.avatar=this.avatarAnchor.firstElementChild,this.form=this.avatarAnchor.nextElementSibling,this.textarea=this.form.firstElementChild.nextElementSibling.firstElementChild,this.preview=this.form.firstElementChild.nextElementSibling.lastElementChild,this.signInAnchor=this.form.lastElementChild.lastElementChild,this.submitButton=this.signInAnchor.previousElementSibling,this.setUser(t),this.submitButton.disabled=!0,this.textarea.addEventListener("input",this.handleInput),this.form.addEventListener("submit",this.handleSubmit),this.form.addEventListener("click",this.handleClick),this.form.addEventListener("keydown",this.handleKeyDown),Aa(this.textarea)}return t.prototype.setUser=function(t){this.user=t,this.submitButton.hidden=!t,this.signInAnchor.hidden=!!t,t?(this.avatarAnchor.href=t.html_url,this.avatar.alt="@"+t.login,this.avatar.src=t.avatar_url+"?v=3&s=88",this.textarea.disabled=!1,this.textarea.placeholder="Leave a comment"):(this.avatarAnchor.removeAttribute("href"),this.avatar.alt="@anonymous",this.avatar.src=za,this.textarea.disabled=!0,this.textarea.placeholder="Sign in to comment")},t.prototype.clear=function(){this.textarea.value=""},t}();function Aa(t){var e=function t(){removeEventListener("mousemove",d),removeEventListener("mouseup",t)};t.addEventListener("mousedown",function(){addEventListener("mousemove",d),addEventListener("mouseup",e)})}l.NewCommentComponent=Y;function Ba(e,t){return new Promise(function(s){var n=document.createElement("link");n.rel="stylesheet",n.setAttribute("crossorigin","anonymous"),n.onload=s,n.href="/utterances/stylesheets/themes/"+e+"/utterances.css",document.head.appendChild(n),addEventListener("message",function(e){e.origin===t&&"set-theme"===e.data.type&&(n.href="/utterances/stylesheets/themes/"+e.data.theme+"/utterances.css")})})}var x=g&&g.__awaiter||function(e,r,t,n){return new(t||(t=Promise))(function(o,s){function i(e){try{a(n.next(e))}catch(r){s(r)}}function u(e){try{a(n.throw(e))}catch(r){s(r)}}function a(e){var r;e.done?o(e.value):(r=e.value,r instanceof t?r:new t(function(e){e(r)})).then(i,u)}a((n=n.apply(e,r||[])).next())})},y=g&&g.__generator||function(e,r){var t,n,o,s,i={label:0,sent:function(){if(1&o[0])throw o[1];return o[1]},trys:[],ops:[]};return s={next:u(0),throw:u(1),return:u(2)},"function"==typeof Symbol&&(s[Symbol.iterator]=function(){return this}),s;function u(s){return function(u){return function(s){if(t)throw new TypeError("Generator is already executing.");for(;i;)try{if(t=1,n&&(o=2&s[0]?n.return:s[0]?n.throw||((o=n.return)&&o.call(n),0):n.next)&&!(o=o.call(n,s[1])).done)return o;switch(n=0,o&&(s=[2&s[0],o.value]),s[0]){case 0:case 1:o=s;break;case 4:return i.label++,{value:s[1],done:!1};case 5:i.label++,n=s[1],s=[0];continue;case 7:s=i.ops.pop(),i.trys.pop();continue;default:if(!(o=(o=i.trys).length>0&&o[o.length-1])&&(6===s[0]||2===s[0])){i=0;continue}if(3===s[0]&&(!o||s[1]>o[0]&&s[1]<o[3])){i.label=s[1];break}if(6===s[0]&&i.label<o[1]){i.label=o[1],o=s;break}if(o&&i.label<o[2]){i.label=o[2],i.ops.push(s);break}o[2]&&i.ops.pop(),i.trys.pop();continue;}s=r.call(e,i)}catch(u){s=[6,u],n=0}finally{t=o=0}if(5&s[0])throw s[1];return{value:s[0]?s[1]:void 0,done:!0}}([s,u])}}};function Ca(){return null!==a.issueNumber?L(a.issueNumber):K(a.issueTerm)}function Da(){return x(this,void 0,void 0,function(){var e,r,t,n,o,s,i=this;return y(this,function(u){switch(u.label){case 0:return[4,D()];case 1:return u.sent(),[4,Promise.all([Ca(),M(),Ba(a.theme,a.origin)])];case 2:return e=u.sent(),r=e[0],t=e[1],ma(a.origin),n=new va(t,r),document.body.appendChild(n.element),r&&r.comments>0&&Ea(r,n),d(),r&&r.locked?[2]:(S(!!t),o=function(e){return x(i,void 0,void 0,function(){var t;return y(this,function(o){switch(o.label){case 0:return[4,Z()];case 1:return o.sent(),r?[3,3]:[4,N(a.issueTerm,a.url,a.title,a.description||"",a.label)];case 2:r=o.sent(),n.setIssue(r),o.label=3;case 3:return[4,O(r.number,e)];case 4:return t=o.sent(),n.insertComment(t,!0),s.clear(),[2];}})})},s=new Y(t,o),n.element.appendChild(s.element),[2]);}})})}function Ea(e,r){return x(this,void 0,void 0,function(){var t,n,o,s,i,u,a,$,f,p,c=this;return y(this,function(l){switch(l.label){case 0:return t=function(e){for(var t=0,n=e;t<n.length;t++){var o=n[t];r.insertComment(o,!1)}},n=Math.ceil(e.comments/q),o=[w(e.number,1)],n>1&&o.push(w(e.number,n)),n>2&&e.comments%q<3&&o.push(w(e.number,n-1)),[4,Promise.all(o)];case 1:for(s=l.sent(),i=0,u=s;i<u.length;i++)a=u[i],t(a);return $=n-o.length,f=2,(p=function(n){if(0!==$)var o=n.pop(),s=r.insertPageLoader(o,$*q,function(){return x(c,void 0,void 0,function(){var r;return y(this,function(n){switch(n.label){case 0:return s.setBusy(),[4,w(e.number,f)];case 1:return r=n.sent(),s.remove(),t(r),$--,f++,p(r),[2];}})})})})(s[0]),[2];}})})}function Z(){return x(this,void 0,void 0,function(){var e,r,t,n;return y(this,function(o){switch(o.label){case 0:return[4,W()];case 1:if(e=o.sent().origins,r=a.origin,t=a.owner,n=a.repo,-1!==e.indexOf(r))return[2];throw document.querySelector(".timeline").lastElementChild.insertAdjacentHTML("beforebegin","\n  <div class=\"flash flash-error flash-not-installed\">\n    Error: <code>"+r+"</code> is not permitted to post to <code>"+t+"/"+n+"</code>.\n    Confirm this is the correct repo for this site's comments. If you own this repo,\n    <a href=\"https://github.com/"+t+"/"+n+"/edit/master/utterances.json\" target=\"_top\">\n      <strong>update the utterances.json</strong>\n    </a>\n    to include <code>"+r+"</code> in the list of origins.<br/><br/>\n    Suggested configuration:<br/>\n    <pre><code>"+JSON.stringify({origins:[r]},null,2)+"</code></pre>\n  </div>"),d(),new Error("Origin not permitted.");}})})}H(a),Da(),addEventListener("not-installed",function e(){removeEventListener("not-installed",e),document.querySelector(".timeline").insertAdjacentHTML("afterbegin","\n  <div class=\"flash flash-error\">\n    Error: utterances is not installed on <code>"+a.owner+"/"+a.repo+"</code>.\n    If you own this repo,\n    <a href=\"https://github.com/apps/utterances\" target=\"_top\"><strong>install the app</strong></a>.\n    Read more about this change in\n    <a href=\"https://github.com/utterance/utterances/pull/25\" target=\"_top\">the PR</a>.\n  </div>"),d()}),g.assertOrigin=Z;if(typeof exports==="object"&&typeof module!=="undefined"){module.exports=g}else if(typeof define==="function"&&define.amd){define(function(){return g})}o.__esModule=true;g.__esModule=true;return{"ieWq":o,"fHsu":g};});