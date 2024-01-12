"use strict";(self.webpackChunk=self.webpackChunk||[]).push([[2366],{87052:(e,n,t)=>{t.r(n),t.d(n,{assets:()=>l,contentTitle:()=>i,default:()=>d,frontMatter:()=>o,metadata:()=>s,toc:()=>c});var r=t(85893),a=t(11151);t(74866),t(85162);const o={id:"smart-contract",title:"Smart Contract",hide_table_of_contents:!1},i=void 0,s={id:"primitives/dao/interacting/smart-contract",title:"Smart Contract",description:"This section will explain how a smart contract can create DAO or interact with them.",source:"@site/i18n/zh-CN/docusaurus-plugin-content-docs/current/7.primitives/dao/interacting/smart-contract.md",sourceDirName:"7.primitives/dao/interacting",slug:"/primitives/dao/interacting/smart-contract",permalink:"/zh-CN/primitives/dao/interacting/smart-contract",draft:!1,unlisted:!1,editUrl:"https://github.com/near/docs/edit/master/website/../docs/7.primitives/dao/interacting/smart-contract.md",tags:[],version:"current",lastUpdatedBy:"Github Actions",lastUpdatedAt:1704996595,formattedLastUpdatedAt:"2024\u5e741\u670811\u65e5",frontMatter:{id:"smart-contract",title:"Smart Contract",hide_table_of_contents:!1},sidebar:"primitives",previous:{title:"Web Application",permalink:"/zh-CN/primitives/dao/interacting/web-app"},next:{title:"NEAR CLI",permalink:"/zh-CN/primitives/dao/interacting/near-cli"}},l={},c=[{value:"Base Contract",id:"base-contract",level:3},{value:"Create DAO",id:"create-dao",level:2},{value:"Create proposal",id:"create-proposal",level:2},{value:"Vote for proposal",id:"vote-for-proposal",level:2}];function u(e){const n={code:"code",h2:"h2",h3:"h3",hr:"hr",p:"p",pre:"pre",...(0,a.a)(),...e.components};return(0,r.jsxs)(r.Fragment,{children:[(0,r.jsx)(n.p,{children:"This section will explain how a smart contract can create DAO or interact with them."}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h3,{id:"base-contract",children:"Base Contract"}),"\n",(0,r.jsx)(n.p,{children:"The examples assume that the contract is defined as follows:"}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'use std::collections::{HashMap, HashSet};\nuse near_sdk::ext_contract;\nuse near_sdk::borsh::{self, BorshDeserialize, BorshSerialize};\nuse near_sdk::json_types::{Base64VecU8, U128, U64, Base58CryptoHash};\nuse near_sdk::serde::{Deserialize, Serialize};\nuse near_sdk::{env, near_bindgen, log, Gas, AccountId, Promise, PromiseError};\n\nconst DAO_FACTORY_CONTRACT: &str = "sputnikv2.testnet";\nconst DAO_CONTRACT: &str = "primitives.sputnikv2.testnet";\n\nconst TGAS: u64 = 1_000_000_000_000;\n\n// Define the contract structure\n#[near_bindgen]\n#[derive(BorshDeserialize, BorshSerialize)]\npub struct Contract {\n  dao_factory_contract: AccountId,\n  dao_contract: AccountId\n}\n\nimpl Default for Contract {\n    // The default trait with which to initialize the contract\n    fn default() -> Self {\n        Self {\n          dao_factory_contract: DAO_FACTORY_CONTRACT.parse().unwrap(),\n          dao_contract: DAO_CONTRACT.parse().unwrap()\n        }\n    }\n}\n\n// Implement the contract structure\n#[near_bindgen]\nimpl Contract {}\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"create-dao",children:"Create DAO"}),"\n",(0,r.jsx)(n.p,{children:"This snippet will enable your contract to create a DAO."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'// Validator interface, for cross-contract calls\n#[ext_contract(ext_dao_factory_contract)]\ntrait ExternalDaoFactoryContract {\n  fn create(&mut self, name: AccountId, args: Base64VecU8) -> Promise;\n}\n\n// Implement the contract structure\n#[near_bindgen]\nimpl Contract {\n  #[payable]\n  pub fn create_dao(&mut self, name: AccountId, args: Base64VecU8) -> Promise {\n    let promise = ext_dao_factory_contract::ext(self.dao_factory_contract.clone())\n      .with_attached_deposit(env::attached_deposit())\n      .with_static_gas(Gas(30*TGAS))\n      .create(name, args);\n\n    return promise.then( // Create a promise to callback query_greeting_callback\n      Self::ext(env::current_account_id())\n      .with_static_gas(Gas(50*TGAS))\n      .external_common_callback()\n    )\n  }\n\n  #[private] // Public - but only callable by env::current_account_id()\n  pub fn external_common_callback(&self, #[callback_result] call_result: Result<(), PromiseError>) {\n    // Check if the promise succeeded\n    if call_result.is_err() {\n      log!("There was an error contacting external contract")\n    }\n  }\n}\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"create-proposal",children:"Create proposal"}),"\n",(0,r.jsx)(n.p,{children:"This snippet assumes that the contract has permissions to create DAO proposals and want to do it."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'// Account ID that represents a token in near-sdk v3\n// Need to keep it around for backward compatibility\npub type OldAccountId = String;\n\n// How the voting policy votes get weighted.\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize, Clone, PartialEq)]\n#[cfg_attr(not(target_arch = "wasm32"), derive(Debug))]\n#[serde(crate = "near_sdk::serde")]\npub enum WeightKind {\n    // Using token amounts and total delegated at the moment.\n    TokenWeight,\n    // Weight of the group role. Roles that don\'t have scoped group are not supported.\n    RoleWeight,\n}\n\n// Direct weight or ratio to total weight, used for the voting policy\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize, Clone)]\n#[cfg_attr(not(target_arch = "wasm32"), derive(Debug, PartialEq))]\n#[serde(crate = "near_sdk::serde")]\n#[serde(untagged)]\npub enum WeightOrRatio {\n    Weight(U128),\n    Ratio(u64, u64),\n}\n\n// Defines configuration of the vote\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize, Clone)]\n#[cfg_attr(not(target_arch = "wasm32"), derive(Debug, PartialEq))]\n#[serde(crate = "near_sdk::serde")]\npub struct VotePolicy {\n    // Kind of weight to use for votes.\n    pub weight_kind: WeightKind,\n    // Minimum number required for vote to finalize.\n    // If weight kind is TokenWeight - this is minimum number of tokens required.\n    //     This allows to avoid situation where the number of staked tokens from total supply is too small.\n    // If RoleWeight - this is minimum number of votes.\n    //     This allows to avoid situation where the role is got too small but policy kept at 1/2, for example.\n    pub quorum: U128,\n    // How many votes to pass this vote.\n    pub threshold: WeightOrRatio,\n}\n\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize, Clone)]\n#[cfg_attr(not(target_arch = "wasm32"), derive(Debug, PartialEq))]\n#[serde(crate = "near_sdk::serde")]\npub enum RoleKind {\n    // Matches everyone, who is not matched by other roles.\n    Everyone,\n    // Member greater or equal than given balance. Can use `1` as non-zero balance.\n    Member(U128),\n    // Set of accounts.\n    Group(HashSet<AccountId>),\n}\n\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize, Clone)]\n#[cfg_attr(not(target_arch = "wasm32"), derive(Debug, PartialEq))]\n#[serde(crate = "near_sdk::serde")]\npub struct RolePermission {\n    // Name of the role to display to the user.\n    pub name: String,\n    // Kind of the role: defines which users this permissions apply.\n    pub kind: RoleKind,\n    // Set of actions on which proposals that this role is allowed to execute.\n    // <proposal_kind>:<action>\n    pub permissions: HashSet<String>,\n    // For each proposal kind, defines voting policy.\n    pub vote_policy: HashMap<String, VotePolicy>,\n}\n\n// Defines voting / decision making policy of this DAO\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize, Clone)]\n#[cfg_attr(not(target_arch = "wasm32"), derive(Debug, PartialEq))]\n#[serde(crate = "near_sdk::serde")]\npub struct Policy {\n    // List of roles and permissions for them in the current policy.\n    pub roles: Vec<RolePermission>,\n    // Default vote policy. Used when given proposal kind doesn\'t have special policy.\n    pub default_vote_policy: VotePolicy,\n    // Proposal bond.\n    pub proposal_bond: U128,\n    // Expiration period for proposals.\n    pub proposal_period: U64,\n    // Bond for claiming a bounty.\n    pub bounty_bond: U128,\n    // Period in which giving up on bounty is not punished.\n    pub bounty_forgiveness_period: U64,\n}\n\n// Versioned policy\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize, Clone)]\n#[cfg_attr(not(target_arch = "wasm32"), derive(Debug, PartialEq))]\n#[serde(crate = "near_sdk::serde", untagged)]\npub enum VersionedPolicy {\n    // Default policy with given accounts as council.\n    Default(Vec<AccountId>),\n    Current(Policy),\n}\n\n// Function call arguments\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize)]\n#[cfg_attr(not(target_arch = "wasm32"), derive(Clone, Debug))]\n#[serde(crate = "near_sdk::serde")]\npub struct ActionCall {\n    method_name: String,\n    args: Base64VecU8,\n    deposit: U128,\n    gas: U64,\n}\n\n// Bounty information.\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize, Clone)]\n#[cfg_attr(not(target_arch = "wasm32"), derive(Debug))]\n#[serde(crate = "near_sdk::serde")]\npub struct Bounty {\n    /// Description of the bounty.\n    pub description: String,\n    /// Token the bounty will be paid out.\n    /// Can be "" for $NEAR or a valid account id.\n    pub token: OldAccountId,\n    /// Amount to be paid out.\n    pub amount: U128,\n    /// How many times this bounty can be done.\n    pub times: u32,\n    /// Max deadline from claim that can be spend on this bounty.\n    pub max_deadline: U64,\n}\n\n// Info about factory that deployed this contract and if auto-update is allowed\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize)]\n#[cfg_attr(not(target_arch = "wasm32"), derive(Clone, Debug))]\n#[serde(crate = "near_sdk::serde")]\npub struct FactoryInfo {\n    pub factory_id: AccountId,\n    pub auto_update: bool,\n}\n\n// Function call arguments\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize)]\n#[cfg_attr(not(target_arch = "wasm32"), derive(Clone, Debug))]\n#[serde(crate = "near_sdk::serde")]\npub struct PolicyParameters {\n    pub proposal_bond: Option<U128>,\n    pub proposal_period: Option<U64>,\n    pub bounty_bond: Option<U128>,\n    pub bounty_forgiveness_period: Option<U64>,\n}\n\n// Votes recorded in the proposal\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize, Clone, Debug)]\n#[serde(crate = "near_sdk::serde")]\npub enum Vote {\n    Approve = 0x0,\n    Reject = 0x1,\n    Remove = 0x2,\n}\n\n// Configuration of the DAO\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize, Clone, Debug)]\n#[serde(crate = "near_sdk::serde")]\npub struct Config {\n    // Name of the DAO.\n    pub name: String,\n    // Purpose of this DAO.\n    pub purpose: String,\n    // Generic metadata. Can be used by specific UI to store additional data.\n    // This is not used by anything in the contract.\n    pub metadata: Base64VecU8,\n}\n\n// Kinds of proposals, doing different action\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize)]\n#[cfg_attr(not(target_arch = "wasm32"), derive(Clone, Debug))]\n#[serde(crate = "near_sdk::serde")]\npub enum ProposalKind {\n    // Change the DAO config.\n    ChangeConfig { config: Config },\n    // Change the full policy.\n    ChangePolicy { policy: VersionedPolicy },\n    // Add member to given role in the policy. This is short cut to updating the whole policy.\n    AddMemberToRole { member_id: AccountId, role: String },\n    // Remove member to given role in the policy. This is short cut to updating the whole policy.\n    RemoveMemberFromRole { member_id: AccountId, role: String },\n    // Calls `receiver_id` with list of method names in a single promise.\n    // Allows this contract to execute any arbitrary set of actions in other contracts.\n    FunctionCall {\n        receiver_id: AccountId,\n        actions: Vec<ActionCall>,\n    },\n    // Upgrade this contract with given hash from blob store.\n    UpgradeSelf { hash: Base58CryptoHash },\n    // Upgrade another contract, by calling method with the code from given hash from blob store.\n    UpgradeRemote {\n        receiver_id: AccountId,\n        method_name: String,\n        hash: Base58CryptoHash,\n    },\n    // Transfers given amount of `token_id` from this DAO to `receiver_id`.\n    // If `msg` is not None, calls `ft_transfer_call` with given `msg`. Fails if this base token.\n    // For `ft_transfer` and `ft_transfer_call` `memo` is the `description` of the proposal.\n    Transfer {\n        // Can be "" for $NEAR or a valid account id.\n        token_id: OldAccountId,\n        receiver_id: AccountId,\n        amount: U128,\n        msg: Option<String>,\n    },\n    // Sets staking contract. Can only be proposed if staking contract is not set yet.\n    SetStakingContract { staking_id: AccountId },\n    // Add new bounty.\n    AddBounty { bounty: Bounty },\n    // Indicates that given bounty is done by given user.\n    BountyDone {\n        bounty_id: u64,\n        receiver_id: AccountId,\n    },\n    // Just a signaling vote, with no execution.\n    Vote,\n    // Change information about factory and auto update.\n    FactoryInfoUpdate { factory_info: FactoryInfo },\n    // Add new role to the policy. If the role already exists, update it. This is short cut to updating the whole policy.\n    ChangePolicyAddOrUpdateRole { role: RolePermission },\n    // Remove role from the policy. This is short cut to updating the whole policy.\n    ChangePolicyRemoveRole { role: String },\n    // Update the default vote policy from the policy. This is short cut to updating the whole policy.\n    ChangePolicyUpdateDefaultVotePolicy { vote_policy: VotePolicy },\n    // Update the parameters from the policy. This is short cut to updating the whole policy.\n    ChangePolicyUpdateParameters { parameters: PolicyParameters },\n}\n\n#[derive(Serialize, Deserialize)]\n#[serde(crate = "near_sdk::serde")]\npub struct ProposalInput {\n    /// Description of this proposal.\n    pub description: String,\n    /// Kind of proposal with relevant information.\n    pub kind: ProposalKind,\n}\n\n// Validator interface, for cross-contract calls\n#[ext_contract(ext_dao_contract)]\ntrait ExternalDaoContract {\n  fn add_proposal(&mut self, proposal: ProposalInput) -> Promise;\n}\n\n// Implement the contract structure\n#[near_bindgen]\nimpl Contract {\n  #[payable]\n  pub fn create_proposal(&mut self, proposal: ProposalInput) -> Promise {\n    let promise = ext_dao_contract::ext(self.dao_contract.clone())\n      .with_attached_deposit(env::attached_deposit())\n      .with_static_gas(Gas(5*TGAS))\n      .add_proposal(proposal);\n\n    return promise.then( // Create a promise to callback query_greeting_callback\n      Self::ext(env::current_account_id())\n      .with_static_gas(Gas(50*TGAS))\n      .external_proposal_callback()\n    )\n  }\n\n  #[private] // Public - but only callable by env::current_account_id()\n  pub fn external_proposal_callback(&self, #[callback_result] call_result: Result<u64, PromiseError>) -> Option<u64> {\n    if call_result.is_err() {\n      log!("There was an error contacting external contract");\n      return None;\n    }\n\n    // Return the proposal id\n    let id = call_result.unwrap();\n    return Some(id);\n  }\n}\n'})}),"\n",(0,r.jsx)(n.hr,{}),"\n",(0,r.jsx)(n.h2,{id:"vote-for-proposal",children:"Vote for proposal"}),"\n",(0,r.jsx)(n.p,{children:"This snippet assumes that the contract has permissions to vote on DAO proposals and want to do it."}),"\n",(0,r.jsx)(n.pre,{children:(0,r.jsx)(n.code,{className:"language-rust",children:'// Set of possible action to take\n#[derive(BorshSerialize, BorshDeserialize, Serialize, Deserialize, Debug)]\n#[serde(crate = "near_sdk::serde")]\npub enum Action {\n    /// Action to add proposal. Used internally.\n    AddProposal,\n    /// Action to remove given proposal. Used for immediate deletion in special cases.\n    RemoveProposal,\n    /// Vote to approve given proposal or bounty.\n    VoteApprove,\n    /// Vote to reject given proposal or bounty.\n    VoteReject,\n    /// Vote to remove given proposal or bounty (because it\'s spam).\n    VoteRemove,\n    /// Finalize proposal, called when it\'s expired to return the funds\n    /// (or in the future can be used for early proposal closure).\n    Finalize,\n    /// Move a proposal to the hub to shift into another DAO.\n    MoveToHub,\n}\n\n// Validator interface, for cross-contract calls\n#[ext_contract(ext_dao_contract)]\ntrait ExternalDaoContract {\n  fn act_proposal(&mut self, id: u64, action: Action, memo: Option<String>) -> Promise;\n}\n\n// Implement the contract structure\n#[near_bindgen]\nimpl Contract {\n  #[payable]\n  pub fn act_proposal(&mut self, id: u64, action: Action, memo: Option<String>) -> Promise {\n    let promise = ext_dao_contract::ext(self.dao_contract.clone())\n      .with_attached_deposit(env::attached_deposit())\n      .with_static_gas(Gas(10*TGAS))\n      .act_proposal(id, action, memo);\n\n    return promise.then( // Create a promise to callback query_greeting_callback\n      Self::ext(env::current_account_id())\n      .external_common_callback()\n    )\n  }\n\n  #[private] // Public - but only callable by env::current_account_id()\n  pub fn external_common_callback(&self, #[callback_result] call_result: Result<(), PromiseError>) {\n    // Check if the promise succeeded\n    if call_result.is_err() {\n      log!("There was an error contacting external contract")\n    }\n  }\n}\n'})})]})}function d(e={}){const{wrapper:n}={...(0,a.a)(),...e.components};return n?(0,r.jsx)(n,{...e,children:(0,r.jsx)(u,{...e})}):u(e)}},85162:(e,n,t)=>{t.d(n,{Z:()=>i});t(67294);var r=t(36905);const a={tabItem:"tabItem_Ymn6"};var o=t(85893);function i(e){var n=e.children,t=e.hidden,i=e.className;return(0,o.jsx)("div",{role:"tabpanel",className:(0,r.Z)(a.tabItem,i),hidden:t,children:n})}},74866:(e,n,t)=>{t.d(n,{Z:()=>C});var r=t(67294),a=t(36905),o=t(12466),i=t(16550),s=t(20469),l=t(91980),c=t(67392),u=t(50012);function d(e){var n,t;return null!=(n=null==(t=r.Children.toArray(e).filter((function(e){return"\n"!==e})).map((function(e){if(!e||(0,r.isValidElement)(e)&&((n=e.props)&&"object"==typeof n&&"value"in n))return e;var n;throw new Error("Docusaurus error: Bad <Tabs> child <"+("string"==typeof e.type?e.type:e.type.name)+'>: all children of the <Tabs> component should be <TabItem>, and every <TabItem> should have a unique "value" prop.')})))?void 0:t.filter(Boolean))?n:[]}function p(e){var n=e.values,t=e.children;return(0,r.useMemo)((function(){var e=null!=n?n:function(e){return d(e).map((function(e){var n=e.props;return{value:n.value,label:n.label,attributes:n.attributes,default:n.default}}))}(t);return function(e){var n=(0,c.l)(e,(function(e,n){return e.value===n.value}));if(n.length>0)throw new Error('Docusaurus error: Duplicate values "'+n.map((function(e){return e.value})).join(", ")+'" found in <Tabs>. Every value needs to be unique.')}(e),e}),[n,t])}function h(e){var n=e.value;return e.tabValues.some((function(e){return e.value===n}))}function m(e){var n=e.queryString,t=void 0!==n&&n,a=e.groupId,o=(0,i.k6)(),s=function(e){var n=e.queryString,t=void 0!==n&&n,r=e.groupId;if("string"==typeof t)return t;if(!1===t)return null;if(!0===t&&!r)throw new Error('Docusaurus error: The <Tabs> component groupId prop is required if queryString=true, because this value is used as the search param name. You can also provide an explicit value such as queryString="my-search-param".');return null!=r?r:null}({queryString:t,groupId:a});return[(0,l._X)(s),(0,r.useCallback)((function(e){if(s){var n=new URLSearchParams(o.location.search);n.set(s,e),o.replace(Object.assign({},o.location,{search:n.toString()}))}}),[s,o])]}function f(e){var n,t,a,o,i=e.defaultValue,l=e.queryString,c=void 0!==l&&l,d=e.groupId,f=p(e),b=(0,r.useState)((function(){return function(e){var n,t=e.defaultValue,r=e.tabValues;if(0===r.length)throw new Error("Docusaurus error: the <Tabs> component requires at least one <TabItem> children component");if(t){if(!h({value:t,tabValues:r}))throw new Error('Docusaurus error: The <Tabs> has a defaultValue "'+t+'" but none of its children has the corresponding value. Available values are: '+r.map((function(e){return e.value})).join(", ")+". If you intend to show no default tab, use defaultValue={null} instead.");return t}var a=null!=(n=r.find((function(e){return e.default})))?n:r[0];if(!a)throw new Error("Unexpected error: 0 tabValues");return a.value}({defaultValue:i,tabValues:f})})),g=b[0],_=b[1],v=m({queryString:c,groupId:d}),y=v[0],w=v[1],C=(n=function(e){return e?"docusaurus.tab."+e:null}({groupId:d}.groupId),t=(0,u.Nk)(n),a=t[0],o=t[1],[a,(0,r.useCallback)((function(e){n&&o.set(e)}),[n,o])]),D=C[0],k=C[1],S=function(){var e=null!=y?y:D;return h({value:e,tabValues:f})?e:null}();return(0,s.Z)((function(){S&&_(S)}),[S]),{selectedValue:g,selectValue:(0,r.useCallback)((function(e){if(!h({value:e,tabValues:f}))throw new Error("Can't select invalid tab value="+e);_(e),w(e),k(e)}),[w,k,f]),tabValues:f}}var b=t(72389);const g={tabList:"tabList__CuJ",tabItem:"tabItem_LNqP"};var _=t(85893);function v(e){var n=e.className,t=e.block,r=e.selectedValue,i=e.selectValue,s=e.tabValues,l=[],c=(0,o.o5)().blockElementScrollPositionUntilNextRender,u=function(e){var n=e.currentTarget,t=l.indexOf(n),a=s[t].value;a!==r&&(c(n),i(a))},d=function(e){var n,t=null;switch(e.key){case"Enter":u(e);break;case"ArrowRight":var r,a=l.indexOf(e.currentTarget)+1;t=null!=(r=l[a])?r:l[0];break;case"ArrowLeft":var o,i=l.indexOf(e.currentTarget)-1;t=null!=(o=l[i])?o:l[l.length-1]}null==(n=t)||n.focus()};return(0,_.jsx)("ul",{role:"tablist","aria-orientation":"horizontal",className:(0,a.Z)("tabs",{"tabs--block":t},n),children:s.map((function(e){var n=e.value,t=e.label,o=e.attributes;return(0,_.jsx)("li",Object.assign({role:"tab",tabIndex:r===n?0:-1,"aria-selected":r===n,ref:function(e){return l.push(e)},onKeyDown:d,onClick:u},o,{className:(0,a.Z)("tabs__item",g.tabItem,null==o?void 0:o.className,{"tabs__item--active":r===n}),children:null!=t?t:n}),n)}))})}function y(e){var n=e.lazy,t=e.children,a=e.selectedValue,o=(Array.isArray(t)?t:[t]).filter(Boolean);if(n){var i=o.find((function(e){return e.props.value===a}));return i?(0,r.cloneElement)(i,{className:"margin-top--md"}):null}return(0,_.jsx)("div",{className:"margin-top--md",children:o.map((function(e,n){return(0,r.cloneElement)(e,{key:n,hidden:e.props.value!==a})}))})}function w(e){var n=f(e);return(0,_.jsxs)("div",{className:(0,a.Z)("tabs-container",g.tabList),children:[(0,_.jsx)(v,Object.assign({},e,n)),(0,_.jsx)(y,Object.assign({},e,n))]})}function C(e){var n=(0,b.Z)();return(0,_.jsx)(w,Object.assign({},e,{children:d(e.children)}),String(n))}},11151:(e,n,t)=>{t.d(n,{Z:()=>s,a:()=>i});var r=t(67294);const a={},o=r.createContext(a);function i(e){const n=r.useContext(o);return r.useMemo((function(){return"function"==typeof e?e(n):{...n,...e}}),[n,e])}function s(e){let n;return n=e.disableParentContext?"function"==typeof e.components?e.components(a):e.components||a:i(e.components),r.createElement(o.Provider,{value:n},e.children)}}}]);