(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{340:function(t,e,n){"use strict";n.r(e);var r=n(30),o=n(9),c=(n(40),n(39),"Disqus shortname is required. (To resolve this, go to: https://ktquez.github.io/vue-disqus/setup.html#installation)"),d=["api_key","author_s3","category_id","identifier","integration","language","remote_auth_s3","slug","title","url"],h=["name","button","icon","url","logout","width","height"],i=["afterRender","onInit","onIdentify","beforeComment","onNewComment","onPaginate","onReady","preData","preInit","preReset"],s=function(t){return requestAnimationFrame((function(){return requestAnimationFrame(t)}))};function l(t,e,n,i,s,r,o,a,u,c){"boolean"!=typeof o&&(u=a,a=o,o=!1);var d,h="function"==typeof n?n.options:n;if(t&&t.render&&(h.render=t.render,h.staticRenderFns=t.staticRenderFns,h._compiled=!0,s&&(h.functional=!0)),i&&(h._scopeId=i),r?(d=function(t){(t=t||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext)||"undefined"==typeof __VUE_SSR_CONTEXT__||(t=__VUE_SSR_CONTEXT__),e&&e.call(this,u(t)),t&&t._registeredComponents&&t._registeredComponents.add(r)},h._ssrRegister=d):e&&(d=o?function(t){e.call(this,c(t,this.$root.$options.shadowRoot))}:function(t){e.call(this,a(t))}),d)if(h.functional){var l=h.render;h.render=function(t,e){return d.call(e),l(t,e)}}else{var f=h.beforeCreate;h.beforeCreate=f?[].concat(f,d):[d]}return n}var f=l({render:function(){var t=this.$createElement;return(this._self._c||t)("div",{staticStyle:{"min-height":"200px"},attrs:{id:"disqus_thread"}})},staticRenderFns:[]},void 0,{name:"Disqus",props:{shortname:String,pageConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return d.includes(t)}))}},ssoConfig:{type:Object,validator:function(t){return Object.keys(t).every((function(t){return h.includes(t)}))}},lang:{type:String,default:"en"},lazy:{type:Boolean,default:!0},lazyConfig:{type:Object,default:function(){return{root:null,rootMargin:"300px",threshold:.5}}}},data:function(){return{observer:null}},computed:{getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(c);return t}},watch:{lang:function(){this.reset()}},mounted:function(){if(this.lazy)return this.observerDisqus();this.init()},methods:{init:function(){var t=this;if(this.$disqus&&(this.$disqus.reset=this.reset),window.DISQUS)return this.reset();var e=this.setBaseConfig;window.disqus_config=function(){e(this)},this.loadEmbedScript(),this.$route&&this.$watch("$route.path",(function(){return t.reset()}))},reset:function(t){void 0===t&&(t=window.DISQUS);var e=this.setBaseConfig;t.reset({reload:!0,config:function(){e(this)}})},observerDisqus:function(){if("IntersectionObserver"in window)return this.observer=new IntersectionObserver(this.handleObserver,this.lazyConfig),this.observer.observe(this.$el);this.init()},handleObserver:function(t){var e=this;t.forEach((function(t){t.isIntersecting&&(e.observer.disconnect(),e.init())}))},loadEmbedScript:function(){var t=document,e=t.createElement("script");e.setAttribute("id","embed-disqus"),e.setAttribute("data-timestamp",+new Date),e.type="text/javascript",e.async=!0,e.src="//"+this.getShortname+".disqus.com/embed.js",(t.head||t.body).appendChild(e)},setBaseConfig:function(t){this.setPageConfig(t),this.cbDisqus(t),this.ssoConfig&&Object.keys(this.ssoConfig).length&&Object.assign(t.sso,this.ssoConfig),t.language=this.lang},setPageConfig:function(t){var e={url:document.baseURI,identifier:this.$route?this.$route.path:window.location.pathname};Object.assign(t.page,e),this.pageConfig&&Object.keys(this.pageConfig).length&&Object.assign(t.page,this.pageConfig)},cbDisqus:function(t){var e=this;i.forEach((function(n){t.callbacks[n]=[function(t){e.$emit(n.replace(/([a-z0-9])([A-Z])/g,"$1-$2").toLowerCase().replace("on-",""),t)}]}))}}},void 0,!1,void 0,!1,void 0,void 0,void 0),a=l({render:function(){var t=this.$createElement;return(this._self._c||t)(this.tag,{tag:"component",staticClass:"disqus-comment-count",attrs:{href:this.getHref,"data-disqus-url":this.getUrl,"data-disqus-identifier":this.identifier}})},staticRenderFns:[]},void 0,{name:"DisqusCount",inheritAttrs:!1,props:{url:String,shortname:String,identifier:{type:String,required:!0},tag:{type:String,default:"span"}},mounted:function(){this.init()},computed:{getHref:function(){return"a"===this.tag?this.url+"#disqus_thread":null},getUrl:function(){return"span"===this.tag?this.url:null},getShortname:function(){var t=this.shortname?this.shortname:this.$disqus?this.$disqus.shortname:null;if(!t)throw new Error(c);return t}},methods:{init:function(){var t=this;if("DISQUSWIDGETS"in window)return s((function(){return t.reset()}));this.loadCountScript(),this.$route&&this.$watch("$route.path",(function(){return s((function(){return t.reset()}))}))},reset:function(t){void 0===t&&(t=window.DISQUSWIDGETS),t.getCount({reset:!0})},loadCountScript:function(){if(!document.getElementById("dsq-count-scr")){var t=document,e=t.createElement("script");e.async=!0,e.id="dsq-count-scr",e.src="//"+this.getShortname+".disqus.com/count.js",(t.head||t.body).appendChild(e)}}}},void 0,!1,void 0,!1,void 0,void 0,void 0);function u(t,e){void 0===e&&(e={}),t.component("Disqus",f),t.component("DisqusCount",a),t.prototype.$disqus={shortname:e.shortname||null,reset:null}}"undefined"!=typeof window&&void 0!==window.Vue&&window.Vue.use(u);var m={name:"NotesPage",components:{Disqus:f},asyncData:function(t){return Object(o.a)(regeneratorRuntime.mark((function e(){var n,o,c,d,h,l,f;return regeneratorRuntime.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return n=t.$content,o=t.params,e.next=3,n("notes",o.slug).fetch();case 3:return c=e.sent,e.next=6,n("notes").only(["title","description"]).sortBy("title","asc").surround(o.slug).fetch();case 6:return d=e.sent,h=Object(r.a)(d,2),l=h[0],f=h[1],e.abrupt("return",{post:c,prev:l,next:f});case 11:case"end":return e.stop()}}),e)})))()},head:function(){return{title:this.post.title}},methods:{formatDate:function(t){return new Date(t).toISOString().slice(0,10)}}},v=n(34),component=Object(v.a)(m,(function(){var t=this,e=t.$createElement,n=t._self._c||e;return n("div",{staticClass:"grid grid-cols-8 gap-8"},[n("div",{staticClass:"md:col-span-8 col-span-8"},[n("h2",{staticClass:"text-2xl text-gray-400 font-bold mb-2"},[t._v("\n      "+t._s(t.post.title)+"\n    ")]),t._v(" "),n("article",{staticClass:"prose dark:prose-dark max-w-none"},[n("div",{staticClass:"text-xs"},[n("span",{staticClass:"italic"},[t._v("Created:")]),t._v(" "+t._s(t.formatDate(t.post.date))+"\n      ")]),t._v(" "),n("nuxt-content",{attrs:{document:t.post}})],1),t._v(" "),n("div",{staticClass:"bg-blue-100 border-l-4 border-blue-500 text-blue-700 p-2 text-xs",attrs:{role:"alert"}},[n("p",{staticClass:"font-bold mb-2"},[t._v("\n        #JLUK\n      ")]),t._v(" "),n("p",[t._v("These contents are curated and may or may not be complete as I write them for later references.")]),t._v("\n      Last Updated: "),n("span",{},[t._v(t._s(t.formatDate(t.post.updatedAt)))])]),t._v(" "),n("section",{staticClass:"my-4",attrs:{"aria-labelledby":"comment"}},[n("Disqus",{attrs:{shortname:"tuxsisir-github-io"}})],1)])])}),[],!1,null,null,null);e.default=component.exports}}]);