import{c as t,o as e,h as a,w as s,d as i}from"./index-15d558b7.js";import{o as n,c as o,e as l,n as r,a as d,j as c,s as g,t as f,g as u,h as p,k as v,i as m,p as y}from"./index-e54f7498.js";const $={color:String,textColor:String,title:String,titlePosition:{type:String,default:"left"},elevation:{type:[Boolean,String,Number],default:!0},round:Boolean,image:String,imageLinearGradient:String,safeAreaTop:Boolean},{name:h,n:S,classes:b}=t("app-bar");const k=p({name:h,props:$,setup(t,{slots:s}){const i=v(),n=v(),o=m((()=>{const{image:e,color:a,textColor:s,imageLinearGradient:i}=t;if(null!=e){return{"background-image":`${i?`linear-gradient(${i}), `:""}url(${e})`,"background-position":"center center","background-size":"cover"}}return{background:a,color:s}}));function l(){i.value=s.left?0:void 0,n.value=s.right?0:void 0}return e(l),y(l),{rootStyles:o,paddingLeft:i,paddingRight:n,n:S,classes:b,formatElevation:a}}});k.render=function(t,e){return n(),o("div",{class:r(t.classes(t.n(),t.n("$--box"),[t.safeAreaTop,t.n("--safe-area-top")],[t.round,t.n("--round")],t.formatElevation(t.elevation,3))),style:c(t.rootStyles)},[l("div",{class:r(t.n("toolbar"))},[l("div",{class:r(t.n("left"))},[d(t.$slots,"left"),"left"===t.titlePosition?(n(),o("div",{key:0,class:r(t.n("title")),style:c({paddingLeft:t.paddingLeft})},[d(t.$slots,"default",{},(()=>[g(f(t.title),1)]))],6)):u("v-if",!0)],2),"center"===t.titlePosition?(n(),o("div",{key:0,class:r(t.n("title"))},[d(t.$slots,"default",{},(()=>[g(f(t.title),1)]))],2)):u("v-if",!0),l("div",{class:r(t.n("right"))},["right"===t.titlePosition?(n(),o("div",{key:0,class:r(t.n("title")),style:c({paddingRight:t.paddingRight})},[d(t.$slots,"default",{},(()=>[g(f(t.title),1)]))],6)):u("v-if",!0),d(t.$slots,"right")],2)],2),d(t.$slots,"content")],6)};var x=k;s(x),i(x,$);const L=x;export{L as _};
