"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[446],{9708:(e,s,a)=>{a.d(s,{A:()=>o});a(5043);var n=a(3216),t=a(5475),i=a(3003),r=a(2306),l=a(5547);a(8790);const c=a.p+"static/media/simple.7f599d6e71cfbe15300a.png";var d=a(579);const o=function(){const e=(0,n.Zp)(),s=(0,i.wA)(),a=r.A.getState();return(0,d.jsxs)("div",{className:"menubar",children:[a.isLoggedIn?(0,d.jsx)("button",{className:"login",onClick:()=>{s((0,l.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,d.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{onClick:()=>e("/main"),children:(0,d.jsx)("img",{src:c,style:{width:"150px",height:"auto",marginTop:"-20px",marginLeft:"10px"}})}),(0,d.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,d.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,d.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,d.jsxs)("li",{className:"dropdown",children:[(0,d.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,d.jsxs)("div",{className:"dropdown-content",children:[(0,d.jsx)(t.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,d.jsx)(t.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,d.jsx)(t.N_,{to:"/member/mypage/mycontent",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,d.jsx)(t.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},2575:(e,s,a)=>{a.r(s),a.d(s,{default:()=>d});var n=a(5043),t=a(7154),i=a(3216),r=a(9708),l=(a(4696),a(6917),a(5795)),c=a(579);const d=function(){const[e,s]=(0,n.useState)(""),[a,d]=(0,n.useState)(""),[o,m]=(0,n.useState)(""),[x,h]=(0,n.useState)(""),j=(0,i.Zp)();return(0,c.jsxs)(n.Fragment,{children:[(0,c.jsx)("header",{children:(0,c.jsx)(r.A,{})}),(0,c.jsxs)("main",{children:[(0,c.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,c.jsx)("div",{className:"container_result",children:(0,c.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,c.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,c.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,c.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("div",{children:(0,c.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:" \ube44\ubc00\ubc88\ud638 \ucc3e\uae30 "})}),(0,c.jsx)("div",{children:(0,c.jsx)("span",{className:"fsize13",children:(0,c.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:[(0,c.jsx)("br",{}),"\ube44\ubc00\ubc88\ud638\ub97c \uc78a\uc73c\uc168\ub2e4\uba74, \uc544\uc774\ub514\uc640 \uc774\uba54\uc77c\ub85c \ube44\ubc00\ubc88\ud638\ub97c \ucc3e\uc544\ubcf4\uc138\uc694!"]})})}),(0,c.jsx)("br",{}),(0,c.jsx)("br",{}),(0,c.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"})]})})})})}),(0,c.jsxs)("form",{className:"form",children:[(0,c.jsx)(l.A,{id:"standard-basic",label:"ID",variant:"standard",value:e,style:{width:"250px",height:"auto"},onChange:e=>s(e.target.value)})," ",(0,c.jsx)("br",{}),(0,c.jsx)(l.A,{id:"standard-basic",label:"\uc774\uba54\uc77c",variant:"standard",value:a,style:{width:"250px",height:"auto"},onChange:e=>d(e.target.value)}),(0,c.jsx)("button",{className:"button",onClick:async s=>{s.preventDefault();try{const s=await t.A.post("/member/SearchPW",{mem_id:e,email:a});m(s.data)}catch(x){h("\uc544\uc774\ub514\uc640 \uc774\uba54\uc77c\uc744 \ub2e4\uc2dc \ud655\uc778\ud574\ubcf4\uc138\uc694"),console.error(x)}},children:"\uc870\ud68c"}),o?(0,c.jsxs)("div",{children:[(0,c.jsx)("hr",{}),(0,c.jsxs)("p",{children:["\ucc3e\uc740 \ube44\ubc00\ubc88\ud638: ",o]}),(0,c.jsx)("button",{className:"button",onClick:()=>j("/member/login"),children:" \ub85c\uadf8\uc778 \ud654\uba74 >>"})]}):(0,c.jsx)("div",{children:x&&(0,c.jsx)("p",{children:x})})]})]})]})}},4696:()=>{},8790:()=>{},6917:(e,s,a)=>{a.d(s,{A:()=>n});const n={}}}]);
//# sourceMappingURL=446.d2d7d089.chunk.js.map