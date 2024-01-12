"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8387],{98327:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>a,contentTitle:()=>s,default:()=>h,frontMatter:()=>c,metadata:()=>r,toc:()=>l});var i=n(85893),o=n(11151);const c={id:"remix-ide-plugin",sidebar_label:"Remix IDE Plugin"},s="Remix IDE Plugin Integration",r={id:"tools/remix-ide-plugin",title:"Remix IDE Plugin Integration",description:"This tutorial details how to deploy and run NEAR smart contract on Remix IDE. It is a no-setup tool with a GUI for developing NEAR smart contract.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/4.tools/remix-ide-plugin.md",sourceDirName:"4.tools",slug:"/tools/remix-ide-plugin",permalink:"/vi/tools/remix-ide-plugin",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/remix-ide-plugin.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",frontMatter:{id:"remix-ide-plugin",sidebar_label:"Remix IDE Plugin"}},a={},l=[{value:"Connect to Remix IDE",id:"connect-to-remix-ide",level:2},{value:"Select a Chain",id:"select-a-chain",level:2},{value:"Install a browser extension wallet",id:"install-a-browser-extension-wallet",level:2},{value:"Create the Project",id:"create-the-project",level:2},{value:"Select a Template",id:"select-a-template",level:3},{value:"New Project",id:"new-project",level:3},{value:"1. Writing Contracts in Rust",id:"1-writing-contracts-in-rust",level:4},{value:"2. Writing Contracts in TypeScript",id:"2-writing-contracts-in-typescript",level:4},{value:"3. Writing Contracts in JavaScript",id:"3-writing-contracts-in-javascript",level:4},{value:"Compile the Contract",id:"compile-the-contract",level:2},{value:"1. Rust Compile",id:"1-rust-compile",level:3},{value:"2. CARGO-NEAR Compile (for Rust) - <code>Experimental</code>",id:"2-cargo-near-compile-for-rust---experimental",level:3},{value:"3. EMBED-ABI Compile (for Rust) - <code>Experimental</code>",id:"3-embed-abi-compile-for-rust---experimental",level:3},{value:"4. JavaScript &amp; TypeScript Compile",id:"4-javascript--typescript-compile",level:3},{value:"Deploy the Contract",id:"deploy-the-contract",level:2},{value:"Execute the Contract",id:"execute-the-contract",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",h1:"h1",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,o.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"remix-ide-plugin-integration",children:"Remix IDE Plugin Integration"}),"\n",(0,i.jsx)(t.p,{children:"This tutorial details how to deploy and run NEAR smart contract on Remix IDE. It is a no-setup tool with a GUI for developing NEAR smart contract."}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"remix-plugin",src:n(86501).Z+"",title:"remix-plugin",width:"2270",height:"1642"})}),"\n",(0,i.jsx)(t.h2,{id:"connect-to-remix-ide",children:"Connect to Remix IDE"}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.a,{href:"https://docs.welldonestudio.io/code",children:"WELLDONE Code"}),"\xa0is the official Remix IDE Plug-in. Please visit the\xa0",(0,i.jsx)(t.a,{href:"https://remix.ethereum.org/",children:"Remix IDE"}),"\xa0and follow the guide below."]}),"\n",(0,i.jsxs)(t.p,{children:["Click\xa0",(0,i.jsx)(t.strong,{children:"Plugin Manager"}),"\xa0button in the left bar and search for\xa0",(0,i.jsx)(t.strong,{children:"CODE BY WELLDONE STUDIO"}),"\xa0and click the\xa0Activate\xa0button."]}),"\n",(0,i.jsx)("img",{src:n(77979).Z,alt:"plugin-manager",style:{width:"500px",marginRight:"10px",display:"inline"}}),"\n",(0,i.jsx)("img",{src:n(21770).Z,alt:"active-plugin",style:{width:"300px",display:"inline"}}),"\n",(0,i.jsx)(t.h2,{id:"select-a-chain",children:"Select a Chain"}),"\n",(0,i.jsx)(t.p,{children:"Click on NEAR(NVM) in the list of chains."}),"\n",(0,i.jsxs)(t.p,{children:["If you click the\xa0",(0,i.jsx)(t.code,{children:"Documentation"}),"\xa0button, go to WELL DONE Docs, and if you find a problem or have any questions while using it, click the\xa0",(0,i.jsx)(t.code,{children:"Make an issue"}),"\xa0button to go to the\xa0",(0,i.jsx)(t.a,{href:"https://github.com/welldonestudio/welldonestudio.github.io",children:"Github Repository"}),"\xa0and feel free to create an issue."]}),"\n",(0,i.jsx)("img",{src:n(66221).Z,alt:"select-chain",style:{width:"318px"}}),"\n",(0,i.jsx)(t.h2,{id:"install-a-browser-extension-wallet",children:"Install a browser extension wallet"}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.mdxAdmonitionTitle,{}),(0,i.jsx)(t.p,{children:"Other wallets will be supported soon, and WELLDONE Wallet can be used now."})]}),"\n",(0,i.jsxs)(t.p,{children:["After choosing a chain, click the\xa0",(0,i.jsx)(t.code,{children:"Connect to WELLDONE"}),"\xa0button to connect to the\xa0",(0,i.jsx)(t.strong,{children:"WELLDONE Wallet."})]}),"\n",(0,i.jsxs)(t.p,{children:["If you haven't installed the WELLDONE Wallet yet, please follow the following\xa0",(0,i.jsx)(t.a,{href:"https://docs.welldonestudio.io/wallet/manual/",children:"manual"}),"\xa0to install and create a wallet and create an account for the selected chain. Finally, go into the Setting tab of your wallet and activate Developer Mode."]}),"\n",(0,i.jsx)("img",{src:n(32371).Z,alt:"wallet-developer-mode",style:{width:"318px",marginBottom:"10px"}}),"\n",(0,i.jsx)(t.p,{children:"And you must click the\xa0Refresh\xa0button in the upper right corner of the plug-in to apply changes to your wallet."}),"\n",(0,i.jsx)(t.h2,{id:"create-the-project",children:"Create the Project"}),"\n",(0,i.jsxs)(t.p,{children:["In NEAR, you can write smart contracts with Rust, JavaScript, and TypeScript. Because the structure of the contract is different in each language, ",(0,i.jsx)(t.strong,{children:"WELLDONE Code"})," provides two features to help developers new to NEAR."]}),"\n",(0,i.jsx)(t.h3,{id:"select-a-template",children:"Select a Template"}),"\n",(0,i.jsxs)(t.p,{children:["Create a simple example contract code written in Rust, JavaScript, and TypeScript. You can create a sample contract by selecting the template option and clicking the ",(0,i.jsx)(t.code,{children:"Create"})," button. More templates may be found at ",(0,i.jsx)(t.a,{href:"https://github.com/near-examples/",children:"NEAR Samples"}),"."]}),"\n",(0,i.jsx)("img",{src:n(56353).Z,alt:"template-code-near",style:{width:"318px"}}),"\n",(0,i.jsx)(t.h3,{id:"new-project",children:"New Project"}),"\n",(0,i.jsxs)(t.p,{children:["Automatically generate a contract structure based on the smart contract language you want to use. Select the language option, write a name for the project, and click the ",(0,i.jsx)(t.code,{children:"Create"})," button to create a contract structure that is appropriate for the language."]}),"\n",(0,i.jsx)("img",{src:n(59788).Z,alt:"new-project-near",style:{width:"318px"}}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["You can create your own contract projects without using the features above. However, for the remix plugin to build and deploy the contract, it must be built within the directory ",(0,i.jsx)(t.code,{children:"near/"}),". If you start a new project, the structure should look like the following."]})}),"\n",(0,i.jsx)(t.h4,{id:"1-writing-contracts-in-rust",children:"1. Writing Contracts in Rust"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"near\n\u2514\u2500\u2500 <YOUR_PROJECT_NAME>\n    \u251c\u2500\u2500 Cargo.toml\n    \u2514\u2500\u2500 src\n        \u2514\u2500\u2500 lib.rs\n"})}),"\n",(0,i.jsx)(t.h4,{id:"2-writing-contracts-in-typescript",children:"2. Writing Contracts in TypeScript"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"near\n\u2514\u2500\u2500 <YOUR_PROJECT_NAME>\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 babel.config.json\n    \u251c\u2500\u2500 tsconfig.json\n    \u2514\u2500\u2500 src\n      \u2514\u2500\u2500 contract.ts\n"})}),"\n",(0,i.jsx)(t.h4,{id:"3-writing-contracts-in-javascript",children:"3. Writing Contracts in JavaScript"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{children:"near\n\u2514\u2500\u2500 <YOUR_PROJECT_NAME>\n    \u251c\u2500\u2500 package.json\n    \u251c\u2500\u2500 babel.config.json\n    \u2514\u2500\u2500 src\n      \u2514\u2500\u2500 contract.js\n"})}),"\n",(0,i.jsx)(t.h2,{id:"compile-the-contract",children:"Compile the Contract"}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsxs)(t.p,{children:["Six compilation options are now available in WELLDONE Code: ",(0,i.jsx)(t.code,{children:"Rust"}),", ",(0,i.jsx)(t.code,{children:"CARGO-NEAR"}),", ",(0,i.jsx)(t.code,{children:"EMBED-ABI"}),", ",(0,i.jsx)(t.code,{children:"JavaScript"}),", and ",(0,i.jsx)(t.code,{children:"TypeScript"}),"."]}),(0,i.jsx)(t.p,{children:"We now only support the AMD compilation server, however, we will shortly add support for the ARM compilation server."})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 1"}),": Select the project you want to compile in the ",(0,i.jsx)(t.strong,{children:"TARGET PROJECT"})," section."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 2"}),": Select a compilation option and click the ",(0,i.jsx)(t.code,{children:"Compile"})," button."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 3"}),": When the compilation is complete, a wasm file is returned."]}),"\n",(0,i.jsx)("img",{src:n(71596).Z,alt:"project-compile",style:{width:"318px"}}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsxs)(t.p,{children:["You can check the returned wasm file in ",(0,i.jsx)(t.code,{children:"near/<YOUR_PROJECT_NAME>/out"})," directory."]}),(0,i.jsxs)(t.p,{children:["If you need to revise the contract and compile again, delete the ",(0,i.jsx)(t.code,{children:"out"})," directory and click the compile button."]})]}),"\n",(0,i.jsx)(t.h3,{id:"1-rust-compile",children:"1. Rust Compile"}),"\n",(0,i.jsxs)(t.p,{children:["Using the ",(0,i.jsx)(t.code,{children:"cargo build"})," command to compile a smart contract written in Rust. Although it offers a stable compile, it is inconvenient to enter the method's parameters directly when executing the contract."]}),"\n",(0,i.jsxs)(t.h3,{id:"2-cargo-near-compile-for-rust---experimental",children:["2. CARGO-NEAR Compile (for Rust) - ",(0,i.jsx)(t.code,{children:"Experimental"})]}),"\n",(0,i.jsxs)(t.p,{children:["Compile using ",(0,i.jsx)(t.code,{children:"cargo near"})," which is officially being developed by NEAR. If Compile is successful, an executable wasm binary file and a json file containing the ABI of the contract are created together. If you have deployed and imported a compiled contract using ",(0,i.jsx)(t.code,{children:"cargo-near"}),", you can find out the parameter type of the method, making it easier to run the contract."]}),"\n",(0,i.jsxs)(t.p,{children:["However, because this feature is still under development, the ",(0,i.jsx)(t.code,{children:"near-sdk-rs"})," version must be specified at ",(0,i.jsx)(t.strong,{children:"4.1.0"})," or higher in the ",(0,i.jsx)(t.code,{children:"Cargo.toml"})," file, and unexpected issues may occur during compilation. Please check out the NEAR's ",(0,i.jsx)(t.a,{href:"https://github.com/near/abi",children:"repository"})," for more detail."]}),"\n",(0,i.jsxs)(t.h3,{id:"3-embed-abi-compile-for-rust---experimental",children:["3. EMBED-ABI Compile (for Rust) - ",(0,i.jsx)(t.code,{children:"Experimental"})]}),"\n",(0,i.jsxs)(t.p,{children:["When using ",(0,i.jsx)(t.code,{children:"-embed-abi"})," option in ",(0,i.jsx)(t.code,{children:"cargo-near"}),", generates a wasm file containing ABI inside. For contracts that have deployed the wasm file compiling with this option, you can get ABI information even when importing the contract through ",(0,i.jsx)(t.code,{children:"At Address"})," button. See the ",(0,i.jsx)(t.a,{href:"https://github.com/near/cargo-near",children:"cargo-near"})," repository for a detailed description of the options."]}),"\n",(0,i.jsx)(t.h3,{id:"4-javascript--typescript-compile",children:"4. JavaScript & TypeScript Compile"}),"\n",(0,i.jsxs)(t.p,{children:["Using ",(0,i.jsx)(t.a,{href:"https://github.com/near/near-sdk-js",children:(0,i.jsx)(t.code,{children:"near-sdk-js"})})," to compile a smart contract written in JavaScript or TypeScript."]}),"\n",(0,i.jsxs)(t.admonition,{type:"note",children:[(0,i.jsx)(t.p,{children:"If you are using JavaScript or TypeScript compile options, you must write the name of the contract file you want to compile as follows to ensure that the compilation runs without error."}),(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:["JavaScript: ",(0,i.jsx)(t.code,{children:"contract.js"})]}),"\n",(0,i.jsxs)(t.li,{children:["TypeScript: ",(0,i.jsx)(t.code,{children:"contract.ts"})]}),"\n"]})]}),"\n",(0,i.jsx)(t.h2,{id:"deploy-the-contract",children:"Deploy the Contract"}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsx)(t.p,{children:"The WELLDONE Wallet automatically finds and imports networks associated with your wallet address. As a result, before deploying, you should choose whether you want to send a transaction to mainnet or testnet."})}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 1"}),": If you have a compiled contract code, then ",(0,i.jsx)(t.code,{children:"Deploy"})," button will be activated."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 2"}),": Enter the Account ID for which you want to deployed the contract and click the ",(0,i.jsx)(t.code,{children:"Deploy"})," button. If you want to add ",(0,i.jsx)(t.code,{children:"init function"}),", click ",(0,i.jsx)(t.code,{children:"Deploy Option"})," to add the method name and arguments."]}),"\n",(0,i.jsx)("img",{src:n(28406).Z,alt:"deploy-option-near",style:{width:"318px"}}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 3"}),": If the AccountId already has a deployed contract, confirm once more."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 4"}),": Click the ",(0,i.jsx)(t.code,{children:"Send Tx"})," button in the ",(0,i.jsx)(t.strong,{children:"WELLDONE Wallet"})," to sign the transaction."]}),"\n",(0,i.jsx)("img",{src:n(69430).Z,alt:"deploy-near",style:{width:"500px"}}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 5"}),": A transaction success log will be printed to the terminal and the contract can be executed if contract deployment is successful."]}),"\n",(0,i.jsx)("img",{src:n(45356).Z,alt:"deployed-contract-near",style:{width:"318px"}}),"\n",(0,i.jsx)(t.h2,{id:"execute-the-contract",children:"Execute the Contract"}),"\n",(0,i.jsxs)(t.admonition,{type:"info",children:[(0,i.jsx)(t.p,{children:"There are two ways to import contracts."}),(0,i.jsxs)(t.ol,{children:["\n",(0,i.jsx)(t.li,{children:"Automatically import contracts deployed through the above process."}),"\n",(0,i.jsxs)(t.li,{children:["Import existing deployed contracts through ",(0,i.jsx)(t.code,{children:"At Address"})," button."]}),"\n"]})]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 1"}),": Select the method to run."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 2"}),": Add parameters as you needed."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 3"}),": In the case of the ",(0,i.jsx)(t.code,{children:"Call"})," function, You can specify the number of NEAR tokens to attach to a function call and the GAS LIMIT."]}),"\n",(0,i.jsxs)(t.p,{children:[(0,i.jsx)(t.strong,{children:"Step 4"}),": Run the method via clicking ",(0,i.jsx)(t.code,{children:"View"})," or ",(0,i.jsx)(t.code,{children:"Call"})," button. If you are sending a transaction, you must sign the transaction by clicking the ",(0,i.jsx)(t.code,{children:"Send Tx"})," button in the ",(0,i.jsx)(t.strong,{children:"WELLDONE Wallet"}),"."]}),"\n",(0,i.jsx)("img",{src:n(20974).Z,alt:"function-call",style:{width:"318px"}}),"\n",(0,i.jsx)(t.admonition,{type:"info",children:(0,i.jsxs)(t.p,{children:["If you deployed the compiled contract using ",(0,i.jsx)(t.code,{children:"CARGO-NEAR"})," or ",(0,i.jsx)(t.code,{children:"EMBED-ABI"})," options, you can execute the contract more easily using the ABI without directly entering the parameters of the method."]})}),"\n",(0,i.jsx)("img",{src:n(63151).Z,alt:"cargo-near",style:{width:"250px",display:"inline-block"}}),"\n",(0,i.jsx)("img",{src:n(12209).Z,alt:"cargo-near1",style:{width:"250px",display:"inline-block"}}),"\n",(0,i.jsx)("img",{src:n(92670).Z,alt:"cargo-near2",style:{width:"250px",display:"inline-block"}})]})}function h(e={}){const{wrapper:t}={...(0,o.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},21770:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/activate-plugin-b290e8fbbad84e87d39c63cce9d4a1ae.png"},63151:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cargo-near-c568fd71c61f12a85da6cc7d0dfa1287.png"},12209:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/cargo-near1-63a86879b1ab80e22f7ffaeef8b8e0af.png"},92670:(e,t,n)=>{n.d(t,{Z:()=>i});const i="data:image/png;base64,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"},69430:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/deploy-near-5064c578366ef3cbf0eb88a7d241e2f7.png"},28406:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/deploy-option-near-fdbe115f2a885fcaf1f1f6ad4eb2995c.png"},45356:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/deployed-contract-near-7efeed4abf28f4791c3f9d54dac7083e.png"},20974:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/function-call-847ffb3dc6c1386cd8c482602eb68864.png"},59788:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/new-project-near-fb50699ce554c3c0c4a9a2c846487475.png"},77979:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/plugin-manager-92eebcf01852f4afab0bace1427e0bb6.png"},71596:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/project-compile-3f64d4c5eb4a24742e44b61716d30d44.png"},66221:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/select-chain-f62872228a1a4b2eec1ee3f2a7840ff5.png"},56353:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/template-code-near-b32e1b97b66ef9d0e1e19174c10522eb.png"},32371:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/wallet-developer-mode-bf69ff26e36b2854a800cd1fbdf6fac8.png"},86501:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/remix-ide-9cec76c24306a6aefa83efcec14837c1.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var i=n(67294);const o={},c=i.createContext(o);function s(e){const t=i.useContext(c);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(o):e.components||o:s(e.components),i.createElement(c.Provider,{value:t},e.children)}}}]);