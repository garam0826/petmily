"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[895],{9708:(e,s,n)=>{n.d(s,{A:()=>o});n(5043);var a=n(3216),i=n(5475),t=n(3003),r=n(2306),l=n(5547);n(8790);const d=n.p+"static/media/simple.7f599d6e71cfbe15300a.png";var c=n(579);const o=function(){const e=(0,a.Zp)(),s=(0,t.wA)(),n=r.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[n.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{s((0,l.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:(0,c.jsx)("img",{src:d,style:{width:"150px",height:"auto",marginTop:"-20px",marginLeft:"10px"}})}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(i.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(i.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(i.N_,{to:"/member/mypage/mycontent",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,c.jsx)(i.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},6466:(e,s,n)=>{n.r(s),n.d(s,{default:()=>h});var a=n(7154),i=n(5043),t=n(3003),r=n(5547),l=n(3216),d=n(9708),c=(n(6917),n(4696),n(5795)),o=n(1906),m=n(6779),x=n(579);const h=function(){const[e,s]=(0,i.useState)(""),[n,h]=(0,i.useState)(""),p=(0,t.wA)(),j=(0,l.Zp)();return(0,x.jsxs)(i.Fragment,{children:[(0,x.jsx)("header",{children:(0,x.jsx)(d.A,{})}),(0,x.jsxs)("main",{children:[(0,x.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,x.jsx)("div",{className:"container_result",children:(0,x.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,x.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,x.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,x.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsx)("div",{children:(0,x.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:" \ub85c\uadf8\uc778 "})}),(0,x.jsx)("div",{children:(0,x.jsx)("span",{className:"fsize13",children:(0,x.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:[(0,x.jsx)("br",{}),'"\uac15\uc544\uc9c0\ub97c \uc0ac\uc9c0 \ub9d0\uace0 \uc785\uc591\ud569\ub2c8\ub2e4!"',(0,x.jsx)("br",{}),"\ucde8\ud5a5\uc5d0 \ub9de\ub294 \uac15\uc544\uc9c0\ub97c \ub9cc\ub098\uace0 \uc2f6\uc73c\uc2dc\ub2e4\uba74 \ub85c\uadf8\uc778 \ud574\uc8fc\uc138\uc694"]})})}),(0,x.jsx)("br",{}),(0,x.jsx)("br",{}),(0,x.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"})]})})})})}),(0,x.jsxs)("form",{style:{marginTop:"10px",marginBottom:"10px"},className:"form",onSubmit:s=>{s.preventDefault();const i={mem_id:e,mem_pw:n};a.A.post("/member/Login",i).then((e=>{console.log(e.data),p((0,r.iD)(i)),alert("\ub85c\uadf8\uc778 \uc131\uacf5!"),j("/main")})).catch((e=>{console.error("Login failed: ",e),alert("\ub85c\uadf8\uc778 \uc2e4\ud328!"+e)}))},children:[(0,x.jsx)(c.A,{id:"standard-basic",label:"ID",variant:"standard",value:e,style:{width:"260px",height:"auto"},onChange:e=>s(e.target.value)}),(0,x.jsx)("br",{}),(0,x.jsx)(c.A,{id:"standard-basic",type:"password",label:"Password",variant:"standard",value:n,style:{width:"260px",height:"auto"},onChange:e=>h(e.target.value)}),(0,x.jsx)(o.A,{variant:"contained",style:{marginTop:"20px",width:"300px"},type:"submit",children:"Login"})]}),(0,x.jsxs)("div",{style:{display:"flex",justifyContent:"center",gap:"0.1px"},children:[(0,x.jsx)(o.A,{variant:"contained",style:{marginTop:"20px",width:"300px",marginRight:"20px"},onClick:()=>j("/member/searchid"),children:"\uc544\uc774\ub514 \ucc3e\uae30 >>"}),(0,x.jsx)(o.A,{variant:"contained",style:{marginTop:"20px",width:"300px",marginLeft:"20px"},onClick:()=>j("/member/searchpw"),children:" \ube44\ubc00\ubc88\ud638 \ucc3e\uae30 >>"})]}),(0,x.jsx)(m.A,{style:{display:"flex",justifyContent:"center"},children:(0,x.jsx)(o.A,{variant:"contained",style:{marginTop:"20px",marginBottom:"30px",width:"300px"},onClick:()=>j("/member/signup"),children:" \ud68c\uc6d0 \uac00\uc785 >>"})})]})]})}},4696:()=>{},8790:()=>{},6917:(e,s,n)=>{n.d(s,{A:()=>a});const a={}}}]);
//# sourceMappingURL=895.c60c1844.chunk.js.map