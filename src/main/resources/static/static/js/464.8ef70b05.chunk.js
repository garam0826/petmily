"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[464],{2131:(s,e,i)=>{i.d(e,{A:()=>t});i(5043);var l=i(3216),r=i(5475),n=i(3003),a=i(2306),c=i(5547),d=(i(8790),i(579));const t=function(){const s=(0,l.Zp)(),e=(0,n.wA)(),i=a.A.getState();return(0,d.jsxs)("div",{className:"menubar",children:[i.isLoggedIn?(0,d.jsx)("button",{className:"login",onClick:()=>{e((0,c.ri)()),s("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,d.jsx)("button",{className:"login",onClick:()=>s("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,d.jsxs)("ul",{children:[(0,d.jsx)("li",{onClick:()=>s("/main"),children:"\ud648"}),(0,d.jsx)("li",{onClick:()=>s("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,d.jsx)("li",{onClick:()=>s("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,d.jsx)("li",{onClick:()=>s("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,d.jsxs)("li",{className:"dropdown",children:[(0,d.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,d.jsxs)("div",{className:"dropdown-content",children:[(0,d.jsx)(r.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,d.jsx)(r.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,d.jsx)(r.N_,{to:"/member/mypage/mycontent",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,d.jsx)(r.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},464:(s,e,i)=>{i.r(e),i.d(e,{default:()=>a});i(5043);var l=i(3216),r=i(2131),n=(i(5492),i(6917),i(8790),i(579));const a=()=>{const s=(0,l.zy)(),{image:e,result:i}=s.state||{},a=(s=>s.split("\n").map((s=>{const[e,i]=s.split(",");return{breed:e,probability:parseFloat(i)}})))(i);return(0,n.jsxs)("div",{children:[(0,n.jsx)(r.A,{}),(0,n.jsxs)("main",{className:"container_result",children:[(0,n.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,n.jsx)("div",{className:"container_result",children:(0,n.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,n.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,n.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,n.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"fsize13",children:(0,n.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:(0,n.jsx)("br",{})})})}),(0,n.jsx)("div",{children:(0,n.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:"\uc774\ubbf8\uc9c0 \ubd84\uc11d \uacb0\uacfc"})}),(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"fsize13",children:(0,n.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\u200b"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("span",{className:"fsize13",children:(0,n.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\ubd84\uc11d\ub41c \uc774\ubbf8\uc9c0\ub97c \uae30\ubc18\uc73c\ub85c \ud488\uc885\uc744 \uc608\uce21\ud569\ub2c8\ub2e4. (\ucd5c\ub300 3\uac1c\uc758 \ud488\uc885\uc774 \ud45c\uc2dc\ub429\ub2c8\ub2e4.)"})})}),(0,n.jsx)("div",{children:(0,n.jsx)("br",{})}),(0,n.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,n.jsx)("div",{children:(0,n.jsx)("br",{})})]})})})})}),(0,n.jsx)("div",{className:"image-analysis_result",children:(0,n.jsxs)("div",{className:"img_result",children:[(0,n.jsx)("h3",{className:"uploadimg_result",children:"\ubd84\uc11d \uacb0\uacfc"}),e&&(0,n.jsx)("img",{src:e,alt:"\ubd84\uc11d \uc774\ubbf8\uc9c0",style:{width:"300px",height:"300px"}}),a.length>0&&(0,n.jsxs)("div",{children:[(0,n.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 1\uc21c\uc704 ]",(0,n.jsx)("br",{}),a[0].breed.replace(/_/g," "),(0,n.jsx)("br",{}),"(",(100*a[0].probability).toFixed(2),"%)"]}),a.length>1&&(0,n.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 2\uc21c\uc704 ]",(0,n.jsx)("br",{}),a[1].breed.replace(/_/g," "),(0,n.jsx)("br",{}),"(",(100*a[1].probability).toFixed(2),"%)"]}),a.length>2&&(0,n.jsxs)("p",{children:["[ \ud488\uc885 \ube44\uc728 3\uc21c\uc704 ]",(0,n.jsx)("br",{}),a[2].breed.replace(/_/g," "),(0,n.jsx)("br",{}),"(",(100*a[2].probability).toFixed(2),"%)"]})]})]})})]})]})}},8790:()=>{},6917:(s,e,i)=>{i.d(e,{A:()=>l});const l={}},5492:()=>{}}]);
//# sourceMappingURL=464.8ef70b05.chunk.js.map