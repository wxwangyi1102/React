(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-80f2d72a"],{"02db":function(e,t,r){"use strict";r("f21b")},5530:function(e,t,r){"use strict";r.d(t,"a",(function(){return i}));r("b64b"),r("a4d3"),r("4de4"),r("d3b7"),r("e439"),r("159b"),r("dbb4");function a(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function n(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,a)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?n(Object(r),!0).forEach((function(t){a(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):n(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}},a3be:function(e,t,r){"use strict";r.r(t);var a=function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("ec-container",{staticClass:"brand",attrs:{height:"100%","color-code":"001",title:"卷烟品牌信息维护","show-title":""}},[r("ec-container-body",[r("ec-panel",{attrs:{auto:!1}},[r("ec-panel-toolbar",[r("ec-query-panel",{attrs:{defaultFold:!0},on:{query:function(t){return e.$refs.xTable.pageAction(1)},reset:e.resetHandle},scopedSlots:e._u([{key:"inner",fn:function(){},proxy:!0}])},[r("ec-query-item",{attrs:{label:"工业单位"}},[r("select-picker",{attrs:{title:"选择工业单位",lazy:!1,search:!1,fetchData:e.onFetchIndustryOrgList},model:{value:e.query.induOrgCode,callback:function(t){e.$set(e.query,"induOrgCode",t)},expression:"query.induOrgCode"}})],1)],1),r("ec-divider")],1),r("ec-panel-body",[r("ec-v-layout",{attrs:{auto:!1}},[r("ec-v-item",{attrs:{height:"auto"}},[r("ec-panel-toolbar",[r("ec-panel-item-left",[r("a-button",{attrs:{type:"primary"},on:{click:e.handleUpdate}},[e._v("新增")]),r("a-button",{attrs:{type:"primary",ghost:""},on:{click:e.handleDelete}},[e._v("删除")])],1)],1)],1),r("ec-v-item",[r("ec-table",{ref:"xTable",attrs:{height:"100%",auto:!1,pagination:e.pagination,data:e.tableData,loading:e.loading,"edit-config":{trigger:"click",mode:"row"},"row-select":""},on:{"page-action":e.queryHandle,"checkbox-all":e.selectAllEvent,"checkbox-change":e.selectRowChange}},[r("ec-table-col",{attrs:{type:"checkbox",width:"60",align:"center"}}),r("ec-table-col",{attrs:{type:"seq",title:"序号",width:"50",align:"center"}}),r("ec-table-col",{attrs:{field:"induOrgCode",title:"工业企业",align:"center"},scopedSlots:e._u([{key:"default",fn:function(t){var a=t.row;return[r("div",[e._v(" "+e._s(e._f("getNameBy")(a.induOrgCode,e.industryOrgList,{key:"bizCode",label:"orgName"}))+" ")])]}}])}),r("ec-table-col",{attrs:{field:"brandCode",title:"品牌编码",align:"center"}}),r("ec-table-col",{attrs:{field:"brandName",title:"品牌名称",align:"center"}})],1)],1)],1)],1)],1),r("business-org-manage-edit",{ref:"editRef",attrs:{industryOrgList:e.industryOrgList,replaceFields:e.replaceFields},on:{onQuery:function(t){return e.$refs.xTable.pageAction(1)}}})],1)],1)},n=[],i=r("5530"),o=r("c7eb"),s=r("1da1"),c=(r("6198"),r("6fc0")),l=r.n(c),u=(r("d3b7"),r("d81d"),r("e9c4"),function(){var e=this,t=e.$createElement,r=e._self._c||t;return r("div",[r("ec-drawer",{attrs:{title:"新增",visible:e.visible,size:"small","is-confirm":!0},on:{close:e.handleCancel}},[r("ec-container",{attrs:{height:"auto"}},[r("ec-container-body",[r("ec-panel",[r("ec-panel-item",[r("ec-form",{ref:"ruleForm",attrs:{model:e.formData,rules:e.rules}},[r("a-row",{attrs:{type:"flex",gutter:12}},[r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"品牌编码",prop:"brandCode"}},[r("a-input",{attrs:{placeholder:"请输入品牌编码",autocomplete:"off"},model:{value:e.formData.brandCode,callback:function(t){e.$set(e.formData,"brandCode",t)},expression:"formData.brandCode"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"工业企业",prop:"induOrgCode"}},[r("select-picker",{attrs:{placeholder:"请选择工业企业",title:"选择工业单位",lazy:!1,search:!1,fetchData:e.onFetchIndustryOrgList},model:{value:e.formData.induOrgCode,callback:function(t){e.$set(e.formData,"induOrgCode",t)},expression:"formData.induOrgCode"}})],1)],1),r("a-col",{attrs:{span:12}},[r("a-form-model-item",{attrs:{label:"品牌名称",prop:"brandName"}},[r("a-input",{attrs:{placeholder:"请输入品牌名称",autocomplete:"off"},model:{value:e.formData.brandName,callback:function(t){e.$set(e.formData,"brandName",t)},expression:"formData.brandName"}})],1)],1)],1)],1)],1)],1)],1),r("ec-container-footer",[r("a-button",{attrs:{type:"primary"},on:{click:e.handleSubmit}},[e._v("保存")]),r("a-button",{on:{click:e.handleCancel}},[e._v("关闭")])],1)],1)],1)],1)}),d=[],p=r("6ea6"),f={name:"brandEdit",components:{SelectPicker:l.a},props:{industryOrgList:{type:Array,default:function(){return[]}},replaceFields:{type:Object,default:function(){}}},data:function(){return{visible:!1,formData:{},rules:{induOrgCode:{required:!0,message:"请输入工业企业"},brandName:{required:!0,message:"请输入品牌名称"}}}},methods:{show:function(){this.visible=!0},onFetchIndustryOrgList:function(){var e=this;return new Promise((function(t){var r=Object(p["treeFormatList"])(e.industryOrgList,e.replaceFields);t(r)}))},handleSubmit:function(){var e=this;this.$refs.ruleForm.validate((function(t){t?e.$apis.apm.baseBrand.save(e.formData).then((function(){e.$message.success("操作成功！"),e.handleCancel(),e.$emit("onQuery")})):e.$message.error("验证不通过")}))},handleCancel:function(){this.visible=!1,this.$refs.ruleForm.resetFields()}}},b=f,g=(r("02db"),r("2877")),m=Object(g["a"])(b,u,d,!1,null,"930aaae0",null),h=m.exports,y={name:"baseBrand",components:{BusinessOrgManageEdit:h,SelectPicker:l.a},data:function(){return{isEdit:!1,query:{},loading:!1,tableData:[],pagination:{pageNumber:1,pageSize:10,total:0},industryOrgList:[],replaceFields:{pkey:"parentBizCode",title:"orgName",key:"bizCode",children:"children"}}},computed:{bizCode:function(){var e;return null===(e=this.$store.getters.getAppConfig)||void 0===e?void 0:e.bizCode},busiYear:function(){var e,t;return null===(e=this.$store.getters.getAppConfig)||void 0===e||null===(t=e.yearValueMap)||void 0===t?void 0:t.CENTER_YEAR}},created:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){var r;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r=e.$router.history.current.query.appCode,e.appCode=r||"CM",t.next=4,e.handleQueryIndustryOrgList();case 4:case"end":return t.stop()}}),t)})))()},methods:{resetHandle:function(){this.query={},this.$refs.xTable.pageAction(1)},handleQueryParams:function(e,t){var r=this.pagination;this.pagination.pageNumber=e||r.pageNumber,this.pagination.pageSize=t||r.pageSize;var a=Object(i["a"])(Object(i["a"])({},this.query),{},{pageNumber:r.pageNumber,pageSize:r.pageSize});return a},queryHandle:function(e,t){var r=this;return Object(s["a"])(Object(o["a"])().mark((function a(){var n;return Object(o["a"])().wrap((function(a){while(1)switch(a.prev=a.next){case 0:n=r.handleQueryParams(e,t),r.loading=!0,r.$apis.apm.baseBrand.query(n).then((function(e){r.pagination.total=e.totalRows,r.tableData=e.rows,r.loading=!1})).catch((function(e){r.loading=!1,console.log(e)}));case 3:case"end":return a.stop()}}),a)})))()},handleQueryIndustryOrgList:function(){var e=this;return Object(s["a"])(Object(o["a"])().mark((function t(){var r,a;return Object(o["a"])().wrap((function(t){while(1)switch(t.prev=t.next){case 0:return r={busiYear:e.busiYear,orgTypeEk:"INDUSTRY",orgLevelEk:"2",parentBizCode:e.bizCode},t.next=3,e.$apis.bim.org.queryBy(r);case 3:a=t.sent,e.industryOrgList=a.rows||[];case 5:case"end":return t.stop()}}),t)})))()},onFetchIndustryOrgList:function(){var e=this;return new Promise((function(t){var r=Object(p["treeFormatList"])(e.industryOrgList,e.replaceFields);t(r)}))},handleUpdate:function(e){this.$refs.editRef.show(e)},handleDelete:function(){var e=this,t=this.$createElement;!this.selectedRows||this.selectedRows.length<=0?this.$message.error("请选择一条数据再删除"):this.$confirm({title:"是否执行该操作?",content:function(){return t("div",{style:"color:red;"},["是否确认删除选中的数据，确认请点击'确认'按钮，取消点击'取消'按钮。"])},onOk:function(){e.loading=!0;var t=e.selectedRows.map((function(e){return e.bmBrandId}));console.log(t),e.$apis.apm.baseBrand.delete({bmBrandIds:t}).then((function(t){console.log(JSON.stringify(t)),t.result?(e.loading=!1,e.$refs.xTable.pageAction(1),e.$message.success("操作成功")):e.$message.error("操作失败")})).catch((function(t){e.loading=!1,t?e.$message.error(t.message||"操作失败"):e.$message.error("操作失败")}))}})},selectAllEvent:function(e){var t=e.records;this.selectedRows=t},selectRowChange:function(e){var t=e.records;this.selectedRows=t}}},v=y,O=Object(g["a"])(v,a,n,!1,null,"161364ac",null);t["default"]=O.exports},f21b:function(e,t,r){}}]);
//# sourceMappingURL=chunk-80f2d72a.592aa145.js.map