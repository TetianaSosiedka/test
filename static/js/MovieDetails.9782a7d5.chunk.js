"use strict";(self.webpackChunkcozy_space_front=self.webpackChunkcozy_space_front||[]).push([[739],{850:function(n,e,t){t.d(e,{Z:function(){return x}});var r=t(885),a=t(2791),o=t(5861),c=t(7757),s=t.n(c),i=t(4569),u=t.n(i),l="aec86298015b623e3598e86276b5a670",d="https://api.themoviedb.org/3",p=function(n){if(200===n.status)return{data:0!==n.data.total_results?n.data:"",BasicURL:"https://image.tmdb.org/t/p/original"}},f=function(){var n=(0,o.Z)(s().mark((function n(){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u().get("".concat(d,"/trending/movie/day?api_key=").concat(l)).then((function(n){return p(n)})));case 1:case"end":return n.stop()}}),n)})));return function(){return n.apply(this,arguments)}}(),h=function(){var n=(0,o.Z)(s().mark((function n(e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u().get("".concat(d,"/movie/").concat(e,"?api_key=").concat(l,"&language=en-US")).then((function(n){return p(n)})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),g=function(){var n=(0,o.Z)(s().mark((function n(e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u().get("".concat(d,"/movie/").concat(e,"/credits?api_key=").concat(l,"&language=en-US")).then((function(n){return p(n)})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),v=function(){var n=(0,o.Z)(s().mark((function n(e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u().get("".concat(d,"/movie/").concat(e,"/reviews?api_key=").concat(l,"&language=en-US&page=1")).then((function(n){return p(n)})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),m=function(){var n=(0,o.Z)(s().mark((function n(e){return s().wrap((function(n){for(;;)switch(n.prev=n.next){case 0:return n.abrupt("return",u().get("".concat(d,"/search/movie?api_key=").concat(l,"&query=").concat(e,"&language=en-US&page=1&include_adult=false")).then((function(n){return p(n)})));case 1:case"end":return n.stop()}}),n)})));return function(e){return n.apply(this,arguments)}}(),x=function(){var n=(0,a.useState)([]),e=(0,r.Z)(n,2),t=e[0],o=e[1],c=(0,a.useState)(""),s=(0,r.Z)(c,2),i=s[0],u=s[1],l=(0,a.useState)(""),d=(0,r.Z)(l,2),p=d[0],x=d[1],b=(0,a.useState)(""),Z=(0,r.Z)(b,2),j=Z[0],w=Z[1],k=(0,a.useState)(0),y=(0,r.Z)(k,2),S=y[0],_=y[1],U=(0,a.useState)(""),P=(0,r.Z)(U,2),q=P[0],R=P[1],M=(0,a.useState)([]),C=(0,r.Z)(M,2),A=C[0],B=C[1],D=(0,a.useState)(""),L=(0,r.Z)(D,2),z=L[0],I=L[1],F=(0,a.useState)([]),G=(0,r.Z)(F,2),O=G[0],E=G[1],H=(0,a.useState)([]),T=(0,r.Z)(H,2),J=T[0],K=T[1],N=(0,a.useState)([]),Q=(0,r.Z)(N,2),V=Q[0],W=Q[1],X=(0,a.useState)(""),Y=(0,r.Z)(X,2),$=Y[0],nn=Y[1],en=function(n){h(n).then((function(n){var e=n.data,t=n.BasicURL;e&&(u(t),x(e.original_title),w(e.release_date.slice(0,4)),_(e.vote_average),R(e.overview),B(e.genres),I(e.poster_path))})).catch((function(n){console.log(n.message),nn("Request error !!!")}))},tn=(0,a.useCallback)((function(n){var e=n.locationPathname,t=n.movieId,r=void 0===t?0:t,a=n.query,c=void 0===a?"":a;switch(e){case"/":f().then((function(n){var e=n.data;e&&o(e.results)})).catch((function(n){console.log(n.message),nn("Request error !!!")}));break;case"/movies/".concat(r):en(r);break;case"/movies/".concat(r,"/cast"):en(r),function(n){g(n).then((function(n){var e=n.data,t=n.BasicURL;e&&(E(e.cast),u(t))})).catch((function(n){console.log(n.message),nn("Request error !!!")}))}(r);break;case"/movies/".concat(r,"/reviews"):en(r),function(n){v(n).then((function(n){var e=n.data;e&&K(e.results)})).catch((function(n){console.log(n.message),nn("Request error !!!")}))}(r);break;case"/movies?query=".concat(c):!function(n){m(n).then((function(n){var e=n.data;W(e.results),nn("")})).catch((function(e){console.log(e.message),W([]),nn("By request ".concat(n," nothing was found."))}))}(c);break;default:console.log("hook error")}}),[]);return{errorMessage:$,trendsMovies:t,basicUrl:i,title:p,releaseDate:j,rating:S,overview:q,genres:A,poster:z,profileActors:O,reviews:J,searchMoviews:V,setApiMoveDetails:tn}}},4838:function(n,e,t){t.r(e),t.d(e,{default:function(){return y}});var r,a,o,c,s,i,u=t(6871),l=t(168),d=t(6444),p=d.ZP.button(r||(r=(0,l.Z)(["\n  margin-top: 15px;\n  padding: 5px 8px;\n  font-size: 15px;\n  background-color: transparent;\n  &:hover,\n  &:focus {\n    color: #329fd6;\n    border-color: #329fd6;\n  }\n  span {\n    margin-right: 3px;\n    font-weight: bold;\n  }\n"]))),f=t(184),h=function(n){var e=n.locationParam,t=(0,u.s0)();return(0,f.jsxs)(p,{type:"button",onClick:function(){t(e?"/movies?query=".concat(e):"/")},children:[(0,f.jsx)("span",{children:"\u21d0"})," Go back"]})},g=t(501),v=t(2791),m=d.ZP.article(a||(a=(0,l.Z)(["\n  margin-top: 15px;\n  padding-bottom: 15px;\n  display: flex;\n  flex-direction: row-reverse;\n  border-bottom: solid #d1d1d3 4px;\n"]))),x=d.ZP.div(o||(o=(0,l.Z)([""]))),b=d.ZP.img(c||(c=(0,l.Z)(["\n  margin-right: 15px;\n"]))),Z=d.ZP.div(s||(s=(0,l.Z)(["\n  ul {\n    margin-bottom: 10px;\n    padding-bottom: 10px;\n    border-bottom: solid #d1d1d3 4px;\n  }\n\n  li {\n    padding: 5px 0;\n    &:hover,\n    &:focus {\n      background-color: #f0f3f7;\n    }\n    a {\n      color: #000000;\n    }\n  }\n"]))),j=d.ZP.p(i||(i=(0,l.Z)(["\n  padding-top: 5px;\n  color: #329fd6;\n"]))),w=t(850),k=function(){var n=(0,u.TH)().pathname,e=(0,u.UO)().movieId,t=(0,w.Z)(),r=t.errorMessage,a=t.basicUrl,o=t.title,c=t.releaseDate,s=t.rating,i=t.overview,l=t.genres,d=t.poster,p=t.setApiMoveDetails;(0,v.useEffect)((function(){p({locationPathname:n,movieId:e})}),[n,e,p]);return(0,f.jsxs)(f.Fragment,{children:[0===r.length&&0===o.length&&(0,f.jsx)(j,{children:"Loading ..."}),o.length>0&&(0,f.jsxs)(f.Fragment,{children:[(0,f.jsxs)(m,{children:[(0,f.jsxs)(x,{children:[(0,f.jsxs)("h2",{children:[o," (",c,")"]}),(0,f.jsxs)("p",{children:["User Score: ",s]}),(0,f.jsx)("h3",{children:"Overvlew"}),(0,f.jsx)("p",{children:i}),(0,f.jsx)("h3",{children:"Genres: "}),(0,f.jsx)("p",{children:function(){var n=[];return l.map((function(e){return n.push(e.name)})),n.join(", ")}()})]}),(0,f.jsx)(b,{src:[a,d].join(""),alt:o,height:"300"})]}),(0,f.jsxs)(Z,{children:[(0,f.jsx)("h3",{children:"Additional information:"}),(0,f.jsxs)("ul",{children:[(0,f.jsx)("li",{children:(0,f.jsx)(g.rU,{to:"cast",children:"Cast"})}),(0,f.jsx)("li",{children:(0,f.jsx)(g.rU,{to:"reviews",children:"Reviews"})})]}),(0,f.jsx)(u.j3,{})]})]}),r.length>0&&(0,f.jsx)(j,{children:r})]})},y=function(n){var e=n.locationParam;return(0,f.jsxs)("main",{children:[(0,f.jsx)(h,{locationParam:e}),(0,f.jsx)(k,{})]})}}}]);
//# sourceMappingURL=MovieDetails.9782a7d5.chunk.js.map