/*! For license information please see ce32024a.6ab83adc.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[45834],{6108:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>l,default:()=>p,frontMatter:()=>s,metadata:()=>o,toc:()=>d});var r=n(85893),i=n(11151);const s={sidebar_label:"EventEmitter.once"},l="EventEmitter.once() method",o={id:"api/puppeteer.eventemitter.once",title:"EventEmitter.once() method",description:"Like on but the listener will only be fired once and then it will be removed.",source:"@site/versioned_docs/version-22.11.2/api/puppeteer.eventemitter.once.md",sourceDirName:"api",slug:"/api/puppeteer.eventemitter.once",permalink:"/api/puppeteer.eventemitter.once",draft:!1,unlisted:!1,tags:[],version:"22.11.2",frontMatter:{sidebar_label:"EventEmitter.once"},sidebar:"api",previous:{title:"EventEmitter.on",permalink:"/api/puppeteer.eventemitter.on"},next:{title:"EventEmitter.removeAllListeners",permalink:"/api/puppeteer.eventemitter.removealllisteners"}},c={},d=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2}];function a(e){const t={a:"a",code:"code",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.h1,{id:"eventemitteronce-method",children:"EventEmitter.once() method"}),"\n",(0,r.jsxs)(t.p,{children:["Like ",(0,r.jsx)(t.code,{children:"on"})," but the listener will only be fired once and then it will be removed."]}),"\n",(0,r.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-typescript",children:"class EventEmitter {\n  once<Key extends keyof EventsWithWildcard<Events>>(\n    type: Key,\n    handler: Handler<EventsWithWildcard<Events>[Key]>\n  ): this;\n}\n"})}),"\n",(0,r.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,r.jsxs)("table",{children:[(0,r.jsx)("thead",{children:(0,r.jsxs)("tr",{children:[(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Parameter"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Type"})}),(0,r.jsx)("th",{children:(0,r.jsx)(t.p,{children:"Description"})})]})}),(0,r.jsxs)("tbody",{children:[(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"type"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"Key"})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"the event you'd like to listen to"})})]}),(0,r.jsxs)("tr",{children:[(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"handler"})}),(0,r.jsx)("td",{children:(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.a,{href:"/api/puppeteer.handler",children:"Handler"}),"<",(0,r.jsx)(t.a,{href:"/api/puppeteer.eventswithwildcard",children:"EventsWithWildcard"}),"<Events>[Key]>"]})}),(0,r.jsx)("td",{children:(0,r.jsx)(t.p,{children:"the handler function to run when the event occurs"})})]})]})]}),"\n",(0,r.jsx)(t.p,{children:(0,r.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,r.jsx)(t.p,{children:"this"}),"\n",(0,r.jsxs)(t.p,{children:[(0,r.jsx)(t.code,{children:"this"})," to enable you to chain method calls."]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(a,{...e})}):a(e)}},75251:(e,t,n)=>{var r=n(67294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),l=Object.prototype.hasOwnProperty,o=r.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function d(e,t,n){var r,s={},d=null,a=null;for(r in void 0!==n&&(d=""+n),void 0!==t.key&&(d=""+t.key),void 0!==t.ref&&(a=t.ref),t)l.call(t,r)&&!c.hasOwnProperty(r)&&(s[r]=t[r]);if(e&&e.defaultProps)for(r in t=e.defaultProps)void 0===s[r]&&(s[r]=t[r]);return{$$typeof:i,type:e,key:d,ref:a,props:s,_owner:o.current}}t.Fragment=s,t.jsx=d,t.jsxs=d},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>l});var r=n(67294);const i={},s=r.createContext(i);function l(e){const t=r.useContext(s);return r.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:l(e.components),r.createElement(s.Provider,{value:t},e.children)}}}]);