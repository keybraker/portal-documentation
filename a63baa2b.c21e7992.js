(window.webpackJsonp=window.webpackJsonp||[]).push([[121],{193:function(e,t,n){"use strict";n.r(t),n.d(t,"frontMatter",(function(){return c})),n.d(t,"metadata",(function(){return i})),n.d(t,"toc",(function(){return l})),n.d(t,"default",(function(){return p}));var r=n(3),a=n(7),o=(n(0),n(242)),c={id:"news",title:"news",sidebar_label:"news"},i={unversionedId:"commands/detailed/news",id:"commands/detailed/news",isDocsHomePage:!1,title:"news",description:"|                Description                 |             Argument              | Accessible | Cooldown |",source:"@site/docs/commands/detailed/news.md",slug:"/commands/detailed/news",permalink:"/docs/commands/detailed/news",editUrl:"https://portal-bot.xyz/docs/commands/detailed/news.md",version:"current",sidebar_label:"news",sidebar:"docs",previous:{title:"music",permalink:"/docs/commands/detailed/music"},next:{title:"ping",permalink:"/docs/commands/detailed/ping"}},l=[{value:"Examples",id:"examples",children:[]}],s={toc:l};function p(e){var t=e.components,n=Object(a.a)(e,["components"]);return Object(o.b)("wrapper",Object(r.a)({},s,n,{components:t,mdxType:"MDXLayout"}),Object(o.b)("table",null,Object(o.b)("thead",{parentName:"table"},Object(o.b)("tr",{parentName:"thead"},Object(o.b)("th",{parentName:"tr",align:"center"},"Description"),Object(o.b)("th",{parentName:"tr",align:"center"},"Argument"),Object(o.b)("th",{parentName:"tr",align:"center"},"Accessible"),Object(o.b)("th",{parentName:"tr",align:"center"},"Cooldown"))),Object(o.b)("tbody",{parentName:"table"},Object(o.b)("tr",{parentName:"tbody"},Object(o.b)("td",{parentName:"tr",align:"center"},"Replies with the latest news from category"),Object(o.b)("td",{parentName:"tr",align:"center"},"_",Object(o.b)("em",{parentName:"td"},"!category @number_of_articles")),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"everyone")),Object(o.b)("td",{parentName:"tr",align:"center"},Object(o.b)("inlineCode",{parentName:"td"},"none"))))),Object(o.b)("h2",{id:"examples"},"Examples"),Object(o.b)("ul",null,Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Lets say you want to get the latest news on the world, you would type"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"./news world\n")),Object(o.b)("p",{parentName:"li"},"Portal will reply with an embedded card that has the ",Object(o.b)("em",{parentName:"p"},"latest news of the world"),".")),Object(o.b)("li",{parentName:"ul"},Object(o.b)("p",{parentName:"li"},"Lets say you want to get 2 articles with the latest news on science, you would type"),Object(o.b)("pre",{parentName:"li"},Object(o.b)("code",{parentName:"pre",className:"language-bash"},"./news world 2\n")),Object(o.b)("p",{parentName:"li"},"Portal will reply with an embedded card that has the ",Object(o.b)("em",{parentName:"p"},"latest news of the world"),"."),Object(o.b)("p",{parentName:"li"},"Categoires:\n",Object(o.b)("em",{parentName:"p"},"arts, automobiles, books, business, fashion, food, health, home, insider, magazine, movies, nyregion, obituaries, opinion, politics, realestate, science, sports, sundayreview, technology, theater, t-magazine, travel, upshot, us, world")))))}p.isMDXComponent=!0},242:function(e,t,n){"use strict";n.d(t,"a",(function(){return b})),n.d(t,"b",(function(){return u}));var r=n(0),a=n.n(r);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function c(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function i(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?c(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):c(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function l(e,t){if(null==e)return{};var n,r,a=function(e,t){if(null==e)return{};var n,r,a={},o=Object.keys(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||(a[n]=e[n]);return a}(e,t);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(r=0;r<o.length;r++)n=o[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(a[n]=e[n])}return a}var s=a.a.createContext({}),p=function(e){var t=a.a.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):i(i({},t),e)),n},b=function(e){var t=p(e.components);return a.a.createElement(s.Provider,{value:t},e.children)},d={inlineCode:"code",wrapper:function(e){var t=e.children;return a.a.createElement(a.a.Fragment,{},t)}},m=a.a.forwardRef((function(e,t){var n=e.components,r=e.mdxType,o=e.originalType,c=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),b=p(n),m=r,u=b["".concat(c,".").concat(m)]||b[m]||d[m]||o;return n?a.a.createElement(u,i(i({ref:t},s),{},{components:n})):a.a.createElement(u,i({ref:t},s))}));function u(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var o=n.length,c=new Array(o);c[0]=m;var i={};for(var l in t)hasOwnProperty.call(t,l)&&(i[l]=t[l]);i.originalType=e,i.mdxType="string"==typeof e?e:r,c[1]=i;for(var s=2;s<o;s++)c[s]=n[s];return a.a.createElement.apply(null,c)}return a.a.createElement.apply(null,n)}m.displayName="MDXCreateElement"}}]);