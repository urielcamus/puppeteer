/*! For license information please see 2e1ef6ce.275422e1.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[60226],{68680:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>a,default:()=>c,frontMatter:()=>l,metadata:()=>i,toc:()=>o});var r=n(85893),s=n(11151);const l={sidebar_label:"ElementHandle.$"},a="ElementHandle.$() method",i={id:"api/puppeteer.elementhandle._",title:"ElementHandle.$() method",description:"Queries the current element for an element matching the given selector.",source:"@site/versioned_docs/version-23.2.0/api/puppeteer.elementhandle._.md",sourceDirName:"api",slug:"/api/puppeteer.elementhandle._",permalink:"/api/puppeteer.elementhandle._",draft:!1,unlisted:!1,tags:[],version:"23.2.0",frontMatter:{sidebar_label:"ElementHandle.$"},sidebar:"api",previous:{title:"ElementHandle",permalink:"/api/puppeteer.elementhandle"},next:{title:"ElementHandle.$$",permalink:"/api/puppeteer.elementhandle.__"}},d={},o=[{value:"Signature",id:"signature",level:3},{value:"Parameters",id:"parameters",level:2}];function p(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"elementhandle-method",children:"ElementHandle.$() method"})}),"\n",(0,r.jsx)(t.p,{children:"Queries the current element for an element matching the given selector."}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class ElementHandle {\n  $<Selector extends string>(\n    selector: Selector\n  ): Promise<ElementHandle<NodeFor<Selector>> | null>;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsx)("tbody",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"selector"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Selector"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#selectors",children:"selector"})," to query the page for. ",(0,r.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/Web/CSS/CSS_Selectors",children:"CSS selectors"})," can be passed as-is and a ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#non-css-selectors",children:"Puppeteer-specific selector syntax"})," allows quering by ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#text-selectors--p-text",children:"text"}),", ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#aria-selectors--p-aria",children:"a11y role and name"}),", and ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#xpath-selectors--p-xpath",children:"xpath"})," and ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#querying-elements-in-shadow-dom",children:"combining these queries across shadow roots"}),". Alternatively, you can specify the selector type using a ",(0,r.jsx)(t.a,{href:"https://pptr.dev/guides/page-interactions#prefixed-selector-syntax",children:"prefix"}),"."]})})]})})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsxs)(t.p,{children:["Promise<",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"ElementHandle"}),"<",(0,r.jsx)(t.a,{href:"/api/puppeteer.nodefor",children:"NodeFor"}),"<Selector>> | null>"]}),"\n",(0,r.jsxs)(t.p,{children:["A ",(0,r.jsx)(t.a,{href:"/api/puppeteer.elementhandle",children:"element handle"})," to the first element matching the given selector. Otherwise, ",(0,r.jsx)(t.code,{children:"null"}),"."]})]})}function c(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},75251:(e,t,n)=>{var r=n(67294),s=Symbol.for("react.element"),l=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,d={key:!0,ref:!0,__self:!0,__source:!0};function o(e,t,n){var r,l={},o=null,p=null;for(r in void 0!==n&&(o=""+n),void 0!==t.key&&(o=""+t.key),void 0!==t.ref&&(p=t.ref),t)a.call(t,r)&&!d.hasOwnProperty(r)&&(l[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===l[r]&&(l[r]=t[r]);return{$$typeof:s,type:e,key:o,ref:p,props:l,_owner:i.current}}t.Fragment=l,t.jsx=o,t.jsxs=o},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>i,a:()=>a});var r=n(67294);const s={},l=r.createContext(s);function a(e){const t=r.useContext(l);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function i(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),r.createElement(l.Provider,{value:t},e.children)}}}]);