import{b as c,D as o,R as h,a as e,j as a,y as t,d as N}from"./index.61613632.js";/* empty css                */const v="/assets/email.f86a6016.svg",C="/assets/tel.b9473e03.svg",A="/assets/password.07abbac6.svg",F="/assets/profile.d46178de.svg",B="/assets/favorite.098505b5.svg",y="/assets/post.a1c11115.svg",p=s=>{const[l,u]=c.exports.useState(Object()),[i,d]=c.exports.useState(Boolean(!0)),n=o(N,"users");switch(c.exports.useEffect(()=>{s.user?s.user.emailVerified?(d(!1),h(n,m=>{m.docs.map(r=>{r.data().email===s.user.email&&u(r.data())})})):noVerifiedAccount():window.location="/login"},[!i]),i){case!1:return e("div",{className:"container my-5",children:[e("div",{className:"mb-4",children:[e("h6",{children:["\u30E6\u30FC\u30B6\u30FC\u8B58\u5225\u5B50: ",s.user&&s.user.uid]}),e("h6",{children:["\u30C7\u30FC\u30BF\u30D9\u30FC\u30B9ID: ",s.user&&l.id]}),e("h6",{children:["\u30E1\u30FC\u30EB\u8A8D\u8A3C: ",s.user&&s.user.emailVerified?"\u8A8D\u8A3C\u6E08\u307F":"\u672A\u8A8D\u8A3C"]})]}),e("div",{className:"ya-card-row",children:[a("div",{className:"ya-card-cell",children:a("a",{href:"/profile/reset/email",className:"ya-card__whole-card-link",children:a("div",{"data-card-identifier":"YourOrders",className:"a-box ya-card--rich",children:a("div",{className:"a-box-inner",children:e("div",{className:"a-row",children:[a("div",{className:"a-column a-span3",children:a("img",{className:"metaImg",alt:"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9",src:v})}),e("div",{className:"a-column a-span9 a-span-last",children:[a("h2",{className:"a-spacing-none ya-card__heading--rich a-text-normal",children:"E-Mail"}),a("div",{children:a("span",{className:"a-color-secondary",children:"\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u306E\u5909\u66F4"})})]})]})})})})}),a("div",{className:"ya-card-cell",children:a("a",{href:"/profile/reset/sns",className:"ya-card__whole-card-link",children:a("div",{"data-card-identifier":"SignInAndSecurity",className:"a-box ya-card--rich",children:a("div",{className:"a-box-inner",children:e("div",{className:"a-row",children:[a("div",{className:"a-column a-span3",children:a("img",{className:"metaImg",alt:"SNS\u9023\u643A",src:C})}),e("div",{className:"a-column a-span9 a-span-last",children:[a("h2",{className:"a-spacing-none ya-card__heading--rich a-text-normal",children:"SNS\u9023\u643A"}),a("div",{children:a("span",{className:"a-color-secondary",children:"\u30A2\u30AB\u30A6\u30F3\u30C8\u3068SNS\u3092\u7D10\u4ED8\u3051\u308B"})})]})]})})})})}),a("div",{className:"ya-card-cell",children:a("a",{href:"/profile/reset/password",className:"ya-card__whole-card-link",children:a("div",{"data-card-identifier":"PrimeConsumer",className:"a-box ya-card--rich",children:a("div",{className:"a-box-inner",children:e("div",{className:"a-row",children:[a("div",{className:"a-column a-span3",children:a("img",{className:"metaImg",alt:"\u30ED\u30B0\u30A4\u30F3\u3068\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3",src:A})}),e("div",{className:"a-column a-span9 a-span-last",children:[a("h2",{className:"a-spacing-none ya-card__heading--rich a-text-normal",children:"\u30ED\u30B0\u30A4\u30F3\u3068\u30BB\u30AD\u30E5\u30EA\u30C6\u30A3"}),a("div",{children:a("span",{className:"a-color-secondary",children:"\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u5909\u66F4"})})]})]})})})})})]}),e("div",{className:"ya-card-row",children:[a("div",{className:"ya-card-cell",children:a("a",{href:"/profile/metadata/bookmarks",className:"ya-card__whole-card-link",children:a("div",{"data-card-identifier":"PrimeConsumer",className:"a-box ya-card--rich",children:a("div",{className:"a-box-inner",children:e("div",{className:"a-row",children:[a("div",{className:"a-column a-span3",children:a("img",{className:"metaImg",alt:"\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u30C7\u30FC\u30BF",src:B})}),e("div",{className:"a-column a-span9 a-span-last",children:[a("h2",{className:"a-spacing-none ya-card__heading--rich a-text-normal",children:"\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u30C7\u30FC\u30BF"}),a("div",{children:a("span",{className:"a-color-secondary",children:"\u304A\u6C17\u306B\u5165\u308A\u306E\u30B9\u30AF\u30E9\u30C3\u30D7\u30FB\u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u78BA\u8A8D"})})]})]})})})})}),a("div",{className:"ya-card-cell",children:a("a",{href:"/profile/metadata/post-datas",className:"ya-card__whole-card-link",children:a("div",{"data-card-identifier":"PrimeConsumer",className:"a-box ya-card--rich",children:a("div",{className:"a-box-inner",children:e("div",{className:"a-row",children:[a("div",{className:"a-column a-span3",children:a("img",{className:"metaImg",alt:"\u6295\u7A3F\u30C7\u30FC\u30BF",src:y})}),e("div",{className:"a-column a-span9 a-span-last",children:[a("h2",{className:"a-spacing-none ya-card__heading--rich a-text-normal",children:"\u6295\u7A3F\u30C7\u30FC\u30BF"}),a("div",{children:a("span",{className:"a-color-secondary",children:"\u6295\u7A3F\u3057\u305F\u30B9\u30AF\u30E9\u30C3\u30D7\u30FB\u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u7DE8\u96C6"})})]})]})})})})}),a("div",{className:"ya-card-cell",children:a("a",{className:"ya-card__whole-card-link",onClick:()=>t(l),children:a("div",{"data-card-identifier":"AddressesAnd1Click",className:"a-box ya-card--rich",children:a("div",{className:"a-box-inner",children:e("div",{className:"a-row",children:[a("div",{className:"a-column a-span3",children:a("img",{className:"metaImg",alt:"\u9000\u4F1A",src:F})}),e("div",{className:"a-column a-span9 a-span-last",children:[a("h2",{className:"a-spacing-none ya-card__heading--rich a-text-normal",children:"\u9000\u4F1A"}),a("div",{children:a("span",{className:"a-color-secondary",children:"\u30A2\u30AB\u30A6\u30F3\u30C8\u3092\u524A\u9664\u3059\u308B"})})]})]})})})})})]})]});default:return null}};export{p as default};
