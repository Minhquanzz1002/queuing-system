"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[404],{92235:(e,t,n)=>{n.d(t,{A:()=>i});var r=n(77810),s=n(68190);const i=({children:e,variant:t="red",footerText:n})=>r.createElement("div",{className:"card-info"},r.createElement("div",{className:`card-info__content card-info__content--${t}`},e),r.createElement(s.A,{justify:"center",align:"center",className:`card-info__footer card-info__footer--${t}`},r.createElement("span",null,n)))},18404:(e,t,n)=>{n.r(t),n.d(t,{default:()=>f});var r=n(68190),s=n(6194),i=n(64362),l=n(4504),o=n(91140),a=n(77810),c=n(92235);const f=()=>a.createElement("div",null,a.createElement(r.A,null,a.createElement("div",{style:{width:"6rem",height:"5rem",marginTop:"3.2",marginLeft:"4.8rem"}},a.createElement("img",{src:o.wm,alt:"Logo",style:{objectFit:"cover",width:"6rem",height:"5rem"}}))),a.createElement(r.A,{justify:"center",align:"center",style:{marginTop:"2.4rem"}},a.createElement(s.A.Title,{level:2,style:{fontSize:"3.2rem"}},"Thông tin hiển thị trên thiết bị MHTT-01")),a.createElement(r.A,{justify:"center",align:"center"},a.createElement("div",{style:{width:"98rem"}},a.createElement("div",{style:{fontSize:"2.4rem",fontWeight:700,fontFamily:"Nunito",lineHeight:"3.6rem",color:"#282739",marginTop:"5rem",marginBottom:"3.2rem"}},"Số thứ tự đang hiển thị trên thiết bị:"),a.createElement(i.A,{gutter:[56,56]},a.createElement(l.A,{span:8},a.createElement(c.A,{footerText:"Quầy dịch vụ số 1",variant:"red"},a.createElement("div",{style:{fontSize:"3rem",fontWeight:700,lineHeight:"4.5rem"}},"201001"))),a.createElement(l.A,{span:8},a.createElement(c.A,{footerText:"Quầy dịch vụ số 1",variant:"pink"},a.createElement("div",{style:{fontSize:"3rem",fontWeight:700,lineHeight:"4.5rem"}},"201001"))),a.createElement(l.A,{span:8},a.createElement(c.A,{footerText:"Quầy dịch vụ số 1",variant:"orange"},a.createElement("div",{style:{fontSize:"3rem",fontWeight:700,lineHeight:"4.5rem"}},"201001"))),a.createElement(l.A,{span:8},a.createElement(c.A,{footerText:"Quầy dịch vụ số 1",variant:"blue"},a.createElement("div",{style:{fontSize:"3rem",fontWeight:700,lineHeight:"4.5rem"}},"201001"))),a.createElement(l.A,{span:8},a.createElement(c.A,{footerText:"Quầy dịch vụ số 1",variant:"green"},a.createElement("div",{style:{fontSize:"3rem",fontWeight:700,lineHeight:"4.5rem"}},"201001"))),a.createElement(l.A,{span:8},a.createElement(c.A,{footerText:"Quầy dịch vụ số 1",variant:"purple"},a.createElement("div",{style:{fontSize:"3rem",fontWeight:700,lineHeight:"4.5rem"}},"201001")))))))},88219:(e,t,n)=>{n.d(t,{Ay:()=>a,ye:()=>i});var r=n(77810),s=n(66753);const i=["xxl","xl","lg","md","sm","xs"],l=e=>({xs:`(max-width: ${e.screenXSMax}px)`,sm:`(min-width: ${e.screenSM}px)`,md:`(min-width: ${e.screenMD}px)`,lg:`(min-width: ${e.screenLG}px)`,xl:`(min-width: ${e.screenXL}px)`,xxl:`(min-width: ${e.screenXXL}px)`}),o=e=>{const t=e,n=[].concat(i).reverse();return n.forEach(((e,r)=>{const s=e.toUpperCase(),i=`screen${s}Min`,l=`screen${s}`;if(!(t[i]<=t[l]))throw new Error(`${i}<=${l} fails : !(${t[i]}<=${t[l]})`);if(r<n.length-1){const e=`screen${s}Max`;if(!(t[l]<=t[e]))throw new Error(`${l}<=${e} fails : !(${t[l]}<=${t[e]})`);const i=`screen${n[r+1].toUpperCase()}Min`;if(!(t[e]<=t[i]))throw new Error(`${e}<=${i} fails : !(${t[e]}<=${t[i]})`)}})),e};function a(){const[,e]=(0,s.Ay)(),t=l(o(e));return r.useMemo((()=>{const e=new Map;let n=-1,r={};return{matchHandlers:{},dispatch:t=>(r=t,e.forEach((e=>e(r))),e.size>=1),subscribe(t){return e.size||this.register(),n+=1,e.set(n,t),t(r),n},unsubscribe(t){e.delete(t),e.size||this.unregister()},unregister(){Object.keys(t).forEach((e=>{const n=t[e],r=this.matchHandlers[n];null==r||r.mql.removeListener(null==r?void 0:r.listener)})),e.clear()},register(){Object.keys(t).forEach((e=>{const n=t[e],s=t=>{let{matches:n}=t;this.dispatch(Object.assign(Object.assign({},r),{[e]:n}))},i=window.matchMedia(n);i.addListener(s),this.matchHandlers[n]={mql:i,listener:s},s(i)}))},responsiveMap:t}}),[e])}},4504:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(62924).A},93987:(e,t,n)=>{n.d(t,{A:()=>r});const r=(0,n(77810).createContext)({})},62924:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(77810),s=n(69122),i=n.n(s),l=n(39577),o=n(93987),a=n(30792);function c(e){return"number"==typeof e?`${e} ${e} auto`:/^\d+(\.\d+)?(px|em|rem|%)$/.test(e)?`0 0 ${e}`:e}const f=["xs","sm","md","lg","xl","xxl"],m=r.forwardRef(((e,t)=>{const{getPrefixCls:n,direction:s}=r.useContext(l.QO),{gutter:m,wrap:d}=r.useContext(o.A),{prefixCls:p,span:u,order:$,offset:h,push:y,pull:g,className:x,children:b,flex:v,style:E}=e,w=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}(e,["prefixCls","span","order","offset","push","pull","className","children","flex","style"]),j=n("col",p),[O,A,C]=(0,a.xV)(j),S={};let M={};f.forEach((t=>{let n={};const r=e[t];"number"==typeof r?n.span=r:"object"==typeof r&&(n=r||{}),delete w[t],M=Object.assign(Object.assign({},M),{[`${j}-${t}-${n.span}`]:void 0!==n.span,[`${j}-${t}-order-${n.order}`]:n.order||0===n.order,[`${j}-${t}-offset-${n.offset}`]:n.offset||0===n.offset,[`${j}-${t}-push-${n.push}`]:n.push||0===n.push,[`${j}-${t}-pull-${n.pull}`]:n.pull||0===n.pull,[`${j}-rtl`]:"rtl"===s}),n.flex&&(M[`${j}-${t}-flex`]=!0,S[`--${j}-${t}-flex`]=c(n.flex))}));const L=i()(j,{[`${j}-${u}`]:void 0!==u,[`${j}-order-${$}`]:$,[`${j}-offset-${h}`]:h,[`${j}-push-${y}`]:y,[`${j}-pull-${g}`]:g},x,M,A,C),T={};if(m&&m[0]>0){const e=m[0]/2;T.paddingLeft=e,T.paddingRight=e}return v&&(T.flex=c(v),!1!==d||T.minWidth||(T.minWidth=0)),O(r.createElement("div",Object.assign({},w,{style:Object.assign(Object.assign(Object.assign({},T),E),S),className:L,ref:t}),b))}))},18118:(e,t,n)=>{n.d(t,{A:()=>m});var r=n(77810),s=n(69122),i=n.n(s),l=n(88219),o=n(39577),a=n(93987),c=n(30792);function f(e,t){const[n,s]=r.useState("string"==typeof e?e:"");return r.useEffect((()=>{(()=>{if("string"==typeof e&&s(e),"object"==typeof e)for(let n=0;n<l.ye.length;n++){const r=l.ye[n];if(!t[r])continue;const i=e[r];if(void 0!==i)return void s(i)}})()}),[JSON.stringify(e),t]),n}const m=r.forwardRef(((e,t)=>{const{prefixCls:n,justify:s,align:m,className:d,style:p,children:u,gutter:$=0,wrap:h}=e,y=function(e,t){var n={};for(var r in e)Object.prototype.hasOwnProperty.call(e,r)&&t.indexOf(r)<0&&(n[r]=e[r]);if(null!=e&&"function"==typeof Object.getOwnPropertySymbols){var s=0;for(r=Object.getOwnPropertySymbols(e);s<r.length;s++)t.indexOf(r[s])<0&&Object.prototype.propertyIsEnumerable.call(e,r[s])&&(n[r[s]]=e[r[s]])}return n}(e,["prefixCls","justify","align","className","style","children","gutter","wrap"]),{getPrefixCls:g,direction:x}=r.useContext(o.QO),[b,v]=r.useState({xs:!0,sm:!0,md:!0,lg:!0,xl:!0,xxl:!0}),[E,w]=r.useState({xs:!1,sm:!1,md:!1,lg:!1,xl:!1,xxl:!1}),j=f(m,E),O=f(s,E),A=r.useRef($),C=(0,l.Ay)();r.useEffect((()=>{const e=C.subscribe((e=>{w(e);const t=A.current||0;(!Array.isArray(t)&&"object"==typeof t||Array.isArray(t)&&("object"==typeof t[0]||"object"==typeof t[1]))&&v(e)}));return()=>C.unsubscribe(e)}),[]);const S=g("row",n),[M,L,T]=(0,c.L3)(S),k=(()=>{const e=[void 0,void 0];return(Array.isArray($)?$:[$,void 0]).forEach(((t,n)=>{if("object"==typeof t)for(let r=0;r<l.ye.length;r++){const s=l.ye[r];if(b[s]&&void 0!==t[s]){e[n]=t[s];break}}else e[n]=t})),e})(),I=i()(S,{[`${S}-no-wrap`]:!1===h,[`${S}-${O}`]:O,[`${S}-${j}`]:j,[`${S}-rtl`]:"rtl"===x},d,L,T),W={},z=null!=k[0]&&k[0]>0?k[0]/-2:void 0;z&&(W.marginLeft=z,W.marginRight=z);const[H,_]=k;W.rowGap=_;const N=r.useMemo((()=>({gutter:[H,_],wrap:h})),[H,_,h]);return M(r.createElement(a.A.Provider,{value:N},r.createElement("div",Object.assign({},y,{className:I,style:Object.assign(Object.assign({},W),p),ref:t}),u)))}))},30792:(e,t,n)=>{n.d(t,{L3:()=>a,xV:()=>c});var r=n(59879),s=n(18856),i=n(42676);const l=e=>{const{componentCls:t}=e;return{[t]:{position:"relative",maxWidth:"100%",minHeight:1}}},o=(e,t)=>((e,t)=>{const{prefixCls:n,componentCls:r,gridColumns:s}=e,i={};for(let e=s;e>=0;e--)0===e?(i[`${r}${t}-${e}`]={display:"none"},i[`${r}-push-${e}`]={insetInlineStart:"auto"},i[`${r}-pull-${e}`]={insetInlineEnd:"auto"},i[`${r}${t}-push-${e}`]={insetInlineStart:"auto"},i[`${r}${t}-pull-${e}`]={insetInlineEnd:"auto"},i[`${r}${t}-offset-${e}`]={marginInlineStart:0},i[`${r}${t}-order-${e}`]={order:0}):(i[`${r}${t}-${e}`]=[{"--ant-display":"block",display:"block"},{display:"var(--ant-display)",flex:`0 0 ${e/s*100}%`,maxWidth:e/s*100+"%"}],i[`${r}${t}-push-${e}`]={insetInlineStart:e/s*100+"%"},i[`${r}${t}-pull-${e}`]={insetInlineEnd:e/s*100+"%"},i[`${r}${t}-offset-${e}`]={marginInlineStart:e/s*100+"%"},i[`${r}${t}-order-${e}`]={order:e});return i[`${r}${t}-flex`]={flex:`var(--${n}${t}-flex)`},i})(e,t),a=(0,s.OF)("Grid",(e=>{const{componentCls:t}=e;return{[t]:{display:"flex",flexFlow:"row wrap",minWidth:0,"&::before, &::after":{display:"flex"},"&-no-wrap":{flexWrap:"nowrap"},"&-start":{justifyContent:"flex-start"},"&-center":{justifyContent:"center"},"&-end":{justifyContent:"flex-end"},"&-space-between":{justifyContent:"space-between"},"&-space-around":{justifyContent:"space-around"},"&-space-evenly":{justifyContent:"space-evenly"},"&-top":{alignItems:"flex-start"},"&-middle":{alignItems:"center"},"&-bottom":{alignItems:"flex-end"}}}}),(()=>({}))),c=(0,s.OF)("Grid",(e=>{const t=(0,i.oX)(e,{gridColumns:24}),n={"-sm":t.screenSMMin,"-md":t.screenMDMin,"-lg":t.screenLGMin,"-xl":t.screenXLMin,"-xxl":t.screenXXLMin};return[l(t),o(t,""),o(t,"-xs"),Object.keys(n).map((e=>((e,t,n)=>({[`@media (min-width: ${(0,r.zA)(t)})`]:Object.assign({},o(e,n))}))(t,n[e],e))).reduce(((e,t)=>Object.assign(Object.assign({},e),t)),{})]}),(()=>({})))},64362:(e,t,n)=>{n.d(t,{A:()=>r});const r=n(18118).A}}]);