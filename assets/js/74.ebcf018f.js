(window.webpackJsonp=window.webpackJsonp||[]).push([[74],{429:function(s,t,a){"use strict";a.r(t);var e=a(42),n=Object(e.a)({},(function(){var s=this,t=s.$createElement,a=s._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":s.$parent.slotKey}},[a("h1",{attrs:{id:"setting-up-tendermint-kms-softsign"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#setting-up-tendermint-kms-softsign"}},[s._v("#")]),s._v(" Setting up Tendermint KMS + Softsign")]),s._v(" "),a("div",{staticClass:"custom-block danger"},[a("p",{staticClass:"custom-block-title"},[s._v("Warning")]),s._v(" "),a("p",[s._v("KMS and Ledger Tendermint app are currently work in progress. Details may vary. Use with care under your own risk.")])]),s._v(" "),a("h2",{attrs:{id:"config-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#config-file"}},[s._v("#")]),s._v(" Config file")]),s._v(" "),a("h3",{attrs:{id:"create-the-folders-and-file"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-the-folders-and-file"}},[s._v("#")]),s._v(" Create the folders and file")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[s._v("mkdir")]),s._v(" -p kms/home\n"),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" kms/home\n"),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("nano")]),s._v(" tmkms.toml\n")])])]),a("h3",{attrs:{id:"add-your-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#add-your-configuration"}},[s._v("#")]),s._v(" Add your configuration")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('# Example Tendermint KMS configuration file\n\n## Chain Configuration\n\n[[chain]]\nid = "<chain-id>"\nkey_format = { type = "bech32", account_key_prefix = "desmospub", consensus_key_prefix = "desmosvalconspub" }\nstate_file = "/root/kms/home/state/cosmoshub-3-consensus.json"\n\n## Signing Provider Configuration\n\n### Software-based Signer Configuration\n\n[[providers.softsign]]\nchain_ids = ["<chain-id>"]\nkey_type = "consensus"\npath = "/root/kms/home/secrets/validator-consensus.key"\n\n## Validator Configuration\n\n[[validator]]\nchain_id = "morpheus-apollo-1"\naddr = "tcp://127.0.0.1:26658"\nsecret_key = "/root/kms/home/secrets/kms-identity.key"\nprotocol_version = "v0.34"\nreconnect = true\n\n')])])]),a("h3",{attrs:{id:"get-the-identity-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#get-the-identity-key"}},[s._v("#")]),s._v(" Get the Identity key")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("desmos query staking validator "),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("<")]),s._v("valoperaddress"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v(">")]),s._v("\n")])])]),a("p",[s._v("You will get a similar response:")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('commission:\n  commission_rates:\n    max_change_rate: "0.050000000000000000"\n    max_rate: "0.500000000000000000"\n    rate: "0.050000000000000000"\n  update_time: "2021-06-08T13:56:42.931427534Z"\nconsensus_pubkey:\n  \'@type\': /cosmos.crypto.ed25519.PubKey\n  key: eUhoKzRsVUhPMDlvUWdjWmo1RmNtODFRqTT0=\ndelegator_shares: "9999999999.000080008000800080"\ndescription:\n  details: ""\n  identity: 12FA04A22E47GN17\n  moniker: testman\n  security_contact: ""\n  website: ""\njailed: false\nmin_self_delegation: "1"\noperator_address: desmosvaloper1...\nstatus: BOND_STATUS_BONDED\ntokens: "9999999999"\nunbonding_height: "617524"\nunbonding_time: "2021-05-13T05:05:09.783549624Z"\n\n')])])]),a("p",[s._v("Copy the "),a("code",[s._v("consensus_pubkey")]),s._v(" "),a("code",[s._v("key")]),s._v(" value and put it inside the "),a("code",[s._v("kms-identity.key")]),s._v(" file")]),s._v(" "),a("h3",{attrs:{id:"import-the-private-validator-key"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#import-the-private-validator-key"}},[s._v("#")]),s._v(" Import the private validator key")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[s._v("cd")]),s._v(" ~/.desmos/config\n\ntmkms softsign "),a("span",{pre:!0,attrs:{class:"token function"}},[s._v("import")]),s._v(" priv_validator_key.json "),a("span",{pre:!0,attrs:{class:"token string"}},[s._v('"/root/kms/home/secret/morpheus-apollo-1.consensus.key"')]),s._v("\n")])])]),a("h3",{attrs:{id:"chain-configuration"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chain-configuration"}},[s._v("#")]),s._v(" Chain configuration")]),s._v(" "),a("p",[s._v("Now you need to enable KMS access by editing .desmos/config/config.toml."),a("br"),s._v("\nIn this file, modify "),a("code",[s._v("priv_validator_laddr")]),s._v(" to create a listening address/port or a unix socket in desmos.")]),s._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[s._v('...\n# TCP or UNIX socket address for Tendermint to listen on for\n# connections from an external PrivValidator process\npriv_validator_laddr = "tcp://127.0.0.1:26658"\n...\n')])])]),a("h3",{attrs:{id:"start-the-tmkms"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#start-the-tmkms"}},[s._v("#")]),s._v(" Start the tmkms")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[s._v("tmkms start -c ~/.tmkms/tmkms.toml\n")])])]),a("p",[s._v("If you've setup everything properly you should see a log like this:")]),s._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-09T14:23:51.525184Z  INFO tmkms::commands::start: tmkms "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0.10")]),s._v(".1 starting up"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("..")]),s._v(".\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-09T14:23:51.525380Z  INFO tmkms::keyring: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("keyring:softsign"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" added consensus Ed25519 key: desmosvalconspub1zcjduepqepu8acj4qua576zzquvcly2un0xkzhwh0ehvgmx8gxgl34zhkceskthfp6\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-09T14:23:51.526030Z  INFO tmkms::connection::tcp: KMS node ID: 7489C3177FB578314099657A7B56CC241144CCC8\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-09T14:23:51.527591Z  INFO tmkms::session: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("morpheus-apollo-1@tcp://127.0.0.1:26659"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" connected to validator successfully\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-09T14:23:51.527625Z  WARN tmkms::session: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("morpheus-apollo-1@tcp://127.0.0.1:26659"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(": unverified validator peer ID"),a("span",{pre:!0,attrs:{class:"token operator"}},[s._v("!")]),s._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),s._v("6CA3A1674B1AE6774D1BA6E100D559C5BF80F82B"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-09T14:35:20.416891Z  INFO tmkms::session: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("morpheus-apollo-1@tcp://127.0.0.1:26659"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" signed PreCommit:78AD7099DE at h/r/s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("609456")]),s._v("/0/2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-09T14:35:25.792444Z  INFO tmkms::session: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("morpheus-apollo-1@tcp://127.0.0.1:26659"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" signed PreVote:2DA528546B at h/r/s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("609457")]),s._v("/0/1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-09T14:35:26.126467Z  INFO tmkms::session: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("morpheus-apollo-1@tcp://127.0.0.1:26659"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" signed PreCommit:2DA528546B at h/r/s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("609457")]),s._v("/0/2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-09T14:35:31.529730Z  INFO tmkms::session: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("morpheus-apollo-1@tcp://127.0.0.1:26659"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" signed PreVote:AD37ACB851 at h/r/s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("609458")]),s._v("/0/1 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n"),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("2021")]),s._v("-06-09T14:35:31.793969Z  INFO tmkms::session: "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("[")]),s._v("morpheus-apollo-1@tcp://127.0.0.1:26659"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("]")]),s._v(" signed PreCommit:AD37ACB851 at h/r/s "),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("609458")]),s._v("/0/2 "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v("(")]),a("span",{pre:!0,attrs:{class:"token number"}},[s._v("0")]),s._v(" ms"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[s._v(")")]),s._v("\n")])])])])}),[],!1,null,null,null);t.default=n.exports}}]);