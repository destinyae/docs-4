"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[7141],{29577:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>a,default:()=>h,frontMatter:()=>l,metadata:()=>o,toc:()=>r});var i=t(85893),s=t(11151);const l={id:"minecraft-nfts",title:"Create NFTs in Minecraft",sidebar_label:"Minecraft NFTs"},a=void 0,o={id:"tutorials/nfts/minecraft-nfts",title:"Create NFTs in Minecraft",description:"In this tutorial you'll learn how to take your custom Minecraft creations and mint the schematics into NFTs on the NEAR blockchain!",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/minecraft-nfts.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/minecraft-nfts",permalink:"/zh-CN/tutorials/nfts/minecraft-nfts",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/minecraft-nfts.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"minecraft-nfts",title:"Create NFTs in Minecraft",sidebar_label:"Minecraft NFTs"},sidebar:"contracts",previous:{title:"Minting Front-end",permalink:"/zh-CN/tutorials/nfts/minting-nft-frontend"},next:{title:"Introduction",permalink:"/zh-CN/tutorials/nfts/js/introduction"}},c={},r=[{value:"Overview",id:"overview",level:2},{value:"Prerequisites",id:"prerequisites",level:2},{value:"Creating a Schematic",id:"creating-a-schematic",level:2},{value:"Setup",id:"setup",level:3},{value:"Sanity Check",id:"sanity-check",level:3},{value:"Creating the Schematics File",id:"creating-the-schematics-file",level:3},{value:"Minting the Schematic",id:"minting-the-schematic",level:2},{value:"Uploading the schematic",id:"uploading-the-schematic",level:3},{value:"Steps",id:"steps",level:4},{value:"Interacting With the Contract",id:"interacting-with-the-contract",level:3},{value:"Using the Village Schematic",id:"using-the-village-schematic",level:2},{value:"Getting the Schematics File",id:"getting-the-schematics-file",level:3},{value:"Loading the Schematics File in Minecraft",id:"loading-the-schematics-file-in-minecraft",level:3},{value:"Versioning for this article",id:"versioning-for-this-article",level:2}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",h4:"h4",img:"img",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,s.a)(),...e.components},{Details:l}=n;return l||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.blockquote,{children:["\n",(0,i.jsx)(n.p,{children:"In this tutorial you'll learn how to take your custom Minecraft creations and mint the schematics into NFTs on the NEAR blockchain!"}),"\n"]}),"\n",(0,i.jsx)(n.h2,{id:"overview",children:"Overview"}),"\n",(0,i.jsxs)(n.p,{children:["This tutorial will run you through minting Minecraft structures of any size onto the NEAR blockchain. It will allow you to copy and paste the designs into your own worlds. For this, we will be using WorldEdit to download and read the schematics and we'll put them on-chain using ",(0,i.jsx)(n.a,{href:"https://ipfs.io/",children:"IPFS"}),"."]}),"\n",(0,i.jsx)(n.h2,{id:"prerequisites",children:"Prerequisites"}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["It is recommended that you first complete the introductory ",(0,i.jsx)(n.strong,{children:(0,i.jsx)(n.a,{href:"/tutorials/nfts/minting-nfts",children:"minting NFTs tutorial"})})," :::"]}),(0,i.jsx)(n.p,{children:"To complete this tutorial successfully, you'll need:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://www.minecraft.net/",children:"A Minecraft account"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"https://worldedit.enginehub.org/en/latest/install/",children:"WorldEdit installed"})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#wallet",children:"A NEAR account"})}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.a,{href:"/tools/near-cli#setup",children:"NEAR command-line interface"})," (",(0,i.jsx)(n.code,{children:"near-cli"}),")"]}),"\n"]}),(0,i.jsx)(n.h2,{id:"creating-a-schematic",children:"Creating a Schematic"}),(0,i.jsx)(n.p,{children:"In this section, we'll be creating the Minecraft schematic to put on chain."}),(0,i.jsx)(n.h3,{id:"setup",children:"Setup"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Once you have ",(0,i.jsx)(n.a,{href:"https://worldedit.enginehub.org/en/latest/install/",children:"WorldEdit"})," installed and Minecraft loaded up, let's check if WorldEdit is working properly by running:"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"//pos1\n"})}),(0,i.jsxs)(n.p,{children:["If WorldEdit is properly installed, it should output ",(0,i.jsx)(n.code,{children:"First position set to (X, Y, Z)."})," where X, Y, and Z are coordinates."]}),(0,i.jsx)(n.p,{children:"For this tutorial, we will be minting a small village house. To follow along, choose any structure that you'd like to mint as shown below:"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Village House Minecraft",src:t(63038).Z+"",width:"684",height:"721"})}),(0,i.jsx)(n.p,{children:"You'll then want to choose the boundaries of the structure that you'd like to copy. We will turn these into schematics which will be placed on chain for you or others to download and paste in your own worlds."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To do this, we'll need to outline the boundaries of the build using WorldEdit. Stand in the bottom left corner of your build and run:"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"//pos1\n"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can then move to the top right corner and run:"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"//pos2\n"})}),(0,i.jsx)(n.p,{children:"Setting these two positions has now created a cube around your build."}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"We can now copy the contents of that build by running:"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"//copy\n"})}),(0,i.jsx)(n.p,{children:"The output should look something like this:"}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Copy Chat Message",src:t(34165).Z+"",width:"907",height:"186"})}),(0,i.jsx)(n.admonition,{title:"TIP",type:"info",children:(0,i.jsx)(n.p,{children:"Remember to note the position of your player when copying. If you copy the build and lets say you're standing on the roof, when you paste the build it will paste the build in a way that will result in you standing on the roof."})})]}),"\n",(0,i.jsx)(n.h3,{id:"sanity-check",children:"Sanity Check"}),"\n",(0,i.jsx)(n.p,{children:"We can check and see if our build is fine by pasting what we just copied elsewhere in our world."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Go to a location that you would like to paste the build and run:"}),"\n"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"//paste\n"})}),"\n",(0,i.jsx)(n.p,{children:"In the example below, we pasted the village house floating above a coral reef biome. You should also see a response notifying you that the clipboard has been pasted. (See example below)"}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Pasted Minecraft House",src:t(6953).Z+"",width:"1312",height:"691"})}),"\n",(0,i.jsx)(n.h3,{id:"creating-the-schematics-file",children:"Creating the Schematics File"}),"\n",(0,i.jsx)(n.p,{children:"When you're happy with the build you've just copied and pasted, it's time to create the schematic file that we'll mint into an NFT. To do this we'll run a WorldEdit command that will save the schematic file on our local machine."}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To do this, run the command ",(0,i.jsx)(n.code,{children:"schematic save FILE_NAME"})," replacing ",(0,i.jsx)(n.code,{children:"FILE_NAME"})," with a name of your choosing."]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["This will save the file to your Minecraft folder with under ",(0,i.jsx)(n.code,{children:"minecraft/config/worldedit/schematics"})," witha ",(0,i.jsx)(n.code,{children:".schem"})," extension."]}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Now test your file by loading the schematic we just saved using ",(0,i.jsx)(n.code,{children:"schematic load FILE_NAME"}),"."]}),"\n"]}),"\n",(0,i.jsx)(n.p,{children:"This will load the schematic to our clipboard and we're free to paste it in our world."}),"\n",(0,i.jsx)(n.h2,{id:"minting-the-schematic",children:"Minting the Schematic"}),"\n",(0,i.jsxs)(n.p,{children:["In this section, we'll mint the schematics file, we've just created and put it on the blockchain using IPFS and web3.storage. In order to proceed, you need to locate the ",(0,i.jsx)(n.code,{children:"FILE_NAME.schem"})," we created in the last section. This file can be found in your Minecraft folder under ",(0,i.jsx)(n.code,{children:"minecraft/config/worldedit/schematics"}),". The location of your minecraft folder differs depending on your OS."]}),"\n",(0,i.jsx)(n.h3,{id:"uploading-the-schematic",children:"Uploading the schematic"}),"\n",(0,i.jsxs)(n.p,{children:["To upload the schematic, we are going to use the free ",(0,i.jsx)(n.a,{href:"https://web3.storage/",children:"web3.storage"})," service built for storing off-chain data. Web3.storage offers free decentralized storage and bandwidth on ",(0,i.jsx)(n.a,{href:"https://ipfs.io/",children:"IPFS"})," and ",(0,i.jsx)(n.a,{href:"https://filecoin.io/",children:"Filecoin"}),"."]}),"\n",(0,i.jsx)(n.h4,{id:"steps",children:"Steps"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Register an account and log in to ",(0,i.jsx)(n.a,{href:"https://nft.storage/login/",children:"web3.storage"})," either via email or your GitHub."]}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Go to the ",(0,i.jsx)(n.a,{href:"https://web3.storage/",children:"Files"})," section, and click on the ",(0,i.jsx)(n.a,{href:"https://web3.storage/",children:"Upload more Files"})," button."]}),"\n",(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"web3.storage",src:t(4755).Z+"",width:"1310",height:"1386"})}),"\n"]}),"\n",(0,i.jsxs)(n.li,{children:["\n",(0,i.jsxs)(n.p,{children:["Once you have uploaded your file, you'll get a unique ",(0,i.jsx)(n.code,{children:"CID"})," for your content, and a URL similar to:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{children:"https://bafybeidadhfilezx23dcdaueo3bjuafqeehokw33vyepkjtppigorrhbpy.ipfs.dweb.link/\n"})}),"\n"]}),"\n"]}),"\n",(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["See the ",(0,i.jsx)(n.a,{href:"https://docs.web3.storage/",children:"web3.storage docs"})," for information on uploading multiple files and available API endpoints. :::"]}),(0,i.jsx)(n.h3,{id:"interacting-with-the-contract",children:"Interacting With the Contract"}),(0,i.jsxs)(n.p,{children:["NEAR has already deployed a contract to the account ",(0,i.jsx)(n.code,{children:"nft.examples.testnet"})," which allows users to freely mint tokens. This is the account we'll be interacting with to mint our NFTs. Alternatively, if you've deployed a contract when following the original tutorial, you can use that as well."]}),(0,i.jsxs)(n.admonition,{type:"info",children:[(0,i.jsxs)(n.mdxAdmonitionTitle,{children:["We'll be using the IPFS link we got in step three of the uploading process above as the media value when calling ",(0,i.jsx)(n.code,{children:"nft_mint"}),". :::"]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["Run the following command and replace the ",(0,i.jsx)(n.code,{children:"receiver_id"})," field and the ",(0,i.jsx)(n.code,{children:"--accountId"})," flag with the account ID you're ",(0,i.jsx)(n.a,{href:"/tools/near-cli#near-login",children:"logged into"})," with NEAR CLI:"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'near call nft.examples.testnet nft_mint \'{"token_id": "my-token-unique-id", "receiver_id": "YOUR_ACCOUNT", "metadata": { "title": "YOUR NFT TITLE", "description": "YOUR NFT DESCRIPTION", "media": "https://bafybeidadhfilezx23dcdaueo3bjuafqeehokw33vyepkjtppigorrhbpy.ipfs.dweb.link/", "copies": 1}}\' --accountId YOUR_ACCOUNT --deposit 0.1\n'})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"Be sure to replace the title, description and media URL with your own."}),"\n"]}),(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"Example response: "}),(0,i.jsx)("p",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "token_id": "0",\n  "owner_id": "YOUR_ACCOUNT",\n  "metadata": {\n    "title": "My awesome Minecraft NFT",\n    "description": "Custom log cabin",\n    "media": "https://bafybeidadhfilezx23dcdaueo3bjuafqeehokw33vyepkjtppigorrhbpy.ipfs.dweb.link/",\n    "media_hash": null,\n    "copies": 1,\n    "issued_at": null,\n    "expires_at": null,\n    "starts_at": null,\n    "updated_at": null,\n    "extra": null,\n    "reference": null,\n    "reference_hash": null\n  },\n  "approved_account_ids": {}\n}\n'})})})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["To view tokens owned by an account on the ",(0,i.jsx)(n.code,{children:"example-nft"})," contract, you can call the contract with the following ",(0,i.jsx)(n.code,{children:"near-cli"})," command:"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'near view nft.examples.testnet nft_tokens_for_owner \'{"account_id": "YOUR_ACCOUNT"}\'\n'})}),(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"Example response: "}),(0,i.jsx)("p",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n  {\n    "token_id": "0",\n    "owner_id": "YOUR_ACCOUNT",\n    "metadata": {\n      "title": "Some Art",\n      "description": "My NFT media",\n      "media": "https://bafybeidadhfilezx23dcdaueo3bjuafqeehokw33vyepkjtppigorrhbpy.ipfs.dweb.link/",\n      "media_hash": null,\n      "copies": 1,\n      "issued_at": null,\n      "expires_at": null,\n      "starts_at": null,\n      "updated_at": null,\n      "extra": null,\n      "reference": null,\n      "reference_hash": null\n    },\n    "approved_account_ids": {}\n  }\n]\n'})})})]}),(0,i.jsx)(n.h2,{id:"using-the-village-schematic",children:"Using the Village Schematic"}),(0,i.jsxs)(n.p,{children:["Now that you've uploaded your schematic to the blockchain, all someone would need to do to paste it in their own world would be to download the ",(0,i.jsx)(n.code,{children:"*.schem"})," file associated with the IPFS link we minted the NFT with and place it in their schematics folder."]}),(0,i.jsx)(n.p,{children:"As a test, we've minted an NFT that contains the village schematic we've been working with so that you can download it and paste it in your world."}),(0,i.jsx)(n.h3,{id:"getting-the-schematics-file",children:"Getting the Schematics File"}),(0,i.jsxs)(n.p,{children:["The first thing you'll need to do is view the metadata for the token we've minted that contains the IPFS link to the village schematic. We've minted a token with the ID ",(0,i.jsx)(n.code,{children:"village-schematic"})," under the account ",(0,i.jsx)(n.code,{children:"village-schematic.testnet"}),"."]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"To get the media link, run the following command:"}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:'near view nft.examples.testnet nft_tokens_for_owner \'{"account_id": "village-schematic.testnet"}\'\n'})}),(0,i.jsxs)(l,{children:[(0,i.jsx)("summary",{children:"Expected response: "}),(0,i.jsx)("p",{children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"[\n  {\n    token_id: 'village-schematic',\n    owner_id: 'village-schematic.testnet',\n    metadata: {\n      title: 'Village Schematic',\n      description: 'Blockcraft Village Schematic Tutorial NFT',\n      media: 'https://bafybeidadhfilezx23dcdaueo3bjuafqeehokw33vyepkjtppigorrhbpy.ipfs.dweb.link/',\n      media_hash: null,\n      copies: 1,\n      issued_at: null,\n      expires_at: null,\n      starts_at: null,\n      updated_at: null,\n      extra: null,\n      reference: null,\n      reference_hash: null\n    },\n    approved_account_ids: {}\n  }\n]\n"})})})]}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:"You can then take the media link and paste it into your browser. It should send you to a page that looks similar to this:"}),"\n"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"IPFS Village Schem",src:t(39954).Z+"",width:"1791",height:"246"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["If you click on the file called ",(0,i.jsx)(n.code,{children:"village-house.schem"}),", it will download the file."]}),"\n",(0,i.jsxs)(n.li,{children:["You can then copy the schematics file and paste it into your ",(0,i.jsx)(n.code,{children:"minecraft/config/worldedit/schematics"})," folder."]}),"\n"]}),(0,i.jsx)(n.h3,{id:"loading-the-schematics-file-in-minecraft",children:"Loading the Schematics File in Minecraft"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["After you've pasted the schematics file into the ",(0,i.jsx)(n.code,{children:"minecraft/config/worldedit/schematics"})," folder, you can then load the schematic into your clipboard by running the following command in your minecraft world:"]}),"\n"]}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"//schematics load village-house\n"})}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["You can now paste the file anywhere in your world by simply using the ",(0,i.jsx)(n.code,{children:"//paste"})," command and voila! You should see something similar to this:"]}),"\n"]}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{alt:"Final Village Pasting",src:t(96242).Z+"",width:"1591",height:"725"})}),(0,i.jsx)(n.p,{children:"Congratulations! You've just learned how to mint a Mincraft schematic NFT and load it into your world!"}),(0,i.jsx)(n.h2,{id:"versioning-for-this-article",children:"Versioning for this article"}),(0,i.jsx)(n.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:["near-cli: ",(0,i.jsx)(n.code,{children:"2.1.1"})]}),"\n"]})]})]})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},39954:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/IPFS-village-schem-11088526ea0780cbf5087de6040a8200.png"},34165:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/copy-chat-message-minecraft-442184b9b6df91847fd479ee28d348b0.png"},96242:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/final-village-pasting-25b903313ab6ed3ad823166f4feafb18.png"},6953:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/pasted-minecraft-house-3a2281606809f2b014baea4ce3abfd12.png"},63038:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/village-house-minecraft-763c254984a6508a8a2aed8e91d4d8b2.png"},4755:(e,n,t)=>{t.d(n,{Z:()=>i});const i=t.p+"assets/images/web3-storage-upload-7506057b35a2070c280fa77848fcfc78.png"},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>a});var i=t(67294);const s={},l=i.createContext(s);function a(e){const n=i.useContext(l);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:a(e.components),i.createElement(l.Provider,{value:n},e.children)}}}]);