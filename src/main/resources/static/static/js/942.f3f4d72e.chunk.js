"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[942],{942:(e,n,t)=>{t.r(n),t.d(n,{default:()=>h});var l=t(43),s=t(3),a=t(833),r=t(216),i=t(154),m=t(579);const h=function(){const e=(0,s.wA)(),n=(0,s.d4)((e=>e.session.userData.mem_id)),[t,h]=(0,l.useState)(null),[c,d]=(0,l.useState)(null),[o,p]=(0,l.useState)({mem_id:"",mem_pw:"",mem_name:"",birth:"",phone:"",email:""}),[x,u]=(0,l.useState)(""),[j,b]=(0,l.useState)(""),y=(0,r.Zp)(),g=e=>{const{name:n,value:t}=e.target;p((e=>({...e,[n]:t})))};return(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"My Page"}),(0,m.jsxs)("p",{children:["Welcome, ",n,"\ub2d8!"]}),(0,m.jsx)("hr",{}),(0,m.jsxs)("div",{children:[(0,m.jsx)("form",{onSubmit:async e=>{e.preventDefault();try{const e=await i.A.get("/member/mypage/myinfo/".concat(n));h(e.data),p(e.data),d(null)}catch(c){d("\uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uac00\uc838\uc624\ub294 \uc911\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),h(null)}},children:(0,m.jsxs)("button",{type:"submit",children:[n,"\ub2d8 \uc815\ubcf4 \uac00\uc838\uc624\uae30"]})}),c&&(0,m.jsx)("p",{children:c}),t&&(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{children:"\uc0ac\uc6a9\uc790 \uc815\ubcf4"}),(0,m.jsxs)("p",{children:["ID: ",t.mem_id]}),(0,m.jsxs)("p",{children:["PW: ",t.mem_pw]}),(0,m.jsxs)("p",{children:["Name: ",t.mem_name]}),(0,m.jsxs)("p",{children:["Birth: ",t.birth]}),(0,m.jsxs)("p",{children:["Phone: ",t.phone]}),(0,m.jsxs)("p",{children:["Email: ",t.email]}),(0,m.jsxs)("form",{children:[(0,m.jsx)("h2",{children:"\ud68c\uc6d0 \uc815\ubcf4 \uc218\uc815"}),(0,m.jsxs)("label",{children:["PW:",(0,m.jsx)("input",{type:"text",placeholder:"\uc0c8 \ube44\ubc88",name:"mem_pw",value:o.mem_pw,onChange:g})]}),(0,m.jsxs)("label",{children:["Name:",(0,m.jsx)("input",{type:"text",placeholder:"\uc0c8 \uc774\ub984",name:"mem_name",value:o.mem_name,onChange:g})]}),(0,m.jsxs)("label",{children:["Birth:",(0,m.jsx)("input",{type:"text",placeholder:"\uc0c8 \uc0dd\uc77c",name:"birth",value:o.birth,onChange:g})]}),(0,m.jsxs)("label",{children:["Phone:",(0,m.jsx)("input",{type:"text",placeholder:"\uc0c8 \ud578\ub4dc\ud3f0 \ubc88\ud638",name:"phone",value:o.phone,onChange:g})]}),(0,m.jsxs)("label",{children:["Email:",(0,m.jsx)("input",{type:"text",placeholder:"\uc0c8 \uc774\uba54\uc77c",name:"email",value:o.email,onChange:g})]}),(0,m.jsx)("button",{onClick:async()=>{try{const e=await i.A.put("/member/mypage/myedit",o);u(e.data),alert("\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815 \uc131\uacf5!"),h(o)}catch(c){console.error("Error updating member info:",c),alert(c),u("\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815 \uc2e4\ud328")}},children:"\uc218\uc815"}),x&&(0,m.jsx)("p",{children:x})]}),(0,m.jsx)("hr",{}),(0,m.jsxs)("form",{children:[(0,m.jsx)("h2",{children:"\ud68c\uc6d0 \ud0c8\ud1f4"}),(0,m.jsx)("button",{type:"button",onClick:async()=>{try{200===(await i.A.post("/member/mypage/resign",{mem_id:n})).status?(alert("\ud68c\uc6d0 \ud0c8\ud1f4 \uc131\uacf5!"),h(null),p({mem_id:"",mem_pw:"",mem_name:"",birth:"",phone:"",email:""}),y("/main")):b("\ud68c\uc6d0 \ud0c8\ud1f4\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}catch(c){b("\ud68c\uc6d0 \ud0c8\ud1f4\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}},children:"\ud68c\uc6d0 \ud0c8\ud1f4"}),j&&(0,m.jsx)("p",{children:j}),c&&(0,m.jsx)("p",{children:c})]})]})]}),(0,m.jsx)("hr",{}),(0,m.jsx)("button",{onClick:()=>{e((0,a.ri)()),y("/member/login")},children:"Logout"})]})}}}]);
//# sourceMappingURL=942.f3f4d72e.chunk.js.map