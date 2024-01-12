"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4580],{89123:(e,t,r)=>{r.r(t),r.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>u});var n=r(85893),s=r(11151),a=r(77229);const i={id:"storage",title:"State & Data Structures"},o=void 0,l={id:"develop/contracts/storage",title:"State & Data Structures",description:"Each contract has its own state (storage), which only they can modify but anyone can see.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.develop/contracts/storage.md",sourceDirName:"2.develop/contracts",slug:"/develop/contracts/storage",permalink:"/zh-CN/develop/contracts/storage",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/contracts/storage.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"storage",title:"State & Data Structures"},sidebar:"contracts",previous:{title:"Environment",permalink:"/zh-CN/develop/contracts/environment/"},next:{title:"Transfers & Actions",permalink:"/zh-CN/develop/contracts/actions"}},c={},u=[{value:"Defining the State",id:"defining-the-state",level:2},{value:"Data Structures",id:"data-structures",level:2},{value:"Vector",id:"vector",level:3},{value:"Map",id:"map",level:3},{value:"Set",id:"set",level:3},{value:"Tree",id:"tree",level:3},{value:"Storage Cost",id:"storage-cost",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:r}=t;return r||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["Each contract has its own state (storage), which ",(0,n.jsx)(t.strong,{children:"only they can modify"})," but ",(0,n.jsx)(t.a,{href:"/zh-CN/tools/near-cli#near-view-state-near-view-state",children:"anyone can see"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["A contract stores all its data in a ",(0,n.jsx)(t.code,{children:"key-value"})," storage. This however is abstracted from you by the SDK through ",(0,n.jsx)(t.a,{href:"/zh-CN/develop/contracts/serialization",children:"serialization"}),"."]}),"\n",(0,n.jsx)(t.admonition,{type:"info",children:(0,n.jsxs)(t.mdxAdmonitionTitle,{children:["Contracts ",(0,n.jsx)(t.a,{href:"#storage-cost",children:"pay for their storage"})," by locking part of their balance. Currently it costs ",(0,n.jsx)(t.strong,{children:"~1 \u24c3"})," to store ",(0,n.jsx)(t.strong,{children:"100KB"})]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"defining-the-state",children:"Defining the State"}),"\n",(0,n.jsxs)(t.p,{children:["The contract's state is defined by the ",(0,n.jsx)(t.a,{href:"/zh-CN/develop/contracts/anatomy#defining-the-contract",children:"main class attributes"}),", and accessed through them."]}),"\n",(0,n.jsxs)(t.p,{children:["In the state you can store constants, native types, and complex objects. When in doubt, prefer to use ",(0,n.jsx)(t.a,{href:"#data-structures",children:"SDK collections"})," over native ones, because they are optimized for the ",(0,n.jsx)(t.a,{href:"/zh-CN/develop/contracts/serialization#borsh-state-serialization",children:"serialized key-value storage"}),"."]}),"\n",(0,n.jsxs)(a.O2,{children:[(0,n.jsx)(a.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(a.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"6",end:"12"})}),(0,n.jsx)(a.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(a.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"14",end:"24"})})]}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"data-structures",children:"Data Structures"}),"\n",(0,n.jsxs)(t.p,{children:["The NEAR SDK exposes a series of structures (",(0,n.jsx)(t.a,{href:"#vector",children:"Vectors"}),", ",(0,n.jsx)(t.a,{href:"#set",children:"Sets"}),", ",(0,n.jsx)(t.a,{href:"#map",children:"Maps"})," and ",(0,n.jsx)(t.a,{href:"#tree",children:"Trees"}),") to simplify storing data in an efficient way."]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.mdxAdmonitionTitle,{children:["Instantiation All structures need to be initialized using a ",(0,n.jsxs)(t.strong,{children:["unique ",(0,n.jsx)(t.code,{children:"prefix"})]}),", which will be used to identify the structure's keys in the ",(0,n.jsx)(t.a,{href:"/zh-CN/develop/contracts/serialization#borsh-state-serialization",children:"serialized state"})]}),(0,n.jsxs)(a.O2,{children:[(0,n.jsx)(a.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(a.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"8",end:"11"})}),(0,n.jsx)(a.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:(0,n.jsx)(a.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"33",end:"38"})})]})]}),"\n",(0,n.jsx)("hr",{class:"subsection"}),"\n",(0,n.jsx)(t.h3,{id:"vector",children:"Vector"}),"\n",(0,n.jsxs)(t.p,{children:["Implements a ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Array_data_structure",children:"vector/array"})," which persists in the contract's storage. Please refer to the Rust and AS SDK's for a full reference on their interfaces."]}),"\n",(0,n.jsxs)(a.O2,{children:[(0,n.jsx)(a.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(a.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"25",end:"28"})}),(0,n.jsxs)(a.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,n.jsx)(a.Ey,{fname:"vector.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/vector.rs",start:"12",end:"30"}),(0,n.jsx)(a.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})]}),"\n",(0,n.jsx)("hr",{class:"subsection"}),"\n",(0,n.jsx)(t.h3,{id:"map",children:"Map"}),"\n",(0,n.jsxs)(t.p,{children:["Implements a ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Associative_array",children:"map/dictionary"})," which persists in the contract's storage. Please refer to the Rust and AS SDK's for a full reference on their interfaces."]}),"\n",(0,n.jsxs)(a.O2,{children:[(0,n.jsx)(a.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(a.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"33",end:"37"})}),(0,n.jsxs)(a.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,n.jsx)(a.Ey,{fname:"map.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/map.rs",start:"9",end:"24"}),(0,n.jsx)(a.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})]}),"\n",(0,n.jsxs)(r,{children:[(0,n.jsx)("summary",{children:"Nesting of Objects - Temporary Solution"}),(0,n.jsx)(t.p,{children:"In the JS SDK, you can store and retrieve elements from a nested map or object, but first you need to construct or deconstruct the structure from state. This is a temporary solution until the improvements have been implemented to the SDK. Here is an example of how to do this:"}),(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{className:"language-ts",children:'import { NearBindgen, call, view, near, UnorderedMap } from "near-sdk-js";\n\n@NearBindgen({})\nclass StatusMessage {\n  records: UnorderedMap;\n  constructor() {\n    this.records = new UnorderedMap("a");\n  }\n\n  @call({})\n  set_status({ message, prefix }: { message: string; prefix: string }) {\n    let account_id = near.signerAccountId();\n\n    const inner: any = this.records.get("b" + prefix);\n    const inner_map: UnorderedMap = inner\n      ? UnorderedMap.deserialize(inner)\n      : new UnorderedMap("b" + prefix);\n\n    inner_map.set(account_id, message);\n\n    this.records.set("b" + prefix, inner_map);\n  }\n\n  @view({})\n  get_status({ account_id, prefix }: { account_id: string; prefix: string }) {\n    const inner: any = this.records.get("b" + prefix);\n    const inner_map: UnorderedMap = inner\n      ? UnorderedMap.deserialize(inner)\n      : new UnorderedMap("b" + prefix);\n    return inner_map.get(account_id);\n  }\n}\n'})})]}),"\n",(0,n.jsx)("hr",{class:"subsection"}),"\n",(0,n.jsx)(t.h3,{id:"set",children:"Set"}),"\n",(0,n.jsxs)(t.p,{children:["Implements a ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Set_(abstract_data_type)",children:"set"})," which persists in the contract's storage. Please refer to the Rust and AS SDK's for a full reference on their interfaces."]}),"\n",(0,n.jsxs)(a.O2,{children:[(0,n.jsx)(a.SQ,{value:"\ud83c\udf10 JavaScript",language:"js",children:(0,n.jsx)(a.Ey,{fname:"index.js",url:"https://github.com/near-examples/docs-examples/blob/main/storage-js/src/index.ts",start:"42",end:"46"})}),(0,n.jsxs)(a.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,n.jsx)(a.Ey,{fname:"set.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/set.rs",start:"9",end:"16"}),(0,n.jsx)(a.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})]}),"\n",(0,n.jsx)("hr",{class:"subsection"}),"\n",(0,n.jsx)(t.h3,{id:"tree",children:"Tree"}),"\n",(0,n.jsxs)(t.p,{children:["An ordered equivalent of Map. The underlying implementation is based on an ",(0,n.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/AVL_tree",children:"AVL"}),". You should use this structure when you need to: have a consistent order, or access the min/max keys."]}),"\n",(0,n.jsx)(a.O2,{children:(0,n.jsxs)(a.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,n.jsx)(a.Ey,{fname:"tree.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/tree.rs",start:"9",end:"24"}),(0,n.jsx)(a.Ey,{fname:"lib.rs",url:"https://github.com/near-examples/docs-examples/blob/main/storage-rs/contract/src/lib.rs",start:"7",end:"24"})]})}),"\n",(0,n.jsx)(t.hr,{}),"\n",(0,n.jsx)(t.h2,{id:"storage-cost",children:"Storage Cost"}),"\n",(0,n.jsx)(t.p,{children:"Your contract needs to lock a portion of their balance proportional to the amount of data they stored in the blockchain. This means that:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["If more data is added and the ",(0,n.jsx)(t.strong,{children:"storage increases \u2191"}),", then your contract's ",(0,n.jsx)(t.strong,{children:"balance decreases \u2193"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["If data is deleted and the ",(0,n.jsx)(t.strong,{children:"storage decreases \u2193"}),", then your contract's ",(0,n.jsx)(t.strong,{children:"balance increases \u2191"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Currently, it cost approximately ",(0,n.jsx)(t.strong,{children:"1 \u24c3"})," to store ",(0,n.jsx)(t.strong,{children:"100kb"})," of data."]}),"\n",(0,n.jsxs)(t.admonition,{type:"info",children:[(0,n.jsxs)(t.mdxAdmonitionTitle,{children:["You can save on smart contract storage if using NEAR Account IDs by encoding them using base32. Since they consist of ",(0,n.jsx)(t.code,{children:"[a-z.-_]"})," characters with a maximum length of 64 characters, they can be encoded using 5 bits per character, with terminal ",(0,n.jsx)(t.code,{children:"\\0"}),". Going to a size of 65 * 5 = 325 bits from the original (64 + 4) * 8 = 544 bits. This is a 40% reduction in storage costs. :::"]}),(0,n.jsx)(t.admonition,{type:"caution",children:(0,n.jsx)(t.p,{children:"An error will raise if your contract tries to increase its state while not having NEAR to cover for storage."})})]}),"\n",(0,n.jsx)(t.admonition,{type:"warning",children:(0,n.jsxs)(t.mdxAdmonitionTitle,{children:["Be mindful of potential ",(0,n.jsx)(t.a,{href:"/zh-CN/develop/contracts/security/storage",children:"small deposit attacks"})," :::"]})})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},85162:(e,t,r)=>{r.d(t,{Z:()=>i});r(67294);var n=r(36905);const s={tabItem:"tabItem_Ymn6"};var a=r(85893);function i(e){var t=e.children,r=e.hidden,i=e.className;return(0,a.jsx)("div",{role:"tabpanel",className:(0,n.Z)(s.tabItem,i),hidden:r,children:t})}},74866:(e,t,r)=>{r.d(t,{Z:()=>S});var n=r(67294),s=r(36905),a=r(12466),i=r(16550),o=r(20469),l=r(91980),c=r(67392),u=r(50012);function d(e){var t,r;return null!=(t=null==(r=n.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,n.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?t:[]}function h(e){var t=e.values,r=e.children;return(0,n.useMemo)((function(){var e=null!=t?t:function(e){return d(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(r);return function(e){var t=(0,c.l)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,r])}function p(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function m(e){var t=e.queryString,r=void 0!==t&&t,s=e.groupId,a=(0,i.k6)(),o=function(e){var t=e.queryString,r=void 0!==t&&t,n=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!n)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=n?n:null}({queryString:r,groupId:s});return[(0,l._X)(o),(0,n.useCallback)((function(e){if(o){var t=new URLSearchParams(a.location.search);t.set(o,e),a.replace(Object.assign({},a.location,{search:t.toString()}))}}),[o,a])]}function f(e){var t,r,s,a,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,f=h(e),x=(0,n.useState)((function(){return function(e){var t,r=e.defaultValue,n=e.tabValues;if(0===n.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:n}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+n.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var s=null!=(t=n.find((function(e){return e.default})))?t:n[0];if(!s)throw new Error("Unexpected error: 0 tabValues");return s.value}({defaultValue:i,tabValues:f})})),g=x[0],b=x[1],v=m({queryString:c,groupId:d}),j=v[0],y=v[1],S=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Nk)(t),s=r[0],a=r[1],[s,(0,n.useCallback)((function(e){t&&a.set(e)}),[t,a])]),w=S[0],k=S[1],E=function(){var e=null!=j?j:w;return p({value:e,tabValues:f})?e:null}();return(0,o.Z)((function(){E&&b(E)}),[E]),{selectedValue:g,selectValue:(0,n.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),k(e)}),[y,k,f]),tabValues:f}}var x=r(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=r(85893);function v(e){var t=e.className,r=e.block,n=e.selectedValue,i=e.selectValue,o=e.tabValues,l=[],c=(0,a.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var t=e.currentTarget,r=l.indexOf(t),s=o[r].value;s!==n&&(c(t),i(s))},d=function(e){var t,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var n,s=l.indexOf(e.currentTarget)+1;r=null!=(n=l[s])?n:l[0];break;case"ArrowLeft":var a,i=l.indexOf(e.currentTarget)-1;r=null!=(a=l[i])?a:l[l.length-1]}null==(t=r)||t.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,s.Z)("tabs",{"tabs--block":r},t),children:o.map((function(e){var t=e.value,r=e.label,a=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:n===t?0:-1,"aria-selected":n===t,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},a,{className:(0,s.Z)("tabs__item",g.tabItem,null==a?void 0:a.className,{"tabs__item--active":n===t}),children:null!=r?r:t}),t)}))})}function j(e){var t=e.lazy,r=e.children,s=e.selectedValue,a=(Array.isArray(r)?r:[r]).filter(Boolean);if(t){var i=a.find((function(e){return e.props.value===s}));return i?(0,n.cloneElement)(i,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:a.map((function(e,t){return(0,n.cloneElement)(e,{key:t,hidden:e.props.value!==s})}))})}function y(e){var t=f(e);return(0,b.jsxs)("div",{className:(0,s.Z)("tabs-container",g.tabList),children:[(0,b.jsx)(v,Object.assign({},e,t)),(0,b.jsx)(j,Object.assign({},e,t))]})}function S(e){var t=(0,x.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(t))}},77229:(e,t,r)=>{r.d(t,{Ey:()=>u,O2:()=>l,SQ:()=>c});r(67294);var n=r(74866),s=r(85162),a=r(95665),i=r.n(a),o=r(85893);function l(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,o.jsx)(n.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,o.jsx)(s.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function c(e){var t=e.children,r=e.language;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var r=e.props,n=(r.children,r.url),s=r.start,a=r.end,i=r.fname;if(e.type===u)return u({url:n,start:s,end:a,language:t,fname:i});return e}(e,r)})),1==t.length?(0,o.jsx)(s.Z,{value:0,label:t[0].props.fname,children:t[0]}):(0,o.jsx)(n.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,o.jsx)(s.Z,{value:t,label:e.props.fname,children:e})}))})}function u(e){var t=e.url,r=e.start,n=e.end,s=e.language,a=e.fname,l=t+"#";return r&&n&&(l+="L"+r+"-L"+n+"#"),(0,o.jsx)(i(),{language:s,fname:a,children:l})}}}]);