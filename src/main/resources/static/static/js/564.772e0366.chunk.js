"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[564],{131:(e,n,s)=>{s.d(n,{A:()=>o});s(43);var a=s(216),t=s(475),i=s(3),r=s(306),l=s(547),c=(s(790),s(579));const o=function(){const e=(0,a.Zp)(),n=(0,i.wA)(),s=r.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[s.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{n((0,l.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(t.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(t.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(t.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},564:(e,n,s)=>{s.r(n),s.d(n,{default:()=>x});var a=s(43),t=s(154),i=s(131),r=s(216),l=(s(261),s(790),s(917)),c=s(306),o=s(579);const d=function(e){let{total:n,limit:s,page:a,setPage:t}=e;const i=Math.ceil(n/s);return(0,o.jsxs)("div",{className:"Nav_pagination",children:[(0,o.jsx)("button",{className:"Button_pagination",onClick:()=>t(a-1),disabled:1===a,children:"<"}),Array(i).fill().map(((e,n)=>(0,o.jsx)("button",{className:"Button_pagination",onClick:()=>t(n+1),"aria-current":a===n+1?"page":void 0,children:n+1},n+1))),(0,o.jsx)("button",{className:"Button_pagination",onClick:()=>t(a+1),disabled:a===i,children:">"})]})},h=e=>{if(!e)return"";const n=e.substring(0,4),s=e.substring(4,6),a=e.substring(6,8);return"".concat(n,"\ub144 ").concat(s,"\uc6d4 ").concat(a,"\uc77c")},x=()=>{const[e,n]=(0,a.useState)([]),[s,x]=(0,a.useState)(!1),[m,j]=(0,a.useState)(!1),[u,p]=(0,a.useState)(null),[g,N]=(0,a.useState)(""),[v,b]=(0,a.useState)(""),[f,y]=(0,a.useState)(""),[C,S]=(0,a.useState)(""),[w,_]=(0,a.useState)(""),[k,A]=(0,a.useState)([]),[F,E]=(0,a.useState)([]),[B,z]=(0,a.useState)([]),[D,I]=(0,a.useState)(""),[L,G]=(0,a.useState)(20),[P,M]=(0,a.useState)(1),O=(P-1)*L,U=e=>{A((n=>[...n,e]))};(0,a.useEffect)((()=>{(async()=>{try{x(!0),p(null);const e=(await t.A.get("/api/animal/random-desertionNos")).data.map((e=>t.A.get("/api/animal/".concat(e)))),s=(await Promise.all(e)).map((e=>e.data));n(s);for(const n of s)await Y(n.desertionNo,n.popfile)}catch(u){console.error("Error fetching random animals:",u),p(u)}x(!1)})();(async()=>{try{const e=await t.A.get("/api/animal/SlctReg_code");E(e.data)}catch(u){console.error("Error fetching region list:",u)}})()}),[]);const Y=async(e,n)=>{try{j(!0);const s=await t.A.get("/api/animal/analyze?desertionNo=".concat(e,"&popfile=").concat(n));U(s.data),p(null)}catch(u){console.error("Error analyzing image:",u),p("An error occurred while analyzing the image."),U("error")}j(!1)},Z=c.A.getState(),Q=(0,r.Zp)(),R=Z.isLoggedIn?Z.userData.mem_id:null,X=(new Date).toISOString(),{idx:q}=(0,r.g)(),H=e=>{switch(e){case"Y":return"O";case"N":return"X";case"U":return"\ubaa8\ub984";default:return""}},J=e=>{switch(e){case"M":return"\uc218\ucef7";case"F":return"\uc554\ucef7";case"Q":return"\ubbf8\uc0c1";default:return""}};return(0,o.jsxs)("div",{children:[(0,o.jsx)("header",{children:(0,o.jsx)(i.A,{})}),(0,o.jsxs)("main",{children:[(0,o.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,o.jsx)("div",{style:l.A.container,children:(0,o.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,o.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,o.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,o.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:(0,o.jsx)("br",{})})})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:"\uc720\uae30\uacac \uac80\uc0c9"})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\u200b"})})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\uacf5\uace0 \uc2dc\uc791\uc77c, \uc885\ub8cc\uc77c, \uc885\ub8cc, \uc9c0\uc5ed(\ub3c4/\ud2b9\ubcc4\uc2dc), (\uc2dc/\uad70)\uc73c\ub85c \uc635\uc158\uc744 \uc120\ud0dd\ud558\uc5ec \uac80\uc0c9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."})})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:["-\uc0ac\uc9c4 \uc704\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74, \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub97c \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,o.jsx)("br",{}),"-\uc0ac\uc9c4\uc744 \ud074\ub9b4\ud558\uc2dc\uba74, \ud5a5\ud6c4 \uc131\uc7a5\uc2dc \ud2b9\uc131&\ubcf4\ud638\uc18c \ub4f1 \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub97c \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]})})}),(0,o.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"})]})})})})}),Z.isLoggedIn?(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{className:"container",children:[(0,o.jsxs)("div",{className:"contentContainer",children:[(0,o.jsx)("label",{children:"\uacf5\uace0 \uc2dc\uc791\uc77c: "}),(0,o.jsx)("input",{type:"text",value:g,onChange:e=>N(e.target.value)}),"(ex. 20240216)"]}),(0,o.jsxs)("div",{className:"contentContainer",children:[(0,o.jsx)("label",{children:"\uacf5\uace0 \uc885\ub8cc\uc77c: "}),(0,o.jsx)("input",{type:"text",value:v,onChange:e=>b(e.target.value)}),"(ex. 20240216)"]}),(0,o.jsxs)("div",{className:"contentContainer",children:[(0,o.jsx)("label",{children:"\ud488\uc885: "}),(0,o.jsx)("input",{type:"text",value:f,onChange:e=>y(e.target.value)})]}),(0,o.jsxs)("div",{className:"contentContainer",children:[(0,o.jsx)("label",{htmlFor:"region",children:"\uc9c0\uc5ed(\ub3c4/\ud2b9\ubcc4\uc2dc):"}),(0,o.jsxs)("select",{id:"region",onChange:async e=>{const n=e.target.value;I(n),S(n);try{const e=await t.A.get("/api/animal/SlctDist_code?reg_name=".concat(n));z(e.data)}catch(u){console.error("Error fetching district list:",u)}},children:[(0,o.jsx)("option",{value:"",children:"\uc9c0\uc5ed(\ub3c4/\ud2b9\ubcc4\uc2dc)"}),F.map((e=>(0,o.jsx)("option",{value:e.reg_name,children:e.reg_name},e.reg_code)))]})]}),(0,o.jsxs)("div",{className:"contentContainer",children:[(0,o.jsx)("label",{htmlFor:"district",children:"\uc9c0\uc5ed(\uc2dc/\uad70):"}),(0,o.jsxs)("select",{id:"district",onChange:e=>{const n=e.target.value;_(n)},children:[(0,o.jsx)("option",{value:"",children:"\uc9c0\uc5ed(\uc2dc/\uad70)"}),B.map((e=>(0,o.jsx)("option",{value:e.dist_name,children:e.dist_name},e.dist_code)))]})]}),(0,o.jsx)("button",{onClick:async()=>{try{x(!0),p(null);const e=await t.A.get("/api/animal/info?startDate=".concat(g,"&endDate=").concat(v,"&kind=").concat(f,"&uprCd=").concat(C,"&orgCd=").concat(w));n(e.data);for(const n of e.data)await Y(n.desertionNo,n.popfile)}catch(u){console.error("Error fetching animal info:",u),p(u)}x(!1)},style:{width:"350px"},children:"Fetch Animal Info"})]}),0===e.length&&!s&&!u&&(0,o.jsx)("div",{children:"No data available"}),(0,o.jsx)("div",{className:"grid-container",children:e.slice(O,O+L).map(((e,n)=>(0,o.jsxs)("div",{className:"card",children:[(0,o.jsx)("div",{className:"card-image",children:(0,o.jsx)("img",{src:e.popfile,alt:"Animal"})}),(0,o.jsx)("div",{className:"card-content"}),m?(0,o.jsx)("div",{children:"Analysis Loading..."}):k.map(((n,s)=>(0,o.jsx)("div",{className:n.desertionNo===e.desertionNo?"analysis-info":"",children:n.desertionNo===e.desertionNo&&(0,o.jsxs)("div",{children:[(0,o.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 1\uc21c\uc704 ]",(0,o.jsx)("br",{}),n.className1," (",n.probability1.toFixed(2),"%)"]}),(0,o.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 2\uc21c\uc704 ]",(0,o.jsx)("br",{}),n.className2," (",n.probability2.toFixed(2),"%)"]}),(0,o.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 3\uc21c\uc704 ]",(0,o.jsx)("br",{}),n.className3," (",n.probability3.toFixed(2),"%)"]})]})},s))),(0,o.jsx)("button",{onClick:()=>{return n=e.desertionNo,void t.A.post("/favorites/add?memId=".concat(R,"&desertionNo=").concat(n),{mem_id:R,desertionNo:n,created_at:X}).then((e=>{console.log("Favorite added successfully"),alert("\ucc1c \ubaa9\ub85d\uc5d0 \ub2f4\uacbc\uc2b5\ub2c8\ub2e4!")})).catch((e=>{console.error("Error adding favorite: ",e)}));var n},style:{width:"100%"},children:"\ucc1c \ucd94\uac00"}),(0,o.jsxs)("div",{className:"analysis-results",onClick:()=>(e=>{const n={url:"/animal/info",desertionNo:e.desertionNo,test:e.desertionNo};Q("/animal/detail",{state:n})})(e),children:[(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:["\ubc1c\uacac \ub0a0\uc9dc: ",h(e.happenDt)]}),(0,o.jsxs)("p",{children:["\ubc1c\uacac \uc7a5\uc18c: ",e.happenPlace]}),(0,o.jsxs)("p",{children:["\ub098\uc774: ",e.age]}),(0,o.jsxs)("p",{children:["\ubb34\uac8c: ",e.weight]}),(0,o.jsxs)("p",{children:["\uacf5\uace0 \uc2dc\uc791 \ub0a0\uc9dc: ",h(e.noticeSdt)]}),(0,o.jsxs)("p",{children:["\uacf5\uace0 \uc885\ub8cc \ub0a0\uc9dc: ",h(e.noticeEdt)]}),(0,o.jsxs)("p",{children:["\uc131\ubcc4: ",J(e.sexCd)]}),(0,o.jsxs)("p",{children:["\uc911\uc131\ud654 \uc5ec\ubd80: ",H(e.neuterYn)]})]})]},n)))}),s&&(0,o.jsx)("div",{children:"Loading..."}),u&&(0,o.jsxs)("div",{children:["Error: ",u.message]}),(0,o.jsx)("footer",{children:(0,o.jsx)(d,{total:e.length,limit:L,page:P,setPage:M})})]}):(0,o.jsxs)("div",{children:[(0,o.jsx)("h2",{children:"(\ud604\uc7ac \ucc1c \uae30\ub2a5\uc73c\ub85c \uc778\ud574) \ud574\ub2f9 \ud654\uba74\uc740 \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \ud654\uba74\uc785\ub2c8\ub2e4."}),(0,o.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,o.jsx)("button",{className:"signup custom-button",onClick:()=>Q("/member/SignUp"),children:"\ud68c\uc6d0\uac00\uc785 >"}),(0,o.jsx)("button",{className:"login custom-button",onClick:()=>Q("/member/login"),children:"\ub85c\uadf8\uc778 >"})]})]})]})]})}},261:()=>{},790:()=>{},917:(e,n,s)=>{s.d(n,{A:()=>a});const a={}}}]);
//# sourceMappingURL=564.772e0366.chunk.js.map