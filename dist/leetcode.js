(()=>{console.log("Hello PMCA!");const e="success__3Ai7",t="text-green-s dark:text-dark-green-s flex flex-1 items-center gap-2 text-[16px] font-medium leading-6";class n{constructor(e,t,n,s,o,i){this.index=e,this.name=t,this.level=n,this.url=s,this.submissionTime=o,this.proficiency=i}}const s=[1440,2880,5760,10080,21600];let o=[1,3],i=[1,3,4],l=[0,1,2,3,4];const r={operationName:"questionTitle",variables:{titleSlug:""},query:"query questionTitle($titleSlug: String!) {\n      question(titleSlug: $titleSlug) {\n        questionFrontendId\n        title\n        difficulty\n      }\n    }"},a={"User-Agent":"Mozilla/5.0 (Windows NT 10.0; Win64; x64) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/81.0.4044.122 Safari/537.36",Connection:"keep-alive","Content-Type":"application/json",Referer:""},c=()=>{let c,m=10;const d=setInterval((async()=>{if(m<=0)return void clearInterval(d);if(c=document.getElementsByClassName(e)[0]||document.getElementsByClassName("error__2Ft1")[0]||document.getElementsByClassName("error__10k9")[0]||document.getElementsByClassName(t)[0]||document.getElementsByClassName("whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s")[0]||document.getElementsByClassName("mr-1 flex-1 whitespace-nowrap text-xl font-medium text-red-s dark:text-dark-red-s")[0],void 0===c||0===c.length)return void m--;clearInterval(d);let u=c.className.includes(e)||c.className.includes(t);const p=Date.now(),{problemIndex:f,problemName:g,problemLevel:b,problemUrl:y}=await(async()=>{let e=window.location.href;const t=["/submissions/","/description/","/discussion/","/solutions/"];for(const n of t)if(e.includes(n)){e=e.substring(0,e.lastIndexOf(n)+1);break}const n=e.split("/").splice(-2)[0],s=await(async e=>{r.variables.titleSlug=e,a.Referer=`https://leetcode.com/problems/${e}`;const t={method:"POST",headers:a,body:JSON.stringify(r),timeout:1e4},n=await fetch("https://leetcode.com/graphql",t);return(await n.json()).data.question})(n);return{problemIndex:s.questionFrontendId,problemName:`${s.questionFrontendId}. ${s.title}`,problemLevel:s.difficulty,problemUrl:e}})(),h="Easy"===(x=b)?o:"Medium"===x?i:l;var x;new Promise(((e,t)=>{chrome.storage.local.get("records",(n=>{const s=n.records;void 0===s||void 0===s[f]?t(s):e(s)}))})).then((e=>{const t=e[f],n=(e=>!(e.proficiency>=s.length)&&(Date.now()-e.submissionTime)/6e4>=s[e.proficiency])(t);if(n&&u){let n;for(const e of h)if(e>t.proficiency){n=e;break}t.proficiency=void 0!==n?n:s.length,t.submissionTime=p,e[f]=t,chrome.storage.local.set({records:e})}}),(e=>{if(u){void 0===e&&(e={});const t=new n(f,g,b,y,p,h[0]);e[f]=t,chrome.storage.local.set({records:e})}})).finally((()=>console.log("Submission successfully tracked!")))}),1e3)},m=e=>"console-submit-button"===e.getAttribute("data-e2e-locator");document.addEventListener("click",(e=>{const t=e.target;[m(t),t.parentElement&&m(t.parentElement),t.parentElement&&t.parentElement.parentElement&&m(t.parentElement.parentElement)].reduce(((e,t)=>e||t))&&c()}))})();