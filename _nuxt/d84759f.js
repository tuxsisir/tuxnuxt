(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{143:function(t,n,e){"use strict";e.r(n);var r={name:"AppHeader"},o=e(34),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("header",{staticClass:"flex justify-between items-center border-b-2 border-gray-300 dark:border-gray-700 mb-3 transition ease-linear duration-200"},[e("div",[e("h1",{staticClass:"my-3 text-3xl font-thin"},[e("nuxt-link",{staticClass:"text-blue-500",attrs:{to:"/"}},[t._v("\n        tuxsisir\n      ")])],1)]),t._v(" "),e("hr"),t._v(" "),e("div",["dark"==t.$colorMode.value?e("a",{staticClass:"float-right mx-2",on:{click:function(n){t.$colorMode.preference="light"}}},[e("font-awesome-icon",{staticClass:"fa-xl text-gray-700 dark:text-amber-300",attrs:{icon:["fa","bolt"]}})],1):e("a",{staticClass:"float-right mx-2",on:{click:function(n){t.$colorMode.preference="dark"}}},[e("font-awesome-icon",{staticClass:"fa-xl text-purple-700 dark:text-gray-600",attrs:{icon:["fa","moon"]}})],1),t._v(" "),e("a",{staticClass:"float-right mx-2",attrs:{href:"mailto:samratsisir294@gmail.com"}},[e("font-awesome-icon",{staticClass:"fa-xl text-gray-700 dark:text-gray-600",attrs:{icon:["fa","envelope"]}})],1),t._v(" "),e("a",{staticClass:"float-right mx-2",attrs:{href:"https://linkedin.com/in/sisir-ghimire-chettri"}},[e("font-awesome-icon",{staticClass:"fa-xl text-gray-700 dark:text-gray-600",attrs:{icon:["fab","linkedin"]}})],1),t._v(" "),e("a",{staticClass:"float-right mx-2",attrs:{href:"https://github.com/tuxsisir"}},[e("font-awesome-icon",{staticClass:"fa-xl text-gray-700 dark:text-gray-600",attrs:{icon:["fab","github"]}})],1)])])}),[],!1,null,null,null);n.default=component.exports;installComponents(component,{Header:e(143).default})},149:function(t,n,e){"use strict";var r=e(2),o=e(31),l=e(217),c=e(89),f=e(150);o.a.autoAddCss=!1,o.c.add(c.c,f.a,f.b,c.b,c.d,c.a),r.a.component("FontAwesomeIcon",l.a)},220:function(t,n,e){"use strict";var r=e(143),o=e(221),l={name:"DefaultLayout",components:{AppHeader:r.default,AppFooter:o.default}},c=e(34),component=Object(c.a)(l,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",{staticClass:"min-h-screen bg-light dark:bg-gray-900 transition ease-linear duration-200"},[e("div",{staticClass:"container mx-auto"},[e("app-header"),t._v(" "),e("Nuxt"),t._v(" "),e("app-footer")],1)])}),[],!1,null,null,null);n.a=component.exports},221:function(t,n,e){"use strict";e.r(n);var r={name:"AppFooter",data:function(){return{currentYear:(new Date).getFullYear()}}},o=e(34),component=Object(o.a)(r,(function(){var t=this,n=t.$createElement,e=t._self._c||n;return e("div",[e("div",{staticClass:"border-t-2 border-gray-300 dark:border-gray-700 text-sm text-gray-600 mt-6 py-6 transition ease-linear duration-200"},[t._v("\n    Copyleft SGC "),e("span",{staticClass:"copyleft"},[t._v("©")]),t._v(" "+t._s(t.currentYear)+" ~\n    Built with "),e("a",{staticClass:"hover:underline",attrs:{href:"https://nuxtjs.org/",target:"_blank"}},[t._v("NuxtJS")]),t._v(",\n    "),e("a",{staticClass:"hover:underline",attrs:{href:"https://tailwindcss.com/",target:"_blank"}},[t._v("Tailwind CSS")]),t._v(", "),e("a",{staticClass:"hover:underline",attrs:{href:"https://pages.github.com/",target:"_blank"}},[t._v("Github Pages")])])])}),[],!1,null,null,null);n.default=component.exports},224:function(t,n,e){e(225),t.exports=e(226)},287:function(t,n,e){var content=e(288);content.__esModule&&(content=content.default),"string"==typeof content&&(content=[[t.i,content,""]]),content.locals&&(t.exports=content.locals);(0,e(74).default)("701f0ef2",content,!0,{sourceMap:!1})},288:function(t,n,e){var r=e(73)((function(i){return i[1]}));r.push([t.i,'/*purgecss start ignore*/\n\n#__layout,#__nuxt,body,html{\n  min-height:100vh!important;\n  width:100%!important\n}\n\n.bg-light{\n  background-color:#f6f0e9\n}\n\n.fade-enter-active,.fade-leave-active{\n  transition:opacity .2s\n}\n\n.fade-enter,.fade-leave-active{\n  opacity:0\n}\n\n.slide-fade-enter-active{\n  transition:all .3s ease\n}\n\n.slide-fade-leave-active{\n  transition:all .2s cubic-bezier(1,.5,.8,1)\n}\n\n.slide-fade-enter,.slide-fade-leave-to{\n  transform:translateX(10px);\n  opacity:0\n}\n\nfigure{\n  position:relative;\n  border:thin solid silver;\n  padding:5px;\n  margin:auto\n}\n\nblockquote{\n  margin-top:.3rem;\n  padding:.3em 1em;\n  box-sizing:border-box;\n  border-left:.25em solid #ced2d9;\n  font-weight:400;\n  background:0 0\n}\n\nblockquote,figcaption{\n  font-style:italic;\n  color:#323e4d\n}\n\nfigcaption{\n  position:absolute;\n  top:1em;\n  right:5px;\n  background:#fff;\n  background-clip:border-box;\n  border:1px solid #fff;\n  padding:2px;\n  line-height:2.6em;\n  font-size:.8em;\n  background-clip:content-box\n}\n\nfigcaption:after,figcaption:before{\n  content:"\\00a0 \\00a0 "\n}\n\na{\n  cursor:pointer\n}\n\nsvg:not(:root).svg-inline--fa{\n  overflow:visible\n}\n\n.svg-inline--fa.fa-w-16{\n  width:1em\n}\n\n.svg-inline--fa{\n  display:inline-block;\n  font-size:inherit;\n  height:1.5em;\n  overflow:visible;\n  vertical-align:-.125em\n}\n\n.copyleft{\n  display:inline-block;\n  transform:rotate(180deg)\n}\n\n/*purgecss end ignore*/',""]),r.locals={},t.exports=r}},[[224,17,1,18]]]);