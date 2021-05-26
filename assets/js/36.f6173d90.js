(window.webpackJsonp=window.webpackJsonp||[]).push([[36],{391:function(e,s,a){"use strict";a.r(s);var t=a(42),o=Object(t.a)({},(function(){var e=this,s=e.$createElement,a=e._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":e.$parent.slotKey}},[a("h1",{attrs:{id:"query-a-post"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-a-post"}},[e._v("#")]),e._v(" Query a post")]),e._v(" "),a("p",[e._v("This query endpoint allows you to retrieve the details of a single post having its id.")]),e._v(" "),a("p",[a("strong",[e._v("CLI")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("desmos query posts post "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("id"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Example")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# desmos query posts post a4469741bb0c0622627810082a5f2e4e54fbbb888f25a4771a5eebc697d30cfc")]),e._v("\n")])])]),a("p",[a("strong",[e._v("REST")])]),e._v(" "),a("div",{staticClass:"language- extra-class"},[a("pre",{pre:!0,attrs:{class:"language-text"}},[a("code",[e._v("/posts/{postID}\n\n# Example\n# curl http://lcd.morpheus.desmos.network:1317/posts/a4469741bb0c0622627810082a5f2e4e54fbbb888f25a4771a5eebc697d30cfc\n")])])]),a("h1",{attrs:{id:"query-the-stored-posts-with-filters"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#query-the-stored-posts-with-filters"}},[e._v("#")]),e._v(" Query the stored posts with filters")]),e._v(" "),a("p",[e._v("This query endpoint allows you to get all the stored posts that match one or more filters.")]),e._v(" "),a("p",[a("strong",[e._v("CLI")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("desmos query posts "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("[")]),e._v("--flags"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[e._v("]")]),e._v("\n")])])]),a("p",[e._v("Available flags:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("--parent-id")]),e._v(" (e.g. "),a("code",[e._v("--parent-id=a4469741bb0c0622627810082a5f2e4e54fbbb888f25a4771a5eebc697d30cfc")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("--creation-time")]),e._v(" (e.g. "),a("code",[e._v("--creation-time=2020-01-01T12:00:00")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("--subspace")]),e._v(" (e.g. "),a("code",[e._v("--subspace=desmos")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("--creator")]),e._v(" (e.g. "),a("code",[e._v("--creator=desmos1w3fe8zq5jrxd4nz49hllg75sw7m24qyc7tnaax")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("--hashtag")]),e._v(" (e.g. "),a("code",[e._v("--hashtag=#desmos")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("--sort-by")]),e._v(" (e.g. "),a("code",[e._v("--sort-by=created")]),e._v(")"),a("br"),e._v("\nAccepted values:\n"),a("ul",[a("li",[a("code",[e._v("created")])]),e._v(" "),a("li",[a("code",[e._v("id")]),e._v(" (default)")])])]),e._v(" "),a("li",[a("code",[e._v("--sort-order")]),e._v(" (e.g. "),a("code",[e._v("--sort-order=descending")]),e._v(")"),a("br"),e._v("\nAccepted values:\n"),a("ul",[a("li",[a("code",[e._v("ascending")])]),e._v(" "),a("li",[a("code",[e._v("descending")])])])]),e._v(" "),a("li",[a("code",[e._v("--page")]),e._v(" (e.g. "),a("code",[e._v("--page=1")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("--limit")]),e._v(" (e.g "),a("code",[e._v("--limit=10")]),e._v(")")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Example")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# desmos query posts --parent-id=a4469741bb0c0622627810082a5f2e4e54fbbb888f25a4771a5eebc697d30cfc --disable-comments=false --subspace=desmos --sort=created --sort-order=descending")]),e._v("\n")])])]),a("p",[a("strong",[e._v("REST")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[e._v("/posts\n")])])]),a("p",[e._v("Available parameters:")]),e._v(" "),a("ul",[a("li",[a("code",[e._v("parent_id")]),e._v(" (e.g. "),a("code",[e._v("parent_id=a4469741bb0c0622627810082a5f2e4e54fbbb888f25a4771a5eebc697d30cfc")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("creation_time")]),e._v(" (e.g. "),a("code",[e._v("creation_time=2020-01-01T12:00:00")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("subspace")]),e._v(" (e.g. "),a("code",[e._v("subspace=desmos")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("creator")]),e._v(" (e.g. "),a("code",[e._v("creator=desmos1w3fe8zq5jrxd4nz49hllg75sw7m24qyc7tnaax")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("hashtags")]),e._v(" (e.g. "),a("code",[e._v("hashtag=#desmos")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("sort_by")]),e._v(" (e.g. "),a("code",[e._v("sort_by=created")]),e._v(")")]),e._v(" "),a("li",[a("code",[e._v("sort_order")]),e._v(" (e.g. "),a("code",[e._v("sort_order=descending")]),e._v(")")])]),e._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# Example")]),e._v("\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[e._v("# curl http://lcd.morpheus.desmos.network:1317/posts?parent_id=a4469741bb0c0622627810082a5f2e4e54fbbb888f25a4771a5eebc697d30cfc&disable_comments=true&subspace=desmos&sort_by=created&sort_order=descending")]),e._v("\n\n")])])])])}),[],!1,null,null,null);s.default=o.exports}}]);