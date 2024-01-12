"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2776],{78442:(e,n,r)=>{r.r(n),r.d(n,{assets:()=>o,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>i,toc:()=>u});var t=r(85893),a=r(11151),s=(r(74866),r(85162),r(77229));const l={id:"factory",title:"\ud329\ud1a0\ub9ac"},c=void 0,i={id:"tutorials/examples/factory",title:"\ud329\ud1a0\ub9ac",description:"\ud329\ud1a0\ub9ac\ub294 \uc790\uccb4\uc801\uc73c\ub85c \ucef4\ud30c\uc77c\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc800\uc7a5\ud558\uace0 \ud558\uc704 \uacc4\uc815(sub-account)\uc5d0 \ubc30\ud3ec\ud558\ub294 \uac83\uc744 \uc790\ub3d9\ud654\ud558\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc785\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/3.tutorials/examples/factory.md",sourceDirName:"3.tutorials/examples",slug:"/tutorials/examples/factory",permalink:"/ko/tutorials/examples/factory",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/3.tutorials/examples/factory.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",frontMatter:{id:"factory",title:"\ud329\ud1a0\ub9ac"},sidebar:"contracts",previous:{title:"\ub3d9\uc804 \ub358\uc9c0\uae30",permalink:"/ko/tutorials/examples/coin-flip"},next:{title:"\ubcf5\uc7a1\ud55c \uad50\ucc28 \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c(Cross Contract Call)",permalink:"/ko/tutorials/examples/advanced-xcc"}},o={},u=[{value:"\uc77c\ubc18 \ud329\ud1a0\ub9ac",id:"\uc77c\ubc18-\ud329\ud1a0\ub9ac",level:2},{value:"Quickstart",id:"quickstart",level:2},{value:"\ud329\ud1a0\ub9ac \uad6c\ucd95 \ubc0f \ubc30\ud3ec",id:"\ud329\ud1a0\ub9ac-\uad6c\ucd95-\ubc0f-\ubc30\ud3ec",level:3},{value:"\uc800\uc7a5\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \ud558\uc704 \uac8c\uc815\uc5d0 \ubc30\ud3ec",id:"\uc800\uc7a5\ub41c-\ucee8\ud2b8\ub799\ud2b8\ub97c-\ud558\uc704-\uac8c\uc815\uc5d0-\ubc30\ud3ec",level:3},{value:"\uc800\uc7a5\ub41c \ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8",id:"\uc800\uc7a5\ub41c-\ucee8\ud2b8\ub799\ud2b8-\uc5c5\ub370\uc774\ud2b8",level:3},{value:"\ud329\ud1a0\ub9ac - \uac1c\ub150 &amp; \ud55c\uacc4",id:"\ud329\ud1a0\ub9ac---\uac1c\ub150--\ud55c\uacc4",level:2},{value:"\uc790\ub3d9\uc73c\ub85c \uacc4\uc815 \uc0dd\uc131",id:"\uc790\ub3d9\uc73c\ub85c-\uacc4\uc815-\uc0dd\uc131",level:3},{value:"\uc5c5\ub370\uc774\ud2b8 \uba54\uc11c\ub4dc",id:"\uc5c5\ub370\uc774\ud2b8-\uba54\uc11c\ub4dc",level:3}];function d(e){const n={a:"a",admonition:"admonition",blockquote:"blockquote",code:"code",h2:"h2",h3:"h3",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",strong:"strong",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.p,{children:"\ud329\ud1a0\ub9ac\ub294 \uc790\uccb4\uc801\uc73c\ub85c \ucef4\ud30c\uc77c\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc800\uc7a5\ud558\uace0 \ud558\uc704 \uacc4\uc815(sub-account)\uc5d0 \ubc30\ud3ec\ud558\ub294 \uac83\uc744 \uc790\ub3d9\ud654\ud558\ub294 \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc740 \ub450 \uac00\uc9c0\uc758 \ud329\ud1a0\ub9ac\uc758 \uc608\uc2dc\uac00 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.a,{href:"https://github.com/near-examples/token-factory",children:(0,t.jsx)(n.strong,{children:"\ud1a0\ud070 \ud329\ud1a0\ub9ac"})}),": ",(0,t.jsx)(n.a,{href:"/ko/tutorials/fts/introduction",children:"\ub300\uccb4 \uac00\ub2a5\ud55c \ud1a0\ud070"})," \ucee8\ud2b8\ub799\ud2b8\ub97c \uc0dd\uc131\ud558\ub294 \ud329\ud1a0\ub9ac\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.li,{children:[". ",(0,t.jsx)(n.a,{href:"https://github.com/near-examples/factory-rust",children:(0,t.jsx)(n.strong,{children:"\uc77c\ubc18 \ud329\ud1a0\ub9ac"})}),": ",(0,t.jsx)(n.a,{href:"/ko/tutorials/examples/donation",children:"\uae30\ubd80 \ucee8\ud2b8\ub799\ud2b8"}),"\ub97c \uc0dd\uc131\ud558\uc9c0\ub9cc, \ubc30\ud3ec\ud558\ub294 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\ub294 \ud329\ud1a0\ub9ac\uc785\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsx)(n.p,{children:"In this page we will focus on the Donation factory, to learn more about the token factory visit its repository."})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\uc77c\ubc18-\ud329\ud1a0\ub9ac",children:"\uc77c\ubc18 \ud329\ud1a0\ub9ac"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/near-examples/factory-rust/",children:"\uc77c\ubc18 \ud329\ud1a0\ub9ac"}),"\ub294 \ub2e4\uc74c\uacfc \uac19\uc740 \ucee8\ud2b8\ub799\ud2b8 \ud329\ud1a0\ub9ac\ub97c \uc81c\uacf5\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\uc790\uc2e0\uc758 \ud558\uc704 \uacc4\uc815\uc744 \uc0dd\uc131\ud558\uace0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4 (",(0,t.jsx)(n.code,{children:"create_factory_subaccount_and_deploy"}),")."]}),"\n",(0,t.jsxs)(n.li,{children:[(0,t.jsx)(n.code,{children:"update_stored_contract"})," \uba54\uc11c\ub4dc\ub97c \uc0ac\uc6a9\ud558\uc5ec \uc800\uc7a5\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(s.O2,{children:(0,t.jsxs)(s.SQ,{value:"\ud83e\udd80 Rust",language:"rust",children:[(0,t.jsx)(s.Ey,{fname:"deploy.rs",url:"https://github.com/near-examples/factory-rust/blob/main/contract/src/deploy.rs",start:"14",end:"60"}),(0,t.jsx)(s.Ey,{fname:"update.rs",url:"https://github.com/near-examples/factory-rust/blob/main/contract/src/manager.rs",start:"5",end:"19"})]})}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"quickstart",children:"Quickstart"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["Make sure you have installed ",(0,t.jsx)(n.a,{href:"https://www.rust-lang.org/",children:"rust"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["Install the ",(0,t.jsx)(n.a,{href:"https://github.com/near/near-cli#setup",children:(0,t.jsx)(n.code,{children:"NEAR CLI"})})]}),"\n"]}),"\n",(0,t.jsx)("hr",{class:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"\ud329\ud1a0\ub9ac-\uad6c\ucd95-\ubc0f-\ubc30\ud3ec",children:"\ud329\ud1a0\ub9ac \uad6c\ucd95 \ubc0f \ubc30\ud3ec"}),"\n",(0,t.jsx)(n.p,{children:"\ub2e4\uc74c\uc744 \uc2e4\ud589\ud558\uc5ec NEAR \ud14c\uc2a4\ud2b8\ub137\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc790\ub3d9\uc73c\ub85c \ucef4\ud30c\uc77c\ud558\uace0 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"./deploy.sh\n"})}),"\n",(0,t.jsxs)(n.p,{children:["\uc644\ub8cc\ub418\uba74 ",(0,t.jsx)(n.code,{children:"neardev/dev-account"})," \ud30c\uc77c\uc744 \ud655\uc778\ud558\uc5ec \ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub41c \uc8fc\uc18c\ub97c \ucc3e\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"cat ./neardev/dev-account\n# e.g. dev-1659899566943-21539992274727\n"})}),"\n",(0,t.jsx)("hr",{class:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"\uc800\uc7a5\ub41c-\ucee8\ud2b8\ub799\ud2b8\ub97c-\ud558\uc704-\uac8c\uc815\uc5d0-\ubc30\ud3ec",children:"\uc800\uc7a5\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \ud558\uc704 \uac8c\uc815\uc5d0 \ubc30\ud3ec"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"create_factory_subaccount_and_deploy"}),"\ub294 \ud329\ud1a0\ub9ac\uc758 \ud558\uc704 \uacc4\uc815\uc744 \ub9cc\ub4e4\uace0, \uc5ec\uae30\uc5d0 \uc800\uc7a5\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'near call <factory-account> create_factory_subaccount_and_deploy \'{ "name": "sub", "beneficiary": "<account-to-be-beneficiary>"}\' --deposit 1.24 --accountId <account-id> --gas 300000000000000\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\uadf8\ub7ec\uba74 \uc774\ub294 ",(0,t.jsx)(n.code,{children:"donation"})," \ucee8\ud2b8\ub799\ud2b8\uac00 \ubc30\ud3ec\ub420 ",(0,t.jsx)(n.code,{children:"sub.<factory-account>"}),"\ub97c \uc0dd\uc131\ud560 \uac83\uc785\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:"near view sub.<factory-account> get_beneficiary\n# expected response is: <account-to-be-beneficiary>\n"})}),"\n",(0,t.jsx)("hr",{class:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"\uc800\uc7a5\ub41c-\ucee8\ud2b8\ub799\ud2b8-\uc5c5\ub370\uc774\ud2b8",children:"\uc800\uc7a5\ub41c \ucee8\ud2b8\ub799\ud2b8 \uc5c5\ub370\uc774\ud2b8"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"update_stored_contract"}),"\ub97c \ud1b5\ud574 \ud329\ud1a0\ub9ac\uac00 \uc800\uc7a5\ud558\ub294 \ucef4\ud30c\uc77c\ub41c \ucee8\ud2b8\ub799\ud2b8\uc744 \ubcc0\uacbd\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uc774 \uba54\uc11c\ub4dc\uc758 \ud765\ubbf8\ub85c\uc6b4 \uc810\uc740, \uc120\uc5b8\ub41c \ub9e4\uac1c \ubcc0\uc218\uac00 \uc5c6\uc9c0\ub9cc \ubc14\uc774\ud2b8 \uc2a4\ud2b8\ub9bc\uc73c\ub85c \uc800\uc7a5\ud560 \uc0c8 \ucee8\ud2b8\ub799\ud2b8\ub77c\ub294 \uc785\ub825\uc744 \ubc1b\ub294\ub2e4\ub294 \uac83\uc785\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.p,{children:["\uc774\ub97c \uc0ac\uc6a9\ud558\ub824\uba74 \uc800\uc7a5\ud558\ub824\ub294 \ucee8\ud2b8\ub799\ud2b8\ub97c ",(0,t.jsx)(n.code,{children:"base64"})," \ud45c\ud604\uc73c\ub85c \ubc14\uafb8\uace0, \uacb0\uacfc\ub97c \uba54\uc11c\ub4dc\uc5d0 \ub300\ud55c \uc785\ub825\uc73c\ub85c \uc804\ub2ec\ud574\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-bash",children:'# Use near-cli to update stored contract\nexport BYTES=`cat ./src/to/new-contract/contract.wasm | base64`\nnear call <factory-account> update_stored_contract "$BYTES" --base64 --accountId <factory-account> --gas 30000000000000\n'})}),"\n",(0,t.jsxs)(n.blockquote,{children:["\n",(0,t.jsxs)(n.p,{children:["\uc774\ub294 \ud638\ucd9c\uc758 \uc778\uc790\uac00 ",(0,t.jsx)(n.code,{children:"JSON"})," \uac1d\uccb4\uc774\uac70\ub098 ",(0,t.jsx)(n.code,{children:"String Buffer"}),"\uc774\uae30 \ub54c\ubb38\uc5d0 \uc791\ub3d9 \uac00\ub2a5\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,t.jsx)(n.hr,{}),"\n",(0,t.jsx)(n.h2,{id:"\ud329\ud1a0\ub9ac---\uac1c\ub150--\ud55c\uacc4",children:"\ud329\ud1a0\ub9ac - \uac1c\ub150 & \ud55c\uacc4"}),"\n",(0,t.jsx)(n.p,{children:"\ud329\ud1a0\ub9ac\ub294 \ud765\ubbf8\ub85c\uc6b4 \uac1c\ub150\uc785\ub2c8\ub2e4. \uc5ec\uae30\uc11c\ub294 \uad6c\ud604 \uce21\uba74\uacfc \uc81c\ud55c \uc0ac\ud56d\uc5d0 \ub300\ud574 \uc790\uc138\ud788 \uc124\uba85\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)("hr",{class:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"\uc790\ub3d9\uc73c\ub85c-\uacc4\uc815-\uc0dd\uc131",children:"\uc790\ub3d9\uc73c\ub85c \uacc4\uc815 \uc0dd\uc131"}),"\n",(0,t.jsxs)(n.p,{children:["NEAR \uacc4\uc815\uc740 \uc790\uc2e0\uc758 \ud558\uc704 \uacc4\uc815\ub9cc \ub9cc\ub4e4 \uc218 \uc788\uc73c\ubbc0\ub85c, ",(0,t.jsx)(n.code,{children:"factory"}),"\ub294 \uc790\uccb4 \ud558\uc704 \uacc4\uc815\uc5d0\uc11c\ub9cc \ucee8\ud2b8\ub799\ud2b8\ub97c \ub9cc\ub4e4\uace0 \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.p,{children:"\uc774\ub294 \ub2e4\uc74c\uc744 \uc758\ubbf8\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\ud329\ud1a0\ub9ac\ub294 ",(0,t.jsx)(n.code,{children:"sub.factory.testnet"}),"\ub97c \uc0dd\uc131\ud558\uace0, \uc5ec\uae30\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud560 \uc218 ",(0,t.jsx)(n.strong,{children:"\uc788\uc2b5\ub2c8\ub2e4"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["\ud329\ud1a0\ub9ac\ub294 ",(0,t.jsx)(n.strong,{children:"predecessor"}),"\uc758 \ud558\uc704 \uacc4\uc815\uc744 \ub9cc\ub4e4 \uc218 ",(0,t.jsx)(n.code,{children:"\uc5c6\uc2b5\ub2c8\ub2e4"}),"."]}),"\n",(0,t.jsxs)(n.li,{children:["\uc0c8 \uacc4\uc815(\uc608: ",(0,t.jsx)(n.code,{children:"account.testnet"}),")\uc744 \ub9cc\ub4e4 \uc218 ",(0,t.jsx)(n.strong,{children:"\uc788\uc9c0\ub9cc"}),", \uac70\uae30\uc5d0 \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud560 \uc21c ",(0,t.jsx)(n.strong,{children:"\uc5c6\uc2b5\ub2c8\ub2e4"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"factory.testnet"}),"\uc740 ",(0,t.jsx)(n.code,{children:"sub.factory.testnet"}),"\ub97c \uc0dd\uc131\ud560 \uc218 \uc788\uc9c0\ub9cc, \uc0dd\uc131 \ud6c4\uc5d0\ub294 \uc81c\uc5b4\ud560 \uc218 \uc5c6\ub2e4\ub294 \uc810\uc744 \uae30\uc5b5\ud558\ub294 \uac83\uc774 \uc911\uc694\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsx)("hr",{class:"subsection"}),"\n",(0,t.jsx)(n.h3,{id:"\uc5c5\ub370\uc774\ud2b8-\uba54\uc11c\ub4dc",children:"\uc5c5\ub370\uc774\ud2b8 \uba54\uc11c\ub4dc"}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"update_stored_contracts"}),"\ub294 \ub9e4\uc6b0 \uc9e7\uac8c \uad6c\ud604\ub418\uc5b4 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{className:"language-rust",children:'#[private]\npub fn update_stored_contract(&mut self) {\n  self.code = env::input().expect("Error: No input").to_vec();\n}\n'})}),"\n",(0,t.jsxs)(n.p,{children:["\ucc98\uc74c \ubcfc \ub54c \uba54\uc11c\ub4dc\ub294 \uc785\ub825 \ub9e4\uac1c \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud558\uc9c0 \uc54a\ub294 \uac83\ucc98\ub7fc \ubcf4\uc774\uc9c0\ub9cc,\ucf54\ub4dc\uc758 \uc720\uc77c\ud55c \ud589\uc774 ",(0,t.jsx)(n.code,{children:"env::input()"}),"\uc5d0\uc11c \uc77d\ud788\ub294 \uac83\uc744 \ubcfc \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc5ec\uae30\uc5d0\uc11c\ub294, ",(0,t.jsx)(n.code,{children:"update_stored_contract"}),"\uac00 ",(0,t.jsx)(n.strong,{children:"\uc785\ub825 \uc5ed\uc9c1\ub82c\ud654"})," \ub2e8\uacc4\ub97c ",(0,t.jsx)(n.strong,{children:"\uc6b0\ud68c"}),"\ud558\ub294 \uc77c\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.code,{children:"update_stored_contract(&mut self, new_code: Vec<u8>)"}),"\ub97c \uad6c\ud604\ud574\uc11c, \ucef4\ud30c\uc77c\ub41c \ucf54\ub4dc\ub97c ",(0,t.jsx)(n.code,{children:"Vec<u8>"}),"\ub85c \uc800\uc7a5\ud560 \uc218\ub3c4 \uc788\uc9c0\ub9cc, \uadf8\ub7ec\uba74 \ucee8\ud2b8\ub799\ud2b8\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc740 \uc77c\uc774 \ubc1c\uc0dd\ud569\ub2c8\ub2e4."]}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\uc785\ub825\uc5d0\uc11c ",(0,t.jsx)(n.code,{children:"new_code"})," \ubcc0\uc218\uac00 \uc5ed\uc9c1\ub82c\ud654\ub429\ub2c8\ub2e4."]}),"\n",(0,t.jsx)(n.li,{children:"\uc774\ub97c \ud544\ud130\ub9c1\ud558\uc5ec, \uc815\ud655\ud558\uac8c \uad6c\ucd95\ub418\uc5c8\ub294\uc9c0 \ud655\uc778\ud569\ub2c8\ub2e4."}),"\n"]}),"\n",(0,t.jsxs)(n.p,{children:["\uc785\ub825 \ub370\uc774\ud130\uc758 \ud070 \uc2a4\ud2b8\ub9bc\uc744 \ucc98\ub9ac\ud560 \ub54c(\uc800\uc7a5\ud560 \ucef4\ud30c\uc77c\ub41c \ud30c\uc77c\uacfc \ub9c8\ucc2c\uac00\uc9c0\ub85c ",(0,t.jsx)(n.code,{children:"wasm"}),") \uc785\ub825\uc744 \uc5ed\uc9c1\ub82c\ud654/\ud655\uc778\ud558\ub294 \uc774 \ud504\ub85c\uc138\uc2a4\ub294 \ud2b8\ub79c\uc7ad\uc158\uc5d0 \ub300\ud574 ",(0,t.jsx)(n.strong,{children:"\uc804\uccb4 \uac00\uc2a4\ub97c \uc18c\ubaa8\ud569\ub2c8\ub2e4"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},85162:(e,n,r)=>{r.d(n,{Z:()=>l});r(67294);var t=r(36905);const a={tabItem:"tabItem_Ymn6"};var s=r(85893);function l(e){var n=e.children,r=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,t.Z)(a.tabItem,l),hidden:r,children:n})}},74866:(e,n,r)=>{r.d(n,{Z:()=>_});var t=r(67294),a=r(36905),s=r(12466),l=r(16550),c=r(20469),i=r(91980),o=r(67392),u=r(50012);function d(e){var n,r;return null!=(n=null==(r=t.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,t.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:r.filter(Boolean))?n:[]}function h(e){var n=e.values,r=e.children;return(0,t.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(r);return function(e){var n=(0,o.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,r])}function p(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function x(e){var n=e.queryString,r=void 0!==n&&n,a=e.groupId,s=(0,l.k6)(),c=function(e){var n=e.queryString,r=void 0!==n&&n,t=e.groupId;if("string"==typeof r)return r;if(!1===r)return null;if(!0===r&&!t)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=t?t:null}({queryString:r,groupId:a});return[(0,i._X)(c),(0,t.useCallback)((function(e){if(c){var n=new URLSearchParams(s.location.search);n.set(c,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[c,s])]}function f(e){var n,r,a,s,l=e.defaultValue,i=e.queryString,o=void 0!==i&&i,d=e.groupId,f=h(e),j=(0,t.useState)((function(){return function(e){var n,r=e.defaultValue,t=e.tabValues;if(0===t.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(r){if(!p({value:r,tabValues:t}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+r+'" but none of its children has the corresponding value. Available values are: '+t.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return r}var a=null!=(n=t.find((function(e){return e.default})))?n:t[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:l,tabValues:f})})),b=j[0],v=j[1],m=x({queryString:o,groupId:d}),g=m[0],y=m[1],_=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),r=(0,u.Nk)(n),a=r[0],s=r[1],[a,(0,t.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=_[0],w=_[1],N=function(){var e=null!=g?g:k;return p({value:e,tabValues:f})?e:null}();return(0,c.Z)((function(){N&&v(N)}),[N]),{selectedValue:b,selectValue:(0,t.useCallback)((function(e){if(!p({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);v(e),y(e),w(e)}),[y,w,f]),tabValues:f}}var j=r(72389);const b={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var v=r(85893);function m(e){var n=e.className,r=e.block,t=e.selectedValue,l=e.selectValue,c=e.tabValues,i=[],o=(0,s.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,r=i.indexOf(n),a=c[r].value;a!==t&&(o(n),l(a))},d=function(e){var n,r=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var t,a=i.indexOf(e.currentTarget)+1;r=null!=(t=i[a])?t:i[0];break;case"ArrowLeft":var s,l=i.indexOf(e.currentTarget)-1;r=null!=(s=i[l])?s:i[i.length-1]}null==(n=r)||n.focus()};return(0,v.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":r},n),children:c.map((function(e){var n=e.value,r=e.label,s=e.attributes;return(0,v.jsx)("li",Object.assign({role:"tab",tabIndex:t===n?0:-1,"aria-selected":t===n,ref:function(e){return i.push(e)},onKeyDown:d,onClick:u},s,{className:(0,a.Z)("tabs__item",b.tabItem,null==s?void 0:s.className,{"tabs__item--active":t===n}),children:null!=r?r:n}),n)}))})}function g(e){var n=e.lazy,r=e.children,a=e.selectedValue,s=(Array.isArray(r)?r:[r]).filter(Boolean);if(n){var l=s.find((function(e){return e.props.value===a}));return l?(0,t.cloneElement)(l,{className:"margin-top--md"}):null}return(0,v.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,t.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function y(e){var n=f(e);return(0,v.jsxs)("div",{className:(0,a.Z)("tabs-container",b.tabList),children:[(0,v.jsx)(m,Object.assign({},e,n)),(0,v.jsx)(g,Object.assign({},e,n))]})}function _(e){var n=(0,j.Z)();return(0,v.jsx)(y,Object.assign({},e,{children:d(e.children)}),String(n))}},77229:(e,n,r)=>{r.d(n,{Ey:()=>u,O2:()=>i,SQ:()=>o});r(67294);var t=r(74866),a=r(85162),s=r(95665),l=r.n(s),c=r(85893);function i(e){var n=e.children;return Array.isArray(n)||(n=[n]),(0,c.jsx)(t.Z,{className:"language-tabs",groupId:"code-tabs",children:n.map((function(e,n){return(0,c.jsx)(a.Z,{value:e.props.value,label:e.props.value,children:e})}))})}function o(e){var n=e.children,r=e.language;return Array.isArray(n)||(n=[n]),n=n.map((function(e){return function(e,n){var r=e.props,t=(r.children,r.url),a=r.start,s=r.end,l=r.fname;if(e.type===u)return u({url:t,start:a,end:s,language:n,fname:l});return e}(e,r)})),1==n.length?(0,c.jsx)(a.Z,{value:0,label:n[0].props.fname,children:n[0]}):(0,c.jsx)(t.Z,{className:"file-tabs",children:n.map((function(e,n){return(0,c.jsx)(a.Z,{value:n,label:e.props.fname,children:e})}))})}function u(e){var n=e.url,r=e.start,t=e.end,a=e.language,s=e.fname,i=n+"#";return r&&t&&(i+="L"+r+"-L"+t+"#"),(0,c.jsx)(l(),{language:a,fname:s,children:i})}}}]);