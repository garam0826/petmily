"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[939,226],{9708:(e,n,a)=>{a.d(n,{A:()=>o});a(5043);var t=a(3216),i=a(5475),s=a(3003),r=a(2306),l=a(5547);a(8790);const c=a.p+"static/media/simple.7f599d6e71cfbe15300a.png";var d=a(579);const o=function(){const e=(0,t.Zp)(),n=(0,s.wA)(),a=r.A.getState();return(0,d.jsxs)("div",{className:"menubar",children:[a.isLoggedIn?(0,d.jsx)("button",{className:"login",onClick:()=>{n((0,l.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,d.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{onClick:()=>e("/main"),children:(0,d.jsx)("img",{src:c,style:{width:"150px",height:"auto",marginTop:"-20px",marginLeft:"10px"}})}),(0,d.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,d.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,d.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,d.jsxs)("li",{className:"dropdown",children:[(0,d.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,d.jsxs)("div",{className:"dropdown-content",children:[(0,d.jsx)(i.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,d.jsx)(i.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,d.jsx)(i.N_,{to:"/member/mypage/mycontent",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,d.jsx)(i.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},387:(e,n,a)=>{a.r(n),a.d(n,{default:()=>x});var t=a(5043),i=a(7154),s=a(3216),r=a(2306),l=(a(9708),a(6917),a(7261),a(5795)),c=a(9190),d=a(7561),o=a(2880),m=a(1906),h=a(579);const x=function(){const[e,n]=(0,t.useState)(null),[a,x]=(0,t.useState)({mem_id:"",mem_pw:"",nickname:"",email:"",region:"",county_district:"",reg_date:"",edit_date:""}),[p,g]=(0,t.useState)(""),[j,u]=(0,t.useState)(""),y=((0,s.Zp)(),r.A.getState()),f=y.isLoggedIn?y.userData.mem_id:null,[v,b]=(0,t.useState)(""),[A,w]=(0,t.useState)(""),[N,_]=(0,t.useState)([]),[C,k]=(0,t.useState)([]),[S,T]=(0,t.useState)(""),F=e=>{const{name:n,value:t}=e.target;x((e=>({...e,[n]:t}))),console.log(a)};return(0,t.useEffect)((()=>{(async()=>{try{const e=await i.A.get("/member/MyPage?mem_id=".concat(f));x(e.data),console.log(f),n(null)}catch(e){n("\uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uac00\uc838\uc624\ub294 \uc911\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}})();(async()=>{try{const e=await i.A.get("/member/SignUp");_(e.data)}catch(e){console.error("Error fetching region list:",e)}})()}),[]),(0,h.jsx)(t.Fragment,{children:(0,h.jsxs)("main",{children:[(0,h.jsxs)("form",{className:"form",style:{marginTop:"-15px"},children:[(0,h.jsx)("h2",{children:"\ud68c\uc6d0 \uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,h.jsx)(l.A,{id:"standard-basic",label:"\ube44\ubc00\ubc88\ud638",variant:"standard",name:"mem_pw",value:a.mem_pw,style:{marginTop:"20px",width:"300px",height:"auto"},onChange:F}),(0,h.jsx)(l.A,{id:"standard-basic",label:"\ub2c9\ub124\uc784",variant:"standard",name:"nickname",value:a.nickname,style:{marginTop:"20px",width:"300px",height:"auto"},onChange:F}),(0,h.jsx)(l.A,{id:"standard-basic",label:"\uc774\uba54\uc77c",variant:"standard",name:"email",value:a.email,style:{marginTop:"20px",width:"300px",height:"auto"},onChange:F}),(0,h.jsxs)(d.A,{fullWidth:!0,style:{marginTop:"20px",width:"300px",height:"auto"},children:[(0,h.jsx)(c.A,{variant:"standard",htmlFor:"uncontrolled-native",children:"\uc9c0\uc5ed(\ub3c4/\ud2b9\ubcc4\uc2dc)"}),(0,h.jsxs)(o.A,{defaultValue:100,onChange:async n=>{const a=n.target.value;T(a),b(a);try{const e=await i.A.get("/member/SearchDistrict?reg_name=".concat(a));k(e.data)}catch(e){console.error("Error fetching district list:",e)}},children:[(0,h.jsx)("option",{value:100,children:a.region}),N.map((e=>(0,h.jsx)("option",{value:e.reg_name,children:e.reg_name},e.reg_code)))]})]}),(0,h.jsxs)(d.A,{fullWidth:!0,style:{marginTop:"20px",width:"300px",height:"auto"},children:[(0,h.jsx)(c.A,{variant:"standard",htmlFor:"uncontrolled-native",children:"\uc9c0\uc5ed(\uc2dc/\uad70)"}),(0,h.jsxs)(o.A,{defaultValue:100,onChange:async e=>{const n=e.target.value;w(n)},children:[(0,h.jsx)("option",{value:100,children:a.county_district}),C.map((e=>(0,h.jsx)("option",{value:e.dist_name,children:e.dist_name},e.dist_code)))]})]}),(0,h.jsx)(m.A,{variant:"outlined",style:{marginTop:"20px",width:"300px"},onClick:async()=>{console.log(a);try{await i.A.put("/member/MyPage/Update",a);alert("\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815 \uc131\uacf5!")}catch(e){console.error("Error updating member info:",e),alert(e),g("\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815 \uc2e4\ud328")}},children:"\uc218\uc815 \uc644\ub8cc\ud558\uae30"})]}),p&&(0,h.jsx)("p",{children:p})]})})}},7942:(e,n,a)=>{a.r(n),a.d(n,{default:()=>x});a(5043);var t=a(3003),i=a(5547),s=a(3216),r=a(2306),l=a(7154),c=a(9708),d=(a(7261),a(6917),a(387)),o=a(1906),m=a(6779),h=a(579);const x=function(){const e=(0,t.wA)(),n=(0,s.Zp)(),a=r.A.getState(),x=a.isLoggedIn?a.userData.mem_id:null;return(0,h.jsxs)("div",{children:[(0,h.jsx)("header",{children:(0,h.jsx)(c.A,{})}),(0,h.jsxs)("main",{children:[(0,h.jsx)("br",{}),(0,h.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,h.jsx)("div",{className:"container_result",children:(0,h.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,h.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,h.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,h.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,h.jsx)("br",{}),(0,h.jsx)("br",{}),(0,h.jsx)("div",{children:(0,h.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:" My Page "})}),(0,h.jsx)("div",{children:(0,h.jsx)("span",{className:"fsize13",children:(0,h.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\u200b"})})}),a.isLoggedIn&&(0,h.jsx)("div",{children:(0,h.jsx)("span",{className:"fsize13",children:(0,h.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:[x,"\ub2d8!"]})})}),(0,h.jsx)("div",{children:(0,h.jsx)("span",{className:"fsize13",children:(0,h.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:[(0,h.jsx)("br",{}),"\ud68c\uc6d0\ub2d8\uc758 \uc815\ubcf4\ub97c \ud655\uc778\ud558\uac70\ub098 \uc218\uc815\ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})})}),(0,h.jsx)("div",{children:(0,h.jsx)("span",{className:"fsize13",children:(0,h.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:["\uadf8\ub9ac\uace0 \uc800\ud76c\uc640 \ud568\uaed8 \ud558\uc9c0 \uc54a\uae30\ub97c \uc6d0\ud558\uc2e0\ub2e4\uba74, \ud0c8\ud1f4\ub3c4 \ud558\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,h.jsx)("br",{}),(0,h.jsx)("br",{})]})})}),(0,h.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,h.jsx)("div",{children:(0,h.jsx)("br",{})})]})})})})}),a.isLoggedIn?(0,h.jsxs)("div",{children:[(0,h.jsx)(d.default,{}),(0,h.jsx)(m.A,{style:{display:"flex",justifyContent:"center"},children:(0,h.jsx)(o.A,{variant:"contained",style:{marginTop:"-25px",width:"300px"},onClick:()=>{e((0,i.ri)()),n("/main")},children:"\ub85c\uadf8\uc544\uc6c3"})}),(0,h.jsx)(m.A,{style:{display:"flex",justifyContent:"center"},children:(0,h.jsx)(o.A,{variant:"contained",style:{marginTop:"15px",width:"300px"},onClick:async()=>{try{const t={mem_id:x};await l.A.delete("/member/MyPage/Resign",{data:t});alert("\ud68c\uc6d0 \ud0c8\ud1f4 \uc131\uacf5!"),e((0,i.ri)()),console.log(a),n("/member/login")}catch(t){alert("\ud68c\uc6d0 \ud0c8\ud1f4\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}},children:"\ud68c\uc6d0\uc815\ubcf4 \ud0c8\ud1f4\ud558\uae30"})})]}):(0,h.jsxs)("div",{children:[(0,h.jsx)("h2",{className:"h2",children:"\ud574\ub2f9 \ud654\uba74\uc740 \ub85c\uadf8\uc778\uc774 \ud544\uc694\ud55c \ud654\uba74\uc785\ub2c8\ub2e4."}),(0,h.jsxs)("div",{style:{display:"flex",justifyContent:"center"},children:[(0,h.jsx)(o.A,{variant:"contained",style:{marginTop:"20px",width:"300px",marginRight:"20px"},onClick:()=>n("/member/SignUp"),children:"\ud68c\uc6d0\uac00\uc785 >"}),(0,h.jsx)(o.A,{variant:"contained",style:{marginTop:"20px",width:"300px",marginLeft:"20px"},onClick:()=>n("/member/login"),children:"\ub85c\uadf8\uc778 >"})]})]})]})]})}},7261:()=>{},8790:()=>{},6917:(e,n,a)=>{a.d(n,{A:()=>t});const t={}}}]);
//# sourceMappingURL=939.3008d5b4.chunk.js.map