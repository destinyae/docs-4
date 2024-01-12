"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[981],{29362:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>o,contentTitle:()=>c,default:()=>d,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var r=n(85893),a=n(11151),s=n(77229);const l={id:"crosscontract",title:"Cross-Contract Calls"},c=void 0,i={id:"develop/contracts/crosscontract",title:"Cross-Contract Calls",description:"Cross-contract calls allow your contract to interact with other deployed contracts. This is useful for:",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/2.develop/contracts/crosscontract.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/crosscontract",permalink:"/vi/develop/contracts/crosscontract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/crosscontract.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",frontMatter:{id:"crosscontract",title:"Cross-Contract Calls"},sidebar:"contracts",previous:{title:"Transfers & Actions",permalink:"/vi/develop/contracts/actions"},next:{title:"\u2705 Checklist",permalink:"/vi/develop/contracts/security/checklist"}},o={},u=[{value:"Cross-Contract Calls are <strong>Independent</strong>",id:"cross-contract-calls-are-independent",level:4},{value:"Cross-Contract Calls are <strong>Asynchronous</strong>",id:"cross-contract-calls-are-asynchronous",level:4},{value:"Snippet: Querying Information",id:"snippet-querying-information",level:2},{value:"Snippet: Sending Information",id:"snippet-sending-information",level:2},{value:"Promises",id:"promises",level:2},{value:"Callback Method",id:"callback-method",level:2},{value:"Checking Execution Status",id:"checking-execution-status",level:3},{value:"Successful Execution",id:"successful-execution",level:3},{value:"Failed Execution",id:"failed-execution",level:3},{value:"Security Concerns",id:"security-concerns",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(t.p,{children:"Cross-contract calls allow your contract to interact with other deployed contracts. This is useful for:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Querying information from another contract."}),"\n",(0,r.jsx)(t.li,{children:"Executing a method in another contract."}),"\n"]}),"\n",(0,r.jsxs)(t.h4,{id:"cross-contract-calls-are-independent",children:["Cross-Contract Calls are ",(0,r.jsx)(t.strong,{children:"Independent"})]}),"\n",(0,r.jsx)(t.p,{children:"The method in which you make the call and the method in which you receive the result are different."}),"\n",(0,r.jsxs)(t.h4,{id:"cross-contract-calls-are-asynchronous",children:["Cross-Contract Calls are ",(0,r.jsx)(t.strong,{children:"Asynchronous"})]}),"\n",(0,r.jsx)(t.p,{children:"There is a delay between the call and the callback in which everyone can still interact with your contract."}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"snippet-querying-information",children:"Snippet: Querying Information"}),"\n",(0,r.jsxs)(t.p,{children:["While making your contract, it is likely that you will want to query information from another contract. Below, you can see a basic example in which we query the greeting message from our ",(0,r.jsx)(t.a,{href:"/vi/develop/contracts/quickstart",children:"Hello NEAR"})," example."]}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"17",end:"39"})}),(0,r.jsxs)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,r.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"24",end:"49"}),(0,r.jsx)(s.Ey,{fname:"external.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/external.rs"})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"snippet-sending-information",children:"Snippet: Sending Information"}),"\n",(0,r.jsxs)(t.p,{children:["Calling another contract passing information is also a common scenario. Bellow you can see a method that interacts with the ",(0,r.jsx)(t.a,{href:"/vi/develop/contracts/quickstart",children:"Hello NEAR"})," example to change its greeting message."]}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"41",end:"64"})}),(0,r.jsxs)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,r.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"51",end:"74"}),(0,r.jsx)(s.Ey,{fname:"external.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/external.rs"})]})]}),"\n",(0,r.jsx)(t.hr,{}),"\n",(0,r.jsx)(t.h2,{id:"promises",children:"Promises"}),"\n",(0,r.jsx)(t.p,{children:"Cross-contract calls work by creating two promises in the network:"}),"\n",(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["A promise to execute code in the external contract (",(0,r.jsx)(t.code,{children:"Promise.create"}),")."]}),"\n",(0,r.jsxs)(t.li,{children:["A promise to call back a ",(0,r.jsx)(t.strong,{children:"different"})," method in your contract with the result (",(0,r.jsx)(t.code,{children:"Promise.then"}),")."]}),"\n"]}),"\n",(0,r.jsx)(t.p,{children:"Both promises take the same arguments:"}),"\n",(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-ts",children:'NearPromise.new("external_address").functionCall("method", JSON.stringify(arguments), DEPOSIT, GAS);\n'})})}),(0,r.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(t.pre,{children:(0,r.jsx)(t.code,{className:"language-rust",children:'external_trait::ext("external_address")\n.with_attached_deposit(DEPOSIT)\n.with_static_gas(GAS)\n.method(arguments);\n'})})})]}),"\n",(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsx)(t.li,{children:"The address of the contract you want to interact with"}),"\n",(0,r.jsx)(t.li,{children:"The method that you want to execute"}),"\n",(0,r.jsxs)(t.li,{children:["The (",(0,r.jsx)(t.strong,{children:"encoded"}),") arguments to pass to the method"]}),"\n",(0,r.jsxs)(t.li,{children:["The amount of GAS to use (deducted from the ",(0,r.jsx)(t.strong,{children:"attached Gas"}),")"]}),"\n",(0,r.jsxs)(t.li,{children:["The amount of NEAR to attach (deducted from ",(0,r.jsx)(t.strong,{children:"your contract\u2019s balance"}),")"]}),"\n"]}),"\n",(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["Notice that the callback could be made to ",(0,r.jsx)(t.strong,{children:"any"})," contract. This means that, if you want, the result could be potentially handled by another contract. :::"]}),(0,r.jsxs)(t.admonition,{type:"caution",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["The fact that you are creating a Promise means that both the cross-contract call and callback will ",(0,r.jsx)(t.strong,{children:"not execute immediately"}),". In fact:"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The cross-contract call will execute 1 or 2 blocks after your method finishes ",(0,r.jsx)(t.strong,{children:"correctly"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["The callback will then execute 1 or 2 blocks after the ",(0,r.jsx)(t.strong,{children:"external"})," method finishes (",(0,r.jsx)(t.strong,{children:"correctly or not"}),") :::"]}),"\n"]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"callback-method",children:"Callback Method"}),(0,r.jsxs)(t.p,{children:["If your method finishes correctly, then eventually your callback method will execute. This will happen whether the external contract finishes ",(0,r.jsx)(t.strong,{children:"successfully or not"}),". We repeat, if your original method finishes correctly, then your callback will ",(0,r.jsx)(t.strong,{children:"always execute"}),"."]}),(0,r.jsx)(t.p,{children:"In the callback method you will have access to the result, which contains two important arguments:"}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"status"}),": Telling if the external method finished successfully or not"]}),"\n",(0,r.jsxs)(t.li,{children:[(0,r.jsx)(t.code,{children:"buffer"}),": Having the value returned by the external method (if any)"]}),"\n"]}),(0,r.jsxs)(t.admonition,{type:"tip",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["The callback methods in your contract must be public, so it can be called when the second promise executes. However, they should be only callable by ",(0,r.jsx)(t.strong,{children:"your contract"}),". Always make sure to make it private by asserting that the ",(0,r.jsx)(t.code,{children:"predecessor"})," is ",(0,r.jsx)(t.code,{children:"current_account_id"}),". In rust this can be achieved using the ",(0,r.jsx)(t.code,{children:"#[private]"})," decorator. :::"]}),(0,r.jsx)(t.h3,{id:"checking-execution-status",children:"Checking Execution Status"}),(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"31",end:"38"})}),(0,r.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(s.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"67",end:"73"})})]}),(0,r.jsx)(t.h3,{id:"successful-execution",children:"Successful Execution"}),(0,r.jsxs)(t.p,{children:["In case the call finishes successfully, the resulting object will have a ",(0,r.jsx)(t.code,{children:"status"})," of 1, and the ",(0,r.jsx)(t.code,{children:"buffer"})," will have the encoded result (if any). In order to recover the result you need to decode it from the resulting ",(0,r.jsx)(t.code,{children:"buffer"}),":"]}),(0,r.jsxs)(s.O2,{children:[(0,r.jsx)(s.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,r.jsx)(s.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/cross-contract-hello-js/blob/master/contract/src/contract.ts",start:"31",end:"31"})}),(0,r.jsx)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,r.jsx)(s.Ey,{fname:"lib.ts",url:"https://github.com/near-examples/cross-contract-hello-rust/blob/main/contract/src/lib.rs",start:"47",end:"47"})})]}),(0,r.jsx)(t.h3,{id:"failed-execution",children:"Failed Execution"}),(0,r.jsxs)(t.p,{children:["If the external method fails (i.e. it panics), then your callback will be ",(0,r.jsx)(t.strong,{children:"executed anyway"}),". Here you need to ",(0,r.jsx)(t.strong,{children:"manually rollback"})," any changes made in your contract during the original call. Particularly:"]}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsxs)(t.li,{children:["If the contract attached NEAR to the call, the funds are sent back to ",(0,r.jsx)(t.strong,{children:"the contract's account"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["If the original method made any state changes (i.e. changed or stored data), they ",(0,r.jsx)(t.strong,{children:"won't be automatically reverted"}),"."]}),"\n"]}),(0,r.jsxs)(t.admonition,{type:"warning",children:[(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["If your original method finishes correctly then the callback executes ",(0,r.jsx)(t.strong,{children:"even if the external method panics"}),". Your state will ",(0,r.jsx)(t.strong,{children:"not"})," rollback automatically, and $NEAR will ",(0,r.jsx)(t.strong,{children:"not"})," be returned to the signer automatically. Always make sure to check in the callback if the external method failed, and manually rollback any operation if necessary. :::"]}),(0,r.jsx)(t.hr,{}),(0,r.jsx)(t.h2,{id:"security-concerns",children:"Security Concerns"}),(0,r.jsxs)(t.p,{children:["While writing cross-contract calls there is a significant aspect to keep in mind: all the calls are ",(0,r.jsx)(t.strong,{children:"independent"})," and ",(0,r.jsx)(t.strong,{children:"asynchronous"}),". In other words:"]}),(0,r.jsxs)(t.ul,{children:["\n",(0,r.jsxs)(t.li,{children:["The method in which you make the call and method for the callback are ",(0,r.jsx)(t.strong,{children:"independent"}),"."]}),"\n",(0,r.jsxs)(t.li,{children:["There is a ",(0,r.jsx)(t.strong,{children:"delay between the call and the callback"}),", in which people can still interact with the contract"]}),"\n"]}),(0,r.jsx)(t.p,{children:"This has important implications on how you should handle the callbacks. Particularly:"}),(0,r.jsxs)(t.ol,{children:["\n",(0,r.jsx)(t.li,{children:"Make sure you don't leave the contract in a exploitable state between the call and the callback."}),"\n",(0,r.jsx)(t.li,{children:"Manually rollback any changes to the state in the callback if the external call failed."}),"\n"]}),(0,r.jsxs)(t.p,{children:["We have a whole ",(0,r.jsx)(t.a,{href:"/vi/develop/contracts/security/callbacks",children:"security section"})," dedicated to these specific errors, so please go and check it."]}),(0,r.jsx)(t.admonition,{type:"warning",children:(0,r.jsxs)(t.mdxAdmonitionTitle,{children:["Not following these basic security guidelines could expose your contract to exploits. Please check the ",(0,r.jsx)(t.a,{href:"/vi/develop/contracts/security/callbacks",children:"security section"}),", and if still in doubt, ",(0,r.jsx)(t.a,{href:"https://near.chat",children:"join us in Discord"}),". :::"]})})]})]})]})]})]})}function d(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,r.jsx)(t,{...e,children:(0,r.jsx)(h,{...e})}):h(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>l});n(67294);var r=n(36905);const a={tabItem:"tabItem_Ymn6"};var s=n(85893);function l(e){var t=e.children,n=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,l),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var r=n(67294),a=n(36905),s=n(12466),l=n(16550),c=n(20469),i=n(91980),o=n(67392),u=n(50012);function h(e){var t,n;return null!=(t=null==(n=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function d(e){var t=e.values,n=e.children;return(0,r.useMemo)((function(){var e=null!=t?t:function(e){return h(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,o.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function x(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId,s=(0,l.k6)(),c=function(e){var t=e.queryString,n=void 0!==t&&t,r=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:n,groupId:a});return[(0,i._X)(c),(0,r.useCallback)((function(e){if(c){var t=new URLSearchParams(s.location.search);t.set(c,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[c,s])]}function p(e){var t,n,a,s,l=e.defaultValue,i=e.queryString,o=void 0!==i&&i,h=e.groupId,p=d(e),f=(0,r.useState)((function(){return function(e){var t,n=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!m({value:n,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var a=null!=(t=r.find((function(e){return e.default})))?t:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:p})})),b=f[0],g=f[1],j=x({queryString:o,groupId:h}),v=j[0],y=j[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),n=(0,u.Nk)(t),a=n[0],s=n[1],[a,(0,r.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],S=w[1],T=function(){var e=null!=v?v:k;return m({value:e,tabValues:p})?e:null}();return(0,c.Z)((function(){T&&g(T)}),[T]),{selectedValue:b,selectValue:(0,r.useCallback)((function(e){if(!m({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);g(e),y(e),S(e)}),[y,S,p]),tabValues:p}}var f=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var g=n(85893);function j(e){var t=e.className,n=e.block,r=e.selectedValue,l=e.selectValue,c=e.tabValues,i=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,n=i.indexOf(t),a=c[n].value;a!==r&&(o(t),l(a))},h=function(e){var t,n=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=i.indexOf(e.currentTarget)+1;n=null!=(r=i[a])?r:i[0];break;case"ArrowLeft":var s,l=i.indexOf(e.currentTarget)-1;n=null!=(s=i[l])?s:i[i.length-1]}null==(t=n)||t.focus()};return(0,g.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":n},t),children:c.map((function(e){var t=e.value,n=e.label,s=e.attributes;return(0,g.jsx)("li",Object.assign({role:"tab",tabIndex:r===t?0:-1,"aria-selected":r===t,ref:function(e){return i.push(e)},onKeyDown:h,onClick:u},s,{className:(0,a.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":r===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,a=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===a}));return l?(0,r.cloneElement)(l,{className:"margin-top--md"}):null}return(0,g.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,r.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=p(e);return(0,g.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,g.jsx)(j,Object.assign({},e,t)),(0,g.jsx)(v,Object.assign({},e,t))]})}function w(e){var t=(0,f.Z)();return(0,g.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(t))}},77229:(e,t,n)=>{n.d(t,{Ey:()=>u,O2:()=>i,SQ:()=>o});n(67294);var r=n(74866),a=n(85162),s=n(95665),l=n.n(s),c=n(85893);function i(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,c.jsx)(r.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,c.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function o(e){var t=e.children,n=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,r=(n.children,n.url),a=n.start,s=n.end,l=n.fname;if(e.type===u)return u({url:r,start:a,end:s,language:t,fname:l});return e}(e,n)})),1==t.length?(0,c.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,c.jsx)(r.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,c.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function u(e){var t=e.url,n=e.start,r=e.end,a=e.language,s=e.fname,i=t+"#";return n&&r&&(i+="L"+n+"-L"+r+"#"),(0,c.jsx)(l(),{language:a,fname:s,children:i})}}}]);