"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[239],{239:(e,t,n)=>{n.r(t),n.d(t,{default:()=>l});var s=n(43),i=n(154),a=n(216),c=n(306),r=n(131),d=n(579);const l=function(){const[e,t]=(0,s.useState)(null),[n,l]=(0,s.useState)(null),[m,u]=(0,s.useState)({mem_id:"",mem_pw:"",nickname:"",email:"",region:"",country_district:"",reg_date:"",edit_date:""}),o=(0,a.Zp)(),h=c.A.getState(),p=h.isLoggedIn?h.userData.mem_id:null;return(0,s.useEffect)((()=>{(async()=>{try{const e=await i.A.get("/member/MyPage?mem_id=".concat(p));t(e.data),u(e.data),l(null)}catch(n){l("\uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uac00\uc838\uc624\ub294 \uc911\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4."),t(null)}})()}),[]),(0,d.jsxs)("div",{children:[(0,d.jsx)(r.A,{}),e?(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"\uc0ac\uc6a9\uc790 \uc815\ubcf4"}),(0,d.jsxs)("p",{children:["ID: ",e.mem_id]}),(0,d.jsxs)("p",{children:["PW: ",e.mem_pw]}),(0,d.jsxs)("p",{children:["Name: ",e.nickname]})]}):(0,d.jsx)("p",{children:"Please log in to view your information"}),(0,d.jsx)("hr",{}),(0,d.jsx)("button",{type:"button",onClick:()=>o("/member/mypage"),children:"\ub9c8\uc774\ud398\uc774\uc9c0 \ud654\uba74\uc73c\ub85c"})]})}}}]);
//# sourceMappingURL=239.296a2213.chunk.js.map