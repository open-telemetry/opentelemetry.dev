!function(e){var t={};function n(r){if(t[r])return t[r].exports;var o=t[r]={i:r,l:!1,exports:{}};return e[r].call(o.exports,o,o.exports,n),o.l=!0,o.exports}n.m=e,n.c=t,n.d=function(e,t,r){n.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:r})},n.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},n.t=function(e,t){if(1&t&&(e=n(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var r=Object.create(null);if(n.r(r),Object.defineProperty(r,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var o in e)n.d(r,o,function(t){return e[t]}.bind(null,o));return r},n.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return n.d(t,"a",t),t},n.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},n.p="",n(n.s=202)}({202:function(e,t){let n={shouldSort:!0,includeMatches:!0,threshold:.1,tokenize:!0,location:0,distance:100,maxPatternLength:32,minMatchCharLength:1,keys:[{name:"title",weight:.8},{name:"description",weight:.5},{name:"tags",weight:.3},{name:"categories",weight:.3}]},r=new URLSearchParams(window.location.search).get("s");if(r)document.querySelector("#search-query").value=r,document.querySelector("#default-body").style.display="none",function(e){fetch("/registry/index.json").then(e=>e.json()).then(t=>{let r=new Fuse(t,n).search(e);r.length>0?o(r):document.querySelector("#search-results").innerHTML+="<p>No matches found</p>"})}(r);else{let e=document.querySelector("#default-body");"none"===e.style.display&&(e.style.display="block")}function o(e){e.forEach((e,t)=>{let o=e.item.description,i="",l=[];n.tokenize?l.push(r):e.matches.forEach(e=>{"tags"===e.key||"categories"===e.key?l.push(e.value):"description"===e.key&&(start=e.indices[0][0]-60>0?e.indices[0][0]-60:0,end=e.indices[0][1]+60<o.length?e.indices[0][1]+60:o.length,i+=o.substring(start,end),l.push(e.value.substring(e.indices[0][0],e.indices[0][1]-mvalue.indices[0][0]+1)))}),i.length<1&&o.length>0&&(i+=o.substring(0,120));let a=function(e,t){let n,r,o,i,l,a;r=/\$\{\s*isset ([a-zA-Z]*) \s*\}(.*)\$\{\s*end\s*}/g,o=e;for(;null!==(n=r.exec(e));)o=t[n[1]]?o.replace(n[0],n[2]):o.replace(n[0],"");for(i in e=o,t)l="\\$\\{\\s*"+i+"\\s*\\}",a=new RegExp(l,"g"),e=e.replace(a,t[i]);return e}(document.querySelector("#search-result-template").innerHTML,{key:t,title:e.item.title,link:e.item.permalink,tags:e.item.tags,categories:e.item.categories,description:e.item.description,repo:e.item.repo,registryType:e.item.registryType,language:e.item.language,snippet:i,otVersion:e.item.otVersion});document.querySelector("#search-results").innerHTML+=a})}let i="all",l="all";function a(){let e=[...document.getElementsByClassName("media")];"all"===l&&"all"===i?e.forEach(e=>e.classList.remove("d-none")):e.forEach(e=>{const t=e.dataset.registrytype,n=e.dataset.registrylanguage;t!==l&&"all"!==l||n!==i&&"all"!==i?e.classList.add("d-none"):e.classList.remove("d-none")})}document.addEventListener("DOMContentLoaded",e=>{let t=document.getElementById("languageFilter").querySelectorAll(".dropdown-item"),n=document.getElementById("componentFilter").querySelectorAll(".dropdown-item");t.forEach(e=>e.addEventListener("click",(function(e){let t=e.target.getAttribute("value");i=t,document.getElementById("languageDropdown").textContent=e.target.textContent,a()}))),n.forEach(e=>e.addEventListener("click",(function(e){let t=e.target.getAttribute("value");l=t,document.getElementById("componentDropdown").textContent=e.target.textContent,a()})))})}});