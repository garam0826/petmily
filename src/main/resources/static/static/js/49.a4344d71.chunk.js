"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[49],{9708:(e,s,i)=>{i.d(s,{A:()=>d});i(5043);var n=i(3216),a=i(5475),r=i(3003),t=i(2306),o=i(5547);i(8790);const l=i.p+"static/media/simple.7f599d6e71cfbe15300a.png";var c=i(579);const d=function(){const e=(0,n.Zp)(),s=(0,r.wA)(),i=t.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[i.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{s((0,o.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:(0,c.jsx)("img",{src:l,style:{width:"150px",height:"auto",marginTop:"-20px",marginLeft:"10px"}})}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(a.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(a.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(a.N_,{to:"/member/mypage/mycontent",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,c.jsx)(a.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},7340:(e,s,i)=>{i.r(s),i.d(s,{default:()=>j});var n=i(5043),a=i(3003),r=i(7154),t=i(9708),o=(i(8790),i(5492),i(7261),i(3216)),l=i(2306),c=(i(6917),i(1906)),d=i(579);const h=e=>{let{matches:s,loading:i,error:a,removeFavorite:t,getMemberDesertionNo:h}=e;const m=(0,o.Zp)(),x=l.A.getState(),[j,u]=(x.isLoggedIn&&x.userData.mem_id,(0,n.useState)({})),[v,p]=(0,n.useState)({}),[g,f]=(0,n.useState)(null);(0,n.useEffect)((()=>{s.forEach((e=>{const s=e.desertionNo||e;j[s]||(async e=>{try{const s=await r.A.get("/api/animal/".concat(e));u((i=>({...i,[e]:s.data}))),await N(e,s.data.popfile)}catch(a){console.error("Error fetching animal info:",a),f("Error fetching animal info")}})(s)}))}),[s]);const N=async(e,s)=>{try{const i=await r.A.get("/api/animal/analyze",{params:{desertionNo:e,popfile:s}});p((s=>({...s,[e]:i.data})))}catch(a){console.error("Error analyzing image:",a)}};if(i)return(0,d.jsx)("div",{children:"Loading..."});if(a)return(0,d.jsx)("div",{children:a});if(g)return(0,d.jsx)("div",{children:g});const b=e=>{if(!e)return"\ub0a0\uc9dc \uc815\ubcf4 \uc5c6\uc74c";const s=e.substring(0,4),i=e.substring(4,6),n=e.substring(6,8);return"".concat(s,"\ub144 ").concat(parseInt(i,10),"\uc6d4 ").concat(parseInt(n,10),"\uc77c")};return(0,d.jsx)("div",{children:(0,d.jsxs)("main",{className:"container",children:[(0,d.jsx)("br",{}),(0,d.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,d.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,d.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,d.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"fsize13",children:(0,d.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:(0,d.jsx)("br",{})})})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:"\ucc1c \ubaa9\ub85d"})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"fsize13",children:(0,d.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\u200b"})})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"fsize13",children:(0,d.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:["(\uc0ac\uc9c4 \uc704\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74, \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub97c \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.)",(0,d.jsx)("br",{}),(0,d.jsx)("br",{})]})})}),(0,d.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,d.jsx)("div",{children:(0,d.jsx)("br",{})})]})})})})}),0===s.length?(0,d.jsx)("div",{children:"No matches found"}):(0,d.jsx)("div",{className:"grid-container_favorite",children:s.map((e=>{var s,i,n,a,r,o,l,x,u;const v=e.desertionNo||e;return(0,d.jsx)("div",{className:"card_favorite",children:j[v]&&(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:null===(s=j[v])||void 0===s?void 0:s.popfile,alt:"Animal"}),(0,d.jsx)("div",{className:"analysis_favorite",onClick:()=>{m("/animal/detail",{state:{desertionNo:v}})},children:(0,d.jsxs)("div",{className:"analysis_info_favorite",children:[(0,d.jsxs)("p",{children:["\ubc1c\uacac \ub0a0\uc9dc: ",b(null===(i=j[v])||void 0===i?void 0:i.happenDt)]}),(0,d.jsxs)("p",{children:["\ubc1c\uacac \uc7a5\uc18c: ",null===(n=j[v])||void 0===n?void 0:n.happenPlace]}),(0,d.jsxs)("p",{children:["\ub098\uc774: ",null===(a=j[v])||void 0===a?void 0:a.age]}),(0,d.jsxs)("p",{children:["\ubb34\uac8c: ",null===(r=j[v])||void 0===r?void 0:r.weight]}),(0,d.jsxs)("p",{children:["\uacf5\uace0 \uc2dc\uc791 \ub0a0\uc9dc: ",b(null===(o=j[v])||void 0===o?void 0:o.noticeSdt)]}),(0,d.jsxs)("p",{children:["\uacf5\uace0 \uc885\ub8cc \ub0a0\uc9dc: ",b(null===(l=j[v])||void 0===l?void 0:l.noticeEdt)]}),(0,d.jsxs)("p",{children:["\uc131\ubcc4: ",null===(x=j[v])||void 0===x?void 0:x.sexCd]}),(0,d.jsxs)("p",{children:["\uc911\uc131\ud654 \uc5ec\ubd80: ",null===(u=j[v])||void 0===u?void 0:u.neuterYn]})]})}),(0,d.jsx)(c.A,{variant:"contained",onClick:()=>t(v),sx:{width:"100%",marginTop:"20px",borderRadius:"5px",backgroundColor:"lightgrey",fontWeight:"bold","&:hover":{backgroundColor:"#f17a8d"}},children:"\ucc1c \uc81c\uac70"}),(0,d.jsx)(c.A,{variant:"contained",onClick:()=>h(v),sx:{width:"100%",marginTop:"20px",borderRadius:"5px",backgroundColor:"lightgrey",fontWeight:"bold","&:hover":{backgroundColor:"#f17a8d"}},children:"\ucc1c\ud55c \uc0ac\uc6a9\uc790 \ubcf4\uae30"})]})},v)}))})]})})},m=e=>{let{matches:s,loading:i,error:a}=e;const t=(0,o.Zp)(),c=l.A.getState(),[h,m]=(c.isLoggedIn&&c.userData.mem_id,(0,n.useState)({})),[x,j]=(0,n.useState)({}),[u,v]=(0,n.useState)(null);(0,n.useEffect)((()=>{s.forEach((e=>{const s=e.desertionNo||e;h[s]||(async e=>{try{const s=await r.A.get("/api/animal/".concat(e));m((i=>({...i,[e]:s.data}))),await p(e,s.data.popfile)}catch(a){console.error("Error fetching animal info:",a),v("Error fetching animal info")}})(s)}))}),[s]);const p=async(e,s)=>{try{const i=await r.A.get("/api/animal/analyze",{params:{desertionNo:e,popfile:s}});j((s=>({...s,[e]:i.data})))}catch(a){console.error("Error analyzing image:",a)}};if(i)return(0,d.jsx)("div",{children:"Loading..."});if(a)return(0,d.jsx)("div",{children:a});if(u)return(0,d.jsx)("div",{children:u});const g=e=>{if(!e)return"\ub0a0\uc9dc \uc815\ubcf4 \uc5c6\uc74c";const s=e.substring(0,4),i=e.substring(4,6),n=e.substring(6,8);return"".concat(s,"\ub144 ").concat(parseInt(i,10),"\uc6d4 ").concat(parseInt(n,10),"\uc77c")};return(0,d.jsx)("div",{children:(0,d.jsxs)("main",{className:"container",children:[(0,d.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,d.jsx)("div",{className:"container",children:(0,d.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,d.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,d.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,d.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"fsize13",children:(0,d.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:(0,d.jsx)("br",{})})})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:"\ucc1c \ubaa9\ub85d"})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"fsize13",children:(0,d.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\u200b"})})}),(0,d.jsx)("div",{children:(0,d.jsx)("span",{className:"fsize13",children:(0,d.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:["(\uc0ac\uc9c4 \uc704\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74, \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub97c \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.)",(0,d.jsx)("br",{}),(0,d.jsx)("br",{})]})})}),(0,d.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,d.jsx)("div",{children:(0,d.jsx)("br",{})})]})})})})}),0===s.length?(0,d.jsx)("div",{children:"No matches found"}):(0,d.jsx)("div",{className:"grid-container",children:s.map((e=>{var s,i,n,a,r,o,l,c,m;const x=e.desertionNo||e;return(0,d.jsx)("div",{style:{height:"350px"},className:"card",children:h[x]&&(0,d.jsxs)("div",{children:[(0,d.jsx)("img",{src:null===(s=h[x])||void 0===s?void 0:s.popfile,alt:"Animal"}),(0,d.jsxs)("div",{style:{transform:"translateX(-50%) translateY(0.5%)"},className:"analysis",onClick:()=>{t("/animal/detail",{state:{desertionNo:x}})},children:[(0,d.jsx)("br",{}),(0,d.jsxs)("p",{children:["\ubc1c\uacac \ub0a0\uc9dc: ",g(null===(i=h[x])||void 0===i?void 0:i.happenDt)]}),(0,d.jsxs)("p",{children:["\ubc1c\uacac \uc7a5\uc18c: ",null===(n=h[x])||void 0===n?void 0:n.happenPlace]}),(0,d.jsxs)("p",{children:["\ub098\uc774: ",null===(a=h[x])||void 0===a?void 0:a.age]}),(0,d.jsxs)("p",{children:["\ubb34\uac8c: ",null===(r=h[x])||void 0===r?void 0:r.weight]}),(0,d.jsxs)("p",{children:["\uacf5\uace0 \uc2dc\uc791 \ub0a0\uc9dc: ",g(null===(o=h[x])||void 0===o?void 0:o.noticeSdt)]}),(0,d.jsxs)("p",{children:["\uacf5\uace0 \uc885\ub8cc \ub0a0\uc9dc: ",g(null===(l=h[x])||void 0===l?void 0:l.noticeEdt)]}),(0,d.jsxs)("p",{children:["\uc131\ubcc4: ",null===(c=h[x])||void 0===c?void 0:c.sexCd]}),(0,d.jsxs)("p",{children:["\uc911\uc131\ud654 \uc5ec\ubd80: ",null===(m=h[x])||void 0===m?void 0:m.neuterYn]})]})]})},x)}))})]})})};var x=i(6779);const j=function(){const e=(0,a.d4)((e=>e.userData)),s=e?e.mem_id:"",[i,o]=(0,n.useState)([]),[l,j]=(0,n.useState)([]),[u,v]=(0,n.useState)(""),[p,g]=(0,n.useState)(""),[f,N]=(0,n.useState)([]),[b,y]=(0,n.useState)(!0),[w,S]=(0,n.useState)([]),[A,C]=(0,n.useState)(!0),[k,E]=(0,n.useState)(null);(0,n.useEffect)((()=>{s&&_(s)}),[s]),(0,n.useEffect)((()=>{s&&(async()=>{try{const e=await r.A.get("/favorites/list?memId=".concat(s));S(e.data)}catch(e){E("Failed to fetch matches"),console.error(e)}finally{C(!1)}})()}),[s]);const _=e=>{r.A.get("/favorites/list?memId=".concat(e)).then((e=>{o(e.data)})).catch((e=>{console.error("Error fetching favorites: ",e)}))},z=e=>{g(e),(e=>{y(!0),r.A.get("/favorites/list?memId=".concat(e)).then((e=>{N(e.data)})).catch((e=>{console.error("Error fetching selected user's favorites: ",e)})).finally((()=>{y(!1)}))})(e)};return(0,d.jsxs)("div",{children:[(0,d.jsx)("header",{children:(0,d.jsx)(t.A,{})}),(0,d.jsx)("div",{children:(0,d.jsx)(h,{matches:w,loading:A,error:k,removeFavorite:e=>{r.A.delete("/favorites/remove?memId=".concat(s,"&desertionNo=").concat(e)).then((e=>{console.log("Favorite removed successfully"),alert("\ucc1c \uc0ad\uc81c\ub418\uc5c8\uc2b5\ub2c8\ub2e4!"),_(s),window.location.reload()})).catch((e=>{console.error("Error removing favorite: ",e)}))},getMemberDesertionNo:e=>{r.A.get("/favorites/members/".concat(e)).then((i=>{const n=i.data.filter((e=>e!==s));j(n),v(e)})).catch((e=>{console.error("Error fetching members: ",e)}))}})}),u&&(0,d.jsxs)("div",{children:[(0,d.jsx)("h3",{children:"\ucc1c\ud55c \ub2e4\ub978 \uc0ac\uc6a9\uc790 \ubaa9\ub85d"}),(0,d.jsx)("div",{children:l.map((e=>(0,d.jsxs)("div",{children:[(0,d.jsxs)("div",{children:[(0,d.jsx)("span",{children:e}),(0,d.jsx)(x.A,{style:{display:"flex",justifyContent:"center"},children:(0,d.jsx)(c.A,{variant:"contained",sx:{width:"300px",fontWeight:"bold",borderRadius:"5px",backgroundColor:"rgba(236, 172, 181, 1)","&:hover":{backgroundColor:"#f17a8d"}},onClick:()=>z(e),children:"\uc774 \uc0ac\uc6a9\uc790\uc758 \ucc1c \ubaa9\ub85d \ubcf4\uae30"})})]}),p===e&&(0,d.jsx)("div",{children:b?(0,d.jsx)("p",{children:"Loading..."}):(0,d.jsx)(m,{matches:f,loading:b,error:k})})]},e)))})]})]})}},7261:()=>{},8790:()=>{},6917:(e,s,i)=>{i.d(s,{A:()=>n});const n={}},5492:()=>{}}]);
//# sourceMappingURL=49.a4344d71.chunk.js.map