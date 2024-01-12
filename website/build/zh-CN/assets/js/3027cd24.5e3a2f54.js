"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8150],{77053:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>l,contentTitle:()=>s,default:()=>h,frontMatter:()=>o,metadata:()=>a,toc:()=>c});var i=n(85893),r=n(11151);const o={id:"minting-nft-frontend",title:"Minting NFT Front-end",sidebar_label:"Minting Front-end"},s="NFT Minting Front-end",a={id:"tutorials/nfts/minting-nft-frontend",title:"Minting NFT Front-end",description:'In this tutorial you\'ll learn how to create a simple NFT front-end and mint a "Go Team" NFT on the NEAR blockchain straight from your web browser.',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/3.tutorials/nfts/simple-nft-minting-example.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/minting-nft-frontend",permalink:"/zh-CN/tutorials/nfts/minting-nft-frontend",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/simple-nft-minting-example.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"minting-nft-frontend",title:"Minting NFT Front-end",sidebar_label:"Minting Front-end"},sidebar:"contracts",previous:{title:"Minting NFTs",permalink:"/zh-CN/tutorials/nfts/minting-nfts"},next:{title:"Minecraft NFTs",permalink:"/zh-CN/tutorials/nfts/minecraft-nfts"}},l={},c=[{value:"App Overview",id:"app-overview",level:2},{value:"Smart Contract code",id:"smart-contract-code",level:2},{value:"Front-end",id:"front-end",level:2},{value:"Start",id:"start",level:3},{value:"Mint button",id:"mint-button",level:3},{value:"Final remarks",id:"final-remarks",level:2}];function d(e){const t={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(t.h1,{id:"nft-minting-front-end",children:"NFT Minting Front-end"}),"\n",(0,i.jsxs)(t.blockquote,{children:["\n",(0,i.jsx)(t.p,{children:'In this tutorial you\'ll learn how to create a simple NFT front-end and mint a "Go Team" NFT on the NEAR blockchain straight from your web browser.'}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"app-overview",children:"App Overview"}),"\n",(0,i.jsxs)(t.p,{children:["The app is fairly simple: the user signs in and hits the ",(0,i.jsx)("kbd",{children:"Mint NFT"}),' button. Once the user hits the mint button, a "Go Team" NFT is minted and sent to their NEAR Wallet.']}),"\n",(0,i.jsx)(t.p,{children:(0,i.jsx)(t.img,{alt:"Front-end",src:n(6610).Z+"",width:"2142",height:"1026"})}),"\n",(0,i.jsx)(t.h2,{id:"smart-contract-code",children:"Smart Contract code"}),"\n",(0,i.jsxs)(t.p,{children:["The code for the NFT smart contract can be found in the ",(0,i.jsx)(t.a,{href:"/tutorials/nfts/introduction",children:"Zero to Hero NFT tutorial"}),"'s  ",(0,i.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial/tree/main/nft-contract/src",children:"GitHub repository"}),", under the ",(0,i.jsx)(t.code,{children:"main"})," branch."]}),"\n",(0,i.jsx)(t.p,{children:"The contract methods used in this application are as follows:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"nft_mint"}),": Function used to mint tokens."]}),"\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"check_token"}),": Custom function created to check for the existence of a token. This helps to ensure one token per user."]}),"\n"]}),"\n",(0,i.jsx)(t.h2,{id:"front-end",children:"Front-end"}),"\n",(0,i.jsxs)(t.p,{children:["The front-end of the contract was implemented using ",(0,i.jsx)(t.code,{children:"create-near-app"}),". ",(0,i.jsx)(t.a,{href:"https://react-bootstrap.github.io/",children:"React Bootstrap"})," was used for the styling of the application."]}),"\n",(0,i.jsx)(t.p,{children:"To bootstrap your React front-end, run the following command on your terminal:"}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-sh",children:"npx create-near-app --frontend react --contract rust\n"})}),"\n",(0,i.jsxs)(t.p,{children:["Then, simply import the contract files from the ",(0,i.jsx)(t.code,{children:"main"})," branch, and you'll have the needed structure to run the application."]}),"\n",(0,i.jsx)(t.h3,{id:"start",children:"Start"}),"\n",(0,i.jsx)(t.p,{children:"Upon mounting the application's components, the app checks for the existence of a non-fungible token."}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/App.js#L24-L46\n"})}),"\n",(0,i.jsx)(t.p,{children:"If no prior NFT has been minted, the mint button will be available for use."}),"\n",(0,i.jsx)(t.h3,{id:"mint-button",children:"Mint button"}),"\n",(0,i.jsx)(t.p,{children:"Here is the function behind the mint button. The meta data has been filled out for the user already:"}),"\n",(0,i.jsxs)(t.ul,{children:["\n",(0,i.jsxs)(t.li,{children:[(0,i.jsx)(t.code,{children:"token_id"})," is set by the user's account id,"]}),"\n",(0,i.jsxs)(t.li,{children:["and the ",(0,i.jsx)(t.code,{children:"media"})," link is hard-coded to a ",(0,i.jsx)(t.code,{children:"goteam-gif.gif"})," hosted on IPFS."]}),"\n"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/Components/MintingTool.js#L7-L23\n"})}),"\n",(0,i.jsxs)(t.p,{children:["After hitting the ",(0,i.jsx)("kbd",{children:"Mint NFT"})," button the user will be able to check out the newly minted NFT at ",(0,i.jsx)(t.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"wallet.testnet.near.org"}),", under the Wallet's ",(0,i.jsx)(t.code,{children:"Collectibles"})," tab."]}),"\n",(0,i.jsx)(t.h2,{id:"final-remarks",children:"Final remarks"}),"\n",(0,i.jsxs)(t.p,{children:["You can find the complete application repository ",(0,i.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial-frontend",children:"on GitHub"})," to clone and run. In the configuration folder you can see that this smart contract has been deployed to ",(0,i.jsx)(t.code,{children:"nft-frontend-simple-mint.blockhead.testnet"}),":"]}),"\n",(0,i.jsx)(t.pre,{children:(0,i.jsx)(t.code,{className:"language-js",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial-frontend/blob/master/src/config.js#L1-L2\n"})}),"\n",(0,i.jsxs)(t.p,{children:["You can also check out the ",(0,i.jsx)(t.a,{href:"https://explorer.testnet.near.org/accounts/nft-frontend-simple-mint.blockhead.testnet",children:"explorer link here"})," to see how many individuals have been minting their own ",(0,i.jsx)(t.em,{children:"Go Team"})," NFTs. ",(0,i.jsx)(t.em,{children:(0,i.jsx)(t.strong,{children:"Happy Minting!"})})]}),"\n",(0,i.jsx)(t.admonition,{type:"tip",children:(0,i.jsxs)(t.p,{children:["Clone and run this example from ",(0,i.jsx)(t.a,{href:"https://github.com/near-examples/nft-tutorial-frontend",children:"https://github.com/near-examples/nft-tutorial-frontend"})]})})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,i.jsx)(t,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},6610:(e,t,n)=>{n.d(t,{Z:()=>i});const i=n.p+"assets/images/nft-mint-frontend-8bc5c90aa325d1408f13519e44664aee.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>a,a:()=>s});var i=n(67294);const r={},o=i.createContext(r);function s(e){const t=i.useContext(o);return i.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function a(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(o.Provider,{value:t},e.children)}}}]);