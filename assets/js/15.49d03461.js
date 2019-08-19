(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{196:function(t,n,e){"use strict";e.r(n);var a=e(0),s=Object(a.a)({},function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("ContentSlotsDistributor",{attrs:{"slot-key":t.$parent.slotKey}},[e("h1",{attrs:{id:"plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#plugins","aria-hidden":"true"}},[t._v("#")]),t._v(" Plugins")]),t._v(" "),e("p",[t._v("You may add additional features to the Vuex ORM through plugins. Plugins usually add global-level functionality to Vuex ORM. Vuex ORM plugin works very similar to "),e("a",{attrs:{href:"https://vuex.vuejs.org/en/plugins.html",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vue Plugin"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("h2",{attrs:{id:"available-plugins"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#available-plugins","aria-hidden":"true"}},[t._v("#")]),t._v(" Available Plugins")]),t._v(" "),e("p",[t._v("Here is the list of available plugins.")]),t._v(" "),e("ul",[e("li",[e("a",{attrs:{href:"https://github.com/vuex-orm/plugin-axios",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex ORM Axios"),e("OutboundLink")],1),t._v(" – A plugin to sync the store against a RESTful API.")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuex-orm/plugin-graphql",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex ORM GraphQL"),e("OutboundLink")],1),t._v(" – A plugin to sync the store against a "),e("a",{attrs:{href:"https://graphql.org",target:"_blank",rel:"noopener noreferrer"}},[t._v("GraphQL"),e("OutboundLink")],1),t._v(" API.")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuex-orm/plugin-search",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex ORM Search"),e("OutboundLink")],1),t._v(" – This plugin adds a search() method to filter records using fuzzy search logic from the "),e("a",{attrs:{href:"http://fusejs.io",target:"_blank",rel:"noopener noreferrer"}},[t._v("Fuse.js"),e("OutboundLink")],1),t._v(".")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuex-orm/plugin-change-flags",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex ORM Change Flags"),e("OutboundLink")],1),t._v(" - Vuex ORM plugin for adding IsDirty / IsNew flags to model entities.")]),t._v(" "),e("li",[e("a",{attrs:{href:"https://github.com/vuex-orm/plugin-soft-delete",target:"_blank",rel:"noopener noreferrer"}},[t._v("Vuex ORM Soft Delete"),e("OutboundLink")],1),t._v(" – Vuex ORM plugin for adding soft delete feature to model entities.")])]),t._v(" "),e("h2",{attrs:{id:"writing-a-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#writing-a-plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" Writing a Plugin")]),t._v(" "),e("p",[t._v("A Vuex ORM plugin should be an object that exposes an "),e("code",[t._v("install")]),t._v(" method. The method will be called with the Vuex ORM components such as Model, Repo, Query and such, as the first argument, along with possible options.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("const")]),t._v(" plugin "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// `components` contains Vuex ORM objects such as Model and Query.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// The plugin author can then extend those objects to add")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// whatever features it needs.")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("install")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token parameter"}},[t._v("components"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" options")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add global (static) method or property.")]),t._v("\n    components"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("Model"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("globalMethod")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Logic...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n\n    "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Add an instance method or property.")]),t._v("\n    components"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token class-name"}},[t._v("Query")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),t._v("prototype"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function-variable function"}},[t._v("instanceMethod")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token operator"}},[t._v("=")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("function")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v("\n      "),e("span",{pre:!0,attrs:{class:"token comment"}},[t._v("// Logic...")]),t._v("\n    "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n  "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),t._v("\n")])])]),e("h3",{attrs:{id:"extendable-components"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#extendable-components","aria-hidden":"true"}},[t._v("#")]),t._v(" Extendable Components")]),t._v(" "),e("p",[t._v("The following components are included within the "),e("code",[t._v("components")]),t._v(" argument.")]),t._v(" "),e("ul",[e("li",[t._v("Model")]),t._v(" "),e("li",[t._v("Query")]),t._v(" "),e("li",[t._v("Attribute")]),t._v(" "),e("li",[t._v("Type")]),t._v(" "),e("li",[t._v("Attr")]),t._v(" "),e("li",[t._v("String")]),t._v(" "),e("li",[t._v("Number")]),t._v(" "),e("li",[t._v("Boolean")]),t._v(" "),e("li",[t._v("Increment")]),t._v(" "),e("li",[t._v("Relation")]),t._v(" "),e("li",[t._v("HasOne")]),t._v(" "),e("li",[t._v("BelongsTo")]),t._v(" "),e("li",[t._v("HasMany")]),t._v(" "),e("li",[t._v("HasManyBy")]),t._v(" "),e("li",[t._v("BelongsToMany")]),t._v(" "),e("li",[t._v("HasManyThrough")]),t._v(" "),e("li",[t._v("MorphTo")]),t._v(" "),e("li",[t._v("MorphOne")]),t._v(" "),e("li",[t._v("MorphMany")]),t._v(" "),e("li",[t._v("MorphToMany")]),t._v(" "),e("li",[t._v("MorphedByMany")]),t._v(" "),e("li",[t._v("Getters")]),t._v(" "),e("li",[t._v("RootGetters")]),t._v(" "),e("li",[t._v("Actions")]),t._v(" "),e("li",[t._v("RootActions")]),t._v(" "),e("li",[t._v("RootMutations")])]),t._v(" "),e("h2",{attrs:{id:"using-a-plugin"}},[e("a",{staticClass:"header-anchor",attrs:{href:"#using-a-plugin","aria-hidden":"true"}},[t._v("#")]),t._v(" Using a Plugin")]),t._v(" "),e("p",[t._v("Use plugins by calling the VuexORM.use() method.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" VuexORM "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'@vuex-orm/core'")]),t._v("\n"),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("import")]),t._v(" plugin "),e("span",{pre:!0,attrs:{class:"token keyword"}},[t._v("from")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token string"}},[t._v("'vuex-orm-plugin'")]),t._v("\n\nVuexORM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])]),e("p",[t._v("You can optionally pass in some options too.")]),t._v(" "),e("div",{staticClass:"language-js extra-class"},[e("pre",{pre:!0,attrs:{class:"language-js"}},[e("code",[t._v("VuexORM"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(".")]),e("span",{pre:!0,attrs:{class:"token function"}},[t._v("use")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("(")]),t._v("plugin"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(",")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("{")]),t._v(" someOption"),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(":")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token boolean"}},[t._v("true")]),t._v(" "),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v("}")]),e("span",{pre:!0,attrs:{class:"token punctuation"}},[t._v(")")]),t._v("\n")])])])])},[],!1,null,null,null);n.default=s.exports}}]);