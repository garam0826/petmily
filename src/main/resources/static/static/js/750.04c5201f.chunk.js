"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[750],{9708:(e,n,s)=>{s.d(n,{A:()=>d});s(5043);var t=s(3216),i=s(5475),r=s(3003),l=s(2306),a=s(5547);s(8790);const c=s.p+"static/media/simple.7f599d6e71cfbe15300a.png";var o=s(579);const d=function(){const e=(0,t.Zp)(),n=(0,r.wA)(),s=l.A.getState();return(0,o.jsxs)("div",{className:"menubar",children:[s.isLoggedIn?(0,o.jsx)("button",{className:"login",onClick:()=>{n((0,a.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,o.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{onClick:()=>e("/main"),children:(0,o.jsx)("img",{src:c,style:{width:"150px",height:"auto",marginTop:"-20px",marginLeft:"10px"}})}),(0,o.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,o.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,o.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,o.jsxs)("li",{className:"dropdown",children:[(0,o.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,o.jsxs)("div",{className:"dropdown-content",children:[(0,o.jsx)(i.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,o.jsx)(i.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,o.jsx)(i.N_,{to:"/member/mypage/mycontent",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,o.jsx)(i.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},4079:(e,n,s)=>{s.r(n),s.d(n,{default:()=>o});var t=s(5043),i=s(3216),r=s(7154),l=s(3003),a=(s(8162),s(9708)),c=s(579);const o=function(){const e=(0,i.Zp)(),[n,s]=(0,t.useState)(""),[o,d]=(0,t.useState)(""),m=(0,l.d4)((e=>e.userData));return m?(0,c.jsxs)("div",{children:[(0,c.jsx)(a.A,{}),(0,c.jsxs)("div",{className:"form-container",children:[(0,c.jsx)("h2",{children:"\uac8c\uc2dc\uae00 \uc791\uc131"}),(0,c.jsxs)("form",{onSubmit:s=>{s.preventDefault();const t=m?m.mem_id:"",i=(new Date).toISOString();r.A.post("/board/WriteBoard",{title:n,content:o,reg_name:t,hit:0,w_date:i,u_date:i}).then((n=>{console.log("\uac8c\uc2dc\uae00 \uc791\uc131 \uc131\uacf5:",n.data),e("/board/list")})).catch((e=>{console.error("\uac8c\uc2dc\uae00 \uc791\uc131 \uc2e4\ud328:",e)}))},children:[(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{children:"\uc81c\ubaa9"}),(0,c.jsx)("input",{name:"title",type:"text",value:n,onChange:e=>s(e.target.value),required:!0})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{children:"\uc791\uc131\uc790"}),(0,c.jsx)("input",{name:"reg_name",type:"text",value:m?m.mem_id:"",readOnly:!0})]}),(0,c.jsxs)("div",{className:"form-group",children:[(0,c.jsx)("label",{children:"\ub0b4\uc6a9"}),(0,c.jsx)("textarea",{name:"content",cols:"30",rows:"10",value:o,onChange:e=>d(e.target.value),required:!0})]}),(0,c.jsx)("div",{className:"button-container",children:(0,c.jsx)("button",{type:"submit",children:"\uc800\uc7a5"})})]})]})]}):(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."}),(0,c.jsx)("button",{onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"})]})}},8162:()=>{},8790:()=>{}}]);
//# sourceMappingURL=750.04c5201f.chunk.js.map