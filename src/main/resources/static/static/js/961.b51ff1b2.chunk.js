"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[961],{961:(e,t,n)=>{n.r(t),n.d(t,{default:()=>o});var r=n(43),a=n(154),s=n(216),l=n(131),i=n(579);const o=function(){const[e,t]=(0,r.useState)(""),[n,o]=(0,r.useState)(""),[c,d]=(0,r.useState)(""),[p,u]=(0,r.useState)(""),[x,h]=(0,r.useState)(""),[y,j]=(0,r.useState)(""),g=(0,s.Zp)(),v={wrapper:{margin:8,padding:8,display:"flex",flexDirection:"row",border:"1px solid grey",borderRadius:16},contentContainer:{marginLeft:8,display:"flex",flexDirection:"colum",justifyContent:"center"}};return(0,i.jsxs)("div",{children:[(0,i.jsx)(l.A,{}),(0,i.jsx)("h2",{children:"Signup"}),(0,i.jsxs)("form",{children:[(0,i.jsx)("div",{style:v.wrapper,children:(0,i.jsxs)("label",{style:v.contentContainer,children:["Id:",(0,i.jsx)("input",{type:"text",value:e,onChange:e=>t(e.target.value)})]})}),(0,i.jsx)("div",{style:v.wrapper,children:(0,i.jsxs)("label",{style:v.contentContainer,children:["Password:",(0,i.jsx)("input",{type:"password",value:n,onChange:e=>o(e.target.value)})]})}),(0,i.jsx)("div",{style:v.wrapper,children:(0,i.jsxs)("label",{style:v.contentContainer,children:["nickname:",(0,i.jsx)("input",{type:"text",value:c,onChange:e=>d(e.target.value)})]})}),(0,i.jsx)("div",{style:v.wrapper,children:(0,i.jsxs)("label",{style:v.contentContainer,children:["email:",(0,i.jsx)("input",{type:"text",value:p,onChange:e=>u(e.target.value)})]})}),(0,i.jsx)("div",{style:v.wrapper,children:(0,i.jsxs)("label",{style:v.contentContainer,children:["Region (\ub3c4/\ud2b9\ubcc4\uc2dc):",(0,i.jsx)("input",{type:"text",value:x,onChange:e=>h(e.target.value)})]})}),(0,i.jsx)("div",{style:v.wrapper,children:(0,i.jsxs)("label",{style:v.contentContainer,children:["Country_district (\uc2dc/\uad70):",(0,i.jsx)("input",{type:"text",value:y,onChange:e=>j(e.target.value)})]})}),(0,i.jsx)("button",{onClick:async()=>{const t={mem_id:e,mem_pw:n,nickname:c,email:p,region:x,county_district:y};try{200===(await a.A.post("/member/SignUp",t)).status?(alert("\ud68c\uc6d0\uac00\uc785 \uc131\uacf5!"),g("/member/login")):alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}catch(r){console.error("\ud68c\uc6d0\uac00\uc785 \uc624\ub958:",r),alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}},children:"Signup"})]})]})}}}]);
//# sourceMappingURL=961.b51ff1b2.chunk.js.map