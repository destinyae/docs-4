"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4163],{68303:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>c,contentTitle:()=>s,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>l});var i=t(85893),r=t(11151);const a={id:"build-relayer",title:"Building a Meta Transaction Relayer with NextJS",sidebar_label:"Building a Relayer"},s=void 0,o={id:"develop/relayers/build-relayer",title:"Building a Meta Transaction Relayer with NextJS",description:"This guide will walk you through the steps required to construct a meta transaction relayer using NextJS 13.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/2.develop/relayers/welcome.md",sourceDirName:"2.develop/relayers",slug:"/develop/relayers/build-relayer",permalink:"/ko/develop/relayers/build-relayer",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/relayers/welcome.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",frontMatter:{id:"build-relayer",title:"Building a Meta Transaction Relayer with NextJS",sidebar_label:"Building a Relayer"},sidebar:"integrate",previous:{title:"\ud504\ub860\ud2b8\uc5d4\ub4dc \ub2e4\uc911 \ucee8\ud2b8\ub799\ud2b8",permalink:"/ko/tutorials/examples/frontend-multiple-contracts"},next:{title:"Login with NEAR",permalink:"/ko/develop/integrate/backend-login"}},c={},l=[{value:"Configuring the Environment",id:"configuring-the-environment",level:2},{value:"API Route Creation",id:"api-route-creation",level:2},{value:"Client Code Execution",id:"client-code-execution",level:3},{value:"Signing a Delegated Transaction",id:"signing-a-delegated-transaction",level:4},{value:"Submitting the Transaction via the Relayer",id:"submitting-the-transaction-via-the-relayer",level:4}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",ol:"ol",p:"p",pre:"pre",...(0,r.a)(),...e.components};return(0,i.jsxs)(i.Fragment,{children:[(0,i.jsx)(n.p,{children:"This guide will walk you through the steps required to construct a meta transaction relayer using NextJS 13."}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["This guide was originally created by ",(0,i.jsx)(n.a,{href:"https://x.com/microchipgnu",children:"@microchipgnu"})," and can be found in ",(0,i.jsx)(n.a,{href:"https://hackmd.io/@microchipgnu/meta-transactions-relayer-next-js?utm_source=preview-mode&utm_medium=rec",children:"hackmd"}),"."]})}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"configuring-the-environment",children:"Configuring the Environment"}),"\n",(0,i.jsx)(n.p,{children:"Before we begin, it\u2019s crucial to configure our environment correctly. We need to set some environment variables. This is done in the .env file at the root of your project."}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-bash",children:"NEXT_PUBLIC_RELAYER_ACCOUNT_ID=xyz.testnet\nRELAYER_ACCOUNT_PRIVATE_KEY=xyz\n"})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"NEXT_PUBLIC_RELAYER_ACCOUNT_ID"})," is your public relayer account identifier and the ",(0,i.jsx)(n.code,{children:"RELAYER_ACCOUNT_PRIVATE_KEY"})," is your relayer account\u2019s private key."]}),"\n",(0,i.jsx)(n.h2,{id:"api-route-creation",children:"API Route Creation"}),"\n",(0,i.jsx)(n.p,{children:"The next step is creating the API route. For this, we need to take the following actions:"}),"\n",(0,i.jsxs)(n.ol,{children:["\n",(0,i.jsxs)(n.li,{children:["Navigate to the ",(0,i.jsx)(n.code,{children:"./src/app/api/ directory"})]}),"\n",(0,i.jsx)(n.li,{children:"Inside the api directory, create a new folder called relayer"}),"\n",(0,i.jsxs)(n.li,{children:["Inside the relayer folder, create a new file named ",(0,i.jsx)(n.code,{children:"route.ts"})]}),"\n"]}),"\n",(0,i.jsxs)(n.p,{children:["Now, let\u2019s fill ",(0,i.jsx)(n.code,{children:"route.ts"})," with the following code:"]}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { submitTransaction } from "@/utils/near/meta-transactions";\nimport { SCHEMA } from "@/utils/near/types/schema";\nimport { SignedDelegate } from "@near-js/transactions";\nimport { deserialize } from "borsh";\nimport { NextResponse } from "next/server";\n\nexport async function POST(req: Request) {\n  const body = await req.json();\n  const { delegated, network } = body;\n\n  const deserializeDelegate = deserialize(\n    SCHEMA,\n    SignedDelegate,\n    Buffer.from(new Uint8Array(delegated))\n  );\n\n  const result = await submitTransaction({\n    delegate: deserializeDelegate,\n    network,\n  });\n\n  return NextResponse.json(\n    { result },\n    {\n      status: 200,\n      headers: {\n        "content-type": "application/json",\n      },\n    }\n  );\n}\n'})}),"\n",(0,i.jsx)(n.p,{children:"This script is responsible for receiving a delegated transaction, deserializing it, and submitting the transaction using the submitTransaction utility."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h3,{id:"client-code-execution",children:"Client Code Execution"}),"\n",(0,i.jsx)(n.p,{children:"The client code is divided into two parts. The first part signs a delegated transaction, and the second part submits the transaction through the relayer."}),"\n",(0,i.jsx)(n.h4,{id:"signing-a-delegated-transaction",children:"Signing a Delegated Transaction"}),"\n",(0,i.jsx)(n.p,{children:"We use the following code snippet to sign a delegated transaction:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'import { getKeys } from "@near-js/biometric-ed25519";\nimport { InMemoryKeyStore } from "@near-js/keystores";\nimport { actionCreators } from "@near-js/transactions";\nimport BN from "bn.js";\nimport { connect } from "./meta-transactions";\n\nexport const signDelegatedTransaction = async ({\n  network,\n  signer,\n  privateKey,\n  transaction,\n  contractAddress,\n}: {\n  network: string;\n  signer: string;\n  privateKey: string;\n  transaction: {\n    methodName: string;\n    args: any;\n    gas: string | number;\n    deposit: string | number;\n  };\n  contractAddress: string;\n}) => {\n  const keyStore = new InMemoryKeyStore();\n\n  // TODO: Connect the user\n\n  const signerAccount = await connect(signer, keyStore, network);\n\n  const action = actionCreators.functionCall(\n    transaction.methodName,\n    JSON.parse(transaction.args),\n    new BN(transaction.gas),\n    new BN(transaction.deposit)\n  );\n\n  const delegate = await signerAccount.signedDelegate({\n    actions: [action],\n    blockHeightTtl: 600,\n    receiverId: contractAddress,\n  });\n\n  return delegate;\n};\n'})}),"\n",(0,i.jsxs)(n.p,{children:["This function receives several parameters, including ",(0,i.jsx)(n.code,{children:"network"}),", ",(0,i.jsx)(n.code,{children:"signer"}),", ",(0,i.jsx)(n.code,{children:"privateKey"}),", ",(0,i.jsx)(n.code,{children:"transaction"}),", and ",(0,i.jsx)(n.code,{children:"contractAddress"}),". It generates a delegate using the ",(0,i.jsx)(n.code,{children:"signedDelegate"})," method, which is later used to submit the transaction."]}),"\n",(0,i.jsx)(n.h4,{id:"submitting-the-transaction-via-the-relayer",children:"Submitting the Transaction via the Relayer"}),"\n",(0,i.jsx)(n.p,{children:"After signing the delegated transaction, we use the following code snippet to submit the transaction through the relayer:"}),"\n",(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'await fetch("/api/internal/near/submit-meta-transaction", {\n  body: JSON.stringify({\n    delegated: Array.from(encodeSignedDelegate(delegated)),\n    network: "testnet",\n  }),\n  headers: {},\n  method: "POST",\n});\n'})}),"\n",(0,i.jsxs)(n.p,{children:["The ",(0,i.jsx)(n.code,{children:"fetch"})," function sends a POST request to the API route we created earlier. The body of this request includes the delegated transaction and the network."]})]})}function h(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var i=t(67294);const r={},a=i.createContext(r);function s(e){const n=i.useContext(a);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),i.createElement(a.Provider,{value:n},e.children)}}}]);