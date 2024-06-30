import{r as e,o as s,f as a,w as l,e as o,m as n,a as t,n as r,c,b as i,g as p,T as d,h as f,i as u,s as m,t as b}from"./index-e54f7498.js";import{_ as x}from"./_plugin-vue_export-helper-1b428a4d.js";import{p as y,a as $,e as g,c as h,s as k,f as v,w as C,d as w,_ as S}from"./index-15d558b7.js";const _={type:{type:String,default:"default"},size:{type:String,default:"normal"},color:String,textColor:String,iconName:y($,"name"),namespace:y($,"namespace"),plain:Boolean,round:{type:Boolean,default:!0},block:Boolean,closable:Boolean,closeable:Boolean,onClose:g()},{name:z,n:B,classes:j}=h("chip");const N=f({name:z,components:{VarIcon:k},inheritAttrs:!1,props:_,setup:e=>({chipStyle:u((()=>{const{plain:s,textColor:a,color:l}=e;return s?{color:a||l,borderColor:l}:{color:a,background:l}})),contentClass:u((()=>{const{size:s,block:a,type:l,plain:o,round:n}=e,t=B(a?"$--flex":"$--inline-flex"),r=o?`${B("plain")} ${B(`plain-${l}`)}`:B(`--${l}`),c=n?B("--round"):null;return[B(`--${s}`),t,r,c]})),n:B,classes:j,handleClose:function(s){v(e.onClose,s)}})});N.render=function(f,u){const m=e("var-icon");return s(),a(d,{name:f.n("$-fade")},{default:l((()=>[o("span",n({class:f.classes(f.n(),f.n("$--box"),...f.contentClass),style:f.chipStyle},f.$attrs),[t(f.$slots,"left"),o("span",{class:r(f.n(`text-${f.size}`))},[t(f.$slots,"default")],2),t(f.$slots,"right"),f.closeable||f.closable?(s(),c("span",{key:0,class:r(f.n("--close")),onClick:u[0]||(u[0]=(...e)=>f.handleClose&&f.handleClose(...e))},[i(m,{name:`${f.iconName?f.iconName:"close-circle"}`,namespace:f.namespace},null,8,["name","namespace"])],2)):p("v-if",!0)],16)])),_:3},8,["name"])};var A=N;C(A),w(A,_);const I=A,T={props:{title:{type:String,default:""},lock:{type:Boolean,default:!1},username:{type:String,default:""}}},V={class:"relative mb-4 overflow-hidden text-gray-700 bg-white shadow-md rounded-xl bg-clip-border"},q={key:0,class:"flex justify-between px-4 py-3 text-2xl font-bold border-b text-nowrap border-slate-200"},D={class:"px-3 py-4"},E={key:1,class:"absolute top-0 flex flex-col items-center justify-center w-full h-full bg-black/70 letf-0"};const F=x(T,[["render",function(e,a,n,r,d,f){const u=S,x=I;return s(),c("div",V,[t(e.$slots,"indexAnchor"),n.title?(s(),c("div",q,[m(b(n.title)+" ",1),t(e.$slots,"add")])):p("",!0),o("div",D,[t(e.$slots,"default"),t(e.$slots,"footer")]),n.lock?(s(),c("div",E,[i(u,{color:"#ccc",size:"55",name:"lock",class:"mb-1"}),i(x,{size:"small",plain:"",type:"danger"},{left:l((()=>[i(u,{name:"view-outline",size:"14"})])),default:l((()=>[m(b(n.username),1)])),_:1})])):p("",!0)])}]]);export{F as _,I as a};