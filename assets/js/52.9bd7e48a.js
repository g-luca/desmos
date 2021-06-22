(window.webpackJsonp=window.webpackJsonp||[]).push([[52],{407:function(e,t,a){"use strict";a.r(t);var r=a(42),s=Object(r.a)({},(function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"application-link"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-link"}},[e._v("#")]),e._v(" Application link")]),e._v(" "),a("p",[e._v("An application link (abbr. "),a("em",[e._v("app link")]),e._v(") represents a link to an external (and possibly centralized) application. These links are created by the user and their validity is checked using a multi-step verification process described inside the "),a("a",{attrs:{href:"https://github.com/desmos-labs/themis",target:"_blank",rel:"noopener noreferrer"}},[a("em",[e._v('"Themis"')]),e._v(" repository"),a("OutboundLink")],1),e._v(".")]),e._v(" "),a("h2",{attrs:{id:"user"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#user"}},[e._v("#")]),e._v(" "),a("code",[e._v("User")])]),e._v(" "),a("p",[e._v("Address of the Desmos profile to which the link is associated.")]),e._v(" "),a("h2",{attrs:{id:"data"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#data"}},[e._v("#")]),e._v(" "),a("code",[e._v("Data")])]),e._v(" "),a("p",[e._v("Object that contains the details of the link.")]),e._v(" "),a("h3",{attrs:{id:"application"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application"}},[e._v("#")]),e._v(" "),a("code",[e._v("Application")])]),e._v(" "),a("p",[e._v("Name of the application to which the link refers to (eg. "),a("code",[e._v("twitter")]),e._v(", "),a("code",[e._v("github")]),e._v(", "),a("code",[e._v("reddit")]),e._v(", etc).")]),e._v(" "),a("h3",{attrs:{id:"username"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#username"}},[e._v("#")]),e._v(" "),a("code",[e._v("Username")])]),e._v(" "),a("p",[e._v("Identifier of the application account which the link refers to (eg. Twitter username, GitHub profile, Reddit username, etc).")]),e._v(" "),a("h2",{attrs:{id:"state"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#state"}},[e._v("#")]),e._v(" "),a("code",[e._v("State")])]),e._v(" "),a("p",[e._v("Representation of the current state of the link. There can be five different states in which a link can be:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("APPLICATION_LINK_STATE_INITIALIZED_UNSPECIFIED")]),e._v(" if the link has just been created, and it still needs to be processed;")]),e._v(" "),a("li",[a("code",[e._v("APPLICATION_LINK_STATE_VERIFICATION_STARTED")]),e._v(" if the verification process has started;")]),e._v(" "),a("li",[a("code",[e._v("APPLICATION_LINK_STATE_VERIFICATION_ERROR")]),e._v(" if the verification process ended with an error;")]),e._v(" "),a("li",[a("code",[e._v("APPLICATION_LINK_STATE_VERIFICATION_SUCCESS")]),e._v(" if the verification process ended with success;")]),e._v(" "),a("li",[a("code",[e._v("APPLICATION_LINK_STATE_TIMED_OUT")]),e._v(" if the verification process expired due to a timeout.")])]),e._v(" "),a("h2",{attrs:{id:"oraclerequest"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oraclerequest"}},[e._v("#")]),e._v(" "),a("code",[e._v("OracleRequest")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("OracleRequest")]),e._v(" field contains all the data that has been sent to the oracle script in order to verify the authenticity of the link.")]),e._v(" "),a("h3",{attrs:{id:"id"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#id"}},[e._v("#")]),e._v(" "),a("code",[e._v("ID")])]),e._v(" "),a("p",[e._v("This is the unique id of the request that has been made to verify the link.")]),e._v(" "),a("h3",{attrs:{id:"oraclescriptid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#oraclescriptid"}},[e._v("#")]),e._v(" "),a("code",[e._v("OracleScriptID")])]),e._v(" "),a("p",[e._v("Unique id of the script that has been called to verify the authenticity of the link.")]),e._v(" "),a("h3",{attrs:{id:"calldata"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calldata"}},[e._v("#")]),e._v(" "),a("code",[e._v("CallData")])]),e._v(" "),a("p",[e._v("Contains the details of the data that will be used to call the oracle script.")]),e._v(" "),a("h4",{attrs:{id:"application-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#application-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("Application")])]),e._v(" "),a("p",[e._v("Name of the application for which the link is valid (eg. "),a("code",[e._v("twitter")]),e._v(", "),a("code",[e._v("github")]),e._v(", "),a("code",[e._v("reddit")]),e._v(", etc).")]),e._v(" "),a("h4",{attrs:{id:"calldata-2"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#calldata-2"}},[e._v("#")]),e._v(" "),a("code",[e._v("CallData")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("CallData")]),e._v(" field represents the hex-encoded data that will be given to the data source in order to fetch and verify the validity of the link.")]),e._v(" "),a("h3",{attrs:{id:"clientid"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#clientid"}},[e._v("#")]),e._v(" "),a("code",[e._v("ClientID")])]),e._v(" "),a("p",[e._v("ID of the client that has performed the request.")]),e._v(" "),a("h2",{attrs:{id:"result"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#result"}},[e._v("#")]),e._v(" "),a("code",[e._v("Result")])]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Result")]),e._v(" field contains the effective result of the verification process. This is set only if the link state is either "),a("code",[e._v("APPLICATION_LINK_STATE_VERIFICATION_SUCCESS")]),e._v(" or "),a("code",[e._v("APPLICATION_LINK_STATE_VERIFICATION_ERROR")]),e._v(".")]),e._v(" "),a("p",[e._v("The "),a("code",[e._v("Result")]),e._v(" field can be of two types:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("Result_Success")])]),e._v(" "),a("li",[a("code",[e._v("Result_Error")])])]),e._v(" "),a("h3",{attrs:{id:"result-success"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#result-success"}},[e._v("#")]),e._v(" "),a("code",[e._v("Result_Success")])]),e._v(" "),a("p",[e._v("Represents a successful result. It contains two fields.")]),e._v(" "),a("h4",{attrs:{id:"value"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#value"}},[e._v("#")]),e._v(" "),a("code",[e._v("Value")])]),e._v(" "),a("p",[e._v("Plain text value that has been signed from the user with their Desmos private key to prove the ownership of the Desmos profile.")]),e._v(" "),a("h4",{attrs:{id:"signature"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#signature"}},[e._v("#")]),e._v(" "),a("code",[e._v("Signature")])]),e._v(" "),a("p",[e._v("Hex-encoded result of the plain text value signature.")]),e._v(" "),a("h3",{attrs:{id:"result-error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#result-error"}},[e._v("#")]),e._v(" "),a("code",[e._v("Result_Error")])]),e._v(" "),a("p",[e._v("Identifies an error during the verification process. It contains only one field.")]),e._v(" "),a("h4",{attrs:{id:"error"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#error"}},[e._v("#")]),e._v(" "),a("code",[e._v("Error")])]),e._v(" "),a("p",[e._v("Represents the description of the error that has been emitted during the verification process.")]),e._v(" "),a("h2",{attrs:{id:"creationtime"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#creationtime"}},[e._v("#")]),e._v(" "),a("code",[e._v("CreationTime")])]),e._v(" "),a("p",[e._v("Contains the time at which the link has been created.")])])}),[],!1,null,null,null);t.default=s.exports}}]);