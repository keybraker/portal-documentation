(window.webpackJsonp=window.webpackJsonp||[]).push([[25],{242:function(e,r,t){"use strict";t.d(r,"a",(function(){return m})),t.d(r,"b",(function(){return d}));var n=t(0),i=t.n(n);function o(e,r,t){return r in e?Object.defineProperty(e,r,{value:t,enumerable:!0,configurable:!0,writable:!0}):e[r]=t,e}function a(e,r){var t=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);r&&(n=n.filter((function(r){return Object.getOwnPropertyDescriptor(e,r).enumerable}))),t.push.apply(t,n)}return t}function c(e){for(var r=1;r<arguments.length;r++){var t=null!=arguments[r]?arguments[r]:{};r%2?a(Object(t),!0).forEach((function(r){o(e,r,t[r])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(t)):a(Object(t)).forEach((function(r){Object.defineProperty(e,r,Object.getOwnPropertyDescriptor(t,r))}))}return e}function l(e,r){if(null==e)return{};var t,n,i=function(e,r){if(null==e)return{};var t,n,i={},o=Object.keys(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||(i[t]=e[t]);return i}(e,r);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);for(n=0;n<o.length;n++)t=o[n],r.indexOf(t)>=0||Object.prototype.propertyIsEnumerable.call(e,t)&&(i[t]=e[t])}return i}var s=i.a.createContext({}),b=function(e){var r=i.a.useContext(s),t=r;return e&&(t="function"==typeof e?e(r):c(c({},r),e)),t},m=function(e){var r=b(e.components);return i.a.createElement(s.Provider,{value:r},e.children)},p={inlineCode:"code",wrapper:function(e){var r=e.children;return i.a.createElement(i.a.Fragment,{},r)}},u=i.a.forwardRef((function(e,r){var t=e.components,n=e.mdxType,o=e.originalType,a=e.parentName,s=l(e,["components","mdxType","originalType","parentName"]),m=b(t),u=n,d=m["".concat(a,".").concat(u)]||m[u]||p[u]||o;return t?i.a.createElement(d,c(c({ref:r},s),{},{components:t})):i.a.createElement(d,c({ref:r},s))}));function d(e,r){var t=arguments,n=r&&r.mdxType;if("string"==typeof e||n){var o=t.length,a=new Array(o);a[0]=u;var c={};for(var l in r)hasOwnProperty.call(r,l)&&(c[l]=r[l]);c.originalType=e,c.mdxType="string"==typeof e?e:n,a[1]=c;for(var s=2;s<o;s++)a[s]=t[s];return i.a.createElement.apply(null,a)}return i.a.createElement.apply(null,t)}u.displayName="MDXCreateElement"},96:function(e,r,t){"use strict";t.r(r),t.d(r,"frontMatter",(function(){return a})),t.d(r,"metadata",(function(){return c})),t.d(r,"toc",(function(){return l})),t.d(r,"default",(function(){return b}));var n=t(3),i=t(7),o=(t(0),t(242)),a={id:"member_list",title:"member_list",sidebar_label:"member_list"},c={unversionedId:"interpreter/objects/variables/detailed/member/member_list",id:"interpreter/objects/variables/detailed/member/member_list",isDocsHomePage:!1,title:"member_list",description:"Description",source:"@site/docs/interpreter/objects/variables/detailed/member/member_list.md",slug:"/interpreter/objects/variables/detailed/member/member_list",permalink:"/docs/interpreter/objects/variables/detailed/member/member_list",editUrl:"https://portal-bot.xyz/docs/interpreter/objects/variables/detailed/member/member_list.md",version:"current",sidebar_label:"member_list",sidebar:"docs",previous:{title:"_##",permalink:"/docs/interpreter/objects/variables/detailed/general/double_slash"},next:{title:"member_count",permalink:"/docs/interpreter/objects/variables/detailed/member/member_count"}},l=[{value:"Description",id:"description",children:[]}],s={toc:l};function b(e){var r=e.components,t=Object(i.a)(e,["components"]);return Object(o.b)("wrapper",Object(n.a)({},s,t,{components:r,mdxType:"MDXLayout"}),Object(o.b)("h3",{id:"description"},"Description"),Object(o.b)("p",null,"Get the list of members in the current channel."))}b.isMDXComponent=!0}}]);