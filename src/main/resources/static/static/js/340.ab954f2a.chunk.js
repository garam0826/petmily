"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[340],{131:(e,s,n)=>{n.d(s,{A:()=>o});n(43);var i=n(216),a=n(475),r=n(3),t=n(306),l=n(547),c=(n(790),n(579));const o=function(){const e=(0,i.Zp)(),s=(0,r.wA)(),n=t.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[n.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{s((0,l.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(a.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(a.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(a.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},340:(e,s,n)=>{n.r(s),n.d(s,{default:()=>m});var i=n(43),a=n(3),r=n(154),t=n(131),l=(n(790),n(492),n(261),n(216)),c=n(306),o=(n(917),n(579));const d=e=>{let{matches:s,loading:n,error:a,removeFavorite:t,getMemberDesertionNo:d}=e;const h=(0,l.Zp)(),m=c.A.getState(),[x,j]=(m.isLoggedIn&&m.userData.mem_id,(0,i.useState)({})),[u,v]=(0,i.useState)({}),[p,f]=(0,i.useState)(null);(0,i.useEffect)((()=>{s.forEach((e=>{const s=e.desertionNo||e;x[s]||(async e=>{try{const s=await r.A.get("/api/animal/".concat(e));j((n=>({...n,[e]:s.data}))),await g(e,s.data.popfile)}catch(a){console.error("Error fetching animal info:",a),f("Error fetching animal info")}})(s)}))}),[s]);const g=async(e,s)=>{try{const n=await r.A.get("/api/animal/analyze",{params:{desertionNo:e,popfile:s}});v((s=>({...s,[e]:n.data})))}catch(a){console.error("Error analyzing image:",a)}};if(n)return(0,o.jsx)("div",{children:"Loading..."});if(a)return(0,o.jsx)("div",{children:a});if(p)return(0,o.jsx)("div",{children:p});const N=e=>{if(!e)return"\ub0a0\uc9dc \uc815\ubcf4 \uc5c6\uc74c";const s=e.substring(0,4),n=e.substring(4,6),i=e.substring(6,8);return"".concat(s,"\ub144 ").concat(parseInt(n,10),"\uc6d4 ").concat(parseInt(i,10),"\uc77c")};return(0,o.jsx)("div",{children:(0,o.jsxs)("main",{className:"container",children:[(0,o.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,o.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,o.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,o.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:(0,o.jsx)("br",{})})})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:"\ucc1c \ubaa9\ub85d"})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\u200b"})})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:["(\uc0ac\uc9c4 \uc704\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74, \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub97c \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.)",(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]})})}),(0,o.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,o.jsx)("div",{children:(0,o.jsx)("br",{})})]})})})})}),0===s.length?(0,o.jsx)("div",{children:"No matches found"}):(0,o.jsx)("div",{className:"grid-container",children:s.map((e=>{var s,n,i,a,r,l,c,m,j;const u=e.desertionNo||e;return(0,o.jsx)("div",{className:"card",children:x[u]&&(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:null===(s=x[u])||void 0===s?void 0:s.popfile,alt:"Animal"}),(0,o.jsxs)("div",{className:"analysis",onClick:()=>{h("/animal/detail",{state:{desertionNo:u}})},children:[(0,o.jsxs)("p",{children:["\ubc1c\uacac \ub0a0\uc9dc: ",N(null===(n=x[u])||void 0===n?void 0:n.happenDt)]}),(0,o.jsxs)("p",{children:["\ubc1c\uacac \uc7a5\uc18c: ",null===(i=x[u])||void 0===i?void 0:i.happenPlace]}),(0,o.jsxs)("p",{children:["\ub098\uc774: ",null===(a=x[u])||void 0===a?void 0:a.age]}),(0,o.jsxs)("p",{children:["\ubb34\uac8c: ",null===(r=x[u])||void 0===r?void 0:r.weight]}),(0,o.jsxs)("p",{children:["\uacf5\uace0 \uc2dc\uc791 \ub0a0\uc9dc: ",N(null===(l=x[u])||void 0===l?void 0:l.noticeSdt)]}),(0,o.jsxs)("p",{children:["\uacf5\uace0 \uc885\ub8cc \ub0a0\uc9dc: ",N(null===(c=x[u])||void 0===c?void 0:c.noticeEdt)]}),(0,o.jsxs)("p",{children:["\uc131\ubcc4: ",null===(m=x[u])||void 0===m?void 0:m.sexCd]}),(0,o.jsxs)("p",{children:["\uc911\uc131\ud654 \uc5ec\ubd80: ",null===(j=x[u])||void 0===j?void 0:j.neuterYn]})]}),(0,o.jsx)("button",{className:"button",onClick:()=>t(u),children:"\ucc1c \uc81c\uac70"}),(0,o.jsx)("button",{className:"button",onClick:()=>d(u),children:"\ucc1c\ud55c \uc0ac\uc6a9\uc790 \ubcf4\uae30"})]})},u)}))})]})})},h=e=>{let{matches:s,loading:n,error:a}=e;const t=(0,l.Zp)(),d=c.A.getState(),[h,m]=(d.isLoggedIn&&d.userData.mem_id,(0,i.useState)({})),[x,j]=(0,i.useState)({}),[u,v]=(0,i.useState)(null);(0,i.useEffect)((()=>{s.forEach((e=>{const s=e.desertionNo||e;h[s]||(async e=>{try{const s=await r.A.get("/api/animal/".concat(e));m((n=>({...n,[e]:s.data}))),await p(e,s.data.popfile)}catch(a){console.error("Error fetching animal info:",a),v("Error fetching animal info")}})(s)}))}),[s]);const p=async(e,s)=>{try{const n=await r.A.get("/api/animal/analyze",{params:{desertionNo:e,popfile:s}});j((s=>({...s,[e]:n.data})))}catch(a){console.error("Error analyzing image:",a)}};if(n)return(0,o.jsx)("div",{children:"Loading..."});if(a)return(0,o.jsx)("div",{children:a});if(u)return(0,o.jsx)("div",{children:u});const f=e=>{if(!e)return"\ub0a0\uc9dc \uc815\ubcf4 \uc5c6\uc74c";const s=e.substring(0,4),n=e.substring(4,6),i=e.substring(6,8);return"".concat(s,"\ub144 ").concat(parseInt(n,10),"\uc6d4 ").concat(parseInt(i,10),"\uc77c")};return(0,o.jsx)("div",{children:(0,o.jsxs)("main",{className:"container",children:[(0,o.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,o.jsx)("div",{className:"container",children:(0,o.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,o.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,o.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,o.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:(0,o.jsx)("br",{})})})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:"\ucc1c \ubaa9\ub85d"})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\u200b"})})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:["(\uc0ac\uc9c4 \uc704\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74, \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub97c \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.)",(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]})})}),(0,o.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,o.jsx)("div",{children:(0,o.jsx)("br",{})})]})})})})}),0===s.length?(0,o.jsx)("div",{children:"No matches found"}):(0,o.jsx)("div",{className:"grid-container",children:s.map((e=>{var s,n,i,a,r,l,c,d,m;const x=e.desertionNo||e;return(0,o.jsx)("div",{style:{height:"350px"},className:"card",children:h[x]&&(0,o.jsxs)("div",{children:[(0,o.jsx)("img",{src:null===(s=h[x])||void 0===s?void 0:s.popfile,alt:"Animal"}),(0,o.jsxs)("div",{style:{transform:"translateX(-50%) translateY(0.5%)"},className:"analysis",onClick:()=>{t("/animal/detail",{state:{desertionNo:x}})},children:[(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:["\ubc1c\uacac \ub0a0\uc9dc: ",f(null===(n=h[x])||void 0===n?void 0:n.happenDt)]}),(0,o.jsxs)("p",{children:["\ubc1c\uacac \uc7a5\uc18c: ",null===(i=h[x])||void 0===i?void 0:i.happenPlace]}),(0,o.jsxs)("p",{children:["\ub098\uc774: ",null===(a=h[x])||void 0===a?void 0:a.age]}),(0,o.jsxs)("p",{children:["\ubb34\uac8c: ",null===(r=h[x])||void 0===r?void 0:r.weight]}),(0,o.jsxs)("p",{children:["\uacf5\uace0 \uc2dc\uc791 \ub0a0\uc9dc: ",f(null===(l=h[x])||void 0===l?void 0:l.noticeSdt)]}),(0,o.jsxs)("p",{children:["\uacf5\uace0 \uc885\ub8cc \ub0a0\uc9dc: ",f(null===(c=h[x])||void 0===c?void 0:c.noticeEdt)]}),(0,o.jsxs)("p",{children:["\uc131\ubcc4: ",null===(d=h[x])||void 0===d?void 0:d.sexCd]}),(0,o.jsxs)("p",{children:["\uc911\uc131\ud654 \uc5ec\ubd80: ",null===(m=h[x])||void 0===m?void 0:m.neuterYn]})]})]})},x)}))})]})})};const m=function(){const e=(0,a.d4)((e=>e.userData)),s=e?e.mem_id:"",[n,l]=(0,i.useState)([]),[c,m]=(0,i.useState)([]),[x,j]=(0,i.useState)(""),[u,v]=(0,i.useState)(""),[p,f]=(0,i.useState)([]),[g,N]=(0,i.useState)(!0),[b,y]=(0,i.useState)([]),[S,w]=(0,i.useState)(!0),[E,A]=(0,i.useState)(null);(0,i.useEffect)((()=>{s&&k(s)}),[s]),(0,i.useEffect)((()=>{s&&(async()=>{try{const e=await r.A.get("/favorites/list?memId=".concat(s));y(e.data)}catch(e){A("Failed to fetch matches"),console.error(e)}finally{w(!1)}})()}),[s]);const k=e=>{r.A.get("/favorites/list?memId=".concat(e)).then((e=>{l(e.data)})).catch((e=>{console.error("Error fetching favorites: ",e)}))},C=e=>{v(e),(e=>{N(!0),r.A.get("/favorites/list?memId=".concat(e)).then((e=>{f(e.data)})).catch((e=>{console.error("Error fetching selected user's favorites: ",e)})).finally((()=>{N(!1)}))})(e)};return(0,o.jsxs)("div",{children:[(0,o.jsx)("header",{children:(0,o.jsx)(t.A,{})}),(0,o.jsx)("div",{children:(0,o.jsx)(d,{matches:b,loading:S,error:E,removeFavorite:e=>{r.A.delete("/favorites/remove?memId=".concat(s,"&desertionNo=").concat(e)).then((e=>{console.log("Favorite removed successfully"),k(s)})).catch((e=>{console.error("Error removing favorite: ",e)}))},getMemberDesertionNo:e=>{r.A.get("/favorites/members/".concat(e)).then((s=>{m(s.data),j(e)})).catch((e=>{console.error("Error fetching members: ",e)}))}})}),x&&(0,o.jsxs)("div",{children:[(0,o.jsx)("h3",{children:"\ucc1c\ud55c \ub2e4\ub978 \uc0ac\uc6a9\uc790 \ubaa9\ub85d"}),(0,o.jsx)("div",{children:c.map((e=>(0,o.jsxs)("div",{children:[(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{children:e}),(0,o.jsx)("button",{className:"signup custom-button",onClick:()=>C(e),children:"\uc774 \uc0ac\uc6a9\uc790\uc758 \ucc1c \ubaa9\ub85d \ubcf4\uae30"})]}),u===e&&(0,o.jsx)("div",{children:g?(0,o.jsx)("p",{children:"Loading..."}):(0,o.jsx)(h,{matches:p,loading:g,error:E})})]},e)))})]})]})}},261:()=>{},790:()=>{},917:(e,s,n)=>{n.d(s,{A:()=>i});const i={}},492:()=>{}}]);
//# sourceMappingURL=340.ab954f2a.chunk.js.map