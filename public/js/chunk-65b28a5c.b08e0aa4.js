(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-65b28a5c"],{"11c8":function(e,t,a){"use strict";a("9f9c")},"931f":function(e,t,a){"use strict";a.r(t);var n=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ec-container",{attrs:{height:"100%"}},[a("ec-container-header",[a("ec-panel-item",[a("ec-panel-item-left",[a("ec-header",{attrs:{title:"收购计划执行量调整下达",icon:"onetomany","color-code":"008"}})],1)],1)],1),a("ec-container-body",[a("ec-panel",{attrs:{auto:!1}},[a("ec-panel-toolbar",[a("ec-query-panel",{attrs:{colCount:e.colCount},on:{query:function(t){return e.$refs.table.pageAction(1)},reset:e.onReset}},[a("ec-query-item",{attrs:{label:"烟叶类型"}},[a("ec-select",{attrs:{showSearch:"",allowClear:"",placeholder:"请选择"},model:{value:e.queryItems.leafTypeCode,callback:function(t){e.$set(e.queryItems,"leafTypeCode",t)},expression:"queryItems.leafTypeCode"}},e._l(e.leafTypeList,(function(t){return a("a-select-option",{key:t.leafTypeCode},[e._v(" "+e._s(t.leafTypeName)+" ")])})),1)],1),a("ec-query-item",{attrs:{label:"下达状态"}},[a("a-select",{attrs:{"allow-clear":"",placeholder:"请选择"},model:{value:e.queryItems.releaseState,callback:function(t){e.$set(e.queryItems,"releaseState",t)},expression:"queryItems.releaseState"}},e._l(e.workIssuedState,(function(t){return a("a-select-option",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a("ec-query-item",{attrs:{label:"操作类型"}},[a("a-select",{attrs:{"allow-clear":"",placeholder:"请选择"},model:{value:e.queryItems.oprType,callback:function(t){e.$set(e.queryItems,"oprType",t)},expression:"queryItems.oprType"}},e._l(e.workOptType,(function(t){return a("a-select-option",{key:t.id},[e._v(" "+e._s(t.name)+" ")])})),1)],1)],1),a("ec-divider")],1),a("ec-panel-header",[a("ec-panel-item",[a("ec-panel-item-left",[a("a-button",{attrs:{type:"primary"},on:{click:e.onIssued}},[e._v("下达")]),a("a-button",{on:{click:e.onExport}},[e._v("导出")])],1),a("ec-panel-item-right",[a("a-space",{attrs:{size:15}},[a("span",[e._v("种植收购年度："+e._s(e.queryItems.busiYear)+"年")]),a("span",[e._v("重量单位："),a("ec-select",{staticStyle:{width:"150px"},attrs:{showSearch:"",allowClear:"",placeholder:"请选择"},on:{select:function(t){return e.handleUnitParse()}},model:{value:e.weightUnit,callback:function(t){e.weightUnit=t},expression:"weightUnit"}},e._l(e.weightUnitList,(function(t){return a("a-select-option",{key:t.weightUnitCd},[e._v(" "+e._s(t.weightUnitName)+" ")])})),1)],1),a("span",[e._v("面积单位："),a("ec-select",{staticStyle:{width:"150px"},attrs:{showSearch:"",allowClear:"",placeholder:"请选择"},on:{select:function(t){return e.handleUnitParse()}},model:{value:e.areaUnit,callback:function(t){e.areaUnit=t},expression:"areaUnit"}},e._l(e.areaUnitList,(function(t){return a("a-select-option",{key:t.areaUnitCd},[e._v(" "+e._s(t.areaUnitName)+" ")])})),1)],1)])],1)],1)],1),a("ec-panel-body",[a("ec-table",{ref:"table",attrs:{border:"",height:"100%",auto:!1,pagination:e.pagination,data:e.tableData.rows,loading:e.loading,"show-footer":"","footer-method":e.footerMethod,"highlight-current-row":""},on:{"page-action":e.handlePagination,"checkbox-all":e.selectAllEvent,"checkbox-change":e.selectRowChange}},[a("ec-table-col",{attrs:{type:"checkbox",width:"50",align:"center"}}),a("ec-table-col",{attrs:{title:"序号",type:"seq",width:"70",align:"center"}}),a("ec-table-col",{attrs:{field:"orgName",title:"单位名称",align:"left","min-width":"200"}}),a("ec-table-col",{attrs:{field:"recordDate",title:"调整日期",align:"center",width:"150"}}),a("ec-table-colgroup",{attrs:{title:"收购计划执行量"}},[a("ec-table-col",{attrs:{field:"aaPlanTotalWeight",title:"合计",align:"center",width:"120"}}),a("ec-table-col",{attrs:{field:"aaPlanInnerWeight",title:"国内",align:"center",width:"120"}}),a("ec-table-col",{attrs:{field:"aaPlanExportWeight",title:"出口备货",align:"center",width:"100"}})],1),a("ec-table-col",{attrs:{field:"aaPlanPlantArea",title:"种植面积",align:"right",width:"120"}}),a("ec-table-col",{attrs:{field:"remark",title:"办理依据",align:"left",width:"150"}}),a("ec-table-col",{attrs:{field:"releaseState",title:"下达状态",align:"center",width:"100"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return["1"===n.releaseState?a("div",[a("span",[e._v("已下达")])]):a("div",[a("span",[e._v("未下达")])])]}}])}),a("ec-table-col",{attrs:{field:"issuedTime",title:"下达日期",align:"center",width:"130"}}),a("ec-table-col",{attrs:{title:"操作",align:"center",width:"150"},scopedSlots:e._u([{key:"default",fn:function(t){var n=t.row;return[a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.onDetail(n)}}},[e._v("详细")])]}}])})],1)],1)],1),a("detail",{ref:"Detail"})],1)],1)},i=[],r=a("c7eb"),l=a("1da1"),o=(a("e9c4"),a("d3b7"),a("159b"),a("b680"),a("7db0"),a("a9e3"),a("d81d"),a("caad"),a("99af"),function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("ec-drawer",{staticClass:"ec-draw-form",attrs:{title:"详细",visible:e.visible,size:"large"},on:{close:e.onclose}},[a("ec-container",{attrs:{height:"auto",fixed:"top bottom","color-code":"007"}},[a("ec-container-body",[a("ec-panel",{attrs:{"color-code":"002"}},[a("ec-panel-header",[a("ec-panel-item-left",{staticClass:"ec-panel-item-left"},[a("div",{staticClass:"ec-panel-title"},[a("div",{staticClass:"ec-bar bg-color-1"}),a("div",{staticClass:"ec-title",staticStyle:{color:"rgb(24, 144, 255)","font-weight":"700"}},[e._v(" 主信息 ")])])]),a("ec-panel-item-right",[a("div",{staticStyle:{display:"inline-block"}},[a("span",{staticStyle:{"margin-left":"14px"}},[e._v("种植收购年度："+e._s(e.nowYear)+"年;单位："+e._s(e.weightUnitName)+"、"+e._s(e.areaUnitName))])])])],1),a("ec-panel-item",[a("ec-form",{ref:"ruleForm1",attrs:{model:e.formData,rules:e.rules}},[a("a-row",{attrs:{type:"flex",gutter:12}},[a("a-col",{attrs:{span:8}},[a("a-form-model-item",{attrs:{label:"调整日期"}},[e._v(e._s(e.formData.recordDate||"--"))])],1),a("a-col",{attrs:{span:8}},[a("a-form-model-item",{attrs:{label:"烟叶类型"}},[e._v(e._s(e.formData.leafTypeName||"--"))])],1),a("a-col",{attrs:{span:8}},[a("a-form-model-item",{attrs:{label:"单位名称"}},[e._v(e._s(e.formData.orgName||"--"))])],1),a("a-col",{attrs:{span:8}},[a("a-form-model-item",{attrs:{label:"操作类型"}},[e._v(e._s(e.formData.oprTypeName||"--"))])],1),a("a-col",{attrs:{span:12}},[a("a-form-model-item",{attrs:{label:"办理依据"}},[e._v(e._s(e.formData.remark||"--"))])],1)],1)],1)],1)],1),a("ec-panel",{attrs:{"color-code":"002"}},[a("ec-panel-header",[a("ec-panel-item-left",{staticClass:"ec-panel-item-left"},[a("div",{staticClass:"ec-panel-title"},[a("div",{staticClass:"ec-bar bg-color-1"}),a("div",{staticClass:"ec-title",staticStyle:{color:"rgb(24, 144, 255)","font-weight":"700"}},[e._v(" 明细信息 ")])])])],1),a("ec-panel-body",[a("ec-table",{ref:"xTable",staticClass:"my-xtable-antd",attrs:{border:"","show-overflow":"","keep-source":"",data:e.tableData}},[a("ec-table-col",{attrs:{field:"name",title:"",align:"left","min-width":"150"}}),a("ec-table-colgroup",{attrs:{title:"收购计划执行量"}},[a("ec-table-col",{attrs:{field:"planTotalWeight",title:"合计",align:"center",width:"200"}}),a("ec-table-col",{attrs:{field:"planInnerWeight",title:"国内",align:"center",width:"200"}}),a("ec-table-col",{attrs:{field:"planExportWeight",title:"出口备货",align:"center",width:"200"}})],1),a("ec-table-col",{attrs:{field:"planPlantArea",title:"种植面积",align:"right",width:"200"}})],1)],1)],1)],1),a("ec-container-footer",{attrs:{fixed:""}},[a("a-space",[a("a-button",{on:{click:e.onclose}},[e._v("关闭")])],1)],1)],1)],1)}),s=[],c=(a("b0c0"),a("a434"),{name:"ExecutionAuditAdjustDelManage",data:function(){return{tableData:[],data:{},leafTypeName:"",leafTypeCd:"",weightUnitName:"",areaUnitName:"",nowYear:"",rowData:"",visible:!1,isShowSaveAndAdd:!0,ruleForm:{},leafTypeList:[],workOptType:[{id:"0",name:"减量"},{id:"1",name:"增量"}],formData:{leafTypeCode:"",orgName:"",oprType:"",remark:""},beforeAjustData:{},rules:{oprType:{required:!0,message:"请选择操作类型",trigger:"blur"},orgName:{required:!0,message:"请选择单位",trigger:"blur"},leafTypeCode:{required:!0,message:"请选择烟叶类型",trigger:"blur"}}}},methods:{handleGetBeforeAdjustData:function(){var e=this;return Object(l["a"])(Object(r["a"])().mark((function t(){var a;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return t.next=2,e.$apis.bpm.executionAudit.beforeAdjust({leafTypeCode:e.leafTypeCode,orgCode:e.orgCode,busiYear:e.nowYear});case 2:a=t.sent,a.name="调整前",e.beforeAjustData=a,e.beforeAjustData=e.handleDataParse();case 6:case"end":return t.stop()}}),t)})))()},handleDataParse:function(){var e=this.beforeAjustData;return e.planTotalWeight=(e.aaPlanTotalWeight/this.weightUnit).toFixed(2),e.planInnerWeight=(e.aaPlanInnerWeight/this.weightUnit).toFixed(2),e.planExportWeight=(e.aaPlanExportWeight/this.weightUnit).toFixed(2),e.planPlantArea=(e.aaPlanPlantArea/this.areaUnit).toFixed(2),e},handleCurrentDataChange:function(){this.tableData.splice(this.tableData.length-1,1),this.handleAfterAdjustData()},show:function(e){var t=this;return Object(l["a"])(Object(r["a"])().mark((function a(){var n,i,l,o;return Object(r["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:return t.visible=!0,t.data=e,n=e.selectedRows,t.leafTypeCode=n.leafTypeCode,t.orgCode=n.orgCode,t.leafTypeName=e.leafTypeObj.leafTypeName,t.weightUnitName=e.weightUnitObj.weightUnitName,t.weightUnit=e.weightUnitObj.weightUnitCd,t.areaUnitName=e.areaUnitObj.areaUnitName,t.areaUnit=e.areaUnitObj.areaUnitCd,t.nowYear=e.nowYear,t.formData=n,i=t.leafTypeList.find((function(e){return e.leafTypeCode===n.leafTypeCode})),t.formData.leafTypeName=null===i||void 0===i?void 0:i.leafTypeName,l=t.workOptType.find((function(e){return e.id===n.oprType})),t.formData.oprTypeName=null===l||void 0===l?void 0:l.name,a.next=18,t.handleGetBeforeAdjustData();case 18:t.tableData.push(t.beforeAjustData),o={name:"本次调整",planTotalWeight:n.planTotalWeight||0,planInnerWeight:n.planInnerWeight||0,planExportWeight:n.planExportWeight||0,planPlantArea:n.planPlantArea||0},t.tableData.push(o),t.handleAfterAdjustData();case 22:case"end":return a.stop()}}),a)})))()},sumNum:function(e,t){var a=0;return e.forEach((function(e){var n=e;n[t]=n[t]||0,a+=Number(e[t])})),a.toFixed(2)},handleAfterAdjustData:function(){var e=this,t=["planTotalWeight","planInnerWeight","planExportWeight","planPlantArea"],a={name:"调整后"};t.forEach((function(t){a[t]=e.sumNum(e.tableData,t)})),this.tableData.push(a)},handleGetLeafTypeList:function(){var e=this;this.$apis.tbm.tabaccoType.query({}).then((function(t){e.leafTypeList=(null===t||void 0===t?void 0:t.rows)||[];var a=e.leafTypeList;a&&a.length>0&&(e.leafTypeCd=(a.find((function(e){return"烤烟"===e.leafTypeName}))||{}).leafTypeCode,console.log("0000000000000000000=".concat(e.formData.leafTypeCode)),e.formData.leafTypeCode=e.leafTypeCd)}))},onclose:function(){this.$refs.ruleForm1.resetFields(),this.tableData=[],this.beforeAjustData={},this.visible=!1}}}),d=c,u=a("2877"),p=Object(u["a"])(d,o,s,!1,null,null,null),f=p.exports,h={name:"ExecutionIssuedAdjustManage",components:{Detail:f},data:function(){return{queryItems:{busiYear:"",leafTypeCode:"10",releaseState:"0",oprType:""},bizCode:"",weightUnit:5e5,areaUnit:1e4,colCount:5,nowYear:"",loading:!1,leafTypeCd:"",leafTypeList:[{leafTypeCode:"10",leafTypeName:"烤烟"},{leafTypeCode:"20",leafTypeName:"晾晒烟(全部)"},{leafTypeCode:"2013",leafTypeName:"晾晒烟(雪茄烟叶)"}],oldDataRow:[],workIssuedState:[{id:"0",name:"未下达"},{id:"1",name:"已下达"}],workOptType:[{id:"",name:"全部"},{id:"0",name:"调减"},{id:"1",name:"调增"}],weightUnitList:[{weightUnitCd:1,weightUnitName:"公斤",isSelected:!1},{weightUnitCd:50,weightUnitName:"担",isSelected:!1},{weightUnitCd:5e5,weightUnitName:"万担",isSelected:!1}],areaUnitList:[{areaUnitCd:1e4,areaUnitName:"万亩"},{areaUnitCd:1,areaUnitName:"亩"}],pagination:{pageNumber:1,pageSize:10,total:0},tableData:{rows:[]}}},computed:{appConfig:function(){return this.$store.getters.getAppConfig}},created:function(){var e=this.$router.history.current.query.appCode;this.appCode=e||"CM"},methods:{handleUnitParse:function(){var e=this,t=[];console.log("單位：".concat(this.weightUnit));var a=JSON.parse(JSON.stringify(this.oldDataRow))||[];a.forEach((function(a){var n=a;n.aaPlanTotalWeight=(n.aaPlanTotalWeight/e.weightUnit).toFixed(2),n.aaPlanInnerWeight=(n.aaPlanInnerWeight/e.weightUnit).toFixed(2),n.aaPlanExportWeight=(n.aaPlanExportWeight/e.weightUnit).toFixed(2),n.aaPlanPlantArea=(n.aaPlanPlantArea/e.areaUnit).toFixed(2),t.push(n)})),console.log(t),this.tableData.rows=t},handlePagination:function(e,t){var a=this;return Object(l["a"])(Object(r["a"])().mark((function n(){return Object(r["a"])().wrap((function(n){while(1)switch(n.prev=n.next){case 0:return a.pagination.pageNumber=e,a.pagination.pageSize=t,n.next=4,a.handleGetLeafTypeList();case 4:case"end":return n.stop()}}),n)})))()},handleGetLeafTypeList:function(){var e=this;return Object(l["a"])(Object(r["a"])().mark((function t(){var a,n,i,l,o;return Object(r["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:if(null!==(a=e.leafTypeList)&&void 0!==a&&a.length){t.next=6;break}return t.next=3,e.$apis.bpm.executionEnter.queryLeafType({});case 3:n=t.sent,e.leafTypeList=(null===n||void 0===n?void 0:n.rows)||[],e.leafTypeList.some((function(t){return"烤烟"===t.leafTypeName&&(e.leafTypeCd=t.leafTypeCode,e.queryItems.leafTypeCode=t.leafTypeCode,!0)}));case 6:if(e.orgCode){t.next=12;break}return t.next=9,e.$apis.bim.curOrg.get({});case 9:i=t.sent,e.bizCode=null===i||void 0===i?void 0:i.bizCode,e.orgCode=null===i||void 0===i?void 0:i.orgUniqueCode;case 12:if(!(!e.queryItems.busiYear>0)){t.next=19;break}return l={bizCode:e.appConfig.bizCode,appCode:e.appCode||"CM",yearTypeCode:"BIZ_YEAR"},t.next=16,e.$apis.bpm.executionEnter.getBuYear(l);case 16:o=t.sent,e.queryItems.busiYear=null===o||void 0===o?void 0:o.yearValue,e.nowYear=null===o||void 0===o?void 0:o.yearValue;case 19:e.onQuery();case 20:case"end":return t.stop()}}),t)})))()},onQuery:function(){var e=this;this.loading=!0;var t={pageNo:this.pagination.pageNumber,pageSize:this.pagination.pageSize,leafTypeCode:this.queryItems.leafTypeCode,busiYear:this.queryItems.busiYear,releaseState:this.queryItems.releaseState,oprType:this.queryItems.oprType};console.log(t),this.$apis.bpm.executionIssued.queryAdjust(t).then((function(t){e.tableData=t;var a=e.tableData.rows;e.pagination.total=t.totalRows,e.oldDataRow=JSON.parse(JSON.stringify(a)),console.log("66666".concat(JSON.stringify(e.oldDataRow))),e.handleUnitParse()})).catch((function(e){console.log(e)})).finally((function(){e.loading=!1,e.selectedRows=[]}))},onIssued:function(){var e=this,t=this.$createElement;if(!this.selectedRows||this.selectedRows.length<=0)this.$message.error("请选择一条数据再下达");else{var a=this.selectedRows.find((function(e){return!("3"===e.auditState&&"0"===e.releaseState)}));console.log("--".concat(JSON.stringify(a))),a?this.$message.error("存在已下达数据，请勿重复下达"):this.$confirm({title:"是否执行该操作?",content:function(){return t("div",{style:"color:red;"},["是否确认下达选中的数据，确认请点击'确认'按钮，取消点击'取消'按钮。"])},onOk:function(){e.loading=!0;for(var t=[],a=0;a<e.selectedRows.length;a++)t.push(e.selectedRows[a].oprRecordId);console.log("参数：".concat(JSON.stringify(t))),e.$apis.bpm.executionIssued.issuedAdjust({oprRecordIds:t}).then((function(t){console.log(JSON.stringify(t)),t.result?(e.loading=!1,e.onQuery(),e.$message.success("操作成功")):e.$message.error("操作失败")}))}})}},onReset:function(){this.queryItems.leafTypeCode=this.leafTypeCd,this.queryItems.busiYear=this.nowYear,this.queryItems.releaseState="0",this.queryItems.oprType="",this.$refs.table.pageAction(1)},onExport:function(){this.$message.error("模块开发中！")},onDetail:function(e){var t=this.handleData(),a=JSON.parse(JSON.stringify(e));t.selectedRows=a,this.$refs.Detail.show(t)},handleData:function(){var e=this,t=this.leafTypeList.find((function(t){return t.leafTypeCode===e.queryItems.leafTypeCode})),a=this.weightUnitList.find((function(t){return t.weightUnitCd===e.weightUnit})),n=this.areaUnitList.find((function(t){return t.areaUnitCd===e.areaUnit})),i={leafTypeObj:t,weightUnitObj:a,areaUnitObj:n,nowYear:this.queryItems.busiYear};return i},handleLeafTypeName:function(e){var t=this.leafTypeList.find((function(t){return t.leafTypeCode===e}));return null===t||void 0===t?void 0:t.leafTypeName},sumNum:function(e,t){var a=0;return e.forEach((function(e){a+=Number(e[t])})),a.toFixed(2)},footerMethod:function(e){var t=this,a=e.columns,n=e.data;return[a.map((function(e,a){return 0===a?"合计":["planTotalWeight","planInnerWeight","planExportWeight","planPlantArea"].includes(e.property)?t.sumNum(n,e.property):null}))]},selectAllEvent:function(e){var t=e.checked,a=e.records;console.log("".concat(t,"-选中所有records包含选中的所以对象----").concat(JSON.stringify(a))),this.selectedRows=a},selectRowChange:function(e){var t=e.checked,a=e.records;console.log("".concat(t,"-选择改变时会把records包含选中的所以对象----").concat(JSON.stringify(a))),this.selectedRows=a}}},g=h,m=(a("11c8"),Object(u["a"])(g,n,i,!1,null,"11326ee5",null));t["default"]=m.exports},"9f9c":function(e,t,a){}}]);
//# sourceMappingURL=chunk-65b28a5c.b08e0aa4.js.map