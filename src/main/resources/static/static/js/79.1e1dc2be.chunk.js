"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[79],{2131:(e,n,t)=>{t.d(n,{A:()=>o});t(5043);var r=t(3216),s=t(5475),i=t(3003),l=t(2306),a=t(5547),c=(t(8790),t(579));const o=function(){const e=(0,r.Zp)(),n=(0,i.wA)(),t=l.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[t.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{n((0,a.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(s.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(s.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(s.N_,{to:"/member/mypage/mycontent",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,c.jsx)(s.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},4079:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});var r=t(5043),s=t(3216),i=t(7154),l=t(3003),a=(t(8162),t(2131)),c=t(579);const o=function(){const e=(0,s.Zp)(),[n,t]=(0,r.useState)(""),[o,d]=(0,r.useState)(""),m=(0,l.d4)((e=>e.userData));return m?(0,c.jsxs)("div",{children:[(0,c.jsx)(a.A,{}),(0,c.jsxs)("div",{className:"form-container",children:[(0,c.jsx)("h2",{children:"\uac8c\uc2dc\uae00 \uc791\uc131"}),(0,c.jsxs)("form",{onSubmit:t=>{t.preventDefault();const r=m?m.mem_id:"",s=(new Date).toISOString();i.A.post("/board/WriteBoard",{title:n,content:o,reg_name:r,hit:0,w_date:s,u_date:s}).then((n=>{console.log("\uac8c\uc2dc\uae00 \uc791\uc131 \uc131\uacf5:",n.data),e("/board/list")})).catch((e=>{console.error("\uac8c\uc2dc\uae00 \uc791\uc131 \uc2e4\ud328:",e)}))},children:[(0,c.jsx)("div",{className:"form-group",children:(0,c.jsx)("input",{name:"title",type:"text",value:n,onChange:e=>t(e.target.value),placeholder:"\uc81c\ubaa9",required:!0})}),(0,c.jsx)("div",{className:"form-group",children:(0,c.jsx)("textarea",{name:"content",cols:"30",rows:"10",value:o,onChange:e=>d(e.target.value),placeholder:"\ub0b4\uc6a9\uc744 \uc785\ub825\ud558\uc138\uc694",required:!0})}),(0,c.jsx)("div",{className:"button-container",children:(0,c.jsx)("button",{type:"submit",children:"\uc800\uc7a5"})})]})]})]}):(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."}),(0,c.jsx)("button",{onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"})]})}},8162:()=>{},8790:()=>{}}]);
//# sourceMappingURL=79.1e1dc2be.chunk.js.map