"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[289],{670:(e,t,a)=>{a.r(t),a.d(t,{default:()=>i});var n=a(43),c=a(154),s=a(216),r=a(475),o=a(3),d=a(579);const i=function(){const e=(0,s.Zp)(),{idx:t}=(0,s.g)(),[a,i]=(0,n.useState)({}),[l,h]=(0,n.useState)([]),[m,x]=(0,n.useState)(""),u=(0,o.d4)((e=>e.userData)),j=u?u.mem_id:"",b=(new Date).toISOString();return(0,n.useEffect)((()=>{c.A.get("/board/Content?idx=".concat(t)).then((e=>{i(e.data)})).catch((e=>{console.error("There was an error retrieving the board: ",e)})),c.A.get("/board/Reply?boardIdx=".concat(t)).then((e=>{h(e.data)})).catch((e=>{console.error("There was an error retrieving the board: ",e)}))}),[t]),(0,d.jsx)("div",{className:"container",children:(0,d.jsxs)("div",{className:"content-container",children:[(0,d.jsx)("div",{className:"title",children:a.title}),(0,d.jsxs)("div",{className:"meta-info",children:["\uc791\uc131\uc790: ",a.reg_name," | \uc870\ud68c\uc218: ",a.hit," | \uc791\uc131 \uc2dc\uac04: ",a.w_date," | \uc218\uc815 \uc2dc\uac04: ",a.u_date]}),(0,d.jsx)("div",{className:"content",children:a.content}),(0,d.jsxs)("div",{className:"content",children:[(0,d.jsx)(r.N_,{to:"/board/list/edit/".concat(t),children:(0,d.jsx)("button",{children:"\uc218\uc815"})}),(0,d.jsx)("button",{onClick:()=>e("/board/list"),children:"\ubaa9\ub85d"}),(0,d.jsx)("button",{onClick:async()=>{await c.A.delete("/board/Delete?idx=".concat(t)).then((t=>{console.log("\uac8c\uc2dc\uae00 \uc0ad\uc81c \uc131\uacf5:",t.data),e("/board/list")})).catch((e=>{console.error("\uac8c\uc2dc\uae00 \uc0ad\uc81c \uc2e4\ud328:",e)}))},children:"\uc0ad\uc81c"})]}),(0,d.jsx)("h3",{children:"\ub313\uae00"}),(0,d.jsx)("ul",{className:"comment-list",children:l.map((e=>(0,d.jsxs)("li",{className:"comment-item",children:[(0,d.jsx)("div",{className:"comment-content",children:e.content}),(0,d.jsxs)("div",{className:"comment-info",children:["\uc791\uc131\uc790: ",e.reg_name," | \uc791\uc131 \uc2dc\uac04: ",e.w_date]})]},e.idx)))}),(0,d.jsxs)("div",{className:"comment-input",children:[(0,d.jsx)("textarea",{value:m,onChange:e=>x(e.target.value),placeholder:"\ub313\uae00\uc744 \uc791\uc131\ud558\uc138\uc694"}),(0,d.jsx)("button",{onClick:async()=>{await c.A.post("/board/WriteReply",{boardIdx:t,content:m,reg_name:j,w_date:b,u_date:b}).then((e=>{console.log("\ub313\uae00 \uc791\uc131 \uc131\uacf5:",e.data),h((t=>[...t,e.data])),x("")})).catch((e=>{console.error("\ub313\uae00 \uc791\uc131 \uc2e4\ud328:",e)}))},children:"\ub313\uae00 \uc791\uc131"})]})]})})}}}]);
//# sourceMappingURL=289.3a7e25a4.chunk.js.map