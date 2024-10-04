"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[526],{82632:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>s,default:()=>d,frontMatter:()=>o,metadata:()=>r,toc:()=>c});var a=n(85893),l=n(11151);const o={title:"Hello Ethereum Wallets!",authors:["gagdiez","slava"],slug:"hello-ethereum-wallets",tags:["updates"]},s=void 0,r={permalink:"/zh-CN/blog/hello-ethereum-wallets",source:"@site/../blog/2024-11-07.md",title:"Hello Ethereum Wallets!",description:"You can now login using MetaMask, WalletConnect and +400 Ethereum Wallets on Near!",date:"2024-11-07T00:00:00.000Z",tags:[{inline:!0,label:"updates",permalink:"/zh-CN/blog/tags/updates"}],readingTime:2.24,hasTruncateMarker:!0,authors:[{name:"Guille",title:"Docs Maintainer",url:"https://github.com/gagdiez",imageURL:"https://github.com/gagdiez.png",key:"gagdiez",page:null},{name:"Slava Karkunov",title:"DevRel",socials:{x:"https://x.com/apocnab",github:"https://github.com/karkunow",linkedin:"https://www.linkedin.com/in/karkunov/"},imageURL:"https://www.datocms-assets.com/95026/1677167398-photo_2022-12-02-14-55-03.jpeg",key:"slava",page:null}],frontMatter:{title:"Hello Ethereum Wallets!",authors:["gagdiez","slava"],slug:"hello-ethereum-wallets",tags:["updates"]},unlisted:!1,nextItem:{title:"Future of Pagoda Services",permalink:"/zh-CN/blog/2024-08-13-pagoda-services"}},i={authorsImageUrls:[void 0,void 0]},c=[{value:"Ethereum Wallets on NEAR",id:"ethereum-wallets-on-near",level:2},{value:"How it works",id:"how-it-works",level:2},{value:"Login",id:"login",level:3},{value:"Using your Account",id:"using-your-account",level:3},{value:"Updating your Application",id:"updating-your-application",level:2},{value:"Resources",id:"resources",level:2}];function h(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",strong:"strong",...(0,l.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:(0,a.jsx)(t.em,{children:"You can now login using MetaMask, WalletConnect and +400 Ethereum Wallets on Near!"})}),"\n",(0,a.jsx)("p",{children:(0,a.jsx)("img",{src:"/docs/blog/web3wallets/cover.png"})}),"\n",(0,a.jsx)(t.h2,{id:"ethereum-wallets-on-near",children:"Ethereum Wallets on NEAR"}),"\n",(0,a.jsx)(t.p,{children:"We are excited to announce that NEAR now supports Ethereum wallets! This means that you can now login to NEAR applications using MetaMask, WalletConnect, and over 400 other Ethereum wallets."}),"\n",(0,a.jsx)(t.p,{children:"In this post, we will explain how Ethereum wallets work on NEAR, and where to find information on how to integrate them into your applications."}),"\n",(0,a.jsx)(t.h2,{id:"how-it-works",children:"How it works"}),"\n",(0,a.jsxs)(t.p,{children:["The idea of bringing Ethereum wallets to Near was born on the ",(0,a.jsx)(t.a,{href:"NEP-518%5D(https://github.com/near/NEPs/issues/518)",children:"NEP-518"}),", and the ",(0,a.jsx)(t.a,{href:"https://aurora.dev",children:"Aurora Labs team"})," worked for over a year to make it a reality."]}),"\n",(0,a.jsxs)(t.p,{children:["Since Ethereum wallets create ",(0,a.jsx)(t.strong,{children:"ethereum transactions"})," and talk with ",(0,a.jsx)(t.strong,{children:"ethereum RPCs"}),", the Aurora team had to create three components:"]}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsx)(t.li,{children:"A Translator API, that translates Ethereum RPC calls into NEAR RPC calls"}),"\n",(0,a.jsx)(t.li,{children:'A "Wallet Contract" deployed on Near, that can process Ethereum transactions'}),"\n"]}),"\n",(0,a.jsx)("img",{src:"/docs/blog/web3wallets/diagram.png",height:"600px",style:{width:"auto",display:"block",margin:"0 auto"}}),"\n",(0,a.jsx)(t.h3,{id:"login",children:"Login"}),"\n",(0,a.jsxs)(t.p,{children:["Imagine your account on Metamask is ",(0,a.jsx)(t.code,{children:"0xD79...314"}),", and you want to login on a Near application."]}),"\n",(0,a.jsxs)(t.p,{children:["The first time you login, ",(0,a.jsx)(t.code,{children:"ethereum-wallets.near"})," will create the Near account ",(0,a.jsx)(t.code,{children:"0xD79...314"})," for you."]}),"\n",(0,a.jsx)("img",{src:"/docs/blog/web3wallets/login.png",style:{width:"auto",display:"block",margin:"0 auto"}}),"\n",(0,a.jsxs)(t.p,{children:["Your new Near account already has a ",(0,a.jsx)(t.code,{children:"Wallet Contract"})," deployed on it, which can ",(0,a.jsx)(t.strong,{children:"translate ethereum transactions"})," into ",(0,a.jsx)(t.strong,{children:"account actions"}),"."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsx)(t.p,{children:"In Near, smart contracts can do anything an account can do, including sending tokens and calling other contracts!"})}),"\n",(0,a.jsx)(t.h3,{id:"using-your-account",children:"Using your Account"}),"\n",(0,a.jsx)(t.p,{children:"Once you have logged in, you can use start interacting with the application. If at some point the application needs to interact with the blockchain, Metamask will ask you to sign a transaction."}),"\n",(0,a.jsxs)(t.p,{children:["Under the hood, Metamask will create an Ethereum transaction and send it to the ",(0,a.jsx)(t.code,{children:"Translator API"}),", deployed at ",(0,a.jsx)(t.code,{children:"https://eth-rpc.mainnet.near.org"}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Translator API"})," will then translate the Ethereum transaction into a ",(0,a.jsx)(t.strong,{children:"function call"})," into the ",(0,a.jsx)(t.code,{children:"Wallet Contract"})," deployed in your account. Particularly, it will call the ",(0,a.jsx)(t.code,{children:"rlp_execute"})," function, passing the Ethereum transaction as an argument."]}),"\n",(0,a.jsx)("img",{src:"/docs/blog/web3wallets/function-call.png",style:{width:"auto",display:"block",margin:"0 auto"}}),"\n",(0,a.jsxs)(t.p,{children:["The ",(0,a.jsx)(t.code,{children:"Wallet Contract"})," will then execute the function call, and the application will receive the result."]}),"\n",(0,a.jsx)(t.admonition,{type:"tip",children:(0,a.jsxs)(t.p,{children:["Check ",(0,a.jsx)(t.a,{href:"https://testnet.nearblocks.io/txns/GrVGFVFmGBcNP5xkoA21gEJ7d5bUGVxtmkfHAzyUW895#enhanced",children:"this transaction"})," in our explorer to see the full execution path"]})}),"\n",(0,a.jsx)(t.h2,{id:"updating-your-application",children:"Updating your Application"}),"\n",(0,a.jsxs)(t.p,{children:["In order to support Ethereum wallets, you only need to update your version of ",(0,a.jsx)(t.code,{children:"wallet-selector"}),", and configure it to include the new ",(0,a.jsx)(t.code,{children:"ethereum-wallets"})," module."]}),"\n",(0,a.jsxs)(t.p,{children:["Do not worry! it is very simple, check our ",(0,a.jsx)(t.a,{href:"/tools/ethereum-wallets",children:(0,a.jsx)(t.strong,{children:"tutorial"})})," and working example ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/tree/main/frontend",children:(0,a.jsx)(t.strong,{children:"hello world frontend"})}),"."]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"resources",children:"Resources"}),"\n",(0,a.jsxs)(t.ol,{children:["\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"/tools/ethereum-wallets",children:(0,a.jsx)(t.strong,{children:"Integration Tutorial"})})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://github.com/near-examples/hello-near-examples/blob/main/frontend/",children:"Hello World Example"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.a,{href:"https://drive.google.com/file/d/1xGWN1yRLzFmRn1e29kbSiO2W1JsxuJH-/view?usp=sharing",children:"Recording of the Ethereum Wallet Presentation"})}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:["\n",(0,a.jsxs)(t.p,{children:[(0,a.jsx)(t.a,{href:"https://github.com/near/NEPs/issues/518",children:"NEP-518"}),", the proposal that started it all"]}),"\n"]}),"\n"]})]})}function d(e={}){const{wrapper:t}={...(0,l.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var a=n(67294);const l={},o=a.createContext(l);function s(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(l):e.components||l:s(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);