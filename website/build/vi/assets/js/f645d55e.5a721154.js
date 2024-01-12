"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7315],{29109:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>i,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>l});var r=t(85893),s=t(11151);const o={id:"transfers",title:"Transferring Fungible Tokens",sidebar_label:"Transferring FTs"},i=void 0,a={id:"tutorials/fts/transfers",title:"Transferring Fungible Tokens",description:"In this tutorial, you'll learn how to implement the core standards into your smart contract. You'll implement the logic that allows you to transfer and receive tokens. If you're joining us for the first time, feel free to clone this repository and follow along in the 4.storage folder.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/fts/5.transfers.md",sourceDirName:"3.tutorials/fts",slug:"/tutorials/fts/transfers",permalink:"/vi/tutorials/fts/transfers",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/fts/5.transfers.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",sidebarPosition:5,frontMatter:{id:"transfers",title:"Transferring Fungible Tokens",sidebar_label:"Transferring FTs"},sidebar:"contracts",previous:{title:"Registering Accounts",permalink:"/vi/tutorials/fts/registering-accounts"},next:{title:"Adding FTs to a Marketplace",permalink:"/vi/tutorials/fts/marketplace"}},c={},l=[{value:"Gi\u1edbi thi\u1ec7u",id:"introduction",level:2},{value:"C\xe1c s\u1eeda \u0111\u1ed5i v\u1edbi contract",id:"c\xe1c-s\u1eeda-\u0111\u1ed5i-v\u1edbi-contract",level:2},{value:"Transfer function",id:"transfer-function",level:3},{value:"C\xe1c internal helper function",id:"c\xe1c-internal-helper-function",level:3},{value:"Transfer call function",id:"transfer-call-function",level:3},{value:"Deploy contract",id:"redeploying-contract",level:2},{value:"T\u1ea1o m\u1ed9t sub-account",id:"t\u1ea1o-m\u1ed9t-sub-account",level:3},{value:"Initialization",id:"initialization",level:3},{value:"Test transfer function",id:"test-transfer-function",level:3},{value:"Test transfer call function",id:"test-transfer-call-function",level:3},{value:"T\u1ed5ng k\u1ebft",id:"t\u1ed5ng-k\u1ebft",level:2}];function d(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h3:"h3",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsxs)(n.p,{children:["In this tutorial, you'll learn how to implement the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Core",children:"core standards"})," into your smart contract. You'll implement the logic that allows you to transfer and receive tokens. If you're joining us for the first time, feel free to clone ",(0,r.jsx)(n.a,{href:"https://github.com/near-examples/ft-tutorial",children:"this repository"})," and follow along in the ",(0,r.jsx)(n.code,{children:"4.storage"})," folder."]}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you wish to see the finished code for this ",(0,r.jsx)(n.em,{children:"Core"})," tutorial, you can find it in the ",(0,r.jsx)(n.code,{children:"5.transfers"})," folder."]})}),"\n",(0,r.jsx)(n.h2,{id:"introduction",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,r.jsx)(n.p,{children:"Up until this point, you've created a simple FT smart contract that allows the owner to mint a total supply of tokens and view information about the Fungible Token itself. In addition, you've added the functionality to register accounts and emit events. Today, you'll expand your smart contract to allow for users to transfer and receive fungible tokens."}),"\n",(0,r.jsx)(n.p,{children:"The logic for doing a simple transfer is quite easy to understand. Let's say Benji wants to transfer Mike 100 of his fungible tokens. The contract should do a few things:"}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsx)(n.li,{children:"Check if Benji owns at least 100 tokens."}),"\n",(0,r.jsx)(n.li,{children:"Make sure Benji is calling the function."}),"\n",(0,r.jsx)(n.li,{children:"Ensure Mike is registered on the contract."}),"\n",(0,r.jsx)(n.li,{children:"Take 100 tokens out of Benji's account."}),"\n",(0,r.jsx)(n.li,{children:"Put 100 tokens into Mike's account."}),"\n"]}),"\n",(0,r.jsx)(n.p,{children:"T\u1ea1i th\u1eddi \u0111i\u1ec3m n\xe0y, b\u1ea1n \u0111\xe3 s\u1eb5n s\xe0ng \u0111\u1ec3 ti\u1ebfp t\u1ee5c v\xe0 t\u1ea1o nh\u1eefng s\u1eeda \u0111\u1ed5i quan tr\u1ecdng v\u1edbi smart contract c\u1ee7a m\xecnh."}),"\n",(0,r.jsx)(n.h2,{id:"c\xe1c-s\u1eeda-\u0111\u1ed5i-v\u1edbi-contract",children:"C\xe1c s\u1eeda \u0111\u1ed5i v\u1edbi contract"}),"\n",(0,r.jsxs)(n.p,{children:["Let's start our journey in the ",(0,r.jsx)(n.code,{children:"src/ft_core.rs"})," file."]}),"\n",(0,r.jsx)(n.h3,{id:"transfer-function",children:"Transfer function"}),"\n",(0,r.jsxs)(n.p,{children:["You'll start by implementing the ",(0,r.jsx)(n.code,{children:"ft_transfer"})," logic which is found in the ",(0,r.jsx)(n.code,{children:"src/ft_core.rs"})," file. This function will transfer the specified ",(0,r.jsx)(n.code,{children:"amount"})," to the ",(0,r.jsx)(n.code,{children:"receiver_id"})," with an optional ",(0,r.jsx)(n.code,{children:"memo"})," such as ",(0,r.jsx)(n.code,{children:'"Happy Birthday Mike!"'}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/ft_core.rs#L60-L72\n"})}),"\n",(0,r.jsx)(n.p,{children:"C\xf3 m\u1ed9t s\u1ed1 \u0111i\u1ec1u c\u1ea7n l\u01b0u \xfd \u1edf \u0111\xe2y."}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["We've introduced a new method called ",(0,r.jsx)(n.code,{children:"assert_one_yocto()"}),". This method will ensure that the user is signing the transaction with a full access key by requiring a deposit of exactly 1 yoctoNEAR, the smallest possible amount of $NEAR that can be transferred. V\xec transfer function c\xf3 kh\u1ea3 n\u0103ng chuy\u1ec3n c\xe1c t\xe0i s\u1ea3n r\u1ea5t c\xf3 gi\xe1 tr\u1ecb, n\xean b\u1ea1n s\u1ebd mu\u1ed1n \u0111\u1ea3m b\u1ea3o r\u1eb1ng b\u1ea5t k\u1ef3 ai call function n\xe0y \u0111\u1ec1u c\xf3 full access key."]}),"\n"]}),"\n",(0,r.jsxs)(n.li,{children:["\n",(0,r.jsxs)(n.p,{children:["We've introduced an ",(0,r.jsx)(n.code,{children:"internal_transfer"})," method. This will perform all the logic necessary to transfer the tokens internally."]}),"\n"]}),"\n"]}),"\n",(0,r.jsx)(n.h3,{id:"c\xe1c-internal-helper-function",children:"C\xe1c internal helper function"}),"\n",(0,r.jsxs)(n.p,{children:["Let's quickly move over to the ",(0,r.jsx)(n.code,{children:"ft-contract/src/internal.rs"})," file so that you can implement the ",(0,r.jsx)(n.code,{children:"internal_transfer"})," method which is the core of this tutorial. Function n\xe0y s\u1ebd nh\u1eadn c\xe1c tham s\u1ed1 sau:"]}),"\n",(0,r.jsxs)(n.ul,{children:["\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"sender_id"}),": the account that's attempting to transfer the tokens."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"receiver_id"}),": the account that's receiving the tokens."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"amount"}),": the amount of FTs being transferred."]}),"\n",(0,r.jsxs)(n.li,{children:[(0,r.jsx)(n.strong,{children:"memo"}),": m\u1ed9t t\xf9y ch\u1ecdn memo k\xe8m theo."]}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["The first thing you'll want to do is make sure the sender isn't sending tokens to themselves and that they're sending a positive number. After that, you'll want to withdraw the tokens from the sender's balance and deposit them into the receiver's balance. You've already written the logic to deposit FTs by using the ",(0,r.jsx)(n.code,{children:"internal_deposit"})," function."]}),"\n",(0,r.jsxs)(n.p,{children:["Let's use similar logic to implement ",(0,r.jsx)(n.code,{children:"internal_withdraw"}),":"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/internal.rs#L29-L40\n"})}),"\n",(0,r.jsxs)(n.p,{children:["In this case, the contract will get the account's balance and ensure they are registered by calling the ",(0,r.jsx)(n.code,{children:"internal_unwrap_balance_of"})," function. It will then subtract the amount from the user's balance and re-insert them into the map."]}),"\n",(0,r.jsxs)(n.p,{children:["Using the ",(0,r.jsx)(n.code,{children:"internal_deposit"})," and ",(0,r.jsx)(n.code,{children:"internal_withdraw"})," functions together, the core of the ",(0,r.jsx)(n.code,{children:"internal_transfer"})," function is complete."]}),"\n",(0,r.jsxs)(n.p,{children:["There's only one more thing you need to do. When transferring the tokens, you need to remember to emit a log as per the ",(0,r.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/FungibleToken/Event",children:"events"})," standard:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/internal.rs#L42-L67\n"})}),"\n",(0,r.jsx)(n.p,{children:"Now that this is finished, the simple transfer case is done! You can now transfer FTs between registered users!"}),"\n",(0,r.jsx)(n.h3,{id:"transfer-call-function",children:"Transfer call function"}),"\n",(0,r.jsxs)(n.p,{children:["In this section, you'll learn about a new function ",(0,r.jsx)(n.code,{children:"ft_transfer_call"}),". This will transfer FTs to a receiver and also call a method on the receiver's contract all in the same transaction."]}),"\n",(0,r.jsx)(n.p,{children:"H\xe3y xem x\xe9t k\u1ecbch b\u1ea3n sau \u0111\xe2y. An account wants to transfer FTs to a smart contract for performing a service. The traditional approach would be to perform the service and then ask for the tokens in two separate transactions. N\u1ebfu ch\xfang ta gi\u1edbi thi\u1ec7u \u201ctransfer and call\u201d workflow b\u1eb1ng m\u1ed9t transaction duy nh\u1ea5t, quy tr\xecnh n\xe0y c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c c\u1ea3i thi\u1ec7n r\u1ea5t nhi\u1ec1u:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/ft_core.rs#L74-L104\n"})}),"\n",(0,r.jsx)(n.p,{children:"This function will do several things:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"Ensures the caller attached exactly 1 yocto for security purposes."}),"\n",(0,r.jsxs)(n.li,{children:["Transfer the tokens using the ",(0,r.jsx)(n.code,{children:"internal_transfer"})," you just wrote."]}),"\n",(0,r.jsxs)(n.li,{children:["Creates a promise to call the method ",(0,r.jsx)(n.code,{children:"ft_on_transfer"})," on the ",(0,r.jsx)(n.code,{children:"receiver_id"}),"'s contract."]}),"\n",(0,r.jsxs)(n.li,{children:["After the promise finishes executing, the function ",(0,r.jsx)(n.code,{children:"ft_resolve_transfer"})," is called."]}),"\n"]}),"\n",(0,r.jsxs)(n.admonition,{type:"info",children:[(0,r.jsx)(n.p,{children:"This is a very common workflow when dealing with cross contract calls. Tr\u01b0\u1edbc ti\xean, b\u1ea1n b\u1eaft \u0111\u1ea7u kh\u1edfi t\u1ea1o call v\xe0 \u0111\u1ee3i n\xf3 th\u1ef1c hi\u1ec7n xong. Then, you invoke a function that resolves the result of the promise and act accordingly."}),(0,r.jsxs)(n.p,{children:["Learn more ",(0,r.jsx)(n.a,{href:"/vi/develop/contracts/crosscontract",children:"here"}),"."]})]}),"\n",(0,r.jsxs)(n.p,{children:["When calling ",(0,r.jsx)(n.code,{children:"ft_on_transfer"}),", it will return how many tokens the contract should refund the original sender."]}),"\n",(0,r.jsx)(n.p,{children:"This is important for a couple of reasons:"}),"\n",(0,r.jsxs)(n.ol,{children:["\n",(0,r.jsx)(n.li,{children:"If you send the receiver too many FTs and their contract wants to refund the excess."}),"\n",(0,r.jsx)(n.li,{children:"If any of the logic panics, all of the tokens should be refunded back to the sender."}),"\n"]}),"\n",(0,r.jsxs)(n.p,{children:["This logic will all happen in the ",(0,r.jsx)(n.code,{children:"ft_resolve_transfer"})," function:"]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/ft-tutorial/blob/main/5.transfers/src/ft_core.rs#L174-L221\n"})}),"\n",(0,r.jsxs)(n.p,{children:["The first thing you'll do is check the status of the promise. If anything failed, you'll refund the sender for the full amount of tokens. If the promise succeeded, you'll extract the amount of tokens to refund the sender based on the value returned from ",(0,r.jsx)(n.code,{children:"ft_on_transfer"}),". Once you have the amount needed to be refunded, you'll perform the actual refund logic by using the ",(0,r.jsx)(n.code,{children:"internal_transfer"})," function you wrote previously."]}),"\n",(0,r.jsx)(n.p,{children:"You'll then return the net amount of tokens that were transferred to the receiver. If the sender transferred 100 tokens but 20 were refunded, this function should return 80."}),"\n",(0,r.jsx)(n.p,{children:"With that finished, you've now successfully added the necessary logic to allow users to transfer FTs. B\xe2y gi\u1edd l\xe0 l\xfac deploy v\xe0 th\u1ef1c hi\u1ec7n m\u1ed9t v\xe0i b\xe0i test."}),"\n",(0,r.jsx)(n.h2,{id:"redeploying-contract",children:"Deploy contract"}),"\n",(0,r.jsxs)(n.p,{children:["Let's create a new sub-account to deploy the contract to. Since these changes are only additive and non state breaking, you could have deployed a patch fix to the contract you deployed in the storage section as well. To learn more about upgrading contracts, see the ",(0,r.jsx)(n.a,{href:"/tutorials/nfts/upgrade-contract",children:"upgrading a contract"})," section in the NFT Zero to Hero tutorial."]}),"\n",(0,r.jsx)(n.h3,{id:"t\u1ea1o-m\u1ed9t-sub-account",children:"T\u1ea1o m\u1ed9t sub-account"}),"\n",(0,r.jsxs)(n.p,{children:["Run the following command to create a sub-account ",(0,r.jsx)(n.code,{children:"transfer"})," of your main account with an initial balance of 25 NEAR which will be transferred from the original to your new account."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near create-account transfer.$FT_CONTRACT_ID --masterAccount $FT_CONTRACT_ID --initialBalance 25\n"})}),"\n",(0,r.jsx)(n.p,{children:"Ti\u1ebfp theo, b\u1ea1n s\u1ebd mu\u1ed1n export m\u1ed9t bi\u1ebfn m\xf4i tr\u01b0\u1eddng cho vi\u1ec7c develop \u0111\u01b0\u1ee3c d\u1ec5 d\xe0ng h\u01a1n:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"export TRANSFER_FT_CONTRACT_ID=transfer.$FT_CONTRACT_ID\n"})}),"\n",(0,r.jsx)(n.p,{children:"S\u1eed d\u1ee5ng build script, deploy contract nh\u01b0 b\u1ea1n \u0111\xe3 l\xe0m \u1edf c\xe1c h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"cd 1.skeleton && ./build.sh && cd .. && near deploy --wasmFile out/contract.wasm --accountId $TRANSFER_FT_CONTRACT_ID\n"})}),"\n",(0,r.jsx)(n.admonition,{type:"tip",children:(0,r.jsxs)(n.p,{children:["If you haven't completed the previous tutorials and are just following along with this one, simply create an account and login with your CLI using ",(0,r.jsx)(n.code,{children:"near login"}),". You can then export an environment variable ",(0,r.jsx)(n.code,{children:"export TRANSFER_FT_CONTRACT_ID=YOUR_ACCOUNT_ID_HERE"}),". In addition, you can find the contract code by going to the ",(0,r.jsx)(n.code,{children:"5.transfers"})," folder. Instead of building using ",(0,r.jsx)(n.code,{children:"1.skeleton"}),", you can build by going to the ",(0,r.jsx)(n.code,{children:"5.transfers"})," folder and running ",(0,r.jsx)(n.code,{children:"./build.sh"}),"."]})}),"\n",(0,r.jsx)(n.h3,{id:"initialization",children:"Initialization"}),"\n",(0,r.jsxs)(n.p,{children:["Now that the contract is deployed, it's time to initialize it and mint the total supply. Let's once again create an initial supply of 1000 ",(0,r.jsx)(n.code,{children:"gtNEAR"}),"."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID new_default_meta \'{"owner_id": "\'$TRANSFER_FT_CONTRACT_ID\'", "total_supply": "1000000000000000000000000000"}\' --accountId $TRANSFER_FT_CONTRACT_ID\n'})}),"\n",(0,r.jsx)(n.p,{children:"You can check if you own the FTs by running the following command:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near view $TRANSFER_FT_CONTRACT_ID ft_balance_of '{\"account_id\": \"'$TRANSFER_FT_CONTRACT_ID'\"}'\n"})}),"\n",(0,r.jsx)(n.h3,{id:"test-transfer-function",children:"Test transfer function"}),"\n",(0,r.jsxs)(n.p,{children:["Let's test the transfer function by transferring 1 ",(0,r.jsx)(n.code,{children:"gtNEAR"})," from the owner account to the account ",(0,r.jsx)(n.code,{children:"benjiman.testnet"})]}),"\n",(0,r.jsx)(n.admonition,{type:"note",children:(0,r.jsxs)(n.p,{children:["The FTs won't be recoverable unless the account ",(0,r.jsx)(n.code,{children:"benjiman.testnet"})," transfers them back to you. If you don't want your FTs lost, make a new account and transfer the token to that account instead."]})}),"\n",(0,r.jsxs)(n.p,{children:["You'll first need to register the account ",(0,r.jsx)(n.code,{children:"benjiman.testnet"})," by running the following command."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID storage_deposit \'{"account_id": "benjiman.testnet"}\' --accountId $TRANSFER_FT_CONTRACT_ID --amount 0.01\n'})}),"\n",(0,r.jsxs)(n.p,{children:["Once the account is registered, you can transfer the FTs by running the following command. H\xe3y l\u01b0u \xfd r\u1eb1ng b\u1ea1n c\u0169ng \u0111ang \u0111\xednh k\xe8m ch\xednh x\xe1c 1 yoctoNEAR b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng ",(0,r.jsx)(n.code,{children:"--depositYocto"})," flag."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID ft_transfer \'{"receiver_id": "benjiman.testnet", "amount": "1000000000000000000000000", "memo": "Go Team :)"}\' --accountId $TRANSFER_FT_CONTRACT_ID --depositYocto 1\n'})}),"\n",(0,r.jsxs)(n.p,{children:["You should see the ",(0,r.jsx)(n.code,{children:"FtTransferEvent"})," being emitted in the console. At this point, if you check for the total supply, it should still be 1000 ",(0,r.jsx)(n.code,{children:"gtNEAR"})," but if you check both the balance of Benji and the balance of the owner, they should reflect the transfer."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near view $TRANSFER_FT_CONTRACT_ID ft_balance_of '{\"account_id\": \"'$TRANSFER_FT_CONTRACT_ID'\"}'\n"})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near view $TRANSFER_FT_CONTRACT_ID ft_balance_of \'{"account_id": "benjiman.testnet"}\'\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:"near view $TRANSFER_FT_CONTRACT_ID ft_total_supply\n"})}),"\n",(0,r.jsx)(n.h3,{id:"test-transfer-call-function",children:"Test transfer call function"}),"\n",(0,r.jsxs)(n.p,{children:["Now that you've tested the ",(0,r.jsx)(n.code,{children:"ft_transfer"})," function, it's time to test the ",(0,r.jsx)(n.code,{children:"ft_transfer_call"})," function. If you try to transfer tokens to a receiver that does ",(0,r.jsx)(n.strong,{children:"not"})," implement the ",(0,r.jsx)(n.code,{children:"ft_on_transfer"})," function, the contract will panic and the FTs will be ",(0,r.jsx)(n.strong,{children:"refunded"}),". H\xe3y test ch\u1ee9c n\u0103ng n\xe0y b\xean d\u01b0\u1edbi."]}),"\n",(0,r.jsxs)(n.p,{children:["You can try to transfer the FTs to the account ",(0,r.jsx)(n.code,{children:"no-contract.testnet"})," which, as the name suggests, doesn't have a contract. This means that the receiver doesn't implement the ",(0,r.jsx)(n.code,{children:"ft_on_transfer"})," function and the FTs should remain yours after the transaction is complete. You'll first have to register the account, however."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID storage_deposit \'{"account_id": "no-contract.testnet"}\' --accountId $TRANSFER_FT_CONTRACT_ID --amount 0.01\n'})}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near call $TRANSFER_FT_CONTRACT_ID ft_transfer_call \'{"receiver_id": "no-contract.testnet", "amount": "1000000000000000000000000", "msg": "foo"}\' --accountId $TRANSFER_FT_CONTRACT_ID --depositYocto 1 --gas 200000000000000\n'})}),"\n",(0,r.jsx)(n.p,{children:"The output response should be as follows."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'Scheduling a call: transfer.dev-1660680326316-91393402417293.ft_transfer_call({"receiver_id": "no-contract.testnet", "amount": "1000000000000000000000000", "msg": "foo"}) with attached 0.000000000000000000000001 NEAR\nDoing account.functionCall()\nReceipts: AJ3yWv7tSiZRLtoTkyTgfdzmQP1dpjX9DxJDiD33uwTZ, EKtpDFoJWNnbyxJ7SriAFQYX8XV9ZTzwmCF2qhSaYMAc, 21UzDZ791pWZRKAHv8WaRKN8mqDVrz8zewLWGTNZTckh\n    Log [transfer.dev-1660680326316-91393402417293]: EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_transfer","data":[{"old_owner_id":"transfer.dev-1660680326316-91393402417293","new_owner_id":"no-contract.testnet","amount":"1000000000000000000000000"}]}\nReceipt: 5N2WV8picxwUNC5TYa3A3v4qGquQAhkU6P81tgRt1UFN\n    Failure [transfer.dev-1660680326316-91393402417293]: Error: Cannot find contract code for account no-contract.testnet\nReceipt: AdT1bSZNCu9ACq7m6ynb12GgSb3zBenfzvvzRwfYPBmg\n    Log [transfer.dev-1660680326316-91393402417293]: EVENT_JSON:{"standard":"nep141","version":"1.0.0","event":"ft_transfer","data":[{"old_owner_id":"no-contract.testnet","new_owner_id":"transfer.dev-1660680326316-91393402417293","amount":"1000000000000000000000000","memo":"Refund"}]}\nTransaction Id 2XVy8MZU8TWreW8C9zK6HSyBsxE5hyTbyUyxNdncxL8g\nTo see the transaction in the transaction explorer, please open this url in your browser\nhttps://explorer.testnet.near.org/transactions/2XVy8MZU8TWreW8C9zK6HSyBsxE5hyTbyUyxNdncxL8g\n\'0\'\n'})}),"\n",(0,r.jsxs)(n.p,{children:["There should be a transfer event emitted for the initial transfer of tokens and then also for the refund. In addition, ",(0,r.jsx)(n.code,{children:"0"})," should have been returned from the function because the sender ended up transferring net 0 tokens to the receiver since all the tokens were refunded."]}),"\n",(0,r.jsxs)(n.p,{children:["If you query for the balance of ",(0,r.jsx)(n.code,{children:"no-contract.testnet"}),", it should still be 0."]}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-bash",children:'near view $TRANSFER_FT_CONTRACT_ID ft_balance_of \'{"account_id": "no-contract.testnet"}\'\n'})}),"\n",(0,r.jsx)(n.p,{children:"Ch\xfac m\u1eebng! At this point, your FT contract is fully complete and all the functionality is working as expected. Go forth and experiment! The world is your oyster and don't forget, go team!"}),"\n",(0,r.jsx)(n.h2,{id:"t\u1ed5ng-k\u1ebft",children:"T\u1ed5ng k\u1ebft"}),"\n",(0,r.jsxs)(n.p,{children:["In this tutorial, you learned how to expand a FT contract by adding ways for users to transfer FTs. You ",(0,r.jsx)(n.a,{href:"#introduction",children:"broke down"})," the problem into smaller, more digestible subtasks and took that information and implemented both the ",(0,r.jsx)(n.a,{href:"#transfer-function",children:"FT transfer"})," and ",(0,r.jsx)(n.a,{href:"#transfer-call-function",children:"FT transfer call"})," functions. In addition, you deployed another ",(0,r.jsx)(n.a,{href:"#redeploying-contract",children:"contract"})," and ",(0,r.jsx)(n.a,{href:"#testing-changes",children:"tested"})," the transfer functionality."]}),"\n",(0,r.jsxs)(n.p,{children:["In the ",(0,r.jsx)(n.a,{href:"/tutorials/fts/marketplace",children:"next tutorial"}),", you'll learn about how an NFT marketplace can operate to purchase NFTs by using Fungible Tokens."]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>i});var r=t(67294);const s={},o=r.createContext(s);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);