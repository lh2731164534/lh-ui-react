"use strict";(self.webpackChunklh_ui_react=self.webpackChunklh_ui_react||[]).push([[815],{69815:function(F,C,f){f.r(C),f.d(C,{Button:function(){return N},Col:function(){return O},Hello:function(){return z},OutWave:function(){return m},Row:function(){return V},Space:function(){return R},Switch:function(){return W}});var x=f(67294),v=f(85893),j=function(a){return(0,v.jsx)("h4",{children:a.title})},z=j,T=f(5574),$=f.n(T),W=function(t){var a=t.isChecked,r=a===void 0?!1:a,o=t.size,e=o===void 0?1:o,d=t.disabled,l=d===void 0?!1:d,s=t.onText,n=s===void 0?"":s,u=t.offText,c=u===void 0?"":u,i=t.controll,h=i===void 0?!1:i,g=t.onChange,p=(0,x.useState)(r),S=$()(p,2),y=S[0],B=S[1],D=function(){l||(g&&g(!w(h)),!h&&B(!w(h)))},w=function(E){return E?r:y};return(0,v.jsx)(m,{disabled:l,children:(0,v.jsxs)("div",{className:"switch ".concat(l?"disabled":""," ").concat(w(h)?"on-color":"off-color"),style:{"--width":"".concat(e*44,"px"),"--height":"".concat(e*22,"px"),"--circleWidth":"".concat(e*(22-4),"px"),"--circleRight":"".concat(2*e,"px"),"--translateX":w(h)?0:"".concat(-22*e,"px"),"--textPadding":"".concat(e*8,"px"),"--textSize":"".concat(e*12,"px"),"--onText":n,"--offText":c},onClick:D,children:[(0,v.jsx)("span",{className:"off-text",children:typeof c=="string"?c.slice(0,1):c}),(0,v.jsx)("div",{className:"switch-label",children:(0,v.jsx)("span",{className:"on-text",children:typeof n=="string"?n.slice(0,1):n})})]})})},N=function(t){var a=t.children,r=a===void 0?"Default":a,o=t.width,e=o===void 0?74:o,d=t.height,l=d===void 0?34:d,s=t.type,n=s===void 0?"default":s,u=t.disabled,c=u===void 0?!1:u,i=t.isWave,h=i===void 0?!0:i,g=t.onClick,p=function(){c||g&&g()};return(0,v.jsx)(m,{type:n,disabled:c||!h,children:(0,v.jsx)("button",{children:r,className:"button ".concat(c?"disabled":""," ").concat(n),style:{"--width":"".concat(e,"px"),"--height":"".concat(l,"px")},onClick:p})})},m=function(t){var a=t.children,r=t.shadowWidth,o=r===void 0?8:r,e=t.type,d=e===void 0?"primary":e,l=t.disabled,s=l===void 0?!1:l,n=(0,x.useRef)(null),u=(0,x.useState)(),c=$()(u,2),i=c[0],h=c[1];(0,x.useEffect)(function(){var p=g(n.current);p&&h(p)},[]);function g(p){var S=p;if(S){var y=S.firstElementChild;return y?(y.setAttribute("style",y.getAttribute("style")+";box-sizing: border-box"),window.getComputedStyle(y)):void 0}}return(0,v.jsx)("div",{ref:n,children:a,className:"out-wave ".concat(s?"disabled":""," ").concat(d),style:{"--width":i==null?void 0:i.width,"--height":i==null?void 0:i.height,"--radius":i==null?void 0:i.borderRadius,"--shadowWidth":"".concat(o,"px")}})},R=function(t){var a=t.children,r=t.direction,o=r===void 0?"horizontal":r,e=t.spaceSize,d=e===void 0?8:e,l=t.vSpaceSize,s=l===void 0?8:l,n=t.align,u=n===void 0?"center":n,c=t.wrap,i=c===void 0?!1:c;return(0,v.jsx)("div",{className:"space ".concat(o," ").concat(u," ").concat(i?"wrap":""),children:a,style:{"--spaceSize":"".concat(d,"px"),"--vSpaceSize":"".concat(s,"px")}})},k=f(52677),H=f.n(k),A=(0,x.createContext)({columns:24}),b=A,O=function(t){var a=t.children,r=t.span,o=t.offset,e=o===void 0?0:o,d=t.fill,l=d===void 0?!1:d,s=x.useContext(b),n=s.gutters,u=s.columns,c=function(h){return console.log(H()(h)),typeof h=="number"?"".concat(h/u*100,"%"):"auto"};return(0,v.jsx)("div",{className:"row",children:a,style:{"--span":c(r),"--gutterH":"".concat(n&&n[0],"px"),"--offset":"".concat(e/u*100,"%")}})},V=function(t){var a=t.children,r=t.gutters,o=r===void 0?[0,0]:r,e=t.columns,d=e===void 0?24:e,l=$()(o,2),s=l[0],n=l[1],u=(0,x.useMemo)(function(){return{gutters:[s,n],columns:d}},[s,n]);return(0,v.jsx)(b.Provider,{value:u,children:(0,v.jsx)("div",{className:"col",children:a,style:{"--gutterH":"".concat(o[0],"px"),"--gutterV":"".concat(o[1],"px")}})})}}}]);
