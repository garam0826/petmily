"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[120],{9708:(e,t,a)=>{a.d(t,{A:()=>d});a(5043);var s=a(3216),n=a(5475),r=a(3003),i=a(2306),o=a(5547);a(8790);const l=a.p+"static/media/simple.7f599d6e71cfbe15300a.png";var c=a(579);const d=function(){const e=(0,s.Zp)(),t=(0,r.wA)(),a=i.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[a.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{t((0,o.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:(0,c.jsx)("img",{src:l,style:{width:"150px",height:"auto",marginTop:"-20px",marginLeft:"10px"}})}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(n.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(n.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(n.N_,{to:"/member/mypage/mycontent",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,c.jsx)(n.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},9961:(e,t,a)=>{a.r(t),a.d(t,{default:()=>u});var s=a(5043),n=a(7154),r=a(3216),i=(a(4696),a(9708)),o=(a(6917),a(5795)),l=a(9190),c=a(7561),d=a(8988),m=a(7447),p=a(579);const u=function(){const[e,t]=(0,s.useState)(""),[a,u]=(0,s.useState)(""),[h,g]=(0,s.useState)(""),[x,b]=(0,s.useState)(""),[v,y]=(0,s.useState)(""),[j,f]=(0,s.useState)(""),[A,w]=(0,s.useState)([]),[C,S]=(0,s.useState)([]),[N,k]=(0,s.useState)(""),_=(0,r.Zp)();return(0,s.useEffect)((()=>{(async()=>{try{const e=await n.A.get("/member/SignUp");w(e.data)}catch(e){console.error("Error fetching region list:",e)}})()}),[]),(0,p.jsxs)(s.Fragment,{children:[(0,p.jsx)("header",{children:(0,p.jsx)(i.A,{})}),(0,p.jsxs)("main",{children:[(0,p.jsx)("div",{"data-case":"text79",className:"userEL15637124",children:(0,p.jsx)("div",{className:"container_result",children:(0,p.jsx)("div",{className:"row","data-matrix-loop":"true","data-matrix-column":"1",children:(0,p.jsx)("div",{className:"col-xs-12 col-sm-12 col-md-12 item",children:(0,p.jsxs)("div",{className:"cl_caption","data-edit":"true","data-selector":".cl_caption",children:[(0,p.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("div",{children:(0,p.jsx)("span",{style:{fontFamily:"'Seoul Namsan'",fontSize:"30px"},children:" \ud68c\uc6d0\uac00\uc785 "})}),(0,p.jsx)("div",{children:(0,p.jsx)("span",{className:"fsize13",children:(0,p.jsxs)("span",{style:{color:"rgb(138, 139, 142)",fontFamily:"'Nanum Barun Gothic'"},children:[(0,p.jsx)("br",{}),"\uc800\ud76c\ub294 \ud68c\uc6d0\ub2d8\uc758 \ucde8\ud5a5 \uc815\ubcf4\ub97c \ubc14\ud0d5\uc73c\ub85c \uac15\uc544\uc9c0\ub97c \ucd94\ucc9c\ud569\ub2c8\ub2e4.",(0,p.jsx)("br",{}),"\uacc4\uc815\uc774 \uc5c6\uc73c\uc2e0 \ubd84\uc740 \ud68c\uc6d0\uac00\uc785 \ubd80\ud0c1\ub4dc\ub9ac\uaca0\uc2b5\ub2c8\ub2e4."]})})}),(0,p.jsx)("br",{}),(0,p.jsx)("br",{}),(0,p.jsx)("hr",{className:"fr-hr",style:{borderBottom:"2px solid #d6d7d8",width:"35px",margin:"0 auto"},align:"center"})]})})})})}),(0,p.jsxs)("form",{style:{marginTop:"10px"},className:"form",children:[(0,p.jsx)(o.A,{id:"standard-basic",label:"ID",variant:"standard",value:e,onChange:e=>t(e.target.value),style:{marginTop:"20px",width:"350px",height:"auto"}}),(0,p.jsx)(o.A,{id:"standard-basic",label:"Password",variant:"standard",type:"password",value:a,onChange:e=>u(e.target.value),style:{marginTop:"20px",width:"350px",height:"auto"}}),(0,p.jsx)(o.A,{id:"standard-basic",label:"\ub2c9\ub124\uc784",variant:"standard",value:h,onChange:e=>g(e.target.value),style:{marginTop:"20px",width:"350px",height:"auto"}}),(0,p.jsx)(o.A,{id:"standard-basic",label:"\uc774\uba54\uc77c",variant:"standard",value:x,onChange:e=>b(e.target.value),style:{marginTop:"20px",width:"350px",height:"auto"}}),(0,p.jsxs)(c.A,{variant:"standard",style:{marginTop:"20px",width:"350px",height:"auto"},children:[(0,p.jsx)(l.A,{id:"demo-simple-select-standard-label",children:"\uc9c0\uc5ed(\ub3c4/\ud2b9\ubcc4\uc2dc)"}),(0,p.jsx)(m.A,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",onChange:async e=>{const t=e.target.value;k(t),y(t);try{const e=await n.A.get("/member/SearchDistrict?reg_name=".concat(t));S(e.data)}catch(a){console.error("Error fetching district list:",a)}},label:"region",children:A.map((e=>(0,p.jsx)(d.A,{value:e.reg_name,children:e.reg_name},e.reg_code)))})]}),(0,p.jsxs)(c.A,{variant:"standard",style:{marginTop:"20px",width:"350px",height:"auto"},children:[(0,p.jsx)(l.A,{id:"demo-simple-select-standard-label",children:"\uc9c0\uc5ed(\uc2dc/\uad70)"}),(0,p.jsx)(m.A,{labelId:"demo-simple-select-standard-label",id:"demo-simple-select-standard",onChange:e=>{const t=e.target.value;f(t)},label:"district",children:C.map((e=>(0,p.jsx)(d.A,{value:e.dist_name,children:e.dist_name},e.dist_code)))})]})]}),(0,p.jsx)("button",{className:"button",onClick:async()=>{const t={mem_id:e,mem_pw:a,nickname:h,email:x,region:v,county_district:j};console.log(t);try{200===(await n.A.post("/member/SignUp",t)).status?(alert("\ud68c\uc6d0\uac00\uc785 \uc131\uacf5!"),_("/member/login")):alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}catch(s){console.error("\ud68c\uc6d0\uac00\uc785 \uc624\ub958:",s),alert("\ud68c\uc6d0\uac00\uc785\uc5d0 \uc2e4\ud328\ud588\uc2b5\ub2c8\ub2e4.")}},children:"Signup"})]})]})}},8988:(e,t,a)=>{a.d(t,{A:()=>C});var s=a(5043),n=a(8387),r=a(8610),i=a(6596),o=a(1475),l=a(8170),c=a(6870),d=a(8249),m=a(1347),p=a(408),u=a(5013),h=a(5849),g=a(2532);const x=(0,g.A)("MuiDivider",["root","absolute","fullWidth","inset","middle","flexItem","light","vertical","withChildren","withChildrenVertical","textAlignRight","textAlignLeft","wrapper","wrapperVertical"]);const b=(0,g.A)("MuiListItemIcon",["root","alignItemsFlexStart"]);const v=(0,g.A)("MuiListItemText",["root","multiline","dense","inset","primary","secondary"]);var y=a(2372);function j(e){return(0,y.Ay)("MuiMenuItem",e)}const f=(0,g.A)("MuiMenuItem",["root","focusVisible","dense","disabled","divider","gutters","selected"]);var A=a(579);const w=(0,l.Ay)(p.A,{shouldForwardProp:e=>(0,o.A)(e)||"classes"===e,name:"MuiMenuItem",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,a.dense&&t.dense,a.divider&&t.divider,!a.disableGutters&&t.gutters]}})((0,c.A)((e=>{let{theme:t}=e;return{...t.typography.body1,display:"flex",justifyContent:"flex-start",alignItems:"center",position:"relative",textDecoration:"none",minHeight:48,paddingTop:6,paddingBottom:6,boxSizing:"border-box",whiteSpace:"nowrap","&:hover":{textDecoration:"none",backgroundColor:(t.vars||t).palette.action.hover,"@media (hover: none)":{backgroundColor:"transparent"}},["&.".concat(f.selected)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,i.X4)(t.palette.primary.main,t.palette.action.selectedOpacity),["&.".concat(f.focusVisible)]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.focusOpacity,"))"):(0,i.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.focusOpacity)}},["&.".concat(f.selected,":hover")]:{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / calc(").concat(t.vars.palette.action.selectedOpacity," + ").concat(t.vars.palette.action.hoverOpacity,"))"):(0,i.X4)(t.palette.primary.main,t.palette.action.selectedOpacity+t.palette.action.hoverOpacity),"@media (hover: none)":{backgroundColor:t.vars?"rgba(".concat(t.vars.palette.primary.mainChannel," / ").concat(t.vars.palette.action.selectedOpacity,")"):(0,i.X4)(t.palette.primary.main,t.palette.action.selectedOpacity)}},["&.".concat(f.focusVisible)]:{backgroundColor:(t.vars||t).palette.action.focus},["&.".concat(f.disabled)]:{opacity:(t.vars||t).palette.action.disabledOpacity},["& + .".concat(x.root)]:{marginTop:t.spacing(1),marginBottom:t.spacing(1)},["& + .".concat(x.inset)]:{marginLeft:52},["& .".concat(v.root)]:{marginTop:0,marginBottom:0},["& .".concat(v.inset)]:{paddingLeft:36},["& .".concat(b.root)]:{minWidth:36},variants:[{props:e=>{let{ownerState:t}=e;return!t.disableGutters},style:{paddingLeft:16,paddingRight:16}},{props:e=>{let{ownerState:t}=e;return t.divider},style:{borderBottom:"1px solid ".concat((t.vars||t).palette.divider),backgroundClip:"padding-box"}},{props:e=>{let{ownerState:t}=e;return!t.dense},style:{[t.breakpoints.up("sm")]:{minHeight:"auto"}}},{props:e=>{let{ownerState:t}=e;return t.dense},style:{minHeight:32,paddingTop:4,paddingBottom:4,...t.typography.body2,["& .".concat(b.root," svg")]:{fontSize:"1.25rem"}}}]}}))),C=s.forwardRef((function(e,t){const a=(0,d.b)({props:e,name:"MuiMenuItem"}),{autoFocus:i=!1,component:o="li",dense:l=!1,divider:c=!1,disableGutters:p=!1,focusVisibleClassName:g,role:x="menuitem",tabIndex:b,className:v,...y}=a,f=s.useContext(m.A),C=s.useMemo((()=>({dense:l||f.dense||!1,disableGutters:p})),[f.dense,l,p]),S=s.useRef(null);(0,u.A)((()=>{i&&S.current&&S.current.focus()}),[i]);const N={...a,dense:C.dense,divider:c,disableGutters:p},k=(e=>{const{disabled:t,dense:a,divider:s,disableGutters:n,selected:i,classes:o}=e,l={root:["root",a&&"dense",t&&"disabled",!n&&"gutters",s&&"divider",i&&"selected"]},c=(0,r.A)(l,j,o);return{...o,...c}})(a),_=(0,h.A)(S,t);let I;return a.disabled||(I=void 0!==b?b:-1),(0,A.jsx)(m.A.Provider,{value:C,children:(0,A.jsx)(w,{ref:_,role:x,tabIndex:I,component:o,focusVisibleClassName:(0,n.A)(k.focusVisible,g),className:(0,n.A)(k.root,v),...y,ownerState:N,classes:k})})}))},4696:()=>{},8790:()=>{},6917:(e,t,a)=>{a.d(t,{A:()=>s});const s={}}}]);
//# sourceMappingURL=120.632eae56.chunk.js.map