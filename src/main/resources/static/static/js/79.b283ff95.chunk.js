"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[79],{79:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var a=n(43),r=n(216),s=n(154),l=n(3),i=(n(162),n(579));const o=function(){const e=(0,r.Zp)(),[t,n]=(0,a.useState)(""),[o,c]=(0,a.useState)(""),d=(0,l.d4)((e=>e.userData));return(0,i.jsx)("div",{className:"container",children:(0,i.jsxs)("div",{className:"form-container",children:[(0,i.jsx)("h2",{children:"\uac8c\uc2dc\uae00 \uc791\uc131"}),(0,i.jsxs)("form",{onSubmit:n=>{n.preventDefault();const a=d?d.mem_id:"",r=(new Date).toISOString();s.A.post("/board/WriteBoard",{title:t,content:o,reg_name:a,hit:0,w_date:r,u_date:r}).then((t=>{console.log("\uac8c\uc2dc\uae00 \uc791\uc131 \uc131\uacf5:",t.data),e("/board/list")})).catch((e=>{console.error("\uac8c\uc2dc\uae00 \uc791\uc131 \uc2e4\ud328:",e)}))},children:[(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:"\uc81c\ubaa9"}),(0,i.jsx)("input",{name:"title",type:"text",value:t,onChange:e=>n(e.target.value),required:!0})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:"\uc791\uc131\uc790"}),(0,i.jsx)("input",{name:"reg_name",type:"text",value:d?d.mem_id:"",readOnly:!0})]}),(0,i.jsxs)("div",{className:"form-group",children:[(0,i.jsx)("label",{children:"\ub0b4\uc6a9"}),(0,i.jsx)("textarea",{name:"content",cols:"30",rows:"10",value:o,onChange:e=>c(e.target.value),required:!0})]}),(0,i.jsx)("div",{className:"button-container",children:(0,i.jsx)("button",{type:"submit",children:"\uc800\uc7a5"})})]})]})})}},162:()=>{}}]);
//# sourceMappingURL=79.b283ff95.chunk.js.map