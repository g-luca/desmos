(window.webpackJsonp=window.webpackJsonp||[]).push([[76],{431:function(e,t,a){"use strict";a.r(t);var s=a(42),o=Object(s.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"upgrade-procedure-workflow"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-procedure-workflow"}},[e._v("#")]),e._v(" Upgrade procedure workflow")]),e._v(" "),a("p",[e._v("As seen inside the "),a("RouterLink",{attrs:{to:"/validators/upgrades/automatic/overview.html"}},[e._v("overview")]),e._v(", Desmos now supports automatic proposal-based upgrades. Following you will find the description of the upgrading procedure that we will adopt from now on inside our chain.")],1),e._v(" "),a("h2",{attrs:{id:"upgrade-proposals-definition"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-proposals-definition"}},[e._v("#")]),e._v(" Upgrade proposals definition")]),e._v(" "),a("p",[e._v("In order to make sure each validator upgrades its node in the correct moment in time, upgrades wil be proposed directly on-chain through the usage of "),a("strong",[e._v("upgrade proposals")]),e._v(".")]),e._v(" "),a("p",[e._v("Upgrade proposals are on-chain proposals that can be created by anyone from within the chain itself using the "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/x/gov/spec",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("x/gov")]),e._v(" module from the Cosmos SDK"),a("OutboundLink")],1),e._v(". Particularly, this kind of proposals contain an upgrade "),a("strong",[e._v("plan")]),e._v(".")]),e._v(" "),a("p",[e._v("An upgrade plan contains the following data:")]),e._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Plan specifies information about a planned upgrade and when it should occur")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("type")]),e._v(" Plan "),a("span",{pre:!0,attrs:{class:"token keyword"}},[e._v("struct")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Sets the name for the upgrade. This name will be used by the upgraded version of the software to apply any")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v('// special "on-upgrade" commands during the first BeginBlock method after the upgrade is applied. It is also used')]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// to detect whether a software version can handle a given upgrade. If no upgrade handler with this name has been")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// set in the software, it will be assumed that the software is out-of-date when the upgrade Time or Height")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// is reached and the software will exit.")]),e._v("\n\tName "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"name,omitempty"`')]),e._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The time after which the upgrade must be performed.")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Leave set to its zero value to use a pre-defined Height instead.")]),e._v("\n\tTime time"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(".")]),e._v("Time "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"time,omitempty"`')]),e._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// The height at which the upgrade must be performed.")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Only used if Time is not set.")]),e._v("\n\tHeight "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("int64")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"height,omitempty"`')]),e._v("\n\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// Any application specific upgrade info to be included on-chain")]),e._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("// such as a git commit that validators could automatically upgrade to")]),e._v("\n\tInfo "),a("span",{pre:!0,attrs:{class:"token builtin"}},[e._v("string")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('`json:"info,omitempty"`')]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),a("p",[e._v("In order to create a simple upgrade proposal, the command that can be execute is the following:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[e._v("desmoscli tx gov submit-proposal software-upgrade "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<Upgrade name>"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --title "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<Proposal title>"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --description "),a("span",{pre:!0,attrs:{class:"token string"}},[e._v('"<Proposal description>"')]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --deposit "),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Initial deposit"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --upgrade-height"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("Upgrade height"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])]),a("p",[e._v("While creating an upgrade proposal, the following data are "),a("strong",[e._v("required")]),e._v(":")]),e._v(" "),a("ul",[a("li",[e._v("the "),a("code",[e._v("title")]),e._v(" of the proposal")]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("description")]),e._v(" of the proposal")]),e._v(" "),a("li",[e._v("the "),a("code",[e._v("upgrade-height")]),e._v(" "),a("strong",[e._v("or")]),e._v(" "),a("code",[e._v("upgrade-time")])])]),e._v(" "),a("p",[e._v("Optionally, an initial "),a("code",[e._v("deposit")]),e._v(" can be specified.")]),e._v(" "),a("h2",{attrs:{id:"upgrade-proposal-life-cycle"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#upgrade-proposal-life-cycle"}},[e._v("#")]),e._v(" Upgrade proposal life cycle")]),e._v(" "),a("p",[e._v("Once that an upgrade proposal has been created, it needs to go through a series of steps before being accepted and finally trigger the update.")]),e._v(" "),a("p",[e._v("The first step it needs to go through is the "),a("strong",[e._v("deposit")]),e._v(" period. During this time, users can deposit their tokens into the proposal to make sure it will get into the next phase (voting period). If the proposal gathers enough tokens (defined by the "),a("code",[e._v("x/gov")]),e._v(" module params), then the deposited tokens will be returned to the depositor. Otherwise, if not enough tokens are deposited before the deposit time ends, all the deposited tokens will be burned.")]),e._v(" "),a("p",[e._v("Once that enough tokens have been deposited into the proposal, it then goes into the "),a("strong",[e._v("voting period")]),e._v(".  This period has a predefined length, which is established by the "),a("code",[e._v("x/gov")]),e._v(' params. Durign this period, any chain user can vote either "Yes", "No" or "No with veto" to the proposal. In order to pass, more than 75% of voting power need to vote into the proposal, and the 51% of votings must be "Yes". A 33% of "No with veto" will invalidate the proposal.')]),e._v(" "),a("p",[e._v("If the proposal passes, then the upgrade plan is put into action.")]),e._v(" "),a("h2",{attrs:{id:"validators-responsibility"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#validators-responsibility"}},[e._v("#")]),e._v(" Validators responsibility")]),e._v(" "),a("p",[e._v("As a validator, if a proposal passes you will need to perform the following operations:")]),e._v(" "),a("p",[e._v("First of all, you need to checkout the proper Desmos version. The upgrade proposal will contain the details of what Desmos version should be used during the upgrade process.")]),e._v(" "),a("p",[e._v("In order to make sure the "),a("code",[e._v("upgrade_manager")]),e._v(" utility properly handles the upgrade, you need then to build the Desmos binary and put inside the correct folder on your machine. In order to do so run:")]),e._v(" "),a("div",{staticClass:"language-shell extra-class"},[a("pre",{pre:!0,attrs:{class:"language-shell"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[e._v("cd")]),e._v(" ~/desmos\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("make")]),e._v(" build\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("mkdir")]),e._v(" -p ~/.desmosd/upgrade_manager/upgrades/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("upgrade-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/bin\n"),a("span",{pre:!0,attrs:{class:"token function"}},[e._v("cp")]),e._v(" build/desmosd ~/.desmosd/upgrade_manager/upgrades/"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("upgrade-name"),a("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("/bin\n")])])]),a("p",[e._v("Please note that the "),a("code",[e._v("<upgrade-name>")]),e._v(" placeholder should be replaced with the name of the upgrade that is put inside the upgrade proposal.")]),e._v(" "),a("h3",{attrs:{id:"scripts"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#scripts"}},[e._v("#")]),e._v(" Scripts")]),e._v(" "),a("p",[e._v("In order to make validators lives easier, during our testnet phase we will provide scripts that you can run in order to perform these tasks easily. We will also provide "),a("code",[e._v(".tar.gz")]),e._v(" files that can be downloaded and contain all the necessary data to get though upgrades.")]),e._v(" "),a("h3",{attrs:{id:"automatic-binaries-download"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#automatic-binaries-download"}},[e._v("#")]),e._v(" Automatic binaries download")]),e._v(" "),a("p",[e._v("When creating upgrade proposals, from time to time we will also try to specify the binaries that should be automatically downloaded during the upgrade. This will be done following the "),a("a",{attrs:{href:"https://github.com/regen-network/cosmosd#auto-download",target:"_blank",rel:"noopener noreferrer"}},[a("code",[e._v("cosmosd")]),e._v(" specification"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("p",[e._v("If you want, you can enable the "),a("code",[e._v("DAEMON_ALLOW_DOWNLOAD_BINARIES")]),e._v(" environmental variable during the "),a("RouterLink",{attrs:{to:"/validators/upgrades/automatic/setup.html"}},[e._v("setup")]),e._v(" in order to allow your node to auto download them and perform all the procedure by itself.")],1),e._v(" "),a("p",[e._v("However, please keep in mind that while this is fine to do in a test environment (i.e. the during the testnet phase), it is less OK to be done inside a production environment. You should always be caution with automatic operations and always be ready to manually override them if needed.")])])}),[],!1,null,null,null);t.default=o.exports}}]);