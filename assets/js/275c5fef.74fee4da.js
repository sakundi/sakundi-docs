"use strict";(self.webpackChunktikuna=self.webpackChunktikuna||[]).push([[310],{5680:(e,t,n)=>{n.d(t,{xA:()=>u,yg:()=>m});var r=n(6540);function o(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var r=Object.getOwnPropertySymbols(e);t&&(r=r.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,r)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){o(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function c(e,t){if(null==e)return{};var n,r,o=function(e,t){if(null==e)return{};var n,r,o={},i=Object.keys(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||(o[n]=e[n]);return o}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(r=0;r<i.length;r++)n=i[r],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(o[n]=e[n])}return o}var l=r.createContext({}),s=function(e){var t=r.useContext(l),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},u=function(e){var t=s(e.components);return r.createElement(l.Provider,{value:t},e.children)},d="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return r.createElement(r.Fragment,{},t)}},f=r.forwardRef((function(e,t){var n=e.components,o=e.mdxType,i=e.originalType,l=e.parentName,u=c(e,["components","mdxType","originalType","parentName"]),d=s(n),f=o,m=d["".concat(l,".").concat(f)]||d[f]||p[f]||i;return n?r.createElement(m,a(a({ref:t},u),{},{components:n})):r.createElement(m,a({ref:t},u))}));function m(e,t){var n=arguments,o=t&&t.mdxType;if("string"==typeof e||o){var i=n.length,a=new Array(i);a[0]=f;var c={};for(var l in t)hasOwnProperty.call(t,l)&&(c[l]=t[l]);c.originalType=e,c[d]="string"==typeof e?e:o,a[1]=c;for(var s=2;s<i;s++)a[s]=n[s];return r.createElement.apply(null,a)}return r.createElement.apply(null,n)}f.displayName="MDXCreateElement"},6650:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>c,toc:()=>s});var r=n(8168),o=(n(6540),n(5680));const i={id:"beacon-node",title:"Beacon Node Monitor",sidebar_label:"Beacon Node Monitor",description:"Monitoring Default Beacon Node metrics",keywords:["tikuna","team","scientists"],custom_edit_url:null},a=void 0,c={unversionedId:"monitoring/beacon-node",id:"monitoring/beacon-node",title:"Beacon Node Monitor",description:"Monitoring Default Beacon Node metrics",source:"@site/docs/monitoring/beacon-node.md",sourceDirName:"monitoring",slug:"/monitoring/beacon-node",permalink:"/docs/monitoring/beacon-node",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"beacon-node",title:"Beacon Node Monitor",sidebar_label:"Beacon Node Monitor",description:"Monitoring Default Beacon Node metrics",keywords:["tikuna","team","scientists"],custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"P2P Network Status (ETH2)",permalink:"/docs/monitoring/network-eth2"},next:{title:"Eclipse Attacks Dashboard",permalink:"/docs/monitoring/eclipse-attacks"}},l={},s=[],u={toc:s},d="wrapper";function p(e){let{components:t,...n}=e;return(0,o.yg)(d,(0,r.A)({},u,n,{components:t,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("p",null,"Here you can find a monitoring dashboard with available metrics for our beacon node infrastructure:"),(0,o.yg)("a",{href:"https://dash.tikuna.io/public-dashboards/ca0ff8d66a7c49948a0d20339555bade?orgId=0"},(0,o.yg)("div",{className:"buttonDashboard"})))}p.isMDXComponent=!0}}]);