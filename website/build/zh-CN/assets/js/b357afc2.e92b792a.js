"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[5564],{63279:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>o,contentTitle:()=>d,default:()=>x,frontMatter:()=>a,metadata:()=>c,toc:()=>h});var i=t(85893),r=t(11151),s=t(74866),l=t(85162);const a={id:"social",title:"Overview"},d=void 0,c={id:"bos/api/social",title:"Overview",description:"At the core of NEAR social interactions there is the SocialDB smart contract (currently deployed at social.near).",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/bos/api/social.md",sourceDirName:"bos/api",slug:"/bos/api/social",permalink:"/zh-CN/bos/api/social",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/api/social.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"social",title:"Overview"},sidebar:"integrate",previous:{title:"Near",permalink:"/zh-CN/bos/api/near"},next:{title:"Social Notifications",permalink:"/zh-CN/bos/api/notifications"}},o={},h=[{value:"Social.get",id:"socialget",level:2},{value:"Examples",id:"examples",level:4},{value:"Social.getr",id:"socialgetr",level:2},{value:"Examples",id:"examples-1",level:4},{value:"Social.keys",id:"socialkeys",level:2},{value:"Examples",id:"examples-2",level:4},{value:"Social.index",id:"socialindex",level:2},{value:"Examples",id:"examples-3",level:4},{value:"Social.set",id:"socialset",level:2},{value:"Examples",id:"examples-4",level:4}];function u(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h2:"h2",h4:"h4",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components},{Details:t}=n;return t||function(e,n){throw new Error("Expected "+(n?"component":"object")+" `"+e+"` to be defined: you likely forgot to import, pass, or provide it.")}("Details",!0),(0,i.jsxs)(i.Fragment,{children:[(0,i.jsxs)(n.p,{children:["At the core of NEAR social interactions there is the ",(0,i.jsx)(n.a,{href:"https://github.com/NearSocial/social-db",children:"SocialDB smart contract"})," (currently deployed at ",(0,i.jsx)(n.a,{href:"https://nearblocks.io/address/social.near",children:"social.near"}),")."]}),"\n",(0,i.jsx)(n.p,{children:"NEAR provides a convenient API to get data from the SocialDB contract, composed by four methods:"}),"\n",(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#socialget",children:(0,i.jsx)(n.code,{children:"Social.get"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#socialgetr",children:(0,i.jsx)(n.code,{children:"Social.getr"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#socialindex",children:(0,i.jsx)(n.code,{children:"Social.index"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#socialkeys",children:(0,i.jsx)(n.code,{children:"Social.keys"})})}),"\n",(0,i.jsx)(n.li,{children:(0,i.jsx)(n.a,{href:"#socialset",children:(0,i.jsx)(n.code,{children:"Social.set"})})}),"\n"]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"socialget",children:"Social.get"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Social.get"})," fetches the data from the SocialDB contract by calling ",(0,i.jsx)(n.code,{children:"get"})," and returns the data. While the data is fetching the returned value equals to ",(0,i.jsx)(n.code,{children:"null"}),"."]}),"\n",(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsx)(n.p,{children:"If the path pattern is a single key, it will try to unwrap the object until the first wildcard."})}),"\n",(0,i.jsx)(n.p,{children:"The method takes up to 3 arguments:"}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"param"}),(0,i.jsx)(n.th,{children:"required"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"patterns"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"required"})}),(0,i.jsx)(n.td,{children:"string / string[]"}),(0,i.jsx)(n.td,{children:"the path pattern(s)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"finality"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"optional"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"final"'})," / number"]}),(0,i.jsx)(n.td,{children:"the block height or finality"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"optional"})}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsxs)(n.td,{children:["the ",(0,i.jsx)(n.code,{children:"options"})," object."]})]})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"options object",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"subscribe"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": if true, the data will be refreshed every 5 seconds."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"return_deleted"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": whether to return deleted values (as ",(0,i.jsx)(n.code,{children:"null"}),"). Default is ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n"]})}),"\n",(0,i.jsxs)(n.p,{children:["The block height or finality can be used to get the data at a specific block height or finality. If the block height or finality is not specified, the data will be fetched at the ",(0,i.jsx)(n.code,{children:"optimistic"})," finality (the latest block height)."]}),"\n",(0,i.jsxs)(n.p,{children:["For block height and finality ",(0,i.jsx)(n.code,{children:"final"}),", instead of calling the NEAR RPC directly, the VM uses the Social API Server to fetch the data. Social API server indexes the data for SocialDB and allows to fetch the data at any block height with additional options. It also allows returning more data than an RPC call because it's not restricted by the gas limit. In general, the API server also serves data faster than the NEAR RPC, because it doesn't execute the contract code in a virtual machine."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Social.get"})," options are similar to the SocialDB's ",(0,i.jsx)(n.code,{children:"get"})," API."]}),"\n",(0,i.jsx)(n.h4,{id:"examples",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["For example, if the path pattern is ",(0,i.jsx)(n.code,{children:"mob.near/widget/*"}),", the ",(0,i.jsx)(n.code,{children:"Social.get"})," will unwrap the object and return the following:"]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(l.Z,{value:"request",label:"Request",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const data = Social.get("mob.near/widget/*");\n'})})}),(0,i.jsx)(l.Z,{value:"response",label:"Response",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n  "HelloWorld": "return <div>Hello, World!</div>;",\n  "HelloUsername": "return <div>Hello, {props.username}!</div>;"\n}\n'})})})]}),"\n",(0,i.jsxs)(n.p,{children:["If the path pattern is ",(0,i.jsx)(n.code,{children:"mob.near/widget/HelloWorld"}),", the ",(0,i.jsx)(n.code,{children:"Social.get"})," will unwrap the object and return the actual value:"]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(l.Z,{value:"request",label:"Request",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const data = Social.get("mob.near/widget/HelloWorld");\n'})})}),(0,i.jsx)(l.Z,{value:"response",label:"Response",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"return <div>Hello, World!</div>;"\n'})})})]}),"\n",(0,i.jsx)(n.p,{children:"It's helpful that you don't have to manually unwrap object."}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"socialgetr",children:"Social.getr"}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Social.getr"})," is just a wrapper helper for ",(0,i.jsx)(n.code,{children:"Social.get"}),", it appends ",(0,i.jsx)(n.code,{children:"**"})," to each of the path pattern."]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"param"}),(0,i.jsx)(n.th,{children:"required"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"patterns"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"required"})}),(0,i.jsx)(n.td,{children:"string / string[]"}),(0,i.jsx)(n.td,{children:"the path pattern(s)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"finality"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"optional"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"final"'})," / number"]}),(0,i.jsx)(n.td,{children:"the block height or finality"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"optional"})}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsxs)(n.td,{children:["the ",(0,i.jsx)(n.code,{children:"options"})," object."]})]})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"options object",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"subscribe"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": if true, the data will be refreshed every 5 seconds."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"return_deleted"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": whether to return deleted values (as ",(0,i.jsx)(n.code,{children:"null"}),"). Default is ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(n.h4,{id:"examples-1",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["For example, if the path pattern is ",(0,i.jsx)(n.code,{children:"mob.near/profile"}),", ",(0,i.jsx)(n.code,{children:"Social.getr"})," will call ",(0,i.jsx)(n.code,{children:"Social.get"})," with the path pattern ",(0,i.jsx)(n.code,{children:"mob.near/profile/**"}),"."]}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(l.Z,{value:"request",label:"Request",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const data = Social.getr("mob.near/profile");\n'})})}),(0,i.jsx)(l.Z,{value:"response",label:"Response",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"return <div>Hello, World!</div>;"\n'})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"socialkeys",children:"Social.keys"}),"\n",(0,i.jsxs)(n.p,{children:["It calls the SocialDB's ",(0,i.jsx)(n.code,{children:"keys"})," API and returns the data. While the data is fetching the returned value equals to ",(0,i.jsx)(n.code,{children:"null"}),". The keys contract doesn't unwrap the object, so the returned data is the same as the SocialDB's ",(0,i.jsx)(n.code,{children:"keys"})," API."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Social.keys"})," takes up to 3 arguments:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"param"}),(0,i.jsx)(n.th,{children:"required"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"patterns"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"required"})}),(0,i.jsx)(n.td,{children:"string / string[]"}),(0,i.jsx)(n.td,{children:"the path pattern(s)"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"finality"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"optional"})}),(0,i.jsxs)(n.td,{children:[(0,i.jsx)(n.code,{children:'"final"'})," / number"]}),(0,i.jsx)(n.td,{children:"the block height or finality"})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"optional"})}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsxs)(n.td,{children:["the ",(0,i.jsx)(n.code,{children:"options"})," object."]})]})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"options object",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"subscribe"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": if true, the data will be refreshed every 5 seconds."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"return_type"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": either ",(0,i.jsx)(n.code,{children:'"History"'}),", ",(0,i.jsx)(n.code,{children:'"True"'}),", or ",(0,i.jsx)(n.code,{children:'"BlockHeight"'}),". If not specified, it will return the ",(0,i.jsx)(n.code,{children:'"True"'}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"return_deleted"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": whether to return deleted values (as ",(0,i.jsx)(n.code,{children:"null"}),"). Default is ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"values_only"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": whether to return only values (don't include objects). Default is ",(0,i.jsx)(n.code,{children:"false"}),"."]}),"\n"]})}),"\n",(0,i.jsx)(n.admonition,{type:"tip",children:(0,i.jsxs)(n.p,{children:["The Social API server supports custom options ",(0,i.jsx)(n.code,{children:'return_type: "History"'}),". For each matching key, it will return an array containing all the block heights when the value was changed in ascending order. It can be used for building a feed, where the values are overwritten."]})}),"\n",(0,i.jsx)(n.h4,{id:"examples-2",children:"Examples"}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsx)(l.Z,{value:"request",label:"Request",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'const data = Social.keys(`${accountId}/post/meme`, "final", {\n  return_type: "History",\n});\n'})})}),(0,i.jsx)(l.Z,{value:"response",label:"Response",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'"return <div>Hello, World!</div>;"\n'})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"socialindex",children:"Social.index"}),"\n",(0,i.jsxs)(n.p,{children:["Returns the array of matched indexed values. Ordered by ",(0,i.jsx)(n.code,{children:"blockHeight"}),"."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Social.index"})," arguments:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"param"}),(0,i.jsx)(n.th,{children:"required"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"action"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"required"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsxs)(n.td,{children:["is the ",(0,i.jsx)(n.code,{children:"index_type"})," from the standard, e.g. in the path ",(0,i.jsx)(n.code,{children:"index/like"})," the action is ",(0,i.jsx)(n.code,{children:"like"}),"."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"key"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"required"})}),(0,i.jsx)(n.td,{children:"string"}),(0,i.jsx)(n.td,{children:"is the inner indexed value from the standard."})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"optional"})}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsxs)(n.td,{children:["the ",(0,i.jsx)(n.code,{children:"options"})," object."]})]})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"options object",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"subscribe"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": if true, the data will be refreshed every 5 seconds."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"accountId"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": If given, it should either be a string or an array of account IDs to filter values by them. Otherwise, not filters by account Id."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"order"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": Either ",(0,i.jsx)(n.code,{children:"asc"})," or ",(0,i.jsx)(n.code,{children:"desc"}),". Defaults to ",(0,i.jsx)(n.code,{children:"asc"}),"."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"limit"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": Defaults to ",(0,i.jsx)(n.code,{children:"100"}),". The number of values to return. Index may return more than index values, if the last elements have the same block height."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"from"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": Defaults to ",(0,i.jsx)(n.code,{children:"0"})," or ",(0,i.jsx)(n.code,{children:"Max"})," depending on order."]}),"\n"]})}),"\n",(0,i.jsx)(n.h4,{id:"examples-3",children:"Examples"}),"\n",(0,i.jsxs)(s.Z,{children:[(0,i.jsxs)(l.Z,{value:"request",label:"Request",default:!0,children:[(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'return Social.index("test", "test-key-2");\n'})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'return Social.index("test", "test-key-2", {\n  accountId: "mob.near"\n});\n'})}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'return Social.index("test", "test-key-2", {\n  accountId: ["mob.near", "root.near"]\n});\n'})})]}),(0,i.jsx)(l.Z,{value:"response",label:"Response",children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'[\n    {\n        "accountId": "mob.near",\n        "blockHeight": 78672789,\n        "value": "test-value-1"\n    },\n    {\n        "accountId": "mob.near",\n        "blockHeight": 78672797,\n        "value": "test-value-1"\n    },\n    {\n        "accountId": "mob.near",\n        "blockHeight": 78672974,\n        "value": "test-value-3"\n    }\n]\n'})})})]}),"\n",(0,i.jsx)(n.hr,{}),"\n",(0,i.jsx)(n.h2,{id:"socialset",children:"Social.set"}),"\n",(0,i.jsxs)(n.p,{children:["Takes a ",(0,i.jsx)(n.code,{children:"data"})," object and commits it to SocialDB. It works similarly to the ",(0,i.jsx)(n.code,{children:"CommitButton"})," by spawning the modal window prompt to save data, but it doesn't have to be triggered through the commit button component. It allows you to write more flexible code that relies on async promises and use other events and components. Overall it enables more flexibility when committing to SocialDB. For example, you can commit when Enter key pressed."]}),"\n",(0,i.jsxs)(n.p,{children:[(0,i.jsx)(n.code,{children:"Social.set"})," arguments:"]}),"\n",(0,i.jsxs)(n.table,{children:[(0,i.jsx)(n.thead,{children:(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.th,{children:"param"}),(0,i.jsx)(n.th,{children:"required"}),(0,i.jsx)(n.th,{children:"type"}),(0,i.jsx)(n.th,{children:"description"})]})}),(0,i.jsxs)(n.tbody,{children:[(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"data"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.strong,{children:"required"})}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsxs)(n.td,{children:["the data object to be committed. Similar to ",(0,i.jsx)(n.code,{children:"CommitButton"}),", it shouldn't start with an account ID."]})]}),(0,i.jsxs)(n.tr,{children:[(0,i.jsx)(n.td,{children:(0,i.jsx)(n.code,{children:"options"})}),(0,i.jsx)(n.td,{children:(0,i.jsx)(n.em,{children:"optional"})}),(0,i.jsx)(n.td,{children:"object"}),(0,i.jsx)(n.td,{children:"optional object."})]})]})]}),"\n",(0,i.jsx)(n.admonition,{title:"options object",type:"info",children:(0,i.jsxs)(n.ul,{children:["\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"force"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": whether to overwrite the data."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"onCommit"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": function to trigger on successful commit. Will pass the data that was written (including ",(0,i.jsx)(n.code,{children:"accountID"}),")."]}),"\n",(0,i.jsxs)(n.li,{children:[(0,i.jsx)(n.code,{children:"onCancel"})," ",(0,i.jsx)(n.em,{children:"(optional)"}),": function to trigger if the user cancels the commit."]}),"\n"]})}),"\n",(0,i.jsxs)(t,{children:[(0,i.jsx)("summary",{children:" Ability to skip confirmation "}),(0,i.jsx)(n.p,{children:"When a modal window to confirm a commit is shown, it has a toggle to select whether you want to confirm the action every time, or don't show the confirm window for similar data."}),(0,i.jsx)(n.p,{children:"By default for new data the toggle is set to on, which means the user will not be prompted to confirm the data for the next time. It remembers the decision locally and will be default to this decision next time (in case the user decides to not skip). If the user approves the commit with the toggle on, then the next commit with similar data will skip the confirmation window. The permission is given per widget source."}),(0,i.jsx)(n.admonition,{type:"note",children:(0,i.jsxs)(n.p,{children:["Similar data means the same top level keys on the data. Except for the 4 top level keys: ",(0,i.jsx)(n.code,{children:"graph"}),", ",(0,i.jsx)(n.code,{children:"post"}),", ",(0,i.jsx)(n.code,{children:"index"})," and ",(0,i.jsx)(n.code,{children:"settings"}),". For these keys, the second level key will be used. More keys can be added later, once new standards added."]})}),(0,i.jsx)(n.p,{children:"For example the follow button widget uses the following keys:"}),(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-json",children:'{\n    "graph": {\n      "follow": ...\n    },\n    "index": {\n      "graph": ...\n      "notify": ...\n    }\n  }\n'})}),(0,i.jsx)(n.p,{children:"If it attempts to modify something else, the confirmation modal will be shown again."}),(0,i.jsx)(n.p,{children:(0,i.jsx)(n.img,{src:"https://user-images.githubusercontent.com/470453/205456503-7c0db525-7f61-4ead-8591-2b6d86065fa4.png",alt:"saving data"})})]}),"\n",(0,i.jsx)(n.h4,{id:"examples-4",children:"Examples"}),"\n",(0,i.jsxs)(n.p,{children:["Example on using ",(0,i.jsx)(n.code,{children:"CommitButton"})," and ",(0,i.jsx)(n.code,{children:"Social.set"})," with a regular button. Note, both use ",(0,i.jsx)(n.code,{children:"force"})]}),"\n",(0,i.jsx)(s.Z,{children:(0,i.jsx)(l.Z,{value:"request",label:"Request",default:!0,children:(0,i.jsx)(n.pre,{children:(0,i.jsx)(n.code,{className:"language-js",children:'State.init({ commitLoading: false });\n\nconst data = { experimental: { test: "test" } };\n\nconst Loading = (\n  <span\n    className="spinner-grow spinner-grow-sm me-1"\n    role="status"\n    aria-hidden="true"\n  />\n);\n\nreturn (\n  <div>\n    <CommitButton force data={data}>\n      CommitButton\n    </CommitButton>\n    <button\n      disabled={state.commitLoading}\n      onClick={() > {\n        State.update({ commitLoading: true });\n        Social.set(data, {\n          force: true,\n          onCommit: () => {\n            State.update({ commitLoading: false });\n          },\n          onCancel: () => {\n            State.update({ commitLoading: false });\n          },\n        });\n      }}\n    >\n      {state.commitLoading && Loading}Social.set\n    </button>\n  </div>\n);\n'})})})})]})}function x(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,i.jsx)(n,{...e,children:(0,i.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>l});t(67294);var i=t(36905);const r={tabItem:"tabItem_Ymn6"};var s=t(85893);function l(e){var n=e.children,t=e.hidden,l=e.className;return(0,s.jsx)("div",{role:"tabpanel",className:(0,i.Z)(r.tabItem,l),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>w});var i=t(67294),r=t(36905),s=t(12466),l=t(16550),a=t(20469),d=t(91980),c=t(67392),o=t(50012);function h(e){var n,t;return null!=(n=null==(t=i.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,i.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function u(e){var n=e.values,t=e.children;return(0,i.useMemo)((function(){var e=null!=n?n:function(e){return h(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function x(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function j(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,s=(0,l.k6)(),a=function(e){var n=e.queryString,t=void 0!==n&&n,i=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!i)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=i?i:null}({queryString:t,groupId:r});return[(0,d._X)(a),(0,i.useCallback)((function(e){if(a){var n=new URLSearchParams(s.location.search);n.set(a,e),s.replace(Object.assign({},s.location,{search:n.toString()}))}}),[a,s])]}function p(e){var n,t,r,s,l=e.defaultValue,d=e.queryString,c=void 0!==d&&d,h=e.groupId,p=u(e),m=(0,i.useState)((function(){return function(e){var n,t=e.defaultValue,i=e.tabValues;if(0===i.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!x({value:t,tabValues:i}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+i.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=i.find((function(e){return e.default})))?n:i[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:l,tabValues:p})})),f=m[0],b=m[1],g=j({queryString:c,groupId:h}),v=g[0],y=g[1],w=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:h}.groupId),t=(0,o.Nk)(n),r=t[0],s=t[1],[r,(0,i.useCallback)((function(e){n&&s.set(e)}),[n,s])]),k=w[0],S=w[1],I=function(){var e=null!=v?v:k;return x({value:e,tabValues:p})?e:null}();return(0,a.Z)((function(){I&&b(I)}),[I]),{selectedValue:f,selectValue:(0,i.useCallback)((function(e){if(!x({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);b(e),y(e),S(e)}),[y,S,p]),tabValues:p}}var m=t(72389);const f={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var b=t(85893);function g(e){var n=e.className,t=e.block,i=e.selectedValue,l=e.selectValue,a=e.tabValues,d=[],c=(0,s.o5)().blockElementScrollPositionUntilNextRender,o=function(e){var n=e.currentTarget,t=d.indexOf(n),r=a[t].value;r!==i&&(c(n),l(r))},h=function(e){var n,t=null;switch(e.key){case"Enter":o(e);break;case"ArrowRight":var i,r=d.indexOf(e.currentTarget)+1;t=null!=(i=d[r])?i:d[0];break;case"ArrowLeft":var s,l=d.indexOf(e.currentTarget)-1;t=null!=(s=d[l])?s:d[d.length-1]}null==(n=t)||n.focus()};return(0,b.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:a.map((function(e){var n=e.value,t=e.label,s=e.attributes;return(0,b.jsx)("li",Object.assign({role:"tab",tabIndex:i===n?0:-1,"aria-selected":i===n,ref:function(e){return d.push(e)},onKeyDown:h,onClick:o},s,{className:(0,r.Z)("tabs__item",f.tabItem,null==s?void 0:s.className,{"tabs__item--active":i===n}),children:null!=t?t:n}),n)}))})}function v(e){var n=e.lazy,t=e.children,r=e.selectedValue,s=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var l=s.find((function(e){return e.props.value===r}));return l?(0,i.cloneElement)(l,{className:"margin-top--md"}):null}return(0,b.jsx)("div",{className:"margin-top--md",children:s.map((function(e,n){return(0,i.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function y(e){var n=p(e);return(0,b.jsxs)("div",{className:(0,r.Z)("tabs-container",f.tabList),children:[(0,b.jsx)(g,Object.assign({},e,n)),(0,b.jsx)(v,Object.assign({},e,n))]})}function w(e){var n=(0,m.Z)();return(0,b.jsx)(y,Object.assign({},e,{children:h(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>a,a:()=>l});var i=t(67294);const r={},s=i.createContext(r);function l(e){const n=i.useContext(s);return i.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function a(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:l(e.components),i.createElement(s.Provider,{value:n},e.children)}}}]);