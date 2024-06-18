/*! For license information please see fb923641.6f02008b.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3093],{58167:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>i,metadata:()=>p,toc:()=>c});var r=n(85893),s=n(11151);const i={sidebar_label:"Page.setRequestInterception"},a="Page.setRequestInterception() method",p={id:"api/puppeteer.page.setrequestinterception",title:"Page.setRequestInterception() method",description:"Activating request interception enables HTTPRequest.abort(), HTTPRequest.continue() and HTTPRequest.respond() methods. This provides the capability to modify network requests that are made by a page.",source:"@site/versioned_docs/version-22.11.2/api/puppeteer.page.setrequestinterception.md",sourceDirName:"api",slug:"/api/puppeteer.page.setrequestinterception",permalink:"/api/puppeteer.page.setrequestinterception",draft:!1,unlisted:!1,tags:[],version:"22.11.2",frontMatter:{sidebar_label:"Page.setRequestInterception"},sidebar:"api",previous:{title:"Page.setOfflineMode",permalink:"/api/puppeteer.page.setofflinemode"},next:{title:"Page.setUserAgent",permalink:"/api/puppeteer.page.setuseragent"}},o={},c=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Example",id:"example",level:2}];function l(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"pagesetrequestinterception-method",children:"Page.setRequestInterception() method"}),"\n",(0,r.jsxs)(t.p,{children:["Activating request interception enables ",(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.abort",children:"HTTPRequest.abort()"}),", ",(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.continue",children:"HTTPRequest.continue()"})," and ",(0,r.jsx)(t.a,{href:"/api/puppeteer.httprequest.respond",children:"HTTPRequest.respond()"})," methods. This provides the capability to modify network requests that are made by a page."]}),"\n",(0,r.jsx)(t.p,{children:"Once request interception is enabled, every request will stall unless it's continued, responded or aborted; or completed using the browser cache."}),"\n",(0,r.jsxs)(t.p,{children:["See the ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/network-interception",children:"Request interception guide"})," for more details."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  abstract setRequestInterception(value: boolean): Promise<void>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"value"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"boolean"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Whether to enable request interception."})})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,r.jsx)(t.h2,{id:"example",children:"Example"}),"\n",(0,r.jsx)(t.p,{children:"An example of a na\xefve request interceptor that aborts all image requests:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\n(async () => {\n  const browser = await puppeteer.launch();\n  const page = await browser.newPage();\n  await page.setRequestInterception(true);\n  page.on('request', interceptedRequest => {\n    if (\n      interceptedRequest.url().endsWith('.png') ||\n      interceptedRequest.url().endsWith('.jpg')\n    )\n      interceptedRequest.abort();\n    else interceptedRequest.continue();\n  });\n  await page.goto('https://example.com');\n  await browser.close();\n})();\n"})})]})}function d(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},75251:(e,t,n)=>{var r=n(67294),s=Symbol.for("react.element"),i=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,p=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,i={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)a.call(t,r)&&!o.hasOwnProperty(r)&&(i[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===i[r]&&(i[r]=t[r]);return{$$typeof:s,type:e,key:c,ref:l,props:i,_owner:p.current}}t.Fragment=i,t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>p,a:()=>a});var r=n(67294);const s={},i=r.createContext(s);function a(e){const t=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function p(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(i.Provider,{value:t},e.children)}}}]);