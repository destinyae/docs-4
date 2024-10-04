"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9283],{590:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>u,contentTitle:()=>l,default:()=>p,frontMatter:()=>o,metadata:()=>d,toc:()=>h});var a=n(85893),i=n(11151),r=n(74866),s=n(85162),c=n(71183);const o={id:"basic-auction",title:"Basic Auction"},l=void 0,d={id:"tutorials/auction/basic-auction",title:"Basic Auction",description:"In this section, we will analyze a simple auction contract, which allows users to place bids and track the highest bidder. After, we will cover how to test the contract, as well as how to deploy it on  testnet.",source:"@site/../docs/3.tutorials/auction/1.1-basic.md",sourceDirName:"3.tutorials/auction",slug:"/tutorials/auction/basic-auction",permalink:"/tutorials/auction/basic-auction",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/auction/1.1-basic.md",tags:[],version:"current",lastUpdatedBy:"gagdiez",lastUpdatedAt:1728068876e3,frontMatter:{id:"basic-auction",title:"Basic Auction"},sidebar:"tutorials",previous:{title:"Introduction",permalink:"/tutorials/auction/introduction"},next:{title:"Sandbox Testing",permalink:"/tutorials/auction/sandbox-testing"}},u={},h=[{value:"Cloning the contract",id:"cloning-the-contract",level:2},{value:"The Contract&#39;s State",id:"the-contracts-state",level:2},{value:"Decorator",id:"decorator",level:4},{value:"Storage (aka State)",id:"storage-aka-state",level:4},{value:"Macros",id:"macros",level:4},{value:"Storage (aka State)",id:"storage-aka-state-1",level:4},{value:"Initialization Function",id:"initialization-function",level:2},{value:"Decorator",id:"decorator-1",level:4},{value:"Macros",id:"macros-1",level:4},{value:"End Time",id:"end-time",level:4},{value:"Initial Bid",id:"initial-bid",level:4},{value:"Read-only Functions",id:"read-only-functions",level:2},{value:"Bidding Function",id:"bidding-function",level:2},{value:"Payable Functions",id:"payable-functions",level:4},{value:"The Environment",id:"the-environment",level:4},{value:"Token Transfer",id:"token-transfer",level:4},{value:"Conclusion",id:"conclusion",level:2}];function f(e){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h4:"h4",hr:"hr",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:n}=t;return n||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(t.p,{children:["In this section, we will analyze a simple auction contract, which allows users to place bids and track the highest bidder. After, we will cover how to test the contract, as well as how to deploy it on  ",(0,a.jsx)(t.code,{children:"testnet"}),"."]}),"\n",(0,a.jsx)(t.admonition,{title:"Documentation",type:"info",children:(0,a.jsxs)(t.p,{children:["During this tutorial we will be relying on the ",(0,a.jsx)(t.a,{href:"/build/smart-contracts/quickstart",children:"Smart Contract Documentation"})," and its different sections"]})}),"\n",(0,a.jsx)(t.admonition,{title:"Prerequisites",type:"tip",children:(0,a.jsxs)(t.p,{children:["Make sure to read the ",(0,a.jsx)(t.a,{href:"/tutorials/auction/introduction",children:"Prerequisites"})," section and install the necessary tools before starting this tutorial"]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"cloning-the-contract",children:"Cloning the contract"}),"\n",(0,a.jsxs)(t.p,{children:["To get started we'll clone the ",(0,a.jsx)(t.a,{href:"https://github.com/near-examples/auctions-tutorial",children:"tutorial's repository"})," from Github. The repository contains the same smart contracts written in JavaScript (",(0,a.jsx)(t.code,{children:"./contract-ts"}),") and Rust (",(0,a.jsx)(t.code,{children:"./contract-rs"}),")."]}),"\n",(0,a.jsxs)(t.p,{children:["Navigate to the folder of the language you prefer, and then to the ",(0,a.jsx)(t.code,{children:"01-basic-auction"})," folder."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"git clone git@github.com:near-examples/auctions-tutorial.git\n\ncd contract-ts/01-basic-auction\n"})})}),(0,a.jsx)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(t.pre,{children:(0,a.jsx)(t.code,{className:"language-bash",children:"git clone git@github.com:near-examples/auctions-tutorial.git\n\ncd contract-rs/01-basic-auction\n"})})})]}),"\n",(0,a.jsx)(t.admonition,{title:"Frontend",type:"info",children:(0,a.jsxs)(t.p,{children:["The repository also contains a frontend application that interacts with the contract. You can find it in the ",(0,a.jsx)(t.code,{children:"frontend"})," folder. We will cover the frontend in a future section"]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"the-contracts-state",children:"The Contract's State"}),"\n",(0,a.jsx)(t.p,{children:"The contract allows users to place bids using $NEAR tokens and keeps track of the highest bidder. Lets start by looking at how we define the contract's state, this is, the data that the contract will store."}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsxs)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:[(0,a.jsx)(c.Ey,{fname:"contract.ts",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/01-basic-auction/src/contract.ts#L4-L12",start:"4",end:"12"}),(0,a.jsx)(t.h4,{id:"decorator",children:"Decorator"}),(0,a.jsxs)(t.p,{children:["A first thing to notice is that the main class of the contract is marked using the ",(0,a.jsx)(t.code,{children:"@NearBindgen"})," decorator, which allows also to further specify that the contract ",(0,a.jsx)(t.strong,{children:"must be initialized"})," before being used."]}),(0,a.jsx)(t.h4,{id:"storage-aka-state",children:"Storage (aka State)"}),(0,a.jsx)(t.p,{children:"Another important information revealed by the code is that a contract can store different types of data, in this case:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"highest_bid"})," is an instance of a ",(0,a.jsx)(t.code,{children:"Bid"})," which stores:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"bid"}),": a ",(0,a.jsx)(t.code,{children:"BigInt"})," representing an amount of $NEAR tokens in ",(0,a.jsx)(t.code,{children:"yoctonear"})," (",(0,a.jsx)(t.code,{children:"1\u24c3 = 10^24 y\u24c3"}),")"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"bidder"}),": an ",(0,a.jsx)(t.code,{children:"AccountId"})," that represents which account placed the bid"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"auction_end_time"})," a ",(0,a.jsx)(t.code,{children:"BigInt"})," representing a ",(0,a.jsx)(t.code,{children:"unix timestamp"})," in ",(0,a.jsx)(t.strong,{children:"nanoseconds"})]}),"\n"]})]}),(0,a.jsxs)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:[(0,a.jsx)(c.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/01-basic-auction/src/lib.rs#L5-L17",start:"5",end:"17"}),(0,a.jsx)(t.h4,{id:"macros",children:"Macros"}),(0,a.jsxs)(t.p,{children:["A first thing to notice is the use of the ",(0,a.jsx)(t.code,{children:"#[near(contract_state)]"})," macro to denote the main structure, and derive the ",(0,a.jsx)(t.code,{children:"PanicOnDefault"})," to specify that the contract ",(0,a.jsx)(t.strong,{children:"must be initialized"})," before being used."]}),(0,a.jsxs)(t.p,{children:["We also use the ",(0,a.jsx)(t.code,{children:"#[near(serializers = [json, borsh])]"})," macro to enable both ",(0,a.jsx)(t.code,{children:"borsh"})," and ",(0,a.jsx)(t.code,{children:"JSON"})," (de)serialization of the ",(0,a.jsx)(t.code,{children:"Bid"})," structure. As a rule of thumb: use the ",(0,a.jsx)(t.code,{children:"json"})," serializer for structs that will be used as input / output of functions, and ",(0,a.jsx)(t.code,{children:"borsh"})," for those that will be saved to state."]}),(0,a.jsx)(t.h4,{id:"storage-aka-state-1",children:"Storage (aka State)"}),(0,a.jsx)(t.p,{children:"Another important information revealed by the code is that the contract can store different types of data."}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"highest_bid"})," is an instance of a ",(0,a.jsx)(t.code,{children:"Bid"})," which stores:","\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"bid"}),": a ",(0,a.jsx)(t.code,{children:"NearToken"})," which simplifies handling $NEAR token amounts"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"bidder"}),": the ",(0,a.jsx)(t.code,{children:"AccountId"})," that placed the bid"]}),"\n"]}),"\n"]}),"\n",(0,a.jsxs)(t.li,{children:[(0,a.jsx)(t.code,{children:"auction_end_time"})," is a ",(0,a.jsx)(t.code,{children:"U64"})," representing a ",(0,a.jsx)(t.code,{children:"unix timestamp"})," in ",(0,a.jsx)(t.strong,{children:"nanoseconds"})]}),"\n"]})]})]}),"\n",(0,a.jsxs)(t.admonition,{title:"Learn More",type:"tip",children:[(0,a.jsx)(t.p,{children:"You can read more about the contract's structure and type of data it can store in the following documentation pages:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/",children:"Basic Contract's Anatomy"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/storage",children:"Contract's State"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/types",children:"Data Types"})}),"\n"]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"initialization-function",children:"Initialization Function"}),"\n",(0,a.jsx)(t.p,{children:"Lets now take a look at the initialization function, which we need to call to determine the time at which the auction will end."}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsxs)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:[(0,a.jsx)(c.Ey,{fname:"contract.ts",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/01-basic-auction/src/contract.ts",start:"14",end:"18"}),(0,a.jsx)(t.h4,{id:"decorator-1",children:"Decorator"}),(0,a.jsxs)(t.p,{children:["We denote the initialization function using the ",(0,a.jsx)(t.code,{children:"@initialize({ privateFunction: true })"})," decorator. The ",(0,a.jsx)(t.code,{children:"privateFunction:true"})," denotes that the function can only be called by the account on which the contract is deployed."]})]}),(0,a.jsxs)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:[(0,a.jsx)(c.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/01-basic-auction/src/lib.rs",start:"19",end:"31"}),(0,a.jsx)(t.h4,{id:"macros-1",children:"Macros"}),(0,a.jsxs)(t.p,{children:["We denote the initialization function using the ",(0,a.jsx)(t.code,{children:"#[init]"})," macro. Notice that the initialization function needs to return a instance of ",(0,a.jsx)(t.code,{children:"Self"}),", i.e. the contract's structure."]}),(0,a.jsxs)(t.p,{children:["Meanwhile, the ",(0,a.jsx)(t.code,{children:"#[private]"})," denotes that the function can only be called by the account on which the contract is deployed."]})]})]}),"\n",(0,a.jsx)(t.h4,{id:"end-time",children:"End Time"}),"\n",(0,a.jsxs)(t.p,{children:["The end time is represented using a ",(0,a.jsx)(t.code,{children:"unix timestamp"})," in ",(0,a.jsx)(t.strong,{children:"nano seconds"}),", and needs to be given as a ",(0,a.jsx)(t.code,{children:"String"})," when calling the initialization function. This is because smart contracts cannot receive numbers larger than ",(0,a.jsx)(t.code,{children:"52 bits"})," and ",(0,a.jsx)(t.code,{children:"unix timestamps"})," are represented in ",(0,a.jsx)(t.code,{children:"64 bits"}),"."]}),"\n",(0,a.jsx)(t.h4,{id:"initial-bid",children:"Initial Bid"}),"\n",(0,a.jsxs)(t.p,{children:["Notice that we initialize the contract with a ",(0,a.jsx)(t.code,{children:"1 yoctonear"})," bid, made from the ",(0,a.jsx)(t.code,{children:"current account id"}),". This mean that, after the contract is initialized, the first bid will be placed by the contract at 10^-24 NEAR."]}),"\n",(0,a.jsx)(t.admonition,{title:"Learn More",type:"tip",children:(0,a.jsxs)(t.p,{children:["You can read more about the contract's interface in our ",(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/functions",children:"contract functions documentation"}),", and learn about data types on the ",(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/types",children:"data types documentation"}),"."]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"read-only-functions",children:"Read-only Functions"}),"\n",(0,a.jsx)(t.p,{children:"The contract implements two functions to give access to its stored data, i.e. the time at which the auction ends, and the highest bid so far."}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsxs)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:[(0,a.jsx)(c.Ey,{fname:"contract.ts",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/01-basic-auction/src/contract.ts",start:"42",end:"50"}),(0,a.jsxs)(t.p,{children:["Functions that do not change the contract's state (i.e. that only read from it) are called ",(0,a.jsx)(t.code,{children:"view"})," functions, and are decorated using the ",(0,a.jsx)(t.code,{children:"@view"})," decorator."]})]}),(0,a.jsxs)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:[(0,a.jsx)(c.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/01-basic-auction/src/lib.rs",start:"61",end:"67"}),(0,a.jsxs)(t.p,{children:["Functions that do not change the contract's state (i.e. that only read from it) are called ",(0,a.jsx)(t.code,{children:"view"})," functions, and take a non-mutable reference to ",(0,a.jsx)(t.code,{children:"self"})," (",(0,a.jsx)(t.code,{children:"&self"}),")."]})]})]}),"\n",(0,a.jsxs)(t.p,{children:["View functions are ",(0,a.jsx)(t.strong,{children:"free to call"}),", and do ",(0,a.jsx)(t.strong,{children:"not require"})," a NEAR account to sign a transaction in order to call them."]}),"\n",(0,a.jsx)(t.admonition,{title:"Learn More",type:"tip",children:(0,a.jsxs)(t.p,{children:["You can read more about the contract's interface in our ",(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/functions",children:"contract functions documentation"}),", and learn about data types on the ",(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/types",children:"data types documentation"}),"."]})}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"bidding-function",children:"Bidding Function"}),"\n",(0,a.jsxs)(t.p,{children:["An auction is not an auction if you can't place a bid! For this, the contract includes a ",(0,a.jsx)(t.code,{children:"bid"})," function, which users will call attaching some $NEAR tokens."]}),"\n",(0,a.jsxs)(t.p,{children:["The function is quite simple: it verifies if the auction is still active and compares the attached deposit with the current highest bid. If the bid is higher, it updates the ",(0,a.jsx)(t.code,{children:"highest_bid"})," and refunds the previous bidder."]}),"\n",(0,a.jsxs)(r.Z,{groupId:"code-tabs",children:[(0,a.jsx)(s.Z,{value:"js",label:"\ud83c\udf10 JavaScript",children:(0,a.jsx)(c.Ey,{fname:"contract.ts",language:"javascript",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-ts/01-basic-auction/src/contract.ts",start:"20",end:"40"})}),(0,a.jsx)(s.Z,{value:"rust",label:"\ud83e\udd80 Rust",children:(0,a.jsx)(c.Ey,{fname:"lib.rs",language:"rust",url:"https://github.com/near-examples/auctions-tutorial/blob/main/contract-rs/01-basic-auction/src/lib.rs",start:"33",end:"59"})})]}),"\n",(0,a.jsx)(t.h4,{id:"payable-functions",children:"Payable Functions"}),"\n",(0,a.jsxs)(t.p,{children:["The first thing to notice is that the function changes the state, and thus is marked with a ",(0,a.jsx)(t.code,{children:"@call"})," decorator in JS, while taking as input a mutable reference to self (",(0,a.jsx)(t.code,{children:"&mut self"}),") on Rust. To call this function, a NEAR account needs to sign a transaction and expend GAS."]}),"\n",(0,a.jsxs)(t.p,{children:["Second, the function is marked as ",(0,a.jsx)(t.code,{children:"payable"}),", this is because by default ",(0,a.jsx)(t.strong,{children:"functions do not accept $NEAR tokens"}),"! If a user attaches tokens while calling a function that is not marked as ",(0,a.jsx)(t.code,{children:"payable"}),", the transaction will fail."]}),"\n",(0,a.jsx)(t.h4,{id:"the-environment",children:"The Environment"}),"\n",(0,a.jsxs)(t.p,{children:["Notice that the function can access information about the environment in which it is running, such as who called the function (",(0,a.jsx)(t.code,{children:"predecessor account"}),"), how much tokens they attached as deposit (",(0,a.jsx)(t.code,{children:"attached deposit"}),"), and the approximate ",(0,a.jsx)(t.code,{children:"unix timestamp"})," at which the function is executing (",(0,a.jsx)(t.code,{children:"block timestamp"}),")."]}),"\n",(0,a.jsx)(t.h4,{id:"token-transfer",children:"Token Transfer"}),"\n",(0,a.jsxs)(t.p,{children:["The function finishes by creating a ",(0,a.jsx)(t.code,{children:"Promise"})," to transfer tokens to the previous bidder. This token amount will be deducted immediately and transferred in the next block after the current function has finished executing."]}),"\n",(0,a.jsx)(t.p,{children:"Note that on the first bid the contract will send 1 yoctonear to itself, this is fine as we can safely assume that the contract will have the lowest denomination of $NEAR available to send to itself."}),"\n",(0,a.jsxs)(n,{children:[(0,a.jsx)("summary",{children:" Handling Funds "}),(0,a.jsx)(t.p,{children:"When a user attaches tokens to a call, the tokens are deposited on the contract's account before the function is executed. However, if the function raises an error during its execution, the tokens are immediately refunded to the user."})]}),"\n",(0,a.jsxs)(t.admonition,{title:"Learn More",type:"tip",children:[(0,a.jsx)(t.p,{children:"You can read more about the environment variables, payable functions and which actions the contract can perform here:"}),(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/environment",children:"Environment Variables"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/functions",children:"Payable Functions"})}),"\n",(0,a.jsx)(t.li,{children:(0,a.jsx)(t.a,{href:"/build/smart-contracts/anatomy/actions",children:"Transfers and Actions"})}),"\n"]})]}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),"\n",(0,a.jsxs)(t.p,{children:["In this part of the tutorial, we've seen how a smart contract stores data, mutates the stored data, and views the data. In the next part, we will cover how to test the contract, so we can ensure it works as expected before deploying it to ",(0,a.jsx)(t.code,{children:"testnet"}),"."]})]})}function p(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(f,{...e})}):f(e)}},85162:(e,t,n)=>{n.d(t,{Z:()=>s});n(67294);var a=n(36905);const i={tabItem:"tabItem_Ymn6"};var r=n(85893);function s(e){var t=e.children,n=e.hidden,s=e.className;return(0,r.jsx)("div",{role:"tabpanel",className:(0,a.Z)(i.tabItem,s),hidden:n,children:t})}},74866:(e,t,n)=>{n.d(t,{Z:()=>w});var a=n(67294),i=n(36905),r=n(12466),s=n(16550),c=n(20469),o=n(91980),l=n(67392),d=n(20812);function u(e){var t,n;return null!=(t=null==(n=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((t=e.props)&&"object"==typeof t&&"value"in t))return e;var t;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:n.filter(Boolean))?t:[]}function h(e){var t=e.values,n=e.children;return(0,a.useMemo)((function(){var e=null!=t?t:function(e){return u(e).map((function(e){var t=e.props;return{value:t.value,label:t.label,attributes:t.attributes,default:t.default}}))}(n);return function(e){var t=(0,l.lx)(e,(function(e,t){return e.value===t.value}));if(t.length>0)throw new Error('Docusaurus error: Duplicate values "'+t.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[t,n])}function f(e){var t=e.value;return e.tabValues.some((function(e){return e.value===t}))}function p(e){var t=e.queryString,n=void 0!==t&&t,i=e.groupId,r=(0,s.k6)(),c=function(e){var t=e.queryString,n=void 0!==t&&t,a=e.groupId;if("string"==typeof n)return n;if(!1===n)return null;if(!0===n&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:n,groupId:i});return[(0,o._X)(c),(0,a.useCallback)((function(e){if(c){var t=new URLSearchParams(r.location.search);t.set(c,e),r.replace(Object.assign({},r.location,{search:t.toString()}))}}),[c,r])]}function m(e){var t,n,i,r,s=e.defaultValue,o=e.queryString,l=void 0!==o&&o,u=e.groupId,m=h(e),x=(0,a.useState)((function(){return function(e){var t,n=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(n){if(!f({value:n,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+n+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return n}var i=null!=(t=a.find((function(e){return e.default})))?t:a[0];if(!i)throw new Error("Unexpected error: 0 tabValues");return i.value}({defaultValue:s,tabValues:m})})),b=x[0],j=x[1],g=p({queryString:l,groupId:u}),v=g[0],y=g[1],w=(t=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),n=(0,d.Nk)(t),i=n[0],r=n[1],[i,(0,a.useCallback)((function(e){t&&r.set(e)}),[t,r])]),k=w[0],S=w[1],I=function(){var e=null!=v?v:k;return f({value:e,tabValues:m})?e:null}();return(0,c.Z)((function(){I&&j(I)}),[I]),{selectedValue:b,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:m}))throw new Error("Can't select invalid tab value="+e);j(e),y(e),S(e)}),[y,S,m]),tabValues:m}}var x=n(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var j=n(85893);function g(e){var t=e.className,n=e.block,a=e.selectedValue,s=e.selectValue,c=e.tabValues,o=[],l=(0,r.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var t=e.currentTarget,n=o.indexOf(t),i=c[n].value;i!==a&&(l(t),s(i))},u=function(e){var t,n=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,i=o.indexOf(e.currentTarget)+1;n=null!=(a=o[i])?a:o[0];break;case"ArrowLeft":var r,s=o.indexOf(e.currentTarget)-1;n=null!=(r=o[s])?r:o[o.length-1]}null==(t=n)||t.focus()};return(0,j.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,i.Z)("tabs",{"tabs--block":n},t),children:c.map((function(e){var t=e.value,n=e.label,r=e.attributes;return(0,j.jsx)("li",Object.assign({role:"tab",tabIndex:a===t?0:-1,"aria-selected":a===t,ref:function(e){return o.push(e)},onKeyDown:u,onClick:d},r,{className:(0,i.Z)("tabs__item",b.tabItem,null==r?void 0:r.className,{"tabs__item--active":a===t}),children:null!=n?n:t}),t)}))})}function v(e){var t=e.lazy,n=e.children,r=e.selectedValue,s=(Array.isArray(n)?n:[n]).filter(Boolean);if(t){var c=s.find((function(e){return e.props.value===r}));return c?(0,a.cloneElement)(c,{className:(0,i.Z)("margin-top--md",c.props.className)}):null}return(0,j.jsx)("div",{className:"margin-top--md",children:s.map((function(e,t){return(0,a.cloneElement)(e,{key:t,hidden:e.props.value!==r})}))})}function y(e){var t=m(e);return(0,j.jsxs)("div",{className:(0,i.Z)("tabs-container",b.tabList),children:[(0,j.jsx)(g,Object.assign({},t,e)),(0,j.jsx)(v,Object.assign({},t,e))]})}function w(e){var t=(0,x.Z)();return(0,j.jsx)(y,Object.assign({},e,{children:u(e.children)}),String(t))}},71183:(e,t,n)=>{n.d(t,{O2:()=>p,Ey:()=>x,SQ:()=>m});var a=n(67294),i=n(74866),r=n(85162),s=n(74165),c=n(15861),o=n(1841),l=n.n(o),d=n(85893);function u(){return(u=(0,c.Z)((0,s.Z)().mark((function e(t,n,a){var i,r,c,o;return(0,s.Z)().wrap((function(e){for(;;)switch(e.prev=e.next){case 0:if(!((r=localStorage.getItem(t+"-until"))&&r>Date.now())){e.next=5;break}i=localStorage.getItem(t),e.next=18;break;case 5:return e.prev=5,e.next=8,fetch(t);case 8:return e.next=10,e.sent.text();case 10:i=e.sent,localStorage.setItem(t,i),localStorage.setItem(t+"-until",Date.now()+6e4),e.next=18;break;case 15:return e.prev=15,e.t0=e.catch(5),e.abrupt("return","Error fetching code, please try reloading");case 18:return c=i.split("\n"),n=n?Number(n)-1:0,a=a?Number(a):c.length,c=c.slice(n,a),o=c.reduce((function(e,t){if(0===t.length)return e;var n=t.match(/^\s+/);return n?Math.min(e,n[0].length):0}),1/0),e.abrupt("return",c.map((function(e){return e.slice(o)})).join("\n"));case 24:case"end":return e.stop()}}),e,null,[[5,15]])})))).apply(this,arguments)}const h=function(e){var t=e.url,n=e.start,i=e.end,r=e.language,s=e.fname,c=e.metastring,o=(0,a.useState)("Loading..."),h=o[0],f=o[1];return(0,a.useEffect)((function(){var e=function(e){var t=e.slice(e.indexOf("https")).split("#"),n=t[0],a=(t[1],new URL(n).pathname.split("/").slice(1)),i=a[0],r=a[1];return a[2],"https://raw.githubusercontent.com/"+i+"/"+r+"/"+a[3]+"/"+a.slice(4).join("/")}(t),a=function(e,t,n){return u.apply(this,arguments)}(e,n,i);a.then((function(e){return f(e)}))})),(0,d.jsxs)("div",{fname:s,children:[(0,d.jsx)(l(),{language:r,metastring:c+" showLineNumbers",children:h}),(0,d.jsx)("div",{style:{fontSize:"0.9em",fontWeight:600,color:"rgb(14, 117, 221)",textAlign:"center",paddingBottom:"13px",textDecoration:"underline"},children:(0,d.jsx)("a",{href:t,target:"_blank",rel:"noreferrer noopener",children:"See full example on GitHub"})})]})};var f={rust:"\ud83e\udd80 Rust",js:"\ud83c\udf10 Javascript",ts:"\ud83c\udf10 Typescript"};function p(e){var t=e.children;return Array.isArray(t)||(t=[t]),(0,d.jsx)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:t.map((function(e,t){return(0,d.jsx)(r.Z,{value:e.props.value,label:f[e.props.value],children:e})}))})}function m(e){var t=e.children,n=e.language,a=e.showSingleFName;return Array.isArray(t)||(t=[t]),t=t.map((function(e){return function(e,t){var n=e.props,a=(n.children,n.url),i=n.start,r=n.end,s=n.fname;if(e.type===x)return x({url:a,start:i,end:r,language:t,fname:s});return e}(e,n)})),1!=t.length||a?(0,d.jsx)(i.Z,{className:"file-tabs",children:t.map((function(e,t){return(0,d.jsx)(r.Z,{value:t,label:e.props.fname,children:e})}))}):(0,d.jsx)(r.Z,{value:0,label:t[0].props.fname,children:t[0]})}function x(e){var t=e.url,n=e.start,a=e.end,i=e.language,r=e.fname,s=e.metastring;return h({url:t,start:n,end:a,language:i,fname:r,metastring:s})}}}]);