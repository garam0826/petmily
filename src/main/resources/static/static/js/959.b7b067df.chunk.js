"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[959],{446:(e,n,i)=>{i.d(n,{A:()=>o});i(43);var s=i(216),l=i(475),c=i(3),r=i(306),t=i(547),d=i(579);const o=function(){const e=(0,s.Zp)(),n=(0,c.wA)(),i=r.A.getState();return(0,d.jsxs)("div",{className:"menubar",children:[i.isLoggedIn?(0,d.jsx)("button",{className:"login",onClick:()=>{n((0,t.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,d.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,d.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,d.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,d.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,d.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,d.jsxs)("li",{className:"dropdown",children:[(0,d.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,d.jsxs)("div",{className:"dropdown-content",children:[(0,d.jsx)(l.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,d.jsx)(l.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,d.jsx)(l.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},959:(e,n,i)=>{i.r(n),i.d(n,{default:()=>a});i(43);var s=i(3),l=i(547),c=i(216),r=i(306),t=i(154),d=i(446),o=(i(696),i(579));const a=function(){const e=(0,s.wA)(),n=(0,c.Zp)(),i=r.A.getState(),a=i.isLoggedIn?i.userData.mem_id:null;return(0,o.jsxs)("div",{children:[(0,o.jsx)("header",{children:(0,o.jsx)(d.A,{})}),(0,o.jsxs)("main",{children:[(0,o.jsx)("h1",{children:"My Page"}),i.isLoggedIn?(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["Welcome, ",a,"\ub2d8!"]}),(0,o.jsx)("hr",{}),(0,o.jsx)("div",{children:(0,o.jsxs)("form",{onSubmit:()=>n("/member/mypage/myinfo"),children:[(0,o.jsx)("h2",{children:"\ub0b4 \uc815\ubcf4 \ud655\uc778\ud558\uae30"}),(0,o.jsx)("button",{type:"submit",children:"\uc815\ubcf4 \ud655\uc778"})]})}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815\ud558\uae30"}),(0,o.jsx)("button",{onClick:()=>n("/member/mypage/myedit"),children:"edit"})]}),(0,o.jsx)("hr",{}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"\ud68c\uc6d0\uc815\ubcf4 \ud0c8\ud1f4\ud558\uae30"}),(0,o.jsx)("button",{onClick:async()=>{try{const s={mem_id:a};200===(await t.A.delete("/member/MyPage/Resign",{data:s})).status?(alert("\ud68c\uc6d0 \ud0c8\ud1f4 \uc131\uacf5!"),e((0,l.ri)()),console.log(i),n("/main")):alert("\ud68c\uc6d0 \ud0c8\ud1f4\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}catch(s){alert("\ud68c\uc6d0 \ud0c8\ud1f4\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}},children:"resign"})]}),(0,o.jsx)("hr",{}),(0,o.jsx)("button",{onClick:()=>{e((0,l.ri)()),n("/main")},children:"Logout"})]}):(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"\ud574\ub2f9 \ud654\uba74\uc740 \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \ud654\uba74\uc785\ub2c8\ub2e4."}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,o.jsx)("button",{className:"signup custom-button",onClick:()=>n("/member/SignUp"),children:"\ud68c\uc6d0\uac00\uc785 >"}),(0,o.jsx)("button",{className:"login custom-button",onClick:()=>n("/member/login"),children:"\ub85c\uadf8\uc778 >"})]})]})]})]})}},696:(e,n,i)=>{i.d(n,{A:()=>s});const s={}}}]);
//# sourceMappingURL=959.b7b067df.chunk.js.map