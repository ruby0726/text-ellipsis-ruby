"use strict";Object.defineProperty(exports,"__esModule",{value:!0}),require("core-js/modules/es6.object.assign.js"),require("core-js/modules/es6.object.to-string.js"),require("core-js/modules/es6.array.slice.js");var t={lineNum:1,fontFamily:"MicrosoftYahei",fontWeight:"normal",fontSize:"14px",left:"...",tagName:"p",resize:!0},e=function(t){return"[object NodeList]"===Object.prototype.toString.call(t)},n=function(t){return"[object HTMLDivElement]"===Object.prototype.toString.call(t)},i=function(t){var e=arguments.length>1&&void 0!==arguments[1]?arguments[1]:{};return t.innerText=e.value,t.offsetWidth+.5},r=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=arguments.length>2?arguments[2]:void 0,r=0,o="",a=n.length-1;a>0;a--){o=n.slice(a);var s=i(e,Object.assign({value:o},t)),u=i(e,Object.assign({value:t.left},t));if(s>u){r=a;break}}return r-1},o=function(e){!function(t){if(null===t.getAttribute("text"))throw new Error("The text missed!")}(e);var n=function(e){var n=Object.assign({},t);return n.text=e.getAttribute("text"),n.left=e.getAttribute("left")||n.left,n.tagName=e.getAttribute("tagName")||n.tagName,n.lineNum=e.getAttribute("lineNum")||n.lineNum,n.fontFamily=e.getAttribute("fontFamily")||getComputedStyle(e)["font-family"]||n.fontFamily,n.fontSize=e.getAttribute("fontSize")||getComputedStyle(e)["font-size"]||n.fontSize,n.fontWeight=e.getAttribute("fontWeight")||getComputedStyle(e)["font-weight"]||n.fontWeight,n.width=e.getAttribute("width")||getComputedStyle(e.parentElement).width,n.resize=e.getAttribute("resize")||n.resize,n}(e),o=function(t){var e=document.createElement("span");return e.style.opacity=1,e.style["white-space"]="nowrap",e.style["font-weight"]=t.fontWeight,e.style["font-family"]=t.fontFamily,e.style["font-size"]=t.fontSize,document.body.append(e),e}(n),a=function(){for(var t=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},e=arguments.length>1?arguments[1]:void 0,n=1,o=0,a=[],s=0;s<=t.text.length&&!(n>t.lineNum);s++){var u=n===parseInt(t.lineNum,10)?t.left:"",l=t.text.substr(o,s-o),f=i(e,Object.assign({value:l},t));if(n===parseInt(t.lineNum,10)&&f>=parseFloat(t.width,10)){var c=r(t,e,l);l=l.substring(0,c),l+=u,f=i(e,Object.assign({value:l},t))}f<=parseFloat(t.width,10)?a[n-1]=l:(n++,o=--s)}return a}(n,o);return function(t,e,n){for(var i=document.createElement("div"),r=0;r<e.length;r++){var o=document.createElement(n.tagName);o.innerText=e[r],i.appendChild(o)}t.innerHTML=i.innerHTML}(e,a,n),function(t){t.remove()}(o),n},a=function(t){var e=o(t);!0!==e.resize&&"true"!==e.resize||window.addEventListener("resize",(function(){o(t)}))},s={config:function(e){Object.assign(t,e)},init:function(t){if(e(t))for(var i=0;i<t.length;i++)a(t[i]);else{if(!n(t))throw new Error("The ".concat(t," is not a HTMLElement"));a(t)}},watch:function(t){var i=[];if(e(t))for(var r=0;r<t.length;r++)i.push(t[r]);else{if(!n(t))throw new Error("The ".concat(t," is not a HTMLElement"));i.push(t)}for(var o=function(t){a(i[t]);var e=window.MutationObserver||window.WebKitMutationObserver||window.MozMutationObserver;if(e){new e((function(){a(i[t])})).observe(i[t],{attributes:!0})}else i[t].addEventListener("DOMAttrModified",(function(){a(i[t])}))},s=0;s<i.length;s++)o(s)}};exports.ellipsis=s;
