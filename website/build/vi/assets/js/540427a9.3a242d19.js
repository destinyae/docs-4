"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6862],{29103:(e,t,a)=>{a.r(t),a.d(t,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>r,toc:()=>l});var n=a(85893),s=a(11151);const o={id:"near",title:"NEAR Protocol",sidebar_label:"NEAR Protocol"},i=void 0,r={id:"concepts/web3/near",title:"NEAR Protocol",description:"For the beginners, it\u2019s always better to start with documentation, and NEAR has an excellent one. Here, we only focus on basic concepts which are necessary to understand later chapters, so an entire guideline could be understood without prior NEAR knowledge.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/1.concepts/web3/near.md",sourceDirName:"1.concepts/web3",slug:"/concepts/web3/near",permalink:"/vi/concepts/web3/near",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/web3/near.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",frontMatter:{id:"near",title:"NEAR Protocol",sidebar_label:"NEAR Protocol"},sidebar:"concepts",previous:{title:"Blockchain basics",permalink:"/vi/concepts/web3/basics"},next:{title:"Economics",permalink:"/vi/concepts/web3/economics"}},c={},l=[{value:"Accounts &amp; Transactions",id:"accounts--transactions",level:2},{value:"Gas and Storage",id:"gas-and-storage",level:2},{value:"Clients Integration",id:"clients-integration",level:2},{value:"Cross-contracts calls",id:"cross-contracts-calls",level:2},{value:"Data Structures, Indexers and Events",id:"data-structures-indexers-and-events",level:2},{value:"Development tools",id:"development-tools",level:2},{value:"Contract upgrades",id:"contract-upgrades",level:2},{value:"Further reading",id:"further-reading",level:2}];function d(e){const t={a:"a",code:"code",h2:"h2",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsxs)(t.p,{children:["For the beginners, it\u2019s always better to start with ",(0,n.jsx)(t.a,{href:"/concepts/welcome",children:"documentation"}),", and NEAR has an excellent one. Here, we only focus on basic concepts which are necessary to understand later chapters, so an entire guideline could be understood without prior NEAR knowledge."]}),"\n",(0,n.jsx)(t.h2,{id:"accounts--transactions",children:"Accounts & Transactions"}),"\n",(0,n.jsx)(t.p,{children:"NEAR's account system is very powerful and differs substantially from other blockchains, like Bitcoin or Ethereum. Instead of identifying users by their public/private key pairs, it defines accounts as first-class entities. This has a few important implications:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Instead of public keys, users can use readable account names."}),"\n",(0,n.jsxs)(t.li,{children:["Multiple key pairs with ",(0,n.jsx)(t.a,{href:"/vi/concepts/basics/accounts/access-keys",children:"different permissions"})," can be used. This provides a better security model for users, since loss of one key pair doesn\u2019t compromise an entire account and has a quite limited impact."]}),"\n",(0,n.jsx)(t.li,{children:"Hierarchical accounts structure is supported. This is useful if we want to manage multiple smart contracts under one parent account."}),"\n",(0,n.jsx)(t.li,{children:"Accounts/public keys are created using transactions, since they are stored on the blockchain."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["More information on NEAR accounts can be ",(0,n.jsx)(t.a,{href:"https://docs.near.org/docs/concepts/account",children:"found in the docs"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["But an account by itself won\u2019t get us anywhere, its ",(0,n.jsx)(t.a,{href:"/vi/concepts/basics/transactions/overview",children:"transactions"})," that make things happen. In NEAR, we have only one transaction type, but the transaction itself may have different actions included. For most practical purposes, transactions will have a single action included, so for simplicity we\u2019ll use \u201caction\u201d and \u201ctransaction\u201d terms interchangeably further down the road. Each transaction always has sender and receiver accounts (and it is cryptographically signed by the sender\u2019s key). The following transaction (action) types are supported:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"CreateAccount/DeleteAccount, AddKey/DeleteKey - accounts and key management transactions."}),"\n",(0,n.jsx)(t.li,{children:"Transfer - send NEAR tokens from one account to another. The basic command of any blockchain."}),"\n",(0,n.jsxs)(t.li,{children:["Stake - needed to become a validator in a Proof-of-Stake blockchain network. We won\u2019t touch this topic in this guideline, more information ",(0,n.jsx)(t.a,{href:"https://docs.near.org/docs/develop/node/validator/staking-and-delegation",children:"can be found here"}),"."]}),"\n",(0,n.jsx)(t.li,{children:"DeployContract - deploy a smart contract to a given account. An important thing to remember - one account can hold only one contract, so the contract is uniquely identified by the account name. If we issue this transaction to an account which already has a deployed contract, a contract update will be triggered."}),"\n",(0,n.jsx)(t.li,{children:"FunctionCall - the most important action on the blockchain, it allows us to call a function of a smart contract."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Smart Contracts on NEAR are written in Rust or JavaScript, and compiled into ",(0,n.jsx)(t.a,{href:"https://developer.mozilla.org/en-US/docs/WebAssembly",children:"WebAssembly"}),". Each contract has one or more methods that can be called via a FunctionCall transaction. Methods may have arguments provided, so each smart contract call includes the following payload: account id, method name, and arguments."]}),"\n",(0,n.jsx)(t.p,{children:"There are 2 ways to call a method on a smart contract:"}),"\n",(0,n.jsxs)(t.ol,{children:["\n",(0,n.jsx)(t.li,{children:"Issue a FunctionCall transaction. This will create a new transaction on a blockchain which may modify a contract state."}),"\n",(0,n.jsxs)(t.li,{children:["Make a smart contract view call. NEAR blockchain ",(0,n.jsx)(t.a,{href:"https://near-nodes.io/intro/node-types#rpc-node",children:"RPC nodes"})," provide a special API that allow execution of methods that do not modify contract state (readonly methods)."]}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:"The second method should always be used whenever possible since it doesn\u2019t incur any transaction cost (of course, there is some cost of running a node, but it\u2019s still much cheaper than a transaction; public nodes are available which can be used free of charge). Also, since there\u2019s no transactions, we don\u2019t need an account to make a view call, which is quite useful for building client-side applications"}),"\n",(0,n.jsx)(t.h2,{id:"gas-and-storage",children:"Gas and Storage"}),"\n",(0,n.jsxs)(t.p,{children:["As we already discussed, users should pay computational costs for each transaction. This cost is called \u201cgas\u201d and is measured in ",(0,n.jsx)(t.a,{href:"/vi/concepts/basics/transactions/gas",children:"gas units"})," (this is an established term in the blockchain world). Each time a transaction is posted, an amount of gas is attached to it to cover the cost. For simple transactions, gas can be calculated ahead of time to attach an exact amount. For FunctionCall transactions, however, exact cost is impossible to automatically calculate beforehand, so the usual approach is to attach a large enough amount of gas to cover the cost, and any excess will get automatically refunded."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:a(55585).Z+"",width:"1600",height:"262"})}),"\n",(0,n.jsx)(t.p,{children:"But why do we need separate gas units, why not just pay directly with NEAR tokens? It\u2019s necessary to accommodate for changing infrastructure costs - as the network evolves over time, cost of gas units may change, but the amount of gas required for a transaction will remain constant."}),"\n",(0,n.jsx)(t.p,{children:"However, computational cost is not everything - most smart contracts also need storage. The storage cost in NEAR is quite different from gas. First of all, it\u2019s not cheap - while gas is very cheap and its cost will be almost unnoticeable by the users, storage is very expensive. As a consequence, the storage budget should be carefully calculated and only necessary data stored on the blockchain. Any auxiliary data (that is not necessary to the contract operations) should be stored off-chain (possible solutions will be covered in later chapters). The second important difference - storage is not bought, but leased (in NEAR, it\u2019s called staking). When a smart contract wants to store some data, storage cost is computed and the appropriate amount of NEAR tokens is \u201clocked\u201d on the account. When data is removed, tokens are unlocked. And unlike gas, these tokens are locked on the smart contract\u2019s account, so the user doesn\u2019t directly pay for it."}),"\n",(0,n.jsx)(t.p,{children:"But what if we want users to pay for the storage (or just pay some fee for using a smart contract)? So far, the only way we\u2019ve seen to transfer a token is a Transfer transaction. It turns out, a FunctionCall transaction also allows us to transfer tokens alongside the call (this is called a deposit). Smart Contracts can verify that an appropriate amount of tokens has been attached, and refuse to perform any actions if there\u2019s not enough (and refund any excess of tokens attached)."}),"\n",(0,n.jsxs)(t.p,{children:["In combination, gas fee and deposit attachments enable creation of contracts that need zero cost from developers to support and can live on blockchain forever. Even more, 30% of gas fees spent on the contract execution will go to a contract\u2019s account itself (read more ",(0,n.jsx)(t.a,{href:"https://near.org/blog/near-protocol-economics/#:~:text=a%20new%20entity.-,Contract%20rewards,-As%20one%20of",children:"here"}),"), so just by being used it will bring some income. To be fair, due to the cheap gas cost this will make a significant impact only for most popular and often-called contracts, but it\u2019s nice to have such an option nonetheless."]}),"\n",(0,n.jsx)(t.p,{children:"One last gotcha about storage - remember that smart contracts themselves are also just a code stored on a blockchain, so a DeployContract transaction will also incur storage fees. Since smart contracts code can be quite big, it\u2019s important to optimize their size. A few tips on this:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Don\u2019t build Rust code on Windows, it produces quite big output. Use WSL or build on other OSes."}),"\n",(0,n.jsxs)(t.li,{children:["Optimize smart contracts code for size - ",(0,n.jsx)(t.a,{href:"https://www.near-sdk.io/reducing-contract-size/examples",children:"more info here"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["More details on the storage model can be ",(0,n.jsx)(t.a,{href:"https://docs.near.org/docs/concepts/storage-staking",children:"found in the docs"}),"."]}),"\n",(0,n.jsx)(t.h2,{id:"clients-integration",children:"Clients Integration"}),"\n",(0,n.jsx)(t.p,{children:"So far, we\u2019ve discussed how to call smart contracts in a client-agnostic way. However, in the real world, calls we\u2019ll be performed from a client side - like web, mobile or a desktop application."}),"\n",(0,n.jsxs)(t.p,{children:["As we\u2019ve learned from previous chapters, each transaction should be signed using a key. And since keys are managed by a wallet, each application should integrate with it. At the time of this writing, there\u2019s only one officially supported ",(0,n.jsx)(t.a,{href:"https://wallet.near.org/",children:"NEAR Wallet"}),". It is a web application, so integration happens using HTTP redirects. This is relatively straightforward to do in web applications (JavaScript SDK is available), but for mobile or desktop applications it may require deep linking or other more advanced approaches."]}),"\n",(0,n.jsx)(t.p,{children:"The general flow for transactions signing looks like this:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"h\xecnh \u1ea3nh",src:a(91157).Z+"",width:"1600",height:"1038"})}),"\n",(0,n.jsxs)(t.p,{children:["Each time we want to post a transaction, the client redirects the user to a wallet, where the transaction is approved and wallet returns a signed transaction back to the client (via redirect). This is a quite secure way of signing, since the private key is not exposed to the client, but constant redirects might quickly get annoying for users, especially if we just want to call smart contract functions that incur only small gas fees. That\u2019s why NEAR introduced ",(0,n.jsx)(t.a,{href:"/vi/concepts/basics/accounts/access-keys",children:"two types of access keys"})," - full keys and functional call keys. Full access keys, as the name implies, can be used to sign any types of transactions. Functional call keys, on the other hand, aim to solve this UX problem. They are tied to a specific contract, and have a budget for gas fees. Such a key can\u2019t be used to sign transactions that transfers NEAR tokens (payable transactions), and can only be used to cover gas fees, that\u2019s why it\u2019s not so security-critical and can be stored on the client. Because of this, we can create a simplified signing flow for non-payable transactions. First of all, a login flow to obtain a Functional Call key is used."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:a(49826).Z+"",width:"1600",height:"1092"})}),"\n",(0,n.jsx)(t.p,{children:"The client generates a new key pair and asks a wallet to add it as a functional call key for a given contract. After this, a login session is established and considered alive until the client has the generated key pair. To provide the best user experience usage of both keys is combined - type of signing is determined based on a transaction type (payable or non-payable). In case of a payable transaction, flow with wallet redirection is used, otherwise simplified local signing flow (using a stored function call key) is applied:"}),"\n",(0,n.jsx)("div",{align:"center",children:(0,n.jsx)("img",{src:"/docs/assets/web3/web3-11.png",alt:"image",width:"300"})}),"\n",(0,n.jsx)(t.p,{children:"It\u2019s important to note that it\u2019s possible to generate a Full Access key using the same key addition flow as for the Functional Call key, but this is very dangerous since compromise of such key will give full control over an account. Applications that want to work with Full Key directly should be designed with extreme care, especially in the matters of security."}),"\n",(0,n.jsx)(t.h2,{id:"cross-contracts-calls",children:"Cross-contracts calls"}),"\n",(0,n.jsx)(t.p,{children:"Throughout this section, we\u2019ve discussed how to call a smart contract from a client. But a single smart contract can only take us so far. The true power is achieved when smart contracts are working in concert and communicating with each other. To achieve this, NEAR provides cross-contract calls functionality, which allows one contract to call methods from another contract. The general flow looks like this:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:a(99962).Z+"",width:"1600",height:"273"})}),"\n",(0,n.jsx)(t.p,{children:"Looks simple enough, but there are few gotchas:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"In order to provide a call status (success or failure) and a return value to the calling contract, a callback method should be called, so there\u2019s no single activation of ContractA. Instead, an entry method is called first by the user, and then a callback is invoked in response to cross-contract call completion."}),"\n",(0,n.jsx)(t.li,{children:"Transaction status is determined by the success or failure of a first method call. For example, if a ContractB.methodB or ContractA.methodACb call fails, the transaction will still be considered successful. This means that to ensure proper rollbacks in case of expected failures, custom rollback code must be written in the ContractA.methodACb, and the callback method itself must not fail at all. Otherwise, smart contract state might be left inconsistent."}),"\n",(0,n.jsx)(t.li,{children:"Cross-contract calls must have gas attached by the calling contract. Total available gas is attached to a transaction by a calling user, and distributed inside the call chain by contracts. For example, if 15TGas are attached by the user, ContractA may reserve 5TGas for itself and pass the rest to ContractB. All unspent gas will be refunded back to the user."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:a(22260).Z+"",width:"1600",height:"273"})}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"NEAR tokens can also be attached to cross contract calls, but they work differently from the gas. Attached deposit is taken directly from the predecessor account. It means even if a user hasn\u2019t attached any deposit, a contract still can attach tokens, which will be taken from its account. Also, since cross-contract call failure doesn\u2019t mean transaction failure, there are no automatic refunds. All refunds should be done explicitly in the rollback code."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:a(71186).Z+"",width:"1600",height:"273"})}),"\n",(0,n.jsx)(t.p,{children:"A few notes on failure modes - since smart contracts run on a decentralized environment, which means they are executed on multiple machines and there is no single point of failure, they won\u2019t fail because of environment issues (e.g. because a machine suddenly lost power or network connectivity). The only possible failures come from the code itself, so they can be predicted and proper failover code added."}),"\n",(0,n.jsx)(t.p,{children:"In general, cross-contract call graphs can be quite complex (one contract may call multiple contracts and even perform some conditional calls selection). The only limiting factor is the amount of gas attached, and there is a hard cap defined by the network of how many gas transactions may have (this is necessary to prevent any kind of DoS attacks on the Network and keep contracts complexity within reasonable bounds)."}),"\n",(0,n.jsx)(t.h2,{id:"data-structures-indexers-and-events",children:"Data Structures, Indexers and Events"}),"\n",(0,n.jsx)(t.p,{children:"We\u2019ve already discussed the storage model on NEAR, but only in abstract terms, without bringing the exact structure, so it\u2019s time to dive a bit deeper."}),"\n",(0,n.jsxs)(t.p,{children:["Natively, NEAR smart contracts store data as key-value pairs. This is quite limiting, since even simplest applications usually need more advanced data structures. To help in development, NEAR provides ",(0,n.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs",children:"SDK for smart contracts"}),", which includes data structures like ",(0,n.jsx)(t.a,{href:"/vi/concepts/storage/data-storage#rust-collection-types-rust-collection-types",children:"vectors, sets and maps"}),". While they are very useful, it\u2019s important to remember a few things about them:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsxs)(t.li,{children:["Ultimately, they are stored as binary values, which means it takes some gas to serialize and deserialize them. Also, different operations cost different amounts of gas (",(0,n.jsx)(t.a,{href:"/vi/concepts/storage/data-storage#big-o-notation-big-o-notation-1",children:"complexity table"}),"). Because of this, careful choice of data structures is very important. Moving to a different data structure later will not be easy and would probably require data migration."]}),"\n",(0,n.jsx)(t.li,{children:"While very useful, vectors, maps and sets won\u2019t match the flexibility and power of classical relational databases. Even implementations of simple filtering and searching might be quite complex and require a lot of gas to execute, especially if multiple entities with relations between them are involved."}),"\n",(0,n.jsx)(t.li,{children:"They are limited to a single contract. If data from multiple contracts is required, aggregation should be performed using cross-contract calls or on a client side, which is quite expensive in terms of gas and time."}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["To support more complex data retrieval scenarios, smart contract data should be put in a more appropriate store, like a relational database. ",(0,n.jsx)(t.a,{href:"/vi/tools/indexer-for-explorer",children:"Indexers"})," are used to achieve this. In a nutshell, indexer is just a special kind of blockchain node that processes incoming transactions and puts relevant data into a database. Collected data can be exposed to a client using a simple API server (e.g. REST or GraphQL)."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:a(75341).Z+"",width:"1600",height:"970"})}),"\n",(0,n.jsxs)(t.p,{children:["In order to simplify creation of indexers, ",(0,n.jsx)(t.a,{href:"https://near-indexers.io/docs/projects/near-indexer-framework",children:"NEAR Indexer Framework"})," has been created. However, even with a framework available, extracting data from a transaction may not be an easy task, since each smart contract has its unique structure and data storage model. To simplify this process, smart contracts can write structured information about outcome into the logs  (e.g. in the JSON format). Each smart contract can use its own format for such logs, but the general format has been standardized as ",(0,n.jsx)(t.a,{href:"https://nomicon.io/Standards/EventsFormat",children:"Events"}),"."]}),"\n",(0,n.jsx)(t.p,{children:"Such architecture is very similar to Event Sourcing, where blockchain stores events (transactions), and they are materialized to a relational database using an indexer. This means the same drawbacks also apply. For instance, a client should be designed to accommodate indexing delay, which may take a few seconds."}),"\n",(0,n.jsxs)(t.p,{children:["As an alternative to building your own indexer with a database and an API server, ",(0,n.jsx)(t.a,{href:"https://thegraph.com/en/",children:"The Graph"})," can be used instead, which currently has ",(0,n.jsx)(t.a,{href:"https://thegraph.com/docs/en/supported-networks/near/",children:"NEAR support in beta"}),". It works using the Indexer-as-a-Service model, and even has decentralized indexing implementation."]}),"\n",(0,n.jsx)(t.h2,{id:"development-tools",children:"Development tools"}),"\n",(0,n.jsx)(t.p,{children:"By now, we should be familiar with necessary concepts to start developing WEB 3.0 applications, so let\u2019s explore the development tools available."}),"\n",(0,n.jsxs)(t.p,{children:["First of all, we need a development and testing environment. Of course, we could theoraticaly perform development and testing on the main blockchain network, but this would not be cheap. For this reason, NEAR provides ",(0,n.jsx)(t.a,{href:"/vi/concepts/basics/networks",children:"several networks"})," that can be used during development:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"testnet - public NEAR network which is identical to mainnet and can be used for free."}),"\n",(0,n.jsxs)(t.li,{children:["localnet - you can deploy your personal NEAR network on your own environment. Because it\u2019s owned by you, data and code can be kept private during development. More info on how you can run your own node can be ",(0,n.jsx)(t.a,{href:"https://docs.near.org/docs/develop/node/validator/running-a-node",children:"found here"}),". Alternatively, you can bootstrap an entire testing infrastructure in Docker on your local machine using Kurtosis - ",(0,n.jsx)(t.a,{href:"/develop/testing/kurtosis-localnet",children:"guide is here"}),"."]}),"\n",(0,n.jsxs)(t.li,{children:["workspaces - you can start your own local network to perform e2e testing. More info ",(0,n.jsx)(t.a,{href:"/vi/develop/testing/integration-test",children:"here"}),"."]}),"\n"]}),"\n",(0,n.jsxs)(t.p,{children:["Once we\u2019ve chosen a network to use, we need a way to interact with it. Of course, transactions can be constructed manually and posted into ",(0,n.jsx)(t.a,{href:"https://docs.near.org/api/rpc/setup",children:"node\u2019s API"}),". But ",(0,n.jsx)(t.a,{href:"https://github.com/near-examples/transaction-examples",children:"this is tedious"})," and isn\u2019t fun at all. That\u2019s why, NEAR ",(0,n.jsx)(t.a,{href:"/vi/tools/near-cli",children:"provides a CLI"})," which automates all of the necessary actions. It can be used locally for development purposes or on build machines for CI/CD scenarios."]}),"\n",(0,n.jsxs)(t.p,{children:["In order to manage accounts on the NEAR network, ",(0,n.jsx)(t.a,{href:"https://wiki.near.org/overview/tokenomics/creating-a-near-wallet",children:"Wallet"})," can be used. It can show an effective account balance and active keys."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:a(24848).Z+"",width:"627",height:"535"})}),"\n",(0,n.jsx)(t.p,{children:"On the image above, \u201cReserved for storage\u201d are tokens locked by a smart contract to cover current storage requirements, and \u201cReserved for transactions\u201d represents the amount of tokens locked to cover gas cost by Functional Call keys. Currently, there\u2019s no UI to connect sub-accounts into a wallet. Instead, they should be imported via a specially constructed direct link:"}),"\n",(0,n.jsx)(t.pre,{children:(0,n.jsx)(t.code,{children:"https://testnet.mynearwallet.com/auto-import-secret-key#YOUR_ACCOUNT_ID/YOUR_PRIVATE_KEY\n"})}),"\n",(0,n.jsx)(t.p,{children:"(you should provide a private key of a full access key for the account in question, so make sure this link is used securely)."}),"\n",(0,n.jsxs)(t.p,{children:["Last, but not least, blockchain transactions can be viewed using NEAR Explorer. It provides insights into transaction execution and outcome. Let\u2019s look at ",(0,n.jsx)(t.a,{href:"https://explorer.testnet.near.org/transactions/ABh4zQ5aZ3CGhpQzstL16TAB8TvqPbiirJG1uTPJVxTt",children:"one example"}),". First of all, we can see general transaction information - sender, receiver, status. After this, we can see gas usage information:"]}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:"Attached gas - total gas provided for the transaction."}),"\n",(0,n.jsx)(t.li,{children:"Gas used - actual gas spend."}),"\n",(0,n.jsx)(t.li,{children:"Transaction fee - gas used multiplied to current gas price, shows an actual cost of a transaction in NEAR tokens. Also, Deposit Value shows the amount of NEAR tokens transferred from sender to receiver."}),"\n"]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:a(60497).Z+"",width:"1086",height:"383"})}),"\n",(0,n.jsx)(t.p,{children:"Below this, we can inspect transaction actions (recall, that transactions may have multiple actions). In this case, we have a single FunctionCall action with arguments:"}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:a(55645).Z+"",width:"794",height:"416"})}),"\n",(0,n.jsxs)(t.p,{children:["At the end, transaction execution details, including token transfers, logs, cross-contract calls and gas refunds are provided. One thing that we haven\u2019t covered yet is shown here - ",(0,n.jsx)(t.a,{href:"/vi/concepts/basics/transactions/overview#receipt-receipt",children:"receipts"}),". For most practical purposes they are just a transaction implementation detail. They are quite useful in a transaction explorer to understand how a transaction was executed, but aren\u2019t really relevant outside of it."]}),"\n",(0,n.jsx)(t.p,{children:(0,n.jsx)(t.img,{alt:"image",src:a(49859).Z+"",width:"1118",height:"911"})}),"\n",(0,n.jsx)(t.h2,{id:"contract-upgrades",children:"Contract upgrades"}),"\n",(0,n.jsx)(t.p,{children:"During the development, and sometimes even in production, updates to a contract\u2019s code (or even data) are needed. That\u2019s why different contract upgrades mechanisms have been created."}),"\n",(0,n.jsxs)(t.p,{children:["During the local development, we can just recreate a smart contract\u2019s account each time we deploy a contract (",(0,n.jsx)(t.a,{href:"/vi/tools/near-cli#near-dev-deploy-near-dev-deploy",children:"dev-deploy"})," command in NEAR CLI exists for this). With such an approach, contract data will be purged each time a contract is redeployed. More info ",(0,n.jsx)(t.a,{href:"/sdk/rust/building/prototyping",children:"here"}),"."]}),"\n",(0,n.jsxs)(t.p,{children:["However, once we move to a more stable environment, like testing or production, more sophisticated methods are needed. Redeployment of code is quite simple: we just issue another ",(0,n.jsx)(t.code,{children:"DeployContract"})," transaction, and NEAR will handle the rest. The biggest challenge is to migrate contract state - ",(0,n.jsx)(t.a,{href:"/vi/develop/upgrade#migrating-the-state",children:"several approaches are possible"}),", but all of them involve some kind of migration code."]}),"\n",(0,n.jsxs)(t.p,{children:["But we can take our upgrade strategy one step further. In the previous strategies, developers are fully in control of code upgrades. This is fine for many applications, but it requires some level of trust between users and developers, since malicious changes could be made at any moment and without the user\u2019s consent (as it ",(0,n.jsx)(t.a,{href:"https://www.bleepingcomputer.com/news/security/dev-corrupts-npm-libs-colors-and-faker-breaking-thousands-of-apps/",children:"sometimes happens"})," in npm world). To solve this, a contract update process itself can also be decentralized - this is called ",(0,n.jsx)(t.a,{href:"/vi/develop/upgrade#programmatic-update",children:"Programmatic Updates"}),". The exact strategy may vary, but the basic idea is that the contract update code is implemented in a smart contract itself, and a Full Access key to the contract account is removed from a blockchain (via DeleteKey transaction). In this way, an update strategy is transparent to everyone and cannot be changed by developers at will."]}),"\n",(0,n.jsx)(t.h2,{id:"further-reading",children:"Further reading"}),"\n",(0,n.jsx)(t.p,{children:"For a deep dive into NEAR, the following links will be useful:"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://docs.near.org",children:"NEAR docs"})}),"\n",(0,n.jsxs)(t.li,{children:[(0,n.jsx)(t.a,{href:"/sdk/rust/introduction",children:"Rust Smart Contract docs"}),"\n",(0,n.jsxs)(t.ul,{children:["\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/develop/quickstart-guide",children:"Smart Contract quick start guide"})}),"\n"]}),"\n"]}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"https://nomicon.io/",children:"\u0110\u1eb7c \u0111i\u1ec3m k\u1ef9 thu\u1eadt NEAR Protocol"})}),"\n",(0,n.jsx)(t.li,{children:(0,n.jsx)(t.a,{href:"/vi/tutorials/examples/guest-book",children:"How to build a dApp on NEAR"})}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,s.a)(),...e.components};return t?(0,n.jsx)(t,{...e,children:(0,n.jsx)(d,{...e})}):d(e)}},49826:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web3-10-9bb82d87cb5211ab47a912d8a3f9694f.png"},99962:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web3-12-3ef1fefb2072e48f3e807e3f4a5184bf.png"},22260:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web3-13-805292af67cb89a10222bf82fa55507b.png"},71186:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web3-14-40369bb33c2ca7e777900349f9c3897b.png"},75341:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web3-15-32e66a8369795117dd2ed4f7f504ee74.png"},24848:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web3-16-5312589ab77608636dd0633a90853c4b.png"},60497:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web3-17-2ebf72cd93cc150fd85a36b6d137d3ee.png"},55645:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web3-18-86c7a2d24d7e67361ff3d863f1dc56a7.png"},49859:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web3-19-14d6ac99259eef13336f7723ffb81934.png"},55585:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web3-7-3f73e5b86bbf43d724d3aa3acb6d9bfd.png"},91157:(e,t,a)=>{a.d(t,{Z:()=>n});const n=a.p+"assets/images/web3-9-56f31bd5d94d7b6749eefa30a58235ce.png"},11151:(e,t,a)=>{a.d(t,{Z:()=>r,a:()=>i});var n=a(67294);const s={},o=n.createContext(s);function i(e){const t=n.useContext(o);return n.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),n.createElement(o.Provider,{value:t},e.children)}}}]);