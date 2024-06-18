/*! For license information please see 8a977b2e.7d37b85f.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[9061],{64884:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>s,metadata:()=>l,toc:()=>a});var n=r(85893),i=r(11151);const s={sidebar_label:"Page.click"},c="Page.click() method",l={id:"api/puppeteer.page.click",title:"Page.click() method",description:"This method fetches an element with selector, scrolls it into view if needed, and then uses Page.mouse to click in the center of the element. If there's no element matching selector, the method throws an error.",source:"@site/versioned_docs/version-22.11.2/api/puppeteer.page.click.md",sourceDirName:"api",slug:"/api/puppeteer.page.click",permalink:"/api/puppeteer.page.click",draft:!1,unlisted:!1,tags:[],version:"22.11.2",frontMatter:{sidebar_label:"Page.click"},sidebar:"api",previous:{title:"Page.browserContext",permalink:"/api/puppeteer.page.browsercontext"},next:{title:"Page.close",permalink:"/api/puppeteer.page.close"}},o={},a=[{value:"Signature:",id:"signature",level:4},{value:"Parameters",id:"parameters",level:2},{value:"Remarks",id:"remarks",level:2}];function d(e){const t={a:"a",code:"code",em:"em",h1:"h1",h2:"h2",h4:"h4",p:"p",pre:"pre",strong:"strong",...(0,i.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.h1,{id:"pageclick-method",children:"Page.click() method"}),"\n",(0,n.jsxs)(t.p,{children:["This method fetches an element with ",(0,n.jsx)(t.code,{children:"selector"}),", scrolls it into view if needed, and then uses ",(0,n.jsx)(t.a,{href:"/api/puppeteer.page#mouse",children:"Page.mouse"})," to click in the center of the element. If there's no element matching ",(0,n.jsx)(t.code,{children:"selector"}),", the method throws an error."]}),"\n",(0,n.jsx)(t.h4,{id:"signature",children:"Signature:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-typescript",children:"class Page {\n  click(selector: string, options?: Readonly<ClickOptions>): Promise<void>;\n}\n"})}),"\n",(0,n.jsx)(t.h2,{id:"parameters",children:"Parameters"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Parameter"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Type"})}),(0,n.jsx)("th",{children:(0,n.jsx)(t.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"selector"})}),(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"string"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["A ",(0,n.jsx)(t.code,{children:"selector"})," to search for element to click. If there are multiple elements satisfying the ",(0,n.jsx)(t.code,{children:"selector"}),", the first will be clicked"]})})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)(t.p,{children:"options"})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:["Readonly<",(0,n.jsx)(t.a,{href:"/api/puppeteer.clickoptions",children:"ClickOptions"}),">"]})}),(0,n.jsx)("td",{children:(0,n.jsxs)(t.p,{children:[(0,n.jsx)(t.em,{children:"(Optional)"})," ",(0,n.jsx)(t.code,{children:"Object"})]})})]})]})]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.strong,{children:"Returns:"})}),"\n",(0,n.jsx)(t.p,{children:"Promise<void>"}),"\n",(0,n.jsxs)(t.p,{children:["Promise which resolves when the element matching ",(0,n.jsx)(t.code,{children:"selector"})," is successfully clicked. The Promise will be rejected if there is no element matching ",(0,n.jsx)(t.code,{children:"selector"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(t.p,{children:["Bear in mind that if ",(0,n.jsx)(t.code,{children:"click()"})," triggers a navigation event and there's a separate ",(0,n.jsx)(t.code,{children:"page.waitForNavigation()"})," promise to be resolved, you may end up with a race condition that yields unexpected results. The correct pattern for click and wait for navigation is the following:"]}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"const [response] = await Promise.all([\n  page.waitForNavigation(waitOptions),\n  page.click(selector, clickOptions),\n]);\n"})}),"\n",(0,n.jsxs)(t.p,{children:["Shortcut for ",(0,n.jsx)(t.a,{href:"/api/puppeteer.frame.click",children:"page.mainFrame().click(selector[, options])"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},75251:(e,t,r)=>{var n=r(67294),i=Symbol.for("react.element"),s=Symbol.for("react.fragment"),c=Object.prototype.hasOwnProperty,l=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function a(e,t,r){var n,s={},a=null,d=null;for(n in void 0!==r&&(a=""+r),void 0!==t.key&&(a=""+t.key),void 0!==t.ref&&(d=t.ref),t)c.call(t,n)&&!o.hasOwnProperty(n)&&(s[n]=t[n]);if(e&&e.defaultProps)for(n in t=e.defaultProps)void 0===s[n]&&(s[n]=t[n]);return{$$typeof:i,type:e,key:a,ref:d,props:s,_owner:l.current}}t.Fragment=s,t.jsx=a,t.jsxs=a},85893:(e,t,r)=>{e.exports=r(75251)},11151:(e,t,r)=>{r.d(t,{Z:()=>l,a:()=>c});var n=r(67294);const i={},s=n.createContext(i);function c(e){const t=n.useContext(s);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function l(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:c(e.components),n.createElement(s.Provider,{value:t},e.children)}}}]);