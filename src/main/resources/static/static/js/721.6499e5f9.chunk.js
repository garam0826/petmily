"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[721],{446:(e,n,r)=>{r.d(n,{A:()=>d});r(43);var s=r(216),i=r(475),c=r(3),o=r(306),t=r(547),l=r(579);const d=function(){const e=(0,s.Zp)(),n=(0,c.wA)(),r=o.A.getState();return(0,l.jsxs)("div",{className:"menubar",children:[r.isLoggedIn?(0,l.jsx)("button",{className:"login",onClick:()=>{n((0,t.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,l.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,l.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,l.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,l.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,l.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,l.jsxs)("li",{className:"dropdown",children:[(0,l.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,l.jsxs)("div",{className:"dropdown-content",children:[(0,l.jsx)(i.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,l.jsx)(i.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,l.jsx)(i.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},721:(e,n,r)=>{r.r(n),r.d(n,{default:()=>l});var s=r(43),i=r(3),c=r(154),o=r(446),t=r(579);const l=function(){const e=(0,i.d4)((e=>e.userData)),n=e?e.mem_id:"",[r,l]=(0,s.useState)([]),[d,a]=(0,s.useState)([]),[h,m]=(0,s.useState)("");(0,s.useEffect)((()=>{n&&j(n)}),[n]);const j=e=>{c.A.get("/favorites/list?memId=".concat(e)).then((e=>{l(e.data)})).catch((e=>{console.error("Error fetching favorites: ",e)}))};return(0,t.jsxs)("div",{children:[(0,t.jsx)(o.A,{}),(0,t.jsx)("h2",{children:"\ucc1c \ubaa9\ub85d"}),(0,t.jsx)("ul",{children:r.map((e=>(0,t.jsxs)("li",{children:[(0,t.jsx)("span",{children:e.desertionNo}),(0,t.jsx)("button",{onClick:()=>{return r=e.desertionNo,void c.A.delete("/favorites/remove?memId=".concat(n,"&desertionNo=").concat(r)).then((e=>{console.log("Favorite removed successfully"),j(n)})).catch((e=>{console.error("Error removing favorite: ",e)}));var r},children:"\ucc1c \uc81c\uac70"}),(0,t.jsx)("button",{onClick:()=>{return n=e.desertionNo,void c.A.get("/favorites/members/".concat(n)).then((e=>{a(e.data),m(n)})).catch((e=>{console.error("Error fetching members: ",e)}));var n},children:"\ucc1c\ud55c \uc0ac\uc6a9\uc790 \ubcf4\uae30"})]},e.id)))}),h&&(0,t.jsxs)("div",{children:[(0,t.jsxs)("h3",{children:[h,"\uc744(\ub97c) \ucc1c\ud55c \uc0ac\uc6a9\uc790 \ubaa9\ub85d"]}),(0,t.jsx)("ul",{children:d.map((e=>(0,t.jsx)("li",{children:e},e)))})]})]})}}}]);
//# sourceMappingURL=721.6499e5f9.chunk.js.map