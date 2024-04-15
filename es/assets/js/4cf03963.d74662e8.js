"use strict";(self.webpackChunktikuna=self.webpackChunktikuna||[]).push([[143],{5680:(e,a,r)=>{r.d(a,{xA:()=>d,yg:()=>f});var n=r(6540);function o(e,a,r){return a in e?Object.defineProperty(e,a,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[a]=r,e}function s(e,a){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);a&&(n=n.filter((function(a){return Object.getOwnPropertyDescriptor(e,a).enumerable}))),r.push.apply(r,n)}return r}function t(e){for(var a=1;a<arguments.length;a++){var r=null!=arguments[a]?arguments[a]:{};a%2?s(Object(r),!0).forEach((function(a){o(e,a,r[a])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):s(Object(r)).forEach((function(a){Object.defineProperty(e,a,Object.getOwnPropertyDescriptor(r,a))}))}return e}function i(e,a){if(null==e)return{};var r,n,o=function(e,a){if(null==e)return{};var r,n,o={},s=Object.keys(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)>=0||(o[r]=e[r]);return o}(e,a);if(Object.getOwnPropertySymbols){var s=Object.getOwnPropertySymbols(e);for(n=0;n<s.length;n++)r=s[n],a.indexOf(r)>=0||Object.prototype.propertyIsEnumerable.call(e,r)&&(o[r]=e[r])}return o}var l=n.createContext({}),c=function(e){var a=n.useContext(l),r=a;return e&&(r="function"==typeof e?e(a):t(t({},a),e)),r},d=function(e){var a=c(e.components);return n.createElement(l.Provider,{value:a},e.children)},u="mdxType",p={inlineCode:"code",wrapper:function(e){var a=e.children;return n.createElement(n.Fragment,{},a)}},m=n.forwardRef((function(e,a){var r=e.components,o=e.mdxType,s=e.originalType,l=e.parentName,d=i(e,["components","mdxType","originalType","parentName"]),u=c(r),m=o,f=u["".concat(l,".").concat(m)]||u[m]||p[m]||s;return r?n.createElement(f,t(t({ref:a},d),{},{components:r})):n.createElement(f,t({ref:a},d))}));function f(e,a){var r=arguments,o=a&&a.mdxType;if("string"==typeof e||o){var s=r.length,t=new Array(s);t[0]=m;var i={};for(var l in a)hasOwnProperty.call(a,l)&&(i[l]=a[l]);i.originalType=e,i[u]="string"==typeof e?e:o,t[1]=i;for(var c=2;c<s;c++)t[c]=r[c];return n.createElement.apply(null,t)}return n.createElement.apply(null,r)}m.displayName="MDXCreateElement"},8733:(e,a,r)=>{r.r(a),r.d(a,{assets:()=>l,contentTitle:()=>t,default:()=>p,frontMatter:()=>s,metadata:()=>i,toc:()=>c});var n=r(8168),o=(r(6540),r(5680));const s={id:"stateoftheart",title:"Estado del Arte",sidebar_label:"Estado del Arte",description:"Tikuna - an Ethereum blockchain network security monitoring system",keywords:["tikuna","ethereum","research grant"],hide_table_of_contents:!0,custom_edit_url:null},t=void 0,i={unversionedId:"research/stateoftheart",id:"research/stateoftheart",title:"Estado del Arte",description:"Tikuna - an Ethereum blockchain network security monitoring system",source:"@site/i18n/es/docusaurus-plugin-content-docs/current/research/stateoftheart.md",sourceDirName:"research",slug:"/research/stateoftheart",permalink:"/es/docs/research/stateoftheart",draft:!1,editUrl:null,tags:[],version:"current",frontMatter:{id:"stateoftheart",title:"Estado del Arte",sidebar_label:"Estado del Arte",description:"Tikuna - an Ethereum blockchain network security monitoring system",keywords:["tikuna","ethereum","research grant"],hide_table_of_contents:!0,custom_edit_url:null},sidebar:"tutorialSidebar",previous:{title:"Introducci\xf3n al proyecto",permalink:"/es/docs/research/intro"},next:{title:"Referencias",permalink:"/es/docs/research/references"}},l={},c=[],d={toc:c},u="wrapper";function p(e){let{components:a,...r}=e;return(0,o.yg)(u,(0,n.A)({},d,r,{components:a,mdxType:"MDXLayout"}),(0,o.yg)("hr",null),(0,o.yg)("p",null,"Ethereum fue presentado formalmente por Vitalik Buterin en su whitepaper en 2014 ",(0,o.yg)("a",{parentName:"p",href:"/es/docs/research/references"},"[2]")," y lanzando en 2015; se considera una de las plataformas de blockchain p\xfablicas de criptomonedas de c\xf3digo abierto m\xe1s conocidas que admite la funcionalidad de contratos inteligentes con Ether (ETH o \u039e) somo su criptomoneda nativa y Solidity como su lenguaje de programaci\xf3n. De acuerdo con ",(0,o.yg)("a",{parentName:"p",href:"/es/docs/research/references"},"[1]"),", hubo un total de 105.58 millones de transacciones y 1.45 millones de contratos inteligentes creados en el primer cuarto (Q1) de 2022. Adicionalmente, sobre la capitalizaci\xf3n de mercado, Ethereum es la segunda criptomoneda m\xe1s grande despu\xe9s de Bitcoin, con al rededor de $234 billones en Agosto de 2022 ",(0,o.yg)("a",{parentName:"p",href:"/es/docs/research/references"},"[3]"),"."),(0,o.yg)("p",null,"Por otro lado, Ethereum permite a los desarrolladores crear aplicaciones descentralizadas (dApps) en diversos sectores, como las finanzas descentralizadas (DeFi) ",(0,o.yg)("a",{parentName:"p",href:"/es/docs/research/references"},"[4]"),", juegos ",(0,o.yg)("a",{parentName:"p",href:"/es/docs/research/references"},"[5,6]"),", tokens no fungibles (NFTs) ",(0,o.yg)("a",{parentName:"p",href:"/es/docs/research/references"},"[7]"),", e Internet de las Cosas (IoT) ",(0,o.yg)("a",{parentName:"p",href:"/es/docs/research/references"},"[10]")," que se ejecutan en una red peer-to-peer (P2P), minimizando las posibilidades de fraude, censura, tiempo de inactividad o participaci\xf3n de terceros y haci\xe9ndolos m\xe1s confiables. Adem\xe1s, la red principal p\xfablica de Ethereum acaba de pasar por una actualizaci\xf3n significativa a Ethereum 2 (oficialmente despu\xe9s de cambiar el nombre llamado The Merge ($ETH) ",(0,o.yg)("a",{parentName:"p",href:"/es/docs/research/references"},"[8, 9]"),") para mejorar su rendimiento, eficiencia y escalabilidad."),(0,o.yg)("p",null,"Las blockchains tienen muchas capas, como la capa de consenso ",(0,o.yg)("a",{parentName:"p",href:"/es/docs/research/references"},"[11-13]"),", capa de scripting, capa de red, o capa de DApps, pero la que nos interesa es la capa de nivel m\xe1s bajo, es decir, la red P2P que permite que los nodos se interconecten entre s\xed y compartan informaci\xf3n, la cual es un componente de vital importancia para la blockchain Ethereum. La idea b\xe1sica detr\xe1s de la red P2P es que un grupo de computadoras llamadas nodos se conectan para compartir datos sin necesidad de una computadora centralizada, es decir, todos los nodos de la red tienen las mismas capacidades sin tener ning\xfan privilegio especial, como el que se usa en los sistemas de intercambio de archivos Napster, LimeWire y Gnutella."),(0,o.yg)("p",null,"La red peer-to-peer (P2P) es el componente fundamental que sirve como base para cualquier tecnolog\xeda blockchain. Pero, al igual que otras formas de tecnolog\xeda, las redes P2P pueden verse afectadas por una serie de problemas de seguridad. Los atacantes pueden explotar algunas de las vulnerabilidades de la red P2P, para llevar a cabo varios vectores de ataque en la  blockchain, como el ataque eclipse, ataque de mineria selfish, ataques Sybil, o ataques DDoS. Por esta raz\xf3n, para abordar tanto los diferentes vectores de ataque en la plataforma Ethereum como las vulnerabilidades de seguridad de la red P2P, muchos investigadores han comenzado recientemente a enfocar sus esfuerzos en esta direcci\xf3n."),(0,o.yg)("p",null,"A continuaci\xf3n se presentan algunos de los trabajos m\xe1s recientes que abordan los desaf\xedos de seguridad de las redes P2P de blockchain de Ethereum:"),(0,o.yg)("ul",null,(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Este paper ",(0,o.yg)("a",{parentName:"p",href:"/es/docs/research/references"},"[14]")," se enfoca generalmente en los problemas de seguridad de cada capa en la blockchain de Ethereum, como la capa de red, proporcionando un an\xe1lisis en profundidad que cubre las siguientes tres \xe1reas:"),(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},"Los potenciales ataques como el ataque eclipse y el ataque account hijacking."),(0,o.yg)("li",{parentName:"ol"},"Las vulnerabilidades que conducen a estos, por ejemplo, la vulnerabilidad de creaci\xf3n de nodos ilimitados y la vulnerabilidad de conexiones entrantes sin l\xedmite."),(0,o.yg)("li",{parentName:"ol"},"Los efectos de cada incidente, como el doble gasto o la denegaci\xf3n de servicio (DoS). ")),(0,o.yg)("p",{parentName:"li"},"Adem\xe1s de ofrecer una visi\xf3n general de la eficacia y las limitaciones de los Sistemas de Detecci\xf3n de Intrusos (IDS) existentes como t\xe9cnica de defensa frente a estos ataques.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Este paper ",(0,o.yg)("a",{parentName:"p",href:"/es/docs/research/references"},"[15]")," propone el protocolo GossipSub y sus dos componentes, la construcci\xf3n de la malla y la funci\xf3n de puntuaci\xf3n. El GossipSub es un protocolo de mensajer\xeda que permite la transmisi\xf3n de mensajes de manera r\xe1pida y robusta en redes permisivas, como la capa de red de Ethereum 2.0, para hacerlo, por un lado, m\xe1s seguro contra varios tipos de ataques (como el ataque Sybil, el ataque Eclipse y el ataque Cold Boot), y por otro lado, para facilitar una transmisi\xf3n m\xe1s r\xe1pida de los mensajes dentro del la red. Adem\xe1s, los autores describen algunas de las contramedidas que se presentan en el protocolo GossipSub, como el mantenimiento controlado de la malla, el grafting aportunista, y distribuci\xf3n adaptativa de los mensajes gossip. En conclusi\xf3n, los escritores eval\xfaan el protocolo GossipSub contra varios ataques y demuestran su resistencia a estos ataques.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"En este estudio ",(0,o.yg)("a",{parentName:"p",href:"/es/docs/research/references"},"[16]"),", los autores primero destacan parte de la estructura de la red Eth2, el ecosistema de la red y los peligros potenciales que podr\xeda plantear. Adem\xe1s, los escritores investigan exhaustivamente la red P2P de la red principal Eth2 mediante el desarrollo de una herramienta de monitoreo llamada Armiarma. Esta herramienta consta de dos componentes, el rastreador Armiarma y el analizador Armiarma, para abordar la falta de informaci\xf3n sobre el rendimiento del protocolo GossipSub y sus nodos en la red principal Eth2. Adicional, se realiz\xf3 un experimento para evaluar las capacidades del enfoque propuesto y se agrup\xf3 un an\xe1lisis de los resultados obtenidos en las siguientes tres partes:"),(0,o.yg)("ol",{parentName:"li"},(0,o.yg)("li",{parentName:"ol"},"An\xe1lisis de red Eth2."),(0,o.yg)("li",{parentName:"ol"},"Interacci\xf3n de clientes Eth2."),(0,o.yg)("li",{parentName:"ol"},"An\xe1lisis de peers individuales")),(0,o.yg)("p",{parentName:"li"},"Adem\xe1s, el an\xe1lisis identifica varios problemas con la cadena Beacon de Eth2, incluido el alojamiento fisico geogr\xe1fico de los validadores de Eth2. Finalmente, los autores concluyen que la red se est\xe1 comportando de manera saludable; sin embargo, a\xfan deben considerarse algunos temas relacionados con la descentralizaci\xf3n.")),(0,o.yg)("li",{parentName:"ul"},(0,o.yg)("p",{parentName:"li"},"Esta investigaci\xf3n ",(0,o.yg)("a",{parentName:"p",href:"/es/docs/research/references"},"[17]"),' analiza "los ataques eclipse" en la red P2P de Ethereum. Un ataque eclipse es un ataque que permite a un atacante aislar un nodo dentro de la red P2P, al obtener el control completo del acceso a la informaci\xf3n de un nodo o el control sobre todo lo que ve el nodo. Este ataque se analiza en el contexto de la red P2P de Ethereum. Los autores desarrollaron un modelo de detecci\xf3n de ataques eclipse llamado ETH-EDS que se dirige principalmente a la plataforma Ethereum. Este modelo utiliz\xf3 la t\xe9cnica de clasificaci\xf3n de bosques aleatorios para examinar los paquetes de datos normales y de ataque en la red. Los paquetes de datos recopilados inclu\xedan detalles como el tama\xf1o de las etiquetas de los paquetes, la frecuencia con la que se acced\xeda y el tiempo de acceso. Los hallazgos de los experimentos muestran que los nodos de red maliciosos podr\xedan identificarse con un alto grado de precisi\xf3n.'))))}p.isMDXComponent=!0}}]);