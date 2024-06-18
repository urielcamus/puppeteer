/*! For license information please see 61a5eedc.5669365c.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[32743],{719:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>p,contentTitle:()=>a,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var o=t(85893),s=t(11151);const r={},a="Chrome Extensions",i={id:"guides/chrome-extensions",title:"Chrome Extensions",description:"Puppeteer can be used for testing Chrome Extensions.",source:"@site/versioned_docs/version-22.11.2/guides/chrome-extensions.md",sourceDirName:"guides",slug:"/guides/chrome-extensions",permalink:"/guides/chrome-extensions",draft:!1,unlisted:!1,tags:[],version:"22.11.2",frontMatter:{},sidebar:"docs",previous:{title:"PDF generation",permalink:"/guides/pdf-generation"},next:{title:"Cookies",permalink:"/guides/cookies"}},p={},c=[];function d(e){const n={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(n.h1,{id:"chrome-extensions",children:"Chrome Extensions"}),"\n",(0,o.jsx)(n.p,{children:"Puppeteer can be used for testing Chrome Extensions."}),"\n",(0,o.jsx)(n.admonition,{type:"caution",children:(0,o.jsx)(n.p,{children:"Extensions are not available in chrome-headless-shell (headless: 'shell'),\nalso known as the old headless mode."})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsxs)(n.p,{children:["See ",(0,o.jsx)(n.a,{href:"https://developer.chrome.com/docs/extensions/how-to/test/end-to-end-testing",children:"https://developer.chrome.com/docs/extensions/how-to/test/end-to-end-testing"})," for more details."]})}),"\n",(0,o.jsxs)(n.p,{children:["The following is code for getting a handle to the\n",(0,o.jsx)(n.a,{href:"https://developer.chrome.com/extensions/background_pages",children:"background page"})," of\nan extension whose source is located in ",(0,o.jsx)(n.code,{children:"./my-extension"}),":"]}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\nimport path from 'path';\n\nconst pathToExtension = path.join(process.cwd(), 'my-extension');\nconst browser = await puppeteer.launch({\n  args: [\n    `--disable-extensions-except=${pathToExtension}`,\n    `--load-extension=${pathToExtension}`,\n  ],\n});\nconst backgroundPageTarget = await browser.waitForTarget(\n  target => target.type() === 'background_page'\n);\nconst backgroundPage = await backgroundPageTarget.page();\n// Test the background page as you would any other page.\nawait browser.close();\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"Chrome Manifest V3 extensions have a background ServiceWorker of type\n'service_worker', instead of a page of type 'background_page'."})}),"\n",(0,o.jsx)(n.pre,{children:(0,o.jsx)(n.code,{className:"language-ts",children:"import puppeteer from 'puppeteer';\nimport path from 'path';\n\nconst pathToExtension = path.join(process.cwd(), 'my-extension');\nconst browser = await puppeteer.launch({\n  args: [\n    `--disable-extensions-except=${pathToExtension}`,\n    `--load-extension=${pathToExtension}`,\n  ],\n});\n\nconst workerTarget = await browser.waitForTarget(\n  // Assumes that there is only one service worker created by the extension and its URL ends with background.js.\n  target =>\n    target.type() === 'service_worker' && target.url().endsWith('background.js')\n);\n\nconst worker = await workerTarget.worker();\n\n// Open a popup (available for Canary channels).\nawait worker.evaluate('chrome.action.openPopup();');\n\nconst popupTarget = await browser.waitForTarget(\n  // Assumes that there is only one page with the URL ending with popup.html and that is the popup created by the extension.\n  target => target.type() === 'page' && target.url().endsWith('popup.html')\n);\n\nconst popupPage = popupTarget.asPage();\n\n// Test the popup page as you would any other page.\n\nawait browser.close();\n"})}),"\n",(0,o.jsx)(n.admonition,{type:"note",children:(0,o.jsx)(n.p,{children:"It is not yet possible to test extension content scripts."})})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,o.jsx)(n,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},75251:(e,n,t)=>{var o=t(67294),s=Symbol.for("react.element"),r=Symbol.for("react.fragment"),a=Object.prototype.hasOwnProperty,i=o.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,p={key:!0,ref:!0,__self:!0,__source:!0};function c(e,n,t){var o,r={},c=null,d=null;for(o in void 0!==t&&(c=""+t),void 0!==n.key&&(c=""+n.key),void 0!==n.ref&&(d=n.ref),n)a.call(n,o)&&!p.hasOwnProperty(o)&&(r[o]=n[o]);if(e&&e.defaultProps)for(o in n=e.defaultProps)void 0===r[o]&&(r[o]=n[o]);return{$$typeof:s,type:e,key:c,ref:d,props:r,_owner:i.current}}n.Fragment=r,n.jsx=c,n.jsxs=c},85893:(e,n,t)=>{e.exports=t(75251)},11151:(e,n,t)=>{t.d(n,{Z:()=>i,a:()=>a});var o=t(67294);const s={},r=o.createContext(s);function a(e){const n=o.useContext(r);return o.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),o.createElement(r.Provider,{value:n},e.children)}}}]);