"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[28],{9708:(e,s,n)=>{n.d(s,{A:()=>d});n(5043);var i=n(3216),r=n(5475),a=n(3003),l=n(2306),t=n(5547);n(8790);const c=n.p+"static/media/simple.7f599d6e71cfbe15300a.png";var o=n(579);const d=function(){const e=(0,i.Zp)(),s=(0,a.wA)(),n=l.A.getState();return(0,o.jsxs)("div",{className:"menubar",children:[n.isLoggedIn?(0,o.jsx)("button",{className:"login",onClick:()=>{s((0,t.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,o.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,o.jsxs)("ul",{children:[(0,o.jsx)("li",{onClick:()=>e("/main"),children:(0,o.jsx)("img",{src:c,style:{width:"150px",height:"auto",marginTop:"-20px",marginLeft:"10px"}})}),(0,o.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,o.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,o.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,o.jsxs)("li",{className:"dropdown",children:[(0,o.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,o.jsxs)("div",{className:"dropdown-content",children:[(0,o.jsx)(r.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,o.jsx)(r.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,o.jsx)(r.N_,{to:"/member/mypage/mycontent",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,o.jsx)(r.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},6805:(e,s,n)=>{n.r(s),n.d(s,{default:()=>o});var i=n(5043),r=n(3216),a=n(2306),l=n(9708),t=(n(8790),n(5492),n(7337)),c=n(579);const o=()=>{const e=(0,r.zy)(),s=a.A.getState(),n=s.isLoggedIn?s.userData.mem_id:null,{desertionNos:o}=e.state||{desertionNos:[]},[d,h]=(0,i.useState)([]),[x,m]=(0,i.useState)(!0),[u,j]=(0,i.useState)(null);return(0,i.useEffect)((()=>{n&&o.length>0&&(async()=>{try{m(!0),j(null),console.log("Sending desertionNos:",o),h(o),console.log(h(o))}catch(e){j("Failed to fetch matches"),console.error(e)}finally{m(!1)}})()}),[n,o]),(0,c.jsxs)("div",{children:[(0,c.jsx)("header",{children:(0,c.jsx)(l.A,{})}),(0,c.jsx)("main",{children:(0,c.jsx)(t.A,{matches:d,loading:x,error:u,title:"\ud0a4\uc6cc\ub4dc"})})]})}},7337:(e,s,n)=>{n.d(s,{A:()=>d});var i=n(5043),r=n(7154),a=n(2306),l=(n(9708),n(6917),n(8790),n(5492),n(3216)),t=n(1906),c=n(6779),o=n(579);const d=e=>{let{matches:s,loading:n,error:d,title:h}=e;const x=(0,l.Zp)(),m=a.A.getState(),u=m.isLoggedIn?m.userData.mem_id:null;console.log(s);const[j,p]=(0,i.useState)({}),[g,v]=(0,i.useState)({}),[f,N]=(0,i.useState)(null),[y,b]=(0,i.useState)(5);(0,i.useEffect)((()=>{s.forEach((e=>{j[e]||(async e=>{try{const s=await r.A.get("/api/animal/".concat(e));p((n=>({...n,[e]:s.data}))),await w(e,s.data.popfile)}catch(d){console.error("Error fetching animal info:",d),N("Error fetching animal info")}})(e)}))}),[s]);const w=async(e,s)=>{try{const n=await r.A.get("/api/animal/analyze?desertionNo=".concat(e,"&popfile=").concat(s));v((s=>({...s,[e]:n.data})))}catch(d){console.error("Error analyzing image:",d)}};if(n)return(0,o.jsx)("div",{children:"Loading..."});if(d)return(0,o.jsx)("div",{children:d});if(f)return(0,o.jsx)("div",{children:f});const _=e=>{if(!e)return"\ub0a0\uc9dc \uc815\ubcf4 \uc5c6\uc74c";const s=e.substring(0,4),n=e.substring(4,6),i=e.substring(6,8);return"".concat(s,"\ub144 ").concat(parseInt(n,10),"\uc6d4 ").concat(parseInt(i,10),"\uc77c")},S=e=>{switch(e){case"Y":return"O";case"N":return"X";case"U":return"\ubaa8\ub984";default:return""}},A=e=>{switch(e){case"M":return"\uc218\ucef7";case"F":return"\uc554\ucef7";case"Q":return"\ubbf8\uc0c1";default:return""}},k=(new Date).toISOString();return(0,o.jsx)("div",{children:(0,o.jsxs)("main",{className:"container_result",children:[(0,o.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,o.jsx)("div",{className:"container_result",children:(0,o.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,o.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,o.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,o.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:(0,o.jsx)("br",{})})})}),(0,o.jsx)("div",{children:(0,o.jsxs)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:["\uc720\uae30\uacac ",h," \ucd94\ucc9c \uacb0\uacfc"]})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\u200b"})})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\uc0ac\uc6a9\uc790\uc758 \ucde8\ud5a5\uc5d0 \ub9de\ub294 \uc720\uae30\uacac 5\ub9c8\ub9ac\uc785\ub2c8\ub2e4. \ub354 \ubcf4\uace0 \uc2f6\uc73c\uc2dc\uba74 \uc544\ub798 \ub354\ubcf4\uae30 \ubc84\ud2bc\uc744 \ub20c\ub7ec\uc8fc\uc138\uc694. (\ucd5c\ub300 15\ub9c8\ub9ac\uae4c\uc9c0 \uac00\ub2a5\ud569\ub2c8\ub2e4.)"})})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:[(0,o.jsx)("br",{}),"- \uc0ac\uc9c4 \uc704\uc5d0 \ub9c8\uc6b0\uc2a4\ub97c \uc62c\ub9ac\uba74, \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub97c \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4."]})})}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:["- \uac15\uc544\uc9c0\ub97c \ud074\ub9ad\ud558\uba74, \ud5a5\ud6c4 \uc131\uc7a5\uc2dc \ud2b9\uc131&\ubcf4\ud638\uc18c \ub4f1 \ub354 \uc790\uc138\ud55c \uc815\ubcf4\ub97c \ubcf4\uc2e4 \uc218 \uc788\uc2b5\ub2c8\ub2e4.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]})})}),(0,o.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,o.jsx)("div",{children:(0,o.jsx)("br",{})})]})})})})}),0===s.length?(0,o.jsx)("div",{children:"No matches found"}):(0,o.jsx)("div",{className:"grid-container_result",children:s.slice(0,y).map(((e,s)=>{var n,i,a,l,t,c,d,h,m;return(0,o.jsx)("div",{className:"card_result",style:{height:"730px"},children:j&&(0,o.jsxs)("div",{className:"result",children:[(0,o.jsx)("h3",{className:"h3_result",children:s+1}),(0,o.jsx)("img",{src:null===(n=j[e])||void 0===n?void 0:n.popfile,alt:"Animal"}),g[e]&&(0,o.jsxs)("div",{children:[(0,o.jsx)("hr",{}),(0,o.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 1\uc21c\uc704 ]",(0,o.jsx)("br",{}),g[e].className1,(0,o.jsx)("br",{}),"(",(100*g[e].probability1).toFixed(2),"%)"]}),(0,o.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 2\uc21c\uc704 ]",(0,o.jsx)("br",{}),g[e].className2,(0,o.jsx)("br",{}),"(",(100*g[e].probability2).toFixed(2),"%)"]}),(0,o.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 3\uc21c\uc704 ]",(0,o.jsx)("br",{}),g[e].className3,(0,o.jsx)("br",{}),"(",(100*g[e].probability3).toFixed(2),"%)"]})]}),(0,o.jsx)("button",{className:"like_button",onClick:()=>(e=>{r.A.post("/favorites/add?memId=".concat(u,"&desertionNo=").concat(e),{mem_id:u,desertionNo:e,created_at:k}).then((e=>{console.log("Favorite added successfully"),alert("\ucc1c \ubaa9\ub85d\uc5d0 \ub2f4\uacbc\uc2b5\ub2c8\ub2e4!")})).catch((e=>{console.error("Error adding favorite: ",e)}))})(e),style:{width:"100%"},children:"\ucc1c \ucd94\uac00"}),(0,o.jsx)("div",{className:"analysis-results",onClick:()=>{x("/animal/detail",{state:{desertionNo:e}})},children:(0,o.jsxs)("div",{className:"analysis_info-result",children:[(0,o.jsx)("br",{}),(0,o.jsxs)("p",{children:["\ubc1c\uacac \ub0a0\uc9dc: ",_(null===(i=j[e])||void 0===i?void 0:i.happenDt)]}),(0,o.jsxs)("p",{children:["\ubc1c\uacac \uc7a5\uc18c: ",null===(a=j[e])||void 0===a?void 0:a.happenPlace]}),(0,o.jsxs)("p",{children:["\ub098\uc774: ",null===(l=j[e])||void 0===l?void 0:l.age]}),(0,o.jsxs)("p",{children:["\ubb34\uac8c: ",null===(t=j[e])||void 0===t?void 0:t.weight]}),(0,o.jsxs)("p",{children:["\uacf5\uace0 \uc2dc\uc791 \ub0a0\uc9dc: ",null===(c=j[e])||void 0===c?void 0:c.noticeSdt]}),(0,o.jsxs)("p",{children:["\uacf5\uace0 \uc885\ub8cc \ub0a0\uc9dc: ",null===(d=j[e])||void 0===d?void 0:d.noticeEdt]}),(0,o.jsxs)("p",{children:["\uc131\ubcc4: ",A(null===(h=j[e])||void 0===h?void 0:h.sexCd)]}),(0,o.jsxs)("p",{children:["\uc911\uc131\ud654 \uc5ec\ubd80: ",S(null===(m=j[e])||void 0===m?void 0:m.neuterYn)]})]})})]})},e)}))}),y<s.length&&(0,o.jsx)(c.A,{style:{display:"flex",justifyContent:"center"},children:(0,o.jsx)(t.A,{variant:"contained",style:{marginTop:"5px",width:"300px"},onClick:()=>{b((e=>e+5))},children:"\ub354\ubcf4\uae30"})})]})})}},8790:()=>{},6917:(e,s,n)=>{n.d(s,{A:()=>i});const i={}},5492:()=>{}}]);
//# sourceMappingURL=28.993cfb19.chunk.js.map