"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[466],{131:(e,s,n)=>{n.d(s,{A:()=>o});n(43);var l=n(216),a=n(475),i=n(3),t=n(306),r=n(547),c=(n(790),n(579));const o=function(){const e=(0,l.Zp)(),s=(0,i.wA)(),n=t.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[n.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{s((0,r.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(a.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(a.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(a.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},466:(e,s,n)=>{n.r(s),n.d(s,{default:()=>d});var l=n(154),a=n(43),i=n(3),t=n(547),r=n(216),c=n(131),o=(n(917),n(696),n(579));const d=function(){const[e,s]=(0,a.useState)(""),[n,d]=(0,a.useState)(""),m=(0,i.wA)(),x=(0,r.Zp)();return(0,o.jsxs)(a.Fragment,{children:[(0,o.jsx)("header",{children:(0,o.jsx)(c.A,{})}),(0,o.jsxs)("main",{children:[(0,o.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,o.jsx)("div",{className:"container_result",children:(0,o.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,o.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,o.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,o.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:" \ub85c\uadf8\uc778 "})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:[(0,o.jsx)("br",{}),'"\uac15\uc544\uc9c0\ub97c \uc0ac\uc9c0 \ub9d0\uace0 \uc785\uc591\ud569\ub2c8\ub2e4!"',(0,o.jsx)("br",{}),"\ucde8\ud5a5\uc5d0 \ub9de\ub294 \uac15\uc544\uc9c0\ub97c \ub9cc\ub098\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 \ub85c\uadf8\uc778 \ud574\uc8fc\uc138\uc694"]})})}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"})]})})})})}),(0,o.jsxs)("form",{style:{marginTop:"10px",marginBottom:"10px"},className:"form",onSubmit:s=>{s.preventDefault();const a={mem_id:e,mem_pw:n};l.A.post("/member/Login",a).then((e=>{console.log(e.data),m((0,t.iD)(a)),alert("\ub85c\uadf8\uc778 \uc131\uacf5!"),x("/main")})).catch((e=>{console.error("Login failed: ",e),alert("\ub85c\uadf8\uc778 \uc2e4\ud328!"+e)}))},children:[(0,o.jsxs)("label",{className:"label",children:["Username:",(0,o.jsx)("input",{className:"input",type:"text",value:e,onChange:e=>s(e.target.value)})]}),(0,o.jsx)("br",{}),(0,o.jsxs)("label",{className:"label",children:["Password:",(0,o.jsx)("input",{className:"input",type:"password",value:n,onChange:e=>d(e.target.value)})]}),(0,o.jsx)("button",{className:"button_login",type:"submit",children:"Login"})]}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"0.1px"},children:[(0,o.jsx)("button",{className:"button_login",style:{marginRight:"15px"},onClick:()=>x("/member/searchid"),children:" \uc544\uc774\ub514 \ucc3e\uae30 >>"}),(0,o.jsx)("button",{className:"button_login",style:{marginLeft:"15px"},onClick:()=>x("/member/searchpw"),children:" \ube44\ubc00\ubc88\ud638 \ucc3e\uae30 >>"})]}),(0,o.jsx)("button",{className:"button_login",onClick:()=>x("/member/signup"),children:" \ud68c\uc6d0 \uac00\uc785 >>"})]})]})}},696:()=>{},790:()=>{},917:(e,s,n)=>{n.d(s,{A:()=>l});const l={}}}]);
//# sourceMappingURL=466.ab2e35e9.chunk.js.map