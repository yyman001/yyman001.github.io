import{k as e,a9 as t,aa as s,a8 as o,A as l,o as a,c as r,b as i,w as n,g as c,e as f,a as d,C as u}from"./index-e54f7498.js";import{_ as m}from"./index-15d558b7.js";import{_ as p}from"./index-33f856f6.js";import{_ as x}from"./index-574fb5ae.js";const v={class:"flex flex-col h-screen bg-indigo-50"},g={key:0,class:"sticky top-0 z-10 flex-shrink-0 bg-red-500"},k={key:1,class:"sticky bottom-0 z-10 flex-shrink-0 bg-green-500"},_={__name:"index",props:{title:String},emits:["scroll"],setup(_,{expose:y,emit:b}){const S=b,w=e(null),{y:h,directions:j,isScrolling:z,arrivedState:$}=t(w),C=e(!1);s("scrollY",h),s("isDownScroll",C);y({setScrollY:e=>{h.value=e}}),o(j,(()=>{z.value&&($.top?C.value=!1:(j.top?C.value=!1:j.bottom&&(C.value=!0),S("scroll",h.value)))}),{debounce:50,maxWait:100});const D=l(),Y=()=>{D.go(-1)};return(e,t)=>{const s=m,o=p,l=x;return a(),r("div",v,[_.title?(a(),r("div",g,[i(l,{title:_.title,"title-position":"center","safe-area-top":""},{left:n((()=>[i(o,{color:"transparent","text-color":"#fff",round:"",text:""},{default:n((()=>[i(s,{name:"chevron-left",size:30,onClick:Y})])),_:1})])),_:1},8,["title"])])):c("",!0),f("div",{class:"flex-grow overflow-y-auto",ref_key:"layoutEle",ref:w},[d(e.$slots,"default",{isDownScroll:u(C)})],512),e.$slots.footer?(a(),r("div",k,[d(e.$slots,"footer")])):c("",!0)])}}};export{_};
