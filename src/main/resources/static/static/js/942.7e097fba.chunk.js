(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[942],{942:(e,n,t)=>{"use strict";t.r(n),t.d(n,{default:()=>h});var l=t(43),s=t(3),i=t(833),a=t(216),r=t(154),c=t(579);const h=function(){const e=(0,s.wA)(),n=(0,s.d4)((e=>e.session.userData.mem_id)),[t,h]=(0,l.useState)(null),[m,o]=(0,l.useState)(null),[d,p]=(0,l.useState)({mem_id:"",mem_pw:"",mem_name:"",birth:"",phone:"",email:"",region:"",county_district:""}),[u,x]=(0,l.useState)(""),[j,b]=(0,l.useState)(""),y=(0,a.Zp)(),g=e=>{const{name:n,value:t}=e.target;p((e=>({...e,[n]:t})))};return(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"My Page"}),(0,c.jsxs)("p",{children:["Welcome, ",n,"\ub2d8!"]}),(0,c.jsx)("hr",{}),(0,c.jsxs)("div",{children:[(0,c.jsx)("form",{onSubmit:async e=>{e.preventDefault();try{const e=await r.A.get("/member/MyPage/".concat(n));h(e.data),p(e.data),o(null)}catch(m){o("\uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uac00\uc838\uc624\ub294 \uc911\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),h(null)}},children:(0,c.jsxs)("button",{type:"submit",children:[n,"\ub2d8 \uc815\ubcf4 \uac00\uc838\uc624\uae30"]})}),m&&(0,c.jsx)("p",{children:m}),t&&(0,c.jsxs)("div",{children:[(0,c.jsx)("h2",{children:"\uc0ac\uc6a9\uc790 \uc815\ubcf4"}),(0,c.jsxs)("p",{children:["ID: ",t.mem_id]}),(0,c.jsxs)("p",{children:["PW: ",t.mem_pw]}),(0,c.jsxs)("p",{children:["Name: ",t.mem_name]}),(0,c.jsxs)("p",{children:["Birth: ",t.birth]}),(0,c.jsxs)("p",{children:["Phone: ",t.phone]}),(0,c.jsxs)("p",{children:["Email: ",t.email]}),(0,c.jsxs)("p",{children:["Region: ",t.region]}),(0,c.jsxs)("p",{children:["County_district: ",t.county_district]}),(0,c.jsxs)("form",{children:[(0,c.jsx)("h2",{children:"\ud68c\uc6d0 \uc815\ubcf4 \uc218\uc815"}),(0,c.jsxs)("label",{children:["PW:",(0,c.jsx)("input",{type:"text",placeholder:"\uc0c8 \ube44\ubc88",name:"mem_pw",value:d.mem_pw,onChange:g})]}),(0,c.jsxs)("label",{children:["Name:",(0,c.jsx)("input",{type:"text",placeholder:"\uc0c8 \uc774\ub984",name:"mem_name",value:d.mem_name,onChange:g})]}),(0,c.jsxs)("label",{children:["Birth:",(0,c.jsx)("input",{type:"text",placeholder:"\uc0c8 \uc0dd\uc77c",name:"birth",value:d.birth,onChange:g})]}),(0,c.jsxs)("label",{children:["Phone:",(0,c.jsx)("input",{type:"text",placeholder:"\uc0c8 \ud578\ub4dc\ud3f0 \ubc88\ud638",name:"phone",value:d.phone,onChange:g})]}),(0,c.jsxs)("label",{children:["Email:",(0,c.jsx)("input",{type:"text",placeholder:"\uc0c8 \uc774\uba54\uc77c",name:"email",value:d.email,onChange:g})]}),(0,c.jsxs)("label",{children:["Region:",(0,c.jsx)("input",{type:"text",placeholder:"\uc0c8 \uc8fc\uc18c(\uc2dc/\uad70)",name:"region",value:d.region,onChange:g})]}),(0,c.jsxs)("label",{children:["County District:",(0,c.jsx)("input",{type:"text",placeholder:"\uc0c8 \uc8fc\uc18c(\uad6c)",name:"countyDistrict",value:d.county_district,onChange:g})]}),(0,c.jsx)("button",{onClick:async()=>{try{const e=await r.A.put("/member/MyPage/Update",d);x(e.data),alert("\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815 \uc131\uacf5!"),h(d)}catch(m){console.error("Error updating member info:",m),alert(m),x("\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815 \uc2e4\ud328")}},children:"\uc218\uc815"}),u&&(0,c.jsx)("p",{children:u})]}),(0,c.jsx)("hr",{}),(0,c.jsxs)("form",{children:[(0,c.jsx)("h2",{children:"\ud68c\uc6d0 \ud0c8\ud1f4"}),(0,c.jsx)("button",{type:"button",onClick:async()=>{try{200===(await r.A.post("/member/MyPage/Resign",{mem_id:n})).status?(alert("\ud68c\uc6d0 \ud0c8\ud1f4 \uc131\uacf5!"),h(null),p({mem_id:"",mem_pw:"",mem_name:"",birth:"",phone:"",email:"",region:"",county_district:""}),y("/main")):b("\ud68c\uc6d0 \ud0c8\ud1f4\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}catch(m){b("\ud68c\uc6d0 \ud0c8\ud1f4\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}},children:"\ud68c\uc6d0 \ud0c8\ud1f4"}),j&&(0,c.jsx)("p",{children:j}),m&&(0,c.jsx)("p",{children:m})]})]})]}),(0,c.jsx)("hr",{}),(0,c.jsx)("button",{onClick:()=>{e((0,i.logout)()),y("/member/login")},children:"Logout"})]})}},833:()=>{}}]);
//# sourceMappingURL=942.7e097fba.chunk.js.map