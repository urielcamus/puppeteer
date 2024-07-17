/*! For license information please see 875a2173.232da73e.js.LICENSE.txt */
"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[40398],{3616:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(85893),r=n(11151);const o={},i="JavaScript execution",s={id:"guides/javascript-execution",title:"JavaScript execution",description:"Puppeteer allows evaluating JavaScript functions in the context of the page",source:"@site/versioned_docs/version-22.13.1/guides/javascript-execution.md",sourceDirName:"guides",slug:"/guides/javascript-execution",permalink:"/guides/javascript-execution",draft:!1,unlisted:!1,tags:[],version:"22.13.1",frontMatter:{},sidebar:"docs",previous:{title:"Page interactions",permalink:"/guides/page-interactions"},next:{title:"Network logging",permalink:"/guides/network-logging"}},c={},l=[{value:"Return types",id:"return-types",level:2},{value:"Passing arguments to the evaluate function",id:"passing-arguments-to-the-evaluate-function",level:2}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"javascript-execution",children:"JavaScript execution"}),"\n",(0,a.jsx)(t.p,{children:"Puppeteer allows evaluating JavaScript functions in the context of the page\ndriven by Puppeteer:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// Import puppeteer\nimport puppeteer from 'puppeteer';\n\n(async () => {\n  // Launch the browser\n  const browser = await puppeteer.launch();\n\n  // Create a page\n  const page = await browser.newPage();\n\n  // Go to your site\n  await page.goto('YOUR_SITE');\n\n  // Evaluate JavaScript\n  const three = await page.evaluate(() => {\n    return 1 + 2;\n  });\n\n  console.log(three);\n\n  // Close browser.\n  await browser.close();\n})();\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"Although the function is defined in your script context, it actually gets\nstringified by Puppeteer, sent to the target page over Chrome DevTools protocol\nand evaluated there. It means that the function cannot access scope variables in\nyour script."})}),"\n",(0,a.jsx)(t.p,{children:"Alternatively, you can provide a function body as a string:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"// Evaluate JavaScript\nconst three = await page.evaluate(`\n    1 + 2\n`);\n"})}),"\n",(0,a.jsx)(t.admonition,{type:"caution",children:(0,a.jsx)(t.p,{children:"The example above produces the equivalent results but it also illustrates that\nthe types and global variables available to the evaluated function cannot be\nknown. Especially, in TypeScript you should be careful to make sure that objects\nreferenced by the evaluated function are correct."})}),"\n",(0,a.jsx)(t.h2,{id:"return-types",children:"Return types"}),"\n",(0,a.jsx)(t.p,{children:"The functions you evaluate can return values. If the returned value is of a\nprimitive type, it gets automatically converted by Puppeteer to a primitive type\nin the script context like in the previous example."}),"\n",(0,a.jsx)(t.p,{children:"If the script returns an object, Puppeteer serializes it to a JSON and reconstructs it on the script side. This process might not always yield correct results, for example, when you return a DOM node:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const body = await page.evaluate(() => {\n  return document.body;\n});\nconsole.log(body); // {}, unexpected!\n"})}),"\n",(0,a.jsx)(t.p,{children:"To work with the returned objects, Puppeteer offers a way to return objects by reference:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const body = await page.evaluateHandle(() => {\n  return document.body;\n});\nconsole.log(body instanceof ElementHandle); // true\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The returned object is either a ",(0,a.jsx)(t.code,{children:"JSHandle"})," or a ",(0,a.jsx)(t.code,{children:"ElementHandle"}),". ",(0,a.jsx)(t.code,{children:"ElementHandle"})," extends ",(0,a.jsx)(t.code,{children:"JSHandle"})," and it is only created for DOM elements."]}),"\n",(0,a.jsxs)(t.p,{children:["See the ",(0,a.jsx)(t.a,{href:"https://pptr.dev/api",children:"API documentation"})," for more details about what methods are available for handles."]}),"\n",(0,a.jsx)(t.h2,{id:"passing-arguments-to-the-evaluate-function",children:"Passing arguments to the evaluate function"}),"\n",(0,a.jsx)(t.p,{children:"You can provide arguments to your function:"}),"\n",(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-ts",children:"const three = await page.evaluate(\n  (a, b) => {\n    return a + b; // 1 + 2\n  },\n  1,\n  2\n);\n"})}),"\n",(0,a.jsxs)(t.p,{children:["The arguments can be primitive values or ",(0,a.jsx)(t.code,{children:"JSHandle"}),"s."]}),"\n",(0,a.jsx)(t.admonition,{type:"note",children:(0,a.jsx)(t.p,{children:"Page, JSHandle and ElementHandle offer several different helpers to evaluate JavaScript but they all follow the basic principles outlined in this guide."})})]})}function p(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},75251:(e,t,n)=>{var a=n(67294),r=Symbol.for("react.element"),o=Symbol.for("react.fragment"),i=Object.prototype.hasOwnProperty,s=a.__SECRET_INTERNALS_DO_NOT_USE_OR_YOU_WILL_BE_FIRED.ReactCurrentOwner,c={key:!0,ref:!0,__self:!0,__source:!0};function l(e,t,n){var a,o={},l=null,u=null;for(a in void 0!==n&&(l=""+n),void 0!==t.key&&(l=""+t.key),void 0!==t.ref&&(u=t.ref),t)i.call(t,a)&&!c.hasOwnProperty(a)&&(o[a]=t[a]);if(e&&e.defaultProps)for(a in t=e.defaultProps)void 0===o[a]&&(o[a]=t[a]);return{$$typeof:r,type:e,key:l,ref:u,props:o,_owner:s.current}}t.Fragment=o,t.jsx=l,t.jsxs=l},85893:(e,t,n)=>{e.exports=n(75251)},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>i});var a=n(67294);const r={},o=a.createContext(r);function i(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:i(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);