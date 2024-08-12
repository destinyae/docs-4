"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[1410],{13673:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>r,default:()=>d,frontMatter:()=>s,metadata:()=>o,toc:()=>h});var a=t(85893),i=t(11151);const s={id:"getting-started",title:"Multichain Gas Relayer: Getting Started Guide"},r=void 0,o={id:"build/chain-abstraction/multichain-gas-relayer/getting-started",title:"Multichain Gas Relayer: Getting Started Guide",description:"Chain Signatures lets users manage remote accounts and transact on any blockchain from a single NEAR account. The Multichain Gas Relayer further simplifies this process by eliminating the need for users to acquire the tokens needed in the foreign chain to execute their transactions.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.build/1.chain-abstraction/multichain-gas-relayer/getting-started.md",sourceDirName:"2.build/1.chain-abstraction/multichain-gas-relayer",slug:"/build/chain-abstraction/multichain-gas-relayer/getting-started",permalink:"/ko/build/chain-abstraction/multichain-gas-relayer/getting-started",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.build/1.chain-abstraction/multichain-gas-relayer/getting-started.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1723454461e3,frontMatter:{id:"getting-started",title:"Multichain Gas Relayer: Getting Started Guide"},sidebar:"build",previous:{title:"Implementing Chain Signatures",permalink:"/ko/build/chain-abstraction/chain-signatures/"},next:{title:"Overview",permalink:"/ko/build/chain-abstraction/multichain-gas-relayer/overview"}},c={},h=[{value:"Why a Multichain Gas Relayer?",id:"why-a-multichain-gas-relayer",level:2},{value:"How Does it Work?",id:"how-does-it-work",level:2},{value:"System Workflow",id:"system-workflow",level:4},{value:"Example Real-World Flow",id:"example-real-world-flow",level:2},{value:"What chains are supported?",id:"what-chains-are-supported",level:2},{value:"Where can I go to learn more?",id:"where-can-i-go-to-learn-more",level:2}];function l(e){const n={a:"a",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",ol:"ol",p:"p",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.a,{href:"/ko/build/chain-abstraction/chain-signatures/getting-started",children:"Chain Signatures"})," lets users manage remote accounts and transact on any blockchain from a single NEAR account. The Multichain Gas Relayer further simplifies this process by eliminating the need for users to acquire the tokens needed in the foreign chain to execute their transactions."]}),"\n",(0,a.jsx)(n.p,{children:(0,a.jsx)(n.img,{src:"https://pages.near.org/wp-content/uploads/2024/02/acct-abstraction-blog-1.png",alt:"img"})}),"\n",(0,a.jsx)(n.p,{children:"In other words, the Multichain Gas Relayer provides gas abstraction for foreign chains, allowing NEAR accounts to pay for the gas needed in the target chain using our native token (NEAR) and fungible tokens (e.g. USDC and USDT)."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"why-a-multichain-gas-relayer",children:"Why a Multichain Gas Relayer?"}),"\n",(0,a.jsx)(n.p,{children:"NEAR's mission is to build blockchain infrastructure for Chain Abstracted applications. Chain abstraction aims to make blockchain technology more user-friendly by simplifying interactions."}),"\n",(0,a.jsx)(n.p,{children:"A key step in achieving this is reducing the complexity of paying for transaction gas across different blockchains. Users should be able to pay for cross-chain transactions with a single asset or have the gas fees fully sponsored on their behalf."}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"how-does-it-work",children:"How Does it Work?"}),"\n",(0,a.jsx)(n.p,{children:"The Multichain Gas Relayer has 3 core components:"}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Gas Station Smart Contract"}),": A smart contract on NEAR that manages the creation, signing, of transactions to foreign chains. It also handles gas fee calculations and collects NEAR tokens for gas payments on foreign chains"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Multichain Relayer Server"}),": This server coordinates the relaying of transactions between NEAR and other blockchains. It listens for signed transaction payloads and submits them to the appropriate foreign chain RPCs"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Chain Signatures"}),": A network of distributed Multi-Party Computation (MPC) signers that cooperatively sign transactions. This ensures secure transaction signing and validation on the NEAR blockchain before relaying to foreign chains"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.h4,{id:"system-workflow",children:"System Workflow"}),"\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.img,{alt:"chain-signatures",src:t(57114).Z+"",width:"2144",height:"994"}),"\n",(0,a.jsx)(n.em,{children:"Diagram of a chain signature in NEAR with gas being covered by the Relayer"})]}),"\n",(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Transaction Creation"}),": An account sends a transaction to the Gas Station Contract, specifying the foreign chain transaction and attaching NEAR tokens to cover gas fees on the foreign chain."]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Transaction Signing"}),": The Gas Station Contract invokes Chain Signatures MPC signing service to sign the transaction. This step may require multiple calls due to gas limitations on NEAR, especially for complex transactions"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Event Emission and Indexing"}),": Once the transactions are signed, the Gas Station Contract emits an event. The Gas Station Event Indexer picks up this event and triggers the Multichain Relayer Server to relay the signed transactions"]}),"\n"]}),"\n",(0,a.jsxs)(n.li,{children:["\n",(0,a.jsxs)(n.p,{children:[(0,a.jsx)(n.strong,{children:"Relaying Transactions"}),": The Multichain Relayer Server first sends a funding transaction to ensure the user\u2019s account on the foreign chain has sufficient gas. Once confirmed, it sends the user\u2019s originally intended signed transaction to the foreign chain for execution"]}),"\n"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"example-real-world-flow",children:"Example Real-World Flow"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Alice has an ",(0,a.jsx)(n.code,{children:"alice.near"})," account that maps to a remote Optimism (OP) address, ",(0,a.jsx)(n.code,{children:"0xabc"})]}),"\n",(0,a.jsx)(n.li,{children:"Alice wants to interact with a Farcaster application on OP using her NEAR account, but she prefers to pay for gas with assets she has on hand, specifically USDT"}),"\n",(0,a.jsx)(n.li,{children:"Alice initiates an on-chain action on Farcaster from her NEAR account. She sends the transaction to a gas station smart contract, including the OP transaction payload in the arguments and attaching the necessary USDT amount for the cross-chain gas payment"}),"\n",(0,a.jsxs)(n.li,{children:["The transaction bundle is sent to the NEAR gas station contract, which then forwards it to the NEAR MPC signing service. This bundle includes (1) the transaction to fund the user's ",(0,a.jsx)(n.code,{children:"0xabc"})," address with the ETH needed for gas, and (2) the user's original transaction to take action on the Farcaster application"]}),"\n",(0,a.jsx)(n.li,{children:"The MPC service will sign both transactions and forward the signed transactions back to the gas station contract"}),"\n",(0,a.jsxs)(n.li,{children:["The relayer operator will observe the events (signed transactions) emitted from the gas station contract and submit them to the Optimism network. This process starts by initiating a fund transfer from a treasury paymaster account on Optimism that holds ETH. The paymaster account will transfer ETH to the user's ",(0,a.jsx)(n.code,{children:"0xabc"})," address, equivalent to the USDT originally sent by the user"]}),"\n",(0,a.jsxs)(n.li,{children:["Then the relayer will submit the final transaction, and the originally intended Farcaster transaction will be executed from the user's ",(0,a.jsx)(n.code,{children:"0xabc"})," address, using ETH to cover the gas"]}),"\n"]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"what-chains-are-supported",children:"What chains are supported?"}),"\n",(0,a.jsxs)(n.p,{children:["Currently, the Multichain Gas Relayer supports ",(0,a.jsx)(n.a,{href:"https://www.base.org/",children:"Base"}),", ",(0,a.jsx)(n.a,{href:"https://www.optimism.io/",children:"Optimism"}),", ",(0,a.jsx)(n.a,{href:"https://arbitrum.io/",children:"Arbitrum"})," and ",(0,a.jsx)(n.a,{href:"https://www.bnbchain.org/en/bnb-smart-chain",children:"Binance Smart Chain"}),", and ",(0,a.jsx)(n.a,{href:"https://ethereum.org/en/",children:"Ethereum"}),"."]}),"\n",(0,a.jsxs)(n.p,{children:["These chains were selected based on multiple factors including interest from key partners, low gas fees, and fast finality for transactions. Support for EDDSA chains like ",(0,a.jsx)(n.a,{href:"https://solana.com/",children:"Solana"})," will be coming soon in conjunction with EDDSA support for NEAR chain signatures."]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"where-can-i-go-to-learn-more",children:"Where can I go to learn more?"}),"\n",(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsxs)(n.li,{children:["Visit our ",(0,a.jsx)(n.a,{href:"/ko/build/chain-abstraction/multichain-gas-relayer/overview",children:"docs"})," to learn more about how to integrate the Multichain Gas Relayer into your product"]}),"\n",(0,a.jsxs)(n.li,{children:["Join the NEAR Chain Abstraction ",(0,a.jsx)(n.a,{href:"https://t.me/chain_abstraction",children:"developer group"})," on Telegram to ask questions and discuss ideas with other developers."]}),"\n"]})]})}function d(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},57114:(e,n,t)=>{t.d(n,{Z:()=>a});const a=t.p+"assets/images/multi-chain-gas-diagram-16e5b765434023ea3d08e5c7a7958365.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var a=t(67294);const i={},s=a.createContext(i);function r(e){const n=a.useContext(s);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(s.Provider,{value:n},e.children)}}}]);