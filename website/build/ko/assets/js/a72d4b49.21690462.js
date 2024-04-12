"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2057],{61640:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>d,contentTitle:()=>c,default:()=>p,frontMatter:()=>o,metadata:()=>u,toc:()=>h});var n=r(85893),a=r(11151),s=r(74866),l=r(85162),i=r(77229);const o={id:"basics",title:"Modules, Types & Structs"},c=void 0,u={id:"build/smart-contracts/anatomy/basics",title:"Modules, Types & Structs",description:"When writing smart contracts you will leverage common programming concepts such:",source:"@site/../docs/2.build/2.smart-contracts/anatomy/basics.md",sourceDirName:"2.build/2.smart-contracts/anatomy",slug:"/build/smart-contracts/anatomy/basics",permalink:"/ko/build/smart-contracts/anatomy/basics",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/2.smart-contracts/anatomy/basics.md",tags:[],version:"current",lastUpdatedBy:"Damian Parrino",lastUpdatedAt:171294383e4,frontMatter:{id:"basics",title:"Modules, Types & Structs"},sidebar:"build",previous:{title:"Quickstart \u2728",permalink:"/ko/build/smart-contracts/quickstart"},next:{title:"The Contract Class",permalink:"/ko/build/smart-contracts/anatomy/"}},d={},h=[{value:"Modules",id:"modules",level:2},{value:"Native Types",id:"native-types",level:2},{value:"SDK Collections",id:"sdk-collections",level:2},{value:"Internal Structures",id:"internal-structures",level:2}];function m(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(t.p,{children:"When writing smart contracts you will leverage common programming concepts such:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#modules",children:"Modules"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#data-types",children:"Data types & Collections"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"#classes--structures",children:"Classes & Structures"})}),"\n"]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"modules",children:"Modules"}),"\n",(0,n.jsx)(t.p,{children:"Modules help you to organize your code and reuse third-party libraries."}),"\n",(0,n.jsxs)(t.p,{children:["The main module you will use in your contract will be the ",(0,n.jsx)(t.strong,{children:"NEAR SDK"}),", which: gives you access to the ",(0,n.jsx)(t.a,{href:"/ko/build/smart-contracts/anatomy/environment",children:"execution environment"}),", allows you to ",(0,n.jsx)(t.a,{href:"/ko/build/smart-contracts/anatomy/crosscontract",children:"call other contracts"}),", ",(0,n.jsx)(t.a,{href:"/ko/build/smart-contracts/anatomy/actions",children:"transfer tokens"}),", and much more."]}),"\n",(0,n.jsxs)(i.O2,{children:[(0,n.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"ts",children:(0,n.jsx)(i.Ey,{fname:"contract.ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/src/contract.ts",start:"1",end:"3"})}),(0,n.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/lib.rs",start:"1",end:"6"})})]}),"\n",(0,n.jsx)(t.admonition,{title:"Using external libraries",type:"info",children:(0,n.jsxs)(t.p,{children:["As a general rule of thumb for Rust, anything that supports ",(0,n.jsx)(t.code,{children:"wasm32-unknown-unknown"})," will be compatible with your smart contract.\nHowever, we do have a size limit for a compiled contract binary which is ~4.19 MB, so it is possible that certain large libraries will not be compatible."]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"native-types",children:"Native Types"}),"\n",(0,n.jsxs)(t.p,{children:["When writing contracts you have access to ",(0,n.jsx)(t.strong,{children:"all"})," the language's ",(0,n.jsx)(t.strong,{children:"native types"}),"."]}),"\n",(0,n.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,n.jsx)(l.Z,{value:"\ud83c\udf10 JavaScript",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:"number, bigint, string, [], {} ...\n"})})}),(0,n.jsx)(l.Z,{value:"\ud83e\udd80 Rust",children:(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-rust",children:"u8, u16, u32, u64, u128, i8, i16, i32, i64, i128, Vec<T>, HashMap<K,V> ...\n"})})})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Always prefer ",(0,n.jsx)(t.strong,{children:"native"})," types in the contract's ",(0,n.jsx)(t.strong,{children:"interface"}),". The only exception is values larger than ",(0,n.jsx)(t.code,{children:"52 bytes"})," (such as ",(0,n.jsx)(t.code,{children:"u64"})," and ",(0,n.jsx)(t.code,{children:"u128"}),"), for which string-like alternatives are preferred."]})}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.p,{children:["Always make sure to check for ",(0,n.jsx)(t.strong,{children:"underflow"})," and ",(0,n.jsx)(t.strong,{children:"overflow"})," errors. For Rust, simply add ",(0,n.jsx)(t.code,{children:"overflow-checks=true"})," in your ",(0,n.jsx)(t.code,{children:"Cargo"}),"."]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"sdk-collections",children:"SDK Collections"}),"\n",(0,n.jsxs)(t.p,{children:["Besides the native types, the NEAR SDK implements ",(0,n.jsx)(t.a,{href:"/ko/build/smart-contracts/anatomy/storage",children:"collections"})," such as ",(0,n.jsx)(t.code,{children:"Vector"})," and ",(0,n.jsx)(t.code,{children:"UnorderedMap"}),"\nto help you store complex data in the contract's state."]}),"\n",(0,n.jsxs)(i.O2,{children:[(0,n.jsx)(i.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(i.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"8",end:"11"})}),(0,n.jsx)(i.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(i.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"33",end:"36"})})]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["Always prefer ",(0,n.jsx)(t.strong,{children:"SDK collections"})," over native ones in the contract's ",(0,n.jsx)(t.strong,{children:(0,n.jsx)(t.a,{href:"/ko/build/smart-contracts/anatomy/#defining-the-state",children:"attributes (state)"})}),"."]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"internal-structures",children:"Internal Structures"}),"\n",(0,n.jsx)(t.p,{children:"You can define and instantiate complex objects through classes and structures."}),"\n",(0,n.jsxs)(s.Z,{className:"language-tabs",groupId:"code-tabs",children:[(0,n.jsx)(l.Z,{value:"\ud83c\udf10 JavaScript",children:(0,n.jsx)(i.Ey,{fname:"model.ts",language:"ts",url:"https://github.com/near-examples/donation-examples/blob/main/contract-ts/src/model.ts",start:"3",end:"11"})}),(0,n.jsx)(l.Z,{value:"\ud83e\udd80 Rust",children:(0,n.jsx)(i.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/donation-examples/blob/main/contract-rs/src/donation.rs",start:"11",end:"16"})})]}),"\n",(0,n.jsx)(t.p,{children:"\ud83e\udd80 Notice that the class is decorated with multiple macros:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"BorshDeserialize"})," & ",(0,n.jsx)(t.code,{children:"BorshSerialize"})," allow the structure to be read and\nwritten into the contract's state"]}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.code,{children:"Serialize"})," & ",(0,n.jsx)(t.code,{children:"Deserialize"})," allow the structure to be used as an input type and\nreturn type of the contract's methods."]}),"\n"]}),"\n",(0,n.jsx)(t.admonition,{type:"tip",children:(0,n.jsxs)(t.p,{children:["If you are curious on why the (de)serialization is needed read our ",(0,n.jsx)(t.a,{href:"/ko/build/smart-contracts/anatomy/serialization",children:"serialization documentation"})]})})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(m,{...e})}):m(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>l});r(67294);var n=r(36905);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function l(e){var t=e.children,r=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,n.Z)(a.tabItem,l),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>w});var n=r(67294),a=r(36905),s=r(12466),l=r(16550),i=r(20469),o=r(91980),c=r(67392),u=r(50012);function d(e){var t,r;return null!=(t=null==(r=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function h(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(r);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function m(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,r=void 0!==t&&t,a=e.groupId,s=(0,l.k6)(),i=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:a});return[(0,o._X)(i),(0,n.useCallback)((function(e){if(i){var t=new URLSearchParams(s.location.search);t.set(i,e),s.replace(Object.assign({},s.location,{search:t.toString()}))}}),[i,s])]}function b(e){var t,r,a,s,l=e.defaultValue,o=e.queryString,c=void 0!==o&&o,d=e.groupId,b=h(e),f=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!m({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:b})})),x=f[0],v=f[1],g=p({queryString:c,groupId:d}),j=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Nk)(t),a=r[0],s=r[1],[a,(0,n.useCallback)((function(e){t&&s.set(e)}),[t,s])]),k=w[0],S=w[1],I=function(){var e=null!=j?j:k;return m({value:e,tabValues:b})?e:null}();return(0,i.Z)((function(){I&&v(I)}),[I]),{selectedValue:x,selectValue:(0,n.useCallback)((function(e){if(!m({value:e,tabValues:b}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),S(e)}),[y,S,b]),tabValues:b}}var f=r(72389);const x={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(85893);function g(e){var t=e.className,r=e.block,n=e.selectedValue,l=e.selectValue,i=e.tabValues,o=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,r=o.indexOf(t),a=i[r].value;a!==n&&(c(t),l(a))},d=function(e){var t,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var n,a=o.indexOf(e.currentTarget)+1;r=null!=(n=o[a])?n:o[0];break;case"ArrowLeft":var s,l=o.indexOf(e.currentTarget)-1;r=null!=(s=o[l])?s:o[o.length-1]}null==(t=r)||t.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},t),children:i.map((function(e){var t=e.value,r=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return o.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",x.tabItem,null==s?void 0:s.className,{"tabs__item--active":n===t}),children:null!=r?r:t}),t)}))})}function j(e){var t=e.lazy,r=e.children,a=e.selectedValue,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var l=s.find((function(e){return e.props.value===a}));return l?(0,n.cloneElement)(l,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==a})}))})}function y(e){var t=b(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",x.tabList),children:[(0,v.jsx)(g,Object.assign({},e,t)),(0,v.jsx)(j,Object.assign({},e,t))]})}function w(e){var t=(0,f.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,r)=>{r.d(t,{Ey:()=>u,O2:()=>o,SQ:()=>c});r(67294);var n=r(74866),a=r(85162),s=r(95665),l=r.n(s),i=r(85893);function o(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,i.jsx)(n.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,i.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var t=e.children,r=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var r=e.props,n=(r.children,r.url),a=r.start,s=r.end,l=r.fname;if(e.type===u)return u({url:n,start:a,end:s,language:t,fname:l});return e}(e,r)})),1==t.length?(0,i.jsx)(a.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,i.jsx)(n.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,i.jsx)(a.Z,{value:t,label:e.props.fname,children:e})}))})}function u(e){var t=e.url,r=e.start,n=e.end,a=e.language,s=e.fname,o=t+"#";return r&&n&&(o+="L"+r+"-L"+n+"#"),(0,i.jsx)(l(),{language:a,fname:s,children:o})}}}]);