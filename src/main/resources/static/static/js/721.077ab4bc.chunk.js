"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[721],{721:(e,r,o)=>{o.r(r),o.d(r,{default:()=>i});var t=o(43),n=o(3),s=o(154),c=o(579);const i=function(){const e=(0,n.d4)((e=>e.userData)).mem_id,[r,o]=(0,t.useState)([]);(0,t.useEffect)((()=>{e&&i(e)}),[e]);const i=e=>{s.A.get("/favorites/list?memId=".concat(e)).then((e=>{o(e.data)})).catch((e=>{console.error("Error fetching favorites: ",e)}))};return(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)("ul",{children:r.map((r=>(0,c.jsxs)("li",{children:[(0,c.jsx)("span",{children:r.desertionNo}),(0,c.jsx)("button",{onClick:()=>{return o=r.desertionNo,void s.A.delete("/favorites/remove?memId=".concat(e,"&desertionNo=").concat(o)).then((r=>{console.log("Favorite removed successfully"),i(e)})).catch((e=>{console.error("Error removing favorite: ",e)}));var o},children:"\ucc1c \uc81c\uac70"})]},r.id)))})]})}}}]);
//# sourceMappingURL=721.077ab4bc.chunk.js.map