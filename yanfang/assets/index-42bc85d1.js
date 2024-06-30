import{k as e,o,c as t,a as n,n as l,h as a,i as r,r as s,f as c,w as i,e as u,m as d,s as p,t as m,j as f,g as b,l as v,L as y,P as C,Q as g,y as h,C as k,N as x,R as w,S as O,H as j,A as S,B as _,U as I,z as B,V as P,b as T,G as R,F as z,D as U,W as q,X as N}from"./index-a6a8f6bb.js";import{_ as $}from"./index-736bb95a.js";import{_ as D}from"./index.vue_vue_type_script_setup_true_lang-1cf68e71.js";import{_ as A,a as E}from"./index-b7b21e48.js";import{_ as M}from"./_plugin-vue_export-helper-1b428a4d.js";import{s as L,_ as V}from"./index-9ba43d71.js";import{u as H}from"./useParse-bd8b48be.js";import{p as F,s as J,_ as K}from"./index-65ef7cdf.js";import{u as Q,s as G,_ as W}from"./index-9368bc96.js";import{c as X,h as Y,w as Z,d as ee,p as oe,e as te,b as ne,f as le,x as ae,y as re,z as se,_ as ce}from"./index-85e8a41a.js";import{_ as ie}from"./index-7dda9b71.js";import"./index-8faf922e.js";import"./logger-cd782e7a.js";import"./shared-491d6769.js";var ue=Object.defineProperty,de=Object.getOwnPropertySymbols,pe=Object.prototype.hasOwnProperty,me=Object.prototype.propertyIsEnumerable,fe=(e,o,t)=>o in e?ue(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,be=(e,o)=>{for(var t in o||(o={}))pe.call(o,t)&&fe(e,t,o[t]);if(de)for(var t of de(o))me.call(o,t)&&fe(e,t,o[t]);return e};const{packs:ve,pack:ye,add:Ce,use:ge,merge:he}=function(){const o={},t=e({}),n=e=>{if(!o[e])return{};t.value=o[e]};return{packs:o,pack:t,add:(e,t)=>{t.lang=e,o[e]=t},use:n,merge:(e,t)=>{o[e]&&(o[e]=be(be({},o[e]),t),n(e))}}}();Ce("zh-CN",{dialogTitle:"提示",dialogConfirmButtonText:"确认",dialogCancelButtonText:"取消",actionSheetTitle:"请选择",listLoadingText:"加载中",listFinishedText:"没有更多了",listErrorText:"加载失败",pickerTitle:"请选择",pickerConfirmButtonText:"确认",pickerCancelButtonText:"取消",datePickerMonthDict:{"01":{name:"一月",abbr:"一月"},"02":{name:"二月",abbr:"二月"},"03":{name:"三月",abbr:"三月"},"04":{name:"四月",abbr:"四月"},"05":{name:"五月",abbr:"五月"},"06":{name:"六月",abbr:"六月"},"07":{name:"七月",abbr:"七月"},"08":{name:"八月",abbr:"八月"},"09":{name:"九月",abbr:"九月"},10:{name:"十月",abbr:"十月"},11:{name:"十一月",abbr:"十一月"},12:{name:"十二月",abbr:"十二月"}},datePickerWeekDict:{0:{name:"星期日",abbr:"日"},1:{name:"星期一",abbr:"一"},2:{name:"星期二",abbr:"二"},3:{name:"星期三",abbr:"三"},4:{name:"星期四",abbr:"四"},5:{name:"星期五",abbr:"五"},6:{name:"星期六",abbr:"六"}},datePickerSelected:"个被选择",datePickerHint:"选择日期",paginationItem:"条",paginationPage:"页",paginationJump:"前往",timePickerHint:"选择时间"}),ge("zh-CN");const ke={type:{type:String,default:"default"},size:{type:String,default:"normal"},color:String,textColor:String,mode:{type:String,default:"normal"},elevation:{type:[Boolean,Number,String],default:!0},vertical:Boolean},{name:xe,n:we,classes:Oe}=X("button-group");const je=a({name:xe,props:ke,setup(e){const{bindButtons:o}=Q();return o({elevation:r((()=>e.elevation)),type:r((()=>e.type)),size:r((()=>e.size)),color:r((()=>e.color)),textColor:r((()=>e.textColor)),mode:r((()=>e.mode))}),{n:we,classes:Oe,formatElevation:Y}}});je.render=function(e,a){return o(),t("div",{class:l(e.classes(e.n(),e.n("$--box"),[e.mode,`${e.n(`--mode-${e.mode}`)}`],[e.vertical,e.n("--vertical"),e.n("--horizontal")],["normal"===e.mode,e.formatElevation(e.elevation,2)]))},[n(e.$slots,"default")],2)};var Se=je;Z(Se),ee(Se,ke);const _e=Se;var Ie=Object.defineProperty,Be=Object.getOwnPropertySymbols,Pe=Object.prototype.hasOwnProperty,Te=Object.prototype.propertyIsEnumerable,Re=(e,o,t)=>o in e?Ie(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t;const ze=((e,o)=>{for(var t in o||(o={}))Pe.call(o,t)&&Re(e,t,o[t]);if(Be)for(var t of Be(o))Te.call(o,t)&&Re(e,t,o[t]);return e})({show:Boolean,width:[Number,String],title:String,message:String,messageAlign:{type:String,default:"left"},confirmButton:{type:Boolean,default:!0},cancelButton:{type:Boolean,default:!0},confirmButtonText:String,cancelButtonText:String,confirmButtonTextColor:String,cancelButtonTextColor:String,confirmButtonColor:String,cancelButtonColor:String,dialogClass:String,dialogStyle:Object,onBeforeClose:te(),onConfirm:te(),onCancel:te(),"onUpdate:show":te()},oe(F,["overlay","overlayClass","overlayStyle","lockScroll","closeOnClickOverlay","teleport","onOpen","onClose","onOpened","onClosed","onClickOverlay","onRouteChange"]));var Ue=Object.defineProperty,qe=Object.getOwnPropertySymbols,Ne=Object.prototype.hasOwnProperty,$e=Object.prototype.propertyIsEnumerable,De=(e,o,t)=>o in e?Ue(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Ae=(e,o)=>{for(var t in o||(o={}))Ne.call(o,t)&&De(e,t,o[t]);if(qe)for(var t of qe(o))$e.call(o,t)&&De(e,t,o[t]);return e};const{name:Ee,n:Me,classes:Le}=X("dialog");const Ve=a({name:Ee,components:{VarPopup:J,VarButton:G},inheritAttrs:!1,props:ze,setup(o){const t=e(!1),n=e(!1);function l(){return le(o["onUpdate:show"],!1)}return v((()=>o.show),(e=>{t.value=e}),{immediate:!0}),v((()=>o.closeOnClickOverlay),(e=>{null==o.onBeforeClose?n.value=e:n.value=!1}),{immediate:!0}),{pack:ye,popupShow:t,popupCloseOnClickOverlay:n,n:Me,classes:Le,handleClickOverlay:function(){const{closeOnClickOverlay:e,onClickOverlay:t,onBeforeClose:n}=o;le(t),e&&(null==n?le(o["onUpdate:show"],!1):le(n,"close",l))},confirm:function(){const{onBeforeClose:e,onConfirm:t}=o;le(t),null==e?le(o["onUpdate:show"],!1):le(e,"confirm",l)},cancel:function(){const{onBeforeClose:e,onCancel:t}=o;le(t),null==e?le(o["onUpdate:show"],!1):le(e,"cancel",l)},toSizeUnit:ne}}});Ve.render=function(e,t){const a=s("var-button"),r=s("var-popup");return o(),c(r,{class:l(e.n("popup")),"var-dialog-cover":"",show:e.popupShow,overlay:e.overlay,"overlay-class":e.overlayClass,"overlay-style":e.overlayStyle,"lock-scroll":e.lockScroll,"close-on-click-overlay":e.popupCloseOnClickOverlay,teleport:e.teleport,onOpen:e.onOpen,onClose:e.onClose,onClosed:e.onClosed,onOpened:e.onOpened,onRouteChange:e.onRouteChange,onClickOverlay:e.handleClickOverlay},{default:i((()=>[u("div",d({class:e.classes(e.n("$--box"),e.n(),e.dialogClass),style:Ae({width:e.toSizeUnit(e.width)},e.dialogStyle)},e.$attrs),[u("div",{class:l(e.n("title"))},[n(e.$slots,"title",{},(()=>{var o;return[p(m(null!=(o=e.title)?o:e.pack.dialogTitle),1)]}))],2),u("div",{class:l(e.n("message")),style:f({textAlign:e.messageAlign})},[n(e.$slots,"default",{},(()=>[p(m(e.message),1)]))],6),u("div",{class:l(e.n("actions"))},[e.cancelButton?(o(),c(a,{key:0,class:l(e.classes(e.n("button"),e.n("cancel-button"))),"var-dialog-cover":"",text:"","text-color":e.cancelButtonTextColor,color:e.cancelButtonColor,onClick:e.cancel},{default:i((()=>{var o;return[p(m(null!=(o=e.cancelButtonText)?o:e.pack.dialogCancelButtonText),1)]})),_:1},8,["class","text-color","color","onClick"])):b("v-if",!0),e.confirmButton?(o(),c(a,{key:1,class:l(e.classes(e.n("button"),e.n("confirm-button"))),"var-dialog-cover":"",text:"","text-color":e.confirmButtonTextColor,color:e.confirmButtonColor,onClick:e.confirm},{default:i((()=>{var o;return[p(m(null!=(o=e.confirmButtonText)?o:e.pack.dialogConfirmButtonText),1)]})),_:1},8,["class","text-color","color","onClick"])):b("v-if",!0)],2)],16)])),_:3},8,["class","show","overlay","overlay-class","overlay-style","lock-scroll","close-on-click-overlay","teleport","onOpen","onClose","onClosed","onOpened","onRouteChange","onClickOverlay"])};var He=Ve,Fe=Object.defineProperty,Je=Object.defineProperties,Ke=Object.getOwnPropertyDescriptors,Qe=Object.getOwnPropertySymbols,Ge=Object.prototype.hasOwnProperty,We=Object.prototype.propertyIsEnumerable,Xe=(e,o,t)=>o in e?Fe(e,o,{enumerable:!0,configurable:!0,writable:!0,value:t}):e[o]=t,Ye=(e,o)=>{for(var t in o||(o={}))Ge.call(o,t)&&Xe(e,t,o[t]);if(Qe)for(var t of Qe(o))We.call(o,t)&&Xe(e,t,o[t]);return e},Ze=(e,o)=>Je(e,Ke(o));let eo,oo={};function to(e){return ae()?new Promise((o=>{to.close();const t=function(e={}){return se(e)?Ze(Ye({},oo),{message:e}):Ye(Ye({},oo),e)}(e),n=y(t);n.teleport="body",eo=n;const{unmountInstance:l}=re(He,n,{onConfirm:()=>{le(n.onConfirm),o("confirm")},onCancel:()=>{le(n.onCancel),o("cancel")},onClose:()=>{le(n.onClose),o("close")},onClosed:()=>{le(n.onClosed),l(),eo===n&&(eo=null)},onRouteChange:()=>{l(),eo===n&&(eo=null)},"onUpdate:show":e=>{n.show=e}});n.show=!0})):Promise.resolve()}to.setDefaultOptions=function(e){oo=e},to.resetDefaultOptions=function(){oo={}},to.close=function(){if(null!=eo){const e=eo;eo=null,C().then((()=>{e.show=!1}))}},to.Component=He,Z(He),Z(He,to),ee(to,ze);var no=to;const lo={class:"p-2 mb-2 border rounded shadow-lg fileset-card bg-zinc-100 border-zinc-200"},ao={class:"font-semibold"},ro={class:"fileset-cotent"};const so=M({props:{title:{type:String,default:"fieldset-title"}}},[["render",function(e,l,a,r,s,c){return o(),t("fieldset",lo,[u("legend",ao,m(a.title),1),u("div",ro,[n(e.$slots,"default")])])}]]),co=g("inputStore",(()=>{const o=h(),t=e(""),n=(e,o)=>e.findIndex((e=>e.name===o));return{inputContent:t,clearInputContent:()=>{t.value=""},setInput:e=>{if(!e)return L.error("内容不能为空!"),!1;const t=o.getRoomInputContent(k(o.actionRoomId));return-1!==n(t,e)?(L.warning("内容已存在!"),!1):(t.push({roomId:k(o.actionRoomId),name:e}),!0)},handelRemove:e=>{const{name:t,roomId:l}=e,a=o.getRoomInputContent(l),r=n(a,t);a.splice(r,1)}}})),io=()=>{const{queryObject:o}=H("house_table"),t=h(),{houseKey:n}=x(t),l=e(!1);return{saveLoading:l,onSaveHouse:async()=>{if(l.value)return;const e=t.getRooms();if(e.some((e=>!!e.questionContent.length||!!e.inputContent.length))){l.value=!0;try{const t=await o(n.value);t.set("rooms",e),t.save()}catch(a){}setTimeout((()=>{l.value=!1}),550),L.success("保存成功!")}else L.error("请填写内容!")}}},uo=()=>{const o=e(!1),t=e=>{o.value=e},n=e(""),l=e=>{n.value=e},a=e(""),r=e(!1),s=()=>{r.value=!0},c=()=>{r.value=!1};v(w,(e=>{if("pong"!==e)try{if(e=JSON.parse(e),"[object Object]"!==Object.prototype.toString.call(e))return;const{status:o,data:n}=e;if("success"!==o)return;a.value=n.url,l("电子报告已生成"),t(!1),setTimeout((()=>{i()}),200)}catch(o){return}}));const i=()=>{(e=>{const o=document.createElement("a");o.href=e,o.download="demo.pdf",document.body.appendChild(o),o.click(),document.body.removeChild(o)})(a.value)};return{pdfModal:r,showPdfModal:s,hidePdfModal:c,handleCancel:async()=>{"confirm"===await no({title:"提示",message:"正在生成电子报告, 是否中断吗?",confirmButtonText:"中断",cancelButtonText:"取消",confirmButtonTextColor:"#f00"})&&(c(),t(!1))},message:n,setMessage:l,isLock:o,setLock:t,pdfDownloadUrl:a,onCreatePdf:e=>{o.value||(t(!0),l("正在生成电子报告, 请等待..."),s(),O({type:"createPdf",data:{objectId:e}}))},handleDownloadFile:i,handleClosePdfModal:()=>{c(),t(!1),a.value=""}}},po={class:"p-4 info"},mo={class:"flex flex-col items-center pl-2"},fo={key:0,class:"font-serif text-base text-left"},bo={class:"flex flex-row-reverse mt-5"},vo={class:"popup-block"},yo=(e=>(q("data-v-5b1636e4"),e=e(),N(),e))((()=>u("h3",{class:"py-3 font-sans text-lg font-bold"},"自定义内容",-1))),Co={class:"flex flex-row-reverse mt-5"},go={class:"p-5 border-black border-solid border-10"},ho={class:"pb-4 font-sans text-base text-center"},ko=M(a({__name:"index",setup(n){const a=e(null),d=e([]),f=r((()=>{var e;return(null==(e=d.value)?void 0:e.map((e=>null==e?void 0:e.$el)))||[]})),v=j(),{checkRoomLock:y,showActionUserName:g}=v,{message:w,pdfModal:O,pdfDownloadUrl:q,onCreatePdf:N,handleCancel:M,handleDownloadFile:L,handleClosePdfModal:F}=uo(),{saveLoading:J,onSaveHouse:Q}=io(),G=S(),X=_(),Y=I(),{setGoods:Z}=Y,ee=h(),{rooms:oe}=x(ee),te=co(),{inputContent:ne}=x(te),le=B(),{setActionRoom:ae,setSelectedQuestions:re,handelRemoveQuestion:se}=le,{queryById:ue}=H("goods_table"),de=X.query.id,pe=e(null);P((()=>{C((()=>{var e;const o=localStorage.getItem("scrollCard"),t=o&&JSON.parse(o);(null==t?void 0:t.projectId)===de&&(null==(e=pe.value)||e.handleSwithNav(t))}))}));const me=(e,o)=>e.filter((e=>e.goodId===o)),fe=async()=>{await Q()},be=async()=>{await fe();const e=ee.houseKey;G.push({name:"viewPdf",query:{projectId:e}})},ve=async()=>{await fe();const e=ee.houseKey;N(e)},ye=e(null),Ce=e(!1),ge=e=>{Ce.value=e},he=()=>{te.setInput(ne.value)&&(ge(!1),ee.setActionRoomId(""),te.clearInputContent())},ke=e=>!e.questionContent.length&&!e.inputContent.length;return(e,n)=>{const r=s("iconpark-icon"),v=E,h=ie,x=ce,j=W,S=_e,_=V,I=K;return o(),c($,{title:k(ee).title,onScroll:e.handleScroll,ref_key:"layout",ref:a},{default:i((({isDownScroll:e})=>[u("section",po,[u("div",{class:l(["fixed left-0 z-10 top-1/2 navbar-transform",{show:!e}])},[u("div",mo,[u("div",{class:"flex content-center justify-center p-1 mb-4 text-3xl bg-white rounded-lg ring-1 ring-gray-500",onClick:ve},[T(r,{name:"file-pdf-one"})]),u("div",{class:"flex content-center justify-center p-1 mb-4 text-3xl bg-white rounded-md ring-1 ring-gray-500",onClick:be},[T(r,{name:"clipboard"})]),u("div",{class:"flex content-center justify-center p-1 mb-4 text-3xl bg-white rounded-md ring-1 ring-gray-500",onClick:fe},[T(r,{name:"upload-one"})])])],2),(o(!0),t(z,null,R(k(oe),((e,n)=>(o(),c(A,{key:n,title:e.name,lock:k(y)(e.objectId),username:k(g)(e.objectId),"data-anchor":e.objectId,ref_for:!0,ref_key:"cardRefs",ref:d},{footer:i((()=>[u("div",bo,[T(S,null,{default:i((()=>[T(j,{type:"primary",title:"自定义填写内容",onClick:o=>{return t=e,ee.setActionRoomId(t.objectId),ge(!0),void C((()=>{var e;null==(e=ye.value)||e.focus()}));var t}},{default:i((()=>[T(x,{name:"plus"}),p(" 自定义内容 ")])),_:2},1032,["onClick"]),T(j,{type:"primary",title:"选择问题内容",onClick:o=>(async(e,o)=>{const{objectId:t,name:n,goodsId:l,questionContent:a}=e,r=await ue(l),s=l.map((e=>{const{name:o,children:t=[]}=r.find((o=>o.objectId===e));return{name:o,objectId:e,children:t}}));localStorage.setItem("scrollCard",JSON.stringify({roomName:n,objectId:t,roomIndex:o,projectId:de})),ae({roomId:t,roomName:n}),Z(s),re(a),G.push({path:"/question",query:{id:X.query.id,roomId:t,roomName:n}})})(e,n)},{default:i((()=>[T(x,{name:"wrench"}),p(" 选择问题 ")])),_:2},1032,["onClick"])])),_:2},1024)])])),default:i((()=>[ke(e)?(o(),t("p",fo,"无内容")):(o(),t(z,{key:1},[(o(!0),t(z,null,R(e.goods,(n=>(o(),t(z,{key:n.objectId},[me(e.questionContent,n.objectId).length?(o(),c(so,{key:0,title:n.name},{default:i((()=>[T(h,null,{default:i((()=>[(o(!0),t(z,null,R(me(e.questionContent,n.objectId),(t=>(o(),c(v,{key:`${e.objectId}-${t.questionId}`,plain:"",size:"small",closeable:"",onClose:e=>k(se)(t)},{default:i((()=>[p(m(t.name),1)])),_:2},1032,["onClose"])))),128))])),_:2},1024)])),_:2},1032,["title"])):b("",!0)],64)))),128)),e.inputContent.length?(o(),c(so,{key:0,title:"补充内容"},{default:i((()=>[T(h,null,{default:i((()=>[(o(!0),t(z,null,R(e.inputContent,(e=>(o(),c(v,{plain:"",size:"small",closeable:"",key:e,onClose:o=>k(te).handelRemove(e)},{default:i((()=>[p(m(e.name),1)])),_:2},1032,["onClose"])))),128))])),_:2},1024)])),_:2},1024)):b("",!0)],64))])),_:2},1032,["title","lock","username","data-anchor"])))),128)),T(I,{position:"top",show:k(Ce),"onUpdate:show":n[1]||(n[1]=e=>U(Ce)?Ce.value=e:null)},{default:i((()=>[u("div",vo,[yo,T(_,{variant:"outlined",placeholder:"请输入问题描述",ref_key:"input",ref:ye,autofocus:"",size:"small",modelValue:k(ne),"onUpdate:modelValue":n[0]||(n[0]=e=>U(ne)?ne.value=e:null)},null,8,["modelValue"]),u("div",Co,[T(j,{type:"primary",onClick:he},{default:i((()=>[p("提交")])),_:1})])])])),_:1},8,["show"]),T(I,{show:k(O),"onUpdate:show":n[2]||(n[2]=e=>U(O)?O.value=e:null),"close-on-click-overlay":!1,"close-on-key-escape":!1},{default:i((()=>[u("div",go,[u("p",ho,m(k(w)),1),k(q)?(o(),c(h,{key:0},{default:i((()=>[T(j,{block:"",onClick:k(F)},{default:i((()=>[p("关闭")])),_:1},8,["onClick"]),T(j,{block:"",type:"primary",onClick:k(L)},{default:i((()=>[p("下载报告")])),_:1},8,["onClick"])])),_:1})):(o(),c(j,{key:1,block:"",type:"danger",onClick:k(M)},{default:i((()=>[p("取消")])),_:1},8,["onClick"]))])])),_:1},8,["show"])])])),footer:i((()=>[T(D,{list:k(oe),cards:k(f),ref_key:"navRef",ref:pe},null,8,["list","cards"])])),_:1},8,["title","onScroll"])}}}),[["__scopeId","data-v-5b1636e4"]]);export{ko as default};