"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[710],{88729:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>f,frontMatter:()=>o,metadata:()=>c,toc:()=>u});var a=t(85893),r=t(11151),i=t(74866),s=t(85162);const o={id:"nft",title:"Non Fungible Tokens (NFT)"},l=void 0,c={id:"develop/relevant-contracts/nft",title:"Non Fungible Tokens (NFT)",description:"In contrast with fungible tokens, non-fungible tokens (NFT) are unitary and therefore unique. This makes NFTs ideal to represent ownership of assets such as a piece of digital content, or a ticket for an event.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/2.develop/relevant-contracts/nft.md",sourceDirName:"2.develop/relevant-contracts",slug:"/develop/relevant-contracts/nft",permalink:"/zh-CN/develop/relevant-contracts/nft",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/2.develop/relevant-contracts/nft.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"nft",title:"Non Fungible Tokens (NFT)"},sidebar:"contracts",previous:{title:"Fungible Tokens (FT)",permalink:"/zh-CN/develop/relevant-contracts/ft"},next:{title:"Decentralized Oracles",permalink:"/zh-CN/develop/relevant-contracts/oracles"}},d={},u=[{value:"Minting an NFT",id:"minting-an-nft",level:2},{value:"Minting Collections",id:"minting-collections",level:3},{value:"Royalties",id:"royalties",level:3},{value:"Querying Metadata",id:"querying-metadata",level:2},{value:"Approving Users",id:"approving-users",level:2},{value:"Transferring an NFT",id:"transferring-an-nft",level:2},{value:"Attaching NFTs to a Call",id:"attaching-nfts-to-a-call",level:2},{value:"How Does it Work?",id:"how-does-it-work",level:3},{value:"The nft_on_transfer method",id:"the-nft_on_transfer-method",level:4},{value:"Events",id:"events",level:2}];function h(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",hr:"hr",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,r.a)(),...e.components};return(0,a.jsxs)(a.Fragment,{children:[(0,a.jsxs)(n.p,{children:["In contrast with ",(0,a.jsx)(n.a,{href:"/zh-CN/develop/relevant-contracts/ft",children:"fungible tokens"}),", non-fungible tokens (NFT) are unitary and therefore unique. This makes NFTs ideal to represent ownership of assets such as a piece of digital content, or a ticket for an event."]}),"\n",(0,a.jsxs)(n.p,{children:["As with fungible tokens, NFTs are ",(0,a.jsx)(n.strong,{children:"not stored"})," in the user's wallet, instead, each NFT lives in a ",(0,a.jsx)(n.strong,{children:"NFT contract"}),". The NFT contract works as a bookkeeper, this is: it is in charge of handling the creation, storage and transfers of NFTs."]}),"\n",(0,a.jsxs)(n.p,{children:["In order for a contract to be considered a NFT-contract it has to follow the ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken",children:(0,a.jsx)(n.strong,{children:"NEP-171 and NEP-177 standards"})}),". The ",(0,a.jsx)(n.strong,{children:"NEP-171"})," & ",(0,a.jsx)(n.strong,{children:"NEP-177"})," standards explain the ",(0,a.jsx)(n.strong,{children:"minimum interface"})," required to be implemented, as well as the expected functionality."]}),"\n",(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["Reference Implementation We provide a ",(0,a.jsx)(n.a,{href:"https://github.com/near-examples/NFT",children:"reference implementation"})," ready to be deployed and use. :::"]}),(0,a.jsx)(n.admonition,{title:"NFT & Marketplaces",type:"info",children:(0,a.jsx)(n.p,{children:"Be mindful of not confusing an NFT with an NFT-marketplace. NFT simply store information (metadata), while NFT-marketplaces are contracts where NFT can be listed and exchanged for a price."})})]}),"\n",(0,a.jsx)(n.hr,{}),"\n",(0,a.jsx)(n.h2,{id:"minting-an-nft",children:"Minting an NFT"}),"\n",(0,a.jsxs)(n.p,{children:["In order to create a new NFT (a.k.a. mint it) you need first to deploy an ",(0,a.jsx)(n.a,{href:"https://github.com/near-examples/NFT",children:"NFT contract"})," and initialize it with an ",(0,a.jsx)(n.code,{children:"owner"}),". Currently, the ",(0,a.jsx)(n.code,{children:"owner"})," simply sets an internal variable (",(0,a.jsx)(n.code,{children:"Contract.owner_id"}),"), meaning it is ",(0,a.jsx)(n.strong,{children:"NOT the default owner"})," of all minted NFTs."]}),"\n",(0,a.jsxs)(n.p,{children:["Once deployed and initialized, you can call the ",(0,a.jsx)(n.code,{children:"nft_mint"})," method. You will need to pass as parameters a unique id, an owner, the token's metadata, and (optionally) royalties. The metadata will include information such as the title, a description, and an URL to associated media."]}),"\n",(0,a.jsx)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(s.Z,{value:"cli",label:"NEAR CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'# 1. Deploy the contract in a testnet account\nnear dev-deploy --wasmFile non_fungible_token.wasm\n\n# 2. Initialize NFT contract\n\n# 3. Mint an NFT\nnear call <nft-contract> nft_mint \'{"token_id": "<token-unique-id>", "receiver_id": "<nft-owner-account>", "token_metadata": {"title": "<title>", "description": "<description>", "media": "<url>" }, "royalties": {"<account>" : <percentage>, "<account>" : <percentage>}}\' --accountId <your-account>\n\n'})})})}),"\n",(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["See the ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Metadata",children:"metadata standard"})," for the full list of ",(0,a.jsx)(n.code,{children:"TokenMetadata"})," parameters. :::"]}),(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["Implement ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"events"})," to be able to ",(0,a.jsx)(n.a,{href:"/zh-CN/tools/realtime",children:"track NFT mints in real time"}),". :::"]}),(0,a.jsx)(n.h3,{id:"minting-collections",children:"Minting Collections"}),(0,a.jsxs)(n.p,{children:["Many times people want to create multiple 100 copies of an NFT (this is called a collection). In such cases, what you actually need to do is to mint 100 different NFTs with the same metadata (but different ",(0,a.jsx)(n.code,{children:"token-id"}),")."]}),(0,a.jsx)(n.h3,{id:"royalties",children:"Royalties"}),(0,a.jsxs)(n.p,{children:["You might have noticed that one of the parameters is a structure called royalties. Royalties enable you to create a list of users that should get paid when the token is sell in a marketplace. For example, if ",(0,a.jsx)(n.code,{children:"anna"})," has ",(0,a.jsx)(n.code,{children:"5%"})," of royalties, each time the NFT is sell, ",(0,a.jsx)(n.code,{children:"anna"})," should get a 5% of the selling price."]}),(0,a.jsx)("hr",{class:"subsection"}),(0,a.jsx)(n.h2,{id:"querying-metadata",children:"Querying Metadata"}),(0,a.jsxs)(n.p,{children:["You can query the NFT's metadata by calling the ",(0,a.jsx)(n.code,{children:"nft_metadata"}),"."]}),(0,a.jsx)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(s.Z,{value:"cli",label:"NEAR CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:"near view <nft-contract> nft_metadata\n"})})})}),(0,a.jsx)("hr",{class:"subsection"}),(0,a.jsx)(n.h2,{id:"approving-users",children:"Approving Users"}),(0,a.jsxs)(n.p,{children:["You can authorize other users to transfer an NFT you own. This is useful, for example, to enable listing your NFT in a marketplace. In such scenario, you ",(0,a.jsx)(n.strong,{children:"trust"})," that the marketplace will only transfer the NFT upon receiving a certain amount of money in exchange."]}),(0,a.jsx)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(s.Z,{value:"cli",label:"NEAR CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'near call <nft-contract> nft_approve \'{\n "token_id": "<token-unique-id>",\n "account_id": "<authorized-account>",\n "msg": "<json-structure>"\n}\' --accountId <your-account> --depositYocto 1\n\n'})})})}),(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["If the ",(0,a.jsx)(n.code,{children:"msg"})," parameter is included, then a cross-contract call will be made to ",(0,a.jsx)(n.code,{children:"<authorized_account>.nft_on_approve(msg)"}),". Which in turn will make a callback to ",(0,a.jsx)(n.code,{children:"nft_resolve_transfer"})," in your NFT contract. :::"]}),(0,a.jsx)("hr",{class:"subsection"}),(0,a.jsx)(n.h2,{id:"transferring-an-nft",children:"Transferring an NFT"}),(0,a.jsxs)(n.p,{children:["Transferring an NFT can happen in two scenarios: (1) you ask to transfer an NFT, and (2) an authorized account asks to transfer the NFT. In both cases, it is necessary to invoke the ",(0,a.jsx)(n.code,{children:"nft_transfer"})," method, indicating the token id, the receiver, and an (optionally) an ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/ApprovalManagement",children:"approval_id"}),"."]}),(0,a.jsx)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(s.Z,{value:"cli",label:"NEAR CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'near call <nft-contract> nft_transfer \'{"receiver_id": "<receiver-account>", "token_id": "<token-unique-id>"}\' --accountId <your-account> --depositYocto 1\n'})})})}),(0,a.jsxs)(n.admonition,{type:"tip",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["Implement ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"events"})," to be able to ",(0,a.jsx)(n.a,{href:"/zh-CN/tools/realtime",children:"track NFT transfers in real time"}),". :::"]}),(0,a.jsx)("hr",{class:"subsection"}),(0,a.jsx)(n.h2,{id:"attaching-nfts-to-a-call",children:"Attaching NFTs to a Call"}),(0,a.jsx)(n.p,{children:"Natively, only NEAR tokens (\u24c3) can be attached to a method calls. However, the NFT standard enables to attach a non-fungible tokens in a call by using the NFT-contract as intermediary. This means that, instead of you attaching tokens directly to the call, you ask the NFT-contract to do both a transfer and a method call in your name."}),(0,a.jsx)(i.Z,{className:"language-tabs",groupId:"code-tabs",children:(0,a.jsx)(s.Z,{value:"cli",label:"NEAR CLI",children:(0,a.jsx)(n.pre,{children:(0,a.jsx)(n.code,{className:"language-bash",children:'near call <nft-contract> nft_transfer_call \'{"receiver_id": "<receiver-contract>", "token_id": "<token_id>", "msg": "<a-string-message>"}\' --accountId <your-account> --depositYocto 1\n'})})})}),(0,a.jsxs)(n.admonition,{type:"info",children:[(0,a.jsxs)(n.mdxAdmonitionTitle,{children:["Optionally, a ",(0,a.jsxs)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Core#nft-interface",children:[(0,a.jsx)(n.code,{children:"memo"})," parameter"]})," can be passed to provide more information to your contract. :::"]}),(0,a.jsx)(n.h3,{id:"how-does-it-work",children:"How Does it Work?"}),(0,a.jsx)(n.p,{children:"Assume you want to attach an NFT (\ud83c\udfab) to a call on the receiver contract. The workflow is as follows:"}),(0,a.jsxs)(n.ol,{children:["\n",(0,a.jsxs)(n.li,{children:["You call ",(0,a.jsx)(n.code,{children:"nft_transfer_call"})," in the NFT-contract passing: the receiver, a message, and the token-id of \ud83c\udfab."]}),"\n",(0,a.jsx)(n.li,{children:"The NFT contract transfers the NFT \ud83c\udfab to the receiver."}),"\n",(0,a.jsxs)(n.li,{children:["The NFT contract calls ",(0,a.jsx)(n.strong,{children:(0,a.jsx)(n.code,{children:"receiver.nft_on_transfer(sender, token-owner, token-id, msg)"})}),"."]}),"\n",(0,a.jsxs)(n.li,{children:["The NFT contract handles errors in the ",(0,a.jsx)(n.code,{children:"nft_resolve_transfer"})," callback."]}),"\n",(0,a.jsxs)(n.li,{children:["The NFT contract returns ",(0,a.jsx)(n.code,{children:"true"})," if it succeeded."]}),"\n"]}),(0,a.jsx)(n.h4,{id:"the-nft_on_transfer-method",children:"The nft_on_transfer method"}),(0,a.jsxs)(n.p,{children:["From the workflow above it follows that the receiver we want to call needs to implement the ",(0,a.jsx)(n.code,{children:"nft_on_transfer"})," method. When executed, such method will know:"]}),(0,a.jsxs)(n.ul,{children:["\n",(0,a.jsx)(n.li,{children:"Who is sending the NFT, since it is a parameter"}),"\n",(0,a.jsx)(n.li,{children:"Who is the current owner, since it is a parameter"}),"\n",(0,a.jsx)(n.li,{children:"Which NFT was transferred, since it is a parameter."}),"\n",(0,a.jsx)(n.li,{children:"If there are any parameters encoded as a message"}),"\n"]}),(0,a.jsxs)(n.p,{children:["The ",(0,a.jsx)(n.code,{children:"nft_on_transfer"})," ",(0,a.jsx)(n.strong,{children:"must return true"})," if the NFT has to be ",(0,a.jsx)(n.strong,{children:"returned to the sender"}),"."]}),(0,a.jsx)("hr",{class:"subsection"}),(0,a.jsx)(n.h2,{id:"events",children:"Events"}),(0,a.jsxs)(n.p,{children:["You can track real time events (such as transfers) by implementing the ",(0,a.jsx)(n.a,{href:"https://nomicon.io/Standards/Tokens/NonFungibleToken/Event",children:"NFT Event Standards"}),". ",(0,a.jsx)(n.code,{children:"Events"})," are simple to use, because they are just login messages formatted in a standardize way. Since these logged messages are public, a service can then be built to ",(0,a.jsx)(n.a,{href:"/zh-CN/tools/realtime",children:"track them in real time"}),"."]})]})]})]})]})]})]})}function f(e={}){const{wrapper:n}={...(0,r.a)(),...e.components};return n?(0,a.jsx)(n,{...e,children:(0,a.jsx)(h,{...e})}):h(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>s});t(67294);var a=t(36905);const r={tabItem:"tabItem_Ymn6"};var i=t(85893);function s(e){var n=e.children,t=e.hidden,s=e.className;return(0,i.jsx)("div",{role:"tabpanel",className:(0,a.Z)(r.tabItem,s),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>N});var a=t(67294),r=t(36905),i=t(12466),s=t(16550),o=t(20469),l=t(91980),c=t(67392),d=t(50012);function u(e){var n,t;return null!=(n=null==(t=a.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,a.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function h(e){var n=e.values,t=e.children;return(0,a.useMemo)((function(){var e=null!=n?n:function(e){return u(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function f(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId,i=(0,s.k6)(),o=function(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!a)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=a?a:null}({queryString:t,groupId:r});return[(0,l._X)(o),(0,a.useCallback)((function(e){if(o){var n=new URLSearchParams(i.location.search);n.set(o,e),i.replace(Object.assign({},i.location,{search:n.toString()}))}}),[o,i])]}function p(e){var n,t,r,i,s=e.defaultValue,l=e.queryString,c=void 0!==l&&l,u=e.groupId,p=h(e),v=(0,a.useState)((function(){return function(e){var n,t=e.defaultValue,a=e.tabValues;if(0===a.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!f({value:t,tabValues:a}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+a.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var r=null!=(n=a.find((function(e){return e.default})))?n:a[0];if(!r)throw new Error("Unexpected error: 0 tabValues");return r.value}({defaultValue:s,tabValues:p})})),g=v[0],x=v[1],b=m({queryString:c,groupId:u}),j=b[0],T=b[1],N=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:u}.groupId),t=(0,d.Nk)(n),r=t[0],i=t[1],[r,(0,a.useCallback)((function(e){n&&i.set(e)}),[n,i])]),k=N[0],y=N[1],w=function(){var e=null!=j?j:k;return f({value:e,tabValues:p})?e:null}();return(0,o.Z)((function(){w&&x(w)}),[w]),{selectedValue:g,selectValue:(0,a.useCallback)((function(e){if(!f({value:e,tabValues:p}))throw new Error("Can't select invalid tab value="+e);x(e),T(e),y(e)}),[T,y,p]),tabValues:p}}var v=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var x=t(85893);function b(e){var n=e.className,t=e.block,a=e.selectedValue,s=e.selectValue,o=e.tabValues,l=[],c=(0,i.o5)().blockElementScrollPositionUntilNextRender,d=function(e){var n=e.currentTarget,t=l.indexOf(n),r=o[t].value;r!==a&&(c(n),s(r))},u=function(e){var n,t=null;switch(e.key){case"Enter":d(e);break;case"ArrowRight":var a,r=l.indexOf(e.currentTarget)+1;t=null!=(a=l[r])?a:l[0];break;case"ArrowLeft":var i,s=l.indexOf(e.currentTarget)-1;t=null!=(i=l[s])?i:l[l.length-1]}null==(n=t)||n.focus()};return(0,x.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,r.Z)("tabs",{"tabs--block":t},n),children:o.map((function(e){var n=e.value,t=e.label,i=e.attributes;return(0,x.jsx)("li",Object.assign({role:"tab",tabIndex:a===n?0:-1,"aria-selected":a===n,ref:function(e){return l.push(e)},onKeyDown:u,onClick:d},i,{className:(0,r.Z)("tabs__item",g.tabItem,null==i?void 0:i.className,{"tabs__item--active":a===n}),children:null!=t?t:n}),n)}))})}function j(e){var n=e.lazy,t=e.children,r=e.selectedValue,i=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var s=i.find((function(e){return e.props.value===r}));return s?(0,a.cloneElement)(s,{className:"margin-top--md"}):null}return(0,x.jsx)("div",{className:"margin-top--md",children:i.map((function(e,n){return(0,a.cloneElement)(e,{key:n,hidden:e.props.value!==r})}))})}function T(e){var n=p(e);return(0,x.jsxs)("div",{className:(0,r.Z)("tabs-container",g.tabList),children:[(0,x.jsx)(b,Object.assign({},e,n)),(0,x.jsx)(j,Object.assign({},e,n))]})}function N(e){var n=(0,v.Z)();return(0,x.jsx)(T,Object.assign({},e,{children:u(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>s});var a=t(67294);const r={},i=a.createContext(r);function s(e){const n=a.useContext(i);return a.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(r):e.components||r:s(e.components),a.createElement(i.Provider,{value:n},e.children)}}}]);