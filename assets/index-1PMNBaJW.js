var ke=(d,u)=>()=>(u||d((u={exports:{}}).exports,u),u.exports);var Ue=ke((Re,A)=>{(function(){const u=document.createElement("link").relList;if(u&&u.supports&&u.supports("modulepreload"))return;for(const v of document.querySelectorAll('link[rel="modulepreload"]'))I(v);new MutationObserver(v=>{for(const y of v)if(y.type==="childList")for(const E of y.addedNodes)E.tagName==="LINK"&&E.rel==="modulepreload"&&I(E)}).observe(document,{childList:!0,subtree:!0});function b(v){const y={};return v.integrity&&(y.integrity=v.integrity),v.referrerPolicy&&(y.referrerPolicy=v.referrerPolicy),v.crossOrigin==="use-credentials"?y.credentials="include":v.crossOrigin==="anonymous"?y.credentials="omit":y.credentials="same-origin",y}function I(v){if(v.ep)return;v.ep=!0;const y=b(v);fetch(v.href,y)}})();var A={};(function d(u,b,I,v){var y=!!(u.Worker&&u.Blob&&u.Promise&&u.OffscreenCanvas&&u.OffscreenCanvasRenderingContext2D&&u.HTMLCanvasElement&&u.HTMLCanvasElement.prototype.transferControlToOffscreen&&u.URL&&u.URL.createObjectURL),E=typeof Path2D=="function"&&typeof DOMMatrix=="function",J=function(){if(!u.OffscreenCanvas)return!1;var r=new OffscreenCanvas(1,1),e=r.getContext("2d");e.fillRect(0,0,1,1);var a=r.transferToImageBitmap();try{e.createPattern(a,"no-repeat")}catch{return!1}return!0}();function D(){}function L(r){var e=b.exports.Promise,a=e!==void 0?e:u.Promise;return typeof a=="function"?new a(r):(r(D,D),null)}var O=function(r,e){return{transform:function(a){if(r)return a;if(e.has(a))return e.get(a);var n=new OffscreenCanvas(a.width,a.height),s=n.getContext("2d");return s.drawImage(a,0,0),e.set(a,n),n},clear:function(){e.clear()}}}(J,new Map),_=function(){var r=Math.floor(16.666666666666668),e,a,n={},s=0;return typeof requestAnimationFrame=="function"&&typeof cancelAnimationFrame=="function"?(e=function(o){var i=Math.random();return n[i]=requestAnimationFrame(function t(c){s===c||s+r-1<c?(s=c,delete n[i],o()):n[i]=requestAnimationFrame(t)}),i},a=function(o){n[o]&&cancelAnimationFrame(n[o])}):(e=function(o){return setTimeout(o,r)},a=function(o){return clearTimeout(o)}),{frame:e,cancel:a}}(),Q=function(){var r,e,a={};function n(s){function o(i,t){s.postMessage({options:i||{},callback:t})}s.init=function(t){var c=t.transferControlToOffscreen();s.postMessage({canvas:c},[c])},s.fire=function(t,c,h){if(e)return o(t,null),e;var g=Math.random().toString(36).slice(2);return e=L(function(f){function p(M){M.data.callback===g&&(delete a[g],s.removeEventListener("message",p),e=null,O.clear(),h(),f())}s.addEventListener("message",p),o(t,g),a[g]=p.bind(null,{data:{callback:g}})}),e},s.reset=function(){s.postMessage({reset:!0});for(var t in a)a[t](),delete a[t]}}return function(){if(r)return r;if(!I&&y){var s=["var CONFETTI, SIZE = {}, module = {};","("+d.toString()+")(this, module, true, SIZE);","onmessage = function(msg) {","  if (msg.data.options) {","    CONFETTI(msg.data.options).then(function () {","      if (msg.data.callback) {","        postMessage({ callback: msg.data.callback });","      }","    });","  } else if (msg.data.reset) {","    CONFETTI && CONFETTI.reset();","  } else if (msg.data.resize) {","    SIZE.width = msg.data.resize.width;","    SIZE.height = msg.data.resize.height;","  } else if (msg.data.canvas) {","    SIZE.width = msg.data.canvas.width;","    SIZE.height = msg.data.canvas.height;","    CONFETTI = module.exports.create(msg.data.canvas);","  }","}"].join(`
`);try{r=new Worker(URL.createObjectURL(new Blob([s])))}catch(o){return typeof console!==void 0&&typeof console.warn=="function"&&console.warn("🎊 Could not load worker",o),null}n(r)}return r}}(),Y={particleCount:50,angle:90,spread:45,startVelocity:45,decay:.9,gravity:1,drift:0,ticks:200,x:.5,y:.5,shapes:["square","circle"],zIndex:100,colors:["#26ccff","#a25afd","#ff5e7e","#88ff5a","#fcff42","#ffa62d","#ff36ff"],disableForReducedMotion:!1,scalar:1};function X(r,e){return e?e(r):r}function ee(r){return r!=null}function m(r,e,a){return X(r&&ee(r[e])?r[e]:Y[e],a)}function re(r){return r<0?0:Math.floor(r)}function ae(r,e){return Math.floor(Math.random()*(e-r))+r}function S(r){return parseInt(r,16)}function te(r){return r.map(ne)}function ne(r){var e=String(r).replace(/[^0-9a-f]/gi,"");return e.length<6&&(e=e[0]+e[0]+e[1]+e[1]+e[2]+e[2]),{r:S(e.substring(0,2)),g:S(e.substring(2,4)),b:S(e.substring(4,6))}}function se(r){var e=m(r,"origin",Object);return e.x=m(e,"x",Number),e.y=m(e,"y",Number),e}function oe(r){r.width=document.documentElement.clientWidth,r.height=document.documentElement.clientHeight}function ie(r){var e=r.getBoundingClientRect();r.width=e.width,r.height=e.height}function ce(r){var e=document.createElement("canvas");return e.style.position="fixed",e.style.top="0px",e.style.left="0px",e.style.pointerEvents="none",e.style.zIndex=r,e}function le(r,e,a,n,s,o,i,t,c){r.save(),r.translate(e,a),r.rotate(o),r.scale(n,s),r.arc(0,0,1,i,t,c),r.restore()}function ue(r){var e=r.angle*(Math.PI/180),a=r.spread*(Math.PI/180);return{x:r.x,y:r.y,wobble:Math.random()*10,wobbleSpeed:Math.min(.11,Math.random()*.1+.05),velocity:r.startVelocity*.5+Math.random()*r.startVelocity,angle2D:-e+(.5*a-Math.random()*a),tiltAngle:(Math.random()*(.75-.25)+.25)*Math.PI,color:r.color,shape:r.shape,tick:0,totalTicks:r.ticks,decay:r.decay,drift:r.drift,random:Math.random()+2,tiltSin:0,tiltCos:0,wobbleX:0,wobbleY:0,gravity:r.gravity*3,ovalScalar:.6,scalar:r.scalar,flat:r.flat}}function de(r,e){e.x+=Math.cos(e.angle2D)*e.velocity+e.drift,e.y+=Math.sin(e.angle2D)*e.velocity+e.gravity,e.velocity*=e.decay,e.flat?(e.wobble=0,e.wobbleX=e.x+10*e.scalar,e.wobbleY=e.y+10*e.scalar,e.tiltSin=0,e.tiltCos=0,e.random=1):(e.wobble+=e.wobbleSpeed,e.wobbleX=e.x+10*e.scalar*Math.cos(e.wobble),e.wobbleY=e.y+10*e.scalar*Math.sin(e.wobble),e.tiltAngle+=.1,e.tiltSin=Math.sin(e.tiltAngle),e.tiltCos=Math.cos(e.tiltAngle),e.random=Math.random()+2);var a=e.tick++/e.totalTicks,n=e.x+e.random*e.tiltCos,s=e.y+e.random*e.tiltSin,o=e.wobbleX+e.random*e.tiltCos,i=e.wobbleY+e.random*e.tiltSin;if(r.fillStyle="rgba("+e.color.r+", "+e.color.g+", "+e.color.b+", "+(1-a)+")",r.beginPath(),E&&e.shape.type==="path"&&typeof e.shape.path=="string"&&Array.isArray(e.shape.matrix))r.fill(fe(e.shape.path,e.shape.matrix,e.x,e.y,Math.abs(o-n)*.1,Math.abs(i-s)*.1,Math.PI/10*e.wobble));else if(e.shape.type==="bitmap"){var t=Math.PI/10*e.wobble,c=Math.abs(o-n)*.1,h=Math.abs(i-s)*.1,g=e.shape.bitmap.width*e.scalar,f=e.shape.bitmap.height*e.scalar,p=new DOMMatrix([Math.cos(t)*c,Math.sin(t)*c,-Math.sin(t)*h,Math.cos(t)*h,e.x,e.y]);p.multiplySelf(new DOMMatrix(e.shape.matrix));var M=r.createPattern(O.transform(e.shape.bitmap),"no-repeat");M.setTransform(p),r.globalAlpha=1-a,r.fillStyle=M,r.fillRect(e.x-g/2,e.y-f/2,g,f),r.globalAlpha=1}else if(e.shape==="circle")r.ellipse?r.ellipse(e.x,e.y,Math.abs(o-n)*e.ovalScalar,Math.abs(i-s)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI):le(r,e.x,e.y,Math.abs(o-n)*e.ovalScalar,Math.abs(i-s)*e.ovalScalar,Math.PI/10*e.wobble,0,2*Math.PI);else if(e.shape==="star")for(var l=Math.PI/2*3,w=4*e.scalar,F=8*e.scalar,C=e.x,T=e.y,x=5,k=Math.PI/x;x--;)C=e.x+Math.cos(l)*F,T=e.y+Math.sin(l)*F,r.lineTo(C,T),l+=k,C=e.x+Math.cos(l)*w,T=e.y+Math.sin(l)*w,r.lineTo(C,T),l+=k;else r.moveTo(Math.floor(e.x),Math.floor(e.y)),r.lineTo(Math.floor(e.wobbleX),Math.floor(s)),r.lineTo(Math.floor(o),Math.floor(i)),r.lineTo(Math.floor(n),Math.floor(e.wobbleY));return r.closePath(),r.fill(),e.tick<e.totalTicks}function he(r,e,a,n,s){var o=e.slice(),i=r.getContext("2d"),t,c,h=L(function(g){function f(){t=c=null,i.clearRect(0,0,n.width,n.height),O.clear(),s(),g()}function p(){I&&!(n.width===v.width&&n.height===v.height)&&(n.width=r.width=v.width,n.height=r.height=v.height),!n.width&&!n.height&&(a(r),n.width=r.width,n.height=r.height),i.clearRect(0,0,n.width,n.height),o=o.filter(function(M){return de(i,M)}),o.length?t=_.frame(p):f()}t=_.frame(p),c=f});return{addFettis:function(g){return o=o.concat(g),h},canvas:r,promise:h,reset:function(){t&&_.cancel(t),c&&c()}}}function q(r,e){var a=!r,n=!!m(e||{},"resize"),s=!1,o=m(e,"disableForReducedMotion",Boolean),i=y&&!!m(e||{},"useWorker"),t=i?Q():null,c=a?oe:ie,h=r&&t?!!r.__confetti_initialized:!1,g=typeof matchMedia=="function"&&matchMedia("(prefers-reduced-motion)").matches,f;function p(l,w,F){for(var C=m(l,"particleCount",re),T=m(l,"angle",Number),x=m(l,"spread",Number),k=m(l,"startVelocity",Number),ve=m(l,"decay",Number),me=m(l,"gravity",Number),be=m(l,"drift",Number),W=m(l,"colors",te),Me=m(l,"ticks",Number),z=m(l,"shapes"),ye=m(l,"scalar"),we=!!m(l,"flat"),H=se(l),V=C,B=[],Fe=r.width*H.x,Ce=r.height*H.y;V--;)B.push(ue({x:Fe,y:Ce,angle:T,spread:x,startVelocity:k,color:W[V%W.length],shape:z[ae(0,z.length)],ticks:Me,decay:ve,gravity:me,drift:be,scalar:ye,flat:we}));return f?f.addFettis(B):(f=he(r,B,c,w,F),f.promise)}function M(l){var w=o||m(l,"disableForReducedMotion",Boolean),F=m(l,"zIndex",Number);if(w&&g)return L(function(k){k()});a&&f?r=f.canvas:a&&!r&&(r=ce(F),document.body.appendChild(r)),n&&!h&&c(r);var C={width:r.width,height:r.height};t&&!h&&t.init(r),h=!0,t&&(r.__confetti_initialized=!0);function T(){if(t){var k={getBoundingClientRect:function(){if(!a)return r.getBoundingClientRect()}};c(k),t.postMessage({resize:{width:k.width,height:k.height}});return}C.width=C.height=null}function x(){f=null,n&&(s=!1,u.removeEventListener("resize",T)),a&&r&&(document.body.removeChild(r),r=null,h=!1)}return n&&!s&&(s=!0,u.addEventListener("resize",T,!1)),t?t.fire(l,C,x):p(l,C,x)}return M.reset=function(){t&&t.reset(),f&&f.reset()},M}var U;function j(){return U||(U=q(null,{useWorker:!0,resize:!0})),U}function fe(r,e,a,n,s,o,i){var t=new Path2D(r),c=new Path2D;c.addPath(t,new DOMMatrix(e));var h=new Path2D;return h.addPath(c,new DOMMatrix([Math.cos(i)*s,Math.sin(i)*s,-Math.sin(i)*o,Math.cos(i)*o,a,n])),h}function ge(r){if(!E)throw new Error("path confetti are not supported in this browser");var e,a;typeof r=="string"?e=r:(e=r.path,a=r.matrix);var n=new Path2D(e),s=document.createElement("canvas"),o=s.getContext("2d");if(!a){for(var i=1e3,t=i,c=i,h=0,g=0,f,p,M=0;M<i;M+=2)for(var l=0;l<i;l+=2)o.isPointInPath(n,M,l,"nonzero")&&(t=Math.min(t,M),c=Math.min(c,l),h=Math.max(h,M),g=Math.max(g,l));f=h-t,p=g-c;var w=10,F=Math.min(w/f,w/p);a=[F,0,0,F,-Math.round(f/2+t)*F,-Math.round(p/2+c)*F]}return{type:"path",path:e,matrix:a}}function pe(r){var e,a=1,n="#000000",s='"Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol", "Noto Color Emoji", "EmojiOne Color", "Android Emoji", "Twemoji Mozilla", "system emoji", sans-serif';typeof r=="string"?e=r:(e=r.text,a="scalar"in r?r.scalar:a,s="fontFamily"in r?r.fontFamily:s,n="color"in r?r.color:n);var o=10*a,i=""+o+"px "+s,t=new OffscreenCanvas(o,o),c=t.getContext("2d");c.font=i;var h=c.measureText(e),g=Math.ceil(h.actualBoundingBoxRight+h.actualBoundingBoxLeft),f=Math.ceil(h.actualBoundingBoxAscent+h.actualBoundingBoxDescent),p=2,M=h.actualBoundingBoxLeft+p,l=h.actualBoundingBoxAscent+p;g+=p+p,f+=p+p,t=new OffscreenCanvas(g,f),c=t.getContext("2d"),c.font=i,c.fillStyle=n,c.fillText(e,M,l);var w=1/a;return{type:"bitmap",bitmap:t.transferToImageBitmap(),matrix:[w,0,0,w,-g*w/2,-f*w/2]}}b.exports=function(){return j().apply(this,arguments)},b.exports.reset=function(){j().reset()},b.exports.create=q,b.exports.shapeFromPath=ge,b.exports.shapeFromText=pe})(function(){return typeof window<"u"?window:typeof self<"u"?self:this||{}}(),A,!1);const Te=A.exports;A.exports.create;const Pe=[{species:"bear",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/bear.png"},{species:"bear",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/bear.png"},{species:"rabbit",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/rabbit.png"},{species:"rabbit",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/rabbit.png"},{species:"racoon",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/racoon.png"},{species:"racoon",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/racoon.png"},{species:"fox",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/fox.png"},{species:"fox",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/fox.png"},{species:"squirrel",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/squirrel.png"},{species:"squirrel",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/squirrel.png"},{species:"hedgehog",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/hedgehog.png"},{species:"hedgehog",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/hedgehog.png"},{species:"deer",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/deer.png"},{species:"owl",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/owl.png"},{species:"deer",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/deer.png"},{species:"owl",backFace:"./src/assets/Untitled_Artwork.png",frontFace:"./src/assets/owl.png"}],R=document.querySelector(".card__container"),$=document.querySelector("#reset-button");let Z,N=0,P=[];if(!R||!$)throw new Error("Issue with selector of our container");const xe=d=>d.map(b=>`<section class="card flip card__${b.species}" > 
  <img class="card__back-face" src="${b.backFace}">
  <img class="card__front-face" src="${b.frontFace}">
  </section>`).join(""),Ee=d=>{let u=d.length;for(;u;){const b=Math.floor(Math.random()*u--);[d[u],d[b]]=[d[b],d[u]]}return d},K=d=>{d.classList.toggle("flip")},Ie=d=>{P.length<2&&d.classList.contains("flip")&&(K(d),P.push(d))},Ae=()=>{P.length==2&&(P[0].classList.value==P[1].classList.value?N++:P.forEach(d=>K(d)),G())},G=()=>{P=[]},Le=async d=>{const u=d.currentTarget;Ie(u),P.length==2&&await new Promise(b=>setTimeout(b,1500)),Ae(),N==8&&(_e(),alert("You have matched all the cards!"))},Oe=()=>{R.innerHTML=xe(Ee([...Pe])),Z=document.querySelectorAll(".card"),Z.forEach(d=>d.addEventListener("click",Le))},_e=()=>{Te({particleCount:1200,startVelocity:100,spread:180,angle:90,colors:["#DFFF00","#E4D00A","#40826D","#9FE2BF","#FF5733","#0000b2","#9999ff","#000066"],drift:1,ticks:400,origin:{x:.5,y:1}})},Se=()=>{R.innerHTML="",Oe(),N=0,G()};$.addEventListener("click",Se)});export default Ue();