"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5615],{98681:(e,c,n)=>{n.r(c),n.d(c,{assets:()=>l,contentTitle:()=>o,default:()=>u,frontMatter:()=>s,metadata:()=>i,toc:()=>r});var t=n(85893),a=n(11151);const s={id:"account",title:"\uacc4\uc815",sidebar_label:"\uacc4\uc815"},o=void 0,i={id:"tools/near-api-js/account",title:"\uacc4\uc815",description:"NEAR \uacc4\uc815\uacfc \uc0c1\ud638 \uc791\uc6a9, \uc0dd\uc131 \ub610\ub294 \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/4.tools/near-api-js/naj-account.md",sourceDirName:"4.tools/near-api-js",slug:"/tools/near-api-js/account",permalink:"/ko/tools/near-api-js/account",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/near-api-js/naj-account.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",frontMatter:{id:"account",title:"\uacc4\uc815",sidebar_label:"\uacc4\uc815"},sidebar:"tools",previous:{title:"\uc9c0\uac11",permalink:"/ko/tools/near-api-js/wallet"},next:{title:"\ucee8\ud2b8\ub799\ud2b8",permalink:"/ko/tools/near-api-js/contract"}},l={},r=[{value:"\uacc4\uc815 \ubd88\ub7ec\uc624\uae30",id:"load-account",level:3},{value:"\uacc4\uc815 \uc0dd\uc131",id:"create-account",level:3},{value:"\uacc4\uc815 \uc0ad\uc81c",id:"delete-account",level:3},{value:"\uacc4\uc815 \uc794\uace0 \uac00\uc838\uc624\uae30",id:"get-account-balance",level:3},{value:"\uacc4\uc815 \uc138\ubd80 \uc815\ubcf4 \uac00\uc838\uc624\uae30",id:"get-account-details",level:3},{value:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec",id:"deploy-a-contract",level:3},{value:"\ud1a0\ud070 \uc804\uc1a1",id:"send-tokens",level:3},{value:"\uc0c1\ud0dc",id:"state",level:3},{value:"\uc561\uc138\uc2a4 \ud0a4",id:"access-keys",level:3},{value:"\uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4",id:"add-full-access-key",level:4},{value:"\ud568\uc218 \uc561\uc138\uc2a4 \ud0a4",id:"add-function-access-key",level:4},{value:"\ubaa8\ub4e0 \uc561\uc138\uc2a4 \ud0a4 \uac00\uc838\uc624\uae30",id:"get-all-access-keys",level:4},{value:"\uc561\uc138\uc2a4 \ud0a4 \uc0ad\uc81c",id:"delete-access-key",level:4}];function d(e){const c={a:"a",code:"code",h3:"h3",h4:"h4",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(c.p,{children:"NEAR \uacc4\uc815\uacfc \uc0c1\ud638 \uc791\uc6a9, \uc0dd\uc131 \ub610\ub294 \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(c.h3,{id:"load-account",children:"\uacc4\uc815 \ubd88\ub7ec\uc624\uae30"}),"\n",(0,t.jsx)(c.p,{children:"\ub2e4\uc74c\uacfc \uac19\uc740 \uba85\ub839\uc744 \ud1b5\ud574 \uc0c1\ud638\uc791\uc6a9\ud560 \uacc4\uc815 \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'const account = await nearConnection.account("example-account.testnet");\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-class"})," Class ",(0,t.jsx)(c.code,{children:"Account"})]})}),"\n",(0,t.jsx)(c.h3,{id:"create-account",children:"\uacc4\uc815 \uc0dd\uc131"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'// create a new account using funds from the account used to create it. const account = await nearConnection.account("example-account.testnet");\nawait account.createAccount(\n  "example-account2.testnet", // new account name\n  "8hSHprDq2StXwMtNd43wDTXQYsjXcD4MJTXQYsjXcc", // public key for new account\n  "10000000000000000000" // initial balance for new account in yoctoNEAR\n);\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#createAccount",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," ",(0,t.jsx)(c.code,{children:"Account.createAccount"})," \uba54\uc11c\ub4dc"]})}),"\n",(0,t.jsx)(c.h3,{id:"delete-account",children:"\uacc4\uc815 \uc0ad\uc81c"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'// deletes account found in the `account` object\n// transfers remaining account balance to the accountId passed as an argument\nconst account = await nearConnection.account("example-account.testnet");\nawait account.deleteAccount("beneficiary-account.testnet");\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#deleteAccount",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," ",(0,t.jsx)(c.code,{children:"Account.deleteAccount"})," \uba54\uc11c\ub4dc"]})}),"\n",(0,t.jsx)(c.h3,{id:"get-account-balance",children:"\uacc4\uc815 \uc794\uace0 \uac00\uc838\uc624\uae30"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'// gets account balance\nconst account = await nearConnection.account("example-account.testnet");\nawait account.getAccountBalance();\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#getAccountBalance",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," ",(0,t.jsx)(c.code,{children:"Account.getAccountBalance"})," \uba54\uc11c\ub4dc"]})}),"\n",(0,t.jsx)(c.h3,{id:"get-account-details",children:"\uacc4\uc815 \uc138\ubd80 \uc815\ubcf4 \uac00\uc838\uc624\uae30"}),"\n",(0,t.jsx)(c.p,{children:"\uc2b9\uc778\ub41c \uc571\uacfc \uac19\uc740 \uacc4\uc815\uc5d0 \ub300\ud55c \uc815\ubcf4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'// gets account details in terms of authorized apps and transactions\nconst account = await nearConnection.account("example-account.testnet");\nawait account.getAccountDetails();\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#getAccountDetails",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," ",(0,t.jsx)(c.code,{children:"Account.getAccountDetails"})," \uba54\uc11c\ub4dc"]})}),"\n",(0,t.jsx)(c.h3,{id:"deploy-a-contract",children:"\ucee8\ud2b8\ub799\ud2b8 \ubc30\ud3ec"}),"\n",(0,t.jsx)(c.p,{children:"\ucef4\ud30c\uc77c\ub41c WASM \ud30c\uc77c\uc5d0\uc11c \ucee8\ud2b8\ub799\ud2b8\ub97c \ubc30\ud3ec\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158 \ubc0f Receipt \uacb0\uacfc\uc640 \uc0c1\ud0dc\uac00 \uc788\ub294 \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'const account = await nearConnection.account("example-account.testnet");\nconst transactionOutcome = await account.deployContract(\n  fs.readFileSync("example-file.wasm")\n);\n'})}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#deployContract",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.deployContract"})]})," \xa0\xa0\xa0 ",(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/interfaces/_near_js_types.provider_response.FinalExecutionOutcome.html",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-interface"})," Interface ",(0,t.jsx)(c.code,{children:"FinalExecutionOutcome"})]})]}),"\n",(0,t.jsx)(c.h3,{id:"send-tokens",children:"\ud1a0\ud070 \uc804\uc1a1"}),"\n",(0,t.jsx)(c.p,{children:"\uacc4\uc815 \uac04\uc5d0 NEAR \ud1a0\ud070\uc744 \uc804\uc1a1\ud569\ub2c8\ub2e4. \ud2b8\ub79c\uc7ad\uc158 \ubc0f Receipt \uacb0\uacfc\uc640 \uc0c1\ud0dc\uac00 \uc788\ub294 \uac1d\uccb4\ub97c \ubc18\ud658\ud569\ub2c8\ub2e4."}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'const account = await nearConnection.account("sender-account.testnet");\nawait account.sendMoney(\n  "receiver-account.testnet", // receiver account\n  "1000000000000000000000000" // amount in yoctoNEAR\n);\n'})}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#sendMoney",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.sendMoney"})]})," \xa0\xa0\xa0 ",(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/interfaces/_near_js_types.provider_response.FinalExecutionOutcome.html",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-interface"})," Interface ",(0,t.jsx)(c.code,{children:"FinalExecutionOutcome"})]})]}),"\n",(0,t.jsx)(c.h3,{id:"state",children:"\uc0c1\ud0dc"}),"\n",(0,t.jsx)(c.p,{children:"\uacc4\uc815\uc774 \ubcf4\uc720\ud55c \ud1a0\ud070\uc758 \uc591 \ub610\ub294 \uc0ac\uc6a9\ud558\ub294 \uc2a4\ud1a0\ub9ac\uc9c0\uc758 \uc591\uacfc \uac19\uc740 \uae30\ubcf8 \uacc4\uc815 \uc815\ubcf4\ub97c \uac00\uc838\uc635\ub2c8\ub2e4."}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'const account = await nearConnection.account("example-account.testnet");\nconst accountState = await account.state();\n'})}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#state",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.state"})]})," \xa0\xa0\xa0 ",(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/interfaces/near_api_js.providers_provider.AccountView.html",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-interface"})," Interface ",(0,t.jsx)(c.code,{children:"AccountView"})]})]}),"\n",(0,t.jsx)(c.h3,{id:"access-keys",children:"\uc561\uc138\uc2a4 \ud0a4"}),"\n",(0,t.jsx)(c.p,{children:"\uacc4\uc815\uc758 \ud0a4\ub97c \uac00\uc838\uc624\uace0 \uad00\ub9ac\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,t.jsx)(c.h4,{id:"add-full-access-key",children:"\uc804\uccb4 \uc561\uc138\uc2a4 \ud0a4"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'// takes public key as string for argument\nconst account = await nearConnection.account("example-account.testnet");\nawait account.addKey("8hSHprDq2StXwMtNd43wDTXQYsjXcD4MJTXQYsjXcc");\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#addKey",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," ",(0,t.jsx)(c.code,{children:"Account.addKey"})," \uba54\uc11c\ub4dc"]})}),"\n",(0,t.jsx)(c.h4,{id:"add-function-access-key",children:"\ud568\uc218 \uc561\uc138\uc2a4 \ud0a4"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'const account = await nearConnection.account("example-account.testnet");\nawait account.addKey(\n  "8hSHprDq2StXwMtNd43wDTXQYsjXcD4MJTXQYsjXcc", // public key for new account\n  "example-account.testnet", // contract this key is allowed to call (optional)\n  "example_method", // methods this key is allowed to call (optional)\n  "2500000000000" // allowance key can use to call methods (optional)\n);\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#addKey",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," ",(0,t.jsx)(c.code,{children:"Account.addKey"})," \uba54\uc11c\ub4dc"]})}),"\n",(0,t.jsx)(c.h4,{id:"get-all-access-keys",children:"\ubaa8\ub4e0 \uc561\uc138\uc2a4 \ud0a4 \uac00\uc838\uc624\uae30"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'const account = await nearConnection.account("example-account.testnet");\nawait account.getAccessKeys();\n'})}),"\n",(0,t.jsxs)(c.p,{children:[(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#getAccessKeys",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," Method ",(0,t.jsx)(c.code,{children:"Account.getAccessKeys"})]})," \xa0\xa0\xa0 ",(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/interfaces/near_api_js.providers_provider.AccessKeyInfoView.html",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-interface"})," Interface ",(0,t.jsx)(c.code,{children:"AccessKeyInfoView"})]})]}),"\n",(0,t.jsx)(c.h4,{id:"delete-access-key",children:"\uc561\uc138\uc2a4 \ud0a4 \uc0ad\uc81c"}),"\n",(0,t.jsx)(c.pre,{children:(0,t.jsx)(c.code,{className:"language-js",children:'const account = await nearConnection.account("example-account.testnet");\nawait account.deleteKey("8hSHprDq2StXwMtNd43wDTXQYsjXcD4MJTXQYsjXcc");\n'})}),"\n",(0,t.jsx)(c.p,{children:(0,t.jsxs)(c.a,{href:"https://near.github.io/near-api-js/classes/near_api_js.account.Account.html#deleteKey",children:[(0,t.jsx)("span",{class:"typedoc-icon typedoc-icon-method"})," ",(0,t.jsx)(c.code,{children:"Account.deleteKey"})," \uba54\uc11c\ub4dc"]})})]})}function u(e={}){const{wrapper:c}={...(0,a.a)(),...e.components};return c?(0,t.jsx)(c,{...e,children:(0,t.jsx)(d,{...e})}):d(e)}},11151:(e,c,n)=>{n.d(c,{Z:()=>i,a:()=>o});var t=n(67294);const a={},s=t.createContext(a);function o(e){const c=t.useContext(s);return t.useMemo((function(){return"function"==typeof e?e(c):{...c,...e}}),[c,e])}function i(e){let c;return c=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:o(e.components),t.createElement(s.Provider,{value:c},e.children)}}}]);