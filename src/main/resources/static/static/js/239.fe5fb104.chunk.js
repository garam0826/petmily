"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[239],{131:(e,n,t)=>{t.d(n,{A:()=>a});t(43);var i=t(216),s=t(475),l=t(3),c=t(306),r=t(547),o=(t(790),t(579));const a=function(){const e=(0,i.Zp)(),n=(0,l.wA)(),t=c.A.getState();return(0,o.jsxs)("div",{className:"menubar",children:[t.isLoggedIn?(0,o.jsx)("button",{className:"login",onClick:()=>{n((0,r.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,o.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,o.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,o.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,o.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,o.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,o.jsxs)("li",{className:"dropdown",children:[(0,o.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,o.jsxs)("div",{className:"dropdown-content",children:[(0,o.jsx)(s.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,o.jsx)(s.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,o.jsx)(s.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},239:(e,n,t)=>{t.r(n),t.d(n,{default:()=>d});var i=t(43),s=t(154),l=t(216),c=t(306),r=t(131),o=t(696),a=t(579);const d=function(){const[e,n]=(0,i.useState)(null),[t,d]=(0,i.useState)(null),[m,h]=(0,i.useState)({mem_id:"",mem_pw:"",nickname:"",email:"",region:"",country_district:"",reg_date:"",edit_date:""}),j=(0,l.Zp)(),x=c.A.getState(),u=x.isLoggedIn?x.userData.mem_id:null;return(0,i.useEffect)((()=>{(async()=>{console.log(x);try{const e=await s.A.get("/member/MyPage?mem_id=".concat(u));n(e.data),h(e.data),d(null)}catch(t){d("\uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uac00\uc838\uc624\ub294 \uc911\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),n(null)}})()}),[]),(0,a.jsxs)(i.Fragment,{children:[(0,a.jsx)("header",{children:(0,a.jsx)(r.A,{})}),(0,a.jsxs)("main",{children:[(0,a.jsx)("h1",{children:"\uc0ac\uc6a9\uc790 \uc815\ubcf4"}),e?(0,a.jsxs)("form",{children:[(0,a.jsxs)("p",{style:o.A.contentContainer,children:["ID: ",e.mem_id]}),(0,a.jsxs)("p",{style:o.A.contentContainer,children:["PW: ",e.mem_pw]}),(0,a.jsxs)("p",{style:o.A.contentContainer,children:["Name: ",e.nickname]}),(0,a.jsxs)("p",{style:o.A.contentContainer,children:["\ub3c4/\ud2b9\ubcc4\uc2dc: ",e.region]}),(0,a.jsxs)("p",{style:o.A.contentContainer,children:["\uc2dc/\uad70: ",e.county_district]})]}):(0,a.jsx)("p",{children:"Please log in to view your information"}),(0,a.jsx)("hr",{}),(0,a.jsx)("button",{type:"button",onClick:()=>j("/member/mypage"),children:"\ub9c8\uc774\ud398\uc774\uc9c0 \ud654\uba74\uc73c\ub85c"})]})]})}},696:(e,n,t)=>{t.d(n,{A:()=>i});const i={}},790:()=>{}}]);
//# sourceMappingURL=239.fe5fb104.chunk.js.map