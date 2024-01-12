"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3879],{89088:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>o,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>d});var s=n(85893),a=n(11151);const c={id:"state",title:"State"},o=void 0,r={id:"concepts/basics/accounts/state",title:"State",description:"Each account has an associated state where it stores its metadata and all the contract-related data (contract's code + storage).",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/1.concepts/basics/accounts/state.md",sourceDirName:"1.concepts/basics/accounts",slug:"/concepts/basics/accounts/state",permalink:"/vi/concepts/basics/accounts/state",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/accounts/state.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",frontMatter:{id:"state",title:"State"},sidebar:"concepts",previous:{title:"Smart Contract",permalink:"/vi/concepts/basics/accounts/smartcontract"},next:{title:"Creating Accounts",permalink:"/vi/concepts/basics/accounts/creating-accounts"}},i={},d=[{value:"Account&#39;s Metadata",id:"accounts-metadata",level:3},{value:"Contract&#39;s State",id:"contracts-state",level:3},{value:"Paying for Storage (1 \u24c3 ~ 100kb)",id:"paying-for-storage-1-\u24dd--100kb",level:3}];function l(t){const e={a:"a",admonition:"admonition",code:"code",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["Each account has an associated state where it stores its ",(0,s.jsx)(e.strong,{children:"metadata"})," and all the contract-related data ",(0,s.jsx)(e.strong,{children:"(contract's code + storage)"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["Accounts' states can be ",(0,s.jsx)(e.strong,{children:"read by anyone"})," in the network, but only the account itself can change it."]}),"\n",(0,s.jsxs)(e.p,{children:["Each account ",(0,s.jsx)(e.strong,{children:"pays for their own storage"})," by locking a part of their balance proportional to the space used."]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"accounts-metadata",children:"Account's Metadata"}),"\n",(0,s.jsx)(e.p,{children:"The state keeps track of relevant metadata from the contract. Particularly, the state stores the following fields:"}),"\n",(0,s.jsxs)(e.ol,{children:["\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"amount"}),": The accounts balance expressed in yoctoNEAR (1 \u24c3 = 10",(0,s.jsx)("sup",{children:"24"}),"y\u24c3)."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"code_hash"}),": A hash of the contract's Wasm file, filled with ",(0,s.jsx)(e.code,{children:"1s"})," if no contract is present."]}),"\n",(0,s.jsxs)(e.li,{children:[(0,s.jsx)(e.code,{children:"storage_usage"}),": Amount of bytes used for storage by the account (code + metadata + data storage)."]}),"\n"]}),"\n",(0,s.jsxs)(e.admonition,{type:"info",children:[(0,s.jsxs)(e.mdxAdmonitionTitle,{children:["You can check an accounts metadata by running the following ",(0,s.jsx)(e.a,{href:"/vi/tools/near-cli",children:"near cli"})," command:"]}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"near state hello-nearverse.testnet\n"})})]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"contracts-state",children:"Contract's State"}),"\n",(0,s.jsxs)(e.p,{children:["The state is also the place where both the ",(0,s.jsx)(e.strong,{children:"contract's code"})," and the ",(0,s.jsx)(e.strong,{children:"contract's storage"})," are stored."]}),"\n",(0,s.jsxs)(e.p,{children:["The contract's storage is organized as ",(0,s.jsx)(e.strong,{children:"key-value pairs"})," encoded using base64 and JSON serialization (or ",(0,s.jsx)(e.a,{href:"https://borsh.io",children:"Borsh"})," in Rust)."]}),"\n",(0,s.jsxs)(e.admonition,{type:"info",children:[(0,s.jsxs)(e.p,{children:["You can check an accounts contract state by running the following ",(0,s.jsx)(e.a,{href:"/vi/tools/near-cli",children:"near cli"})," command:"]}),(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-bash",children:"near view-state hello-nearverse.testnet --finality final --utf8 true\n"})})]}),"\n",(0,s.jsx)(e.admonition,{type:"tip",children:(0,s.jsx)(e.p,{children:"When developing contracts our SDK will handle serializing the storage, so you can focus on what matters."})}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h3,{id:"paying-for-storage-1-\u24dd--100kb",children:"Paying for Storage (1 \u24c3 ~ 100kb)"}),"\n",(0,s.jsx)(e.p,{children:"In order to pay for storage, accounts needs to lock a portion of their balance proportional to the amount of data being stored. This means that:"}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsxs)(e.li,{children:["If more data is added and the ",(0,s.jsx)(e.strong,{children:"state increases \u2191"}),", the account's ",(0,s.jsx)(e.strong,{children:"balance decreases \u2193"}),"."]}),"\n",(0,s.jsxs)(e.li,{children:["If data is deleted and the ",(0,s.jsx)(e.strong,{children:"state decreases \u2193"}),", the account's ",(0,s.jsx)(e.strong,{children:"balance increases \u2191"}),"."]}),"\n"]}),"\n",(0,s.jsxs)(e.p,{children:["Currently, it cost approximately ",(0,s.jsx)(e.strong,{children:"1 \u24c3"})," to store ",(0,s.jsx)(e.strong,{children:"100kb"})," of data."]})]})}function h(t={}){const{wrapper:e}={...(0,a.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>r,a:()=>o});var s=n(67294);const a={},c=s.createContext(a);function o(t){const e=s.useContext(c);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function r(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(a):t.components||a:o(t.components),s.createElement(c.Provider,{value:e},t.children)}}}]);