"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[59],{131:(e,n,s)=>{s.d(n,{A:()=>o});s(43);var i=s(216),l=s(475),t=s(3),c=s(306),r=s(547),a=s(579);const o=function(){const e=(0,i.Zp)(),n=(0,t.wA)(),s=c.A.getState();return(0,a.jsxs)("div",{className:"menubar",children:[s.isLoggedIn?(0,a.jsx)("button",{className:"login",onClick:()=>{n((0,r.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,a.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,a.jsxs)("ul",{children:[(0,a.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,a.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,a.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,a.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,a.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,a.jsxs)("li",{className:"dropdown",children:[(0,a.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,a.jsxs)("div",{className:"dropdown-content",children:[(0,a.jsx)(l.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,a.jsx)(l.N_,{to:"/member/mypage",children:"\ucc1c \ubaa9\ub85d"}),(0,a.jsx)(l.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},59:(e,n,s)=>{s.r(n),s.d(n,{default:()=>a});var i=s(43),l=s(154),t=s(216),c=s(131),r=s(579);const a=function(){const[e,n]=(0,i.useState)(""),[s,a]=(0,i.useState)(""),[o,d]=(0,i.useState)(""),[h,m]=(0,i.useState)(""),x=(0,t.Zp)();return(0,r.jsxs)("div",{children:[(0,r.jsx)(c.A,{}),(0,r.jsx)("h2",{children:"\uc544\uc774\ub514 \ucc3e\uae30"}),(0,r.jsx)("input",{type:"text",placeholder:"\uc774\ub984",value:e,onChange:e=>n(e.target.value)}),(0,r.jsx)("input",{type:"text",placeholder:"\uc0dd\ub144\uc6d4\uc77c",value:s,onChange:e=>a(e.target.value)}),(0,r.jsx)("button",{onClick:async()=>{try{const n=await l.A.get("/member/searchid?mem_name=".concat(e,"&birth=").concat(s));200===n.status?(d(n.data),m("")):(d(""),m("\uc774\ub984\uacfc \uc0dd\ub144\uc6d4\uc77c\uc744 \ub2e4\uc2dc \ud655\uc778\ud574\ubcf4\uc138\uc694"))}catch(h){console.error("Error finding member id:",h),d(""),m("\uc11c\ubc84\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")}},children:"\uc870\ud68c"}),o&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{children:["\ucc3e\uc740 \uc544\uc774\ub514: ",o]}),(0,r.jsx)("hr",{}),(0,r.jsx)("button",{onClick:()=>x("/member/login"),children:" \ub85c\uadf8\uc778 \ud654\uba74 >>"})]}),h&&(0,r.jsx)("p",{children:h})]})}}}]);
//# sourceMappingURL=59.e0fcae24.chunk.js.map