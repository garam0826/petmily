"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[21],{21:(e,t,a)=>{a.r(t),a.d(t,{default:()=>o});var n=a(43),s=a(154),r=a(3),l=a(579);const o=function(){const[e,t]=(0,n.useState)(null),[a,o]=(0,n.useState)(null),d=(0,r.d4)((e=>e.userData)),c=d?d.mem_id:"";return(0,l.jsxs)("div",{className:"upload-container",children:[(0,l.jsx)("h2",{children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"}),(0,l.jsx)("input",{type:"file",onChange:e=>{const a=e.target.files[0];t(a);const n=new FileReader;n.onloadend=()=>{o(n.result)},a&&n.readAsDataURL(a)}}),a&&(0,l.jsx)("img",{src:a,alt:"\ubbf8\ub9ac\ubcf4\uae30",style:{width:"750px",height:"750px"}}),(0,l.jsx)("button",{onClick:()=>{if(!e)return void alert("\uc774\ubbf8\uc9c0\ub97c \uc120\ud0dd\ud558\uc138\uc694.");const t=new FormData;t.append("images",e),t.append("mem_id",c),s.A.post("http://localhost:8001/member/PetImg",t,{headers:{"Content-Type":"multipart/form-data"}}).then((e=>{console.log(e.data),e.data?alert("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc131\uacf5"):alert("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc2e4\ud328")})).catch((e=>{console.error("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc911 \uc624\ub958 \ubc1c\uc0dd:",e),alert("\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc \uc911 \uc624\ub958 \ubc1c\uc0dd")}))},children:"\uc5c5\ub85c\ub4dc"})]})}}}]);
//# sourceMappingURL=21.3dd32f81.chunk.js.map