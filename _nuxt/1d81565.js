(window.webpackJsonp=window.webpackJsonp||[]).push([[15],{350:function(t,e,n){"use strict";n.r(e);var r=n(9),c=(n(39),n(69),n(51),n(35),n(10),{name:"TuxTags",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function e(){var n,r,c,l,o,f,d,v;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,r=t.params,e.next=3,n("notes").where({draft:!1}).only(["tags","title"]).fetch();case 3:for(d in c=e.sent,l=[].concat.apply([],c.map((function(t){return t.tags}))),o={},f=function(t){o[l[t]]=l.filter((function(e){return e===l[t]})).length},l)f(d);return e.next=10,n("notes").where({tags:{$contains:r.slug},draft:!1}).only(["tags","title","slug"]).fetch();case 10:return v=e.sent,e.abrupt("return",{filteredPosts:v,countedTags:o});case 12:case"end":return e.stop()}}),e)})))()},computed:{paramSlug:function(){return this.$route.params.slug}}}),l=n(34),component=Object(l.a)(c,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"flex items-stretch mb-4 capitalize"},[n("div",{staticClass:"mr-2"},[n("nuxt-link",{staticClass:"mr-1 hover:underline text-blue-500",attrs:{to:"/tags"}},[t._v("\n        Tags\n      ")]),t._v(" "),n("span",{staticClass:"text-gray-400"},[t._v("\n        »\n      ")])],1),t._v(" "),n("div",{staticClass:"text-gray-400"},[t._v("\n      "+t._s(t.paramSlug)+"\n    ")])]),t._v(" "),n("div",{staticClass:"grid grid-cols-6"},[n("div",{staticClass:"col-span-6 text-gray-400"},t._l(t.filteredPosts,(function(e,r){return n("div",{key:r},[n("nuxt-link",{staticClass:"hover:underline",attrs:{to:"/notes/"+e.slug}},[t._v("\n          "+t._s(e.title)+"\n        ")])],1)})),0)])])}),[],!1,null,null,null);e.default=component.exports}}]);