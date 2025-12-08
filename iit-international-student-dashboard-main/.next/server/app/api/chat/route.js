"use strict";(()=>{var e={};e.id=744,e.ids=[744],e.modules={20399:e=>{e.exports=require("next/dist/compiled/next-server/app-page.runtime.prod.js")},30517:e=>{e.exports=require("next/dist/compiled/next-server/app-route.runtime.prod.js")},15216:(e,t,n)=>{n.r(t),n.d(t,{originalPathname:()=>g,patchFetch:()=>h,requestAsyncStorage:()=>d,routeModule:()=>l,serverHooks:()=>m,staticGenerationAsyncStorage:()=>p});var r={};n.r(r),n.d(r,{POST:()=>u});var s=n(49303),a=n(88716),o=n(60670),i=n(87070);let c=`
You are "iStudents Assistant", a friendly and concise onboarding assistant
for international students at Illinois Institute of Technology (IIT) in Chicago.

Your primary job is to help students with:
- Pre-arrival preparation: visas, I-20/DS-2019 basics, housing options, essential documents to bring, airport arrival tips.
- Campus navigation: Mies Campus landmarks (MTCC, Hermann Hall, Galvin Library, Keating), CTA & Metra basics, safe travel tips.
- Academic integration: course registration flow, meeting advisors, using the student portal, understanding add/drop, midterms, finals.
- Social & community life: student organizations, cultural clubs, events, and where to find them (e.g., 312.iit.edu, campus announcements).
- City & life basics: Chicago weather expectations, winter clothing, cost-of-living realities, basic safety and emergency numbers.

Guidelines:
- Be practical, kind, and realistic — never give immigration or legal advice.
- When talking about official info (e.g., immigration, tuition, policies), clearly suggest that students confirm details on official IIT or government websites.
- Prefer short paragraphs and bullet points for clarity.
- Do not invent specific IIT policies; if you’re unsure, say so and recommend checking official sources.
- Use neutral, supportive tone. Students may be anxious or overwhelmed.

Respond to the student based on the conversation below.
`;async function u(e){try{let t=(await e.json()).messages||[],n=process.env.HF_API_KEY,r=process.env.HF_MODEL_ID;if(!n||!r)return console.error("HF_API_KEY or HF_MODEL_ID missing in env"),i.NextResponse.json({error:"Chat backend is not configured."},{status:500});let s=[{role:"system",content:c},...t.map(e=>({role:e.role,content:e.content}))],a=`https://router.huggingface.co/hf-inference/models/${r}/v1/chat/completions`,o=await fetch(a,{method:"POST",headers:{Authorization:`Bearer ${n}`,"Content-Type":"application/json"},body:JSON.stringify({model:r,messages:s,max_tokens:512,stream:!1})});if(!o.ok){let e=await o.text();return console.error("HF error:",o.status,e),i.NextResponse.json({error:`Hugging Face error ${o.status}: ${e}`},{status:500})}let u=await o.json(),l=u?.choices?.[0]?.message?.content??"Sorry, I couldn't generate a response.";return i.NextResponse.json({reply:l})}catch(e){return console.error("Chat API error:",e),i.NextResponse.json({error:"Unexpected error in chat API."},{status:500})}}let l=new s.AppRouteRouteModule({definition:{kind:a.x.APP_ROUTE,page:"/api/chat/route",pathname:"/api/chat",filename:"route",bundlePath:"app/api/chat/route"},resolvedPagePath:"C:\\Users\\vyoml\\iit-international-student-dashboard-main\\app\\api\\chat\\route.ts",nextConfigOutput:"",userland:r}),{requestAsyncStorage:d,staticGenerationAsyncStorage:p,serverHooks:m}=l,g="/api/chat/route";function h(){return(0,o.patchFetch)({serverHooks:m,staticGenerationAsyncStorage:p})}}};var t=require("../../../webpack-runtime.js");t.C(e);var n=e=>t(t.s=e),r=t.X(0,[9276,5972],()=>n(15216));module.exports=r})();