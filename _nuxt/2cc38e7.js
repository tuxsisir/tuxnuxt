(window.webpackJsonp=window.webpackJsonp||[]).push([[6,4],{299:function(t,e,n){"use strict";n.r(e);var r={name:"TuxAlert",props:{showAlert:{type:Boolean,required:!1,default:!1}}},l=n(29),component=Object(l.a)(r,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return t.showAlert?n("div",{staticClass:"bg-teal-100 border border-teal-400 text-teal-700 px-4 py-3 rounded relative",attrs:{role:"alert"}},[n("strong",{staticClass:"font-bold"},[t._v("WIP!")]),t._v(" "),n("span",{staticClass:"block sm:inline"},[t._v("You may see some hiccups here and there because I am working on it.")])]):t._e()}),[],!1,null,null,null);e.default=component.exports},302:function(t,e,n){var content=n(311);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,n(56).default)("bad8e090",content,!0,{sourceMap:!1})},309:function(t,e,n){t.exports=n.p+"img/sisir.ef54931.png"},310:function(t,e,n){"use strict";n(302)},311:function(t,e,n){var r=n(55)((function(i){return i[1]}));r.push([t.i,"/*purgecss start ignore*/\n.tux-underline{\n  -webkit-text-decoration:underline solid #efefef 4px;\n          text-decoration:underline solid #efefef 4px\n}\n\n/*purgecss end ignore*/",""]),r.locals={},t.exports=r},329:function(t,e,n){"use strict";n.r(e);var r=[function(){var t=this.$createElement,e=this._self._c||t;return e("div",{staticClass:"md:col-span-1 col-span-3"},[e("img",{staticClass:"object-cover w-fit mx-auto rounded-lg shadow-lg h-fit w-64 h-64",attrs:{src:n(309),alt:"Sunset in the mountains"}})])},function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("p",{staticClass:"mb-3 font-mono subpixel-antialiased leading-relaxed text-justify"},[t._v("\n          I am "),n("span",{staticClass:"font-bold"},[t._v("Sisir")]),t._v(", "),n("span",{staticClass:"tux-underline"},[t._v("Software Developer")]),t._v(" currently\n          based in Metro Vancouver, BC originally from Nepal. At present, I am going back to school to pursue degree in Data Analytics.\n        ")])}],l=n(8),o=(n(35),n(68),n(49),n(36),n(10),n(40),{name:"IndexPage",components:{TuxAlert:n(299).default},asyncData:function(t){return Object(l.a)(regeneratorRuntime.mark((function e(){var n,r,l,o,c,d,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,t.params,e.next=3,n("notes").sortBy("date","desc").fetch();case 3:return r=e.sent,e.next=6,n("notes").sortBy("date","desc").only(["tags"]).fetch();case 6:for(f in l=e.sent,o=[].concat.apply([],l.map((function(t){return t.tags}))),c={},d=function(t){c[o[t]]=o.filter((function(e){return e===o[t]})).length},o)d(f);return e.abrupt("return",{allArticles:r,countedTags:c});case 12:case"end":return e.stop()}}),e)})))()},data:function(){return{showAlert:!1,links:[{name:"About",to:"/about",external:!1},{name:"Playlists",to:"/playlists",external:!1},{name:"Photography",to:"/photography",external:!1},{name:"Vim Adventures",to:"https://vim-adventures.com/",external:!0},{name:"Covid Updates",to:"https://www.worldometers.info/coronavirus/country/canada/",external:!0}]}},methods:{formatDate:function(t){return new Date(t).toISOString().slice(0,10)}}}),c=(n(310),n(29)),component=Object(c.a)(o,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",[n("div",{staticClass:"grid grid-cols-6 gap-4"},[n("div",{staticClass:"col-start-2 col-span-4"},[n("tux-alert",{attrs:{"show-alert":t.showAlert}})],1)]),t._v(" "),n("div",{staticClass:"mb-5 text-center"},t._l(t.links,(function(link,e){return n("span",{key:"link.name"+e,staticClass:"py-1 px-2 rounded text-blue-500 last:mr-0 mr-1 mb-2"},[link.external?n("a",{staticClass:"lowercase italic underline",attrs:{href:link.to,target:"_blank"}},[t._v(t._s(link.name))]):n("nuxt-link",{staticClass:"lowercase underline",attrs:{to:link.to}},[t._v(t._s(link.name))])],1)})),0),t._v(" "),n("div",{staticClass:"grid grid-cols-3 my-4"},[t._m(0),t._v(" "),n("div",{staticClass:"md:col-span-2 col-span-3"},[n("div",{staticClass:"p-3 mb-3 text-justify"},[n("p",{staticClass:"font-mono subpixel-antialiased leading-relaxed mb-3"},[t._v("\n          Hi, Thank you for reaching out here.\n        ")]),t._v(" "),t._m(1),t._v(" "),n("p",{staticClass:"font-mono subpixel-antialiased leading-relaxed text-justify mb-3"},[t._v("\n          This is where I may put my jibber-jabber writings to references and see backs. I hope that the things here would be of help for you too.\n        ")]),t._v(" "),n("p",{staticClass:"font-mono subpixel-antialiased leading-relaxed text-justify"},[t._v("\n          If you want to know more about me,\n          "),n("nuxt-link",{staticClass:"text-blue-500",attrs:{to:"/about"}},[t._v("\n            click me.\n          ")])],1)])])]),t._v(" "),n("div",{staticClass:"px-3"},[n("div",{staticClass:"font-bold mb-0"},[t._v("\n      { Tags }\n    ")]),t._v(" "),n("div",{staticClass:"mb-3"},[t._v("\n      ======\n    ")]),t._v(" "),n("div",{staticClass:"mb-5 text-center"},t._l(t.countedTags,(function(e,r,l){return n("span",{key:l,staticClass:"text-xs inline-block py-1 px-2 rounded text-blue-500\n      last:mr-0 mr-1 mb-2",style:"font-size:"+(2+7*e)+"px"},[t._v("\n        #"+t._s(r)+"\n      ")])})),0),t._v(" "),n("div",{staticClass:"font-bold mb-0"},[t._v("\n      { Self Notes }\n    ")]),t._v(" "),n("div",{staticClass:"mb-3"},[t._v("\n      ===========\n    ")]),t._v(" "),t._l(t.allArticles,(function(article,e){return n("div",{key:e},[n("div",{staticClass:"flex"},[n("div",{staticClass:"w-32"},[t._v("\n          [ "+t._s(t.formatDate(article.date))+" ]\n        ")]),t._v(" "),n("div",{staticClass:"hover:text-white hover:bg-blue-500 text-blue-500 font-bold"},[n("nuxt-link",{attrs:{to:"/notes/"+article.slug}},[t._v("\n            "+t._s(article.title)+"\n          ")])],1)])])}))],2)])}),r,!1,null,null,null);e.default=component.exports;installComponents(component,{TuxAlert:n(299).default})}}]);