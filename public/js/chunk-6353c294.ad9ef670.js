(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-6353c294"],{5530:function(e,t,i){"use strict";i.d(t,"a",(function(){return l}));i("b64b"),i("a4d3"),i("4de4"),i("d3b7"),i("e439"),i("159b"),i("dbb4");function a(e,t,i){return t in e?Object.defineProperty(e,t,{value:i,enumerable:!0,configurable:!0,writable:!0}):e[t]=i,e}function n(e,t){var i=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),i.push.apply(i,a)}return i}function l(e){for(var t=1;t<arguments.length;t++){var i=null!=arguments[t]?arguments[t]:{};t%2?n(Object(i),!0).forEach((function(t){a(e,t,i[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(i)):n(Object(i)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(i,t))}))}return e}},5978:function(e,t,i){},"7ad7":function(e,t,i){"use strict";i.r(t);var a=function(){var e=this,t=e.$createElement,i=e._self._c||t;return i("ec-container",{staticClass:"info",attrs:{height:"100%","color-code":"001",title:"基地单元衔接确认","show-title":""}},[i("ec-container-body",[i("ec-panel",{attrs:{auto:!1}},[i("ec-panel-toolbar",[i("ec-query-panel",{attrs:{defaultFold:!0},on:{query:e.onQuery,reset:e.resetHandle}},[i("ec-query-item",{attrs:{label:"基地单元名称"}},[i("a-input",{attrs:{placeholder:"请输入基地单元名称"},model:{value:e.query.baseCellName,callback:function(t){e.$set(e.query,"baseCellName","string"===typeof t?t.trim():t)},expression:"query.baseCellName"}})],1),i("ec-query-item",{attrs:{label:"状态"}},[i("ec-select",{attrs:{showSearch:"",allowClear:"",placeholder:"请选择状态"},model:{value:e.query.billState,callback:function(t){e.$set(e.query,"billState","string"===typeof t?t.trim():t)},expression:"query.billState"}},e._l(e.billStateList,(function(t){return i("a-select-option",{key:t.enumKey},[e._v(" "+e._s(t.name)+" ")])})),1)],1)],1),i("ec-divider")],1),i("ec-panel-body",[i("ec-v-layout",{attrs:{auto:!1}},[i("ec-v-item",{attrs:{height:"auto"}},[i("ec-panel-toolbar",[i("ec-panel-item-left",[i("a-button",{attrs:{type:"primary"},on:{click:e.onAgree}},[e._v("同意")]),i("a-button",{attrs:{type:"primary",ghost:""},on:{click:e.onReturn}},[e._v("回退")])],1),i("ec-panel-item-right",[i("div",{staticClass:"unit-box"},[i("div",{staticClass:"select"},[e._v(" 重量单位： "),i("ec-select",{attrs:{showSearch:""},model:{value:e.weightUnit,callback:function(t){e.weightUnit="string"===typeof t?t.trim():t},expression:"weightUnit"}},e._l(e.weightUnitList,(function(t){return i("a-select-option",{key:t.enumKey},[e._v(" "+e._s(t.name)+" ")])})),1)],1),i("div",{staticClass:"select"},[e._v(" 面积单位： "),i("ec-select",{attrs:{showSearch:""},model:{value:e.areaUnit,callback:function(t){e.areaUnit="string"===typeof t?t.trim():t},expression:"areaUnit"}},e._l(e.areaUnitList,(function(t){return i("a-select-option",{key:t.enumKey},[e._v(" "+e._s(t.name)+" ")])})),1)],1)])])],1)],1),i("ec-v-item",[i("ec-table",{ref:"tableRef",attrs:{loading:e.loading,"show-overflow":"",height:"100%",auto:!1,pagination:e.pagination,data:e.tableData},on:{"page-action":e.queryHandle,"checkbox-all":e.onSelAllTableData,"checkbox-change":e.onSelTableData}},[i("ec-table-col",{attrs:{type:"checkbox",width:"60",align:"center"}}),i("ec-table-col",{attrs:{type:"seq",title:"序号",width:"50",align:"center"}}),i("ec-table-col",{attrs:{field:"linkInduProvOrgName",title:"省级工业公司","min-width":"150",align:"left"}}),i("ec-table-col",{attrs:{field:"linkInduOrgName",title:"对口工业企业","min-width":"150",align:"left"}}),i("ec-table-col",{attrs:{field:"provOrgName",title:"省公司","min-width":"150",align:"left"}}),i("ec-table-col",{attrs:{field:"cityOrgName",title:"市公司","min-width":"150",align:"left"}}),i("ec-table-col",{attrs:{field:"provDivisionName",title:"省","min-width":"150",align:"left"}}),i("ec-table-col",{attrs:{field:"cityDivisionName",title:"地(州、市)","min-width":"150",align:"left"}}),i("ec-table-col",{attrs:{field:"counDivisionName",title:"县(区、市)","min-width":"150",align:"left"}}),i("ec-table-col",{attrs:{field:"baseCellCode",title:"基地单元编码","min-width":"150",align:"left"}}),i("ec-table-col",{attrs:{field:"baseCellName",title:"基地单元名称","min-width":"150",align:"left"}}),i("ec-table-col",{attrs:{field:"brandName",title:"品牌","min-width":"150",align:"left"}}),i("ec-table-col",{attrs:{field:"leafTypeCode",title:"烟叶类型","min-width":"150",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("div",[e._v(" "+e._s(e._f("getNameBy")(a.leafTypeCode,e.leafTypeObj))+" ")])]}}])}),i("ec-table-col",{attrs:{field:"leafVarietyName",title:"烟叶品种","min-width":"150",align:"left"}}),i("ec-table-col",{attrs:{field:"fieldArea",title:"基本烟田面积","min-width":"150",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("div",[e._v(e._s(e._f("amountFormat")(a.fieldArea,e.areaUnit)))])]}}])}),i("ec-table-col",{attrs:{field:"plantArea",title:"种植面积","min-width":"150",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("div",[e._v(e._s(e._f("amountFormat")(a.plantArea,e.areaUnit)))])]}}])}),i("ec-table-col",{attrs:{field:"buyWeight",title:"收购量","min-width":"150",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("div",[e._v(e._s(e._f("amountFormat")(a.buyWeight,e.weightUnit)))])]}}])}),i("ec-table-col",{attrs:{field:"techSuppOrg",title:"技术依托单位","min-width":"150",align:"left"}}),i("ec-table-col",{attrs:{field:"unitProp",title:"单元属性","min-width":"150",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("div",[e._v(" "+e._s(e._f("getNameBy")(a.unitProp,e.unitPropList,{key:"enumKey",label:"name"}))+" ")])]}}])}),i("ec-table-col",{attrs:{field:"billState",title:"状态",width:"100",align:"left"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[i("div",[e._v(" "+e._s(e._f("getNameBy")(a.billState,e.billStateObj))+" ")])]}}])})],1)],1)],1)],1)],1)],1)],1)},n=[],l=i("5530"),r=i("c7eb"),o=i("1da1"),s=(i("d81d"),i("b0c0"),i("d3b7"),{name:"PanelSupple",data:function(){return{loading:!1,title:"",query:{},weightUnitList:[],areaUnitList:[],unitPropList:[],billStateList:[],leafTypeList:[],weightUnit:"500000",areaUnit:"10000",tableData:[],pagination:{pageNumber:1,pageSize:10,total:0},selTableData:[]}},computed:{leafTypeObj:function(){return this.leafTypeList.map((function(e){return{key:e.leafTypeCode,title:e.leafTypeName}}))},billStateObj:function(){return this.billStateList.map((function(e){return{key:e.enumKey,title:e.name}}))},bizCode:function(){var e;return null===(e=this.$store.getters.getAppConfig)||void 0===e?void 0:e.bizCode},orgTypeEk:function(){var e;return null===(e=this.$store.getters.getAppConfig)||void 0===e?void 0:e.orgTypeEk},busiYear:function(){var e,t;return null===(e=this.$store.getters.getAppConfig)||void 0===e||null===(t=e.yearValueMap)||void 0===t?void 0:t.CENTER_YEAR}},created:function(){var e=this;return Object(o["a"])(Object(r["a"])().mark((function t(){var i;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:i=e.$router.history.current.query.appCode,e.appCode=i||"CM",e.query.busiYear=e.busiYear,e.handleGetEnum(),e.handleQueryLeafTypeList();case 5:case"end":return t.stop()}}),t)})))()},methods:{handleGetEnum:function(){var e=this,t={enumTypeCodes:["WEIGHT_UNIT","AREA_UNIT","BASE_UNIT_NATURE","BILL_STATE"]};this.$apis.bim.enumType.query(t).then((function(t){var i=(null===t||void 0===t?void 0:t.enumMap)||{};e.weightUnitList=i.WEIGHT_UNIT||[],e.areaUnitList=i.AREA_UNIT||[],e.unitPropList=i.BASE_UNIT_NATURE||[],e.billStateList=i.BILL_STATE||[]}))},handleQueryLeafTypeList:function(){var e=this;this.$apis.bim.leafType.query({}).then((function(t){e.leafTypeList=(null===t||void 0===t?void 0:t.rows)||[]}))},resetHandle:function(){this.query={busiYear:this.busiYear},this.onQuery()},onQuery:function(){this.$refs.tableRef.pageAction(1,10)},queryHandle:function(e,t){var i=this,a=Object(l["a"])({pageNo:e,pageSize:t},this.query);this.loading=!0,this.$apis.apm.baseConfirm.query(a).then((function(e){i.loading=!1,i.tableData=(null===e||void 0===e?void 0:e.rows)||[],i.pagination.total=null===e||void 0===e?void 0:e.totalRows})).catch((function(){i.loading=!1}))},onSelTableData:function(e){var t=e.records;this.selTableData=t},onSelAllTableData:function(e){var t=e.records;this.selTableData=t},onAgree:function(){var e=this,t=this.$createElement;if(this.selTableData.length){if("TOBACCO"===this.orgTypeEk){var i=this.selTableData.some((function(e){return"4"===e.billState||"6"===e.billState}));if(i)return void this.$message.error("已同意或审核的基地单元无法再操作,请重新选择！")}else{var a=this.selTableData.some((function(e){return"2"===e.billState||"4"===e.billState||"6"===e.billState}));if(a)return void this.$message.error("已同意或审核的基地单元无法再操作,请重新选择！");var n=this.selTableData.some((function(e){return"1"===e.billState}));if(n)return void this.$message.error("已退回的基地单元无法再操作,请重新选择！");var l=this.selTableData.some((function(e){return"3"===e.billState}));if(l)return void this.$message.error("省公司已退回的基地单元无法再操作,请重新选择！");var r=this.selTableData.some((function(e){return"5"===e.billState}));if(r)return void this.$message.error("总公司退回的基地单元只有省公司才能操作,请重新选择！")}this.$confirm({title:"是否执行该操作?",content:function(){return t("div",{style:"color:red;"},["是否确认同意选中数据，确认请点击'确认'按钮，取消点击'取消'按钮"])},onOk:function(){var t={bmUnitLinkRecIds:e.selTableData.map((function(e){return e.bmUnitLinkRecId})),actionType:"1"};e.$apis.apm.baseConfirm.agree(t).then((function(){e.$message.success("同意成功"),e.onQuery()}))}})}else this.$message.error("请选择一条数据再操作")},onReturn:function(){var e=this,t=this.$createElement;this.selTableData.length?this.$confirm({title:"是否执行该操作?",content:function(){return t("div",{style:"color:red;"},["是否回退选中数据，确认请点击'确认'按钮，取消点击'取消'按钮"])},onOk:function(){var t={bmUnitLinkRecIds:e.selTableData.map((function(e){return e.bmUnitLinkRecId})),actionType:"2"};e.$apis.apm.baseConfirm.agree(t).then((function(){e.$message.success("回退成功"),e.onQuery()}))}}):this.$message.error("请选择一条数据再操作")}}}),c=s,u=(i("c4c7"),i("2877")),f=Object(u["a"])(c,a,n,!1,null,"923cc386",null);t["default"]=f.exports},c4c7:function(e,t,i){"use strict";i("5978")}}]);
//# sourceMappingURL=chunk-6353c294.ad9ef670.js.map