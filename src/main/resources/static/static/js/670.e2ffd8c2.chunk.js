"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[670],{670:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(43),c=n(154),s=n(216),o=n(475),r=n(3),l=n(579);const d=function(){const e=(0,s.Zp)(),{idx:t}=(0,s.g)(),[n,d]=(0,a.useState)({}),[i,h]=(0,a.useState)([]),[x,m]=(0,a.useState)(""),[u,j]=(0,a.useState)(null),[g,b]=(0,a.useState)(""),_=(0,r.d4)((e=>e.userData)),p=_?_.mem_id:"",v=(new Date).toISOString();return(0,a.useEffect)((()=>{c.A.get("/board/Content?idx=".concat(t)).then((e=>{const t=e.data;d(t.boardDTO),h(t.r_List)})).catch((e=>{console.error("There was an error retrieving the board: ",e)}))}),[t]),(0,l.jsxs)("div",{className:"content-container",children:[(0,l.jsx)("div",{className:"title",children:n.title}),(0,l.jsxs)("div",{className:"meta-info",children:["\uc791\uc131\uc790: ",n.reg_name," | \uc870\ud68c\uc218: ",n.hit," | \uc791\uc131 \uc2dc\uac04: ",n.w_date," | \uc218\uc815 \uc2dc\uac04: ",n.u_date]}),(0,l.jsx)("div",{className:"content",children:n.content}),(0,l.jsxs)("div",{className:"content",children:[n.reg_name===p&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)(o.N_,{to:"/board/list/edit/".concat(t),children:(0,l.jsx)("button",{children:"\uc218\uc815"})}),(0,l.jsx)("button",{onClick:async()=>{n.reg_name===p?await c.A.delete("/board/DeleteBoard?idx=".concat(t)).then((t=>{console.log("\uac8c\uc2dc\uae00 \uc0ad\uc81c \uc131\uacf5:",t.data),e("/board/list")})).catch((e=>{console.error("\uac8c\uc2dc\uae00 \uc0ad\uc81c \uc2e4\ud328:",e)})):alert("\ubcf8\uc778\uc758 \uae00\ub9cc \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")},children:"\uc0ad\uc81c"})]}),(0,l.jsx)("button",{onClick:()=>e("/board/list"),children:"\ubaa9\ub85d"})]}),(0,l.jsx)("h3",{children:"\ub313\uae00"}),(0,l.jsx)("ul",{className:"comment-list",children:i.map((e=>(0,l.jsx)("li",{className:"comment-item",children:u===e.idx?(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("textarea",{value:g,onChange:e=>b(e.target.value)}),(0,l.jsx)("button",{onClick:()=>(async e=>{e.reg_name===p?await c.A.put("/board/UpdateReply",{...e,content:g,u_date:v}).then((t=>{console.log("\ub313\uae00 \uc218\uc815 \uc131\uacf5:",t.data),h((t=>t.map((t=>t.idx===e.idx?{...t,content:g,u_date:v}:t)))),j(null),b("")})).catch((e=>{console.error("\ub313\uae00 \uc218\uc815 \uc2e4\ud328:",e)})):alert("\ubcf8\uc778\uc758 \ub313\uae00\ub9cc \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")})(e),children:"\uc218\uc815 \uc644\ub8cc"}),(0,l.jsx)("button",{onClick:()=>{j(null),b("")},children:"\ucde8\uc18c"})]}):(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("div",{className:"comment-content",children:e.content}),(0,l.jsxs)("div",{className:"comment-info",children:["\uc791\uc131\uc790: ",e.reg_name," | \uc791\uc131 \uc2dc\uac04: ",e.w_date]}),e.reg_name===p&&(0,l.jsxs)(l.Fragment,{children:[(0,l.jsx)("button",{onClick:()=>{j(e.idx),b(e.content)},children:"\uc218\uc815"}),(0,l.jsx)("button",{onClick:()=>(async e=>{i.find((t=>t.idx===e)),i.reg_name===p?await c.A.delete("/board/DeleteReply?idx=".concat(e)).then((t=>{console.log("\ub313\uae00 \uc0ad\uc81c \uc131\uacf5:",t.data),h((t=>t.filter((t=>t.idx!==e))))})).catch((e=>{console.error("\ub313\uae00 \uc0ad\uc81c \uc2e4\ud328:",e)})):alert("\ubcf8\uc778\uc758 \ub313\uae00\ub9cc \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")})(e.idx),children:"\uc0ad\uc81c"})]})]})},e.idx)))}),(0,l.jsxs)("div",{className:"comment-input",children:[(0,l.jsx)("textarea",{value:x,onChange:e=>m(e.target.value),placeholder:"\ub313\uae00\uc744 \uc791\uc131\ud558\uc138\uc694"}),(0,l.jsx)("button",{onClick:async()=>{await c.A.post("/board/WriteReply",{boardIdx:t,content:x,reg_name:p,step:0,depth:0,w_date:v,u_date:v}).then((e=>{console.log("\ub313\uae00 \uc791\uc131 \uc131\uacf5:",e.data),m("")})).catch((e=>{console.error("\ub313\uae00 \uc791\uc131 \uc2e4\ud328:",e)}))},children:"\ub313\uae00 \uc791\uc131"})]})]})}}}]);
//# sourceMappingURL=670.e2ffd8c2.chunk.js.map