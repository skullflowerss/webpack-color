(()=>{"use strict";const e=[0,1,2,3,4,5,6,7,8,9,"A","B","C","D","E","F"],t=document.getElementById("btn"),n=document.querySelector(".color");t.addEventListener("click",(()=>{const o=(()=>{let t="#";for(let n=0;n<6;n++)t+=e[Math.floor(Math.random()*e.length)];return t})();document.body.style.backgroundColor=o,n.textContent=o,t.style.backgroundColor=o}));const o=document.getElementById("rgb");document.getElementById("hex");o.addEventListener("click",(()=>{{let e=function(e){var t=/^#?([a-f\d]{2})([a-f\d]{2})([a-f\d]{2})$/i.exec(e);return t?{r:parseInt(t[1],16),g:parseInt(t[2],16),b:parseInt(t[3],16)}:null}(document.querySelector(".color").innerHTML);console.log(e),document.querySelector(".color").textContent=JSON.stringify(e)}}))})();