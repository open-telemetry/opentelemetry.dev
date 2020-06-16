!function(e){var t={};function r(n){if(t[n])return t[n].exports;var s=t[n]={i:n,l:!1,exports:{}};return e[n].call(s.exports,s,s.exports,r),s.l=!0,s.exports}r.m=e,r.c=t,r.d=function(e,t,n){r.o(e,t)||Object.defineProperty(e,t,{enumerable:!0,get:n})},r.r=function(e){"undefined"!=typeof Symbol&&Symbol.toStringTag&&Object.defineProperty(e,Symbol.toStringTag,{value:"Module"}),Object.defineProperty(e,"__esModule",{value:!0})},r.t=function(e,t){if(1&t&&(e=r(e)),8&t)return e;if(4&t&&"object"==typeof e&&e&&e.__esModule)return e;var n=Object.create(null);if(r.r(n),Object.defineProperty(n,"default",{enumerable:!0,value:e}),2&t&&"string"!=typeof e)for(var s in e)r.d(n,s,function(t){return e[t]}.bind(null,s));return n},r.n=function(e){var t=e&&e.__esModule?function(){return e.default}:function(){return e};return r.d(t,"a",t),t},r.o=function(e,t){return Object.prototype.hasOwnProperty.call(e,t)},r.p="",r(r.s=126)}([function(e,t,r){const n=r(21),{MAX_LENGTH:s,MAX_SAFE_INTEGER:o}=r(20),{re:i,t:a}=r(12),{compareIdentifiers:c}=r(34);class u{constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof u){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>s)throw new TypeError(`version is longer than ${s} characters`);n("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?i[a.LOOSE]:i[a.FULL]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>o||this.major<0)throw new TypeError("Invalid major version");if(this.minor>o||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>o||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<o)return t}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version}toString(){return this.version}compare(e){if(n("SemVer.compare",this.version,this.options,e),!(e instanceof u)){if("string"==typeof e&&e===this.version)return 0;e=new u(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof u||(e=new u(e,this.options)),c(this.major,e.major)||c(this.minor,e.minor)||c(this.patch,e.patch)}comparePre(e){if(e instanceof u||(e=new u(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],s=e.prerelease[t];if(n("prerelease compare",t,r,s),void 0===r&&void 0===s)return 0;if(void 0===s)return 1;if(void 0===r)return-1;if(r!==s)return c(r,s)}while(++t)}compareBuild(e){e instanceof u||(e=new u(e,this.options));let t=0;do{const r=this.build[t],s=e.build[t];if(n("prerelease compare",t,r,s),void 0===r&&void 0===s)return 0;if(void 0===s)return 1;if(void 0===r)return-1;if(r!==s)return c(r,s)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this}}e.exports=u},function(e,t,r){const n=r(26),{MAX_LENGTH:s,MAX_SAFE_INTEGER:o}=r(25),{re:i,t:a}=r(15),{compareIdentifiers:c}=r(43);class u{constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof u){if(e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease)return e;e=e.version}else if("string"!=typeof e)throw new TypeError("Invalid Version: "+e);if(e.length>s)throw new TypeError(`version is longer than ${s} characters`);n("SemVer",e,t),this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease;const r=e.trim().match(t.loose?i[a.LOOSE]:i[a.FULL]);if(!r)throw new TypeError("Invalid Version: "+e);if(this.raw=e,this.major=+r[1],this.minor=+r[2],this.patch=+r[3],this.major>o||this.major<0)throw new TypeError("Invalid major version");if(this.minor>o||this.minor<0)throw new TypeError("Invalid minor version");if(this.patch>o||this.patch<0)throw new TypeError("Invalid patch version");r[4]?this.prerelease=r[4].split(".").map(e=>{if(/^[0-9]+$/.test(e)){const t=+e;if(t>=0&&t<o)return t}return e}):this.prerelease=[],this.build=r[5]?r[5].split("."):[],this.format()}format(){return this.version=`${this.major}.${this.minor}.${this.patch}`,this.prerelease.length&&(this.version+="-"+this.prerelease.join(".")),this.version}toString(){return this.version}compare(e){if(n("SemVer.compare",this.version,this.options,e),!(e instanceof u)){if("string"==typeof e&&e===this.version)return 0;e=new u(e,this.options)}return e.version===this.version?0:this.compareMain(e)||this.comparePre(e)}compareMain(e){return e instanceof u||(e=new u(e,this.options)),c(this.major,e.major)||c(this.minor,e.minor)||c(this.patch,e.patch)}comparePre(e){if(e instanceof u||(e=new u(e,this.options)),this.prerelease.length&&!e.prerelease.length)return-1;if(!this.prerelease.length&&e.prerelease.length)return 1;if(!this.prerelease.length&&!e.prerelease.length)return 0;let t=0;do{const r=this.prerelease[t],s=e.prerelease[t];if(n("prerelease compare",t,r,s),void 0===r&&void 0===s)return 0;if(void 0===s)return 1;if(void 0===r)return-1;if(r!==s)return c(r,s)}while(++t)}compareBuild(e){e instanceof u||(e=new u(e,this.options));let t=0;do{const r=this.build[t],s=e.build[t];if(n("prerelease compare",t,r,s),void 0===r&&void 0===s)return 0;if(void 0===s)return 1;if(void 0===r)return-1;if(r!==s)return c(r,s)}while(++t)}inc(e,t){switch(e){case"premajor":this.prerelease.length=0,this.patch=0,this.minor=0,this.major++,this.inc("pre",t);break;case"preminor":this.prerelease.length=0,this.patch=0,this.minor++,this.inc("pre",t);break;case"prepatch":this.prerelease.length=0,this.inc("patch",t),this.inc("pre",t);break;case"prerelease":0===this.prerelease.length&&this.inc("patch",t),this.inc("pre",t);break;case"major":0===this.minor&&0===this.patch&&0!==this.prerelease.length||this.major++,this.minor=0,this.patch=0,this.prerelease=[];break;case"minor":0===this.patch&&0!==this.prerelease.length||this.minor++,this.patch=0,this.prerelease=[];break;case"patch":0===this.prerelease.length&&this.patch++,this.prerelease=[];break;case"pre":if(0===this.prerelease.length)this.prerelease=[0];else{let e=this.prerelease.length;for(;--e>=0;)"number"==typeof this.prerelease[e]&&(this.prerelease[e]++,e=-2);-1===e&&this.prerelease.push(0)}t&&(this.prerelease[0]===t?isNaN(this.prerelease[1])&&(this.prerelease=[t,0]):this.prerelease=[t,0]);break;default:throw new Error("invalid increment argument: "+e)}return this.format(),this.raw=this.version,this}}e.exports=u},function(e,t,r){const n=r(0);e.exports=(e,t,r)=>new n(e,r).compare(new n(t,r))},function(e,t,r){class n{constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof n)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new n(e.raw,t);if(e instanceof s)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(e=>this.parseRange(e.trim())).filter(e=>e.length),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}format(){return this.range=this.set.map(e=>e.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(e){const t=this.options.loose;e=e.trim();const r=t?a[c.HYPHENRANGELOOSE]:a[c.HYPHENRANGE];e=e.replace(r,S(this.options.includePrerelease)),o("hyphen replace",e),e=e.replace(a[c.COMPARATORTRIM],u),o("comparator trim",e,a[c.COMPARATORTRIM]),e=(e=(e=e.replace(a[c.TILDETRIM],l)).replace(a[c.CARETTRIM],p)).split(/\s+/).join(" ");const n=t?a[c.COMPARATORLOOSE]:a[c.COMPARATOR];return e.split(" ").map(e=>E(e,this.options)).join(" ").split(/\s+/).map(e=>g(e,this.options)).filter(this.options.loose?e=>!!e.match(n):()=>!0).map(e=>new s(e,this.options))}intersects(e,t){if(!(e instanceof n))throw new TypeError("a Range is required");return this.set.some(r=>_(r,t)&&e.set.some(e=>_(e,t)&&r.every(r=>e.every(e=>r.intersects(e,t)))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new i(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(P(this.set[t],e,this.options))return!0;return!1}}e.exports=n;const s=r(23),o=r(21),i=r(0),{re:a,t:c,comparatorTrimReplace:u,tildeTrimReplace:l,caretTrimReplace:p}=r(12),_=(e,t)=>{let r=!0;const n=e.slice();let s=n.pop();for(;r&&n.length;)r=n.every(e=>s.intersects(e,t)),s=n.pop();return r},E=(e,t)=>(o("comp",e,t),e=T(e,t),o("caret",e),e=d(e,t),o("tildes",e),e=O(e,t),o("xrange",e),e=A(e,t),o("stars",e),e),h=e=>!e||"x"===e.toLowerCase()||"*"===e,d=(e,t)=>e.trim().split(/\s+/).map(e=>f(e,t)).join(" "),f=(e,t)=>{const r=t.loose?a[c.TILDELOOSE]:a[c.TILDE];return e.replace(r,(t,r,n,s,i)=>{let a;return o("tilde",e,t,r,n,s,i),h(r)?a="":h(n)?a=`>=${r}.0.0 <${+r+1}.0.0-0`:h(s)?a=`>=${r}.${n}.0 <${r}.${+n+1}.0-0`:i?(o("replaceTilde pr",i),a=`>=${r}.${n}.${s}-${i} <${r}.${+n+1}.0-0`):a=`>=${r}.${n}.${s} <${r}.${+n+1}.0-0`,o("tilde return",a),a})},T=(e,t)=>e.trim().split(/\s+/).map(e=>N(e,t)).join(" "),N=(e,t)=>{o("caret",e,t);const r=t.loose?a[c.CARETLOOSE]:a[c.CARET],n=t.includePrerelease?"-0":"";return e.replace(r,(t,r,s,i,a)=>{let c;return o("caret",e,t,r,s,i,a),h(r)?c="":h(s)?c=`>=${r}.0.0${n} <${+r+1}.0.0-0`:h(i)?c="0"===r?`>=${r}.${s}.0${n} <${r}.${+s+1}.0-0`:`>=${r}.${s}.0${n} <${+r+1}.0.0-0`:a?(o("replaceCaret pr",a),c="0"===r?"0"===s?`>=${r}.${s}.${i}-${a} <${r}.${s}.${+i+1}-0`:`>=${r}.${s}.${i}-${a} <${r}.${+s+1}.0-0`:`>=${r}.${s}.${i}-${a} <${+r+1}.0.0-0`):(o("no pr"),c="0"===r?"0"===s?`>=${r}.${s}.${i}${n} <${r}.${s}.${+i+1}-0`:`>=${r}.${s}.${i}${n} <${r}.${+s+1}.0-0`:`>=${r}.${s}.${i} <${+r+1}.0.0-0`),o("caret return",c),c})},O=(e,t)=>(o("replaceXRanges",e,t),e.split(/\s+/).map(e=>m(e,t)).join(" ")),m=(e,t)=>{e=e.trim();const r=t.loose?a[c.XRANGELOOSE]:a[c.XRANGE];return e.replace(r,(r,n,s,i,a,c)=>{o("xRange",e,r,n,s,i,a,c);const u=h(s),l=u||h(i),p=l||h(a),_=p;return"="===n&&_&&(n=""),c=t.includePrerelease?"-0":"",u?r=">"===n||"<"===n?"<0.0.0-0":"*":n&&_?(l&&(i=0),a=0,">"===n?(n=">=",l?(s=+s+1,i=0,a=0):(i=+i+1,a=0)):"<="===n&&(n="<",l?s=+s+1:i=+i+1),"<"===n&&(c="-0"),r=`${n+s}.${i}.${a}${c}`):l?r=`>=${s}.0.0${c} <${+s+1}.0.0-0`:p&&(r=`>=${s}.${i}.0${c} <${s}.${+i+1}.0-0`),o("xRange return",r),r})},A=(e,t)=>(o("replaceStars",e,t),e.trim().replace(a[c.STAR],"")),g=(e,t)=>(o("replaceGTE0",e,t),e.trim().replace(a[t.includePrerelease?c.GTE0PRE:c.GTE0],"")),S=e=>(t,r,n,s,o,i,a,c,u,l,p,_,E)=>`${r=h(n)?"":h(s)?`>=${n}.0.0${e?"-0":""}`:h(o)?`>=${n}.${s}.0${e?"-0":""}`:i?">="+r:`>=${r}${e?"-0":""}`} ${c=h(u)?"":h(l)?`<${+u+1}.0.0-0`:h(p)?`<${u}.${+l+1}.0-0`:_?`<=${u}.${l}.${p}-${_}`:e?`<${u}.${l}.${+p+1}-0`:"<="+c}`.trim(),P=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(o(e[r].semver),e[r].semver!==s.ANY&&e[r].semver.prerelease.length>0){const n=e[r].semver;if(n.major===t.major&&n.minor===t.minor&&n.patch===t.patch)return!0}return!1}return!0}},function(e,t,r){const n=r(1);e.exports=(e,t,r)=>new n(e,r).compare(new n(t,r))},function(e,t,r){class n{constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof n)return e.loose===!!t.loose&&e.includePrerelease===!!t.includePrerelease?e:new n(e.raw,t);if(e instanceof s)return this.raw=e.value,this.set=[[e]],this.format(),this;if(this.options=t,this.loose=!!t.loose,this.includePrerelease=!!t.includePrerelease,this.raw=e,this.set=e.split(/\s*\|\|\s*/).map(e=>this.parseRange(e.trim())).filter(e=>e.length),!this.set.length)throw new TypeError("Invalid SemVer Range: "+e);this.format()}format(){return this.range=this.set.map(e=>e.join(" ").trim()).join("||").trim(),this.range}toString(){return this.range}parseRange(e){const t=this.options.loose;e=e.trim();const r=t?a[c.HYPHENRANGELOOSE]:a[c.HYPHENRANGE];e=e.replace(r,S(this.options.includePrerelease)),o("hyphen replace",e),e=e.replace(a[c.COMPARATORTRIM],u),o("comparator trim",e,a[c.COMPARATORTRIM]),e=(e=(e=e.replace(a[c.TILDETRIM],l)).replace(a[c.CARETTRIM],p)).split(/\s+/).join(" ");const n=t?a[c.COMPARATORLOOSE]:a[c.COMPARATOR];return e.split(" ").map(e=>E(e,this.options)).join(" ").split(/\s+/).map(e=>g(e,this.options)).filter(this.options.loose?e=>!!e.match(n):()=>!0).map(e=>new s(e,this.options))}intersects(e,t){if(!(e instanceof n))throw new TypeError("a Range is required");return this.set.some(r=>_(r,t)&&e.set.some(e=>_(e,t)&&r.every(r=>e.every(e=>r.intersects(e,t)))))}test(e){if(!e)return!1;if("string"==typeof e)try{e=new i(e,this.options)}catch(e){return!1}for(let t=0;t<this.set.length;t++)if(P(this.set[t],e,this.options))return!0;return!1}}e.exports=n;const s=r(28),o=r(26),i=r(1),{re:a,t:c,comparatorTrimReplace:u,tildeTrimReplace:l,caretTrimReplace:p}=r(15),_=(e,t)=>{let r=!0;const n=e.slice();let s=n.pop();for(;r&&n.length;)r=n.every(e=>s.intersects(e,t)),s=n.pop();return r},E=(e,t)=>(o("comp",e,t),e=T(e,t),o("caret",e),e=d(e,t),o("tildes",e),e=O(e,t),o("xrange",e),e=A(e,t),o("stars",e),e),h=e=>!e||"x"===e.toLowerCase()||"*"===e,d=(e,t)=>e.trim().split(/\s+/).map(e=>f(e,t)).join(" "),f=(e,t)=>{const r=t.loose?a[c.TILDELOOSE]:a[c.TILDE];return e.replace(r,(t,r,n,s,i)=>{let a;return o("tilde",e,t,r,n,s,i),h(r)?a="":h(n)?a=`>=${r}.0.0 <${+r+1}.0.0-0`:h(s)?a=`>=${r}.${n}.0 <${r}.${+n+1}.0-0`:i?(o("replaceTilde pr",i),a=`>=${r}.${n}.${s}-${i} <${r}.${+n+1}.0-0`):a=`>=${r}.${n}.${s} <${r}.${+n+1}.0-0`,o("tilde return",a),a})},T=(e,t)=>e.trim().split(/\s+/).map(e=>N(e,t)).join(" "),N=(e,t)=>{o("caret",e,t);const r=t.loose?a[c.CARETLOOSE]:a[c.CARET],n=t.includePrerelease?"-0":"";return e.replace(r,(t,r,s,i,a)=>{let c;return o("caret",e,t,r,s,i,a),h(r)?c="":h(s)?c=`>=${r}.0.0${n} <${+r+1}.0.0-0`:h(i)?c="0"===r?`>=${r}.${s}.0${n} <${r}.${+s+1}.0-0`:`>=${r}.${s}.0${n} <${+r+1}.0.0-0`:a?(o("replaceCaret pr",a),c="0"===r?"0"===s?`>=${r}.${s}.${i}-${a} <${r}.${s}.${+i+1}-0`:`>=${r}.${s}.${i}-${a} <${r}.${+s+1}.0-0`:`>=${r}.${s}.${i}-${a} <${+r+1}.0.0-0`):(o("no pr"),c="0"===r?"0"===s?`>=${r}.${s}.${i}${n} <${r}.${s}.${+i+1}-0`:`>=${r}.${s}.${i}${n} <${r}.${+s+1}.0-0`:`>=${r}.${s}.${i} <${+r+1}.0.0-0`),o("caret return",c),c})},O=(e,t)=>(o("replaceXRanges",e,t),e.split(/\s+/).map(e=>m(e,t)).join(" ")),m=(e,t)=>{e=e.trim();const r=t.loose?a[c.XRANGELOOSE]:a[c.XRANGE];return e.replace(r,(r,n,s,i,a,c)=>{o("xRange",e,r,n,s,i,a,c);const u=h(s),l=u||h(i),p=l||h(a),_=p;return"="===n&&_&&(n=""),c=t.includePrerelease?"-0":"",u?r=">"===n||"<"===n?"<0.0.0-0":"*":n&&_?(l&&(i=0),a=0,">"===n?(n=">=",l?(s=+s+1,i=0,a=0):(i=+i+1,a=0)):"<="===n&&(n="<",l?s=+s+1:i=+i+1),"<"===n&&(c="-0"),r=`${n+s}.${i}.${a}${c}`):l?r=`>=${s}.0.0${c} <${+s+1}.0.0-0`:p&&(r=`>=${s}.${i}.0${c} <${s}.${+i+1}.0-0`),o("xRange return",r),r})},A=(e,t)=>(o("replaceStars",e,t),e.trim().replace(a[c.STAR],"")),g=(e,t)=>(o("replaceGTE0",e,t),e.trim().replace(a[t.includePrerelease?c.GTE0PRE:c.GTE0],"")),S=e=>(t,r,n,s,o,i,a,c,u,l,p,_,E)=>`${r=h(n)?"":h(s)?`>=${n}.0.0${e?"-0":""}`:h(o)?`>=${n}.${s}.0${e?"-0":""}`:i?">="+r:`>=${r}${e?"-0":""}`} ${c=h(u)?"":h(l)?`<${+u+1}.0.0-0`:h(p)?`<${u}.${+l+1}.0-0`:_?`<=${u}.${l}.${p}-${_}`:e?`<${u}.${l}.${+p+1}-0`:"<="+c}`.trim(),P=(e,t,r)=>{for(let r=0;r<e.length;r++)if(!e[r].test(t))return!1;if(t.prerelease.length&&!r.includePrerelease){for(let r=0;r<e.length;r++)if(o(e[r].semver),e[r].semver!==s.ANY&&e[r].semver.prerelease.length>0){const n=e[r].semver;if(n.major===t.major&&n.minor===t.minor&&n.patch===t.patch)return!0}return!1}return!0}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(74)),n(r(75)),n(r(76)),n(r(173)),n(r(174)),n(r(77)),n(r(78)),n(r(79)),n(r(81)),n(r(82)),n(r(175)),n(r(176)),n(r(80));var s=r(31);t.Context=s.Context;const o=r(84);t.context=o.ContextAPI.getInstance();const i=r(178);t.trace=i.TraceAPI.getInstance();const a=r(179);t.metrics=a.MetricsAPI.getInstance();const c=r(180);t.propagation=c.PropagationAPI.getInstance(),t.default={trace:t.trace,metrics:t.metrics,context:t.context,propagation:t.propagation}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(50)),n(r(51)),n(r(52)),n(r(130)),n(r(131)),n(r(53)),n(r(54)),n(r(55)),n(r(57)),n(r(58)),n(r(132)),n(r(133)),n(r(56));var s=r(18);t.Context=s.Context;const o=r(60);t.context=o.ContextAPI.getInstance();const i=r(137);t.trace=i.TraceAPI.getInstance();const a=r(138);t.metrics=a.MetricsAPI.getInstance();const c=r(139);t.propagation=c.PropagationAPI.getInstance(),t.default={trace:t.trace,metrics:t.metrics,context:t.context,propagation:t.propagation}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(140)),n(r(62)),n(r(141)),n(r(61)),n(r(149)),n(r(64)),n(r(30)),n(r(150)),n(r(151)),n(r(152)),n(r(66)),n(r(154)),n(r(63)),n(r(155)),n(r(156)),n(r(67)),n(r(65)),n(r(157)),n(r(158))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(103)),n(r(104)),n(r(105)),n(r(253)),n(r(254)),n(r(106)),n(r(107)),n(r(108)),n(r(110)),n(r(111)),n(r(255)),n(r(256)),n(r(109));var s=r(42);t.Context=s.Context;const o=r(112);t.context=o.ContextAPI.getInstance();const i=r(257);t.trace=i.TraceAPI.getInstance();const a=r(258);t.metrics=a.MetricsAPI.getInstance();const c=r(259);t.propagation=c.PropagationAPI.getInstance(),t.default={trace:t.trace,metrics:t.metrics,context:t.context,propagation:t.propagation}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(181)),n(r(86)),n(r(182)),n(r(85)),n(r(187)),n(r(32)),n(r(188)),n(r(189)),n(r(190)),n(r(87)),n(r(192)),n(r(218)),n(r(219)),n(r(92)),n(r(88)),n(r(220)),n(r(221))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(244)),n(r(100)),n(r(245)),n(r(99)),n(r(250)),n(r(41)),n(r(252)),n(r(260)),n(r(261)),n(r(101)),n(r(263)),n(r(289)),n(r(290)),n(r(116)),n(r(113)),n(r(291)),n(r(292))},function(e,t,r){const{MAX_SAFE_COMPONENT_LENGTH:n}=r(20),s=r(21),o=(t=e.exports={}).re=[],i=t.src=[],a=t.t={};let c=0;const u=(e,t,r)=>{const n=c++;s(n,t),a[e]=n,i[n]=t,o[n]=new RegExp(t,r?"g":void 0)};u("NUMERICIDENTIFIER","0|[1-9]\\d*"),u("NUMERICIDENTIFIERLOOSE","[0-9]+"),u("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),u("MAINVERSION",`(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})`),u("MAINVERSIONLOOSE",`(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${i[a.NUMERICIDENTIFIERLOOSE]})`),u("PRERELEASEIDENTIFIER",`(?:${i[a.NUMERICIDENTIFIER]}|${i[a.NONNUMERICIDENTIFIER]})`),u("PRERELEASEIDENTIFIERLOOSE",`(?:${i[a.NUMERICIDENTIFIERLOOSE]}|${i[a.NONNUMERICIDENTIFIER]})`),u("PRERELEASE",`(?:-(${i[a.PRERELEASEIDENTIFIER]}(?:\\.${i[a.PRERELEASEIDENTIFIER]})*))`),u("PRERELEASELOOSE",`(?:-?(${i[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[a.PRERELEASEIDENTIFIERLOOSE]})*))`),u("BUILDIDENTIFIER","[0-9A-Za-z-]+"),u("BUILD",`(?:\\+(${i[a.BUILDIDENTIFIER]}(?:\\.${i[a.BUILDIDENTIFIER]})*))`),u("FULLPLAIN",`v?${i[a.MAINVERSION]}${i[a.PRERELEASE]}?${i[a.BUILD]}?`),u("FULL",`^${i[a.FULLPLAIN]}$`),u("LOOSEPLAIN",`[v=\\s]*${i[a.MAINVERSIONLOOSE]}${i[a.PRERELEASELOOSE]}?${i[a.BUILD]}?`),u("LOOSE",`^${i[a.LOOSEPLAIN]}$`),u("GTLT","((?:<|>)?=?)"),u("XRANGEIDENTIFIERLOOSE",i[a.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*"),u("XRANGEIDENTIFIER",i[a.NUMERICIDENTIFIER]+"|x|X|\\*"),u("XRANGEPLAIN",`[v=\\s]*(${i[a.XRANGEIDENTIFIER]})(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:${i[a.PRERELEASE]})?${i[a.BUILD]}?)?)?`),u("XRANGEPLAINLOOSE",`[v=\\s]*(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:${i[a.PRERELEASELOOSE]})?${i[a.BUILD]}?)?)?`),u("XRANGE",`^${i[a.GTLT]}\\s*${i[a.XRANGEPLAIN]}$`),u("XRANGELOOSE",`^${i[a.GTLT]}\\s*${i[a.XRANGEPLAINLOOSE]}$`),u("COERCE",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),u("COERCERTL",i[a.COERCE],!0),u("LONETILDE","(?:~>?)"),u("TILDETRIM",`(\\s*)${i[a.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",u("TILDE",`^${i[a.LONETILDE]}${i[a.XRANGEPLAIN]}$`),u("TILDELOOSE",`^${i[a.LONETILDE]}${i[a.XRANGEPLAINLOOSE]}$`),u("LONECARET","(?:\\^)"),u("CARETTRIM",`(\\s*)${i[a.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",u("CARET",`^${i[a.LONECARET]}${i[a.XRANGEPLAIN]}$`),u("CARETLOOSE",`^${i[a.LONECARET]}${i[a.XRANGEPLAINLOOSE]}$`),u("COMPARATORLOOSE",`^${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]})$|^$`),u("COMPARATOR",`^${i[a.GTLT]}\\s*(${i[a.FULLPLAIN]})$|^$`),u("COMPARATORTRIM",`(\\s*)${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]}|${i[a.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",u("HYPHENRANGE",`^\\s*(${i[a.XRANGEPLAIN]})\\s+-\\s+(${i[a.XRANGEPLAIN]})\\s*$`),u("HYPHENRANGELOOSE",`^\\s*(${i[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[a.XRANGEPLAINLOOSE]})\\s*$`),u("STAR","(<|>)?=?\\s*\\*"),u("GTE0","^\\s*>=\\s*0.0.0\\s*$"),u("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")},function(e,t,r){const{MAX_LENGTH:n}=r(20),{re:s,t:o}=r(12),i=r(0);e.exports=(e,t)=>{if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof i)return e;if("string"!=typeof e)return null;if(e.length>n)return null;if(!(t.loose?s[o.LOOSE]:s[o.FULL]).test(e))return null;try{return new i(e,t)}catch(e){return null}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(231)),n(r(232))},function(e,t,r){const{MAX_SAFE_COMPONENT_LENGTH:n}=r(25),s=r(26),o=(t=e.exports={}).re=[],i=t.src=[],a=t.t={};let c=0;const u=(e,t,r)=>{const n=c++;s(n,t),a[e]=n,i[n]=t,o[n]=new RegExp(t,r?"g":void 0)};u("NUMERICIDENTIFIER","0|[1-9]\\d*"),u("NUMERICIDENTIFIERLOOSE","[0-9]+"),u("NONNUMERICIDENTIFIER","\\d*[a-zA-Z-][a-zA-Z0-9-]*"),u("MAINVERSION",`(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})\\.(${i[a.NUMERICIDENTIFIER]})`),u("MAINVERSIONLOOSE",`(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${i[a.NUMERICIDENTIFIERLOOSE]})\\.(${i[a.NUMERICIDENTIFIERLOOSE]})`),u("PRERELEASEIDENTIFIER",`(?:${i[a.NUMERICIDENTIFIER]}|${i[a.NONNUMERICIDENTIFIER]})`),u("PRERELEASEIDENTIFIERLOOSE",`(?:${i[a.NUMERICIDENTIFIERLOOSE]}|${i[a.NONNUMERICIDENTIFIER]})`),u("PRERELEASE",`(?:-(${i[a.PRERELEASEIDENTIFIER]}(?:\\.${i[a.PRERELEASEIDENTIFIER]})*))`),u("PRERELEASELOOSE",`(?:-?(${i[a.PRERELEASEIDENTIFIERLOOSE]}(?:\\.${i[a.PRERELEASEIDENTIFIERLOOSE]})*))`),u("BUILDIDENTIFIER","[0-9A-Za-z-]+"),u("BUILD",`(?:\\+(${i[a.BUILDIDENTIFIER]}(?:\\.${i[a.BUILDIDENTIFIER]})*))`),u("FULLPLAIN",`v?${i[a.MAINVERSION]}${i[a.PRERELEASE]}?${i[a.BUILD]}?`),u("FULL",`^${i[a.FULLPLAIN]}$`),u("LOOSEPLAIN",`[v=\\s]*${i[a.MAINVERSIONLOOSE]}${i[a.PRERELEASELOOSE]}?${i[a.BUILD]}?`),u("LOOSE",`^${i[a.LOOSEPLAIN]}$`),u("GTLT","((?:<|>)?=?)"),u("XRANGEIDENTIFIERLOOSE",i[a.NUMERICIDENTIFIERLOOSE]+"|x|X|\\*"),u("XRANGEIDENTIFIER",i[a.NUMERICIDENTIFIER]+"|x|X|\\*"),u("XRANGEPLAIN",`[v=\\s]*(${i[a.XRANGEIDENTIFIER]})(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:\\.(${i[a.XRANGEIDENTIFIER]})(?:${i[a.PRERELEASE]})?${i[a.BUILD]}?)?)?`),u("XRANGEPLAINLOOSE",`[v=\\s]*(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:\\.(${i[a.XRANGEIDENTIFIERLOOSE]})(?:${i[a.PRERELEASELOOSE]})?${i[a.BUILD]}?)?)?`),u("XRANGE",`^${i[a.GTLT]}\\s*${i[a.XRANGEPLAIN]}$`),u("XRANGELOOSE",`^${i[a.GTLT]}\\s*${i[a.XRANGEPLAINLOOSE]}$`),u("COERCE",`(^|[^\\d])(\\d{1,${n}})(?:\\.(\\d{1,${n}}))?(?:\\.(\\d{1,${n}}))?(?:$|[^\\d])`),u("COERCERTL",i[a.COERCE],!0),u("LONETILDE","(?:~>?)"),u("TILDETRIM",`(\\s*)${i[a.LONETILDE]}\\s+`,!0),t.tildeTrimReplace="$1~",u("TILDE",`^${i[a.LONETILDE]}${i[a.XRANGEPLAIN]}$`),u("TILDELOOSE",`^${i[a.LONETILDE]}${i[a.XRANGEPLAINLOOSE]}$`),u("LONECARET","(?:\\^)"),u("CARETTRIM",`(\\s*)${i[a.LONECARET]}\\s+`,!0),t.caretTrimReplace="$1^",u("CARET",`^${i[a.LONECARET]}${i[a.XRANGEPLAIN]}$`),u("CARETLOOSE",`^${i[a.LONECARET]}${i[a.XRANGEPLAINLOOSE]}$`),u("COMPARATORLOOSE",`^${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]})$|^$`),u("COMPARATOR",`^${i[a.GTLT]}\\s*(${i[a.FULLPLAIN]})$|^$`),u("COMPARATORTRIM",`(\\s*)${i[a.GTLT]}\\s*(${i[a.LOOSEPLAIN]}|${i[a.XRANGEPLAIN]})`,!0),t.comparatorTrimReplace="$1$2$3",u("HYPHENRANGE",`^\\s*(${i[a.XRANGEPLAIN]})\\s+-\\s+(${i[a.XRANGEPLAIN]})\\s*$`),u("HYPHENRANGELOOSE",`^\\s*(${i[a.XRANGEPLAINLOOSE]})\\s+-\\s+(${i[a.XRANGEPLAINLOOSE]})\\s*$`),u("STAR","(<|>)?=?\\s*\\*"),u("GTE0","^\\s*>=\\s*0.0.0\\s*$"),u("GTE0PRE","^\\s*>=\\s*0.0.0-0\\s*$")},function(e,t,r){const{MAX_LENGTH:n}=r(25),{re:s,t:o}=r(15),i=r(1);e.exports=(e,t)=>{if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof i)return e;if("string"!=typeof e)return null;if(e.length>n)return null;if(!(t.loose?s[o.LOOSE]:s[o.FULL]).test(e))return null;try{return new i(e,t)}catch(e){return null}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(129)),n(r(160)),n(r(166)),n(r(167)),n(r(168)),n(r(169)),n(r(68))},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(59)),n(r(134))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(135);t.GLOBAL_CONTEXT_MANAGER_API_KEY=Symbol.for("io.opentelemetry.js.api.context"),t.GLOBAL_METRICS_API_KEY=Symbol.for("io.opentelemetry.js.api.metrics"),t.GLOBAL_PROPAGATION_API_KEY=Symbol.for("io.opentelemetry.js.api.propagation"),t.GLOBAL_TRACE_API_KEY=Symbol.for("io.opentelemetry.js.api.trace"),t._global=n._globalThis,t.makeGetter=function(e,t,r){return n=>n===e?t:r},t.API_BACKWARDS_COMPATIBILITY_VERSION=0},function(e,t){const r=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:r,MAX_SAFE_COMPONENT_LENGTH:16}},function(e,t,r){(function(t){const r="object"==typeof t&&t.env&&t.env.NODE_DEBUG&&/\bsemver\b/i.test(t.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=r}).call(this,r(33))},function(e,t,r){const n=r(2);e.exports=(e,t,r)=>n(e,t,r)>0},function(e,t,r){const n=Symbol("SemVer ANY");class s{static get ANY(){return n}constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof s){if(e.loose===!!t.loose)return e;e=e.value}c("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===n?this.value="":this.value=this.operator+this.semver.version,c("comp",this)}parse(e){const t=this.options.loose?o[i.COMPARATORLOOSE]:o[i.COMPARATOR],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new u(r[2],this.options.loose):this.semver=n}toString(){return this.value}test(e){if(c("Comparator.test",e,this.options.loose),this.semver===n||e===n)return!0;if("string"==typeof e)try{e=new u(e,this.options)}catch(e){return!1}return a(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof s))throw new TypeError("a Comparator is required");if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||new l(e.value,t).test(this.value);if(""===e.operator)return""===e.value||new l(this.value,t).test(e.semver);const r=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),n=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),o=this.semver.version===e.semver.version,i=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),c=a(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),u=a(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return r||n||o&&i||c||u}}e.exports=s;const{re:o,t:i}=r(12),a=r(90),c=r(21),u=r(0),l=r(3)},function(e,t,r){const n=r(3);e.exports=(e,t,r)=>{try{t=new n(t,r)}catch(e){return!1}return t.test(e)}},function(e,t){const r=Number.MAX_SAFE_INTEGER||9007199254740991;e.exports={SEMVER_SPEC_VERSION:"2.0.0",MAX_LENGTH:256,MAX_SAFE_INTEGER:r,MAX_SAFE_COMPONENT_LENGTH:16}},function(e,t,r){(function(t){const r="object"==typeof t&&t.env&&t.env.NODE_DEBUG&&/\bsemver\b/i.test(t.env.NODE_DEBUG)?(...e)=>console.error("SEMVER",...e):()=>{};e.exports=r}).call(this,r(33))},function(e,t,r){const n=r(4);e.exports=(e,t,r)=>n(e,t,r)>0},function(e,t,r){const n=Symbol("SemVer ANY");class s{static get ANY(){return n}constructor(e,t){if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),e instanceof s){if(e.loose===!!t.loose)return e;e=e.value}c("comparator",e,t),this.options=t,this.loose=!!t.loose,this.parse(e),this.semver===n?this.value="":this.value=this.operator+this.semver.version,c("comp",this)}parse(e){const t=this.options.loose?o[i.COMPARATORLOOSE]:o[i.COMPARATOR],r=e.match(t);if(!r)throw new TypeError("Invalid comparator: "+e);this.operator=void 0!==r[1]?r[1]:"","="===this.operator&&(this.operator=""),r[2]?this.semver=new u(r[2],this.options.loose):this.semver=n}toString(){return this.value}test(e){if(c("Comparator.test",e,this.options.loose),this.semver===n||e===n)return!0;if("string"==typeof e)try{e=new u(e,this.options)}catch(e){return!1}return a(e,this.operator,this.semver,this.options)}intersects(e,t){if(!(e instanceof s))throw new TypeError("a Comparator is required");if(t&&"object"==typeof t||(t={loose:!!t,includePrerelease:!1}),""===this.operator)return""===this.value||new l(e.value,t).test(this.value);if(""===e.operator)return""===e.value||new l(this.value,t).test(e.semver);const r=!(">="!==this.operator&&">"!==this.operator||">="!==e.operator&&">"!==e.operator),n=!("<="!==this.operator&&"<"!==this.operator||"<="!==e.operator&&"<"!==e.operator),o=this.semver.version===e.semver.version,i=!(">="!==this.operator&&"<="!==this.operator||">="!==e.operator&&"<="!==e.operator),c=a(this.semver,"<",e.semver,t)&&(">="===this.operator||">"===this.operator)&&("<="===e.operator||"<"===e.operator),u=a(this.semver,">",e.semver,t)&&("<="===this.operator||"<"===this.operator)&&(">="===e.operator||">"===e.operator);return r||n||o&&i||c||u}}e.exports=s;const{re:o,t:i}=r(15),a=r(115),c=r(26),u=r(1),l=r(5)},function(e,t,r){const n=r(5);e.exports=(e,t,r)=>{try{t=new n(t,r)}catch(e){return!1}return t.test(e)}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(18);t.ACTIVE_SPAN_KEY=n.Context.createKey("OpenTelemetry Context Key ACTIVE_SPAN");const s=n.Context.createKey("OpenTelemetry Context Key EXTRACTED_SPAN_CONTEXT");function o(e){return e.getValue(t.ACTIVE_SPAN_KEY)||void 0}function i(e){return e.getValue(s)||void 0}t.getActiveSpan=o,t.setActiveSpan=function(e,r){return e.setValue(t.ACTIVE_SPAN_KEY,r)},t.getExtractedSpanContext=i,t.setExtractedSpanContext=function(e,t){return e.setValue(s,t)},t.getParentSpanContext=function(e){var t;return(null===(t=o(e))||void 0===t?void 0:t.context())||i(e)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(83)),n(r(177))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(31);t.ACTIVE_SPAN_KEY=n.Context.createKey("OpenTelemetry Context Key ACTIVE_SPAN");const s=n.Context.createKey("OpenTelemetry Context Key EXTRACTED_SPAN_CONTEXT");function o(e){return e.getValue(t.ACTIVE_SPAN_KEY)||void 0}function i(e){return e.getValue(s)||void 0}t.getActiveSpan=o,t.setActiveSpan=function(e,r){return e.setValue(t.ACTIVE_SPAN_KEY,r)},t.getExtractedSpanContext=i,t.setExtractedSpanContext=function(e,t){return e.setValue(s,t)},t.getParentSpanContext=function(e){var t;return(null===(t=o(e))||void 0===t?void 0:t.context())||i(e)}},function(e,t){var r,n,s=e.exports={};function o(){throw new Error("setTimeout has not been defined")}function i(){throw new Error("clearTimeout has not been defined")}function a(e){if(r===setTimeout)return setTimeout(e,0);if((r===o||!r)&&setTimeout)return r=setTimeout,setTimeout(e,0);try{return r(e,0)}catch(t){try{return r.call(null,e,0)}catch(t){return r.call(this,e,0)}}}!function(){try{r="function"==typeof setTimeout?setTimeout:o}catch(e){r=o}try{n="function"==typeof clearTimeout?clearTimeout:i}catch(e){n=i}}();var c,u=[],l=!1,p=-1;function _(){l&&c&&(l=!1,c.length?u=c.concat(u):p=-1,u.length&&E())}function E(){if(!l){var e=a(_);l=!0;for(var t=u.length;t;){for(c=u,u=[];++p<t;)c&&c[p].run();p=-1,t=u.length}c=null,l=!1,function(e){if(n===clearTimeout)return clearTimeout(e);if((n===i||!n)&&clearTimeout)return n=clearTimeout,clearTimeout(e);try{n(e)}catch(t){try{return n.call(null,e)}catch(t){return n.call(this,e)}}}(e)}}function h(e,t){this.fun=e,this.array=t}function d(){}s.nextTick=function(e){var t=new Array(arguments.length-1);if(arguments.length>1)for(var r=1;r<arguments.length;r++)t[r-1]=arguments[r];u.push(new h(e,t)),1!==u.length||l||a(E)},h.prototype.run=function(){this.fun.apply(null,this.array)},s.title="browser",s.browser=!0,s.env={},s.argv=[],s.version="",s.versions={},s.on=d,s.addListener=d,s.once=d,s.off=d,s.removeListener=d,s.removeAllListeners=d,s.emit=d,s.prependListener=d,s.prependOnceListener=d,s.listeners=function(e){return[]},s.binding=function(e){throw new Error("process.binding is not supported")},s.cwd=function(){return"/"},s.chdir=function(e){throw new Error("process.chdir is not supported")},s.umask=function(){return 0}},function(e,t){const r=/^[0-9]+$/,n=(e,t)=>{const n=r.test(e),s=r.test(t);return n&&s&&(e=+e,t=+t),e===t?0:n&&!s?-1:s&&!n?1:e<t?-1:1};e.exports={compareIdentifiers:n,rcompareIdentifiers:(e,t)=>n(t,e)}},function(e,t,r){const n=r(2);e.exports=(e,t,r)=>0===n(e,t,r)},function(e,t,r){const n=r(0);e.exports=(e,t,r)=>{const s=new n(e,r),o=new n(t,r);return s.compare(o)||s.compareBuild(o)}},function(e,t,r){const n=r(2);e.exports=(e,t,r)=>n(e,t,r)<0},function(e,t,r){const n=r(2);e.exports=(e,t,r)=>n(e,t,r)>=0},function(e,t,r){const n=r(2);e.exports=(e,t,r)=>n(e,t,r)<=0},function(e,t,r){const n=r(0),s=r(23),{ANY:o}=s,i=r(3),a=r(24),c=r(22),u=r(37),l=r(39),p=r(38);e.exports=(e,t,r,_)=>{let E,h,d,f,T;switch(e=new n(e,_),t=new i(t,_),r){case">":E=c,h=l,d=u,f=">",T=">=";break;case"<":E=u,h=p,d=c,f="<",T="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(a(e,t,_))return!1;for(let r=0;r<t.set.length;++r){const n=t.set[r];let i=null,a=null;if(n.forEach(e=>{e.semver===o&&(e=new s(">=0.0.0")),i=i||e,a=a||e,E(e.semver,i.semver,_)?i=e:d(e.semver,a.semver,_)&&(a=e)}),i.operator===f||i.operator===T)return!1;if((!a.operator||a.operator===f)&&h(e,a.semver))return!1;if(a.operator===T&&d(e,a.semver))return!1}return!0}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(42);t.ACTIVE_SPAN_KEY=n.Context.createKey("OpenTelemetry Context Key ACTIVE_SPAN");const s=n.Context.createKey("OpenTelemetry Context Key EXTRACTED_SPAN_CONTEXT");function o(e){return e.getValue(t.ACTIVE_SPAN_KEY)||void 0}function i(e){return e.getValue(s)||void 0}t.getActiveSpan=o,t.setActiveSpan=function(e,r){return e.setValue(t.ACTIVE_SPAN_KEY,r)},t.getExtractedSpanContext=i,t.setExtractedSpanContext=function(e,t){return e.setValue(s,t)},t.getParentSpanContext=function(e){var t;return(null===(t=o(e))||void 0===t?void 0:t.context())||i(e)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(102)),n(r(251))},function(e,t){const r=/^[0-9]+$/,n=(e,t)=>{const n=r.test(e),s=r.test(t);return n&&s&&(e=+e,t=+t),e===t?0:n&&!s?-1:s&&!n?1:e<t?-1:1};e.exports={compareIdentifiers:n,rcompareIdentifiers:(e,t)=>n(t,e)}},function(e,t,r){const n=r(4);e.exports=(e,t,r)=>0===n(e,t,r)},function(e,t,r){const n=r(1);e.exports=(e,t,r)=>{const s=new n(e,r),o=new n(t,r);return s.compare(o)||s.compareBuild(o)}},function(e,t,r){const n=r(4);e.exports=(e,t,r)=>n(e,t,r)<0},function(e,t,r){const n=r(4);e.exports=(e,t,r)=>n(e,t,r)>=0},function(e,t,r){const n=r(4);e.exports=(e,t,r)=>n(e,t,r)<=0},function(e,t,r){const n=r(1),s=r(28),{ANY:o}=s,i=r(5),a=r(29),c=r(27),u=r(46),l=r(48),p=r(47);e.exports=(e,t,r,_)=>{let E,h,d,f,T;switch(e=new n(e,_),t=new i(t,_),r){case">":E=c,h=l,d=u,f=">",T=">=";break;case"<":E=u,h=p,d=c,f="<",T="<=";break;default:throw new TypeError('Must provide a hilo val of "<" or ">"')}if(a(e,t,_))return!1;for(let r=0;r<t.set.length;++r){const n=t.set[r];let i=null,a=null;if(n.forEach(e=>{e.semver===o&&(e=new s(">=0.0.0")),i=i||e,a=a||e,E(e.semver,i.semver,_)?i=e:d(e.semver,a.semver,_)&&(a=e)}),i.operator===f||i.operator===T)return!1;if((!a.operator||a.operator===f)&&h(e,a.semver))return!1;if(a.operator===T&&d(e,a.semver))return!1}return!0}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.defaultGetter=function(e,t){return e[t]}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{inject(e,t,r){}extract(e,t,r){return e}}t.NoopHttpTextPropagator=n,t.NOOP_HTTP_TEXT_PROPAGATOR=new n},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.defaultSetter=function(e,t,r){e[t]=r}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(){}createMeasure(e,r){return t.NOOP_MEASURE_METRIC}createCounter(e,r){return t.NOOP_COUNTER_METRIC}createObserver(e,r){return t.NOOP_OBSERVER_METRIC}}t.NoopMeter=n;class s{constructor(e){this._instrument=e}bind(e){return this._instrument}unbind(e){}clear(){}}t.NoopMetric=s;class o extends s{add(e,t){this.bind(t).add(e)}}t.NoopCounterMetric=o;class i extends s{record(e,t,r,n){void 0===r?this.bind(t).record(e):void 0===n?this.bind(t).record(e,r):this.bind(t).record(e,r,n)}}t.NoopMeasureMetric=i;class a extends s{setCallback(e){}}t.NoopObserverMetric=a;class c{add(e){}}t.NoopBoundCounter=c;class u{record(e,t,r){}}t.NoopBoundMeasure=u,t.NOOP_METER=new n,t.NOOP_BOUND_COUNTER=new c,t.NOOP_COUNTER_METRIC=new o(t.NOOP_BOUND_COUNTER),t.NOOP_BOUND_MEASURE=new u,t.NOOP_MEASURE_METRIC=new i(t.NOOP_BOUND_MEASURE),t.NOOP_OBSERVER_METRIC=new a},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(53);class s{getMeter(e,t){return n.NOOP_METER}}t.NoopMeterProvider=s,t.NOOP_METER_PROVIDER=new s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(56);t.INVALID_TRACE_ID="0",t.INVALID_SPAN_ID="0";const s={traceId:t.INVALID_TRACE_ID,spanId:t.INVALID_SPAN_ID,traceFlags:n.TraceFlags.NONE};class o{constructor(e=s){this._spanContext=e}context(){return this._spanContext}setAttribute(e,t){return this}setAttributes(e){return this}addEvent(e,t){return this}setStatus(e){return this}updateName(e){return this}end(e){}isRecording(){return!1}}t.NoopSpan=o,t.NOOP_SPAN=new o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NONE=0]="NONE",e[e.SAMPLED=1]="SAMPLED"}(t.TraceFlags||(t.TraceFlags={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(55);class s{getCurrentSpan(){return n.NOOP_SPAN}startSpan(e,t){return n.NOOP_SPAN}withSpan(e,t){return t()}bind(e,t){return e}}t.NoopTracer=s,t.NOOP_TRACER=new s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(57);class s{getTracer(e,t){return n.NOOP_TRACER}}t.NoopTracerProvider=s,t.NOOP_TRACER_PROVIDER=new s},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(e){this._currentContext=e?new Map(e):new Map}static createKey(e){return Symbol(e)}getValue(e){return this._currentContext.get(e)}setValue(e,t){const r=new n(this._currentContext);return r._currentContext.set(e,t),r}deleteValue(e){const t=new n(this._currentContext);return t._currentContext.delete(e),t}}t.Context=n,n.ROOT_CONTEXT=new n,n.TODO=n.ROOT_CONTEXT},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(18),s=r(19),o=new n.NoopContextManager;class i{constructor(){}static getInstance(){return this._instance||(this._instance=new i),this._instance}setGlobalContextManager(e){return s._global[s.GLOBAL_CONTEXT_MANAGER_API_KEY]?this._getContextManager():(s._global[s.GLOBAL_CONTEXT_MANAGER_API_KEY]=s.makeGetter(s.API_BACKWARDS_COMPATIBILITY_VERSION,e,o),e)}active(){return this._getContextManager().active()}with(e,t){return this._getContextManager().with(e,t)}bind(e,t=this.active()){return this._getContextManager().bind(e,t)}_getContextManager(){var e,t,r;return null!=(r=null===(t=(e=s._global)[s.GLOBAL_CONTEXT_MANAGER_API_KEY])||void 0===t?void 0:t.call(e,s.API_BACKWARDS_COMPATIBILITY_VERSION))?r:o}disable(){this._getContextManager().disable(),delete s._global[s.GLOBAL_CONTEXT_MANAGER_API_KEY]}}t.ContextAPI=i},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ERROR=0]="ERROR",e[e.WARN=1]="WARN",e[e.INFO=2]="INFO",e[e.DEBUG=3]="DEBUG"}(t.LogLevel||(t.LogLevel={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.NoopLogger=class{debug(e,...t){}error(e,...t){}warn(e,...t){}info(e,...t){}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(142)),n(r(144)),n(r(145)),n(r(146)),n(r(147)),n(r(148))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION="0.8.3"},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(153);t.TraceState=class{constructor(e){this._internalState=new Map,e&&this._parse(e)}set(e,t){this._internalState.has(e)&&this._internalState.delete(e),this._internalState.set(e,t)}unset(e){this._internalState.delete(e)}get(e){return this._internalState.get(e)}serialize(){return this._keys().reduce((e,t)=>(e.push(t+"="+this.get(t)),e),[]).join(",")}_parse(e){e.length>512||(this._internalState=e.split(",").reverse().reduce((e,t)=>{const r=t.indexOf("=");if(-1!==r){const s=t.slice(0,r),o=t.slice(r+1,t.length);n.validateKey(s)&&n.validateValue(o)&&e.set(s,o)}return e},new Map),this._internalState.size>32&&(this._internalState=new Map(Array.from(this._internalState.entries()).reverse().slice(0,32))))}_keys(){return Array.from(this._internalState.keys()).reverse()}}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(18).Context.createKey("OpenTelemetry Distributed Contexts Key");t.getCorrelationContext=function(e){return e.getValue(n)||void 0},t.setCorrelationContext=function(e,t){return e.setValue(n,t)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(7);t.INVALID_SPANID="0",t.INVALID_TRACEID="0",t.INVALID_SPAN_CONTEXT={traceId:t.INVALID_TRACEID,spanId:t.INVALID_SPANID,traceFlags:n.TraceFlags.NONE},t.isValid=function(e){return e.traceId!==t.INVALID_TRACEID&&e.spanId!==t.INVALID_SPANID}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(7),s=r(8);t.Span=class{constructor(e,t,r,o,i,a=[],c=s.hrTime()){this.attributes={},this.links=[],this.events=[],this.status={code:n.CanonicalCode.OK},this.endTime=[0,0],this._ended=!1,this._duration=[-1,-1],this.name=t,this.spanContext=r,this.parentSpanId=i,this.kind=o,this.links=a,this.startTime=s.timeInputToHrTime(c),this.resource=e.resource,this._logger=e.logger,this._traceParams=e.getActiveTraceParams(),this._spanProcessor=e.getActiveSpanProcessor(),this._spanProcessor.onStart(this)}context(){return this.spanContext}setAttribute(e,t){if(this._isSpanEnded())return this;if(Object.keys(this.attributes).length>=this._traceParams.numberOfAttributesPerSpan){const e=Object.keys(this.attributes).shift();e&&(this._logger.warn("Dropping extra attributes : "+e),delete this.attributes[e])}return this.attributes[e]=t,this}setAttributes(e){return Object.keys(e).forEach(t=>{this.setAttribute(t,e[t])}),this}addEvent(e,t,r){return this._isSpanEnded()||(this.events.length>=this._traceParams.numberOfEventsPerSpan&&(this._logger.warn("Dropping extra events."),this.events.shift()),s.isTimeInput(t)&&(void 0===r&&(r=t),t=void 0),void 0===r&&(r=s.hrTime()),this.events.push({name:e,attributes:t,time:s.timeInputToHrTime(r)})),this}setStatus(e){return this._isSpanEnded()||(this.status=e),this}updateName(e){return this._isSpanEnded()||(this.name=e),this}end(e=s.hrTime()){this._isSpanEnded()?this._logger.error("You can only call end() on a span once."):(this._ended=!0,this.endTime=s.timeInputToHrTime(e),this._duration=s.hrTimeDuration(this.startTime,this.endTime),this._duration[0]<0&&this._logger.warn("Inconsistent start and end time, startTime > endTime",this.startTime,this.endTime),this._spanProcessor.onEnd(this))}isRecording(){return!0}get duration(){return this._duration}get ended(){return this._ended}_isSpanEnded(){return this._ended&&this._logger.warn("Can not execute the operation on ended Span {traceId: %s, spanId: %s}",this.spanContext.traceId,this.spanContext.spanId),this._ended}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(8);t.DEFAULT_MAX_EVENTS_PER_SPAN=128,t.DEFAULT_MAX_ATTRIBUTES_PER_SPAN=32,t.DEFAULT_MAX_LINKS_PER_SPAN=32,t.DEFAULT_CONFIG={defaultAttributes:{},logLevel:n.LogLevel.INFO,sampler:n.ALWAYS_SAMPLER,traceParams:{numberOfAttributesPerSpan:t.DEFAULT_MAX_ATTRIBUTES_PER_SPAN,numberOfLinksPerSpan:t.DEFAULT_MAX_LINKS_PER_SPAN,numberOfEventsPerSpan:t.DEFAULT_MAX_EVENTS_PER_SPAN}}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(8),s=r(71);class o{constructor(e){this.labels=e}static empty(){return o.EMPTY}static createTelemetrySDKResource(){return new o({[s.TELEMETRY_SDK_RESOURCE.LANGUAGE]:n.SDK_INFO.LANGUAGE,[s.TELEMETRY_SDK_RESOURCE.NAME]:n.SDK_INFO.NAME,[s.TELEMETRY_SDK_RESOURCE.VERSION]:n.SDK_INFO.VERSION})}merge(e){if(!e||!Object.keys(e.labels).length)return this;const t=Object.assign({},e.labels,this.labels);return new o(t)}}t.Resource=o,o.EMPTY=new o({})},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLOUD_RESOURCE={PROVIDER:"cloud.provider",ACCOUNT_ID:"cloud.account.id",REGION:"cloud.region",ZONE:"cloud.zone"},t.CONTAINER_RESOURCE={NAME:"container.name",IMAGE_NAME:"container.image.name",IMAGE_TAG:"container.image.tag"},t.HOST_RESOURCE={HOSTNAME:"host.hostname",ID:"host.id",NAME:"host.name",TYPE:"host.type",IMAGE_NAME:"host.image.name",IMAGE_ID:"host.image.id",IMAGE_VERSION:"host.image.version"},t.K8S_RESOURCE={CLUSTER_NAME:"k8s.cluster.name",NAMESPACE_NAME:"k8s.namespace.name",POD_NAME:"k8s.pod.name",DEPLOYMENT_NAME:"k8s.deployment.name"},t.TELEMETRY_SDK_RESOURCE={NAME:"telemetry.sdk.name",LANGUAGE:"telemetry.sdk.language",VERSION:"telemetry.sdk.version"},t.SERVICE_RESOURCE={NAME:"service.name",NAMESPACE:"service.namespace",INSTANCE_ID:"service.instance.id",VERSION:"service.version"}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(7);t.StackContextManager=class{constructor(){this._enabled=!1,this._currentContext=n.Context.ROOT_CONTEXT}_bindFunction(e,t=n.Context.ROOT_CONTEXT){const r=this,s=function(...n){return r.with(t,()=>e.apply(this,n))};return Object.defineProperty(s,"length",{enumerable:!1,configurable:!0,writable:!1,value:e.length}),s}active(){return this._currentContext}bind(e,t=n.Context.ROOT_CONTEXT){return void 0===t&&(t=this.active()),"function"==typeof e?this._bindFunction(e,t):e}disable(){return this._currentContext=n.Context.ROOT_CONTEXT,this._enabled=!1,this}enable(){return this._enabled||(this._enabled=!0,this._currentContext=n.Context.ROOT_CONTEXT),this}with(e,t){const r=this._currentContext;this._currentContext=e||n.Context.ROOT_CONTEXT;try{return t()}finally{this._currentContext=r}}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CONNECT_END="connectEnd",e.CONNECT_START="connectStart",e.DOM_COMPLETE="domComplete",e.DOM_CONTENT_LOADED_EVENT_END="domContentLoadedEventEnd",e.DOM_CONTENT_LOADED_EVENT_START="domContentLoadedEventStart",e.DOM_INTERACTIVE="domInteractive",e.DOMAIN_LOOKUP_END="domainLookupEnd",e.DOMAIN_LOOKUP_START="domainLookupStart",e.FETCH_START="fetchStart",e.LOAD_EVENT_END="loadEventEnd",e.LOAD_EVENT_START="loadEventStart",e.REDIRECT_END="redirectEnd",e.REDIRECT_START="redirectStart",e.REQUEST_START="requestStart",e.RESPONSE_END="responseEnd",e.RESPONSE_START="responseStart",e.SECURE_CONNECTION_START="secureConnectionStart",e.UNLOAD_EVENT_END="unloadEventEnd",e.UNLOAD_EVENT_START="unloadEventStart"}(t.PerformanceTimingNames||(t.PerformanceTimingNames={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.defaultGetter=function(e,t){return e[t]}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{inject(e,t,r){}extract(e,t,r){return e}}t.NoopHttpTextPropagator=n,t.NOOP_HTTP_TEXT_PROPAGATOR=new n},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.defaultSetter=function(e,t,r){e[t]=r}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(){}createMeasure(e,r){return t.NOOP_MEASURE_METRIC}createCounter(e,r){return t.NOOP_COUNTER_METRIC}createObserver(e,r){return t.NOOP_OBSERVER_METRIC}}t.NoopMeter=n;class s{constructor(e){this._instrument=e}bind(e){return this._instrument}unbind(e){}clear(){}}t.NoopMetric=s;class o extends s{add(e,t){this.bind(t).add(e)}}t.NoopCounterMetric=o;class i extends s{record(e,t,r,n){void 0===r?this.bind(t).record(e):void 0===n?this.bind(t).record(e,r):this.bind(t).record(e,r,n)}}t.NoopMeasureMetric=i;class a extends s{setCallback(e){}}t.NoopObserverMetric=a;class c{add(e){}}t.NoopBoundCounter=c;class u{record(e,t,r){}}t.NoopBoundMeasure=u;class l{setCallback(e){}}t.NoopBoundObserver=l,t.NOOP_METER=new n,t.NOOP_BOUND_COUNTER=new c,t.NOOP_COUNTER_METRIC=new o(t.NOOP_BOUND_COUNTER),t.NOOP_BOUND_MEASURE=new u,t.NOOP_MEASURE_METRIC=new i(t.NOOP_BOUND_MEASURE),t.NOOP_BOUND_OBSERVER=new l,t.NOOP_OBSERVER_METRIC=new a(t.NOOP_BOUND_OBSERVER)},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(77);class s{getMeter(e,t){return n.NOOP_METER}}t.NoopMeterProvider=s,t.NOOP_METER_PROVIDER=new s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(80);t.INVALID_TRACE_ID="0",t.INVALID_SPAN_ID="0";const s={traceId:t.INVALID_TRACE_ID,spanId:t.INVALID_SPAN_ID,traceFlags:n.TraceFlags.NONE};class o{constructor(e=s){this._spanContext=e}context(){return this._spanContext}setAttribute(e,t){return this}setAttributes(e){return this}addEvent(e,t){return this}setStatus(e){return this}updateName(e){return this}end(e){}isRecording(){return!1}}t.NoopSpan=o,t.NOOP_SPAN=new o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NONE=0]="NONE",e[e.SAMPLED=1]="SAMPLED"}(t.TraceFlags||(t.TraceFlags={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(79);class s{getCurrentSpan(){return n.NOOP_SPAN}startSpan(e,t){return n.NOOP_SPAN}withSpan(e,t){return t()}bind(e,t){return e}}t.NoopTracer=s,t.NOOP_TRACER=new s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(81);class s{getTracer(e,t){return n.NOOP_TRACER}}t.NoopTracerProvider=s,t.NOOP_TRACER_PROVIDER=new s},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(e){this._currentContext=e?new Map(e):new Map}static createKey(e){return Symbol(e)}getValue(e){return this._currentContext.get(e)}setValue(e,t){const r=new n(this._currentContext);return r._currentContext.set(e,t),r}deleteValue(e){const t=new n(this._currentContext);return t._currentContext.delete(e),t}}t.Context=n,n.ROOT_CONTEXT=new n,n.TODO=n.ROOT_CONTEXT},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(31);class s{constructor(){this._contextManager=new n.NoopContextManager}static getInstance(){return this._instance||(this._instance=new s),this._instance}setGlobalContextManager(e){return this._contextManager=e,e}active(){return this._contextManager.active()}with(e,t){return this._contextManager.with(e,t)}bind(e,t=this.active()){return this._contextManager.bind(e,t)}}t.ContextAPI=s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ERROR=0]="ERROR",e[e.WARN=1]="WARN",e[e.INFO=2]="INFO",e[e.DEBUG=3]="DEBUG"}(t.LogLevel||(t.LogLevel={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.NoopLogger=class{debug(e,...t){}error(e,...t){}warn(e,...t){}info(e,...t){}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(183)),n(r(184)),n(r(185)),n(r(186))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(191);t.TraceState=class{constructor(e){this._internalState=new Map,e&&this._parse(e)}set(e,t){this._internalState.has(e)&&this._internalState.delete(e),this._internalState.set(e,t)}unset(e){this._internalState.delete(e)}get(e){return this._internalState.get(e)}serialize(){return this._keys().reduce((e,t)=>(e.push(t+"="+this.get(t)),e),[]).join(",")}_parse(e){e.length>512||(this._internalState=e.split(",").reverse().reduce((e,t)=>{const r=t.indexOf("=");if(-1!==r){const s=t.slice(0,r),o=t.slice(r+1,t.length);n.validateKey(s)&&n.validateValue(o)&&e.set(s,o)}return e},new Map),this._internalState.size>32&&(this._internalState=new Map(Array.from(this._internalState.entries()).reverse().slice(0,32))))}_keys(){return Array.from(this._internalState.keys()).reverse()}}},function(e,t,r){const n=r(2);e.exports=(e,t,r)=>0!==n(e,t,r)},function(e,t,r){const n=r(35),s=r(89),o=r(22),i=r(38),a=r(37),c=r(39);e.exports=(e,t,r,u)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return n(e,r,u);case"!=":return s(e,r,u);case">":return o(e,r,u);case">=":return i(e,r,u);case"<":return a(e,r,u);case"<=":return c(e,r,u);default:throw new TypeError("Invalid operator: "+t)}}},function(e,t,r){(function(e){function r(e,t){for(var r=0,n=e.length-1;n>=0;n--){var s=e[n];"."===s?e.splice(n,1):".."===s?(e.splice(n,1),r++):r&&(e.splice(n,1),r--)}if(t)for(;r--;r)e.unshift("..");return e}function n(e,t){if(e.filter)return e.filter(t);for(var r=[],n=0;n<e.length;n++)t(e[n],n,e)&&r.push(e[n]);return r}t.resolve=function(){for(var t="",s=!1,o=arguments.length-1;o>=-1&&!s;o--){var i=o>=0?arguments[o]:e.cwd();if("string"!=typeof i)throw new TypeError("Arguments to path.resolve must be strings");i&&(t=i+"/"+t,s="/"===i.charAt(0))}return(s?"/":"")+(t=r(n(t.split("/"),(function(e){return!!e})),!s).join("/"))||"."},t.normalize=function(e){var o=t.isAbsolute(e),i="/"===s(e,-1);return(e=r(n(e.split("/"),(function(e){return!!e})),!o).join("/"))||o||(e="."),e&&i&&(e+="/"),(o?"/":"")+e},t.isAbsolute=function(e){return"/"===e.charAt(0)},t.join=function(){var e=Array.prototype.slice.call(arguments,0);return t.normalize(n(e,(function(e,t){if("string"!=typeof e)throw new TypeError("Arguments to path.join must be strings");return e})).join("/"))},t.relative=function(e,r){function n(e){for(var t=0;t<e.length&&""===e[t];t++);for(var r=e.length-1;r>=0&&""===e[r];r--);return t>r?[]:e.slice(t,r-t+1)}e=t.resolve(e).substr(1),r=t.resolve(r).substr(1);for(var s=n(e.split("/")),o=n(r.split("/")),i=Math.min(s.length,o.length),a=i,c=0;c<i;c++)if(s[c]!==o[c]){a=c;break}var u=[];for(c=a;c<s.length;c++)u.push("..");return(u=u.concat(o.slice(a))).join("/")},t.sep="/",t.delimiter=":",t.dirname=function(e){if("string"!=typeof e&&(e+=""),0===e.length)return".";for(var t=e.charCodeAt(0),r=47===t,n=-1,s=!0,o=e.length-1;o>=1;--o)if(47===(t=e.charCodeAt(o))){if(!s){n=o;break}}else s=!1;return-1===n?r?"/":".":r&&1===n?"/":e.slice(0,n)},t.basename=function(e,t){var r=function(e){"string"!=typeof e&&(e+="");var t,r=0,n=-1,s=!0;for(t=e.length-1;t>=0;--t)if(47===e.charCodeAt(t)){if(!s){r=t+1;break}}else-1===n&&(s=!1,n=t+1);return-1===n?"":e.slice(r,n)}(e);return t&&r.substr(-1*t.length)===t&&(r=r.substr(0,r.length-t.length)),r},t.extname=function(e){"string"!=typeof e&&(e+="");for(var t=-1,r=0,n=-1,s=!0,o=0,i=e.length-1;i>=0;--i){var a=e.charCodeAt(i);if(47!==a)-1===n&&(s=!1,n=i+1),46===a?-1===t?t=i:1!==o&&(o=1):-1!==t&&(o=-1);else if(!s){r=i+1;break}}return-1===t||-1===n||0===o||1===o&&t===n-1&&t===r+1?"":e.slice(t,n)};var s="b"==="ab".substr(-1)?function(e,t,r){return e.substr(t,r)}:function(e,t,r){return t<0&&(t=e.length+t),e.substr(t,r)}}).call(this,r(33))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(6);t.INVALID_SPANID="0",t.INVALID_TRACEID="0",t.INVALID_SPAN_CONTEXT={traceId:t.INVALID_TRACEID,spanId:t.INVALID_SPANID,traceFlags:n.TraceFlags.NONE},t.isValid=function(e){return e.traceId!==t.INVALID_TRACEID&&e.spanId!==t.INVALID_SPANID}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(224)),n(r(226)),n(r(235)),n(r(236)),n(r(237)),n(r(238)),n(r(94))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(6),s=r(10);t.Span=class{constructor(e,t,r,o,i,a=[],c=s.hrTime()){this.attributes={},this.links=[],this.events=[],this.status={code:n.CanonicalCode.OK},this.endTime=[0,0],this._ended=!1,this._duration=[-1,-1],this.name=t,this.spanContext=r,this.parentSpanId=i,this.kind=o,this.links=a,this.startTime=s.timeInputToHrTime(c),this.resource=e.resource,this._logger=e.logger,this._traceParams=e.getActiveTraceParams(),this._spanProcessor=e.getActiveSpanProcessor(),this._spanProcessor.onStart(this)}context(){return this.spanContext}setAttribute(e,t){if(this._isSpanEnded())return this;if(Object.keys(this.attributes).length>=this._traceParams.numberOfAttributesPerSpan){const e=Object.keys(this.attributes).shift();e&&(this._logger.warn("Dropping extra attributes : "+e),delete this.attributes[e])}return this.attributes[e]=t,this}setAttributes(e){return Object.keys(e).forEach(t=>{this.setAttribute(t,e[t])}),this}addEvent(e,t,r){return this._isSpanEnded()||(this.events.length>=this._traceParams.numberOfEventsPerSpan&&(this._logger.warn("Dropping extra events."),this.events.shift()),s.isTimeInput(t)&&(void 0===r&&(r=t),t=void 0),void 0===r&&(r=s.hrTime()),this.events.push({name:e,attributes:t,time:s.timeInputToHrTime(r)})),this}setStatus(e){return this._isSpanEnded()||(this.status=e),this}updateName(e){return this._isSpanEnded()||(this.name=e),this}end(e=s.hrTime()){this._isSpanEnded()?this._logger.error("You can only call end() on a span once."):(this._ended=!0,this.endTime=s.timeInputToHrTime(e),this._duration=s.hrTimeDuration(this.startTime,this.endTime),this._duration[0]<0&&this._logger.warn("Inconsistent start and end time, startTime > endTime",this.startTime,this.endTime),this._spanProcessor.onEnd(this))}isRecording(){return!0}toReadableSpan(){return this}get duration(){return this._duration}get ended(){return this._ended}_isSpanEnded(){return this._ended&&this._logger.warn("Can not execute the operation on ended Span {traceId: %s, spanId: %s}",this.spanContext.traceId,this.spanContext.spanId),this._ended}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(10);t.DEFAULT_MAX_EVENTS_PER_SPAN=128,t.DEFAULT_MAX_ATTRIBUTES_PER_SPAN=32,t.DEFAULT_MAX_LINKS_PER_SPAN=32,t.DEFAULT_CONFIG={defaultAttributes:{},logLevel:n.LogLevel.INFO,sampler:n.ALWAYS_SAMPLER,traceParams:{numberOfAttributesPerSpan:t.DEFAULT_MAX_ATTRIBUTES_PER_SPAN,numberOfLinksPerSpan:t.DEFAULT_MAX_LINKS_PER_SPAN,numberOfEventsPerSpan:t.DEFAULT_MAX_EVENTS_PER_SPAN}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLOUD_RESOURCE={PROVIDER:"cloud.provider",ACCOUNT_ID:"cloud.account.id",REGION:"cloud.region",ZONE:"cloud.zone"},t.CONTAINER_RESOURCE={NAME:"container.name",IMAGE_NAME:"container.image.name",IMAGE_TAG:"container.image.tag"},t.HOST_RESOURCE={HOSTNAME:"host.hostname",ID:"host.id",NAME:"host.name",TYPE:"host.type",IMAGE_NAME:"host.image.name",IMAGE_ID:"host.image.id",IMAGE_VERSION:"host.image.version"},t.K8S_RESOURCE={CLUSTER_NAME:"k8s.cluster.name",NAMESPACE_NAME:"k8s.namespace.name",POD_NAME:"k8s.pod.name",DEPLOYMENT_NAME:"k8s.deployment.name"},t.TELEMETRY_SDK_RESOURCE={NAME:"telemetry.sdk.name",LANGUAGE:"telemetry.sdk.language",VERSION:"telemetry.sdk.version"},t.SERVICE_RESOURCE={NAME:"service.name",NAMESPACE:"service.namespace",INSTANCE_ID:"service.instance.id",VERSION:"service.version"}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(6);t.StackContextManager=class{constructor(){this._enabled=!1,this._currentContext=n.Context.ROOT_CONTEXT}_bindFunction(e,t=n.Context.ROOT_CONTEXT){const r=this,s=function(...n){return r.with(t,()=>e.apply(this,n))};return Object.defineProperty(s,"length",{enumerable:!1,configurable:!0,writable:!1,value:e.length}),s}active(){return this._currentContext}bind(e,t=n.Context.ROOT_CONTEXT){return void 0===t&&(t=this.active()),"function"==typeof e?this._bindFunction(e,t):e}disable(){return this._currentContext=n.Context.ROOT_CONTEXT,this._enabled=!1,this}enable(){return this._enabled||(this._enabled=!0,this._currentContext=n.Context.ROOT_CONTEXT),this}with(e,t){const r=this._currentContext;this._currentContext=e||n.Context.ROOT_CONTEXT;try{return t()}catch(e){throw e}finally{this._currentContext=r}}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CONNECT_END="connectEnd",e.CONNECT_START="connectStart",e.DOM_COMPLETE="domComplete",e.DOM_CONTENT_LOADED_EVENT_END="domContentLoadedEventEnd",e.DOM_CONTENT_LOADED_EVENT_START="domContentLoadedEventStart",e.DOM_INTERACTIVE="domInteractive",e.DOMAIN_LOOKUP_END="domainLookupEnd",e.DOMAIN_LOOKUP_START="domainLookupStart",e.FETCH_START="fetchStart",e.LOAD_EVENT_END="loadEventEnd",e.LOAD_EVENT_START="loadEventStart",e.REDIRECT_END="redirectEnd",e.REDIRECT_START="redirectStart",e.REQUEST_START="requestStart",e.RESPONSE_END="responseEnd",e.RESPONSE_START="responseStart",e.SECURE_CONNECTION_START="secureConnectionStart",e.UNLOAD_EVENT_END="unloadEventEnd",e.UNLOAD_EVENT_START="unloadEventStart"}(t.PerformanceTimingNames||(t.PerformanceTimingNames={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.ERROR=0]="ERROR",e[e.WARN=1]="WARN",e[e.INFO=2]="INFO",e[e.DEBUG=3]="DEBUG"}(t.LogLevel||(t.LogLevel={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.NoopLogger=class{debug(e,...t){}error(e,...t){}warn(e,...t){}info(e,...t){}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(246)),n(r(247)),n(r(248)),n(r(249))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(e){this._currentContext=e?new Map(e):new Map}static createKey(e){return Symbol(e)}getValue(e){return this._currentContext.get(e)}setValue(e,t){const r=new n(this._currentContext);return r._currentContext.set(e,t),r}deleteValue(e){const t=new n(this._currentContext);return t._currentContext.delete(e),t}}t.Context=n,n.ROOT_CONTEXT=new n,n.TODO=n.ROOT_CONTEXT},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.defaultGetter=function(e,t){return e[t]}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{inject(e,t,r){}extract(e,t,r){return e}}t.NoopHttpTextPropagator=n,t.NOOP_HTTP_TEXT_PROPAGATOR=new n},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.defaultSetter=function(e,t,r){e[t]=r}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});class n{constructor(){}createMeasure(e,r){return t.NOOP_MEASURE_METRIC}createCounter(e,r){return t.NOOP_COUNTER_METRIC}createObserver(e,r){return t.NOOP_OBSERVER_METRIC}}t.NoopMeter=n;class s{constructor(e){this._instrument=e}bind(e){return this._instrument}unbind(e){}clear(){}}t.NoopMetric=s;class o extends s{add(e,t){this.bind(t).add(e)}}t.NoopCounterMetric=o;class i extends s{record(e,t,r,n){void 0===r?this.bind(t).record(e):void 0===n?this.bind(t).record(e,r):this.bind(t).record(e,r,n)}}t.NoopMeasureMetric=i;class a extends s{setCallback(e){}}t.NoopObserverMetric=a;class c{add(e){}}t.NoopBoundCounter=c;class u{record(e,t,r){}}t.NoopBoundMeasure=u;class l{setCallback(e){}}t.NoopBoundObserver=l,t.NOOP_METER=new n,t.NOOP_BOUND_COUNTER=new c,t.NOOP_COUNTER_METRIC=new o(t.NOOP_BOUND_COUNTER),t.NOOP_BOUND_MEASURE=new u,t.NOOP_MEASURE_METRIC=new i(t.NOOP_BOUND_MEASURE),t.NOOP_BOUND_OBSERVER=new l,t.NOOP_OBSERVER_METRIC=new a(t.NOOP_BOUND_OBSERVER)},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(106);class s{getMeter(e,t){return n.NOOP_METER}}t.NoopMeterProvider=s,t.NOOP_METER_PROVIDER=new s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(109);t.INVALID_TRACE_ID="0",t.INVALID_SPAN_ID="0";const s={traceId:t.INVALID_TRACE_ID,spanId:t.INVALID_SPAN_ID,traceFlags:n.TraceFlags.NONE};class o{constructor(e=s){this._spanContext=e}context(){return this._spanContext}setAttribute(e,t){return this}setAttributes(e){return this}addEvent(e,t){return this}setStatus(e){return this}updateName(e){return this}end(e){}isRecording(){return!1}}t.NoopSpan=o,t.NOOP_SPAN=new o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NONE=0]="NONE",e[e.SAMPLED=1]="SAMPLED"}(t.TraceFlags||(t.TraceFlags={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(108);class s{getCurrentSpan(){return n.NOOP_SPAN}startSpan(e,t){return n.NOOP_SPAN}withSpan(e,t){return t()}bind(e,t){return e}}t.NoopTracer=s,t.NOOP_TRACER=new s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(110);class s{getTracer(e,t){return n.NOOP_TRACER}}t.NoopTracerProvider=s,t.NOOP_TRACER_PROVIDER=new s},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(42);class s{constructor(){this._contextManager=new n.NoopContextManager}static getInstance(){return this._instance||(this._instance=new s),this._instance}setGlobalContextManager(e){return this._contextManager=e,e}active(){return this._contextManager.active()}with(e,t){return this._contextManager.with(e,t)}bind(e,t=this.active()){return this._contextManager.bind(e,t)}}t.ContextAPI=s},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(262);t.TraceState=class{constructor(e){this._internalState=new Map,e&&this._parse(e)}set(e,t){this._internalState.has(e)&&this._internalState.delete(e),this._internalState.set(e,t)}unset(e){this._internalState.delete(e)}get(e){return this._internalState.get(e)}serialize(){return this._keys().reduce((e,t)=>(e.push(t+"="+this.get(t)),e),[]).join(",")}_parse(e){e.length>512||(this._internalState=e.split(",").reverse().reduce((e,t)=>{const r=t.indexOf("=");if(-1!==r){const s=t.slice(0,r),o=t.slice(r+1,t.length);n.validateKey(s)&&n.validateValue(o)&&e.set(s,o)}return e},new Map),this._internalState.size>32&&(this._internalState=new Map(Array.from(this._internalState.entries()).reverse().slice(0,32))))}_keys(){return Array.from(this._internalState.keys()).reverse()}}},function(e,t,r){const n=r(4);e.exports=(e,t,r)=>0!==n(e,t,r)},function(e,t,r){const n=r(44),s=r(114),o=r(27),i=r(47),a=r(46),c=r(48);e.exports=(e,t,r,u)=>{switch(t){case"===":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e===r;case"!==":return"object"==typeof e&&(e=e.version),"object"==typeof r&&(r=r.version),e!==r;case"":case"=":case"==":return n(e,r,u);case"!=":return s(e,r,u);case">":return o(e,r,u);case">=":return i(e,r,u);case"<":return a(e,r,u);case"<=":return c(e,r,u);default:throw new TypeError("Invalid operator: "+t)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9);t.INVALID_SPANID="0",t.INVALID_TRACEID="0",t.INVALID_SPAN_CONTEXT={traceId:t.INVALID_TRACEID,spanId:t.INVALID_SPANID,traceFlags:n.TraceFlags.NONE},t.isValid=function(e){return e.traceId!==t.INVALID_TRACEID&&e.spanId!==t.INVALID_SPANID}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(295)),n(r(297)),n(r(302)),n(r(303)),n(r(304)),n(r(305)),n(r(118))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9),s=r(11);t.Span=class{constructor(e,t,r,o,i,a=[],c=s.hrTime()){this.attributes={},this.links=[],this.events=[],this.status={code:n.CanonicalCode.OK},this.endTime=[0,0],this._ended=!1,this._duration=[-1,-1],this.name=t,this.spanContext=r,this.parentSpanId=i,this.kind=o,this.links=a,this.startTime=s.timeInputToHrTime(c),this.resource=e.resource,this._logger=e.logger,this._traceParams=e.getActiveTraceParams(),this._spanProcessor=e.getActiveSpanProcessor(),this._spanProcessor.onStart(this)}context(){return this.spanContext}setAttribute(e,t){if(this._isSpanEnded())return this;if(Object.keys(this.attributes).length>=this._traceParams.numberOfAttributesPerSpan){const e=Object.keys(this.attributes).shift();e&&(this._logger.warn("Dropping extra attributes : "+e),delete this.attributes[e])}return this.attributes[e]=t,this}setAttributes(e){return Object.keys(e).forEach(t=>{this.setAttribute(t,e[t])}),this}addEvent(e,t,r){return this._isSpanEnded()||(this.events.length>=this._traceParams.numberOfEventsPerSpan&&(this._logger.warn("Dropping extra events."),this.events.shift()),s.isTimeInput(t)&&(void 0===r&&(r=t),t=void 0),void 0===r&&(r=s.hrTime()),this.events.push({name:e,attributes:t,time:s.timeInputToHrTime(r)})),this}setStatus(e){return this._isSpanEnded()||(this.status=e),this}updateName(e){return this._isSpanEnded()||(this.name=e),this}end(e=s.hrTime()){this._isSpanEnded()?this._logger.error("You can only call end() on a span once."):(this._ended=!0,this.endTime=s.timeInputToHrTime(e),this._duration=s.hrTimeDuration(this.startTime,this.endTime),this._duration[0]<0&&this._logger.warn("Inconsistent start and end time, startTime > endTime",this.startTime,this.endTime),this._spanProcessor.onEnd(this))}isRecording(){return!0}toReadableSpan(){return this}get duration(){return this._duration}get ended(){return this._ended}_isSpanEnded(){return this._ended&&this._logger.warn("Can not execute the operation on ended Span {traceId: %s, spanId: %s}",this.spanContext.traceId,this.spanContext.spanId),this._ended}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(11);t.DEFAULT_MAX_EVENTS_PER_SPAN=128,t.DEFAULT_MAX_ATTRIBUTES_PER_SPAN=32,t.DEFAULT_MAX_LINKS_PER_SPAN=32,t.DEFAULT_CONFIG={defaultAttributes:{},logLevel:n.LogLevel.INFO,sampler:n.ALWAYS_SAMPLER,traceParams:{numberOfAttributesPerSpan:t.DEFAULT_MAX_ATTRIBUTES_PER_SPAN,numberOfLinksPerSpan:t.DEFAULT_MAX_LINKS_PER_SPAN,numberOfEventsPerSpan:t.DEFAULT_MAX_EVENTS_PER_SPAN}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.CLOUD_RESOURCE={PROVIDER:"cloud.provider",ACCOUNT_ID:"cloud.account.id",REGION:"cloud.region",ZONE:"cloud.zone"},t.CONTAINER_RESOURCE={NAME:"container.name",IMAGE_NAME:"container.image.name",IMAGE_TAG:"container.image.tag"},t.HOST_RESOURCE={HOSTNAME:"host.hostname",ID:"host.id",NAME:"host.name",TYPE:"host.type",IMAGE_NAME:"host.image.name",IMAGE_ID:"host.image.id",IMAGE_VERSION:"host.image.version"},t.K8S_RESOURCE={CLUSTER_NAME:"k8s.cluster.name",NAMESPACE_NAME:"k8s.namespace.name",POD_NAME:"k8s.pod.name",DEPLOYMENT_NAME:"k8s.deployment.name"},t.TELEMETRY_SDK_RESOURCE={NAME:"telemetry.sdk.name",LANGUAGE:"telemetry.sdk.language",VERSION:"telemetry.sdk.version"},t.SERVICE_RESOURCE={NAME:"service.name",NAMESPACE:"service.namespace",INSTANCE_ID:"service.instance.id",VERSION:"service.version"}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9);t.StackContextManager=class{constructor(){this._enabled=!1,this._currentContext=n.Context.ROOT_CONTEXT}_bindFunction(e,t=n.Context.ROOT_CONTEXT){const r=this,s=function(...n){return r.with(t,()=>e.apply(this,n))};return Object.defineProperty(s,"length",{enumerable:!1,configurable:!0,writable:!1,value:e.length}),s}active(){return this._currentContext}bind(e,t=n.Context.ROOT_CONTEXT){return void 0===t&&(t=this.active()),"function"==typeof e?this._bindFunction(e,t):e}disable(){return this._currentContext=n.Context.ROOT_CONTEXT,this._enabled=!1,this}enable(){return this._enabled||(this._enabled=!0,this._currentContext=n.Context.ROOT_CONTEXT),this}with(e,t){const r=this._currentContext;this._currentContext=e||n.Context.ROOT_CONTEXT;try{return t()}catch(e){throw e}finally{this._currentContext=r}}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.CONNECT_END="connectEnd",e.CONNECT_START="connectStart",e.DOM_COMPLETE="domComplete",e.DOM_CONTENT_LOADED_EVENT_END="domContentLoadedEventEnd",e.DOM_CONTENT_LOADED_EVENT_START="domContentLoadedEventStart",e.DOM_INTERACTIVE="domInteractive",e.DOMAIN_LOOKUP_END="domainLookupEnd",e.DOMAIN_LOOKUP_START="domainLookupStart",e.FETCH_START="fetchStart",e.LOAD_EVENT_END="loadEventEnd",e.LOAD_EVENT_START="loadEventStart",e.REDIRECT_END="redirectEnd",e.REDIRECT_START="redirectStart",e.REQUEST_START="requestStart",e.RESPONSE_END="responseEnd",e.RESPONSE_START="responseStart",e.SECURE_CONNECTION_START="secureConnectionStart",e.UNLOAD_EVENT_END="unloadEventEnd",e.UNLOAD_EVENT_START="unloadEventStart"}(t.PerformanceTimingNames||(t.PerformanceTimingNames={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(170)),n(r(72)),n(r(73)),n(r(171))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(172))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(242))},function(e,t,r){r(127);$((function(){$(".navbar-burger").click((function(){$(".navbar-burger").toggleClass("is-active"),$(".navbar-menu").toggleClass("is-active")}))}))},function(e,t,r){"use strict";r.r(t),function(e){var t=r(17),n=r(123),s=r(124),o=r(125);const i=new n.WebTracerProvider({plugins:[new s.DocumentLoad,new o.UserInteractionPlugin]});i.addSpanProcessor(new t.SimpleSpanProcessor(new t.ConsoleSpanExporter)),i.register(),e.export=i.getTracer("otel-web")}.call(this,r(128)(e))},function(e,t){e.exports=function(e){if(!e.webpackPolyfill){var t=Object.create(e);t.children||(t.children=[]),Object.defineProperty(t,"loaded",{enumerable:!0,get:function(){return t.l}}),Object.defineProperty(t,"id",{enumerable:!0,get:function(){return t.i}}),Object.defineProperty(t,"exports",{enumerable:!0}),t.webpackPolyfill=1}return t}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(7),s=r(8),o=r(68),i=r(159);t.Tracer=class{constructor(e,t){this._tracerProvider=t;const r=i.mergeConfig(e);this._defaultAttributes=r.defaultAttributes,this._sampler=r.sampler,this._traceParams=r.traceParams,this.resource=t.resource,this.logger=e.logger||new s.ConsoleLogger(e.logLevel)}startSpan(e,t={},r=n.context.active()){const i=function(e,t){return null===e.parent?void 0:e.parent?function(e){return function(e){return"function"==typeof e.context}(e)?e.context():e}(e.parent):s.getParentSpanContext(t)}(t,r),a=this._sampler.shouldSample(i),c=s.randomSpanId();let u,l;i&&s.isValid(i)?(u=i.traceId,l=i.traceState):u=s.randomTraceId();const p={traceId:u,spanId:c,traceFlags:a?n.TraceFlags.SAMPLED:n.TraceFlags.NONE,traceState:l};if(!a)return this.logger.debug("Sampling is off, starting no recording span"),new s.NoRecordingSpan(p);const _=new o.Span(this,e,p,t.kind||n.SpanKind.INTERNAL,i?i.spanId:void 0,t.links||[],t.startTime);return _.setAttributes(Object.assign({},this._defaultAttributes,t.attributes)),_}getCurrentSpan(){const e=n.context.active();return s.getActiveSpan(e)}withSpan(e,t){return n.context.with(s.setActiveSpan(n.context.active(),e),t)}bind(e,t){return n.context.bind(e,t?s.setActiveSpan(n.context.active(),t):n.context.active())}getActiveTraceParams(){return this._traceParams}getActiveSpanProcessor(){return this._tracerProvider.getActiveSpanProcessor()}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NO_PROPAGATION=0]="NO_PROPAGATION",e[e.UNLIMITED_PROPAGATION=-1]="UNLIMITED_PROPAGATION"}(t.EntryTtl||(t.EntryTtl={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.INT=0]="INT",e[e.DOUBLE=1]="DOUBLE"}(t.ValueType||(t.ValueType={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.INTERNAL=0]="INTERNAL",e[e.SERVER=1]="SERVER",e[e.CLIENT=2]="CLIENT",e[e.PRODUCER=3]="PRODUCER",e[e.CONSUMER=4]="CONSUMER"}(t.SpanKind||(t.SpanKind={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.OK=0]="OK",e[e.CANCELLED=1]="CANCELLED",e[e.UNKNOWN=2]="UNKNOWN",e[e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",e[e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",e[e.NOT_FOUND=5]="NOT_FOUND",e[e.ALREADY_EXISTS=6]="ALREADY_EXISTS",e[e.PERMISSION_DENIED=7]="PERMISSION_DENIED",e[e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",e[e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",e[e.ABORTED=10]="ABORTED",e[e.OUT_OF_RANGE=11]="OUT_OF_RANGE",e[e.UNIMPLEMENTED=12]="UNIMPLEMENTED",e[e.INTERNAL=13]="INTERNAL",e[e.UNAVAILABLE=14]="UNAVAILABLE",e[e.DATA_LOSS=15]="DATA_LOSS",e[e.UNAUTHENTICATED=16]="UNAUTHENTICATED"}(t.CanonicalCode||(t.CanonicalCode={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(59);t.NoopContextManager=class{active(){return n.Context.ROOT_CONTEXT}with(e,t){return t()}bind(e,t){return e}enable(){return this}disable(){return this}}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(136))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t._globalThis="object"==typeof globalThis?globalThis:window},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(58),s=r(19);class o{constructor(){}static getInstance(){return this._instance||(this._instance=new o),this._instance}setGlobalTracerProvider(e){return s._global[s.GLOBAL_TRACE_API_KEY]||(s._global[s.GLOBAL_TRACE_API_KEY]=s.makeGetter(s.API_BACKWARDS_COMPATIBILITY_VERSION,e,n.NOOP_TRACER_PROVIDER)),this.getTracerProvider()}getTracerProvider(){var e,t,r;return null!=(r=null===(t=(e=s._global)[s.GLOBAL_TRACE_API_KEY])||void 0===t?void 0:t.call(e,s.API_BACKWARDS_COMPATIBILITY_VERSION))?r:n.NOOP_TRACER_PROVIDER}getTracer(e,t){return this.getTracerProvider().getTracer(e,t)}disable(){delete s._global[s.GLOBAL_TRACE_API_KEY]}}t.TraceAPI=o},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(54),s=r(19);class o{constructor(){}static getInstance(){return this._instance||(this._instance=new o),this._instance}setGlobalMeterProvider(e){return s._global[s.GLOBAL_METRICS_API_KEY]?this.getMeterProvider():(s._global[s.GLOBAL_METRICS_API_KEY]=s.makeGetter(s.API_BACKWARDS_COMPATIBILITY_VERSION,e,n.NOOP_METER_PROVIDER),e)}getMeterProvider(){var e,t,r;return null!=(r=null===(t=(e=s._global)[s.GLOBAL_METRICS_API_KEY])||void 0===t?void 0:t.call(e,s.API_BACKWARDS_COMPATIBILITY_VERSION))?r:n.NOOP_METER_PROVIDER}getMeter(e,t){return this.getMeterProvider().getMeter(e,t)}disable(){delete s._global[s.GLOBAL_METRICS_API_KEY]}}t.MetricsAPI=o},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(50),s=r(51),o=r(52),i=r(60),a=r(19),c=i.ContextAPI.getInstance();class u{constructor(){}static getInstance(){return this._instance||(this._instance=new u),this._instance}setGlobalPropagator(e){return a._global[a.GLOBAL_PROPAGATION_API_KEY]?this._getGlobalPropagator():(a._global[a.GLOBAL_PROPAGATION_API_KEY]=a.makeGetter(a.API_BACKWARDS_COMPATIBILITY_VERSION,e,s.NOOP_HTTP_TEXT_PROPAGATOR),e)}inject(e,t=o.defaultSetter,r=c.active()){return this._getGlobalPropagator().inject(r,e,t)}extract(e,t=n.defaultGetter,r=c.active()){return this._getGlobalPropagator().extract(r,e,t)}disable(){delete a._global[a.GLOBAL_PROPAGATION_API_KEY]}_getGlobalPropagator(){var e,t,r;return null!=(r=null===(t=(e=a._global)[a.GLOBAL_PROPAGATION_API_KEY])||void 0===t?void 0:t.call(e,a.API_BACKWARDS_COMPATIBILITY_VERSION))?r:s.NOOP_HTTP_TEXT_PROPAGATOR}}t.PropagationAPI=u},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(61);t.ConsoleLogger=class{constructor(e=n.LogLevel.INFO){e>=n.LogLevel.DEBUG&&(this.debug=(...e)=>{console.debug(...e)}),e>=n.LogLevel.INFO&&(this.info=(...e)=>{console.info(...e)}),e>=n.LogLevel.WARN&&(this.warn=(...e)=>{console.warn(...e)}),e>=n.LogLevel.ERROR&&(this.error=(...e)=>{console.error(...e)})}debug(e,...t){}error(e,...t){}warn(e,...t){}info(e,...t){}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(63),s=Math.pow(10,9);function o(e){const t=e/1e3,r=Math.trunc(t);return[r,Number((t-r).toFixed(9))*s]}function i(){let e=n.otperformance.timeOrigin;if("number"!=typeof e){const t=n.otperformance;e=t.timing&&t.timing.fetchStart}return e}function a(e){const t=o(i()),r=o("number"==typeof e?e:n.otperformance.now());let a=t[0]+r[0],c=t[1]+r[1];return c>s&&(c-=s,a+=1),[a,c]}function c(e){return Array.isArray(e)&&2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]}t.hrTime=a,t.timeInputToHrTime=function(e){if(c(e))return e;if("number"==typeof e)return e<i()?a(e):o(e);if(e instanceof Date)return[e.getTime(),0];throw TypeError("Invalid input type")},t.hrTimeDuration=function(e,t){let r=t[0]-e[0],n=t[1]-e[1];return n<0&&(r-=1,n+=s),[r,n]},t.hrTimeToTimeStamp=function(e){const t=`${"0".repeat(9)}${e[1]}Z`,r=t.substr(t.length-9-1);return new Date(1e3*e[0]).toISOString().replace("000Z",r)},t.hrTimeToNanoseconds=function(e){return e[0]*s+e[1]},t.hrTimeToMilliseconds=function(e){return Math.round(1e3*e[0]+e[1]/1e6)},t.hrTimeToMicroseconds=function(e){return Math.round(1e6*e[0]+e[1]/1e3)},t.isTimeInputHrTime=c,t.isTimeInput=function(e){return c(e)||"number"==typeof e||e instanceof Date}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(143);class s extends n.BaseAbstractPlugin{enable(e,t,r,n){return this._moduleExports=e,this._tracer=t.getTracer(this._tracerName,this._tracerVersion),this._logger=r,n&&(this._config=n),this.patch()}}t.BasePlugin=s},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.BaseAbstractPlugin=class{constructor(e,t){this._tracerName=e,this._tracerVersion=t}disable(){this.unpatch()}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.hexToBase64=function(e){const t=e.length;let r="";for(let n=0;n<t;n+=2){const t=e.substring(n,n+2),s=parseInt(t,16);r+=String.fromCharCode(s)}return btoa(r)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=window.crypto||window.msCrypto,s=new Uint8Array(16);function o(e){const t=new Array(2*e.length),r="a".charCodeAt(0)-10,n="0".charCodeAt(0);let s=0;for(let o=0;o<e.length;o++){let i=e[o]>>>4&15;t[s++]=i>9?i+r:i+n,i=15&e[o],t[s++]=i>9?i+r:i+n}return String.fromCharCode.apply(null,t)}t.randomTraceId=function(){return n.getRandomValues(s),o(s.slice(0,16))},t.randomSpanId=function(){return n.getRandomValues(s),o(s.slice(0,8))}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.otperformance=performance},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(64);t.SDK_INFO={NAME:"opentelemetry",RUNTIME:"browser",LANGUAGE:"webjs",VERSION:n.VERSION}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unrefTimer=function(e){}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.SUCCESS=0]="SUCCESS",e[e.FAILED_NOT_RETRYABLE=1]="FAILED_NOT_RETRYABLE",e[e.FAILED_RETRYABLE=2]="FAILED_RETRYABLE"}(t.ExportResult||(t.ExportResult={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(7),s=r(30);t.X_B3_TRACE_ID="x-b3-traceid",t.X_B3_SPAN_ID="x-b3-spanid",t.X_B3_SAMPLED="x-b3-sampled";const o=/^([0-9a-f]{16}){1,2}$/i,i=/^[0-9a-f]{16}$/i,a=/^0+$/i;function c(e){return o.test(e)&&!a.test(e)}function u(e){return i.test(e)&&!a.test(e)}t.B3Propagator=class{inject(e,r,o){const i=s.getParentSpanContext(e);i&&c(i.traceId)&&u(i.spanId)&&(o(r,t.X_B3_TRACE_ID,i.traceId),o(r,t.X_B3_SPAN_ID,i.spanId),void 0!==i.traceFlags&&o(r,t.X_B3_SAMPLED,(n.TraceFlags.SAMPLED&i.traceFlags)===n.TraceFlags.SAMPLED?"1":"0"))}extract(e,r,o){const i=o(r,t.X_B3_TRACE_ID),a=o(r,t.X_B3_SPAN_ID),l=o(r,t.X_B3_SAMPLED),p=Array.isArray(i)?i[0]:i,_=Array.isArray(a)?a[0]:a,E=Array.isArray(l)?l[0]:l;if("string"!=typeof p||"string"!=typeof _)return e;const h=p.padStart(32,"0");return c(h)&&u(_)?s.setExtractedSpanContext(e,{traceId:h,spanId:_,isRemote:!0,traceFlags:isNaN(Number(E))?n.TraceFlags.NONE:Number(E)}):e}}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(62);t.CompositePropagator=class{constructor(e={}){var t,r;this._propagators=null!=(t=e.propagators)?t:[],this._logger=null!=(r=e.logger)?r:new n.NoopLogger}inject(e,t,r){for(const n of this._propagators)try{n.inject(e,t,r)}catch(e){this._logger.warn(`Failed to inject with ${n.constructor.name}. Err: ${e.message}`)}}extract(e,t,r){return this._propagators.reduce((e,n)=>{try{return n.extract(e,t,r)}catch(e){this._logger.warn(`Failed to inject with ${n.constructor.name}. Err: ${e.message}`)}return e},e)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(7),s=r(65),o=r(30);t.TRACE_PARENT_HEADER="traceparent",t.TRACE_STATE_HEADER="tracestate";const i=/^00-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/;function a(e){const t=e.match(i);return t&&"00000000000000000000000000000000"!==t[1]&&"0000000000000000"!==t[2]?{traceId:t[1],spanId:t[2],traceFlags:parseInt(t[3],16)}:null}t.parseTraceParent=a;t.HttpTraceContext=class{inject(e,r,s){const i=o.getParentSpanContext(e);if(!i)return;const a=`00-${i.traceId}-${i.spanId}-0${Number(i.traceFlags||n.TraceFlags.NONE).toString(16)}`;s(r,t.TRACE_PARENT_HEADER,a),i.traceState&&s(r,t.TRACE_STATE_HEADER,i.traceState.serialize())}extract(e,r,n){const i=n(r,t.TRACE_PARENT_HEADER);if(!i)return e;const c=Array.isArray(i)?i[0]:i;if("string"!=typeof c)return e;const u=a(c);if(!u)return e;u.isRemote=!0;const l=n(r,t.TRACE_STATE_HEADER);if(l){const e=Array.isArray(l)?l.join(","):l;u.traceState=new s.TraceState("string"==typeof e?e:void 0)}return o.setExtractedSpanContext(e,u)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=new RegExp("^(?:[a-z][_0-9a-z-*/]{0,255}|[a-z0-9][_0-9a-z-*/]{0,240}@[a-z][_0-9a-z-*/]{0,13})$"),s=/^[ -~]{0,255}[!-~]$/,o=/,|=/;t.validateKey=function(e){return n.test(e)},t.validateValue=function(e){return s.test(e)&&!o.test(e)}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(66);t.CORRELATION_CONTEXT_HEADER="otcorrelations",t.MAX_NAME_VALUE_PAIRS=180,t.MAX_PER_NAME_VALUE_PAIRS=4096,t.MAX_TOTAL_LENGTH=8192;t.HttpCorrelationContext=class{inject(e,r,s){const o=n.getCorrelationContext(e);if(!o)return;const i=this._getKeyPairs(o).filter(e=>e.length<=t.MAX_PER_NAME_VALUE_PAIRS).slice(0,t.MAX_NAME_VALUE_PAIRS),a=this._serializeKeyPairs(i);a.length>0&&s(r,t.CORRELATION_CONTEXT_HEADER,a)}_serializeKeyPairs(e){return e.reduce((e,r)=>{const n=`${e}${""!=e?",":""}${r}`;return n.length>t.MAX_TOTAL_LENGTH?e:n},"")}_getKeyPairs(e){return Object.keys(e).map(t=>`${encodeURIComponent(t)}=${encodeURIComponent(e[t].value)}`)}extract(e,r,s){const o=s(r,t.CORRELATION_CONTEXT_HEADER);if(!o)return e;const i={};if(0==o.length)return e;const a=o.split(",");return 1==a.length?e:(a.forEach(e=>{const t=this._parsePairKeyValue(e);t&&(i[t.key]={value:t.value})}),n.setCorrelationContext(e,i))}_parsePairKeyValue(e){const t=e.split(";");if(t.length<=0)return;const r=t.shift();if(!r)return;const n=r.split("=");if(n.length<=1)return;const s=decodeURIComponent(n[0].trim());let o=decodeURIComponent(n[1].trim());return t.length>0&&(o=o+";"+t.join(";")),{key:s,value:o}}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(7),s=r(67);class o extends n.NoopSpan{constructor(e){super(e),this._context=e||s.INVALID_SPAN_CONTEXT}context(){return this._context}}t.NoRecordingSpan=o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(7);class s{constructor(e=0){this._probability=e,this._probability=this._normalize(e)}shouldSample(e){return e&&void 0!==e.traceFlags?(n.TraceFlags.SAMPLED&e.traceFlags)===n.TraceFlags.SAMPLED:this._probability>=1||!(this._probability<=0)&&Math.random()<this._probability}toString(){return`ProbabilitySampler{${this._probability}}`}_normalize(e){return"number"!=typeof e||isNaN(e)?0:e>=1?1:e<=0?0:e}}t.ProbabilitySampler=s,t.ALWAYS_SAMPLER=new s(1),t.NEVER_SAMPLER=new s(0)},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e,t){return"string"==typeof t?e===t:!!e.match(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.urlMatches=n,t.isUrlIgnored=function(e,t){if(!t)return!1;for(const r of t)if(n(e,r))return!0;return!1}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.isWrapped=function(e){return"function"==typeof e&&"function"==typeof e.__original&&"function"==typeof e.__unwrap&&!0===e.__wrapped}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(69);t.mergeConfig=function(e){const t=e.traceParams,r=Object.assign({},n.DEFAULT_CONFIG,e);return t&&(r.traceParams.numberOfAttributesPerSpan=t.numberOfAttributesPerSpan||n.DEFAULT_MAX_ATTRIBUTES_PER_SPAN,r.traceParams.numberOfEventsPerSpan=t.numberOfEventsPerSpan||n.DEFAULT_MAX_EVENTS_PER_SPAN,r.traceParams.numberOfLinksPerSpan=t.numberOfLinksPerSpan||n.DEFAULT_MAX_LINKS_PER_SPAN),r}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(7),s=r(8),o=r(17),i=r(69),a=r(161),c=r(162),u=r(163);t.BasicTracerProvider=class{constructor(e=i.DEFAULT_CONFIG){var t,r;this._registeredSpanProcessors=[],this._tracers=new Map,this.activeSpanProcessor=new c.NoopSpanProcessor,this.logger=null!=(t=e.logger)?t:new s.ConsoleLogger(e.logLevel),this.resource=null!=(r=e.resource)?r:u.Resource.createTelemetrySDKResource(),this._config=Object.assign({},e,{logger:this.logger,resource:this.resource})}getTracer(e,t="*",r){const n=`${e}@${t}`;return this._tracers.has(n)||this._tracers.set(n,new o.Tracer(r||this._config,this)),this._tracers.get(n)}addSpanProcessor(e){this._registeredSpanProcessors.push(e),this.activeSpanProcessor=new a.MultiSpanProcessor(this._registeredSpanProcessors)}getActiveSpanProcessor(){return this.activeSpanProcessor}register(e={}){n.trace.setGlobalTracerProvider(this),void 0===e.propagator&&(e.propagator=new s.HttpTraceContext),e.contextManager&&n.context.setGlobalContextManager(e.contextManager),e.propagator&&n.propagation.setGlobalPropagator(e.propagator)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.MultiSpanProcessor=class{constructor(e){this._spanProcessors=e}forceFlush(){for(const e of this._spanProcessors)e.forceFlush()}onStart(e){for(const t of this._spanProcessors)t.onStart(e)}onEnd(e){for(const t of this._spanProcessors)t.onEnd(e)}shutdown(){for(const e of this._spanProcessors)e.shutdown()}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.NoopSpanProcessor=class{onStart(e){}onEnd(e){}shutdown(){}forceFlush(){}}},function(e,t,r){"use strict";function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(70)),n(r(164)),n(r(71))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(165))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(70);t.detectResources=async()=>n.Resource.createTelemetrySDKResource()},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(8);t.ConsoleSpanExporter=class{export(e,t){return this._sendSpans(e,t)}shutdown(){return this._sendSpans([])}_exportInfo(e){return{traceId:e.spanContext.traceId,parentId:e.parentSpanId,name:e.name,id:e.spanContext.spanId,kind:e.kind,timestamp:n.hrTimeToMicroseconds(e.startTime),duration:n.hrTimeToMicroseconds(e.duration),attributes:e.attributes,status:e.status,events:e.events}}_sendSpans(e,t){for(const t of e)console.log(this._exportInfo(t));if(t)return t(n.ExportResult.SUCCESS)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(8);t.BatchSpanProcessor=class{constructor(e,t){this._exporter=e,this._finishedSpans=[],this._isShutdown=!1,this._bufferSize=t&&t.bufferSize?t.bufferSize:100,this._bufferTimeout=t&&"number"==typeof t.bufferTimeout?t.bufferTimeout:2e4}forceFlush(){this._isShutdown||this._flush()}onStart(e){}onEnd(e){this._isShutdown||this._addToBuffer(e)}shutdown(){this._isShutdown||(this.forceFlush(),this._isShutdown=!0,this._exporter.shutdown())}_addToBuffer(e){this._finishedSpans.push(e),this._maybeStartTimer(),this._finishedSpans.length>this._bufferSize&&this._flush()}_flush(){this._clearTimer(),0!==this._finishedSpans.length&&(this._exporter.export(this._finishedSpans,()=>{}),this._finishedSpans=[])}_maybeStartTimer(){void 0===this._timer&&(this._timer=setTimeout(()=>{this._flush()},this._bufferTimeout),n.unrefTimer(this._timer))}_clearTimer(){void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(8);t.InMemorySpanExporter=class{constructor(){this._finishedSpans=[],this._stopped=!1}export(e,t){return this._stopped?t(n.ExportResult.FAILED_NOT_RETRYABLE):(this._finishedSpans.push(...e),t(n.ExportResult.SUCCESS))}shutdown(){this._stopped=!0,this._finishedSpans=[]}reset(){this._finishedSpans=[]}getFinishedSpans(){return this._finishedSpans}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.SimpleSpanProcessor=class{constructor(e){this._exporter=e,this._isShutdown=!1}forceFlush(){}onStart(e){}onEnd(e){this._isShutdown||this._exporter.export([e],()=>{})}shutdown(){this._isShutdown||(this._isShutdown=!0,this._exporter.shutdown())}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(17),s=r(72);class o extends n.BasicTracerProvider{constructor(e={}){void 0===e.plugins&&(e.plugins=[]),super(e);for(const t of e.plugins)t.enable([],this,this.logger);if(e.contextManager)throw"contextManager should be defined in register method not in constructor";if(e.propagator)throw"propagator should be defined in register method not in constructor"}register(e={}){void 0===e.contextManager&&(e.contextManager=new s.StackContextManager),e.contextManager&&e.contextManager.enable(),super.register(e)}}t.WebTracerProvider=o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(73),s=r(8);function o(e,t){return t in e}function i(e){return e.slice().sort((e,t)=>{const r=e[n.PerformanceTimingNames.FETCH_START],s=t[n.PerformanceTimingNames.FETCH_START];return r>s?1:r<s?-1:0})}function a(e){const t=document.createElement("a");return t.href=e,t}t.hasKey=o,t.addSpanNetworkEvent=function(e,t,r){if(o(r,t)&&"number"==typeof r[t]){if(0===r[t])return;return e.addEvent(t,r[t]),e}},t.sortResources=i,t.getResource=function(e,t,r,o,c=new WeakSet){const u=function(e,t,r,o,i){const a=s.hrTimeToNanoseconds(t),c=s.hrTimeToNanoseconds(r);let u=o.filter(t=>{const r=s.hrTimeToNanoseconds(s.timeInputToHrTime(t[n.PerformanceTimingNames.FETCH_START])),o=s.hrTimeToNanoseconds(s.timeInputToHrTime(t[n.PerformanceTimingNames.RESPONSE_END]));return"xmlhttprequest"===t.initiatorType.toLowerCase()&&t.name===e&&r>=a&&o<=c});u.length>0&&(u=u.filter(e=>!i.has(e)));return u}(e,t,r,o,c);if(0===u.length)return{mainRequest:void 0};if(1===u.length)return{mainRequest:u[0]};const l=i(u.slice());if(a(e).origin!==window.location.origin&&l.length>1){let e=l[0],t=function(e,t,r){const o=s.hrTimeToNanoseconds(r),i=s.hrTimeToNanoseconds(s.timeInputToHrTime(t));let a,c=e[1];const u=e.length;for(let t=1;t<u;t++){const r=e[t],u=s.hrTimeToNanoseconds(s.timeInputToHrTime(r[n.PerformanceTimingNames.FETCH_START])),l=s.hrTimeToNanoseconds(s.timeInputToHrTime(r[n.PerformanceTimingNames.RESPONSE_END])),p=o-l;u>=i&&(!a||p<a)&&(a=p,c=r)}return c}(l,e[n.PerformanceTimingNames.RESPONSE_END],r);const o=e[n.PerformanceTimingNames.RESPONSE_END];return t[n.PerformanceTimingNames.FETCH_START]<o&&(t=e,e=void 0),{corsPreFlightRequest:e,mainRequest:t}}return{mainRequest:u[0]}},t.parseUrl=a,t.getElementXPath=function e(t,r){if(t.nodeType===Node.DOCUMENT_NODE)return"/";const n=function(e,t){const r=e.nodeType,n=function(e){if(!e.parentNode)return 0;const t=[e.nodeType];e.nodeType===Node.CDATA_SECTION_NODE&&t.push(Node.TEXT_NODE);let r=Array.from(e.parentNode.childNodes);if(r=r.filter(r=>{const n=r.localName;return t.indexOf(r.nodeType)>=0&&n===e.localName}),r.length>=1)return r.indexOf(e)+1;return 0}(e);let s="";if(r===Node.ELEMENT_NODE){const r=e.getAttribute("id");if(t&&r)return`//*[@id="${r}"]`;s=e.localName}else if(r===Node.TEXT_NODE||r===Node.CDATA_SECTION_NODE)s="text()";else{if(r!==Node.COMMENT_NODE)return"";s="comment()"}if(s&&n>1)return`/${s}[${n}]`;return"/"+s}(t,r);if(r&&n.indexOf("@id")>0)return n;let s="";return t.parentNode&&(s+=e(t.parentNode,!1)),s+=n,s}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(6),s=r(10),o=r(222),i=r(240),a=r(241);class c extends s.BasePlugin{constructor(e={}){super("@opentelemetry/plugin-document-load",a.VERSION),this.component="document-load",this.version="1",this.moduleName=this.component,this._onDocumentLoaded=this._onDocumentLoaded.bind(this),this._config=e}_onDocumentLoaded(){window.setTimeout(()=>{this._collectPerformance()})}_addResourcesSpans(e){const t=s.otperformance.getEntriesByType("resource");t&&t.forEach(t=>{this._initResourceSpan(t,{parent:e})})}_addSpanNetworkEvents(e,t){o.addSpanNetworkEvent(e,o.PerformanceTimingNames.DOMAIN_LOOKUP_START,t),o.addSpanNetworkEvent(e,o.PerformanceTimingNames.DOMAIN_LOOKUP_END,t),o.addSpanNetworkEvent(e,o.PerformanceTimingNames.CONNECT_START,t),o.addSpanNetworkEvent(e,o.PerformanceTimingNames.SECURE_CONNECTION_START,t),o.addSpanNetworkEvent(e,o.PerformanceTimingNames.CONNECT_END,t),o.addSpanNetworkEvent(e,o.PerformanceTimingNames.REQUEST_START,t),o.addSpanNetworkEvent(e,o.PerformanceTimingNames.RESPONSE_START,t)}_collectPerformance(){const e=[...document.getElementsByTagName("meta")].find(e=>e.getAttribute("name")===s.TRACE_PARENT_HEADER),t=this._getEntries(),r=e&&e.content||"";n.context.with(n.propagation.extract({traceparent:r}),()=>{const e=this._startSpan(i.AttributeNames.DOCUMENT_LOAD,o.PerformanceTimingNames.FETCH_START,t);e&&(this._tracer.withSpan(e,()=>{const e=this._startSpan(i.AttributeNames.DOCUMENT_FETCH,o.PerformanceTimingNames.FETCH_START,t);e&&this._tracer.withSpan(e,()=>{this._addSpanNetworkEvents(e,t),this._endSpan(e,o.PerformanceTimingNames.RESPONSE_END,t)})}),this._addResourcesSpans(e),o.addSpanNetworkEvent(e,o.PerformanceTimingNames.UNLOAD_EVENT_START,t),o.addSpanNetworkEvent(e,o.PerformanceTimingNames.UNLOAD_EVENT_END,t),o.addSpanNetworkEvent(e,o.PerformanceTimingNames.DOM_INTERACTIVE,t),o.addSpanNetworkEvent(e,o.PerformanceTimingNames.DOM_CONTENT_LOADED_EVENT_START,t),o.addSpanNetworkEvent(e,o.PerformanceTimingNames.DOM_CONTENT_LOADED_EVENT_END,t),o.addSpanNetworkEvent(e,o.PerformanceTimingNames.DOM_COMPLETE,t),o.addSpanNetworkEvent(e,o.PerformanceTimingNames.LOAD_EVENT_START,t),this._endSpan(e,o.PerformanceTimingNames.LOAD_EVENT_END,t))})}_endSpan(e,t,r){e&&(o.hasKey(r,t)?(o.addSpanNetworkEvent(e,t,r),e.end(r[t])):e.end())}_getEntries(){const e={},t=s.otperformance.getEntriesByType("navigation")[0];if(t){Object.values(o.PerformanceTimingNames).forEach(r=>{if(o.hasKey(t,r)){const n=t[r];"number"==typeof n&&n>0&&(e[r]=n)}})}else{const t=s.otperformance.timing;if(t){Object.values(o.PerformanceTimingNames).forEach(r=>{if(o.hasKey(t,r)){const n=t[r];"number"==typeof n&&n>0&&(e[r]=n)}})}}return e}_initResourceSpan(e,t={}){const r=this._startSpan(e.name,o.PerformanceTimingNames.FETCH_START,e,t);r&&(this._addSpanNetworkEvents(r,e),this._endSpan(r,o.PerformanceTimingNames.RESPONSE_END,e))}_startSpan(e,t,r,n={}){if(o.hasKey(r,t)&&"number"==typeof r[t]){const s=this._tracer.startSpan(e,Object.assign({},{startTime:r[t]},n));return s.setAttribute(i.AttributeNames.COMPONENT,this.component),o.addSpanNetworkEvent(s,t,r),s}}_waitForPageLoad(){"complete"===window.document.readyState?this._onDocumentLoaded():window.addEventListener("load",this._onDocumentLoaded)}patch(){return this._waitForPageLoad(),this._moduleExports}unpatch(){window.removeEventListener("load",this._onDocumentLoaded)}}t.DocumentLoad=c},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NO_PROPAGATION=0]="NO_PROPAGATION",e[e.UNLIMITED_PROPAGATION=-1]="UNLIMITED_PROPAGATION"}(t.EntryTtl||(t.EntryTtl={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.INT=0]="INT",e[e.DOUBLE=1]="DOUBLE"}(t.ValueType||(t.ValueType={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.INTERNAL=0]="INTERNAL",e[e.SERVER=1]="SERVER",e[e.CLIENT=2]="CLIENT",e[e.PRODUCER=3]="PRODUCER",e[e.CONSUMER=4]="CONSUMER"}(t.SpanKind||(t.SpanKind={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.OK=0]="OK",e[e.CANCELLED=1]="CANCELLED",e[e.UNKNOWN=2]="UNKNOWN",e[e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",e[e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",e[e.NOT_FOUND=5]="NOT_FOUND",e[e.ALREADY_EXISTS=6]="ALREADY_EXISTS",e[e.PERMISSION_DENIED=7]="PERMISSION_DENIED",e[e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",e[e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",e[e.ABORTED=10]="ABORTED",e[e.OUT_OF_RANGE=11]="OUT_OF_RANGE",e[e.UNIMPLEMENTED=12]="UNIMPLEMENTED",e[e.INTERNAL=13]="INTERNAL",e[e.UNAVAILABLE=14]="UNAVAILABLE",e[e.DATA_LOSS=15]="DATA_LOSS",e[e.UNAUTHENTICATED=16]="UNAUTHENTICATED"}(t.CanonicalCode||(t.CanonicalCode={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(83);t.NoopContextManager=class{active(){return n.Context.ROOT_CONTEXT}with(e,t){return t()}bind(e,t){return e}enable(){return this}disable(){return this}}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(82);class s{constructor(){this._tracerProvider=n.NOOP_TRACER_PROVIDER}static getInstance(){return this._instance||(this._instance=new s),this._instance}setGlobalTracerProvider(e){return this._tracerProvider=e,e}getTracerProvider(){return this._tracerProvider}getTracer(e,t){return this.getTracerProvider().getTracer(e,t)}}t.TraceAPI=s},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(78);class s{constructor(){this._meterProvider=n.NOOP_METER_PROVIDER}static getInstance(){return this._instance||(this._instance=new s),this._instance}setGlobalMeterProvider(e){return this._meterProvider=e,e}getMeterProvider(){return this._meterProvider}getMeter(e,t){return this.getMeterProvider().getMeter(e,t)}}t.MetricsAPI=s},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(74),s=r(75),o=r(76),i=r(84).ContextAPI.getInstance();class a{constructor(){this._propagator=s.NOOP_HTTP_TEXT_PROPAGATOR}static getInstance(){return this._instance||(this._instance=new a),this._instance}setGlobalPropagator(e){return this._propagator=e,e}inject(e,t=o.defaultSetter,r=i.active()){return this._propagator.inject(r,e,t)}extract(e,t=n.defaultGetter,r=i.active()){return this._propagator.extract(r,e,t)}}t.PropagationAPI=a},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(85);t.ConsoleLogger=class{constructor(e=n.LogLevel.INFO){e>=n.LogLevel.DEBUG&&(this.debug=(...e)=>{console.debug(...e)}),e>=n.LogLevel.INFO&&(this.info=(...e)=>{console.info(...e)}),e>=n.LogLevel.WARN&&(this.warn=(...e)=>{console.warn(...e)}),e>=n.LogLevel.ERROR&&(this.error=(...e)=>{console.error(...e)})}debug(e,...t){}error(e,...t){}warn(e,...t){}info(e,...t){}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(87),s=Math.pow(10,9);function o(e){const t=e/1e3,r=Math.trunc(t);return[r,Number((t-r).toFixed(9))*s]}function i(){let e=n.otperformance.timeOrigin;if("number"!=typeof e){const t=n.otperformance;e=t.timing&&t.timing.fetchStart}return e}function a(e){const t=o(i()),r=o("number"==typeof e?e:n.otperformance.now());let a=t[0]+r[0],c=t[1]+r[1];return c>s&&(c-=s,a+=1),[a,c]}function c(e){return Array.isArray(e)&&2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]}t.hrTime=a,t.timeInputToHrTime=function(e){if(c(e))return e;if("number"==typeof e)return e<i()?a(e):o(e);if(e instanceof Date)return[e.getTime(),0];throw TypeError("Invalid input type")},t.hrTimeDuration=function(e,t){let r=t[0]-e[0],n=t[1]-e[1];return n<0&&(r-=1,n+=s),[r,n]},t.hrTimeToTimeStamp=function(e){const t=`${"0".repeat(9)}${e[1]}Z`,r=t.substr(t.length-9-1);return new Date(1e3*e[0]).toISOString().replace("000Z",r)},t.hrTimeToNanoseconds=function(e){return e[0]*s+e[1]},t.hrTimeToMilliseconds=function(e){return Math.round(1e3*e[0]+e[1]/1e6)},t.hrTimeToMicroseconds=function(e){return Math.round(1e6*e[0]+e[1]/1e3)},t.isTimeInputHrTime=c,t.isTimeInput=function(e){return c(e)||"number"==typeof e||e instanceof Date}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=window.crypto||window.msCrypto,s=new Uint8Array(16);function o(e){const t=new Array(2*e.length),r="a".charCodeAt(0)-10,n="0".charCodeAt(0);let s=0;for(let o=0;o<e.length;o++){let i=e[o]>>>4&15;t[s++]=i>9?i+r:i+n,i=15&e[o],t[s++]=i>9?i+r:i+n}return String.fromCharCode.apply(null,t)}t.randomTraceId=function(){return n.getRandomValues(s),o(s.slice(0,16))},t.randomSpanId=function(){return n.getRandomValues(s),o(s.slice(0,8))}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.otperformance=performance},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unrefTimer=function(e){}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.hexToBase64=function(e){const t=e.length;let r="";for(let n=0;n<t;n+=2){const t=e.substring(n,n+2),s=parseInt(t,16);r+=String.fromCharCode(s)}return btoa(r)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION="0.6.1"},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(6),s=r(32);t.X_B3_TRACE_ID="x-b3-traceid",t.X_B3_SPAN_ID="x-b3-spanid",t.X_B3_SAMPLED="x-b3-sampled";const o=/^[0-9a-f]{32}$/i,i=/^[0-9a-f]{16}$/i,a=/^0+$/i;function c(e){return o.test(e)&&!a.test(e)}function u(e){return i.test(e)&&!a.test(e)}t.B3Propagator=class{inject(e,r,n){const o=s.getParentSpanContext(e);o&&c(o.traceId)&&u(o.spanId)&&(n(r,t.X_B3_TRACE_ID,o.traceId),n(r,t.X_B3_SPAN_ID,o.spanId),void 0!==o.traceFlags&&n(r,t.X_B3_SAMPLED,Number(o.traceFlags)))}extract(e,r,o){const i=o(r,t.X_B3_TRACE_ID),a=o(r,t.X_B3_SPAN_ID),l=o(r,t.X_B3_SAMPLED),p=Array.isArray(i)?i[0]:i,_=Array.isArray(a)?a[0]:a,E=Array.isArray(l)?l[0]:l;return"string"!=typeof p||"string"!=typeof _?e:c(p)&&u(_)?s.setExtractedSpanContext(e,{traceId:p,spanId:_,isRemote:!0,traceFlags:isNaN(Number(E))?n.TraceFlags.NONE:Number(E)}):e}}},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(86);t.CompositePropagator=class{constructor(e={}){var t,r;this._propagators=null!=(t=e.propagators)?t:[],this._logger=null!=(r=e.logger)?r:new n.NoopLogger}inject(e,t,r){for(const n of this._propagators)try{n.inject(e,t,r)}catch(e){this._logger.warn(`Failed to inject with ${n.constructor.name}. Err: ${e.message}`)}}extract(e,t,r){return this._propagators.reduce((e,n)=>{try{return n.extract(e,t,r)}catch(e){this._logger.warn(`Failed to inject with ${n.constructor.name}. Err: ${e.message}`)}return e},e)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(6),s=r(88),o=r(32);t.TRACE_PARENT_HEADER="traceparent",t.TRACE_STATE_HEADER="tracestate";const i=/^00-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/;function a(e){const t=e.match(i);return t&&"00000000000000000000000000000000"!==t[1]&&"0000000000000000"!==t[2]?{traceId:t[1],spanId:t[2],traceFlags:parseInt(t[3],16)}:null}t.parseTraceParent=a;t.HttpTraceContext=class{inject(e,r,s){const i=o.getParentSpanContext(e);if(!i)return;const a=`00-${i.traceId}-${i.spanId}-0${Number(i.traceFlags||n.TraceFlags.NONE).toString(16)}`;s(r,t.TRACE_PARENT_HEADER,a),i.traceState&&s(r,t.TRACE_STATE_HEADER,i.traceState.serialize())}extract(e,r,n){const i=n(r,t.TRACE_PARENT_HEADER);if(!i)return e;const c=Array.isArray(i)?i[0]:i;if("string"!=typeof c)return e;const u=a(c);if(!u)return e;u.isRemote=!0;const l=n(r,t.TRACE_STATE_HEADER);if(l){const e=Array.isArray(l)?l.join(","):l;u.traceState=new s.TraceState("string"==typeof e?e:void 0)}return o.setExtractedSpanContext(e,u)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=new RegExp("^(?:[a-z][_0-9a-z-*/]{0,255}|[a-z0-9][_0-9a-z-*/]{0,240}@[a-z][_0-9a-z-*/]{0,13})$"),s=/^[ -~]{0,255}[!-~]$/,o=/,|=/;t.validateKey=function(e){return n.test(e)},t.validateValue=function(e){return s.test(e)&&!o.test(e)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(193),s=r(91);t.BasePlugin=class{constructor(e,t){this._tracerName=e,this._tracerVersion=t}enable(e,t,r,n){return this._moduleExports=e,this._tracer=t.getTracer(this._tracerName,this._tracerVersion),this._logger=r,this._internalFilesExports=this._loadInternalFilesExports(),n&&(this._config=n),this.patch()}disable(){this.unpatch()}_loadInternalFilesExports(){if(!this._internalFilesList)return{};if(!this.version||!this.moduleName||!this._basedir)return this._logger.debug("loadInternalFiles failed because one of the required fields was missing: moduleName=%s, version=%s, basedir=%s",this.moduleName,this.version,this._basedir),{};let e={};return this._logger.debug("loadInternalFiles %o",this._internalFilesList),Object.keys(this._internalFilesList).forEach(t=>{this._loadInternalModule(t,e)}),0===Object.keys(e).length&&this._logger.debug("No internal files could be loaded for %s@%s",this.moduleName,this.version),e}_loadInternalModule(e,t){n.satisfies(this.version,e)&&(Object.keys(t).length>0&&this._logger.warn("Plugin for %s@%s, has overlap version range (%s) for internal files: %o",this.moduleName,this.version,e,this._internalFilesList),this._requireInternalFiles(this._internalFilesList[e],this._basedir,t))}_requireInternalFiles(e,t,n){e&&Object.keys(e).forEach(o=>{try{this._logger.debug("loading File %s",e[o]),n[o]=r(217)(s.join(t,e[o]))}catch(r){this._logger.error("Could not load internal file %s of module %s. Error: %s",s.join(t,e[o]),this.moduleName,r.message)}})}}},function(e,t,r){const n=r(12);e.exports={re:n.re,src:n.src,tokens:n.t,SEMVER_SPEC_VERSION:r(20).SEMVER_SPEC_VERSION,SemVer:r(0),compareIdentifiers:r(34).compareIdentifiers,rcompareIdentifiers:r(34).rcompareIdentifiers,parse:r(13),valid:r(194),clean:r(195),inc:r(196),diff:r(197),major:r(198),minor:r(199),patch:r(200),prerelease:r(201),compare:r(2),rcompare:r(202),compareLoose:r(203),compareBuild:r(36),sort:r(204),rsort:r(205),gt:r(22),lt:r(37),eq:r(35),neq:r(89),gte:r(38),lte:r(39),cmp:r(90),coerce:r(206),Comparator:r(23),Range:r(3),satisfies:r(24),toComparators:r(207),maxSatisfying:r(208),minSatisfying:r(209),minVersion:r(210),validRange:r(211),outside:r(40),gtr:r(212),ltr:r(213),intersects:r(214),simplifyRange:r(215),subset:r(216)}},function(e,t,r){const n=r(13);e.exports=(e,t)=>{const r=n(e,t);return r?r.version:null}},function(e,t,r){const n=r(13);e.exports=(e,t)=>{const r=n(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}},function(e,t,r){const n=r(0);e.exports=(e,t,r,s)=>{"string"==typeof r&&(s=r,r=void 0);try{return new n(e,r).inc(t,s).version}catch(e){return null}}},function(e,t,r){const n=r(13),s=r(35);e.exports=(e,t)=>{if(s(e,t))return null;{const r=n(e),s=n(t),o=r.prerelease.length||s.prerelease.length,i=o?"pre":"",a=o?"prerelease":"";for(const e in r)if(("major"===e||"minor"===e||"patch"===e)&&r[e]!==s[e])return i+e;return a}}},function(e,t,r){const n=r(0);e.exports=(e,t)=>new n(e,t).major},function(e,t,r){const n=r(0);e.exports=(e,t)=>new n(e,t).minor},function(e,t,r){const n=r(0);e.exports=(e,t)=>new n(e,t).patch},function(e,t,r){const n=r(13);e.exports=(e,t)=>{const r=n(e,t);return r&&r.prerelease.length?r.prerelease:null}},function(e,t,r){const n=r(2);e.exports=(e,t,r)=>n(t,e,r)},function(e,t,r){const n=r(2);e.exports=(e,t)=>n(e,t,!0)},function(e,t,r){const n=r(36);e.exports=(e,t)=>e.sort((e,r)=>n(e,r,t))},function(e,t,r){const n=r(36);e.exports=(e,t)=>e.sort((e,r)=>n(r,e,t))},function(e,t,r){const n=r(0),s=r(13),{re:o,t:i}=r(12);e.exports=(e,t)=>{if(e instanceof n)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let r=null;if((t=t||{}).rtl){let t;for(;(t=o[i.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&t.index+t[0].length===r.index+r[0].length||(r=t),o[i.COERCERTL].lastIndex=t.index+t[1].length+t[2].length;o[i.COERCERTL].lastIndex=-1}else r=e.match(o[i.COERCE]);return null===r?null:s(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`,t)}},function(e,t,r){const n=r(3);e.exports=(e,t)=>new n(e,t).set.map(e=>e.map(e=>e.value).join(" ").trim().split(" "))},function(e,t,r){const n=r(0),s=r(3);e.exports=(e,t,r)=>{let o=null,i=null,a=null;try{a=new s(t,r)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(o&&-1!==i.compare(e)||(o=e,i=new n(o,r)))}),o}},function(e,t,r){const n=r(0),s=r(3);e.exports=(e,t,r)=>{let o=null,i=null,a=null;try{a=new s(t,r)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(o&&1!==i.compare(e)||(o=e,i=new n(o,r)))}),o}},function(e,t,r){const n=r(0),s=r(3),o=r(22);e.exports=(e,t)=>{e=new s(e,t);let r=new n("0.0.0");if(e.test(r))return r;if(r=new n("0.0.0-0"),e.test(r))return r;r=null;for(let t=0;t<e.set.length;++t){e.set[t].forEach(e=>{const t=new n(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":r&&!o(r,t)||(r=t);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}})}return r&&e.test(r)?r:null}},function(e,t,r){const n=r(3);e.exports=(e,t)=>{try{return new n(e,t).range||"*"}catch(e){return null}}},function(e,t,r){const n=r(40);e.exports=(e,t,r)=>n(e,t,">",r)},function(e,t,r){const n=r(40);e.exports=(e,t,r)=>n(e,t,"<",r)},function(e,t,r){const n=r(3);e.exports=(e,t,r)=>(e=new n(e,r),t=new n(t,r),e.intersects(t))},function(e,t,r){const n=r(24),s=r(2);e.exports=(e,t,r)=>{const o=[];let i=null,a=null;const c=e.sort((e,t)=>s(e,t,r));for(const e of c){n(e,t,r)?(a=e,i||(i=e)):(a&&o.push([i,a]),a=null,i=null)}i&&o.push([i,null]);const u=[];for(const[e,t]of o)e===t?u.push(e):t||e!==c[0]?t?e===c[0]?u.push("<="+t):u.push(`${e} - ${t}`):u.push(">="+e):u.push("*");const l=u.join(" || "),p="string"==typeof t.raw?t.raw:String(t);return l.length<p.length?l:t}},function(e,t,r){const n=r(3),{ANY:s}=r(23),o=r(24),i=r(2),a=(e,t,r)=>{if(1===e.length&&e[0].semver===s)return 1===t.length&&t[0].semver===s;const n=new Set;let a,l,p,_,E,h,d;for(const t of e)">"===t.operator||">="===t.operator?a=c(a,t,r):"<"===t.operator||"<="===t.operator?l=u(l,t,r):n.add(t.semver);if(n.size>1)return null;if(a&&l){if(p=i(a.semver,l.semver,r),p>0)return null;if(0===p&&(">="!==a.operator||"<="!==l.operator))return null}for(const e of n){if(a&&!o(e,String(a),r))return null;if(l&&!o(e,String(l),r))return null;for(const n of t)if(!o(e,String(n),r))return!1;return!0}for(const e of t){if(d=d||">"===e.operator||">="===e.operator,h=h||"<"===e.operator||"<="===e.operator,a)if(">"===e.operator||">="===e.operator){if(_=c(a,e,r),_===e)return!1}else if(">="===a.operator&&!o(a.semver,String(e),r))return!1;if(l)if("<"===e.operator||"<="===e.operator){if(E=u(l,e,r),E===e)return!1}else if("<="===l.operator&&!o(l.semver,String(e),r))return!1;if(!e.operator&&(l||a)&&0!==p)return!1}return!(a&&h&&!l&&0!==p)&&!(l&&d&&!a&&0!==p)},c=(e,t,r)=>{if(!e)return t;const n=i(e.semver,t.semver,r);return n>0?e:n<0||">"===t.operator&&">="===e.operator?t:e},u=(e,t,r)=>{if(!e)return t;const n=i(e.semver,t.semver,r);return n<0?e:n>0||"<"===t.operator&&"<="===e.operator?t:e};e.exports=(e,t,r)=>{e=new n(e,r),t=new n(t,r);let s=!1;e:for(const n of e.set){for(const e of t.set){const t=a(n,e,r);if(s=s||null!==t,t)continue e}if(s)return!1}return!0}},function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=217},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(6),s=r(92);class o extends n.NoopSpan{constructor(e){super(e),this._context=e||s.INVALID_SPAN_CONTEXT}context(){return this._context}}t.NoRecordingSpan=o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(6);class s{constructor(e=0){this._probability=e,this._probability=this._normalize(e)}shouldSample(e){return e&&void 0!==e.traceFlags?(n.TraceFlags.SAMPLED&e.traceFlags)===n.TraceFlags.SAMPLED:this._probability>=1||!(this._probability<=0)&&Math.random()<this._probability}toString(){return`ProbabilitySampler{${this._probability}}`}_normalize(e){return"number"!=typeof e||isNaN(e)?0:e>=1?1:e<=0?0:e}}t.ProbabilitySampler=s,t.ALWAYS_SAMPLER=new s(1),t.NEVER_SAMPLER=new s(0)},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e,t){return"string"==typeof t?e===t:!!e.match(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.urlMatches=n,t.isUrlIgnored=function(e,t){if(!t)return!1;for(const r of t)if(n(e,r))return!0;return!1}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.isWrapped=function(e){return"function"==typeof e&&"function"==typeof e.__original&&"function"==typeof e.__unwrap&&!0===e.__wrapped}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(223)),n(r(97)),n(r(98)),n(r(239))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(93),s=r(97);class o extends n.BasicTracerProvider{constructor(e={}){void 0===e.plugins&&(e.plugins=[]),super(e);for(const t of e.plugins)t.enable([],this,this.logger);if(e.contextManager)throw"contextManager should be defined in register method not in constructor";if(e.propagator)throw"propagator should be defined in register method not in constructor"}register(e={}){void 0===e.contextManager&&(e.contextManager=new s.StackContextManager),e.contextManager&&e.contextManager.enable(),super.register(e)}}t.WebTracerProvider=o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(6),s=r(10),o=r(94),i=r(225);t.Tracer=class{constructor(e,t){this._tracerProvider=t;const r=i.mergeConfig(e);this._defaultAttributes=r.defaultAttributes,this._sampler=r.sampler,this._traceParams=r.traceParams,this.resource=t.resource,this.logger=e.logger||new s.ConsoleLogger(e.logLevel)}startSpan(e,t={},r=n.context.active()){const i=function(e,t){return null===e.parent?void 0:e.parent?function(e){return function(e){return"function"==typeof e.context}(e)?e.context():e}(e.parent):s.getParentSpanContext(t)}(t,r),a=this._sampler.shouldSample(i),c=s.randomSpanId();let u,l;i&&s.isValid(i)?(u=i.traceId,l=i.traceState):u=s.randomTraceId();const p={traceId:u,spanId:c,traceFlags:a?n.TraceFlags.SAMPLED:n.TraceFlags.NONE,traceState:l};if(!a)return this.logger.debug("Sampling is off, starting no recording span"),new s.NoRecordingSpan(p);const _=new o.Span(this,e,p,t.kind||n.SpanKind.INTERNAL,i?i.spanId:void 0,t.links||[],t.startTime);return _.setAttributes(Object.assign({},this._defaultAttributes,t.attributes)),_}getCurrentSpan(){const e=n.context.active();return s.getActiveSpan(e)}withSpan(e,t){return n.context.with(s.setActiveSpan(n.context.active(),e),t)}bind(e,t){return n.context.bind(e,t?s.setActiveSpan(n.context.active(),t):n.context.active())}getActiveTraceParams(){return this._traceParams}getActiveSpanProcessor(){return this._tracerProvider.getActiveSpanProcessor()}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(95);t.mergeConfig=function(e){const t=e.traceParams,r=Object.assign({},n.DEFAULT_CONFIG,e);return t&&(r.traceParams.numberOfAttributesPerSpan=t.numberOfAttributesPerSpan||n.DEFAULT_MAX_ATTRIBUTES_PER_SPAN,r.traceParams.numberOfEventsPerSpan=t.numberOfEventsPerSpan||n.DEFAULT_MAX_EVENTS_PER_SPAN,r.traceParams.numberOfLinksPerSpan=t.numberOfLinksPerSpan||n.DEFAULT_MAX_LINKS_PER_SPAN),r}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(6),s=r(10),o=r(93),i=r(95),a=r(227),c=r(228),u=r(229);t.BasicTracerProvider=class{constructor(e=i.DEFAULT_CONFIG){this._config=e,this._registeredSpanProcessors=[],this._tracers=new Map,this.activeSpanProcessor=new c.NoopSpanProcessor,this.logger=e.logger||new s.ConsoleLogger(e.logLevel),this.resource=e.resource||u.Resource.createTelemetrySDKResource()}getTracer(e,t="*",r){const n=`${e}@${t}`;return this._tracers.has(n)||this._tracers.set(n,new o.Tracer(r||this._config,this)),this._tracers.get(n)}addSpanProcessor(e){this._registeredSpanProcessors.push(e),this.activeSpanProcessor=new a.MultiSpanProcessor(this._registeredSpanProcessors)}getActiveSpanProcessor(){return this.activeSpanProcessor}register(e={}){n.trace.setGlobalTracerProvider(this),void 0===e.propagator&&(e.propagator=new s.HttpTraceContext),e.contextManager&&n.context.setGlobalContextManager(e.contextManager),e.propagator&&n.propagation.setGlobalPropagator(e.propagator)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.MultiSpanProcessor=class{constructor(e){this._spanProcessors=e}forceFlush(){}onStart(e){for(const t of this._spanProcessors)t.onStart(e)}onEnd(e){for(const t of this._spanProcessors)t.onEnd(e)}shutdown(){for(const e of this._spanProcessors)e.shutdown()}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.NoopSpanProcessor=class{onStart(e){}onEnd(e){}shutdown(){}forceFlush(){}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(230);t.Resource=n.Resource,function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(96))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(14),s=r(96);class o{constructor(e){this.labels=e}static empty(){return o.EMPTY}static createTelemetrySDKResource(){return new o({[s.TELEMETRY_SDK_RESOURCE.LANGUAGE]:n.SDK_INFO.LANGUAGE,[s.TELEMETRY_SDK_RESOURCE.NAME]:n.SDK_INFO.NAME,[s.TELEMETRY_SDK_RESOURCE.VERSION]:n.SDK_INFO.VERSION})}merge(e){if(!e||!Object.keys(e.labels).length)return this;const t=Object.assign({},e.labels,this.labels);return new o(t)}}t.Resource=o,o.EMPTY=new o({})},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.SUCCESS=0]="SUCCESS",e[e.FAILED_NOT_RETRYABLE=1]="FAILED_NOT_RETRYABLE",e[e.FAILED_RETRYABLE=2]="FAILED_RETRYABLE"}(t.ExportResult||(t.ExportResult={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(233))},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});const n=r(234);t.SDK_INFO={NAME:"opentelemetry",RUNTIME:"browser",LANGUAGE:"webjs",VERSION:n.VERSION}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION="0.6.1"},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(14),s=r(10);t.ConsoleSpanExporter=class{export(e,t){return this._sendSpans(e,t)}shutdown(){return this._sendSpans([])}_exportInfo(e){return{traceId:e.spanContext.traceId,parentId:e.parentSpanId,name:e.name,id:e.spanContext.spanId,kind:e.kind,timestamp:s.hrTimeToMicroseconds(e.startTime),duration:s.hrTimeToMicroseconds(e.duration),attributes:e.attributes,status:e.status,events:e.events}}_sendSpans(e,t){for(const t of e)console.log(this._exportInfo(t));if(t)return t(n.ExportResult.SUCCESS)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(10);t.BatchSpanProcessor=class{constructor(e,t){this._exporter=e,this._finishedSpans=[],this._isShutdown=!1,this._bufferSize=t&&t.bufferSize?t.bufferSize:100,this._bufferTimeout=t&&"number"==typeof t.bufferTimeout?t.bufferTimeout:2e4}forceFlush(){this._isShutdown||this._flush()}onStart(e){}onEnd(e){this._isShutdown||this._addToBuffer(e.toReadableSpan())}shutdown(){this._isShutdown||(this.forceFlush(),this._isShutdown=!0,this._exporter.shutdown())}_addToBuffer(e){this._finishedSpans.push(e),this._maybeStartTimer(),this._finishedSpans.length>this._bufferSize&&this._flush()}_flush(){this._clearTimer(),0!==this._finishedSpans.length&&(this._exporter.export(this._finishedSpans,()=>{}),this._finishedSpans=[])}_maybeStartTimer(){void 0===this._timer&&(this._timer=setTimeout(()=>{this._flush()},this._bufferTimeout),n.unrefTimer(this._timer))}_clearTimer(){void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(14);t.InMemorySpanExporter=class{constructor(){this._finishedSpans=[],this._stopped=!1}export(e,t){return this._stopped?t(n.ExportResult.FAILED_NOT_RETRYABLE):(this._finishedSpans.push(...e),t(n.ExportResult.SUCCESS))}shutdown(){this._stopped=!0,this._finishedSpans=[]}reset(){this._finishedSpans=[]}getFinishedSpans(){return this._finishedSpans}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.SimpleSpanProcessor=class{constructor(e){this._exporter=e,this._isShutdown=!1}forceFlush(){}onStart(e){}onEnd(e){this._isShutdown||this._exporter.export([e.toReadableSpan()],()=>{})}shutdown(){this._isShutdown||(this._isShutdown=!0,this._exporter.shutdown())}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(98),s=r(10);function o(e,t){return t in e}function i(e){return e.slice().sort((e,t)=>{const r=e[n.PerformanceTimingNames.FETCH_START],s=t[n.PerformanceTimingNames.FETCH_START];return r>s?1:r<s?-1:0})}function a(e){const t=document.createElement("a");return t.href=e,t}t.hasKey=o,t.addSpanNetworkEvent=function(e,t,r){if(o(r,t)&&"number"==typeof r[t]){if(0===r[t])return;return e.addEvent(t,r[t]),e}},t.sortResources=i,t.getResource=function(e,t,r,o,c=new WeakSet){const u=function(e,t,r,o,i){const a=s.hrTimeToNanoseconds(t),c=s.hrTimeToNanoseconds(r);let u=o.filter(t=>{const r=s.hrTimeToNanoseconds(s.timeInputToHrTime(t[n.PerformanceTimingNames.FETCH_START])),o=s.hrTimeToNanoseconds(s.timeInputToHrTime(t[n.PerformanceTimingNames.RESPONSE_END]));return"xmlhttprequest"===t.initiatorType.toLowerCase()&&t.name===e&&r>=a&&o<=c});u.length>0&&(u=u.filter(e=>!i.has(e)));return u}(e,t,r,o,c);if(0===u.length)return{mainRequest:void 0};if(1===u.length)return{mainRequest:u[0]};const l=i(u.slice());if(a(e).origin!==window.location.origin&&l.length>1){let e=l[0],t=function(e,t,r){const o=s.hrTimeToNanoseconds(r),i=s.hrTimeToNanoseconds(s.timeInputToHrTime(t));let a,c=e[1];const u=e.length;for(let t=1;t<u;t++){const r=e[t],u=s.hrTimeToNanoseconds(s.timeInputToHrTime(r[n.PerformanceTimingNames.FETCH_START])),l=s.hrTimeToNanoseconds(s.timeInputToHrTime(r[n.PerformanceTimingNames.RESPONSE_END])),p=o-l;u>=i&&(!a||p<a)&&(a=p,c=r)}return c}(l,e[n.PerformanceTimingNames.RESPONSE_END],r);const o=e[n.PerformanceTimingNames.RESPONSE_END];return t[n.PerformanceTimingNames.FETCH_START]<o&&(t=e,e=void 0),{corsPreFlightRequest:e,mainRequest:t}}return{mainRequest:u[0]}},t.parseUrl=a,t.getElementXPath=function e(t,r){if(t.nodeType===Node.DOCUMENT_NODE)return"/";const n=function(e,t){const r=e.nodeType,n=function(e){if(!e.parentNode)return 0;const t=[e.nodeType];e.nodeType===Node.CDATA_SECTION_NODE&&t.push(Node.TEXT_NODE);let r=Array.from(e.parentNode.childNodes);if(r=r.filter(r=>{const n=r.localName;return t.indexOf(r.nodeType)>=0&&n===e.localName}),r.length>=1)return r.indexOf(e)+1;return 0}(e);let s="";if(r===Node.ELEMENT_NODE){const r=e.getAttribute("id");if(t&&r)return`//*[@id="${r}"]`;s=e.localName}else if(r===Node.TEXT_NODE||r===Node.CDATA_SECTION_NODE)s="text()";else{if(r!==Node.COMMENT_NODE)return"";s="comment()"}if(s&&n>1)return`/${s}[${n}]`;return"/"+s}(t,r);if(r&&n.indexOf("@id")>0)return n;let s="";return t.parentNode&&(s+=e(t.parentNode,!1)),s+=n,s}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.COMPONENT="component",e.DOCUMENT_LOAD="documentLoad",e.DOCUMENT_FETCH="documentFetch"}(t.AttributeNames||(t.AttributeNames={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION="0.6.1"},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(243),s=r(11),o=r(293),i=r(307),a=r(308);class c extends s.BasePlugin{constructor(){super("@opentelemetry/plugin-user-interaction",a.VERSION),this.component="user-interaction",this.version=a.VERSION,this.moduleName=this.component,this._spansData=new WeakMap,this._zonePatched=!1}_checkForTimeout(e,t){const r=this._spansData.get(t);r&&("setTimeout"===e.source?r.hrTimeLastTimeout=s.hrTime():"Promise.then"!==e.source&&"setTimeout"!==e.source&&(r.hrTimeLastTimeout=void 0))}_createSpan(e,t){if(!e.getAttribute)return;if(e.hasAttribute("disabled"))return;const r=o.getElementXPath(e,!0);try{const n=this._tracer.startSpan("event_click: "+r,{attributes:{[i.AttributeNames.COMPONENT]:this.component,[i.AttributeNames.EVENT_TYPE]:t,[i.AttributeNames.TARGET_ELEMENT]:e.tagName,[i.AttributeNames.TARGET_XPATH]:r,[i.AttributeNames.HTTP_URL]:window.location.href,[i.AttributeNames.HTTP_USER_AGENT]:navigator.userAgent}});return this._spansData.set(n,{taskCount:0}),n}catch(e){this._logger.error(this.component,e)}}_decrementTask(e){const t=this._spansData.get(e);t&&(t.taskCount--,0===t.taskCount&&this._tryToEndSpan(e,t.hrTimeLastTimeout))}_getCurrentSpan(e){const t=e.get("OT_ZONE_CONTEXT");return t?t.getValue(s.ACTIVE_SPAN_KEY):t}_getClickedElement(e){if("click"===e.eventName)return e.target}_incrementTask(e){const t=this._spansData.get(e);t&&t.taskCount++}_patchElement(){const e=this;return t=>function(r,n,s){return t.call(this,r,(...t)=>{const r=this,s=e._createSpan(r,"click");return s?e._tracer.withSpan(s,()=>{const e=n.apply(r,t);return s.end(),e}):n.apply(r,t)},s)}}_patchHistoryApi(){this._unpatchHistoryApi(),n.wrap(history,"replaceState",this._patchHistoryMethod()),n.wrap(history,"pushState",this._patchHistoryMethod()),n.wrap(history,"back",this._patchHistoryMethod()),n.wrap(history,"forward",this._patchHistoryMethod()),n.wrap(history,"go",this._patchHistoryMethod())}_patchHistoryMethod(){const e=this;return t=>function(...r){const n=`${location.pathname}${location.hash}${location.search}`,s=t.apply(this,r),o=`${location.pathname}${location.hash}${location.search}`;return n!==o&&e._updateInteractionName(o),s}}_unpatchHistoryApi(){s.isWrapped(history.replaceState)&&n.unwrap(history,"replaceState"),s.isWrapped(history.pushState)&&n.unwrap(history,"pushState"),s.isWrapped(history.back)&&n.unwrap(history,"back"),s.isWrapped(history.forward)&&n.unwrap(history,"forward"),s.isWrapped(history.go)&&n.unwrap(history,"go")}_updateInteractionName(e){const t=this._tracer.getCurrentSpan();t&&"function"==typeof t.updateName&&t.updateName("Navigation: "+e)}_patchZoneCancelTask(){const e=this;return t=>function(r){const n=Zone.current,s=e._getCurrentSpan(n);return s&&e._shouldCountTask(r,n)&&e._decrementTask(s),t.call(this,r)}}_patchZoneScheduleTask(){const e=this;return t=>function(r){const n=Zone.current,s=e._getCurrentSpan(n);return s&&e._shouldCountTask(r,n)&&(e._incrementTask(s),e._checkForTimeout(r,s)),t.call(this,r)}}_patchZoneRunTask(){const e=this;return t=>function(r,n,s){const o=e._getClickedElement(r);let i;if(o){if(i=e._createSpan(o,"click"),i){e._incrementTask(i);try{return e._tracer.withSpan(i,()=>{const e=Zone.current;return r._zone=e,t.call(e,r,n,s)})}finally{e._decrementTask(i)}}}else i=e._getCurrentSpan(this);try{return t.call(this,r,n,s)}finally{i&&e._shouldCountTask(r,Zone.current)&&e._decrementTask(i)}}}_shouldCountTask(e,t){if(e._zone&&(t=e._zone),!t||!e.data||e.data.isPeriodic)return!1;const r=this._getCurrentSpan(t);return!!r&&(!!this._spansData.get(r)&&("macroTask"===e.type||"microTask"===e.type))}_tryToEndSpan(e,t){if(e){this._spansData.get(e)&&(e.end(t),this._spansData.delete(e))}}patch(){const e=this.getZoneWithPrototype();return this._logger.debug("applying patch to",this.moduleName,this.version,"zone:",!!e),e?(s.isWrapped(e.prototype.runTask)&&(n.unwrap(e.prototype,"runTask"),this._logger.debug("removing previous patch from method runTask")),s.isWrapped(e.prototype.scheduleTask)&&(n.unwrap(e.prototype,"scheduleTask"),this._logger.debug("removing previous patch from method scheduleTask")),s.isWrapped(e.prototype.cancelTask)&&(n.unwrap(e.prototype,"cancelTask"),this._logger.debug("removing previous patch from method cancelTask")),this._zonePatched=!0,n.wrap(e.prototype,"runTask",this._patchZoneRunTask()),n.wrap(e.prototype,"scheduleTask",this._patchZoneScheduleTask()),n.wrap(e.prototype,"cancelTask",this._patchZoneCancelTask())):(this._zonePatched=!1,s.isWrapped(HTMLElement.prototype.addEventListener)&&(n.unwrap(HTMLElement.prototype,"addEventListener"),this._logger.debug("removing previous patch from method addEventListener")),n.wrap(HTMLElement.prototype,"addEventListener",this._patchElement())),this._patchHistoryApi(),this._moduleExports}unpatch(){const e=this.getZoneWithPrototype();this._logger.debug("removing patch from",this.moduleName,this.version,"zone:",!!e),e&&this._zonePatched?(n.unwrap(e.prototype,"runTask"),n.unwrap(e.prototype,"scheduleTask"),n.unwrap(e.prototype,"cancelTask")):n.unwrap(HTMLElement.prototype,"addEventListener"),this._unpatchHistoryApi()}getZoneWithPrototype(){return window.Zone}}t.UserInteractionPlugin=c},function(e,t,r){"use strict";function n(e){return"function"==typeof e}var s=console.error.bind(console);function o(e,t,r){var n=!!e[t]&&e.propertyIsEnumerable(t);Object.defineProperty(e,t,{configurable:!0,enumerable:n,writable:!0,value:r})}function i(e){e&&e.logger&&(n(e.logger)?s=e.logger:s("new logger isn't a function, not replacing"))}function a(e,t,r){if(e&&e[t]){if(!r)return s("no wrapper function"),void s((new Error).stack);if(n(e[t])&&n(r)){var i=e[t],a=r(i,t);return o(a,"__original",i),o(a,"__unwrap",(function(){e[t]===a&&o(e,t,i)})),o(a,"__wrapped",!0),o(e,t,a),a}s("original object and wrapper must be functions")}else s("no original function "+t+" to wrap")}function c(e,t){return e&&e[t]?e[t].__unwrap?e[t].__unwrap():void s("no original to unwrap to -- has "+t+" already been unwrapped?"):(s("no function to unwrap."),void s((new Error).stack))}i.wrap=a,i.massWrap=function(e,t,r){if(!e)return s("must provide one or more modules to patch"),void s((new Error).stack);Array.isArray(e)||(e=[e]),t&&Array.isArray(t)?e.forEach((function(e){t.forEach((function(t){a(e,t,r)}))})):s("must provide one or more functions to wrap on modules")},i.unwrap=c,i.massUnwrap=function(e,t){if(!e)return s("must provide one or more modules to patch"),void s((new Error).stack);Array.isArray(e)||(e=[e]),t&&Array.isArray(t)?e.forEach((function(e){t.forEach((function(t){c(e,t)}))})):s("must provide one or more functions to unwrap on modules")},e.exports=i},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(99);t.ConsoleLogger=class{constructor(e=n.LogLevel.INFO){e>=n.LogLevel.DEBUG&&(this.debug=(...e)=>{console.debug(...e)}),e>=n.LogLevel.INFO&&(this.info=(...e)=>{console.info(...e)}),e>=n.LogLevel.WARN&&(this.warn=(...e)=>{console.warn(...e)}),e>=n.LogLevel.ERROR&&(this.error=(...e)=>{console.error(...e)})}debug(e,...t){}error(e,...t){}warn(e,...t){}info(e,...t){}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(101),s=Math.pow(10,9);function o(e){const t=e/1e3,r=Math.trunc(t);return[r,Number((t-r).toFixed(9))*s]}function i(){let e=n.otperformance.timeOrigin;if("number"!=typeof e){const t=n.otperformance;e=t.timing&&t.timing.fetchStart}return e}function a(e){const t=o(i()),r=o("number"==typeof e?e:n.otperformance.now());let a=t[0]+r[0],c=t[1]+r[1];return c>s&&(c-=s,a+=1),[a,c]}function c(e){return Array.isArray(e)&&2===e.length&&"number"==typeof e[0]&&"number"==typeof e[1]}t.hrTime=a,t.timeInputToHrTime=function(e){if(c(e))return e;if("number"==typeof e)return e<i()?a(e):o(e);if(e instanceof Date)return[e.getTime(),0];throw TypeError("Invalid input type")},t.hrTimeDuration=function(e,t){let r=t[0]-e[0],n=t[1]-e[1];return n<0&&(r-=1,n+=s),[r,n]},t.hrTimeToTimeStamp=function(e){const t=`${"0".repeat(9)}${e[1]}Z`,r=t.substr(t.length-9-1);return new Date(1e3*e[0]).toISOString().replace("000Z",r)},t.hrTimeToNanoseconds=function(e){return e[0]*s+e[1]},t.hrTimeToMilliseconds=function(e){return Math.round(1e3*e[0]+e[1]/1e6)},t.hrTimeToMicroseconds=function(e){return Math.round(1e6*e[0]+e[1]/1e3)},t.isTimeInputHrTime=c,t.isTimeInput=function(e){return c(e)||"number"==typeof e||e instanceof Date}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=window.crypto||window.msCrypto,s=new Uint8Array(16);function o(e){const t=new Array(2*e.length),r="a".charCodeAt(0)-10,n="0".charCodeAt(0);let s=0;for(let o=0;o<e.length;o++){let i=e[o]>>>4&15;t[s++]=i>9?i+r:i+n,i=15&e[o],t[s++]=i>9?i+r:i+n}return String.fromCharCode.apply(null,t)}t.randomTraceId=function(){return n.getRandomValues(s),o(s.slice(0,16))},t.randomSpanId=function(){return n.getRandomValues(s),o(s.slice(0,8))}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.otperformance=performance},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0}),t.unrefTimer=function(e){}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.hexToBase64=function(e){const t=e.length;let r="";for(let n=0;n<t;n+=2){const t=e.substring(n,n+2),s=parseInt(t,16);r+=String.fromCharCode(s)}return btoa(r)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION="0.6.1"},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(102);t.NoopContextManager=class{active(){return n.Context.ROOT_CONTEXT}with(e,t){return t()}bind(e,t){return e}enable(){return this}disable(){return this}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9),s=r(41);t.X_B3_TRACE_ID="x-b3-traceid",t.X_B3_SPAN_ID="x-b3-spanid",t.X_B3_SAMPLED="x-b3-sampled";const o=/^[0-9a-f]{32}$/i,i=/^[0-9a-f]{16}$/i,a=/^0+$/i;function c(e){return o.test(e)&&!a.test(e)}function u(e){return i.test(e)&&!a.test(e)}t.B3Propagator=class{inject(e,r,n){const o=s.getParentSpanContext(e);o&&c(o.traceId)&&u(o.spanId)&&(n(r,t.X_B3_TRACE_ID,o.traceId),n(r,t.X_B3_SPAN_ID,o.spanId),void 0!==o.traceFlags&&n(r,t.X_B3_SAMPLED,Number(o.traceFlags)))}extract(e,r,o){const i=o(r,t.X_B3_TRACE_ID),a=o(r,t.X_B3_SPAN_ID),l=o(r,t.X_B3_SAMPLED),p=Array.isArray(i)?i[0]:i,_=Array.isArray(a)?a[0]:a,E=Array.isArray(l)?l[0]:l;return"string"!=typeof p||"string"!=typeof _?e:c(p)&&u(_)?s.setExtractedSpanContext(e,{traceId:p,spanId:_,isRemote:!0,traceFlags:isNaN(Number(E))?n.TraceFlags.NONE:Number(E)}):e}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.NO_PROPAGATION=0]="NO_PROPAGATION",e[e.UNLIMITED_PROPAGATION=-1]="UNLIMITED_PROPAGATION"}(t.EntryTtl||(t.EntryTtl={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.INT=0]="INT",e[e.DOUBLE=1]="DOUBLE"}(t.ValueType||(t.ValueType={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.INTERNAL=0]="INTERNAL",e[e.SERVER=1]="SERVER",e[e.CLIENT=2]="CLIENT",e[e.PRODUCER=3]="PRODUCER",e[e.CONSUMER=4]="CONSUMER"}(t.SpanKind||(t.SpanKind={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e[e.OK=0]="OK",e[e.CANCELLED=1]="CANCELLED",e[e.UNKNOWN=2]="UNKNOWN",e[e.INVALID_ARGUMENT=3]="INVALID_ARGUMENT",e[e.DEADLINE_EXCEEDED=4]="DEADLINE_EXCEEDED",e[e.NOT_FOUND=5]="NOT_FOUND",e[e.ALREADY_EXISTS=6]="ALREADY_EXISTS",e[e.PERMISSION_DENIED=7]="PERMISSION_DENIED",e[e.RESOURCE_EXHAUSTED=8]="RESOURCE_EXHAUSTED",e[e.FAILED_PRECONDITION=9]="FAILED_PRECONDITION",e[e.ABORTED=10]="ABORTED",e[e.OUT_OF_RANGE=11]="OUT_OF_RANGE",e[e.UNIMPLEMENTED=12]="UNIMPLEMENTED",e[e.INTERNAL=13]="INTERNAL",e[e.UNAVAILABLE=14]="UNAVAILABLE",e[e.DATA_LOSS=15]="DATA_LOSS",e[e.UNAUTHENTICATED=16]="UNAUTHENTICATED"}(t.CanonicalCode||(t.CanonicalCode={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(111);class s{constructor(){this._tracerProvider=n.NOOP_TRACER_PROVIDER}static getInstance(){return this._instance||(this._instance=new s),this._instance}setGlobalTracerProvider(e){return this._tracerProvider=e,e}getTracerProvider(){return this._tracerProvider}getTracer(e,t){return this.getTracerProvider().getTracer(e,t)}}t.TraceAPI=s},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(107);class s{constructor(){this._meterProvider=n.NOOP_METER_PROVIDER}static getInstance(){return this._instance||(this._instance=new s),this._instance}setGlobalMeterProvider(e){return this._meterProvider=e,e}getMeterProvider(){return this._meterProvider}getMeter(e,t){return this.getMeterProvider().getMeter(e,t)}}t.MetricsAPI=s},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(103),s=r(104),o=r(105),i=r(112).ContextAPI.getInstance();class a{constructor(){this._propagator=s.NOOP_HTTP_TEXT_PROPAGATOR}static getInstance(){return this._instance||(this._instance=new a),this._instance}setGlobalPropagator(e){return this._propagator=e,e}inject(e,t=o.defaultSetter,r=i.active()){return this._propagator.inject(r,e,t)}extract(e,t=n.defaultGetter,r=i.active()){return this._propagator.extract(r,e,t)}}t.PropagationAPI=a},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(100);t.CompositePropagator=class{constructor(e={}){var t,r;this._propagators=null!=(t=e.propagators)?t:[],this._logger=null!=(r=e.logger)?r:new n.NoopLogger}inject(e,t,r){for(const n of this._propagators)try{n.inject(e,t,r)}catch(e){this._logger.warn(`Failed to inject with ${n.constructor.name}. Err: ${e.message}`)}}extract(e,t,r){return this._propagators.reduce((e,n)=>{try{return n.extract(e,t,r)}catch(e){this._logger.warn(`Failed to inject with ${n.constructor.name}. Err: ${e.message}`)}return e},e)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9),s=r(113),o=r(41);t.TRACE_PARENT_HEADER="traceparent",t.TRACE_STATE_HEADER="tracestate";const i=/^00-([\da-f]{32})-([\da-f]{16})-([\da-f]{2})$/;function a(e){const t=e.match(i);return t&&"00000000000000000000000000000000"!==t[1]&&"0000000000000000"!==t[2]?{traceId:t[1],spanId:t[2],traceFlags:parseInt(t[3],16)}:null}t.parseTraceParent=a;t.HttpTraceContext=class{inject(e,r,s){const i=o.getParentSpanContext(e);if(!i)return;const a=`00-${i.traceId}-${i.spanId}-0${Number(i.traceFlags||n.TraceFlags.NONE).toString(16)}`;s(r,t.TRACE_PARENT_HEADER,a),i.traceState&&s(r,t.TRACE_STATE_HEADER,i.traceState.serialize())}extract(e,r,n){const i=n(r,t.TRACE_PARENT_HEADER);if(!i)return e;const c=Array.isArray(i)?i[0]:i;if("string"!=typeof c)return e;const u=a(c);if(!u)return e;u.isRemote=!0;const l=n(r,t.TRACE_STATE_HEADER);if(l){const e=Array.isArray(l)?l.join(","):l;u.traceState=new s.TraceState("string"==typeof e?e:void 0)}return o.setExtractedSpanContext(e,u)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=new RegExp("^(?:[a-z][_0-9a-z-*/]{0,255}|[a-z0-9][_0-9a-z-*/]{0,240}@[a-z][_0-9a-z-*/]{0,13})$"),s=/^[ -~]{0,255}[!-~]$/,o=/,|=/;t.validateKey=function(e){return n.test(e)},t.validateValue=function(e){return s.test(e)&&!o.test(e)}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(264),s=r(91);t.BasePlugin=class{constructor(e,t){this._tracerName=e,this._tracerVersion=t}enable(e,t,r,n){return this._moduleExports=e,this._tracer=t.getTracer(this._tracerName,this._tracerVersion),this._logger=r,this._internalFilesExports=this._loadInternalFilesExports(),n&&(this._config=n),this.patch()}disable(){this.unpatch()}_loadInternalFilesExports(){if(!this._internalFilesList)return{};if(!this.version||!this.moduleName||!this._basedir)return this._logger.debug("loadInternalFiles failed because one of the required fields was missing: moduleName=%s, version=%s, basedir=%s",this.moduleName,this.version,this._basedir),{};let e={};return this._logger.debug("loadInternalFiles %o",this._internalFilesList),Object.keys(this._internalFilesList).forEach(t=>{this._loadInternalModule(t,e)}),0===Object.keys(e).length&&this._logger.debug("No internal files could be loaded for %s@%s",this.moduleName,this.version),e}_loadInternalModule(e,t){n.satisfies(this.version,e)&&(Object.keys(t).length>0&&this._logger.warn("Plugin for %s@%s, has overlap version range (%s) for internal files: %o",this.moduleName,this.version,e,this._internalFilesList),this._requireInternalFiles(this._internalFilesList[e],this._basedir,t))}_requireInternalFiles(e,t,n){e&&Object.keys(e).forEach(o=>{try{this._logger.debug("loading File %s",e[o]),n[o]=r(288)(s.join(t,e[o]))}catch(r){this._logger.error("Could not load internal file %s of module %s. Error: %s",s.join(t,e[o]),this.moduleName,r.message)}})}}},function(e,t,r){const n=r(15);e.exports={re:n.re,src:n.src,tokens:n.t,SEMVER_SPEC_VERSION:r(25).SEMVER_SPEC_VERSION,SemVer:r(1),compareIdentifiers:r(43).compareIdentifiers,rcompareIdentifiers:r(43).rcompareIdentifiers,parse:r(16),valid:r(265),clean:r(266),inc:r(267),diff:r(268),major:r(269),minor:r(270),patch:r(271),prerelease:r(272),compare:r(4),rcompare:r(273),compareLoose:r(274),compareBuild:r(45),sort:r(275),rsort:r(276),gt:r(27),lt:r(46),eq:r(44),neq:r(114),gte:r(47),lte:r(48),cmp:r(115),coerce:r(277),Comparator:r(28),Range:r(5),satisfies:r(29),toComparators:r(278),maxSatisfying:r(279),minSatisfying:r(280),minVersion:r(281),validRange:r(282),outside:r(49),gtr:r(283),ltr:r(284),intersects:r(285),simplifyRange:r(286),subset:r(287)}},function(e,t,r){const n=r(16);e.exports=(e,t)=>{const r=n(e,t);return r?r.version:null}},function(e,t,r){const n=r(16);e.exports=(e,t)=>{const r=n(e.trim().replace(/^[=v]+/,""),t);return r?r.version:null}},function(e,t,r){const n=r(1);e.exports=(e,t,r,s)=>{"string"==typeof r&&(s=r,r=void 0);try{return new n(e,r).inc(t,s).version}catch(e){return null}}},function(e,t,r){const n=r(16),s=r(44);e.exports=(e,t)=>{if(s(e,t))return null;{const r=n(e),s=n(t),o=r.prerelease.length||s.prerelease.length,i=o?"pre":"",a=o?"prerelease":"";for(const e in r)if(("major"===e||"minor"===e||"patch"===e)&&r[e]!==s[e])return i+e;return a}}},function(e,t,r){const n=r(1);e.exports=(e,t)=>new n(e,t).major},function(e,t,r){const n=r(1);e.exports=(e,t)=>new n(e,t).minor},function(e,t,r){const n=r(1);e.exports=(e,t)=>new n(e,t).patch},function(e,t,r){const n=r(16);e.exports=(e,t)=>{const r=n(e,t);return r&&r.prerelease.length?r.prerelease:null}},function(e,t,r){const n=r(4);e.exports=(e,t,r)=>n(t,e,r)},function(e,t,r){const n=r(4);e.exports=(e,t)=>n(e,t,!0)},function(e,t,r){const n=r(45);e.exports=(e,t)=>e.sort((e,r)=>n(e,r,t))},function(e,t,r){const n=r(45);e.exports=(e,t)=>e.sort((e,r)=>n(r,e,t))},function(e,t,r){const n=r(1),s=r(16),{re:o,t:i}=r(15);e.exports=(e,t)=>{if(e instanceof n)return e;if("number"==typeof e&&(e=String(e)),"string"!=typeof e)return null;let r=null;if((t=t||{}).rtl){let t;for(;(t=o[i.COERCERTL].exec(e))&&(!r||r.index+r[0].length!==e.length);)r&&t.index+t[0].length===r.index+r[0].length||(r=t),o[i.COERCERTL].lastIndex=t.index+t[1].length+t[2].length;o[i.COERCERTL].lastIndex=-1}else r=e.match(o[i.COERCE]);return null===r?null:s(`${r[2]}.${r[3]||"0"}.${r[4]||"0"}`,t)}},function(e,t,r){const n=r(5);e.exports=(e,t)=>new n(e,t).set.map(e=>e.map(e=>e.value).join(" ").trim().split(" "))},function(e,t,r){const n=r(1),s=r(5);e.exports=(e,t,r)=>{let o=null,i=null,a=null;try{a=new s(t,r)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(o&&-1!==i.compare(e)||(o=e,i=new n(o,r)))}),o}},function(e,t,r){const n=r(1),s=r(5);e.exports=(e,t,r)=>{let o=null,i=null,a=null;try{a=new s(t,r)}catch(e){return null}return e.forEach(e=>{a.test(e)&&(o&&1!==i.compare(e)||(o=e,i=new n(o,r)))}),o}},function(e,t,r){const n=r(1),s=r(5),o=r(27);e.exports=(e,t)=>{e=new s(e,t);let r=new n("0.0.0");if(e.test(r))return r;if(r=new n("0.0.0-0"),e.test(r))return r;r=null;for(let t=0;t<e.set.length;++t){e.set[t].forEach(e=>{const t=new n(e.semver.version);switch(e.operator){case">":0===t.prerelease.length?t.patch++:t.prerelease.push(0),t.raw=t.format();case"":case">=":r&&!o(r,t)||(r=t);break;case"<":case"<=":break;default:throw new Error("Unexpected operation: "+e.operator)}})}return r&&e.test(r)?r:null}},function(e,t,r){const n=r(5);e.exports=(e,t)=>{try{return new n(e,t).range||"*"}catch(e){return null}}},function(e,t,r){const n=r(49);e.exports=(e,t,r)=>n(e,t,">",r)},function(e,t,r){const n=r(49);e.exports=(e,t,r)=>n(e,t,"<",r)},function(e,t,r){const n=r(5);e.exports=(e,t,r)=>(e=new n(e,r),t=new n(t,r),e.intersects(t))},function(e,t,r){const n=r(29),s=r(4);e.exports=(e,t,r)=>{const o=[];let i=null,a=null;const c=e.sort((e,t)=>s(e,t,r));for(const e of c){n(e,t,r)?(a=e,i||(i=e)):(a&&o.push([i,a]),a=null,i=null)}i&&o.push([i,null]);const u=[];for(const[e,t]of o)e===t?u.push(e):t||e!==c[0]?t?e===c[0]?u.push("<="+t):u.push(`${e} - ${t}`):u.push(">="+e):u.push("*");const l=u.join(" || "),p="string"==typeof t.raw?t.raw:String(t);return l.length<p.length?l:t}},function(e,t,r){const n=r(5),{ANY:s}=r(28),o=r(29),i=r(4),a=(e,t,r)=>{if(1===e.length&&e[0].semver===s)return 1===t.length&&t[0].semver===s;const n=new Set;let a,l,p,_,E,h,d;for(const t of e)">"===t.operator||">="===t.operator?a=c(a,t,r):"<"===t.operator||"<="===t.operator?l=u(l,t,r):n.add(t.semver);if(n.size>1)return null;if(a&&l){if(p=i(a.semver,l.semver,r),p>0)return null;if(0===p&&(">="!==a.operator||"<="!==l.operator))return null}for(const e of n){if(a&&!o(e,String(a),r))return null;if(l&&!o(e,String(l),r))return null;for(const n of t)if(!o(e,String(n),r))return!1;return!0}for(const e of t){if(d=d||">"===e.operator||">="===e.operator,h=h||"<"===e.operator||"<="===e.operator,a)if(">"===e.operator||">="===e.operator){if(_=c(a,e,r),_===e)return!1}else if(">="===a.operator&&!o(a.semver,String(e),r))return!1;if(l)if("<"===e.operator||"<="===e.operator){if(E=u(l,e,r),E===e)return!1}else if("<="===l.operator&&!o(l.semver,String(e),r))return!1;if(!e.operator&&(l||a)&&0!==p)return!1}return!(a&&h&&!l&&0!==p)&&!(l&&d&&!a&&0!==p)},c=(e,t,r)=>{if(!e)return t;const n=i(e.semver,t.semver,r);return n>0?e:n<0||">"===t.operator&&">="===e.operator?t:e},u=(e,t,r)=>{if(!e)return t;const n=i(e.semver,t.semver,r);return n<0?e:n>0||"<"===t.operator&&"<="===e.operator?t:e};e.exports=(e,t,r)=>{e=new n(e,r),t=new n(t,r);let s=!1;e:for(const n of e.set){for(const e of t.set){const t=a(n,e,r);if(s=s||null!==t,t)continue e}if(s)return!1}return!0}},function(e,t){function r(e){var t=new Error("Cannot find module '"+e+"'");throw t.code="MODULE_NOT_FOUND",t}r.keys=function(){return[]},r.resolve=r,e.exports=r,r.id=288},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9),s=r(116);class o extends n.NoopSpan{constructor(e){super(e),this._context=e||s.INVALID_SPAN_CONTEXT}context(){return this._context}}t.NoRecordingSpan=o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9);class s{constructor(e=0){this._probability=e,this._probability=this._normalize(e)}shouldSample(e){return e&&void 0!==e.traceFlags?(n.TraceFlags.SAMPLED&e.traceFlags)===n.TraceFlags.SAMPLED:this._probability>=1||!(this._probability<=0)&&Math.random()<this._probability}toString(){return`ProbabilitySampler{${this._probability}}`}_normalize(e){return"number"!=typeof e||isNaN(e)?0:e>=1?1:e<=0?0:e}}t.ProbabilitySampler=s,t.ALWAYS_SAMPLER=new s(1),t.NEVER_SAMPLER=new s(0)},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e,t){return"string"==typeof t?e===t:!!e.match(t)}Object.defineProperty(t,"__esModule",{value:!0}),t.urlMatches=n,t.isUrlIgnored=function(e,t){if(!t)return!1;for(const r of t)if(n(e,r))return!0;return!1}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.isWrapped=function(e){return"function"==typeof e&&"function"==typeof e.__original&&"function"==typeof e.__unwrap&&!0===e.__wrapped}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */function n(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}Object.defineProperty(t,"__esModule",{value:!0}),n(r(294)),n(r(121)),n(r(122)),n(r(306))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(117),s=r(121);class o extends n.BasicTracerProvider{constructor(e={}){void 0===e.plugins&&(e.plugins=[]),super(e);for(const t of e.plugins)t.enable([],this,this.logger);if(e.contextManager)throw"contextManager should be defined in register method not in constructor";if(e.propagator)throw"propagator should be defined in register method not in constructor"}register(e={}){void 0===e.contextManager&&(e.contextManager=new s.StackContextManager),e.contextManager&&e.contextManager.enable(),super.register(e)}}t.WebTracerProvider=o},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9),s=r(11),o=r(118),i=r(296);t.Tracer=class{constructor(e,t){this._tracerProvider=t;const r=i.mergeConfig(e);this._defaultAttributes=r.defaultAttributes,this._sampler=r.sampler,this._traceParams=r.traceParams,this.resource=t.resource,this.logger=e.logger||new s.ConsoleLogger(e.logLevel)}startSpan(e,t={},r=n.context.active()){const i=function(e,t){return null===e.parent?void 0:e.parent?function(e){return function(e){return"function"==typeof e.context}(e)?e.context():e}(e.parent):s.getParentSpanContext(t)}(t,r),a=this._sampler.shouldSample(i),c=s.randomSpanId();let u,l;i&&s.isValid(i)?(u=i.traceId,l=i.traceState):u=s.randomTraceId();const p={traceId:u,spanId:c,traceFlags:a?n.TraceFlags.SAMPLED:n.TraceFlags.NONE,traceState:l};if(!a)return this.logger.debug("Sampling is off, starting no recording span"),new s.NoRecordingSpan(p);const _=new o.Span(this,e,p,t.kind||n.SpanKind.INTERNAL,i?i.spanId:void 0,t.links||[],t.startTime);return _.setAttributes(Object.assign({},this._defaultAttributes,t.attributes)),_}getCurrentSpan(){const e=n.context.active();return s.getActiveSpan(e)}withSpan(e,t){return n.context.with(s.setActiveSpan(n.context.active(),e),t)}bind(e,t){return n.context.bind(e,t?s.setActiveSpan(n.context.active(),t):n.context.active())}getActiveTraceParams(){return this._traceParams}getActiveSpanProcessor(){return this._tracerProvider.getActiveSpanProcessor()}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(119);t.mergeConfig=function(e){const t=e.traceParams,r=Object.assign({},n.DEFAULT_CONFIG,e);return t&&(r.traceParams.numberOfAttributesPerSpan=t.numberOfAttributesPerSpan||n.DEFAULT_MAX_ATTRIBUTES_PER_SPAN,r.traceParams.numberOfEventsPerSpan=t.numberOfEventsPerSpan||n.DEFAULT_MAX_EVENTS_PER_SPAN,r.traceParams.numberOfLinksPerSpan=t.numberOfLinksPerSpan||n.DEFAULT_MAX_LINKS_PER_SPAN),r}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(9),s=r(11),o=r(117),i=r(119),a=r(298),c=r(299),u=r(300);t.BasicTracerProvider=class{constructor(e=i.DEFAULT_CONFIG){this._config=e,this._registeredSpanProcessors=[],this._tracers=new Map,this.activeSpanProcessor=new c.NoopSpanProcessor,this.logger=e.logger||new s.ConsoleLogger(e.logLevel),this.resource=e.resource||u.Resource.createTelemetrySDKResource()}getTracer(e,t="*",r){const n=`${e}@${t}`;return this._tracers.has(n)||this._tracers.set(n,new o.Tracer(r||this._config,this)),this._tracers.get(n)}addSpanProcessor(e){this._registeredSpanProcessors.push(e),this.activeSpanProcessor=new a.MultiSpanProcessor(this._registeredSpanProcessors)}getActiveSpanProcessor(){return this.activeSpanProcessor}register(e={}){n.trace.setGlobalTracerProvider(this),void 0===e.propagator&&(e.propagator=new s.HttpTraceContext),e.contextManager&&n.context.setGlobalContextManager(e.contextManager),e.propagator&&n.propagation.setGlobalPropagator(e.propagator)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.MultiSpanProcessor=class{constructor(e){this._spanProcessors=e}forceFlush(){}onStart(e){for(const t of this._spanProcessors)t.onStart(e)}onEnd(e){for(const t of this._spanProcessors)t.onEnd(e)}shutdown(){for(const e of this._spanProcessors)e.shutdown()}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.NoopSpanProcessor=class{onStart(e){}onEnd(e){}shutdown(){}forceFlush(){}}},function(e,t,r){"use strict";Object.defineProperty(t,"__esModule",{value:!0});var n=r(301);t.Resource=n.Resource,function(e){for(var r in e)t.hasOwnProperty(r)||(t[r]=e[r])}(r(120))},function(e,t,r){"use strict";
/*!
 * Copyright 2020, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(14),s=r(120);class o{constructor(e){this.labels=e}static empty(){return o.EMPTY}static createTelemetrySDKResource(){return new o({[s.TELEMETRY_SDK_RESOURCE.LANGUAGE]:n.SDK_INFO.LANGUAGE,[s.TELEMETRY_SDK_RESOURCE.NAME]:n.SDK_INFO.NAME,[s.TELEMETRY_SDK_RESOURCE.VERSION]:n.SDK_INFO.VERSION})}merge(e){if(!e||!Object.keys(e.labels).length)return this;const t=Object.assign({},e.labels,this.labels);return new o(t)}}t.Resource=o,o.EMPTY=new o({})},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(14),s=r(11);t.ConsoleSpanExporter=class{export(e,t){return this._sendSpans(e,t)}shutdown(){return this._sendSpans([])}_exportInfo(e){return{traceId:e.spanContext.traceId,parentId:e.parentSpanId,name:e.name,id:e.spanContext.spanId,kind:e.kind,timestamp:s.hrTimeToMicroseconds(e.startTime),duration:s.hrTimeToMicroseconds(e.duration),attributes:e.attributes,status:e.status,events:e.events}}_sendSpans(e,t){for(const t of e)console.log(this._exportInfo(t));if(t)return t(n.ExportResult.SUCCESS)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(11);t.BatchSpanProcessor=class{constructor(e,t){this._exporter=e,this._finishedSpans=[],this._isShutdown=!1,this._bufferSize=t&&t.bufferSize?t.bufferSize:100,this._bufferTimeout=t&&"number"==typeof t.bufferTimeout?t.bufferTimeout:2e4}forceFlush(){this._isShutdown||this._flush()}onStart(e){}onEnd(e){this._isShutdown||this._addToBuffer(e.toReadableSpan())}shutdown(){this._isShutdown||(this.forceFlush(),this._isShutdown=!0,this._exporter.shutdown())}_addToBuffer(e){this._finishedSpans.push(e),this._maybeStartTimer(),this._finishedSpans.length>this._bufferSize&&this._flush()}_flush(){this._clearTimer(),0!==this._finishedSpans.length&&(this._exporter.export(this._finishedSpans,()=>{}),this._finishedSpans=[])}_maybeStartTimer(){void 0===this._timer&&(this._timer=setTimeout(()=>{this._flush()},this._bufferTimeout),n.unrefTimer(this._timer))}_clearTimer(){void 0!==this._timer&&(clearTimeout(this._timer),this._timer=void 0)}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(14);t.InMemorySpanExporter=class{constructor(){this._finishedSpans=[],this._stopped=!1}export(e,t){return this._stopped?t(n.ExportResult.FAILED_NOT_RETRYABLE):(this._finishedSpans.push(...e),t(n.ExportResult.SUCCESS))}shutdown(){this._stopped=!0,this._finishedSpans=[]}reset(){this._finishedSpans=[]}getFinishedSpans(){return this._finishedSpans}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});t.SimpleSpanProcessor=class{constructor(e){this._exporter=e,this._isShutdown=!1}forceFlush(){}onStart(e){}onEnd(e){this._isShutdown||this._exporter.export([e.toReadableSpan()],()=>{})}shutdown(){this._isShutdown||(this._isShutdown=!0,this._exporter.shutdown())}}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0});const n=r(122),s=r(11);function o(e,t){return t in e}function i(e){return e.slice().sort((e,t)=>{const r=e[n.PerformanceTimingNames.FETCH_START],s=t[n.PerformanceTimingNames.FETCH_START];return r>s?1:r<s?-1:0})}function a(e){const t=document.createElement("a");return t.href=e,t}t.hasKey=o,t.addSpanNetworkEvent=function(e,t,r){if(o(r,t)&&"number"==typeof r[t]){if(0===r[t])return;return e.addEvent(t,r[t]),e}},t.sortResources=i,t.getResource=function(e,t,r,o,c=new WeakSet){const u=function(e,t,r,o,i){const a=s.hrTimeToNanoseconds(t),c=s.hrTimeToNanoseconds(r);let u=o.filter(t=>{const r=s.hrTimeToNanoseconds(s.timeInputToHrTime(t[n.PerformanceTimingNames.FETCH_START])),o=s.hrTimeToNanoseconds(s.timeInputToHrTime(t[n.PerformanceTimingNames.RESPONSE_END]));return"xmlhttprequest"===t.initiatorType.toLowerCase()&&t.name===e&&r>=a&&o<=c});u.length>0&&(u=u.filter(e=>!i.has(e)));return u}(e,t,r,o,c);if(0===u.length)return{mainRequest:void 0};if(1===u.length)return{mainRequest:u[0]};const l=i(u.slice());if(a(e).origin!==window.location.origin&&l.length>1){let e=l[0],t=function(e,t,r){const o=s.hrTimeToNanoseconds(r),i=s.hrTimeToNanoseconds(s.timeInputToHrTime(t));let a,c=e[1];const u=e.length;for(let t=1;t<u;t++){const r=e[t],u=s.hrTimeToNanoseconds(s.timeInputToHrTime(r[n.PerformanceTimingNames.FETCH_START])),l=s.hrTimeToNanoseconds(s.timeInputToHrTime(r[n.PerformanceTimingNames.RESPONSE_END])),p=o-l;u>=i&&(!a||p<a)&&(a=p,c=r)}return c}(l,e[n.PerformanceTimingNames.RESPONSE_END],r);const o=e[n.PerformanceTimingNames.RESPONSE_END];return t[n.PerformanceTimingNames.FETCH_START]<o&&(t=e,e=void 0),{corsPreFlightRequest:e,mainRequest:t}}return{mainRequest:u[0]}},t.parseUrl=a,t.getElementXPath=function e(t,r){if(t.nodeType===Node.DOCUMENT_NODE)return"/";const n=function(e,t){const r=e.nodeType,n=function(e){if(!e.parentNode)return 0;const t=[e.nodeType];e.nodeType===Node.CDATA_SECTION_NODE&&t.push(Node.TEXT_NODE);let r=Array.from(e.parentNode.childNodes);if(r=r.filter(r=>{const n=r.localName;return t.indexOf(r.nodeType)>=0&&n===e.localName}),r.length>=1)return r.indexOf(e)+1;return 0}(e);let s="";if(r===Node.ELEMENT_NODE){const r=e.getAttribute("id");if(t&&r)return`//*[@id="${r}"]`;s=e.localName}else if(r===Node.TEXT_NODE||r===Node.CDATA_SECTION_NODE)s="text()";else{if(r!==Node.COMMENT_NODE)return"";s="comment()"}if(s&&n>1)return`/${s}[${n}]`;return"/"+s}(t,r);if(r&&n.indexOf("@id")>0)return n;let s="";return t.parentNode&&(s+=e(t.parentNode,!1)),s+=n,s}},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),function(e){e.COMPONENT="component",e.EVENT_TYPE="event_type",e.TARGET_ELEMENT="target_element",e.TARGET_XPATH="target_xpath",e.HTTP_URL="http.url",e.HTTP_USER_AGENT="http.user_agent"}(t.AttributeNames||(t.AttributeNames={}))},function(e,t,r){"use strict";
/*!
 * Copyright 2019, OpenTelemetry Authors
 *
 * Licensed under the Apache License, Version 2.0 (the "License");
 * you may not use this file except in compliance with the License.
 * You may obtain a copy of the License at
 *
 *      https://www.apache.org/licenses/LICENSE-2.0
 *
 * Unless required by applicable law or agreed to in writing, software
 * distributed under the License is distributed on an "AS IS" BASIS,
 * WITHOUT WARRANTIES OR CONDITIONS OF ANY KIND, either express or implied.
 * See the License for the specific language governing permissions and
 * limitations under the License.
 */Object.defineProperty(t,"__esModule",{value:!0}),t.VERSION="0.6.1"}]);