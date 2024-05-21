"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[627],{131:(e,s,n)=>{n.d(s,{A:()=>d});n(43);var l=n(216),a=n(475),i=n(3),r=n(306),t=n(547),c=n(579);const d=function(){const e=(0,l.Zp)(),s=(0,i.wA)(),n=r.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[n.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{s((0,t.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(a.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(a.N_,{to:"/member/mypage",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(a.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},627:(e,s,n)=>{n.r(s),n.d(s,{default:()=>t});var l=n(43),a=n(154),i=n(131),r=n(579);const t=()=>{const[e,s]=(0,l.useState)([]),[n,t]=(0,l.useState)(!1),[c,d]=(0,l.useState)(!1),[o,h]=(0,l.useState)(null),[x,p]=(0,l.useState)(""),[j,m]=(0,l.useState)(""),[u,g]=(0,l.useState)(""),[N,C]=(0,l.useState)(""),[b,v]=(0,l.useState)(""),[f,y]=(0,l.useState)([]),S=e=>{y((s=>[...s,e]))},k=async(e,s)=>{try{d(!0),console.log(e,!0),console.log(e,s);const n=await a.A.get("/api/animal/analyze?desertionNo=".concat(e,"&popfile=").concat(s));S(n.data),console.log(n.data),h(null)}catch(o){console.error("Error analyzing image:",o),h("An error occurred while analyzing the image."),S("error")}d(!1),console.log(e,!1)};return(0,r.jsxs)("div",{children:[(0,r.jsx)(i.A,{}),n&&(0,r.jsx)("div",{children:"Loading..."}),o&&(0,r.jsxs)("div",{children:["Error: ",o.message]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Start Date:"}),(0,r.jsx)("input",{type:"text",value:x,onChange:e=>p(e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"End Date:"}),(0,r.jsx)("input",{type:"text",value:j,onChange:e=>m(e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"Kind:"}),(0,r.jsx)("input",{type:"text",value:u,onChange:e=>g(e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"UprCd:"}),(0,r.jsx)("input",{type:"text",value:N,onChange:e=>C(e.target.value)})]}),(0,r.jsxs)("div",{children:[(0,r.jsx)("label",{children:"OrgCd:"}),(0,r.jsx)("input",{type:"text",value:b,onChange:e=>v(e.target.value)})]}),(0,r.jsx)("button",{onClick:async()=>{try{t(!0),h(null);const e=await a.A.get("/api/animal/info?startDate=".concat(x,"&endDate=").concat(j,"&kind=").concat(u,"&uprCd=").concat(N,"&orgCd=").concat(b));s(e.data);for(const s of e.data)await k(s.desertionNo,s.popfile)}catch(o){console.error("Error fetching animal info:",o),h(o)}t(!1)},children:"Fetch Animal Info"}),0===e.length&&!n&&!o&&(0,r.jsx)("div",{children:"No data available"}),(0,r.jsx)("ul",{children:e.map(((e,s)=>(0,r.jsxs)("li",{children:[(0,r.jsx)("hr",{}),(0,r.jsxs)("p",{children:["Desertion No: ",e.desertionNo]}),(0,r.jsxs)("p",{children:["File Name: ",(0,r.jsx)("img",{src:e.filename,alt:"Animal"})]}),(0,r.jsxs)("p",{children:["Happen Date: ",e.happenDt]}),(0,r.jsxs)("p",{children:["Happen Place: ",e.happenPlace]}),(0,r.jsxs)("p",{children:["KindCd: ",e.kindCd]}),(0,r.jsxs)("p",{children:["ColorCd: ",e.colorCd]}),(0,r.jsxs)("p",{children:["Age: ",e.age]}),(0,r.jsxs)("p",{children:["Weight: ",e.weight]}),(0,r.jsxs)("p",{children:["Notice No: ",e.noticeNo]}),(0,r.jsxs)("p",{children:["Notice Start Date: ",e.noticeSdt]}),(0,r.jsxs)("p",{children:["Notice End Date: ",e.noticeEdt]}),(0,r.jsxs)("p",{children:["Popfile: ",(0,r.jsx)("img",{src:e.popfile,alt:"Animal"})]}),(0,r.jsxs)("p",{children:["Popfile \uacbd\ub85c: ",e.popfile]}),(0,r.jsxs)("p",{children:["Process State: ",e.processState]}),(0,r.jsxs)("p",{children:["SexCd: ",e.sexCd]}),(0,r.jsxs)("p",{children:["NeuterYn: ",e.neuterYn]}),(0,r.jsxs)("p",{children:["Special Mark: ",e.specialMark]}),(0,r.jsxs)("p",{children:["Care Name: ",e.careNm]}),(0,r.jsxs)("p",{children:["Care Tel: ",e.careTel]}),(0,r.jsxs)("p",{children:["Care Address: ",e.careAddr]}),(0,r.jsxs)("p",{children:["Org Name: ",e.orgNm]}),(0,r.jsxs)("p",{children:["Charge Name: ",e.chargeNm]}),(0,r.jsxs)("p",{children:["Office Tel: ",e.officetel]}),(0,r.jsx)("hr",{}),f.map(((s,n)=>(0,r.jsx)("div",{children:s.desertionNo===e.desertionNo&&(0,r.jsxs)("div",{children:[(0,r.jsxs)("p",{children:["[1] ClassName: ",s.className1," / Probability: ",s.probability1]}),(0,r.jsxs)("p",{children:["[2] ClassName: ",s.className2," / Probability: ",s.probability2]}),(0,r.jsxs)("p",{children:["[3] ClassName: ",s.className3," / Probability: ",s.probability3]})]})})))]},s)))})]})}}}]);
//# sourceMappingURL=627.f8dd737e.chunk.js.map