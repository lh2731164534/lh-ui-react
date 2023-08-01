"use strict";(self.webpackChunklh_ui_react=self.webpackChunklh_ui_react||[]).push([[458,712],{34576:function(L,E,t){t.r(E),t.d(E,{default:function(){return R}});var f=t(5574),l=t.n(f),P=t(97857),T=t.n(P),y=t(67294),p=t(14570),$=t(64236),S=t(27076),b=t(90482),w=t(82712),M=t(85893),W=T()({},w);function R(){var j=(0,p.pC)(),A=(0,y.useState)(!0),D=l()(A,2),z=D[0],e=D[1],n=(0,y.useRef)(p.m8.location.pathname);return(0,y.useEffect)(function(){return p.m8.listen(function(r){r.location.pathname!==n.current&&(n.current=r.location.pathname,document.documentElement.scrollTo(0,0))})},[]),(0,M.jsx)($.D.Provider,{value:{pkg:{name:"lh-ui-react",description:"A react library developed with dumi",version:"0.0.12-beta.1",license:"MIT",authors:["lh <2731164534@qq.com>"]},historyType:"browser",entryExports:W,demos:S.DE,components:S.wx,locales:b.k,loading:z,setLoading:e,hostname:void 0,themeConfig:{footer:'Copyright \xA9 2023 | Powered by <a href="https://d.umijs.org" target="_blank" rel="noreferrer">dumi</a>',prefersColor:{default:"light",switch:!0},nprogress:!0,lastUpdated:!0,name:"lh-ui-react",logo:"https://xh-bot.com/img/lh-ui-react-logo.png",nav:[{title:"\u6307\u5357",link:"/guide"},{title:"\u7EC4\u4EF6",link:"/components/hello"}],socialLinks:{github:"https://github.com/lh-js/lh-ui-react"}},_2_level_nav_available:!0},children:j})}},82712:function(L,E,t){t.r(E),t.d(E,{Button:function(){return S},Col:function(){return A},Divider:function(){return z},Hello:function(){return T},OutWave:function(){return b},Row:function(){return D},Space:function(){return w},Switch:function(){return $}});var f=t(67294),l=t(85893),P=function(n){return(0,l.jsx)("h4",{children:n.title})},T=P,y=t(5574),p=t.n(y),$=function(e){var n=e.isChecked,r=n===void 0?!1:n,c=e.size,i=c===void 0?1:c,h=e.disabled,d=h===void 0?!1:h,u=e.onText,o=u===void 0?"":u,_=e.offText,s=_===void 0?"":_,a=e.controll,v=a===void 0?!1:a,x=e.onChange,m=(0,f.useState)(r),g=p()(m,2),C=g[0],B=g[1],I=function(){d||(x&&x(!O(v)),!v&&B(!O(v)))},O=function(K){return K?r:C};return(0,l.jsx)(b,{disabled:d,children:(0,l.jsxs)("div",{className:"switch ".concat(d?"disabled":""," ").concat(O(v)?"on-color":"off-color"),style:{"--width":"".concat(i*44,"px"),"--height":"".concat(i*22,"px"),"--circleWidth":"".concat(i*(22-4),"px"),"--circleRight":"".concat(2*i,"px"),"--translateX":O(v)?0:"".concat(-22*i,"px"),"--textPadding":"".concat(i*8,"px"),"--textSize":"".concat(i*12,"px"),"--onText":o,"--offText":s},onClick:I,children:[(0,l.jsx)("span",{className:"off-text",children:typeof s=="string"?s.slice(0,1):s}),(0,l.jsx)("div",{className:"switch-label",children:(0,l.jsx)("span",{className:"on-text",children:typeof o=="string"?o.slice(0,1):o})})]})})},S=function(e){var n=e.children,r=n===void 0?"Default":n,c=e.width,i=c===void 0?74:c,h=e.height,d=h===void 0?34:h,u=e.type,o=u===void 0?"default":u,_=e.disabled,s=_===void 0?!1:_,a=e.isWave,v=a===void 0?!0:a,x=e.onClick,m=function(){s||x&&x()};return(0,l.jsx)(b,{type:o,disabled:s||!v,children:(0,l.jsx)("button",{children:r,className:"button ".concat(s?"disabled":""," ").concat(o),style:{"--width":"".concat(i,"px"),"--height":"".concat(d,"px")},onClick:m})})},b=function(e){var n=e.children,r=e.shadowWidth,c=r===void 0?8:r,i=e.type,h=i===void 0?"primary":i,d=e.disabled,u=d===void 0?!1:d,o=(0,f.useRef)(null),_=(0,f.useState)(),s=p()(_,2),a=s[0],v=s[1];(0,f.useEffect)(function(){var m=x(o.current);m&&v(m)},[]);function x(m){var g=m;if(g){var C=g.firstElementChild;return C?(C.setAttribute("style",C.getAttribute("style")+";box-sizing: border-box"),window.getComputedStyle(C)):void 0}}return(0,l.jsx)("div",{ref:o,children:n,className:"out-wave ".concat(u?"disabled":""," ").concat(h),style:{"--width":a==null?void 0:a.width,"--height":a==null?void 0:a.height,"--radius":a==null?void 0:a.borderRadius,"--shadowWidth":"".concat(c,"px")}})},w=function(e){var n=e.children,r=e.direction,c=r===void 0?"horizontal":r,i=e.spaceSize,h=i===void 0?8:i,d=e.vSpaceSize,u=d===void 0?8:d,o=e.align,_=o===void 0?"center":o,s=e.wrap,a=s===void 0?!1:s;return(0,l.jsx)("div",{className:"space ".concat(c," ").concat(_," ").concat(a?"wrap":""),children:n,style:{"--spaceSize":"".concat(h,"px"),"--vSpaceSize":"".concat(u,"px")}})},M=t(52677),W=t.n(M),R=(0,f.createContext)({columns:24}),j=R,A=function(e){var n=e.children,r=e.span,c=e.offset,i=c===void 0?0:c,h=e.fill,d=h===void 0?!1:h,u=f.useContext(j),o=u.gutters,_=u.columns,s=function(v){return console.log(W()(v)),typeof v=="number"?"".concat(v/_*100,"%"):"auto"};return(0,l.jsx)("div",{className:"row",children:n,style:{"--span":s(r),"--gutterH":"".concat(o&&o[0],"px"),"--offset":"".concat(i/_*100,"%")}})},D=function(e){var n=e.children,r=e.gutters,c=r===void 0?[0,0]:r,i=e.columns,h=i===void 0?24:i,d=p()(c,2),u=d[0],o=d[1],_=(0,f.useMemo)(function(){return{gutters:[u,o],columns:h}},[u,o]);return(0,l.jsx)(j.Provider,{value:_,children:(0,l.jsx)("div",{className:"col",children:n,style:{"--gutterH":"".concat(c[0],"px"),"--gutterV":"".concat(c[1],"px")}})})},z=function(e){var n=e.children;return(0,l.jsx)("div",{className:"divider",children:(0,l.jsx)("span",{className:"divider-children",children:n})})}}}]);
