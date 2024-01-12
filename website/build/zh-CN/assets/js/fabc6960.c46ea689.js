"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8280],{62810:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>r,toc:()=>c});var o=n(85893),i=n(11151);const a={id:"minting",title:"Minting",sidebar_label:"Minting"},s=void 0,r={id:"tutorials/nfts/minting",title:"Minting",description:"This is the first of many tutorials in a series where you'll be creating a complete NFT smart contract from scratch that conforms with all the NEAR NFT standards. Today you'll learn how to create the logic needed to mint NFTs and have them show up in your NEAR wallet. You will be modifying a bare-bones skeleton smart contract by filling in the necessary code snippets needed to add minting functionalities.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/2-minting.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/minting",permalink:"/zh-CN/tutorials/nfts/minting",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/2-minting.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",sidebarPosition:2,frontMatter:{id:"minting",title:"Minting",sidebar_label:"Minting"},sidebar:"contracts",previous:{title:"Contract Architecture",permalink:"/zh-CN/tutorials/nfts/skeleton"},next:{title:"Upgrade a Contract",permalink:"/zh-CN/tutorials/nfts/upgrade-contract"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Modifications to the skeleton contract",id:"what-does-minting-mean",level:2},{value:"Storing information on the contract",id:"storing-information",level:3},{value:"Contract Struct",id:"contract-struct",level:4},{value:"Initialization Functions",id:"initialization-functions",level:4},{value:"Metadata and token information",id:"metadata-and-token-info",level:3},{value:"Function for querying contract metadata",id:"function-for-querying-contract-metadata",level:4},{value:"Minting Logic",id:"minting-logic",level:3},{value:"Storage Implications",id:"storage-implications",level:4},{value:"Querying for token information",id:"querying-for-token-information",level:3},{value:"Interacting with the contract on-chain",id:"interacting-with-the-contract-on-chain",level:2},{value:"Deploying the contract",id:"deploy-the-contract",level:3},{value:"Initializing the contract",id:"initialize-contract",level:3},{value:"Viewing the contract&#39;s metadata",id:"viewing-the-contracts-metadata",level:3},{value:"Minting our first NFT",id:"minting-our-first-nft",level:3},{value:"Viewing information about the NFT",id:"viewing-information-about-the-nft",level:3},{value:"Viewing your NFTs in the wallet",id:"viewing-your-nfts-in-the-wallet",level:2},{value:"Conclusion",id:"conclusion",level:2},{value:"Next Steps",id:"next-steps",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components},{Details:a}=t;return a||function(e,t){throw new Error("Expected "+(t?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,o.jsxs)(o.Fragment,{children:[(0,o.jsxs)(t.p,{children:["This is the first of many tutorials in a series where you'll be creating a complete NFT smart contract from scratch that conforms with all the NEAR ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/NonFungibleToken/",children:"NFT standards"}),". Today you'll learn how to create the logic needed to mint NFTs and have them show up in your NEAR wallet. You will be modifying a bare-bones ",(0,o.jsx)(t.a,{href:"/tutorials/nfts/skeleton",children:"skeleton smart contract"})," by filling in the necessary code snippets needed to add minting functionalities."]}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["To get started, switch to the ",(0,o.jsx)(t.code,{children:"1.skeleton"})," branch in our repo. If you haven't cloned the repository, refer to the ",(0,o.jsx)(t.a,{href:"/tutorials/nfts/skeleton",children:"Contract Architecture"})," to get started."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"git checkout 1.skeleton\n"})}),"\n",(0,o.jsxs)(t.p,{children:["If you wish to see the finished code for the minting portion of the tutorial, that can be found on the ",(0,o.jsx)(t.code,{children:"2.minting"})," branch."]}),"\n",(0,o.jsx)(t.h2,{id:"what-does-minting-mean",children:"Modifications to the skeleton contract"}),"\n",(0,o.jsx)(t.p,{children:"In order to implement the logic needed for minting, we should break it up into smaller tasks and handle those one-by-one. Let's step back and think about the best way to do this by asking ourselves a simple question: what does it mean to mint an NFT?"}),"\n",(0,o.jsx)(t.p,{children:"To mint a non-fungible token, in the most simple way possible, a contract needs to be able to associate a token with an owner on the blockchain. This means you'll need:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsx)(t.li,{children:"A way to keep track of tokens and other information on the contract."}),"\n",(0,o.jsxs)(t.li,{children:["A way to store information for each token such as ",(0,o.jsx)(t.code,{children:"metadata"})," (more on that later)."]}),"\n",(0,o.jsx)(t.li,{children:"A way to link a token with an owner."}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"That's it! We've now broken down the larger problem into some smaller, less daunting, subtasks. Let's start by tackling the first and work our way through the rest."}),"\n",(0,o.jsx)(t.h3,{id:"storing-information",children:"Storing information on the contract"}),"\n",(0,o.jsxs)(t.p,{children:["Start by navigating to ",(0,o.jsx)(t.code,{children:"nft-contract/src/lib.rs"})," and filling in some of the code blocks. You need to be able to store important information on the contract such as the list of tokens that an account has."]}),"\n",(0,o.jsx)(t.h4,{id:"contract-struct",children:"Contract Struct"}),"\n",(0,o.jsxs)(t.p,{children:["The first thing to do is modifying the contract ",(0,o.jsx)(t.code,{children:"struct"})," as follows:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/2.minting/nft-contract/src/lib.rs#L25-L42\n"})}),"\n",(0,o.jsx)(t.p,{children:"This allows you to get the information stored in these data structures from anywhere in the contract. The code above has created 3 token specific storages:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"tokens_per_owner"}),": allows you to keep track of the tokens owned by any account"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"tokens_by_id"}),": returns all the information about a specific token"]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"token_metadata_by_id"}),": returns just the metadata for a specific token"]}),"\n"]}),"\n",(0,o.jsx)(t.p,{children:"In addition, you'll keep track of the owner of the contract as well as the metadata for the contract."}),"\n",(0,o.jsx)(t.p,{children:"You might be confused as to some of the types that are being used. In order to make the code more readable, we've introduced custom data types which we'll briefly outline below:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"AccountId"}),": a string that ensures there are no special or unsupported characters."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"TokenId"}),": simply a string."]}),"\n"]}),"\n",(0,o.jsxs)(t.p,{children:["As for the ",(0,o.jsx)(t.code,{children:"Token"}),", ",(0,o.jsx)(t.code,{children:"TokenMetadata"}),", and ",(0,o.jsx)(t.code,{children:"NFTContractMetadata"})," data types, those are structs that we'll define later in this tutorial."]}),"\n",(0,o.jsx)(t.h4,{id:"initialization-functions",children:"Initialization Functions"}),"\n",(0,o.jsxs)(t.p,{children:["Next, create what's called an initialization function; you can name it ",(0,o.jsx)(t.code,{children:"new"}),". This function needs to be invoked when you first deploy the contract. It will initialize all the contract's fields that you've defined above with default values. Don't forget to add the ",(0,o.jsx)(t.code,{children:"owner_id"})," and ",(0,o.jsx)(t.code,{children:"metadata"})," fields as parameters to the function, so only those can be customized."]}),"\n",(0,o.jsxs)(t.p,{children:["This function will default all the collections to be empty and set the ",(0,o.jsx)(t.code,{children:"owner"})," and ",(0,o.jsx)(t.code,{children:"metadata"})," equal to what you pass in."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/tree/2.minting/nft-contract/src/lib.rs#L86-L106\n"})}),"\n",(0,o.jsxs)(t.p,{children:["More often than not when doing development, you'll need to deploy contracts several times. You can imagine that it might get tedious to have to pass in metadata every single time you want to initialize the contract. For this reason, let's create a function that can initialize the contract with a set of default ",(0,o.jsx)(t.code,{children:"metadata"}),". You can call it ",(0,o.jsx)(t.code,{children:"new_default_meta"})," and it'll only take the ",(0,o.jsx)(t.code,{children:"owner_id"})," as a parameter."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/2.minting/nft-contract/src/lib.rs#L64-L79\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This function is simply calling the previous ",(0,o.jsx)(t.code,{children:"new"})," function and passing in the owner that you specify and also passes in some default metadata."]}),"\n",(0,o.jsx)(t.h3,{id:"metadata-and-token-info",children:"Metadata and token information"}),"\n",(0,o.jsxs)(t.p,{children:["Now that you've defined what information to store on the contract itself and you've defined some ways to initialize the contract, you need to define what information should go in the ",(0,o.jsx)(t.code,{children:"Token"}),", ",(0,o.jsx)(t.code,{children:"TokenMetadata"}),", and ",(0,o.jsx)(t.code,{children:"NFTContractMetadata"})," data types."]}),"\n",(0,o.jsxs)(t.p,{children:["Let's switch over to the ",(0,o.jsx)(t.code,{children:"nft-contract/src/metadata.rs"})," file as this is where that information will go. If you look at the ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"standards for metadata"}),", you'll find all the necessary information that you need to store for both ",(0,o.jsx)(t.code,{children:"TokenMetadata"})," and ",(0,o.jsx)(t.code,{children:"NFTContractMetadata"}),". Simply fill in the following code."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/2.minting/nft-contract/src/metadata.rs#L10-L37\n"})}),"\n",(0,o.jsxs)(t.p,{children:["This now leaves you with the ",(0,o.jsx)(t.code,{children:"Token"})," struct and something called a ",(0,o.jsx)(t.code,{children:"JsonToken"}),". The ",(0,o.jsx)(t.code,{children:"Token"})," struct will hold all the information directly related to the token excluding the metadata. The metadata, if you remember, is stored in a map on the contract in a data structure called ",(0,o.jsx)(t.code,{children:"token_metadata_by_id"}),". This allows you to quickly get the metadata for any token by simply passing in the token's ID."]}),"\n",(0,o.jsxs)(t.p,{children:["For the ",(0,o.jsx)(t.code,{children:"Token"})," struct, you'll just keep track of the owner for now."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/2.minting/nft-contract/src/metadata.rs#L39-L43\n"})}),"\n",(0,o.jsxs)(t.p,{children:["The purpose of the ",(0,o.jsx)(t.code,{children:"JsonToken"})," is to hold all the information for an NFT that you want to send back as JSON whenever someone does a view call. This means you'll want to store the owner, token ID, and metadata."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/2.minting/nft-contract/src/metadata.rs#L45-L55\n"})}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["Some of you might be thinking ",(0,o.jsxs)(t.em,{children:["\"how come we don't just store all the information in the ",(0,o.jsx)(t.code,{children:"Token"}),' struct?"']}),". The reason behind this is that it's actually more efficient to construct the JSON token on the fly only when you need it rather than storing all the information in the token struct. In addition, some operations might only need the metadata for a token and so having the metadata in a separate data structure is more optimal. :::"]}),(0,o.jsx)(t.h4,{id:"function-for-querying-contract-metadata",children:"Function for querying contract metadata"}),(0,o.jsxs)(t.p,{children:["Now that you've defined some of the types that were used in the previous section, let's move on and create the first view function ",(0,o.jsx)(t.code,{children:"nft_metadata"}),". This will allow users to query for the contract's metadata as per the ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"metadata standard"}),"."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/2.minting/nft-contract/src/metadata.rs#L57-L67\n"})}),(0,o.jsxs)(t.p,{children:["This function will get the ",(0,o.jsx)(t.code,{children:"metadata"})," object from the contract which is of type ",(0,o.jsx)(t.code,{children:"NFTContractMetadata"})," and will return it."]}),(0,o.jsx)(t.p,{children:"Just like that, you've completed the first two tasks and are ready to move onto last part of the tutorial."}),(0,o.jsx)(t.h3,{id:"minting-logic",children:"Minting Logic"}),(0,o.jsxs)(t.p,{children:["Now that all the information and types are defined, let's start brainstorming how the minting logic will play out. In the end, you need to link a ",(0,o.jsx)(t.code,{children:"Token"})," and ",(0,o.jsx)(t.code,{children:"TokenId"})," to a specific owner. Let's look back at the ",(0,o.jsx)(t.code,{children:"lib.rs"})," file to see how you can accomplish this. There are a couple data structures that might be useful:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",children:"//keeps track of all the token IDs for a given account\npub tokens_per_owner: LookupMap<AccountId, UnorderedSet<TokenId>>,\n\n//keeps track of the token struct for a given token ID\npub tokens_by_id: LookupMap<TokenId, Token>,\n\n//keeps track of the token metadata for a given token ID\npub token_metadata_by_id: UnorderedMap<TokenId, TokenMetadata>,\n"})}),(0,o.jsx)(t.p,{children:"Looking at these data structures, you could do the following:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["Add the token ID into the set of tokens that the receiver owns. This will be done on the ",(0,o.jsx)(t.code,{children:"tokens_per_owner"})," field."]}),"\n",(0,o.jsxs)(t.li,{children:["Create a token object and map the token ID to that token object in the ",(0,o.jsx)(t.code,{children:"tokens_by_id"})," field."]}),"\n",(0,o.jsxs)(t.li,{children:["Map the token ID to it's metadata using the ",(0,o.jsx)(t.code,{children:"token_metadata_by_id"}),"."]}),"\n"]}),(0,o.jsx)(t.h4,{id:"storage-implications",children:"Storage Implications"}),(0,o.jsx)(t.p,{children:"With those steps outlined, it's important to take into consideration the storage costs of minting NFTs. Since you're adding bytes to the contract by creating entries in the data structures, the contract needs to cover the storage costs. If you just made it so any user could go and mint an NFT for free, that system could easily be abused and users could essentially \"drain\" the contract of all it's funds by minting thousands of NFTs. For this reason, you'll make it so that users need to attach a deposit to the call to cover the cost of storage. You'll measure the initial storage usage before anything was added and you'll measure the final storage usage after all the logic is finished. Then you'll make sure that the user has attached enough $NEAR to cover that cost and refund them if they've attached too much."}),(0,o.jsx)(t.p,{children:"Now that you've got a good understanding of how everything should play out, let's fill in the necessary code."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/2.minting/nft-contract/src/mint.rs#L3-L45\n"})}),(0,o.jsxs)(t.p,{children:["You'll notice that we're using some internal methods such as ",(0,o.jsx)(t.code,{children:"refund_deposit"})," and ",(0,o.jsx)(t.code,{children:"internal_add_token_to_owner"}),". We've described the function of ",(0,o.jsx)(t.code,{children:"refund_deposit"})," and as for ",(0,o.jsx)(t.code,{children:"internal_add_token_to_owner"}),", this will add a token to the set of tokens an account owns for the contract's ",(0,o.jsx)(t.code,{children:"tokens_per_owner"})," data structure. You can create these functions in a file called ",(0,o.jsx)(t.code,{children:"internal.rs"}),". Go ahead and create the file. Your new contract architecture should look as follows:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{children:"nft-contract\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 build.sh\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 approval.rs\n    \u251c\u2500\u2500 enumeration.rs\n    \u251c\u2500\u2500 internal.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 metadata.rs\n    \u251c\u2500\u2500 mint.rs\n    \u251c\u2500\u2500 nft_core.rs\n    \u2514\u2500\u2500 royalty.rs\n"})}),(0,o.jsxs)(t.p,{children:["Add the following to your newly created ",(0,o.jsx)(t.code,{children:"internal.rs"})," file."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/2.minting/nft-contract/src/internal.rs#L1-L63\n"})}),(0,o.jsxs)(t.p,{children:["Let's now quickly move to the ",(0,o.jsx)(t.code,{children:"lib.rs"})," file and make the functions we just created invokable in other files. We'll add the internal crates and mod the file as shown below:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/2.minting/nft-contract/src/lib.rs#L10-L23\n"})}),(0,o.jsxs)(t.p,{children:["At this point, the core logic is all in place so that you can mint NFTs. You can use the function ",(0,o.jsx)(t.code,{children:"nft_mint"})," which takes the following parameters:"]}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"token_id"}),": the ID of the token you're minting (as a string)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"metadata"}),": the metadata for the token that you're minting (of type ",(0,o.jsx)(t.code,{children:"TokenMetadata"})," which is found in the ",(0,o.jsx)(t.code,{children:"metadata.rs"})," file)."]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"receiver_id"}),": specifies who the owner of the token will be."]}),"\n"]}),(0,o.jsx)(t.p,{children:"Behind the scenes, the function will:"}),(0,o.jsxs)(t.ol,{children:["\n",(0,o.jsx)(t.li,{children:"Calculate the initial storage before adding anything to the contract"}),"\n",(0,o.jsxs)(t.li,{children:["Create a ",(0,o.jsx)(t.code,{children:"Token"})," object with the owner ID"]}),"\n",(0,o.jsxs)(t.li,{children:["Link the token ID to the newly created token object by inserting them into the ",(0,o.jsx)(t.code,{children:"tokens_by_id"})," field."]}),"\n",(0,o.jsxs)(t.li,{children:["Link the token ID to the passed in metadata by inserting them into the ",(0,o.jsx)(t.code,{children:"token_metadata_by_id"})," field."]}),"\n",(0,o.jsxs)(t.li,{children:["Add the token ID to the list of tokens that the owner owns by calling the ",(0,o.jsx)(t.code,{children:"internal_add_token_to_owner"})," function."]}),"\n",(0,o.jsx)(t.li,{children:"Calculate the final and net storage to make sure that the user has attached enough NEAR to the call in order to cover those costs."}),"\n"]}),(0,o.jsx)(t.h3,{id:"querying-for-token-information",children:"Querying for token information"}),(0,o.jsxs)(t.p,{children:["If you were to go ahead and deploy this contract, initialize it, and mint an NFT, you would have no way of knowing or querying for the information about the token you just minted. Let's quickly add a way to query for the information of a specific NFT. You'll move to the ",(0,o.jsx)(t.code,{children:"nft-contract/src/nft_core.rs"})," file and edit the ",(0,o.jsx)(t.code,{children:"nft_token"})," function."]}),(0,o.jsxs)(t.p,{children:["It will take a token ID as a parameter and return the information for that token. The ",(0,o.jsx)(t.code,{children:"JsonToken"})," contains the token ID, the owner ID, and the token's metadata."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/2.minting/nft-contract/src/nft_core.rs#L89-L104\n"})}),(0,o.jsx)(t.p,{children:"With that finished, it's finally time to build and deploy the contract so you can mint your first NFT."}),(0,o.jsx)(t.h2,{id:"interacting-with-the-contract-on-chain",children:"Interacting with the contract on-chain"}),(0,o.jsx)(t.p,{children:"Now that the logic for minting is complete and you've added a way to query for information about specific tokens, it's time to build and deploy your contract to the blockchain."}),(0,o.jsx)(t.h3,{id:"deploy-the-contract",children:"Deploying the contract"}),(0,o.jsxs)(t.p,{children:["We've included a very simple way to build the smart contracts throughout this tutorial using ",(0,o.jsx)(t.code,{children:"yarn"}),". The following command will build the contract and copy over the ",(0,o.jsx)(t.code,{children:".wasm"})," file to a folder ",(0,o.jsx)(t.code,{children:"out/main.wasm"}),". This uses a build script which can be found in the ",(0,o.jsx)(t.code,{children:"nft-contract/build.sh"})," file."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"yarn build\n"})}),(0,o.jsxs)(t.p,{children:["There will be a list of warnings on your console, but as the tutorial progresses, these warnings will go away. You should now see the folder ",(0,o.jsx)(t.code,{children:"out/"})," with the file ",(0,o.jsx)(t.code,{children:"main.wasm"})," inside. This is what we will be deploying to the blockchain."]}),(0,o.jsxs)(t.p,{children:["For deployment, you will need a NEAR account with the keys stored on your local machine. Navigate to the ",(0,o.jsx)(t.a,{href:"https://testnet.mynearwallet.com//",children:"NEAR wallet"})," site and create an account."]}),(0,o.jsx)(t.admonition,{type:"info",children:(0,o.jsx)(t.p,{children:"Please ensure that you deploy the contract to an account with no pre-existing contracts. It's easiest to simply create a new account or create a sub-account for this tutorial."})})]}),"\n",(0,o.jsxs)(t.p,{children:["Log in to your newly created account with ",(0,o.jsx)(t.code,{children:"near-cli"})," by running the following command in your terminal."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"near login\n"})}),"\n",(0,o.jsxs)(t.p,{children:["To make this tutorial easier to copy/paste, we're going to set an environment variable for your account ID. In the command below, replace ",(0,o.jsx)(t.code,{children:"YOUR_ACCOUNT_NAME"})," with the account name you just logged in with including the ",(0,o.jsx)(t.code,{children:".testnet"})," portion:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'export NFT_CONTRACT_ID="YOUR_ACCOUNT_NAME"\n'})}),"\n",(0,o.jsx)(t.p,{children:"Test that the environment variable is set correctly by running:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"echo $NFT_CONTRACT_ID\n"})}),"\n",(0,o.jsx)(t.p,{children:"Verify that the correct account ID is printed in the terminal. If everything looks correct you can now deploy your contract. In the root of your NFT project run the following command to deploy your smart contract."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"near deploy --wasmFile out/main.wasm --accountId $NFT_CONTRACT_ID\n"})}),"\n",(0,o.jsx)(t.p,{children:"At this point, the contract should have been deployed to your account and you're ready to move onto testing and minting NFTs."}),"\n",(0,o.jsx)(t.h3,{id:"initialize-contract",children:"Initializing the contract"}),"\n",(0,o.jsx)(t.p,{children:"The very first thing you need to do once the contract has been deployed is to initialize it. For simplicity, let's call the default metadata initialization function you wrote earlier so that you don't have to type the metadata manually in the CLI."}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"near call $NFT_CONTRACT_ID new_default_meta '{\"owner_id\": \"'$NFT_CONTRACT_ID'\"}' --accountId $NFT_CONTRACT_ID\n"})}),"\n",(0,o.jsx)(t.p,{children:"You've just initialized the contract with some default metadata and set your account ID as the owner. At this point, you're ready to call your first view function."}),"\n",(0,o.jsx)(t.h3,{id:"viewing-the-contracts-metadata",children:"Viewing the contract's metadata"}),"\n",(0,o.jsx)(t.p,{children:"Now that the contract has been initialized, you can call some of the functions you wrote earlier. More specifically, let's test out the function that returns the contract's metadata:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"near view $NFT_CONTRACT_ID nft_metadata\n"})}),"\n",(0,o.jsx)(t.p,{children:"This should return an output similar to the following:"}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"{\n  spec: 'nft-1.0.0',\n  name: 'NFT Tutorial Contract',\n  symbol: 'GOTEAM',\n  icon: null,\n  base_uri: null,\n  reference: null,\n  reference_hash: null\n}\n"})}),"\n",(0,o.jsx)(t.p,{children:"At this point, you're ready to move on and mint your first NFT."}),"\n",(0,o.jsx)(t.h3,{id:"minting-our-first-nft",children:"Minting our first NFT"}),"\n",(0,o.jsxs)(t.p,{children:["Let's now call the minting function that you've created. This requires a ",(0,o.jsx)(t.code,{children:"token_id"})," and ",(0,o.jsx)(t.code,{children:"metadata"}),". If you look back at the ",(0,o.jsx)(t.code,{children:"TokenMetadata"})," struct you created earlier, there are many fields that could potentially be stored on-chain:"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/2.minting/nft-contract/src/metadata.rs#L24-L37\n"})}),"\n",(0,o.jsx)(t.p,{children:"Let's mint an NFT with a title, description, and media to start. The media field can be any URL pointing to a media file. We've got an excellent GIF to mint but if you'd like to mint a custom NFT, simply replace our media link with one of your choosing. If you run the following command, it will mint an NFT with the following parameters:"}),"\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"token_id"}),': "token-1"']}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"metadata"}),":","\n",(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.em,{children:"title"}),': "My Non Fungible Team Token"']}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.em,{children:"description"}),': "The Team Most Certainly Goes :)"']}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.em,{children:"media"}),": ",(0,o.jsx)(t.code,{children:"https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"})]}),"\n",(0,o.jsxs)(t.li,{children:[(0,o.jsx)(t.strong,{children:"receiver_id"}),": \"'$NFT_CONTRACT_ID'\""]}),"\n"]}),"\n"]}),"\n"]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'near call $NFT_CONTRACT_ID nft_mint \'{"token_id": "token-1", "metadata": {"title": "My Non Fungible Team Token", "description": "The Team Most Certainly Goes :)", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$NFT_CONTRACT_ID\'"}\' --accountId $NFT_CONTRACT_ID --amount 0.1\n'})}),"\n",(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["The ",(0,o.jsx)(t.code,{children:"amount"})," flag is specifying how much NEAR to attach to the call. Since you need to pay for storage, 0.1 NEAR is attached and you'll get refunded any excess that is unused at the end. :::"]}),(0,o.jsx)(t.h3,{id:"viewing-information-about-the-nft",children:"Viewing information about the NFT"}),(0,o.jsxs)(t.p,{children:["Now that the NFT has been minted, you can check and see if everything went correctly by calling the ",(0,o.jsx)(t.code,{children:"nft_token"})," function. This should return a ",(0,o.jsx)(t.code,{children:"JsonToken"})," which should contain the ",(0,o.jsx)(t.code,{children:"token_id"}),", ",(0,o.jsx)(t.code,{children:"owner_id"}),", and ",(0,o.jsx)(t.code,{children:"metadata"}),"."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_token \'{"token_id": "token-1"}\'\n'})}),(0,o.jsxs)(a,{children:[(0,o.jsx)("summary",{children:"Example response: "}),(0,o.jsx)("p",{children:(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"{\n  token_id: 'token-1',\n  owner_id: 'goteam.examples.testnet',\n  metadata: {\n    title: 'My Non Fungible Team Token',\n    description: 'The Team Most Certainly Goes :)',\n    media: 'https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif',\n    media_hash: null,\n    copies: null,\n    issued_at: null,\n    expires_at: null,\n    starts_at: null,\n    updated_at: null,\n    extra: null,\n    reference: null,\n    reference_hash: null\n  }\n}\n"})})})]}),(0,o.jsxs)(t.p,{children:[(0,o.jsx)(t.strong,{children:"Go team!"})," You've now verified that everything works correctly and it's time to view your freshly minted NFT in the NEAR wallet's collectibles tab!"]}),(0,o.jsx)(t.h2,{id:"viewing-your-nfts-in-the-wallet",children:"Viewing your NFTs in the wallet"}),(0,o.jsxs)(t.p,{children:["If you navigate to the ",(0,o.jsx)(t.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"collectibles tab"})," in the NEAR wallet, this should list all the NFTs that you own. It should look something like the what's below."]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.img,{alt:"empty-nft-in-wallet",src:n(29595).Z+"",width:"645",height:"271"})}),(0,o.jsxs)(t.p,{children:["We've got a problem. The wallet correctly picked up that you minted an NFT, however, the contract doesn't implement the specific view function that is being called. Behind the scenes, the wallet is trying to call ",(0,o.jsx)(t.code,{children:"nft_tokens_for_owner"})," to get a list of all the NFTs owned by your account on the contract. The only function you've created, however, is the ",(0,o.jsx)(t.code,{children:"nft_token"})," function. It wouldn't be very efficient for the wallet to call ",(0,o.jsx)(t.code,{children:"nft_token"})," for every single NFT that a user has to get information and so they try to call the ",(0,o.jsx)(t.code,{children:"nft_tokens_for_owner"})," function."]}),(0,o.jsx)(t.p,{children:"In the next tutorial, you'll learn about how to deploy a patch fix to a pre-existing contract so that you can view the NFT in the wallet."}),(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),(0,o.jsx)(t.p,{children:"In this tutorial, you went through the basics of setting up and understand the logic behind minting NFTs on the blockchain using a skeleton contract."}),(0,o.jsxs)(t.p,{children:["You first looked at ",(0,o.jsx)(t.a,{href:"#what-does-minting-mean",children:"what it means"})," to mint NFTs and how to break down the problem into more feasible chunks. You then started modifying the skeleton contract chunk by chunk starting with solving the problem of ",(0,o.jsx)(t.a,{href:"#storing-information",children:"storing information / state"})," on the contract. You then looked at what to put in the ",(0,o.jsx)(t.a,{href:"#metadata-and-token-info",children:"metadata and token information"}),". Finally, you looked at the logic necessary for ",(0,o.jsx)(t.a,{href:"#minting-logic",children:"minting NFTs"}),"."]}),(0,o.jsxs)(t.p,{children:["After the contract was written, it was time to deploy to the blockchain. You ",(0,o.jsx)(t.a,{href:"#deploy-the-contract",children:"deployed the contract"})," and ",(0,o.jsx)(t.a,{href:"#initialize-contract",children:"initialized it"}),". Finally, you ",(0,o.jsx)(t.a,{href:"#minting-our-first-nft",children:"minted your very first NFT"})," and saw that some changes are needed before you can view it in the wallet."]}),(0,o.jsx)(t.h2,{id:"next-steps",children:"Next Steps"}),(0,o.jsxs)(t.p,{children:["In the ",(0,o.jsx)(t.a,{href:"/tutorials/nfts/upgrade-contract",children:"next tutorial"}),", you'll find out how to deploy a patch fix and what that means so that you can view your NFTs in the wallet."]}),(0,o.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,o.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["near-cli: ",(0,o.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,o.jsxs)(t.li,{children:["NFT standard: ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,o.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,o.jsxs)(t.li,{children:["Metadata standard: ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"NEP177"}),", version ",(0,o.jsx)(t.code,{children:"2.1.0"})]}),"\n"]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},29595:(e,t,n)=>{n.d(t,{Z:()=>o});const o=n.p+"assets/images/empty-nft-in-wallet-64de1d3cb710bfbc1aad5e863a652b46.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>r,a:()=>s});var o=n(67294);const i={},a=o.createContext(i);function s(e){const t=o.useContext(a);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function r(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:s(e.components),o.createElement(a.Provider,{value:t},e.children)}}}]);