"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[167],{74936:(e,t,r)=>{r.d(t,{Z1:()=>o,bU:()=>p,h1:()=>u,ko:()=>s});var n=r(91055),c=r(21851);function l(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function a(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?l(Object(r),!0).forEach((function(t){i(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):l(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function i(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const m=(0,n.rJ)(c.db,"services"),o=async e=>{const t=[];e&&t.push((0,n._M)("status","==",e));const r=(0,n.P)(m,...t,(0,n.My)("code","asc"));return(await(0,n.GG)(r)).docs.map((e=>{const t=e.data();return a({id:e.id},t)}))},s=async e=>{const t=(0,n.P)(m,(0,n._M)("code","==",e),(0,n.AB)(1)),r=await(0,n.GG)(t);if(r.empty)return null;{const e=r.docs[0],t=e.data();return a({id:e.id},t)}},u=async e=>{console.log(e);try{return(await(0,n.gS)(m,e)).id}catch(e){throw console.error("Error adding service: ",e),new Error("Unable to add a service")}},p=async(e,t)=>{try{const r=(0,n.H9)(m,e);await(0,n.mZ)(r,t),console.log("Service updated successfully")}catch(e){throw console.error("Error updating service: ",e),new Error("Unable to update the service")}}},20831:(e,t,r)=>{r.d(t,{A:()=>a});var n=r(77810),c=r(26038),l=r(68190);const a=({style:e})=>n.createElement(l.A,{align:"center",gap:"small",className:"form-note",style:e},n.createElement(c.Q3,null),n.createElement("span",null,"Là trường thông tin bắt buộc"))},82927:(e,t,r)=>{r.r(t),r.d(t,{default:()=>j});var n=r(77810),c=r(87026),l=r(98617),a=r(68190),i=r(6194),m=r(64362),o=r(4504),s=r(14856),u=r(74789),p=r(77076),f=r(17192),d=r(79543),y=r(28689),h=r(81342),b=r(90194),g=r(20831),E=r(29200),v=r(74936);function A(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function w(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?A(Object(r),!0).forEach((function(t){O(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):A(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}function O(e,t,r){return(t=function(e){var t=function(e){if("object"!=typeof e||!e)return e;var t=e[Symbol.toPrimitive];if(void 0!==t){var r=t.call(e,"string");if("object"!=typeof r)return r;throw new TypeError("@@toPrimitive must return a primitive value.")}return String(e)}(e);return"symbol"==typeof t?t:t+""}(t))in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}const j=()=>{const[e]=c.A.useForm(),t=(0,y.Zp)(),r=(0,E.G)(v.h1);return n.createElement("div",null,n.createElement(a.A,{style:{padding:"2.4rem"},align:"center",justify:"space-between"},n.createElement(b.A,{items:[{title:"Dịch vụ"},{title:"Danh sách dịch vụ",href:"/admin/dich-vu"},{title:"Thêm dịch vụ"}]}),n.createElement(f.A,null)),n.createElement(c.A,{form:e,onFinish:async e=>{try{await r.execute(w(w({},e),{},{description:e.description||"",useFromToNumber:!!e.useFromToNumber,usePrefix:!!e.usePrefix,useSuffix:!!e.useSuffix,isDaily:!!e.isDaily,fromNumber:e.fromNumber,toNumber:e.toNumber,prefix:e.prefix,suffix:e.suffix})),l.Ay.success("Thêm dịch vụ thành công",5),t("/admin/dich-vu")}catch(e){l.Ay.error("Đã có lỗi xảy ra. Hãy thử lại sau!",5),console.error(e)}},layout:"vertical"},n.createElement("div",{style:{paddingLeft:"2.4rem",paddingRight:"6.4rem"}},n.createElement(i.A.Title,{level:3,style:{color:"#FF7506",marginBottom:"1.6rem"}},"Quản lý dịch vụ"),n.createElement(d.A,null,n.createElement(i.A.Title,{level:4,style:{color:"#FF7506",marginBottom:"1.6rem"}},"Thông tin dịch vụ"),n.createElement(m.A,{gutter:[24,0]},n.createElement(o.A,{span:12},n.createElement(a.A,{vertical:!0,justify:"space-between",className:"h-100"},n.createElement(c.A.Item,{label:"Mã dịch vụ:",required:!0,name:"code",rules:[{required:!0,message:"Vui lòng nhập mã dịch vụ"},{pattern:/^[a-zA-Z0-9_-]+$/,message:"Mã dịch vụ chỉ bao gồm chữ cái, số, dấu gạch dưới và dấu gạch nối"}]},n.createElement(s.A,{placeholder:"Nhập mã dịch vụ",size:"large",autoFocus:!0})),n.createElement(c.A.Item,{label:"Tên dịch vụ:",required:!0,name:"name",rules:[{required:!0,message:"Vui lòng nhập tên dịch vụ"},()=>({validator:(e,t)=>!t||t.trim().length>3?Promise.resolve():Promise.reject(new Error("Tên dịch vụ không hợp lệ. Tối thiểu 3 ký tự"))})]},n.createElement(s.A,{placeholder:"Nhập tên dịch vụ",size:"large"})))),n.createElement(o.A,{span:12},n.createElement(c.A.Item,{label:"Mô tả",name:"description"},n.createElement(s.A.TextArea,{placeholder:"Mô tả dịch vụ",size:"large",rows:5,style:{resize:"none"}})))),n.createElement(i.A.Title,{level:4,style:{color:"#FF7506",marginBottom:"1.2rem"}},"Quy tắc cấp số"),n.createElement(a.A,{vertical:!0,gap:"1.2rem",style:{marginBottom:"2.4rem"}},n.createElement(m.A,null,n.createElement(o.A,{flex:"20rem"},n.createElement(a.A,{align:"center",className:"h-100"},n.createElement(c.A.Item,{name:"useFromToNumber",valuePropName:"checked"},n.createElement(u.A,null,"Tăng tự động từ:")))),n.createElement(o.A,{flex:"auto"},n.createElement(a.A,{align:"center",gap:"middle"},n.createElement(c.A.Item,{name:"fromNumber"},n.createElement(s.A,{size:"large",style:{width:"6.5rem"}})),n.createElement("span",null,"đến"),n.createElement(c.A.Item,{name:"toNumber"},n.createElement(s.A,{size:"large",style:{width:"6.5rem"}}))))),n.createElement(m.A,null,n.createElement(o.A,{flex:"20rem"},n.createElement(a.A,{align:"center",className:"h-100"},n.createElement(c.A.Item,{name:"usePrefix",valuePropName:"checked"},n.createElement(u.A,null,"Prefix:")))),n.createElement(o.A,{flex:"auto"},n.createElement(c.A.Item,{name:"prefix"},n.createElement(s.A,{size:"large",style:{width:"6.5rem"}})))),n.createElement(m.A,null,n.createElement(o.A,{flex:"20rem"},n.createElement(a.A,{align:"center",className:"h-100"},n.createElement(c.A.Item,{name:"useSuffix",valuePropName:"checked"},n.createElement(u.A,null,"Suffix:")))),n.createElement(o.A,{flex:"auto"},n.createElement(c.A.Item,{name:"suffix"},n.createElement(s.A,{size:"large",style:{width:"6.5rem"}})))),n.createElement(m.A,null,n.createElement(o.A,{flex:"20rem"},n.createElement(c.A.Item,{name:"isDaily",valuePropName:"checked"},n.createElement(u.A,null,"Reset mỗi ngày"))))),n.createElement(g.A,null)),n.createElement(a.A,{justify:"center",gap:"large"},n.createElement(h.N_,{to:"/admin/dich-vu"},n.createElement(p.Ay,{style:{backgroundColor:"#FFF2E7"},htmlType:"button",type:"primary",size:"large",ghost:!0},"Hủy bỏ")),n.createElement(p.Ay,{htmlType:"submit",type:"primary",size:"large"},"Thêm dịch vụ")))))}}}]);