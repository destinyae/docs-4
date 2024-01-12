"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4642],{62882:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>o,default:()=>h,frontMatter:()=>s,metadata:()=>a,toc:()=>c});var i=t(85893),r=t(11151);const s={id:"minting-nfts",title:"Minting NFTs",sidebar_label:"Minting NFTs"},o=void 0,a={id:"tutorials/nfts/minting-nfts",title:"Minting NFTs",description:"In this tutorial you'll learn how to easily create your own NFTs without doing any software development by using a readily-available smart contract and a decentralized storage solution like IPFS.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/minting-nfts.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/minting-nfts",permalink:"/zh-CN/tutorials/nfts/minting-nfts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/minting-nfts.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"minting-nfts",title:"Minting NFTs",sidebar_label:"Minting NFTs"},sidebar:"contracts",previous:{title:"Minting Fungible Tokens",permalink:"/zh-CN/tutorials/fts/simple-fts"},next:{title:"Minting Front-end",permalink:"/zh-CN/tutorials/nfts/minting-nft-frontend"}},l={},c=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Wallet",id:"wallet",level:2},{value:"IPFS",id:"ipfs",level:2},{value:"Uploading the image",id:"uploading-the-image",level:3},{value:"Steps",id:"steps",level:4},{value:"Non-fungible Token contract",id:"non-fungible-token-contract",level:2},{value:"Clone the NFT repository",id:"clone-the-nft-repository",level:3},{value:"Explore the smart contract",id:"explore-the-smart-contract",level:3},{value:"Contract Struct",id:"contract-struct",level:4},{value:"Minting",id:"minting",level:4},{value:"Building the contract",id:"building-the-contract",level:3},{value:"Testing the contract",id:"testing-the-contract",level:3},{value:"Using the NFT contract",id:"using-the-nft-contract",level:2},{value:"Deploying the contract",id:"deploying-the-contract",level:3},{value:"Minting your NFTs",id:"minting-your-nfts",level:3},{value:"Final remarks",id:"final-remarks",level:2},{value:"Blockcraft - a Practical Extension",id:"blockcraft---a-practical-extension",level:2},{value:"Versioning for this article",id:"versioning-for-this-article",level:2}];function d(e){const n={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components},{Details:s}=n;return s||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["In this tutorial you'll learn how to easily create your own NFTs without doing any software development by using a readily-available smart contract and a decentralized storage solution like ",(0,i.jsx)(n.a,{href:"https://ipfs.io/",children:"IPFS"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["This article will guide you in setting up an ",(0,i.jsx)(n.a,{href:"#non-fungible-token-contract",children:"NFT smart contract"}),", and show you ",(0,i.jsx)(n.a,{href:"#building-the-contract",children:"how to build"}),", ",(0,i.jsx)(n.a,{href:"#testing-the-contract",children:"test"})," and ",(0,i.jsx)(n.a,{href:"#deploying-the-contract",children:"deploy"})," your NFT contract on NEAR. Once the contract is deployed, you'll learn ",(0,i.jsx)(n.a,{href:"#minting-your-nfts",children:"how to mint"})," non-fungible tokens from media files ",(0,i.jsx)(n.a,{href:"#uploading-the-image",children:"stored on IPFS"})," and view them in your Wallet."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsx)(n.p,{children:"To complete this tutorial successfully, you'll need:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"/develop/prerequisites",children:"Rust toolchain"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#wallet",children:"A NEAR account"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#uploading-the-image",children:"nft.storage account"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/tools/near-cli#setup",children:"NEAR command-line interface"})," (",(0,i.jsx)(n.code,{children:"near-cli"}),")"]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"wallet",children:"Wallet"}),"\n",(0,i.jsxs)(n.p,{children:["To store your non-fungible tokens you'll need a ",(0,i.jsx)(n.a,{href:"https://testnet.mynearwallet.com//",children:"NEAR Wallet"}),". If you don't have one yet, you can create one easily by following ",(0,i.jsx)(n.a,{href:"https://testnet.mynearwallet.com/create",children:"these instructions"}),"."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," for this tutorial we'll use a ",(0,i.jsx)(n.code,{children:"testnet"})," wallet account. The ",(0,i.jsx)(n.code,{children:"testnet"})," network is free and there's no need to deposit funds."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Once you have your Wallet account, you can click on the ",(0,i.jsx)(n.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"Collectibles"})," tab where all your NFTs will be listed:"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Wallet",src:t(98047).Z+"",width:"2460",height:"1080"})}),"\n",(0,i.jsx)(n.h2,{id:"ipfs",children:"IPFS"}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.a,{href:"https://ipfs.io/",children:"InterPlanetary File System"})," (IPFS) is a protocol and peer-to-peer network for storing and sharing data in a distributed file system. IPFS uses content-addressing to uniquely identify each file in a global namespace connecting all computing devices."]}),"\n",(0,i.jsx)(n.h3,{id:"uploading-the-image",children:"Uploading the image"}),"\n",(0,i.jsxs)(n.p,{children:["To upload the NFT image, we are going to use the free ",(0,i.jsx)(n.a,{href:"https://nft.storage/#getting-started",children:"NFT Storage"})," service built specifically for storing off-chain NFT data. NFT Storage offers free decentralized storage and bandwidth for NFTs on ",(0,i.jsx)(n.a,{href:"https://ipfs.io/",children:"IPFS"})," and ",(0,i.jsx)(n.a,{href:"https://filecoin.io/",children:"Filecoin"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"steps",children:"Steps"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://nft.storage/login/",children:"Register an account"})," and log in to ",(0,i.jsx)(n.a,{href:"https://nft.storage/login/",children:"nft.storage"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://nft.storage/files/",children:"Files"})," section, and click on the ",(0,i.jsx)(n.a,{href:"https://nft.storage/new-file/",children:"Upload"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"nft.storage",src:t(31315).Z+"",width:"1481",height:"609"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once you have uploaded your file, you'll get a unique ",(0,i.jsx)(n.code,{children:"CID"})," for your content, and a URL like:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"https://bafyreiabag3ztnhe5pg7js4bj6sxuvkz3sdf76cjvcuqjoidvnfjz7vwrq.ipfs.dweb.link/\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," check the ",(0,i.jsx)(n.a,{href:"https://nft.storage/api-docs/",children:"NFT.Storage Docs"})," for information on uploading multiple files and available API endpoints."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"non-fungible-token-contract",children:"Non-fungible Token contract"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.a,{href:"https://github.com/near-examples/NFT",children:"This repository"})," includes an example implementation of a ",(0,i.jsx)(n.a,{href:"https://nomicon.io/Standards/NonFungibleToken",children:"non-fungible token"})," contract which uses ",(0,i.jsx)(n.a,{href:"https://github.com/near/near-sdk-rs/tree/master/near-contract-standards",children:"near-contract-standards"})," and simulation tests."]}),"\n",(0,i.jsx)(n.h3,{id:"clone-the-nft-repository",children:"Clone the NFT repository"}),"\n",(0,i.jsx)(n.p,{children:"In your terminal run the following command to clone the NFT repo:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"git clone https://github.com/near-examples/NFT\n"})}),"\n",(0,i.jsx)(n.h3,{id:"explore-the-smart-contract",children:"Explore the smart contract"}),"\n",(0,i.jsxs)(n.p,{children:["The source code for this contract can be found in ",(0,i.jsx)(n.code,{children:"nft/src/lib.rs"}),". This contract contains logic which follows the ",(0,i.jsx)(n.a,{href:"https://nomicon.io/Standards/NonFungibleToken",children:"NEP-171 standard"})," (NEAR Enhancement Proposal) and the implementation of this standard which can be found ",(0,i.jsx)(n.a,{href:"https://github.com/near/near-sdk-rs/blob/master/near-contract-standards/src/non_fungible_token/core/core_impl.rs",children:"here"}),"."]}),"\n",(0,i.jsx)(n.p,{children:"At first, the code can be a bit overwhelming, but if we only consider the aspects involved with minting, we can break it down into 2 main categories - the contract struct and the minting process."}),"\n",(0,i.jsx)(n.h4,{id:"contract-struct",children:"Contract Struct"}),"\n",(0,i.jsxs)(n.p,{children:["The contract keeps track of two pieces of information - ",(0,i.jsx)(n.code,{children:"tokens"})," and ",(0,i.jsx)(n.code,{children:"metadata"}),". For the purpose of this tutorial we will only deal with the ",(0,i.jsx)(n.code,{children:"tokens"})," field."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize, PanicOnDefault)]\npub struct Contract {\n    tokens: NonFungibleToken,\n    metadata: LazyOption<NFTContractMetadata>,\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The tokens are of type ",(0,i.jsx)(n.code,{children:"NonFungibleToken"})," which come from the ",(0,i.jsx)(n.a,{href:"https://github.com/near/near-sdk-rs/blob/master/near-contract-standards/src/non_fungible_token/core/core_impl.rs",children:"core standards"}),". There are several fields that make up the struct but for the purpose of this tutorial, we'll only be concerned with the ",(0,i.jsx)(n.code,{children:"owner_by_id"})," field. This keeps track of the owner for any given token."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"pub struct NonFungibleToken {\n    // owner of contract\n    pub owner_id: AccountId,\n\n    // keeps track of the owner for any given token ID.\n    pub owner_by_id: TreeMap<TokenId, AccountId>,\n\n    ...\n}\n"})}),"\n",(0,i.jsx)(n.p,{children:"Now that we've explored behind the scenes and where the data is being kept, let's move to the minting functionality."}),"\n",(0,i.jsx)(n.h4,{id:"minting",children:"Minting"}),"\n",(0,i.jsxs)(n.p,{children:["In order for a token to be minted you will need to call the ",(0,i.jsx)(n.code,{children:"nft_mint"})," function. There are three arguments that are passed to this function:"]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"token_id"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"receiver_id"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.code,{children:"token_metadata"})}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This function executes ",(0,i.jsx)(n.code,{children:"self.tokens.mint"})," which calls the mint function in the ",(0,i.jsx)(n.a,{href:"https://github.com/near/near-sdk-rs/blob/master/near-contract-standards/src/non_fungible_token/core/core_impl.rs",children:"core standards"})," creating a record of the token with the owner being ",(0,i.jsx)(n.code,{children:"receiver_id"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"#[payable]\npub fn nft_mint(\n    &mut self,\n    token_id: TokenId,\n    receiver_id: ValidAccountId,\n    token_metadata: TokenMetadata,\n) -> Token {\n    self.tokens.mint(token_id, receiver_id, Some(token_metadata))\n}\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This creates that record by inserting the token into the ",(0,i.jsx)(n.code,{children:"owner_by_id"})," data structure that we mentioned in the previous section."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-rust",children:"self.owner_by_id.insert(&token_id, &owner_id);\n"})}),"\n",(0,i.jsx)(n.h3,{id:"building-the-contract",children:"Building the contract"}),"\n",(0,i.jsxs)(n.p,{children:["To build your contract run the following command in your terminal which builds your contract using Rust's ",(0,i.jsx)(n.code,{children:"cargo"}),"."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"./scripts/build.sh\n"})}),"\n",(0,i.jsxs)(n.p,{children:["This will generate WASM binaries into your ",(0,i.jsx)(n.code,{children:"res/"})," directory. This WASM file is the smart contract we'll be deploying onto the NEAR blockchain."]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," If you run into errors make sure you have ",(0,i.jsx)(n.a,{href:"/develop/prerequisites",children:"Rust installed"})," and are in the root directory of the NFT example."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"testing-the-contract",children:"Testing the contract"}),"\n",(0,i.jsx)(n.p,{children:"Written in the smart contract there are pre-written tests that you can run. Run the following command in your terminal to perform these simple tests to verify that your contract code is working."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"cargo test -- --nocapture\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," the more complex simulation tests aren't performed with this command but you can find them in ",(0,i.jsx)(n.code,{children:"tests/sim"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"using-the-nft-contract",children:"Using the NFT contract"}),"\n",(0,i.jsxs)(n.p,{children:["Now that you have successfully built and tested the NFT smart contract, you're ready to ",(0,i.jsx)(n.a,{href:"#deploying-the-contract",children:"deploy it"})," and start using it ",(0,i.jsx)(n.a,{href:"#minting-your-nfts",children:"mint your NFTs"}),"."]}),"\n",(0,i.jsx)(n.h3,{id:"deploying-the-contract",children:"Deploying the contract"}),"\n",(0,i.jsx)(n.p,{children:"This smart contract will be deployed to your NEAR account. Because NEAR allows the ability to upgrade contracts on the same account, initialization functions must be cleared."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," If you'd like to run this example on a NEAR account that has had prior contracts deployed, please use the ",(0,i.jsx)(n.code,{children:"near-cli"})," command ",(0,i.jsx)(n.code,{children:"near delete"})," and then recreate it in Wallet. To create (or recreate) an account, please follow the directions in ",(0,i.jsx)(n.a,{href:"https://testnet.mynearwallet.com/",children:"Test Wallet"})," or (",(0,i.jsx)(n.a,{href:"https://wallet.near.org/",children:"NEAR Wallet"})," if we're using ",(0,i.jsx)(n.code,{children:"mainnet"}),")."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Log in to your newly created account with ",(0,i.jsx)(n.code,{children:"near-cli"})," by running the following command in your terminal."]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near login\n"})}),"\n",(0,i.jsxs)(n.p,{children:["To make this tutorial easier to copy/paste, we're going to set an environment variable for your account ID. In the command below, replace ",(0,i.jsx)(n.code,{children:"YOUR_ACCOUNT_NAME"})," with the account name you just logged in with including the ",(0,i.jsx)(n.code,{children:".testnet"})," (or ",(0,i.jsx)(n.code,{children:".near"})," for ",(0,i.jsx)(n.code,{children:"mainnet"}),"):"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"export ID=YOUR_ACCOUNT_NAME\n"})}),"\n",(0,i.jsx)(n.p,{children:"Test that the environment variable is set correctly by running:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"echo $ID\n"})}),"\n",(0,i.jsx)(n.p,{children:"Verify that the correct account ID is printed in the terminal. If everything looks correct you can now deploy your contract. In the root of your NFT project run the following command to deploy your smart contract."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near deploy --wasmFile res/non_fungible_token.wasm --accountId $ID\n"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Example response: "}),(0,i.jsx)("p",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"Starting deployment. Account id: ex-1.testnet, node: https://rpc.testnet.near.org, file: res/non_fungible_token.wasm\nTransaction Id E1AoeTjvuNbDDdNS9SqKfoWiZT95keFrRUmsB65fVZ52\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/E1AoeTjvuNbDDdNS9SqKfoWiZT95keFrRUmsB65fVZ52\nDone deploying to ex-1.testnet\n"})})})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," For ",(0,i.jsx)(n.code,{children:"mainnet"})," you will need to prepend your command with ",(0,i.jsx)(n.code,{children:"NEAR_ENV=mainnet"}),". ",(0,i.jsx)(n.a,{href:"/tools/near-cli#network-selection",children:"See here"})," for more information."]}),"\n"]}),"\n",(0,i.jsx)(n.h3,{id:"minting-your-nfts",children:"Minting your NFTs"}),"\n",(0,i.jsx)(n.p,{children:"A smart contract can define an initialization method that can be used to set the contract's initial state. In our case, we need to initialize the NFT contract before usage. For now, we'll initialize it with the default metadata."}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Note:"})," each account has a data area called ",(0,i.jsx)(n.code,{children:"storage"}),", which is persistent between function calls and transactions. For example, when you initialize a contract, the initial state is saved in the persistent storage."]}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near call $ID new_default_meta '{\"owner_id\": \"'$ID'\"}' --accountId $ID\n"})}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," you can find more info about the NFT metadata at ",(0,i.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"nomicon.io"}),"."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["You can then view the metadata by running the following ",(0,i.jsx)(n.code,{children:"view"})," call:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near view $ID nft_metadata\n"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Example response: "}),(0,i.jsx)("p",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "spec": "nft-1.0.0",\n  "name": "Example NEAR non-fungible token",\n  "symbol": "EXAMPLE",\n  "icon": "data:image/svg+xml,%3Csvg xmlns=\'http://www.w3.org/2000/svg\' viewBox=\'0 0 288 288\'%3E%3Cg id=\'l\' data-name=\'l\'%3E%3Cpath d=\'M187.58,79.81l-30.1,44.69a3.2,3.2,0,0,0,4.75,4.2L191.86,103a1.2,1.2,0,0,1,2,.91v80.46a1.2,1.2,0,0,1-2.12.77L102.18,77.93A15.35,15.35,0,0,0,90.47,72.5H87.34A15.34,15.34,0,0,0,72,87.84V201.16A15.34,15.34,0,0,0,87.34,216.5h0a15.35,15.35,0,0,0,13.08-7.31l30.1-44.69a3.2,3.2,0,0,0-4.75-4.2L96.14,186a1.2,1.2,0,0,1-2-.91V104.61a1.2,1.2,0,0,1,2.12-.77l89.55,107.23a15.35,15.35,0,0,0,11.71,5.43h3.13A15.34,15.34,0,0,0,216,201.16V87.84A15.34,15.34,0,0,0,200.66,72.5h0A15.35,15.35,0,0,0,187.58,79.81Z\'/%3E%3C/g%3E%3C/svg%3E",\n  "base_uri": null,\n  "reference": null,\n  "reference_hash": null\n}\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["Now let's mint our first token! The following command will mint one copy of your NFT. Replace the ",(0,i.jsx)(n.code,{children:"media"})," url with the one you ",(0,i.jsx)(n.a,{href:"#uploading-the-image",children:"uploaded to IPFS"})," earlier:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'near call $ID nft_mint \'{"token_id": "0", "receiver_id": "\'$ID\'", "token_metadata": { "title": "Some Art", "description": "My NFT media", "media": "https://bafkreiabag3ztnhe5pg7js4bj6sxuvkz3sdf76cjvcuqjoidvnfjz7vwrq.ipfs.dweb.link/", "copies": 1}}\' --accountId $ID --deposit 0.1\n'})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Example response: "}),(0,i.jsx)("p",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "token_id": "0",\n  "owner_id": "dev-xxxxxx-xxxxxxx",\n  "metadata": {\n    "title": "Some Art",\n    "description": "My NFT media",\n    "media": "https://bafkreiabag3ztnhe5pg7js4bj6sxuvkz3sdf76cjvcuqjoidvnfjz7vwrq.ipfs.dweb.link/",\n    "media_hash": null,\n    "copies": 1,\n    "issued_at": null,\n    "expires_at": null,\n    "starts_at": null,\n    "updated_at": null,\n    "extra": null,\n    "reference": null,\n    "reference_hash": null\n  },\n  "approved_account_ids": {}\n}\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["To view tokens owned by an account you can call the NFT contract with the following ",(0,i.jsx)(n.code,{children:"near-cli"})," command:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"near view $ID nft_tokens_for_owner '{\"account_id\": \"'$ID'\"}'\n"})}),"\n",(0,i.jsxs)(s,{children:[(0,i.jsx)("summary",{children:"Example response: "}),(0,i.jsx)("p",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "token_id": "0",\n    "owner_id": "dev-xxxxxx-xxxxxxx",\n    "metadata": {\n      "title": "Some Art",\n      "description": "My NFT media",\n      "media": "https://bafkreiabag3ztnhe5pg7js4bj6sxuvkz3sdf76cjvcuqjoidvnfjz7vwrq.ipfs.dweb.link/",\n      "media_hash": null,\n      "copies": 1,\n      "issued_at": null,\n      "expires_at": null,\n      "starts_at": null,\n      "updated_at": null,\n      "extra": null,\n      "reference": null,\n      "reference_hash": null\n    },\n    "approved_account_ids": {}\n  }\n]\n'})})})]}),"\n",(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)("br",{}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:"Tip:"})," after you mint your first non-fungible token, you can ",(0,i.jsx)(n.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"view it in your Wallet"}),":"]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Wallet with token",src:t(45040).Z+"",width:"1670",height:"1174"})}),"\n",(0,i.jsx)("br",{}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Congratulations! You just minted your first NFT token on the NEAR blockchain!"})})," \ud83c\udf89"]}),"\n",(0,i.jsx)(n.h2,{id:"final-remarks",children:"Final remarks"}),"\n",(0,i.jsx)(n.p,{children:"This basic example illustrates all the required steps to deploy an NFT smart contract, store media files on IPFS, and start minting your own non-fungible tokens."}),"\n",(0,i.jsxs)(n.p,{children:["Now that you're familiar with the process, you can check out our ",(0,i.jsx)(n.a,{href:"https://examples.near.org/NFT",children:"NFT Example"})," and learn more about the smart contract code and how you can transfer minted tokens to other accounts. Finally, if you are new to Rust and want to dive into smart contract development, our ",(0,i.jsx)(n.a,{href:"/develop/quickstart-guide",children:"Quick-start guide"})," is a great place to start."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.em,{children:"Happy minting!"})})," \ud83e\ude99"]}),"\n",(0,i.jsx)(n.h2,{id:"blockcraft---a-practical-extension",children:"Blockcraft - a Practical Extension"}),"\n",(0,i.jsxs)(n.p,{children:["If you'd like to learn how to use Minecraft to mint NFTs and copy/paste builds across different worlds while storing all your data on-chain, be sure to check out our ",(0,i.jsx)(n.a,{href:"/tutorials/nfts/minecraft-nfts",children:"Minecraft tutorial"})]}),"\n",(0,i.jsx)(n.h2,{id:"versioning-for-this-article",children:"Versioning for this article"}),"\n",(0,i.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["cargo: ",(0,i.jsx)(n.code,{children:"cargo 1.54.0 (5ae8d74b3 2021-06-22)"})]}),"\n",(0,i.jsxs)(n.li,{children:["rustc: ",(0,i.jsx)(n.code,{children:"rustc 1.54.0 (a178d0322 2021-07-26)"})]}),"\n",(0,i.jsxs)(n.li,{children:["near-cli: ",(0,i.jsx)(n.code,{children:"2.1.1"})]}),"\n"]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},31315:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/nft-storage-4a42a724bcd3e29196d2f6320aa8d6a3.png"},45040:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/nft-wallet-token-33fe7fef18505463df1083200529c6be.png"},98047:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/nft-wallet-589fe036ad45cc49d775f43514d7fe75.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>o});var i=t(67294);const r={},s=i.createContext(r);function o(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:o(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);