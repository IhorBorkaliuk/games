"use strict";(self.webpackChunkreact_homework_template=self.webpackChunkreact_homework_template||[]).push([[504],{504:(n,e,o)=>{o.r(e),o.d(e,{Reviews:()=>A,default:()=>M});var r=o(791);const t={randomUUID:"undefined"!==typeof crypto&&crypto.randomUUID&&crypto.randomUUID.bind(crypto)};var a,d=new Uint8Array(16);function i(){if(!a&&!(a="undefined"!==typeof crypto&&crypto.getRandomValues&&crypto.getRandomValues.bind(crypto)))throw new Error("crypto.getRandomValues() not supported. See https://github.com/uuidjs/uuid#getrandomvalues-not-supported");return a(d)}for(var s=[],c=0;c<256;++c)s.push((c+256).toString(16).slice(1));function l(n){let e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:0;return(s[n[e+0]]+s[n[e+1]]+s[n[e+2]]+s[n[e+3]]+"-"+s[n[e+4]]+s[n[e+5]]+"-"+s[n[e+6]]+s[n[e+7]]+"-"+s[n[e+8]]+s[n[e+9]]+"-"+s[n[e+10]]+s[n[e+11]]+s[n[e+12]]+s[n[e+13]]+s[n[e+14]]+s[n[e+15]]).toLowerCase()}const p=function(n,e,o){if(t.randomUUID&&!e&&!n)return t.randomUUID();var r=(n=n||{}).random||(n.rng||i)();if(r[6]=15&r[6]|64,r[8]=63&r[8]|128,e){o=o||0;for(var a=0;a<16;++a)e[o+a]=r[a];return e}return l(r)};var u,x,b,g,f,m,h,v=o(168),w=o(867),Z=o(360);const k=w.ZP.div(u||(u=(0,v.Z)(["\n  background-color: #ffffff;\n  border-radius: 8px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  padding: 20px;\n  max-width: 500px;\n  margin: 20px auto;\n"]))),y=w.ZP.input(x||(x=(0,v.Z)(["\n  width: 100%;\n  padding: 10px;\n  margin-bottom: 10px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 16px;\n  box-sizing: border-box;\n\n  &:focus {\n    border-color: #adb5bd; /* \u0421\u0432\u0456\u0442\u043b\u043e-\u0441\u0456\u0440\u0438\u0439 \u0434\u043b\u044f \u0444\u043e\u043a\u0443\u0441\u0443 */\n    outline: none;\n    box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, 0.25); /* \u0421\u0432\u0456\u0442\u043b\u043e-\u0441\u0456\u0440\u0438\u0439 \u0442\u0456\u043d\u044c */\n  }\n"]))),j=w.ZP.div(b||(b=(0,v.Z)(["\n  position: relative;\n"]))),P=w.ZP.ul(g||(g=(0,v.Z)(["\n  position: absolute;\n  top: 100%;\n  left: 0;\n  width: 100%;\n  background-color: #ffffff;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.1);\n  max-height: 200px;\n  overflow-y: auto;\n  z-index: 1000;\n  margin: 0;\n  padding: 0;\n  list-style: none;\n"]))),S=w.ZP.li(f||(f=(0,v.Z)(["\n  padding: 10px;\n  cursor: pointer;\n\n  &:hover {\n    background-color: #f8f9fa; /* \u0421\u0432\u0456\u0442\u043b\u043e-\u0441\u0456\u0440\u0438\u0439 \u0434\u043b\u044f \u0445\u043e\u0432\u0435\u0440\u0430 */\n  }\n\n  &.selected {\n    background-color: #e9ecef; /* \u0421\u0456\u0440\u0438\u0439 \u0434\u043b\u044f \u0432\u0438\u0431\u0440\u0430\u043d\u043e\u0433\u043e \u0435\u043b\u0435\u043c\u0435\u043d\u0442\u0430 */\n  }\n"]))),z=w.ZP.textarea(m||(m=(0,v.Z)(["\n  width: 100%;\n  height: 150px;\n  padding: 10px;\n  border: 1px solid #ced4da;\n  border-radius: 4px;\n  font-size: 16px;\n  resize: vertical;\n  box-sizing: border-box;\n\n  &:focus {\n    border-color: #adb5bd; /* \u0421\u0432\u0456\u0442\u043b\u043e-\u0441\u0456\u0440\u0438\u0439 \u0434\u043b\u044f \u0444\u043e\u043a\u0443\u0441\u0443 */\n    outline: none;\n    box-shadow: 0 0 0 0.2rem rgba(173, 181, 189, 0.25); /* \u0421\u0432\u0456\u0442\u043b\u043e-\u0441\u0456\u0440\u0438\u0439 \u0442\u0456\u043d\u044c */\n  }\n"]))),U=(0,w.ZP)(Z.Z)(h||(h=(0,v.Z)(["\n  width: 100%;\n  padding: 10px;\n  font-size: 16px;\n  border-radius: 4px;\n  background-color: #6c757d; /* \u0422\u0435\u043c\u043d\u043e-\u0441\u0456\u0440\u0438\u0439 \u0444\u043e\u043d \u043a\u043d\u043e\u043f\u043a\u0438 */\n  border-color: #6c757d; /* \u0422\u0435\u043c\u043d\u043e-\u0441\u0456\u0440\u0438\u0439 \u0431\u043e\u0440\u0434\u0435\u0440 \u043a\u043d\u043e\u043f\u043a\u0438 */\n\n  &:hover {\n    background-color: #5a6268; /* \u0422\u0440\u043e\u0445\u0438 \u0442\u0435\u043c\u043d\u0456\u0448\u0438\u0439 \u0441\u0456\u0440\u0438\u0439 \u0434\u043b\u044f \u0445\u043e\u0432\u0435\u0440\u0430 */\n    border-color: #545b62; /* \u0429\u0435 \u0442\u0435\u043c\u043d\u0456\u0448\u0438\u0439 \u0441\u0456\u0440\u0438\u0439 \u0434\u043b\u044f \u0431\u043e\u0440\u0434\u0435\u0440\u0430 \u043f\u0440\u0438 \u0445\u043e\u0432\u0435\u0440\u0456 */\n  }\n"])));var C=o(184);const N=n=>{let{games:e,onSubmit:o}=n;const[t,a]=(0,r.useState)(""),[d,i]=(0,r.useState)([]),[s,c]=(0,r.useState)(!1),[l,u]=(0,r.useState)("");(0,r.useEffect)((()=>{const n=e.filter((n=>n.title.toLowerCase().includes(t.toLowerCase())));i(n)}),[t,e]);const x=(0,r.useCallback)((()=>{setTimeout((()=>c(!1)),100)}),[]);return(0,C.jsx)(k,{children:(0,C.jsxs)("form",{onSubmit:n=>{if(n.preventDefault(),""===t||""===l)return void alert("Fill up all the fields!");const e={game:t,review:l,id:p()};a(""),u(""),o(e)},children:[(0,C.jsxs)(j,{children:[(0,C.jsx)(y,{onChange:n=>{const e=n.target.value;a(e),c(!0)},value:t,onFocus:()=>c(!0),onBlur:x,placeholder:"Enter the name of the game..."}),s&&d.length>0&&(0,C.jsx)(P,{children:d.map(((n,e)=>(0,C.jsxs)(S,{onMouseDown:()=>(n=>{a(n.title),c(!1)})(n),className:n.title===t?"selected":"",children:[n.title," "]},e)))})]}),(0,C.jsx)(z,{onChange:n=>{const e=n.target.value;u(e)},value:l}),(0,C.jsx)(U,{type:"submit",children:"\u0412\u0456\u0434\u043f\u0440\u0430\u0432\u0438\u0442\u0438"})]})})};var D,I,E,R,_,F;const L=w.ZP.div(D||(D=(0,v.Z)(["\n  padding: 20px;\n  background-color: #f9f9f9;\n  border-radius: 10px;\n  max-width: 1200px;\n  margin: 0 auto;\n  margin-top: 30px;\n"]))),V=w.ZP.div(I||(I=(0,v.Z)(["\n  display: grid;\n  grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));\n  gap: 20px;\n"]))),B=w.ZP.div(E||(E=(0,v.Z)(["\n  background-color: #fff;\n  border: 1px solid #ddd;\n  border-radius: 8px;\n  padding: 20px;\n  box-shadow: 0 2px 4px rgba(0, 0, 0, 0.1);\n  position: relative; /* \u0414\u043b\u044f \u0440\u043e\u0437\u0442\u0430\u0448\u0443\u0432\u0430\u043d\u043d\u044f \u043a\u043d\u043e\u043f\u043a\u0438 */\n"]))),J=w.ZP.h1(R||(R=(0,v.Z)(["\n  font-size: 24px;\n  color: #333;\n  margin-bottom: 10px;\n"]))),O=w.ZP.p(_||(_=(0,v.Z)(["\n  font-size: 16px;\n  color: #666;\n"]))),T=w.ZP.button(F||(F=(0,v.Z)(["\n  position: absolute;\n  top: 10px;\n  right: 10px;\n  background-color: #555;\n  color: white;\n  border: none;\n  border-radius: 5px;\n  padding: 5px 10px;\n  font-size: 14px;\n  cursor: pointer;\n  transition: background-color 0.3s ease;\n\n  &:hover {\n    background-color: #333;\n  }\n"]))),A=n=>{let{games:e}=n;const[o,t]=(0,r.useState)((()=>{const n=localStorage.getItem("comment");return n?JSON.parse(n):[]}));return(0,r.useEffect)((()=>{localStorage.setItem("comment",JSON.stringify(o))}),[o]),console.log(o),(0,C.jsxs)(L,{children:[0!==o.length&&(0,C.jsx)(V,{children:o.map(((n,e)=>(0,C.jsxs)(B,{children:[(0,C.jsx)(T,{onClick:()=>{return e=n.id,void t(o.filter((n=>n.id!==e)));var e},children:"X"}),(0,C.jsx)(J,{children:n.game}),(0,C.jsx)(O,{children:n.review})]},e)))}),(0,C.jsx)(N,{games:e,onSubmit:n=>{t((e=>[...e,n])),console.log(o)}})]})},M=A},360:(n,e,o)=>{o.d(e,{Z:()=>l});var r=o(694),t=o.n(r),a=o(791),d=o(341),i=o(162),s=o(184);const c=a.forwardRef(((n,e)=>{let{as:o,bsPrefix:r,variant:a="primary",size:c,active:l=!1,disabled:p=!1,className:u,...x}=n;const b=(0,i.vE)(r,"btn"),[g,{tagName:f}]=(0,d.FT)({tagName:o,disabled:p,...x}),m=f;return(0,s.jsx)(m,{...g,...x,ref:e,disabled:p,className:t()(u,b,l&&"active",a&&"".concat(b,"-").concat(a),c&&"".concat(b,"-").concat(c),x.href&&p&&"disabled")})}));c.displayName="Button";const l=c}}]);
//# sourceMappingURL=504.f0ab2329.chunk.js.map