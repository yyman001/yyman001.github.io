import{f as e,q as o,h as a,k as t,S as n,l,v as s,T as r,m as i}from"./index-330ef47a.js";import{e as p,u as c,c as d,A as u,r as f,B as y,v,h,C as b,w as O,a as m}from"./index-2de332e8.js";const w={show:Boolean,position:{type:String,default:"center"},transition:String,overlay:{type:Boolean,default:!0},overlayClass:String,overlayStyle:Object,lockScroll:{type:Boolean,default:!0},closeOnClickOverlay:{type:Boolean,default:!0},defaultStyle:{type:Boolean,default:!0},safeArea:Boolean,safeAreaTop:Boolean,teleport:{type:[String,Object,Boolean],default:"body"},onOpen:p(),onOpened:p(),onClose:p(),onClosed:p(),onClickOverlay:p(),"onUpdate:show":p(),onRouteChange:p()},C=Symbol("POPUP_BIND_POPUP_ITEM_KEY");var S=Object.defineProperty,P=Object.getOwnPropertySymbols,g=Object.prototype.hasOwnProperty,B=Object.prototype.propertyIsEnumerable,I=(e,o,a)=>o in e?S(e,o,{enumerable:!0,configurable:!0,writable:!0,value:a}):e[o]=a,k=(e,o)=>{for(var a in o||(o={}))g.call(o,a)&&I(e,a,o[a]);if(P)for(var a of P(o))B.call(o,a)&&I(e,a,o[a]);return e};const{name:j,n:x,classes:A}=d("popup");var $=e({name:j,inheritAttrs:!1,props:w,setup(e,{slots:p,attrs:d}){const O=u((()=>e.show),!0),{zIndex:m}=f((()=>e.show),3),{disabled:w}=y(),{bindPopupItems:S}=function(){const{bindChildren:e,childProviders:o,length:a}=c(C);return{length:a,popupItems:o,bindPopupItems:e}}();function P(){const{closeOnClickOverlay:o,onClickOverlay:a}=e;h(a),o&&h(e["onUpdate:show"],!1)}function g(){const{overlayClass:o="",overlayStyle:a}=e;return t("div",{class:A(x("overlay"),o),style:k({zIndex:m.value-1},a),onClick:P},null)}function B(){return t(r,{name:x("$-fade"),onAfterEnter:e.onOpened,onAfterLeave:e.onClosed},{default:()=>[l(t("div",{class:A(x("$--box"),x()),style:{zIndex:m.value-2}},[e.overlay&&g(),t(r,{name:e.transition||x(`$-pop-${e.position}`)},{default:()=>[l(t("div",i({class:A(x("content"),x(`--${e.position}`),[e.defaultStyle,x("--content-background-color")],[e.defaultStyle,x("$-elevation--3")],[e.safeArea,x("--safe-area")],[e.safeAreaTop,x("--safe-area-top")]),style:{zIndex:m.value}},d),[O.value&&h(p.default)]),[[s,e.show]])]})]),[[s,e.show]])]})}return v((()=>e.show),(()=>e.lockScroll)),o((()=>e.show),(o=>{h(o?e.onOpen:e.onClose)})),S({show:a((()=>e.show))}),b((()=>h(e.onRouteChange))),()=>{const{teleport:o}=e;return o?t(n,{to:o,disabled:w.value},{default:()=>[B()]}):B()}}});O($),m($,w);const _=$;export{_};