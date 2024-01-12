"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[3605],{70352:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>d,contentTitle:()=>i,default:()=>p,frontMatter:()=>o,metadata:()=>l,toc:()=>h});var s=n(85893),a=n(11151);const c=n.p+"assets/images/create-mainnet-account-d624261d742f39effc6ff8e351d22b75.png",r=n.p+"assets/images/create-testnet-wallet-account-6bcfc4b15c7ff93126ae723be2ab3701.png",o={sidebar_position:4,sidebar_label:"Linkdrop contract",title:"Introducing the linkdrop contract we can use"},i="The linkdrop contract",l={id:"tutorials/crosswords/intermediate/linkdrop",title:"Introducing the linkdrop contract we can use",description:"We're going to take a small detour to talk about the linkdrop smart contract.  It's best that we first understand this contract and its purpose, then discuss calling a method on this contract.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/03-intermediate/03-linkdrop.md",sourceDirName:"3.tutorials/crosswords/03-intermediate",slug:"/tutorials/crosswords/intermediate/linkdrop",permalink:"/vi/tutorials/crosswords/intermediate/linkdrop",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/03-intermediate/03-linkdrop.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",sidebarPosition:4,frontMatter:{sidebar_position:4,sidebar_label:"Linkdrop contract",title:"Introducing the linkdrop contract we can use"},sidebar:"contracts",previous:{title:"Seed phrase logic",permalink:"/vi/tutorials/crosswords/intermediate/use-seed-phrase"},next:{title:"Cross-contract calls, etc.",permalink:"/vi/tutorials/crosswords/intermediate/cross-contract-calls"}},d={},h=[{value:"Testnet",id:"testnet",level:2},{value:"Mainnet",id:"mainnet",level:2},{value:"A simple callback",id:"a-simple-callback",level:2},{value:"The <code>create_account</code> method",id:"the-create_account-method",level:3},{value:"The callback",id:"the-callback",level:3}];function u(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.h1,{id:"the-linkdrop-contract",children:"The linkdrop contract"}),"\n",(0,s.jsx)(t.p,{children:"We're going to take a small detour to talk about the linkdrop smart contract.  It's best that we first understand this contract and its purpose, then discuss calling a method on this contract."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/near/near-linkdrop",children:"The linkdrop contract"})," is deployed to the accounts ",(0,s.jsx)(t.code,{children:"testnet"})," and ",(0,s.jsx)(t.code,{children:"near"}),", which are known as the top-level accounts of the testnet and mainnet network, respectively. (Anyone can create a linkdrop-style contract elsewhere, but the one shown here is the main one that others are patterned off of.)"]}),"\n",(0,s.jsx)(t.h2,{id:"testnet",children:"Testnet"}),"\n",(0,s.jsx)(t.p,{children:"There\u2019s nothing special about testnet accounts; there is no real-world cost to you as a developer when creating testnet accounts, so feel free to create or delete at your convenience."}),"\n",(0,s.jsx)(t.p,{children:"When a user signs up for a testnet account on NEAR Wallet, they'll see this:"}),"\n",(0,s.jsx)("img",{src:r,width:"400"}),"\n",(0,s.jsx)(t.p,{children:"Let's discuss how this testnet account gets created."}),"\n",(0,s.jsxs)(t.p,{children:["Notice the new account will end in ",(0,s.jsx)(t.code,{children:".testnet"}),". This is because the account ",(0,s.jsx)(t.code,{children:"testnet"})," will create a subaccount (like we learned about ",(0,s.jsx)(t.a,{href:"/vi/tutorials/crosswords/basics/add-functions-call#create-a-subaccount",children:"earlier in this tutorial"}),") called ",(0,s.jsx)(t.code,{children:"vacant-name.testnet"}),"."]}),"\n",(0,s.jsx)(t.p,{children:"There are two ways to create this subaccount:"}),"\n",(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:["Use a full-access key for the account ",(0,s.jsx)(t.code,{children:"testnet"})," to sign a transaction with the ",(0,s.jsx)(t.code,{children:"CreateAccount"})," Action."]}),"\n",(0,s.jsxs)(t.li,{children:["In a smart contract deployed to the ",(0,s.jsx)(t.code,{children:"testnet"})," account, call the ",(0,s.jsx)(t.code,{children:"CreateAccount"})," Action, which is an async method that returns a Promise. (More info about writing a ",(0,s.jsxs)(t.a,{href:"/sdk/rust/promises/create-account",children:[(0,s.jsx)(t.code,{children:"CreateAccount"})," Promise"]}),".)"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["(In the example below that uses NEAR CLI to create a new account, it's calling ",(0,s.jsx)(t.code,{children:"CreateAccount"}),' on the linkdrop contract that is deployed to the top level "near" account on mainnet.)']}),"\n",(0,s.jsx)(t.h2,{id:"mainnet",children:"Mainnet"}),"\n",(0,s.jsxs)(t.p,{children:["On mainnet, the account ",(0,s.jsx)(t.code,{children:"near"})," also has the linkdrop contract deployed to it."]}),"\n",(0,s.jsx)(t.p,{children:"Using NEAR CLI, a person can create a mainnet account by calling the linkdrop contract, like shown below:"}),"\n",(0,s.jsx)("img",{src:c}),"\n",(0,s.jsxs)(t.p,{children:["The above command calls the ",(0,s.jsx)(t.code,{children:"create_account"})," method on the account ",(0,s.jsx)(t.code,{children:"near"}),", and would create ",(0,s.jsx)(t.code,{children:"aloha.near"})," ",(0,s.jsx)(t.strong,{children:"if it's available"}),", funding it with 15 \u24c3."]}),"\n",(0,s.jsxs)(t.p,{children:["We'll want to write a smart contract that calls that same method. However, things get interesting because it's possible ",(0,s.jsx)(t.code,{children:"aloha.near"})," is already taken, so we'll need to learn how to handle that."]}),"\n",(0,s.jsx)(t.h2,{id:"a-simple-callback",children:"A simple callback"}),"\n",(0,s.jsxs)(t.h3,{id:"the-create_account-method",children:["The ",(0,s.jsx)(t.code,{children:"create_account"})," method"]}),"\n",(0,s.jsxs)(t.p,{children:["Here, we'll show the implementation of the ",(0,s.jsx)(t.code,{children:"create_account"})," method. Note the ",(0,s.jsx)(t.code,{children:"#[payable]"})," macro, which allows this function to accept an attached deposit. (Remember in the CLI command we were attaching 15 \u24c3.)"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near/near-linkdrop/blob/ba94a9c7292d3b48a0a8ba380fb0e7ff6b24efc6/src/lib.rs#L125-L149\n"})}),"\n",(0,s.jsx)(t.p,{children:"The most important part of the snippet above is around the middle where there's:"}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rs",children:"Promise::new(...)\n    ...\n    .then(\n        Self::ext(env::current_account_id())\n            .on_account_created(...)\n    )\n"})}),"\n",(0,s.jsxs)(t.p,{children:["This translates to, \"we're going to attempt to perform an Action, and when we're done, please call myself at the method ",(0,s.jsx)(t.code,{children:"on_account_created"}),' so we can see how that went."']}),"\n",(0,s.jsxs)(t.admonition,{title:"This doesn't work",type:"caution",children:[(0,s.jsx)(t.p,{children:"Not infrequently, developers will attempt to do this in a smart contract:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'let creation_result = Promise::new("aloha.mike.near")\n  .create_account();\n\n// Check creation_result variable (can\'t do it!)\nif creation_result {...}\n\n'})}),(0,s.jsx)(t.p,{children:"In other programming languages promises might work like this, but we must use callbacks instead. :::"}),(0,s.jsx)(t.h3,{id:"the-callback",children:"The callback"}),(0,s.jsx)(t.p,{children:"Now let's look at the callback:"}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near/near-linkdrop/blob/ba94a9c7292d3b48a0a8ba380fb0e7ff6b24efc6/src/lib.rs#L151-L164\n"})}),(0,s.jsxs)(t.p,{children:["This calls the private helper method ",(0,s.jsx)(t.code,{children:"is_promise_success"}),", which basically checks to see that there was only one promise result, because we only attempted one Promise:"]}),(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near/near-linkdrop/blob/ba94a9c7292d3b48a0a8ba380fb0e7ff6b24efc6/src/lib.rs#L32-L42\n"})}),(0,s.jsxs)(t.p,{children:["Note that the callback returns a boolean. This means when we modify our crossword puzzle to call the linkdrop contract on ",(0,s.jsx)(t.code,{children:"testnet"}),", we'll be able to determine if the account creation succeeded or failed."]}),(0,s.jsx)(t.p,{children:"V\xe0 ch\u1ec9 v\u1eady th\xf4i! Now we've seen a method and a callback in action for a simple contract."}),(0,s.jsxs)(t.admonition,{title:"This is important Understanding cross-contract calls and callbacks is quite important in smart contract development.",type:"tip",children:[(0,s.jsx)(t.p,{children:"Since NEAR's transactions are asynchronous, the use of callbacks may be a new paradigm shift for smart contract developers from other ecosystems."}),(0,s.jsx)(t.p,{children:"Feel free to dig into the linkdrop contract and play with the ideas presented in this section."}),(0,s.jsx)(t.p,{children:"There are two additional examples that are helpful to look at:"}),(0,s.jsxs)(t.ol,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/examples/cross-contract-calls/high-level/src/lib.rs",children:"High-level cross-contract calls"})," \u2014 this is similar what we've seen in the linkdrop contract."]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/examples/cross-contract-calls/low-level/src/lib.rs",children:"Low-level cross-contract calls"})," \u2014 a different approach where you don't use the traits we mentioned. :::"]}),"\n"]}),(0,s.jsx)(t.hr,{}),(0,s.jsx)(t.p,{children:"Next we'll modify the crossword puzzle contract to check for the signer's public key, which is how we now determine if they solved the puzzle correctly."})]})]})]})}function p(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(u,{...e})}):u(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>o,a:()=>r});var s=n(67294);const a={},c=s.createContext(a);function r(e){const t=s.useContext(c);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function o(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),s.createElement(c.Provider,{value:t},e.children)}}}]);