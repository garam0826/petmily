"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[559],{131:(e,n,s)=>{s.d(n,{A:()=>d});s(43);var i=s(216),a=s(475),l=s(3),t=s(306),r=s(547),c=(s(790),s(579));const d=function(){const e=(0,i.Zp)(),n=(0,l.wA)(),s=t.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[s.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{n((0,r.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(a.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(a.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(a.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},612:(e,n,s)=>{s.d(n,{A:()=>a});s(43);var i=s(579);const a=function(e){let{total:n,limit:s,page:a,setPage:l}=e;const t=Math.ceil(n/s);return(0,i.jsxs)("div",{className:"Nav_pagination",children:[(0,i.jsx)("button",{className:"Button_pagination",onClick:()=>l(a-1),disabled:1===a,children:"<"}),Array(t).fill().map(((e,n)=>(0,i.jsx)("button",{className:"Button_pagination",onClick:()=>l(n+1),"aria-current":a===n+1?"page":void 0,children:n+1},n+1))),(0,i.jsx)("button",{className:"Button_pagination",onClick:()=>l(a+1),disabled:a===t,children:">"})]})}},559:(e,n,s)=>{s.r(n),s.d(n,{default:()=>h});var i=s(43),a=s(154),l=s(216),t=s(475),r=(s(162),s(131)),c=s(3),d=s(612),o=s(579);const h=function(){const[e,n]=(0,i.useState)([]),s=(0,l.Zp)(),h=(0,c.d4)((e=>e.userData)),[m,x]=(0,i.useState)(1),[j,u]=(0,i.useState)(10);return(0,i.useEffect)((()=>{a.A.get("/board/List").then((e=>{const{b_List:s}=e.data;n(s)})).catch((e=>{console.error("There was an error retrieving the board list: ",e)}))}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)(r.A,{}),(0,o.jsx)("h2",{className:"board-title",children:"\uac8c\uc2dc\ud310"}),(0,o.jsx)("div",{className:"board-write",children:(0,o.jsx)("button",{onClick:()=>{h?s("/board/list/write"):(alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),s("/member/login"))},children:"\uae00 \uc791\uc131\ud558\uae30"})}),(0,o.jsxs)("div",{className:"board-cont",children:[(0,o.jsx)("span",{children:"No."}),(0,o.jsx)("span",{children:"\uc81c\ubaa9"}),(0,o.jsx)("span",{children:"\uae00\uc4f4\uc774"}),(0,o.jsx)("span",{children:"\uc791\uc131\uc2dc\uac04"})]}),(0,o.jsx)("ul",{className:"board-list",children:Array.isArray(e)&&e.map((e=>(0,o.jsxs)("li",{className:"board-item",children:[(0,o.jsx)("span",{children:e.idx}),(0,o.jsx)(t.N_,{to:"/board/list/read/".concat(e.idx),children:e.title}),(0,o.jsx)("span",{children:e&&e.reg_name}),(0,o.jsx)("span",{children:e&&e.w_date})]},e.idx)))}),(0,o.jsx)("footer",{children:(0,o.jsx)(d.A,{total:e.length,limit:j,page:m,setPage:x})})]})}},162:()=>{},790:()=>{}}]);
//# sourceMappingURL=559.3eab6843.chunk.js.map