import{b as i,u as b,a,j as u,L as E,M as n}from"./index.61613632.js";/* empty css                */const x=c=>{const[p,f]=i.exports.useState(Boolean(!0)),C=async()=>{await n.fire({title:"\u30A8\u30E9\u30FC aE-0307",html:"\u8A8D\u8A3C\u3057\u3066\u3044\u306A\u3044\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u3053\u306E\u6A5F\u80FD\u3092\u3054\u5229\u7528\u3067\u304D\u307E\u305B\u3093\u3002",icon:"error",allowOutsideClick:!1,allowEscapeKey:!1}).then(()=>{window.location="/"})};i.exports.useEffect(()=>{c.user?c.user.emailVerified?f(!1):C():window.location="/login"},[c]);const t=new Date,m=t.getFullYear(),o=t.getMonth()+1,d=t.getDate(),{state:h}=b(),[e,F]=i.exports.useState({date:m+"\u5E74"+o+"\u6708"+d+"\u65E5",name:String(),furigana:String(),email:String(),tel:String(),sex:String(),hope:String(),item:String(),content:String()});h&&i.exports.useEffect(()=>{F(h)},[]);const l=r=>{const B=r.target,A=B.value,N=B.name;F({...e,[N]:A})},s=r=>{switch(r){case"0201":n.fire({title:"\u30A8\u30E9\u30FC aE-0201",html:"\u5165\u529B\u4E0D\u5099\u304C\u3042\u308A\u307E\u3059\u3002",icon:"error",allowOutsideClick:!1,allowEscapeKey:!1});break;case"0202":n.fire({title:"\u30A8\u30E9\u30FC aE-0202",html:"\u5165\u529B\u3057\u305F\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306E\u5F62\u5F0F\u304C\u9055\u3044\u307E\u3059\u3002",icon:"error",allowOutsideClick:!1,allowEscapeKey:!1});break;case"0203":n.fire({title:"\u30A8\u30E9\u30FC aE-0203",html:"\u5165\u529B\u3057\u305F\u96FB\u8A71\u756A\u53F7\u306E\u5F62\u5F0F\u304C\u9055\u3044\u307E\u3059\u3002",icon:"error",allowOutsideClick:!1,allowEscapeKey:!1});break;case"0204":n.fire({title:"\u30A8\u30E9\u30FC aE-0204",html:"\u8CEA\u554F\u5185\u5BB9\u306F1000\u6587\u5B57\u4EE5\u5185\u3067\u3054\u8A18\u5165\u4E0B\u3055\u3044\u3002",icon:"error",allowOutsideClick:!1,allowEscapeKey:!1});break}};switch(p){case!1:return a("div",{className:"inquiry-wrapper",children:[u("div",{className:"bl-sect05",children:u("div",{className:"ly-cont",children:a("ul",{className:"un-step",children:[a("li",{className:"un-step-item is-current",children:[u("span",{className:"step",children:"STEP1"}),u("span",{className:"txt",children:"\u60C5\u5831\u306E\u5165\u529B"})]}),a("li",{className:"un-step-item",children:[u("span",{className:"step",children:"STEP2"}),u("span",{className:"txt",children:"\u5165\u529B\u5185\u5BB9\u306E\u78BA\u8A8D"})]}),a("li",{className:"un-step-item",children:[u("span",{className:"step",children:"STEP3"}),u("span",{className:"txt",children:"\u9001\u4FE1\u5B8C\u4E86"})]})]})})}),a("div",{className:"inquiry-form",children:[u("h2",{className:"inquiry-contentTitle",children:"\u304A\u554F\u3044\u5408\u308F\u305B \u5185\u5BB9\u5165\u529B"}),a("p",{children:["\u3053\u3061\u3089\u3067\u306FAvenu-E\u306E\u30B5\u30FC\u30D3\u30B9\u3001\u6A5F\u80FD\u3001\u30C7\u30D0\u30C3\u30B0\u60C5\u5831\u30FB\u6539\u5584\u3001\u611F\u60F3\u3084\u610F\u898B\u306B\u95A2\u3059\u308B\u304A\u554F\u3044\u5408\u308F\u305B\u3092\u627F\u3063\u3066\u3044\u307E\u3059\u3002",u("br",{}),"\u4E0B\u8A18\u306E\u30D5\u30A9\u30FC\u30E0\u306B\u5FC5\u8981\u9805\u76EE\u3092\u3054\u8A18\u5165\u9802\u304D\u3001\u300C\u78BA\u8A8D\u753B\u9762\u3078\u300D\u30DC\u30BF\u30F3\u3092\u62BC\u3057\u3066\u4E0B\u3055\u3044\u3002"]}),a("div",{className:"inquiry-formInputs row",children:[u("div",{className:"mb-3",children:a("p",{children:["\u304A\u554F\u3044\u5408\u308F\u305B\u65E5: ",m+"\u5E74"+o+"\u6708"+d+"\u65E5"]})}),a("div",{children:[a("label",{className:"mb-2",children:[u("i",{className:"fas fa-signature me-2"}),"\u304A\u540D\u524D ",u("span",{className:"mx-1 required",children:"\u5FC5\u9808"})]}),u("input",{className:"form-control",type:"text",name:"name",placeholder:"\u4F8B\uFF09\u5C71\u7530\u592A\u90CE",value:e.name,onChange:l})]}),a("div",{children:[a("label",{className:"mb-2",children:[u("i",{className:"fas fa-signature me-2"}),"\u3075\u308A\u304C\u306A ",u("span",{className:"mx-1 required",children:"\u5FC5\u9808"})]}),u("input",{className:"form-control",type:"text",name:"furigana",placeholder:"\u4F8B\uFF09\u3084\u307E\u3060\u305F\u308D\u3046",value:e.furigana,onChange:l})]}),a("div",{children:[a("label",{className:"mb-2",children:[u("i",{className:"fas fa-envelope me-2"}),"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9 ",u("span",{className:"mx-1 required",children:"\u5FC5\u9808"})]}),u("input",{className:"form-control",type:"email",name:"email",placeholder:"\u4F8B\uFF09guest@example.com",value:e.email,onChange:l})]}),a("div",{children:[a("label",{className:"mb-2",children:[u("i",{className:"fas fa-phone me-2"}),"\u96FB\u8A71\u756A\u53F7 ( - \u30CF\u30A4\u30D5\u30F3\u306A\u3057\u3067\u5165\u529B ) ",u("span",{className:"mx-1 any",children:"\u4EFB\u610F"})]}),u("input",{className:"form-control",type:"tel",name:"tel",placeholder:"\u4F8B\uFF090000000000",value:e.tel,onChange:l})]}),a("div",{children:[a("label",{className:"mb-2",children:[u("i",{className:"fas fa-children me-2"}),"\u6027\u5225 ",u("span",{className:"mx-1 required",children:"\u5FC5\u9808"})]}),u("input",{className:"form-check-input inquiry-radio",type:"radio",name:"sex",value:"\u7537\u6027",onChange:l,checked:e.sex==="\u7537\u6027"?!0:""}),u("label",{className:"ms-1",children:"\u7537\u6027"}),u("input",{className:"form-check-input inquiry-radio",type:"radio",name:"sex",value:"\u5973\u6027",onChange:l,checked:e.sex==="\u5973\u6027"?!0:""}),u("label",{className:"ms-1",children:"\u5973\u6027"}),u("input",{className:"form-check-input inquiry-radio",type:"radio",name:"sex",value:"\u305D\u306E\u4ED6",onChange:l,checked:e.sex==="\u305D\u306E\u4ED6"?!0:""}),u("label",{className:"ms-1",children:"\u305D\u306E\u4ED6"})]}),a("div",{children:[a("label",{className:"mb-2",children:[u("i",{className:"fas fa-reply-all me-2"}),"\u56DE\u7B54\u306E\u5E0C\u671B ",u("span",{className:"mx-1 required",children:"\u5FC5\u9808"})]}),u("input",{className:"form-check-input inquiry-radio",type:"radio",name:"hope",value:"\u5E0C\u671B\u3059\u308B",onChange:l,checked:e.hope==="\u5E0C\u671B\u3059\u308B"?!0:""}),u("label",{className:"ms-1",children:"\u5E0C\u671B\u3059\u308B"}),u("input",{className:"form-check-input inquiry-radio",type:"radio",name:"hope",value:"\u5E0C\u671B\u3057\u306A\u3044",onChange:l,checked:e.hope==="\u5E0C\u671B\u3057\u306A\u3044"?!0:""}),u("label",{className:"ms-1",children:"\u5E0C\u671B\u3057\u306A\u3044"})]}),a("div",{children:[a("label",{className:"mb-2",children:[u("i",{className:"fas fa-file-circle-question me-2"}),"\u304A\u554F\u3044\u5408\u308F\u305B\u9805\u76EE ",u("span",{className:"mx-1 required",children:"\u5FC5\u9808"})]}),a("select",{className:"form-select",name:"item",value:e.item,onChange:l,children:[u("option",{value:"",children:"\u304A\u554F\u3044\u5408\u308F\u305B\u9805\u76EE\u3092\u9078\u629E\u3057\u3066\u304F\u3060\u3055\u3044"}),u("option",{value:"\u3054\u8CEA\u554F\u30FB\u304A\u554F\u3044\u5408\u308F\u305B",children:"\u3054\u8CEA\u554F\u30FB\u304A\u554F\u3044\u5408\u308F\u305B"}),u("option",{value:"\u3054\u610F\u898B\u30FB\u3054\u611F\u60F3",children:"\u3054\u610F\u898B\u30FB\u3054\u611F\u60F3"})]})]}),a("div",{children:[a("label",{className:"mb-2",children:[u("i",{className:"fas fa-pencil me-2"}),"\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9 ( 1000\u6587\u5B57\u4EE5\u5185 ) ",u("span",{className:"mx-1 required",children:"\u5FC5\u9808"})]}),u("textarea",{className:"form-control",name:"content",maxLength:1e3,rows:"15",placeholder:"\u304A\u554F\u5408\u305B\u5185\u5BB9\u3092\u5165\u529B",value:e.content,onChange:l})]})]}),u("div",{className:"inquiry-btnDiv",children:e.date&&e.name&&e.furigana&&e.sex&&e.hope&&e.item&&e.content?e.email.match(/.+@.+\..+/)?e.tel!==""&&!e.tel.match(/^0\d{9,10}$/)?u("button",{className:"btn",onClick:()=>s("0203"),children:"\u78BA\u8A8D\u753B\u9762\u3078"}):e.content.length>1e3?u("button",{className:"btn",onClick:()=>s("0204"),children:"\u78BA\u8A8D\u753B\u9762\u3078"}):e.tel===""?u(E,{to:"/inquiry/confirm",state:{date:e.date,name:e.name,furigana:e.furigana,email:e.email,tel:"\u672A\u767B\u9332",sex:e.sex,hope:e.hope,item:e.item,content:e.content},children:u("button",{className:"btn",children:"\u78BA\u8A8D\u753B\u9762\u3078"})}):u(E,{to:"/inquiry/confirm",state:{date:e.date,name:e.name,furigana:e.furigana,email:e.email,tel:e.tel,sex:e.sex,hope:e.hope,item:e.item,content:e.content},children:u("button",{className:"btn",children:"\u78BA\u8A8D\u753B\u9762\u3078"})}):u("button",{className:"btn",onClick:()=>s("0202"),children:"\u78BA\u8A8D\u753B\u9762\u3078"}):u("button",{className:"btn",onClick:()=>s("0201"),children:"\u78BA\u8A8D\u753B\u9762\u3078"})})]})]});default:return null}};export{x as default};
