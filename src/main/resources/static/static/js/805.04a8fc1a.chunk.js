"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[805],{131:(e,s,n)=>{n.d(s,{A:()=>o});n(43);var i=n(216),r=n(475),a=n(3),t=n(306),c=n(547),l=(n(790),n(579));const o=function(){const e=(0,i.Zp)(),s=(0,a.wA)(),n=t.A.getState();return(0,l.jsxs)("div",{className:"menubar",children:[n.isLoggedIn?(0,l.jsx)("button",{className:"login",onClick:()=>{s((0,c.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,l.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,l.jsxs)("ul",{children:[(0,l.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,l.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,l.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,l.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,l.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,l.jsxs)("li",{className:"dropdown",children:[(0,l.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,l.jsxs)("div",{className:"dropdown-content",children:[(0,l.jsx)(r.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,l.jsx)(r.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,l.jsx)(r.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},805:(e,s,n)=>{n.r(s),n.d(s,{default:()=>o});var i=n(43),r=n(154),a=n(306),t=n(131),c=(n(790),n(492),n(337)),l=n(579);const o=()=>{const e=a.A.getState(),s=e.isLoggedIn?e.userData.mem_id:null,[n,o]=(0,i.useState)([]),[d,h]=(0,i.useState)(!0),[x,m]=(0,i.useState)(null);return(0,i.useEffect)((()=>{s&&(async()=>{try{const e=await r.A.get("/api/animal/keyword?memId=".concat(s));o(e.data)}catch(e){m("Failed to fetch matches"),console.error(e)}finally{h(!1)}})()}),[s]),(0,l.jsxs)("div",{children:[(0,l.jsx)("header",{children:(0,l.jsx)(t.A,{})}),(0,l.jsxs)("main",{children:["keyword \uc5f0\uacb0\uc740 \uc544\uc9c1\uc774\ubbc0\ub85c \ud604\uc7ac \ud654\uba74\uc740 \uc9c8\ubb38 \ucd94\ucc9c \uacb0\uacfc\ub97c \ub300\uc2e0 \ub744\uc6e0\uc2b5\ub2c8\ub2e4.",(0,l.jsx)(c.A,{matches:n,loading:d,error:x})]})]})}},337:(e,s,n)=>{n.d(s,{A:()=>c});var i=n(43),r=n(154),a=n(306),t=(n(131),n(917),n(790),n(492),n(579));const c=e=>{let{matches:s,loading:n,error:c}=e;const l=a.A.getState(),[o,d]=(l.isLoggedIn&&l.userData.mem_id,(0,i.useState)({})),[h,x]=(0,i.useState)({}),[m,j]=(0,i.useState)(null);(0,i.useEffect)((()=>{s.forEach((e=>{o[e.desertionNo]||(async e=>{try{const s=await r.A.get("/api/animal/".concat(e));d((n=>({...n,[e]:s.data}))),await p(e,s.data.popfile)}catch(c){console.error("Error fetching animal info:",c),j("Error fetching animal info")}})(e.desertionNo)}))}),[s]);const p=async(e,s)=>{try{const n=await r.A.get("/api/animal/analyze?desertionNo=".concat(e,"&popfile=").concat(s));x((s=>({...s,[e]:n.data})))}catch(c){console.error("Error analyzing image:",c)}};if(n)return(0,t.jsx)("div",{children:"Loading..."});if(c)return(0,t.jsx)("div",{children:c});if(m)return(0,t.jsx)("div",{children:m});const N=e=>{if(!e)return"\ub0a0\uc9dc \uc815\ubcf4 \uc5c6\uc74c";const s=e.substring(0,4),n=e.substring(4,6),i=e.substring(6,8);return"".concat(s,"\ub144 ").concat(parseInt(n,10),"\uc6d4 ").concat(parseInt(i,10),"\uc77c")};return(0,t.jsx)("div",{children:(0,t.jsxs)("main",{className:"container",children:[(0,t.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,t.jsx)("div",{className:"container",children:(0,t.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,t.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,t.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,t.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,t.jsx)("div",{children:(0,t.jsx)("span",{className:"fsize13",children:(0,t.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:(0,t.jsx)("br",{})})})}),(0,t.jsx)("div",{children:(0,t.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:"\uc720\uae30\uacac \ucd94\ucc9c \uacb0\uacfc"})}),(0,t.jsx)("div",{children:(0,t.jsx)("span",{className:"fsize13",children:(0,t.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\u200b"})})}),(0,t.jsx)("div",{children:(0,t.jsx)("span",{className:"fsize13",children:(0,t.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\uc0ac\uc6a9\uc790\uc758 \ucde8\ud5a5\uc5d0 \ub9de\ub294 \uc720\uae30\uacac 5\ub9c8\ub9ac\uc785\ub2c8\ub2e4."})})}),(0,t.jsx)("div",{children:(0,t.jsx)("span",{className:"fsize13",children:(0,t.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:["(\uc0ac\uc9c4 \uc704\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74, \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub97c \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.)",(0,t.jsx)("br",{}),(0,t.jsx)("br",{})]})})}),(0,t.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,t.jsx)("div",{children:(0,t.jsx)("br",{})})]})})})})}),0===s.length?(0,t.jsx)("div",{children:"No matches found"}):(0,t.jsx)("div",{className:"grid-container",children:s.map(((e,s)=>(0,t.jsx)("div",{className:"card",children:o[e.desertionNo]&&(0,t.jsxs)("div",{children:[(0,t.jsx)("img",{src:o[e.desertionNo].popfile,alt:"Animal"}),h[e.desertionNo]&&(0,t.jsxs)("div",{children:[(0,t.jsx)("hr",{}),(0,t.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 1\uc21c\uc704 ]",(0,t.jsx)("br",{}),h[e.desertionNo].className1,(0,t.jsx)("br",{}),"(",h[e.desertionNo].probability1,"%)"]}),(0,t.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 2\uc21c\uc704 ]",(0,t.jsx)("br",{}),h[e.desertionNo].className2,(0,t.jsx)("br",{}),"(",h[e.desertionNo].probability2,"%)"]}),(0,t.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 3\uc21c\uc704 ]",(0,t.jsx)("br",{}),h[e.desertionNo].className3,(0,t.jsx)("br",{}),"(",h[e.desertionNo].probability3,"%)"]})]}),(0,t.jsxs)("div",{className:"analysis-results",children:[(0,t.jsx)("br",{}),(0,t.jsxs)("p",{children:["\ub098\uc774: ",o[e.desertionNo].age]}),(0,t.jsxs)("p",{children:["\ubb34\uac8c: ",o[e.desertionNo].weight]}),(0,t.jsxs)("p",{children:["\uacf5\uace0 \uc2dc\uc791 \ub0a0\uc9dc: ",N(o[e.desertionNo].noticeSdt)]}),(0,t.jsxs)("p",{children:["\uacf5\uace0 \uc885\ub8cc \ub0a0\uc9dc: ",N(o[e.desertionNo].noticeEdt)]}),(0,t.jsxs)("p",{children:["\uc131\ubcc4: ",o[e.desertionNo].sexCd]}),(0,t.jsxs)("p",{children:["\uc911\uc131\ud654 \uc5ec\ubd80: ",o[e.desertionNo].neuterYn]}),(0,t.jsxs)("p",{children:["\ud2b9\uc9d5: ",o[e.desertionNo].specialMark]}),(0,t.jsxs)("p",{children:["\ubcf4\ud638\uc18c \uc774\ub984: ",o[e.desertionNo].careNm]})]})]})},e.desertionNo)))})]})})}},790:()=>{},917:(e,s,n)=>{n.d(s,{A:()=>i});const i={}},492:()=>{}}]);
//# sourceMappingURL=805.04a8fc1a.chunk.js.map