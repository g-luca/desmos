(window.webpackJsonp=window.webpackJsonp||[]).push([[54],{409:function(t,e,a){"use strict";a.r(e);var s=a(42),n=Object(s.a)({},(function(){var t=this,e=t.$createElement,a=t._self._c||e;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"chain-link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chain-link"}},[t._v("#")]),t._v(" Chain link")]),t._v(" "),a("p",[t._v("A chain link represents a link to an external chain account that has been created by the user to connect their Desmos profile to such accounts. These links can be created either offline or using IBC following the specification described inside the "),a("a",{attrs:{href:"#create-a-chain-link"}},[a("em",[t._v('"Create a chain link"')]),t._v(" section")]),t._v(".")]),t._v(" "),a("h2",{attrs:{id:"contained-data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#contained-data"}},[t._v("#")]),t._v(" Contained data")]),t._v(" "),a("p",[t._v("Here follows the data contained inside a chain link.")]),t._v(" "),a("h3",{attrs:{id:"user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[t._v("#")]),t._v(" "),a("code",[t._v("User")])]),t._v(" "),a("p",[t._v("Represents the Desmos address to which the chain link is associated.")]),t._v(" "),a("h3",{attrs:{id:"address"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#address"}},[t._v("#")]),t._v(" "),a("code",[t._v("Address")])]),t._v(" "),a("p",[t._v("Contains the data of the external chain address. Currently, it can be of two different types:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Bech32Address")]),t._v(" to represent Bech32-based addresses")]),t._v(" "),a("li",[a("code",[t._v("Base58Address")]),t._v(" to support Base58-encoded addresses")])]),t._v(" "),a("h3",{attrs:{id:"proof"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#proof"}},[t._v("#")]),t._v(" "),a("code",[t._v("Proof")])]),t._v(" "),a("p",[t._v("Contains the data proving the ownership of the external chain account.")]),t._v(" "),a("h4",{attrs:{id:"pubkey"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#pubkey"}},[t._v("#")]),t._v(" "),a("code",[t._v("PubKey")])]),t._v(" "),a("p",[t._v("Contains the data of the public key associated with the external address that is used to verify the ownership of such address.")]),t._v(" "),a("h4",{attrs:{id:"signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[t._v("#")]),t._v(" "),a("code",[t._v("Signature")])]),t._v(" "),a("p",[t._v("Represents the hex-encoded signature of the plain text that has been created signing it with the private key associated with the provided public key.")]),t._v(" "),a("h4",{attrs:{id:"plaintext"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#plaintext"}},[t._v("#")]),t._v(" "),a("code",[t._v("PlainText")])]),t._v(" "),a("p",[t._v("Represents the plain text value that has been signed with the private key associated with the address in order to get the signature.")]),t._v(" "),a("h3",{attrs:{id:"chainconfig"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#chainconfig"}},[t._v("#")]),t._v(" "),a("code",[t._v("ChainConfig")])]),t._v(" "),a("p",[t._v("Contains the details of the external chain to which the link is associated.")]),t._v(" "),a("h4",{attrs:{id:"name"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#name"}},[t._v("#")]),t._v(" "),a("code",[t._v("Name")])]),t._v(" "),a("p",[t._v("Contains the human readable chain name.")]),t._v(" "),a("h3",{attrs:{id:"creationtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creationtime"}},[t._v("#")]),t._v(" "),a("code",[t._v("CreationTime")])]),t._v(" "),a("p",[t._v("Represents the time in which the link has been created.")]),t._v(" "),a("h2",{attrs:{id:"create-a-chain-link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#create-a-chain-link"}},[t._v("#")]),t._v(" Create a chain link")]),t._v(" "),a("h3",{attrs:{id:"_1-create-the-ownership-proofs"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-create-the-ownership-proofs"}},[t._v("#")]),t._v(" 1. Create the ownership proofs")]),t._v(" "),a("p",[t._v("When creating a chain link, you need to provide two different proofs to make sure the link is valid:")]),t._v(" "),a("ol",[a("li",[t._v("The proof that you own the external chain account")]),t._v(" "),a("li",[t._v("The proof that you own the Desmos profile to which you want to link")])]),t._v(" "),a("p",[t._v("In order to create a proof, the following steps are needed:")]),t._v(" "),a("ol",[a("li",[t._v("Get a generic plain text data to sign")]),t._v(" "),a("li",[t._v("Sign the plain text data using your private key")]),t._v(" "),a("li",[t._v("Assemble the signature, plain text and public key into a "),a("code",[t._v("Proof")]),t._v(" object.")])]),t._v(" "),a("p",[t._v("Here is an example of a valid proof object encoded using JSON:")]),t._v(" "),a("div",{staticClass:"language-json extra-class"},[a("pre",{pre:!0,attrs:{class:"language-json"}},[a("code",[a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"pub_key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"@type"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"/cosmos.crypto.secp256k1.PubKey"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"key"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"A58DXR/lXKVkIjLofXgST/OHi+pkOQbVIiOjnTy7Zoqo"')]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"signature"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"ecc6175e730917fb289d3a9f4e49a5630a44b42d972f481342f540e09def2ec5169780d85c4e060d52cc3ffb3d677745a4d56cd385760735bc6db0f1816713be"')]),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v("\n  "),a("span",{pre:!0,attrs:{class:"token property"}},[t._v('"plain_text"')]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v(":")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('"cosmos15uc89vnzufu5kuhhsxdkltt38zfx8vcyggzwfm"')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("p",[t._v("Note that the "),a("code",[t._v("pub_key")]),t._v(" field must be encoded using Protobuf and must be compatible with the public key types that are currently supported by Cosmos. You can see a list of such key types "),a("a",{attrs:{href:"https://github.com/cosmos/cosmos-sdk/tree/master/proto/cosmos/crypto",target:"_blank",rel:"noopener noreferrer"}},[t._v("here"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("h3",{attrs:{id:"_2-create-the-link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-create-the-link"}},[t._v("#")]),t._v(" 2. Create the link")]),t._v(" "),a("p",[t._v("Once you have created the two ownership proofs, you are now ready to create the link. This can be done in two ways:")]),t._v(" "),a("ol",[a("li",[a("a",{attrs:{href:"#using-ibc"}},[t._v("Using IBC")])]),t._v(" "),a("li",[a("a",{attrs:{href:"#using-chain-message"}},[t._v("Usign a chain message")])])]),t._v(" "),a("h4",{attrs:{id:"using-ibc"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-ibc"}},[t._v("#")]),t._v(" Using IBC")]),t._v(" "),a("p",[t._v("This is the way that you want to use when integrating the Desmos connection from your chain."),a("br"),t._v("\nTo implement the IBC capability of connecting an external account to a Desmos profile, the "),a("code",[t._v("x/profiles")]),t._v(" module supports the following packet data type:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// LinkChainAccountPacketData defines the object that should be sent inside a")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MsgSendPacket when wanting to link an external chain to a Desmos profile")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// using IBC")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" LinkChainAccountPacketData "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SourceAddress contains the details of the external chain address")]),t._v("\n    SourceAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Any "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`protobuf:"bytes,1,opt,name=source_address,json=sourceAddress,proto3" json:"source_address,omitempty" yaml:"source_address"`')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SourceProof represents the proof of ownership of the source address")]),t._v("\n    SourceProof Proof "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`protobuf:"bytes,2,opt,name=source_proof,json=sourceProof,proto3" json:"source_proof" yaml:"source_proof"`')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// SourceChainConfig contains the details of the source chain")]),t._v("\n    SourceChainConfig ChainConfig "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`protobuf:"bytes,3,opt,name=source_chain_config,json=sourceChainConfig,proto3" json:"source_chain_config" yaml:"source_chain_config"`')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DestinationAddress represents the Desmos address of the profile that should")]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// be linked with the external account")]),t._v("\n    DestinationAddress "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`protobuf:"bytes,4,opt,name=destination_address,json=destinationAddress,proto3" json:"destination_address,omitempty" yaml:"destination_address"`')]),t._v("\n    "),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// DestinationProof contains the proof of ownership of the DestinationAddress")]),t._v("\n    DestinationProof Proof "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`protobuf:"bytes,5,opt,name=destination_proof,json=destinationProof,proto3" json:"destination_proof" yaml:"destination_proof"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("SourceAddress")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("AddressData")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Contains the details of the external address to be linked")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("SourceProof")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("Proof")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Contains the data to verify the ownership of the external address")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("SourceChainConfig")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("ChainConfig")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Contains the data of the external chain to be linked")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("DestinationAddress")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Desmos address of the profile to which link the external address")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("DestinationProof")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("Proof")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Proof of ownership of the Desmos profile")])])])]),t._v(" "),a("p",[t._v("Note that the "),a("code",[t._v("SourceAddress")]),t._v(" field must one of the currently supported types:")]),t._v(" "),a("ul",[a("li",[a("code",[t._v("Base58Address")]),t._v(" if the external address is represented by the Base58 encoded public key of the account")]),t._v(" "),a("li",[a("code",[t._v("Bech32Address")]),t._v(" if the external address is Bech 32 encoded")])]),t._v(" "),a("p",[t._v("The overall view is the following:")]),t._v(" "),a("img",{attrs:{src:t.$withBase("/assets/desmos-chain-link-ibc.png")}}),t._v(" "),a("h4",{attrs:{id:"using-a-chain-message"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-a-chain-message"}},[t._v("#")]),t._v(" Using a chain message")]),t._v(" "),a("p",[t._v("In the case you don't want or cannot integrate IBC into your project, you can always rely on "),a("code",[t._v("MsgLinkChainAccount")]),t._v(" to link an external profile to a Desmos profile:")]),t._v(" "),a("div",{staticClass:"language-go extra-class"},[a("pre",{pre:!0,attrs:{class:"language-go"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// MsgLinkChainAccount represents a message to link an account to a profile.")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("type")]),t._v(" MsgLinkChainAccount "),a("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("struct")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ChainAddress contains the details of the external chain address to be")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// linked")]),t._v("\n\tChainAddress "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("*")]),t._v("types"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Any "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`protobuf:"bytes,1,opt,name=chain_address,json=chainAddress,proto3" json:"chain_address,omitempty" yaml:"source_address"`')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Proof contains the proof of ownership of the external chain address")]),t._v("\n\tProof Proof "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`protobuf:"bytes,2,opt,name=proof,proto3" json:"proof" yaml:"source_proof"`')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// ChainConfig contains the configuration of the external chain")]),t._v("\n\tChainConfig ChainConfig "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`protobuf:"bytes,3,opt,name=chain_config,json=chainConfig,proto3" json:"chain_config" yaml:"source_chain_config"`')]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Signer represents the Desmos address associated with the")]),t._v("\n\t"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// profile to which link the external account")]),t._v("\n\tSigner "),a("span",{pre:!0,attrs:{class:"token builtin"}},[t._v("string")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token string"}},[t._v('`protobuf:"bytes,4,opt,name=signer,proto3" json:"signer,omitempty" yaml:"signer"`')]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),a("table",[a("thead",[a("tr",[a("th",{staticStyle:{"text-align":"center"}},[t._v("Field")]),t._v(" "),a("th",{staticStyle:{"text-align":"center"}},[t._v("Type")]),t._v(" "),a("th",{staticStyle:{"text-align":"left"}},[t._v("Description")])])]),t._v(" "),a("tbody",[a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("ChainAddress")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("AddressData")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Contains the details of the external address to be linked")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("Proof")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("Proof")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Contains the data to verify the ownership of the external address")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("ChainConfig")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("ChainConfig")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Contains the data of the external chain to be linked")])]),t._v(" "),a("tr",[a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("Signer")])]),t._v(" "),a("td",{staticStyle:{"text-align":"center"}},[a("code",[t._v("string")])]),t._v(" "),a("td",{staticStyle:{"text-align":"left"}},[t._v("Desmos address of the profile to which link the external address, which must be the signer of the transaction")])])])]),t._v(" "),a("h5",{attrs:{id:"using-the-cli"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#using-the-cli"}},[t._v("#")]),t._v(" Using the CLI")]),t._v(" "),a("p",[t._v("Note that you can compose this message using the "),a("code",[t._v("desmos tx profiles link-chain")]),t._v(" command.")])])}),[],!1,null,null,null);e.default=n.exports}}]);