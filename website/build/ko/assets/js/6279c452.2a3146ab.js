"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[8806],{81111:(t,e,n)=>{n.r(e),n.d(e,{assets:()=>d,contentTitle:()=>o,default:()=>u,frontMatter:()=>r,metadata:()=>c,toc:()=>a});var s=n(85893),i=n(11151);const r={sidebar_position:1},o="\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Test)",c={id:"sdk/rust/testing/unit-tests",title:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Test)",description:"\ucee8\ud2b8\ub799\ud2b8 \uae30\ub2a5 \ud14c\uc2a4\ud2b8\ub294 cargo test \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ud1b5\ud574 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud14c\uc2a4\ud2b8\ub294 \ubaa8\uc758 \ube14\ub85d\uccb4\uc778\uc73c\ub85c \uc2e4\ud589\ub418\uba70, \ub124\ud2b8\uc6cc\ud06c\ub97c \uc124\uc815/\ubc30\ud3ec\ud558\uace0 \uc774 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uc9c1\ub82c\ud654\ub41c \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\uc9c0 \uc54a\uace0\ub3c4 \ud568\uc218 \ud638\ucd9c\uc744 \uc9c1\uc811 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/sdk/rust/testing/unit-tests.md",sourceDirName:"sdk/rust/testing",slug:"/sdk/rust/testing/unit-tests",permalink:"/ko/sdk/rust/testing/unit-tests",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/rust/testing/unit-tests.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",sidebarPosition:1,frontMatter:{sidebar_position:1},sidebar:"tools",previous:{title:"\ud1b5\ud569 \ud14c\uc2a4\ud2b8(Integration Test)",permalink:"/ko/sdk/rust/testing/integration-tests"},next:{title:"\ubaa8\ubc94 \uc0ac\ub840",permalink:"/ko/sdk/rust/best-practices"}},d={},a=[];function l(t){const e={a:"a",admonition:"admonition",code:"code",h1:"h1",p:"p",pre:"pre",...(0,i.a)(),...t.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(e.h1,{id:"\ub2e8\uc704-\ud14c\uc2a4\ud2b8unit-test",children:"\ub2e8\uc704 \ud14c\uc2a4\ud2b8(Unit Test)"}),"\n",(0,s.jsxs)(e.p,{children:["\ucee8\ud2b8\ub799\ud2b8 \uae30\ub2a5 \ud14c\uc2a4\ud2b8\ub294 ",(0,s.jsx)(e.code,{children:"cargo test"})," \ud504\ub808\uc784\uc6cc\ud06c\ub97c \ud1b5\ud574 \uc218\ud589\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ud14c\uc2a4\ud2b8\ub294 \ubaa8\uc758 \ube14\ub85d\uccb4\uc778\uc73c\ub85c \uc2e4\ud589\ub418\uba70, \ub124\ud2b8\uc6cc\ud06c\ub97c \uc124\uc815/\ubc30\ud3ec\ud558\uace0 \uc774 \ub124\ud2b8\uc6cc\ud06c\uc5d0\uc11c \uc9c1\ub82c\ud654\ub41c \ud2b8\ub79c\uc7ad\uc158\uc5d0 \uc11c\uba85\ud558\uc9c0 \uc54a\uace0\ub3c4 \ud568\uc218 \ud638\ucd9c\uc744 \uc9c1\uc811 \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(e.p,{children:"\uae30\ubcf8 \ud14c\uc2a4\ud2b8 \ud658\uacbd \uc124\uc815\uacfc \ud14c\uc2a4\ud2b8\ub97c \uc704\ud55c \uacf5\ud1b5 \ud504\ub808\uc784\uc6cc\ud06c\ub294 \ub2e4\uc74c\uacfc \uac19\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(e.pre,{children:(0,s.jsx)(e.code,{className:"language-rust",children:'#[cfg(all(test, not(target_arch = "wasm32")))]\nmod tests {\n    use super::*;\n    use near_sdk::test_utils::VMContextBuilder;\n    use near_sdk::{testing_env, VMContext};\n\n    fn get_context(is_view: bool) -> VMContext {\n        VMContextBuilder::new()\n            .signer_account_id("bob_near".parse().unwrap())\n            .is_view(is_view)\n            .build()\n    }\n\n    #[test]\n    fn my_test() {\n        let context = get_context(false);\n        testing_env!(context);\n        // ... Write test here\n    }\n}\n'})}),"\n",(0,s.jsxs)(e.p,{children:["\uc5ec\uae30\uc11c ",(0,s.jsx)(e.code,{children:"VMContextBuilder"}),"\ub294 \ubaa8\uc758 \ube14\ub85d\uccb4\uc778\uc758 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc218\uc815\ud558\uc5ec \ud2b8\ub79c\uc7ad\uc158\uc774 \uc2e4\ud589\ub418\ub294 \ud658\uacbd\uc744 \uc2dc\ubbac\ub808\uc774\uc158\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \ucee8\ud14d\uc2a4\ud2b8\ub85c \uc218\uc815\ud560 \uc218 \uc788\ub294 \ubb38\uc11c\ub294 ",(0,s.jsx)(e.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/struct.VMContext.html",children:"\uc5ec\uae30"}),"\uc5d0\uc11c \ucc3e\uc744 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(e.p,{children:[(0,s.jsx)(e.code,{children:"testing_env!"})," \ub9e4\ud06c\ub85c\ub294 ",(0,s.jsx)(e.code,{children:"VMContextBuilder"})," \ub610\ub294 \uc218\ub3d9\uc73c\ub85c \ucd08\uae30\ud654\ub418\ub294 ",(0,s.jsx)(e.code,{children:"VMContext"}),"\uc640 \ud568\uaed8 \ube14\ub85d\uccb4\uc778 \uc778\ud130\ud398\uc774\uc2a4\ub97c \ucd08\uae30\ud654\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsx)(e.admonition,{title:"Note",type:"info",children:(0,s.jsxs)(e.p,{children:["\uc774 ",(0,s.jsx)(e.code,{children:"testing_env!"}),"\uc640 ",(0,s.jsx)(e.code,{children:"VMContext"}),"\ub294 ",(0,s.jsx)(e.code,{children:"wasm"})," \ud658\uacbd \uc678\ubd80\uc758 \ud14c\uc2a4\ud2b8\uc5d0\ub9cc \uc0ac\uc6a9\ub429\ub2c8\ub2e4. ",(0,s.jsx)(e.code,{children:"wasm"})," \ud658\uacbd\uc758 \ub124\ud2b8\uc6cc\ud06c \ub0b4\uc5d0\uc11c \uad6c\ucd95\ub41c \ucee8\ud2b8\ub799\ud2b8\ub97c \uc2e4\ud589\ud560 \ub54c, \ube14\ub85d\uccb4\uc778\uc758 \ucee8\ud14d\uc2a4\ud2b8\ub294 \ub7f0\ud0c0\uc784\uc758 \ud638\uc2a4\ud2b8 \ud568\uc218\ub97c \ud1b5\ud574 \uc0ac\uc6a9\ub429\ub2c8\ub2e4."]})}),"\n",(0,s.jsxs)(e.p,{children:["\uc77d\uae30 \uc804\uc6a9 \ud568\uc218 \ud638\ucd9c\uc744 \ud14c\uc2a4\ud2b8\ud558\ub824\uba74, ",(0,s.jsx)(e.code,{children:"VMContext"}),"\uc5d0\uc11c ",(0,s.jsx)(e.code,{children:"is_view"}),"\ub97c ",(0,s.jsx)(e.code,{children:"true"}),"\ub85c \uc124\uc815\ud558\uc138\uc694. \uc774\ub294 \uc0c1\ud0dc\ub97c \uc77d\uae30\ub9cc \ud558\ub294 \ud568\uc218 \ud638\ucd9c\uc774 \ub2e8\uc704 \ud14c\uc2a4\ud2b8\ub97c \ud1b5\ud574 \uc0c1\ud0dc\ub97c \uc218\uc815\ud558\ub824\uace0 \uc2dc\ub3c4\ud558\uc9c0 \uc54a\ub294\uc9c0 \ud655\uc778\ud558\ub294 \ud14c\uc2a4\ud2b8\ub97c \uc9c4\ud589\ud569\ub2c8\ub2e4. \uc704\uc758 \uc608\uc5d0\uc11c\ub294 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc77d\uae30 \uc804\uc6a9\uc73c\ub85c \ucd08\uae30\ud654\ud558\ub294 \ud638\ucd9c ",(0,s.jsx)(e.code,{children:"get_context"}),"\uc5d0 ",(0,s.jsx)(e.code,{children:"true"}),"\uac00 \uc804\ub2ec\ub418\uc5b4\uc57c \ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(e.p,{children:["\uc774 \ucee8\ud14d\uc2a4\ud2b8\ub97c \uc5c5\ub370\uc774\ud2b8\ud574\uc57c \ud560 \ub54c\ub9c8\ub2e4, ",(0,s.jsx)(e.code,{children:"testing_env!"}),"\ub97c \uc0ac\uc6a9\ud558\uace0 \uc2f6\uc744 \uac83\uc785\ub2c8\ub2e4. \uc608\ub97c \ub4e4\uc5b4 \uc704\uc5d0\uc11c \uc5b8\uae09\ud55c \uac83\ucc98\ub7fc \ud638\ucd9c\ub418\uac70\ub098 view \uc791\uc5c5\ub9cc \ud5c8\uc6a9\ub418\ub294 \ud568\uc218\ub97c \uc2dc\ubbac\ub808\uc774\uc158\ud558\uae30 \uc704\ud574 ",(0,s.jsx)(e.code,{children:"predecessor_accound_id"}),"\ub97c \uc2dc\ubbac\ub808\uc774\uc158\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774 \uc791\uc5c5\uc744 \uc218\ud589\ud560 \ub54c\ub9c8\ub2e4, \uc0c8\ub85c\uc6b4 \ubaa8\uc758 \ube14\ub85d\uccb4\uc778\uc740 \uae30\uc874 \uc0c1\ud0dc\ub97c \uc720\uc9c0\ud558\uba74\uc11c \ucd08\uae30\ud654\ub429\ub2c8\ub2e4."]})]})}function u(t={}){const{wrapper:e}={...(0,i.a)(),...t.components};return e?(0,s.jsx)(e,{...t,children:(0,s.jsx)(l,{...t})}):l(t)}},11151:(t,e,n)=>{n.d(e,{Z:()=>c,a:()=>o});var s=n(67294);const i={},r=s.createContext(i);function o(t){const e=s.useContext(r);return s.useMemo((function(){return"function"==typeof t?t(e):{...e,...t}}),[e,t])}function c(t){let e;return e=t.disableParentContext?"function"==typeof t.components?t.components(i):t.components||i:o(t.components),s.createElement(r.Provider,{value:e},t.children)}}}]);