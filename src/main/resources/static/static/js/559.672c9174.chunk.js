"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[559],{2131:(e,a,s)=>{s.d(a,{A:()=>d});s(5043);var n=s(3216),i=s(5475),r=s(3003),l=s(2306),t=s(5547),c=(s(8790),s(579));const d=function(){const e=(0,n.Zp)(),a=(0,r.wA)(),s=l.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[s.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{a((0,t.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(i.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(i.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(i.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},1612:(e,a,s)=>{s.d(a,{A:()=>i});s(5043);var n=s(579);const i=function(e){let{total:a,limit:s,page:i,setPage:r}=e;const l=Math.ceil(a/s);return(0,n.jsxs)("div",{className:"Nav_pagination",children:[(0,n.jsx)("button",{className:"Button_pagination",onClick:()=>r(i-1),disabled:1===i,children:"<"}),Array(l).fill().map(((e,a)=>(0,n.jsx)("button",{className:"Button_pagination",onClick:()=>r(a+1),"aria-current":i===a+1?"page":void 0,children:a+1},a+1))),(0,n.jsx)("button",{className:"Button_pagination",onClick:()=>r(i+1),disabled:i===l,children:">"})]})}},8559:(e,a,s)=>{s.r(a),s.d(a,{default:()=>h});var n=s(5043),i=s(7154),r=s(3216),l=s(5475),t=(s(8162),s(2131)),c=s(3003),d=s(1612),o=s(579);const h=function(){const[e,a]=(0,n.useState)([]),s=(0,r.Zp)(),h=(0,c.d4)((e=>e.userData)),[m,x]=(0,n.useState)(1),[j,b]=(0,n.useState)(10),u=(m-1)*j;return(0,n.useEffect)((()=>{i.A.get("/board/List").then((e=>{const{b_List:s}=e.data;a(s)})).catch((e=>{console.error("There was an error retrieving the board list: ",e)}))}),[]),(0,o.jsxs)("div",{children:[(0,o.jsx)(t.A,{}),(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{className:"board-title",children:"\uac8c\uc2dc\ud310"}),(0,o.jsx)("div",{className:"board-write",children:(0,o.jsx)("button",{onClick:()=>{h?s("/board/list/write"):(alert("\ub85c\uadf8\uc778\uc774 \ud544\uc694\ud569\ub2c8\ub2e4."),s("/member/login"))},children:"\uae00 \uc791\uc131\ud558\uae30"})}),(0,o.jsxs)("div",{className:"board-cont",children:[(0,o.jsx)("span",{className:"board-header-no",children:"No."}),(0,o.jsx)("span",{className:"board-header-title",children:"\uc81c\ubaa9"}),(0,o.jsx)("span",{className:"board-header-author",children:"\uae00\uc4f4\uc774"}),(0,o.jsx)("span",{className:"board-header-date",children:"\uc791\uc131\uc77c"})]}),(0,o.jsx)("ul",{className:"board-list",children:Array.isArray(e)&&e.slice(u,u+j).map((e=>{return(0,o.jsxs)("li",{className:"board-item",children:[(0,o.jsx)("span",{className:"board-index",children:e.idx}),(0,o.jsx)(l.N_,{to:"/board/list/read/".concat(e.idx),className:"board-link",children:e.title}),(0,o.jsx)("span",{className:"board-author",children:e.reg_name}),(0,o.jsx)("span",{className:"board-date",children:(a=e.w_date,new Date(a).toLocaleDateString("ko-KR",{year:"numeric",month:"2-digit",day:"2-digit"}))})]},e.idx);var a}))}),(0,o.jsx)("footer",{children:(0,o.jsx)(d.A,{total:e.length,limit:j,page:m,setPage:x})})]})]})}},8162:()=>{},8790:()=>{}}]);
//# sourceMappingURL=559.672c9174.chunk.js.map