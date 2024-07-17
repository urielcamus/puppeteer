/*! For license information please see 280ce277.e676ccd4.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[29539],{16059:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>c,frontMatter:()=>r,metadata:()=>o,toc:()=>p});var i=n(85893),a=n(11151);const r={sidebar_label:"Page.setDefaultNavigationTimeout"},s="Page.setDefaultNavigationTimeout() method",o={id:"api/puppeteer.page.setdefaultnavigationtimeout",title:"Page.setDefaultNavigationTimeout() method",description:"This setting will change the default maximum navigation time for the following methods and related shortcuts:",source:"@site/versioned_docs/version-22.13.1/api/puppeteer.page.setdefaultnavigationtimeout.md",sourceDirName:"api",slug:"/api/puppeteer.page.setdefaultnavigationtimeout",permalink:"/api/puppeteer.page.setdefaultnavigationtimeout",draft:!1,unlisted:!1,tags:[],version:"22.13.1",frontMatter:{sidebar_label:"Page.setDefaultNavigationTimeout"},sidebar:"api",previous:{title:"Page.setCookie",permalink:"/api/puppeteer.page.setcookie"},next:{title:"Page.setDefaultTimeout",permalink:"/api/puppeteer.page.setdefaulttimeout"}},l={},p=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function d(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"pagesetdefaultnavigationtimeout-method",children:"Page.setDefaultNavigationTimeout() method"}),"\n",(0,i.jsx)(t.p,{children:"This setting will change the default maximum navigation time for the following methods and related shortcuts:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/api/puppeteer.page.goback",children:"page.goBack(options)"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/api/puppeteer.page.goforward",children:"page.goForward(options)"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/api/puppeteer.page.goto",children:"page.goto(url,options)"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/api/puppeteer.page.reload",children:"page.reload(options)"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/api/puppeteer.page.setcontent",children:"page.setContent(html,options)"})}),"\n"]}),"\n",(0,i.jsxs)(t.li,{children:["\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.a,{href:"/api/puppeteer.page.waitfornavigation",children:"page.waitForNavigation(options)"})}),"\n"]}),"\n"]}),"\n",(0,i.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setDefaultNavigationTimeout(timeout: number): void;\n}\n"})}),"\n",(0,i.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,i.jsxs)("table",{children:[(0,i.jsx)("thead",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Parameter"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Type"})}),(0,i.jsx)("th",{children:(0,i.jsx)(t.p,{children:"Description"})})]})}),(0,i.jsx)("tbody",{children:(0,i.jsxs)("tr",{children:[(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"timeout"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"number"})}),(0,i.jsx)("td",{children:(0,i.jsx)(t.p,{children:"Maximum navigation time in milliseconds."})})]})})]}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,i.jsx)(t.p,{children:"void"})]})}function c(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},75251:(e,t,n)=>{var i=n(67294),a=Symbol.for("react.element"),r=Symbol.for("react.fragment"),s=Object.prototype.hasOwnProperty,o=i.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function p(e,t,n){var i,r={},p=null,d=null;for(i in void 0!==n&&(p=""+n),void 0!==t.key&&(p=""+t.key),void 0!==t.ref&&(d=t.ref),t)s.call(t,i)&&!l.hasOwnProperty(i)&&(r[i]=t[i]);if(e&&e.defaultProps)for(i in t=e.defaultProps)void 0===r[i]&&(r[i]=t[i]);return{$$typeof:a,type:e,key:p,ref:d,props:r,_owner:o.current}}t.Fragment=r,t.jsx=p,t.jsxs=p},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>s});var i=n(67294);const a={},r=i.createContext(a);function s(e){const t=i.useContext(r);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),i.createElement(r.Provider,{value:t},e.children)}}}]);