(()=>{console.log("Hello PMCA!");const e="text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6";class t{constructor(e,t,n,o,s,i){this.index=e,this.name=t,this.level=n,this.url=o,this.submissionTime=s,this.proficiency=i}}const n=[1440,2880,5760,10080,21600];let o=[1,3],s=[1,3,4],i=[0,1,2,3,4];const r={operationName:"getQuestionDetail",variables:{titleSlug:""},query:"query getQuestionDetail($titleSlug: String!) {\n      question(titleSlug: $titleSlug) {\n        questionFrontendId\n        translatedTitle\n        difficulty\n      }\n    }"},l={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36",Connection:"keep-alive","Content-Type":"application/json",Referer:""},a=()=>{let a,c=10;const d=setInterval((async()=>{if(c<=0)return void clearInterval(d);if(a=document.getElementsByClassName(e)[0]||document.getElementsByClassName("whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s")[0]||document.getElementsByClassName("mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s")[0],void 0===a||0===a.length)return void c--;clearInterval(d);let m=a.className.includes(e);const u=Date.now(),{problemIndex:p,problemName:f,problemLevel:g,problemUrl:b}=await(async()=>{let e=window.location.href;const t=["/submissions/","/description/","/discussion/","/solutions/"];for(const n of t)if(e.includes(n)){e=e.substring(0,e.lastIndexOf(n)+1);break}const n=e.split("/").splice(-2)[0],o=await(async e=>{r.variables.titleSlug=e,l.Referer=`https://leetcode.cn/problems/${e}`;const t={method:"POST",headers:l,body:JSON.stringify(r),timeout:1e4},n=await fetch("https://leetcode.cn/graphql",t);return(await n.json()).data.question})(n);return{problemIndex:o.questionFrontendId,problemName:`${o.questionFrontendId}. ${o.translatedTitle}`,problemLevel:o.difficulty,problemUrl:e}})(),h="Easy"===(y=g)?o:"Medium"===y?s:i;var y;new Promise(((e,t)=>{chrome.storage.local.get("cn_records",(n=>{const o=n.cn_records;void 0===o||void 0===o[p]?t(o):e(o)}))})).then((e=>{const t=e[p],o=(e=>!(e.proficiency>=n.length)&&(Date.now()-e.submissionTime)/6e4>=n[e.proficiency])(t);if(o&&m){let o;for(const e of h)if(e>t.proficiency){o=e;break}t.proficiency=void 0!==o?o:n.length,t.submissionTime=u,e[p]=t,chrome.storage.local.set({cn_records:e})}chrome.storage.local.set({cn_records:e})}),(e=>{if(m){void 0===e&&(e={});const n=new t(p,f,g,b,u,h[0]);e[p]=n,chrome.storage.local.set({cn_records:e})}})).finally((()=>console.log("Submission successfully tracked!")))}),1e3)},c=e=>"console-submit-button"===e.getAttribute("data-e2e-locator");document.addEventListener("click",(e=>{const t=e.target;[c(t),t.parentElement&&c(t.parentElement),t.parentElement&&t.parentElement.parentElement&&c(t.parentElement.parentElement)].reduce(((e,t)=>e||t))&&a()}))})();