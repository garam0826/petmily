"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[670],{670:(e,t,n)=>{n.r(t),n.d(t,{default:()=>d});var a=n(43),s=n(154),r=n(216),l=n(475),o=n(3),c=n(579);const d=function(){const e=(0,r.Zp)(),{idx:t}=(0,r.g)(),[n,d]=(0,a.useState)({}),[i,x]=(0,a.useState)([]),[m,h]=(0,a.useState)(""),[p,u]=(0,a.useState)(null),[_,g]=(0,a.useState)(""),[j,y]=(0,a.useState)(null),b=(0,o.d4)((e=>e.userData)),f=b?b.mem_id:"",v=(new Date).toISOString();return(0,a.useEffect)((()=>{s.A.get("/board/Content?idx=".concat(t)).then((e=>{const t=e.data;d(t.boardDTO),x(t.r_List)})).catch((e=>{console.error("There was an error retrieving the board: ",e)}))}),[t]),(0,c.jsxs)("div",{className:"content-container",children:[(0,c.jsx)("div",{className:"title",children:n.title}),(0,c.jsxs)("div",{className:"meta-info",children:["\uc791\uc131\uc790: ",n.reg_name," | \uc870\ud68c\uc218: ",n.hit," | \uc791\uc131 \uc2dc\uac04: ",n.w_date," | \uc218\uc815 \uc2dc\uac04: ",n.u_date]}),(0,c.jsx)("div",{className:"content",children:n.content}),(0,c.jsxs)("div",{className:"content",children:[n.reg_name===f&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)(l.N_,{to:"/board/list/edit/".concat(t),children:(0,c.jsx)("button",{children:"\uc218\uc815"})}),(0,c.jsx)("button",{onClick:async()=>{if(n.reg_name===f)try{const n=await s.A.delete("/board/DeleteBoard?idx=".concat(t));console.log("\uac8c\uc2dc\uae00 \uc0ad\uc81c \uc131\uacf5:",n.data),e("/board/list")}catch(a){console.error("\uac8c\uc2dc\uae00 \uc0ad\uc81c \uc2e4\ud328:",a.response?a.response.data:a.message)}else alert("\ubcf8\uc778\uc758 \uae00\ub9cc \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")},children:"\uc0ad\uc81c"})]}),(0,c.jsx)("button",{onClick:()=>e("/board/list"),children:"\ubaa9\ub85d"})]}),(0,c.jsx)("h3",{children:"\ub313\uae00"}),(0,c.jsx)("ul",{className:"comment-list",children:i.map((e=>(0,c.jsx)("li",{className:"comment-item",children:p===e.reply_idx?(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("textarea",{value:_,onChange:e=>g(e.target.value)}),(0,c.jsx)("button",{onClick:()=>(async e=>{if(e.reg_name===f)try{const t=await s.A.put("/board/UpdateReply",{...e,content:_,u_date:v});console.log("\ub313\uae00 \uc218\uc815 \uc131\uacf5:",t.data),x((t=>t.map((t=>t.reply_idx===e.reply_idx?{...t,content:_,u_date:v}:t)))),u(null),g("")}catch(t){console.error("\ub313\uae00 \uc218\uc815 \uc2e4\ud328:",t.response?t.response.data:t.message)}else alert("\ubcf8\uc778\uc758 \ub313\uae00\ub9cc \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")})(e),children:"\uc218\uc815 \uc644\ub8cc"}),(0,c.jsx)("button",{onClick:()=>{u(null),g("")},children:"\ucde8\uc18c"})]}):(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("div",{className:"comment-content",children:e.content}),(0,c.jsxs)("div",{className:"comment-info",children:["\uc791\uc131\uc790: ",e.reg_name," | \uc791\uc131 \uc2dc\uac04: ",e.w_date]}),e.reg_name===f&&(0,c.jsxs)(c.Fragment,{children:[(0,c.jsx)("button",{onClick:()=>{u(e.reply_idx),g(e.content)},children:"\uc218\uc815"}),(0,c.jsx)("button",{onClick:()=>(async e=>{if(i.find((t=>t.reply_idx===e)).reg_name===f)try{const t=await s.A.delete("/board/DeleteReply?idx=".concat(e));console.log("\ub313\uae00 \uc0ad\uc81c \uc131\uacf5:",t.data),x((t=>t.filter((t=>t.reply_idx!==e))))}catch(t){console.error("\ub313\uae00 \uc0ad\uc81c \uc2e4\ud328:",t.response?t.response.data:t.message)}else alert("\ubcf8\uc778\uc758 \ub313\uae00\ub9cc \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")})(e.reply_idx),children:"\uc0ad\uc81c"})]}),(0,c.jsx)("button",{onClick:()=>y(e.reply_idx),children:"\ub300\ub313\uae00 \ub2ec\uae30"})]})},e.reply_idx)))}),(0,c.jsxs)("div",{className:"comment-input",children:[(0,c.jsx)("textarea",{value:m,onChange:e=>h(e.target.value),placeholder:"\ub313\uae00\uc744 \uc791\uc131\ud558\uc138\uc694"}),(0,c.jsx)("input",{type:"hidden",name:j}),(0,c.jsx)("button",{onClick:async()=>{const e={reply_idx:0,board_idx:t,content:m,reg_name:f,step:1,depth:1,w_date:v,u_date:v};if(null!=j){const t=i.find((e=>e.reply_idx===j));e.step=t.step+1,e.depth=t.depth+1,e.reply_idx=j}console.log("Submitting comment:",e);try{const t=await s.A.post("/board/WriteReply",e);console.log("\ub313\uae00 \uc791\uc131 \uc131\uacf5:",t.data),x((n=>[...n,{...e,reply_idx:t.data.reply_idx}])),h(""),y(null)}catch(n){console.error("\ub313\uae00 \uc791\uc131 \uc2e4\ud328:",n.response?n.response.data:n.message)}},children:"\ub313\uae00 \uc791\uc131"})]})]})}}}]);
//# sourceMappingURL=670.7e10a615.chunk.js.map