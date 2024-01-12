"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6246],{1219:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>r,default:()=>p,frontMatter:()=>o,metadata:()=>c,toc:()=>i});var a=t(85893),s=t(11151);const o={sidebar_position:3,title:"\uc9c0\ubd88 \uba54\uc11c\ub4dc"},r="\uc9c0\ubd88 \uba54\uc11c\ub4dc",c={id:"sdk/js/contract-interface/payable-methods",title:"\uc9c0\ubd88 \uba54\uc11c\ub4dc",description:"\uba54\uc11c\ub4dc\uac00 \ud568\uc218 \ud638\ucd9c\uacfc \ud568\uaed8 NEAR \ud1a0\ud070 \uc804\uc1a1\uc744 \uc218\ub77d\ud558\ub3c4\ub85d \ud5c8\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc740 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc0ac\uc6a9\ub420 \ub54c \uc9c0\ubd88\ud574\uc57c \ud558\ub294 \ud1a0\ud070\uc758 \uc218\uc218\ub8cc\ub97c \uc815\uc758\ud560 \uc218 \uc788\ub3c4\ub85d \uc218\ud589\ub429\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uba54\uc11c\ub4dc\ub294 \uc9c0\ubd88\ud560 \uc218 \uc5c6\uc73c\uba70, \ud638\ucd9c \uc911\uc5d0 \ub204\uad70\uac00\uac00 \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub824\uace0 \uc2dc\ub3c4\ud558\uba74 \ud328\ub2c9 \uc0c1\ud0dc\uac00 \ub429\ub2c8\ub2e4. \uc774\ub294 \ub204\uad70\uac00\uac00 \ud568\uc218 \ud638\ucd9c \uc911\uc5d0 \uc2e4\uc218\ub85c \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub294 \uacbd\uc6b0\ub97c \ub300\ube44\ud558\uc5ec \uc548\uc804\uc0c1\uc758 \uc774\uc720\ub85c \uc218\ud589\ub429\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/sdk/js/contract-interface/payable-methods.md",sourceDirName:"sdk/js/contract-interface",slug:"/sdk/js/contract-interface/payable-methods",permalink:"/ko/sdk/js/contract-interface/payable-methods",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/sdk/js/contract-interface/payable-methods.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",sidebarPosition:3,frontMatter:{sidebar_position:3,title:"\uc9c0\ubd88 \uba54\uc11c\ub4dc"},sidebar:"tools",previous:{title:"\ud504\ub77c\uc774\ube57 \uba54\uc11c\ub4dc",permalink:"/ko/sdk/js/contract-interface/private-methods"},next:{title:"Callbacks",permalink:"/ko/sdk/js/cross-contract/callbacks"}},d={},i=[];function l(e){const n={a:"a",code:"code",h1:"h1",p:"p",pre:"pre",...(0,s.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(n.h1,{id:"\uc9c0\ubd88-\uba54\uc11c\ub4dc",children:"\uc9c0\ubd88 \uba54\uc11c\ub4dc"}),"\n",(0,a.jsx)(n.p,{children:"\uba54\uc11c\ub4dc\uac00 \ud568\uc218 \ud638\ucd9c\uacfc \ud568\uaed8 NEAR \ud1a0\ud070 \uc804\uc1a1\uc744 \uc218\ub77d\ud558\ub3c4\ub85d \ud5c8\uc6a9\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \uc774\uac83\uc740 \ucee8\ud2b8\ub799\ud2b8\uac00 \uc0ac\uc6a9\ub420 \ub54c \uc9c0\ubd88\ud574\uc57c \ud558\ub294 \ud1a0\ud070\uc758 \uc218\uc218\ub8cc\ub97c \uc815\uc758\ud560 \uc218 \uc788\ub3c4\ub85d \uc218\ud589\ub429\ub2c8\ub2e4. \uae30\ubcf8\uc801\uc73c\ub85c \uba54\uc11c\ub4dc\ub294 \uc9c0\ubd88\ud560 \uc218 \uc5c6\uc73c\uba70, \ud638\ucd9c \uc911\uc5d0 \ub204\uad70\uac00\uac00 \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub824\uace0 \uc2dc\ub3c4\ud558\uba74 \ud328\ub2c9 \uc0c1\ud0dc\uac00 \ub429\ub2c8\ub2e4. \uc774\ub294 \ub204\uad70\uac00\uac00 \ud568\uc218 \ud638\ucd9c \uc911\uc5d0 \uc2e4\uc218\ub85c \ud1a0\ud070\uc744 \uc804\uc1a1\ud558\ub294 \uacbd\uc6b0\ub97c \ub300\ube44\ud558\uc5ec \uc548\uc804\uc0c1\uc758 \uc774\uc720\ub85c \uc218\ud589\ub429\ub2c8\ub2e4."}),"\n",(0,a.jsxs)(n.p,{children:["\uba54\uc11c\ub4dc\ub97c \uc9c0\ubd88 \uac00\ub2a5\uc73c\ub85c \uc120\uc5b8\ud558\ub824\uba74, ",(0,a.jsxs)(n.a,{href:"/ko/sdk/js/contract-structure/near-bindgen",children:[(0,a.jsx)(n.code,{children:"NearBindgen"})," \ub370\ucf54\ub808\uc774\ud2b8\ub41c \ucee8\ud2b8\ub799\ud2b8 \ud074\ub798\uc2a4"]})," \ub0b4\uc5d0\uc11c \ub2e4\uc74c\uacfc \uac19\uc774 ",(0,a.jsx)(n.code,{children:"({ payableFunction: true })"})," \ub370\ucf54\ub808\uc774\ud130 \ub9e4\uac1c \ubcc0\uc218\ub97c \uc0ac\uc6a9\ud569\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:"@call({ payableFunction: true })\nmy_method({}) {\n    // ...\n}\n"})}),"\n",(0,a.jsxs)(n.p,{children:["\uc774\ub807\uac8c \ud558\uba74 ",(0,a.jsx)(n.code,{children:"my_method"})," \ud568\uc218\ub97c \ud638\ucd9c\ud558\uace0, \uc794\uc561\uc744 \ucee8\ud2b8\ub799\ud2b8\ub85c \uc774\uc804\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n",(0,a.jsx)(n.p,{children:"\uc608\uc2dc:"}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'@NearBindgen({})\nexport class Contract {\n    @call({ payableFunction: true })\n    take_my_money({}) {\n        near.log("Thanks!");\n    }\n\n    @call({})\n    do_not_take_my_money({}) {\n        near.log("No thanks!");\n    }\n}\n'})}),"\n",(0,a.jsx)(n.p,{children:"\uc774\ub294 \ub2e4\uc74c\uacfc \ub3d9\uc77c\ud569\ub2c8\ub2e4."}),"\n",(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-js",children:'@NearBindgen({})\nexport class Contract {\n    @call({})\n    take_my_money({}) {\n        near.log("Thanks!");\n    }\n\n    @call({})\n    do_not_take_my_money({}) {\n        if (near.attachedDeposit() > BigInt(0)) {\n            throw new Error("Method do_not_take_my_money doesn\'t accept deposit");\n        }\n        near.log("No thanks!");\n    }\n}\n'})})]})}function p(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(l,{...e})}):l(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>c,a:()=>r});var a=t(67294);const s={},o=a.createContext(s);function r(e){const n=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function c(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:r(e.components),a.createElement(o.Provider,{value:n},e.children)}}}]);