/*! For license information please see 72416804.d9ed4884.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[5843],{73707:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>d,frontMatter:()=>a,metadata:()=>p,toc:()=>l});var s=t(85893),n=t(11151);const a={sidebar_label:"Page.$$"},i="Page.$$() method",p={id:"api/puppeteer.page.__",title:"Page.$$() method",description:"Finds elements on the page that match the selector. If no elements match the selector, the return value resolves to [].",source:"@site/versioned_docs/version-22.13.1/api/puppeteer.page.__.md",sourceDirName:"api",slug:"/api/puppeteer.page.__",permalink:"/api/puppeteer.page.__",draft:!1,unlisted:!1,tags:[],version:"22.13.1",frontMatter:{sidebar_label:"Page.$$"},sidebar:"api",previous:{title:"Page.$",permalink:"/api/puppeteer.page._"},next:{title:"Page.$$eval",permalink:"/api/puppeteer.page.__eval"}},o={},l=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function c(e){const r={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,n.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(r.h1,{id:"page-method",children:"Page.$$() method"}),"\n",(0,s.jsxs)(r.p,{children:["Finds elements on the page that match the selector. If no elements match the selector, the return value resolves to ",(0,s.jsx)(r.code,{children:"[]"}),"."]}),"\n",(0,s.jsx)(r.h4,{id:"signature",children:"Signature:"}),"\n",(0,s.jsx)(r.pre,{children:(0,s.jsx)(r.code,{className:"language-typescript",children:"class Page {\n  $$<Selector extends string>(\n    selector: Selector,\n    options?: QueryOptions\n  ): Promise<Array<ElementHandle<NodeFor<Selector>>>>;\n}\n"})}),"\n",(0,s.jsx)(r.h2,{id:"parameters",children:"Parameters"}),"\n",(0,s.jsxs)("table",{children:[(0,s.jsx)("thead",{children:(0,s.jsxs)("tr",{children:[(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Parameter"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Type"})}),(0,s.jsx)("th",{children:(0,s.jsx)(r.p,{children:"Description"})})]})}),(0,s.jsxs)("tbody",{children:[(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"selector"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"Selector"})}),(0,s.jsx)("td",{children:(0,s.jsxs)(r.p,{children:[(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query page for. ",(0,s.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,s.jsx)(r.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]}),(0,s.jsxs)("tr",{children:[(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:"options"})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.a,{href:"/api/puppeteer.queryoptions",children:"QueryOptions"})})}),(0,s.jsx)("td",{children:(0,s.jsx)(r.p,{children:(0,s.jsx)(r.em,{children:"(Optional)"})})})]})]})]}),"\n",(0,s.jsx)(r.p,{children:(0,s.jsx)(r.strong,{children:"Returns:"})}),"\n",(0,s.jsxs)(r.p,{children:["Promise<Array<",(0,s.jsx)(r.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,s.jsx)(r.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>>>>"]}),"\n",(0,s.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,s.jsxs)(r.p,{children:["Shortcut for ",(0,s.jsx)(r.a,{href:"/api/puppeteer.frame.__",children:"Page.mainFrame().$$(selector)"}),"."]})]})}function d(e={}){const{wrapper:r}={...(0,n.a)(),...e.components};return r?(0,s.jsx)(r,{...e,children:(0,s.jsx)(c,{...e})}):c(e)}},75251:(e,r,t)=>{var s=t(67294),n=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,p=s.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function l(e,r,t){var s,a={},l=null,c=null;for(s in void 0!==t&&(l=""+t),void 0!==r.key&&(l=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,s)&&!o.hasOwnProperty(s)&&(a[s]=r[s]);if(e&&e.defaultProps)for(s in r=e.defaultProps)void 0===a[s]&&(a[s]=r[s]);return{$$typeof:n,type:e,key:l,ref:c,props:a,_owner:p.current}}r.Fragment=a,r.jsx=l,r.jsxs=l},85893:(e,r,t)=>{e.exports=t(75251)},11151:(e,r,t)=>{t.d(r,{Z:()=>p,a:()=>i});var s=t(67294);const n={},a=s.createContext(n);function i(e){const r=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function p(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:i(e.components),s.createElement(a.Provider,{value:r},e.children)}}}]);