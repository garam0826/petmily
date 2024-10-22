"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[627],{2131:(e,s,a)=>{a.d(s,{A:()=>o});a(5043);var n=a(3216),t=a(5475),i=a(3003),r=a(2306),l=a(5547),c=(a(8790),a(579));const o=function(){const e=(0,n.Zp)(),s=(0,i.wA)(),a=r.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[a.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{s((0,l.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(t.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(t.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(t.N_,{to:"/member/mypage/mycontent",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,c.jsx)(t.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},8627:(e,s,a)=>{a.r(s),a.d(s,{default:()=>h});var n=a(5043),t=a(7154),i=a(2131),r=a(3216),l=(a(4187),a(7261),a(8790),a(6917)),c=a(2306),o=a(1612),d=a(579);const m=e=>{if(!e)return"";const s=e.substring(0,4),a=e.substring(4,6),n=e.substring(6,8);return"".concat(s,"\ub144 ").concat(a,"\uc6d4 ").concat(n,"\uc77c")},h=()=>{const[e,s]=(0,n.useState)([]),[a,h]=(0,n.useState)(!1),[x,j]=(0,n.useState)(!1),[u,p]=(0,n.useState)(null),[g,N]=(0,n.useState)(""),[b,v]=(0,n.useState)(""),[y,f]=(0,n.useState)(""),[C,S]=(0,n.useState)(""),[_,w]=(0,n.useState)(""),[A,k]=(0,n.useState)([]),[F,B]=(0,n.useState)([]),[E,z]=(0,n.useState)([]),[D,L]=(0,n.useState)(""),[I,G]=(0,n.useState)(20),[P,U]=(0,n.useState)(1),M=(P-1)*I,O=e=>{k((s=>[...s,e]))};(0,n.useEffect)((()=>{(async()=>{try{h(!0),p(null);const e=(await t.A.get("/api/animal/random-desertionNos")).data.map((e=>t.A.get("/api/animal/".concat(e)))),a=(await Promise.all(e)).map((e=>e.data));s(a);for(const s of a)await Y(s.desertionNo,s.popfile)}catch(u){console.error("Error fetching random animals:",u),p(u)}h(!1)})();(async()=>{try{const e=await t.A.get("/api/animal/SlctReg_code");B(e.data)}catch(u){console.error("Error fetching region list:",u)}})()}),[]);const Y=async(e,s)=>{try{j(!0);const a=await t.A.get("/api/animal/analyze?desertionNo=".concat(e,"&popfile=").concat(s));O(a.data),p(null)}catch(u){console.error("Error analyzing image:",u),p("An error occurred while analyzing the image."),O("error")}j(!1)},Z=c.A.getState(),Q=(0,r.Zp)(),R=Z.isLoggedIn?Z.userData.mem_id:null,X=(new Date).toISOString(),{idx:q}=(0,r.g)(),H=e=>{switch(e){case"Y":return"O";case"N":return"X";case"U":return"\ubaa8\ub984";default:return""}},J=e=>{switch(e){case"M":return"\uc218\ucef7";case"F":return"\uc554\ucef7";case"Q":return"\ubbf8\uc0c1";default:return""}};return(0,d.jsxs)("div",{children:[(0,d.jsx)("header",{children:(0,d.jsx)(i.A,{})}),(0,d.jsxs)("main",{children:[(0,d.jsx)("br",{}),(0,d.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,d.jsx)("div",{style:l.A.container,children:(0,d.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,d.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,d.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,d.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"fsize13",children:(0,d.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:(0,d.jsx)("br",{})})})}),(0,d.jsx)("br",{}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:"\uc720\uae30\uacac \uac80\uc0c9"})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"fsize13",children:(0,d.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\u200b"})})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"fsize13",children:(0,d.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:[(0,d.jsx)("br",{}),"\uacf5\uace0 \uc2dc\uc791\uc77c, \uc885\ub8cc\uc77c, \uc885\ub8cc, \uc9c0\uc5ed(\ub3c4/\ud2b9\ubcc4\uc2dc), (\uc2dc/\uad70)\uc73c\ub85c \uc635\uc158\uc744 \uc120\ud0dd\ud558\uc5ec \uac80\uc0c9\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"fsize13",children:(0,d.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:[(0,d.jsx)("br",{}),"-\uc0ac\uc9c4 \uc704\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74, \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub97c \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,d.jsx)("br",{}),"-\uc0ac\uc9c4\uc744 \ud074\ub9b4\ud558\uc2dc\uba74, \ud5a5\ud6c4 \uc131\uc7a5\uc2dc \ud2b9\uc131&\ubcf4\ud638\uc18c \ub4f1 \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub97c \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,d.jsx)("br",{}),(0,d.jsx)("br",{}),(0,d.jsx)("br",{})]})})}),(0,d.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"})]})})})})}),Z.isLoggedIn?(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{className:"container_search",children:[(0,d.jsxs)("div",{className:"contentContainer",children:[(0,d.jsx)("label",{className:"label",children:"\uacf5\uace0 \uc2dc\uc791\uc77c: "}),(0,d.jsx)("input",{type:"text",value:g,onChange:e=>N(e.target.value)}),"(ex. 20240216)"]}),(0,d.jsxs)("div",{className:"contentContainer",children:[(0,d.jsx)("label",{className:"label",children:"\uacf5\uace0 \uc885\ub8cc\uc77c: "}),(0,d.jsx)("input",{type:"text",value:b,onChange:e=>v(e.target.value)}),"(ex. 20240216)"]}),(0,d.jsxs)("div",{className:"contentContainer",children:[(0,d.jsx)("label",{className:"label",children:"\ud488\uc885: "}),(0,d.jsx)("input",{type:"text",value:y,onChange:e=>f(e.target.value)})]}),(0,d.jsxs)("div",{className:"contentContainer",children:[(0,d.jsx)("label",{className:"label",htmlFor:"region",children:"\uc9c0\uc5ed(\ub3c4/\ud2b9\ubcc4\uc2dc):"}),(0,d.jsxs)("select",{id:"region",onChange:async e=>{const s=e.target.value;L(s),S(s);try{const e=await t.A.get("/api/animal/SlctDist_code?reg_name=".concat(s));z(e.data)}catch(u){console.error("Error fetching district list:",u)}},children:[(0,d.jsx)("option",{value:"",children:"\uc9c0\uc5ed(\ub3c4/\ud2b9\ubcc4\uc2dc)"}),F.map((e=>(0,d.jsx)("option",{value:e.reg_name,children:e.reg_name},e.reg_code)))]})]}),(0,d.jsxs)("div",{style:{marginBottom:"20px"},className:"contentContainer",children:[(0,d.jsx)("label",{className:"label",htmlFor:"district",children:"\uc9c0\uc5ed(\uc2dc/\uad70):"}),(0,d.jsxs)("select",{id:"district",onChange:e=>{const s=e.target.value;w(s)},children:[(0,d.jsx)("option",{value:"",children:"\uc9c0\uc5ed(\uc2dc/\uad70)"}),E.map((e=>(0,d.jsx)("option",{value:e.dist_name,children:e.dist_name},e.dist_code)))]})]}),(0,d.jsx)("button",{className:"button",onClick:async()=>{try{h(!0),p(null);const e=await t.A.get("/api/animal/info?startDate=".concat(g,"&endDate=").concat(b,"&kind=").concat(y,"&uprCd=").concat(C,"&orgCd=").concat(_));s(e.data);for(const s of e.data)await Y(s.desertionNo,s.popfile)}catch(u){console.error("Error fetching animal info:",u),p(u)}h(!1)},style:{width:"350px"},children:"\uac80\uc0c9\ud558\uae30"})]}),0===e.length&&!a&&!u&&(0,d.jsx)("div",{children:"No data available"}),(0,d.jsx)("div",{className:"grid-container",children:e.slice(M,M+I).map(((e,s)=>(0,d.jsxs)("div",{className:"card",children:[(0,d.jsx)("div",{className:"card-image",children:(0,d.jsx)("img",{src:e.popfile,alt:"Animal"})}),(0,d.jsx)("div",{className:"card-content"}),x?(0,d.jsx)("div",{children:"Analysis Loading..."}):A.map(((s,a)=>(0,d.jsx)("div",{className:s.desertionNo===e.desertionNo?"analysis-info":"",children:s.desertionNo===e.desertionNo&&(0,d.jsxs)("div",{children:[(0,d.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 1\uc21c\uc704 ]",(0,d.jsx)("br",{}),s.className1," (",(100*s.probability1).toFixed(2),"%)"]}),(0,d.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 2\uc21c\uc704 ]",(0,d.jsx)("br",{}),s.className2," (",(100*s.probability2).toFixed(2),"%)"]}),(0,d.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 3\uc21c\uc704 ]",(0,d.jsx)("br",{}),s.className3," (",(100*s.probability3).toFixed(2),"%)"]})]})},a))),(0,d.jsx)("button",{className:"button",onClick:()=>{return s=e.desertionNo,void t.A.post("/favorites/add?memId=".concat(R,"&desertionNo=").concat(s),{mem_id:R,desertionNo:s,created_at:X}).then((e=>{console.log("Favorite added successfully"),alert("\ucc1c \ubaa9\ub85d\uc5d0 \ub2f4\uacbc\uc2b5\ub2c8\ub2e4!")})).catch((e=>{console.error("Error adding favorite: ",e)}));var s},style:{width:"100%"},children:"\ucc1c \ucd94\uac00"}),(0,d.jsx)("div",{className:"analysis",onClick:()=>(e=>{const s={url:"/animal/info",desertionNo:e.desertionNo,test:e.desertionNo};Q("/animal/detail",{state:s})})(e),children:(0,d.jsxs)("div",{className:"analysis_info",children:[(0,d.jsx)("br",{}),(0,d.jsxs)("p",{children:["\ubc1c\uacac \ub0a0\uc9dc: ",m(e.happenDt)]}),(0,d.jsxs)("p",{children:["\ubc1c\uacac \uc7a5\uc18c: ",e.happenPlace]}),(0,d.jsxs)("p",{children:["\ub098\uc774: ",e.age]}),(0,d.jsxs)("p",{children:["\ubb34\uac8c: ",e.weight]}),(0,d.jsxs)("p",{children:["\uacf5\uace0 \uc2dc\uc791 \ub0a0\uc9dc: ",m(e.noticeSdt)]}),(0,d.jsxs)("p",{children:["\uacf5\uace0 \uc885\ub8cc \ub0a0\uc9dc: ",m(e.noticeEdt)]}),(0,d.jsxs)("p",{children:["\uc131\ubcc4: ",J(e.sexCd)]}),(0,d.jsxs)("p",{children:["\uc911\uc131\ud654 \uc5ec\ubd80: ",H(e.neuterYn)]})]})})]},s)))}),a&&(0,d.jsx)("div",{children:"Loading..."}),u&&(0,d.jsxs)("div",{children:["Error: ",u.message]}),(0,d.jsx)("footer",{children:(0,d.jsx)(o.A,{total:e.length,limit:I,page:P,setPage:U})})]}):(0,d.jsxs)("div",{children:[(0,d.jsx)("h2",{className:"h2",children:"(\ud604\uc7ac \ucc1c \uae30\ub2a5\uc73c\ub85c \uc778\ud574) \ud574\ub2f9 \ud654\uba74\uc740 \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \ud654\uba74\uc785\ub2c8\ub2e4."}),(0,d.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,d.jsx)("button",{className:"custom-button",onClick:()=>Q("/member/SignUp"),children:"\ud68c\uc6d0\uac00\uc785 >"}),(0,d.jsx)("button",{className:"custom-button",onClick:()=>Q("/member/login"),children:"\ub85c\uadf8\uc778 >"})]})]})]})]})}},1612:(e,s,a)=>{a.d(s,{A:()=>t});a(5043);var n=a(579);const t=function(e){let{total:s,limit:a,page:t,setPage:i}=e;const r=Math.ceil(s/a);return(0,n.jsxs)("div",{className:"Nav_pagination",children:[(0,n.jsx)("button",{className:"Button_pagination",onClick:()=>i(t-1),disabled:1===t,children:"<"}),Array(r).fill().map(((e,s)=>(0,n.jsx)("button",{className:"Button_pagination",onClick:()=>i(s+1),"aria-current":t===s+1?"page":void 0,children:s+1},s+1))),(0,n.jsx)("button",{className:"Button_pagination",onClick:()=>i(t+1),disabled:t===r,children:">"})]})}},7261:()=>{},8790:()=>{},6917:(e,s,a)=>{a.d(s,{A:()=>n});const n={}},4187:()=>{}}]);
//# sourceMappingURL=627.b91a50a2.chunk.js.map