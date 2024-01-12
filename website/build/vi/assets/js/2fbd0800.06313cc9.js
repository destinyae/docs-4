"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[9856],{29924:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>r,default:()=>h,frontMatter:()=>a,metadata:()=>o,toc:()=>c});var s=t(85893),i=t(11151);const a={id:"fastauth-sdk",title:"FastAuth SDK",sidebar_label:"FastAuth SDK"},r=void 0,o={id:"tools/fastauth-sdk",title:"FastAuth SDK",description:"Introduction",source:"@site/i18n/vi/docusaurus-plugin-content-docs/current/4.tools/fastauth-sdk.md",sourceDirName:"4.tools",slug:"/tools/fastauth-sdk",permalink:"/vi/tools/fastauth-sdk",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/4.tools/fastauth-sdk.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"11 thg 1, 2024",frontMatter:{id:"fastauth-sdk",title:"FastAuth SDK",sidebar_label:"FastAuth SDK"},sidebar:"tools",previous:{title:"Wallet Selector",permalink:"/vi/tools/wallet-selector"},next:{title:"Explorers",permalink:"/vi/tools/explorer"}},l={},c=[{value:"Introduction",id:"introduction",level:2},{value:"System components",id:"system-components",level:3},{value:"Getting started",id:"getting-started",level:2},{value:"Gaining access to the Beta",id:"gaining-access-to-the-beta",level:3},{value:"Setting up Firebase",id:"setting-up-firebase",level:3},{value:"Create a project",id:"create-a-project",level:4},{value:"Set up passwordless authentication",id:"set-up-passwordless-authentication",level:4},{value:"Add user device information to Firestore",id:"add-user-device-information-to-firestore",level:4},{value:"Get the application credentials",id:"get-the-application-credentials",level:4},{value:"Setting up your relayer",id:"setting-up-your-relayer",level:3},{value:"Setting up a NEAR account",id:"setting-up-a-near-account",level:4},{value:"Adding multiple keys (Recommended)",id:"adding-multiple-keys-recommended",level:4},{value:"Deploying the relayer",id:"deploying-the-relayer",level:4},{value:"Setting up the frontend",id:"setting-up-the-frontend",level:3},{value:"Deploying the signer app",id:"deploying-the-signer-app",level:4},{value:"Authorizing a domain on Firebase",id:"authorizing-a-domain-on-firebase",level:4},{value:"Deploying your application frontend",id:"deploying-your-application-frontend",level:4},{value:"Getting added to the MPC recovery service",id:"getting-added-to-the-mpc-recovery-service",level:3}];function d(e){const n={a:"a",admonition:"admonition",code:"code",h2:"h2",h3:"h3",h4:"h4",li:"li",p:"p",pre:"pre",strong:"strong",ul:"ul",...(0,i.a)(),...e.components};return(0,s.jsxs)(s.Fragment,{children:[(0,s.jsx)(n.h2,{id:"introduction",children:"Introduction"}),"\n",(0,s.jsx)(n.p,{children:"FastAuth is a key management system that allows dApp developers to offer an easy and familiar onboarding flow to new users. Users can sign up for an account using just their email address, and they can easily recover access to that account using the same email they used during sign up. Furthermore, dApp developers can also choose to subsidize gas for a certain smart contract, so that users can start interacting with their dApp immediately, without having to fund their account."}),"\n",(0,s.jsx)(n.h3,{id:"system-components",children:"System components"}),"\n",(0,s.jsx)(n.p,{children:"The FastAuth system is comprised of 3 main components:"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"FastAuth Signer App"}),": An app that can be embedded on your website to allow FastAuth users to sign transactions."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"MPC Recovery Service"}),": service used to create and restore user accounts, as well as signing transactions on behalf of the user. This service uses the OIDC protocol and leverages multiple MPC nodes, each of them containing a secret key. Each action must be signed by all nodes, and those signatures are then combined into a single signature on the leader node."]}),"\n",(0,s.jsxs)(n.li,{children:[(0,s.jsx)(n.strong,{children:"Transaction Relayer"}),": an http server that relays transactions to the network via RPC on behalf of new users who haven't yet acquired NEAR as part of the onboarding process."]}),"\n"]}),"\n",(0,s.jsx)(n.h2,{id:"getting-started",children:"Getting started"}),"\n",(0,s.jsx)(n.h3,{id:"gaining-access-to-the-beta",children:"Gaining access to the Beta"}),"\n",(0,s.jsx)(n.admonition,{type:"tip",children:(0,s.jsxs)(n.p,{children:["FastAuth is currently on a closed early-access Beta. You can apply to be part of the Beta through ",(0,s.jsx)(n.a,{href:"https://forms.gle/pyuW3fXPZwPffYju6",children:"this form"}),"."]})}),"\n",(0,s.jsx)(n.p,{children:"During the Beta, user accounts created via FastAuth will be constrained to your own dApp, and won't be interoperable with other domains. In a future FastAuth release, you'll be given the option to make your user accounts interoperable across the ecosystem."}),"\n",(0,s.jsx)(n.h3,{id:"setting-up-firebase",children:"Setting up Firebase"}),"\n",(0,s.jsx)(n.h4,{id:"create-a-project",children:"Create a project"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsxs)(n.li,{children:["Go to ",(0,s.jsx)(n.a,{href:"https://firebase.com",children:"Firebase"})]}),"\n",(0,s.jsx)(n.li,{children:"Create or sign in to an account"}),"\n",(0,s.jsx)(n.li,{children:'Go to "Get started", then "Add project"'}),"\n",(0,s.jsxs)(n.li,{children:["Call this project ",(0,s.jsx)(n.code,{children:"my-fastauth-issuer"})]}),"\n",(0,s.jsx)(n.li,{children:"Disable Google Analytics (recommended)"}),"\n",(0,s.jsx)(n.li,{children:'Click on "Create project"'}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"set-up-passwordless-authentication",children:"Set up passwordless authentication"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Go to "Authentication", then "Get started", and "Add new provider"'}),"\n",(0,s.jsx)(n.li,{children:'Enable "Email/Password" and "Email link (passwordless sign-in)"'}),"\n",(0,s.jsx)(n.li,{children:'Hit "Save"'}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"add-user-device-information-to-firestore",children:"Add user device information to Firestore"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Return to "Project Overview"'}),"\n",(0,s.jsx)(n.li,{children:'Go to "Cloud Firestore", then "Create database"'}),"\n",(0,s.jsx)(n.li,{children:'Select "Start in production mode", then "Next"'}),"\n",(0,s.jsx)(n.li,{children:'Select your preferred location, then "Enable"'}),"\n",(0,s.jsx)(n.li,{children:'Go to the "Rules" tab'}),"\n",(0,s.jsx)(n.li,{children:"Change the rules to the following:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{children:"rules_version = '2';\n\nservice cloud.firestore {\n  match /databases/{database}/documents {\n    match /users/{userId}/{document=**} {\n      allow create, read, update, delete: if request.auth != null && request.auth.uid == userId;\n    }\n  }\n}\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Hit "Publish"'}),"\n",(0,s.jsx)(n.li,{children:'Go to the "Data" tab'}),"\n",(0,s.jsx)(n.li,{children:'Click on "Start collection"'}),"\n",(0,s.jsxs)(n.li,{children:["Set the Collection ID to ",(0,s.jsx)(n.code,{children:"users"}),' and hit "Next"']}),"\n",(0,s.jsxs)(n.li,{children:["Add a Document ID of ",(0,s.jsx)(n.code,{children:"root"}),' and press "Save"']}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"get-the-application-credentials",children:"Get the application credentials"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Press the gear button next to "Project Overview", and go to "Project settings"'}),"\n",(0,s.jsxs)(n.li,{children:['Under "Your apps", click on the ',(0,s.jsx)(n.code,{children:"</>"})," button"]}),"\n",(0,s.jsxs)(n.li,{children:["Set the app nickname as ",(0,s.jsx)(n.code,{children:"issuer-gcp"}),' and hit "Register app"']}),"\n",(0,s.jsx)(n.li,{children:"You should see the code needed for initilization and authentication of Firestore, such as:"}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'// Import the functions you need from the SDKs you need\nimport { initializeApp } from "firebase/app";\n\n// TODO: Add SDKs for Firebase products that you want to use\n// https://firebase.google.com/docs/web/setup#available-libraries\n// Your web app\'s Firebase configuration\n\nconst firebaseConfig = {\n  apiKey: "apikey",\n  authDomain: "my-fastauth-issuer-123.firebaseapp.com",\n  projectId: "my-fastauth-issuer-123",\n  storageBucket: "my-fastauth-issuer-123.appspot.com",\n  messagingSenderId: "12345678910",\n  appId: "1:12345678910:web:12345678910"\n};\n\n// Initialize Firebase\nconst app = initializeApp(firebaseConfig);\n'})}),"\n",(0,s.jsx)(n.h3,{id:"setting-up-your-relayer",children:"Setting up your relayer"}),"\n",(0,s.jsx)(n.h4,{id:"setting-up-a-near-account",children:"Setting up a NEAR account"}),"\n",(0,s.jsxs)(n.p,{children:["First ensure that ",(0,s.jsx)(n.code,{children:"cargo"})," is installed on your local machine. Try ",(0,s.jsx)(n.a,{href:"https://rustup.rs/",children:"rustup"})," if you haven't already installed it."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"cargo install near-cli-rs\nNEAR_ENV=mainnet\nnear account create-account fund-later use-auto-generation save-to-folder ~/.near-credentials/implicit\n"})}),"\n",(0,s.jsx)(n.p,{children:"This should output something like:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:'The file "~/.near-credentials/implicit/275f14eecb0afcb1f46f2b71b7933afd2de6d4ae8b08e9b11fc538a5a81406b7.json" was saved successfully\n'})}),"\n",(0,s.jsxs)(n.p,{children:["In this example. ",(0,s.jsx)(n.code,{children:"275f14eecb0afcb1f46f2b71b7933afd2de6d4ae8b08e9b11fc538a5a81406b7"})," is your funded account. We'll refer to this as ",(0,s.jsx)(n.code,{children:"$FUNDED_ACCOUNT"})," from now on."]}),"\n",(0,s.jsx)(n.p,{children:"Send some NEAR to this address."}),"\n",(0,s.jsx)(n.h4,{id:"adding-multiple-keys-recommended",children:"Adding multiple keys (Recommended)"}),"\n",(0,s.jsxs)(n.p,{children:["This account has been created with one key. However, due to ",(0,s.jsx)(n.a,{href:"https://near.zulipchat.com/#narrow/stream/295302-general/topic/.E2.9C.94.20The.20trouble.20with.20nonces/near/389649443",children:"this"}),", you should create an account with ",(0,s.jsx)(n.code,{children:"N"})," keys where ",(0,s.jsx)(n.code,{children:"N"})," is the number of requests you expect to get in a second, at peak load."]}),"\n",(0,s.jsx)(n.p,{children:"To generate an additional key, run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"near account add-key $FUNDED_ACCOUNT grant-full-access autogenerate-new-keypair save-to-keychain network-config mainnet sign-with-access-key-file ~/.near-credentials/implicit/$FUNDED_ACCOUNT.json send\n"})}),"\n",(0,s.jsx)(n.h4,{id:"deploying-the-relayer",children:"Deploying the relayer"}),"\n",(0,s.jsx)(n.p,{children:"Run the following command:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"git clone https://github.com/near/pagoda-relayer-rs\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Go to ",(0,s.jsx)(n.code,{children:"config.toml"})," and change:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-toml",children:'network = "mainnet"\nnum_keys = 3  # correlates to the number of keys in `keys_filenames`. Will be optional in the future.\nrelayer_account_id = "$FUNDED_ACCOUNT"\nkeys_filenames = [\n    # The original account\n    "~/.near-credentials/mainnet/$FUNDED_ACCOUNT.json",\n\n    # Other keys you\'ve optionally created. This will allow rotating through each key as to avoid nonce races.\n    "~/.near-credentials/mainnet/$FUNDED_ACCOUNT/ed25519_4ryLkp4AuzBD8yuyRJKb91hvHZ4zgqouWcJzu1gNEvLv.json",\n    "~/.near-credentials/mainnet/$FUNDED_ACCOUNT/ed25519_7K3jF8Ft5dKFEPYRH1T4mncvsZGgSoGKsvsnnKEmqubT.json"\n]\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Optionally, if you need to generate additional access keys for the ",(0,s.jsx)(n.code,{children:"$FUNDED_ACCOUNT"}),", run the following command N times. Note that this will create keys for implicit accounts, but we'll then tie them to ",(0,s.jsx)(n.code,{children:"$FUNDED_ACCOUNT"}),"."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"near generate-key\nnear add-key $FUNDED_ACCOUNT exampleImplicitPublicKeyCxg2wgFYrdLTEkMu6j5D6aEZqTb3kXbmJygS48ZKbo1S\n"})}),"\n",(0,s.jsx)(n.p,{children:"Then run:"}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-bash",children:"docker compose up\n"})}),"\n",(0,s.jsxs)(n.p,{children:["You should do this on a VM server of your choice. We will refer to the URL of this VM as ",(0,s.jsx)(n.code,{children:"$RELAYER_URL"})," from now on."]}),"\n",(0,s.jsx)(n.h3,{id:"setting-up-the-frontend",children:"Setting up the frontend"}),"\n",(0,s.jsx)(n.h4,{id:"deploying-the-signer-app",children:"Deploying the signer app"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Go to GCP\'s Cloud Run console and press "Create Service".'}),"\n",(0,s.jsxs)(n.li,{children:['In the field "Container image URL", paste ',(0,s.jsx)(n.code,{children:"gcr.io/fa-signer/signer-app:version2"}),"."]}),"\n",(0,s.jsx)(n.li,{children:'Go to the "Container, Networking, Security" fold out and then "Environment Variables"'}),"\n",(0,s.jsx)(n.li,{children:'Click on "Add Variable"'}),"\n",(0,s.jsxs)(n.li,{children:["Set the following environment variables from the ",(0,s.jsx)(n.code,{children:"firebaseConfig"})," you generated earlier."]}),"\n"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"NETWORK_ID:                           'mainnet',\nRELAYER_URL:                          '$RELAYER_URL',\nFIREBASE_API_KEY:                     'apikey',\nFIREBASE_AUTH_DOMAIN:                 'my-fastauth-issuer-123.firebaseapp.com',\nFIREBASE_PROJECT_ID:                  'my-fastauth-issuer-123',\nFIREBASE_STORAGE_BUCKET:              'my-fastauth-issuer-123.appspot.com',\nFIREBASE_MESSAGING_SENDER_ID:         '12345678910',\nFIREBASE_APP_ID:                      '1:12345678910:web:12345678910',\n"})}),"\n",(0,s.jsxs)(n.p,{children:["Alternatively if you're doing a ",(0,s.jsx)(n.code,{children:"testnet"})," deployment, do:"]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-yaml",children:"NETWORK_ID:                           'testnet',\nRELAYER_URL_TESTNET:                  '$RELAYER_URL',\nFIREBASE_API_KEY_TESTNET:             'apikey',\nFIREBASE_AUTH_DOMAIN_TESTNET:         'my-fastauth-issuer-123.firebaseapp.com',\nFIREBASE_PROJECT_ID_TESTNET:          'my-fastauth-issuer-123',\nFIREBASE_STORAGE_BUCKET_TESTNET:      'my-fastauth-issuer-123.appspot.com',\nFIREBASE_MESSAGING_SENDER_ID_TESTNET: '12345678910',\nFIREBASE_APP_ID_TESTNET:              '1:12345678910:web:12345678910',\n"})}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:'Click on "Create Application"'}),"\n",(0,s.jsxs)(n.li,{children:["Then, inside your app's control panel copy the app's URL, such as ",(0,s.jsx)(n.code,{children:"https://signer-app-123456-ab.a.run.app"}),". We will refer to the deploy URL as ",(0,s.jsx)(n.code,{children:"$WALLET_URL"}),"."]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"authorizing-a-domain-on-firebase",children:"Authorizing a domain on Firebase"}),"\n",(0,s.jsxs)(n.ul,{children:["\n",(0,s.jsx)(n.li,{children:"Go back to the Firebase Console"}),"\n",(0,s.jsx)(n.li,{children:'Go to "Authentication" in the sidebar, and then the "Settings" tab'}),"\n",(0,s.jsx)(n.li,{children:'Click on the "Authorized domains" menu item'}),"\n",(0,s.jsxs)(n.li,{children:["Add ",(0,s.jsx)(n.code,{children:"$WALLET_URL"})," to the list"]}),"\n"]}),"\n",(0,s.jsx)(n.h4,{id:"deploying-your-application-frontend",children:"Deploying your application frontend"}),"\n",(0,s.jsxs)(n.p,{children:["First, install the ",(0,s.jsx)(n.code,{children:"@near-js/iframe-rpc"})," package from the NPM registry."]}),"\n",(0,s.jsx)(n.pre,{children:(0,s.jsx)(n.code,{className:"language-js",children:'import { setupFastAuthWallet } from \'near-fastauth-wallet\';\nimport { setupWalletSelector } from \'@near-wallet-selector/core\';\n\n// Initialize wallet selector\nconst selector = setupWalletSelector({\n          network: networkId,\n          modules: [\n            setupFastAuthWallet({\n              relayerUrl: "$RELAYER_URL",\n              walletUrl: "$WALLET_URL"\n            })\n          ]\n      })\n\n// EITHER setup onClick function for login\nconst onCLick = () => selector.then((selector: any) => selector.wallet(\'fast-auth-wallet\'))\n      .then((fastAuthWallet: any) =>\n        fastAuthWallet.signIn({\n          contractId: "$CONTRACT_ID",\n          email: "<USERS_EMAIL_ADDRESS>",\n          isRecovery: true,\n        }),);\n\n// OR setup onClick function for login\nconst onCLick = () => selector.then((selector: any) => selector.wallet(\'fast-auth-wallet\'))\n      .then((fastAuthWallet: any) =>\n        fastAuthWallet.signIn({\n          contractId: "$CONTRACT_ID",\n          email: "<USERS_EMAIL_ADDRESS>",\n          accountId: "<USERS_DESIRED_NEAR_ADDRESS>.near"\n          isRecovery: false,\n        }),);\n'})}),"\n",(0,s.jsxs)(n.p,{children:["Wehenever the user tries to login, call ",(0,s.jsx)(n.code,{children:"onClick"}),"."]}),"\n",(0,s.jsx)(n.h3,{id:"getting-added-to-the-mpc-recovery-service",children:"Getting added to the MPC recovery service"}),"\n",(0,s.jsxs)(n.p,{children:["As a last step, we'll need to add your app to our MPC recovery service. To get added, please send us your ",(0,s.jsx)(n.code,{children:"$FIREBASE_PROJECT_ID"}),", ",(0,s.jsx)(n.code,{children:"$RELAYER_API_KEY"})," and ",(0,s.jsx)(n.code,{children:"$RELAYER_URL"})," through this ",(0,s.jsx)(n.a,{href:"https://forms.gle/cDfXj2D5bm9sohBx6",children:"form"}),"."]})]})}function h(e={}){const{wrapper:n}={...(0,i.a)(),...e.components};return n?(0,s.jsx)(n,{...e,children:(0,s.jsx)(d,{...e})}):d(e)}},11151:(e,n,t)=>{t.d(n,{Z:()=>o,a:()=>r});var s=t(67294);const i={},a=s.createContext(i);function r(e){const n=s.useContext(a);return s.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function o(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(i):e.components||i:r(e.components),s.createElement(a.Provider,{value:n},e.children)}}}]);