(this["webpackJsonpvinted-fe-code-challenge"]=this["webpackJsonpvinted-fe-code-challenge"]||[]).push([[0],[,,,,,function(e){e.exports=JSON.parse('{"url":"https://api.flickr.com/services/rest/","imageUrl":"https://live.staticflickr.com/","params":{"api_key":"879dc778faa8db7a5cf203819045e10e","method":"flickr.photos.search","tags":"retro,vintage","tag_mode":"all","content_type":3,"per_page":50,"format":"json","nojsoncallback":1,"sort":"relevance","extras":"owner_name,description"}}')},function(e,t,n){e.exports={card:"Card_card__3F8np",shared:"Card_shared__1pvgm",media:"Card_media__qot8H Card_shared__1pvgm",content:"Card_content__2u8qS Card_shared__1pvgm",star:"Card_star__3wVSe"}},,function(e,t,n){e.exports={button:"Button_button__2Ce79",active:"Button_active__1NQEE"}},,,function(e,t,n){e.exports={alert:"ErrorMessage_alert__1eMNQ",error:"ErrorMessage_error__2MNkV",warning:"ErrorMessage_warning__3i-GW",info:"ErrorMessage_info__4mBzm",success:"ErrorMessage_success__WPjb7"}},,,,function(e,t,n){e.exports={list:"List_list__12_ST"}},function(e,t,n){e.exports={loader:"Loader_loader__TLVE4"}},,,,,function(e,t,n){},,,function(e,t,n){"use strict";n.r(t);var r=n(1),c=n.n(r),o=n(13),a=n.n(o),s=(n(21),n(12)),i=n(10),u=n.n(i),l=n(3),d=n(14),j=n(2),v=n(5),f=function(e){var t,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:250;return function(){for(var r=arguments.length,c=new Array(r),o=0;o<r;o++)c[o]=arguments[o];clearTimeout(t),t=setTimeout((function(){return e.apply(void 0,c)}),n)}},b=function(e){var t=Object(r.useState)(!1),n=Object(j.a)(t,2),c=n[0],o=n[1];function a(){var e,t,n,r,c,a,s=(null===(e=document)||void 0===e?void 0:e.documentElement)&&(null===(t=document)||void 0===t?void 0:t.documentElement.scrollTop)||(null===(n=document)||void 0===n?void 0:n.body.scrollTop),i=(null===(r=document)||void 0===r?void 0:r.documentElement)&&(null===(c=document)||void 0===c?void 0:c.documentElement.scrollHeight)||document.body.scrollHeight;s+(null===(a=window)||void 0===a?void 0:a.innerHeight)+50>=i&&o(!0)}return Object(r.useEffect)((function(){var e,t=f(a,1500);return null===(e=window)||void 0===e||e.addEventListener("scroll",t),function(){var e;null===(e=window)||void 0===e||e.removeEventListener("scroll",t)}}),[]),Object(r.useEffect)((function(){c&&e()}),[e,c]),[c,o]};var m=function(e,t){var n=window.localStorage.getItem(t),c=Object(r.useState)((function(){return null===n?e:JSON.parse(n)})),o=Object(j.a)(c,2),a=o[0],s=o[1];return Object(r.useEffect)((function(){window.localStorage.setItem(t,JSON.stringify(a))}),[t,a]),[a,s]},h=n(15),p=n.n(h),_=n(6),g=n.n(_),O=n(8),x=n.n(O),w=n(0);var k=function(e){var t=e.handleLike,n=e.label,r=e.isActive?"".concat(x.a.button," ").concat(x.a.active):x.a.button;return Object(w.jsx)("button",{className:r,onClick:t,children:n})},E=v.imageUrl;var S=function(e){var t=e.id,n=e.title,c=e.secret,o=e.server,a=e.ownername,s=e.setLikedItems,i=e.likedItems,u=Object(r.useState)(!1),d=Object(j.a)(u,2),v=d[0],f=d[1],b="".concat(E).concat(o,"/").concat(t,"_").concat(c,".jpg"),m=i.some((function(e){return e===t}));return Object(w.jsxs)("li",{className:g.a.card,onMouseEnter:function(){return f(!0)},onMouseLeave:function(){return f(!1)},children:[Object(w.jsx)("div",{className:g.a.media,style:{backgroundImage:"url(".concat(b,")")}}),m&&Object(w.jsx)("div",{className:g.a.star,children:Object(w.jsx)("i",{children:"\u2764"})}),v&&Object(w.jsxs)("section",{className:g.a.content,children:[Object(w.jsx)("strong",{title:n,children:n}),Object(w.jsx)("hr",{}),Object(w.jsx)("em",{children:a}),Object(w.jsx)(k,{handleLike:function(){s((function(e){return m?e.filter((function(e){return e!==t})):Object(l.a)(new Set([].concat(Object(l.a)(e),[t])))}))},label:m?"Dislike":"Like",isActive:m})]})]})},N=n(16),L=n.n(N);var y=function(e){var t=e.loadingText;return!e.isFetching&&Object(w.jsx)("div",{className:L.a.loader,children:t})},C=n(11),M=n.n(C);var F=function(e){var t=e.errorMessage,n=e.type,r=void 0===n?"error":n;return!!t&&Object(w.jsx)("div",{className:"".concat(M.a.alert," ").concat(M.a[r]),children:t})},T=v.url,I=v.params,P=new URLSearchParams(I);var B=function(){var e=m([],"likedPhotos"),t=Object(j.a)(e,2),n=t[0],c=t[1],o=b((function(){A((function(e){return e+1})),v(!1)})),a=Object(j.a)(o,2),i=a[0],v=a[1],f=Object(r.useState)(""),h=Object(j.a)(f,2),_=h[0],g=h[1],O=Object(r.useState)([]),x=Object(j.a)(O,2),k=x[0],E=x[1],N=Object(r.useState)(!1),L=Object(j.a)(N,2),C=L[0],M=L[1],I=Object(r.useState)(1),B=Object(j.a)(I,2),J=B[0],A=B[1],H=_?"Problem fetching photos :(":"Fetching photos ...",U=C?"No more photos!":"Fetching more photos ...",V=0===k.length?H:U;return Object(r.useEffect)((function(){(function(){var e=Object(d.a)(u.a.mark((function e(){var t,n;return u.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return P.set("page",J),e.prev=1,e.next=4,fetch("".concat(T,"?").concat(P));case 4:return t=e.sent,e.next=7,t.json();case 7:if(n=e.sent,!t.ok||"ok"!==n.stat){e.next=12;break}return E((function(e){return[].concat(Object(l.a)(e),Object(l.a)(n.photos.photo))})),M(0===n.photos.photo.length),e.abrupt("return");case 12:throw new Error(n.message);case 15:e.prev=15,e.t0=e.catch(1),console.log(e.t0),g(e.t0.message);case 19:case"end":return e.stop()}}),e,null,[[1,15]])})));return function(){return e.apply(this,arguments)}})()()}),[J]),Object(w.jsxs)(w.Fragment,{children:[Object(w.jsx)(F,{errorMessage:_,type:"error"}),!!k&&Object(w.jsx)("ul",{className:p.a.list,children:k.map((function(e,t){return Object(w.jsx)(S,Object(s.a)({},Object(s.a)({likedItems:n,setLikedItems:c},e)),"".concat(t,"-").concat(null===e||void 0===e?void 0:e.id))}))}),Object(w.jsx)(y,{loadingText:V,isFetching:i})]})};var J=function(){return Object(w.jsx)("div",{className:"App",children:Object(w.jsx)(B,{})})},A=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,25)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,o=t.getLCP,a=t.getTTFB;n(e),r(e),c(e),o(e),a(e)}))};a.a.render(Object(w.jsx)(c.a.StrictMode,{children:Object(w.jsx)(J,{})}),document.getElementById("root")),A()}],[[24,1,2]]]);
//# sourceMappingURL=main.a30466db.chunk.js.map