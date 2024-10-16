"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[204],{74936:(e,t,r)=>{r.d(t,{Z1:()=>d,bU:()=>p,h1:()=>m,ko:()=>u});var n=r(91055),a=r(21851),c=r(65304);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function o(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const s=(0,n.rJ)(a.db,"services"),d=async e=>{const t=[];e&&t.push((0,n._M)("status","==",e));const r=(0,n.P)(s,...t,(0,n.My)("code","asc"));return(await(0,n.GG)(r)).docs.map((e=>{const t=e.data();return o({id:e.id},t)}))},u=async e=>{const t=(0,n.P)(s,(0,n._M)("code","==",e),(0,n.AB)(1)),r=await(0,n.GG)(t);if(r.empty)return null;{const e=r.docs[0],t=e.data();return o({id:e.id},t)}},m=async e=>{console.log(e);try{const t=await(0,n.gS)(s,e);return await(0,c.T)({action:`Thêm dịch vụ ${t.id}`,ipAddress:"192.168.1.1"}),t.id}catch(e){throw console.error("Error adding service: ",e),new Error("Unable to add a service")}},p=async(e,t)=>{try{const r=(0,n.H9)(s,e);await(0,n.mZ)(r,t),await(0,c.T)({action:`Cập nhật dịch vụ ${e}`,ipAddress:"192.168.1.1"}),console.log("Service updated successfully")}catch(e){throw console.error("Error updating service: ",e),new Error("Unable to update the service")}}},8590:(e,t,r)=>{r.d(t,{A:()=>h});var n=r(77810),a=r(68190),c=r(14856),l=r(26038),o=r(8955),i=r(7059),s=r.n(i);function d(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function u(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?d(Object(r),!0).forEach((function(t){m(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):d(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function m(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const p=()=>n.createElement("svg",{xmlns:"http://www.w3.org/2000/svg",width:"6",height:"8",viewBox:"0 0 6 8",fill:"none"},n.createElement("path",{d:"M5.51129 3.13807L3.96467 2.01241L1.44455 0.178209C0.910697 -0.20463 0 0.0696425 0 0.618188V4.17802V7.38359C0 7.93213 0.910697 8.20641 1.44455 7.81785L5.51129 4.85799C6.1629 4.38944 6.1629 3.61233 5.51129 3.13807Z",fill:"#535261"})),h=({start:e,end:t,onChange:r})=>{const[i,d]=(0,n.useState)(!1),[m,h]=(0,n.useState)(s()()),y=(0,n.useRef)(null);(0,o.A)(y,(()=>d(!1)));const f=()=>{d(!i)};return n.createElement(a.A,{gap:"small",align:"center",className:"range-picker"},n.createElement(c.A,{size:"large",prefix:n.createElement(l.Vq,{style:{color:"#FF7506"}}),placeholder:"DD/MM/YYYY",value:e?e.format("DD/MM/YYYY"):"",readOnly:!0,onClick:f}),n.createElement(p,null),n.createElement(c.A,{size:"large",prefix:n.createElement(l.Vq,{style:{color:"#FF7506"}}),placeholder:"DD/MM/YYYY",value:t?t.format("DD/MM/YYYY"):"",readOnly:!0,onClick:f}),i&&n.createElement("div",{className:"range-picker__calendar",ref:y},n.createElement(a.A,{justify:"space-between",align:"center",className:"range-picker__calendar-header"},n.createElement("button",{onClick:()=>{h(m.subtract(1,"month"))}},n.createElement(l.Vj,null)),n.createElement("div",null,m.format("MMMM YYYY")),n.createElement("button",{onClick:()=>{h(m.add(1,"month"))}},n.createElement(l.Vj,null))),n.createElement("div",{className:"range-picker__calendar-divider"}),n.createElement("div",{className:"range-picker__calendar-weekdays"},["Mon","Tue","Wed","Thu","Fri","Sat","Sun"].map((e=>n.createElement(a.A,{justify:"center",align:"center",key:e,className:"calendar__day-name"},e)))),n.createElement("div",{className:"range-picker__calendar-body"},(()=>{const r=m.startOf("month"),n=m.endOf("month"),a=[],c=r.day(),l=0===c?6:c-1,o=r.subtract(1,"month");for(let e=l-1;e>=0;e--)a.push({date:o.endOf("month").subtract(e,"day"),currentMonth:!1});for(let e=1;e<=n.date();e++){const t=r.date(e);a.push({date:t,currentMonth:!0})}const i=42-a.length,s=n.add(1,"day");for(let e=1;e<=i;e++)a.push({date:s.date(e),currentMonth:!1});return a.map((r=>u(u({},r),{},{isStart:e&&r.date.isSame(e,"day"),isEnd:t&&r.date.isSame(t,"day"),isInRange:e&&t&&r.date.isBetween(e,t,"day","[]")})))})().map((({date:c,currentMonth:l,isStart:o,isEnd:i,isInRange:s},d)=>n.createElement(a.A,{align:"center",justify:"center",key:d,onClick:()=>(n=>{!e||e&&t?r(n,null):n.isBefore(e)?r(n,e):r(e,n)})(c),className:`range-picker__calendar-day ${l?"range-picker__calendar-day--current":"range-picker__calendar-day--other-month"} ${o?"range-picker__calendar-day--start":""} ${i?"range-picker__calendar-day--end":""} ${s?"range-picker__calendar-day--in-range":""}`},c.format("DD")))))))}},71785:(e,t,r)=>{r.d(t,{A:()=>s});var n=r(77810),a=r(62265),c=r(45958),l=r(84740);function o(){return o=Object.assign?Object.assign.bind():function(e){for(var t=1;t<arguments.length;t++){var r=arguments[t];for(var n in r)({}).hasOwnProperty.call(r,n)&&(e[n]=r[n])}return e},o.apply(null,arguments)}const i=e=>{const[t,r]=(0,n.useState)(!1),i=(0,n.useMemo)((()=>t?n.createElement(a.A,{style:{color:"#FF7506"}}):n.createElement(c.A,{style:{color:"#FF7506"}})),[t]);return n.createElement(l.A,o({size:"large",suffixIcon:i},e,{onDropdownVisibleChange:e=>r(e)}))};i.Option=l.A.Option;const s=i},29179:(e,t,r)=>{r.r(t),r.d(t,{default:()=>O});var n=r(77810),a=r(26038),c=r(17192),l=r(68190),o=r(6194),i=r(87026),s=r(22295),d=r(81342),u=r(57975),m=r(71785),p=r(60763),h=r(75265),y=r(29200),f=r(74936),g=r(90194),b=r(8590),E=r(7059),v=r.n(E);const w=[{title:"Mã dịch vụ",dataIndex:"code",key:"code"},{title:"Tên dịch vụ",dataIndex:"name",key:"name"},{title:"Mô tả",dataIndex:"description",key:"description"},{title:"Trạng thái hoạt động",key:"status",dataIndex:"status",render:e=>n.createElement(n.Fragment,null,"ACTIVE"===e?n.createElement(l.A,{gap:"small"},n.createElement(a.AB,{style:{color:"#35C75A"}})," Hoạt động"):n.createElement(l.A,{gap:"small"},n.createElement(a.AB,{style:{color:"#E73F3F"}}),"Ngưng hoạt động"))},{title:"",key:"detail",render:(e,t)=>n.createElement(d.N_,{to:`/admin/dich-vu/${t.code}`},n.createElement(h.A,null,"Chi tiết"))},{title:"",key:"update",render:(e,t)=>n.createElement(d.N_,{to:`/admin/dich-vu/${t.code}/cap-nhat`},n.createElement(h.A,null,"Cập nhật"))}],O=()=>{const[e,t]=(0,n.useState)([]),[r,d]=(0,n.useState)({status:"ALL"}),[h,E]=(0,n.useState)(v()().startOf("month")),[O,A]=(0,n.useState)(v()()),j=(0,y.G)(f.Z1);return(0,n.useEffect)((()=>{j.execute().then(t).catch((()=>t([])))}),[]),(0,n.useEffect)((()=>{const{status:e}=r,n="ALL"!==e?e:void 0;j.execute(n).then(t).catch((()=>t([])))}),[r]),n.createElement("div",null,n.createElement(l.A,{style:{padding:"2.4rem"},align:"center",justify:"space-between"},n.createElement(g.A,{items:[{title:"Dịch vụ"},{title:"Danh sách dịch vụ"}]}),n.createElement(c.A,null)),n.createElement("div",{style:{paddingLeft:"2.4rem",paddingRight:"10.4rem"}},n.createElement(o.A.Title,{level:3,style:{color:"#FF7506",marginBottom:"1.6rem"}},"Danh sách dịch vụ"),n.createElement(i.A,{layout:"vertical",initialValues:r,onValuesChange:(e,t)=>{d(t)}},n.createElement(l.A,{justify:"space-between"},n.createElement(l.A,{gap:"middle"},n.createElement(i.A.Item,{label:"Trạng thái hoạt động",name:"status"},n.createElement(m.A,{id:"status",style:{width:"30rem"},options:[{value:"ALL",label:"Tất cả"},{value:"ACTIVE",label:"Hoạt động"},{value:"INACTIVE",label:"Ngưng hoạt động"}]})),n.createElement(i.A.Item,{label:"Chọn thời gian",name:"datePicker"},n.createElement(b.A,{start:h,end:O,onChange:(e,t)=>{E(e),A(t)}}))),n.createElement(i.A.Item,{label:"Từ khóa",name:"search"},n.createElement(p.A,{style:{width:"30rem"},id:"search",placeholder:"Nhập từ khóa"})))),n.createElement(s.A,{bordered:!0,columns:w,dataSource:e,rowKey:e=>e.id})),n.createElement(u.A,null,n.createElement(u.A.Item,{icon:n.createElement(a.Jr,null),href:"/admin/dich-vu/them-moi"},"Thêm",n.createElement("br",null)," dịch vụ")))}}}]);