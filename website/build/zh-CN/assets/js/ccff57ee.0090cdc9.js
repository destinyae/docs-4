"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4154],{18574:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>m,frontMatter:()=>l,metadata:()=>u,toc:()=>h});var n=a(85893),r=a(11151),s=a(77229),i=a(74866),o=a(85162);const l={id:"upgrade",title:"Updating Contracts"},c=void 0,u={id:"develop/upgrade",title:"Updating Contracts",description:"NEAR accounts separate their logic (contract's code) from their state (storage), allowing the code to be changed.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.develop/upgrade.md",sourceDirName:"2.develop",slug:"/develop/upgrade",permalink:"/zh-CN/develop/upgrade",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/upgrade.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"upgrade",title:"Updating Contracts"},sidebar:"contracts",previous:{title:"Deploying and Using",permalink:"/zh-CN/develop/deploy"},next:{title:"Locking Accounts",permalink:"/zh-CN/develop/lock"}},d={},h=[{value:"Updating Through Tools",id:"updating-through-tools",level:2},{value:"Programmatic Update",id:"programmatic-update",level:2},{value:"How to Invoke Such Method?",id:"how-to-invoke-such-method",level:4},{value:"Migrating the State",id:"migrating-the-state",level:2},{value:"The Migration Method",id:"the-migration-method",level:3},{value:"Example: Guest Book Migration",id:"example-guest-book-migration",level:3},{value:"Update Contract",id:"update-contract",level:4},{value:"Incompatible States",id:"incompatible-states",level:4},{value:"Migrating the State",id:"migrating-the-state-1",level:4}];function p(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,r.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"NEAR accounts separate their logic (contract's code) from their state (storage), allowing the code to be changed."}),"\n",(0,n.jsx)(t.p,{children:"Contract's can be updated in two ways:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Through tools"})," such as ",(0,n.jsx)(t.a,{href:"/zh-CN/tools/near-cli",children:"NEAR CLI"})," or ",(0,n.jsx)(t.a,{href:"/zh-CN/tools/near-api-js/quick-reference",children:"near-api-js"})," (if you hold the account's ",(0,n.jsx)(t.a,{href:"/zh-CN/concepts/basics/accounts/access-keys",children:"full access key"}),")."]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.strong,{children:"Programmatically"}),", by implementing a method that ",(0,n.jsx)(t.a,{href:"#programmatic-update",children:"takes the new code and deploys it"}),"."]}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"updating-through-tools",children:"Updating Through Tools"}),"\n",(0,n.jsxs)(t.p,{children:["Simply re-deploy another contract using your preferred tool, for example, using ",(0,n.jsx)(t.a,{href:"/zh-CN/tools/near-cli",children:"NEAR CLI"}),":"]}),"\n",(0,n.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,n.jsx)(o.Z,{value:"near-cli",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# If you already used dev-deploy the same account will be used\nnear dev-deploy --wasmFile <new-contract>\n\n# If you logged in\nnear deploy <account-id> --wasmFile <new-contract>\n"})})}),(0,n.jsx)(o.Z,{value:"near-cli-rs",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# If you already used dev-deploy the same account will be used\nnear contract deploy <my-new-dev-account>.testnet use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain\n\n# If you logged in\nnear contract deploy <accountId> use-file <route_to_wasm> without-init-call network-config testnet sign-with-keychain send\n"})})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"programmatic-update",children:"Programmatic Update"}),"\n",(0,n.jsx)(t.p,{children:"A smart contract can also update itself by implementing a method that:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Takes the new wasm contract as input"}),"\n",(0,n.jsx)(t.li,{children:"Creates a Promise to deploy it on itself"}),"\n"]}),"\n",(0,n.jsx)(s.O2,{children:(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"update.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/self-updates/base/src/update.rs",start:"10",end:"28"})})}),"\n",(0,n.jsx)(t.h4,{id:"how-to-invoke-such-method",children:"How to Invoke Such Method?"}),"\n",(0,n.jsxs)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,n.jsx)(o.Z,{value:"near-cli",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:'# Load the contract\'s raw bytes\nCONTRACT_BYTES=`cat ./path/to/wasm.wasm | base64`\n\n# Call the update_contract method\nnear call <contract-account> update_contract "$CONTRACT_BYTES" --base64 --accountId <manager-account> --gas 300000000000000\n'})})}),(0,n.jsx)(o.Z,{value:"near-cli-rs",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-bash",children:"# Load the contract's raw bytes\nCONTRACT_BYTES=`cat ./path/to/wasm.wasm | base64`\n\n# Call the update_contract method\nnear contract call-function as-transaction <contract-account> update_contract base64-args  \"$CONTRACT_BYTES\" prepaid-gas '300 TeraGas' attached-deposit '0 NEAR' sign-as <manager-account> network-config testnet sign-with-keychain send\n"})})}),(0,n.jsx)(o.Z,{value:"\ud83c\udf10 JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-js",children:'// Load the contract\'s raw bytes\nconst code = fs.readFileSync("./path/to/wasm.wasm");\n\n// Call the update_contract method\nawait wallet.callMethod({contractId: guestBook, method: "update_contract", args: code, gas: "300000000000000"});\n'})})})]}),"\n",(0,n.jsx)(t.admonition,{title:"DAO Factories",type:"tip",children:(0,n.jsxs)(t.p,{children:["This is how DAO factories ",(0,n.jsx)(t.a,{href:"https://github.com/near-daos/sputnik-dao-contract/blob/main/sputnikdao-factory2/src/factory_manager.rs#L60",children:"update their contracts"})]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"migrating-the-state",children:"Migrating the State"}),"\n",(0,n.jsxs)(t.p,{children:["Since the account's logic (smart contract) is separated from the account's state (storage), ",(0,n.jsx)(t.strong,{children:"the account's state persists"})," when re-deploying a contract."]}),"\n",(0,n.jsxs)(t.p,{children:["Because of this, ",(0,n.jsx)(t.strong,{children:"adding methods"})," or ",(0,n.jsx)(t.strong,{children:"modifying existing ones"})," will yield ",(0,n.jsx)(t.strong,{children:"no problems"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["However, deploying a contract that ",(0,n.jsx)(t.strong,{children:"modifies or removes structures"}),"  stored in the state will raise an error: ",(0,n.jsx)(t.code,{children:"Cannot deserialize the contract state"}),", in which case you can choose to:"]}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Use a different account"}),"\n",(0,n.jsx)(t.li,{children:"Rollback to the previous contract code"}),"\n",(0,n.jsx)(t.li,{children:"Add a method to migrate the contract's state"}),"\n"]}),"\n",(0,n.jsx)("hr",{class:"subsection"}),"\n",(0,n.jsx)(t.h3,{id:"the-migration-method",children:"The Migration Method"}),"\n",(0,n.jsx)(t.p,{children:"If you have no option but to migrate the state, then you need to implement a method that:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Reads the current state of the contract"}),"\n",(0,n.jsx)(t.li,{children:"Applies different functions to transform it into the new state"}),"\n",(0,n.jsx)(t.li,{children:"Returns the new state"}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{title:"DAO Update",type:"tip",children:(0,n.jsxs)(t.p,{children:["This is how DAOs ",(0,n.jsx)(t.a,{href:"https://github.com/near-daos/sputnik-dao-contract/blob/main/sputnikdao2/src/upgrade.rs#L59",children:"update themselves"})]})}),"\n",(0,n.jsx)("hr",{class:"subsection"}),"\n",(0,n.jsx)(t.h3,{id:"example-guest-book-migration",children:"Example: Guest Book Migration"}),"\n",(0,n.jsx)(t.p,{children:'Imagine you have a Guest Book where you store messages, and the users can pay for such messages to be "premium". You keep track of the messages and payments using the following state:'}),"\n",(0,n.jsx)(s.O2,{children:(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/base/src/lib.rs",start:"9",end:"23"})})}),"\n",(0,n.jsx)(t.h4,{id:"update-contract",children:"Update Contract"}),"\n",(0,n.jsxs)(t.p,{children:["At some point you realize that you could keep track of the ",(0,n.jsx)(t.code,{children:"payments"})," inside of the ",(0,n.jsx)(t.code,{children:"PostedMessage"})," itself, so you change the contract to:"]}),"\n",(0,n.jsx)(s.O2,{children:(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/update/src/lib.rs",start:"11",end:"25"})})}),"\n",(0,n.jsx)(t.h4,{id:"incompatible-states",children:"Incompatible States"}),"\n",(0,n.jsx)(t.p,{children:"If you deploy the update into an initialized account the contract will fail to deserialize the account's state, because:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsxs)(t.li,{children:["There is an extra ",(0,n.jsx)(t.code,{children:"payments"})," vector saved in the state (from the previous contract)"]}),"\n",(0,n.jsxs)(t.li,{children:["The stored ",(0,n.jsx)(t.code,{children:"PostedMessages"})," are missing the ",(0,n.jsx)(t.code,{children:"payment"})," field (as in the previous contract)"]}),"\n"]}),"\n",(0,n.jsx)("br",{}),"\n",(0,n.jsx)(t.h4,{id:"migrating-the-state-1",children:"Migrating the State"}),"\n",(0,n.jsxs)(t.p,{children:["To fix the problem, you need to implement a method that goes through the old state, removes the ",(0,n.jsx)(t.code,{children:"payments"})," vector and adds the information to the ",(0,n.jsx)(t.code,{children:"PostedMessages"}),":"]}),"\n",(0,n.jsx)(s.O2,{children:(0,n.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/update-migrate-rust/blob/main/contracts/basic-updates/update/src/migrate.rs",start:"3",end:"45"})})}),"\n",(0,n.jsxs)(t.p,{children:["Notice that ",(0,n.jsx)(t.code,{children:"migrate"})," is actually an ",(0,n.jsx)(t.a,{href:"/zh-CN/develop/contracts/anatomy#initialization-method",children:"initialization method"})," that ",(0,n.jsx)(t.strong,{children:"ignores"})," the existing state (",(0,n.jsx)(t.code,{children:"[#init(ignore_state)]"}),"), thus being able to execute and rewrite the state."]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["You can follow a migration step by step in the ",(0,n.jsx)(t.a,{href:"https://github.com/near-examples/update-migrate-rust/tree/main/contracts/basic-updates/base",children:"official migration example"})]})})]})}function m(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(p,{...e})}):p(e)}},85162:(e,t,a)=>{a.d(t,{Z:()=>i});a(67294);var n=a(36905);const r={tabItem:"tabItem_Ymn6"};var s=a(85893);function i(e){var t=e.children,a=e.hidden,i=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(r.tabItem,i),hidden:a,children:t})}},74866:(e,t,a)=>{a.d(t,{Z:()=>w});var n=a(67294),r=a(36905),s=a(12466),i=a(16550),o=a(20469),l=a(91980),c=a(67392),u=a(50012);function d(e){var t,a;return null!=(t=null==(a=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:a.filter(Boolean))?t:[]}function h(e){var t=e.values,a=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(a);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,a])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,a=void 0!==t&&t,r=e.groupId,s=(0,i.k6)(),o=function(e){var t=e.queryString,a=void 0!==t&&t,n=e.groupId;if("string"==typeof a)return a;if(!1===a)return null;if(!0===a&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:a,groupId:r});return[(0,l._X)(o),(0,n.useCallback)((function(e){if(o){var t=new URLSearchParams(s.location.search);t.set(o,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[o,s])]}function g(e){var t,a,r,s,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,g=h(e),f=(0,n.useState)((function(){return function(e){var t,a=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(a){if(!p({value:a,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+a+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return a}var r=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:i,tabValues:g})})),b=f[0],x=f[1],v=m({queryString:c,groupId:d}),j=v[0],y=v[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),a=(0,u.Nk)(t),r=a[0],s=a[1],[r,(0,n.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],N=w[1],T=function(){var e=null!=j?j:k;return p({value:e,tabValues:g})?e:null}();return(0,o.Z)((function(){T&&x(T)}),[T]),{selectedValue:b,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:g}))throw new Error("Can't select invalid tab value="+e);x(e),y(e),N(e)}),[y,N,g]),tabValues:g}}var f=a(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=a(85893);function v(e){var t=e.className,a=e.block,n=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,a=l.indexOf(t),r=o[a].value;r!==n&&(c(t),i(r))},d=function(e){var t,a=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var n,r=l.indexOf(e.currentTarget)+1;a=null!=(n=l[r])?n:l[0];break;case"ArrowLeft":var s,i=l.indexOf(e.currentTarget)-1;a=null!=(s=l[i])?s:l[l.length-1]}null==(t=a)||t.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":a},t),children:o.map((function(e){var t=e.value,a=e.label,s=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},s,{className:(0,r.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===t}),children:null!=a?a:t}),t)}))})}function j(e){var t=e.lazy,a=e.children,r=e.selectedValue,s=(Array.isArray(a)?a:[a]).filter(Boolean);if(t){var i=s.find((function(e){return e.props.value===r}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=g(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",b.tabList),children:[(0,x.jsx)(v,Object.assign({},e,t)),(0,x.jsx)(j,Object.assign({},e,t))]})}function w(e){var t=(0,f.Z)();return(0,x.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,a)=>{a.d(t,{Ey:()=>u,O2:()=>l,SQ:()=>c});a(67294);var n=a(74866),r=a(85162),s=a(95665),i=a.n(s),o=a(85893);function l(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,o.jsx)(n.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,o.jsx)(r.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var t=e.children,a=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var a=e.props,n=(a.children,a.url),r=a.start,s=a.end,i=a.fname;if(e.type===u)return u({url:n,start:r,end:s,language:t,fname:i});return e}(e,a)})),1==t.length?(0,o.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,o.jsx)(n.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,o.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))})}function u(e){var t=e.url,a=e.start,n=e.end,r=e.language,s=e.fname,l=t+"#";return a&&n&&(l+="L"+a+"-L"+n+"#"),(0,o.jsx)(i(),{language:r,fname:s,children:l})}}}]);