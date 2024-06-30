import{o as e,c as t,r as o,n as a,f as s,h as n,b as l,a as r,H as i,g as d,I as u,j as c,p,e as m,J as h,z as f,x as v,y,u as g,D as b,F as x,B as k,t as C,k as w,w as T,d as S,C as I,E as j,L as _,M as $}from"./index-330ef47a.js";import{u as R}from"./room-987915ac.js";import{s as N}from"./index-73d29bc9.js";import{g as A}from"./good-adf85459.js";import{q as B}from"./question-9f8f4f55.js";import{l as L,a as q,_ as z}from"./_plugin-vue_export-helper-b7137c09.js";import{c as P,q as U,f as M,w as D,a as O,l as V,m as E}from"./index-2de332e8.js";import{_ as F}from"./index-8b7c86b8.js";import{_ as H}from"./index-10a66ab6.js";import{_ as W}from"./index-2265487e.js";import{_ as G}from"./index-8d30b2c3.js";import"./index-6a22476b.js";const J={type:{type:String,default:"default"},size:{type:String,default:"normal"},color:String,textColor:String,mode:{type:String,default:"normal"},elevation:{type:[Boolean,Number,String],default:!0},vertical:Boolean},{name:Q,n:Y,classes:K}=P("button-group");const X=s({name:Q,props:J,setup(e){const{bindButtons:t}=U();return t({elevation:n((()=>e.elevation)),type:n((()=>e.type)),size:n((()=>e.size)),color:n((()=>e.color)),textColor:n((()=>e.textColor)),mode:n((()=>e.mode))}),{n:Y,classes:K,formatElevation:M}}});X.render=function(s,n){return e(),t("div",{class:a(s.classes(s.n(),s.n("$--box"),[s.mode,`${s.n(`--mode-${s.mode}`)}`],[s.vertical,s.n("--vertical"),s.n("--horizontal")],["normal"===s.mode,s.formatElevation(s.elevation,2)]))},[o(s.$slots,"default")],2)};var Z=X;D(Z),O(Z,J);const ee=Z,te=q("close"),oe=[r("path",{d:"M981.577 1024c-11.703 0-23.406-2.926-32.183-11.703L13.166 76.07c-14.629-17.555-14.629-46.812 0-64.366 17.554-14.629 46.811-14.629 64.365 0L1013.76 947.93c17.554 17.555 17.554 43.886 0 61.44-8.777 11.703-20.48 14.629-32.183 14.629zm-936.228 0c-11.703 0-23.406-2.926-32.183-11.703-17.555-17.554-17.555-43.886 0-61.44L949.394 14.63c17.555-17.555 43.886-17.555 61.44 0 17.555 17.554 17.555 43.885 0 61.44L74.606 1012.297C68.754 1021.074 57.05 1024 45.349 1024z",fill:"currentColor","fill-opacity":"0.9"},null,-1)];const ae=L(te,[["render",function(o,s,n,r,i,d){return e(),t("svg",{class:a(o.classes),style:l(o.style),xmlns:"http://www.w3.org/2000/svg",viewBox:"0 0 1026 1024",role:"presentation"},oe,6)}]]);class se{}var ne=Object.defineProperty,le=(e,t,o)=>(((e,t,o)=>{t in e?ne(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o})(e,"symbol"!=typeof t?t+"":t,o),o);var re=Object.defineProperty,ie=(e,t,o)=>(((e,t,o)=>{t in e?re(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o})(e,"symbol"!=typeof t?t+"":t,o),o);var de=Object.defineProperty;const ue=e=>null!==e&&"object"==typeof e,ce=(e,t)=>(Object.keys(t).forEach((o=>{let a=e[o],s=t[o];ue(a)&&ue(s)?ce(a,s):e[o]=s})),e),pe=i({"zh-CN":new class extends se{constructor(){super(...arguments),le(this,"save","保存"),le(this,"confirm","确认"),le(this,"cancel","取消"),le(this,"done","完成"),le(this,"noData","暂无数据"),le(this,"placeholder","请输入"),le(this,"select","请选择"),le(this,"video",{errorTip:"视频加载失败",clickRetry:"点击重试"}),le(this,"fixednav",{activeText:"收起导航",unActiveText:"快速导航"}),le(this,"pagination",{prev:"上一页",next:"下一页"}),le(this,"calendaritem",{weekdays:["日","一","二","三","四","五","六"],end:"结束",start:"开始",title:"日期选择",monthTitle:(e,t)=>`${e}年${t}月`,today:"今天"}),le(this,"shortpassword",{title:"请输入密码",desc:"您使用了虚拟资产，请进行验证",tips:"忘记密码"}),le(this,"uploader",{ready:"准备完成",readyUpload:"准备上传",waitingUpload:"等待上传",uploading:"上传中",success:"上传成功",error:"上传失败"}),le(this,"countdown",{day:"天",hour:"时",minute:"分",second:"秒"}),le(this,"address",{selectRegion:"请选择所在地区",deliveryTo:"配送至",chooseAnotherAddress:"选择其他地址"}),le(this,"signature",{reSign:"重签",unSupportTpl:"对不起，当前浏览器不支持Canvas，无法使用本控件！"}),le(this,"ecard",{chooseText:"请选择电子卡面值",otherValueText:"其他面值",placeholder:"请输入1-5000整数"}),le(this,"timeselect",{pickupTime:"取件时间"}),le(this,"sku",{buyNow:"立即购买",buyNumber:"购买数量",addToCart:"加入购物车"}),le(this,"skuheader",{skuId:"商品编号"}),le(this,"addresslist",{addAddress:"新建地址",default:"默认"}),le(this,"comment",{complaintsText:"我要投诉",additionalReview:e=>`购买${e}天后追评`,additionalImages:e=>`${e}张追评图片`}),le(this,"infiniteloading",{loading:"加载中...",pullTxt:"松开刷新",loadMoreTxt:"哎呀，这里是底部了啦"}),le(this,"datepicker",{year:"年",month:"月",day:"日",hour:"时",min:"分",seconds:"秒"}),le(this,"audiooperate",{back:"倒退",start:"开始",pause:"暂停",forward:"快进",mute:"静音"}),le(this,"pullrefresh",{pulling:"下拉刷新",loosing:"释放刷新",loading:"加载中..."})}},"en-US":new class extends se{constructor(){super(...arguments),ie(this,"save","Save"),ie(this,"confirm","Confirm"),ie(this,"cancel","Cancel"),ie(this,"done","Done"),ie(this,"noData","No Data"),ie(this,"placeholder","Placeholder"),ie(this,"select","Select"),ie(this,"video",{errorTip:"Error Tip",clickRetry:"Click Retry"}),ie(this,"fixednav",{activeText:"Close Nav",unActiveText:"Open Nav"}),ie(this,"pagination",{prev:"Previous",next:"Next"}),ie(this,"calendaritem",{weekdays:["Sun","Mon","Tue","Wed","Thu","Fri","Sat"],end:"End",start:"Start",title:"Calendar",monthTitle:(e,t)=>`${e}/${t}`,today:"Today"}),ie(this,"shortpassword",{title:"Please input a password",desc:"Verify",tips:"Forget password"}),ie(this,"uploader",{ready:"Ready",readyUpload:"Ready to upload",waitingUpload:"Waiting for upload",uploading:"Uploading",success:"Upload successful",error:"Upload failed"}),ie(this,"countdown",{day:" Day ",hour:" Hour ",minute:" Minute ",second:" Second "}),ie(this,"address",{selectRegion:"Select Region",deliveryTo:"Delivery To",chooseAnotherAddress:"Choose Another Address"}),ie(this,"signature",{reSign:"Re Sign",unSupportTpl:"Sorry, the current browser doesn't support canvas, so we can't use this control!"}),ie(this,"ecard",{chooseText:"Select",otherValueText:"Other Value",placeholder:"Placeholder"}),ie(this,"timeselect",{pickupTime:"Pickup Time"}),ie(this,"sku",{buyNow:"Buy Now",buyNumber:"Buy Number",addToCart:"Add to Cart"}),ie(this,"skuheader",{skuId:"Sku Number"}),ie(this,"addresslist",{addAddress:"Add New Address",default:"default"}),ie(this,"comment",{complaintsText:"I have a complaint",additionalReview:e=>`Review after ${e} days of purchase`,additionalImages:e=>`There are ${e} follow-up comments`}),ie(this,"infiniteloading",{loading:"Loading...",pullTxt:"Loose to refresh",loadMoreTxt:"Oops, this is the bottom"}),ie(this,"datepicker",{year:"Year",month:"Month",day:"Day",hour:"Hour",min:"Minute",seconds:"Second"}),ie(this,"audiooperate",{back:"Back",start:"Start",pause:"Pause",forward:"Forward",mute:"Mute"}),ie(this,"pullrefresh",{pulling:"Pull to refresh...",loosing:"Loose to refresh...",loading:"Loading..."})}}});class me{static languages(){return pe[this.currentLang.value]}static use(e,t){t&&(pe[e]=new t),this.currentLang.value=e}static merge(e,t){t&&(pe[e]?ce(pe[e],t):this.use(e,t))}}var he,fe,ve;he=me,fe="currentLang",ve=d("zh-CN"),((e,t,o)=>{t in e?de(e,t,{enumerable:!0,configurable:!0,writable:!0,value:o}):e[t]=o})(he,"symbol"!=typeof fe?fe+"":fe,ve);const ye=(e,t)=>{try{return t.split(".").reduce(((e,t)=>e[t]),e)}catch(o){return""}};const ge=(e,t)=>{const o=e.__vccOpts||e;for(const[a,s]of t)o[a]=s;return o},{componentName:be,create:xe}=function(e){const t="nut-"+e;return{componentName:t,translate(t,...o){const a=me.languages(),s=ye(a,`${e.replace("-","")}.${t}`)||ye(a,t);return"function"==typeof s?s(...o):s},create:function(e){return e.name=t,e.install=t=>{t.component(e.name,e)},s(e)}}}("tag");const ke=ge(xe({props:{color:{type:String,default:""},textColor:{type:String,default:""},type:{type:String,default:"default"},plain:{type:Boolean,default:!1},round:{type:Boolean,default:!1},mark:{type:Boolean,default:!1},closeable:{type:Boolean,default:!1}},components:{Close:ae},emits:["close","click"],setup(e,{emit:t}){const{type:o,color:a,plain:s,round:l,mark:r,textColor:i}=u(e);return{classes:n((()=>{const e=be;return{[e]:!0,[`${e}--${o.value}`]:o.value,[`${e}--plain`]:s.value,[`${e}--round`]:l.value,[`${e}--mark`]:r.value}})),getStyle:()=>{const e={};return i.value?e.color=i.value:a.value&&s.value&&(e.color=a.value),s.value?(e.background="#fff",e["border-color"]=a.value):a.value&&(e.background=a.value),e},onClose:e=>{e.stopPropagation(),t("close",e)},onClick:e=>{t("click",e)}}}}),[["render",function(s,n,r,i,d,u){const h=c("Close");return e(),t("view",{class:a(s.classes),style:l(s.getStyle()),onClick:n[0]||(n[0]=(...e)=>s.onClick&&s.onClick(...e))},[o(s.$slots,"default"),s.closeable?(e(),p(h,{key:0,class:"nut-tag--close",width:"12px",height:"12px",onClick:s.onClose},null,8,["onClick"])):m("",!0)],6)}]]),Ce=h("inputStore",(()=>{const e=R(),t=d(""),o=(e,t)=>e.findIndex((e=>e.name===t));return{inputContent:t,clearInputContent:()=>{t.value=""},setInput:t=>{if(!t)return N.error("内容不能为空!"),!1;const a=e.getRoomInputContent(f(e.actionRoomId));return-1!==o(a,t)?(N.warning("内容已存在!"),!1):(a.push({roomId:f(e.actionRoomId),name:t}),!0)},handelRemove:t=>{const{name:a,roomId:s}=t,n=e.getRoomInputContent(s),l=o(n,a);n.splice(l,1)}}})),we={class:"info"},Te={class:"table-header"},Se={class:"font-sans text-xl font-semibold"},Ie={class:"mt-2"},je={class:"px-3 mt-2 table-body"},_e={class:"pt-2"},$e={key:0,class:"font-serif text-base text-left"},Re={class:"flex flex-row-reverse mt-5"},Ne={class:"popup-block"},Ae=(e=>(_("data-v-a5243c25"),e=e(),$(),e))((()=>r("h3",{class:"py-3 font-sans text-lg font-bold"},"自定义内容",-1))),Be={class:"flex flex-row-reverse mt-5"},Le=z(s({__name:"index",setup(o){const a=v(),s=y(),n=A(),{setGoods:l}=n,i=R(),{rooms:u}=g(i),c=Ce(),{inputContent:m}=g(c),h=b(),{questionTable:_}=g(h),$=B(),{setActionRoom:N,setSelectedQuestions:L}=$,q=d(null),z=d(!1),P=e=>{z.value=e},U=()=>{c.setInput(m.value)&&(P(!1),i.setActionRoomId(""),c.clearInputContent())},M=e=>!e.questionContent.length&&!e.inputContent.length,D=e=>{const{objectId:t,name:o,goods:n,questionContent:r}=e,i=n.map((({name:e,objectId:t})=>{var o;return{name:e,objectId:t,children:(o=t)?_.value.filter((e=>e.parentId.includes(o))):0}}));N({roomId:t,roomName:o}),l(i),L(r),a.push({path:"/question",query:{id:s.query.id,roomId:t,roomName:o}})};return(o,a)=>{const s=ke,n=F,l=H,d=V,h=E,v=ee,y=W,g=G;return e(),t("section",we,[(e(!0),t(x,null,k(f(u),((o,a)=>(e(),t("div",{key:a,class:"mb-6 shadow-md room"},[r("div",Te,[r("h2",Se,C(o.name),1),r("div",Ie,[w(n,null,{default:T((()=>[(e(!0),t(x,null,k(o.goods,(t=>(e(),p(s,{key:t.objectId},{default:T((()=>[S(C(t.name),1)])),_:2},1024)))),128))])),_:2},1024)])]),r("div",je,[r("div",_e,[M(o)?(e(),t("p",$e,"无内容")):(e(),p(n,{key:1},{default:T((()=>[(e(!0),t(x,null,k(o.questionContent,(t=>(e(),p(l,{key:`${o.objectId}-${t.questionId}`,plain:"",size:"small"},{default:T((()=>[S(C(t.name),1)])),_:2},1024)))),128)),(e(!0),t(x,null,k(o.inputContent,(t=>(e(),p(l,{closeable:"",key:t,onClose:e=>f(c).handelRemove(t)},{default:T((()=>[S(C(t.name),1)])),_:2},1032,["onClose"])))),128))])),_:2},1024))]),r("div",Re,[w(v,null,{default:T((()=>[w(h,{type:"primary",title:"自定义填写内容",onClick:e=>{return t=o,i.setActionRoomId(t.objectId),P(!0),void j((()=>{q.value.focus()}));var t}},{default:T((()=>[w(d,{name:"plus"}),S(" 自定义内容 ")])),_:2},1032,["onClick"]),w(h,{type:"primary",title:"选择问题内容",onClick:e=>D(o)},{default:T((()=>[w(d,{name:"wrench"}),S(" 选择问题 ")])),_:2},1032,["onClick"])])),_:2},1024)])])])))),128)),w(g,{position:"top",show:z.value,"onUpdate:show":a[1]||(a[1]=e=>z.value=e)},{default:T((()=>[r("div",Ne,[Ae,w(y,{variant:"outlined",placeholder:"请输入问题描述",ref_key:"input",ref:q,autofocus:"",size:"small",modelValue:f(m),"onUpdate:modelValue":a[0]||(a[0]=e=>I(m)?m.value=e:null)},null,8,["modelValue"]),r("div",Be,[w(h,{type:"primary",onClick:U},{default:T((()=>[S("提交")])),_:1})])])])),_:1},8,["show"])])}}}),[["__scopeId","data-v-a5243c25"]]);export{Le as default};