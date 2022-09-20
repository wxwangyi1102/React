(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-23fb8f0e"],{"133c":function(e,t,a){"use strict";a.r(t);var i=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ec-container",{attrs:{height:"100%"}},[a("ec-container-header",[a("ec-panel-item",[a("ec-panel-item-left",[a("ec-header",{attrs:{title:"卷烟生产退料码包分配领用",icon:"onetomany","color-code":"008"}})],1)],1)],1),a("ec-container-body",[a("ec-panel",{attrs:{auto:!1}},[a("ec-panel-toolbar",[a("a-descriptions",{attrs:{bordered:"",column:4}},[a("a-descriptions-item",{attrs:{label:"调拨年度"}},[e._v(" "+e._s(e.visibleTranYear)+" ")]),a("a-descriptions-item",{attrs:{label:"烟叶类型"}},[e._v(" "+e._s(this.leafTypeName))]),a("a-descriptions-item",{attrs:{label:"烟叶形态"}},[e._v(" "+e._s(e.totalData.leafFormName)+" ")]),a("a-descriptions-item",{attrs:{label:"申请码包数量"}},[e._v(" "+e._s(e.totalData.applyNum)+" ")]),a("a-descriptions-item",{attrs:{label:"申请量"}},[e._v(" "+e._s(e.totalData.applyWeight)+" ")]),a("a-descriptions-item",{attrs:{label:"分配码包数量"}},[e._v(" "+e._s(e.totalData.allotNum)+" ")]),a("a-descriptions-item",{attrs:{label:"领用码包数量"}},[e._v(" "+e._s(e.totalData.collectNum)+" ")]),a("a-descriptions-item",{attrs:{label:""}})],1)],1),a("ec-panel-toolbar",[a("ec-query-panel",{attrs:{defaultFold:!0},on:{query:function(t){return e.$refs.table.pageAction(1)},reset:e.onReset},scopedSlots:e._u([{key:"inner",fn:function(){return[a("ec-query-item",{attrs:{label:"烟叶类型"}},[a("ec-select",{attrs:{showSearch:"",allowClear:"",placeholder:"请选择"},on:{select:e.handleLeafType},model:{value:e.queryItems.leafTypeCode,callback:function(t){e.$set(e.queryItems,"leafTypeCode",t)},expression:"queryItems.leafTypeCode"}},e._l(e.leafTypeList,(function(t){return a("a-select-option",{key:t.leafTypeCode},[e._v(" "+e._s(t.leafTypeName)+" ")])})),1)],1),a("ec-query-item",{attrs:{label:"烟叶形态"}},[a("ec-select",{attrs:{showSearch:"",allowClear:"",placeholder:"请选择"},model:{value:e.queryItems.leafFormCode,callback:function(t){e.$set(e.queryItems,"leafFormCode",t)},expression:"queryItems.leafFormCode"}},e._l(e.leafFormList,(function(t){return a("a-select-option",{key:t.leafFormCode,attrs:{value:t.leafFormCode}},[e._v(e._s(t.leafFormName))])})),1)],1)]},proxy:!0}])},[a("ec-query-item",{attrs:{label:"调拨年度"}},[a("a-input-number",{attrs:{min:2e3,max:2099},model:{value:e.queryItems.tranYear,callback:function(t){e.$set(e.queryItems,"tranYear",t)},expression:"queryItems.tranYear"}})],1),a("ec-query-item",{attrs:{label:"领用单位"}},[a("select-picker",{attrs:{title:"选择领用单位",lazy:!1,search:!1,fetchData:e.onFetchBusinessOrgList},on:{ok:function(t){return e.handleStore()}},model:{value:e.queryItems.applyOrgCode,callback:function(t){e.$set(e.queryItems,"applyOrgCode",t)},expression:"queryItems.applyOrgCode"}})],1),a("ec-query-item",{attrs:{label:"仓库"}},[a("ec-select",{attrs:{placeholder:"请选择"},model:{value:e.queryItems.storeCode,callback:function(t){e.$set(e.queryItems,"storeCode",t)},expression:"queryItems.storeCode"}},e._l(e.storeList,(function(t){return a("a-select-option",{key:t.storeCode},[e._v(" "+e._s(t.storeName)+" ")])})),1)],1)],1),a("ec-divider")],1),a("ec-panel-header",[a("ec-panel-item",[a("ec-panel-item-right",[a("a-space",{attrs:{size:15}},[a("span",[e._v("重量单位："),a("ec-select",{staticStyle:{width:"150px"},attrs:{showSearch:"",allowClear:"",placeholder:"请选择"},on:{select:e.handleUnitParse},model:{value:e.weightUnit,callback:function(t){e.weightUnit=t},expression:"weightUnit"}},e._l(e.weightUnitList,(function(t){return a("a-select-option",{key:t.weightUnitCd},[e._v(" "+e._s(t.weightUnitName)+" ")])})),1)],1)])],1)],1)],1),a("ec-panel-body",{attrs:{height:"100%"}},[a("ec-table",{ref:"table",attrs:{border:"",height:"100%",auto:!1,pagination:e.pagination,data:e.tableData.rows,loading:e.loading,"highlight-current-row":""},on:{"page-action":e.handlePagination}},[a("ec-table-col",{attrs:{type:"checkbox",width:"50",align:"center"}}),a("ec-table-col",{attrs:{title:"序号",type:"seq",width:"70",align:"center"}}),a("ec-table-col",{attrs:{field:"tranYear",title:"调拨年度",align:"center",width:"150"}}),a("ec-table-col",{attrs:{field:"applyOrgName",title:"领用单位",align:"left","min-width":"180"}}),a("ec-table-col",{attrs:{field:"storeName",title:"仓库",align:"left","min-width":"180"}}),a("ec-table-col",{attrs:{field:"leafTypeName",title:"烟叶类型",align:"left",width:"150"}}),a("ec-table-col",{attrs:{field:"leafFormName",title:"烟叶形态",align:"left",width:"150"}}),a("ec-table-col",{attrs:{field:"applyNum",title:"申请码包数量",align:"right",width:"150"}}),a("ec-table-col",{attrs:{field:"applyWeight",title:"申请量",align:"right",width:"150"}}),a("ec-table-col",{attrs:{field:"allotNum",title:"分配码包数量",align:"right",width:"150"}}),a("ec-table-col",{attrs:{field:"collectNum",title:"领用码包数量",align:"right",width:"150"}}),a("ec-table-col",{attrs:{title:"操作",align:"center",width:"150",fixed:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return[a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.onDetail(i)}}},[e._v("详细")])]}}])})],1)],1)],1),a("receive-detail",{ref:"ReceiveDetail"})],1)],1)},n=[],r=a("5530"),o=a("c7eb"),l=a("1da1"),s=(a("e906"),a("dd14")),c=a.n(s),p=(a("6198"),a("6fc0")),d=a.n(p),u=(a("d3b7"),a("e9c4"),a("159b"),a("b680"),a("7db0"),a("99af"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ec-drawer",{staticClass:"ec-draw-form",attrs:{title:"详细",visible:e.visible,size:"large"},on:{close:e.onclose}},[a("ec-container",{attrs:{height:"100%"}},[a("ec-container-header",[a("ec-panel-item",[a("ec-panel-item-left",[a("ec-header",{attrs:{title:"分配明细",icon:"onetomany","color-code":"008"}})],1)],1)],1),a("ec-container-body",[a("ec-panel",[a("ec-panel-body",[a("ec-v-layout",[a("ec-v-item",[a("ec-table",{ref:"table",attrs:{border:"",data:e.tableData,loading:e.loading,"row-select":""}},[a("ec-table-col",{attrs:{title:"序号",type:"seq",width:"70",align:"center"}}),a("ec-table-col",{attrs:{field:"leafTypeName",title:"烟叶类型",align:"left","min-width":"150"}}),a("ec-table-col",{attrs:{field:"leafFormName",title:"烟叶形态",align:"left",width:"150"}}),a("ec-table-col",{attrs:{field:"packType",title:"包装类型",align:"left",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var i=t.row;return e._l(e.packTypeList,(function(t){return a("div",{key:t.enumKey},[i.packType===t.enumKey?a("span",[e._v(" "+e._s(t.name))]):e._e()])}))}}])}),a("ec-table-col",{attrs:{field:"spec",title:"规格（KG/件）",align:"right",width:"150"}}),a("ec-table-col",{attrs:{field:"allotNum",title:"分配码包数量",align:"right",width:"150"}}),a("ec-table-col",{attrs:{field:"collectNum",title:"领用码包数量",align:"right",width:"150"}})],1)],1)],1)],1)],1)],1),a("ec-container-footer",{attrs:{fixed:""}},[a("a-space",[a("a-button",{on:{click:e.onclose}},[e._v("关闭")])],1)],1)],1)],1)}),f=[],y=(a("a9e3"),a("d81d"),a("caad"),{name:"ExecutionEnterManage",components:{},data:function(){return{visible:!1,queryItems:{leafTypeCode:"10",submitStateFlag:!0,busiYear:""},nowYear:"",loading:!1,leafTypeCd:"",leafTypeList:[{leafTypeCode:"10",leafTypeName:"烤烟"},{leafTypeCode:"20",leafTypeName:"晾晒烟(全部)"},{leafTypeCode:"2013",leafTypeName:"晾晒烟(雪茄烟叶)"}],oldDataRow:[],orgCode:"",weightUnitList:[{weightUnitCd:1,weightUnitName:"公斤",isSelected:!1},{weightUnitCd:50,weightUnitName:"担",isSelected:!1},{weightUnitCd:5e5,weightUnitName:"万担",isSelected:!1}],packTypeList:[],tableData:{rows:[]}}},created:function(){var e=this.$router.history.current.query.appCode;this.appCode=e||"CM"},methods:{show:function(e){this.visible=!0;var t=e.tableData||[];this.tableData=t,this.packTypeList=e.packTypeList||[]},sumNum:function(e,t){var a=0;return e.forEach((function(e){a+=Number(e[t])})),a.toFixed(2)},footerMethod:function(e){var t=this,a=e.columns,i=e.data;return[a.map((function(e,a){return 0===a?"合计":["collectNum"].includes(e.property)?t.sumNum(i,e.property):null}))]},onclose:function(){this.tableData=[],this.visible=!1}}}),h=y,m=a("2877"),g=Object(m["a"])(h,u,f,!1,null,null,null),b=g.exports,w=a("6ea6"),v=a("2ef0"),C=a.n(v),T={name:"ExecutionManage",components:{ReceiveDetail:b,SelectPicker:d.a,OrgPicker:c.a},data:function(){return{objectData:{},busiYear:"",queryItems:{tranYear:"",applyOrgCode:void 0,storeCode:void 0,leafTypeCode:void 0,leafFormCode:void 0},defaultLeafFormCode:"",weightUnit:1,areaUnit:1e4,nowYear:"",loading:!1,leafTypeCd:"",leafTypeList:[],oldLeafTypeList:[],oldDataRow:[],oldTotalData:[],totalData:{},isNullData:[],leafTypeName:"",beforeLeafTypeName:"",weightUnitList:[{weightUnitCd:1,weightUnitName:"公斤",isSelected:!1},{weightUnitCd:50,weightUnitName:"担",isSelected:!1}],visibleTranYear:"",storeList:[],orgCodeList:[],procOrgList:[],enumMap:{},packTypeList:[],leafFormList:[],params:{},businessOrgList:[],bizCode:"",replaceFields:{pkey:"parentBizCode",title:"orgName",key:"bizCode",children:"children"},pagination:{pageNumber:1,pageSize:10,total:0},tableData:{rows:[]}}},computed:{appConfig:function(){return this.$store.getters.getAppConfig}},created:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){var a,i,n,r,l,s,c,p,d,u,f,y,h,m,g;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return u=e.$router.history.current.query.appCode,e.appCode=u||"CM",f=["PC_PACK_TYPE"],y={enumTypeCodes:f},t.next=6,e.$apis.enum.index.getEnumType(y);case 6:return h=t.sent,m=(null===h||void 0===h?void 0:h.enumMap)||{},g=(null===m||void 0===m?void 0:m.PC_PACK_TYPE)||[],e.packTypeList=g,e.bizCode=null===(a=e.appConfig)||void 0===a?void 0:a.bizCode,e.orgCode=null===(i=e.appConfig)||void 0===i?void 0:i.orgCode,e.orgName=null===(n=e.appConfig)||void 0===n?void 0:n.orgName,e.queryItems.tranYear=null===(r=e.appConfig)||void 0===r||null===(l=r.yearValueMap)||void 0===l?void 0:l.SM_YEAR,e.nowYear=null===(s=e.appConfig)||void 0===s||null===(c=s.yearValueMap)||void 0===c?void 0:c.SM_YEAR,e.visibleTranYear=null===(p=e.appConfig)||void 0===p||null===(d=p.yearValueMap)||void 0===d?void 0:d.SM_YEAR,t.next=18,e.handleQueryBusinessOrgList();case 18:e.queryItems.applyOrgCode=e.bizCode,e.handleStore();case 20:case"end":return t.stop()}}),t)})))()},methods:{handleLeafType:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.beforeLeafTypeName=e.handleLeafTypeName(e.queryItems.leafTypeCode),t.next=3,e.$apis.pcm.penatly.apply.spinnerLeafForm({leafTypeCodes:[e.queryItems.leafTypeCode]}).then((function(t){e.leafFormList=null===t||void 0===t?void 0:t.rows,e.leafFormList.some((function(t){return"101"===t.leafFormCode&&(e.queryItems.leafFormCode=t.leafFormCode,console.log(e.queryItems.leafFormCode),!0)}))}));case 3:case"end":return t.stop()}}),t)})))()},handleQueryBusinessOrgList:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){var a,i;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return a={busiYear:e.nowYear,orgTypeEk:"TOBACCO",orgLevelEk:"6",parentBizCode:e.bizCode},t.next=3,e.$apis.common.index.queryTreeByCode(a);case 3:i=t.sent,e.businessOrgList=i.rows||[];case 5:case"end":return t.stop()}}),t)})))()},onFetchBusinessOrgList:function(){var e=this;return new Promise((function(t){var a=Object(w["treeFormatList"])(e.businessOrgList,e.replaceFields);t(a)}))},handleStore:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){var a,i,n,r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.queryItems.storeCode=void 0,a={bizCode:e.queryItems.applyOrgCode,busiYear:e.queryItems.tranYear},t.next=4,e.$apis.common.index.queryStore(a);case 4:i=t.sent,n=(null===i||void 0===i?void 0:i.rows)||[],n&&n.length>0&&(n.unshift({storeName:"全部",storeCode:""}),e.queryItems.storeCode=null===(r=n[0])||void 0===r?void 0:r.storeCode),e.storeList=n;case 8:case"end":return t.stop()}}),t)})))()},handleUnitParse:function(){var e=this,t=JSON.parse(JSON.stringify(this.oldDataRow));t.forEach((function(t){var a=t;a.totalWeight=(t.totalWeight/e.weightUnit).toFixed(2),a.leftWeight=(t.leftWeight/e.weightUnit).toFixed(2),a.applyWeight=(t.applyWeight/e.weightUnit).toFixed(2)}));var a=JSON.parse(JSON.stringify(this.oldTotalData));a.totalWeight=(a.totalWeight/this.weightUnit).toFixed(2),a.leftWeight=(a.leftWeight/this.weightUnit).toFixed(2),a.applyWeight=(a.applyWeight/this.weightUnit).toFixed(2),this.totalData=a,this.tableData.rows=t},handlePagination:function(e,t){var a=this;return Object(l["a"])(Object(o["a"])().mark((function i(){return Object(o["a"])().wrap((function(i){while(1)switch(i.prev=i.next){case 0:return a.pagination.pageNumber=e,a.pagination.pageSize=t,i.next=4,a.handleGetLeafTypeList();case 4:case"end":return i.stop()}}),i)})))()},handleGetLeafTypeList:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){var a,i,n,r,l;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null!==(a=e.leafTypeList)&&void 0!==a&&a.length){t.next=11;break}return t.next=3,e.$apis.common.index.queryLeafType({});case 3:return n=t.sent,r=(null===n||void 0===n?void 0:n.rows)||[],e.oldLeafTypeList=C.a.cloneDeep(r),r&&r.length>0&&r.unshift({leafTypeName:"全部",leafTypeCode:""}),e.leafTypeList=r,e.leafTypeList.some((function(t){return"烤烟"===t.leafTypeName&&(e.leafTypeCd=t.leafTypeCode,e.queryItems.leafTypeCode=t.leafTypeCode,e.leafTypeName="烤烟",!0)})),t.next=11,e.handleLeafType();case 11:!e.queryItems.leafTypeCode&&null!==(i=e.leafTypeList)&&void 0!==i&&i.length&&(l=e.leafTypeList[0].leafTypeCode,e.leafTypeCd=l,e.queryItems.leafTypeCode=l,e.leafTypeName=e.leafTypeList[0].leafTypeName),e.onQuery();case 13:case"end":return t.stop()}}),t)})))()},onQuery:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){var a,i;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.loading=!0,e.leafTypeName=e.beforeLeafTypeName||e.leafTypeName,e.visibleTranYear=e.queryItems.tranYear,a=Object(r["a"])({applyType:"BACK_CP",pageNo:e.pagination.pageNumber,pageSize:e.pagination.pageSize},e.queryItems),console.log(JSON.stringify(a)),t.next=7,e.$apis.pcm.penatly.apply.pageConfCp(a).then((function(t){var a=t.rows||[];e.pagination.total=t.totalRows,e.oldDataRow=JSON.parse(JSON.stringify(a))})).catch((function(e){console.log(e)})).finally((function(){e.loading=!1,e.selectedRows=[]}));case 7:return e.params=a,t.next=10,e.$apis.pcm.penatly.apply.queryHead(a);case 10:i=t.sent,console.log("汇总数据：".concat(JSON.stringify(i))),e.oldTotalData=JSON.parse(JSON.stringify(i)),e.handleUnitParse();case 14:case"end":return t.stop()}}),t)})))()},onDetail:function(e){var t=this;return Object(l["a"])(Object(o["a"])().mark((function a(){var i,n,r,l;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return i=t.params,i.applyOrgCode=e.applyOrgCode,a.next=4,t.$apis.pcm.penatly.apply.queryDetail(i);case 4:n=a.sent,r=t.weightUnitList.find((function(e){return e.weightUnitCd===t.weightUnit})),n.forEach((function(e){var a=e;a.applyWeight=(e.applyWeight/t.weightUnit).toFixed(2)})),l={tableData:n,packTypeList:t.packTypeList,selectedRow:e,weightUnitObj:r},t.$refs.ReceiveDetail.show(l);case 9:case"end":return a.stop()}}),a)})))()},onReset:function(){var e=this;return Object(l["a"])(Object(o["a"])().mark((function t(){return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return e.queryItems.tranYear=e.nowYear,e.queryItems.leafTypeCode=e.leafTypeCd,e.queryItems.storeCode=void 0,e.queryItems.applyOrgCode=e.bizCode,t.next=6,e.handleLeafType();case 6:e.handleStore(),e.beforeLeafTypeName=e.handleLeafTypeName(e.leafTypeCd),e.$refs.table.pageAction(1);case 9:case"end":return t.stop()}}),t)})))()},handleLeafTypeName:function(e){var t=this.leafTypeList.find((function(t){return t.leafTypeCode===e}));return null===t||void 0===t?void 0:t.leafTypeName},selectAllEvent:function(e){var t=e.checked,a=e.records;console.log("".concat(t,"-选中所有records包含选中的所以对象----").concat(JSON.stringify(a))),this.selectedRows=a},selectRowChange:function(e){var t=e.checked,a=e.records;console.log("".concat(t,"-选择改变时会把records包含选中的所以对象----").concat(JSON.stringify(a))),this.selectedRows=a}}},O=T,N=(a("eccd"),Object(m["a"])(O,i,n,!1,null,"5058dce2",null));t["default"]=N.exports},"53bf":function(e,t,a){},5530:function(e,t,a){"use strict";a.d(t,"a",(function(){return r}));a("b64b"),a("a4d3"),a("4de4"),a("d3b7"),a("e439"),a("159b"),a("dbb4");function i(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function n(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);t&&(i=i.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,i)}return a}function r(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?n(Object(a),!0).forEach((function(t){i(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):n(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}},eccd:function(e,t,a){"use strict";a("53bf")}}]);
//# sourceMappingURL=chunk-23fb8f0e.b481dbd3.js.map