(self["webpackChunkdocs_and_tooling"]=self["webpackChunkdocs_and_tooling"]||[]).push([[647],{8647:function(e,t,s){"use strict";s.r(t),s.d(t,{default:function(){return x}});var a=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("v-container",{attrs:{fluid:""}},[e._l(e.assetLinks,(function(t,n){return a("v-row",{key:n},[a("v-col",{attrs:{cols:"12",align:"center"}},[a("h2",[e._v(e._s(e.sectionMetadata[n].name))])]),e._l(t,(function(t,i){return a("v-col",{key:n+t+i,staticClass:"d-flex child-flex",attrs:{cols:"12",md:"3"}},[t.video?e._e():a("v-img",{staticClass:"grey lighten-2",attrs:{src:s(904)("./"+n+"/"+t.fileName),"lazy-src":s(904)("./"+n+"/"+t.fileName),"aspect-ratio":"1"},on:{click:function(s){return e.assetSelected(n,t)}},scopedSlots:e._u([{key:"placeholder",fn:function(){return[a("v-row",{staticClass:"fill-height ma-0",attrs:{align:"center",justify:"center"}},[a("v-progress-circular",{attrs:{indeterminate:"",color:"grey lighten-5"}})],1)]},proxy:!0}],null,!0)}),t.video?a("iframe",{staticClass:"video-iframe",attrs:{src:t.link,frameBorder:"0"}}):e._e()],1)}))],2)})),e.selectedItem.asset?a("v-overlay",{staticClass:"overlay-page-width"},[a("v-container",[a("v-row",[a("v-img",{attrs:{src:s(904)("./"+e.selectedItem.sectionName+"/"+e.selectedItem.asset.fileName),"lazy-src":s(904)("./"+e.selectedItem.sectionName+"/"+e.selectedItem.asset.fileName),contain:""},on:{click:function(t){return e.assetDeselected()}}})],1),a("v-row",[a("h3",{staticClass:"img-caption"},[e._v(e._s(e.selectedItem.asset.caption))])])],1)],1):e._e()],2)},n=[];const i=s(3260);var o=i,r={name:"Gallery",components:{},data:function(){return{selectedItem:{sectionName:"",asset:null},sectionMetadata:{jak1:{name:""},jak2:{name:""},jak3:{name:""},jakx:{name:""},misc:{name:""}},assetLinks:{jak1:[],jak2:[],jak3:[],jakx:[],misc:[]}}},mounted:async function(){const e=Object.keys(o);for(let t=0;t<e.length;t++){const s=e[t];this.sectionMetadata[s].name=o[s]["name"];for(let e=0;e<o[s]["media"].length;e++){const t=o[s]["media"][e];this.assetLinks[s].push(t)}}},methods:{assetSelected:function(e,t){this.selectedItem={sectionName:e,asset:t}},assetDeselected:function(){this.selectedItem={sectionName:"",asset:""}}}},c=r,l=s(3736),m=s(3453),p=s.n(m),u=s(5783),d=s(814),g=s(4043),f=s(3988),v=s(4558),h=s(400),k=s(9887),y=(0,k.Z)(f.Z,v.Z,h.Z).extend({name:"v-overlay",props:{absolute:Boolean,color:{type:String,default:"#212121"},dark:{type:Boolean,default:!0},opacity:{type:[Number,String],default:.46},value:{default:!0},zIndex:{type:[Number,String],default:5}},computed:{__scrim(){const e=this.setBackgroundColor(this.color,{staticClass:"v-overlay__scrim",style:{opacity:this.computedOpacity}});return this.$createElement("div",e)},classes(){return{"v-overlay--absolute":this.absolute,"v-overlay--active":this.isActive,...this.themeClasses}},computedOpacity(){return Number(this.isActive?this.opacity:0)},styles(){return{zIndex:this.zIndex}}},methods:{genContent(){return this.$createElement("div",{staticClass:"v-overlay__content"},this.$slots.default)}},render(e){const t=[this.__scrim];return this.isActive&&t.push(this.genContent()),e("div",{staticClass:"v-overlay",on:this.$listeners,class:this.classes,style:this.styles},t)}}),_=s(9158),b=s(981),j=(0,l.Z)(c,a,n,!1,null,"57f1accc",null),x=j.exports;p()(j,{VCol:u.Z,VContainer:d.Z,VImg:g.Z,VOverlay:y,VProgressCircular:_.Z,VRow:b.Z})},904:function(e,t,s){var a={"./jak1/boggy-reflections_2022-01-10.png":3889,"./jak1/bones-see-light_2022-01-28.png":3949,"./jak1/can-save-and-load_2022-01-11.png":4016,"./jak1/entity-debugging_2022-01-31.png":1546,"./jak1/jak-and-daxter-are-stunned_2022-02-04.png":9135,"./jak1/light-cave_2022-02-02.png":7843,"./jak1/lurker-chilling_2022-02-04.png":8147,"./jak1/robotboss-appears_2022-02-04.png":8642,"./jak1/starry-sky_2022-01-11.png":2190,"./jak1/too-much-fog_2022-01-10.png":9718,"./jak1/videos":8565,"./jak1/videos.json":8565};function n(e){var t=i(e);return s(t)}function i(e){if(!s.o(a,e)){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}return a[e]}n.keys=function(){return Object.keys(a)},n.resolve=i,e.exports=n,n.id=904},3889:function(e,t,s){"use strict";e.exports=s.p+"img/boggy-reflections_2022-01-10.png"},3949:function(e,t,s){"use strict";e.exports=s.p+"img/bones-see-light_2022-01-28.png"},4016:function(e,t,s){"use strict";e.exports=s.p+"img/can-save-and-load_2022-01-11.png"},1546:function(e,t,s){"use strict";e.exports=s.p+"img/entity-debugging_2022-01-31.png"},9135:function(e,t,s){"use strict";e.exports=s.p+"img/jak-and-daxter-are-stunned_2022-02-04.png"},7843:function(e,t,s){"use strict";e.exports=s.p+"img/light-cave_2022-02-02.png"},8147:function(e,t,s){"use strict";e.exports=s.p+"img/lurker-chilling_2022-02-04.png"},8642:function(e,t,s){"use strict";e.exports=s.p+"img/robotboss-appears_2022-02-04.png"},2190:function(e,t,s){"use strict";e.exports=s.p+"img/starry-sky_2022-01-11.png"},9718:function(e,t,s){"use strict";e.exports=s.p+"img/too-much-fog_2022-01-10.png"},8565:function(e){"use strict";e.exports=JSON.parse('[{"link":"https://www.youtube.com/embed/ZO7A22btJc0","timestamp":"2022-02-04"},{"link":"https://www.youtube.com/watch?v=6dJhyVqqq5Q","timestamp":"2022-01-15"}]')},3260:function(e){"use strict";e.exports=JSON.parse('{"jak1":{"name":"Jak 1","media":[{"fileName":"jak-and-daxter-are-stunned_2022-02-04.png","timestamp":"2022-02-04","caption":"Jak And Daxter Are Stunned","video":false},{"fileName":"robotboss-appears_2022-02-04.png","timestamp":"2022-02-04","caption":"Robotboss Appears","video":false},{"fileName":"lurker-chilling_2022-02-04.png","timestamp":"2022-02-04","caption":"Lurker Chilling","video":false},{"link":"https://www.youtube.com/embed/ZO7A22btJc0","timestamp":"2022-02-04","video":true},{"fileName":"light-cave_2022-02-02.png","timestamp":"2022-02-02","caption":"Light Cave","video":false},{"fileName":"entity-debugging_2022-01-31.png","timestamp":"2022-01-31","caption":"Entity Debugging","video":false},{"fileName":"bones-see-light_2022-01-28.png","timestamp":"2022-01-28","caption":"Bones See Light","video":false},{"link":"https://www.youtube.com/embed/6dJhyVqqq5Q","timestamp":"2022-01-15","video":true},{"fileName":"can-save-and-load_2022-01-11.png","timestamp":"2022-01-11","caption":"Can Save And Load","video":false},{"fileName":"starry-sky_2022-01-11.png","timestamp":"2022-01-11","caption":"Starry Sky","video":false},{"fileName":"boggy-reflections_2022-01-10.png","timestamp":"2022-01-10","caption":"Boggy Reflections","video":false},{"fileName":"too-much-fog_2022-01-10.png","timestamp":"2022-01-10","caption":"Too Much Fog","video":false}]},"jak2":{"name":"Jak 2","media":[]},"jak3":{"name":"Jak 3","media":[]},"jakx":{"name":"Jak X","media":[]},"misc":{"name":"Miscellaneous","media":[]}}')}}]);
//# sourceMappingURL=647.js.map