(()=>{"use strict";var e,t,a,o,n={699:(e,t,a)=>{a.d(t,{Z:()=>i});var o=a(81),n=a.n(o),r=a(645),s=a.n(r)()(n());s.push([e.id,"table,\ntbody,\ntr,\nth,\ntd {\n    background-color: rgba(255, 255, 255, 0.2) !important;\n}\n\n.custom-switch:focus {\n    border-color: rgba(255, 255, 255, 0.2);\n    box-shadow: 0 0 5px 2px bisque;\n}\n\n.custom-switch:checked {\n    border-color: rgba(255, 255, 255, 0.2);\n    background-color: chocolate;\n    box-shadow: 0 0 5px 2px bisque;\n}\n\niframe {\n    overflow: hidden;\n    border: 0;\n}\n\n.custom-btn {\n    border-color: chocolate;\n    color: chocolate;\n}\n\n.custom-btn:hover {\n    border-color: rgba(235, 173, 129, 1);\n    background-color: rgba(235, 173, 129, 1);\n}\n\n.custom-btn:disabled {\n    border-color: rgba(70, 70, 70, 0.5);\n    color: rgb(70, 70, 70, 0.5);\n}\n\n.multifont {\n    font-family: 'Courier Prime', 'Noto Sans SC', sans-serif;\n}\n\na {\n    color: chocolate;\n}\n\n.custom-tooltip {\n    --bs-tooltip-bg: var(--bd-violet-bg);\n    --bs-tooltip-color: var(--bs-white);\n}",""]);const i=s},645:e=>{e.exports=function(e){var t=[];return t.toString=function(){return this.map((function(t){var a="",o=void 0!==t[5];return t[4]&&(a+="@supports (".concat(t[4],") {")),t[2]&&(a+="@media ".concat(t[2]," {")),o&&(a+="@layer".concat(t[5].length>0?" ".concat(t[5]):""," {")),a+=e(t),o&&(a+="}"),t[2]&&(a+="}"),t[4]&&(a+="}"),a})).join("")},t.i=function(e,a,o,n,r){"string"==typeof e&&(e=[[null,e,void 0]]);var s={};if(o)for(var i=0;i<this.length;i++){var l=this[i][0];null!=l&&(s[l]=!0)}for(var c=0;c<e.length;c++){var d=[].concat(e[c]);o&&s[d[0]]||(void 0!==r&&(void 0===d[5]||(d[1]="@layer".concat(d[5].length>0?" ".concat(d[5]):""," {").concat(d[1],"}")),d[5]=r),a&&(d[2]?(d[1]="@media ".concat(d[2]," {").concat(d[1],"}"),d[2]=a):d[2]=a),n&&(d[4]?(d[1]="@supports (".concat(d[4],") {").concat(d[1],"}"),d[4]=n):d[4]="".concat(n)),t.push(d))}},t}},81:e=>{e.exports=function(e){return e[1]}},823:(e,t,a)=>{var o=a(379),n=a.n(o),r=a(795),s=a.n(r),i=a(569),l=a.n(i),c=a(565),d=a.n(c),u=a(216),m=a.n(u),b=a(589),p=a.n(b),y=a(699),v={};v.styleTagTransform=p(),v.setAttributes=d(),v.insert=l().bind(null,"head"),v.domAPI=s(),v.insertStyleElement=m(),n()(y.Z,v),y.Z&&y.Z.locals&&y.Z.locals},379:e=>{var t=[];function a(e){for(var a=-1,o=0;o<t.length;o++)if(t[o].identifier===e){a=o;break}return a}function o(e,o){for(var r={},s=[],i=0;i<e.length;i++){var l=e[i],c=o.base?l[0]+o.base:l[0],d=r[c]||0,u="".concat(c," ").concat(d);r[c]=d+1;var m=a(u),b={css:l[1],media:l[2],sourceMap:l[3],supports:l[4],layer:l[5]};if(-1!==m)t[m].references++,t[m].updater(b);else{var p=n(b,o);o.byIndex=i,t.splice(i,0,{identifier:u,updater:p,references:1})}s.push(u)}return s}function n(e,t){var a=t.domAPI(t);return a.update(e),function(t){if(t){if(t.css===e.css&&t.media===e.media&&t.sourceMap===e.sourceMap&&t.supports===e.supports&&t.layer===e.layer)return;a.update(e=t)}else a.remove()}}e.exports=function(e,n){var r=o(e=e||[],n=n||{});return function(e){e=e||[];for(var s=0;s<r.length;s++){var i=a(r[s]);t[i].references--}for(var l=o(e,n),c=0;c<r.length;c++){var d=a(r[c]);0===t[d].references&&(t[d].updater(),t.splice(d,1))}r=l}}},569:e=>{var t={};e.exports=function(e,a){var o=function(e){if(void 0===t[e]){var a=document.querySelector(e);if(window.HTMLIFrameElement&&a instanceof window.HTMLIFrameElement)try{a=a.contentDocument.head}catch(e){a=null}t[e]=a}return t[e]}(e);if(!o)throw new Error("Couldn't find a style target. This probably means that the value for the 'insert' parameter is invalid.");o.appendChild(a)}},216:e=>{e.exports=function(e){var t=document.createElement("style");return e.setAttributes(t,e.attributes),e.insert(t,e.options),t}},565:(e,t,a)=>{e.exports=function(e){var t=a.nc;t&&e.setAttribute("nonce",t)}},795:e=>{e.exports=function(e){if("undefined"==typeof document)return{update:function(){},remove:function(){}};var t=e.insertStyleElement(e);return{update:function(a){!function(e,t,a){var o="";a.supports&&(o+="@supports (".concat(a.supports,") {")),a.media&&(o+="@media ".concat(a.media," {"));var n=void 0!==a.layer;n&&(o+="@layer".concat(a.layer.length>0?" ".concat(a.layer):""," {")),o+=a.css,n&&(o+="}"),a.media&&(o+="}"),a.supports&&(o+="}");var r=a.sourceMap;r&&"undefined"!=typeof btoa&&(o+="\n/*# sourceMappingURL=data:application/json;base64,".concat(btoa(unescape(encodeURIComponent(JSON.stringify(r))))," */")),t.styleTagTransform(o,e,t.options)}(t,e,a)},remove:function(){!function(e){if(null===e.parentNode)return!1;e.parentNode.removeChild(e)}(t)}}}},589:e=>{e.exports=function(e,t){if(t.styleSheet)t.styleSheet.cssText=e;else{for(;t.firstChild;)t.removeChild(t.firstChild);t.appendChild(document.createTextNode(e))}}},14:(e,t,a)=>{a.a(e,(async(e,t)=>{try{a(823);var o=a(712);console.log("Hello PMCA!"),await(0,o.xy)(),t()}catch(e){t(e)}}),1)},712:(e,t,a)=>{a.d(t,{xy:()=>Ie,mg:()=>$e,Kt:()=>Te,pX:()=>Be});class o{constructor(){this.get=async e=>null,this.set=async(e,t)=>{}}}const n=async e=>new Promise(((t,a)=>{chrome.storage.local.get(e,(o=>{void 0===o||void 0===o[e]?a(e):t(o[e])}))})).catch((e=>{console.log(`get local storage data failed for key = ${e}`)})),r=async(e,t)=>new Promise((a=>{chrome.storage.local.set({[e]:t}),a()})).catch((e=>console.log(e))),s=new class extends o{constructor(){super(),this.get=n,this.set=r}},i=async e=>new Promise(((t,a)=>{chrome.storage.sync.get(e,(o=>{void 0===o||void 0===o[e]?a(e):t(o[e])}))})).catch((e=>{console.log(`get sync storage data failed for key = ${e}`)})),l=async(e,t)=>(console.log("set to cloud"),console.log([e,t]),new Promise((a=>{chrome.storage.sync.set({[e]:t}),a()})).catch((e=>console.log(e)))),c=new class extends o{constructor(){super(),this.get=i,this.set=l}},d=[1440,2880,5760,10080,21600],u=["Jan","Feb","Mar","Apr","May","Jun","Jul","Aug","Sep","Oct","Nov","Dec"],m=e=>!(e.proficiency>=d.length)&&(Date.now()-e.submissionTime)/6e4>=d[e.proficiency],b=e=>!m(e)&&e.proficiency<5,p=e=>5===e.proficiency,y=e=>Math.max(Math.ceil(e.length/5),1),v=e=>new Date(e.submissionTime+60*d[e.proficiency]*1e3),g=e=>{const t=v(e);return Math.round((Date.now()-t)/36e5)},f=(e,t)=>{const a=new Set([...Object.keys(e),...Object.keys(t)]),o={};return a.forEach((a=>{const n=(r=e[a],null==(s=t[a])?r:null==r?s:void 0===s.modificationTime||null===s.modificationTime?r:void 0===r.modificationTime||null===r.modificationTime?s:r.modificationTime>s.modificationTime?r:s);var r,s;void 0===n||n.isDeleted||(o[a]=n)})),o},h=e=>(t,a)=>-e(t,a),w=(e,t)=>v(e).valueOf()-v(t).valueOf(),P=(e,t)=>g(t).valueOf()-g(e).valueOf(),x={sortByReviewTimeDesc:h(w),sortByReviewTimeAsc:w,sortByDelayHoursDesc:P,sortByDelayHoursAsc:h(P)},E=[x.sortByReviewTimeAsc,x.sortByReviewTimeDesc,x.sortByDelayHoursAsc,x.sortByDelayHoursDesc],M={needReviewProblems:null,reviewScheduledProblems:null,completedProblems:null,toReviewPage:1,scheduledPage:1,completedPage:1,toReviewMaxPage:null,scheduledMaxPage:null,completedMaxPage:null,tooltipTriggerList:null,tooltipList:null,easyIntv:[1,3],mediumIntv:[1,3,4],hardIntv:[0,1,2,3,4],problemSortBy:x.sortByReviewTimeAsc,isCloudSyncEnabled:!1},k="cn_mode",T="cn_records",B="records",$="operation_history",I=async()=>{let e=await n(k);return console.log(`current cnMode is ${e}`),void 0===e&&(await r(k,!1),e=!1),e};class S{constructor(e,t,a,o){this.before=e,this.isInCnMode=t,this.type=a,this.time=o}}const A=Object.freeze({MASTER:"mark as mastered",RESET:"reset progress",DELETE:"delete record"}),L=async(e,t,a)=>{const o=new S(e,await I(),t,a);let s=await n($);void 0===s&&(s=[]),10===s.length&&s.shift(),s.push(o),await r($,s)},R=async()=>{const e=await I()?T:B;let t=await n(e);return void 0===t&&(t={}),t},D=async e=>{const t=e?T:B;let a=await n(t);return void 0===a&&(a={}),a},_=async e=>{const t=await I()?T:B;await r(t,e)},C=async(e,t)=>{const a=t?T:B;await r(a,e)},O=async()=>{if(!M.isCloudSyncEnabled)return;const e=await I()?T:B;await(async(e,t)=>{await(async(e,t,a,o)=>{if(!M.isCloudSyncEnabled)return;const n=o(await e.get(a)||{},await t.get(a)||{});await e.set(a,n),await t.set(a,n)})(s,c,e,t)})(e,f)},N=document.getElementById("pageInput0"),H=document.getElementById("pageInputLabel0"),j=document.getElementById("prevButton0"),q=document.getElementById("nextButton0"),z=document.getElementById("pageInput1"),Z=document.getElementById("pageInputLabel1"),J=document.getElementById("prevButton1"),F=document.getElementById("nextButton1"),U=document.getElementById("pageInput2"),G=document.getElementById("pageInputLabel2"),K=document.getElementById("prevButton2"),V=document.getElementById("nextButton2"),X=document.getElementById("need-review-table"),Q=document.getElementById("no-review-table"),W=document.getElementById("completed-table"),Y=document.getElementsByClassName("check-btn-mark"),ee=document.getElementsByClassName("delete-btn-mark"),te=document.getElementsByClassName("reset-btn-mark"),ae=document.getElementsByClassName("undo-ops-btn"),oe=document.getElementsByClassName("config-btn"),ne=document.getElementById("siteLabel"),re=document.getElementById("switchButton"),se=(document.getElementById("feedbackMessage"),document.defaultView),ie=async()=>{await(async()=>{const e=await I();console.log("got current cnMode before toggle}"),await r(k,!e),console.log("cnMode toggled")})(),await Ie()},le=()=>{M.tooltipList.forEach((e=>e._hideModalHandler()))},ce=()=>{M.tooltipTriggerList=document.querySelectorAll('[data-bs-toggle="tooltip"]'),M.tooltipList=[...M.tooltipTriggerList].map((e=>new bootstrap.Tooltip(e))),void 0!==Y&&Array.prototype.forEach.call(Y,(e=>e.onclick=async e=>{le(),await(async e=>{let t=await R(),a=t[e];await L(a,A.MASTER,Date.now()),a.proficiency=d.length,a.modificationTime=Date.now(),t[e]=a,await _(t)})(e.target.dataset.id),await Ie()})),void 0!==ee&&Array.prototype.forEach.call(ee,(e=>e.onclick=async e=>{le(),await(async e=>{let t=await R();const a=t[e];a&&(a.isDeleted=!0,a.modificationTime=Date.now(),await L(t[e],A.DELETE,Date.now()),t[e]=a,await _(t))})(e.target.dataset.id),await Ie()})),void 0!==te&&Array.prototype.forEach.call(te,(e=>e.onclick=async e=>{le(),await(async e=>{let t=await R(),a=t[e];a.proficiency=0,a.submissionTime=Date.now()-864e5,a.modificationTime=Date.now(),await L(a,A.RESET,Date.now()),t[e]=a,await _(t)})(e.target.dataset.id),await Ie()})),void 0!==ae&&Array.prototype.forEach.call(ae,(e=>e.onclick=async()=>{le(),await(async()=>{const e=await(async()=>{const e=await n($);if(void 0===e||0===e.length)return;const t=e.pop();return await r($,e),t})();if(void 0===e)return;const{before:t,isInCnMode:a}=e;t.modificationTime=Date.now();const o=await D(a);o[t.index]=t,await C(o,a)})(),await Ie()}))},de=()=>{Te(M.needReviewProblems,M.toReviewPage-1),ce()},ue=()=>{Te(M.needReviewProblems,M.toReviewPage+1),ce()},me=()=>{Be(M.reviewScheduledProblems,M.scheduledPage-1),ce()},be=()=>{Be(M.reviewScheduledProblems,M.scheduledPage+1),ce()},pe=()=>{$e(M.completedProblems,M.completedPage-1),ce()},ye=()=>{$e(M.completedProblems,M.completedPage+1),ce()},ve=e=>{if(13!==e.keyCode)return;let t=parseInt(e.target.value);!isNaN(t)&&Number.isInteger(t)?(N.classList.remove("is-invalid"),t!==M.toReviewPage&&(Te(M.needReviewProblems,t),ce())):N.classList.add("is-invalid")},ge=e=>{if(13!==e.keyCode)return;let t=parseInt(e.target.value);!isNaN(t)&&Number.isInteger(t)?(z.classList.remove("is-invalid"),t!==M.scheduledPage&&(update_schedule_table_content(M.reviewScheduledProblems,t),ce())):z.classList.add("is-invalid")},fe=e=>{if(13!==e.keyCode)return;let t=parseInt(e.target.value);!isNaN(t)&&Number.isInteger(t)?(U.classList.remove("is-invalid"),t!==M.completedPage&&($e(M.needReviewProblems,t),ce())):U.classList.add("is-invalid")},he=(e,t)=>`<td style="width: ${30|t}%;"><a target="_blank" href=${e.url}><small>${e.name}</small><a/></td>`,we=(e,t)=>`    <td style="width: ${10|t};">        <div class="progress" role="progressbar" aria-label="Success example" aria-valuenow="25" aria-valuemin="0" aria-valuemax="100">            <div class="progress-bar progress-bar-striped bg-success" style="width: ${Math.max(e.proficiency,0)/5*100}%; font-size: smaller; color: black"><small><small><small>${e.proficiency/5*100}%</small></small></small></div>        </div>    </td>    `,Pe=(e,t)=>`<td style="width: ${12|t}%;"><small>${(e=>{let t;return t="Easy"===e?"rgb(67, 160, 71)":"Medium"===e?"rgb(239, 108, 0)":"rgb(233, 30, 99)",`<small style="color: ${t}; vertical-align: middle">${e}</small>`})(e.level)}</small></td>`,xe=e=>`<small class="fa-regular fa-square-check fa-2xs mt-2 mb-0 check-btn-mark" \n                                            data-bs-toggle="tooltip" data-bs-title="✅ Mark as mastered" data-bs-placement="left"                                            style="color: #d2691e;" data-id=${e.index}> </small>`,Ee=e=>`<small class="fa-regular fa-square-minus fa-2xs mt-2 mb-0 delete-btn-mark" \n                                            data-bs-toggle="tooltip" data-bs-title="⛔ Delete this record" data-bs-placement="left"                                            style="color: red;" data-id=${e.index}> </small>`,Me=e=>`<small class="fa-solid fa-arrows-rotate fa-2xs mt-2 mb-0 reset-btn-mark"                                             data-bs-toggle="tooltip" data-bs-title="🔄 Reset progress" data-bs-placement="left"                                            style="color: #d2691e;" data-id=${e.index}> </small>`,ke=e=>{const t=v(e);return`    <tr style="vertical-align:middle">        ${he(e)}        ${we(e)}        ${Pe(e)}        <td><small>${u[t.getMonth()]} ${t.getDate()} ${t.getHours()}:${t.getMinutes()<10?`0${t.getMinutes()}`:t.getMinutes()}</small></td>        <td style="text-align: center; vertical-align:middle">            ${xe(e)}            ${Me(e)}            ${Ee(e)}        </td>    </tr>    `},Te=(e,t)=>{if(console.log(M.toReviewMaxPage),t>M.toReviewMaxPage||t<1)return void N.classList.add("is-invalid");N.classList.remove("is-invalid"),M.toReviewPage=t,N.value=t,H.innerText=`/${M.toReviewMaxPage}`,1===t&&j.setAttribute("disabled","disabled"),1!==t&&j.removeAttribute("disabled"),t===M.toReviewMaxPage&&q.setAttribute("disabled","disabled"),t!==M.toReviewMaxPage&&q.removeAttribute("disabled");let a='    <thead>        <tr style="font-size: smaller">            <th>Problem</th>            <th>Progress</th>            <th>Level</th>            <th>Delay</th>            <th>Operation</th>        </tr>    </thead>    <tbody>    ';e=e.slice(5*(t-1),5*t);let o=Object.keys(e);for(const t of o)a+=(n=e[t],`    <tr>        ${he(n)}        ${we(n)}        ${Pe(n)}        <td><small>${g(n)} hour(s)</small></td>        <td style="text-align: center; vertical-align:middle">            ${xe(n)}            ${Me(n)}            ${Ee(n)}        </td>    </tr>    \n`);var n;a+="</tbody>",X.innerHTML=a},Be=(e,t)=>{if(t>M.scheduledMaxPage||t<1)return void z.classList.add("is-invalid");z.classList.remove("is-invalid"),M.scheduledPage=t,z.value=t,Z.innerText=`/${M.scheduledMaxPage}`,1===t&&J.setAttribute("disabled","disabled"),1!==t&&J.removeAttribute("disabled"),t===M.scheduledMaxPage&&F.setAttribute("disabled","disabled"),t!==M.scheduledMaxPage&&F.removeAttribute("disabled");let a='    <thead>        <tr style="font-size: smaller">            <th>Problem</th>            <th>Progress</th>            <th>Level</th>            <th>Review Time</th>            <th>Operation</th>        </tr>    </thead>    <tbody>    ';e=e.slice(5*(t-1),5*t);let o=Object.keys(e);for(const t of o)a+=ke(e[t])+"\n";a+="</tbody>",Q.innerHTML=a},$e=(e,t)=>{if(t>M.completedMaxPage||t<1)return void U.classList.add("is-invalid");U.classList.remove("is-invalid"),M.completedPage=t,U.value=t,G.innerText=`/${M.completedMaxPage}`,1===t&&K.setAttribute("disabled","disabled"),1!==t&&K.removeAttribute("disabled"),t===M.completedMaxPage&&V.setAttribute("disabled","disabled"),t!==M.completedMaxPage&&V.removeAttribute("disabled");let a='    <thead>        <tr style="font-size: smaller">            <th>Problem</th>            <th>Progress</th>            <th>Level</th>            <th>Operation</th>        </tr>    </thead>    <tbody>    ';e=e.slice(5*(t-1),5*t);let o=Object.keys(e);for(const t of o)a+=(n=e[t],`    <tr>        ${he(n,35)}        ${we(n,20)}        ${Pe(n)}        <td style="text-align: center; vertical-align:middle">            ${Me(n)}            ${Ee(n)}        </td>    </tr>    \n`);var n;a+="</tbody>",W.innerHTML=a},Ie=async()=>{await(async()=>{await(async()=>{const e=await(async()=>await n("review_intervals"))();void 0!==e&&Object.assign(M,e)})(),await(async()=>{const e=await(async()=>await n("problem_sort_by"))()|(t=x.sortByReviewTimeAsc,E.indexOf(t));var t;M.problemSortBy=E[e]})(),await(async()=>{M.isCloudSyncEnabled=await(async()=>{const e=await n("configs"),t=void 0!==e&&e.enable_cloud;return void 0===t&&(t=!1),t})()})()})(),await(async()=>{await I()?(re.setAttribute("checked","checked"),ne.innerHTML="LeetCode - China "):(re.removeAttribute("checked"),ne.innerHTML="LeetCode - Global")})(),await O();const e=Object.values(await R()).filter((e=>!0!==e.isDeleted));M.needReviewProblems=e.filter(m),M.reviewScheduledProblems=e.filter(b),M.completedProblems=e.filter(p),M.toReviewMaxPage=y(M.needReviewProblems),M.scheduledMaxPage=y(M.reviewScheduledProblems),M.completedMaxPage=y(M.completedProblems),M.needReviewProblems.sort(M.problemSortBy),M.reviewScheduledProblems.sort(M.problemSortBy),M.completedProblems.sort(M.problemSortBy),Te(M.needReviewProblems,1),Be(M.reviewScheduledProblems,1),$e(M.completedProblems,1),await(async()=>{await(async()=>{const e=await n($);return void 0!==e&&e.length>0})()?Array.prototype.forEach.call(ae,(e=>e.removeAttribute("disabled"))):Array.prototype.forEach.call(ae,(e=>e.setAttribute("disabled","disabled")))})(),j.onclick=de,q.onclick=ue,J.onclick=me,F.onclick=be,K.onclick=pe,V.onclick=ye,N.onkeydown=ve,z.onkeydown=ge,U.onkeydown=fe,re.onclick=ie,ce(),void 0!==oe&&Array.prototype.forEach.call(oe,(e=>e.onclick=async e=>{chrome.runtime.openOptionsPage()})),void 0!==se&&se.addEventListener("unload",(async()=>{await O()}))}}},r={};function s(e){var t=r[e];if(void 0!==t)return t.exports;var a=r[e]={id:e,exports:{}};return n[e](a,a.exports,s),a.exports}e="function"==typeof Symbol?Symbol("webpack queues"):"__webpack_queues__",t="function"==typeof Symbol?Symbol("webpack exports"):"__webpack_exports__",a="function"==typeof Symbol?Symbol("webpack error"):"__webpack_error__",o=e=>{e&&e.d<1&&(e.d=1,e.forEach((e=>e.r--)),e.forEach((e=>e.r--?e.r++:e())))},s.a=(n,r,s)=>{var i;s&&((i=[]).d=-1);var l,c,d,u=new Set,m=n.exports,b=new Promise(((e,t)=>{d=t,c=e}));b[t]=m,b[e]=e=>(i&&e(i),u.forEach(e),b.catch((e=>{}))),n.exports=b,r((n=>{var r;l=(n=>n.map((n=>{if(null!==n&&"object"==typeof n){if(n[e])return n;if(n.then){var r=[];r.d=0,n.then((e=>{s[t]=e,o(r)}),(e=>{s[a]=e,o(r)}));var s={};return s[e]=e=>e(r),s}}var i={};return i[e]=e=>{},i[t]=n,i})))(n);var s=()=>l.map((e=>{if(e[a])throw e[a];return e[t]})),c=new Promise((t=>{(r=()=>t(s)).r=0;var a=e=>e!==i&&!u.has(e)&&(u.add(e),e&&!e.d&&(r.r++,e.push(r)));l.map((t=>t[e](a)))}));return r.r?c:s()}),(e=>(e?d(b[a]=e):c(m),o(i)))),i&&i.d<0&&(i.d=0)},s.n=e=>{var t=e&&e.__esModule?()=>e.default:()=>e;return s.d(t,{a:t}),t},s.d=(e,t)=>{for(var a in t)s.o(t,a)&&!s.o(e,a)&&Object.defineProperty(e,a,{enumerable:!0,get:t[a]})},s.o=(e,t)=>Object.prototype.hasOwnProperty.call(e,t),s.nc=void 0,s(14)})();