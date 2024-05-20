"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[961],{446:(e,n,t)=>{t.d(n,{A:()=>o});t(43);var s=t(216),r=t(475),i=t(3),l=t(306),a=t(547),c=t(579);const o=function(){const e=(0,s.Zp)(),n=(0,i.wA)(),t=l.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[t.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{n((0,a.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(r.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(r.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(r.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},961:(e,n,t)=>{t.r(n),t.d(n,{default:()=>o});var s=t(43),r=t(154),i=t(216),l=t(696),a=t(446),c=t(579);const o=function(){const[e,n]=(0,s.useState)(""),[t,o]=(0,s.useState)(""),[d,h]=(0,s.useState)(""),[m,x]=(0,s.useState)(""),[j,u]=(0,s.useState)(""),[p,g]=(0,s.useState)(""),[y,v]=(0,s.useState)([]),[b,C]=(0,s.useState)([]),[A,w]=(0,s.useState)(""),S=(0,i.Zp)();return(0,s.useEffect)((()=>{(async()=>{try{const e=await r.A.get("/member/SignUp");v(e.data)}catch(e){console.error("Error fetching region list:",e)}})()}),[]),(0,c.jsxs)(s.Fragment,{children:[(0,c.jsx)("header",{children:(0,c.jsx)(a.A,{})}),(0,c.jsxs)("main",{children:[(0,c.jsx)("h1",{children:"\ud68c\uc6d0 \uac00\uc785"}),(0,c.jsxs)("form",{children:[(0,c.jsx)("h2",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsx)("div",{style:l.A.wrapper,children:(0,c.jsxs)("label",{style:l.A.contentContainer,children:["Id:",(0,c.jsx)("input",{type:"text",value:e,onChange:e=>n(e.target.value)})]})}),(0,c.jsx)("div",{style:l.A.wrapper,children:(0,c.jsxs)("label",{style:l.A.contentContainer,children:["Password:",(0,c.jsx)("input",{type:"password",value:t,onChange:e=>o(e.target.value)})]})}),(0,c.jsx)("div",{style:l.A.wrapper,children:(0,c.jsxs)("label",{style:l.A.contentContainer,children:["nickname:",(0,c.jsx)("input",{type:"text",value:d,onChange:e=>h(e.target.value)})]})}),(0,c.jsx)("div",{style:l.A.wrapper,children:(0,c.jsxs)("label",{style:l.A.contentContainer,children:["email:",(0,c.jsx)("input",{type:"text",value:m,onChange:e=>x(e.target.value)})]})}),(0,c.jsxs)("div",{style:l.A.wrapper,children:[(0,c.jsx)("label",{htmlFor:"region",children:"Region:"}),(0,c.jsxs)("select",{id:"region",onChange:async e=>{const n=e.target.value;w(n),u(n);try{const e=await r.A.get("/member/SearchDistrict?reg_name=".concat(n));C(e.data)}catch(t){console.error("Error fetching district list:",t)}},children:[(0,c.jsx)("option",{value:"",children:"Select Region"}),y.map((e=>(0,c.jsx)("option",{value:e,children:e},j)))]})]}),(0,c.jsxs)("div",{style:l.A.wrapper,children:[(0,c.jsx)("label",{htmlFor:"district",children:"District:"}),(0,c.jsxs)("select",{id:"district",onChange:async e=>{const n=e.target.value;g(n)},children:[(0,c.jsx)("option",{value:"",children:"Select District"}),b.map((e=>(0,c.jsx)("option",{value:e.dist_name,children:e.dist_name},p)))]})]})]}),(0,c.jsx)("button",{onClick:async()=>{const n={mem_id:e,mem_pw:t,nickname:d,email:m,region:j,county_district:p};console.log(n);try{200===(await r.A.post("/member/SignUp",n)).status?(alert("\ud68c\uc6d0\uac00\uc785 \uc131\uacf5!"),S("/member/login")):alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}catch(s){console.error("\ud68c\uc6d0\uac00\uc785 \uc624\ub958:",s),alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}},children:"Signup"})]})]})}},696:(e,n,t)=>{t.d(n,{A:()=>s});const s={}}}]);
//# sourceMappingURL=961.2557a6c8.chunk.js.map