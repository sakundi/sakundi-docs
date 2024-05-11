"use strict";(self.webpackChunktikuna=self.webpackChunktikuna||[]).push([[619],{5680:(e,t,n)=>{n.d(t,{xA:()=>c,yg:()=>g});var o=n(6540);function r(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function i(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var o=Object.getOwnPropertySymbols(e);t&&(o=o.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,o)}return n}function a(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?i(Object(n),!0).forEach((function(t){r(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):i(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function d(e,t){if(null==e)return{};var n,o,r=function(e,t){if(null==e)return{};var n,o,r={},i=Object.keys(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||(r[n]=e[n]);return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(o=0;o<i.length;o++)n=i[o],t.indexOf(n)>=0||Object.prototype.propertyIsEnumerable.call(e,n)&&(r[n]=e[n])}return r}var s=o.createContext({}),l=function(e){var t=o.useContext(s),n=t;return e&&(n="function"==typeof e?e(t):a(a({},t),e)),n},c=function(e){var t=l(e.components);return o.createElement(s.Provider,{value:t},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var t=e.children;return o.createElement(o.Fragment,{},t)}},y=o.forwardRef((function(e,t){var n=e.components,r=e.mdxType,i=e.originalType,s=e.parentName,c=d(e,["components","mdxType","originalType","parentName"]),u=l(n),y=r,g=u["".concat(s,".").concat(y)]||u[y]||p[y]||i;return n?o.createElement(g,a(a({ref:t},c),{},{components:n})):o.createElement(g,a({ref:t},c))}));function g(e,t){var n=arguments,r=t&&t.mdxType;if("string"==typeof e||r){var i=n.length,a=new Array(i);a[0]=y;var d={};for(var s in t)hasOwnProperty.call(t,s)&&(d[s]=t[s]);d.originalType=e,d[u]="string"==typeof e?e:r,a[1]=d;for(var l=2;l<i;l++)a[l]=n[l];return o.createElement.apply(null,a)}return o.createElement.apply(null,n)}y.displayName="MDXCreateElement"},8890:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>s,contentTitle:()=>a,default:()=>p,frontMatter:()=>i,metadata:()=>d,toc:()=>l});var o=n(8168),r=(n(6540),n(5680));const i={id:"how-to-create-node",title:"How to Create Node",sidebar_label:"How to Create Node",description:"Create Node Process",keywords:["sakundi","validator nodes","blockchain","monitoring","create node"],hide_table_of_contents:!0,custom_edit_url:null},a=void 0,d={unversionedId:"user-section/how-to-create-node",id:"user-section/how-to-create-node",title:"How to Create Node",description:"Create Node Process",source:"@site/docs/user-section/how-to-create-node.md",sourceDirName:"user-section",slug:"/user-section/how-to-create-node",permalink:"/es/docs/user-section/how-to-create-node",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"how-to-create-node",title:"How to Create Node",sidebar_label:"How to Create Node",description:"Create Node Process",keywords:["sakundi","validator nodes","blockchain","monitoring","create node"],hide_table_of_contents:!0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Accessing Sakundi Dashboard",permalink:"/es/docs/user-section/accessing-sakundi-dashboard"},next:{title:"Understanding Metrics and Analytics",permalink:"/es/docs/user-section/understanding-metrics-and-analytics"}},s={},l=[{value:"Creating a Node",id:"creating-a-node",level:2},{value:"Step 1: Accessing the Create Node Dialog",id:"step-1-accessing-the-create-node-dialog",level:2},{value:"Step 2: Completing the Node Details",id:"step-2-completing-the-node-details",level:2},{value:"Step 3: Saving and Confirming",id:"step-3-saving-and-confirming",level:2}],c={toc:l},u="wrapper";function p(e){let{components:t,...n}=e;return(0,r.yg)(u,(0,o.A)({},c,n,{components:t,mdxType:"MDXLayout"}),(0,r.yg)("hr",null),(0,r.yg)("h2",{id:"creating-a-node"},"Creating a Node"),(0,r.yg)("p",null,"To begin monitoring your validator nodes in Sakundi, you need to create a node. Follow the steps below to create a new node in Sakundi:"),(0,r.yg)("h2",{id:"step-1-accessing-the-create-node-dialog"},"Step 1: Accessing the Create Node Dialog"),(0,r.yg)("p",null,'1) Log in to your Sakundi account.\n2) Navigate to the dashboard and locate the "Monitor" section.\n3) Click on the "Create Node" option to initiate the node creation process.'),(0,r.yg)("h2",{id:"step-2-completing-the-node-details"},"Step 2: Completing the Node Details"),(0,r.yg)("p",null,"You will be presented with a dialog containing six fields that need to be filled out to create a new node. Here's a description of each field:"),(0,r.yg)("div",{className:"sakundiCreateNodeDialog CreateNodeDialog"}),(0,r.yg)("p",null,'1) Node Type:\nSelect the type of node from the dropdown list. You can choose between "Prysm" or "Lighthouse" depending on the type of validator node you are setting up.'),(0,r.yg)("p",null,"2) Node Name:\nEnter a descriptive name for your node. This name will help you identify the node easily within Sakundi."),(0,r.yg)("p",null,"3) IP or DNS:\nProvide the IP address or domain name of your validator node. This is the address Sakundi will use to connect to your node for monitoring purposes."),(0,r.yg)("p",null,"4) Port:\nEnter the port number associated with your validator node. This information is necessary for establishing a connection with your node."),(0,r.yg)("p",null,"5) Validator ID:\nInput the validator ID associated with your node. This identifier helps Sakundi identify and track the performance of your validator."),(0,r.yg)("p",null,"6) Node Description:\nOptionally, you can provide a brief description of your node. This can include any additional information or notes you want to associate with the node."),(0,r.yg)("h2",{id:"step-3-saving-and-confirming"},"Step 3: Saving and Confirming"),(0,r.yg)("p",null,'Once you have filled out all the required fields, review the information to ensure accuracy. Once satisfied, click on the  "Create" button to create your node in Sakundi.'),(0,r.yg)("p",null,"Following these 3 steps, you can easily create a new node in Sakundi and begin monitoring the performance and security of your validator nodes."),(0,r.yg)("div",{className:"sakundiDashboardSuccessfullyCreated"}))}p.isMDXComponent=!0}}]);