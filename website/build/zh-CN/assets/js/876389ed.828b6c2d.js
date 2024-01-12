"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[4313],{13394:(e,n,o)=>{o.r(n),o.d(n,{assets:()=>d,contentTitle:()=>l,default:()=>h,frontMatter:()=>r,metadata:()=>i,toc:()=>c});var t=o(85893),s=o(11151);const r={id:"bos-loader",title:"BOS Loader"},l="BOS Loader",i={id:"bos/dev/bos-loader",title:"BOS Loader",description:"In this article you'll learn how to develop, test, and deploy BOS components using CLI tools. You can use this workflow to tap into the colaboration, pull-request, and other GitHub benefits while still deploying components to the BOS.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/bos/dev/bos-loader.md",sourceDirName:"bos/dev",slug:"/bos/dev/bos-loader",permalink:"/zh-CN/bos/dev/bos-loader",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/bos/dev/bos-loader.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"bos-loader",title:"BOS Loader"},sidebar:"integrate",previous:{title:"Gateways",permalink:"/zh-CN/bos/tutorial/bos-gateway"},next:{title:"Smart Contract Interaction",permalink:"/zh-CN/bos/tutorial/interaction"}},d={},c=[{value:"Development flow",id:"development-flow",level:2},{value:"Component deployment",id:"component-deployment",level:2}];function a(e){const n={a:"a",admonition:"admonition",code:"code",em:"em",h1:"h1",h2:"h2",li:"li",mdxAdmonitionTitle:"mdxAdmonitionTitle",ol:"ol",p:"p",pre:"pre",ul:"ul",...(0,s.a)(),...e.components};return(0,t.jsxs)(t.Fragment,{children:[(0,t.jsx)(n.h1,{id:"bos-loader",children:"BOS Loader"}),"\n",(0,t.jsx)(n.p,{children:"In this article you'll learn how to develop, test, and deploy BOS components using CLI tools. You can use this workflow to tap into the colaboration, pull-request, and other GitHub benefits while still deploying components to the BOS."}),"\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.a,{href:"https://github.com/near/bos-loader",children:"BOS Component Loader"})," serves a local directory of component files as a JSON payload properly formatted to be plugged into a BOS ",(0,t.jsx)(n.code,{children:"redirectMap"}),". When paired with a viewer configured to call out to this loader, it enables local component development."]}),"\n",(0,t.jsx)(n.h2,{id:"development-flow",children:"Development flow"}),"\n",(0,t.jsxs)(n.ol,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:[(0,t.jsx)(n.em,{children:"(Optional)"})," Download and install ",(0,t.jsxs)(n.a,{href:"https://bos.cli.rs",children:[(0,t.jsx)(n.code,{children:"bos"})," CLI"]}),"."]}),"\n",(0,t.jsx)(n.admonition,{type:"info",children:(0,t.jsxs)(n.mdxAdmonitionTitle,{children:["You need ",(0,t.jsx)(n.code,{children:"bos"})," CLI if you have component code on the BOS already that you want to use or if you want to manage component deploys locally instead of the GitHub actions CI/CD."]})}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:":::"}),"\n",(0,t.jsxs)(n.ol,{start:"2",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["To get component code saved on the BOS, use ",(0,t.jsx)(n.code,{children:"bos"})," to download the source code. Otherwise, create a ",(0,t.jsx)(n.code,{children:"src"})," folder."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Create a component within that src folder like ",(0,t.jsx)(n.code,{children:"src/<component name>.jsx"}),"."]}),"\n",(0,t.jsxs)(n.admonition,{type:"tip",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:["It's common practice to use ",(0,t.jsx)(n.code,{children:"."})," delimited component names for namespacing. You can handle this with folders for better files organization."]}),(0,t.jsxs)(n.p,{children:["For example, ",(0,t.jsx)(n.code,{children:"AppName.Component"})," \u2192 ",(0,t.jsx)(n.code,{children:"AppName/Component.jsx"}),"."]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:":::"}),"\n",(0,t.jsxs)(n.ol,{start:"5",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Download and install ",(0,t.jsx)(n.a,{href:"https://github.com/near/bos-loader/releases",children:"BOS Component Loader"})," (",(0,t.jsx)(n.code,{children:"bos-loader"}),")."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"bos-loader <youraccount.near> --path src"})," (or run from ",(0,t.jsx)(n.code,{children:"src"})," folder)"]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.a,{href:"https://near.org/flags",children:"https://near.org/flags"}),", and set the loader URL to ",(0,t.jsx)(n.code,{children:"http://127.0.0.1:3030"}),"."]}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Open ",(0,t.jsx)(n.code,{children:"https://near.org/<youraccount.near>/widget/<component name>"})," (case sensitive)"]}),"\n",(0,t.jsxs)(n.admonition,{type:"info",children:[(0,t.jsxs)(n.mdxAdmonitionTitle,{children:["If you're testing on ",(0,t.jsx)(n.code,{children:"testnet"}),", use your testnet account and open ",(0,t.jsx)(n.a,{href:"https://test.near.org",children:"https://test.near.org"})," instead."]}),(0,t.jsxs)(n.p,{children:["Run ",(0,t.jsx)(n.code,{children:"bos-loader <youraccount.testnet> --path src"})," locally, set loader URL in ",(0,t.jsx)(n.a,{href:"https://test.near.org/flags",children:"https://test.near.org/flags"})," and open ",(0,t.jsx)(n.code,{children:"https://test.near.org/<youraccount.testnet>/widget/<component name>"})," to view your component locally."]})]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:":::"}),"\n",(0,t.jsx)(n.admonition,{type:"tip",children:(0,t.jsx)(n.p,{children:"You can work on multiple components at once by embedding them in a wrapper component."})}),"\n",(0,t.jsxs)(n.ol,{start:"9",children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsx)(n.p,{children:"Make changes to the component's code."}),"\n",(0,t.jsx)(n.admonition,{type:"info"}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You must refresh the browser's web page to see the changes.\n:::"}),"\n",(0,t.jsxs)(n.ol,{start:"10",children:["\n",(0,t.jsxs)(n.li,{children:["When you're done, use the ",(0,t.jsx)("kbd",{children:"X"})," on the banner to stop loading locally."]}),"\n"]}),"\n",(0,t.jsx)(n.h2,{id:"component-deployment",children:"Component deployment"}),"\n",(0,t.jsx)(n.p,{children:"At this point, your new component is ready to be deployed. To deploy, you can use either of the following two paths:"}),"\n",(0,t.jsxs)(n.ul,{children:["\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Use ",(0,t.jsx)(n.code,{children:"bos"})," CLI to deploy from command line:"]}),"\n",(0,t.jsx)(n.pre,{children:(0,t.jsx)(n.code,{children:"bos deploy\n"})}),"\n"]}),"\n",(0,t.jsxs)(n.li,{children:["\n",(0,t.jsxs)(n.p,{children:["Set up a ",(0,t.jsx)(n.a,{href:"https://github.com/FroVolod/bos-cli-rs/blob/master/README.md#reusable-workflow",children:"GitHub actions"})," deployment workflow. Check ",(0,t.jsx)(n.a,{href:"https://github.com/FroVolod/bos-cli-rs/blob/master/README.md#github-actions",children:"this document"})," for instructions."]}),"\n"]}),"\n"]}),"\n",(0,t.jsx)(n.p,{children:"You should now be able to see your component in discovery. Happy Hacking!"})]})}function h(e={}){const{wrapper:n}={...(0,s.a)(),...e.components};return n?(0,t.jsx)(n,{...e,children:(0,t.jsx)(a,{...e})}):a(e)}},11151:(e,n,o)=>{o.d(n,{Z:()=>i,a:()=>l});var t=o(67294);const s={},r=t.createContext(s);function l(e){const n=t.useContext(r);return t.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function i(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(s):e.components||s:l(e.components),t.createElement(r.Provider,{value:n},e.children)}}}]);