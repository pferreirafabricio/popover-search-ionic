"use strict";(globalThis["webpackChunkpopover_search_ionic"]=globalThis["webpackChunkpopover_search_ionic"]||[]).push([[990,779],{1779:(e,t,r)=>{r.r(t),r.d(t,{GESTURE_CONTROLLER:()=>n.G,createGesture:()=>d});var n=r(9350);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */const o=(e,t,r,n)=>{const o=s(e)?{capture:!!n.capture,passive:!!n.passive}:!!n.capture;let a,c;return e["__zone_symbol__addEventListener"]?(a="__zone_symbol__addEventListener",c="__zone_symbol__removeEventListener"):(a="addEventListener",c="removeEventListener"),e[a](t,r,o),()=>{e[c](t,r,o)}},s=e=>{if(void 0===a)try{const t=Object.defineProperty({},"passive",{get:()=>{a=!0}});e.addEventListener("optsTest",(()=>{}),t)}catch(t){a=!1}return!!a};let a;const c=2e3,i=(e,t,r,n,s)=>{let a,i,l,d,v,m,p,h=0;const X=n=>{h=Date.now()+c,t(n)&&(!i&&r&&(i=o(e,"touchmove",r,s)),l||(l=o(n.target,"touchend",Y,s)),d||(d=o(n.target,"touchcancel",Y,s)))},y=n=>{h>Date.now()||t(n)&&(!m&&r&&(m=o(u(e),"mousemove",r,s)),p||(p=o(u(e),"mouseup",b,s)))},Y=e=>{g(),n&&n(e)},b=e=>{_(),n&&n(e)},g=()=>{i&&i(),l&&l(),d&&d(),i=l=d=void 0},_=()=>{m&&m(),p&&p(),m=p=void 0},f=()=>{g(),_()},T=(t=!0)=>{t?(a||(a=o(e,"touchstart",X,s)),v||(v=o(e,"mousedown",y,s))):(a&&a(),v&&v(),a=v=void 0,f())},E=()=>{T(!1),n=r=t=void 0};return{enable:T,stop:f,destroy:E}},u=e=>e instanceof Document?e:e.ownerDocument,l=(e,t,r)=>{const n=r*(Math.PI/180),o="x"===e,s=Math.cos(n),a=t*t;let c=0,i=0,u=!1,l=0;return{start(e,t){c=e,i=t,l=0,u=!0},detect(e,t){if(!u)return!1;const r=e-c,n=t-i,d=r*r+n*n;if(d<a)return!1;const v=Math.sqrt(d),m=(o?r:n)/v;return l=m>s?1:m<-s?-1:0,u=!1,!0},isGesture(){return 0!==l},getDirection(){return l}}},d=e=>{let t=!1,r=!1,o=!0,s=!1;const a=Object.assign({disableScroll:!1,direction:"x",gesturePriority:0,passive:!0,maxAngle:40,threshold:10},e),c=a.canStart,u=a.onWillStart,d=a.onStart,h=a.onEnd,X=a.notCaptured,y=a.onMove,Y=a.threshold,b=a.passive,g=a.blurOnStart,_={type:"pan",startX:0,startY:0,startTime:0,currentX:0,currentY:0,velocityX:0,velocityY:0,deltaX:0,deltaY:0,currentTime:0,event:void 0,data:void 0},f=l(a.direction,a.threshold,a.maxAngle),T=n.G.createGesture({name:e.gestureName,priority:e.gesturePriority,disableScroll:e.disableScroll}),E=e=>{const t=p(e);return!(r||!o)&&(m(e,_),_.startX=_.currentX,_.startY=_.currentY,_.startTime=_.currentTime=t,_.velocityX=_.velocityY=_.deltaX=_.deltaY=0,_.event=e,(!c||!1!==c(_))&&(T.release(),!!T.start()&&(r=!0,0===Y?G():(f.start(_.startX,_.startY),!0))))},S=e=>{t?!s&&o&&(s=!0,v(_,e),requestAnimationFrame(w)):(v(_,e),f.detect(_.currentX,_.currentY)&&(f.isGesture()&&G()||P()))},w=()=>{t&&(s=!1,y&&y(_))},G=()=>!!T.capture()&&(t=!0,o=!1,_.startX=_.currentX,_.startY=_.currentY,_.startTime=_.currentTime,u?u(_).then(D):D(),!0),L=()=>{if("undefined"!==typeof document){const e=document.activeElement;(null===e||void 0===e?void 0:e.blur)&&e.blur()}},D=()=>{g&&L(),d&&d(_),o=!0},M=()=>{t=!1,r=!1,s=!1,o=!0,T.release()},k=e=>{const r=t,n=o;M(),n&&(v(_,e),r?h&&h(_):X&&X(_))},O=i(a.el,E,S,k,{capture:!1,passive:b}),P=()=>{M(),O.stop(),X&&X(_)};return{enable(e=!0){e||(t&&k(void 0),M()),O.enable(e)},destroy(){T.destroy(),O.destroy()}}},v=(e,t)=>{if(!t)return;const r=e.currentX,n=e.currentY,o=e.currentTime;m(t,e);const s=e.currentX,a=e.currentY,c=e.currentTime=p(t),i=c-o;if(i>0&&i<100){const t=(s-r)/i,o=(a-n)/i;e.velocityX=.7*t+.3*e.velocityX,e.velocityY=.7*o+.3*e.velocityY}e.deltaX=s-e.startX,e.deltaY=a-e.startY,e.event=t},m=(e,t)=>{let r=0,n=0;if(e){const t=e.changedTouches;if(t&&t.length>0){const e=t[0];r=e.clientX,n=e.clientY}else void 0!==e.pageX&&(r=e.pageX,n=e.pageY)}t.currentX=r,t.currentY=n},p=e=>e.timeStamp||Date.now()},8990:(e,t,r)=>{r.r(t),r.d(t,{createSwipeBackGesture:()=>a});var n=r(6587),o=r(545),s=r(1779);
/*!
 * (C) Ionic http://ionicframework.com - MIT License
 */
const a=(e,t,r,a,c)=>{const i=e.ownerDocument.defaultView;let u=(0,o.i)(e);const l=e=>{const t=50,{startX:r}=e;return u?r>=i.innerWidth-t:r<=t},d=e=>u?-e.deltaX:e.deltaX,v=e=>u?-e.velocityX:e.velocityX,m=r=>(u=(0,o.i)(e),l(r)&&t()),p=e=>{const t=d(e),r=t/i.innerWidth;a(r)},h=e=>{const t=d(e),r=i.innerWidth,o=t/r,s=v(e),a=r/2,u=s>=0&&(s>.2||t>a),l=u?1-o:o,m=l*r;let p=0;if(m>5){const e=m/Math.abs(s);p=Math.min(e,540)}c(u,o<=0?.01:(0,n.m)(0,o,.9999),p)};return(0,s.createGesture)({el:e,gestureName:"goback-swipe",gesturePriority:40,threshold:10,canStart:m,onStart:r,onMove:p,onEnd:h})}}}]);
//# sourceMappingURL=990.3c9ea8b4.js.map