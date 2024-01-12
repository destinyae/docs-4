"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6119],{66106:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>i,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>d});var s=n(85893),c=n(11151);const a={id:"smartcontract",title:"Smart Contract"},r=void 0,o={id:"concepts/basics/accounts/smartcontract",title:"Smart Contract",description:"Smart contracts are pieces of executable code stored in the account's state that have their own storage, and perform transactions in the account's name.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/1.concepts/basics/accounts/smartcontract.md",sourceDirName:"1.concepts/basics/accounts",slug:"/concepts/basics/accounts/smartcontract",permalink:"/zh-CN/concepts/basics/accounts/smartcontract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/basics/accounts/smartcontract.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"smartcontract",title:"Smart Contract"},sidebar:"concepts",previous:{title:"Access Keys",permalink:"/zh-CN/concepts/basics/accounts/access-keys"},next:{title:"State",permalink:"/zh-CN/concepts/basics/accounts/state"}},i={},d=[{value:"Why Smart Contracts Matter",id:"why-smart-contracts-matter",level:2},{value:"Developing Contracts in NEAR",id:"developing-contracts-in-near",level:2},{value:"Advantages of NEAR Contracts",id:"advantages-of-near-contracts",level:2},{value:"1. Simple to Build",id:"1-simple-to-build",level:3},{value:"2. Simple to Maintain",id:"2-simple-to-maintain",level:3},{value:"3. Some Methods are Free to Call",id:"3-some-methods-are-free-to-call",level:3}];function l(t){const e={a:"a",admonition:"admonition",h2:"h2",h3:"h3",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",strong:"strong",ul:"ul",...(0,c.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsxs)(e.p,{children:["Smart contracts are pieces of ",(0,s.jsx)(e.strong,{children:"executable code"})," stored in the ",(0,s.jsx)(e.a,{href:"/zh-CN/concepts/basics/accounts/state",children:"account's state"})," that have their own storage, and ",(0,s.jsx)(e.strong,{children:"perform transactions"})," in the account's name."]}),"\n",(0,s.jsx)(e.p,{children:"They are written in Javascript or Rust, and then compiled and deployed to an account so everyone can interact with them through their public methods."}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"why-smart-contracts-matter",children:"Why Smart Contracts Matter"}),"\n",(0,s.jsxs)(e.p,{children:["Smart contracts enable to create ",(0,s.jsx)(e.strong,{children:"fully decentralized applications"}),"."]}),"\n",(0,s.jsxs)(e.p,{children:["In fact, smart contracts enabled to create a multitude of ",(0,s.jsx)(e.a,{href:"https://awesomenear.com",children:"awesome apps"})," such as:"]}),"\n",(0,s.jsxs)(e.ul,{children:["\n",(0,s.jsx)(e.li,{children:"Decentralized Autonomous Organizations, where users create and vote proposals."}),"\n",(0,s.jsx)(e.li,{children:"Art Marketplaces, where users create and commercialize digital art pieces."}),"\n",(0,s.jsx)(e.li,{children:"Decentralized exchanges, where users can trade different currencies."}),"\n"]}),"\n",(0,s.jsx)(e.hr,{}),"\n",(0,s.jsx)(e.h2,{id:"developing-contracts-in-near",children:"Developing Contracts in NEAR"}),"\n",(0,s.jsxs)(e.p,{children:["Developers can choose between using ",(0,s.jsx)(e.a,{href:"/zh-CN/sdk/js/introduction",children:"Javascript"})," or ",(0,s.jsx)(e.a,{href:"/zh-CN/sdk/rust/introduction",children:"Rust"})," to write smart contracts in NEAR."]}),"\n",(0,s.jsx)(e.p,{children:"Indistinctly from the language chosen, the NEAR SDK will help you to compile the contract into WebAssembly, from which point it can be deployed and executed on the NEAR platform."}),"\n",(0,s.jsxs)(e.admonition,{type:"tip",children:[(0,s.jsxs)(e.mdxAdmonitionTitle,{children:["See how simple it is to build a contract in NEAR with our ",(0,s.jsx)(e.a,{href:"/zh-CN/develop/quickstart-guide",children:(0,s.jsx)(e.strong,{children:"Quickstart Guide"})}),". You will spin-up your first dApp in a matter of seconds. :::"]}),(0,s.jsx)(e.hr,{}),(0,s.jsx)(e.h2,{id:"advantages-of-near-contracts",children:"Advantages of NEAR Contracts"}),(0,s.jsx)(e.h3,{id:"1-simple-to-build",children:"1. Simple to Build"}),(0,s.jsxs)(e.p,{children:["Thanks to our unique ",(0,s.jsx)(e.a,{href:"/zh-CN/sdk/js/introduction",children:"Javascript SDK"})," and our ",(0,s.jsx)(e.a,{href:"/zh-CN/develop/welcome",children:"vast documentation"}),"."]}),(0,s.jsx)(e.h3,{id:"2-simple-to-maintain",children:"2. Simple to Maintain"}),(0,s.jsxs)(e.p,{children:["Since the contract's code is separated from ",(0,s.jsx)(e.a,{href:"/zh-CN/concepts/basics/accounts/state",children:"its storage"}),", contracts of ",(0,s.jsx)(e.a,{href:"/zh-CN/concepts/basics/accounts/access-keys#locked-accounts",children:"non-locked"})," account can ",(0,s.jsx)(e.strong,{children:"be updated"}),"."]}),(0,s.jsx)(e.h3,{id:"3-some-methods-are-free-to-call",children:"3. Some Methods are Free to Call"}),(0,s.jsxs)(e.p,{children:["Public methods that perform only read operations can be ",(0,s.jsx)(e.strong,{children:"called for free"}),"."]})]})]})}function h(t={}){const{wrapper:e}={...(0,c.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>o,a:()=>r});var s=n(67294);const c={},a=s.createContext(c);function r(t){const e=s.useContext(a);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function o(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(c):t.components||c:r(t.components),s.createElement(a.Provider,{value:e},t.children)}}}]);