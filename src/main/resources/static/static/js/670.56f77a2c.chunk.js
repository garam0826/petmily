"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[670],{2131:(e,n,t)=>{t.d(n,{A:()=>o});t(5043);var s=t(3216),a=t(5475),l=t(3003),r=t(2306),c=t(5547),i=(t(8790),t(579));const o=function(){const e=(0,s.Zp)(),n=(0,l.wA)(),t=r.A.getState();return(0,i.jsxs)("div",{className:"menubar",children:[t.isLoggedIn?(0,i.jsx)("button",{className:"login",onClick:()=>{n((0,c.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,i.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,i.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,i.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,i.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,i.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,i.jsxs)("li",{className:"dropdown",children:[(0,i.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,i.jsxs)("div",{className:"dropdown-content",children:[(0,i.jsx)(a.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,i.jsx)(a.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,i.jsx)(a.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},4670:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var s=t(5043),a=t(7154),l=t(3216),r=t(5475),c=t(3003),i=t(2131),o=t(579);const d=function(){const e=(0,l.Zp)(),{idx:n}=(0,l.g)(),[t,d]=(0,s.useState)({}),[m,x]=(0,s.useState)([]),[h,p]=(0,s.useState)(""),[u,j]=(0,s.useState)(null),[g,_]=(0,s.useState)(""),[b,y]=(0,s.useState)(null),C=(0,c.d4)((e=>e.userData)),k=C?C.mem_id:"",N=(new Date).toISOString();return(0,s.useEffect)((()=>{a.A.get("/board/Content?idx=".concat(n)).then((e=>{const n=e.data;d(n.boardDTO),x(n.r_List)})).catch((e=>{console.error("There was an error retrieving the board: ",e)}))}),[n]),(0,o.jsxs)("div",{children:[(0,o.jsx)(i.A,{}),(0,o.jsxs)("div",{className:"content-container",children:[(0,o.jsx)("div",{className:"title",children:t.title}),(0,o.jsxs)("div",{className:"meta-info",children:["\uc791\uc131\uc790: ",t.reg_name," | \uc870\ud68c\uc218: ",t.hit," | \uc791\uc131 \uc2dc\uac04: ",t.w_date," | \uc218\uc815 \uc2dc\uac04: ",t.u_date]}),(0,o.jsx)("div",{className:"content",children:t.content}),(0,o.jsxs)("div",{className:"content",children:[t.reg_name===k&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)(r.N_,{to:"/board/list/edit/".concat(n),children:(0,o.jsx)("button",{children:"\uc218\uc815"})}),(0,o.jsx)("button",{onClick:async()=>{if(t.reg_name===k)try{const t=await a.A.delete("/board/DeleteBoard?idx=".concat(n));console.log("\uac8c\uc2dc\uae00 \uc0ad\uc81c \uc131\uacf5:",t.data),e("/board/list")}catch(s){console.error("\uac8c\uc2dc\uae00 \uc0ad\uc81c \uc2e4\ud328:",s.response?s.response.data:s.message)}else alert("\ubcf8\uc778\uc758 \uae00\ub9cc \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")},children:"\uc0ad\uc81c"})]}),(0,o.jsx)("button",{onClick:()=>e("/board/list"),children:"\ubaa9\ub85d"})]}),(0,o.jsx)("h3",{children:"\ub313\uae00"}),(0,o.jsx)("ul",{className:"comment-list",children:m.map((e=>(0,o.jsx)("li",{className:"comment-item",children:u===e.reply_idx?(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("textarea",{value:g,onChange:e=>_(e.target.value)}),(0,o.jsx)("button",{onClick:()=>(async e=>{if(e.reg_name===k)try{const n=await a.A.put("/board/UpdateReply",{...e,content:g,u_date:N});console.log("\ub313\uae00 \uc218\uc815 \uc131\uacf5:",n.data),x((n=>n.map((n=>n.reply_idx===e.reply_idx?{...n,content:g,u_date:N}:n)))),j(null),_("")}catch(n){console.error("\ub313\uae00 \uc218\uc815 \uc2e4\ud328:",n.response?n.response.data:n.message)}else alert("\ubcf8\uc778\uc758 \ub313\uae00\ub9cc \uc218\uc815\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")})(e),children:"\uc218\uc815 \uc644\ub8cc"}),(0,o.jsx)("button",{onClick:()=>{j(null),_("")},children:"\ucde8\uc18c"})]}):(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("div",{className:"comment-content",children:e.content}),(0,o.jsxs)("div",{className:"comment-info",children:["\uc791\uc131\uc790: ",e.reg_name," | \uc791\uc131 \uc2dc\uac04: ",e.w_date]}),e.reg_name===k&&(0,o.jsxs)(o.Fragment,{children:[(0,o.jsx)("button",{onClick:()=>{j(e.reply_idx),_(e.content)},children:"\uc218\uc815"}),(0,o.jsx)("button",{onClick:()=>(async e=>{if(m.find((n=>n.reply_idx===e)).reg_name===k)try{const n=await a.A.delete("/board/DeleteReply?idx=".concat(e));console.log("\ub313\uae00 \uc0ad\uc81c \uc131\uacf5:",n.data),x((n=>n.filter((n=>n.reply_idx!==e))))}catch(n){console.error("\ub313\uae00 \uc0ad\uc81c \uc2e4\ud328:",n.response?n.response.data:n.message)}else alert("\ubcf8\uc778\uc758 \ub313\uae00\ub9cc \uc0ad\uc81c\ud560 \uc218 \uc788\uc2b5\ub2c8\ub2e4.")})(e.reply_idx),children:"\uc0ad\uc81c"})]}),(0,o.jsx)("button",{onClick:()=>y(e.reply_idx),children:"\ub300\ub313\uae00 \ub2ec\uae30"})]})},e.reply_idx)))}),(0,o.jsxs)("div",{className:"comment-input",children:[(0,o.jsx)("textarea",{value:h,onChange:e=>p(e.target.value),placeholder:"\ub313\uae00\uc744 \uc791\uc131\ud558\uc138\uc694"}),(0,o.jsx)("input",{type:"hidden",name:b}),(0,o.jsx)("button",{onClick:async()=>{const e={reply_idx:0,board_idx:n,content:h,reg_name:k,step:1,depth:1,w_date:N,u_date:N};if(null!=b){const n=m.find((e=>e.reply_idx===b));e.step=n.step+1,e.depth=n.depth+1,e.reply_idx=b}console.log("Submitting comment:",e);try{const n=await a.A.post("/board/WriteReply",e);console.log("\ub313\uae00 \uc791\uc131 \uc131\uacf5:",n.data),x((t=>[...t,{...e,reply_idx:n.data.reply_idx}])),p(""),y(null)}catch(t){console.error("\ub313\uae00 \uc791\uc131 \uc2e4\ud328:",t.response?t.response.data:t.message)}},children:"\ub313\uae00 \uc791\uc131"})]})]})]})}},8790:()=>{}}]);
//# sourceMappingURL=670.56f77a2c.chunk.js.map