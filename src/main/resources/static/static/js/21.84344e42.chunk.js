"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[21],{131:(e,n,l)=>{l.d(n,{A:()=>o});l(43);var s=l(216),t=l(475),i=l(3),a=l(306),r=l(547),c=(l(790),l(579));const o=function(){const e=(0,s.Zp)(),n=(0,i.wA)(),l=a.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[l.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{n((0,r.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(t.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(t.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(t.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},21:(e,n,l)=>{l.r(n),l.d(n,{default:()=>o});var s=l(43),t=l(154),i=l(3),a=l(216),r=l(131),c=l(579);const o=function(){const e=(0,a.Zp)(),[n,l]=(0,s.useState)(null),[o,d]=(0,s.useState)(null),m=(0,i.d4)((e=>e.userData)),h=m?m.mem_id:"";return(0,c.jsxs)("div",{children:[(0,c.jsx)(r.A,{}),(0,c.jsxs)("div",{className:"upload-container",children:[(0,c.jsx)("h2",{children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"}),(0,c.jsx)("input",{type:"file",onChange:e=>{const n=e.target.files[0];l(n);const s=new FileReader;s.onloadend=()=>{d(s.result)},n&&s.readAsDataURL(n)}}),o&&(0,c.jsx)("img",{src:o,alt:"\ubbf8\ub9ac\ubcf4\uae30",style:{width:"750px",height:"750px"}}),(0,c.jsx)("button",{onClick:()=>{if(!n)return void alert("\uc774\ubbf8\uc9c0\ub97c \uc120\ud0dd\ud558\uc138\uc694.");const l=new FormData;l.append("images",n),l.append("mem_id",h),t.A.post("/member/PetImg",l,{headers:{"Content-Type":"multipart/form-data"}}).then((n=>{console.log(n.data),n.data?(alert("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc131\uacf5"),e("/main")):alert("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc2e4\ud328")})).catch((e=>{console.error("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc911 \uc624\ub958 \ubc1c\uc0dd:",e),alert("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc911 \uc624\ub958 \ubc1c\uc0dd")}))},children:"\uc5c5\ub85c\ub4dc"})]})]})}},790:()=>{}}]);
//# sourceMappingURL=21.84344e42.chunk.js.map