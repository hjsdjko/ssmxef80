(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/tuipiaoxinxi/list"],{"19aa":function(t,n,e){"use strict";(function(t){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var i=a(e("a34a"));function a(t){return t&&t.__esModule?t:{default:t}}function r(t,n,e,i,a,r,o){try{var u=t[r](o),s=u.value}catch(c){return void e(c)}u.done?n(s):Promise.resolve(s).then(i,a)}function o(t){return function(){var n=this,e=arguments;return new Promise((function(i,a){var o=t.apply(n,e);function u(t){r(o,i,a,u,s,"next",t)}function s(t){r(o,i,a,u,s,"throw",t)}u(void 0)}))}}var u={data:function(){return{queryList:[{queryName:"订单编号"},{queryName:"班次"},{queryName:"姓名"}],queryIndex:0,list:[],mescroll:null,downOption:{auto:!1},upOption:{noMoreSize:5,textNoMore:"~ 没有更多了 ~"},hasNext:!0,searchForm:{},CustomBar:"0"}},onShow:function(){var t=this;return o(i.default.mark((function n(){return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:t.hasNext=!0,t.mescroll&&t.mescroll.resetUpScroll();case 2:case"end":return n.stop()}}),n)})))()},onLoad:function(){this.hasNext=!0,this.mescroll&&this.mescroll.resetUpScroll()},methods:{queryChange:function(t){this.queryIndex=t.detail.value,this.searchForm.dingdanbianhao="",this.searchForm.banci="",this.searchForm.xingming=""},mescrollInit:function(t){this.mescroll=t},downCallback:function(t){this.hasNext=!0,t.resetUpScroll()},upCallback:function(t){var n=this;return o(i.default.mark((function e(){var a,r;return i.default.wrap((function(e){while(1)switch(e.prev=e.next){case 0:return a={page:t.num,limit:t.size},e.next=3,n.$api.list("tuipiaoxinxi",a);case 3:r=e.sent,1==t.num&&(n.list=[]),n.list=n.list.concat(r.data.list),0==r.data.list.length&&(n.hasNext=!1),t.endSuccess(t.size,n.hasNext);case 8:case"end":return e.stop()}}),e)})))()},onDetailTap:function(t){this.$utils.jump("./detail?id=".concat(t.id))},onUpdateTap:function(t){this.$utils.jump("./add-or-update?id=".concat(t))},onAddTap:function(){this.$utils.jump("./add-or-update")},onDeleteTap:function(n){var e=this;t.showModal({title:"提示",content:"是否确认删除",success:function(){var t=o(i.default.mark((function t(a){return i.default.wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(!a.confirm){t.next=5;break}return t.next=3,e.$api.del("tuipiaoxinxi",JSON.stringify([n]));case 3:e.hasNext=!0,e.mescroll.resetUpScroll();case 5:case"end":return t.stop()}}),t)})));function a(n){return t.apply(this,arguments)}return a}()})},search:function(){var t=this;return o(i.default.mark((function n(){var e,a;return i.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:return t.mescroll.num=1,e={page:t.mescroll.num,limit:t.mescroll.size},t.searchForm.dingdanbianhao&&(e["dingdanbianhao"]="%"+t.searchForm.dingdanbianhao+"%"),t.searchForm.banci&&(e["banci"]="%"+t.searchForm.banci+"%"),t.searchForm.xingming&&(e["xingming"]="%"+t.searchForm.xingming+"%"),n.next=7,t.$api.list("tuipiaoxinxi",e);case 7:a=n.sent,1==t.mescroll.num&&(t.list=[]),t.list=t.list.concat(a.data.list),0==a.data.list.length&&(t.hasNext=!1),t.mescroll.endSuccess(t.mescroll.size,t.hasNext);case 12:case"end":return n.stop()}}),n)})))()}}};n.default=u}).call(this,e("543d")["default"])},"1f85":function(t,n,e){"use strict";e.d(n,"b",(function(){return a})),e.d(n,"c",(function(){return r})),e.d(n,"a",(function(){return i}));var i={mescrollUni:function(){return Promise.all([e.e("common/vendor"),e.e("components/mescroll-uni/mescroll-uni")]).then(e.bind(null,"3da7"))}},a=function(){var t=this,n=t.$createElement,e=(t._self._c,t.isAuth("tuipiaoxinxi","修改")),i=t.isAuth("tuipiaoxinxi","删除"),a=t.isAuth("tuipiaoxinxi","新增");t.$mp.data=Object.assign({},{$root:{m0:e,m1:i,m2:a}})},r=[]},2498:function(t,n,e){"use strict";(function(t){e("d8d0");i(e("66fd"));var n=i(e("6f91"));function i(t){return t&&t.__esModule?t:{default:t}}t(n.default)}).call(this,e("543d")["createPage"])},2745:function(t,n,e){"use strict";var i=e("776e"),a=e.n(i);a.a},"4c0a":function(t,n,e){"use strict";e.r(n);var i=e("19aa"),a=e.n(i);for(var r in i)"default"!==r&&function(t){e.d(n,t,(function(){return i[t]}))}(r);n["default"]=a.a},"6f91":function(t,n,e){"use strict";e.r(n);var i=e("1f85"),a=e("4c0a");for(var r in a)"default"!==r&&function(t){e.d(n,t,(function(){return a[t]}))}(r);e("2745");var o,u=e("f0c5"),s=Object(u["a"])(a["default"],i["b"],i["c"],!1,null,null,null,!1,i["a"],o);n["default"]=s.exports},"776e":function(t,n,e){}},[["2498","common/runtime","common/vendor"]]]);