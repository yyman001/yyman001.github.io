import{p as e,b as a,e as s,c as n,s as o,h as l,w as t,a as c}from"./index-2de332e8.js";import{j as r,o as i,p,w as m,a as d,m as u,r as f,n as $,c as C,k as b,e as h,T as x,f as y,h as g}from"./index-330ef47a.js";const k={type:{type:String,default:"default"},size:{type:String,default:"normal"},color:String,textColor:String,iconName:e(a,"name"),namespace:e(a,"namespace"),plain:Boolean,round:{type:Boolean,default:!0},block:Boolean,closable:Boolean,closeable:Boolean,onClose:s()},{name:S,n:B,classes:j}=n("chip");const v=y({name:S,components:{VarIcon:o},inheritAttrs:!1,props:k,setup:e=>({chipStyle:g((()=>{const{plain:a,textColor:s,color:n}=e;return a?{color:s||n,borderColor:n}:{color:s,background:n}})),contentClass:g((()=>{const{size:a,block:s,type:n,plain:o,round:l}=e,t=B(s?"$--flex":"$--inline-flex"),c=o?`${B("plain")} ${B(`plain-${n}`)}`:B(`--${n}`),r=l?B("--round"):null;return[B(`--${a}`),t,c,r]})),n:B,classes:j,handleClose:function(a){l(e.onClose,a)}})});v.render=function(e,a){const s=r("var-icon");return i(),p(x,{name:e.n("$-fade")},{default:m((()=>[d("span",u({class:e.classes(e.n(),e.n("$--box"),...e.contentClass),style:e.chipStyle},e.$attrs),[f(e.$slots,"left"),d("span",{class:$(e.n(`text-${e.size}`))},[f(e.$slots,"default")],2),f(e.$slots,"right"),e.closeable||e.closable?(i(),C("span",{key:0,class:$(e.n("--close")),onClick:a[0]||(a[0]=(...a)=>e.handleClose&&e.handleClose(...a))},[b(s,{name:`${e.iconName?e.iconName:"close-circle"}`,namespace:e.namespace},null,8,["name","namespace"])],2)):h("v-if",!0)],16)])),_:3},8,["name"])};var z=v;t(z),c(z,k);const N=z;export{N as _};
