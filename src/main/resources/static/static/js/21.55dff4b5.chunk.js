"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[21],{2131:(e,n,a)=>{a.d(n,{A:()=>c});a(5043);var l=a(3216),t=a(5475),s=a(3003),r=a(2306),o=a(5547),i=(a(8790),a(579));const c=function(){const e=(0,l.Zp)(),n=(0,s.wA)(),a=r.A.getState();return(0,i.jsxs)("div",{className:"menubar",children:[a.isLoggedIn?(0,i.jsx)("button",{className:"login",onClick:()=>{n((0,o.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,i.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,i.jsxs)("ul",{children:[(0,i.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,i.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,i.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,i.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,i.jsxs)("li",{className:"dropdown",children:[(0,i.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,i.jsxs)("div",{className:"dropdown-content",children:[(0,i.jsx)(t.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,i.jsx)(t.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,i.jsx)(t.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,i.jsx)(t.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},7021:(e,n,a)=>{a.r(n),a.d(n,{default:()=>c});var l=a(5043),t=a(7154),s=a(3003),r=a(3216),o=a(2131),i=a(579);const c=function(){const e=(0,r.Zp)(),[n,a]=(0,l.useState)(null),[c,d]=(0,l.useState)(null),m=(0,s.d4)((e=>e.userData)),h=m?m.mem_id:"";return(0,i.jsxs)("div",{children:[(0,i.jsx)(o.A,{}),(0,i.jsxs)("div",{className:"upload-container",children:[(0,i.jsx)("h2",{children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"}),(0,i.jsx)("input",{type:"file",onChange:e=>{const n=e.target.files[0];a(n);const l=new FileReader;l.onloadend=()=>{d(l.result)},n&&l.readAsDataURL(n)}}),c&&(0,i.jsx)("img",{src:c,alt:"\ubbf8\ub9ac\ubcf4\uae30",style:{width:"700px",height:"700px"}}),(0,i.jsx)("button",{onClick:()=>{if(!n)return void alert("\uc774\ubbf8\uc9c0\ub97c \uc120\ud0dd\ud558\uc138\uc694.");const a=new FormData;a.append("image",n),a.append("mem_id",h),console.log("FormData \ud655\uc778:",a),console.log("mem_id:",h),t.A.post("/member/PetImg",a,{headers:{"Content-Type":"multipart/form-data"}}).then((n=>{console.log(n.data),n.data?(alert("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc131\uacf5"),t.A.get("/member/images/analyze/".concat(h)).then((n=>{const a=n.data;console.log("analyzed result: ",a),e("/member/images/analyze",{state:{image:c,result:a}})})).catch((e=>{console.error("\uc774\ubbf8\uc9c0 \ubd84\uc11d \uc911 \uc624\ub958 \ubc1c\uc0dd:",e),alert("\uc774\ubbf8\uc9c0 \ubd84\uc11d \uc911 \uc624\ub958 \ubc1c\uc0dd")}))):alert("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc2e4\ud328")})).catch((e=>{console.error("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc911 \uc624\ub958 \ubc1c\uc0dd:",e),alert("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc911 \uc624\ub958 \ubc1c\uc0dd")}))},children:"\uc5c5\ub85c\ub4dc"})]})]})}},8790:()=>{}}]);
//# sourceMappingURL=21.55dff4b5.chunk.js.map