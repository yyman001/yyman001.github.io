import{_ as e}from"./index-33f856f6.js";import{_ as a,a as l}from"./index-cc41546c.js";import{_ as t}from"./index-15d558b7.js";import{s as n,_ as o}from"./index-ffc91312.js";import{_ as s}from"./index-5ca70d9b.js";import{_ as r}from"./index-c539c6bb.js";import{h as u,y as i,I as d,N as p,A as m,k as c,i as v,o as f,c as y,b as h,w as _,e as x,t as b,C as j,s as g,D as I,F as k,G as C,f as w,P as V,O as B}from"./index-e54f7498.js";import{_ as U}from"./index-23ce17af.js";import{u as z}from"./useParse-11a9a4a1.js";import"./_plugin-vue_export-helper-1b428a4d.js";import"./index-574fb5ae.js";const T={class:"p-4"},R={class:"w-full p-4 bg-white border-t border-gray-100 shadow"},$={class:"p-2 text-xl font-semibold"},q={class:"p-4"},D=x("h3",{class:"py-3 font-sans text-lg font-bold"},"新增",-1),G={class:"flex flex-row-reverse mt-5"},H=u({__name:"index",setup(u){const{getCurrentUser:H}=B(),M=i(),{addDoc:N}=z("house_table"),P=d(),{roomTable:Y}=p(P),{transformRoomsGoodsInfo:A}=P,E=m(),F=c(""),K=c(""),L=c(""),O=c(""),S=c(!1),J=c(null),Q=[{name:"卧室",type:"BR"},{name:"卫生间",type:"BT"},{name:"阳台",type:"BY"}],W=[{name:"入户门",type:"IM"},{name:"玄关",type:"EH"},{name:"厨房",type:"KT"},{name:"大厅",type:"HL"}],X=c([]),Z=v((()=>X.value.filter((e=>"BR"===e.type)).length)),ee=v((()=>X.value.filter((e=>"BT"===e.type)).length)),ae=v((()=>X.value.filter((e=>"BY"===e.type)).length)),le=v((()=>`2厅${Z.value}房${ae.value}阳${ee.value}卫1厨`)),te=e=>X.value.findIndex((a=>a.name===e.name&&a.type===e.type)),ne=e=>{const a=te(e);-1!==a?X.value.splice(a,1):X.value.push(e)},oe=e=>{const{objectId:a,name:l,type:t,zIndex:n}=e;return{objectId:a,name:l,type:t,zIndex:n,inputContent:[],questionContent:[]}},se=v((()=>{return e=Q,a=Y.value,e.map((({name:e,type:l})=>{const t=a.filter((e=>e.type===l&&!e.isTemplate)).map((e=>oe(e)));return{name:e,type:l,children:t}}));var e,a})),re=()=>{const e=se.value.find((e=>e.type===L.value)),a=Y.value.find((e=>e.type===L.value)),l=oe(a);l.name=O.value,l.objectId="c-"+Math.random().toString(36).substr(2),e&&(e.children.push(l),S.value=!1,O.value="",ne(l))},ue=async()=>{if(!F.value)return void n.error("楼盘名称不能为空!");if(!K.value)return void n.error("户型不能为空!");if(!X.value.length)return void n.error("至少选择一个房间!");const e=W.map((({type:e})=>{const a=Y.value.find((a=>a.type===e));return oe(a)})).concat(X.value),a=H();try{await N({name:F.value,houseId:K.value,roomsInfo:le.value,rooms:e,createUserName:null==a?void 0:a.username})}catch(t){return void n.error("添加失败!")}n.success("添加成功!");const l=A(e);M.setRooms(l),E.push({path:"/details",query:{houseId:"houseId"}})};return(n,u)=>{const i=o,d=l,p=r,m=t,c=e,v=s;return f(),y(k,null,[h(U,{title:"新增验房报告"},{footer:_((()=>[x("div",R,[x("div",$,[x("p",null,b(j(le)),1)]),h(c,{size:"large",block:"",type:"primary",onClick:ue},{default:_((()=>[g("确认")])),_:1})])])),default:_((()=>[x("div",T,[h(a,{title:"房屋信息"},{default:_((()=>[h(i,{class:"mb-4",variant:"outlined",placeholder:"楼盘名称",modelValue:j(F),"onUpdate:modelValue":u[0]||(u[0]=e=>I(F)?F.value=e:null),clearable:""},null,8,["modelValue"]),h(i,{variant:"outlined",placeholder:"户型",modelValue:j(K),"onUpdate:modelValue":u[1]||(u[1]=e=>I(K)?K.value=e:null),clearable:""},null,8,["modelValue"])])),_:1}),(f(!0),y(k,null,C(j(se),(e=>(f(),w(a,{key:e.type,title:e.name},{add:_((()=>[h(c,{class:"",type:"primary",title:"自定义填写内容",onClick:a=>{return l=e.type,L.value=l,S.value=!0,void V((()=>{null==J||J.value.focus()}));var l}},{default:_((()=>[h(m,{name:"plus"})])),_:2},1032,["onClick"])])),default:_((()=>[x("div",null,[h(p,null,{default:_((()=>[(f(!0),y(k,null,C(e.children,(e=>(f(),w(d,{type:-1!==te(e)?"primary":"default",key:e.id,onClick:a=>ne(e)},{default:_((()=>[g(b(e.name),1)])),_:2},1032,["type","onClick"])))),128))])),_:2},1024)])])),_:2},1032,["title"])))),128))])])),_:1}),h(v,{position:"top",show:j(S),"onUpdate:show":u[3]||(u[3]=e=>I(S)?S.value=e:null)},{default:_((()=>[x("div",q,[D,h(i,{variant:"outlined",placeholder:"请输入名称",ref_key:"input",ref:J,autofocus:"",size:"small",modelValue:j(O),"onUpdate:modelValue":u[2]||(u[2]=e=>I(O)?O.value=e:null)},null,8,["modelValue"]),x("div",G,[h(c,{type:"primary",size:"large",onClick:re},{default:_((()=>[g("提交")])),_:1})])])])),_:1},8,["show"])],64)}}});export{H as default};
