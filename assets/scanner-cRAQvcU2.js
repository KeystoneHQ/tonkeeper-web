import{u as o,r as n}from"./index-z3CvngUh.js";const f=(u,t)=>{const s=o(),[e,a]=n.useState(u);return n.useEffect(()=>{e&&s.uiEvents.emit("scan",{method:"scan",id:e,params:void 0})},[e]),n.useEffect(()=>{const r=c=>{c.id===e&&t(c.params)};return s.uiEvents.on("response",r),()=>{s.uiEvents.off("response",r)}},[s,e,t]),n.useCallback(()=>{a(Date.now())},[a])};export{f as u};
