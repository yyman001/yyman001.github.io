import{u as t}from"./index-6a22476b.js";import{J as e,g as o}from"./index-330ef47a.js";const n=e("roomStore",(()=>{const e=o(""),n=o(""),s=o(""),u=o([]),i=o(""),m=t=>u.value.find((e=>e.objectId===t));return t("houseKey",e),t("houseId",n),t("title",s),t("rooms",u),{houseKey:e,setHouseKey:t=>{e.value=t},setHouseId:t=>{n.value=t},setTitle:t=>{s.value=t},getTitle:()=>s.value,actionRoomId:i,setActionRoomId:t=>{i.value=t},rooms:u,setRooms:t=>{u.value=t},setRoomQuestionContent:(t,e)=>{m(t).questionContent=e},setRoomInputContent:(t,e)=>{m(t).inputContent=e},getRoomInputContent:t=>m(t).inputContent,getRooms:()=>u.value.map((t=>{const{objectId:e,name:o,type:n,questionContent:s,inputContent:u}=t;return{objectId:e,name:o,type:n,questionContent:s,inputContent:u}}))}}));export{n as u};
