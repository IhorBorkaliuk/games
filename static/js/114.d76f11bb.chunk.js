"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[114],{114:(e,n,r)=>{r.r(n),r.d(n,{default:()=>_});var t=r(791),s=r(87),a=r(294);const o=async()=>{const e={method:"GET",url:"https://mmo-games.p.rapidapi.com/latestnews",headers:{"X-RapidAPI-Key":"cb5ec0d937mshd5990c2595c25fap103db2jsn373dd91ee4a4","X-RapidAPI-Host":"mmo-games.p.rapidapi.com"}};try{return(await a.Z.request(e)).data}catch(n){console.error(n)}};var c,l,i=r(677),d=r(743),h=r(168),x=r(867);const p=x.ZP.input(c||(c=(0,h.Z)(["\nmargin-top: 15px;\n  font-size: 16px;\n  padding: 10px;\n  border: 1px solid #ccc;\n  border-radius: 5px;\n  outline: none;\n  transition: border-color 0.3s ease-in-out;\n  width: 100%;\n  max-width: 300px;\n\n  /* \u0417\u043c\u0456\u043d\u0430 \u0441\u0442\u0438\u043b\u044e \u043f\u0440\u0438 \u0444\u043e\u043a\u0443\u0441\u0456 */\n  &:focus {\n    border-color: #4d4c4a; /* \u0417\u0435\u043b\u0435\u043d\u0438\u0439 \u043a\u043e\u043b\u0456\u0440 */\n    box-shadow: 0 0 5px rgba(27, 27, 27, 0.5); /* \u0422\u0456\u043d\u044c \u043f\u0440\u0438 \u0444\u043e\u043a\u0443\u0441\u0456 */\n  }\n\n  /* \u0414\u043e\u0434\u0430\u0442\u043a\u043e\u0432\u0438\u0439 \u0441\u0442\u0438\u043b\u044c \u0434\u043b\u044f \u0442\u0435\u043c\u043d\u043e\u0433\u043e \u0444\u043e\u043d\u0443 */\n  body.dark-mode & {\n    background-color: #333;\n    color: #fff;\n    border-color: #555;\n  }\n"]))),m=x.ZP.div(l||(l=(0,h.Z)(["\n    text-align: center;\n"])));var u=r(184);const f=e=>{let{setSearchParam:n,query:r}=e;return(0,u.jsx)(m,{children:(0,u.jsx)(p,{placeholder:"\u0412\u0432\u0435\u0434\u0456\u0442\u044c \u0437\u0430\u043f\u0438\u0442...",onChange:e=>{let{target:r}=e;n({search:r.value})},value:r})})};var g,j=r(70);const Z=(0,x.ZP)(s.OL)(g||(g=(0,h.Z)(["\n  text-decoration: none;\n  color: #0e0f0f; \n\n  &:hover {\n    text-decoration: underline; \n  }\n"]))),v=e=>{let{el:n}=e;return(0,u.jsxs)(j.Z,{className:"h-100",children:[(0,u.jsx)(j.Z.Img,{variant:"top",src:n.main_image,alt:n.short_description}),(0,u.jsx)(Z,{to:"/:id",state:n,rel:"noopener noreferrer",className:"stretched-link",children:(0,u.jsxs)(j.Z.Body,{children:[(0,u.jsx)(j.Z.Title,{children:n.title}),(0,u.jsx)(j.Z.Text,{children:n.short_description})]})})]})};var b,w;const y=x.ZP.div(b||(b=(0,h.Z)(["\n  display: flex;\n  align-items: center;\n  justify-content: center;\n  color: #555;\n  text-align: center;\n"]))),P=x.ZP.p(w||(w=(0,h.Z)(["\n\n  font-size: 18px;\n"]))),k=e=>{let{searchTerm:n}=e;return(0,u.jsx)(y,{style:{textAlign:"center",width:"100%"},children:(0,u.jsxs)(P,{children:['\u041d\u043e\u0432\u0438\u043d \u0437\u0430 \u0437\u0430\u043f\u0438\u0442\u043e\u043c "',n,'" \u043d\u0435 \u0437\u043d\u0430\u0439\u0434\u0435\u043d\u043e.']})})},_=()=>{var e;const[n,r]=(0,t.useState)([]),[a,c]=(0,t.useState)([]),[l,h]=(0,s.lr)(),x=null!==(e=l.get("search"))&&void 0!==e?e:"";return console.log(x),(0,t.useEffect)((()=>{(async()=>{try{const e=await o();r(e),console.log(e)}catch(e){console.error(e)}})()}),[]),(0,t.useEffect)((()=>{c(n.filter((e=>e.title.toLowerCase().includes(x.toLowerCase()))))}),[l,n,x]),(0,u.jsxs)("div",{children:[(0,u.jsx)(f,{setSearchParam:h,query:x}),(0,u.jsx)(d.Z,{xs:1,md:4,className:"g-4 mt-4 d-flex align-items-stretch",children:l&&0===a.length?(0,u.jsx)(i.Z,{children:(0,u.jsx)(k,{searchParam:l})}):(a.length>0?a:n).map(((e,n)=>(0,u.jsx)(i.Z,{children:(0,u.jsx)(v,{el:e})},n)))})]})}}}]);
//# sourceMappingURL=114.d76f11bb.chunk.js.map