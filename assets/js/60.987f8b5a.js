(window.webpackJsonp=window.webpackJsonp||[]).push([[60],{415:function(e,t,s){"use strict";s.r(t);var a=s(42),r=Object(a.a)({},(function(){var e=this,t=e.$createElement,s=e._self._c||t;return s("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[s("h1",{attrs:{id:"common-problems"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#common-problems"}},[e._v("#")]),e._v(" Common Problems")]),e._v(" "),s("h2",{attrs:{id:"problem-1-my-validator-has-voting-power-0"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problem-1-my-validator-has-voting-power-0"}},[e._v("#")]),e._v(" Problem #1: My validator has "),s("code",[e._v("voting_power: 0")])]),e._v(" "),s("p",[e._v("Your validator has become jailed. Validators get jailed, i.e. get removed from the active validator set, if they do not\nvote on "),s("code",[e._v("500")]),e._v(" of the last "),s("code",[e._v("10000")]),e._v(" blocks, or if they double sign.")]),e._v(" "),s("p",[e._v("If you got jailed for downtime, you can get your voting power back to your validator. First, if "),s("code",[e._v("desmos")]),e._v(" is not running,\nstart it up again:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("desmos start\n")])])]),s("p",[e._v("Wait for your full node to catch up to the latest block. Then, you\ncan "),s("a",{attrs:{href:"#problem-4-my-validator-is-jailed"}},[e._v("unjail your validator")]),e._v(".")]),e._v(" "),s("p",[e._v("Lastly, check your validator again to see if your voting power is back.")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("desmos status\n")])])]),s("p",[e._v("You may notice that your voting power is less than it used to be. That's because you got slashed for downtime!")]),e._v(" "),s("h2",{attrs:{id:"problem-2-my-desmos-crashes-because-of-too-many-open-files"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problem-2-my-desmos-crashes-because-of-too-many-open-files"}},[e._v("#")]),e._v(" Problem #2: My "),s("code",[e._v("desmos")]),e._v(" crashes because of "),s("code",[e._v("too many open files")])]),e._v(" "),s("p",[e._v("The default number of files Linux can open (per-process) is "),s("code",[e._v("1024")]),e._v(". "),s("code",[e._v("desmos")]),e._v(" is known to open more than "),s("code",[e._v("1024")]),e._v(" files.\nThis causes the process to crash. A quick fix is to run "),s("code",[e._v("ulimit -n 4096")]),e._v(" (increase the number of open files allowed) and\nthen restart the process with "),s("code",[e._v("desmos start")]),e._v(". If you are using "),s("code",[e._v("systemd")]),e._v(" or another process manager to launch "),s("code",[e._v("desmos")]),e._v("\nthis may require some configuration at that level. A sample "),s("code",[e._v("systemd")]),e._v(" file to fix this issue is below:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('# /etc/systemd/system/desmos.service\n[Unit]\nDescription=Desmos Full Node\nAfter=network.target\n\n[Service]\nType=simple\nUser=ubuntu # This is the user that is running the software in the background. Change it to your username if needed.\nWorkingDirectory=/home/ubuntu # This is the home directory of the user that running the software in the background. Change it to your username if needed.\nExecStart=/home/ubuntu/go/bin/desmos start # The path should point to the correct location of the software you have installed.\nRestart=on-failure\nRestartSec=3\nLimitNOFILE=4096 # To compensate the "Too many open files" issue.\n\n[Install]\nWantedBy=multi-user.target\n')])])]),s("h2",{attrs:{id:"problem-3-my-validator-is-inactive-unbonding"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problem-3-my-validator-is-inactive-unbonding"}},[e._v("#")]),e._v(" Problem #3: My validator is inactive/unbonding")]),e._v(" "),s("p",[e._v("When creating a validator you have the minimum self delegation amount using the "),s("code",[e._v("--min-self-delegation")]),e._v(" flag. What this\nmeans is that if your validator has less than that specific value of tokens self delegated, it will automatically enter\nthe unbonding state and then be marked as inactive.")]),e._v(" "),s("p",[e._v("To solve this, what you can do is getting more tokens delegated to it by following these steps:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Get your address:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("desmos keys show "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_key"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --address\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Require more tokens using the "),s("a",{attrs:{href:"https://discord.gg/J6VsHDT",target:"_blank",rel:"noopener noreferrer"}},[e._v("Discord"),s("OutboundLink")],1),e._v(" bot inside the "),s("code",[e._v("#ask-tokens")]),e._v(" channel by\nsending "),s("code",[e._v("!send <address>")]),e._v(".")])]),e._v(" "),s("li",[s("p",[e._v("Make sure the tokens have been sent properly:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("desmos query account "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("desmos keys show "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_key"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --address"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" --chain-id "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("chain_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n")])])])]),e._v(" "),s("li",[s("p",[e._v("Delegate the tokens to your validator:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("desmos tx staking delegate "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token variable"}},[s("span",{pre:!0,attrs:{class:"token variable"}},[e._v("$(")]),e._v("desmos keys show "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_key"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --bech"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("=")]),e._v("val --address"),s("span",{pre:!0,attrs:{class:"token variable"}},[e._v(")")])]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("amount"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --chain-id "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("chain_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("\\")]),e._v("\n  --from "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_key"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --yes\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Example")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# desmos tx staking delegate \\")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  $(desmos keys show validator --bech=val --address) \\")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  10000000udaric \\")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  --chain-id morpheus-1001 \\")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("#  --from validator --yes")]),e._v("\n")])])])])]),e._v(" "),s("h2",{attrs:{id:"problem-4-my-validator-is-jailed"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problem-4-my-validator-is-jailed"}},[e._v("#")]),e._v(" Problem #4: My validator is jailed")]),e._v(" "),s("p",[e._v("If your validator is jailed it probably means that it has been inactive for a long period of time missing a consistent\nnumber of blocks. We suggest you checking the Desmos daemon status to make sure it hasn't been interrupted by some\nerror.")]),e._v(" "),s("p",[e._v("If the service is running properly, it probably means that your node did not have internet access for a prolonged period\nof time. In both cases, if there are no other errors to fix, you can unjail your validator by executing the following\ncommand:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("desmos tx slashing unjail --chain-id "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("chain_id"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v(" --from "),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v("<")]),e._v("your_key"),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(">")]),e._v("\n\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Example")]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# desmos tx slashing unjail --chain-id morpheus-1001 --from validator")]),e._v("\n")])])]),s("p",[e._v("This will perform an unjail transaction that will set your validator as active again from the next block.")]),e._v(" "),s("p",[e._v("If the problem still persists, please make sure you\nhave "),s("a",{attrs:{href:"#problem-3-my-validator-is-inactiveunbonding"}},[e._v("enough tokens delegated to your validator")]),e._v(".")]),e._v(" "),s("div",{staticClass:"custom-block tip"},[s("p",{staticClass:"custom-block-title"},[e._v("Last solution to fixing your node errors")]),e._v(" "),s("p",[e._v("If your service is running properly, you can also try and reset your "),s("code",[e._v("desmos")]),e._v(" configuration by running the following\ncommand:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[s("span",{pre:!0,attrs:{class:"token function"}},[e._v("rm")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token environment constant"}},[e._v("$HOME")]),e._v("/.desmos/config/config.toml\n")])])]),s("p",[e._v("After doing so, remember to restart your validator service to apply the changes:")]),e._v(" "),s("div",{staticClass:"language-bash extra-class"},[s("pre",{pre:!0,attrs:{class:"language-bash"}},[s("code",[e._v("systemctl restart desmosd\n")])])])]),e._v(" "),s("h2",{attrs:{id:"problem-5-the-persistent-peers-do-not-work-properly"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problem-5-the-persistent-peers-do-not-work-properly"}},[e._v("#")]),e._v(" Problem #5: The persistent peers do not work properly")]),e._v(" "),s("p",[e._v("Sometimes, it might happen that your node cannot connect to the persistent peers we have provided inside\nthe "),s("a",{attrs:{href:"https://github.com/desmos-labs/morpheus",target:"_blank",rel:"noopener noreferrer"}},[e._v("testnet repository"),s("OutboundLink")],1),e._v(". This happens because all nodes have a limit of\ninbound connections that they can accept. Once that limit is exceed, the nodes will not accept any more connections.")]),e._v(" "),s("p",[e._v("In order to solve this problem, there are two alternative way:")]),e._v(" "),s("ol",[s("li",[e._v("use a seed node instead of a persistent peer, "),s("strong",[e._v("OR")])]),e._v(" "),s("li",[e._v("use different persistent peers.")])]),e._v(" "),s("h3",{attrs:{id:"using-a-seed-node"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#using-a-seed-node"}},[e._v("#")]),e._v(" Using a seed node")]),e._v(" "),s("p",[e._v("Seed nodes are a particular type of nodes that provide every validator with a set of peers to connect with, based on the\ncurrent network status. What will happen when you use seed nodes is the following:")]),e._v(" "),s("ol",[s("li",[e._v("Your node will connect to a seed node.")]),e._v(" "),s("li",[e._v("The seed node will provide your node with a list of peers.")]),e._v(" "),s("li",[e._v("Your node will disconnect from the seed node and connect to the peers.")]),e._v(" "),s("li",[e._v("Your node will start syncing with the chain.")])]),e._v(" "),s("p",[e._v("In order to use this particular type of nodes, all you have to do is:")]),e._v(" "),s("ol",[s("li",[s("p",[e._v("Open the "),s("code",[e._v("~/.desmos/config/config.toml")]),e._v(" file")])]),e._v(" "),s("li",[s("p",[e._v("Find the line starting with")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('seeds = ""\n')])])])]),e._v(" "),s("li",[s("p",[e._v("Replace that line with the following:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('seeds = "cd4612957461881d5f62367c589aaa0fdf933bd8@seed-1.morpheus.desmos.network:26656,fc4714d15629e3b016847c45d5648230a30a50f1@seed-2.morpheus.desmos.network:26656"\n')])])])]),e._v(" "),s("li",[s("p",[e._v("Empty your persistent peers list by replacing the "),s("code",[e._v('pesistent_peers = "..."')]),e._v(" line with")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v('persistent_peers = ""\n')])])])]),e._v(" "),s("li",[s("p",[e._v("Save the file and exit the editor.")])]),e._v(" "),s("li",[s("p",[e._v("Restart your node.")])])]),e._v(" "),s("h3",{attrs:{id:"changing-your-persistent-peers"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#changing-your-persistent-peers"}},[e._v("#")]),e._v(" Changing your persistent peers")]),e._v(" "),s("p",[e._v("Instead of using a seed node, you can also keep relying on persistent peers. In this case, you will need to find new ones to connect your node to. To do this, you can query the current peers of any chain node using the following RPC endpoint:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("/net_info\n")])])]),s("p",[e._v("For example, you can use the public RPC endpoint "),s("a",{attrs:{href:"http://rpc.morpheus.desmos.network:26657/net_info",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")]),e._v(" "),s("p",[e._v("From that page, you can see all the peers connected to that node. Their info is present inside the "),s("code",[e._v("peers")]),e._v(" field, which contains a list of objects made as follows:")]),e._v(" "),s("div",{staticClass:"language-json extra-class"},[s("div",{staticClass:"highlight-lines"},[s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("br"),s("div",{staticClass:"highlighted"},[e._v(" ")]),s("br"),s("br")]),s("pre",{pre:!0,attrs:{class:"language-json"}},[s("code",[s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"node_info"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"protocol_version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"id"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"d45d4e0a6a6c393d58cfa1c5fed6286164fbfceb"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"listen_addr"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tcp://0.0.0.0:26656"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"network"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"morpheus-10000"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"version"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"0.33.7"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"channels"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"4020212223303800"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"moniker"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"Maria"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"other"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"tx_index"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"on"')]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n      "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"rpc_address"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"tcp://127.0.0.1:26657"')]),e._v("\n    "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"is_outbound"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token boolean"}},[e._v("false")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"connection_status"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("{")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v(",")]),e._v("\n  "),s("span",{pre:!0,attrs:{class:"token property"}},[e._v('"remote_ip"')]),s("span",{pre:!0,attrs:{class:"token operator"}},[e._v(":")]),e._v(" "),s("span",{pre:!0,attrs:{class:"token string"}},[e._v('"35.193.251.165"')]),e._v("\n"),s("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("}")]),e._v("\n")])])]),s("p",[e._v("In order to get new peers addresses, all you have to do is to combine the "),s("code",[e._v("id")]),e._v(", "),s("code",[e._v("remote_ip")]),e._v(" and "),s("code",[e._v("listen_addr")]),e._v(" field values as follows:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("id@remote_ip:listen_addr(port)\n")])])]),s("p",[e._v("In the above case, that peer's address would be:")]),e._v(" "),s("div",{staticClass:"language- extra-class"},[s("pre",{pre:!0,attrs:{class:"language-text"}},[s("code",[e._v("d45d4e0a6a6c393d58cfa1c5fed6286164fbfceb@35.193.251.165:26656\n")])])]),s("p",[e._v("You can do this with as many peers as you want. Once you have a list of peers, you can use those inside\nthe "),s("code",[e._v("persistent_peers")]),e._v(" field of your "),s("code",[e._v("~/.desmos/config/config.toml")]),e._v(" file.")]),e._v(" "),s("h2",{attrs:{id:"problem-6-i-tried-unjailing-my-validator-but-it-keeps-getting-jailed-after-some-time"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#problem-6-i-tried-unjailing-my-validator-but-it-keeps-getting-jailed-after-some-time"}},[e._v("#")]),e._v(" Problem #6: I tried unjailing my validator, but it keeps getting jailed after some time")]),e._v(" "),s("p",[e._v("If you have "),s("a",{attrs:{href:"#problem-4-my-validator-is-jailed"}},[e._v("tried to unjail")]),e._v(", but you've seen that your node is jailed again shortly\nafter, it most probably means that your validator has been "),s("strong",[e._v("tombstoned")]),e._v(".")]),e._v(" "),s("p",[e._v("A validator is put in a tombstone status only when it double signs. Since this is way more egregious than a liveliness\nfault, once your validator double signs it will no longer be able to re-join the active set with the same validator key.")]),e._v(" "),s("p",[e._v("In order to avoid this, you need to always make sure that each of your nodes "),s("strong",[e._v("do not")]),e._v(" validate with the same private\nkey.")]),e._v(" "),s("p",[e._v("Also, once your validator is tombstoned all you can do is create a new one, and earn again all the delegations that you\nhad before.")]),e._v(" "),s("h5",{attrs:{id:"note"}},[s("a",{staticClass:"header-anchor",attrs:{href:"#note"}},[e._v("#")]),e._v(" NOTE")]),e._v(" "),s("p",[e._v("Previous delegators will still be able to unbond from a tombstoned validator.")]),e._v(" "),s("p",[e._v("More information about the slashing penalties and tombstoning can be\nfound "),s("a",{attrs:{href:"https://docs.cosmos.network/v0.42/modules/slashing/07_tombstone.html",target:"_blank",rel:"noopener noreferrer"}},[e._v("here"),s("OutboundLink")],1),e._v(".")])])}),[],!1,null,null,null);t.default=r.exports}}]);