(window.webpackJsonp=window.webpackJsonp||[]).push([[46],{401:function(t,s,a){"use strict";a.r(s);var e=a(42),n=Object(e.a)({},(function(){var t=this,s=t.$createElement,a=t._self._c||s;return a("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[a("h1",{attrs:{id:"installing-rocksdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#installing-rocksdb"}},[t._v("#")]),t._v(" Installing RocksDB")]),t._v(" "),a("p",[t._v("By default, Desmos uses "),a("a",{attrs:{href:"https://github.com/google/leveldb",target:"_blank",rel:"noopener noreferrer"}},[t._v("LevelDB"),a("OutboundLink")],1),t._v(" as its database backend engine. However, since version "),a("code",[t._v("v0.6.0")]),t._v(" we've also added the possibility of optionally using "),a("a",{attrs:{href:"https://github.com/facebook/rocksdb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Facebook's RocksDB"),a("OutboundLink")],1),t._v(", which, although still being experimental, is know to be faster and could lead to lower syncing times. If you want to try out RocksDB (which we suggest you to do) you can take a look at our "),a("RouterLink",{attrs:{to:"/fullnode/rocksdb-installation.html"}},[t._v("RocksDB installation guide")]),t._v(" before proceeding further.")],1),t._v(" "),a("p",[t._v("The following guide allows you to install "),a("a",{attrs:{href:"https://github.com/facebook/rocksdb",target:"_blank",rel:"noopener noreferrer"}},[t._v("Facebook's RocksDB"),a("OutboundLink")],1),t._v(" inside your local machine, so that you will be able to use as Desmos' backend engine for better performances.")]),t._v(" "),a("h2",{attrs:{id:"_1-install-the-dependencies"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_1-install-the-dependencies"}},[t._v("#")]),t._v(" 1. Install the dependencies")]),t._v(" "),a("p",[t._v("The first thing to do is to install all the dependencies for RocksDB. Following you will find the installation guide for both Ubuntu and MacOS. If you have a different operative system you can refer to the "),a("a",{attrs:{href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("official installation guide"),a("OutboundLink")],1)]),t._v(" "),a("tabs",[a("tab",{attrs:{name:"Linux"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("apt-get")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" -y "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  libgflags-dev "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  libsnappy-dev "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  zlib1g-dev "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  libbz2-dev "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  libzstd-dev "),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("\\")]),t._v("\n  liblz4-dev\n")])])])]),t._v(" "),a("tab",{attrs:{name:"MacOS"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Only needed if you are first time developing of your machine")]),t._v("\nxcode-select --install\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install the dependencies")]),t._v("\nbrew tap homebrew/versions"),a("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(";")]),t._v(" brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" gcc48 --use-llvm\n")])])])])],1),t._v(" "),a("h2",{attrs:{id:"_2-install-rocksdb"}},[a("a",{staticClass:"header-anchor",attrs:{href:"#_2-install-rocksdb"}},[t._v("#")]),t._v(" 2. Install RocksDB")]),t._v(" "),a("p",[t._v("After having installed the dependencies, you need to install RocksDB. Again, following you will find the Linux and MacOS instructions. If you are running another OS, please refer to the "),a("a",{attrs:{href:"https://github.com/facebook/rocksdb/blob/master/INSTALL.md",target:"_blank",rel:"noopener noreferrer"}},[t._v("official documentation"),a("OutboundLink")],1),t._v(".")]),t._v(" "),a("tabs",[a("tab",{attrs:{name:"Linux"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Clone RocksDB")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("git")]),t._v(" clone https://github.com/facebook/rocksdb.git "),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("&&")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token builtin class-name"}},[t._v("cd")]),t._v(" rocksdb\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Build RocksDB")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DEBUG_LEVEL")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),a("span",{pre:!0,attrs:{class:"token number"}},[t._v("0")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" shared_lib\n\n"),a("span",{pre:!0,attrs:{class:"token comment"}},[t._v("# Install RocksDB so that Desmos can access it")]),t._v("\n"),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("sudo")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" install-shared\n")])])])]),t._v(" "),a("tab",{attrs:{name:"MacOS"}},[a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[t._v("brew "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" rocksdb\n")])])])])],1),t._v(" "),a("p",[t._v("Once the installation has finished, you will be able to compile Desmos using the following command:")]),t._v(" "),a("div",{staticClass:"language-bash extra-class"},[a("pre",{pre:!0,attrs:{class:"language-bash"}},[a("code",[a("span",{pre:!0,attrs:{class:"token function"}},[t._v("make")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),a("span",{pre:!0,attrs:{class:"token assign-left variable"}},[t._v("DB_BACKEND")]),a("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v("rocksdb\n")])])])],1)}),[],!1,null,null,null);s.default=n.exports}}]);