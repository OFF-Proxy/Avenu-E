import{b as s,u as N,e as c,V as g,a as n,j as e,L as o}from"./index.61613632.js";/* empty css                */import{u as F}from"./useDispatch.0b74632c.js";const E=t=>{const[m,d]=s.exports.useState(Boolean(!0)),f=async()=>{await MySwal.fire({title:"\u30A8\u30E9\u30FC aE-0307",html:"\u8A8D\u8A3C\u3057\u3066\u3044\u306A\u3044\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u3053\u306E\u6A5F\u80FD\u3092\u3054\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002",icon:"error",allowOutsideClick:!1,allowEscapeKey:!1}).then(()=>{window.location="/"})};s.exports.useEffect(()=>{t.user?t.user.emailVerified?(r(h),d(!1)):f():window.location="/login"},[t]);const{state:h}=N(),[u,r]=s.exports.useState({date:String(),name:String(),furigana:String(),email:String(),tel:String(),sex:String(),item:String(),content:String(),id:String()}),l=c.exports.useFirestore();c.exports.useFirestoreConnect("inquiries");const p=F(),B=s.exports.useCallback(a=>p(g({firestore:l},a)),[l]),i=a=>{r({...u,[a.target.id]:a.target.value})},C=()=>{u.date.trim()===""||u.name.trim()===""||u.furigana.trim()===""||u.email.trim()===""||u.tel.trim()===""||u.sex.trim()===""||u.item.trim()===""||u.content.trim()===""||B(u)};switch(m){case!1:return n("div",{className:"inquiryConfirm-wrapper",children:[e("div",{className:"bl-sect05",children:e("div",{className:"ly-cont",children:n("ul",{className:"un-step",children:[n("li",{className:"un-step-item",children:[e("span",{className:"step",children:"STEP1"}),e("span",{className:"txt",children:"\u60C5\u5831\u306E\u5165\u529B"})]}),n("li",{className:"un-step-item is-current",children:[e("span",{className:"step",children:"STEP2"}),e("span",{className:"txt",children:"\u5165\u529B\u5185\u5BB9\u306E\u78BA\u8A8D"})]}),n("li",{className:"un-step-item",children:[e("span",{className:"step",children:"STEP3"}),e("span",{className:"txt",children:"\u9001\u4FE1\u5B8C\u4E86"})]})]})})}),n("div",{className:"inquiryConfirm-form",children:[e("h2",{className:"inquiry-contentTitle",children:"\u304A\u554F\u3044\u5408\u308F\u305B \u5185\u5BB9\u78BA\u8A8D"}),e("p",{className:"inquiryConfirm-subtitle-first",children:"\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\u306F\u3053\u3061\u3089\u3067\u5B9C\u3057\u3044\u3067\u3057\u3087\u3046\u304B\uFF1F"}),e("p",{className:"inquiryConfirm-subtitle-second",children:"\u3088\u308D\u3057\u3051\u308C\u3070\u300C\u9001\u4FE1\u3059\u308B\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u4E0B\u3055\u3044\u3002"}),e("div",{className:"inquiry-formInputs row",children:n("div",{className:"mb-3",children:[n("p",{children:["\u304A\u554F\u3044\u5408\u308F\u305B\u65E5: ",e("span",{className:"inquiryConfirm-fontBold",onChange:i,children:u.date})]}),n("p",{children:[e("i",{className:"fas fa-signature me-2"}),"\u304A\u540D\u524D: ",e("span",{className:"inquiryConfirm-fontBold",onChange:i,children:u.name})]}),n("p",{children:[e("i",{className:"fas fa-signature me-2"}),"\u3075\u308A\u304C\u306A: ",e("span",{className:"inquiryConfirm-fontBold",onChange:i,children:u.furigana})]}),n("p",{children:[e("i",{className:"fas fa-envelope me-2"}),"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9: ",e("span",{className:"inquiryConfirm-fontBold",onChange:i,children:u.email})]}),n("p",{children:[e("i",{className:"fas fa-phone me-2"}),"\u96FB\u8A71\u756A\u53F7: ",e("span",{className:"inquiryConfirm-fontBold",onChange:i,children:u.tel})]}),n("p",{children:[e("i",{className:"fas fa-children me-2"}),"\u6027\u5225: ",e("span",{className:"inquiryConfirm-fontBold",onChange:i,children:u.sex})]}),n("p",{children:[e("i",{className:"fas fa-file-circle-question me-2"}),"\u304A\u554F\u3044\u5408\u308F\u305B\u9805\u76EE: ",e("span",{className:"inquiryConfirm-fontBold",onChange:i,children:u.item})]}),n("p",{children:[e("i",{className:"fas fa-pencil me-2"}),"\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9"]}),e("textarea",{className:"form-control",name:"content",maxLength:"1000",rows:"15",value:u.content,onChange:i,disabled:!0})]})}),n("div",{className:"inquiry-btnDiv",children:[e(o,{to:"/inquiry",state:{date:u.date,name:u.name,furigana:u.furigana,email:u.email,tel:u.tel==="\u672A\u767B\u9332"?"":u.tel,sex:u.sex,hope:u.hope,item:u.item,content:u.content},children:e("button",{className:"btn inquiryConfirm-fix",children:"\u5185\u5BB9\u3092\u4FEE\u6B63\u3059\u308B"})}),e(o,{to:"/inquiry/thanks",children:e("button",{className:"btn",onClick:C,children:"\u9001\u4FE1\u3059\u308B"})})]})]})]});default:return null}};export{E as default};