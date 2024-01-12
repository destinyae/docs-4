"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5771],{98160:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>s,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>l,toc:()=>c});var r=t(85893),a=t(11151);t(74866),t(85162);const o={id:"web-app",title:"Web Application",hide_table_of_contents:!1},i=void 0,l={id:"primitives/dao/interacting/web-app",title:"Web Application",description:"This section describes how to create or interact with DAO directly from a web app.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/7.primitives/dao/interacting/web-app.md",sourceDirName:"7.primitives/dao/interacting",slug:"/primitives/dao/interacting/web-app",permalink:"/ko/primitives/dao/interacting/web-app",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dao/interacting/web-app.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",frontMatter:{id:"web-app",title:"Web Application",hide_table_of_contents:!1},sidebar:"primitives",previous:{title:"NEAR Component",permalink:"/ko/primitives/dao/interacting/bos"},next:{title:"Smart Contract",permalink:"/ko/primitives/dao/interacting/smart-contract"}},s={},c=[{value:"List of DAOs",id:"list-of-daos",level:2},{value:"List of proposals",id:"list-of-proposals",level:2},{value:"Create DAO",id:"create-dao",level:2},{value:"Create proposal",id:"create-proposal",level:2},{value:"Vote for proposal",id:"vote-for-proposal",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This section describes how to create or interact with DAO directly from a web app."}),"\n",(0,r.jsx)(n.admonition,{type:"info",children:(0,r.jsxs)(n.p,{children:["All the examples are using a ",(0,r.jsx)(n.code,{children:"Wallet"})," object, which comes from our ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",children:"basic template"})]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"list-of-daos",children:"List of DAOs"}),"\n",(0,r.jsx)(n.p,{children:"This snippet will enable you to query list of DAOs."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { Wallet } from './near-wallet';\n\nconst DAO_FACTORY_CONTRACT_ADDRESS = \"sputnik-dao.near\";\nconst wallet = new Wallet({ createAccessKeyFor: DAO_FACTORY_CONTRACT_ADDRESS });\n \nawait wallet.viewMethod({\n  method: 'get_dao_list',\n  args: {},\n  contractId: DAO_FACTORY_CONTRACT_ADDRESS\n});\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"list-of-proposals",children:"List of proposals"}),"\n",(0,r.jsx)(n.p,{children:"This snippet will enable you to query list of proposals for a particular DAO."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { Wallet } from './near-wallet';\n\nconst DAO_CONTRACT_ADDRESS = \"nearweek-news-contribution.sputnik-dao.near\";\nconst wallet = new Wallet({ createAccessKeyFor: DAO_CONTRACT_ADDRESS });\n \nawait wallet.viewMethod({\n  method: 'get_proposals',\n  args: { from_index: 9262, limit: 2 },\n  contractId: DAO_CONTRACT_ADDRESS\n});\n"})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"create-dao",children:"Create DAO"}),"\n",(0,r.jsx)(n.p,{children:"This snippet will enable your users to create a DAO."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst DAO_FACTORY_CONTRACT_ADDRESS = "sputnik-dao.near";\nconst wallet = new Wallet({ createAccessKeyFor: DAO_FACTORY_CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'create\',\n  args: {\n    name: "primitives",\n    args: btoa({\n      config: {\n        name: "Primitives",\n        purpose: "Building primitives on NEAR",\n        metadata: ""\n      },\n      policy: ["bob.near"]\n    }),\n  },\n  contractId: DAO_FACTORY_CONTRACT_ADDRESS,\n  gas: 300000000000000,\n  deposit: 6000000000000000000000000\n});\n'})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The full list of roles and permissions you can find ",(0,r.jsx)(n.a,{href:"https://github.com/near-daos/sputnik-dao-contract#roles-and-permissions",children:"here"}),"."]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"create-proposal",children:"Create proposal"}),"\n",(0,r.jsx)(n.p,{children:"This snippet will enable your users to create a proposal for a particular DAO."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst DAO_CONTRACT_ADDRESS = "primitives.sputnik-dao.near";\nconst wallet = new Wallet({ createAccessKeyFor: DAO_CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'add_proposal\',\n  args: {\n    proposal: {\n      description: "My first proposal$$$$https://docs.near.org/",\n      kind: {\n        Transfer: {\n          token_id: "",\n          receiver_id: "bob.near",\n          amount: "10000000000000000000000000",\n        },\n      },\n    },\n  },\n  contractId: DAO_CONTRACT_ADDRESS,\n  gas: 300000000000000,\n  deposit: 100000000000000000000000\n});\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"vote-for-proposal",children:"Vote for proposal"}),"\n",(0,r.jsx)(n.p,{children:"This snippet will enable your users to cast a vote for proposal of a particular DAO."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"import { Wallet } from './near-wallet';\n\nconst DAO_CONTRACT_ADDRESS = \"primitives.sputnik-dao.near\";\nconst wallet = new Wallet({ createAccessKeyFor: DAO_CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: 'act_proposal',\n  args: { id: 0, action: \"VoteApprove\" },\n  contractId: DAO_CONTRACT_ADDRESS,\n  gas: 300000000000000,\n});\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Available vote options: ",(0,r.jsx)(n.code,{children:"VoteApprove"}),", ",(0,r.jsx)(n.code,{children:"VoteReject"}),", ",(0,r.jsx)(n.code,{children:"VoteRemove"}),"."]})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var o=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>D});var r=t(67294),a=t(36905),o=t(12466),i=t(16550),l=t(20469),s=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,i.k6)(),l=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,s._X)(l),(0,r.useCallback)((function(e){if(l){var n=new URLSearchParams(o.location.search);n.set(l,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[l,o])]}function m(e){var n,t,a,o,i=e.defaultValue,s=e.queryString,c=void 0!==s&&s,d=e.groupId,m=p(e),v=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:m})})),b=v[0],A=v[1],g=f({queryString:c,groupId:d}),w=g[0],j=g[1],D=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),x=D[0],T=D[1],_=function(){var e=null!=w?w:x;return h({value:e,tabValues:m})?e:null}();return(0,l.Z)((function(){_&&A(_)}),[_]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);A(e),j(e),T(e)}),[j,T,m]),tabValues:m}}var v=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var A=t(85893);function g(e){var n=e.className,t=e.block,r=e.selectedValue,i=e.selectValue,l=e.tabValues,s=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=s.indexOf(n),a=l[t].value;a!==r&&(c(n),i(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=s.indexOf(e.currentTarget)+1;t=null!=(r=s[a])?r:s[0];break;case"ArrowLeft":var o,i=s.indexOf(e.currentTarget)-1;t=null!=(o=s[i])?o:s[s.length-1]}null==(n=t)||n.focus()};return(0,A.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:l.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,A.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return s.push(e)},onKeyDown:d,onClick:u},o,{className:(0,a.Z)("tabs__item",b.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function w(e){var n=e.lazy,t=e.children,a=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=o.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,A.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function j(e){var n=m(e);return(0,A.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,A.jsx)(g,Object.assign({},e,n)),(0,A.jsx)(w,Object.assign({},e,n))]})}function D(e){var n=(0,v.Z)();return(0,A.jsx)(j,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>l,a:()=>i});var r=t(67294);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function l(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);