import{b as o,D as N,R as g,K as F,W as B,H as L,j as a,a as s,v as S,x as p,d as c,M as w,E as z}from"./index.61613632.js";import{a as K,A as U}from"./index.esm.e6574437.js";import{T as C,a as E,I as v,c as G,b as M}from"./index.esm.5f8e3b5d.js";/* empty css               */const P=m=>{const[d,y]=o.exports.useState(Object()),[x,I]=o.exports.useState(Array()),[A,D]=o.exports.useState(Array()),[j,H]=o.exports.useState(Boolean(!0)),[k,h]=o.exports.useState(Object()),[b,f]=o.exports.useState(Object()),R=(e,l)=>{const t=S(c),u=p(c,"scraps",e),r=p(c,"users",d.id);k[e]?(t.update(u,{likes:l-1}),t.update(r,{likeScraps:d.likeScraps.filter(i=>i.match(e)==null)})):(t.update(u,{likes:l+1}),t.update(r,{likeScraps:[...d.likeScraps,e]})),t.commit(),h(i=>({...i,[e]:![e]}))},T=async(e,l)=>{const t=S(c),u=p(c,"scraps",e),r=p(c,"users",d.id);b[e]?(t.update(u,{goods:l-1}),t.update(r,{goodScraps:d.goodScraps.filter(i=>i.match(e)==null)})):(t.update(u,{goods:l+1}),t.update(r,{goodScraps:[...d.goodScraps,e]})),t.commit(),f(i=>({...i,[e]:![e]}))};o.exports.useEffect(()=>{if(!m.user)window.location="/login";else{const e=N(c,"scraps"),l=N(c,"users");g(F(e,B("createAt","desc")),t=>{I(t.docs.map(u=>({...u.data()})))}),g(F(l,B("pt","desc"),L(10)),t=>{D(t.docs.map(u=>({...u.data()})))}),g(N(c,"users"),t=>{t.docs.map(u=>{u.data().email===m.user.email&&(y(u.data()),g(N(c,"scraps"),r=>{r.docs.map(i=>{u.data().likeScraps.length>0?u.data().likeScraps.includes(i.id)?h(n=>({...n,[i.id]:!0})):h(n=>({...n,[i.id]:!1})):h(n=>({...n,[i.id]:!1})),u.data().goodScraps?u.data().goodScraps.includes(i.id)?f(n=>({...n,[i.id]:!0})):f(n=>({...n,[i.id]:!1})):f(n=>({...n,[i.id]:!1}))})}))})}),H(!1)}},[m]);const O=async e=>{w.fire({title:"\u30B9\u30AF\u30E9\u30C3\u30D7\u306E\u524A\u9664",html:"<strong>\u672C\u5F53\u306B\u5B9F\u884C\u3057\u3066\u3082\u3088\u308D\u3057\u3044\u3067\u3059\u304B\uFF1F</strong>",icon:"warning",showCancelButton:!0,allowOutsideClick:!1,allowEscapeKey:!1,confirmButtonText:"\u7D9A\u3051\u308B",cancelButtonText:"\u3084\u3081\u308B",confirmButtonColor:"#d33",reverseButtons:!0}).then(async l=>{!l.value||(await z(p(c,"scraps",e)),w.fire({title:"\u51E6\u7406\u7D42\u4E86",html:"\u9078\u629E\u3057\u305F\u30B9\u30AF\u30E9\u30C3\u30D7\u304C\u524A\u9664\u3055\u308C\u307E\u3057\u305F\u3002",icon:"success",allowOutsideClick:!1,allowEscapeKey:!1}))})};switch(j){case!1:return a("div",{className:"scraps-wrapper",children:a("div",{className:"displayQuestions",children:s("div",{className:"flexbox",children:[s("div",{className:"Ranking",children:[a("h3",{children:"\u30E6\u30FC\u30B6\u30FC\u30E9\u30F3\u30AD\u30F3\u30B0"}),A&&A.map((e,l)=>a("div",{className:"user ranking-wrapper",children:s("a",{href:"/profile?user="+e.displayName,children:[l+1===1?s("div",{className:"fs-4 fw-bold",children:[a("i",{className:"fa-sharp fa-solid fa-crown me-2 ranking-first d-inline"}),s("p",{className:"d-inline text-dark",children:[l+1," \u4F4D\u3000",a("img",{className:"ranking-userIcon",src:e.icon,alt:"userIcon"}),e.displayName,a("span",{className:"mx-2",children:e.pt}),"points"]})]}):l+1===2?s("div",{className:"fs-5 fw-bold",children:[a("i",{className:"fa-sharp fa-solid fa-crown me-2 ranking-second d-inline"}),s("p",{className:"d-inline text-dark",children:[l+1," \u4F4D\u3000",a("img",{className:"ranking-userIcon",src:e.icon,alt:"userIcon"}),e.displayName,a("span",{className:"mx-2",children:e.pt}),"points"]})]}):l+1===3?s("div",{className:"fs-6 fw-bold",children:[a("i",{className:"fa-sharp fa-solid fa-crown me-2 ranking-third d-inline"}),s("p",{className:"d-inline text-dark",children:[l+1," \u4F4D\u3000",a("img",{className:"ranking-userIcon",src:e.icon,alt:"userIcon"}),e.displayName,a("span",{className:"mx-2",children:e.pt}),"points"]})]}):a("div",{children:s("p",{className:"d-inline text-dark",children:[l+1," \u4F4D\u3000",a("img",{className:"ranking-userIcon",src:e.icon,alt:"userIcon"}),e.displayName,a("span",{className:"mx-2",children:e.pt}),"points"]})}),a("hr",{className:"ranking-bottomHr"})]})},e.displayName))]}),s("div",{className:"Scraps",children:[a("h2",{className:"scraps-title",children:"Scraps Board"}),a("p",{className:"text-center",children:"\u7591\u554F\u3092\u30A8\u30F3\u30B8\u30CB\u30A2\u306B\u76F8\u8AC7\u3067\u304D\u307E\u3059\u3002"}),x&&x.map(e=>s("div",{className:"scrap",children:[a("a",{href:"/profile?user="+e.userName,children:a("img",{className:"scrap-userIcon",src:e.userIcon,alt:"userIcon"})}),s("p",{className:"scrap-userName",children:[a("i",{className:"fas fa-circle-question"}),"\u30B9\u30AF\u30E9\u30C3\u30D7\u6295\u7A3F\u8005 \u21E2 ",a("a",{href:"/profile?user="+e.userName,children:e.userName})]}),a("p",{className:"scrap-createAt",children:e.createAt}),a("div",{className:"scrap-good ps-1",children:a(C,{label:"\u3044\u3044\u306D\uFF01",bg:"gray",p:"0px 10px",fontSize:"11px",color:"white",children:s(E,{cursor:"pointer",onClick:()=>T(e.id,e.goods),children:[a(v,{as:b[e.id]?G:M,mr:"2.5",fontSize:"22px",color:b[e.id]?"#80CBC4":""}),e.goods]})})}),a("div",{className:"scrap-like ps-2",children:a(C,{label:"\u304A\u6C17\u306B\u5165\u308A\u306B\u8FFD\u52A0",bg:"gray",p:"0px 10px",fontSize:"11px",color:"white",children:s(E,{cursor:"pointer",onClick:()=>R(e.id,e.likes),children:[a(v,{as:k[e.id]?K:U,mr:"2.5",fontSize:"22px",color:k[e.id]?"red":""}),e.likes]})})}),a("h1",{className:"scrap-title",children:e.title}),a("p",{className:"scrap-content",id:"scrap-content",children:e.subtitle&&e.subtitle.length>20?e.subtitle.slice(0,80)+"\u2026":e.subtitle}),s("p",{children:["\u8A00\u8A9E: ",e.languages&&e.languages.join(", ")]}),s("p",{children:["\u305D\u306E\u4ED6: ",e.others&&e.others.join(", ")]}),s("div",{className:e.uid===m.user.uid?"scraps-btn-wrapper":"",children:[a("a",{href:"/scraps/detail?user="+e.userName+"&id="+e.id,children:a("button",{className:"btn",children:"\u8A73\u7D30\u3092\u78BA\u8A8D"})}),e.uid===m.user.uid&&s("button",{className:"btn btn-danger",onClick:()=>O(e.id),children:[a("i",{className:"fas fa-xmark me-2"}),"\u3053\u306E\u30B9\u30AF\u30E9\u30C3\u30D7\u3092\u524A\u9664\u3059\u308B"]})]})]},e.title))]})]})})});default:return null}};export{P as default};