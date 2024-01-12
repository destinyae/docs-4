"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7819],{49990:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>r,metadata:()=>s,toc:()=>d});var a=n(85893),i=n(11151);const r={sidebar_label:"Intro to Indexers"},o="Introduction to Indexers",s={id:"concepts/advanced/indexers",title:"Introduction to Indexers",description:"Here you will find everything you need to know in order to familiarize yourself with the concept of indexers and even build your own one.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/1.concepts/3.advanced/indexers.md",sourceDirName:"1.concepts/3.advanced",slug:"/concepts/advanced/indexers",permalink:"/vi/concepts/advanced/indexers",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/3.advanced/indexers.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",frontMatter:{sidebar_label:"Intro to Indexers"},sidebar:"concepts",previous:{title:"Data on the Blockchain",permalink:"/vi/concepts/data-flow/data-storage"},next:{title:"Indexer Framework",permalink:"/vi/concepts/advanced/near-indexer-framework"}},c={},d=[{value:"Blockchains and their nature",id:"blockchains-and-their-nature",level:3},{value:"Getting the data from a blockchain from the external world",id:"getting-the-data-from-a-blockchain-from-the-external-world",level:3},{value:"Indexer",id:"indexer",level:3},{value:"Indexers and &quot;wide&quot; queries",id:"indexers-and-wide-queries",level:2},{value:"Summary",id:"summary",level:2},{value:"What&#39;s next?",id:"whats-next",level:2}];function l(e){const t={a:"a",admonition:"admonition",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",p:"p",strong:"strong",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.h1,{id:"introduction-to-indexers",children:"Introduction to Indexers"}),"\n",(0,a.jsx)(t.p,{children:"Here you will find everything you need to know in order to familiarize yourself with the concept of indexers and even build your own one."}),"\n",(0,a.jsx)(t.admonition,{title:"Disclaimer",type:"info",children:(0,a.jsx)(t.p,{children:"The explanation on this page assumes you have a certain level of understanding of the blockchain technology."})}),"\n",(0,a.jsx)(t.h3,{id:"blockchains-and-their-nature",children:"Blockchains and their nature"}),"\n",(0,a.jsxs)(t.p,{children:["Blockchain data is optimized for serialized ",(0,a.jsx)(t.strong,{children:"writes"}),', one block at a time, as the chain is being created. Querying the blockchain for data about a specific block or account is fairly straightforward or a "narrow" query. However, querying data across many blocks can be cumbersome because we have to aggregate results from multiple single-block queries. Therefore, we can consider these ',(0,a.jsx)(t.em,{children:'"wide" queries'}),"."]}),"\n",(0,a.jsxs)(t.p,{children:["Given the fact that a blockchain itself is a distributed database, and a smart contract (decentralized application, dApp) is an application that runs on a virtual machine inside a blockchain, we need to understand that smart contracts should ",(0,a.jsx)(t.em,{children:"not"}),' be considered as a "backend". While some applications might consist only of smart contracts, building a dApp with only smart contracts, in most cases, is not possible.']}),"\n",(0,a.jsx)(t.p,{children:'Smart contracts are limited in terms of interactions. By "interactions" we mean things that are very common in the real world, like user notifications, integration with third-party applications, etc.'}),"\n",(0,a.jsxs)(t.p,{children:["However, the nature of a blockchain is that it ",(0,a.jsx)(t.em,{children:"must"})," be deterministic. A critical feature of a blockchain is that it knows the state at a given time, and for blockchains that time unit is a block. Think of them as being snapshots. A blockchain does snapshots of its state on every block. We as users can call smart contracts for a specific block, and the blockchain provides guarantees that execution will always produce the same result for the same block any time we call it."]}),"\n",(0,a.jsx)(t.p,{children:"The deterministic nature of a blockchain closes it from external (off-chain) variables. It is totally impossible to perform a call to an API from within a smart contract. A blockchain and a smart contract are closed off from the external (off-chain) world."}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Blockchain closed from outer world",src:n(23045).Z+"",width:"567",height:"500"})}),"\n",(0,a.jsx)(t.p,{children:"Blockchains are great at providing a way to apply the requested changes to the state in a decentralized manner. However, in order to observe the changes, you need to actively pull the information from the network."}),"\n",(0,a.jsx)(t.p,{children:"Instead of abstract explanations let's look at an example."}),"\n",(0,a.jsx)(t.admonition,{title:"Example dApp",type:"note",children:(0,a.jsx)(t.p,{children:"Say, we have a smart contract that sells e-books. Once a user buys a book we want to send them a copy via email."})}),"\n",(0,a.jsx)(t.p,{children:"The dApp has a helper deployed somewhere off-chain, and this helper has code that can send an email with a copy of an e-book. But how would we trigger the helper?"}),"\n",(0,a.jsx)(t.h3,{id:"getting-the-data-from-a-blockchain-from-the-external-world",children:"Getting the data from a blockchain from the external world"}),"\n",(0,a.jsxs)(t.p,{children:["NEAR blockchain implements a ",(0,a.jsx)(t.a,{href:"https://docs.near.org/api/rpc/introduction",children:"JSON-RPC endpoint"})," for everyone to interact with the blockchain. Through the JSON-RPC API users can call smart contracts triggering them to be executed with given parameters. Also, users can view the data from the blockchain."]}),"\n",(0,a.jsxs)(t.p,{children:["So, continuing with our example we can make our helper pull a ",(0,a.jsx)(t.a,{href:"https://docs.near.org/api/rpc/block-chunk#block",children:"Block"})," every second, then pull all the ",(0,a.jsx)(t.a,{href:"https://docs.near.org/api/rpc/block-chunk#chunk",children:"Chunks"}),' and analyze the Transactions included in the Block to check if there is a transaction to our smart contract with "buy an e-book" function call. If we observe such a Transaction, we need to ensure it is successful, so we don\'t send the e-book to a user whose "buy e-book" Transaction failed.']}),"\n",(0,a.jsx)(t.p,{children:"After the process is complete we can trigger the helper's code to send the user an email with the e-book they bought."}),"\n",(0,a.jsxs)(t.p,{children:["This approach is so-called ",(0,a.jsx)(t.em,{children:"pull model"})," of getting the data. There is nothing wrong with this approach, but sometimes you might find it is not the most comfortable or reliable approach."]}),"\n",(0,a.jsxs)(t.p,{children:["Also, not all the data is available through the JSON-RPC. ",(0,a.jsx)(t.em,{children:"Local Receipts"})," for example are not available through the JSON-RPC, because they are not stored in NEAR node's internal database."]}),"\n",(0,a.jsx)(t.h3,{id:"indexer",children:"Indexer"}),"\n",(0,a.jsxs)(t.p,{children:["A blockchain indexer is an implementation of the ",(0,a.jsx)(t.em,{children:"push model"})," of getting the data. Instead of actively pulling the data from the source, your helper waits for the data to be sent to it. The data is complete and so the helper can start analyzing it immediately; ideally the data is complete enough to avoid additional pulls to get more details."]}),"\n",(0,a.jsxs)(t.p,{children:["Getting back to our example, the helper becomes ",(0,a.jsx)(t.strong,{children:"an indexer"})," that receives every ",(0,a.jsx)(t.em,{children:"Block"}),", along with ",(0,a.jsx)(t.strong,{children:"Chunks"}),", ",(0,a.jsx)(t.strong,{children:"Transactions"})," with its statuses, etc. In the same way the helper analyzes the data and triggers the code to send the user an email with the e-book they bought."]}),"\n",(0,a.jsx)(t.p,{children:(0,a.jsx)(t.img,{alt:"Indexer is streaming the data from the blockchain",src:n(558).Z+"",width:"643",height:"500"})}),"\n",(0,a.jsx)(t.admonition,{title:"An indexer concept",type:"info",children:(0,a.jsxs)(t.p,{children:["An indexer listens to the ",(0,a.jsx)(t.em,{children:"stream of data as it's being written on chain"})," and can then be immediately filtered and processed to detect interesting events or patterns."]})}),"\n",(0,a.jsx)(t.h2,{id:"indexers-and-wide-queries",children:'Indexers and "wide" queries'}),"\n",(0,a.jsxs)(t.p,{children:["The term ",(0,a.jsx)(t.em,{children:'"wide" queries'})," was mentioned in the beginning of this document. Here's a recap:"]}),"\n",(0,a.jsx)(t.admonition,{title:'"Wide" queries definition',type:"note",children:(0,a.jsxs)(t.p,{children:["To query data across many blocks requires the aggregation of results from multiple single-block queries. We can consider these aggregates as coming from ",(0,a.jsx)(t.em,{children:'"wide" queries'}),"."]})}),"\n",(0,a.jsxs)(t.p,{children:["Because indexers listen to the ",(0,a.jsx)(t.em,{children:"stream of data"}),' from the blockchain and the data can be immediately filtered and processed according to defined requirements, they can be used to simplify the "wide" queries execution. For example, a stream of data can be written to a permanent database for later data analysis using a convenient query language like SQL. That is what ',(0,a.jsx)(t.a,{href:"/tools/indexer-for-explorer",children:"Indexer for Explorer"})," is doing."]}),"\n",(0,a.jsxs)(t.p,{children:['Another example that highlights the need for a "wide query" is when you use a seed phrase to recover one or more accounts. Since a seed phrase essentially represents a signing key pair, the recovery is for all accounts that share the associated public key. Therefore, when a seed phrase is used to recover an account via ',(0,a.jsx)(t.a,{href:"https://wallet.near.org",children:"NEAR Wallet"}),", the query requires that all accounts with a matching public key are found and recovered. ",(0,a.jsx)(t.a,{href:"/tools/indexer-for-explorer",children:"NEAR Indexer for Explorer"})," is storing this data in a permanent database and this allows ",(0,a.jsx)(t.a,{href:"https://wallet.near.org",children:"NEAR Wallet"}),' to perform such "wide queries". This is impossible to achieve using JSON-RPC only.']}),"\n",(0,a.jsx)(t.h2,{id:"summary",children:"Summary"}),"\n",(0,a.jsx)(t.p,{children:"We hope this article gives you an understanding of the Indexer concept. Also, we hope now you can easily decide whether you need an indexer for your application."}),"\n",(0,a.jsx)(t.h2,{id:"whats-next",children:"What's next?"}),"\n",(0,a.jsxs)(t.p,{children:["We encourage you to learn more about the ",(0,a.jsx)(t.a,{href:"/tools/realtime#near-lake-indexer",children:"Lake Indexer project"}),". Please, proceed to ",(0,a.jsx)(t.a,{href:"/tutorials/indexer/near-lake-state-changes-indexer",children:"Tutorials"})," section to learn how to build an indexer on practice."]}),"\n",(0,a.jsxs)(t.p,{children:["Alternatively, there are a few other third-party indexers that are tightly integrated with the NEAR ecosystem. You can review all of your data sourcing options (including The Graph, Pagoda, Pipespeak, and SubQuery) under ",(0,a.jsx)(t.a,{href:"/concepts/data-flow/data-storage#data-tools",children:"data tools"}),"."]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},23045:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/blockchain-d3723a544eac4f445064a447a9fc6081.png"},558:(e,t,n)=>{n.d(t,{Z:()=>a});const a=n.p+"assets/images/indexer-1cd9943b368c83d82aaeec26876bea7b.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>o});var a=n(67294);const i={},r=a.createContext(i);function o(e){const t=a.useContext(r);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:o(e.components),a.createElement(r.Provider,{value:t},e.children)}}}]);