(window["webpackJsonp"]=window["webpackJsonp"]||[]).push([["chunk-da365a9c"],{"0aec":function(e,t,a){"use strict";a.r(t);var l=function(){var e=this,t=e.$createElement,a=e._self._c||t;return a("div",[a("ec-container",{attrs:{height:"100%"}},[a("ec-container-header",[a("ec-panel-item",[a("ec-panel-item-left",[a("ec-header",{attrs:{title:"进口烟到港码包分配领用",icon:"onetomany","color-code":"008"}})],1)],1)],1),a("ec-container-body",[a("ec-panel",[a("ec-panel-toolbar",{staticStyle:{overflow:"hidden"}},[a("ec-panel-item",[a("a-descriptions",{attrs:{bordered:"",column:4}},[a("a-descriptions-item",{attrs:{label:"调拨年度"}},[e._v(" "+e._s(e.curYear)+" ")]),a("a-descriptions-item",{attrs:{label:"国别"}},[e._v(" "+e._s(e.getConturyName(e.conturys)))]),a("a-descriptions-item",{attrs:{label:"烟叶类型"}},[e._v(" "+e._s(e.getLeafTypeName(e.leafTypeCodes))+" ")]),a("a-descriptions-item",{attrs:{label:"烟叶形态"}},[e._v(" "+e._s(e.getLeafFormName(e.leafFormCodes))+" ")]),a("a-descriptions-item",{attrs:{label:"计划衔接量"}},[e._v(" "+e._s(e.top.planTotalWeight)+" ")]),a("a-descriptions-item",{attrs:{label:"申请量"}},[e._v(" "+e._s(e.top.collectNum)+" ")]),a("a-descriptions-item",{attrs:{label:"分配码包数量"}},[e._v(" "+e._s(e.top.allotNum)+" ")]),a("a-descriptions-item",{attrs:{label:"领用码包数量"}},[e._v(" "+e._s(e.top.collectNum)+" ")])],1)],1),a("ec-panel-item",{staticStyle:{"margin-top":"10px"}},[a("ec-panel-toolbar",[a("ec-query-panel",{attrs:{defaultFold:"",layout:"horizontal",showFold:!0},on:{query:e.queryData,reset:e.onReset},scopedSlots:e._u([{key:"inner",fn:function(){return[a("ec-query-item",{attrs:{label:"领用单位"}},[a("org-picker",{attrs:{placeholder:"请选择"},model:{value:e.supplyOrgLists,callback:function(t){e.supplyOrgLists=t},expression:"supplyOrgLists"}})],1),a("ec-query-item",{attrs:{label:"烟叶类型"}},[a("ec-select",{attrs:{showSearch:"",allowClear:"",placeholder:"请选择"},model:{value:e.leafTypeCodes,callback:function(t){e.leafTypeCodes=t},expression:"leafTypeCodes"}},e._l(e.leafTypeCode,(function(t){return a("a-select-option",{key:t.leafTypeName,attrs:{value:t.leafTypeCode}},[e._v(" "+e._s(t.leafTypeName)+" ")])})),1)],1),a("ec-query-item",{attrs:{label:"烟叶形态"}},[a("ec-select",{attrs:{showSearch:"",allowClear:"",placeholder:"请选择"},model:{value:e.leafFormCodes,callback:function(t){e.leafFormCodes=t},expression:"leafFormCodes"}},e._l(e.leafFormCode,(function(t){return a("a-select-option",{key:t.leafFormName,attrs:{value:t.leafFormCode}},[e._v(" "+e._s(t.leafFormName)+" ")])})),1)],1),a("ec-query-item",{attrs:{label:"国别"}},[a("ec-select",{attrs:{showSearch:"",allowClear:"",placeholder:"请选择"},model:{value:e.conturys,callback:function(t){e.conturys=t},expression:"conturys"}},e._l(e.contury,(function(t){return a("a-select-option",{key:t.leafCountryName,attrs:{value:t.leafCountryCode}},[e._v(" "+e._s(t.leafCountryName)+" ")])})),1)],1)]},proxy:!0}])},[a("ec-query-item",{attrs:{label:"调拨年度"}},[a("ec-select",{attrs:{placeholder:"请选择"},model:{value:e.curYear,callback:function(t){e.curYear=t},expression:"curYear"}},e._l(e.prodYear,(function(t){return a("a-select-option",{key:t.value,attrs:{value:t.value}},[e._v(" "+e._s(t.name)+" ")])})),1)],1),a("ec-query-item",{attrs:{label:"供方单位"}},[a("org-picker",{attrs:{placeholder:"请选择"},on:{ok:e.getOrgName},model:{value:e.supplyOrgList,callback:function(t){e.supplyOrgList=t},expression:"supplyOrgList"}})],1),a("ec-query-item",{attrs:{label:"供方仓库"}},[a("ec-select",{attrs:{showSearch:"",allowClear:"",placeholder:"请选择"},model:{value:e.storeCode,callback:function(t){e.storeCode=t},expression:"storeCode"}},e._l(e.cmTStore,(function(t,l){return a("a-select-option",{key:l,attrs:{value:t.storeCode}},[e._v(" "+e._s(t.storeName)+" ")])})),1)],1)],1),a("ec-divider")],1)],1),a("a-form",{attrs:{"label-col":{span:22},"wrapper-col":{span:2}}},[a("a-form-item",{attrs:{label:"重量单位"}},[a("a-select",{attrs:{placeholder:"请选择公斤"},model:{value:e.unit,callback:function(t){e.unit=t},expression:"unit"}},[a("a-select-option",{attrs:{value:"公斤"}},[e._v(" 公斤 ")]),a("a-select-option",{attrs:{value:"担"}},[e._v(" 担 ")])],1)],1)],1),a("ec-panel-item",[a("ec-table",{ref:"table",attrs:{"show-footer":"",border:"",data:e.tableData,pagination:e.pagination},on:{"page-action":e.pageAction}},[a("ec-table-col",{attrs:{type:"seq",align:"center",width:"50",title:"序号"}}),a("ec-table-col",{attrs:{field:"tranYear",align:"center",title:"调拨年度"}}),a("ec-table-col",{attrs:{field:"supplyOrgName",align:"center",title:"供方单位"}}),a("ec-table-col",{attrs:{field:"storeName",align:"center",title:"供方仓库"}}),a("ec-table-col",{attrs:{field:"demandOrgName",align:"center",title:"领用单位"}}),a("ec-table-col",{attrs:{field:"leafCountryName",align:"center",title:"国别"}}),a("ec-table-col",{attrs:{field:"leafTypeName",align:"center",title:"烟叶类型"}}),a("ec-table-col",{attrs:{field:"leafFormName",align:"center",title:"烟叶形态"}}),a("ec-table-col",{attrs:{field:"planTotalWeight",align:"center",title:"计划衔接量"}}),a("ec-table-col",{attrs:{field:"applyNum",align:"center",title:"申请码包数量"}}),a("ec-table-col",{attrs:{field:"applyNum",align:"center",title:"申请量"}}),a("ec-table-col",{attrs:{field:"allotNum",align:"center",title:"分配码包数量"}}),a("ec-table-col",{attrs:{field:"applyWeight",align:"center",title:"领用码包数量"}}),a("ec-table-col",{attrs:{title:"操作",align:"right"},scopedSlots:e._u([{key:"default",fn:function(t){var l=t.row;return[a("a-button",{attrs:{type:"link"},on:{click:function(t){return e.detail(l)}}},[e._v("详细")])]}}])})],1)],1)],1)],1),a("ec-drawer",{attrs:{size:"large",visible:e.visibile,title:"详细"},on:{close:e.close}},[a("ec-container",{attrs:{height:"auto",fixed:"top bottom","color-code":"007"}},[a("ec-container-body",[a("ec-panel",{attrs:{auto:""}},[a("ec-panel-body",[a("div",{staticClass:"top"},[a("div",{staticClass:"left"},[a("div",{staticClass:"bg"}),a("span",[e._v("分配明细")])]),a("div",{staticClass:"right"},[a("div",{staticClass:"year"},[e._v("调拨年度 : "+e._s(e.curYear)+"年")]),a("div",[e._v("重量单位 :"+e._s(e.unit))])])]),a("ec-table",{attrs:{data:e.details,border:""}},[a("ec-table-col",{attrs:{type:"seq",width:"60",title:"序号"}}),a("ec-table-col",{attrs:{field:"tranYear",align:"center",title:"调拨年度"}}),a("ec-table-col",{attrs:{field:"leafCountryName",align:"center",title:"国别"}}),a("ec-table-col",{attrs:{field:"leafTypeName",align:"center",title:"烟叶类型"}}),a("ec-table-col",{attrs:{field:"leafFormName",align:"center",title:"烟叶形态"}}),a("ec-table-col",{attrs:{field:"packType",align:"center",title:"包装类型"}}),a("ec-table-col",{attrs:{field:"spec",align:"center",title:"规格(KG/件)"}}),a("ec-table-col",{attrs:{field:"allotNum",align:"center",title:"分配码包数量"}}),a("ec-table-col",{attrs:{field:"applyWeight",align:"center",title:"领用码包数量"}})],1)],1)],1)],1)],1)],1)],1)],1)],1)},o=[],r=(a("4de4"),a("d3b7"),a("a15b"),a("fb6a"),a("6486")),i={components:{OrgPicker:r["a"]},data:function(){return{orgCode:"",details:[],storeCode:"",unit:"公斤",visibile:!1,pagination:{pageSize:10,pageNo:1,total:0},supplyOrgList:[],supplyOrgLists:[],curYear:(new Date).getFullYear(),contury:[],conturys:"",leafTypeCodes:"",leafTypeCode:[],leafFormCode:[],leafFormCodes:"",tableData:[],cmTStore:[],top:{tranYear:"",leafTypeName:"",leafFormName:"",leafCountryName:"",planTotalWeight:"",leftWeight:"",collectNum:"",allotNum:""}}},mounted:function(){var e=this;this.getTableData(),this.$apis.apm.admin.queryCountr({}).then((function(t){e.contury=t.rows})),this.$apis.apm.admin.queryType({}).then((function(t){e.leafTypeCode=t.rows})),this.$apis.apm.admin.queryForm({}).then((function(t){e.leafFormCode=t.rows}))},computed:{_api:function(){return this.$apis.packingSpec.apply},prodYear:function(){for(var e=(new Date).getFullYear(),t=[],a=0;a<10;a++)t.push({name:e-a,value:e-a});return t}},methods:{getLeafTypeName:function(e){if(!e)return"";var t=this.leafTypeCode,a=t.filter((function(t){return t.leafTypeCode===e}));return a.length?a[0].leafTypeName:""},getLeafFormName:function(e){if(!e)return"";var t=this.leafFormCode,a=t.filter((function(t){return t.leafFormCode===e}));return a.length?a[0].leafFormName:""},getConturyName:function(e){if(!e)return"";var t=this.contury,a=t.filter((function(t){return t.leafCountryCode===e}));return console.log(a),a.length?a[0].leafCountryName:""},getOrgName:function(e){var t=this,a=e.selectOption;this.orgCode=a.length?a[0].orgCode:"",this.$apis.apm.admin.getCmTStoreByOrgCode({orgCode:this.orgCode}).then((function(e){t.cmTStore=e.rows}))},onReset:function(){this.storeCode="",this.applyDate="",this.demandOrgCode=[],this.conturys="",this.leafTypeCodes="",this.supplyOrgLists="",this.supplyOrgList="",this.leafFormCodes="",this.this.curYear=(new Date).getFullYear()},close:function(){this.visibile=!1},onclose:function(){this.tableData=[],this.visible=!1},detail:function(){var e=this;this.visibile=!0,this.$apis.apm.admin.detail({tranYear:this.tranYear,storeCode:this.storeCode,leafTypeCode:this.leafTypeCodes,leafFormCode:this.leafFormCodes,leafCountryCode:"106",demandOrgCode:this.supplyOrgLists.join(""),procOrgCode:this.supplyOrgList.join(""),applyType:"IMPORT_CP"}).then((function(t){e.details=t}))},getTableData:function(){var e=this,t=this.leafTypeCodes,a=this.leafFormCodes,l=this.conturys,o=this.supplyOrgLists,r=this.curYear,i=this.applyDate,n=o.length?o.slice().join(""):"",s={applyType:"IMPORT_CP",leafTypeCode:t,leafFormCode:a,contury:l,applyDate:i,tranYear:r,demandOrgCode:n};this.$apis.apm.admin.query(s).then((function(t){e.tableData=t.rows}))},pageAction:function(e,t){var a=this;this.pagination.pageSize=t,this.pagination.pageNo=e;var l=this.leafTypeCodes,o=this.leafFormCodes,r=this.conturys,i=this.supplyOrgLists,n=this.curYear,s=this.applyDate,c=i.length?i.slice().join(""):"",p={applyType:"IMPORT_CP",leafTypeCode:l,leafFormCode:o,contury:r,applyDate:s,tranYear:n,demandOrgCode:c,pageNo:e,pageSize:t};this.$apis.apm.admin.query(p).then((function(e){a.tableData=e.rows,a.pagination.total=e.totalRows||0})),this.$apis.apm.admin.queryTop(p).then((function(e){a.top.tranYear=e.tranYear,a.top.leafTypeName=e.leafTypeName,a.top.leafFormName=e.leafFormName,a.top.leafCountryName=e.leafCountryName,a.top.planTotalWeight=e.planTotalWeight,a.top.leftWeight=e.leftWeight,a.top.collectNum=e.collectNum,a.top.allotNum=e.allotNum}))},queryData:function(){this.$refs.table.pageAction(this.pagination.pageNo,this.pagination.pageSize)}}},n=i,s=(a("a2a0"),a("2877")),c=Object(s["a"])(n,l,o,!1,null,"8592a798",null);t["default"]=c.exports},a2a0:function(e,t,a){"use strict";a("c19c")},c19c:function(e,t,a){}}]);
//# sourceMappingURL=chunk-da365a9c.e5a5c166.js.map