"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[373],{2131:(e,a,l)=>{l.d(a,{A:()=>o});l(5043);var t=l(3216),s=l(5475),n=l(3003),i=l(2306),r=l(5547),c=(l(8790),l(579));const o=function(){const e=(0,t.Zp)(),a=(0,n.wA)(),l=i.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[l.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{a((0,r.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:"\ud648"}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsx)("li",{onClick:()=>e("/"),children:"\uc720\uae30\uacac \uc785\uc591 \uacfc\uc815"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(s.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(s.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(s.N_,{to:"/member/mypage",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"})]})]})]})]})}},9373:(e,a,l)=>{l.r(a),l.d(a,{default:()=>d});var t=l(5043),s=l(7154),n=l(3216),i=l(2306),r=l(2131),c=l(6917),o=l(579);const d=()=>{const e=i.A.getState(),a=e.isLoggedIn?e.userData.mem_id:null,l=(0,n.Zp)(),[d,x]=(0,t.useState)({memId:a||"",affectionateWithFamily:1,goodWithYoungChildren:1,goodWithOtherDogs:1,sheddingLevel:1,coatGroomingFrequency:1,droolingLevel:1,opennessToStrangers:1,watchdogProtectiveNature:1,playfulnessLevel:1,adaptabilityLevel:1,trainabilityLevel:1,barkingLevel:1,energyLevel:1,mentalStimulationNeeds:1});(0,t.useEffect)((()=>{x((e=>({...e,memId:a})))}),[a]);const u=e=>{let a=[];switch(e){case"affectionateWithFamily":a=[{value:1,text:"\uac70\uc758"},{value:2,text:"\uac00\ub054"},{value:3,text:"\ubcf4\ud1b5"},{value:4,text:"\ub54c\ub54c\ub85c"},{value:5,text:"\ub300\ubd80\ubd84"}];break;case"goodWithYoungChildren":a=[{value:1,text:"\uc544\uc774\ub4e4\uacfc\uc758 \uc0c1\ud638\uc791\uc6a9\uc744 \uc120\ud638\ud558\uc9c0 \uc54a\uc74c"},{value:2,text:"\uc544\uc774\ub4e4\uacfc\ub294 \uac70\uc758 \uc0c1\ud638\uc791\uc6a9\ud558\uc9c0 \uc54a\uc74c"},{value:3,text:"\uc870\uae08\uc740 \uc870\uc2ec\uc2a4\ub7ec\uc6cc\ub3c4 \ub428"},{value:4,text:"\ucd5c\uc18c\ud55c\uc758 \uc0c1\ud638\uc791\uc6a9\uc774 \uc788\uc5b4\uc57c \ud568"},{value:5,text:"\ub9e4\uc6b0 \uce5c\uc808\ud558\uace0 \uc778\ub0b4\uc2ec\uc774 \uc788\uc5b4\uc57c \ud568"}];break;case"goodWithOtherDogs":a=[{value:1,text:"\uc0ac\uad50\uc131\uc774 \ubd80\uc871\ud568"},{value:2,text:"\uc18c\uadf9\uc801\uc778"},{value:3,text:"\ubcf4\ud1b5"},{value:4,text:"\uc88b\uc74c"},{value:5,text:"\ub9e4\uc6b0 \uc88b\uc74c"}];break;case"sheddingLevel":a=[{value:1,text:"\uc804\ud600 \uc6a9\uc778 \ubabb\ud568"},{value:2,text:"\ub4dc\ubb3c\uac8c\ub294 \uad1c\ucc2e\uc74c"},{value:3,text:"\ubcf4\ud1b5"},{value:4,text:"\uc790\uc8fc\ub294 \uad1c\ucc2e\uc73c\ub098 \uc815\uae30\uc801\uc778 \uccad\uc18c \ud544\uc694"},{value:5,text:"\ub9ce\uc774 \ubb3b\uc5b4\ub3c4 \uc804\ud600 \ubb38\uc81c \uc5c6\uc74c"}];break;case"coatGroomingFrequency":a=[{value:1,text:"\uc804\ud600 \uad00\ub9ac\ud560 \ud544\uc694 \uc5c6\uc74c"},{value:2,text:"\uac70\uc758 \uad00\ub9ac\ud560 \ud544\uc694 \uc5c6\uc74c"},{value:3,text:"\ubcf4\ud1b5"},{value:4,text:"\uc77c\uc8fc\uc77c\uc5d0 \uba87 \ubc88"},{value:5,text:"\ub9e4\uc77c"}];break;case"droolingLevel":a=[{value:1,text:"\uc804\ud600 \uc6a9\uc778 \ubabb\ud568"},{value:2,text:"\uac00\ub054\uc740 \uad1c\ucc2e\uc74c"},{value:3,text:"\ubcf4\ud1b5 \uc218\uc900\uc774\uba74 \uac00\ub2a5"},{value:4,text:"\uc790\uc8fc \ub2e6\uc544\uc8fc\uba74 \ubb38\uc81c \uc5c6\uc74c"},{value:5,text:"\ub9ce\uc774 \ud758\ub824\ub3c4 \uad1c\ucc2e\uc74c"}];break;case"opennessToStrangers":a=[{value:1,text:"\ub0af\uc120 \uc0ac\ub78c\uc5d0\uac8c \ub9e4\uc6b0 \uacbd\uacc4\ud568"},{value:2,text:"\ub300\ubd80\ubd84 \uc0ac\ub78c\uc744 \uacbd\uacc4\ud568"},{value:3,text:"\uc870\uae08\uc740 \uc870\uc2ec\uc2a4\ub7ec\uc6cc\ub3c4 \ub428"},{value:4,text:"\uc801\ub2f9\ud788 \uac1c\ubc29\uc801"},{value:5,text:"\ub9e4\uc6b0 \uce5c\uc808\ud558\uace0 \ubaa8\ub4e0 \uc774\uc5d0\uac8c \uac1c\ubc29\uc801"}];break;case"watchdogProtectiveNature":a=[{value:1,text:"\uc804\ud600 \ud544\uc694 \uc5c6\uc74c"},{value:2,text:"\uc57d\ud568"},{value:3,text:"\ubcf4\ud1b5"},{value:4,text:"\uc0c1\ub2f9\ud568"},{value:5,text:"\ub9e4\uc6b0 \uac15\ud568"}];break;case"playfulnessLevel":case"adaptabilityLevel":a=[{value:1,text:"\ub9e4\uc6b0 \ub0ae\uc74c"},{value:2,text:"\ub0ae\uc74c"},{value:3,text:"\ubcf4\ud1b5"},{value:4,text:"\ub192\uc74c"},{value:5,text:"\ub9e4\uc6b0 \ub192\uc74c"}];break;case"trainabilityLevel":a=[{value:1,text:"\ud6c8\ub828\uc5d0 \ub530\ub978 \ud559\uc2b5\uc774 \uc804\ud600 \uc548\ub428"},{value:2,text:"\ud559\uc2b5\uc774 \uc798 \uc548\ub428"},{value:3,text:"\ubcf4\ud1b5"},{value:4,text:"\ub300\uccb4\ub85c \uc798\ub428"},{value:5,text:"\ud6c8\ub828\uc2dc\uac04\uc5d0 \ube44\ub840\ud574 \ud559\uc2b5\uc774 \uc798\ub428"}];break;case"barkingLevel":a=[{value:1,text:"\ub9e4\uc6b0 \uc790\uc8fc \uc9d6\uc5b4\ub3c4 \uad1c\ucc2e\uc74c"},{value:2,text:"\uc790\uc8fc \ub4e3\ub294 \uac83\uc774 \ubb38\uc81c \uc5c6\uc74c"},{value:3,text:"\ubcf4\ud1b5"},{value:4,text:"\ub4dc\ubb3c\uac8c\ub294 \uad1c\ucc2e\uc74c"},{value:5,text:"\uc804\ud600 \uc6a9\uc778 \ubabb\ud568"}];break;case"energyLevel":a=[{value:1,text:"2~3\uc8fc\uc5d0 \ud55c\ubc88"},{value:2,text:"\uc77c\uc8fc\uc77c"},{value:3,text:"2~3\uc77c\uc5d0 \ud55c \ubc88"},{value:4,text:"\ub9e4\uc77c"},{value:5,text:"\ud558\ub8e8 2\ubc88 \uc774\uc0c1"}];break;case"mentalStimulationNeeds":a=[{value:1,text:"\uac70\uc758 \uc2dc\ucf1c\uc8fc\uc9c0 \ubabb\ud568"},{value:2,text:"\uc6d4 1-2\ud68c \uc815\ub3c4"},{value:3,text:"\uc8fc 1\ud68c \uc815\ub3c4"},{value:4,text:"\uc8fc 3-4\ud68c \uc815\ub3c4"},{value:5,text:"\ub9e4\uc77c"}];break;default:a=[1,2,3,4,5]}return(0,o.jsx)("div",{style:{display:"flex",flexWrap:"wrap",gap:"10px",marginTop:"20px"},children:a.map((a=>(0,o.jsx)("button",{type:"button",onClick:()=>((e,a)=>{x({...d,[e]:a})})(e,a.value),style:{backgroundColor:d[e]===a.value?"darkolivegreen":"gray",color:"white",margin:"3px",border:"1px solid #493e2c",borderRadius:"5px",cursor:"pointer",flex:"1 1 calc(20% - 20px)",boxSizing:"border-box"},className:"button",children:a.text},a.value)))})};return(0,o.jsxs)("div",{children:[(0,o.jsx)("header",{children:(0,o.jsx)(r.A,{})}),(0,o.jsxs)("main",{children:[(0,o.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,o.jsx)("div",{style:c.A.container,children:(0,o.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,o.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,o.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,o.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:(0,o.jsx)("br",{})})})}),(0,o.jsx)("br",{}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:"\uc9c8\ubb38\uc5d0 \ub530\ub978 \ucde8\ud5a5 \uace0\ub974\uae30"})}),(0,o.jsxs)("div",{children:[(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsx)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:"\u200b"})}),(0,o.jsx)("br",{})]}),(0,o.jsx)("div",{children:(0,o.jsx)("span",{className:"fsize13",children:(0,o.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:[(0,o.jsx)("br",{}),"\uac01 \uc9c8\ubb38(\ud2b9\uc131)\ub2f9 \uc120\ud0dd\ud558\uc2e0 \ub2f5\uc744 \uae30\ubc18\uc73c\ub85c \ucde8\ud5a5\uc5d0 \ub9de\ub294 \uc720\uae30\uacac\uc744 \ucd94\ucc9c\ud574\ub4dc\ub9bd\ub2c8\ub2e4.",(0,o.jsx)("br",{}),(0,o.jsx)("br",{}),(0,o.jsx)("br",{})]})})}),(0,o.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"})]})})})})}),(0,o.jsxs)("form",{children:[(0,o.jsxs)("div",{className:"container_question",children:[(0,o.jsx)("label",{className:"label",children:"Q1. \ubc18\ub824\uacac\uc758 \uac00\uc871\uc5d0\uac8c \uc5b4\ub290 \uc815\ub3c4\uc758 \uc560\uc815\uc744 \ubcf4\uc5ec\uc8fc\uba74 \uc88b\uc744 \uac83 \uac19\ub2e4\uace0 \uc0dd\uac01\ud558\uc2dc\ub098\uc694?"}),u("affectionateWithFamily")]}),(0,o.jsxs)("div",{className:"container_question",children:[(0,o.jsx)("label",{className:"label",children:"Q2. \uc5b4\ub9b0 \uc544\uc774\ub4e4\uacfc\uc758 \uc0c1\ud638\uc791\uc6a9\uc5d0\uc11c \ub2f9\uc2e0\uc774 \uae30\ub300\ud558\ub294 \ubc18\ub824\uacac\uc758 \ud2b9\uc131\uc740 \ubb34\uc5c7\uc785\ub2c8\uae4c? \ud639\uc740 \ubbf8\ub798\uc758 \uc790\ub140 \uacc4\ud68d\uc744 \uace0\ub824\ud558\uace0 \uacc4\uc2ed\ub2c8\uae4c?"}),u("goodWithYoungChildren")]}),(0,o.jsxs)("div",{className:"container_question",children:[(0,o.jsx)("label",{className:"label",children:"Q3. \ub2e4\ub978 \uac15\uc544\uc9c0\ub4e4\uacfc\uc758 \uc0ac\ud68c\uc131 \uc218\uc900\uc774 \uc5b4\ub290\uc815\ub3c4 \ub418\uc5c8\uc73c\uba74 \uc88b\uaca0\ub098\uc694?"}),u("goodWithOtherDogs")]}),(0,o.jsxs)("div",{className:"container_question",children:[(0,o.jsx)("label",{className:"label",children:"Q4. \ud138 \ube60\uc9d0 \uc815\ub3c4\ub294 \uc5b4\ub290 \uc815\ub3c4\uae4c\uc9c0 \ubcf4\uace0 \uacc4\uc2e0\uac00\uc694?"}),u("sheddingLevel")]}),(0,o.jsxs)("div",{className:"container_question",children:[(0,o.jsx)("label",{className:"label",children:"Q5. \ubc18\ub824\uacac\uc758 \ud138\uc744 \uc5bc\ub9c8\ub098 \uc790\uc8fc \uad00\ub9ac\ud574\uc8fc\uc2e4 \uc218 \uc788\ub098\uc694?"}),u("coatGroomingFrequency")]}),(0,o.jsxs)("div",{className:"container_question",children:[(0,o.jsx)("label",{className:"label",children:"Q6. \ubc18\ub824\uacac\uc758 \uce68 \ud758\ub9bc \uc815\ub3c4\ub97c \uc5b4\ub290 \uc218\uc900\uae4c\uc9c0 \uc6a9\uc778\ud560 \uc218 \uc788\ub098\uc694?"}),u("droolingLevel")]}),(0,o.jsxs)("div",{className:"container_question",children:[(0,o.jsx)("label",{className:"label",children:"Q7. \ub2f9\uc2e0\uc758 \ubc18\ub824\uacac\uc774 \ub0af\uc120 \uc0ac\ub78c\ub4e4\uc5d0\uac8c \uc5bc\ub9c8\ub098 \uac1c\ubc29\uc801\uc774\uc5c8\uc73c\uba74 \uc88b\uaca0\uc2b5\ub2c8\uae4c? \uc8fc\uac70 \ud658\uacbd\ub3c4 \uace0\ub824\ud574 \uc8fc\uc138\uc694"}),u("opennessToStrangers")]}),(0,o.jsxs)("div",{className:"container_question",children:[(0,o.jsx)("label",{className:"label",children:"Q8. \uacbd\uacc4\ub098 \ubcf4\ud638 \ubcf8\ub2a5\uc774 \uac15\ud55c \ubc18\ub824\uacac\uc744 \uc120\ud638\ud558\uc2dc\ub098\uc694?"}),u("watchdogProtectiveNature")]}),(0,o.jsxs)("div",{className:"container_question",children:[(0,o.jsx)("label",{className:"label",children:"Q9. \ubc18\ub824\uacac\uc758 \uc7a5\ub09c\uae30 \uc218\uc900\uc740 \uc5b4\ub290 \uc815\ub3c4\uac00 \uc774\uc0c1\uc801\uc778\uac00\uc694?"}),u("playfulnessLevel")]}),(0,o.jsxs)("div",{className:"container_question",children:[(0,o.jsx)("label",{className:"label",children:"Q10. \uc9d1\uc758 \ubcc0\ud654\ub098 \uac70\uc8fc\uc9c0\uc758 \uc774\ub3d9\uacfc \uac19\uc740 \ub0af\uc120 \uc0c1\ud669\uc5d0 \ub300\ud558\uc5ec, \ubc18\ub824\uacac\uc758 \uc801\uc751\ub825 \uc218\uc900\uc740 \uc5b4\ub5a0\ud574\uc57c \ud55c\ub2e4\uace0 \uc0dd\uac01\ud558\uc2ed\ub2c8\uae4c?"}),u("adaptabilityLevel")]}),(0,o.jsxs)("div",{className:"container_question",children:[(0,o.jsx)("label",{className:"label",children:"Q11. \ud6c8\ub828 \uc2dc\uac04\uc5d0 \ube44\ud574, \ud6c8\ub828\uc774 \uc798 \uc548\ub418\uc5b4\ub3c4 \uc5b4\ub290 \uc815\ub3c4\uae4c\uc9c0 \uc6a9\uc778\uc774 \uac00\ub2a5\ud55c\uac00\uc694?"}),u("trainabilityLevel")]}),(0,o.jsxs)("div",{className:"container_question",children:[(0,o.jsx)("label",{className:"label",children:"Q12. \ubc18\ub824\uacac\uc758 \uc9d6\ub294 \ud589\ub3d9\uc744 \uc5b4\ub290 \uc815\ub3c4\uae4c\uc9c0 \uc6a9\uc778\ud560 \uc218 \uc788\ub098\uc694? \uc790\uc2e0\uc758 \uc8fc\uac70\ud658\uacbd\ub3c4 \uace0\ub824\ud558\uc5ec \ub2f5\ubcc0\ud574\uc8fc\uc138\uc694."}),u("barkingLevel")]}),(0,o.jsxs)("div",{className:"container_question",children:[(0,o.jsx)("label",{className:"label",children:"Q13. \ubc18\ub824\uacac \uc0b0\ucc45 \uc815\ub3c4\ub294 \uc5b4\ub290 \uc815\ub3c4\uac00 \uad1c\ucc2e\uc740\uac00\uc694?"}),u("energyLevel")]}),(0,o.jsxs)("div",{className:"container_question",children:[(0,o.jsx)("label",{className:"label",children:"Q14. \ub9cc\uc57d \ubc18\ub824\uacac\uc774 \uc788\ub2e4\uba74, \uc5bc\ub9c8\ub098 \ub9ce\uc740 \uc8fc\uae30\ub85c \uc0c8\ub85c\uc6b4 \uacbd\ud5d8\uc744 \uc2dc\ucf1c\uc904 \uc218 \uc788\uc2b5\ub2c8\uae4c?"}),u("mentalStimulationNeeds")]}),(0,o.jsx)("button",{className:"button",onClick:async e=>{e.preventDefault();try{console.log(d);const e=await s.A.post("/member/profile/save",d,{headers:{"Content-Type":"application/json"}});console.log(e.data),l("/recommend/question/result")}catch(a){console.error("Error saving user characteristics:",a),a.response&&console.error("Error response data:",a.response.data)}},children:"Save"})]})]})]})}},8790:()=>{},6917:(e,a,l)=>{l.d(a,{A:()=>t});const t={}}}]);
//# sourceMappingURL=373.4b4c6efa.chunk.js.map