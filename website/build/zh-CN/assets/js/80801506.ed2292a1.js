"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6807],{21713:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>c,contentTitle:()=>r,default:()=>h,frontMatter:()=>o,metadata:()=>s,toc:()=>l});var a=n(85893),i=n(11151);const o={id:"blob-contract",title:"Blob Store Contract"},r=void 0,s={id:"data-availability/blob-contract",title:"Blob Store Contract",description:'This contract provides the store for arbitrary DA blobs. In practice, these "blobs" are sequencing data from rollups, but they can be any data.',source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/data-availability/blob-store.md",sourceDirName:"data-availability",slug:"/data-availability/blob-contract",permalink:"/zh-CN/data-availability/blob-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/data-availability/blob-store.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"blob-contract",title:"Blob Store Contract"},sidebar:"build",previous:{title:"Home",permalink:"/zh-CN/data-availability/welcome"},next:{title:"Light Client",permalink:"/zh-CN/data-availability/light-client"}},c={},l=[];function d(e){const t={code:"code",hr:"hr",li:"li",p:"p",ul:"ul",...(0,i.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsx)(t.p,{children:'This contract provides the store for arbitrary DA blobs. In practice, these "blobs" are sequencing data from rollups, but they can be any data.'}),"\n",(0,a.jsx)(t.hr,{}),"\n",(0,a.jsx)(t.p,{children:"NEAR blockchain state storage is pretty cheap. At the time of writing, 100KiB is a flat fee of 1NEAR."}),"\n",(0,a.jsx)(t.p,{children:"To limit the costs of NEAR storage even more, we don't store the blob data in the blockchain state."}),"\n",(0,a.jsx)(t.p,{children:"It works by taking advantage of NEAR consensus around receipts.\nWhen a chunk producer processes a receipt, there is consensus around the receipt.\nHowever, once the chunk has been processed and included in the block, the receipt is no longer required for consensus and can be pruned. The pruning time is at least 3 NEAR epochs, where each epoch is 12 hours; in practice, this is around five epochs.\nOnce the receipt has been pruned, it is the responsibility of archival nodes to retain the transaction data, and we can even get the data from indexers."}),"\n",(0,a.jsxs)(t.p,{children:["We can validate that the blob was retrieved from ecosystem actors in the format submitted by checking the blob commitment.\nThe blob commitment currently needs to be more efficient and will be improved, but it benefits us because anybody can build this with limited expertise and tooling.\nIt is created by taking a blob, chunking it into 256-byte pieces, and creating a Merkle tree, where each leaf is a Sha-256 hash of the shard.\nThe root of the Merkle tree is the blob commitment, which is provided as ",(0,a.jsx)(t.code,{children:"[transaction_id ++ commitment]"})," to the L1 contract, which is 64 bytes."]}),"\n",(0,a.jsx)(t.p,{children:"What this means:"}),"\n",(0,a.jsxs)(t.ul,{children:["\n",(0,a.jsx)(t.li,{children:"consensus is provided around the submission of a blob by NEAR validators"}),"\n",(0,a.jsx)(t.li,{children:"the function input data is stored by full nodes for at least three days"}),"\n",(0,a.jsx)(t.li,{children:"archival nodes can store the data for longer"}),"\n",(0,a.jsx)(t.li,{children:"we don't occupy consensus with more data than needs to be"}),"\n",(0,a.jsx)(t.li,{children:"indexers can also be used, and this Data is currently indexed by all significant explorers in NEAR"}),"\n",(0,a.jsx)(t.li,{children:"the commitment is available for a long time, and the commitment is straightforward to create"}),"\n"]})]})}function h(e={}){const{wrapper:t}={...(0,i.a)(),...e.components};return t?(0,a.jsx)(t,{...e,children:(0,a.jsx)(d,{...e})}):d(e)}},11151:(e,t,n)=>{n.d(t,{Z:()=>s,a:()=>r});var a=n(67294);const i={},o=a.createContext(i);function r(e){const t=a.useContext(o);return a.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function s(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),a.createElement(o.Provider,{value:t},e.children)}}}]);