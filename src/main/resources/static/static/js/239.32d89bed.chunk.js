"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[239],{131:(e,n,s)=>{s.d(n,{A:()=>d});s(43);var t=s(216),a=s(475),i=s(3),l=s(306),c=s(547),r=(s(790),s(579));const d=function(){const e=(0,t.Zp)(),n=(0,i.wA)(),s=l.A.getState();return(0,r.jsxs)("div",{className:"menubar",children:[s.isLoggedIn?(0,r.jsx)("button",{className:"login",onClick:()=>{n((0,c.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,r.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,r.jsxs)("ul",{children:[(0,r.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,r.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,r.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,r.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,r.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,r.jsxs)("li",{className:"dropdown",children:[(0,r.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,r.jsxs)("div",{className:"dropdown-content",children:[(0,r.jsx)(a.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,r.jsx)(a.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,r.jsx)(a.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},239:(e,n,s)=>{s.r(n),s.d(n,{default:()=>d});var t=s(43),a=s(154),i=s(216),l=s(306),c=s(131),r=(s(917),s(261),s(579));const d=function(){const[e,n]=(0,t.useState)(null),[s,d]=(0,t.useState)(null),[o,m]=(0,t.useState)({mem_id:"",mem_pw:"",nickname:"",email:"",region:"",country_district:"",reg_date:"",edit_date:""}),x=(0,i.Zp)(),h=l.A.getState(),j=h.isLoggedIn?h.userData.mem_id:null;return(0,t.useEffect)((()=>{(async()=>{console.log(h);try{const e=await a.A.get("/member/MyPage?mem_id=".concat(j));n(e.data),m(e.data),d(null)}catch(s){d("\uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uac00\uc838\uc624\ub294 \uc911\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),n(null)}})()}),[]),(0,r.jsxs)(t.Fragment,{children:[(0,r.jsx)("header",{children:(0,r.jsx)(c.A,{})}),(0,r.jsx)("main",{children:(0,r.jsxs)("div",{children:[(0,r.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,r.jsx)("div",{className:"container_result",children:(0,r.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,r.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,r.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,r.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("div",{children:(0,r.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:" \ud68c\uc6d0 \uc815\ubcf4 "})}),(0,r.jsx)("br",{}),(0,r.jsx)("br",{}),(0,r.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"})]})})})})}),e?(0,r.jsxs)("form",{className:"form",children:[(0,r.jsxs)("p",{className:"contentContainer",children:["ID: ",e.mem_id]}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{className:"contentContainer",children:["PW: ",e.mem_pw]}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{className:"contentContainer",children:["Name: ",e.nickname]}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{className:"contentContainer",children:["\ub3c4/\ud2b9\ubcc4\uc2dc: ",e.region]}),(0,r.jsx)("br",{}),(0,r.jsxs)("p",{className:"contentContainer",children:["\uc2dc/\uad70: ",e.county_district]})]}):(0,r.jsx)("p",{children:"Please log in to view your information"}),(0,r.jsx)("button",{className:"custom-button",type:"button",onClick:()=>x("/member/mypage"),children:"\ub9c8\uc774\ud398\uc774\uc9c0 \ud654\uba74\uc73c\ub85c \u2192"})]})})]})}},261:()=>{},790:()=>{},917:(e,n,s)=>{s.d(n,{A:()=>t});const t={}}}]);
//# sourceMappingURL=239.32d89bed.chunk.js.map