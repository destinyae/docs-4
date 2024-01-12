"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7381],{71813:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>u,contentTitle:()=>l,default:()=>h,frontMatter:()=>o,metadata:()=>c,toc:()=>d});var r=t(85893),a=t(11151),i=t(74866),s=t(85162);const o={id:"bos",title:"NEAR Component",hide_table_of_contents:!1},l=void 0,c={id:"primitives/dex/interacting/bos",title:"NEAR Component",description:"This section describes how to interact with DEXs directly from a NEAR Component.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/7.primitives/dex/interacting/bos.md",sourceDirName:"7.primitives/dex/interacting",slug:"/primitives/dex/interacting/bos",permalink:"/vi/primitives/dex/interacting/bos",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dex/interacting/bos.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",frontMatter:{id:"bos",title:"NEAR Component",hide_table_of_contents:!1},sidebar:"primitives",previous:{title:"Introduction",permalink:"/vi/primitives/dex/introduction"},next:{title:"Web Application",permalink:"/vi/primitives/dex/interacting/web-app"}},u={},d=[{value:"Get token price",id:"get-token-price",level:2},{value:"Swap tokens",id:"swap-tokens",level:2},{value:"Get pools",id:"get-pools",level:3},{value:"Check deposit balances",id:"check-deposit-balances",level:3},{value:"Deposit funds",id:"deposit-funds",level:3},{value:"Additional Resources",id:"additional-resources",level:2}];function p(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",p:"p",pre:"pre",ul:"ul",...(0,a.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["This section describes how to interact with DEXs directly from a ",(0,r.jsx)(n.a,{href:"/vi/bos/components",children:"NEAR Component"}),"."]}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"get-token-price",children:"Get token price"}),"\n",(0,r.jsx)(n.p,{children:"Here is how to obtain the price for different tokens in US dollars from different exchanges."}),"\n",(0,r.jsx)(i.Z,{children:(0,r.jsxs)(s.Z,{value:"Ref Finance API",label:"Ref Finance API",children:[(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const tokenContract = "token.v2.ref-finance.near";\nconst tokenPriceResult = fetch(\n  `https://indexer.ref.finance/get-token-price?token_id=${tokenContract}`\n).body;\nconst tokenPriceValue = JSON.parse(tokenPriceResult);\n'})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example response"}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "token_contract_id": "token.v2.ref-finance.near",\n  "price": "0.08153090"\n}\n'})})})]}),(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["Ref Finance has a method to ",(0,r.jsx)(n.a,{href:"https://indexer.ref.finance/list-token-price",children:"get all token prices at once"}),"."]})})]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"swap-tokens",children:"Swap tokens"}),"\n",(0,r.jsx)(n.p,{children:"This snippet will enable your users to swap FTs."}),"\n",(0,r.jsx)(i.Z,{children:(0,r.jsxs)(s.Z,{value:"Ref Finance",label:"Ref Finance",children:[(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["Please, be careful using third-party contracts. Make sure that your account meets all the requirements of the smart contract if they exist. ",(0,r.jsx)(n.a,{href:"https://guide.ref.finance/",children:"Ref Finance docs"}),"."]})}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const ammContract = "v2.ref-finance.near";\nconst result = Near.call(\n  ammContract,\n  "swap",\n  {\n    actions: [\n      {\n        pool_id: 79,\n        token_in: "token.v2.ref-finance.near",\n        token_out: "wrap.near",\n        amount_in: "100000000000000000",\n        min_amount_out: "1",\n      },\n    ],\n  },\n  300000000000000,\n  1\n);\n'})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example response"}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'"5019606679394603179450"\n'})})})]}),(0,r.jsx)("hr",{class:"subsection"}),(0,r.jsx)(n.h3,{id:"get-pools",children:"Get pools"}),(0,r.jsxs)(n.p,{children:["In order to make swap you need to know ",(0,r.jsx)(n.code,{children:"pool_id"}),". The pool index is its id."]}),(0,r.jsx)(n.p,{children:"Query available pools:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const ammContract = "v2.ref-finance.near";\nconst result = Near.view(\n  ammContract,\n  "get_pools",\n  {\n    from_index: 0,\n    limit: 1000\n  }\n);\n'})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example response"}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:"[\n  {\n    pool_kind: 'SIMPLE_POOL',\n    token_account_ids: [ 'token.skyward.near', 'wrap.near' ],\n    amounts: [ '51865812079751349630100', '6254162663147994789053210138' ],\n    total_fee: 30,\n    shares_total_supply: '1305338644973934698612124055',\n    amp: 0\n  },\n  {\n    pool_kind: 'SIMPLE_POOL',\n    token_account_ids: [\n      'c02aaa39b223fe8d0a0e5c4f27ead9083c756cc2.factory.bridge.near',\n      'wrap.near'\n    ],\n    amounts: [ '783621938569399817', '1100232280852443291118200599' ],\n    total_fee: 30,\n    shares_total_supply: '33923015415693335344747628',\n    amp: 0\n  }\n]\n"})})})]}),(0,r.jsx)("hr",{class:"subsection"}),(0,r.jsx)(n.h3,{id:"check-deposit-balances",children:"Check deposit balances"}),(0,r.jsx)(n.p,{children:"In order to make swap you need to have enough tokens in deposit on Ref Finance."}),(0,r.jsx)(n.p,{children:"Query your deposit balances:"}),(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-js",children:'const ammContract = "v2.ref-finance.near";\nconst depositBalances = Near.view(\n  ammContract,\n  "get_deposits",\n  {\n    account_id: "bob.near"\n  }\n);\n'})}),(0,r.jsxs)(t,{children:[(0,r.jsx)("summary",{children:"Example response"}),(0,r.jsx)("p",{children:(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-json",children:'{\n  "token.v2.ref-finance.near": "0",\n  "wrap.near": "0"\n}\n'})})})]}),(0,r.jsx)("hr",{class:"subsection"}),(0,r.jsx)(n.h3,{id:"deposit-funds",children:"Deposit funds"}),(0,r.jsxs)(n.p,{children:["See how to deposit funds on Ref Finance ",(0,r.jsx)(n.a,{href:"/vi/primitives/ft/interacting/bos#attaching-fts-to-a-call",children:"here"}),"."]})]})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"additional-resources",children:"Additional Resources"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.a,{href:"https://near.org/near/widget/ComponentDetailsPage?src=weige.near/widget/ref-swap",children:"Ref Finance Component"}),": A widget ready to be forked that enables to swap tokens in ref finance."]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(p,{...e})}):p(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var i=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var r=t(67294),a=t(36905),i=t(12466),s=t(16550),o=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function f(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,i=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(o),(0,r.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function m(e){var n,t,a,i,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,m=p(e),v=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:s,tabValues:m})})),b=v[0],x=v[1],j=f({queryString:c,groupId:d}),g=j[0],k=j[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],i=t[1],[a,(0,r.useCallback)((function(e){n&&i.set(e)}),[n,i])]),y=w[0],_=w[1],N=function(){var e=null!=g?g:y;return h({value:e,tabValues:m})?e:null}();return(0,o.Z)((function(){N&&x(N)}),[N]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);x(e),k(e),_(e)}),[k,_,m]),tabValues:m}}var v=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function j(e){var n=e.className,t=e.block,r=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),a=o[t].value;a!==r&&(c(n),s(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;t=null!=(i=l[s])?i:l[l.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},i,{className:(0,a.Z)("tabs__item",b.tabItem,null==i?void 0:i.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function g(e){var n=e.lazy,t=e.children,a=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===a}));return s?(0,r.cloneElement)(s,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function k(e){var n=m(e);return(0,x.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(j,Object.assign({},e,n)),(0,x.jsx)(g,Object.assign({},e,n))]})}function w(e){var n=(0,v.Z)();return(0,x.jsx)(k,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var r=t(67294);const a={},i=r.createContext(a);function s(e){const n=r.useContext(i);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:s(e.components),r.createElement(i.Provider,{value:n},e.children)}}}]);