"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[118],{118:(e,t,n)=>{n.r(t),n.d(t,{default:()=>i});var r=n(43),s=n(154),a=n(216),c=n(579);const i=function(){const[e,t]=(0,r.useState)(""),[n,i]=(0,r.useState)(""),[l,o]=(0,r.useState)(""),[u,d]=(0,r.useState)(""),h=(0,a.Zp)();return(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"\uc544\uc774\ub514 \ucc3e\uae30"}),(0,c.jsx)("input",{type:"text",placeholder:"\uc774\ub984",value:e,onChange:e=>t(e.target.value)}),(0,c.jsx)("input",{type:"text",placeholder:"\uc0dd\ub144\uc6d4\uc77c",value:n,onChange:e=>i(e.target.value)}),(0,c.jsx)("button",{onClick:async()=>{try{const t=await s.A.get("/member/searchid?mem_name=".concat(e,"&birth=").concat(n));200===t.status?(o(t.data),d("")):(o(""),d("\uc774\ub984\uacfc \uc0dd\ub144\uc6d4\uc77c\uc744 \ub2e4\uc2dc \ud655\uc778\ud574\ubcf4\uc138\uc694"))}catch(u){console.error("Error finding member id:",u),o(""),d("\uc11c\ubc84\uc5d0 \uc5f0\uacb0\ud560 \uc218 \uc5c6\uc2b5\ub2c8\ub2e4.")}},children:"\uc870\ud68c"}),l&&(0,c.jsxs)("div",{children:[(0,c.jsxs)("p",{children:["\ucc3e\uc740 \uc544\uc774\ub514: ",l]}),(0,c.jsx)("hr",{}),(0,c.jsx)("button",{onClick:()=>h("/login"),children:" \ub85c\uadf8\uc778 \ud654\uba74 >>"})]}),u&&(0,c.jsx)("p",{children:u})]})}}}]);
//# sourceMappingURL=118.971369bf.chunk.js.map