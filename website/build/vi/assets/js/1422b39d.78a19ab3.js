"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8965],{959:(n,t,c)=>{c.r(t),c.d(t,{assets:()=>h,contentTitle:()=>r,default:()=>d,frontMatter:()=>a,metadata:()=>l,toc:()=>s});var e=c(85893),i=c(11151);const a={id:"marketplace",title:"Marketplace",sidebar_label:"Marketplace"},r=void 0,l={id:"tutorials/nfts/marketplace",title:"Marketplace",description:"Trong h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n s\u1ebd t\xecm hi\u1ec3u nh\u1eefng \u0111i\u1ec1u c\u01a1 b\u1ea3n c\u1ee7a m\u1ed9t NFT marketplace contract, n\u01a1i b\u1ea1n c\xf3 th\u1ec3 mua v\xe0 b\xe1n c\xe1c non-fungible token b\u1eb1ng $NEAR. Trong nh\u1eefng h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc, b\u1ea1n \u0111\xe3 \u0111i qua v\xe0 t\u1ea1o m\u1ed9t NFT contract ho\xe0n ch\u1ec9nh \u0111\u1ea7y \u0111\u1ee7 k\u1ebft h\u1ee3p t\u1ea5t c\u1ea3 c\xe1c ti\xeau chu\u1ea9n c\xf3 trong ti\xeau chu\u1ea9n NFT.",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/3.tutorials/nfts/8-marketplace.md",sourceDirName:"3.tutorials/nfts",slug:"/tutorials/nfts/marketplace",permalink:"/vi/tutorials/nfts/marketplace",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/nfts/8-marketplace.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",sidebarPosition:8,frontMatter:{id:"marketplace",title:"Marketplace",sidebar_label:"Marketplace"},sidebar:"contracts",previous:{title:"Event",permalink:"/vi/tutorials/nfts/events"},next:{title:"Lazy Minting, Collections, and More!",permalink:"/vi/tutorials/nfts/series"}},h={},s=[{value:"Gi\u1edbi thi\u1ec7u",id:"gi\u1edbi-thi\u1ec7u",level:2},{value:"C\u1ea5u tr\xfac file",id:"file-structure",level:2},{value:"Hi\u1ec3u v\u1ec1 contract",id:"hi\u1ec3u-v\u1ec1-contract",level:2},{value:"lib.rs",id:"lib-rs",level:2},{value:"Initialization function",id:"initialization-function",level:3},{value:"Model qu\u1ea3n l\xfd storage",id:"storage-management-model",level:3},{value:"nft_callbacks.rs",id:"nft_callbacks-rs",level:2},{value:"Logic ni\xeam y\u1ebft",id:"listing-logic",level:3},{value:"sale.rs",id:"sale-rs",level:2},{value:"Sale object",id:"sale-object",level:3},{value:"X\xf3a c\xe1c sale",id:"removing-sales",level:3},{value:"C\u1eadp nh\u1eadt gi\xe1",id:"updating-price",level:3},{value:"Mua c\xe1c NFT",id:"purchasing-nfts",level:3},{value:"sale_view.rs",id:"sale_view-rs",level:2},{value:"Creating a sub-account",id:"creating-a-sub-account",level:3},{value:"Initialization and minting",id:"initialization-and-minting",level:3},{value:"T\u1ed5ng l\u01b0\u1ee3ng cung",id:"total-supply",level:3},{value:"T\u1ed5ng l\u01b0\u1ee3ng cung b\u1edfi ch\u1ee7 s\u1edf h\u1eefu",id:"total-supply-by-owner",level:3},{value:"T\u1ed5ng l\u01b0\u1ee3ng cung theo contract",id:"total-supply-by-contract",level:3},{value:"Truy v\u1ea5n th\xf4ng tin ni\xeam y\u1ebft",id:"query-listing-information",level:3},{value:"T\u1ed5ng k\u1ebft",id:"t\u1ed5ng-k\u1ebft",level:2}];function o(n){const t={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...n.components};return(0,e.jsxs)(e.Fragment,{children:[(0,e.jsxs)(t.p,{children:["Trong h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n s\u1ebd t\xecm hi\u1ec3u nh\u1eefng \u0111i\u1ec1u c\u01a1 b\u1ea3n c\u1ee7a m\u1ed9t NFT marketplace contract, n\u01a1i b\u1ea1n c\xf3 th\u1ec3 mua v\xe0 b\xe1n c\xe1c non-fungible token b\u1eb1ng $NEAR. Trong nh\u1eefng h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc, b\u1ea1n \u0111\xe3 \u0111i qua v\xe0 t\u1ea1o m\u1ed9t NFT contract ho\xe0n ch\u1ec9nh \u0111\u1ea7y \u0111\u1ee7 k\u1ebft h\u1ee3p t\u1ea5t c\u1ea3 c\xe1c ti\xeau chu\u1ea9n c\xf3 trong ",(0,e.jsx)(t.a,{href:"https://nomicon.io/Standards/NonFungibleToken",children:"ti\xeau chu\u1ea9n NFT"}),"."]}),"\n",(0,e.jsx)(t.h2,{id:"gi\u1edbi-thi\u1ec7u",children:"Gi\u1edbi thi\u1ec7u"}),"\n",(0,e.jsx)(t.p,{children:"Th\xf4ng qua h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n s\u1ebd h\u1ecdc c\xe1ch m\u1ed9t marketplace contract s\u1ebd l\xe0m vi\u1ec7c tr\xean NEAR. \u0110\xe2y \u0111\u01b0\u1ee3c xem l\xe0 m\u1ed9t v\xed d\u1ee5 v\xe0 kh\xf4ng c\xf3 tri\u1ec3n khai ch\xednh t\u1eafc n\xe0o. Vui l\xf2ng t\xe1ch branch v\xe0 s\u1eeda \u0111\u1ed5i contract n\xe0y \u0111\u1ec3 \u0111\xe1p \u1ee9ng nhu c\u1ea7u c\u1ee5 th\u1ec3 c\u1ee7a b\u1ea1n."}),"\n",(0,e.jsxs)(t.p,{children:["S\u1eed d\u1ee5ng c\xf9ng repository gi\u1ed1ng nh\u01b0 c\xe1c h\u01b0\u1edbng d\u1eabn tr\u01b0\u1edbc, n\u1ebfu b\u1ea1n checkout branch ",(0,e.jsx)(t.code,{children:"8.marketplace"}),", b\u1ea1n s\u1ebd c\xf3 nh\u1eefng file c\u1ea7n thi\u1ebft \u0111\u1ec3 ho\xe0n th\xe0nh h\u01b0\u1edbng d\u1eabn n\xe0y."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:"git checkout 8.marketplace\n"})}),"\n",(0,e.jsx)(t.h2,{id:"file-structure",children:"C\u1ea5u tr\xfac file"}),"\n",(0,e.jsxs)(t.p,{children:["Nh\u1eefng thay \u0111\u1ed5i \u0111\u01b0\u1ee3c t\u1ea1o ra bao g\u1ed3m m\u1ed9t th\u01b0 m\u1ee5c g\u1ed1c m\u1edbi g\u1ecdi l\xe0 ",(0,e.jsx)(t.code,{children:"market-contract"}),". N\xf3 ch\u1ee9a c\u1ea3 build script, c\xe1c dependency c\u0169ng nh\u01b0 c\xe1c contract code th\u1ef1c t\u1ebf \u0111\u01b0\u1ee3c ph\xe1c th\u1ea3o b\xean d\u01b0\u1edbi \u0111\xe2y."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{children:"market-contract\n\u251c\u2500\u2500 Cargo.lock\n\u251c\u2500\u2500 Cargo.toml\n\u251c\u2500\u2500 README.md\n\u251c\u2500\u2500 build.sh\n\u2514\u2500\u2500 src\n    \u251c\u2500\u2500 external.rs\n    \u251c\u2500\u2500 internal.rs\n    \u251c\u2500\u2500 lib.rs\n    \u251c\u2500\u2500 nft_callbacks.rs\n    \u251c\u2500\u2500 sale.rs\n    \u2514\u2500\u2500 sale_views.rs\n"})}),"\n",(0,e.jsxs)(t.p,{children:["Th\xf4ng th\u01b0\u1eddng, khi l\xe0m vi\u1ec7c tr\xean nhi\u1ec1u smart contract m\xe0 t\u1ea5t c\u1ea3 \u0111i\u1ec1u li\xean quan \u0111\u1ebfn c\xf9ng m\u1ed9t repository, m\u1ed9t \xfd t\u01b0\u1edfng hay l\xe0 c\u1ea5u tr\xfac ch\xfang trong c\xe1c th\u01b0 m\u1ee5c ri\xeang gi\u1ed1ng nh\u01b0 \u0111\xe3 \u0111\u01b0\u1ee3c th\u1ef1c hi\u1ec7n trong h\u01b0\u1edbng d\u1eabn n\xe0y. \u0110\u1ec3 gi\xfap c\xf4ng vi\u1ec7c c\u1ee7a b\u1ea1n d\u1ec5 h\u01a1n khi build c\xe1c smart contract, ch\xfang t\xf4i \u0111\xe3 s\u1eeda file ",(0,e.jsx)(t.code,{children:"package.json"})," c\u1ee7a repository, do v\u1eady build c\u1ea3 hai smart contract c\xf3 th\u1ec3 d\u1ec5 d\xe0ng th\u1ef1c hi\u1ec7n b\u1eb1ng c\xe1ch ch\u1ea1y command b\xean d\u01b0\u1edbi."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:"yarn build\n"})}),"\n",(0,e.jsxs)(t.p,{children:["N\xf3 s\u1ebd c\xe0i \u0111\u1eb7t c\xe1c dependency cho c\u1ea3 hai contract v\xe0 compile ch\xfang th\xe0nh c\xe1c file ",(0,e.jsx)(t.code,{children:"wasm"})," \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef trong c\xe1c th\u01b0 m\u1ee5c d\u01b0\u1edbi \u0111\xe2y."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{children:"nft-tutorial\n\u2514\u2500\u2500 out\n    \u251c\u2500\u2500 main.wasm\n    \u2514\u2500\u2500 market.wasm\n"})}),"\n",(0,e.jsx)(t.h2,{id:"hi\u1ec3u-v\u1ec1-contract",children:"Hi\u1ec3u v\u1ec1 contract"}),"\n",(0,e.jsx)(t.p,{children:"L\xfac \u0111\u1ea7u, contract c\xf3 th\u1ec3 kh\xe1 cho\xe1ng ng\u1ee3p nh\u01b0ng n\u1ebfu b\u1ea1n lo\u1ea1i b\u1ecf t\u1ea5t c\u1ea3 c\xe1c th\u1ee9 kh\xf4ng c\u1ea7n thi\u1ebft v\xe0 \u0111\xe0o s\xe2u v\xe0o c\xe1c function c\u1ed1t l\xf5i, n\xf3 th\u1ef1c s\u1ef1 kh\xe1 \u0111\u01a1n gi\u1ea3n. Contract n\xe0y \u0111\xe3 \u0111\u01b0\u1ee3c thi\u1ebft k\u1ebf ch\u1ec9 cho m\u1ed9t \u0111i\u1ec1u duy nh\u1ea5t - cho ph\xe9p m\u1ecdi ng\u01b0\u1eddi mua v\xe0 b\xe1n c\xe1c NFT cho NEAR. N\xf3 bao g\u1ed3m vi\u1ec7c h\u1ed7 tr\u1ee3 thanh to\xe1n royalty, c\u1eadp nh\u1eadt gi\xe1 b\xe1n c\u1ee7a b\u1ea1n, lo\u1ea1i b\u1ecf sale v\xe0 thanh to\xe1n cho storage."}),"\n",(0,e.jsx)(t.p,{children:"H\xe3y xem qua c\xe1c file, ghi ch\xfa l\u1ea1i m\u1ed9t s\u1ed1 function quan tr\u1ecdng v\xe0 ch\u1ee9c n\u0103ng c\u1ee7a ch\xfang l\xe0 g\xec."}),"\n",(0,e.jsx)(t.h2,{id:"lib-rs",children:"lib.rs"}),"\n",(0,e.jsx)(t.p,{children:"File n\xe0y ph\xe1c th\u1ea3o th\xf4ng tin n\xe0o \u0111\u01b0\u1ee3c l\u01b0u tr\u1eef tr\xean contract c\u0169ng nh\u01b0 m\u1ed9t s\u1ed1 function quan tr\u1ecdng kh\xe1c m\xe0 b\u1ea1n s\u1ebd t\xecm hi\u1ec3u b\xean d\u01b0\u1edbi."}),"\n",(0,e.jsx)(t.h3,{id:"initialization-function",children:"Initialization function"}),"\n",(0,e.jsxs)(t.p,{children:["Function \u0111\u1ea7u ti\xean b\u1ea1n s\u1ebd xem l\xe0 initialization function. N\xf3 l\u1ea5y m\u1ed9t ",(0,e.jsx)(t.code,{children:"owner_id"})," l\xe0m tham s\u1ed1 duy nh\u1ea5t v\xe0 s\u1ebd m\u1eb7c \u0111\u1ecbnh t\u1ea5t c\u1ea3 c\xe1c storage collection b\u1eb1ng gi\xe1 tr\u1ecb m\u1eb7c \u0111\u1ecbnh c\u1ee7a ch\xfang."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/lib.rs#L85-L105\n"})}),"\n",(0,e.jsx)(t.h3,{id:"storage-management-model",children:"Model qu\u1ea3n l\xfd storage"}),"\n",(0,e.jsxs)(t.p,{children:["Ti\u1ebfp theo, h\xe3y n\xf3i v\u1ec1 model qu\u1ea3n l\xfd storage \u0111\u01b0\u1ee3c ch\u1ecdn cho contract n\xe0y. Tr\xean NFT contract, user \u0111\xe3 \u0111\xednh k\xe8m $NEAR v\u1edbi c\xe1c call c\u1ea7n thanh to\xe1n cho storage. V\xed d\u1ee5, n\u1ebfu ai \u0111\xf3 \u0111ang mint NFT, h\u1ecd s\u1ebd c\u1ea7n \u0111\xednh k\xe8m m\u1ed9t l\u01b0\u1ee3ng ",(0,e.jsx)(t.code,{children:"x"})," NEAR \u0111\u1ec3 trang tr\u1ea3i chi ph\xed l\u01b0u tr\u1eef data tr\xean contract."]}),"\n",(0,e.jsx)(t.p,{children:"Tuy nhi\xean, tr\xean marketplace contract n\xe0y, storage model c\xf3 m\u1ed9t ch\xfat kh\xe1c bi\u1ec7t. User s\u1ebd c\u1ea7n n\u1ea1p $NEAR v\xe0o trong marketplace \u0111\u1ec3 trang tr\u1ea3i chi ph\xed storage. B\u1ea5t c\u1ee9 khi n\xe0o ai \u0111\xf3 \u0111\u1eb7t NFT \u0111\u1ec3 b\xe1n, marketplace c\u1ea7n l\u01b0u tr\u1eef th\xf4ng tin \u0111\xf3 v\u1edbi gi\xe1 $NEAR. User c\xf3 th\u1ec3 n\u1ea1p bao nhi\xeau NEAR t\xf9y th\xedch \u0111\u1ec3 kh\xf4ng bao gi\u1edd ph\u1ea3i lo l\u1eafng v\u1ec1 storage th\xeam n\u1eefa ho\u1eb7c h\u1ecd c\xf3 th\u1ec3 n\u1ea1p s\u1ed1 ti\u1ec1n t\u1ed1i thi\u1ec3u \u0111\u1ec3 chi tr\u1ea3 cho 1 l\u1ea7n sale khi c\u1ea7n thi\u1ebft."}),"\n",(0,e.jsx)(t.p,{children:"B\u1ea1n c\xf3 th\u1ec3 \u0111ang ngh\u0129 v\u1ec1 t\xecnh hu\u1ed1ng khi m\u1ed9t m\u1eb7t h\xe0ng \u0111\u01b0\u1ee3c mua. \u0110i\u1ec1u g\xec x\u1ea3y ra v\u1edbi storage hi\u1ec7n \u0111ang \u0111\u01b0\u1ee3c ph\xe1t h\xe0nh tr\xean contract? \u0110\xe2y l\xe0 l\xfd do t\u1ea1i sao ch\xfang t\xf4i \u0111\xe3 gi\u1edbi thi\u1ec7u m\u1ed9t storage withdrawal function. N\xf3 cho ph\xe9p ng\u01b0\u1eddi d\xf9ng r\xfat b\u1ea5t k\u1ef3 storage d\u01b0 th\u1eeba kh\xf4ng \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ebfn. H\xe3y xem qua v\xe0i t\xecnh hu\u1ed1ng \u0111\u1ec3 hi\u1ec3u v\u1ec1 logic n\xe0y. Storage y\xeau c\u1ea7u m\u1ed9t l\u1ea7n sale l\xe0 0.01 NEAR tr\xean marketplace contract."}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"T\xecnh hu\u1ed1ng A"})}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsx)(t.li,{children:"Benji mu\u1ed1n \u0111\u01b0a NFT l\xean marketplace nh\u01b0ng anh \u1ea5y ch\u01b0a bao gi\u1edd tr\u1ea3 ti\u1ec1n cho storage."}),"\n",(0,e.jsxs)(t.li,{children:["Anh \u1ea5y n\u1ea1p ch\xednh x\xe1c 0.01 NEAR s\u1eed d\u1ee5ng method ",(0,e.jsx)(t.code,{children:"storage_deposit"}),". N\xf3 s\u1ebd thanh to\xe1n cho 1 l\u1ea7n b\xe1n."]}),"\n",(0,e.jsxs)(t.li,{children:["Anh \u1ea5y \u0111\u01b0a NFT l\xean marketplace v\xe0 b\xe2y gi\u1edd \u0111ang s\u1eed d\u1ee5ng h\u1ebft 1 trong s\u1ed1 1 l\u1ea7n sale \u0111\xe3 \u0111\u01b0\u1ee3c thanh to\xe1n tr\u01b0\u1edbc v\xe0 kh\xf4ng c\xf2n storage. N\u1ebfu anh \u1ea5y call ",(0,e.jsx)(t.code,{children:"storage_withdraw"}),", s\u1ebd kh\xf4ng c\xf3 g\xec x\u1ea3y ra."]}),"\n",(0,e.jsx)(t.li,{children:"Dorian th\xedch NFT c\u1ee7a anh \u1ea5y v\xe0 nhanh ch\xf3ng mua n\xf3 tr\u01b0\u1edbc b\u1ea5t c\u1ee9 ai. \u0110i\u1ec1u n\xe0y c\xf3 ngh\u0129a r\u1eb1ng \u0111\u01a1n h\xe0ng c\u1ee7a Benji b\xe2y gi\u1edd \u0111\xe3 b\u1ecb g\u1ee1 xu\u1ed1ng (k\u1ec3 t\u1eeb khi n\xf3 \u0111\u01b0\u1ee3c mua) v\xe0 Benji \u0111\xe3 s\u1eed d\u1ee5ng 0 trong s\u1ed1 1 l\u1ea7n sale \u0111\xe3 thanh to\xe1n tr\u01b0\u1edbc. N\xf3i c\xe1ch kh\xe1c, anh \u1ea5y \u0111ang th\u1eeba 1 l\u1ea7n sale hay 0.01 NEAR."}),"\n",(0,e.jsxs)(t.li,{children:["Benji b\xe2y gi\u1edd c\xf3 th\u1ec3 call ",(0,e.jsx)(t.code,{children:"storage_withdraw"})," v\xe0 s\u1ebd \u0111\u01b0\u1ee3c chuy\u1ec3n l\u1ea1i 0.01 NEAR cho anh \u1ea5y. V\u1ec1 ph\xeda contract, sau khi r\xfat ti\u1ec1n, anh \u1ea5y s\u1ebd c\xf3 0 l\u1ea7n sale \u0111\u01b0\u1ee3c thanh to\xe1n s\u1ebd c\u1ea7n ph\u1ea3i n\u1ea1p ti\u1ec1n storage tr\u01b0\u1edbc khi ni\xeam y\u1ebft th\xeam NFT."]}),"\n"]}),"\n",(0,e.jsx)(t.p,{children:(0,e.jsx)(t.strong,{children:"T\xecnh hu\u1ed1ng B"})}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsx)(t.li,{children:"Dorian s\u1edf h\u1eefu m\u1ed9t tr\u0103m NFT r\u1ea5t \u0111\u1eb9p v\xe0 anh ta mu\u1ed1n ni\xeam y\u1ebft to\xe0n b\u1ed9."}),"\n",(0,e.jsxs)(t.li,{children:["\u0110\u1ec3 tr\xe1nh ph\u1ea3i g\u1ecdi ",(0,e.jsx)(t.code,{children:"storage_deposit"})," m\u1ed7i khi mu\u1ed1n ni\xeam y\u1ebft m\u1ed9t NFT, anh \u1ea5y s\u1ebd g\u1ecdi n\xf3 m\u1ed9t l\u1ea7n. V\xec Dorian l\xe0 m\u1ed9t ng\u01b0\u1eddi c\xf3 ti\u1ec1n, anh \u0111\xe3 \u0111\xe3 \u0111\xednh k\xe8m 10 NEAR \u0111\u1ee7 \u0111\u1ec3 thanh to\xe1n cho 1000 l\u1ea7n sale. B\xe2y gi\u1edd anh \u1ea5y th\u1eeba 9 NEAR hay 900 l\u1ea7n sale."]}),"\n",(0,e.jsxs)(t.li,{children:["Dorian c\u1ea7n 9 NEAR \u0111\u1ec3 \u0111\u1ec3 l\xe0m g\xec \u0111\xf3 nh\u01b0ng anh \u1ea5y kh\xf4ng mu\u1ed1n g\u1ee1 100 NFT \u0111ang ni\xeam y\u1ebft. B\u1edfi v\xec anh \u1ea5y c\xf3 th\u1eeba 9 NEAR, anh \u1ea5y c\xf3 th\u1ec3 d\u1ec5 d\xe0ng r\xfat v\xe0 v\u1eabn c\xf3 100 NFT \u0111ang ni\xeam y\u1ebft. Sau khi call ",(0,e.jsx)(t.code,{children:"storage_withdraw"})," v\xe0 \u0111\u01b0\u1ee3c chuy\u1ec3n 9 NEAR, anh \u1ea5y c\xf3 0 l\u1ea7n sale \u0111ang th\u1eeba."]}),"\n"]}),"\n",(0,e.jsx)(t.p,{children:"Suy ngh\u0129 v\u1ec1 h\xe0nh vi n\xe0y, hai function d\u01b0\u1edbi \u0111\xe2y ph\xe1c th\u1ea3o logic."}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/lib.rs#L110-L173\n"})}),"\n",(0,e.jsxs)(t.p,{children:["Trong contract n\xe0y, storage y\xeau c\u1ea7u 0.01 NEAR cho m\u1ed7i l\u1ea7n sale nh\u01b0ng b\u1ea1n c\xf3 th\u1ec3 truy v\u1ea5n th\xf4ng tin \u0111\xf3 s\u1eed d\u1ee5ng function ",(0,e.jsx)(t.code,{children:"storage_minimum_balance"}),". Ngo\xe0i ra, b\u1ea1n c\xf3 th\u1ec3 truy v\u1ea5n function ",(0,e.jsx)(t.code,{children:"storage_balance_of"})," \u0111\u1ec3 ki\u1ec3m tra m\u1ed9t t\xe0i kho\u1ea3n n\xe0o \u0111\xf3 \u0111\xe3 thanh to\xe1n bao nhi\xeau storage."]}),"\n",(0,e.jsxs)(t.p,{children:["Kh\xf4ng c\xf2n c\xe1ch n\xe0o kh\xe1c, \u0111\xe3 \u0111\u1ebfn l\xfac chuy\u1ec3n sang file ",(0,e.jsx)(t.code,{children:"nft_callbacks.rs"}),", n\u01a1i b\u1ea1n s\u1ebd xem c\xe1ch c\xe1c NFT \u0111\u01b0\u1ee3c b\xe1n."]}),"\n",(0,e.jsx)(t.h2,{id:"nft_callbacks-rs",children:"nft_callbacks.rs"}),"\n",(0,e.jsxs)(t.p,{children:["File n\xe0y ch\u1ecbu tr\xe1ch nhi\u1ec7m v\u1ec1 logic \u0111\u01b0\u1ee3c s\u1eed d\u1ee5ng \u0111\u1ec3 b\xe1n c\xe1c NFT. N\u1ebfu b\u1ea1n nh\u1edb ",(0,e.jsx)(t.a,{href:"/tutorials/nfts/approvals#marketplace-integrations",children:"ph\u1ea7n marketplace"})," c\u1ee7a h\u01b0\u1edbng d\u1eabn approval, khi user g\u1ecdi ",(0,e.jsx)(t.code,{children:"nft_approve"})," v\xe0 truy\u1ec1n v\xe0o m\u1ed9t message, n\xf3 s\u1ebd ti\u1ebfn h\xe0nh m\u1ed9t cross-contract call t\u1edbi contract c\u1ee7a ",(0,e.jsx)(t.code,{children:"receiver_id"})," v\xe0 g\u1ecdi method ",(0,e.jsx)(t.code,{children:"nft_on_approve"}),". File ",(0,e.jsx)(t.code,{children:"nft_callbacks.rs"})," n\xe0y s\u1ebd tri\u1ec3n khai function \u0111\xf3."]}),"\n",(0,e.jsx)(t.h3,{id:"listing-logic",children:"Logic ni\xeam y\u1ebft"}),"\n",(0,e.jsxs)(t.p,{children:["\u0110i\u1ec1u quan tr\u1ecdng \u0111\u1ea7u ti\xean c\u1ea7n ch\xfa \xfd l\xe0 c\u1ea5u tr\xfac ",(0,e.jsx)(t.code,{children:"SaleArgs"}),". \u0110\xe2y l\xe0 nh\u1eefng g\xec market contract mong \u0111\u1ee3i message m\xe0 user truy\u1ec1n v\xe0o ",(0,e.jsx)(t.code,{children:"nft_approve"})," tr\xean NFT contract. C\u1ea5u tr\xfac n\xe0y ph\xe1c th\u1ea3o gi\xe1 b\xe1n b\u1eb1ng yoctoNEAR cho NFT \u0111\xe3 \u0111\u01b0\u1ee3c ni\xeam y\u1ebft."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/nft_callbacks.rs#L5-L10\n"})}),"\n",(0,e.jsxs)(t.p,{children:["Ti\u1ebfp theo, ch\xfang ta h\xe3y xem function ",(0,e.jsx)(t.code,{children:"nft_on_approve"})," \u0111\u01b0\u1ee3c g\u1ecdi th\xf4ng qua m\u1ed9t cross-contract call b\u1edfi NFT contract. Vi\u1ec7c n\xe0y s\u1ebd \u0111\u1ea3m b\u1ea3o r\u1eb1ng ng\u01b0\u1eddi k\xfd c\xf3 \u0111\u1ee7 storage \u0111\u1ec3 tr\u1ea3 th\xeam cho l\u1ea7n sale kh\xe1c. Sau \u0111\xf3, n\xf3 s\u1ebd c\u1ed1 g\u1eafng l\u1ea5y ",(0,e.jsx)(t.code,{children:"SaleArgs"})," t\u1eeb message v\xe0 t\u1ea1o ni\xeam y\u1ebft."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/nft_callbacks.rs#L32-L134\n"})}),"\n",(0,e.jsx)(t.h2,{id:"sale-rs",children:"sale.rs"}),"\n",(0,e.jsxs)(t.p,{children:["B\xe2y gi\u1edd ch\xfang ta \u0111\xe3 quen v\u1edbi quy tr\xecnh th\xeam storage v\xe0 ni\xeam y\u1ebft c\xe1c NFT tr\xean marketplace, h\xe3y xem nh\u1eefng g\xec b\u1ea1n c\xf3 th\u1ec3 l\xe0m g\xec sau khi m\u1ed9t sale \u0111\xe3 \u0111\u01b0\u1ee3c ni\xeam y\u1ebft. File ",(0,e.jsx)(t.code,{children:"sale.rs"})," ph\xe1c th\u1ea3o c\xe1c function cho vi\u1ec7c c\u1eadp nh\u1eadt gi\xe1, x\xf3a, v\xe0 mua c\xe1c NFT."]}),"\n",(0,e.jsx)(t.h3,{id:"sale-object",children:"Sale object"}),"\n",(0,e.jsx)(t.p,{children:"\u0110i\u1ec1u quan tr\u1ecdng l\xe0 ph\u1ea3i hi\u1ec3u contract \u0111ang l\u01b0u tr\u1eef th\xf4ng tin g\xec c\u1ee7a m\u1ed7i sale object. B\u1edfi v\xec marketplace c\xf3 nhi\u1ec1u NFT \u0111\u01b0\u1ee3c ni\xeam y\u1ebft \u0111\u1ebfn t\u1eeb c\xe1c NFT contract kh\xe1c nhau, ch\u1ec9 l\u01b0u tr\u1eef token ID s\u1ebd kh\xf4ng \u0111\u1ee7 \u0111\u1ec3 ph\xe2n bi\u1ec7t gi\u1eefa c\xe1c NFT kh\xe1c nhau. \u0110\xe2y l\xe0 l\xfd do b\u1ea1n c\u1ea7n theo d\xf5i c\u1ea3 token ID v\xe0 contract m\xe0 NFT \u0111\u1ebfn t\u1eeb \u0111\xf3. Ngo\xe0i ra, v\u1edbi m\u1ed7i ni\xeam y\u1ebft, contract ph\u1ea3i theo d\xf5i approval ID m\xe0 n\xf3 \u0111\xe3 \u0111\u01b0\u1ee3c c\u1ea5p \u0111\u1ec3 transfer NFT. Cu\u1ed1i c\xf9ng, ch\u1ee7 s\u1edf h\u1eefu v\xe0 c\xe1c \u0111i\u1ec1u ki\u1ec7n sale l\xe0 c\u1ea7n thi\u1ebft."}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/sale.rs#L7-L18\n"})}),"\n",(0,e.jsx)(t.h3,{id:"removing-sales",children:"X\xf3a c\xe1c sale"}),"\n",(0,e.jsxs)(t.p,{children:["\u0110\u1ec3 x\xf3a m\u1ed9t ni\xeam y\u1ebft, ch\u1ee7 s\u1edf h\u1eefu ph\u1ea3i call function ",(0,e.jsx)(t.code,{children:"remove_sale"})," v\xe0 truy\u1ec1n v\xe0o NFT contract c\xf9ng v\u1edbi token ID. Ph\xeda \u0111\u1eb1ng sau, h\xe0m n\xe0y call function ",(0,e.jsx)(t.code,{children:"internal_remove_sale"})," m\xe0 b\u1ea1n c\xf3 th\u1ec3 t\xecm th\u1ea5y trong file ",(0,e.jsx)(t.code,{children:"internal.rs"}),". \u0110i\u1ec1u n\xe0y s\u1ebd y\xeau c\u1ea7u m\u1ed9t yoctoNEAR v\xec l\xfd do b\u1ea3o m\u1eadt."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/sale.rs#L23-L34\n"})}),"\n",(0,e.jsx)(t.h3,{id:"updating-price",children:"C\u1eadp nh\u1eadt gi\xe1"}),"\n",(0,e.jsxs)(t.p,{children:["\u0110\u1ec3 c\u1eadp nh\u1eadt gi\xe1 ni\xeam y\u1ebft c\u1ee7a token, ch\u1ee7 s\u1edf h\u1eefu ph\u1ea3i call function ",(0,e.jsx)(t.code,{children:"update_price"})," v\xe0 truy\u1ec1n v\xe0o contract, token ID, v\xe0 gi\xe1 mong mu\u1ed1n. Vi\u1ec7c n\xe0y s\u1ebd l\u1ea5y sale object, thay \u0111\u1ed5i c\xe1c \u0111i\u1ec1u ki\u1ec7n sale v\xe0 ch\xe8n n\xf3 tr\u1edf l\u1ea1i. V\xec l\xfd do b\u1ea3o m\u1eadt, function n\xe0y s\u1ebd y\xeau c\u1ea7u m\u1ed9t yoctoNEAR."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/sale.rs#L36-L65\n"})}),"\n",(0,e.jsx)(t.h3,{id:"purchasing-nfts",children:"Mua c\xe1c NFT"}),"\n",(0,e.jsxs)(t.p,{children:["\u0110\u1ec3 mua c\xe1c NFT, b\u1ea1n ph\u1ea3i call function ",(0,e.jsx)(t.code,{children:"offer"}),". N\xf3 nh\u1eadn ",(0,e.jsx)(t.code,{children:"nft_contract_id"})," v\xe0 ",(0,e.jsx)(t.code,{children:"token_id"})," l\xe0m tham s\u1ed1. B\u1ea1n ph\u1ea3i \u0111\xednh k\xe8m \u0111\xfang l\u01b0\u1ee3ng NEAR v\xe0o call n\xe0y \u0111\u1ec3 thanh to\xe1n. Ph\xeda \u0111\u1eb1ng sau, vi\u1ec7c n\xe0y s\u1ebd \u0111\u1ea3m b\u1ea3o kho\u1ea3n ti\u1ec1n g\u1eedi c\u1ee7a b\u1ea1n l\u1edbn h\u01a1n gi\xe1 ni\xeam y\u1ebft v\xe0 call m\u1ed9t private method ",(0,e.jsx)(t.code,{children:"process_purchase"})," s\u1ebd th\u1ef1c hi\u1ec7n m\u1ed9t cross-contract call t\u1edbi NFT contract \u0111\u1ec3 g\u1ecdi function ",(0,e.jsx)(t.code,{children:"nft_transfer_payout"}),". This will transfer the NFT using the ",(0,e.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/ApprovalManagement",children:"approval management"})," standard that you learned about and it will return the ",(0,e.jsx)(t.code,{children:"Payout"})," object which includes royalties."]}),"\n",(0,e.jsxs)(t.p,{children:["Sau \u0111\xf3 marketplace s\u1ebd call ",(0,e.jsx)(t.code,{children:"resolve_purchase"}),", n\u01a1i n\xf3 s\u1ebd ki\u1ec3m tra c\xe1c payout object \u0111\u1ed9c h\u1ea1i v\xe0 sau \u0111\xf3 n\u1ebfu m\u1ecdi th\u1ee9 \u0111\u1ec1u t\u1ed1t, n\xf3 s\u1ebd thanh to\xe1n cho \u0111\xfang cho c\xe1c account."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near-examples/nft-tutorial/blob/8.marketplace/market-contract/src/sale.rs#L67-L99\n"})}),"\n",(0,e.jsx)(t.h2,{id:"sale_view-rs",children:"sale_view.rs"}),"\n",(0,e.jsxs)(t.p,{children:["File cu\u1ed1i ch\xfang ta s\u1ebd xem qua l\xe0 ",(0,e.jsx)(t.code,{children:"sale_view.rs"}),". \u0110\xe2y l\xe0 n\u01a1i m\u1ed9t v\xe0i method enumeration \u0111\u01b0\u1ee3c ph\xe1c th\u1ea3o. N\xf3 cho ph\xe9p user truy v\u1ea5n c\xe1c th\xf4ng tin quan tr\u1ecdng li\xean quan \u0111\u1ebfn sale."]}),"\n",(0,e.jsx)(t.h3,{id:"creating-a-sub-account",children:"Creating a sub-account"}),"\n",(0,e.jsx)(t.p,{children:"Run the following command to create a sub-account marketplace of your main account with an initial balance of 25 NEAR which will be transferred from the original to your new account."}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:"near create-account marketplace.$NFT_CONTRACT_ID --masterAccount $NFT_CONTRACT_ID --initialBalance 25\n"})}),"\n",(0,e.jsx)(t.p,{children:"Next, you'll want to export an environment variable for ease of development:"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:"export MARKETPLACE_CONTRACT_ID=marketplace.$NFT_CONTRACT_ID\n"})}),"\n",(0,e.jsx)(t.p,{children:"Using the build script, deploy the contract as you did in the previous tutorials:"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:"near deploy --wasmFile out/market.wasm --accountId\n $MARKETPLACE_CONTRACT_ID\n"})}),"\n",(0,e.jsx)(t.h3,{id:"initialization-and-minting",children:"Initialization and minting"}),"\n",(0,e.jsx)(t.p,{children:"Since this is a new contract, you'll need to initialize it. Use the following command to initialize the contract:"}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:"near call $MARKETPLACE_CONTRACT_ID new '{\"owner_id\": \"'$MARKETPLACE_CONTRACT_ID'\"}' --accountId $MARKETPLACE_CONTRACT_ID\n"})}),"\n",(0,e.jsx)(t.h3,{id:"total-supply",children:"T\u1ed5ng l\u01b0\u1ee3ng cung"}),"\n",(0,e.jsxs)(t.p,{children:["\u0110\u1ec3 truy v\u1ea5n cho t\u1ed5ng l\u01b0\u1ee3ng cung c\u1ee7a c\xe1c NFT \u0111\u01b0\u1ee3c ni\xeam y\u1ebft tr\xean marketplace, b\u1ea1n c\xf3 th\u1ec3 call function ",(0,e.jsx)(t.code,{children:"get_supply_sales"}),". C\xf3 th\u1ec3 xem v\xed d\u1ee5 d\u01b0\u1edbi \u0111\xe2y."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:"near view $MARKETPLACE_CONTRACT_ID get_supply_sales\n"})}),"\n",(0,e.jsx)(t.h3,{id:"total-supply-by-owner",children:"T\u1ed5ng l\u01b0\u1ee3ng cung b\u1edfi ch\u1ee7 s\u1edf h\u1eefu"}),"\n",(0,e.jsxs)(t.p,{children:["\u0110\u1ec3 truy v\u1ea5n t\u1ed5ng l\u01b0\u1ee3ng cung c\u1ee7a c\xe1c NFT \u0111\u01b0\u1ee3c ni\xeam y\u1ebft b\u1edfi m\u1ed9t ch\u1ee7 s\u1edf h\u1eefu \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh tr\xean marketplace, b\u1ea1n c\xf3 th\u1ec3 call function ",(0,e.jsx)(t.code,{children:"get_supply_by_owner_id"}),". C\xf3 th\u1ec3 xem v\xed d\u1ee5 d\u01b0\u1edbi \u0111\xe2y."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_supply_by_owner_id \'{"account_id": "benji.testnet"}\'\n'})}),"\n",(0,e.jsx)(t.h3,{id:"total-supply-by-contract",children:"T\u1ed5ng l\u01b0\u1ee3ng cung theo contract"}),"\n",(0,e.jsxs)(t.p,{children:["\u0110\u1ec3 truy v\u1ea5n t\u1ed5ng l\u01b0\u1ee3ng cung c\xe1c NFT thu\u1ed9c v\u1ec1 m\u1ed9t contract ch\u1ec9 \u0111\u1ecbnh n\xe0o \u0111\xf3, b\u1ea1n c\xf3 th\u1ec3 call function ",(0,e.jsx)(t.code,{children:"get_supply_by_nft_contract_id"}),". C\xf3 th\u1ec3 xem v\xed d\u1ee5 d\u01b0\u1edbi \u0111\xe2y."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_supply_by_nft_contract_id \'{"nft_contract_id": "fayyr-nft.testnet"}\'\n'})}),"\n",(0,e.jsx)(t.h3,{id:"query-listing-information",children:"Truy v\u1ea5n th\xf4ng tin ni\xeam y\u1ebft"}),"\n",(0,e.jsxs)(t.p,{children:["\u0110\u1ec3 truy v\u1ea5n th\xf4ng tin quan tr\u1ecdng c\u1ee7a m\u1ed9t ni\xeam y\u1ebft \u0111\u01b0\u1ee3c ch\u1ec9 \u0111\u1ecbnh, b\u1ea1n c\xf3 th\u1ec3 call function ",(0,e.jsx)(t.code,{children:"get_sale"}),". N\xf3 y\xeau c\u1ea7u b\u1ea1n truy\u1ec1n v\xe0o ",(0,e.jsx)(t.code,{children:"nft_contract_token"}),". \u0110\xe2y th\u1ef1c ch\u1ea5t l\xe0 \u0111\u1ecbnh danh duy nh\u1ea5t cho vi\u1ec7c sale tr\xean market contract gi\u1ed1ng nh\u01b0 \u0111\xe3 gi\u1ea3i th\xedch tr\u01b0\u1edbc \u0111\xf3. \u0110\u1ecbnh danh n\xe0y bao g\u1ed3m NFT contract, theo sau l\xe0 m\u1ed9t ",(0,e.jsx)(t.code,{children:"DELIMITER"})," v\xe0 sau n\u1eefa l\xe0 token ID. Trong contract n\xe0y, ",(0,e.jsx)(t.code,{children:"DELIMITER"})," \u0111\u01a1n gi\u1ea3n l\xe0 m\u1ed9t d\u1ea5u: ",(0,e.jsx)(t.code,{children:"."})," m\xe0 th\xf4i.  D\u01b0\u1edbi \u0111\xe2y l\xe0 m\u1ed9t v\xed d\u1ee5 v\u1ec1 truy v\u1ea5n n\xe0y."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_sale \'{"nft_contract_token": "fayyr-nft.testnet.token-42"}\'\n'})}),"\n",(0,e.jsxs)(t.p,{children:["Ngo\xe0i ra, b\u1ea1n c\xf3 th\u1ec3 truy v\u1ea5n th\xf4ng tin v\u1ec1 ni\xeam y\u1ebft \u0111\u01b0\u1ee3c ph\xe2n trang c\u1ee7a m\u1ed9t ch\u1ee7 s\u1edf h\u1eefu nh\u1ea5t \u0111\u1ecbnh b\u1eb1ng c\xe1ch g\u1ecdi function ",(0,e.jsx)(t.code,{children:"get_sales_by_owner_id"}),"."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_sales_by_owner_id \'{"account_id": "benji.testnet", "from_index": "5", "limit": 10}\'\n'})}),"\n",(0,e.jsxs)(t.p,{children:["Cu\u1ed1i c\xf9ng, b\u1ea1n c\xf3 th\u1ec3 truy v\u1ea5n th\xf4ng tin v\u1ec1 ni\xeam y\u1ebft \u0111\u01b0\u1ee3c ph\xe2n trang b\u1eaft \u0111\u1ea7u t\u1eeb m\u1ed9t NFT contract nh\u1ea5t \u0111\u1ecbnh b\u1eb1ng c\xe1ch g\u1ecdi function ",(0,e.jsx)(t.code,{children:"get_sales_by_nft_contract_id"}),"."]}),"\n",(0,e.jsx)(t.pre,{children:(0,e.jsx)(t.code,{className:"language-bash",children:'near view $MARKETPLACE_CONTRACT_ID get_sales_by_nft_contract_id \'{"nft_contract_id": "fayyr-nft.testnet", "from_index": "5", "limit": 10}\'\n'})}),"\n",(0,e.jsx)(t.h2,{id:"t\u1ed5ng-k\u1ebft",children:"T\u1ed5ng k\u1ebft"}),"\n",(0,e.jsxs)(t.p,{children:["Trong h\u01b0\u1edbng d\u1eabn n\xe0y, b\u1ea1n \u0111\xe3 h\u1ecdc v\u1ec1 nh\u1eefng th\u1ee9 c\u01a1 b\u1ea3n c\u1ee7a m\u1ed9t marketplace contract v\xe0 n\xf3 l\xe0m vi\u1ec7c nh\u01b0 th\u1ebf n\xe0o. B\u1ea1n \u0111\xe3 xem qua file ",(0,e.jsx)(t.a,{href:"#lib-rs",children:"lib.rs"})," v\xe0 \u0111\xe3 t\xecm hi\u1ec3u v\u1ec1 ",(0,e.jsx)(t.a,{href:"#initialization-function",children:"initialization function"}),", th\xeam n\u1eefa l\xe0 ",(0,e.jsx)(t.a,{href:"#storage-management-model",children:"storage management"})," model."]}),"\n",(0,e.jsxs)(t.p,{children:["Sau \u0111\xf3, b\u1ea1n \u0111\xe3 xem qua file ",(0,e.jsx)(t.a,{href:"#nft_callbacks-rs",children:"nft_callbacks"})," \u0111\u1ec3 hi\u1ec3u c\xe1ch ",(0,e.jsx)(t.a,{href:"#listing-logic",children:"ni\xeam y\u1ebft c\xe1c NFT"}),". Ngo\xe0i ra, b\u1ea1n \u0111\xe3 xem qua m\u1ed9t s\u1ed1 function quan tr\u1ecdng c\u1ea7n thi\u1ebft sau khi b\u1ea1n \u0111\xe3 ni\xeam y\u1ebft m\u1ed9t NFT. N\xf3 bao g\u1ed3m ",(0,e.jsx)(t.a,{href:"#removing-sales",children:"x\xf3a sale"}),", ",(0,e.jsx)(t.a,{href:"#updating-price",children:"c\u1eadp nh\u1eadt gi\xe1"}),", v\xe0 ",(0,e.jsx)(t.a,{href:"#purchasing-nfts",children:"mua c\xe1c NFT"}),"."]}),"\n",(0,e.jsxs)(t.p,{children:["Cu\u1ed1i c\xf9ng, b\u1ea1n xem qua c\xe1c enumaration method trong file ",(0,e.jsx)(t.a,{href:"#sale_view-rs",children:(0,e.jsx)(t.code,{children:"sale_view"})}),". Ch\xfang cho ph\xe9p b\u1ea1n truy v\u1ea5n th\xf4ng tin quan tr\u1ecdng \u0111\u01b0\u1ee3c t\xecm th\u1ea5y tr\xean marketplace contract."]}),"\n",(0,e.jsxs)(t.p,{children:["B\xe2y gi\u1edd b\u1ea1n \u0111\xe3 c\xf3 hi\u1ec3u bi\u1ebft v\u1eefng ch\u1eafc v\u1ec1 NFT v\xe0 marketplace tr\xean NEAR. Vui l\xf2ng t\xe1ch branch v\xe0 m\u1edf r\u1ed9ng nh\u1eefng contract n\xe0y \u0111\u1ec3 t\u1ea1o b\u1ea5t k\u1ef3 \u1ee9ng d\u1ee5ng th\xfa v\u1ecb n\xe0o b\u1ea1n mu\u1ed1n. In the ",(0,e.jsx)(t.a,{href:"/vi/tutorials/nfts/series",children:"next tutorial"}),", you'll learn how to take the existing NFT contract and optimize it to allow for:"]}),"\n",(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsx)(t.li,{children:"Lazy Minting"}),"\n",(0,e.jsx)(t.li,{children:"Creating Collections"}),"\n",(0,e.jsx)(t.li,{children:"Allowlisting functionalities"}),"\n",(0,e.jsx)(t.li,{children:"Optimized Storage Models"}),"\n"]}),"\n",(0,e.jsxs)(t.admonition,{title:"Versioning for this article",type:"note",children:[(0,e.jsx)(t.p,{children:"At the time of this writing, this example works with the following versions:"}),(0,e.jsxs)(t.ul,{children:["\n",(0,e.jsxs)(t.li,{children:["near-cli: ",(0,e.jsx)(t.code,{children:"3.0.0"})]}),"\n",(0,e.jsxs)(t.li,{children:["NFT standard: ",(0,e.jsx)(t.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core",children:"NEP171"}),", version ",(0,e.jsx)(t.code,{children:"1.0.0"})]}),"\n"]})]})]})}function d(n={}){const{wrapper:t}={...(0,i.a)(),...n.components};return t?(0,e.jsx)(t,{...n,children:(0,e.jsx)(o,{...n})}):o(n)}},11151:(n,t,c)=>{c.d(t,{Z:()=>l,a:()=>r});var e=c(67294);const i={},a=e.createContext(i);function r(n){const t=e.useContext(a);return e.useMemo((function(){return"function"==typeof n?n(t):{...t,...n}}),[t,n])}function l(n){let t;return t=n.disableParentContext?"function"==typeof n.components?n.components(i):n.components||i:r(n.components),e.createElement(a.Provider,{value:t},n.children)}}}]);