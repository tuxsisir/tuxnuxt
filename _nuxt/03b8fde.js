(window.webpackJsonp=window.webpackJsonp||[]).push([[7],{302:function(t,n,e){var content=e(312);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(56).default)("a2f37322",content,!0,{sourceMap:!1})},311:function(t,n,e){"use strict";e(302)},312:function(t,n,e){var r=e(55)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.custom-hr{\n  margin:.4rem 0!important\n}\n.article-heading{\n  margin:.75rem 0 0!important\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},336:function(t,n,e){"use strict";e.r(n);var r=e(25),o=e(8),c=(e(40),e(35),{asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function n(){var e,o,c,l,d,v,f;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,o=t.params,n.next=3,e("notes",o.slug).fetch();case 3:return c=n.sent,n.next=6,e("notes").only(["title","description"]).sortBy("title","asc").surround(o.slug).fetch();case 6:return l=n.sent,d=Object(r.a)(l,2),v=d[0],f=d[1],n.abrupt("return",{post:c,prev:v,next:f});case 11:case"end":return n.stop()}}),n)})))()},methods:{formatDate:function(t){return new Date(t).toISOString().slice(0,10)}}}),l=(e(311),e(29)),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"grid grid-cols-8 gap-8"},[e("div",{staticClass:"md:col-span-2 col-span-8"},[e("h3",{staticClass:"font-bold mt-3"},[t._v("\n      Table of Contents\n    ")]),t._v(" "),t.post.toc.length>0?e("div",t._l(t.post.toc,(function(header,n){return e("div",{key:n,staticClass:"flex"},[e("div",{staticClass:"mr-2"},[t._v("»")]),t._v(" "),e("div",[e("a",{staticClass:"hover:underline text-slate-400",attrs:{href:"#"+header.id}},[t._v(t._s(header.text))])])])})),0):e("div",{staticClass:"my-3"},[t._v("\n      Niente!\n    ")])]),t._v(" "),e("div",{staticClass:"md:col-span-6 col-span-8"},[e("article",{staticClass:"prose max-w-none"},[e("h3",{staticClass:"article-heading font-bold"},[t._v("\n        "+t._s(t.post.title)+"\n      ")]),t._v(" "),e("span",{staticClass:"text-xs"},[e("font-awesome-icon",{attrs:{icon:["fa","calendar"]}}),t._v(" "+t._s(t.formatDate(t.post.date)))],1),t._v(" | "),e("span",{staticClass:"text-xs"},[t._v(t._s(t.post.title))]),t._v(" "),e("hr",{staticClass:"custom-hr"}),t._v(" "),e("nuxt-content",{attrs:{document:t.post}})],1)])])}),[],!1,null,null,null);n.default=component.exports}}]);