import{j as u,a as e,r as s,b as l,u as c,D as A,R as F,d as f}from"./index.61613632.js";/* empty css                */const b=a=>{switch(new URL(window.location.href).pathname){case"/":return u("div",{children:a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})});case"/inquiry":return u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-envelopes-bulk me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/\u304A\u554F\u3044\u5408\u308F\u305B"]})});case"/inquiry/confirm":return u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-envelopes-bulk me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\u78BA\u8A8D"]})});case"/inquiry/thanks":return u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-envelopes-bulk me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/\u304A\u554F\u3044\u5408\u308F\u305B\u5185\u5BB9\u9001\u4FE1\u5B8C\u4E86"]})});case"/scraps":return e("div",{children:[u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-scroll me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/\u30B9\u30AF\u30E9\u30C3\u30D7"]})}),a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})]});case"/scraps/post":return e("div",{className:"subheader-title",children:[e("h4",{children:[u("i",{className:"fas fa-scroll me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/",u("a",{href:"/scraps",children:"\u30B9\u30AF\u30E9\u30C3\u30D7"}),"/\u30B9\u30AF\u30E9\u30C3\u30D7\u306E\u6295\u7A3F"]}),a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})]});case"/scraps/detail":return e("div",{children:[u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-scroll me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/",u("a",{href:"/scraps",children:"\u30B9\u30AF\u30E9\u30C3\u30D7"}),"/\u8A73\u7D30"]})}),a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})]});case"/scraps/result":return e("div",{className:"subheader-title",children:[e("h4",{children:[u("i",{className:"fas fa-scroll me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/",u("a",{href:"/scraps",children:"\u30B9\u30AF\u30E9\u30C3\u30D7"}),"/\u691C\u7D22\u7D50\u679C"]}),a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})]});case"/package":return e("div",{children:[u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-cube me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/\u30D1\u30C3\u30B1\u30FC\u30B8"]})}),a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})]});case"/package/post":return u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-cube me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/",u("a",{href:"/package",children:"\u30D1\u30C3\u30B1\u30FC\u30B8"}),"/\u30D1\u30C3\u30B1\u30FC\u30B8\u306E\u767B\u9332"]})});case"/package/detail":return e("div",{children:[u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-cube me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/",u("a",{href:"/package",children:"\u30D1\u30C3\u30B1\u30FC\u30B8"}),"/\u8A73\u7D30"]})}),a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})]});case"/register":return u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-earth-asia me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/\u65B0\u898F\u4F1A\u54E1\u767B\u9332"]})});case"/login":return u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-right-to-bracket me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/\u30ED\u30B0\u30A4\u30F3"]})});case"/password/reset":return e("div",{children:[u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fa-solid fa-trash-can-arrow-up me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u518D\u8A2D\u5B9A"]})}),a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})]});case"/profile":const d=c().search,h=new URLSearchParams(d).get("user");return e("div",{children:[u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-id-card me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/\u958B\u767A\u8005\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB",u("span",{className:"profile-name",children:h})]})}),a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})]});case"/profile/edit":return e("div",{children:[u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-id-card me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/",u("a",{href:"/profile?user="+a.user.displayName,children:"\u958B\u767A\u8005\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB"}),"/\u30D7\u30ED\u30D5\u30A3\u30FC\u30EB\u306E\u5909\u66F4"]})}),a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})]});case"/profile/metadata":return e("div",{children:[u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-id-card me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u7DE8\u96C6"]})}),a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})]});case"/profile/metadata/bookmarks":return u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fa fa-star me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/",u("a",{href:"/profile/metadata",children:"\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u7DE8\u96C6"}),"/\u30D6\u30C3\u30AF\u30DE\u30FC\u30AF\u30C7\u30FC\u30BF"]})});case"/profile/metadata/post-datas":return u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fa fa-blog me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/",u("a",{href:"/profile/metadata",children:"\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u7DE8\u96C6"}),"/\u6295\u7A3F\u30C7\u30FC\u30BF"]})});case"/profile/reset/email":return u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fa fa-blog me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/",u("a",{href:"/profile/metadata",children:"\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u7DE8\u96C6"}),"/E-Mail\u306E\u30EA\u30BB\u30C3\u30C8"]})});case"/profile/reset/sns":return u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fa fa-blog me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/",u("a",{href:"/profile/metadata",children:"\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u7DE8\u96C6"}),"/SNS\u9023\u643A"]})});case"/profile/reset/password":return u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fa fa-blog me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/",u("a",{href:"/profile/metadata",children:"\u30E1\u30BF\u30C7\u30FC\u30BF\u306E\u7DE8\u96C6"}),"/\u30D1\u30B9\u30EF\u30FC\u30C9\u306E\u518D\u8A2D\u5B9A"]})});case"/term":return e("div",{children:[u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-book-atlas me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/\u5229\u7528\u898F\u7D04"]})}),a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})]});case"/help":return e("div",{children:[u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-handshake-angle me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/\u30D8\u30EB\u30D7"]})}),a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})]});case"/help/format":const[r,n]=l.exports.useState([]),t=c().search,C=new URLSearchParams(t).get("type");return l.exports.useEffect(()=>{const i=A(f,"helps");F(i,E=>{n(E.docs.map(m=>({...m.data()})))})},[]),e("div",{children:[u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-handshake-angle me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/",u("a",{href:"/help",children:"\u30D8\u30EB\u30D7"}),"/",r&&r.map(i=>i.query===C&&i.title)]})}),a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})]});case"/privacypolicy":return e("div",{children:[u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-user-shield me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/\u30D7\u30E9\u30A4\u30D0\u30B7\u30FC\u30DD\u30EA\u30B7\u30FC"]})}),a.user&&a.user.emailVerified===!1&&e("div",{className:"subheader-attention",children:[u("p",{children:"\u203B\u3053\u306E\u30A2\u30AB\u30A6\u30F3\u30C8\u306F\u307E\u3060\u3001\u30E1\u30FC\u30EB\u30A2\u30C9\u30EC\u30B9\u8A8D\u8A3C\u304C\u3055\u308C\u3066\u3044\u307E\u305B\u3093\u3002"}),u("a",{onClick:s,children:u("p",{children:"( \u8A8D\u8A3C\u30E1\u30FC\u30EB\u306E\u518D\u9001\u4FE1\u306F\u3053\u3061\u3089 )"})})]})]});case"/admin/inquiry/list":return u("div",{className:"subheader-title",children:e("h4",{children:[u("i",{className:"fas fa-list-check me-2"}),u("a",{className:"ms-2",href:"/",children:"Top"}),"/\u304A\u554F\u3044\u5408\u308F\u305B\u7BA1\u7406\u753B\u9762"]})});default:return null}};export{b as default};