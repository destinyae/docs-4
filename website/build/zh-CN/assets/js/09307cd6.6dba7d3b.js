"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9685],{89037:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>i,metadata:()=>s,toc:()=>c});var o=n(85893),a=n(11151);const i={id:"royalty",title:"Royalty",sidebar_label:"Royalty"},r=void 0,s={id:"tutorials/nfts/js/royalty",title:"Royalty",description:"In this tutorial you'll continue building your non-fungible token (NFT) smart contract, and learn how to implement perpetual royalties into your NFTs. This will allow people to get a percentage of the purchase price when an NFT is sold.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/js/6-royalty.md",sourceDirName:"3.tutorials/nfts/js",slug:"/tutorials/nfts/js/royalty",permalink:"/zh-CN/tutorials/nfts/js/royalty",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/js/6-royalty.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",sidebarPosition:6,frontMatter:{id:"royalty",title:"Royalty",sidebar_label:"Royalty"},sidebar:"contracts",previous:{title:"Approvals",permalink:"/zh-CN/tutorials/nfts/js/approvals"},next:{title:"Events",permalink:"/zh-CN/tutorials/nfts/js/events"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"Thinking about the problem",id:"thinking-about-the-problem",level:2},{value:"Expanding the current solution",id:"expanding-the-current-solution",level:3},{value:"Modifications to the contract",id:"modifications-to-the-contract",level:2},{value:"Internal helper function",id:"internal-helper-function",level:3},{value:"Royalties",id:"royalties",level:3},{value:"Perpetual royalties",id:"perpetual-royalties",level:3},{value:"Adding royalty object to struct implementations",id:"adding-royalty-object-to-struct-implementations",level:3},{value:"Deploying the contract",id:"redeploying-contract",level:2},{value:"Creating a sub-account",id:"creating-a-sub-account",level:3},{value:"Initialization and minting",id:"initialization-and-minting",level:3},{value:"NFT payout",id:"nft-payout",level:3},{value:"Conclusion",id:"conclusion",level:2}];function d(e){const t={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,a.a)(),...e.components};return(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(t.p,{children:"In this tutorial you'll continue building your non-fungible token (NFT) smart contract, and learn how to implement perpetual royalties into your NFTs. This will allow people to get a percentage of the purchase price when an NFT is sold."}),"\n",(0,o.jsx)(t.admonition,{type:"caution",children:(0,o.jsxs)(t.p,{children:["The JS-SDK is currently in ",(0,o.jsx)(t.strong,{children:(0,o.jsx)(t.a,{href:"https://github.com/near/near-sdk-js/releases/",children:(0,o.jsx)(t.code,{children:"Alpha"})})}),"."]})}),"\n",(0,o.jsx)(t.h2,{id:"introduction",children:"Introduction"}),"\n",(0,o.jsxs)(t.p,{children:["By now, you should have a fully fledged NFT contract, except for the royalties support. To get started, either switch to the ",(0,o.jsx)(t.code,{children:"5.approval"})," branch from our ",(0,o.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial-js/",children:"GitHub repository"}),", or continue your work from the previous tutorials."]}),"\n",(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"git checkout 5.approval\n"})}),"\n",(0,o.jsxs)(t.admonition,{type:"tip",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["If you wish to see the finished code for this ",(0,o.jsx)(t.em,{children:"Royalty"})," tutorial, you can find it on the ",(0,o.jsx)(t.code,{children:"6.royalty"})," branch. :::"]}),(0,o.jsx)(t.h2,{id:"thinking-about-the-problem",children:"Thinking about the problem"}),(0,o.jsxs)(t.p,{children:["In order to implement the functionality, you first need to understand how NFTs are sold. In the previous tutorial, you saw how someone with an NFT could list it on a marketplace using the ",(0,o.jsx)(t.code,{children:"nft_approve"})," function by passing in a message that could be properly decoded. When a user purchases your NFT on the marketplace, what happens?"]}),(0,o.jsxs)(t.p,{children:["Using the knowledge you have now, a reasonable conclusion would be to say that the marketplace transfers the NFT to the buyer by performing a cross-contract call and invokes the NFT contract's ",(0,o.jsx)(t.code,{children:"nft_transfer"})," method. Once that function finishes, the marketplace would pay the seller for the correct amount that the buyer paid."]}),(0,o.jsx)(t.p,{children:"Let's now think about how this can be expanded to allow for a cut of the pay going to other accounts that aren't just the seller."}),(0,o.jsx)(t.h3,{id:"expanding-the-current-solution",children:"Expanding the current solution"}),(0,o.jsxs)(t.p,{children:["Since perpetual royalties will be on a per-token basis, it's safe to assume that you should be changing the ",(0,o.jsx)(t.code,{children:"Token"})," and ",(0,o.jsx)(t.code,{children:"JsonToken"})," structs. You need some way of keeping track of what percentage each account with a royalty should have. If you introduce a map of an account to an integer, that should do the trick."]}),(0,o.jsx)(t.p,{children:"Now, you need some way to relay that information to the marketplace. This method should be able to transfer the NFT exactly like the old solution but with the added benefit of telling the marketplace exactly what accounts should be paid what amounts. If you implement a method that transfers the NFT and then calculates exactly what accounts get paid and to what amount based on a passed-in balance, that should work nicely."}),(0,o.jsxs)(t.p,{children:["This is what the ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/NonFungibleToken/Payout",children:"royalty standards"})," outlined. Let's now move on and modify our smart contract to introduce this behavior."]}),(0,o.jsx)(t.h2,{id:"modifications-to-the-contract",children:"Modifications to the contract"}),(0,o.jsxs)(t.p,{children:["The first thing you'll want to do is add the royalty information to the structs. Open the ",(0,o.jsx)(t.code,{children:"nft-contract/src/metadata.ts"})," file and add ",(0,o.jsx)(t.code,{children:"royalty"})," to the ",(0,o.jsx)(t.code,{children:"Token"})," and ",(0,o.jsx)(t.code,{children:"JsonToken"})," structs:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:"royalty: { [accountId: string]: number };\n"})}),(0,o.jsxs)(t.p,{children:["Second, you'll want to add ",(0,o.jsx)(t.code,{children:"royalty"})," to the ",(0,o.jsx)(t.code,{children:"JsonToken"})," struct as well:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/metadata.ts#L106-L166\n"})}),(0,o.jsx)(t.h3,{id:"internal-helper-function",children:"Internal helper function"}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"royaltyToPayout"})}),(0,o.jsxs)(t.p,{children:["To simplify the payout calculation, let's add a helper ",(0,o.jsx)(t.code,{children:"royaltyToPayout"})," function to ",(0,o.jsx)(t.code,{children:"src/internal.ts"}),". This will convert a percentage to the actual amount that should be paid. In order to allow for percentages less than 1%, you can give 100% a value of ",(0,o.jsx)(t.code,{children:"10,000"}),". This means that the minimum percentage you can give out is 0.01%, or ",(0,o.jsx)(t.code,{children:"1"}),". For example, if you wanted the account ",(0,o.jsx)(t.code,{children:"benji.testnet"})," to have a perpetual royalty of 20%, you would insert the pair ",(0,o.jsx)(t.code,{children:'"benji.testnet": 2000'})," into the payout map."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/internal.ts#L13-L16\n"})}),(0,o.jsxs)(t.p,{children:["If you were to use the ",(0,o.jsx)(t.code,{children:"royaltyToPayout"})," function and pass in ",(0,o.jsx)(t.code,{children:"2000"})," as the ",(0,o.jsx)(t.code,{children:"royaltyPercentage"})," and an ",(0,o.jsx)(t.code,{children:"amountToPay"})," of 1 NEAR, it would return a value of 0.2 NEAR."]}),(0,o.jsx)(t.h3,{id:"royalties",children:"Royalties"}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"nft_payout"})}),(0,o.jsxs)(t.p,{children:["Let's now implement a method to check what accounts will be paid out for an NFT given an amount, or balance. Open the ",(0,o.jsx)(t.code,{children:"nft-contract/src/royalty.ts"})," file, and modify the ",(0,o.jsx)(t.code,{children:"internalNftPayout"})," function as shown."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/royalty.ts#L7-L53\n"})}),(0,o.jsxs)(t.p,{children:["This function will loop through the token's royalty map and take the balance and convert that to a payout using the ",(0,o.jsx)(t.code,{children:"royaltyToPayout"})," function you created earlier. It will give the owner of the token whatever is left from the total royalties. As an example:"]}),(0,o.jsx)(t.p,{children:"You have a token with the following royalty field:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'Token {\n    owner_id: "damian",\n    royalty: {\n        "benji": 1000,\n        "josh": 500,\n        "mike": 2000\n    }\n}\n'})}),(0,o.jsxs)(t.p,{children:["If a user were to call ",(0,o.jsx)(t.code,{children:"nft_payout"})," on the token and pass in a balance of 1 NEAR, it would loop through the token's royalty field and insert the following into the payout object:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",children:'Payout {\n    payout: {\n        "benji": 0.1 NEAR,\n        "josh": 0.05 NEAR,\n        "mike": 0.2 NEAR\n    }\n}\n'})}),(0,o.jsxs)(t.p,{children:["At the very end, it will insert ",(0,o.jsx)(t.code,{children:"damian"})," into the payout object and give him ",(0,o.jsx)(t.code,{children:"1 NEAR - 0.1 - 0.05 - 0.2 = 0.65 NEAR"}),"."]}),(0,o.jsx)(t.p,{children:(0,o.jsx)(t.strong,{children:"nft_transfer_payout"})}),(0,o.jsx)(t.p,{children:"Now that you know how payouts are calculated, it's time to create the function that will transfer the NFT and return the payout to the marketplace."}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/royalty.ts#L55-L121\n"})}),(0,o.jsx)(t.h3,{id:"perpetual-royalties",children:"Perpetual royalties"}),(0,o.jsxs)(t.p,{children:["To add support for perpetual royalties, let's edit the ",(0,o.jsx)(t.code,{children:"src/mint.ts"})," file. First, add an optional parameter for perpetual royalties. This is what will determine what percentage goes to which accounts when the NFT is purchased. You will also need to create and insert the royalty to be put in the ",(0,o.jsx)(t.code,{children:"Token"})," object:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/mint.ts#L7-L64\n"})}),(0,o.jsx)(t.h3,{id:"adding-royalty-object-to-struct-implementations",children:"Adding royalty object to struct implementations"}),(0,o.jsxs)(t.p,{children:["Since you've added a new field to your ",(0,o.jsx)(t.code,{children:"Token"})," and ",(0,o.jsx)(t.code,{children:"JsonToken"})," structs, you need to edit your implementations accordingly. Move to the ",(0,o.jsx)(t.code,{children:"nft-contract/src/internal.ts"})," file and edit the part of your ",(0,o.jsx)(t.code,{children:"internalTransfer"})," function that creates the new ",(0,o.jsx)(t.code,{children:"Token"})," object:"]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/internal.ts#L150-L158\n"})}),(0,o.jsxs)(t.p,{children:["Once that's finished, move to the ",(0,o.jsx)(t.code,{children:"nft-contract/src/nft_core.ts"})," file. You need to edit your implementation of ",(0,o.jsx)(t.code,{children:"internalNftToken"})," so that the ",(0,o.jsx)(t.code,{children:"JsonToken"})," sends back the new royalty information."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-js/blob/6.royalty/src/nft-contract/nft_core.ts#L10-L37\n"})}),(0,o.jsxs)(t.p,{children:["Next, you can use the CLI to query the new ",(0,o.jsx)(t.code,{children:"nft_payout"})," function and validate that it works correctly."]}),(0,o.jsx)(t.h2,{id:"redeploying-contract",children:"Deploying the contract"}),(0,o.jsx)(t.p,{children:"As you saw in the previous tutorial, adding changes like these will cause problems when redeploying. Since these changes affect all the other tokens and the state won't be able to automatically be inherited by the new code, simply redeploying the contract will lead to errors. For this reason, you'll create a new sub-account again."}),(0,o.jsx)(t.h3,{id:"creating-a-sub-account",children:"Creating a sub-account"}),(0,o.jsxs)(t.p,{children:["Run the following command to create a sub-account ",(0,o.jsx)(t.code,{children:"royalty"})," of your main account with an initial balance of 25 NEAR which will be transferred from the original to your new account."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"near create-account royalty.$NFT_CONTRACT_ID --masterAccount $NFT_CONTRACT_ID --initialBalance 25\n"})}),(0,o.jsx)(t.p,{children:"Next, you'll want to export an environment variable for ease of development:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"export ROYALTY_NFT_CONTRACT_ID=royalty.$NFT_CONTRACT_ID\n"})}),(0,o.jsx)(t.p,{children:"Using the build script, build the deploy the contract as you did in the previous tutorials:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"yarn build && near deploy --wasmFile build/nft.wasm --accountId $ROYALTY_NFT_CONTRACT_ID\n"})}),(0,o.jsx)(t.h3,{id:"initialization-and-minting",children:"Initialization and minting"}),(0,o.jsx)(t.p,{children:"Since this is a new contract, you'll need to initialize and mint a token. Use the following command to initialize the contract:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"near call $ROYALTY_NFT_CONTRACT_ID init '{\"owner_id\": \"'$ROYALTY_NFT_CONTRACT_ID'\"}' --accountId $ROYALTY_NFT_CONTRACT_ID\n"})}),(0,o.jsxs)(t.p,{children:["Next, you'll need to mint a token. By running this command, you'll mint a token with a token ID ",(0,o.jsx)(t.code,{children:'"royalty-token"'})," and the receiver will be your new account. In addition, you're passing in a map with two accounts that will get perpetual royalties whenever your token is sold."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'near call $ROYALTY_NFT_CONTRACT_ID nft_mint \'{"token_id": "approval-token", "metadata": {"title": "Approval Token", "description": "testing out the new approval extension of the standard", "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"}, "receiver_id": "\'$ROYALTY_NFT_CONTRACT_ID\'", "perpetual_royalties": {"benjiman.testnet": 2000, "mike.testnet": 1000, "josh.testnet": 500}}\' --accountId $ROYALTY_NFT_CONTRACT_ID --amount 0.1\n'})}),(0,o.jsx)(t.p,{children:"You can check to see if everything went through properly by calling one of the enumeration functions:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'near view $ROYALTY_NFT_CONTRACT_ID nft_tokens_for_owner \'{"account_id": "\'$ROYALTY_NFT_CONTRACT_ID\'", "limit": 10}\'\n'})}),(0,o.jsx)(t.p,{children:"This should return an output similar to the following:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-json",children:'[\n  {\n    "token_id": "approval-token",\n    "owner_id": "royalty.goteam.examples.testnet",\n    "metadata": {\n      "title": "Approval Token",\n      "description": "testing out the new approval extension of the standard",\n      "media": "https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif"\n    },\n    "approved_account_ids": {},\n    "royalty": {\n      "josh.testnet": 500,\n      "benjiman.testnet": 2000,\n      "mike.testnet": 1000\n    }\n  }\n]\n'})}),(0,o.jsx)(t.p,{children:"Notice how there's now a royalty field that contains the 3 accounts that will get a combined 35% of all sales of this NFT? Looks like it works! Go team :)"}),(0,o.jsx)(t.h3,{id:"nft-payout",children:"NFT payout"}),(0,o.jsxs)(t.p,{children:["Let's calculate the payout for the ",(0,o.jsx)(t.code,{children:'"approval-token"'})," NFT, given a balance of 100 yoctoNEAR. It's important to note that the balance being passed into the ",(0,o.jsx)(t.code,{children:"nft_payout"})," function is expected to be in yoctoNEAR."]}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:'near view $ROYALTY_NFT_CONTRACT_ID nft_payout \'{"token_id": "approval-token", "balance": "100", "max_len_payout": 100}\'\n'})}),(0,o.jsx)(t.p,{children:"This command should return an output similar to the following:"}),(0,o.jsx)(t.pre,{children:(0,o.jsx)(t.code,{className:"language-bash",children:"{\n  payout: {\n    'josh.testnet': '5',\n    'royalty.goteam.examples.testnet': '65',\n    'mike.testnet': '10',\n    'benjiman.testnet': '20'\n  }\n}\n"})}),(0,o.jsxs)(t.p,{children:["If the NFT was sold for 100 yoctoNEAR, josh would get 5, benji would get 20, mike would get 10, and the owner, in this case ",(0,o.jsx)(t.code,{children:"royalty.goteam.examples.testnet"})," would get the rest: 65."]}),(0,o.jsx)(t.h2,{id:"conclusion",children:"Conclusion"}),(0,o.jsx)(t.p,{children:"At this point you have everything you need for a fully functioning NFT contract to interact with marketplaces. The last remaining standard that you could implement is the events standard. This allows indexers to know what functions are being called and makes it easier and more reliable to keep track of information that can be used to populate the collectibles tab in the wallet for example."}),(0,o.jsxs)(t.admonition,{type:"info",children:[(0,o.jsxs)(t.mdxAdmonitionTitle,{children:["remember If you want to see the finished code from this tutorial, you can checkout the ",(0,o.jsx)(t.code,{children:"6.royalty"})," branch. :::"]}),(0,o.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,o.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,o.jsxs)(t.ul,{children:["\n",(0,o.jsxs)(t.li,{children:["near-cli: ",(0,o.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,o.jsxs)(t.li,{children:["NFT standard: ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,o.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,o.jsxs)(t.li,{children:["Enumeration standard: ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"NEP181"}),", version ",(0,o.jsx)(t.code,{children:"1.0.0"})]}),"\n",(0,o.jsxs)(t.li,{children:["Royalties standard: ",(0,o.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Payout",children:"NEP199"}),", version ",(0,o.jsx)(t.code,{children:"2.0.0"})]}),"\n"]})]})]})]})]})}function h(e={}){const{wrapper:t}={...(0,a.a)(),...e.components};return t?(0,o.jsx)(t,{...e,children:(0,o.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var o=n(67294);const a={},i=o.createContext(a);function r(e){const t=o.useContext(i);return o.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:r(e.components),o.createElement(i.Provider,{value:t},e.children)}}}]);