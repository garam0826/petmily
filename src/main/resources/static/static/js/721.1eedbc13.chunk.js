"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[721],{131:(e,n,r)=>{r.d(n,{A:()=>d});r(43);var s=r(216),i=r(475),c=r(3),o=r(306),l=r(547),t=(r(790),r(579));const d=function(){const e=(0,s.Zp)(),n=(0,c.wA)(),r=o.A.getState();return(0,t.jsxs)("div",{className:"menubar",children:[r.isLoggedIn?(0,t.jsx)("button",{className:"login",onClick:()=>{n((0,l.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,t.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,t.jsxs)("ul",{children:[(0,t.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,t.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,t.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,t.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,t.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,t.jsxs)("li",{className:"dropdown",children:[(0,t.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,t.jsxs)("div",{className:"dropdown-content",children:[(0,t.jsx)(i.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,t.jsx)(i.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,t.jsx)(i.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},721:(e,n,r)=>{r.r(n),r.d(n,{default:()=>t});var s=r(43),i=r(3),c=r(154),o=r(131),l=r(579);const t=function(){const e=(0,i.d4)((e=>e.userData)).mem_id,[n,r]=(0,s.useState)([]);(0,s.useEffect)((()=>{e&&t(e)}),[e]);const t=e=>{c.A.get("/favorites/list?memId=".concat(e)).then((e=>{r(e.data)})).catch((e=>{console.error("Error fetching favorites: ",e)}))};return(0,l.jsxs)("div",{children:[(0,l.jsx)(o.A,{}),(0,l.jsx)("h2",{children:"\ucc1c \ubaa9\ub85d"}),(0,l.jsx)("ul",{children:n.map((n=>(0,l.jsxs)("li",{children:[(0,l.jsx)("span",{children:n.desertionNo}),(0,l.jsx)("button",{onClick:()=>{return r=n.desertionNo,void c.A.delete("/favorites/remove?memId=".concat(e,"&desertionNo=").concat(r)).then((n=>{console.log("Favorite removed successfully"),t(e)})).catch((e=>{console.error("Error removing favorite: ",e)}));var r},children:"\ucc1c \uc81c\uac70"})]},n.id)))})]})}},790:()=>{}}]);
//# sourceMappingURL=721.1eedbc13.chunk.js.map