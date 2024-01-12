"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9280],{21360:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>i,contentTitle:()=>l,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>c});var a=t(85893),r=t(11151);t(74866),t(85162);const s={id:"web-app",title:"Web Application",hide_table_of_contents:!1},l=void 0,o={id:"primitives/ft/interacting/web-app",title:"Web Application",description:"This section describes how to interact with FTs directly from a web app.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/ft/interacting/web-app.md",sourceDirName:"7.primitives/ft/interacting",slug:"/primitives/ft/interacting/web-app",permalink:"/zh-CN/primitives/ft/interacting/web-app",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/ft/interacting/web-app.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"web-app",title:"Web Application",hide_table_of_contents:!1},sidebar:"primitives",previous:{title:"NEAR Component",permalink:"/zh-CN/primitives/ft/interacting/bos"},next:{title:"Smart Contract",permalink:"/zh-CN/primitives/ft/interacting/smart-contract"}},i={},c=[{value:"Get token metadata",id:"get-token-metadata",level:2},{value:"Check token balance",id:"check-token-balance",level:2},{value:"Send tokens",id:"send-tokens",level:2},{value:"Register user",id:"register-user",level:3},{value:"Attaching FTs to a Call",id:"attaching-fts-to-a-call",level:2},{value:"Creating FT",id:"creating-ft",level:2}];function u(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.p,{children:"This section describes how to interact with FTs directly from a web app."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["All the examples are using a ",(0,a.jsx)(n.code,{children:"Wallet"})," object, which comes from our ",(0,a.jsx)(n.a,{href:"https://github.com/near-examples/hello-near-js/blob/master/frontend/near-wallet.js",children:"basic template"})]})}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"get-token-metadata",children:"Get token metadata"}),"\n",(0,a.jsx)(n.p,{children:"This snippet will enable your users to query FT metadata."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { Wallet } from './near-wallet';\n\nconst TOKEN_CONTRACT_ADDRESS = \"token.v2.ref-finance.near\";\nconst wallet = new Wallet({ createAccessKeyFor: TOKEN_CONTRACT_ADDRESS });\n \nawait wallet.viewMethod({\n  method: 'ft_metadata',\n  args: {},\n  contractId: TOKEN_CONTRACT_ADDRESS\n});\n"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Example response"}),(0,a.jsx)("p",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "spec": "ft-1.0.0",\n  "name": "Ref Finance Token",\n  "symbol": "REF",\n  "icon": "data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'16 24 248 248\' style=\'background: %23000\'%3E%3Cpath d=\'M164,164v52h52Zm-45-45,20.4,20.4,20.6-20.6V81H119Zm0,18.39V216h41V137.19l-20.6,20.6ZM166.5,81H164v33.81l26.16-26.17A40.29,40.29,0,0,0,166.5,81ZM72,153.19V216h43V133.4l-11.6-11.61Zm0-18.38,31.4-31.4L115,115V81H72ZM207,121.5h0a40.29,40.29,0,0,0-7.64-23.66L164,133.19V162h2.5A40.5,40.5,0,0,0,207,121.5Z\' fill=\'%23fff\'/%3E%3Cpath d=\'M189 72l27 27V72h-27z\' fill=\'%2300c08b\'/%3E%3C/svg%3E%0A",\n  "reference": null,\n  "reference_hash": null,\n  "decimals": 18\n}\n'})})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"check-token-balance",children:"Check token balance"}),"\n",(0,a.jsx)(n.p,{children:"This snippet will enable your users to get their FT balance."}),"\n",(0,a.jsx)(n.admonition,{type:"info",children:(0,a.jsxs)(n.p,{children:["Remember about fungible token precision. You may need this value to show a response of balance requests in an understandable-to-user way in your app. How to get precision value (decimals) you may find ",(0,a.jsx)(n.a,{href:"#get-token-metadata",children:"above"}),"."]})}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { Wallet } from './near-wallet';\n\nconst TOKEN_CONTRACT_ADDRESS = \"token.v2.ref-finance.near\";\nconst wallet = new Wallet({ createAccessKeyFor: TOKEN_CONTRACT_ADDRESS });\n \nawait wallet.viewMethod({\n  method: 'ft_balance_of',\n  args: {\n    account_id: 'bob.near'\n  },\n  contractId: TOKEN_CONTRACT_ADDRESS\n});\n"})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Example response"}),(0,a.jsx)("p",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'"3479615037675962643842"\n'})})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"send-tokens",children:"Send tokens"}),"\n",(0,a.jsx)(n.p,{children:"This snippet will enable your users to transfer their FT tokens."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"import { Wallet } from './near-wallet';\n\nconst TOKEN_CONTRACT_ADDRESS = \"token.v2.ref-finance.near\";\nconst wallet = new Wallet({ createAccessKeyFor: TOKEN_CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: 'ft_transfer',\n  args: {\n    receiver_id: 'alice.near',\n    amount: '100000000000000000',\n  },\n  contractId: TOKEN_CONTRACT_ADDRESS,\n  deposit: 1\n});\n"})}),"\n",(0,a.jsx)("hr",{class:"subsection"}),"\n",(0,a.jsx)(n.h3,{id:"register-user",children:"Register user"}),"\n",(0,a.jsx)(n.p,{children:"In order to transfer FTs to another account receiver account have to be registered in the token contract and make storage deposit. User can register their account or another account can do it for them."}),"\n",(0,a.jsx)(n.p,{children:"How to check storage balance:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const balance = await wallet.viewMethod({\n  method: 'storage_balance_of',\n  args: {\n    account_id: 'alice.near'\n  },\n  contractId: TOKEN_CONTRACT_ADDRESS\n});\n"})}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.strong,{children:"Example response:"})}),"\n",(0,a.jsxs)(n.p,{children:["It returns ",(0,a.jsx)(n.code,{children:"null"})," if account is not registered."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "available": "0",\n  "total": "1250000000000000000000"\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"How to register another account:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"const newAliceStorageBalance = await wallet.callMethod({\n  method: 'storage_deposit',\n  args: {\n    receiver_id: 'alice.near',\n    amount: '100000000000000000',\n  },\n  contractId: TOKEN_CONTRACT_ADDRESS,\n  deposit: 1250000000000000000000\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["If you need to register your own account just pass ",(0,a.jsx)(n.code,{children:"{}"})," as arguments to call."]}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Example response"}),(0,a.jsx)("p",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:'{\n  "available": "0",\n  "total": "1250000000000000000000"\n}\n'})})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"attaching-fts-to-a-call",children:"Attaching FTs to a Call"}),"\n",(0,a.jsx)(n.p,{children:"This snippet will enable your users to attach FT to a call."}),"\n",(0,a.jsx)(n.p,{children:"Natively, only NEAR tokens (\u24c3) can be attached to a method calls. However, the FT standard enables to attach fungible tokens in a call by using the FT-contract as intermediary. This means that, instead of you attaching tokens directly to the call, you ask the FT-contract to do both a transfer and a method call in your name."}),"\n",(0,a.jsx)(n.p,{children:"Let's assume that you need to deposit FTs on Ref Finance."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst TOKEN_CONTRACT_ADDRESS = "token.v2.ref-finance.near";\nconst wallet = new Wallet({ createAccessKeyFor: TOKEN_CONTRACT_ADDRESS });\n \nawait wallet.callMethod({\n  method: \'ft_transfer_call\',\n  args: {\n    receiver_id: "v2.ref-finance.near",\n    amount: "100000000000000000",\n    msg: "",\n  },\n  contractId: TOKEN_CONTRACT_ADDRESS,\n  gas: 300000000000000,\n  deposit: 1\n});\n'})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Example response"}),(0,a.jsx)("p",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"'100000000000000000'\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"How it works:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsx)(n.li,{children:"You call ft_transfer_call in the FT contract passing: the receiver, a message, and the amount."}),"\n",(0,a.jsx)(n.li,{children:"The FT contract transfers the amount to the receiver."}),"\n",(0,a.jsx)(n.li,{children:"The FT contract calls receiver.ft_on_transfer(sender, msg, amount)"}),"\n",(0,a.jsx)(n.li,{children:"The FT contract handles errors in the ft_resolve_transfer callback."}),"\n",(0,a.jsx)(n.li,{children:"The FT contract returns you how much of the attached amount was actually used."}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"creating-ft",children:"Creating FT"}),"\n",(0,a.jsx)(n.p,{children:"This snippet will enable your users to create their own FT."}),"\n",(0,a.jsxs)(n.p,{children:["For creating our own FT we will use ",(0,a.jsx)(n.a,{href:"https://tkn.farm/",children:"Token Farm"}),". You can use it from GUI in your browser, but we will look at how to use its smart contracts to create a token."]}),"\n",(0,a.jsx)(n.p,{children:"First of all, you need to calculate how much creating a token will cost you."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'import { Wallet } from \'./near-wallet\';\n\nconst CONTRACT_ADDRESS = "tkn.near";\nconst wallet = new Wallet({ createAccessKeyFor: CONTRACT_ADDRESS });\n\nconst args = {\n  args: {\n    owner_id: "bob.near",\n    total_supply: "1000000000",\n    metadata: {\n      spec: "ft-1.0.0",\n      name: "Test Token",\n      symbol: "test",\n      icon: "data:image/gif;base64,R0lGODlhAQABAIAAAAAAAP///yH5BAEAAAAALAAAAAABAAEAAAIBRAA7",\n      decimals: 18,\n    },\n  },\n  account_id: "bob.near",\n};\n\nconst requiredStorageDeposit = await wallet.viewMethod({\n  method: \'get_required_deposit\',\n  args,\n  contractId: CONTRACT_ADDRESS\n});\n'})}),"\n",(0,a.jsxs)(t,{children:[(0,a.jsx)("summary",{children:"Example response"}),(0,a.jsx)("p",{children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-json",children:"'2234830000000000000000000'\n"})})})]}),"\n",(0,a.jsx)(n.p,{children:"Then you can create a token."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"await wallet.callMethod({\n  method: 'create_token',\n  args,\n  contractId: CONTRACT_ADDRESS,\n  gas: 300000000000000,\n  deposit: requiredStorageDeposit\n});\n"})}),"\n",(0,a.jsxs)(n.p,{children:["Contract of your token will have an address which looks like ",(0,a.jsx)(n.code,{children:"<your_token_symbol>.tkn.near"})," (in the case above ",(0,a.jsx)(n.code,{children:"test.tkn.near"}),")."]}),"\n",(0,a.jsxs)(n.p,{children:["After creating a token you can ",(0,a.jsx)(n.a,{href:"#send-tokens",children:"send it"})," to anyone."]})]})}function d(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function l(e){var n=e.children,t=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>T});var a=t(67294),r=t(36905),s=t(12466),l=t(16550),o=t(20469),i=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,l.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,i._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(s.location.search);n.set(o,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[o,s])]}function f(e){var n,t,r,s,l=e.defaultValue,i=e.queryString,c=void 0!==i&&i,d=e.groupId,f=h(e),g=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!p({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:f})})),b=g[0],v=g[1],j=m({queryString:c,groupId:d}),x=j[0],w=j[1],T=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),r=t[0],s=t[1],[r,(0,a.useCallback)((function(e){n&&s.set(e)}),[n,s])]),A=T[0],y=T[1],_=function(){var e=null!=x?x:A;return p({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){_&&v(_)}),[_]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),w(e),y(e)}),[w,y,f]),tabValues:f}}var g=t(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=t(85893);function j(e){var n=e.className,t=e.block,a=e.selectedValue,l=e.selectValue,o=e.tabValues,i=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=i.indexOf(n),r=o[t].value;r!==a&&(c(n),l(r))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var a,r=i.indexOf(e.currentTarget)+1;t=null!=(a=i[r])?a:i[0];break;case"ArrowLeft":var s,l=i.indexOf(e.currentTarget)-1;t=null!=(s=i[l])?s:i[i.length-1]}null==(n=t)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return i.push(e)},onKeyDown:d,onClick:u},s,{className:(0,r.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function x(e){var n=e.lazy,t=e.children,r=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=s.find((function(e){return e.props.value===r}));return l?(0,a.cloneElement)(l,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function w(e){var n=f(e);return(0,v.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(j,Object.assign({},e,n)),(0,v.jsx)(x,Object.assign({},e,n))]})}function T(e){var n=(0,g.Z)();return(0,v.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>l});var a=t(67294);const r={},s=a.createContext(r);function l(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);