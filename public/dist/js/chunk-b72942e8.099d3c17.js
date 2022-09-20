(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-b72942e8"],{"111a":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ec-container",{attrs:{height:"100%"}},[a("ec-container-header",[a("ec-panel-toolbar",[a("ec-header",{attrs:{title:"基地单元集中交易计划量维护",icon:"onetomany","color-code":"003"}})],1)],1),a("ec-container-body",[a("ec-panel",{attrs:{auto:!1}},[a("ec-panel-toolbar",[a("ec-query-panel",{attrs:{defaultFold:!0},on:{query:e.onQuery,reset:e.onReset}},[a("ec-query-item",{attrs:{label:"工/商业"}},[a("ec-select",{attrs:{showSearch:"",allowClear:"",placeholder:""},on:{select:e.onQuery},model:{value:e.queryItems.orgTypeEk,callback:function(t){e.$set(e.queryItems,"orgTypeEk",t)},expression:"queryItems.orgTypeEk"}},e._l(e.orgTypeListOptions,(function(t){return a("a-select-option",{key:t.id},[e._v(" "+e._s(t.label)+" ")])})),1)],1),a("ec-query-item",{attrs:{label:"省级单位"}},[a("org-picker",{attrs:{title:"选择省级单位",lazy:!1,search:!1,limitLevel:2},model:{value:e.queryItems.orgCode,callback:function(t){e.$set(e.queryItems,"orgCode",t)},expression:"queryItems.orgCode"}})],1),a("ec-query-item",{attrs:{label:"烟叶类型"}},[a("leaf-select",{attrs:{useType:"TYPE"},model:{value:e.queryItems.leafTypeCode,callback:function(t){e.$set(e.queryItems,"leafTypeCode",t)},expression:"queryItems.leafTypeCode"}})],1)],1),a("ec-divider")],1),a("ec-panel-item",[a("ec-panel-item-left",[a("a-button",{attrs:{type:"primary",disabled:!1},on:{click:e.handlerCreateBtn}},[e._v("生成")]),a("a-button",{attrs:{disabled:!1},on:{click:e.handlerPush}},[e._v("发送")]),a("a-button",{on:{click:e.handlerOpen}},[e._v("设置办理依据")]),a("a-button",[e._v("导出")])],1),a("ec-panel-item-right",[a("div",{staticClass:"unit-box"},[a("span",[e._v("业务年度："+e._s(e.busiYear)+"年")]),a("div",{staticClass:"select"},[e._v(" 重量单位： "),a("enum-select",{attrs:{enumTypeCodes:["WEIGHT_UNIT"]},on:{select:e.onWeightUnitChange},model:{value:e.weightUnit,callback:function(t){e.weightUnit=t},expression:"weightUnit"}})],1)])])],1),a("ec-panel-body",[a("ec-table",{ref:"tableRef",attrs:{loading:e.loading,height:"100%",auto:!1,"show-overflow":"",data:e.tableData,"show-footer":"","footer-method":e.footerMethod}},[a("ec-table-col",{attrs:{type:"seq",title:"序号",width:"50"}}),a("ec-table-col",{attrs:{field:"orgName",title:"省级单位",align:"center"}}),a("ec-table-col",{attrs:{field:"leafTypeCode",title:"烟叶类型",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("div",[e._v(" "+e._s(e._f("getNameBy")(n.leafTypeCode,e.leafTypeList,{key:"leafTypeCode",label:"leafTypeName"}))+" ")])]}}])}),a("ec-table-col",{attrs:{field:"sumWeight",title:"计划量",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("div",[e._v(e._s(e._f("amountFormat")(n.sumWeight,e.weightUnit)))])]}}])}),a("ec-table-col",{attrs:{field:"transStates",title:"发送状态",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[e._v(e._s("0"===a.transStates?"未发送":"1"===a.transStates?"已发送":""))]}}])}),a("ec-table-col",{attrs:{title:"操作",width:"190",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.onEdit(n)}}},[e._v("编辑")]),a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.onDetail(n)}}},[e._v("详细")])]}}])})],1)],1)],1),a("edit-modal",{ref:"editModalRef",attrs:{leafTypeList:e.leafTypeList,industryOrgList:e.industryOrgList,replaceFields:e.replaceFields},on:{saved:e.onQuery}}),a("remark-modal",{ref:"remarkModalRef"})],1)],1)},r=[],i=a("5530"),o=a("c7eb"),l=a("1da1"),s=(a("e906"),a("dd14")),u=a.n(s),c=(a("8563"),a("46d9")),d=a.n(c),f=(a("f162"),a("23ee")),p=a.n(f),m=(a("d3b7"),a("159b"),a("a9e3"),a("b680"),a("d81d"),a("caad"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ec-drawer",{attrs:{title:"编辑",visible:e.visible,size:"large","is-confirm":!0},on:{close:e.onCancel}},[a("ec-container",{attrs:{height:"100%"}},[a("ec-container-body",[a("ec-panel",{attrs:{auto:!1}},[a("ec-panel-toolbar",[a("ec-query-panel",{attrs:{defaultFold:!0},on:{query:e.onQuery,reset:e.onReset}},[a("ec-query-item",{attrs:{label:"基地单元名称"}},[a("a-input",{attrs:{placeholder:"请输入"},model:{value:e.query.baseCellName,callback:function(t){e.$set(e.query,"baseCellName","string"===typeof t?t.trim():t)},expression:"query.baseCellName"}})],1),a("ec-query-item",{attrs:{label:"市公司"}},[a("org-picker",{attrs:{limitLevel:3,params:{orgTypeEk:"TOBACCO"},title:"选择市公司"},model:{value:e.query.cityOrgCode,callback:function(t){e.$set(e.query,"cityOrgCode",t)},expression:"query.cityOrgCode"}})],1),a("ec-query-item",{attrs:{label:"对口工业企业"}},[a("select-picker",{attrs:{placeholder:"请选择对口工业企业",lazy:!1,search:!1,fetchData:e.onFetchIndustryOrgList},model:{value:e.query.linkInduOrgCode,callback:function(t){e.$set(e.query,"linkInduOrgCode","string"===typeof t?t.trim():t)},expression:"query.linkInduOrgCode"}})],1)],1),a("ec-divider")],1),a("ec-panel-body",[a("ec-v-layout",{attrs:{auto:!1}},[a("ec-v-item",{attrs:{height:"auto"}},[a("ec-panel-toolbar",[e.isDetail?e._e():a("ec-panel-item-left",[a("a-button",{attrs:{type:"primary"},on:{click:e.onSave}},[e._v("保存")]),a("a-button",{attrs:{type:"default"},on:{click:e.onCancel}},[e._v("关闭")])],1),a("ec-panel-item-right",[a("div",{staticClass:"unit-box"},[a("span",[e._v("业务年度："+e._s(e.busiYear)+"年")]),a("div",{staticClass:"select"},[e._v(" 重量单位： "),a("enum-select",{attrs:{enumTypeCodes:["WEIGHT_UNIT"]},on:{select:e.computedWeigthHandler},model:{value:e.weightUnit,callback:function(t){e.weightUnit=t},expression:"weightUnit"}})],1)])])],1)],1),a("ec-v-item",[a("ec-table",{ref:"tableRef",attrs:{loading:e.loading,"show-overflow":"",height:"100%",auto:!1,data:e.tableData,"edit-config":{trigger:"click",mode:"row"}}},[a("ec-table-col",{attrs:{type:"seq",title:"序号",width:"50"}}),a("ec-table-col",{attrs:{field:"provOrgName",title:"省公司",align:"center","min-width":"150"}}),a("ec-table-col",{attrs:{field:"cityOrgName",title:"市公司",align:"center","min-width":"150"}}),a("ec-table-col",{attrs:{field:"linkInduProvOrgName",title:"省级工业公司",align:"center","min-width":"150"}}),a("ec-table-col",{attrs:{field:"linkInduOrgName",title:"对口工业企业",align:"center","min-width":"150"}}),a("ec-table-col",{attrs:{field:"baseCellCode",title:"基地单元编码",align:"center","min-width":"150"}}),a("ec-table-col",{attrs:{field:"baseCellName",title:"基地单元名称",align:"center","min-width":"150"}}),a("ec-table-col",{attrs:{field:"leafTypeCode",title:"烟叶类型",align:"center","min-width":"100"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("div",[e._v(" "+e._s(e._f("getNameBy")(n.leafTypeCode,e.leafTypeList,{key:"leafTypeCode",label:"leafTypeName"}))+" ")])]}}])}),e.isDetail?[a("ec-table-col",{attrs:{"min-width":"150",field:"buyWeightTemp",title:"收购量",align:"center"}}),a("ec-table-col",{attrs:{field:"apprWeightTemp",title:"计划量",align:"center","min-width":"150"}})]:[a("ec-table-col",{attrs:{"min-width":"150",field:"buyWeightTemp",title:"收购量",align:"center","edit-render":{}},scopedSlots:e._u([{key:"edit",fn:function(t){var n=t.row;return[a("a-input-number",{model:{value:n.buyWeightTemp,callback:function(t){e.$set(n,"buyWeightTemp",t)},expression:"row.buyWeightTemp"}})]}}])}),a("ec-table-col",{attrs:{field:"apprWeightTemp",title:"计划量",align:"center","min-width":"150","edit-render":{name:"input",immediate:!0}},scopedSlots:e._u([{key:"edit",fn:function(t){var n=t.row;return[a("a-input-number",{model:{value:n.apprWeightTemp,callback:function(t){e.$set(n,"apprWeightTemp",t)},expression:"row.apprWeightTemp"}})]}}])})]],2)],1)],1)],1)],1)],1)],1)],1)],1)}),y=[],h=(a("6198"),a("6fc0")),b=a.n(h),v=a("6ea6"),g={name:"EditModal",components:{OrgPicker:u.a,EnumSelect:p.a,SelectPicker:b.a},props:{leafTypeList:{type:Array,default:function(){return[]}},industryOrgList:{type:Array,default:function(){return[]}},replaceFields:{type:Object,default:function(){}}},computed:{busiYear:function(){var e,t;return null===(e=this.$store.getters.getAppConfig)||void 0===e||null===(t=e.yearValueMap)||void 0===t?void 0:t.CENTER_YEAR},orgTypeEk:function(){var e;return null===(e=this.$store.getters.getAppConfig)||void 0===e?void 0:e.orgTypeEk}},data:function(){return{loading:!1,visible:!1,query:{},tableData:[],businesOrgCodeTemp:void 0,weightUnit:"500000",dataTemp:{},isDetail:!1}},methods:{show:function(e,t){this.visible=!0,this.dataTemp=e,this.isDetail=t,this.query={busiYear:this.busiYear,orgTypeEk:this.orgTypeEk,provOrgCode:e.provOrgCode,leafTypeCode:e.leafTypeCode},this.onQuery()},onFetchIndustryOrgList:function(){var e=this;return new Promise((function(t){var a=Object(v["treeFormatList"])(e.industryOrgList,e.replaceFields);t(a)}))},onQuery:function(){var e=this;if(this.query.provOrgCode){var t=Object(i["a"])({},this.query);this.loading=!0,this.$apis.apm.baseCentreMaintain.editQuery(t).then((function(t){e.loading=!1,e.tableData=(null===t||void 0===t?void 0:t.rows)||[],e.computedWeigthHandler()})).catch((function(){e.loading=!1}))}},computedWeigthHandler:function(){var e=this;this.tableData=this.tableData.map((function(t){var a=t;return a.buyWeightTemp=Number(a.buyWeight)/Number(e.weightUnit),a.apprWeightTemp=Number(a.apprWeight)/Number(e.weightUnit),a}))},onReset:function(){this.query={busiYear:this.busiYear,orgTypeEk:this.orgTypeEk,provOrgCode:this.dataTemp.provOrgCode,leafTypeCode:this.dataTemp.leafTypeCode},this.onQuery()},onCancel:function(){this.visible=!1},onSave:function(){var e=this,t={busiYear:this.busiYear,leafTypeCode:this.dataTemp.leafTypeCode,pcTBmUnitApprQtyDTOList:this.tableData.map((function(t){var a=t;return a.buyWeight=Number(a.buyWeightTemp)*Number(e.weightUnit),a.apprWeight=Number(a.buyWeightTemp)*Number(e.weightUnit),a}))};$ec.showLoading(),this.$apis.apm.baseCentreMaintain.save(t).then((function(){$ec.hideLoading(),e.$message.error("保存成功"),e.$emit("saved"),e.onReset()}))}}},C=g,T=(a("816a"),a("2877")),k=Object(T["a"])(C,m,y,!1,null,"7f886875",null),_=k.exports,O=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ec-modal",{attrs:{title:"设置办理依据",size:"mini","is-confirm":!0},scopedSlots:e._u([{key:"footer",fn:function(){return[a("a-button",{attrs:{type:"primary"},on:{click:e.onConfirm}},[e._v("确定")]),a("a-button",{on:{click:e.onClose}},[e._v("关闭")])]},proxy:!0}]),model:{value:e.visibile,callback:function(t){e.visibile=t},expression:"visibile"}},[a("ec-form",{ref:"formRef",attrs:{model:e.formData,rules:e.formRules}},[a("a-row",{attrs:{type:"flex",gutter:12}},[a("a-col",{attrs:{span:24}},[a("a-form-model-item",{attrs:{label:"办理依据",prop:"remark"}},[a("a-textarea",{attrs:{rows:5},model:{value:e.formData.remark,callback:function(t){e.$set(e.formData,"remark",t)},expression:"formData.remark"}})],1)],1)],1)],1)],1)},w=[],$={name:"RemarkModal",data:function(){return{visibile:!1,formData:{},formRules:{remark:{required:!0,message:"请输入办理依据",trigger:"blur"}}}},watch:{visibile:{handler:function(e){e||(this.formData={})}}},computed:{busiYear:function(){var e,t;return null===(e=this.$store.getters.getAppConfig)||void 0===e||null===(t=e.yearValueMap)||void 0===t?void 0:t.CENTER_YEAR}},methods:{show:function(){this.visibile=!0},onConfirm:function(){var e=this;this.$refs.formRef.validate((function(t){t?(e.formData.busiYear=e.busiYear,$ec.showLoading(),e.$apis.apm.baseCentreMaintain.remark(e.formData).then((function(){$ec.hideLoading(),e.$message.success("设置成功！"),e.onClose()}))):e.$message.error("验证不通过")}))},onClose:function(){this.$refs.formRef.resetFields(),this.visibile=!1}}},E=$,L=Object(T["a"])(E,O,w,!1,null,null,null),x=L.exports,N=a("2ef0"),R=a.n(N),q={name:"BaseCentreMaintain",components:{EditModal:_,EnumSelect:p.a,LeafSelect:d.a,OrgPicker:u.a,RemarkModal:x},data:function(){return{loading:!1,leafTypeList:[],inquirevisible:!1,weightUnit:"500000",orgTypeListOptions:[{id:"TOBACCO",label:"商业企业"},{id:"INDUSTRY",label:"工业企业"}],queryItems:{orgTypeEk:"TOBACCO"},tableData:[],industryOrgList:[],replaceFields:{pkey:"parentBizCode",title:"orgName",key:"bizCode",children:"children"}}},computed:{busiYear:function(){var e,t;return null===(e=this.$store.getters.getAppConfig)||void 0===e||null===(t=e.yearValueMap)||void 0===t?void 0:t.CENTER_YEAR},bizCode:function(){var e;return null===(e=this.$store.getters.getAppConfig)||void 0===e?void 0:e.bizCode},orgTypeEk:function(){var e;return null===(e=this.$store.getters.getAppConfig)||void 0===e?void 0:e.orgTypeEk}},created:function(){this.handleQueryLeafTypeList(),this.queryItems.busiYear=this.busiYear,this.onQuery(),this.handleQueryIndustryOrgList()},methods:{handleQueryLeafTypeList:function(){var e=this;this.$apis.bim.leafType.query({}).then((function(t){e.leafTypeList=(null===t||void 0===t?void 0:t.rows)||[]}))},handleQueryIndustryOrgList:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){var a,n;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={busiYear:e.busiYear,orgTypeEk:"INDUSTRY",parentBizCode:e.bizCode},t.next=3,e.$apis.bim.org.queryBy(a);case 3:n=t.sent,e.industryOrgList=n.rows||[];case 5:case"end":return t.stop()}}),t)})))()},onQuery:function(){var e=this,t=Object(i["a"])({},this.queryItems);this.loading=!0,this.$apis.apm.baseCentreMaintain.query(t).then((function(t){e.loading=!1,e.tableData=(null===t||void 0===t?void 0:t.rows)||[]})).catch((function(){e.loading=!1}))},onReset:function(){this.queryItems={busiYear:this.busiYear,orgTypeEk:"TOBACCO"}},onEdit:function(e){this.$refs.editModalRef.show(e)},sumNum:function(e,t){var a=0;return e.forEach((function(e){a+=Number(e[t])})),a/=Number(this.weightUnit),a.toFixed(4)},footerMethod:function(e){var t=this,a=e.columns,n=e.data;return console.log("columns",a),console.log("data",n),[a.map((function(e,a){return 0===a?"合计":["sumWeight"].includes(e.property)?t.sumNum(n,e.property):null}))]},handlerCreateBtn:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){var a,n,r,i,l;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a=e.$createElement,n={busiYear:e.busiYear},t.next=4,e.$apis.apm.baseCentreMaintain.beforeGenerate(n);case 4:r=t.sent,i=r.result,l=i?function(){return a("div",{style:"color:red;"},["本年度已经生成基地单元计划量数据，如果继续生成，会将已经生成的数据删除，是否继续？"])}:function(){return a("div",{style:"color:red;"},["是否确定生成？，确认请点击'确认'按钮，取消点击'取消'按钮"])},e.$confirm({title:"是否执行该操作?",content:l,onOk:function(){$ec.showLoading(),e.$apis.apm.baseCentreMaintain.generate(n).then((function(t){t.result?e.$message.success("生成成功"):e.$message.error("生成失败"),$ec.hideLoading(),e.onQuery()}))}});case 8:case"end":return t.stop()}}),t)})))()},handlerPush:function(){var e=this,t=this.$createElement;this.$confirm({title:"是否执行该操作?",content:function(){return t("div",{style:"color:red;"},["是否发送数据？，确认请点击'确认'按钮，取消点击'取消'按钮。"])},onOk:function(){$ec.showLoading(),e.$apis.apm.baseCentreMaintain.send({busiYear:e.busiYear}).then((function(){$ec.hideLoading(),e.$message.success("发送成功"),e.onQuery()}))}})},handlerOpen:function(){this.$refs.remarkModalRef.show()},onWeightUnitChange:function(){this.tableData=R.a.cloneDeep(this.tableData)},onDetail:function(e){this.$refs.editModalRef.show(e,!0)}}},D=q,A=(a("684e"),Object(T["a"])(D,n,r,!1,null,"6fa22fee",null));t["default"]=A.exports},"23ee":function(e,t,a){var n=a("7ec2").default,r=a("c973").default,i=a("9523").default,o=a("ded3").default;a("99af"),a("b0c0"),a("b64b"),a("4de4"),a("d3b7"),a("d81d"),a("ac1f"),a("1276"),function(){"use strict";var t={483:function(e,t,a){function n(e,t,a,n,r,i,o,l){var s,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=a,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),o?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=s):r&&(s=l?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),s)if(u.functional){u._injectStyles=s;var c=u.render;u.render=function(e,t){return s.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,s):[s]}return{exports:e,options:u}}a.d(t,{Z:function(){return n}})},51:function(e,t,a){a.d(t,{H_:function(){return i},Qb:function(){return l}});var n="Ecm",r="$ecm",i=function(e){var t;return null!==(t=null===e||void 0===e?void 0:e.componentPrefix)&&void 0!==t?t:n},l=function(e,t){var a,n=e;t&&t.classPrefix&&(n.prototype[r]=o(o({},null!==(a=n.prototype[r])&&void 0!==a?a:{}),{},{classPrefix:t.classPrefix}))}},632:function(e){e.exports=a("6ea6")},142:function(e){e.exports=a("f23d")}},l={};function s(e){var a=l[e];if(void 0!==a)return a.exports;var n=l[e]={exports:{}};return t[e](n,n.exports,s),n.exports}!function(){s.d=function(e,t){for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){s.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}();var u={};!function(){s.d(u,{default:function(){return h}});var e=function(){var e=this,t=e._self._c;return t("a-select",e._g(e._b({staticClass:"enum-select",attrs:{value:e.value,placeholder:e.placeholder}},"a-select",e.$attrs,!1),e.new$listeners),[Array.isArray(e.listData)?e._l(e.listData,(function(a){return t("a-select-option",{key:a.key,attrs:{value:a.key}},[e._v(e._s(a.label))])})):e._l(e.listData,(function(a,n){return t("a-select-opt-group",{key:n,attrs:{label:n}},e._l(e.listData[n],(function(a){return t("a-select-option",{key:"".concat(n,"/").concat(a.key),attrs:{value:"".concat(n,"/").concat(a.key)}},[e._v(e._s(a.label))])})),1)}))],2)},t=[],a=s(142),l=s(632),c={inheritAttrs:!1,name:"EnumSelect",components:i({},a.Select.name,a.Select),model:{prop:"value",event:"change"},props:{value:{type:[String,Array],default:void 0},baseUrl:{type:String,default:"/dts/bim"},listApi:{type:String,default:"/q/cmTEnumType/listCmTEnumTypeByCodes/v1"},placeholder:{type:String,default:"请选择"},enumTypeCodes:{type:Array,required:!0,default:function(){return["NATION_EK"]}},replaceFields:{type:Object,default:function(){return{label:"name",key:"enumKey"}}},params:{type:Object,default:function(){return{}}}},data:function(){return{listData:null}},computed:{new$listeners:function(){return Object.assign(this.$listeners,{change:this.onChange})},param:function(){var e=this.enumTypeCodes;return o({enumTypeCodes:e},this.params)}},watch:{param:{handler:function(e,t){(0,l.isRefEqual)(e,t)||this.fetchGetList(e)},deep:!0,immediate:!0}},methods:{fetchGetList:function(e){var t=this;return r(n().mark((function a(){var r,i,s,u,c;return n().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return a.next=2,$ec.http.send(t.baseUrl+t.listApi,o({enumTypeCodes:t.enumTypeCodes},e));case 2:if(r=a.sent,r.enumMap&&1===Object.keys(r.enumMap).length){for(s in i=[],r.enumMap)r.enumMap[s]&&(i=(0,l.replaceFields)(r.enumMap[s],t.replaceFields));t.listData=i}else{for(c in u={},r.enumMap)r.enumMap[c]&&(u[c]=(0,l.replaceFields)(r.enumMap[c],t.replaceFields));t.listData=u}case 4:case"end":return a.stop()}}),a)})))()},onChange:function(e,t){var a,n,r,i=this;if(Array.isArray(e))a=e.map((function(t){if(t){if(i.enumTypeCodes.length>1){var a=(t||"").split("/");r=a[1],n=a[0]}var s=i.listData[n]||i.listData,u=r||e,c=(0,l.getNodeBy)(s,u);return o({text:c.label},c)}return null})).filter((function(e){return e}));else{if(this.enumTypeCodes.length>1&&!Array.isArray(e)){var s=(e||"").split("/");r=s[1],n=s[0]}var u=this.listData[n]||this.listData,c=r||e,d=(0,l.getNodeBy)(u,c);a=o({text:d.label},d)}this.$emit("change",e,t,a,(0,l.cloneDeep)(this.listData))}}},d=c,f=s(483),p=(0,f.Z)(d,e,t,!1,null,null,null),m=p.exports,y=s(51);m.install=function(e,t){(0,y.Qb)(e,t);var a=(0,y.H_)(t);e.component(a+m.name,m)};var h=m}(),e.exports=u["default"]}()},"40ba":function(e,t,a){},"46d9":function(e,t,a){var n=a("9523").default,r=a("ded3").default;a("99af"),a("b0c0"),a("caad"),a("d3b7"),a("4ec9"),a("4de4"),a("d81d"),function(){"use strict";var t={483:function(e,t,a){function n(e,t,a,n,r,i,o,l){var s,u="function"===typeof e?e.options:e;if(t&&(u.render=t,u.staticRenderFns=a,u._compiled=!0),n&&(u.functional=!0),i&&(u._scopeId="data-v-"+i),o?(s=function(e){e=e||this.$vnode&&this.$vnode.ssrContext||this.parent&&this.parent.$vnode&&this.parent.$vnode.ssrContext,e||"undefined"===typeof __VUE_SSR_CONTEXT__||(e=__VUE_SSR_CONTEXT__),r&&r.call(this,e),e&&e._registeredComponents&&e._registeredComponents.add(o)},u._ssrRegister=s):r&&(s=l?function(){r.call(this,(u.functional?this.parent:this).$root.$options.shadowRoot)}:r),s)if(u.functional){u._injectStyles=s;var c=u.render;u.render=function(e,t){return s.call(t),c(e,t)}}else{var d=u.beforeCreate;u.beforeCreate=d?[].concat(d,s):[s]}return{exports:e,options:u}}a.d(t,{Z:function(){return n}})},51:function(e,t,a){a.d(t,{H_:function(){return o},Qb:function(){return l}});var n="Ecm",i="$ecm",o=function(e){var t;return null!==(t=null===e||void 0===e?void 0:e.componentPrefix)&&void 0!==t?t:n},l=function(e,t){var a,n=e;t&&t.classPrefix&&(n.prototype[i]=r(r({},null!==(a=n.prototype[i])&&void 0!==a?a:{}),{},{classPrefix:t.classPrefix}))}},632:function(e){e.exports=a("6ea6")},142:function(e){e.exports=a("f23d")}},i={};function o(e){var a=i[e];if(void 0!==a)return a.exports;var n=i[e]={exports:{}};return t[e](n,n.exports,o),n.exports}!function(){o.d=function(e,t){for(var a in t)o.o(t,a)&&!o.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})}}(),function(){o.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)}}();var l={};!function(){o.d(l,{default:function(){return m}});var e=function(){var e=this,t=e._self._c;return t("a-select",e._g(e._b({staticClass:"leaf-selcet",attrs:{value:e.value,placeholder:e.placeholder}},"a-select",e.$attrs,!1),e.new$listeners),e._l(e.listData,(function(a){return t("a-select-option",{key:a.key},[e._v(e._s(a.label))])})),1)},t=[],a=o(142),i=o(632),s={inheritAttrs:!1,name:"LeafSelect",components:n({},a.Select.name,a.Select),model:{prop:"value",event:"change"},props:{value:{type:[String,Array],default:void 0},baseUrl:{type:String,default:"/dts/bim"},useType:{type:String,validator:function(e){return["TYPE","FORM","LEVEL","RANK","VARIETY","COLOR","PART","GRADE","COUNTRY"].includes(e)},default:"TYPE"},placeholder:{type:String,default:"请选择"},params:{type:Object,default:function(){return{}}},replaceFields:{type:Object,default:function(){}}},data:function(){return{listData:[],apis:{TYPE:{params:{leafTypeName:null,leafTypeCode:null,lastLevelFlag:1},replaceFields:{label:"leafTypeName",key:"leafTypeCode"},listApi:"/c/cmTLeafType/spinnerLeafTypeEx/v1"},FORM:{params:{leafFormName:null,leafFormCode:null},replaceFields:{label:"leafFormName",key:"leafFormCode"},listApi:"/q/cmTLeafForm/spinnerLeafFormEx/v1"},LEVEL:{params:{leafLevelName:null,leafLevelCode:null},replaceFields:{label:"leafLevelNo",key:"leafLevelCode"},listApi:"/c/cmTLeafLevel/spinnerLeafLevelEx/v1"},RANK:{params:{leafRankName:null,leafRankCode:null,leafTypeCodes:null},replaceFields:{label:"leafRankName",key:"leafRankCode"},listApi:"/q/cmTLeafRank/spinnerLeafRankEx/v1"},VARIETY:{params:{leafVarietyName:null,leafVarietyCode:null,leafTypeCodes:null},replaceFields:{label:"leafVarietyName",key:"leafVarietyCode"},listApi:"/q/cmTLeafVariety/spinnerLeafVarietyEx/v1"},COLOR:{params:{leafTypeCode:null},replaceFields:{label:"leafColorName",key:"leafColorCode"},listApi:"/q/cmTbLeafColor/listQueryCmTbLeafColor/v1"},PART:{params:{leafTypeCode:null},replaceFields:{label:"leafPositionName",key:"leafPositionCode"},listApi:"/q/cmTbLeafPosition/listQueryCmTbLeafPosition/v1"},GRADE:{params:{leafTypeCode:null},replaceFields:{label:"leafGradeName",key:"leafGradeCode"},listApi:"/q/cmTLeafGrade/listQueryCmTLeafGrade/v1"},COUNTRY:{params:{},replaceFields:{label:"leafCountryName",key:"leafCountryCode"},listApi:"/q/cmTLeafCountry/listQueryCmTLeafCountry/v1"}}}},computed:{new$listeners:function(){return Object.assign(this.$listeners,{change:this.onChange})},param:function(){return r({useType:this.useType},this.params)}},watch:{param:{handler:function(e,t){(0,i.isRefEqual)(e,t)||this.fetchGetList(e)},deep:!0,immediate:!0}},methods:{fetchGetList:function(e){var t=this;$ec.http.send(this.baseUrl+this.apis[this.useType].listApi,r(r({},this.apis[this.useType].params),e)).then((function(e){var a=e.rows,n=(0,i.replaceFields)(a,r(r({},t.apis[t.useType].replaceFields),t.replaceFields));t.listData=(0,i.uniqueBy)(n)})).finally((function(){}))},onChange:function(e,t){var a,n=this;if(Array.isArray(e))a=e.map((function(e){if(e){var t=(0,i.getNodeBy)(n.listData,e);return r({text:t.label},t)}return null})).filter((function(e){return e}));else{var o=(0,i.getNodeBy)(this.listData,e);a=r({text:o.label},o)}this.$emit("change",e,t,a,(0,i.cloneDeep)(this.listData))}}},u=s,c=o(483),d=(0,c.Z)(u,e,t,!1,null,null,null),f=d.exports,p=o(51);f.install=function(e,t){(0,p.Qb)(e,t);var a=(0,p.H_)(t);e.component(a+f.name,f)};var m=f}(),e.exports=l["default"]}()},5530:function(e,t,a){"use strict";a.d(t,"a",(function(){return i}));a("b64b"),a("a4d3"),a("4de4"),a("d3b7"),a("e439"),a("159b"),a("dbb4");function n(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function r(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function i(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?r(Object(a),!0).forEach((function(t){n(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):r(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},6465:function(e,t,a){},"684e":function(e,t,a){"use strict";a("40ba")},"816a":function(e,t,a){"use strict";a("6465")},8563:function(e,t,a){},f162:function(e,t,a){}}]);
//# sourceMappingURL=chunk-b72942e8.099d3c17.js.map