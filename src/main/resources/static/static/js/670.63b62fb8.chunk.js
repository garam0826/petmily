"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[670],{670:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(43),l=n(154),r=n(216),c=n(475),s=n(3),d=n(579);const o=function(){const e=(0,r.Zp)(),{idx:t}=(0,r.g)(),[n,o]=(0,a.useState)({}),[i,h]=(0,a.useState)([]),[x,u]=(0,a.useState)(""),[m,p]=(0,a.useState)(null),[_,j]=(0,a.useState)(""),[g,b]=(0,a.useState)(null),y=(0,s.d4)((e=>e.userData)),f=y?y.mem_id:"",v=(new Date).toISOString();return(0,a.useEffect)((()=>{l.A.get("/board/Content?idx=".concat(t)).then((e=>{const t=e.data;o(t.boardDTO),h(t.r_List)})).catch((e=>{console.error("There was an error retrieving the board: ",e)}))}),[t]),(0,d.jsxs)("div",{className:"content-container",children:[(0,d.jsx)("div",{className:"title",children:n.title}),(0,d.jsxs)("div",{className:"meta-info",children:["\uc791\uc131\uc790: ",n.reg_name," | \uc870\ud68c\uc218: ",n.hit," | \uc791\uc131 \uc2dc\uac04: ",n.w_date," | \uc218\uc815 \uc2dc\uac04: ",n.u_date]}),(0,d.jsx)("div",{className:"content",children:n.content}),(0,d.jsxs)("div",{className:"content",children:[n.reg_name===f&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)(c.N_,{to:"/board/list/edit/".concat(t),children:(0,d.jsx)("button",{children:"\uc218\uc815"})}),(0,d.jsx)("button",{onClick:async()=>{n.reg_name===f?await l.A.delete("/board/DeleteBoard?idx=".concat(t)).then((t=>{console.log("\uac8c\uc2dc\uae00 \uc0ad\uc81c \uc131\uacf5:",t.data),e("/board/list")})).catch((e=>{console.error("\uac8c\uc2dc\uae00 \uc0ad\uc81c \uc2e4\ud328:",e)})):alert("\ubcf8\uc778\uc758 \uae00\ub9cc \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")},children:"\uc0ad\uc81c"})]}),(0,d.jsx)("button",{onClick:()=>e("/board/list"),children:"\ubaa9\ub85d"})]}),(0,d.jsx)("h3",{children:"\ub313\uae00"}),(0,d.jsx)("ul",{className:"comment-list",children:i.map((e=>(0,d.jsx)("li",{className:"comment-item",children:m===e.reply_idx?(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("textarea",{value:_,onChange:e=>j(e.target.value)}),(0,d.jsx)("button",{onClick:()=>(async e=>{e.reg_name===f?await l.A.put("/board/UpdateReply",{...e,content:_,u_date:v}).then((t=>{console.log("\ub313\uae00 \uc218\uc815 \uc131\uacf5:",t.data),h((t=>t.map((t=>t.reply_idx===e.reply_idx?{...t,content:_,u_date:v}:t)))),p(null),j("")})).catch((e=>{console.error("\ub313\uae00 \uc218\uc815 \uc2e4\ud328:",e)})):alert("\ubcf8\uc778\uc758 \ub313\uae00\ub9cc \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")})(e),children:"\uc218\uc815 \uc644\ub8cc"}),(0,d.jsx)("button",{onClick:()=>{p(null),j("")},children:"\ucde8\uc18c"})]}):(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("div",{className:"comment-content",children:e.content}),(0,d.jsxs)("div",{className:"comment-info",children:["\uc791\uc131\uc790: ",e.reg_name," | \uc791\uc131 \uc2dc\uac04: ",e.w_date]}),e.reg_name===f&&(0,d.jsxs)(d.Fragment,{children:[(0,d.jsx)("button",{onClick:()=>{p(e.reply_idx),j(e.content)},children:"\uc218\uc815"}),(0,d.jsx)("button",{onClick:()=>(async e=>{i.find((t=>t.reply_idx===e)).reg_name===f?await l.A.delete("/board/DeleteReply?idx=".concat(e)).then((t=>{console.log("\ub313\uae00 \uc0ad\uc81c \uc131\uacf5:",t.data),h((t=>t.filter((t=>t.reply_idx!==e))))})).catch((e=>{console.error("\ub313\uae00 \uc0ad\uc81c \uc2e4\ud328:",e)})):alert("\ubcf8\uc778\uc758 \ub313\uae00\ub9cc \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")})(e.reply_idx),children:"\uc0ad\uc81c"})]}),(0,d.jsx)("button",{onClick:()=>b(e.reply_idx),children:"\ub300\ub313\uae00 \ub2ec\uae30"})]})},e.reply_idx)))}),(0,d.jsxs)("div",{className:"comment-input",children:[(0,d.jsx)("textarea",{value:x,onChange:e=>u(e.target.value),placeholder:"\ub313\uae00\uc744 \uc791\uc131\ud558\uc138\uc694"}),(0,d.jsx)("input",{type:"hidden",name:g}),(0,d.jsx)("button",{onClick:async()=>{const e={reply_idx:0,boardIdx:t,content:x,reg_name:f,step:1,depth:1,w_date:v,u_date:v};if(null!=g){const t=i.find((e=>e.reply_idx===g));e.step=t.step+1,e.depth=t.depth+1,e.reply_idx=g}await l.A.post("/board/WriteReply",e).then((t=>{console.log("\ub313\uae00 \uc791\uc131 \uc131\uacf5:",t.data),h((n=>[...n,{...e,reply_idx:t.data.reply_idx}])),u(""),b(null)})).catch((e=>{console.error("\ub313\uae00 \uc791\uc131 \uc2e4\ud328:",e)}))},children:"\ub313\uae00 \uc791\uc131"})]})]})}}}]);
//# sourceMappingURL=670.63b62fb8.chunk.js.map