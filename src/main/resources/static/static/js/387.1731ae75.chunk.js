"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[387],{2131:(e,a,n)=>{n.d(a,{A:()=>o});n(5043);var t=n(3216),s=n(5475),r=n(3003),c=n(2306),l=n(5547),i=(n(8790),n(579));const o=function(){const e=(0,t.Zp)(),a=(0,r.wA)(),n=c.A.getState();return(0,i.jsxs)("div",{className:"menubar",children:[n.isLoggedIn?(0,i.jsx)("button",{className:"login",onClick:()=>{a((0,l.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,i.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,i.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,i.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,i.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,i.jsxs)("li",{className:"dropdown",children:[(0,i.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,i.jsxs)("div",{className:"dropdown-content",children:[(0,i.jsx)(s.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,i.jsx)(s.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,i.jsx)(s.N_,{to:"/member/mypage/mycontent",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,i.jsx)(s.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},387:(e,a,n)=>{n.r(a),n.d(a,{default:()=>o});var t=n(5043),s=n(7154),r=n(3216),c=n(2306),l=n(2131),i=(n(6917),n(7261),n(579));const o=function(){const[e,a]=(0,t.useState)(null),[n,o]=(0,t.useState)({mem_id:"",mem_pw:"",nickname:"",email:"",region:"",county_district:"",reg_date:"",edit_date:""}),[d,m]=(0,t.useState)(""),[h,x]=(0,t.useState)(""),p=(0,r.Zp)(),u=c.A.getState(),j=u.isLoggedIn?u.userData.mem_id:null,[g,N]=(0,t.useState)(""),[b,y]=(0,t.useState)(""),[v,_]=(0,t.useState)([]),[w,C]=(0,t.useState)([]),[f,k]=(0,t.useState)(""),S=e=>{const{name:a,value:t}=e.target;o((e=>({...e,[a]:t}))),console.log(n)};return(0,t.useEffect)((()=>{(async()=>{try{const e=await s.A.get("/member/MyPage?mem_id=".concat(j));o(e.data),console.log(j),a(null)}catch(e){a("\uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uac00\uc838\uc624\ub294 \uc911\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}})();(async()=>{try{const e=await s.A.get("/member/SignUp");_(e.data)}catch(e){console.error("Error fetching region list:",e)}})()}),[]),(0,i.jsxs)(t.Fragment,{children:[(0,i.jsx)("header",{children:(0,i.jsx)(l.A,{})}),(0,i.jsxs)("main",{children:[(0,i.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,i.jsx)("div",{className:"container_result",children:(0,i.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,i.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,i.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,i.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("div",{children:(0,i.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:" \uc815\ubcf4 \uc218\uc815 "})}),(0,i.jsx)("br",{}),(0,i.jsx)("br",{}),(0,i.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"})]})})})})}),(0,i.jsxs)("form",{className:"form",children:[(0,i.jsx)("h2",{children:"\ud68c\uc6d0 \uc815\ubcf4 \uc218\uc815"}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsxs)("label",{className:"contentContainer",children:["PW:",(0,i.jsx)("input",{className:"input",type:"text",placeholder:"\uc0c8 \ube44\ubc88",name:"mem_pw",value:n.mem_pw,onChange:S})]})}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsxs)("label",{className:"contentContainer",children:["Nick Name:",(0,i.jsx)("input",{className:"input",type:"text",placeholder:"\uc0c8 \ub2c9\ub124\uc784",name:"nickname",value:n.nickname,onChange:S})]})}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsxs)("label",{className:"contentContainer",children:["Email:",(0,i.jsx)("input",{className:"input",type:"text",placeholder:"\uc0c8 \uc774\uba54\uc77c",name:"email",value:n.email,onChange:S})]})}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsxs)("label",{className:"contentContainer",htmlFor:"region",children:["Region:",(0,i.jsxs)("select",{className:"input",id:"region",onChange:async a=>{const n=a.target.value;k(n),N(n);try{const e=await s.A.get("/member/SearchDistrict?reg_name=".concat(n));C(e.data)}catch(e){console.error("Error fetching district list:",e)}},children:[(0,i.jsx)("option",{value:"",children:n.region}),v.map((e=>(0,i.jsx)("option",{value:e.reg_name,children:e.reg_name},e.reg_code)))]})]})}),(0,i.jsx)("div",{className:"wrapper",children:(0,i.jsxs)("label",{className:"contentContainer",htmlFor:"district",children:["District:",(0,i.jsxs)("select",{className:"input",id:"district",onChange:async e=>{const a=e.target.value;y(a)},children:[(0,i.jsx)("option",{value:"",children:n.county_district}),w.map((e=>(0,i.jsx)("option",{value:e.dist_name,children:e.dist_name},e.dist_code)))]})]})}),(0,i.jsx)("button",{style:{marginTop:"20px"},className:"custom-button",onClick:async()=>{console.log(n);try{await s.A.put("/member/MyPage/Update",n);alert("\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815 \uc131\uacf5!")}catch(e){console.error("Error updating member info:",e),alert(e),m("\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815 \uc2e4\ud328")}},children:"\uc218\uc815 \uc644\ub8cc\ud558\uae30"})]}),d&&(0,i.jsx)("p",{children:d}),(0,i.jsx)("button",{className:"custom-button",type:"button",onClick:()=>p("/member/mypage"),children:"\ub9c8\uc774\ud398\uc774\uc9c0 \ud654\uba74\uc73c\ub85c \u2192"})]})]})}},7261:()=>{},8790:()=>{},6917:(e,a,n)=>{n.d(a,{A:()=>t});const t={}}}]);
//# sourceMappingURL=387.1731ae75.chunk.js.map