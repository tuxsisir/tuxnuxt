(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{335:function(t,n,e){"use strict";e.r(n);var r=e(8),c=(e(35),e(66),e(49),e(36),e(10),{name:"TuxTags",asyncData:function(t){return Object(r.a)(regeneratorRuntime.mark((function n(){var e,r,c,l,o,d;return regeneratorRuntime.wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return e=t.$content,n.next=3,e("notes").where({draft:!1}).only(["tags"]).fetch();case 3:for(d in r=n.sent,c=[].concat.apply([],r.map((function(t){return t.tags}))),l={},o=function(t){l[c[t]]=c.filter((function(n){return n===c[t]})).length},c)o(d);return n.abrupt("return",{allTags:r,countedTags:l});case 9:case"end":return n.stop()}}),n)})))()}}),l=e(29),component=Object(l.a)(c,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("h4",{staticClass:"text-3xl text-center text-gray-400"},[t._v("\n    Tag Cloud\n  ")]),t._v(" "),e("hr",{staticClass:"my-4"}),t._v(" "),e("div",{staticClass:"grid grid-cols-6 gap-4"},[e("div",{staticClass:"md:col-start-2 col-start-1 md:col-span-4 col-span-6"},[e("div",{staticClass:"mt-5 text-center"},t._l(t.countedTags,(function(n,r,c){return e("span",{key:c,staticClass:"text-xs inline-block py-1 px-2 rounded text-gray-400\n      last:mr-0 mr-1 mb-10",style:1!==n?"font-size:"+12*n+"px":"font-size: 30px;"},[e("nuxt-link",{staticClass:"hover:underline",attrs:{to:"/tags/"+r}},[t._v("#"+t._s(r)),e("span",{staticClass:"text-sm"},[t._v("["+t._s(n)+"]")])])],1)})),0)])])])}),[],!1,null,null,null);n.default=component.exports}}]);