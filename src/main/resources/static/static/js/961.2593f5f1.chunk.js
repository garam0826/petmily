"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[961],{131:(e,n,t)=>{t.d(n,{A:()=>o});t(43);var l=t(216),i=t(475),s=t(3),r=t(306),a=t(547),c=t(579);const o=function(){const e=(0,l.Zp)(),n=(0,s.wA)(),t=r.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[t.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{n((0,a.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(i.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(i.N_,{to:"/member/mypage",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(i.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},961:(e,n,t)=>{t.r(n),t.d(n,{default:()=>c});var l=t(43),i=t(154),s=t(216),r=t(131),a=t(579);const c=function(){const[e,n]=(0,l.useState)(""),[t,c]=(0,l.useState)(""),[o,d]=(0,l.useState)(""),[x,p]=(0,l.useState)(""),[u,h]=(0,l.useState)(""),[j,m]=(0,l.useState)(""),g=(0,s.Zp)(),y={wrapper:{margin:8,padding:8,display:"flex",flexDirection:"row",border:"1px solid grey",borderRadius:16},contentContainer:{marginLeft:8,display:"flex",flexDirection:"colum",justifyContent:"center"}};return(0,a.jsxs)("div",{children:[(0,a.jsx)(r.A,{}),(0,a.jsx)("h2",{children:"Signup"}),(0,a.jsxs)("form",{children:[(0,a.jsx)("div",{style:y.wrapper,children:(0,a.jsxs)("label",{style:y.contentContainer,children:["Id:",(0,a.jsx)("input",{type:"text",value:e,onChange:e=>n(e.target.value)})]})}),(0,a.jsx)("div",{style:y.wrapper,children:(0,a.jsxs)("label",{style:y.contentContainer,children:["Password:",(0,a.jsx)("input",{type:"password",value:t,onChange:e=>c(e.target.value)})]})}),(0,a.jsx)("div",{style:y.wrapper,children:(0,a.jsxs)("label",{style:y.contentContainer,children:["nickname:",(0,a.jsx)("input",{type:"text",value:o,onChange:e=>d(e.target.value)})]})}),(0,a.jsx)("div",{style:y.wrapper,children:(0,a.jsxs)("label",{style:y.contentContainer,children:["email:",(0,a.jsx)("input",{type:"text",value:x,onChange:e=>p(e.target.value)})]})}),(0,a.jsx)("div",{style:y.wrapper,children:(0,a.jsxs)("label",{style:y.contentContainer,children:["Region (\ub3c4/\ud2b9\ubcc4\uc2dc):",(0,a.jsx)("input",{type:"text",value:u,onChange:e=>h(e.target.value)})]})}),(0,a.jsx)("div",{style:y.wrapper,children:(0,a.jsxs)("label",{style:y.contentContainer,children:["Country_district (\uc2dc/\uad70):",(0,a.jsx)("input",{type:"text",value:j,onChange:e=>m(e.target.value)})]})}),(0,a.jsx)("button",{onClick:async()=>{const n={mem_id:e,mem_pw:t,nickname:o,email:x,region:u,county_district:j};try{200===(await i.A.post("/member/SignUp",n)).status?(alert("\ud68c\uc6d0\uac00\uc785 \uc131\uacf5!"),g("/member/login")):alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}catch(l){console.error("\ud68c\uc6d0\uac00\uc785 \uc624\ub958:",l),alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}},children:"Signup"})]})]})}}}]);
//# sourceMappingURL=961.2593f5f1.chunk.js.map