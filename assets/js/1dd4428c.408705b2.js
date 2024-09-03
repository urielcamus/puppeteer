/*! For license information please see 1dd4428c.408705b2.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[3837],{36532:(e,r,s)=>{s.r(r),s.d(r,{assets:()=>o,contentTitle:()=>i,default:()=>l,frontMatter:()=>a,metadata:()=>t,toc:()=>p});var n=s(74848),d=s(28453);const a={sidebar_label:"Keyboard"},i="Keyboard class",t={id:"api/puppeteer.keyboard",title:"Keyboard class",description:"Keyboard provides an api for managing a virtual keyboard. The high level api is Keyboard.type(), which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page.",source:"@site/versioned_docs/version-23.2.2/api/puppeteer.keyboard.md",sourceDirName:"api",slug:"/api/puppeteer.keyboard",permalink:"/api/puppeteer.keyboard",draft:!1,unlisted:!1,tags:[],version:"23.2.2",frontMatter:{sidebar_label:"Keyboard"},sidebar:"api",previous:{title:"Accessibility.snapshot",permalink:"/api/puppeteer.accessibility.snapshot"},next:{title:"Keyboard.down",permalink:"/api/puppeteer.keyboard.down"}},o={},p=[{value:"Signature",id:"signature",level:3},{value:"Remarks",id:"remarks",level:2},{value:"Example 1",id:"example-1",level:2},{value:"Example 2",id:"example-2",level:2},{value:"Methods",id:"methods",level:2}];function c(e){const r={a:"a",code:"code",h1:"h1",h2:"h2",h3:"h3",header:"header",p:"p",pre:"pre",strong:"strong",...(0,d.R)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(r.header,{children:(0,n.jsx)(r.h1,{id:"keyboard-class",children:"Keyboard class"})}),"\n",(0,n.jsxs)(r.p,{children:["Keyboard provides an api for managing a virtual keyboard. The high level api is ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.type",children:"Keyboard.type()"}),", which takes raw characters and generates proper keydown, keypress/input, and keyup events on your page."]}),"\n",(0,n.jsx)(r.h3,{id:"signature",children:"Signature"}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-typescript",children:"export declare abstract class Keyboard\n"})}),"\n",(0,n.jsx)(r.h2,{id:"remarks",children:"Remarks"}),"\n",(0,n.jsxs)(r.p,{children:["For finer control, you can use ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"}),", ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),", and ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.sendcharacter",children:"Keyboard.sendCharacter()"})," to manually fire events as if they were generated from a real keyboard."]}),"\n",(0,n.jsxs)(r.p,{children:["On macOS, keyboard shortcuts like ",(0,n.jsx)(r.code,{children:"\u2318 A"})," -> Select All do not work. See ",(0,n.jsx)(r.a,{href:"https://github.com/puppeteer/puppeteer/issues/1313",children:"#1313"}),"."]}),"\n",(0,n.jsxs)(r.p,{children:["The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,n.jsx)(r.code,{children:"Keyboard"})," class."]}),"\n",(0,n.jsx)(r.h2,{id:"example-1",children:"Example 1"}),"\n",(0,n.jsxs)(r.p,{children:["An example of holding down ",(0,n.jsx)(r.code,{children:"Shift"})," in order to select and delete some text:"]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"await page.keyboard.type('Hello World!');\nawait page.keyboard.press('ArrowLeft');\n\nawait page.keyboard.down('Shift');\nfor (let i = 0; i < ' World'.length; i++)\n  await page.keyboard.press('ArrowLeft');\nawait page.keyboard.up('Shift');\n\nawait page.keyboard.press('Backspace');\n// Result text will end up saying 'Hello!'\n"})}),"\n",(0,n.jsx)(r.h2,{id:"example-2",children:"Example 2"}),"\n",(0,n.jsxs)(r.p,{children:["An example of pressing ",(0,n.jsx)(r.code,{children:"A"})]}),"\n",(0,n.jsx)(r.pre,{children:(0,n.jsx)(r.code,{className:"language-ts",children:"await page.keyboard.down('Shift');\nawait page.keyboard.press('KeyA');\nawait page.keyboard.up('Shift');\n"})}),"\n",(0,n.jsx)(r.h2,{id:"methods",children:"Methods"}),"\n",(0,n.jsxs)("table",{children:[(0,n.jsx)("thead",{children:(0,n.jsxs)("tr",{children:[(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Method"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Modifiers"})}),(0,n.jsx)("th",{children:(0,n.jsx)(r.p,{children:"Description"})})]})}),(0,n.jsxs)("tbody",{children:[(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"down",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.down",children:"down(key, options)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(r.p,{children:["Dispatches a ",(0,n.jsx)(r.code,{children:"keydown"})," event."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Remarks:"})}),(0,n.jsxs)(r.p,{children:["If ",(0,n.jsx)(r.code,{children:"key"})," is a single character and no modifier keys besides ",(0,n.jsx)(r.code,{children:"Shift"})," are being held down, a ",(0,n.jsx)(r.code,{children:"keypress"}),"/",(0,n.jsx)(r.code,{children:"input"})," event will also generated. The ",(0,n.jsx)(r.code,{children:"text"})," option can be specified to force an input event to be generated. If ",(0,n.jsx)(r.code,{children:"key"})," is a modifier key, ",(0,n.jsx)(r.code,{children:"Shift"}),", ",(0,n.jsx)(r.code,{children:"Meta"}),", ",(0,n.jsx)(r.code,{children:"Control"}),", or ",(0,n.jsx)(r.code,{children:"Alt"}),", subsequent key presses will be sent with that modifier active. To release the modifier key, use ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),(0,n.jsxs)(r.p,{children:["After the key is pressed once, subsequent calls to ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"})," will have ",(0,n.jsx)(r.a,{href:"https://developer.mozilla.org/en-US/docs/Web/API/KeyboardEvent/repeat",children:"repeat"})," set to true. To release the key, use ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),(0,n.jsxs)(r.p,{children:["Modifier keys DO influence ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"}),". Holding down ",(0,n.jsx)(r.code,{children:"Shift"})," will type the text in upper case."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"press",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.press",children:"press(key, options)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(r.p,{children:["Shortcut for ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.down",children:"Keyboard.down()"})," and ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.up",children:"Keyboard.up()"}),"."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Remarks:"})}),(0,n.jsxs)(r.p,{children:["If ",(0,n.jsx)(r.code,{children:"key"})," is a single character and no modifier keys besides ",(0,n.jsx)(r.code,{children:"Shift"})," are being held down, a ",(0,n.jsx)(r.code,{children:"keypress"}),"/",(0,n.jsx)(r.code,{children:"input"})," event will also generated. The ",(0,n.jsx)(r.code,{children:"text"})," option can be specified to force an input event to be generated."]}),(0,n.jsxs)(r.p,{children:["Modifier keys DO effect ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.press",children:"Keyboard.press()"}),". Holding down ",(0,n.jsx)(r.code,{children:"Shift"})," will type the text in upper case."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"sendcharacter",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.sendcharacter",children:"sendCharacter(char)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(r.p,{children:["Dispatches a ",(0,n.jsx)(r.code,{children:"keypress"})," and ",(0,n.jsx)(r.code,{children:"input"})," event. This does not send a ",(0,n.jsx)(r.code,{children:"keydown"})," or ",(0,n.jsx)(r.code,{children:"keyup"})," event."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Remarks:"})}),(0,n.jsxs)(r.p,{children:["Modifier keys DO NOT effect ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.sendcharacter",children:"Keyboard.sendCharacter"}),". Holding down ",(0,n.jsx)(r.code,{children:"Shift"})," will not type the text in upper case."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"type",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.type",children:"type(text, options)"})})}),(0,n.jsx)("td",{}),(0,n.jsxs)("td",{children:[(0,n.jsxs)(r.p,{children:["Sends a ",(0,n.jsx)(r.code,{children:"keydown"}),", ",(0,n.jsx)(r.code,{children:"keypress"}),"/",(0,n.jsx)(r.code,{children:"input"}),", and ",(0,n.jsx)(r.code,{children:"keyup"})," event for each character in the text."]}),(0,n.jsx)(r.p,{children:(0,n.jsx)(r.strong,{children:"Remarks:"})}),(0,n.jsxs)(r.p,{children:["To press a special key, like ",(0,n.jsx)(r.code,{children:"Control"})," or ",(0,n.jsx)(r.code,{children:"ArrowDown"}),", use ",(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.press",children:"Keyboard.press()"}),"."]}),(0,n.jsxs)(r.p,{children:["Modifier keys DO NOT effect ",(0,n.jsx)(r.code,{children:"keyboard.type"}),". Holding down ",(0,n.jsx)(r.code,{children:"Shift"})," will not type the text in upper case."]})]})]}),(0,n.jsxs)("tr",{children:[(0,n.jsx)("td",{children:(0,n.jsx)("span",{id:"up",children:(0,n.jsx)(r.a,{href:"/api/puppeteer.keyboard.up",children:"up(key)"})})}),(0,n.jsx)("td",{}),(0,n.jsx)("td",{children:(0,n.jsxs)(r.p,{children:["Dispatches a ",(0,n.jsx)(r.code,{children:"keyup"})," event."]})})]})]})]})]})}function l(e={}){const{wrapper:r}={...(0,d.R)(),...e.components};return r?(0,n.jsx)(r,{...e,children:(0,n.jsx)(c,{...e})}):c(e)}},21020:(e,r,s)=>{var n=s(96540),d=Symbol.for("react.element"),a=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,t=n.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,o={key:!0,ref:!0,__self:!0,__source:!0};function p(e,r,s){var n,a={},p=null,c=null;for(n in void 0!==s&&(p=""+s),void 0!==r.key&&(p=""+r.key),void 0!==r.ref&&(c=r.ref),r)i.call(r,n)&&!o.hasOwnProperty(n)&&(a[n]=r[n]);if(e&&e.defaultProps)for(n in r=e.defaultProps)void 0===a[n]&&(a[n]=r[n]);return{$$typeof:d,type:e,key:p,ref:c,props:a,_owner:t.current}}r.Fragment=a,r.jsx=p,r.jsxs=p},74848:(e,r,s)=>{e.exports=s(21020)},28453:(e,r,s)=>{s.d(r,{R:()=>i,x:()=>t});var n=s(96540);const d={},a=n.createContext(d);function i(e){const r=n.useContext(a);return n.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function t(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(d):e.components||d:i(e.components),n.createElement(a.Provider,{value:r},e.children)}}}]);