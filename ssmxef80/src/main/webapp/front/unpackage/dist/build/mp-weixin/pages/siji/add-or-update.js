(global["webpackJsonp"]=global["webpackJsonp"]||[]).push([["pages/siji/add-or-update"],{"03f5":function(e,n,r){"use strict";(function(e){Object.defineProperty(n,"__esModule",{value:!0}),n.default=void 0;var t=a(r("a34a"));function a(e){return e&&e.__esModule?e:{default:e}}function u(e,n,r,t,a,u,i){try{var o=e[u](i),c=o.value}catch(s){return void r(s)}o.done?n(c):Promise.resolve(c).then(t,a)}function i(e){return function(){var n=this,r=arguments;return new Promise((function(t,a){var i=e.apply(n,r);function o(e){u(i,t,a,o,c,"next",e)}function c(e){u(i,t,a,o,c,"throw",e)}o(void 0)}))}}var o=function(){Promise.all([r.e("common/vendor"),r.e("components/w-picker/w-picker")]).then(function(){return resolve(r("db0a"))}.bind(null,r)).catch(r.oe)},c={data:function(){return{ruleForm:{zhanghao:"",mima:"",xingming:"",shenfenzheng:"",touxiang:"",shoujihao:"",kechechepaihao:"",kecheleixing:"",kechejiage:"",hezairenshu:""},user:{},ro:{zhanghao:!1,mima:!1,xingming:!1,shenfenzheng:!1,touxiang:!1,shoujihao:!1,kechechepaihao:!1,kecheleixing:!1,kechejiage:!1,hezairenshu:!1}}},components:{wPicker:o},computed:{},onLoad:function(n){var r=this;return i(t.default.mark((function a(){var u,i,o,c;return t.default.wrap((function(a){while(1)switch(a.prev=a.next){case 0:return u=e.getStorageSync("nowTable"),a.next=3,r.$api.session(u);case 3:if(i=a.sent,r.user=i.data,r.ruleForm.userid=e.getStorageSync("userid"),n.refid&&(r.ruleForm.refid=n.refid,r.ruleForm.nickname=e.getStorageSync("nickname")),!n.id){a.next=13;break}return r.ruleForm.id=n.id,a.next=11,r.$api.info("siji",r.ruleForm.id);case 11:i=a.sent,r.ruleForm=i.data;case 13:if(!n.cross){a.next=60;break}o=e.getStorageSync("crossObj"),a.t0=t.default.keys(o);case 16:if((a.t1=a.t0()).done){a.next=60;break}if(c=a.t1.value,"zhanghao"!=c){a.next=22;break}return r.ruleForm.zhanghao=o[c],r.ro.zhanghao=!0,a.abrupt("continue",16);case 22:if("mima"!=c){a.next=26;break}return r.ruleForm.mima=o[c],r.ro.mima=!0,a.abrupt("continue",16);case 26:if("xingming"!=c){a.next=30;break}return r.ruleForm.xingming=o[c],r.ro.xingming=!0,a.abrupt("continue",16);case 30:if("shenfenzheng"!=c){a.next=34;break}return r.ruleForm.shenfenzheng=o[c],r.ro.shenfenzheng=!0,a.abrupt("continue",16);case 34:if("touxiang"!=c){a.next=38;break}return r.ruleForm.touxiang=o[c],r.ro.touxiang=!0,a.abrupt("continue",16);case 38:if("shoujihao"!=c){a.next=42;break}return r.ruleForm.shoujihao=o[c],r.ro.shoujihao=!0,a.abrupt("continue",16);case 42:if("kechechepaihao"!=c){a.next=46;break}return r.ruleForm.kechechepaihao=o[c],r.ro.kechechepaihao=!0,a.abrupt("continue",16);case 46:if("kecheleixing"!=c){a.next=50;break}return r.ruleForm.kecheleixing=o[c],r.ro.kecheleixing=!0,a.abrupt("continue",16);case 50:if("kechejiage"!=c){a.next=54;break}return r.ruleForm.kechejiage=o[c],r.ro.kechejiage=!0,a.abrupt("continue",16);case 54:if("hezairenshu"!=c){a.next=58;break}return r.ruleForm.hezairenshu=o[c],r.ro.hezairenshu=!0,a.abrupt("continue",16);case 58:a.next=16;break;case 60:r.styleChange();case 61:case"end":return a.stop()}}),a)})))()},methods:{styleChange:function(){this.$nextTick((function(){}))},touxiangTap:function(){var e=this;this.$api.upload((function(n){e.ruleForm.touxiang=e.$base.url+"upload/"+n.file,e.$forceUpdate(),e.$nextTick((function(){e.styleChange()}))}))},getUUID:function(){return(new Date).getTime()},onSubmitTap:function(){var e=this;return i(t.default.mark((function n(){return t.default.wrap((function(n){while(1)switch(n.prev=n.next){case 0:if(e.ruleForm.zhanghao){n.next=3;break}return e.$utils.msg("账号不能为空"),n.abrupt("return");case 3:if(e.ruleForm.mima){n.next=6;break}return e.$utils.msg("密码不能为空"),n.abrupt("return");case 6:if(e.ruleForm.xingming){n.next=9;break}return e.$utils.msg("姓名不能为空"),n.abrupt("return");case 9:if(e.ruleForm.shenfenzheng){n.next=12;break}return e.$utils.msg("身份证不能为空"),n.abrupt("return");case 12:if(!e.ruleForm.shenfenzheng||e.$validate.checkIdCard(e.ruleForm.shenfenzheng)){n.next=15;break}return e.$utils.msg("身份证应输入身份证格式"),n.abrupt("return");case 15:if(e.ruleForm.shoujihao){n.next=18;break}return e.$utils.msg("手机号不能为空"),n.abrupt("return");case 18:if(e.ruleForm.kechechepaihao){n.next=21;break}return e.$utils.msg("客车车牌号不能为空"),n.abrupt("return");case 21:if(e.ruleForm.kecheleixing){n.next=24;break}return e.$utils.msg("客车类型不能为空"),n.abrupt("return");case 24:if(!e.ruleForm.id){n.next=29;break}return n.next=27,e.$api.update("siji",e.ruleForm);case 27:n.next=31;break;case 29:return n.next=31,e.$api.add("siji",e.ruleForm);case 31:e.$utils.msgBack("提交成功");case 32:case"end":return n.stop()}}),n)})))()},optionsChange:function(e){this.index=e.target.value},bindDateChange:function(e){this.date=e.target.value},getDate:function(e){var n=new Date,r=n.getFullYear(),t=n.getMonth()+1,a=n.getDate();return"start"===e?r-=60:"end"===e&&(r+=2),t=t>9?t:"0"+t,a=a>9?a:"0"+a,"".concat(r,"-").concat(t,"-").concat(a)},toggleTab:function(e){this.$refs[e].show()}}};n.default=c}).call(this,r("543d")["default"])},"052d":function(e,n,r){"use strict";var t=r("b178"),a=r.n(t);a.a},"26eb":function(e,n,r){"use strict";(function(e){r("d8d0");t(r("66fd"));var n=t(r("82ef"));function t(e){return e&&e.__esModule?e:{default:e}}e(n.default)}).call(this,r("543d")["createPage"])},"46bc":function(e,n,r){"use strict";r.r(n);var t=r("03f5"),a=r.n(t);for(var u in t)"default"!==u&&function(e){r.d(n,e,(function(){return t[e]}))}(u);n["default"]=a.a},"82ef":function(e,n,r){"use strict";r.r(n);var t=r("bb81"),a=r("46bc");for(var u in a)"default"!==u&&function(e){r.d(n,e,(function(){return a[e]}))}(u);r("052d");var i,o=r("f0c5"),c=Object(o["a"])(a["default"],t["b"],t["c"],!1,null,"6f9ab2f0",null,!1,t["a"],i);n["default"]=c.exports},b178:function(e,n,r){},bb81:function(e,n,r){"use strict";var t;r.d(n,"b",(function(){return a})),r.d(n,"c",(function(){return u})),r.d(n,"a",(function(){return t}));var a=function(){var e=this,n=e.$createElement;e._self._c},u=[]}},[["26eb","common/runtime","common/vendor"]]]);