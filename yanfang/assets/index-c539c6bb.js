import{c as e,f as n,P as t,Q as a,R as s,b as i,w as r,d as l}from"./index-15d558b7.js";import{h as o,b as c}from"./index-e54f7498.js";const u={size:{type:[String,Number,Array],default:"normal"},wrap:{type:Boolean,default:!0},direction:{type:String,default:"row"},justify:{type:String,default:"flex-start"},align:String,inline:Boolean};function d(e){return`calc(${e} / 2)`}const{name:p,n:f,classes:$}=e("space");var m=o({name:p,props:u,setup:(e,{slots:r})=>()=>{var l;const{inline:o,justify:u,align:p,wrap:m,direction:x,size:y}=e;let g=null!=(l=n(r.default))?l:[];const[w,j]=function(e,n){return n?[`var(--space-size-${e}-y)`,`var(--space-size-${e}-x)`]:s(e)?e.map(i):[i(e),i(e)]}(y,(e=>["mini","small","normal","large"].includes(e))(y));g=t(g);const v=g.length-1,b=g.map(((e,n)=>{const t=function(e,n,t){const{direction:a,justify:s,index:i,lastIndex:r}=t;let l="0";return"row"===a&&(["flex-start","center","flex-end","start","end"].includes(s)?l=i!==r?`${d(e)} ${n} ${d(e)} 0`:`${d(e)} 0`:"space-around"===s?l=`${d(e)} ${d(n)}`:"space-between"===s&&(l=0===i?`${d(e)} ${d(n)} ${d(e)} 0`:i===r?`${d(e)} 0 ${d(e)} ${d(n)}`:`${d(e)} ${d(n)}`)),"column"===a&&i!==r&&(l=`0 0 ${e} 0`),l}(w,j,{direction:x,justify:u,index:n,lastIndex:v});return c("div",{style:{margin:t}},[e])}));return c("div",{class:$(f(),f("$--box"),[o,f("--inline")]),style:{flexDirection:x,justifyContent:a(u),alignItems:a(p),flexWrap:m?"wrap":"nowrap",margin:"row"===x?`calc(-1 * ${w} / 2) 0`:void 0}},[b])}});r(m),l(m,u);const x=m;export{x as _};
