(window.webpackJsonp=window.webpackJsonp||[]).push([[135],{206:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(242)),c={id:"force",title:"force",sidebar_label:"force"},i={unversionedId:"commands/detailed/force",id:"commands/detailed/force",isDocsHomePage:!1,title:"force",description:"|                     Description                      | Argument | Accessible |   Cooldown   |",source:"@site/docs/commands/detailed/force.md",slug:"/commands/detailed/force",permalink:"/docs/commands/detailed/force",editUrl:"https://portal-bot.xyz/docs/commands/detailed/force.md",version:"current",sidebar_label:"force",sidebar:"docs",previous:{title:"focus",permalink:"/docs/commands/detailed/focus"},next:{title:"help",permalink:"/docs/commands/detailed/help"}},l=[{value:"Examples",id:"examples",children:[]}],d={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},d,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"Description"),Object(o.b)("th",{parentName:"tr",align:"center"},"Argument"),Object(o.b)("th",{parentName:"tr",align:"center"},"Accessible"),Object(o.b)("th",{parentName:"tr",align:"center"},"Cooldown"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Clones current channel in order to force-update name"),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("strong",{parentName:"td"},"none")),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"admin")),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"2min/admin"))))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Lets say you want to force update your current session, you would type"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"./force\n")),Object(o.b)("p",{parentName:"li"},"This will create a copy of your current channel with an updated name and move all users to it\n",Object(o.b)("em",{parentName:"p"},"Main reason of usage is when you have exceeded the allowed once per 5 minutes update and want to refresh your channe's name")))),Object(o.b)("div",{className:"admonition admonition-info alert alert--info"},Object(o.b)("div",{parentName:"div",className:"admonition-heading"},Object(o.b)("h5",{parentName:"div"},Object(o.b)("span",{parentName:"h5",className:"admonition-icon"},Object(o.b)("svg",{parentName:"span",xmlns:"http://www.w3.org/2000/svg",width:"14",height:"16",viewBox:"0 0 14 16"},Object(o.b)("path",{parentName:"svg",fillRule:"evenodd",d:"M7 2.3c3.14 0 5.7 2.56 5.7 5.7s-2.56 5.7-5.7 5.7A5.71 5.71 0 0 1 1.3 8c0-3.14 2.56-5.7 5.7-5.7zM7 1C3.14 1 0 4.14 0 8s3.14 7 7 7 7-3.14 7-7-3.14-7-7-7zm1 3H6v5h2V4zm0 6H6v2h2v-2z"}))),"info")),Object(o.b)("div",{parentName:"div",className:"admonition-content"},Object(o.b)("p",{parentName:"div"},"You can force a channel that has up-to 10 members (including bots)"))))}p.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var d=a.a.createContext({}),p=function(e){var t=a.a.useContext(d),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(d.Provider,{value:t},e.children)},m={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},s=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,d=l(e,["components","mdxType","originalType","parentName"]),b=p(n),s=r,u=b["".concat(c,".").concat(s)]||b[s]||m[s]||o;return n?a.a.createElement(u,i(i({ref:t},d),{},{components:n})):a.a.createElement(u,i({ref:t},d))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=s;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var d=2;d<o;d++)c[d]=n[d];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}s.displayName="MDXCreateElement"}}]);