"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6318],{65846:(s,e,t)=>{t.r(e),t.d(e,{assets:()=>c,contentTitle:()=>o,default:()=>h,frontMatter:()=>i,metadata:()=>l,toc:()=>d});var n=t(85893),r=t(11151);const i={sidebar_position:2,sidebar_label:"Rust \ubc0f \ucee8\ud2b8\ub799\ud2b8 \ubf08\ub300 \uc124\uc815",title:"Rust\ub97c \uc124\uc815\ud558\uace0, NEAR \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uacfc NEAR CLI\ub97c \uc124\uc815\ud558\uba70, \uae30\ubcf8\uc801\uc778 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubf08\ub300\ub97c \uc900\ube44\ud558\uc138\uc694"},o="\uc2dc\uc791\ud558\uae30",l={id:"tutorials/crosswords/basics/set-up-skeleton",title:"Rust\ub97c \uc124\uc815\ud558\uace0, NEAR \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uacfc NEAR CLI\ub97c \uc124\uc815\ud558\uba70, \uae30\ubcf8\uc801\uc778 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubf08\ub300\ub97c \uc900\ube44\ud558\uc138\uc694",description:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc744 \ub9cc\ub4e4\uace0, NEAR CLI\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucef4\ud4e8\ud130 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc5d0 \ud0a4\ub97c \ucd94\uac00\ud558\uace0 Rust \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \ubf08\ub300\ub97c \uc124\uc815\ud569\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/crosswords/01-basics/01-set-up-skeleton.md",sourceDirName:"3.tutorials/crosswords/01-basics",slug:"/tutorials/crosswords/basics/set-up-skeleton",permalink:"/ko/tutorials/crosswords/basics/set-up-skeleton",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/crosswords/01-basics/01-set-up-skeleton.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",sidebarPosition:2,frontMatter:{sidebar_position:2,sidebar_label:"Rust \ubc0f \ucee8\ud2b8\ub799\ud2b8 \ubf08\ub300 \uc124\uc815",title:"Rust\ub97c \uc124\uc815\ud558\uace0, NEAR \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uacfc NEAR CLI\ub97c \uc124\uc815\ud558\uba70, \uae30\ubcf8\uc801\uc778 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8 \ubf08\ub300\ub97c \uc900\ube44\ud558\uc138\uc694"},sidebar:"contracts",previous:{title:"\uc2ed\uc790\ub9d0\ud480\uc774 \uac8c\uc784 \uac1c\uc694",permalink:"/ko/tutorials/crosswords/basics/overview"},next:{title:"\uae30\ubcf8 \ucf54\ub4dc \ucd94\uac00, \ud558\uc704 \uacc4\uc815 \uc0dd\uc131 \ubc0f \uba54\uc11c\ub4dc \ud638\ucd9c",permalink:"/ko/tutorials/crosswords/basics/add-functions-call"}},c={},d=[{value:"\ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815 \uc5bb\uae30",id:"\ud14c\uc2a4\ud2b8\ub137-\uacc4\uc815-\uc5bb\uae30",level:2},{value:"\ucef4\ud4e8\ud130\uc5d0\uc11c \uc0c8 \ud0a4 \ub9cc\ub4e4\uae30",id:"\ucef4\ud4e8\ud130\uc5d0\uc11c-\uc0c8-\ud0a4-\ub9cc\ub4e4\uae30",level:2},{value:"Rust \uc124\uc815",id:"rust-\uc124\uc815",level:2},{value:"<code>rustup</code>\uc744 \uc0ac\uc6a9\ud558\uc5ec Rust \uc124\uce58",id:"rustup\uc744-\uc0ac\uc6a9\ud558\uc5ec-rust-\uc124\uce58",level:3},{value:"Wasm \ud234\uccb4\uc778 \ucd94\uac00",id:"wasm-\ud234\uccb4\uc778-\ucd94\uac00",level:3},{value:"Rust \uc791\uc131\uc744 \uc2dc\uc791\ud558\uc138\uc694!",id:"rust-\uc791\uc131\uc744-\uc2dc\uc791\ud558\uc138\uc694",level:2}];function a(s){const e={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",h3:"h3",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...s.components};return(0,n.jsxs)(n.Fragment,{children:[(0,n.jsx)(e.h1,{id:"\uc2dc\uc791\ud558\uae30",children:"\uc2dc\uc791\ud558\uae30"}),"\n",(0,n.jsx)(e.p,{children:"\uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc5d0\uc11c\ub294 \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc744 \ub9cc\ub4e4\uace0, NEAR CLI\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucef4\ud4e8\ud130 \ud30c\uc77c \uc2dc\uc2a4\ud15c\uc5d0 \ud0a4\ub97c \ucd94\uac00\ud558\uace0 Rust \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc758 \uae30\ubcf8 \ubf08\ub300\ub97c \uc124\uc815\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(e.h2,{id:"\ud14c\uc2a4\ud2b8\ub137-\uacc4\uc815-\uc5bb\uae30",children:"\ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815 \uc5bb\uae30"}),"\n",(0,n.jsxs)(e.p,{children:["Visit ",(0,n.jsx)(e.a,{href:"https://testnet.mynearwallet.com/",children:"NEAR Wallet for testnet"})," and register for a free account. \uc774 \ud29c\ud1a0\ub9ac\uc5bc\uc758 \ubaa9\uc801\uc0c1, \uc6d0\ud558\ub294 \uacbd\uc6b0 2\ub2e8\uacc4 \uc778\uc99d\uc744 \ucd94\uac00\ud558\ub294 \uc635\uc158\uc744 \uac74\ub108\ub6f8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(e.admonition,{title:"\ubc29\uae08 \ubb34\uc2a8 \uc77c\uc774 \uc77c\uc5b4\ub0ac\ub098\uc694?",type:"note",children:(0,n.jsx)(e.p,{children:"NEAR \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc744 \uc0dd\uc131\ud558\uba74 \uac1c\uc778 \ud0a4\uac00 \uc0dd\uc131\ub418\uc5b4 \ube0c\ub77c\uc6b0\uc800\uc758 \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0 \uc800\uc7a5\ub429\ub2c8\ub2e4. \uac1c\ubc1c\uc790 \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc774\ub97c \uac80\uc0ac\ud558\uace0 \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})}),"\n",(0,n.jsx)(e.h2,{id:"\ucef4\ud4e8\ud130\uc5d0\uc11c-\uc0c8-\ud0a4-\ub9cc\ub4e4\uae30",children:"\ucef4\ud4e8\ud130\uc5d0\uc11c \uc0c8 \ud0a4 \ub9cc\ub4e4\uae30"}),"\n",(0,n.jsxs)(e.p,{children:["\uba85\ub839\uc904 \uc778\ud130\ud398\uc774\uc2a4(CLI) \ub3c4\uad6c\ub97c \uc0ac\uc6a9\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud558\ub824\uace0 \ud558\uc9c0\ub9cc, \ud604\uc7ac \uac1c\uc778 \ud0a4\ub294 \ube0c\ub77c\uc6b0\uc800\uc5d0\ub9cc \uc874\uc7ac\ud569\ub2c8\ub2e4. \ub2e4\uc74c\uc73c\ub85c \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc5d0 \uc0c8 \ud0a4\ub97c ",(0,n.jsx)(e.em,{children:"\ucd94\uac00"})," \ud558\uace0 \uc774\ub97c JSON \ud30c\uc77c\ub85c \ucef4\ud4e8\ud130\uc5d0 \ub85c\uceec\ub85c \uc800\uc7a5\ud569\ub2c8\ub2e4. (NEAR \uacc4\uc815 \ub0b4\uc5d0\ub294 \uc5ec\ub7ec \uac1c\uc758 \ud0a4\ub97c \uac00\uc9c8 \uc218 \uc788\uc73c\uba70 \uc774\ub294 \ub9e4\uc6b0 \uac15\ub825\ud569\ub2c8\ub2e4!)"]}),"\n",(0,n.jsxs)(e.p,{children:["NEAR CLI\ub97c \uc124\uce58\ud574 \ubd05\uc2dc\ub2e4. (",(0,n.jsx)(e.a,{href:"https://nodejs.org/",children:"NodeJS"})," \ubc84\uc804\uc774 12 \uc774\uc0c1\uc778\uc9c0 \ud655\uc778\ud558\uc138\uc694.)"]}),"\n",(0,n.jsx)(e.p,{children:"npm install -g near-cli"}),"\n",(0,n.jsx)(e.p,{children:"\uc774\uc81c \ub2e4\uc74c\uc744 \uc2e4\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,n.jsx)(e.p,{children:"near"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://docs.near.org/tools/near-cli",children:"\uc5ec\uae30"}),"\uc5d0\uc11c, \ub2e4\ub8e8\uace0 \uc788\ub294 \ub2e4\uc591\ud55c \uba85\ub839\uc5d0 \uc790\uc138\ud788 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsx)(e.p,{children:'\ub2e4\uc74c \uba85\ub839\uc73c\ub85c "\ub85c\uadf8\uc778"\ud558\uc5ec \uc2dc\uc791\ud558\uaca0\uc2b5\ub2c8\ub2e4.'}),"\n",(0,n.jsx)(e.p,{children:"near login"}),"\n",(0,n.jsxs)(e.p,{children:["\uc774\ub807\uac8c \ud558\uba74, ",(0,n.jsx)(e.strong,{children:"\uc804\uccb4 \uc561\uc138\uc2a4"}),' \ud0a4 \uc0dd\uc131\uc744 \ud655\uc778\ud560 \uc218 \uc788\ub294 NEAR \uc9c0\uac11\uc73c\ub85c \ub2e4\uc2dc \uc774\ub3d9\ud569\ub2c8\ub2e4. \ub098\uc911\uc5d0 \uc804\uccb4 \uc561\uc138\uc2a4 \ubc0f \ud568\uc218 \ud638\ucd9c \uc561\uc138\uc2a4 \ud0a4\uc5d0 \ub300\ud574 \uc54c\uc544\ubcf4\uaca0\uc2b5\ub2c8\ub2e4. "\ubc30\ud3ec"\uc640 \uac19\uc740 \uac15\ub825\ud55c \uc791\uc5c5\uc5d0\ub294 \uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\uac00 \ud544\uc694\ud569\ub2c8\ub2e4. \ub85c\uadf8\uc778 \uba85\ub839\uc758 \uc9c0\uce68\uc5d0 \ub530\ub77c \ud558\ub4dc \ub4dc\ub77c\uc774\ube0c\uc5d0 \ud0a4\ub97c \ub9cc\ub4ed\ub2c8\ub2e4. \uc774\uac83\uc740 \uc6b4\uc601 \uccb4\uc81c\uc758 \ud648 \ub514\ub809\ud1a0\ub9ac\uc5d0 \uc704\uce58\ud55c ',(0,n.jsx)(e.code,{children:".near-credentials"}),"\ub77c\ub294 \ud3f4\ub354\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(e.admonition,{type:"note",children:[(0,n.jsxs)(e.mdxAdmonitionTitle,{children:["\ud0a4\ub294 \uc5b4\ub5bb\uac8c \ucd94\uac00\ub418\uc5c8\ub098\uc694? ",(0,n.jsx)(e.code,{children:"near login"}),'\ub97c \uce58\uba74, NEAR CLI\uac00 \uac1c\uc778 \ud0a4\uc640 \uacf5\uac1c \ud0a4\uc758 \ud0a4 \uc30d\uc744 \uc0dd\uc131\ud569\ub2c8\ub2e4. NEAR CLI\ub294 \uac1c\uc778 \ud0a4\ub97c JSON \ud30c\uc77c\uc5d0 \ubcf4\uad00\ud558\uace0, \uacf5\uac1c \ud0a4\ub97c URL \ub9e4\uac1c\ubcc0\uc218\ub85c NEAR \uc9c0\uac11\uc5d0 \ubcf4\ub0c5\ub2c8\ub2e4. URL\uc740 \uae38\uace0, NEAR \uc9c0\uac11 \uacc4\uc815\uc5d0 "\uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4\ub97c \ucd94\uac00"\ud558\ub3c4\ub85d \uc9c0\uc2dc\ud558\ub294 \uae30\ud0c0 \uc815\ubcf4\uac00 \ud3ec\ud568\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4. \uc6b0\ub9ac \ube0c\ub77c\uc6b0\uc800\uc758 \ub85c\uceec \uc2a4\ud1a0\ub9ac\uc9c0\uc5d0\ub294 \ub2e4\ub978 \ud0a4\ub97c \ucd94\uac00\ud558\ub294 \uac83\uc744 \ud3ec\ud568\ud558\uc5ec \uc5ec\ub7ec \uc791\uc5c5\uc744 \uc218\ud589\ud560 \uc218 \uc788\ub294 \ud0a4(\uacc4\uc815\uc774 \ub9cc\ub4e4\uc5b4\uc9c8 \ub54c \uc0dd\uc131\ub428)\uac00 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 URL \ub9e4\uac1c\ubcc0\uc218\uc5d0\uc11c \uacf5\uac1c \ud0a4\ub97c \uac00\uc838\uc640 \uc774\ub97c \uc778\uc218\ub85c \uc0ac\uc6a9\ud558\uc5ec, \ud14c\uc2a4\ud2b8\ub137 \uacc4\uc815\uc5d0 \ucd94\uac00 \ud0a4\ub97c \ub9cc\ub4e4\uc5c8\uc2b5\ub2c8\ub2e4! :::']}),(0,n.jsxs)(e.p,{children:["You can see the keys associated with your account by running the following command, replacing ",(0,n.jsx)(e.code,{children:"friend.testnet"})," with your account name:"]}),(0,n.jsx)(e.p,{children:"near keys friend.testnet"}),(0,n.jsx)(e.h2,{id:"rust-\uc124\uc815",children:"Rust \uc124\uc815"}),(0,n.jsxs)(e.p,{children:["Rust\ub97c \uc2dc\uc791\ud558\uae30 \uc704\ud55c \ud6cc\ub96d\ud55c \ub9ac\uc18c\uc2a4\uc778 ",(0,n.jsx)(e.a,{href:"https://doc.rust-lang.org/stable/book",children:"\uc628\ub77c\uc778 Rust Book"}),"\uc744 \ud65c\uc6a9\ud560 \uc218\ub3c4 \uc788\uc2b5\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ube14\ub85d\uccb4\uc778 \uac1c\ubc1c\uacfc \uad00\ub828\ud558\uc5ec \uace0\ub824\ud574\uc57c\ud560 \uc8fc\uc694 \ud56d\ubaa9\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \ube14\ub85d\uccb4\uc778 \uac1c\ubc1c\uacfc \uad00\ub828\ud558\uc5ec \uace0\ub824\ud574\uc57c\ud560 \uc8fc\uc694 \ud56d\ubaa9\uc774 \uc874\uc7ac\ud569\ub2c8\ub2e4. \uc989, \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 \uae30\uc220\uc801\uc73c\ub85c ",(0,n.jsx)(e.a,{href:"https://learning-rust.github.io/docs/cargo-crates-and-basic-project-structure/#crate",children:"\ubc14\uc774\ub108\ub9ac\uac00 \uc544\ub2c8\ub77c \ub77c\uc774\ube0c\ub7ec\ub9ac"}),"\uc785\ub2c8\ub2e4. \uadf8\ub7ec\ub098 \uc9c0\uae08\uc740 Rust Book\uc5d0\uc11c \uc77c\ubc18\uc801\uc73c\ub85c \ubc1c\uacac\ub418\ub294 \uc77c\ubd80 \uba85\ub839\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744 \uac83\uc774\ub77c\ub294 \uc810\ub9cc \uc54c\uace0 \uc788\uc5b4\ub3c4 \uc88b\uc2b5\ub2c8\ub2e4."]}),(0,n.jsx)(e.admonition,{title:"\uc6b0\ub9ac\ub294 \ucee8\ud2b8\ub799\ud2b8 \uac1c\ubc1c\uc5d0\uc11c \ub2e4\uc74c\uc744 \uc0ac\uc6a9\ud558\uc9c0 \uc54a\uc744 \uac83\uc785\ub2c8\ub2e4.",type:"caution",children:(0,n.jsx)(e.p,{children:"cargo run"})})]}),"\n",(0,n.jsx)(e.p,{children:"\ub300\uc2e0 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uad6c\ucd95\ud558\uace0 \ud14c\uc2a4\ud2b8\ub97c \uc2e4\ud589\ud558\ub294 \ud589\uc704\ub97c \ubc18\ubcf5\ud560 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,n.jsxs)(e.h3,{id:"rustup\uc744-\uc0ac\uc6a9\ud558\uc5ec-rust-\uc124\uce58",children:[(0,n.jsx)(e.code,{children:"rustup"}),"\uc744 \uc0ac\uc6a9\ud558\uc5ec Rust \uc124\uce58"]}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://rustup.rs/#",children:"Rustup \uc0ac\uc774\ud2b8"}),"\uc758 \uc9c0\uce68\uc744 \ucc38\uc870\ud558\uc138\uc694. OS X \ub610\ub294 Unix\uc758 \uacbd\uc6b0 \ub2e4\uc74c\uc744 \uc0ac\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(e.p,{children:["curl --proto '=https' --tlsv1.2 -sSf ",(0,n.jsx)(e.a,{href:"https://sh.rustup.rs",children:"https://sh.rustup.rs"})," | sh"]}),"\n",(0,n.jsxs)(e.p,{children:["(",(0,n.jsx)(e.a,{href:"https://www.rust-lang.org/tools/install",children:"Rust \uc124\uce58 \uac00\uc774\ub4dc"}),"\uc5d0\uc11c \uac00\uc838\uc654\uc2b5\ub2c8\ub2e4.)"]}),"\n",(0,n.jsx)(e.h3,{id:"wasm-\ud234\uccb4\uc778-\ucd94\uac00",children:"Wasm \ud234\uccb4\uc778 \ucd94\uac00"}),"\n",(0,n.jsx)(e.p,{children:"\uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub294 WebAssembly(Wasm)\ub85c \ucef4\ud30c\uc77c\ub418\ubbc0\ub85c, Rust\uc6a9 \ud234\uccb4\uc778\uc744 \ucd94\uac00\ud569\ub2c8\ub2e4."}),"\n",(0,n.jsx)(e.p,{children:"rustup target add wasm32-unknown-unknown"}),"\n",(0,n.jsxs)(e.p,{children:["(\ub300\uc0c1 \ubc0f \ud234\uccb4\uc778\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \uc815\ubcf4\ub294 ",(0,n.jsx)(e.a,{href:"https://doc.rust-lang.org/edition-guide/rust-2018/platform-and-target-support/webassembly-support.html",children:"\uc5ec\uae30"}),"\uc788\uc2b5\ub2c8\ub2e4.)"]}),"\n",(0,n.jsx)(e.h2,{id:"rust-\uc791\uc131\uc744-\uc2dc\uc791\ud558\uc138\uc694",children:"Rust \uc791\uc131\uc744 \uc2dc\uc791\ud558\uc138\uc694!"}),"\n",(0,n.jsxs)(e.p,{children:[(0,n.jsx)(e.a,{href:"https://github.com/near/boilerplate-template-rs",children:"\uc5ec\uae30"}),"\uc5d0 \ubcf5\uc81c\ud558\uac70\ub098 \ub2e4\uc6b4\ub85c\ub4dc\ud558\ub294 \ub370 \uc720\uc6a9\ud55c \uae30\ubcf8 \ub808\ud37c\uc9c0\ud1a0\ub9ac\uac00 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(e.p,{children:["\uac00\uc7a5 \uba3c\uc800 \ud560 \uc77c\uc740 ",(0,n.jsx)(e.code,{children:"Cargo.toml"}),"\uc5d0\uc11c \ub9e4\ub2c8\ud398\uc2a4\ud2b8 \ud30c\uc77c\uc744 \uc218\uc815\ud558\ub294 \uac83\uc785\ub2c8\ub2e4:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-diff",children:'[package]\n-  name = "rust-template"\n+  name = "my-crossword"\nversion = "0.1.0"\n- authors = ["Near Inc <hello@near.org>"]\n+ authors = ["NEAR Friend <friend@example.com>"]\nedition = "2018"\n'})}),"\n",(0,n.jsxs)(e.p,{children:["\uc5ec\uae30\uc5d0\uc11c ",(0,n.jsx)(e.code,{children:"name"}),"\uc744 \ubcc0\uacbd\ud558\uba74, \ube4c\ub4dc \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud55c \ud6c4 \ucef4\ud30c\uc77c\ub41c Wasm \ud30c\uc77c\uc758 \uc774\ub984\uc774 \ubcc0\uacbd\ub429\ub2c8\ub2e4. (OS X \ubc0f Linux\uc6a9\uc73c\ub85c\ub294 ",(0,n.jsx)(e.code,{children:"build.sh"}),", Windows\uc6a9\uc73c\ub85c\ub294 ",(0,n.jsx)(e.code,{children:"build.bat"}),") \ube4c\ub4dc \uc2a4\ud06c\ub9bd\ud2b8\ub97c \uc2e4\ud589\ud55c \ud6c4, ",(0,n.jsx)(e.code,{children:"res/my_crossword.wasm"})," \ub0b4\uc5d0\uc11c \ucef4\ud30c\uc77c\ub41c Wasm \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \ud655\uc778\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(e.p,{children:["\uc774\uc81c ",(0,n.jsx)(e.code,{children:"src/lib.rs"})," \ub0b4 \uba54\uc778 \ud30c\uc77c\uc744 \uc0b4\ud3b4\ubcf4\uaca0\uc2b5\ub2c8\ub2e4:"]}),"\n",(0,n.jsx)(e.pre,{children:(0,n.jsx)(e.code,{className:"language-rust",metastring:"reference",children:"https://github.com/near/boilerplate-template-rs/blob/f1edeead98a9ec12c3f6db311f62025305f57874/contract/src/lib.rs#L8-L44\n"})}),"\n",(0,n.jsx)(e.p,{children:"\ubcf4\uc2dc\ub2e4\uc2dc\ud53c, \uc5ec\uae30\uc5d0 \uc5ec\ub7ec \uac00\uc9c0\ub97c \ucc44\uc6cc\uc57c \ud569\ub2c8\ub2e4. \uc7a0\uc2dc \uba48\ucd94\uace0 \uba87 \uac00\uc9c0 \ud56d\ubaa9\uc744 \uc9c0\uc801\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4:"}),"\n",(0,n.jsxs)(e.ul,{children:["\n",(0,n.jsxs)(e.li,{children:[(0,n.jsxs)(e.a,{href:"/sdk/rust/contract-structure/near-bindgen",children:[(0,n.jsx)(e.strong,{children:"near_bindgen"})," \ub9e4\ud06c\ub85c"]}),"\ub294 struct\uc640 impl \uc704\uc5d0 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(e.li,{children:["\uc5ec\uae30\uc11c \uae30\ubcf8 \uad6c\uc870\uccb4\ub294 ",(0,n.jsx)(e.code,{children:"Contract"}),"\uc774\uc9c0\ub9cc, \ub2e4\ub978 \uc608\uc5d0\uc11c\ub294 ",(0,n.jsx)(e.code,{children:"Counter"}),"\uc774\uac70\ub098 \ub2e4\ub978 \uac83\uc77c \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub294 \uc21c\uc804\ud788 \uc791\uc131\uc790\uc758 \ub9c8\uc74c\uc774\uc9c0\ub9cc, \uc774\uc804 \ud56d\ubaa9\uc758 \ub9c1\ud06c\uc5d0\uc11c \ub354 \ub9ce\uc740 \uc815\ubcf4\ub97c \uc5bb\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,n.jsxs)(e.li,{children:["\"Borsh\"\ub77c\ub294 \ub2e8\uc5b4\ub97c \ubcf4\uace0 \uadf8\uac83\uc774 \ubb34\uc5c7\uc744 \uc758\ubbf8\ud558\ub294\uc9c0 \uad81\uae08\ud560 \uac83\uc785\ub2c8\ub2e4. \uc774\uac83\uc740 \ubc14\uc774\ub108\ub9ac \uc9c1\ub82c \ubcc0\ud658\uae30\uc785\ub2c8\ub2e4. Eventually, we'll want to save data as ones and zeroes to validators' hard drives, and do it efficiently. We use Borsh for this, as is explained ",(0,n.jsx)(e.a,{href:"https://borsh.io",children:"on this website"}),"."]}),"\n"]}),"\n",(0,n.jsx)(e.p,{children:"Next, let's modify this contract little by little\u2026"})]})}function h(s={}){const{wrapper:e}={...(0,r.a)(),...s.components};return e?(0,n.jsx)(e,{...s,children:(0,n.jsx)(a,{...s})}):a(s)}},11151:(s,e,t)=>{t.d(e,{Z:()=>l,a:()=>o});var n=t(67294);const r={},i=n.createContext(r);function o(s){const e=n.useContext(i);return n.useMemo((function(){return"function"==typeof s?s(e):{...e,...s}}),[e,s])}function l(s){let e;return e=s.disableParentContext?"function"==typeof s.components?s.components(r):s.components||r:o(s.components),n.createElement(i.Provider,{value:e},s.children)}}}]);