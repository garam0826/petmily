"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[54],{9708:(e,n,s)=>{s.d(n,{A:()=>d});s(5043);var t=s(3216),a=s(5475),i=s(3003),r=s(2306),c=s(5547);s(8790);const l=s.p+"static/media/simple.7f599d6e71cfbe15300a.png";var o=s(579);const d=function(){const e=(0,t.Zp)(),n=(0,i.wA)(),s=r.A.getState();return(0,o.jsxs)("div",{className:"menubar",children:[s.isLoggedIn?(0,o.jsx)("button",{className:"login",onClick:()=>{n((0,c.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,o.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{onClick:()=>e("/main"),children:(0,o.jsx)("img",{src:l,style:{width:"150px",height:"auto",marginTop:"-20px",marginLeft:"10px"}})}),(0,o.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,o.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,o.jsx)("li",{onClick:()=>e("/board/list"),children:"\uc790\uc720\uac8c\uc2dc\ud310"}),(0,o.jsxs)("li",{className:"dropdown",children:[(0,o.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,o.jsxs)("div",{className:"dropdown-content",children:[(0,o.jsx)(a.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,o.jsx)(a.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,o.jsx)(a.N_,{to:"/member/mypage/mycontent",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,o.jsx)(a.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},6239:(e,n,s)=>{s.r(n),s.d(n,{default:()=>o});var t=s(5043),a=s(7154),i=s(3216),r=s(2306),c=s(9708),l=(s(6917),s(7261),s(579));const o=function(){const[e,n]=(0,t.useState)(null),[s,o]=(0,t.useState)(null),[d,m]=(0,t.useState)({mem_id:"",mem_pw:"",nickname:"",email:"",region:"",country_district:"",reg_date:"",edit_date:""}),x=(0,i.Zp)(),h=r.A.getState(),j=h.isLoggedIn?h.userData.mem_id:null;return(0,t.useEffect)((()=>{(async()=>{console.log(h);try{const e=await a.A.get("/member/MyPage?mem_id=".concat(j));n(e.data),m(e.data),o(null)}catch(s){o("\uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uac00\uc838\uc624\ub294 \uc911\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),n(null)}})()}),[]),(0,l.jsxs)(t.Fragment,{children:[(0,l.jsx)("header",{children:(0,l.jsx)(c.A,{})}),(0,l.jsx)("main",{children:(0,l.jsxs)("div",{children:[(0,l.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,l.jsx)("div",{className:"container_result",children:(0,l.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,l.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,l.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,l.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("div",{children:(0,l.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:" \ud68c\uc6d0 \uc815\ubcf4 "})}),(0,l.jsx)("br",{}),(0,l.jsx)("br",{}),(0,l.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"})]})})})})}),e?(0,l.jsxs)("form",{className:"form",children:[(0,l.jsxs)("p",{className:"contentContainer",children:["ID: ",e.mem_id]}),(0,l.jsx)("br",{}),(0,l.jsxs)("p",{className:"contentContainer",children:["PW: ",e.mem_pw]}),(0,l.jsx)("br",{}),(0,l.jsxs)("p",{className:"contentContainer",children:["Name: ",e.nickname]}),(0,l.jsx)("br",{}),(0,l.jsxs)("p",{className:"contentContainer",children:["\ub3c4/\ud2b9\ubcc4\uc2dc: ",e.region]}),(0,l.jsx)("br",{}),(0,l.jsxs)("p",{className:"contentContainer",children:["\uc2dc/\uad70: ",e.county_district]})]}):(0,l.jsx)("p",{children:"Please log in to view your information"}),(0,l.jsx)("button",{className:"custom-button",type:"button",onClick:()=>x("/member/mypage"),children:"\ub9c8\uc774\ud398\uc774\uc9c0 \ud654\uba74\uc73c\ub85c \u2192"})]})})]})}},7261:()=>{},8790:()=>{},6917:(e,n,s)=>{s.d(n,{A:()=>t});const t={}}}]);
//# sourceMappingURL=54.55158dfd.chunk.js.map