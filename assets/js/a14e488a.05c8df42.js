"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[28150],{3905:(e,r,t)=>{t.d(r,{Zo:()=>l,kt:()=>g});var o=t(67294);function n(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);r&&(o=o.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,o)}return t}function p(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){n(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function s(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}var c=o.createContext({}),i=function(e){var r=o.useContext(c),t=r;return e&&(t="function"==typeof e?e(r):p(p({},r),e)),t},l=function(e){var r=i(e.components);return o.createElement(c.Provider,{value:r},e.children)},u={inlineCode:"code",wrapper:function(e){var r=e.children;return o.createElement(o.Fragment,{},r)}},v=o.forwardRef((function(e,r){var t=e.components,n=e.mdxType,a=e.originalType,c=e.parentName,l=s(e,["components","mdxType","originalType","parentName"]),v=i(t),g=n,f=v["".concat(c,".").concat(g)]||v[g]||u[g]||a;return t?o.createElement(f,p(p({ref:r},l),{},{components:t})):o.createElement(f,p({ref:r},l))}));function g(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var a=t.length,p=new Array(a);p[0]=v;var s={};for(var c in r)hasOwnProperty.call(r,c)&&(s[c]=r[c]);s.originalType=e,s.mdxType="string"==typeof e?e:n,p[1]=s;for(var i=2;i<a;i++)p[i]=t[i];return o.createElement.apply(null,p)}return o.createElement.apply(null,t)}v.displayName="MDXCreateElement"},5526:(e,r,t)=>{t.r(r),t.d(r,{assets:()=>i,contentTitle:()=>s,default:()=>v,frontMatter:()=>p,metadata:()=>c,toc:()=>l});t(67294);var o=t(3905);function n(){return n=Object.assign||function(e){for(var r=1;r<arguments.length;r++){var t=arguments[r];for(var o in t)Object.prototype.hasOwnProperty.call(t,o)&&(e[o]=t[o])}return e},n.apply(this,arguments)}function a(e,r){if(null==e)return{};var t,o,n=function(e,r){if(null==e)return{};var t,o,n={},a=Object.keys(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||(n[t]=e[t]);return n}(e,r);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);for(o=0;o<a.length;o++)t=a[o],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(n[t]=e[t])}return n}const p={sidebar_label:"Coverage.stopCSSCoverage"},s="Coverage.stopCSSCoverage() method",c={unversionedId:"api/puppeteer.coverage.stopcsscoverage",id:"version-20.7.4/api/puppeteer.coverage.stopcsscoverage",title:"Coverage.stopCSSCoverage() method",description:"Promise that resolves to the array of coverage reports for all stylesheets.",source:"@site/versioned_docs/version-20.7.4/api/puppeteer.coverage.stopcsscoverage.md",sourceDirName:"api",slug:"/api/puppeteer.coverage.stopcsscoverage",permalink:"/api/puppeteer.coverage.stopcsscoverage",draft:!1,tags:[],version:"20.7.4",frontMatter:{sidebar_label:"Coverage.stopCSSCoverage"},sidebar:"api",previous:{title:"Coverage.startJSCoverage",permalink:"/api/puppeteer.coverage.startjscoverage"},next:{title:"Coverage.stopJSCoverage",permalink:"/api/puppeteer.coverage.stopjscoverage"}},i={},l=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2}],u={toc:l};function v(e){var{components:r}=e,t=a(e,["components"]);return(0,o.kt)("wrapper",n({},u,t,{components:r,mdxType:"MDXLayout"}),(0,o.kt)("h1",n({},{id:"coveragestopcsscoverage-method"}),"Coverage.stopCSSCoverage() method"),(0,o.kt)("p",null,"Promise that resolves to the array of coverage reports for all stylesheets."),(0,o.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,o.kt)("pre",null,(0,o.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"class Coverage {\n  stopCSSCoverage(): Promise<CoverageEntry[]>;\n}\n")),(0,o.kt)("p",null,(0,o.kt)("strong",{parentName:"p"},"Returns:")),(0,o.kt)("p",null,"Promise","<",(0,o.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.coverageentry"}),"CoverageEntry"),"[","]",">"),(0,o.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,o.kt)("p",null,"CSS Coverage doesn't include dynamically injected style tags without sourceURLs."))}v.isMDXComponent=!0}}]);