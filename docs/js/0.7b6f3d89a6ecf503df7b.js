webpackJsonp([0],{134:function(t,e,o){"use strict";function i(t){o(145)}Object.defineProperty(e,"__esModule",{value:!0});var n=o(147),a=o(155),s=o(52),r=i,c=s(n.a,a.a,!1,r,"data-v-031cc6ec",null);e.default=c.exports},145:function(t,e,o){var i=o(146);"string"==typeof i&&(i=[[t.i,i,""]]),i.locals&&(t.exports=i.locals);o(131)("4dd8ff1e",i,!0)},146:function(t,e,o){e=t.exports=o(130)(void 0),e.push([t.i,".modalImg[data-v-031cc6ec]{margin:auto;border-radius:10px}.modalBtnPosition[data-v-031cc6ec]{width:100px;margin-bottom:10px}.commentInput[data-v-031cc6ec]{background:hsla(0,0%,8%,.7)}.q-item-label[data-v-031cc6ec]{overflow:hidden;display:-webkit-box;-webkit-box-orient:vertical;color:#caafff}.q-item-sublabel[data-v-031cc6ec]{font-weight:500;color:#f1eaff}.mobileWidth[data-v-031cc6ec]{width:90%}.nonMobieWidth[data-v-031cc6ec]{width:600px}",""])},147:function(t,e,o){"use strict";var i=o(53),n=o.n(i),a=o(148),s=o.n(a);e.a={data:function(){return{commentsToShow:[],commentsShowLoad:!0,addCommentText:"",isMobile:this.$q.platform.is.mobile,imageWidth:this.$q.platform.is.mobile?"325":"600",imageHeight:this.$q.platform.is.mobile?"183px":"338px",showSubmitBtn:!0,modalClosed:!1}},computed:{info:function(){return s()({},this.$store.getters.elemById(this.$route.params.id))}},created:function(){var t;(t=this.commentsToShow).push.apply(t,n()(this.info.comments.slice(0,4)))},mounted:function(){this.$refs.modal.open()},methods:{loadMoreComments:function(t,e){var o=this;if(this.info.comments.length-this.commentsToShow.length!=1)setTimeout(function(){if(!o.modalClosed){var i,a=4*t,s=4*(t+1);(i=o.commentsToShow).push.apply(i,n()(o.info.comments.slice(a,s))),o.info.comments[a]||(o.commentsShowLoad=!1,o.$refs.modalScroll.stop()),e()}},1e3);else{var i;(i=this.commentsToShow).push.apply(i,n()(this.info.comments.slice(-1))),this.$refs.modalScroll.stop(),this.commentsShowLoad=!1,e()}},addComment:function(){this.$store.commit("addComment",{id:this.info.id,comment:{name:"Replicunt",avatar:"../statics/indigo.jpg",comment:this.addCommentText}}),this.addCommentText="",this.$refs.modalScroll.resume()},addLike:function(){this.$store.commit("addLike",{id:this.info.id})}}}},148:function(t,e,o){"use strict";e.__esModule=!0;var i=o(149),n=function(t){return t&&t.__esModule?t:{default:t}}(i);e.default=n.default||function(t){for(var e=1;e<arguments.length;e++){var o=arguments[e];for(var i in o)Object.prototype.hasOwnProperty.call(o,i)&&(t[i]=o[i])}return t}},149:function(t,e,o){t.exports={default:o(150),__esModule:!0}},150:function(t,e,o){o(151),t.exports=o(3).Object.assign},151:function(t,e,o){var i=o(6);i(i.S+i.F,"Object",{assign:o(152)})},152:function(t,e,o){"use strict";var i=o(55),n=o(153),a=o(154),s=o(27),r=o(56),c=Object.assign;t.exports=!c||o(26)(function(){var t={},e={},o=Symbol(),i="abcdefghijklmnopqrst";return t[o]=7,i.split("").forEach(function(t){e[t]=t}),7!=c({},t)[o]||Object.keys(c({},e)).join("")!=i})?function(t,e){for(var o=s(t),c=arguments.length,m=1,l=n.f,d=a.f;c>m;)for(var u,f=r(arguments[m++]),h=l?i(f).concat(l(f)):i(f),p=h.length,b=0;p>b;)d.call(f,u=h[b++])&&(o[u]=f[u]);return o}:c},153:function(t,e){e.f=Object.getOwnPropertySymbols},154:function(t,e){e.f={}.propertyIsEnumerable},155:function(t,e,o){"use strict";var i=function(){var t=this,e=t.$createElement,o=t._self._c||e;return o("q-modal",{ref:"modal",attrs:{position:"top","content-css":{marginTop:"30px",background:"rgba(50,50,50,0.5)"},maximized:t.isMobile},on:{close:function(e){t.$router.go(-1),t.modalClosed=!0}}},[o("div",{staticClass:"modalImg justify-end row",style:{backgroundImage:"url("+t.info.img+")",width:t.imageWidth+"px",height:t.imageHeight}},[o("div",{staticClass:"self-end modalBtnPosition "},[o("q-btn",{attrs:{icon:"thumb_up",color:"primary",big:"",rounded:""},on:{click:t.addLike}},[o("q-chip",{attrs:{color:"tertiary",floating:""}},[t._v(t._s(t.info.likes))])],1)],1)]),t._v(" "),o("q-infinite-scroll",{ref:"modalScroll",attrs:{handler:t.loadMoreComments}},[o("div",{staticClass:"light",style:{background:"rgba(50,50,50,0.5)",margin:"auto",width:t.isMobile?"90%":"600px"}},[o("q-list",[t._l(t.commentsToShow,function(e,i){return o("q-item",{key:i,attrs:{highlight:""}},[o("q-item-side",{attrs:{avatar:e.avatar}}),t._v(" "),o("q-item-main",{attrs:{label:e.name,sublabel:e.comment}})],1)}),t._v(" "),t.commentsShowLoad?o("div",{staticClass:" row justify-center text-white"},[o("q-spinner-dots",{attrs:{size:100}})],1):t._e()],2)],1)]),t._v(" "),o("div",{staticClass:"fixed-bottom row justify-center"},[o("div",{staticClass:"col-xs-11 commentInput"},[o("q-input",{attrs:{type:"text",clearable:"","max-length":"200",dark:"",after:[{icon:"arrow_forward",content:t.showSubmitBtn,handler:function(){t.addComment()}}]},on:{keyup:function(e){if(!("button"in e)&&t._k(e.keyCode,"enter",13,e.key))return null;t.addComment(e)}},model:{value:t.addCommentText,callback:function(e){t.addCommentText=e},expression:"addCommentText"}})],1)])],1)},n=[],a={render:i,staticRenderFns:n};e.a=a}});