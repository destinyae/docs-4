"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5367],{87410:(n,t,e)=>{e.r(t),e.d(t,{assets:()=>o,contentTitle:()=>a,default:()=>d,frontMatter:()=>r,metadata:()=>s,toc:()=>l});var c=e(85893),i=e(11151);const r={id:"upgrade-contract",title:"Vi\u1ec7c Upgrade m\u1ed9t Contract",sidebar_label:"Upgrade m\u1ed9t Contract"},a=void 0,s={id:"tutorials/nfts/upgrade-contract",title:"Vi\u1ec7c Upgrade m\u1ed9t Contract",description:"Trong h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n s\u1ebd n\xe2ng c\u1ea5p nh\u1eefng g\xec b\u1ea1n \u0111\xe3 l\xe0m tr\u01b0\u1edbc \u0111\xe2y \u0111\u1ec3 implement ch\u1ee9c n\u0103ng mint tr\xean m\u1ed9t b\u1ed9 khung smart contract. B\u1ea1n \u0111\xe3 \u0111\u1ebfn th\u1eddi \u0111i\u1ec3m m\xe0 NFT c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c mint v\xe0 wallet \u0111\xe3 ch\xednh th\u1ee9c x\xe1c nh\u1eadn l\xe0 b\u1ea1n s\u1edf h\u1eefu m\u1ed9t NFT. Tuy nhi\xean, kh\xf4ng c\xf3 c\xe1ch n\xe0o \u0111\u1ec3 hi\u1ec3n th\u1ecb c\xe1c token v\xec contract c\u1ee7a b\u1ea1n kh\xf4ng implement method m\xe0 wallet \u0111ang c\u1ed1 g\u1eafng call.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/nfts/2-upgrade.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/upgrade-contract",permalink:"/vi/tutorials/nfts/upgrade-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/2-upgrade.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",sidebarPosition:2,frontMatter:{id:"upgrade-contract",title:"Vi\u1ec7c Upgrade m\u1ed9t Contract",sidebar_label:"Upgrade m\u1ed9t Contract"},sidebar:"contracts",previous:{title:"Minting",permalink:"/vi/tutorials/nfts/minting"},next:{title:"Enumeration",permalink:"/vi/tutorials/nfts/enumeration"}},o={},l=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"T\u1ed5ng quan v\u1ec1 vi\u1ec7c n\xe2ng c\u1ea5p c\xe1c contract",id:"upgrading-contracts",level:2},{value:"C\xe1c s\u1eeda \u0111\u1ed5i \u0111\u1ebfn contract c\u1ee7a ch\xfang ta",id:"modifications-to-contract",level:2},{value:"Deploying l\u1ea1i m\u1ed9t contract",id:"redeploying-contract",level:2},{value:"Xem c\xe1c NFT trong wallet",id:"viewing-nfts-in-wallet",level:2},{value:"K\u1ebft lu\u1eadn",id:"k\u1ebft-lu\u1eadn",level:2}];function h(n){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components},{Details:r}=t;return r||function(n,t){throw new Error("Expected "+(t?"component":"object")+" `"+n+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,c.jsxs)(c.Fragment,{children:[(0,c.jsxs)(t.p,{children:["Trong h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n s\u1ebd n\xe2ng c\u1ea5p nh\u1eefng g\xec b\u1ea1n \u0111\xe3 l\xe0m tr\u01b0\u1edbc \u0111\xe2y \u0111\u1ec3 implement ",(0,c.jsx)(t.a,{href:"/tutorials/nfts/minting",children:"ch\u1ee9c n\u0103ng mint"})," tr\xean m\u1ed9t b\u1ed9 khung smart contract. B\u1ea1n \u0111\xe3 \u0111\u1ebfn th\u1eddi \u0111i\u1ec3m m\xe0 NFT c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c mint v\xe0 wallet \u0111\xe3 ch\xednh th\u1ee9c x\xe1c nh\u1eadn l\xe0 b\u1ea1n s\u1edf h\u1eefu m\u1ed9t NFT. Tuy nhi\xean, kh\xf4ng c\xf3 c\xe1ch n\xe0o \u0111\u1ec3 hi\u1ec3n th\u1ecb c\xe1c token v\xec contract c\u1ee7a b\u1ea1n kh\xf4ng implement method m\xe0 wallet \u0111ang c\u1ed1 g\u1eafng call."]}),"\n",(0,c.jsx)(t.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,c.jsxs)(t.p,{children:["H\xf4m nay, b\u1ea1n s\u1ebd t\xecm hi\u1ec3u v\u1ec1 c\xe1ch deploy c\xe1c b\u1ea3n s\u1eeda l\u1ed7i cho c\xe1c smart contract v\xe0 b\u1ea1n s\u1ebd s\u1eed d\u1ee5ng ki\u1ebfn th\u1ee9c \u0111\xf3 \u0111\u1ec3 implement function ",(0,c.jsx)(t.code,{children:"nft_tokens_for_owner"})," tr\xean contract m\xe0 b\u1ea1n \u0111\xe3 deploy trong h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc."]}),"\n",(0,c.jsx)(t.h2,{id:"upgrading-contracts",children:"T\u1ed5ng quan v\u1ec1 vi\u1ec7c n\xe2ng c\u1ea5p c\xe1c contract"}),"\n",(0,c.jsx)(t.p,{children:"Khi \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n \u0111\xfang, vi\u1ec7c n\xe2ng c\u1ea5p c\xe1c contract c\xf3 th\u1ec3 l\xe0 m\u1ed9t c\xf4ng c\u1ee5 v\xf4 c\xf9ng m\u1ea1nh m\u1ebd. N\u1ebfu l\xe0m sai, b\u1ea1n c\xf3 th\u1ec3 s\u1ebd g\u1eb7p ph\u1ea3i r\u1ea5t nhi\u1ec1u phi\u1ec1n to\xe1i. B\u1ea1n c\u1ea7n ph\u1ea3i ph\xe2n bi\u1ec7t \u0111\u01b0\u1ee3c code v\xe0 state c\u1ee7a m\u1ed9t smart contract. Khi m\u1ed9t contract \u0111\u01b0\u1ee3c deploy tr\xean m\u1ed9t contract c\xf3 s\u1eb5n, \u0111i\u1ec1u duy nh\u1ea5t thay \u0111\u1ed5i l\xe0 code. State s\u1ebd v\u1eabn nh\u01b0 c\u0169 v\xe0 t\u1eeb \u0111\xf3 m\xe0 r\u1ea5t nhi\u1ec1u v\u1ea5n \u0111\u1ec1 g\xe2y \u0111au \u0111\u1ea7u cho developer xu\u1ea5t hi\u1ec7n."}),"\n",(0,c.jsx)(t.p,{children:"NEAR Runtime s\u1ebd \u0111\u1ecdc serialized state t\u1eeb disk v\xe0 s\u1ebd c\u1ed1 g\u1eafng load n\xf3 b\u1eb1ng c\xe1ch s\u1eed d\u1ee5ng code c\u1ee7a contract hi\u1ec7n t\u1ea1i. Khi code c\u1ee7a b\u1ea1n thay \u0111\u1ed5i, n\xf3 c\xf3 th\u1ec3 kh\xf4ng t\xecm \u0111\u01b0\u1ee3c c\xe1ch \u0111\u1ec3 th\u1ef1c hi\u1ec7n vi\u1ec7c n\xe0y."}),"\n",(0,c.jsxs)(t.p,{children:["B\u1ea1n c\u1ea7n n\xe2ng c\u1ea5p c\xe1c contract c\u1ee7a m\xecnh m\u1ed9t c\xe1ch chi\u1ebfn l\u01b0\u1ee3c v\xe0 \u0111\u1ea3m b\u1ea3o r\u1eb1ng runtime s\u1ebd c\xf3 th\u1ec3 \u0111\u1ecdc state hi\u1ec7n t\u1ea1i c\u1ee7a b\u1ea1n b\u1eb1ng code m\u1edbi c\u1ee7a contract. For more information about upgrading contracts and some best practices, see the NEAR SDK's ",(0,c.jsx)(t.a,{href:"/sdk/rust/building/prototyping",children:"upgrading contracts"})," write-up."]}),"\n",(0,c.jsx)(t.h2,{id:"modifications-to-contract",children:"C\xe1c s\u1eeda \u0111\u1ed5i \u0111\u1ebfn contract c\u1ee7a ch\xfang ta"}),"\n",(0,c.jsxs)(t.p,{children:["\u0110\u1ec3 wallet hi\u1ec3n th\u1ecb \u0111\xfang c\xe1c NFT c\u1ee7a b\u1ea1n, b\u1ea1n c\u1ea7n ph\u1ea3i implement method ",(0,c.jsx)(t.code,{children:"nft_tokens_for_owner"}),". Vi\u1ec7c n\xe0y s\u1ebd cho ph\xe9p b\u1ea5t c\u1ee9 ai c\xf3 th\u1ec3 truy v\u1ea5n danh s\xe1ch c\xe1c NFT c\u1ee7a m\u1ed9t account ID c\u1ee5 th\u1ec3 \u0111\u01b0\u1ee3c ph\xe2n trang."]}),"\n",(0,c.jsxs)(t.p,{children:["\u0110\u1ec3 th\u1ef1c hi\u1ec7n \u0111i\u1ec1u n\xe0y, h\xe3y chia n\xf3 th\xe0nh m\u1ed9t s\u1ed1 nhi\u1ec7m v\u1ee5 con nh\u1ecf h\u01a1n. Tr\u01b0\u1edbc ti\xean, b\u1ea1n c\u1ea7n c\xf3 quy\u1ec1n truy c\u1eadp v\xe0o danh s\xe1ch t\u1ea5t c\u1ea3 c\xe1c token ID do ng\u01b0\u1eddi d\xf9ng s\u1edf h\u1eefu. Th\xf4ng tin n\xe0y c\xf3 th\u1ec3 \u0111\u01b0\u1ee3c t\xecm th\u1ea5y trong data structure ",(0,c.jsx)(t.code,{children:"tokens_per_owner"}),". B\xe2y gi\u1edd b\u1ea1n \u0111\xe3 c\xf3 m\u1ed9t t\u1eadp h\u1ee3p c\xe1c token ID, b\u1ea1n c\u1ea7n convert ch\xfang th\xe0nh c\xe1c object ",(0,c.jsx)(t.code,{children:"JsonToken"})," v\xec \u0111\xf3 l\xe0 nh\u1eefng g\xec b\u1ea1n s\u1ebd tr\u1ea3 v\u1ec1 t\u1eeb function."]}),"\n",(0,c.jsxs)(t.p,{children:["May m\u1eafn thay, b\u1ea1n \u0111\xe3 vi\u1ebft function ",(0,c.jsx)(t.code,{children:"nft_token"}),", n\u01a1i m\xe0 nh\u1eadn m\u1ed9t token ID v\xe0 tr\u1ea3 v\u1ec1 m\u1ed9t ",(0,c.jsx)(t.code,{children:"JsonToken"})," trong file ",(0,c.jsx)(t.code,{children:"nft_core.rs"}),". Nh\u01b0 b\u1ea1n c\xf3 th\u1ec3 \u0111o\xe1n, \u0111\u1ec3 c\xf3 \u0111\u01b0\u1ee3c danh s\xe1ch c\xe1c object ",(0,c.jsx)(t.code,{children:"JsonToken"}),", b\u1ea1n c\u1ea7n ph\u1ea3i l\u1eb7p qua c\xe1c token ID do ng\u01b0\u1eddi d\xf9ng s\u1edf h\u1eefu v\xe0 sau \u0111\xf3 convert t\u1eebng token ID th\xe0nh m\u1ed9t ",(0,c.jsx)(t.code,{children:"JsonToken"})," v\xe0 l\u01b0u n\xf3 v\xe0o m\u1ed9t list."]}),"\n",(0,c.jsxs)(t.p,{children:["\u0110\u1ed1i v\u1edbi ph\xe2n trang, Rust c\xf3 m\u1ed9t s\u1ed1 function tuy\u1ec7t v\u1eddi \u0111\u1ec3 b\u1ecf qua starting index v\xe0 l\u1ea5y ",(0,c.jsx)(t.code,{children:"n"})," element \u0111\u1ea7u ti\xean c\u1ee7a m\u1ed9t iterator."]}),"\n",(0,c.jsxs)(t.p,{children:["H\xe3y \u0111\u1ebfn v\u1edbi file ",(0,c.jsx)(t.code,{children:"enumerable.rs"})," v\xe0 implement logic \u0111\xf3:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/2.minting/nft-contract/src/enumeration.rs#L32-L62\n"})}),"\n",(0,c.jsx)(t.h2,{id:"redeploying-contract",children:"Deploying l\u1ea1i m\u1ed9t contract"}),"\n",(0,c.jsxs)(t.p,{children:["Gi\u1edd \u0111\xe2y b\u1ea1n \u0111\xe3 implement xong ph\u1ea7n logic c\u1ea7n thi\u1ebft cho ",(0,c.jsx)(t.code,{children:"nft_tokens_for_owner"}),", gi\u1edd l\xe0 l\xfac build v\xe0 deploy l\u1ea1i contract cho account c\u1ee7a b\u1ea1n. D\xf9ng build script, deploy contract theo c\xe1ch b\u1ea1n \u0111\xe3 l\xe0m trong ph\u1ea7n h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"yarn build && near deploy --wasmFile out/main.wasm --accountId $NFT_CONTRACT_ID\n"})}),"\n",(0,c.jsxs)(t.p,{children:["L\xfac n\xe0y s\u1ebd c\xf3 m\u1ed9t c\u1ea3nh b\xe1o n\xf3i r\u1eb1ng t\xe0i kho\u1ea3n \u0111\xe3 c\xf3 m\u1ed9t contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy v\xe0 s\u1ebd h\u1ecfi b\u1ea1n c\xf3 mu\u1ed1n ti\u1ebfp t\u1ee5c hay kh\xf4ng. Ch\u1ec9 c\u1ea7n g\xf5 ",(0,c.jsx)(t.code,{children:"y"})," v\xe0 b\u1ea5m enter."]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"This account already has a deployed contract [ AKJK7sCysrWrFZ976YVBnm6yzmJuKLzdAyssfzK9yLsa ]. Do you want to proceed? (y/n)\n"})}),"\n",(0,c.jsx)(t.p,{children:"M\u1ed9t khi contract \u0111\xe3 \u0111\u01b0\u1ee3c deploy l\u1ea1i, h\xe3y test v\xe0 xem state c\xf3 \u0111\u01b0\u1ee3c migrate ch\xednh x\xe1c hay kh\xf4ng b\u1eb1ng c\xe1ch ch\u1ea1y m\u1ed9t view function \u0111\u01a1n gi\u1ea3n:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"near view $NFT_CONTRACT_ID nft_metadata\n"})}),"\n",(0,c.jsx)(t.p,{children:"L\u1ec7nh n\xe0y s\u1ebd tr\u1ea3 v\u1ec1 k\u1ebft qu\u1ea3 t\u01b0\u01a1ng t\u1ef1 nh\u01b0 sau:"}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"{\n  spec: 'nft-1.0.0',\n  name: 'NFT Tutorial Contract',\n  symbol: 'GOTEAM',\n  icon: null,\n  base_uri: null,\n  reference: null,\n  reference_hash: null\n}\n"})}),"\n",(0,c.jsxs)(t.p,{children:[(0,c.jsx)(t.strong,{children:"Ch\xfac m\u1eebng!"})," T\u1ea1i th\u1eddi \u0111i\u1ec3m n\xe0y, b\u1ea1n c\xf3 th\u1ec3 test v\xe0 xem li\u1ec7u function m\u1edbi vi\u1ebft c\xf3 ho\u1ea1t \u0111\u1ed9ng ch\xednh x\xe1c hay kh\xf4ng. H\xe3y query list c\u1ee7a c\xe1c token m\xe0 b\u1ea1n s\u1edf h\u1eefu:"]}),"\n",(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:'near view $NFT_CONTRACT_ID nft_tokens_for_owner \'{"account_id": "\'$NFT_CONTRACT_ID\'", "limit": 5}\'\n'})}),"\n",(0,c.jsxs)(r,{children:[(0,c.jsx)("summary",{children:"V\xed d\u1ee5 v\u1ec1 response nh\u1eadn \u0111\u01b0\u1ee3c: "}),(0,c.jsx)("p",{children:(0,c.jsx)(t.pre,{children:(0,c.jsx)(t.code,{className:"language-bash",children:"[\n  {\n    token_id: 'token-1',\n    owner_id: 'goteam.examples.testnet',\n    metadata: {\n      title: 'My Non Fungible Team Token',\n      description: 'The Team Most Certainly Goes :)',\n      media: 'https://bafybeiftczwrtyr3k7a2k4vutd3amkwsmaqyhrdzlhvpt33dyjivufqusq.ipfs.dweb.link/goteam-gif.gif',\n      media_hash: null,\n      copies: null,\n      issued_at: null,\n      expires_at: null,\n      starts_at: null,\n      updated_at: null,\n      extra: null,\n      reference: null,\n      reference_hash: null\n    }\n  }\n]\n"})})})]}),"\n",(0,c.jsx)(t.h2,{id:"viewing-nfts-in-wallet",children:"Xem c\xe1c NFT trong wallet"}),"\n",(0,c.jsxs)(t.p,{children:["Now that your contract implements the necessary functions that the wallet uses to display NFTs, you should be able to see your tokens on display in the ",(0,c.jsx)(t.a,{href:"https://testnet.mynearwallet.com//?tab=collectibles",children:"collectibles tab"}),"."]}),"\n",(0,c.jsx)(t.p,{children:(0,c.jsx)(t.img,{alt:"filled-nft-in-wallet",src:e(95044).Z+"",width:"635",height:"432"})}),"\n",(0,c.jsx)(t.h2,{id:"k\u1ebft-lu\u1eadn",children:"K\u1ebft lu\u1eadn"}),"\n",(0,c.jsxs)(t.p,{children:["Trong h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n \u0111\xe3 h\u1ecdc \u0111\u01b0\u1ee3c nh\u1eefng \u0111i\u1ec1u c\u01a1 b\u1ea3n c\u1ee7a ",(0,c.jsx)(t.a,{href:"#upgrading-contracts",children:"vi\u1ec7c upgrade c\xe1c contract"}),". K\u1ebf ti\u1ebfp, b\u1ea1n \u0111\xe3 implement ",(0,c.jsx)(t.a,{href:"#modifications-to-contract",children:"nh\u1eefng s\u1eeda \u0111\u1ed5i c\u1ea7n thi\u1ebft cho smart contract c\u1ee7a b\u1ea1n"})," v\xe0 ",(0,c.jsx)(t.a,{href:"#redeploying-contract",children:"\u0111\xe3 deploy l\u1ea1i n\xf3"}),". Cu\u1ed1i c\xf9ng, b\u1ea1n \u0111\u1ebfn wallet collectibles tab v\xe0 ",(0,c.jsx)(t.a,{href:"#viewing-nfts-in-wallet",children:"\u0111\xe3 nh\xecn th\u1ea5y c\xe1c NFT c\u1ee7a m\xecnh"}),"."]}),"\n",(0,c.jsxs)(t.p,{children:["In the ",(0,c.jsx)(t.a,{href:"/tutorials/nfts/enumeration",children:"next tutorial"}),", you'll implement the remaining functions needed to complete the ",(0,c.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Enumeration",children:"enumeration"})," standard."]}),"\n",(0,c.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,c.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,c.jsxs)(t.ul,{children:["\n",(0,c.jsxs)(t.li,{children:["near-cli: ",(0,c.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,c.jsxs)(t.li,{children:["NFT standard: ",(0,c.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,c.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})}function d(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,c.jsx)(t,{...n,children:(0,c.jsx)(h,{...n})}):h(n)}},95044:(n,t,e)=>{e.d(t,{Z:()=>c});const c=e.p+"assets/images/filled-nft-in-wallet-e661209d2dbff2bb2551db943ecfc43b.png"},11151:(n,t,e)=>{e.d(t,{Z:()=>s,a:()=>a});var c=e(67294);const i={},r=c.createContext(i);function a(n){const t=c.useContext(r);return c.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function s(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:a(n.components),c.createElement(r.Provider,{value:t},n.children)}}}]);