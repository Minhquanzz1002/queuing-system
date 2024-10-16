"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[859],{24185:(e,t,r)=>{r.d(t,{Jv:()=>g,h9:()=>v,sc:()=>b});var n=r(91055),a=r(21851),i=r(7059),c=r.n(i),o=r(65304);const s=["issueTime","expiryDate"],l=["issueTime","expiryDate"];function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function p(e,t){if(null==e)return{};var r,n,a=function(e,t){if(null==e)return{};var r={};for(var n in e)if({}.hasOwnProperty.call(e,n)){if(t.includes(n))continue;r[n]=e[n]}return r}(e,t);if(Object.getOwnPropertySymbols){var i=Object.getOwnPropertySymbols(e);for(n=0;n<i.length;n++)r=i[n],t.includes(r)||{}.propertyIsEnumerable.call(e,r)&&(a[r]=e[r])}return a}const f=(0,n.rJ)(a.db,"queues"),y=(0,n.rJ)(a.db,"services"),v=async({status:e,issueSource:t,serviceId:r,startDate:a,endDate:i})=>{const c=[...e?[(0,n._M)("status","==",e)]:[],...t?[(0,n._M)("issueSource","==",t)]:[],...r?[(0,n._M)("service","==",(0,n.H9)(y,r))]:[],...a?[(0,n._M)("issueTime",">=",a)]:[],...i?[(0,n._M)("issueTime","<=",i)]:[]],o=(0,n.P)(f,...c),l=await(0,n.GG)(o);return await Promise.all(l.docs.map((async e=>{const t=e.data(),{issueTime:r,expiryDate:a}=t,i=p(t,s),c=await(0,n.x7)(i.service),o=c.data(),l=m({id:c.id},o);return m(m({id:e.id},i),{},{issueTime:r.toDate(),expiryDate:a.toDate(),service:l})})))},b=async e=>{const t=await(0,n.x7)((0,n.H9)(f,e));if(!t.exists())return null;const r=t.data(),{issueTime:a,expiryDate:i}=r,c=p(r,l),o=await(0,n.x7)(c.service),s=o.data(),u=m({id:o.id},s);return m(m({id:t.id},c),{},{issueTime:a.toDate(),expiryDate:i.toDate(),service:u})},g=async e=>{try{const t=c()(),r=t.endOf("day"),i=await(async e=>{let t="";return e.usePrefix&&e.prefix&&(t+=e.prefix),t+="0001",e.useSuffix&&e.suffix&&(t+=e.suffix),t})(e.service),s={serialNumber:i,customer:e.customer,status:"WAITING",issueTime:t.toDate(),issueSource:e.issueSource,expiryDate:r.toDate(),service:(0,n.H9)(a.db,"services",e.service.id)},l=await(0,n.gS)(f,s),u=(await(0,n.x7)(l)).data();if(!u)throw new Error("Unable to add a queue");return await(0,o.T)({action:`Cấp số ${i}`,ipAddress:"192.168.1.1"}),{id:l.id,serialNumber:u.serialNumber,customer:u.customer,status:u.status,issueTime:u.issueTime.toDate(),expiryDate:u.expiryDate.toDate(),service:e.service,issueSource:u.issueSource}}catch(e){throw console.error("Error adding device: ",e),new Error("Unable to add a device")}}},90194:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(77810),a=r(6620),i=r(26038),c=r(81342);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(null,arguments)}const s=e=>n.createElement(a.A,o({className:"breadcrumb",separator:n.createElement(i.Vj,{style:{color:"rgba(126, 125, 136, 1)"}}),itemRender:(e,t,r)=>r.indexOf(e)!==r.length-1&&e.href?n.createElement(c.N_,{className:"breadcrumb-link",to:e.href},e.title):n.createElement("span",{className:"breadcrumb-link"},e.title)},e))},60763:(e,t,r)=>{r.d(t,{A:()=>o});var n=r(77810),a=r(14856);function i(){return i=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},i.apply(null,arguments)}const c=()=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"20",height:"20",viewBox:"0 0 20 20",fill:"none"},n.createElement("path",{d:"M9.16667 15.8333C12.8486 15.8333 15.8333 12.8486 15.8333 9.16667C15.8333 5.48477 12.8486 2.5 9.16667 2.5C5.48477 2.5 2.5 5.48477 2.5 9.16667C2.5 12.8486 5.48477 15.8333 9.16667 15.8333Z",stroke:"#FF7506",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"}),n.createElement("path",{d:"M17.5 17.5L13.875 13.875",stroke:"#FF7506",strokeWidth:"2",strokeLinecap:"round",strokeLinejoin:"round"})),o=e=>n.createElement(a.A,i({size:"large",suffix:n.createElement(c,null)},e))},8590:(e,t,r)=>{r.d(t,{A:()=>f});var n=r(77810),a=r(68190),i=r(14856),c=r(26038),o=r(8955),s=r(7059),l=r.n(s);function u(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function m(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?u(Object(r),!0).forEach((function(t){d(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):u(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function d(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p=()=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6",height:"8",viewBox:"0 0 6 8",fill:"none"},n.createElement("path",{d:"M5.51129 3.13807L3.96467 2.01241L1.44455 0.178209C0.910697 -0.20463 0 0.0696425 0 0.618188V4.17802V7.38359C0 7.93213 0.910697 8.20641 1.44455 7.81785L5.51129 4.85799C6.1629 4.38944 6.1629 3.61233 5.51129 3.13807Z",fill:"#535261"})),f=({start:e,end:t,onChange:r})=>{const[s,u]=(0,n.useState)(!1),[d,f]=(0,n.useState)(l()()),y=(0,n.useRef)(null);(0,o.A)(y,(()=>u(!1)));const v=()=>{u(!s)};return n.createElement(a.A,{gap:"small",align:"center",className:"range-picker"},n.createElement(i.A,{size:"large",prefix:n.createElement(c.Vq,{style:{color:"#FF7506"}}),placeholder:"DD/MM/YYYY",value:e?e.format("DD/MM/YYYY"):"",readOnly:!0,onClick:v}),n.createElement(p,null),n.createElement(i.A,{size:"large",prefix:n.createElement(c.Vq,{style:{color:"#FF7506"}}),placeholder:"DD/MM/YYYY",value:t?t.format("DD/MM/YYYY"):"",readOnly:!0,onClick:v}),s&&n.createElement("div",{className:"range-picker__calendar",ref:y},n.createElement(a.A,{justify:"space-between",align:"center",className:"range-picker__calendar-header"},n.createElement("button",{onClick:()=>{f(d.subtract(1,"month"))}},n.createElement(c.Vj,null)),n.createElement("div",null,d.format("MMMM YYYY")),n.createElement("button",{onClick:()=>{f(d.add(1,"month"))}},n.createElement(c.Vj,null))),n.createElement("div",{className:"range-picker__calendar-divider"}),n.createElement("div",{className:"range-picker__calendar-weekdays"},["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((e=>n.createElement(a.A,{justify:"center",align:"center",key:e,className:"calendar__day-name"},e)))),n.createElement("div",{className:"range-picker__calendar-body"},(()=>{const r=d.startOf("month"),n=d.endOf("month"),a=[],i=r.day(),c=0===i?6:i-1,o=r.subtract(1,"month");for(let e=c-1;e>=0;e--)a.push({date:o.endOf("month").subtract(e,"day"),currentMonth:!1});for(let e=1;e<=n.date();e++){const t=r.date(e);a.push({date:t,currentMonth:!0})}const s=42-a.length,l=n.add(1,"day");for(let e=1;e<=s;e++)a.push({date:l.date(e),currentMonth:!1});return a.map((r=>m(m({},r),{},{isStart:e&&r.date.isSame(e,"day"),isEnd:t&&r.date.isSame(t,"day"),isInRange:e&&t&&r.date.isBetween(e,t,"day","[]")})))})().map((({date:i,currentMonth:c,isStart:o,isEnd:s,isInRange:l},u)=>n.createElement(a.A,{align:"center",justify:"center",key:u,onClick:()=>(n=>{!e||e&&t?r(n,null):n.isBefore(e)?r(n,e):r(e,n)})(i),className:`range-picker__calendar-day ${c?"range-picker__calendar-day--current":"range-picker__calendar-day--other-month"} ${o?"range-picker__calendar-day--start":""} ${s?"range-picker__calendar-day--end":""} ${l?"range-picker__calendar-day--in-range":""}`},i.format("DD")))))))}},22295:(e,t,r)=>{r.d(t,{A:()=>u});var n=r(77810),a=r(46983),i=r(8931),c=r(25084),o=r(1217),s=r(12959);function l(){return l=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},l.apply(null,arguments)}const u=e=>n.createElement(a.Ay,{theme:{components:{Table:{headerBg:"#FF9138",headerColor:"white",borderColor:"#FFE3CD",cellFontSize:14},Pagination:{itemActiveBg:"#FF7506",itemActiveColorDisabled:"white",itemBg:"none"}},token:{fontSize:16,fontWeightStrong:700}},renderEmpty:()=>n.createElement(i.A,{image:i.A.PRESENTED_IMAGE_SIMPLE,description:"Không có dữ liệu"})},n.createElement(c.A,l({},e,{rowHoverable:!1,pagination:{itemRender:(e,t,r)=>"prev"===t?n.createElement(o.A,{style:{color:"#A9A9B0"}}):"next"===t?n.createElement(s.A,{style:{color:"#A9A9B0"}}):r},rowClassName:(e,t)=>t%2==0?"":"bg-orange-50"})))},17192:(e,t,r)=>{r.d(t,{A:()=>b});var n=r(77810),a=r(68190),i=r(77076),c=r(75832),o=r(26038),s=r(81342),l=r(71468),u=r(8955),m=r(7059),d=r.n(m),p=r(29200),f=r(24185);const y=({name:e,date:t})=>n.createElement("div",{className:"notification-card"},n.createElement("div",{className:"notification-card__user"},"Người dùng: ",e),n.createElement("div",{className:"notification-card__time",title:`Thời gian nhận số: ${d()(t).format("HH[h]mm [ngày] DD/MM/YYYY")}`},"Thời gian nhận số: ",d()(t).format("HH[h]mm [ngày] DD/MM/YYYY"))),v=({open:e,setOpen:t})=>{const r=(0,n.useRef)(null);(0,u.A)(r,(()=>t(!1)));const[a,i]=(0,n.useState)([]),c=(0,p.G)(f.h9);return(0,n.useEffect)((()=>{c.execute({}).then(i).catch((()=>i([])))}),[]),e?n.createElement("div",{className:"topbar__notification-popup",ref:r},n.createElement("div",{className:"topbar__notification-popup__title"},"Thông báo"),n.createElement("div",{className:"topbar__notification-popup__content"},a.map(((e,t)=>n.createElement(n.Fragment,{key:t},t>0&&n.createElement("div",{className:"notification-card__divider"}),n.createElement(s.N_,{to:`/admin/cap-so/${e.id}`},n.createElement(y,{name:e.customer.name,date:e.expiryDate}))))))):null},b=()=>{const{user:e}=(0,l.d4)((e=>e.profile)),[t,r]=(0,n.useState)(!1);return n.createElement(a.A,{className:"topbar",align:"center",gap:"large"},n.createElement("div",{style:{position:"relative"}},n.createElement(i.Ay,{shape:"circle",className:"topbar__notification",onClick:e=>{e.stopPropagation(),r(!0)}},n.createElement(o.pY,null)),n.createElement(v,{open:t,setOpen:r})),n.createElement(a.A,{gap:"small",className:"topbar__user"},n.createElement(s.N_,{to:"/admin/ho-so"},n.createElement(c.A,{size:40,className:"topbar__avatar"},"A")),n.createElement(a.A,{vertical:!0,className:"topbar__info"},n.createElement("div",{className:"topbar__greeting"},"Xin chào"),n.createElement(s.N_,{to:"/admin/ho-so"},n.createElement("div",{className:"topbar__username"},e?.name||"Chưa rõ")))))}},29200:(e,t,r)=>{r.d(t,{G:()=>o});var n=r(77810);function a(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function i(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?a(Object(r),!0).forEach((function(t){c(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):a(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function c(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const o=e=>{const[t,r]=(0,n.useState)({value:void 0,status:"ready",error:null}),a=(0,n.useCallback)((e=>(r((t=>i(i({},t),{},{status:"ready",value:e}))),Promise.resolve(e))),[]),c=(0,n.useCallback)((e=>(r((t=>i(i({},t),{},{status:"error",error:e}))),console.log(e),Promise.reject(e))),[]),o=(0,n.useCallback)(((...t)=>(r((e=>i(i({},e),{},{status:"loading",value:void 0,error:null}))),e(...t).then(a).catch(c))),[e,c,a]);return i({execute:o},t)}},8955:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(77810);const a=(e,t)=>{const r=(0,n.useCallback)((r=>{r&&e.current&&!e.current.contains(r.target)&&t(r)}),[e,t]);(0,n.useEffect)((()=>(document.addEventListener("mousedown",(e=>r(e)),!0),document.addEventListener("touchstart",(e=>r(e)),!0),()=>{document.removeEventListener("mousedown",r,!0),document.removeEventListener("touchstart",r,!0)})),[r])}},83050:(e,t,r)=>{r.r(t),r.d(t,{default:()=>v});var n=r(77810),a=r(17192),i=r(68190),c=r(87026),o=r(22295),s=r(60763),l=r(90194),u=r(29200),m=r(65304),d=r(7059),p=r.n(d),f=r(8590);const y=[{title:"Tên đăng nhập",dataIndex:"username",key:"username"},{title:"Thời gian tác động",dataIndex:"actionTime",key:"actionTime",render:e=>p()(e).format("DD/MM/YYYY HH:mm:ss")},{title:"IP thực hiện",dataIndex:"ipAddress",key:"ipAddress"},{title:"Thao tác thực hiện",dataIndex:"action",key:"action"}],v=()=>{const[e,t]=(0,n.useState)([]),r=(0,u.G)(m.n),[d,v]=(0,n.useState)(p()().startOf("month")),[b,g]=(0,n.useState)(p()());return(0,n.useEffect)((()=>{r.execute().then(t).catch((()=>t([])))}),[]),(0,n.useEffect)((()=>{}),[b]),n.createElement("div",null,n.createElement(i.A,{style:{padding:"2.4rem"},align:"center",justify:"space-between"},n.createElement(l.A,{items:[{title:"Cài đặt hệ thống"},{title:"Nhật ký người dùng"}]}),n.createElement(a.A,null)),n.createElement("div",{style:{paddingLeft:"2.4rem",paddingRight:"10.4rem"}},n.createElement(c.A,{layout:"vertical"},n.createElement(i.A,{justify:"space-between"},n.createElement(c.A.Item,{label:"Tên vai trò"},n.createElement(f.A,{start:d,end:b,onChange:(e,n)=>{v(e),g(n),e&&n&&r.execute(e.toDate(),n.toDate()).then(t).catch((()=>t([])))}})),n.createElement(c.A.Item,{label:"Từ khóa"},n.createElement(s.A,{style:{width:"30rem"},id:"search",placeholder:"Nhập từ khóa"})))),n.createElement(o.A,{bordered:!0,columns:y,dataSource:e})))}},90107:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(64180),a=r(77810);const i={icon:{tag:"svg",attrs:{viewBox:"64 64 896 896",focusable:"false"},children:[{tag:"path",attrs:{d:"M912 190h-69.9c-9.8 0-19.1 4.5-25.1 12.2L404.7 724.5 207 474a32 32 0 00-25.1-12.2H112c-6.7 0-10.4 7.7-6.3 12.9l273.9 347c12.8 16.2 37.4 16.2 50.3 0l488.4-618.9c4.1-5.1.4-12.8-6.3-12.8z"}}]},name:"check",theme:"outlined"};var c=r(30734),o=function(e,t){return a.createElement(c.A,(0,n.A)({},e,{ref:t,icon:i}))};const s=a.forwardRef(o)},11784:(e,t,r)=>{r.d(t,{Y:()=>n});const n=e=>({color:e.colorLink,textDecoration:"none",outline:"none",cursor:"pointer",transition:`color ${e.motionDurationSlow}`,"&:focus, &:hover":{color:e.colorLinkHover},"&:active":{color:e.colorLinkActive}})},45447:(e,t,r)=>{r.d(t,{F:()=>c});var n=r(99380),a=function(e){if((0,n.A)()&&window.document.documentElement){var t=Array.isArray(e)?e:[e],r=window.document.documentElement;return t.some((function(e){return e in r.style}))}return!1},i=function(e,t){if(!a(e))return!1;var r=document.createElement("div"),n=r.style[e];return r.style[e]=t,r.style[e]!==n};function c(e,t){return Array.isArray(e)||void 0===t?a(e):i(e,t)}}}]);