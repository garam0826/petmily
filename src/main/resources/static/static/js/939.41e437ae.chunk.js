"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[939,226],{9708:(e,s,n)=>{n.d(s,{A:()=>m});n(5043);var a=n(3216),t=n(5475),i=n(3003),l=n(2306),c=n(5547);n(8790);const r=n.p+"static/media/simple.7f599d6e71cfbe15300a.png";var o=n(579);const m=function(){const e=(0,a.Zp)(),s=(0,i.wA)(),n=l.A.getState();return(0,o.jsxs)("div",{className:"menubar",children:[n.isLoggedIn?(0,o.jsx)("button",{className:"login",onClick:()=>{s((0,c.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,o.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{onClick:()=>e("/main"),children:(0,o.jsx)("img",{src:r,style:{width:"150px",height:"auto",marginTop:"-20px",marginLeft:"10px"}})}),(0,o.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,o.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,o.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,o.jsxs)("li",{className:"dropdown",children:[(0,o.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,o.jsxs)("div",{className:"dropdown-content",children:[(0,o.jsx)(t.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,o.jsx)(t.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,o.jsx)(t.N_,{to:"/member/mypage/mycontent",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,o.jsx)(t.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},387:(e,s,n)=>{n.r(s),n.d(s,{default:()=>r});var a=n(5043),t=n(7154),i=n(3216),l=n(2306),c=(n(9708),n(6917),n(7261),n(579));const r=function(){const[e,s]=(0,a.useState)(null),[n,r]=(0,a.useState)({mem_id:"",mem_pw:"",nickname:"",email:"",region:"",county_district:"",reg_date:"",edit_date:""}),[o,m]=(0,a.useState)(""),[d,h]=(0,a.useState)(""),x=(0,i.Zp)(),u=l.A.getState(),j=u.isLoggedIn?u.userData.mem_id:null,[p,g]=(0,a.useState)(""),[b,N]=(0,a.useState)(""),[y,v]=(0,a.useState)([]),[f,_]=(0,a.useState)([]),[C,w]=(0,a.useState)(""),k=e=>{const{name:s,value:a}=e.target;r((e=>({...e,[s]:a}))),console.log(n)};return(0,a.useEffect)((()=>{(async()=>{try{const e=await t.A.get("/member/MyPage?mem_id=".concat(j));r(e.data),console.log(j),s(null)}catch(e){s("\uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uac00\uc838\uc624\ub294 \uc911\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}})();(async()=>{try{const e=await t.A.get("/member/SignUp");v(e.data)}catch(e){console.error("Error fetching region list:",e)}})()}),[]),(0,c.jsx)(a.Fragment,{children:(0,c.jsxs)("main",{children:[(0,c.jsxs)("form",{className:"form",children:[(0,c.jsx)("h2",{children:"\ud68c\uc6d0 \uc815\ubcf4 \uc218\uc815"}),(0,c.jsx)("div",{className:"wrapper",children:(0,c.jsxs)("label",{className:"contentContainer",children:["PW:",(0,c.jsx)("input",{className:"input",type:"text",placeholder:"\uc0c8 \ube44\ubc88",name:"mem_pw",value:n.mem_pw,onChange:k})]})}),(0,c.jsx)("div",{className:"wrapper",children:(0,c.jsxs)("label",{className:"contentContainer",children:["Nick Name:",(0,c.jsx)("input",{className:"input",type:"text",placeholder:"\uc0c8 \ub2c9\ub124\uc784",name:"nickname",value:n.nickname,onChange:k})]})}),(0,c.jsx)("div",{className:"wrapper",children:(0,c.jsxs)("label",{className:"contentContainer",children:["Email:",(0,c.jsx)("input",{className:"input",type:"text",placeholder:"\uc0c8 \uc774\uba54\uc77c",name:"email",value:n.email,onChange:k})]})}),(0,c.jsx)("div",{className:"wrapper",children:(0,c.jsxs)("label",{className:"contentContainer",htmlFor:"region",children:["Region:",(0,c.jsxs)("select",{className:"input",id:"region",onChange:async s=>{const n=s.target.value;w(n),g(n);try{const e=await t.A.get("/member/SearchDistrict?reg_name=".concat(n));_(e.data)}catch(e){console.error("Error fetching district list:",e)}},children:[(0,c.jsx)("option",{value:"",children:n.region}),y.map((e=>(0,c.jsx)("option",{value:e.reg_name,children:e.reg_name},e.reg_code)))]})]})}),(0,c.jsx)("div",{className:"wrapper",children:(0,c.jsxs)("label",{className:"contentContainer",htmlFor:"district",children:["District:",(0,c.jsxs)("select",{className:"input",id:"district",onChange:async e=>{const s=e.target.value;N(s)},children:[(0,c.jsx)("option",{value:"",children:n.county_district}),f.map((e=>(0,c.jsx)("option",{value:e.dist_name,children:e.dist_name},e.dist_code)))]})]})}),(0,c.jsx)("button",{style:{marginTop:"20px"},className:"custom-button",onClick:async()=>{console.log(n);try{await t.A.put("/member/MyPage/Update",n);alert("\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815 \uc131\uacf5!")}catch(e){console.error("Error updating member info:",e),alert(e),m("\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815 \uc2e4\ud328")}},children:"\uc218\uc815 \uc644\ub8cc\ud558\uae30"})]}),o&&(0,c.jsx)("p",{children:o}),(0,c.jsx)("button",{className:"custom-button",type:"button",onClick:()=>x("/member/mypage"),children:"\ub9c8\uc774\ud398\uc774\uc9c0 \ud654\uba74\uc73c\ub85c \u2192"})]})})}},7942:(e,s,n)=>{n.r(s),n.d(s,{default:()=>d});n(5043);var a=n(3003),t=n(5547),i=n(3216),l=n(2306),c=n(7154),r=n(9708),o=(n(7261),n(6917),n(387)),m=n(579);const d=function(){const e=(0,a.wA)(),s=(0,i.Zp)(),n=l.A.getState(),d=n.isLoggedIn?n.userData.mem_id:null;return(0,m.jsxs)("div",{children:[(0,m.jsx)("header",{children:(0,m.jsx)(r.A,{})}),(0,m.jsxs)("main",{children:[(0,m.jsx)("br",{}),(0,m.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,m.jsx)("div",{className:"container_result",children:(0,m.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,m.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,m.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,m.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,m.jsx)("br",{}),(0,m.jsx)("br",{}),(0,m.jsx)("div",{children:(0,m.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:" My Page "})}),(0,m.jsx)("div",{children:(0,m.jsx)("span",{className:"fsize13",children:(0,m.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\u200b"})})}),n.isLoggedIn&&(0,m.jsx)("div",{children:(0,m.jsx)("span",{className:"fsize13",children:(0,m.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:[d,"\ub2d8!"]})})}),(0,m.jsx)("div",{children:(0,m.jsx)("span",{className:"fsize13",children:(0,m.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:[(0,m.jsx)("br",{}),"\ud68c\uc6d0\ub2d8\uc758 \uc815\ubcf4\ub97c \ud655\uc778\ud558\uac70\ub098 \uc218\uc815\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})})}),(0,m.jsx)("div",{children:(0,m.jsx)("span",{className:"fsize13",children:(0,m.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:["\uadf8\ub9ac\uace0 \uc800\ud76c\uc640 \ud568\uaed8 \ud558\uc9c0 \uc54a\uae30\ub97c \uc6d0\ud558\uc2e0\ub2e4\uba74, \ud0c8\ud1f4\ub3c4 \ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,m.jsx)("br",{}),(0,m.jsx)("br",{})]})})}),(0,m.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,m.jsx)("div",{children:(0,m.jsx)("br",{})})]})})})})}),n.isLoggedIn?(0,m.jsxs)("div",{children:[(0,m.jsxs)("div",{className:"div_member",children:[(0,m.jsxs)("div",{className:"form_member",children:[(0,m.jsx)("h2",{className:"h2",children:"\ub0b4 \uc815\ubcf4 \ud655\uc778\ud558\uae30"}),(0,m.jsx)("button",{style:{marginTop:"5px"},className:"custom-button",onClick:()=>s("/member/mypage/myinfo"),children:"\uc815\ubcf4 \ud655\uc778 \u2192"})]}),(0,m.jsxs)("div",{className:"form_member",children:[(0,m.jsx)("h2",{className:"h2",children:"\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815\ud558\uae30"}),(0,m.jsx)("button",{style:{marginTop:"5px"},className:"custom-button",onClick:()=>s("/member/mypage/myedit"),children:"\uc815\ubcf4 \uc218\uc815\ud558\uae30 \u2192"})]})]}),(0,m.jsxs)("div",{className:"div_member",children:[(0,m.jsxs)("div",{className:"form_member",children:[(0,m.jsx)("h2",{className:"h2",children:"\ud68c\uc6d0\uc815\ubcf4 \ud0c8\ud1f4\ud558\uae30"}),(0,m.jsx)("button",{style:{marginTop:"5px"},className:"custom-button",onClick:async()=>{try{const a={mem_id:d};await c.A.delete("/member/MyPage/Resign",{data:a});alert("\ud68c\uc6d0 \ud0c8\ud1f4 \uc131\uacf5!"),e((0,t.ri)()),console.log(n),s("/member/login")}catch(a){alert("\ud68c\uc6d0 \ud0c8\ud1f4\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}},children:"\ud0c8\ud1f4"})]}),(0,m.jsxs)("div",{className:"form_member",children:[(0,m.jsx)("h2",{className:"h2",children:"\ub85c\uadf8\uc544\uc6c3 \ud558\uae30"}),(0,m.jsx)("button",{style:{marginTop:"5px"},className:"custom-button",onClick:()=>{e((0,t.ri)()),s("/main")},children:" \ub85c\uadf8\uc544\uc6c3"})]})]}),(0,m.jsx)(o.default,{})]}):(0,m.jsxs)("div",{children:[(0,m.jsx)("h2",{className:"h2",children:"\ud574\ub2f9 \ud654\uba74\uc740 \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \ud654\uba74\uc785\ub2c8\ub2e4."}),(0,m.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,m.jsx)("button",{className:"custom-button",onClick:()=>s("/member/SignUp"),children:"\ud68c\uc6d0\uac00\uc785 >"}),(0,m.jsx)("button",{className:"custom-button",onClick:()=>s("/member/login"),children:"\ub85c\uadf8\uc778 >"})]})]})]})]})}},7261:()=>{},8790:()=>{},6917:(e,s,n)=>{n.d(s,{A:()=>a});const a={}}}]);
//# sourceMappingURL=939.41e437ae.chunk.js.map