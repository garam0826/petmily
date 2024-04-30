"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[627],{627:(e,a,s)=>{s.r(a),s.d(a,{default:()=>i});var l=s(43),n=s(154),t=s(579);const i=()=>{const[e,a]=(0,l.useState)([]),[s,i]=(0,l.useState)(!1),[r,c]=(0,l.useState)(!1),[d,o]=(0,l.useState)(null),[h,p]=(0,l.useState)(""),[x,j]=(0,l.useState)(""),[u,g]=(0,l.useState)(""),[m,C]=(0,l.useState)(""),[N,f]=(0,l.useState)(""),[v,b]=(0,l.useState)([]),y=e=>{b((a=>[...a,e]))},S=async(e,a)=>{try{c(!0),console.log(e,!0),console.log(e,a);const s=await n.A.get("/api/animal/analyze?desertionNo=".concat(e,"&popfile=").concat(a));y(s.data),console.log(s.data),o(null)}catch(d){console.error("Error analyzing image:",d),o("An error occurred while analyzing the image."),y("error")}c(!1),console.log(e,!1)};return(0,t.jsxs)("div",{children:[s&&(0,t.jsx)("div",{children:"Loading..."}),d&&(0,t.jsxs)("div",{children:["Error: ",d.message]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{children:"Start Date:"}),(0,t.jsx)("input",{type:"text",value:h,onChange:e=>p(e.target.value)})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{children:"End Date:"}),(0,t.jsx)("input",{type:"text",value:x,onChange:e=>j(e.target.value)})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{children:"Kind:"}),(0,t.jsx)("input",{type:"text",value:u,onChange:e=>g(e.target.value)})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{children:"UprCd:"}),(0,t.jsx)("input",{type:"text",value:m,onChange:e=>C(e.target.value)})]}),(0,t.jsxs)("div",{children:[(0,t.jsx)("label",{children:"OrgCd:"}),(0,t.jsx)("input",{type:"text",value:N,onChange:e=>f(e.target.value)})]}),(0,t.jsx)("button",{onClick:async()=>{try{i(!0),o(null);const e=await n.A.get("/api/animal/info?startDate=".concat(h,"&endDate=").concat(x,"&kind=").concat(u,"&uprCd=").concat(m,"&orgCd=").concat(N));a(e.data);for(const a of e.data)await S(a.desertionNo,a.popfile)}catch(d){console.error("Error fetching animal info:",d),o(d)}i(!1)},children:"Fetch Animal Info"}),0===e.length&&!s&&!d&&(0,t.jsx)("div",{children:"No data available"}),(0,t.jsx)("ul",{children:e.map(((e,a)=>(0,t.jsxs)("li",{children:[(0,t.jsx)("hr",{}),(0,t.jsxs)("p",{children:["Desertion No: ",e.desertionNo]}),(0,t.jsxs)("p",{children:["File Name: ",(0,t.jsx)("img",{src:e.filename,alt:"Animal"})]}),(0,t.jsxs)("p",{children:["Happen Date: ",e.happenDt]}),(0,t.jsxs)("p",{children:["Happen Place: ",e.happenPlace]}),(0,t.jsxs)("p",{children:["KindCd: ",e.kindCd]}),(0,t.jsxs)("p",{children:["ColorCd: ",e.colorCd]}),(0,t.jsxs)("p",{children:["Age: ",e.age]}),(0,t.jsxs)("p",{children:["Weight: ",e.weight]}),(0,t.jsxs)("p",{children:["Notice No: ",e.noticeNo]}),(0,t.jsxs)("p",{children:["Notice Start Date: ",e.noticeSdt]}),(0,t.jsxs)("p",{children:["Notice End Date: ",e.noticeEdt]}),(0,t.jsxs)("p",{children:["Popfile: ",(0,t.jsx)("img",{src:e.popfile,alt:"Animal"})]}),(0,t.jsxs)("p",{children:["Popfile \uacbd\ub85c: ",e.popfile]}),(0,t.jsxs)("p",{children:["Process State: ",e.processState]}),(0,t.jsxs)("p",{children:["SexCd: ",e.sexCd]}),(0,t.jsxs)("p",{children:["NeuterYn: ",e.neuterYn]}),(0,t.jsxs)("p",{children:["Special Mark: ",e.specialMark]}),(0,t.jsxs)("p",{children:["Care Name: ",e.careNm]}),(0,t.jsxs)("p",{children:["Care Tel: ",e.careTel]}),(0,t.jsxs)("p",{children:["Care Address: ",e.careAddr]}),(0,t.jsxs)("p",{children:["Org Name: ",e.orgNm]}),(0,t.jsxs)("p",{children:["Charge Name: ",e.chargeNm]}),(0,t.jsxs)("p",{children:["Office Tel: ",e.officetel]}),(0,t.jsx)("hr",{}),v.length>a&&(0,t.jsxs)("div",{children:[(0,t.jsxs)("p",{children:["[1] ClassName: ",v[a].className1," / Probability: ",v[a].probability1]}),(0,t.jsxs)("p",{children:["[2] ClassName: ",v[a].className2," / Probability: ",v[a].probability2]}),(0,t.jsxs)("p",{children:["[3] ClassName: ",v[a].className3," / Probability: ",v[a].probability3]})]})]},a)))})]})}}}]);
//# sourceMappingURL=627.8bb99c98.chunk.js.map