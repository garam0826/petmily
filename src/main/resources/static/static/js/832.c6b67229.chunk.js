"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[832],{131:(e,s,n)=>{n.d(s,{A:()=>d});n(43);var a=n(216),i=n(475),t=n(3),l=n(306),r=n(547),c=(n(790),n(579));const d=function(){const e=(0,a.Zp)(),s=(0,t.wA)(),n=l.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[n.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{s((0,r.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(i.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(i.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(i.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},832:(e,s,n)=>{n.r(s),n.d(s,{default:()=>x});var a=n(43),i=n(154),t=n(131),l=n(216),r=(n(261),n(790),n(917)),c=n(306),d=n(579);const o=e=>{const s=e.substring(0,4),n=e.substring(4,6),a=e.substring(6,8);return"".concat(s,"\ub144 ").concat(n,"\uc6d4 ").concat(a,"\uc77c")},x=()=>{const[e,s]=(0,a.useState)([]),[n,x]=(0,a.useState)(!1),[h,m]=(0,a.useState)(!1),[j,u]=(0,a.useState)(null),[p,g]=(0,a.useState)(""),[v,N]=(0,a.useState)(""),[b,y]=(0,a.useState)(""),[f,C]=(0,a.useState)(""),[S,k]=(0,a.useState)(""),[w,A]=(0,a.useState)([]),F=e=>{A((s=>[...s,e]))},z=async(e,s)=>{try{m(!0);const n=await i.A.get("/api/animal/analyze?desertionNo=".concat(e,"&popfile=").concat(s));F(n.data),u(null)}catch(j){console.error("Error analyzing image:",j),u("An error occurred while analyzing the image."),F("error")}m(!1)},_=c.A.getState(),B=(0,l.Zp)(),E=_.isLoggedIn?_.userData.mem_id:null,I=(new Date).toISOString(),{idx:D}=(0,l.g)();return(0,d.jsxs)("div",{children:[(0,d.jsx)("header",{children:(0,d.jsx)(t.A,{})}),(0,d.jsxs)("main",{children:[(0,d.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,d.jsx)("div",{style:r.A.container,children:(0,d.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,d.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,d.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,d.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"fsize13",children:(0,d.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:(0,d.jsx)("br",{})})})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:"\uc720\uae30\uacac \uac80\uc0c9"})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"fsize13",children:(0,d.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\u200b"})})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"fsize13",children:(0,d.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\uacf5\uace0 \uc2dc\uc791\uc77c, \uc885\ub8cc\uc77c, \uc885\ub8cc, \uc9c0\uc5ed(\ub3c4/\ud2b9\ubcc4\uc2dc), (\uc2dc/\uad70)\uc73c\ub85c \uc635\uc158\uc744 \uc120\ud0dd\ud558\uc5ec \uac80\uc0c9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"fsize13",children:(0,d.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:["(\uc0ac\uc9c4 \uc704\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74, \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub97c \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.)",(0,d.jsx)("br",{}),(0,d.jsx)("br",{})]})})}),(0,d.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"})]})})})})}),_.isLoggedIn?(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"container",children:[(0,d.jsxs)("div",{className:"contentContainer",children:[(0,d.jsx)("label",{children:"\uacf5\uace0 \uc2dc\uc791\uc77c: "}),(0,d.jsx)("input",{type:"text",value:p,onChange:e=>g(e.target.value)})]}),(0,d.jsxs)("div",{className:"contentContainer",children:[(0,d.jsx)("label",{children:"\uacf5\uace0 \uc885\ub8cc\uc77c: "}),(0,d.jsx)("input",{type:"text",value:v,onChange:e=>N(e.target.value)})]}),(0,d.jsxs)("div",{className:"contentContainer",children:[(0,d.jsx)("label",{children:"\ud488\uc885: "}),(0,d.jsx)("input",{type:"text",value:b,onChange:e=>y(e.target.value)})]}),(0,d.jsxs)("div",{className:"contentContainer",children:[(0,d.jsx)("label",{children:"\uc9c0\uc5ed(\ub3c4/\ud2b9\ubcc4\uc2dc): "}),(0,d.jsx)("input",{type:"text",value:f,onChange:e=>C(e.target.value)})]}),(0,d.jsxs)("div",{className:"contentContainer",children:[(0,d.jsx)("label",{children:"\uc9c0\uc5ed(\uc2dc/\uad70): "}),(0,d.jsx)("input",{type:"text",value:S,onChange:e=>k(e.target.value)})]}),(0,d.jsx)("button",{onClick:async()=>{try{x(!0),u(null);const e=await i.A.get("/api/animal/info?startDate=".concat(p,"&endDate=").concat(v,"&kind=").concat(b,"&uprCd=").concat(f,"&orgCd=").concat(S));s(e.data);for(const s of e.data)await z(s.desertionNo,s.popfile)}catch(j){console.error("Error fetching animal info:",j),u(j)}x(!1)},style:{width:"350px"},children:"Fetch Animal Info"})]}),0===e.length&&!n&&!j&&(0,d.jsx)("div",{children:"No data available"}),(0,d.jsx)("div",{className:"grid-container",children:e.map(((e,s)=>(0,d.jsxs)("div",{className:"card",children:[(0,d.jsx)("div",{className:"card-image",children:(0,d.jsx)("img",{src:e.popfile,alt:"Animal"})}),(0,d.jsx)("div",{className:"card-content"}),w.map(((s,n)=>(0,d.jsx)("div",{className:s.desertionNo===e.desertionNo?"analysis-info":"",children:s.desertionNo===e.desertionNo&&(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 1\uc21c\uc704 ]",(0,d.jsx)("br",{}),s.className1," (",s.probability1.toFixed(2),"%)"]}),(0,d.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 2\uc21c\uc704 ]",(0,d.jsx)("br",{}),s.className2," (",s.probability2.toFixed(2),"%)"]}),(0,d.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 3\uc21c\uc704 ]",(0,d.jsx)("br",{}),s.className3," (",s.probability3.toFixed(2),"%)"]})]})},n))),(0,d.jsx)("button",{onClick:()=>{return s=e.desertionNo,void i.A.post("/favorites/add?memId=".concat(E,"&desertionNo=").concat(s),{mem_id:E,desertionNo:s,created_at:I}).then((e=>{console.log("Favorite added successfully")})).catch((e=>{console.error("Error adding favorite: ",e)}));var s},style:{width:"100%"},children:"\ucc1c \ucd94\uac00"}),(0,d.jsxs)("div",{className:"analysis-results",children:[(0,d.jsx)("br",{}),(0,d.jsxs)("p",{children:["\ubc1c\uacac \ub0a0\uc9dc: ",o(e.happenDt)]}),(0,d.jsxs)("p",{children:["\ubc1c\uacac \uc7a5\uc18c: ",e.happenPlace]}),(0,d.jsxs)("p",{children:["\ub098\uc774: ",e.age]}),(0,d.jsxs)("p",{children:["\ubb34\uac8c: ",e.weight]}),(0,d.jsxs)("p",{children:["\uacf5\uace0 \uc2dc\uc791 \ub0a0\uc9dc: ",o(e.noticeSdt)]}),(0,d.jsxs)("p",{children:["\uacf5\uace0 \uc885\ub8cc \ub0a0\uc9dc: ",o(e.noticeEdt)]}),(0,d.jsxs)("p",{children:["\uc131\ubcc4: ",e.sexCd]}),(0,d.jsxs)("p",{children:["\uc911\uc131\ud654 \uc5ec\ubd80: ",e.neuterYn]})]})]},s)))}),n&&(0,d.jsx)("div",{children:"Loading..."}),j&&(0,d.jsxs)("div",{children:["Error: ",j.message]})]}):(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{children:"(\ud604\uc7ac \ucc1c \uae30\ub2a5\uc73c\ub85c \uc778\ud574) \ud574\ub2f9 \ud654\uba74\uc740 \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \ud654\uba74\uc785\ub2c8\ub2e4."}),(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,d.jsx)("button",{className:"signup custom-button",onClick:()=>B("/member/SignUp"),children:"\ud68c\uc6d0\uac00\uc785 >"}),(0,d.jsx)("button",{className:"login custom-button",onClick:()=>B("/member/login"),children:"\ub85c\uadf8\uc778 >"})]})]})]})]})}},261:()=>{},790:()=>{},917:(e,s,n)=>{n.d(s,{A:()=>a});const a={}}}]);
//# sourceMappingURL=832.c6b67229.chunk.js.map