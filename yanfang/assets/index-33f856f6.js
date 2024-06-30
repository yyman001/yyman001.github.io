import{L as e,o as t,c as n,n as o,a as i,g as l,e as s,j as r,F as a,G as c,s as d,t as u,h as p,i as v,W as h,X as y,k as g,r as f,q as m,d as b,f as k,b as x}from"./index-e54f7498.js";import{c as _,S as w,F as $,M as S,f as z,T as O,w as E,d as T,U as C,I as L,p as B,e as R,u as j,g as P,h as I,R as N}from"./index-15d558b7.js";const U={locks:{},zIndex:2e3,enableRipple:!0};e(U);var H=e(U),A=Object.defineProperty,D=Object.defineProperties,G=Object.getOwnPropertyDescriptors,X=Object.getOwnPropertySymbols,Y=Object.prototype.hasOwnProperty,M=Object.prototype.propertyIsEnumerable,q=(e,t,n)=>t in e?A(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n,F=(e,t)=>{for(var n in t||(t={}))Y.call(t,n)&&q(e,n,t[n]);if(X)for(var n of X(t))M.call(t,n)&&q(e,n,t[n]);return e};const{n:V}=_("ripple"),W=250;function K(e){const t=this._ripple;if(t.removeRipple(),t.disabled||t.tasker||!H.enableRipple)return;t.tasker=window.setTimeout((()=>{t.tasker=null;const{x:n,y:o,centerX:i,centerY:l,size:s}=function(e,t){const{top:n,left:o}=S(e),{clientWidth:i,clientHeight:l}=e,s=Math.sqrt(i**2+l**2)/2,r=2*s;return{x:t.touches[0].clientX-o-s,y:t.touches[0].clientY-n-s,centerX:(i-2*s)/2,centerY:(l-2*s)/2,size:r}}(this,e),r=document.createElement("div");r.classList.add(V()),r.style.opacity="0",r.style.transform=`translate(${n}px, ${o}px) scale3d(.3, .3, .3)`,r.style.width=`${s}px`,r.style.height=`${s}px`,t.color&&(r.style.backgroundColor=t.color),r.dataset.createdAt=String(performance.now()),function(e){const{zIndex:t,position:n}=$(e);e.style.overflow="hidden",e.style.overflowX="hidden",e.style.overflowY="hidden","static"===n&&(e.style.position="relative"),"auto"===t&&(e.style.zIndex="1")}(this),this.appendChild(r),window.setTimeout((()=>{r.style.transform=`translate(${i}px, ${l}px) scale3d(1, 1, 1)`,r.style.opacity=".25"}),20)}),30)}function J(){const e=()=>{const e=this.querySelectorAll(`.${V()}`);if(!e.length)return;const t=e[e.length-1],n=W-performance.now()+Number(t.dataset.createdAt);window.setTimeout((()=>{t.style.opacity="0",window.setTimeout((()=>{var e;return null==(e=t.parentNode)?void 0:e.removeChild(t)}),W)}),n)};this._ripple.tasker?window.setTimeout(e,30):e()}function Q(){if(!w()||!H.enableRipple)return;const e=this._ripple;e.tasker&&window.clearTimeout(e.tasker),e.tasker=null}const Z={mounted:function(e,t){var n,o,i;e._ripple=(o=F({tasker:null},null!=(n=t.value)?n:{}),i={removeRipple:J.bind(e)},D(o,G(i))),e.addEventListener("touchstart",K,{passive:!0}),e.addEventListener("touchmove",Q,{passive:!0}),e.addEventListener("dragstart",J,{passive:!0}),document.addEventListener("touchend",e._ripple.removeRipple,{passive:!0}),document.addEventListener("touchcancel",e._ripple.removeRipple,{passive:!0}),document.addEventListener("dragend",e._ripple.removeRipple,{passive:!0})},unmounted:function(e){e.removeEventListener("touchstart",K),e.removeEventListener("touchmove",Q),e.removeEventListener("dragstart",J),e._ripple&&e._ripple.removeRipple&&(document.removeEventListener("touchend",e._ripple.removeRipple),document.removeEventListener("touchcancel",e._ripple.removeRipple),document.removeEventListener("dragend",e._ripple.removeRipple))},updated:function(e,t){var n,o,i,l,s,r;const a={color:null==(n=t.value)?void 0:n.color,disabled:null==(o=t.value)?void 0:o.disabled};(a.color!==(null==(i=e._ripple)?void 0:i.color)||a.disabled!==(null==(l=e._ripple)?void 0:l.disabled))&&(e._ripple=F({tasker:a.disabled?null:null==(s=e._ripple)?void 0:s.tasker,removeRipple:null==(r=e._ripple)?void 0:r.removeRipple},a))},install(e){e.directive("ripple",this)}};var ee=Z;const te={type:{type:String,default:"circle"},radius:[String,Number],size:{type:String,default:"normal"},color:String,description:String,loading:Boolean},{name:ne,n:oe,classes:ie}=_("loading"),le=[(e=>(h(""),e=e(),y(),e))((()=>s("svg",{viewBox:"25 25 50 50"},[s("circle",{cx:"50",cy:"50",r:"20",fill:"none"})],-1)))];const se=p({name:ne,props:te,setup:(e,{slots:t})=>({loadingTypeDict:{wave:5,cube:4,rect:8,disappear:3},isShow:v((()=>!z(t.default)||e.loading)),n:oe,classes:ie,multiplySizeUnit:O})});se.render=function(e,p){return t(),n("div",{class:o(e.n())},[e.$slots.default?(t(),n("div",{key:0,class:o(e.classes(e.n("content"),[e.loading,e.n("content--active")]))},[i(e.$slots,"default"),e.loading?(t(),n("div",{key:0,class:o(e.n("content-mask"))},null,2)):l("v-if",!0)],2)):l("v-if",!0),e.isShow?(t(),n("div",{key:1,class:o(e.classes(e.n("$--box"),e.n("body"),[e.$slots.default,e.n("inside")]))},["circle"===e.type?(t(),n("div",{key:0,class:o(e.n("circle"))},[s("span",{class:o(e.classes(e.n("circle-block"),e.n(`circle-block--${e.size}`))),style:r({width:e.multiplySizeUnit(e.radius,2),height:e.multiplySizeUnit(e.radius,2),color:e.color})},[...le],6)],2)):l("v-if",!0),(t(!0),n(a,null,c(e.loadingTypeDict,((i,s)=>(t(),n(a,{key:s},[e.type===s?(t(),n("div",{key:0,class:o(e.classes(e.n(s),e.n(`${s}--${e.size}`)))},[(t(!0),n(a,null,c(i,(i=>(t(),n("div",{key:i+s,style:r({backgroundColor:e.color}),class:o(e.classes(e.n(`${s}-item`),e.n(`${s}-item--${e.size}`)))},null,6)))),128))],2)):l("v-if",!0)],64)))),128)),e.$slots.description||e.description?(t(),n("div",{key:1,class:o(e.classes(e.n("description"),e.n(`description--${e.size}`))),style:r({color:e.color})},[i(e.$slots,"description",{},(()=>[d(u(e.description),1)]))],6)):l("v-if",!0)],2)):l("v-if",!0)],2)};var re=se;E(re),T(re,te);var ae=re;const ce={hovering:{type:Boolean,default:!0}},{name:de,n:ue,classes:pe}=_("hover-overlay");const ve=p({name:de,props:ce,setup:()=>({n:ue,classes:pe})});ve.render=function(e,i){return t(),n("div",{class:o(e.classes(e.n(),[e.hovering,e.n("--hovering")]))},null,2)};var he=ve;E(he),T(he,ce);var ye=he;function ge(e){if(!e)return!1;const t=/Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent);return!("desktop"!==e||!t)||"mobile"===e&&!t}function fe(e){const{value:t}=e._hover,n=function(e){const t=e.getAttribute("style");return t?t.split(";").filter(Boolean).reduce(((e,t)=>{const[n,o]=t.split(":").map((e=>e.trim()));return e[C(n)]=o,e}),{}):{}}(e);Object.keys(t).forEach((o=>{const i=C(o);null!=t[i]&&n[i]&&(e._hover.rawStyle[i]=n[i])}))}function me(e,t){Object.keys(t).forEach((n=>{const o=t[n];null!=o&&(e.style[n]=o)}))}function be(e){!function(e){Object.keys(e._hover.value).forEach((t=>{null!=e._hover.value[t]&&(e.style[t]="")}))}(e),me(e,e._hover.rawStyle)}function ke(){const{value:e}=this._hover;this._hover.hovering=!0,L(e)?e(this._hover.hovering):me(this,e)}function xe(){this._hover.hovering=!1,L(this._hover.value)?this._hover.value(this._hover.hovering):be(this)}function _e(e,t){var n,o;const{arg:i,value:l}=t;ge(i)||(e._hover={value:l,hovering:null!=(o=null==(n=e._hover)?void 0:n.hovering)&&o,rawStyle:{}},fe(e),e.addEventListener("mouseenter",ke),e.addEventListener("mouseleave",xe))}function we(e,t){ge(t.arg)||(be(e),e.removeEventListener("mouseenter",ke),e.removeEventListener("mouseleave",xe))}var $e={mounted:_e,unmounted:we,beforeUpdate:function(e,t){e._hover&&we(e,t)},updated:function(e,t){_e(e,t),function(e,t){return!L(t.value)&&e._hover.hovering}(e,t)&&me(e,t.value)},install(e){e.directive("hover",this)}},Se=Object.defineProperty,ze=Object.defineProperties,Oe=Object.getOwnPropertyDescriptors,Ee=Object.getOwnPropertySymbols,Te=Object.prototype.hasOwnProperty,Ce=Object.prototype.propertyIsEnumerable,Le=(e,t,n)=>t in e?Se(e,t,{enumerable:!0,configurable:!0,writable:!0,value:n}):e[t]=n;const Be={type:String,nativeType:{type:String,default:"button"},size:String,loading:Boolean,round:Boolean,block:Boolean,text:Boolean,outline:Boolean,disabled:Boolean,autoLoading:Boolean,ripple:{type:Boolean,default:!0},color:String,textColor:String,elevation:{type:[Boolean,Number,String],default:!0},loadingRadius:[Number,String],loadingType:B(te,"type"),loadingSize:B(te,"size"),loadingColor:(Re=((e,t)=>{for(var n in t||(t={}))Te.call(t,n)&&Le(e,n,t[n]);if(Ee)for(var n of Ee(t))Ce.call(t,n)&&Le(e,n,t[n]);return e})({},B(te,"color")),je={default:"currentColor"},ze(Re,Oe(je))),onClick:R(),onTouchstart:R()};var Re,je;const Pe=Symbol("BUTTON_GROUP_BIND_BUTTON_KEY");function Ie(){const{bindChildren:e,childProviders:t,length:n}=j(Pe);return{length:n,buttons:t,bindButtons:e}}const{name:Ne,n:Ue,classes:He}=_("button"),Ae=["type","disabled"];const De=p({name:Ne,components:{VarLoading:ae,VarHoverOverlay:ye},directives:{Ripple:ee,Hover:$e},props:Be,setup(e){const t=g(!1),{buttonGroup:n}=function(){const{bindParent:e,parentProvider:t,index:n}=P(Pe);return{index:n,buttonGroup:t,bindButtonGroup:e}}(),{hovering:o,handleHovering:i}=function(){const e=g(!1);return{hovering:e,handleHovering:t=>{e.value=t}}}(),l=v((()=>{if(!n)return{elevation:I(e.elevation,2),type:null!=e.type?e.type:"default",size:null!=e.size?e.size:"normal",color:e.color,text:e.text,textColor:e.textColor,outline:e.outline};const{type:t,size:o,color:i,textColor:l,mode:s}=n;return{elevation:"",type:null!=e.type?e.type:t.value,size:null!=e.size?e.size:o.value,color:null!=e.color?e.color:i.value,textColor:null!=e.textColor?e.textColor:l.value,text:"normal"!==s.value,outline:"outline"===s.value}}));function s(n){e.autoLoading&&(t.value=!0,n=N(n)?n:[n],Promise.all(n).then((()=>{t.value=!1})).catch((()=>{t.value=!1})))}return{pending:t,states:l,hovering:o,n:Ue,classes:He,handleHovering:i,handleClick:function(n){const{loading:o,disabled:i,onClick:l}=e;!l||o||i||t.value||s(z(l,n))},handleTouchstart:function(n){const{loading:o,disabled:i,onTouchstart:l}=e;!l||o||i||t.value||s(z(l,n))}}}});De.render=function(e,a){const c=f("var-loading"),d=f("var-hover-overlay"),u=m("ripple"),p=m("hover");return b((t(),n("button",{class:o(e.classes(e.n(),e.n("$--box"),e.n(`--${e.states.size}`),[e.block,`${e.n("$--flex")} ${e.n("--block")}`,e.n("$--inline-flex")],[e.disabled,e.n("--disabled")],[e.states.text,`${e.n(`--text-${e.states.type}`)} ${e.n("--text")}`,`${e.n(`--${e.states.type}`)} ${e.states.elevation}`],[e.states.text&&e.disabled,e.n("--text-disabled")],[e.round,e.n("--round")],[e.states.outline,e.n("--outline")],[e.loading||e.pending,e.n("--loading")])),style:r({color:e.states.textColor,background:e.states.color}),type:e.nativeType,disabled:e.disabled,onClick:a[0]||(a[0]=(...t)=>e.handleClick&&e.handleClick(...t)),onTouchstart:a[1]||(a[1]=(...t)=>e.handleTouchstart&&e.handleTouchstart(...t))},[e.loading||e.pending?(t(),k(c,{key:0,class:o(e.n("loading")),"var-button-cover":"",color:e.loadingColor,type:e.loadingType,size:e.loadingSize,radius:e.loadingRadius},null,8,["class","color","type","size","radius"])):l("v-if",!0),s("div",{class:o(e.classes(e.n("content"),[e.loading||e.pending,e.n("--hidden")]))},[i(e.$slots,"default")],2),x(d,{hovering:!(e.disabled||e.loading||e.pending)&&e.hovering},null,8,["hovering"])],46,Ae)),[[u,{disabled:e.disabled||!e.ripple||e.loading||e.pending}],[p,e.handleHovering,"desktop"]])};var Ge=De;E(Ge),T(Ge,Be);const Xe=Ge;var Ye=Ge;export{Xe as _,ee as a,H as b,ae as c,te as p,Ye as s,Ie as u};