"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[6009],{55620:(e,t,n)=>{n.r(t),n.d(t,{assets:()=>i,contentTitle:()=>c,default:()=>h,frontMatter:()=>l,metadata:()=>d,toc:()=>o});var s=n(85893),r=n(11151);const l={id:"data-storage",title:"\ub370\uc774\ud130 \uc800\uc7a5 / \uc218\uc9d1",sidebar_label:"NEAR\uc5d0 \uc800\uc7a5\ud558\uae30"},c=void 0,d={id:"concepts/storage/data-storage",title:"\ub370\uc774\ud130 \uc800\uc7a5 / \uc218\uc9d1",description:"NEAR \ube14\ub85d\uccb4\uc778\uc5d0 \uc800\uc7a5\ub41c \ubaa8\ub4e0 \ub370\uc774\ud130\ub294 \ud0a4/\uac12 \uc30d\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4. \uc6b0\ub9ac\uac00 \ub9cc\ub4e0 SDK\uc5d0\ub294 \ub370\uc774\ud130\ub97c \uccb4\uc778\uc5d0 \uc800\uc7a5\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \uba87 \uac00\uc9c0 \uc218\uc9d1 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4.",source:"@site/i18n/ko/docusaurus-plugin-content-docs/current/1.concepts/storage/data-collections.md",sourceDirName:"1.concepts/storage",slug:"/concepts/storage/data-storage",permalink:"/ko/concepts/storage/data-storage",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/1.concepts/storage/data-collections.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\ub144 1\uc6d4 11\uc77c",frontMatter:{id:"data-storage",title:"\ub370\uc774\ud130 \uc800\uc7a5 / \uc218\uc9d1",sidebar_label:"NEAR\uc5d0 \uc800\uc7a5\ud558\uae30"},sidebar:"concepts",previous:{title:"\ud1a0\ud070 \uc190\uc2e4 \ubc29\uc9c0",permalink:"/ko/concepts/basics/token-loss"},next:{title:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9",permalink:"/ko/concepts/storage/storage-staking"}},i={},o=[{value:"Rust \uc218\uc9d1 \uc790\ub8cc\ud615",id:"rust-collection-types",level:2},{value:"Big-O \ud45c\uae30\ubc95",id:"big-o-notation-1",level:3},{value:"\uac00\uc2a4 \uc18c\ubaa8 \uc608\uc81c",id:"gas-consumption-examples-1",level:3},{value:"<code>Vector</code>",id:"vector",level:3},{value:"<code>LookupSet</code>",id:"lookupset",level:3},{value:"<code>UnorderedSet</code>",id:"unorderedset",level:3},{value:"<code>LookupMap</code>",id:"lookupmap",level:3},{value:"<code>UnorderedMap</code>",id:"unorderedmap",level:3},{value:"<code>TreeMap</code>",id:"treemap",level:3},{value:"NEAR\uc758 \uc2a4\ud1a0\ub9ac\uc9c0 \uc81c\ud55c \uc0ac\ud56d",id:"near\uc758-\uc2a4\ud1a0\ub9ac\uc9c0-\uc81c\ud55c-\uc0ac\ud56d",level:2}];function a(e){const t={a:"a",blockquote:"blockquote",code:"code",em:"em",h2:"h2",h3:"h3",hr:"hr",img:"img",li:"li",p:"p",pre:"pre",strong:"strong",table:"table",tbody:"tbody",td:"td",th:"th",thead:"thead",tr:"tr",ul:"ul",...(0,r.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(t.p,{children:"NEAR \ube14\ub85d\uccb4\uc778\uc5d0 \uc800\uc7a5\ub41c \ubaa8\ub4e0 \ub370\uc774\ud130\ub294 \ud0a4/\uac12 \uc30d\uc73c\ub85c \uc774\ub8e8\uc5b4\uc9d1\ub2c8\ub2e4. \uc6b0\ub9ac\uac00 \ub9cc\ub4e0 SDK\uc5d0\ub294 \ub370\uc774\ud130\ub97c \uccb4\uc778\uc5d0 \uc800\uc7a5\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub418\ub294 \uba87 \uac00\uc9c0 \uc218\uc9d1 \ubc29\ubc95\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://www.rust-lang.org/",children:"Rust"})," \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc704\ud55c ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs",children:(0,s.jsx)(t.code,{children:"near-sdk-rs"})})]}),"\n",(0,s.jsxs)(t.li,{children:[(0,s.jsx)(t.a,{href:"https://www.javascript.com/",children:"JavaScript"})," \uc2a4\ub9c8\ud2b8 \ucee8\ud2b8\ub799\ud2b8\ub97c \uc704\ud55c ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-js",children:(0,s.jsx)(t.code,{children:"near-sdk-js"})})]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["\uc2a4\ud1a0\ub9ac\uc9c0 \ube44\uc6a9\uc5d0 \ub300\ud55c \uc790\uc138\ud55c \ub0b4\uc6a9\uc740 ",(0,s.jsx)(t.a,{href:"/concepts/storage/storage-staking",children:(0,s.jsx)(t.strong,{children:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9"})}),"\uc744 \ucc38\uc870\ud558\uc2ed\uc2dc\uc624."]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"rust-collection-types",children:"Rust \uc218\uc9d1 \uc790\ub8cc\ud615"}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/",children:[(0,s.jsx)(t.code,{children:"near-sdk-rs"})," \ubaa8\ub4c8 \ubb38\uc11c"]})}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\uc790\ub8cc\ud615"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\ubc18\ubcf5 \uac00\ub2a5"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\ubaa8\ub4e0 \uac12 \uc9c0\uc6b0\uae30"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\uc0bd\uc785 \uc21c\uc11c \uc720\uc9c0"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\ubc94\uc704 \uc120\ud0dd"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/concepts/storage/data-storage#vector",children:(0,s.jsx)(t.code,{children:"Vector"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/concepts/storage/data-storage#lookupset",children:(0,s.jsx)(t.code,{children:"LookupSet"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/concepts/storage/data-storage#unorderedset",children:(0,s.jsx)(t.code,{children:"UnorderedSet"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/concepts/storage/data-storage#lookupmap",children:(0,s.jsx)(t.code,{children:"LookupMap"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/concepts/storage/data-storage#unorderedmap",children:(0,s.jsx)(t.code,{children:"UnorderedMap"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/concepts/storage/data-storage#treemap",children:(0,s.jsx)(t.code,{children:"TreeMap"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"\u2705"}),(0,s.jsx)(t.td,{style:{textAlign:"center"}}),(0,s.jsx)(t.td,{style:{textAlign:"center"}})]})]})]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"big-o-notation-1",children:"Big-O \ud45c\uae30\ubc95"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\uc544\ub798 \ucc28\ud2b8\uc758 ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Big_O_notation",children:"Big-O \ud45c\uae30\ubc95"})," \uac12\uc740 ",(0,s.jsx)(t.code,{children:"near-sdk-rs"}),"\uc5d0\uc11c \ubcfc \uc218 \uc788\ub294 \ub2e4\uc591\ud55c \uc218\uc9d1 \ubc29\ubc95\uc758 ",(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Time_complexity",children:"\uc2dc\uac04 \ubcf5\uc7a1\ub3c4"}),"\ub97c \uc124\uba85 \ud569\ub2c8\ub2e4. \uc774\ub7ec\ud55c \ubc29\uc2dd\ub4e4\uc758 \uc2dc\uac04 \ubcf5\uc7a1\ub3c4 \uc815\ubcf4\ub294 NEAR\uc758 ",(0,s.jsx)(t.a,{href:"/concepts/basics/transactions/gas",children:"\uac00\uc2a4"})," \uc18c\ube44\uc640 \uad00\ub828\uc774 \uc788\uc73c\ubbc0\ub85c, \ud504\ub85c\uc81d\ud2b8\uc5d0\uc11c \uc0ac\uc6a9\ud560 \ub370\uc774\ud130\ub97c \uacb0\uc815\ud558\ub294 \ub370 \ub3c4\uc6c0\uc774 \ub429\ub2c8\ub2e4. \ub370\uc774\ud130 \uc218\uc9d1 \ubc29\ubc95\uc5d0\ub294 \uc138 \uac00\uc9c0 \uc720\ud615\uc774 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsxs)(t.li,{children:["O(1) - ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Time_complexity#Constant_time",children:"\uc0c1\uc218\uc2dc\uac04"})})]}),"\n",(0,s.jsxs)(t.li,{children:["O(n) - ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Time_complexity#Linear_time",children:"\uc120\ud615\uc2dc\uac04"})})]}),"\n",(0,s.jsxs)(t.li,{children:["O(log n) - ",(0,s.jsx)(t.em,{children:(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Time_complexity#Logarithmic_time",children:"\ub85c\uadf8\uc2dc\uac04"})})]}),"\n"]}),"\n",(0,s.jsxs)(t.table,{children:[(0,s.jsx)(t.thead,{children:(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.th,{children:"\uc790\ub8cc\ud615"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\uc811\uadfc"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\uc0bd\uc785"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\uc0ad\uc81c"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\uac80\uc0c9"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\uc21c\ud68c(Traverse)"}),(0,s.jsx)(t.th,{style:{textAlign:"center"},children:"\uc0ad\uc81c"})]})}),(0,s.jsxs)(t.tbody,{children:[(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/concepts/storage/data-storage#vector",children:(0,s.jsx)(t.code,{children:"Vector"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)*"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)**"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(n)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(n)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(n)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/concepts/storage/data-storage#lookupset",children:(0,s.jsx)(t.code,{children:"LookupSet"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/concepts/storage/data-storage#unorderedset",children:(0,s.jsx)(t.code,{children:"UnorderedSet"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(n)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(n)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/concepts/storage/data-storage#lookupmap",children:(0,s.jsx)(t.code,{children:"LookupMap"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"N/A"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/concepts/storage/data-storage#unorderedmap",children:(0,s.jsx)(t.code,{children:"UnorderedMap"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(n)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(n)"})]}),(0,s.jsxs)(t.tr,{children:[(0,s.jsx)(t.td,{children:(0,s.jsx)(t.a,{href:"/concepts/storage/data-storage#treemap",children:(0,s.jsx)(t.code,{children:"TreeMap"})})}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(1)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(log n)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(log n)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(log n)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(n)"}),(0,s.jsx)(t.td,{style:{textAlign:"center"},children:"O(n)"})]})]})]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["* - ",(0,s.jsx)(t.code,{children:"push_back"}),"(\ub610\ub294 deque\uc5d0 \ub300\ud574 ",(0,s.jsx)(t.code,{children:"push_front"}),")\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubca1\ud130 \ub9e8 \ub4a4\uc5d0 \uc0bd\uc785"]})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsxs)(t.em,{children:["** - ",(0,s.jsx)(t.code,{children:"pop"})," (\ub610\ub294 deque\uc5d0 \ub300\ud574 ",(0,s.jsx)(t.code,{children:"pop_front"}),")\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubca1\ud130 \ub9e8 \ub4a4 \uc6d0\uc18c\ub97c \uc0ad\uc81c\ud558\uace0, \ub610\ub294 ",(0,s.jsx)(t.code,{children:"swap_remove"}),"\ub97c \uc0ac\uc6a9\ud558\uc5ec \ud574\ub2f9 \uc694\uc18c\ub97c \ubca1\ud130 \ub9e8 \ub4a4 \uc694\uc18c\uc640 \uad50\uccb4\ud55c \ub4a4 \uc0ad\uc81c"]})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"gas-consumption-examples-1",children:"\uac00\uc2a4 \uc18c\ubaa8 \uc608\uc81c"}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\uc544\ub798\uc758 \uc608\uc81c\ub294 \uc704\uc758 \ubc29\ubc95\uc744 \uc0ac\uc6a9\ud558\uc5ec \ud0a4/\uac12 \uc30d\uc744 \uc800\uc7a5\ud558\uace0 \uac80\uc0c9\ud558\ub294 \uac00\uc2a4 \uc18c\ubaa8\uc758 \ucc28\uc774\uc810\uc744 \ubcf4\uc5ec\uc90d\ub2c8\ub2e4. \ub370\uc774\ud130 \uc77d\uae30/\uc4f0\uae30\ub9cc \ud45c\uc2dc\ud558\uae30 \uc704\ud574 \uccb4\uc778\uc5d0\uc11c \ub7f0\ud0c0\uc784 \ud658\uacbd\uc744 \ud68c\uc804\uc2dc\ud0a4\ub294 \uac00\uc2a4 \ube44\uc6a9\uc740 \ucc28\uac10\ub418\uc5c8\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://github.com/near-examples/collection-examples-rs",children:"collection-examples-rs"}),"\ub97c \ubc29\ubb38\ud558\uc5ec \uc774\ub97c \uc7ac\ud604\ud558\uace0 \uc790\uc2e0\uc758 \ub370\uc774\ud130 \uc138\ud2b8\ub97c \ud14c\uc2a4\ud2b8\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Rust Set Data Gas Chart",src:n(38621).Z+"",width:"1901",height:"747"})}),"\n",(0,s.jsx)(t.p,{children:(0,s.jsx)(t.img,{alt:"Rust Get Data Gas Chart",src:n(47857).Z+"",width:"1911",height:"762"})}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"vector",children:(0,s.jsx)(t.code,{children:"Vector"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/Array_data_structure",children:"vector"})," / \uc601\uad6c \ubc30\uc5f4\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\uc778\ub371\uc2a4\ub97c \uc0ac\uc6a9\ud558\uc5ec \ubc18\ubcf5\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.li,{children:"\ub2e4\uc74c \ub9f5\uc744 \uc0ac\uc6a9\ud569\ub2c8\ub2e4: \uc778\ub371\uc2a4 -> \uc694\uc18c"}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["[ ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/struct.TreeMap.html",children:"\uad6c\ud604"})," ]"]}),"\n",(0,s.jsxs)(t.p,{children:["[ ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/vector.rs",children:"SDK \uc18c\uc2a4"})," ]"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"lookupset",children:(0,s.jsx)(t.code,{children:"LookupSet"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\ubc18\ubcf5\uc790(iterator) ",(0,s.jsx)(t.em,{children:"\uc5c6\ub294"})," \uc601\uad6c \uc9d1\ud569\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\ud0a4\ub97c \ubc18\ubcf5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.li,{children:"\ub354 \ud6a8\uc728\uc801\uc778 \uc77d\uae30/\uc4f0\uae30\uac00 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["[ ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/vector/struct.Vector.html",children:"\uad6c\ud604"})," ]"]}),"\n",(0,s.jsxs)(t.p,{children:["[ ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/lookup_set.rs",children:"SDK \uc18c\uc2a4"})," ]"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"unorderedset",children:(0,s.jsx)(t.code,{children:"UnorderedSet"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:["\ubc18\ubcf5\uc790 ",(0,s.jsx)(t.em,{children:"\uc5c6\uc774"})," \uc601\uad6c \uc9d1\ud569\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."]}),"\n"]}),"\n",(0,s.jsxs)(t.p,{children:["[ ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/struct.LookupSet.html",children:"\uad6c\ud604"})," ]"]}),"\n",(0,s.jsxs)(t.p,{children:["[ ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/unordered_set.rs",children:"SDK \uc18c\uc2a4"})," ]"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"lookupmap",children:(0,s.jsx)(t.code,{children:"LookupMap"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\uc601\uad6c \ub9f5\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\ud0a4\ub97c \ubc18\ubcf5\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.li,{children:"\uac12\uc744 \uc81c\uac70\ud558\uace0 \ucd94\uac00\ud560 \ub54c \uc21c\uc11c\ub97c \uc720\uc9c0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.li,{children:"\uc77d\uae30 \ubc0f \uc4f0\uae30 \ud69f\uc218\uac00 \ud6a8\uc728\uc801\uc785\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\ub824\uba74:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"pub fn add_lookup_map(&mut self, key: String, value: String) {\n    self.lookup_map.insert(&key, &value);\n}\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\ub370\uc774\ud130\ub97c \uc5bb\uc73c\ub824\uba74:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'pub fn get_lookup_map(&self, key: String) -> String {\n    match self.lookup_map.get(&key) {\n        Some(value) => {\n            let log_message = format!("Value from LookupMap is {:?}", value.clone());\n            env::log(log_message.as_bytes());\n            value\n        },\n        None => "not found".to_string()\n    }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["[ ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/struct.UnorderedSet.html",children:"\uad6c\ud604 \ubb38\uc11c"})," ]"]}),"\n",(0,s.jsxs)(t.p,{children:["[ ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/lookup_map.rs",children:"SDK \uc18c\uc2a4"})," ]"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"unorderedmap",children:(0,s.jsx)(t.code,{children:"UnorderedMap"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsx)(t.p,{children:"\uc815\ub82c\ub418\uc9c0 \uc54a\uc740 \ub9f5\ud551\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\ubc18\ubcf5 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.li,{children:"\uac12\uc744 \uc81c\uac70\ud558\uace0 \ucd94\uac00\ud560 \ub54c \uc21c\uc11c\ub97c \uc720\uc9c0\ud558\uc9c0 \uc54a\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.li,{children:"\ubaa8\ub4e0 \uac12\uc744 \uc9c0\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\ub824\uba74:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"pub fn add_unordered_map(&mut self, key: String, value: String) {\n    self.unordered_map.insert(&key, &value);\n}\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\ub370\uc774\ud130\ub97c \uc5bb\uc73c\ub824\uba74:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'pub fn get_unordered_map(&self, key: String) -> String {\n    match self.unordered_map.get(&key) {\n        Some(value) => {\n            let log_message = format!("Value from UnorderedMap is {:?}", value.clone());\n            env::log(log_message.as_bytes());\n            value\n        },\n        // None => "Didn\'t find that key.".to_string()\n        None => "not found".to_string()\n    }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["[ ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/struct.LookupMap.html",children:"\uad6c\ud604"})," ]"]}),"\n",(0,s.jsxs)(t.p,{children:["[ ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/tree/master/near-sdk/src/collections/unordered_map",children:"SDK \uc18c\uc2a4"})," ]"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h3,{id:"treemap",children:(0,s.jsx)(t.code,{children:"TreeMap"})}),"\n",(0,s.jsxs)(t.blockquote,{children:["\n",(0,s.jsxs)(t.p,{children:[(0,s.jsx)(t.a,{href:"https://en.wikipedia.org/wiki/AVL_tree",children:"AVL-tree"})," \uae30\ubc18\uc758 \ud2b8\ub9ac \ub9f5\uc744 \uad6c\ud604\ud569\ub2c8\ub2e4."]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\ubc18\ubcf5 \uac00\ub2a5\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.li,{children:"\uc21c\uc11c\ub97c \uc720\uc9c0\ud569\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.li,{children:"\ubaa8\ub4e0 \uac12\uc744 \uc9c0\uc6b8 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.li,{children:"\uc790\uae30 \uade0\ud615(Self Balancing)\uc744 \uc720\uc9c0\ud569\ub2c8\ub2e4."}),"\n"]}),"\n"]}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\ub370\uc774\ud130\ub97c \ucd94\uac00\ud558\ub824\uba74:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:"pub fn add_tree_map(&mut self, key: String, value: String) {\n    self.tree_map.insert(&key, &value);\n}\n"})}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\ub370\uc774\ud130\ub97c \uc5bb\uc73c\ub824\uba74:"}),"\n"]}),"\n",(0,s.jsx)(t.pre,{children:(0,s.jsx)(t.code,{className:"language-rust",children:'pub fn get_tree_map(&self, key: String) -> String {\n    match self.tree_map.get(&key) {\n        Some(value) => {\n            let log_message = format!("Value from TreeMap is {:?}", value.clone());\n            env::log(log_message.as_bytes());\n            // Since we found it, return it (note implicit return)\n            value\n        },\n        // did not find the entry\n        // note: curly brackets after arrow are optional in simple cases, like other languages\n        None => "not found".to_string()\n    }\n}\n'})}),"\n",(0,s.jsxs)(t.p,{children:["[ ",(0,s.jsx)(t.a,{href:"https://docs.rs/near-sdk/latest/near_sdk/collections/unordered_map/struct.UnorderedMap.html",children:"\uad6c\ud604"})," ]"]}),"\n",(0,s.jsxs)(t.p,{children:["[ ",(0,s.jsx)(t.a,{href:"https://github.com/near/near-sdk-rs/blob/master/near-sdk/src/collections/tree_map.rs",children:"SDK \uc18c\uc2a4"})," ]"]}),"\n",(0,s.jsx)(t.hr,{}),"\n",(0,s.jsx)(t.h2,{id:"near\uc758-\uc2a4\ud1a0\ub9ac\uc9c0-\uc81c\ud55c-\uc0ac\ud56d",children:"NEAR\uc758 \uc2a4\ud1a0\ub9ac\uc9c0 \uc81c\ud55c \uc0ac\ud56d"}),"\n",(0,s.jsx)(t.p,{children:"\ub370\uc774\ud130\ub97c \uc628\uccb4\uc778\uc5d0 \uc800\uc7a5\ud558\ub824\uba74 \ub2e4\uc74c \uc0ac\ud56d\uc5d0 \uc720\uc758\ud574\uc57c \ud569\ub2c8\ub2e4:"}),"\n",(0,s.jsxs)(t.ul,{children:["\n",(0,s.jsx)(t.li,{children:"\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9 \ube44\uc6a9\uc740 \ud569\uc0b0\ub420 \uc218 \uc788\uc2b5\ub2c8\ub2e4."}),"\n",(0,s.jsx)(t.li,{children:"\ud55c \ubc88\uc5d0 \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\ub294 \uc591\uc5d0\ub294 4MB \uc81c\ud55c\uc774 \uc788\uc2b5\ub2c8\ub2e4."}),"\n"]}),"\n",(0,s.jsx)(t.p,{children:"\uc608\ub97c \ub4e4\uc5b4, \ub204\uad70\uac00\uac00 NFT\ub97c \uc21c\uc804\ud788 \uc628\uccb4\uc778(IPFS \ub610\ub294 \ub2e4\ub978 \ud0c8\uc911\uc559\ud654 \uc2a4\ud1a0\ub9ac\uc9c0 \uc194\ub8e8\uc158\uc774 \uc544\ub2cc)\uc5d0 \ub123\uae30\ub97c \uc6d0\ud55c\ub2e4\uace0 \uac00\uc815\ud574 \ubcf4\uaca0\uc2b5\ub2c8\ub2e4. \uac70\uc758 \ubb34\uc81c\ud55c\uc758 \uc2a4\ud1a0\ub9ac\uc9c0\uac00 \uc788\uc9c0\ub9cc, \uc0ac\uc6a9\ub41c \uc2a4\ud1a0\ub9ac\uc9c0 100kb\ub2f9 1 $NEAR\ub97c \uc9c0\ubd88\ud574\uc57c \ud569\ub2c8\ub2e4(\uc2a4\ud1a0\ub9ac\uc9c0 \uc2a4\ud14c\uc774\ud0b9 \ucc38\uace0)."}),"\n",(0,s.jsx)(t.p,{children:"\uc0ac\uc6a9\uc790\ub294 MAX_GAS \uc81c\uc57d\uc73c\ub85c \uc778\ud574, \ucee8\ud2b8\ub799\ud2b8 \ud638\ucd9c \ub2f9 4MB\uae4c\uc9c0 \uc5c5\ub85c\ub4dc\ud560 \uc218 \uc788\ub3c4\ub85d \uc81c\ud55c\ub429\ub2c8\ub2e4. \uc8fc\uc5b4\uc9c4 functionCall\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc788\ub294 \ucd5c\ub300 \uac00\uc2a4\ub7c9\uc740 300TGas\uc785\ub2c8\ub2e4."})]})}function h(e={}){const{wrapper:t}={...(0,r.a)(),...e.components};return t?(0,s.jsx)(t,{...e,children:(0,s.jsx)(a,{...e})}):a(e)}},47857:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rust-getData-gasBurnt-0ccc453173ad23be8abb0463b574ea3d.png"},38621:(e,t,n)=>{n.d(t,{Z:()=>s});const s=n.p+"assets/images/rust-setData-gasBurnt-309a1615483af8a465b806aacdb3c840.png"},11151:(e,t,n)=>{n.d(t,{Z:()=>d,a:()=>c});var s=n(67294);const r={},l=s.createContext(r);function c(e){const t=s.useContext(l);return s.useMemo((function(){return"function"==typeof e?e(t):{...t,...e}}),[t,e])}function d(e){let t;return t=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:c(e.components),s.createElement(l.Provider,{value:t},e.children)}}}]);