"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2067],{26128:(e,r,n)=>{n.r(r),n.d(r,{assets:()=>u,contentTitle:()=>s,default:()=>v,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var t=n(85893),a=n(11151),l=n(74866),i=n(85162);const o={id:"oracles",title:"Decentralized Oracles"},s=void 0,c={id:"develop/relevant-contracts/oracles",title:"Decentralized Oracles",description:"\uc624\ub77c\ud074\uc740 \uc790\uc0b0\uc758 \ud604\uc7ac \uac00\uaca9\uc744 \uc870\ud68c\ud560 \uc218 \uc788\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc785\ub2c8\ub2e4. \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \uc778\ud130\ub137\uc5d0 \uc5f0\uacb0\ud558\uc5ec \uc815\ubcf4\ub97c \uac00\uc838\uc62c \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0, \uc624\ub77c\ud074\uc740 \ub204\uad70\uac00 \uc9c0\uc18d\uc801\uc73c\ub85c \uac00\uaca9\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub370 \uc758\uc874\ud569\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \uc2dc\uc7a5\uc758 \ucd5c\uc2e0 \uc815\ubcf4\uc640 \uc624\ub77c\ud074 \ub370\uc774\ud130 \uc0ac\uc774\uc5d0 \uc9c0\uc5f0\uc774 \uc788\uc744 \uc218 \uc788\ub2e4\ub294 \uc810\uc744 \uc624\ub77c\ud074\uc744 \uc0ac\uc6a9\ud560 \ub54c \uc5fc\ub450\uc5d0 \ub450\uc5b4\uc57c \ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.develop/relevant-contracts/oracles.md",sourceDirName:"2.develop/relevant-contracts",slug:"/develop/relevant-contracts/oracles",permalink:"/ko/develop/relevant-contracts/oracles",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/relevant-contracts/oracles.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",frontMatter:{id:"oracles",title:"Decentralized Oracles"},sidebar:"contracts",previous:{title:"Non Fungible Tokens (NFT)",permalink:"/ko/develop/relevant-contracts/nft"},next:{title:"Autonomous Organizations (DAO)",permalink:"/ko/develop/relevant-contracts/dao"}},u={},d=[{value:"\uac00\uaca9 \uc624\ub77c\ud074",id:"\uac00\uaca9-\uc624\ub77c\ud074",level:2},{value:"Native Oracle",id:"native-oracle",level:3},{value:"\uc790\uc0b0 \ucffc\ub9ac",id:"\uc790\uc0b0-\ucffc\ub9ac",level:4},{value:"\uc790\uc0b0 \uac00\uaca9 \uac00\uc838\uc624\uae30",id:"\uc790\uc0b0-\uac00\uaca9-\uac00\uc838\uc624\uae30",level:4}];function h(e){const r={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(r.p,{children:"\uc624\ub77c\ud074\uc740 \uc790\uc0b0\uc758 \ud604\uc7ac \uac00\uaca9\uc744 \uc870\ud68c\ud560 \uc218 \uc788\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc785\ub2c8\ub2e4. \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \uc778\ud130\ub137\uc5d0 \uc5f0\uacb0\ud558\uc5ec \uc815\ubcf4\ub97c \uac00\uc838\uc62c \uc218 \uc5c6\uae30 \ub54c\ubb38\uc5d0, \uc624\ub77c\ud074\uc740 \ub204\uad70\uac00 \uc9c0\uc18d\uc801\uc73c\ub85c \uac00\uaca9\uc744 \uc5c5\ub370\uc774\ud2b8\ud558\ub294 \ub370 \uc758\uc874\ud569\ub2c8\ub2e4. \uadf8\ub807\uae30 \ub54c\ubb38\uc5d0 \uc2dc\uc7a5\uc758 \ucd5c\uc2e0 \uc815\ubcf4\uc640 \uc624\ub77c\ud074 \ub370\uc774\ud130 \uc0ac\uc774\uc5d0 \uc9c0\uc5f0\uc774 \uc788\uc744 \uc218 \uc788\ub2e4\ub294 \uc810\uc744 \uc624\ub77c\ud074\uc744 \uc0ac\uc6a9\ud560 \ub54c \uc5fc\ub450\uc5d0 \ub450\uc5b4\uc57c \ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(r.p,{children:[(0,t.jsx)(r.a,{href:"/ko/develop/relevant-contracts/ft",children:"FT"})," \ubc0f ",(0,t.jsx)(r.a,{href:"/ko/develop/relevant-contracts/nft",children:"NFT"}),"\uc640 \ub2ec\ub9ac \uc624\ub77c\ud074 \ucee8\ud2b8\ub799\ud2b8\ub294 \ud45c\uc900\ud654\ub418\uc9c0 \uc54a\uc558\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \ub2e4\uc591\ud55c \uc81c\uacf5\uc5c5\uccb4\uc640 \uad6c\ucd95\ub41c \uc624\ub77c\ud074\uc744 \uc0ac\uc6a9\ud558\ub294 \ubc29\ubc95\uc744 \ub098\uc5f4\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(r.hr,{}),"\n",(0,t.jsx)(r.h2,{id:"\uac00\uaca9-\uc624\ub77c\ud074",children:"\uac00\uaca9 \uc624\ub77c\ud074"}),"\n",(0,t.jsx)(r.h3,{id:"native-oracle",children:"Native Oracle"}),"\n",(0,t.jsxs)(r.ul,{children:["\n",(0,t.jsxs)(r.li,{children:["Account: ",(0,t.jsx)(r.strong,{children:"priceoracle.near"})," | ",(0,t.jsx)(r.strong,{children:"priceoracle.testnet"})]}),"\n",(0,t.jsxs)(r.li,{children:["Creator: ",(0,t.jsx)(r.a,{href:"https://github.com/NearDeFi",children:"NearDefi"})]}),"\n",(0,t.jsxs)(r.li,{children:["\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8: ",(0,t.jsx)(r.a,{href:"https://github.com/NearDeFi/price-oracle",children:"https://github.com/NearDeFi/price-oracle"})]}),"\n",(0,t.jsxs)(r.li,{children:["\ucee8\ud2b8\ub799\ud2b8 \uccb4\uacb0 \ubd07: ",(0,t.jsx)(r.a,{href:"https://github.com/NearDeFi/near-price-oracle-bot",children:"https://github.com/NearDeFi/near-price-oracle-bot"})]}),"\n"]}),"\n",(0,t.jsx)(r.h4,{id:"\uc790\uc0b0-\ucffc\ub9ac",children:"\uc790\uc0b0 \ucffc\ub9ac"}),"\n",(0,t.jsx)(l.Z,{children:(0,t.jsx)(i.Z,{value:"cli",label:"CLI",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"NEAR_ENV=mainnet near view priceoracle.near get_assets\n"})})})}),"\n",(0,t.jsx)(r.h4,{id:"\uc790\uc0b0-\uac00\uaca9-\uac00\uc838\uc624\uae30",children:"\uc790\uc0b0 \uac00\uaca9 \uac00\uc838\uc624\uae30"}),"\n",(0,t.jsx)(l.Z,{children:(0,t.jsx)(i.Z,{value:"cli",label:"CLI",children:(0,t.jsx)(r.pre,{children:(0,t.jsx)(r.code,{className:"language-bash",children:"NEAR_ENV=mainnet near view priceoracle.near get_price_data\n"})})})}),"\n",(0,t.jsx)(r.admonition,{type:"tip",children:(0,t.jsxs)(r.mdxAdmonitionTitle,{children:["Divide the returned ",(0,t.jsx)(r.code,{children:"multiplier"})," by ",(0,t.jsx)(r.code,{children:"10000"})," to obtain the price in USD. :::"]})})]})}function v(e={}){const{wrapper:r}={...(0,a.a)(),...e.components};return r?(0,t.jsx)(r,{...e,children:(0,t.jsx)(h,{...e})}):h(e)}},85162:(e,r,n)=>{n.d(r,{Z:()=>i});n(67294);var t=n(36905);const a={tabItem:"tabItem_Ymn6"};var l=n(85893);function i(e){var r=e.children,n=e.hidden,i=e.className;return(0,l.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,i),hidden:n,children:r})}},74866:(e,r,n)=>{n.d(r,{Z:()=>y});var t=n(67294),a=n(36905),l=n(12466),i=n(16550),o=n(20469),s=n(91980),c=n(67392),u=n(50012);function d(e){var r,n;return null!=(r=null==(n=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((r=e.props)&&"object"==typeof r&&"value"in r))return e;var r;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?r:[]}function h(e){var r=e.values,n=e.children;return(0,t.useMemo)((function(){var e=null!=r?r:function(e){return d(e).map((function(e){var r=e.props;return{value:r.value,label:r.label,attributes:r.attributes,default:r.default}}))}(n);return function(e){var r=(0,c.l)(e,(function(e,r){return e.value===r.value}));if(r.length>0)throw new Error('Docusaurus error: Duplicate values "'+r.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[r,n])}function v(e){var r=e.value;return e.tabValues.some((function(e){return e.value===r}))}function p(e){var r=e.queryString,n=void 0!==r&&r,a=e.groupId,l=(0,i.k6)(),o=function(e){var r=e.queryString,n=void 0!==r&&r,t=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:n,groupId:a});return[(0,s._X)(o),(0,t.useCallback)((function(e){if(o){var r=new URLSearchParams(l.location.search);r.set(o,e),l.replace(Object.assign({},l.location,{search:r.toString()}))}}),[o,l])]}function f(e){var r,n,a,l,i=e.defaultValue,s=e.queryString,c=void 0!==s&&s,d=e.groupId,f=h(e),m=(0,t.useState)((function(){return function(e){var r,n=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!v({value:n,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(r=t.find((function(e){return e.default})))?r:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),b=m[0],g=m[1],x=p({queryString:c,groupId:d}),j=x[0],N=x[1],y=(r=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),n=(0,u.Nk)(r),a=n[0],l=n[1],[a,(0,t.useCallback)((function(e){r&&l.set(e)}),[r,l])]),k=y[0],w=y[1],T=function(){var e=null!=j?j:k;return v({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){T&&g(T)}),[T]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!v({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);g(e),N(e),w(e)}),[N,w,f]),tabValues:f}}var m=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function x(e){var r=e.className,n=e.block,t=e.selectedValue,i=e.selectValue,o=e.tabValues,s=[],c=(0,l.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var r=e.currentTarget,n=s.indexOf(r),a=o[n].value;a!==t&&(c(r),i(a))},d=function(e){var r,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,a=s.indexOf(e.currentTarget)+1;n=null!=(t=s[a])?t:s[0];break;case"ArrowLeft":var l,i=s.indexOf(e.currentTarget)-1;n=null!=(l=s[i])?l:s[s.length-1]}null==(r=n)||r.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},r),children:o.map((function(e){var r=e.value,n=e.label,l=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:t===r?0:-1,"aria-selected":t===r,ref:function(e){return s.push(e)},onKeyDown:d,onClick:u},l,{className:(0,a.Z)("tabs__item",b.tabItem,null==l?void 0:l.className,{"tabs__item--active":t===r}),children:null!=n?n:r}),r)}))})}function j(e){var r=e.lazy,n=e.children,a=e.selectedValue,l=(Array.isArray(n)?n:[n]).filter(Boolean);if(r){var i=l.find((function(e){return e.props.value===a}));return i?(0,t.cloneElement)(i,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:l.map((function(e,r){return(0,t.cloneElement)(e,{key:r,hidden:e.props.value!==a})}))})}function N(e){var r=f(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(x,Object.assign({},e,r)),(0,g.jsx)(j,Object.assign({},e,r))]})}function y(e){var r=(0,m.Z)();return(0,g.jsx)(N,Object.assign({},e,{children:d(e.children)}),String(r))}},11151:(e,r,n)=>{n.d(r,{Z:()=>o,a:()=>i});var t=n(67294);const a={},l=t.createContext(a);function i(e){const r=t.useContext(l);return t.useMemo((function(){return"function"==typeof e?e(r):{...r,...e}}),[r,e])}function o(e){let r;return r=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),t.createElement(l.Provider,{value:r},e.children)}}}]);