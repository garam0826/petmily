"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[21],{21:(e,t,a)=>{a.r(t),a.d(t,{default:()=>d});var n=a(43),r=a(154),s=a(3),l=a(216),o=a(579);const d=function(){const e=(0,l.Zp)(),[t,a]=(0,n.useState)(null),[d,i]=(0,n.useState)(null),c=(0,s.d4)((e=>e.userData)),u=c?c.mem_id:"";return(0,o.jsxs)("div",{className:"upload-container",children:[(0,o.jsx)("h2",{children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"}),(0,o.jsx)("input",{type:"file",onChange:e=>{const t=e.target.files[0];a(t);const n=new FileReader;n.onloadend=()=>{i(n.result)},t&&n.readAsDataURL(t)}}),d&&(0,o.jsx)("img",{src:d,alt:"\ubbf8\ub9ac\ubcf4\uae30",style:{width:"750px",height:"750px"}}),(0,o.jsx)("button",{onClick:()=>{if(!t)return void alert("\uc774\ubbf8\uc9c0\ub97c \uc120\ud0dd\ud558\uc138\uc694.");const a=new FormData;a.append("images",t),a.append("mem_id",u),r.A.post("/member/PetImg",a,{headers:{"Content-Type":"multipart/form-data"}}).then((t=>{console.log(t.data),t.data?(alert("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc131\uacf5"),e("/main")):alert("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc2e4\ud328")})).catch((e=>{console.error("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc911 \uc624\ub958 \ubc1c\uc0dd:",e),alert("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc911 \uc624\ub958 \ubc1c\uc0dd")}))},children:"\uc5c5\ub85c\ub4dc"})]})}}}]);
//# sourceMappingURL=21.9b7fd2cf.chunk.js.map