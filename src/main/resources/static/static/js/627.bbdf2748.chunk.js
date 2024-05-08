"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[627],{627:(e,s,a)=>{a.r(s),a.d(s,{default:()=>r});var n=a(43),l=a(154),t=a(131),i=a(579);const r=()=>{const[e,s]=(0,n.useState)([]),[a,r]=(0,n.useState)(!1),[c,o]=(0,n.useState)(!1),[d,p]=(0,n.useState)(null),[h,x]=(0,n.useState)(""),[j,u]=(0,n.useState)(""),[g,m]=(0,n.useState)(""),[C,N]=(0,n.useState)(""),[v,f]=(0,n.useState)(""),[b,y]=(0,n.useState)([]),S=e=>{y((s=>[...s,e]))},A=async(e,s)=>{try{o(!0),console.log(e,!0),console.log(e,s);const a=await l.A.get("/api/animal/analyze?desertionNo=".concat(e,"&popfile=").concat(s));S(a.data),console.log(a.data),p(null)}catch(d){console.error("Error analyzing image:",d),p("An error occurred while analyzing the image."),S("error")}o(!1),console.log(e,!1)};return(0,i.jsxs)("div",{children:[(0,i.jsx)(t.A,{}),a&&(0,i.jsx)("div",{children:"Loading..."}),d&&(0,i.jsxs)("div",{children:["Error: ",d.message]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:"Start Date:"}),(0,i.jsx)("input",{type:"text",value:h,onChange:e=>x(e.target.value)})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:"End Date:"}),(0,i.jsx)("input",{type:"text",value:j,onChange:e=>u(e.target.value)})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:"Kind:"}),(0,i.jsx)("input",{type:"text",value:g,onChange:e=>m(e.target.value)})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:"UprCd:"}),(0,i.jsx)("input",{type:"text",value:C,onChange:e=>N(e.target.value)})]}),(0,i.jsxs)("div",{children:[(0,i.jsx)("label",{children:"OrgCd:"}),(0,i.jsx)("input",{type:"text",value:v,onChange:e=>f(e.target.value)})]}),(0,i.jsx)("button",{onClick:async()=>{try{r(!0),p(null);const a=await l.A.get("/api/animal/info?startDate=".concat(h,"&endDate=").concat(j,"&kind=").concat(g,"&uprCd=").concat(C,"&orgCd=").concat(v));s(a.data),console.log(h,e);for(const e of a.data)await A(e.desertionNo,e.popfile)}catch(d){console.error("Error fetching animal info:",d),p(d)}r(!1)},children:"Fetch Animal Info"}),0===e.length&&!a&&!d&&(0,i.jsx)("div",{children:"No data available"}),(0,i.jsx)("ul",{children:e.map(((e,s)=>(0,i.jsxs)("li",{children:[(0,i.jsx)("hr",{}),(0,i.jsxs)("p",{children:["Desertion No: ",e.desertionNo]}),(0,i.jsxs)("p",{children:["File Name: ",(0,i.jsx)("img",{src:e.filename,alt:"Animal"})]}),(0,i.jsxs)("p",{children:["Happen Date: ",e.happenDt]}),(0,i.jsxs)("p",{children:["Happen Place: ",e.happenPlace]}),(0,i.jsxs)("p",{children:["KindCd: ",e.kindCd]}),(0,i.jsxs)("p",{children:["ColorCd: ",e.colorCd]}),(0,i.jsxs)("p",{children:["Age: ",e.age]}),(0,i.jsxs)("p",{children:["Weight: ",e.weight]}),(0,i.jsxs)("p",{children:["Notice No: ",e.noticeNo]}),(0,i.jsxs)("p",{children:["Notice Start Date: ",e.noticeSdt]}),(0,i.jsxs)("p",{children:["Notice End Date: ",e.noticeEdt]}),(0,i.jsxs)("p",{children:["Popfile: ",(0,i.jsx)("img",{src:e.popfile,alt:"Animal"})]}),(0,i.jsxs)("p",{children:["Popfile \uacbd\ub85c: ",e.popfile]}),(0,i.jsxs)("p",{children:["Process State: ",e.processState]}),(0,i.jsxs)("p",{children:["SexCd: ",e.sexCd]}),(0,i.jsxs)("p",{children:["NeuterYn: ",e.neuterYn]}),(0,i.jsxs)("p",{children:["Special Mark: ",e.specialMark]}),(0,i.jsxs)("p",{children:["Care Name: ",e.careNm]}),(0,i.jsxs)("p",{children:["Care Tel: ",e.careTel]}),(0,i.jsxs)("p",{children:["Care Address: ",e.careAddr]}),(0,i.jsxs)("p",{children:["Org Name: ",e.orgNm]}),(0,i.jsxs)("p",{children:["Charge Name: ",e.chargeNm]}),(0,i.jsxs)("p",{children:["Office Tel: ",e.officetel]}),(0,i.jsx)("hr",{}),b.map(((s,a)=>(0,i.jsx)("div",{children:s.desertionNo===e.desertionNo&&(0,i.jsxs)("div",{children:[(0,i.jsxs)("p",{children:["[1] ClassName: ",s.className1," / Probability: ",s.probability1]}),(0,i.jsxs)("p",{children:["[2] ClassName: ",s.className2," / Probability: ",s.probability2]}),(0,i.jsxs)("p",{children:["[3] ClassName: ",s.className3," / Probability: ",s.probability3]})]})})))]},s)))})]})}}}]);
//# sourceMappingURL=627.bbdf2748.chunk.js.map