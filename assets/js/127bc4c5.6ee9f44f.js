"use strict";(self.webpackChunkwebsite=self.webpackChunkwebsite||[]).push([[87707],{3905:(e,t,r)=>{r.d(t,{Zo:()=>u,kt:()=>c});var a=r(67294);function n(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function s(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?p(Object(r),!0).forEach((function(t){n(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):p(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function l(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}var o=a.createContext({}),i=function(e){var t=a.useContext(o),r=t;return e&&(r="function"==typeof e?e(t):s(s({},t),e)),r},u=function(e){var t=i(e.components);return a.createElement(o.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.createElement(a.Fragment,{},t)}},m=a.forwardRef((function(e,t){var r=e.components,n=e.mdxType,p=e.originalType,o=e.parentName,u=l(e,["components","mdxType","originalType","parentName"]),m=i(r),c=n,h=m["".concat(o,".").concat(c)]||m[c]||d[c]||p;return r?a.createElement(h,s(s({ref:t},u),{},{components:r})):a.createElement(h,s({ref:t},u))}));function c(e,t){var r=arguments,n=t&&t.mdxType;if("string"==typeof e||n){var p=r.length,s=new Array(p);s[0]=m;var l={};for(var o in t)hasOwnProperty.call(t,o)&&(l[o]=t[o]);l.originalType=e,l.mdxType="string"==typeof e?e:n,s[1]=l;for(var i=2;i<p;i++)s[i]=r[i];return a.createElement.apply(null,s)}return a.createElement.apply(null,r)}m.displayName="MDXCreateElement"},82011:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>i,contentTitle:()=>l,default:()=>m,frontMatter:()=>s,metadata:()=>o,toc:()=>u});r(67294);var a=r(3905);function n(){return n=Object.assign||function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var a in r)Object.prototype.hasOwnProperty.call(r,a)&&(e[a]=r[a])}return e},n.apply(this,arguments)}function p(e,t){if(null==e)return{};var r,a,n=function(e,t){if(null==e)return{};var r,a,n={},p=Object.keys(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||(n[r]=e[r]);return n}(e,t);if(Object.getOwnPropertySymbols){var p=Object.getOwnPropertySymbols(e);for(a=0;a<p.length;a++)r=p[a],t.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(n[r]=e[r])}return n}const s={sidebar_label:"HTTPResponse"},l="HTTPResponse class",o={unversionedId:"api/puppeteer.httpresponse",id:"version-20.7.4/api/puppeteer.httpresponse",title:"HTTPResponse class",description:"The HTTPResponse class represents responses which are received by the Page class.",source:"@site/versioned_docs/version-20.7.4/api/puppeteer.httpresponse.md",sourceDirName:"api",slug:"/api/puppeteer.httpresponse",permalink:"/api/puppeteer.httpresponse",draft:!1,tags:[],version:"20.7.4",frontMatter:{sidebar_label:"HTTPResponse"},sidebar:"api",previous:{title:"HTTPRequest.url",permalink:"/api/puppeteer.httprequest.url"},next:{title:"HTTPResponse.buffer",permalink:"/api/puppeteer.httpresponse.buffer"}},i={},u=[{value:"Signature:",id:"signature",level:4},{value:"Remarks",id:"remarks",level:2},{value:"Methods",id:"methods",level:2}],d={toc:u};function m(e){var{components:t}=e,r=p(e,["components"]);return(0,a.kt)("wrapper",n({},d,r,{components:t,mdxType:"MDXLayout"}),(0,a.kt)("h1",n({},{id:"httpresponse-class"}),"HTTPResponse class"),(0,a.kt)("p",null,"The HTTPResponse class represents responses which are received by the ",(0,a.kt)("a",n({parentName:"p"},{href:"/api/puppeteer.page"}),"Page")," class."),(0,a.kt)("h4",n({},{id:"signature"}),"Signature:"),(0,a.kt)("pre",null,(0,a.kt)("code",n({parentName:"pre"},{className:"language-typescript"}),"export declare class HTTPResponse\n")),(0,a.kt)("h2",n({},{id:"remarks"}),"Remarks"),(0,a.kt)("p",null,"The constructor for this class is marked as internal. Third-party code should not call the constructor directly or create subclasses that extend the ",(0,a.kt)("inlineCode",{parentName:"p"},"HTTPResponse")," class."),(0,a.kt)("h2",n({},{id:"methods"}),"Methods"),(0,a.kt)("table",null,(0,a.kt)("thead",{parentName:"table"},(0,a.kt)("tr",{parentName:"thead"},(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Method"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Modifiers"),(0,a.kt)("th",n({parentName:"tr"},{align:null}),"Description"))),(0,a.kt)("tbody",{parentName:"table"},(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.buffer"}),"buffer()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Promise which resolves to a buffer with response body.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.frame"}),"frame()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"A ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.frame"}),"Frame")," that initiated this response, or ",(0,a.kt)("code",null,"null")," if navigating to error pages.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.fromcache"}),"fromCache()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"True if the response was served from either the browser's disk cache or memory cache.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.fromserviceworker"}),"fromServiceWorker()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"True if the response was served by a service worker.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.headers"}),"headers()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"An object with HTTP headers associated with the response. All header names are lower-case.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.json"}),"json()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Promise which resolves to a JSON representation of response body.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.ok"}),"ok()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"True if the response was successful (status in the range 200-299).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.remoteaddress"}),"remoteAddress()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The IP address and port number used to connect to the remote server.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.request"}),"request()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"A matching ",(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httprequest"}),"HTTPRequest")," object.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.securitydetails"}),"securityDetails()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.securitydetails"}),"SecurityDetails")," if the response was received over the secure connection, or ",(0,a.kt)("code",null,"null")," otherwise.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.status"}),"status()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The status code of the response (e.g., 200 for a success).")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.statustext"}),"statusText()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),'The status text of the response (e.g. usually an "OK" for a success).')),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.text"}),"text()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Promise which resolves to a text representation of response body.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.timing"}),"timing()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"Timing information related to the response.")),(0,a.kt)("tr",{parentName:"tbody"},(0,a.kt)("td",n({parentName:"tr"},{align:null}),(0,a.kt)("a",n({parentName:"td"},{href:"/api/puppeteer.httpresponse.url"}),"url()")),(0,a.kt)("td",n({parentName:"tr"},{align:null})),(0,a.kt)("td",n({parentName:"tr"},{align:null}),"The URL of the response.")))))}m.isMDXComponent=!0}}]);