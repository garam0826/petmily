"use strict";(self.webpackChunkfrontend=self.webpackChunkfrontend||[]).push([[226],{9708:(e,t,a)=>{a.d(t,{A:()=>d});a(5043);var n=a(3216),o=a(5475),i=a(3003),r=a(2306),l=a(5547);a(8790);const s=a.p+"static/media/simple.7f599d6e71cfbe15300a.png";var c=a(579);const d=function(){const e=(0,n.Zp)(),t=(0,i.wA)(),a=r.A.getState();return(0,c.jsxs)("div",{className:"menubar",children:[a.isLoggedIn?(0,c.jsx)("button",{className:"login",onClick:()=>{t((0,l.ri)()),e("/main")},children:"\ub85c\uadf8\uc544\uc6c3"}):(0,c.jsx)("button",{className:"login",onClick:()=>e("/member/login"),children:"\ub85c\uadf8\uc778"}),(0,c.jsxs)("ul",{children:[(0,c.jsx)("li",{onClick:()=>e("/main"),children:(0,c.jsx)("img",{src:s,style:{width:"150px",height:"auto",marginTop:"-20px",marginLeft:"10px"}})}),(0,c.jsx)("li",{onClick:()=>e("/animal"),children:"\ubcf4\ud638 \uc911\uc778 \ub3d9\ubb3c"}),(0,c.jsx)("li",{onClick:()=>e("/recommend"),children:"\ubc18\ub824\uacac \ucd94\ucc9c"}),(0,c.jsx)("li",{onClick:()=>e("/board/list"),children:"\uac8c\uc2dc\ud310"}),(0,c.jsxs)("li",{className:"dropdown",children:[(0,c.jsx)("span",{children:"\ud68c\uc6d0 \uc815\ubcf4"}),(0,c.jsxs)("div",{className:"dropdown-content",children:[(0,c.jsx)(o.N_,{to:"/member/mypage",children:"\uc815\ubcf4 \ud655\uc778 \ubc0f \uc218\uc815"}),(0,c.jsx)(o.N_,{to:"/member/mypage/mycart",children:"\ucc1c \ubaa9\ub85d"}),(0,c.jsx)(o.N_,{to:"/member/mypage/mycontent",children:"\ub0b4\uac00 \uc791\uc131\ud55c \uae00\uacfc \ub313\uae00"}),(0,c.jsx)(o.N_,{to:"/member/mypage/imgUpload",children:"\uc774\ubbf8\uc9c0 \uc5c5\ub85c\ub4dc"})]})]})]})]})}},387:(e,t,a)=>{a.r(t),a.d(t,{default:()=>h});var n=a(5043),o=a(7154),i=a(3216),r=a(2306),l=(a(9708),a(6917),a(7261),a(5795)),s=a(9190),c=a(7561),d=a(2880),p=a(1906),m=a(579);const h=function(){const[e,t]=(0,n.useState)(null),[a,h]=(0,n.useState)({mem_id:"",mem_pw:"",nickname:"",email:"",region:"",county_district:"",reg_date:"",edit_date:""}),[u,v]=(0,n.useState)(""),[g,x]=(0,n.useState)(""),y=((0,i.Zp)(),r.A.getState()),b=y.isLoggedIn?y.userData.mem_id:null,[S,f]=(0,n.useState)(""),[z,w]=(0,n.useState)(""),[A,C]=(0,n.useState)([]),[j,B]=(0,n.useState)([]),[I,k]=(0,n.useState)(""),R=e=>{const{name:t,value:n}=e.target;h((e=>({...e,[t]:n}))),console.log(a)};return(0,n.useEffect)((()=>{(async()=>{try{const e=await o.A.get("/member/MyPage?mem_id=".concat(b));h(e.data),console.log(b),t(null)}catch(e){t("\uc0ac\uc6a9\uc790 \uc815\ubcf4\ub97c \uac00\uc838\uc624\ub294 \uc911\uc5d0 \uc624\ub958\uac00 \ubc1c\uc0dd\ud588\uc2b5\ub2c8\ub2e4.")}})();(async()=>{try{const e=await o.A.get("/member/SignUp");C(e.data)}catch(e){console.error("Error fetching region list:",e)}})()}),[]),(0,m.jsx)(n.Fragment,{children:(0,m.jsxs)("main",{children:[(0,m.jsxs)("form",{className:"form",children:[(0,m.jsx)("h2",{children:"\ud68c\uc6d0 \uc815\ubcf4 \uc218\uc815"}),(0,m.jsx)(l.A,{id:"standard-basic",label:"\ube44\ubc00\ubc88\ud638",variant:"standard",name:"mem_pw",value:a.mem_pw,style:{marginTop:"20px",width:"300px",height:"auto"},onChange:R}),(0,m.jsx)(l.A,{id:"standard-basic",label:"\ub2c9\ub124\uc784",variant:"standard",name:"nickname",value:a.nickname,style:{marginTop:"20px",width:"300px",height:"auto"},onChange:R}),(0,m.jsx)(l.A,{id:"standard-basic",label:"\uc774\uba54\uc77c",variant:"standard",name:"email",value:a.email,style:{marginTop:"20px",width:"300px",height:"auto"},onChange:R}),(0,m.jsxs)(c.A,{fullWidth:!0,style:{marginTop:"20px",width:"300px",height:"auto"},children:[(0,m.jsx)(s.A,{variant:"standard",htmlFor:"uncontrolled-native",children:"\uc9c0\uc5ed(\ub3c4/\ud2b9\ubcc4\uc2dc)"}),(0,m.jsxs)(d.A,{defaultValue:100,inputProps:{name:"age",id:"uncontrolled-native"},children:[(0,m.jsx)("option",{value:100,children:a.region}),A.map((e=>(0,m.jsx)("option",{value:e.reg_name,children:e.reg_name},e.reg_code)))]})]}),(0,m.jsxs)(c.A,{fullWidth:!0,style:{marginTop:"20px",width:"300px",height:"auto"},children:[(0,m.jsx)(s.A,{variant:"standard",htmlFor:"uncontrolled-native",children:"\uc9c0\uc5ed(\uc2dc/\uad70)"}),(0,m.jsx)(d.A,{defaultValue:100,inputProps:{name:"age",id:"uncontrolled-native"},children:(0,m.jsx)("option",{value:100,children:a.county_district})})]}),(0,m.jsx)(p.A,{variant:"contained",style:{marginTop:"20px",width:"300px"},onClick:async()=>{console.log(a);try{await o.A.put("/member/MyPage/Update",a);alert("\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815 \uc131\uacf5!")}catch(e){console.error("Error updating member info:",e),alert(e),v("\ud68c\uc6d0\uc815\ubcf4 \uc218\uc815 \uc2e4\ud328")}},children:"\uc218\uc815 \uc644\ub8cc\ud558\uae30"})]}),u&&(0,m.jsx)("p",{children:u})]})})}},1906:(e,t,a)=>{a.d(t,{A:()=>j});var n=a(5043),o=a(8387),i=a(3030),r=a(8610),l=a(6596),s=a(1475),c=a(1192),d=a(6870),p=a(8249),m=a(2790),h=a(6803),u=a(2445),v=a(2532),g=a(552);function x(e){return(0,g.Ay)("MuiButton",e)}const y=(0,v.A)("MuiButton",["root","text","textInherit","textPrimary","textSecondary","textSuccess","textError","textInfo","textWarning","outlined","outlinedInherit","outlinedPrimary","outlinedSecondary","outlinedSuccess","outlinedError","outlinedInfo","outlinedWarning","contained","containedInherit","containedPrimary","containedSecondary","containedSuccess","containedError","containedInfo","containedWarning","disableElevation","focusVisible","disabled","colorInherit","colorPrimary","colorSecondary","colorSuccess","colorError","colorInfo","colorWarning","textSizeSmall","textSizeMedium","textSizeLarge","outlinedSizeSmall","outlinedSizeMedium","outlinedSizeLarge","containedSizeSmall","containedSizeMedium","containedSizeLarge","sizeMedium","sizeSmall","sizeLarge","fullWidth","startIcon","endIcon","icon","iconSizeSmall","iconSizeMedium","iconSizeLarge"]);const b=n.createContext({});const S=n.createContext(void 0);var f=a(579);const z=[{props:{size:"small"},style:{"& > *:nth-of-type(1)":{fontSize:18}}},{props:{size:"medium"},style:{"& > *:nth-of-type(1)":{fontSize:20}}},{props:{size:"large"},style:{"& > *:nth-of-type(1)":{fontSize:22}}}],w=(0,c.Ay)(m.A,{shouldForwardProp:e=>(0,s.A)(e)||"classes"===e,name:"MuiButton",slot:"Root",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.root,t[a.variant],t["".concat(a.variant).concat((0,h.A)(a.color))],t["size".concat((0,h.A)(a.size))],t["".concat(a.variant,"Size").concat((0,h.A)(a.size))],"inherit"===a.color&&t.colorInherit,a.disableElevation&&t.disableElevation,a.fullWidth&&t.fullWidth]}})((0,d.A)((e=>{var t,a;let{theme:n}=e;const o="light"===n.palette.mode?n.palette.grey[300]:n.palette.grey[800],i="light"===n.palette.mode?n.palette.grey.A100:n.palette.grey[700];return{...n.typography.button,minWidth:64,padding:"6px 16px",border:0,borderRadius:(n.vars||n).shape.borderRadius,transition:n.transitions.create(["background-color","box-shadow","border-color","color"],{duration:n.transitions.duration.short}),"&:hover":{textDecoration:"none"},["&.".concat(y.disabled)]:{color:(n.vars||n).palette.action.disabled},variants:[{props:{variant:"contained"},style:{color:"var(--variant-containedColor)",backgroundColor:"var(--variant-containedBg)",boxShadow:(n.vars||n).shadows[2],"&:hover":{boxShadow:(n.vars||n).shadows[4],"@media (hover: none)":{boxShadow:(n.vars||n).shadows[2]}},"&:active":{boxShadow:(n.vars||n).shadows[8]},["&.".concat(y.focusVisible)]:{boxShadow:(n.vars||n).shadows[6]},["&.".concat(y.disabled)]:{color:(n.vars||n).palette.action.disabled,boxShadow:(n.vars||n).shadows[0],backgroundColor:(n.vars||n).palette.action.disabledBackground}}},{props:{variant:"outlined"},style:{padding:"5px 15px",border:"1px solid currentColor",borderColor:"var(--variant-outlinedBorder, currentColor)",backgroundColor:"var(--variant-outlinedBg)",color:"var(--variant-outlinedColor)",["&.".concat(y.disabled)]:{border:"1px solid ".concat((n.vars||n).palette.action.disabledBackground)}}},{props:{variant:"text"},style:{padding:"6px 8px",color:"var(--variant-textColor)",backgroundColor:"var(--variant-textBg)"}},...Object.entries(n.palette).filter((0,u.A)(["dark","contrastText"])).map((e=>{let[t]=e;return{props:{color:t},style:{"--variant-textColor":(n.vars||n).palette[t].main,"--variant-outlinedColor":(n.vars||n).palette[t].main,"--variant-outlinedBorder":n.vars?"rgba(".concat(n.vars.palette[t].mainChannel," / 0.5)"):(0,l.X4)(n.palette[t].main,.5),"--variant-containedColor":(n.vars||n).palette[t].contrastText,"--variant-containedBg":(n.vars||n).palette[t].main,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":(n.vars||n).palette[t].dark,"--variant-textBg":n.vars?"rgba(".concat(n.vars.palette[t].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.X4)(n.palette[t].main,n.palette.action.hoverOpacity),"--variant-outlinedBorder":(n.vars||n).palette[t].main,"--variant-outlinedBg":n.vars?"rgba(".concat(n.vars.palette[t].mainChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.X4)(n.palette[t].main,n.palette.action.hoverOpacity)}}}}})),{props:{color:"inherit"},style:{"--variant-containedColor":n.vars?n.vars.palette.text.primary:null===(t=(a=n.palette).getContrastText)||void 0===t?void 0:t.call(a,o),"--variant-containedBg":n.vars?n.vars.palette.Button.inheritContainedBg:o,"@media (hover: hover)":{"&:hover":{"--variant-containedBg":n.vars?n.vars.palette.Button.inheritContainedHoverBg:i,"--variant-textBg":n.vars?"rgba(".concat(n.vars.palette.text.primaryChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.X4)(n.palette.text.primary,n.palette.action.hoverOpacity),"--variant-outlinedBg":n.vars?"rgba(".concat(n.vars.palette.text.primaryChannel," / ").concat(n.vars.palette.action.hoverOpacity,")"):(0,l.X4)(n.palette.text.primary,n.palette.action.hoverOpacity)}}}},{props:{size:"small",variant:"text"},style:{padding:"4px 5px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"text"},style:{padding:"8px 11px",fontSize:n.typography.pxToRem(15)}},{props:{size:"small",variant:"outlined"},style:{padding:"3px 9px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"outlined"},style:{padding:"7px 21px",fontSize:n.typography.pxToRem(15)}},{props:{size:"small",variant:"contained"},style:{padding:"4px 10px",fontSize:n.typography.pxToRem(13)}},{props:{size:"large",variant:"contained"},style:{padding:"8px 22px",fontSize:n.typography.pxToRem(15)}},{props:{disableElevation:!0},style:{boxShadow:"none","&:hover":{boxShadow:"none"},["&.".concat(y.focusVisible)]:{boxShadow:"none"},"&:active":{boxShadow:"none"},["&.".concat(y.disabled)]:{boxShadow:"none"}}},{props:{fullWidth:!0},style:{width:"100%"}}]}}))),A=(0,c.Ay)("span",{name:"MuiButton",slot:"StartIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.startIcon,t["iconSize".concat((0,h.A)(a.size))]]}})({display:"inherit",marginRight:8,marginLeft:-4,variants:[{props:{size:"small"},style:{marginLeft:-2}},...z]}),C=(0,c.Ay)("span",{name:"MuiButton",slot:"EndIcon",overridesResolver:(e,t)=>{const{ownerState:a}=e;return[t.endIcon,t["iconSize".concat((0,h.A)(a.size))]]}})({display:"inherit",marginRight:-4,marginLeft:8,variants:[{props:{size:"small"},style:{marginRight:-2}},...z]}),j=n.forwardRef((function(e,t){const a=n.useContext(b),l=n.useContext(S),s=(0,i.A)(a,e),c=(0,p.b)({props:s,name:"MuiButton"}),{children:d,color:m="primary",component:u="button",className:v,disabled:g=!1,disableElevation:y=!1,disableFocusRipple:z=!1,endIcon:j,focusVisibleClassName:B,fullWidth:I=!1,size:k="medium",startIcon:R,type:N,variant:_="text",...E}=c,T={...c,color:m,component:u,disabled:g,disableElevation:y,disableFocusRipple:z,fullWidth:I,size:k,type:N,variant:_},W=(e=>{const{color:t,disableElevation:a,fullWidth:n,size:o,variant:i,classes:l}=e,s={root:["root",i,"".concat(i).concat((0,h.A)(t)),"size".concat((0,h.A)(o)),"".concat(i,"Size").concat((0,h.A)(o)),"color".concat((0,h.A)(t)),a&&"disableElevation",n&&"fullWidth"],label:["label"],startIcon:["icon","startIcon","iconSize".concat((0,h.A)(o))],endIcon:["icon","endIcon","iconSize".concat((0,h.A)(o))]},c=(0,r.A)(s,x,l);return{...l,...c}})(T),M=R&&(0,f.jsx)(A,{className:W.startIcon,ownerState:T,children:R}),L=j&&(0,f.jsx)(C,{className:W.endIcon,ownerState:T,children:j}),O=l||"";return(0,f.jsxs)(w,{ownerState:T,className:(0,o.A)(a.className,W.root,v,O),component:u,disabled:g,focusRipple:!z,focusVisibleClassName:(0,o.A)(W.focusVisible,B),ref:t,type:N,...E,classes:W,children:[M,d,L]})}))},7261:()=>{},8790:()=>{},6917:(e,t,a)=>{a.d(t,{A:()=>n});const n={}}}]);
//# sourceMappingURL=226.74e21c7e.chunk.js.map