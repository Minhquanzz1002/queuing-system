"use strict";(self.webpackChunkmy_webpack_project=self.webpackChunkmy_webpack_project||[]).push([[400],{59516:(e,t,r)=>{r.r(t),r.d(t,{default:()=>h});var n=r(77810),c=r(87026),l=r(6194),a=r(68190),i=r(79543),m=r(71785),s=r(29200),o=r(74936),u=r(29728);const h=()=>{const[e]=c.A.useForm(),[t,r]=(0,n.useState)(!1),[h,d]=(0,n.useState)([]),[p,g]=(0,n.useState)(null),E=(0,s.G)(o.Z1);return(0,n.useEffect)((()=>{E.execute("ACTIVE").then(d).catch((()=>d([])))}),[]),n.createElement("div",null,n.createElement("div",{style:{paddingLeft:"2.4rem",paddingRight:"2.4rem",marginTop:"6rem"}},n.createElement(l.A.Title,{level:3,style:{marginBottom:"1.6rem"}},"Quản lý cấp số"),n.createElement(i.A,null,n.createElement(c.A,{form:e,layout:"vertical",onFinish:e=>{const t=h.find((t=>t.id===e.service));t&&(g(t),r(!0))}},n.createElement(a.A,{justify:"center",align:"center",vertical:!0,gap:"middle"},n.createElement(l.A.Title,{level:3,style:{marginBottom:"1.6rem",marginTop:"6.8rem",color:"#0A0A0E"}},"CẤP SỐ MỚI"),n.createElement("div",{style:{fontSize:"2rem",fontWeight:700,textAlign:"center"}},"Dịch vụ khách hàng lựa chọn"),n.createElement(c.A.Item,{name:"service",required:!0,rules:[{required:!0,message:"Vui lòng chọn dịch vụ"}]},n.createElement(m.A,{style:{width:"40rem"},placeholder:"Chọn dịch vụ"},h.map((e=>n.createElement(m.A.Option,{key:e.id},e.name))))),n.createElement(a.A,{justify:"center",gap:"large"},n.createElement(u.A,{textOk:"Xác nhận",source:"Kiosk",isShow:t,setIsShow:r,service:p})))))))}}}]);