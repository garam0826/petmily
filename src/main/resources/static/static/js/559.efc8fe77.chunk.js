"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[559],{559:(e,r,t)=>{t.r(r),t.d(r,{default:()=>a});var n=t(43),s=t(154),i=t(216),d=t(475),c=t(579);const a=function(){const[e,r]=(0,n.useState)([]),t=(0,i.Zp)();return(0,n.useEffect)((()=>{s.A.get("/board/List").then((e=>{r(e.data)})).catch((e=>{console.error("There was an error retrieving the board list: ",e)}))}),[]),(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"\uac8c\uc2dc\uae00 \ubaa9\ub85d"}),(0,c.jsx)("ul",{children:e.map((e=>(0,c.jsxs)("li",{children:[(0,c.jsx)(d.N_,{to:"/board/list/read/".concat(e.idx),children:e.title}),"- ",e&&e.reg_name," (",e&&e.w_date,")"]},e.idx)))}),(0,c.jsx)("div",{children:(0,c.jsx)("button",{onClick:()=>t("/board/list/write"),children:"\uae00 \uc791\uc131\ud558\uae30"})})]})}}}]);
//# sourceMappingURL=559.efc8fe77.chunk.js.map