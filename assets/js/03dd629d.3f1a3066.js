/*! For license information please see 03dd629d.3f1a3066.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[57896],{47768:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>i,default:()=>u,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var r=n(85893),p=n(11151);const o={sidebar_label:"PuppeteerLifeCycleEvent"},i="PuppeteerLifeCycleEvent type",a={id:"api/puppeteer.puppeteerlifecycleevent",title:"PuppeteerLifeCycleEvent type",description:"Signature",source:"@site/versioned_docs/version-23.2.0/api/puppeteer.puppeteerlifecycleevent.md",sourceDirName:"api",slug:"/api/puppeteer.puppeteerlifecycleevent",permalink:"/api/puppeteer.puppeteerlifecycleevent",draft:!1,unlisted:!1,tags:[],version:"23.2.0",frontMatter:{sidebar_label:"PuppeteerLifeCycleEvent"},sidebar:"api",previous:{title:"PuppeteerLaunchOptions",permalink:"/api/puppeteer.puppeteerlaunchoptions"},next:{title:"PuppeteerNodeLaunchOptions",permalink:"/api/puppeteer.puppeteernodelaunchoptions"}},s={},c=[{value:"Signature",id:"signature",level:3}];function l(e){const t={code:"code",h1:"h1",h3:"h3",header:"header",pre:"pre",...(0,p.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.header,{children:(0,r.jsx)(t.h1,{id:"puppeteerlifecycleevent-type",children:"PuppeteerLifeCycleEvent type"})}),"\n",(0,r.jsx)(t.h3,{id:"signature",children:"Signature"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"export type PuppeteerLifeCycleEvent =\n  /**\n   * Waits for the 'load' event.\n   */\n  | 'load'\n  /**\n   * Waits for the 'DOMContentLoaded' event.\n   */\n  | 'domcontentloaded'\n  /**\n   * Waits till there are no more than 0 network connections for at least `500`\n   * ms.\n   */\n  | 'networkidle0'\n  /**\n   * Waits till there are no more than 2 network connections for at least `500`\n   * ms.\n   */\n  | 'networkidle2';\n"})})]})}function u(e={}){const{wrapper:t}={...(0,p.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(l,{...e})}):l(e)}},75251:(e,t,n)=>{var r=n(67294),p=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,a=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,s={key:!0,ref:!0,__self:!0,__source:!0};function c(e,t,n){var r,o={},c=null,l=null;for(r in void 0!==n&&(c=""+n),void 0!==t.key&&(c=""+t.key),void 0!==t.ref&&(l=t.ref),t)i.call(t,r)&&!s.hasOwnProperty(r)&&(o[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===o[r]&&(o[r]=t[r]);return{$$typeof:p,type:e,key:c,ref:l,props:o,_owner:a.current}}t.Fragment=o,t.jsx=c,t.jsxs=c},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>i});var r=n(67294);const p={},o=r.createContext(p);function i(e){const t=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(p):e.components||p:i(e.components),r.createElement(o.Provider,{value:t},e.children)}}}]);