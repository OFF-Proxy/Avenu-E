import{b as s,D as E,R as C,a as r,j as e,d as B,G as N,M as w}from"./index.61613632.js";/* empty css                */const g=u=>{const[o,m]=s.exports.useState(Object()),[d,p]=s.exports.useState(Boolean(!0)),[n,f]=s.exports.useState(Boolean(!1)),h=()=>{f(a=>!a)},i=s.exports.useRef(String()),t=s.exports.useRef(String());s.exports.useEffect(()=>{if(!u.user)window.location="/login";else{const a=E(B,"users");C(a,l=>{l.docs.map(c=>{c.data().email===u.user.email&&m(c.data())})}),p(!1)}},[u]);const b=async(a,l)=>{u.user&&(o.password===t.current.value?await N(a,l,o.id):await w.fire({title:"\u30A8\u30E9\u30FC aE-0402",html:"\u30D1\u30B9\u30EF\u30FC\u30C9\u304C\u9593\u9055\u3063\u3066\u3044\u307E\u3059\u3002",icon:"error",allowOutsideClick:!1,allowEscapeKey:!1}))},x=async a=>{a.preventDefault()};switch(d){case!1:return r("div",{className:"container my-5",children:[e("div",{className:"pt-5"}),e("h1",{className:"pt-5 pb-4 text-center",children:"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306E\u518D\u8A2D\u5B9A"}),e("form",{onSubmit:x,children:r("div",{className:"bg-light d-flex p-5 col-6 mx-auto reset-wrapper",children:[e("h6",{className:"mt-1 pb-2",children:"\u65B0\u3057\u3044\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u3092\u5165\u529B\u3057\u3066\u304F\u3060\u3055\u3044\u3002"}),e("div",{className:"input-group mb-3",children:e("input",{type:"email",className:"form-control",placeholder:"taro1234@xxxx.com",ref:i})}),e("h6",{className:"mt-1 pb-2",children:"\u30D1\u30B9\u30EF\u30FC\u30C9"}),r("div",{className:"position-relative",children:[e("input",{type:n?"text":"password",className:"form-control mb-3",placeholder:"\u30D1\u30B9\u30EF\u30FC\u30C9",ref:t}),e("span",{className:"position-absolute bottom-50 end-0 pe-3",role:"presentation",onClick:()=>h(),children:n?e("i",{className:"fas fa-eye-slash pointer"}):e("i",{className:"fas fa-eye pointer"})})]}),e("button",{className:"btn btn-success py-3 my-1 mx-5 mb-3",onClick:()=>b(i.current.value,t.current.value),children:"\u5909\u66F4\u3059\u308B"}),e("a",{className:"btn btn-secondary py-3 my-1 mx-5 mb-3",href:"/profile?user="+u.user.displayName,children:"\u30DE\u30A4\u30DA\u30FC\u30B8\u3078\u623B\u308B"})]})})]});default:return null}};export{g as default};