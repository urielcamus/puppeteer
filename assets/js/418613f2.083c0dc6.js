/*! For license information please see 418613f2.083c0dc6.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[21572],{51093:(e,s,r)=>{r.r(s),r.d(s,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var t=r(74848),n=r(28453);const o={sidebar_label:"ConsoleMessage"},a="ConsoleMessage class",c={id:"api/puppeteer.consolemessage",title:"ConsoleMessage class",description:"ConsoleMessage objects are dispatched by page via the 'console' event.",source:"@site/versioned_docs/version-23.2.2/api/puppeteer.consolemessage.md",sourceDirName:"api",slug:"/api/puppeteer.consolemessage",permalink:"/api/puppeteer.consolemessage",draft:!1,unlisted:!1,tags:[],version:"23.2.2",frontMatter:{sidebar_label:"ConsoleMessage"},sidebar:"api",previous:{title:"Dialog.type",permalink:"/api/puppeteer.dialog.type"},next:{title:"ConsoleMessage.args",permalink:"/api/puppeteer.consolemessage.args"}},l={},i=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}];function d(e){const s={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",...(0,n.R)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(s.header,{children:(0,t.jsx)(s.h1,{id:"consolemessage-class",children:"ConsoleMessage class"})}),"\n",(0,t.jsx)(s.p,{children:"ConsoleMessage objects are dispatched by page via the 'console' event."}),"\n",(0,t.jsx)(s.h3,{id:"signature",children:"Signature"}),"\n",(0,t.jsx)(s.pre,{children:(0,t.jsx)(s.code,{className:"language-typescript",children:"export declare class ConsoleMessage\n"})}),"\n",(0,t.jsx)(s.h2,{id:"remarks",children:"Remarks"}),"\n",(0,t.jsxs)(s.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,t.jsx)(s.code,{children:"ConsoleMessage"})," class."]}),"\n",(0,t.jsx)(s.h2,{id:"methods",children:"Methods"}),"\n",(0,t.jsxs)("table",{children:[(0,t.jsx)("thead",{children:(0,t.jsxs)("tr",{children:[(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Method"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Modifiers"})}),(0,t.jsx)("th",{children:(0,t.jsx)(s.p,{children:"Description"})})]})}),(0,t.jsxs)("tbody",{children:[(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"args",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.consolemessage.args",children:"args()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"An array of arguments passed to the console."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"location",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.consolemessage.location",children:"location()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"The location of the console message."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"stacktrace",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.consolemessage.stacktrace",children:"stackTrace()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"The array of locations on the stack of the console message."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"text",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.consolemessage.text",children:"text()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"The text of the console message."})})]}),(0,t.jsxs)("tr",{children:[(0,t.jsx)("td",{children:(0,t.jsx)("span",{id:"type",children:(0,t.jsx)(s.a,{href:"/api/puppeteer.consolemessage.type",children:"type()"})})}),(0,t.jsx)("td",{}),(0,t.jsx)("td",{children:(0,t.jsx)(s.p,{children:"The type of the console message."})})]})]})]})]})}function p(e={}){const{wrapper:s}={...(0,n.R)(),...e.components};return s?(0,t.jsx)(s,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},21020:(e,s,r)=>{var t=r(96540),n=Symbol.for("react.element"),o=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,c=t.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,l={key:!0,ref:!0,__self:!0,__source:!0};function i(e,s,r){var t,o={},i=null,d=null;for(t in void 0!==r&&(i=""+r),void 0!==s.key&&(i=""+s.key),void 0!==s.ref&&(d=s.ref),s)a.call(s,t)&&!l.hasOwnProperty(t)&&(o[t]=s[t]);if(e&&e.defaultProps)for(t in s=e.defaultProps)void 0===o[t]&&(o[t]=s[t]);return{$$typeof:n,type:e,key:i,ref:d,props:o,_owner:c.current}}s.Fragment=o,s.jsx=i,s.jsxs=i},74848:(e,s,r)=>{e.exports=r(21020)},28453:(e,s,r)=>{r.d(s,{R:()=>a,x:()=>c});var t=r(96540);const n={},o=t.createContext(n);function a(e){const s=t.useContext(o);return t.useMemo((function(){return"function"==typeof e?e(s):{...s,...e}}),[s,e])}function c(e){let s;return s=e.disableParentContext?"function"==typeof e.components?e.components(n):e.components||n:a(e.components),t.createElement(o.Provider,{value:s},e.children)}}}]);