(this.webpackJsonplogin=this.webpackJsonplogin||[]).push([[2],{1:function(e,t,n){"use strict";n.d(t,"l",(function(){return r})),n.d(t,"m",(function(){return a})),n.d(t,"c",(function(){return c})),n.d(t,"a",(function(){return o})),n.d(t,"b",(function(){return s})),n.d(t,"d",(function(){return i})),n.d(t,"e",(function(){return l})),n.d(t,"h",(function(){return f})),n.d(t,"g",(function(){return d})),n.d(t,"f",(function(){return p})),n.d(t,"i",(function(){return b})),n.d(t,"j",(function(){return h})),n.d(t,"k",(function(){return O}));var r="REQUEST",a="SUCCESS",c="FAILURE";function u(e){return[r,a,c].reduce((function(t,n){return t[n]="".concat(e,"_").concat(n),t}),{})}var o=u("ADD_CART"),s=u("DELETE_CART"),i=u("GET_ADAPTIVE"),l=u("GET_AWS"),f=u("POST_AWS"),d=u("GET_PRODUCTS"),p=u("GET_DETAIL"),b=u("POST_LOGIN"),h=u("POST_LOGOUT"),O=u("POST_REGISTER")},131:function(e,t,n){"use strict";n.d(t,"b",(function(){return r})),n.d(t,"a",(function(){return a}));var r="\nquery list{\n  listNIKES{\n    items{\n      id\n      title\n      inquiry\n    }\n    }\n  }\n",a="mutation createNIKE($input: CreateNIKEInput!) {\n  createNIKE(input: $input) {\n    title,\n    inquiry\n  }\n}\n"},170:function(e,t,n){e.exports=n(280)},23:function(e,t,n){"use strict";n.d(t,"a",(function(){return c})),n.d(t,"c",(function(){return u})),n.d(t,"f",(function(){return o})),n.d(t,"e",(function(){return s})),n.d(t,"b",(function(){return i})),n.d(t,"d",(function(){return l}));var r=n(1);function a(e,t){return void 0==t?{type:e}:{type:e,payload:t}}var c={adaptiveRequest:function(e){return a(r.d[r.l],e)},adaptiveSuccess:function(e){return a(r.d[r.m],e)},adaptiveFailure:function(e){return a(r.d[r.c],e)}},u={awsRequest:function(e){return a(r.e[r.l],e)},awsSuccess:function(e){return a(r.e[r.m],e)},awsFailure:function(e){return a(r.e[r.c],e)},writingRequest:function(e){return a(r.h[r.l],e)},writingSuccess:function(e){return a(r.h[r.m],e)},writingFailure:function(e){return a(r.h[r.c],e)}},o={productsRequest:function(e){return a(r.g[r.l],e)},productsSuccess:function(e){return a(r.g[r.m],e)},productsFailure:function(e){return a(r.g[r.c],e)}},s={detailRequest:function(e){return a(r.f[r.l],e)},detailSuccess:function(e){return a(r.f[r.m],e)},detailFailure:function(e){return a(r.f[r.c],e)}},i={loginRequest:function(e){return a(r.i[r.l],e)},loginSuccess:function(e){return a(r.i[r.m],e)},logOutRequest:function(e){return a(r.j[r.l],e)},logOutSuccess:function(e){return a(r.j[r.m],e)},registerRequest:function(e){return a(r.k[r.l],e)},registerSuccess:function(e){return a(r.k[r.m],e)}},l={addCartRequest:function(e){return a(r.a[r.l],e)},addCartSuccess:function(e){return a(r.a[r.m],e)},deleteCartRequest:function(e){return a(r.b[r.l],e)},deleteCartSuccess:function(e){return a(r.b[r.m],e)}}},280:function(e,t,n){"use strict";n.r(t);var r=n(93),a=n(2),c=n.n(a),u=n(66),o=n.n(u),s=n(18),i=n(42),l=Object(i.a)((function(){return n.e(9).then(n.bind(null,331))})),f=[{path:"/",page:Object(i.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(8)]).then(n.bind(null,332))})),exact:!0},{path:"/cs",page:Object(i.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(6)]).then(n.bind(null,333))})),exact:!0},{path:"/post",page:l,exact:!0},{path:"/products/:direction(\\d+|man|woman)?/:id?",page:Object(i.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(10)]).then(n.bind(null,334))})),exact:!0},{path:"/detail/:id/:color",page:Object(i.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(7)]).then(n.bind(null,335))})),exact:!0},{path:"/register",page:Object(i.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(11)]).then(n.bind(null,336))})),exact:!0},{path:"/cart",page:Object(i.a)((function(){return Promise.all([n.e(0),n.e(1),n.e(5)]).then(n.bind(null,337))})),exact:!0}],d=n(141),p=n(67);var b=function(){return c.a.useEffect((function(){p.default.configure({Auth:{mandatorySignIn:!0,region:"ap-northeast-2",userPoolId:Object({NODE_ENV:"production",PUBLIC_URL:"/modern_nike_web_frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AWS_COGNITO_USER_POOL_ID,userPoolWebClientId:Object({NODE_ENV:"production",PUBLIC_URL:"/modern_nike_web_frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_AWS_COGNITO_APP_CLIENT_ID},Storage:{AWSS3:{bucket:"verdemo",region:"ap-northeast-2"}},aws_project_region:"ap-northeast-2",aws_appsync_graphqlEndpoint:"https://rg3lyltwdbephnyl6df32h3t5q.appsync-api.ap-northeast-2.amazonaws.com/graphql",aws_appsync_region:"ap-northeast-2",aws_appsync_authenticationType:"API_KEY",aws_appsync_apiKey:"da2-tkqqkxrrcnfovdszclqyajlfrq"})}),[]),c.a.createElement(c.a.Fragment,null,c.a.createElement(d.a,{htmlAttributes:{lang:"en"},meta:[{name:"des",content:"content"}],title:"NIKE MODERN WEB"}),c.a.createElement(s.c,null,f.map((function(e,t){var n=e.path,r=e.page,a=e.exact;return c.a.createElement(s.a,{exact:a,path:n,component:r,key:t})}))))},h=n(75),O=n(95);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var v=n(26),m=Object(v.a)(),j=n(34),g=n(160),x=n(152),_=n.n(x),w=n(8),S=n(1),E={isFatching:!0,first:[],second:[]},k={isFatching:!1,cs:[]},T={banner:"",list:[]},y={detail:{},isFatching:!0},C={user:{name:"",isAuthenticated:!1,user:null}},R={cart:[]},P=Object(j.c)({adaptive:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:E,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.d[S.l]:return Object(w.a)(Object(w.a)({},e),{},{isFatching:!0});case S.d[S.m]:var n=t.payload;return Object(w.a)(Object(w.a)({},e),{},{first:n.first,second:n.second,isFatching:!1});case S.d[S.c]:return Object(w.a)({},e);default:return e}},aws:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:k,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.e[S.l]:return console.log("xxx"),Object(w.a)({},e);case S.e[S.m]:var n=t.payload;return Object(w.a)(Object(w.a)({},e),{},{cs:n.data.listNIKES.items});case S.e[S.c]:case S.h[S.l]:case S.h[S.m]:case S.h[S.c]:return Object(w.a)({},e);default:return e}},products:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:T,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.g[S.l]:return console.log("GET_PRODUCTS[REQUST]"),Object(w.a)({},e);case S.g[S.m]:var n=t.payload;return Object(w.a)(Object(w.a)({},e),{},{banner:n.banner,list:n.list});case S.g[S.c]:return Object(w.a)({},e);default:return e}},detail:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:y,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.f[S.l]:return Object(w.a)(Object(w.a)({},e),{},{isFatching:!0});case S.f[S.m]:var n=t.payload;return Object(w.a)(Object(w.a)({},e),{},{detail:n,isFatching:!1});case S.f[S.c]:return Object(w.a)({},e);default:return e}},auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:C,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.i[S.l]:return Object(w.a)(Object(w.a)({},e),{},{isAuthenticated:!1});case S.i[S.m]:var n=t.payload;return Object(w.a)(Object(w.a)({},e),{},{isAuthenticated:!0,user:n});case S.i[S.c]:case S.j[S.l]:return Object(w.a)({},e);case S.j[S.m]:return Object(w.a)(Object(w.a)({},e),{},{isAuthenticated:!1,user:{}});case S.j[S.c]:case S.k[S.l]:case S.k[S.m]:case S.k[S.c]:return Object(w.a)({},e);default:return e}},cart:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:R,t=arguments.length>1?arguments[1]:void 0;switch(t.type){case S.a[S.l]:case S.a[S.m]:case S.a[S.c]:case S.b[S.l]:case S.b[S.m]:case S.b[S.c]:return Object(w.a)({},e);default:return e}}}),A=n(6),I=n.n(A),D=n(71),N=n(72),U=n(122),q=n.n(U),L=new(function(){function e(){Object(D.a)(this,e),this.axios=q.a.create({baseURL:Object({NODE_ENV:"production",PUBLIC_URL:"/modern_nike_web_frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_API_URL,timeout:Object({NODE_ENV:"production",PUBLIC_URL:"/modern_nike_web_frontend",WDS_SOCKET_HOST:void 0,WDS_SOCKET_PATH:void 0,WDS_SOCKET_PORT:void 0}).REACT_APP_REQUEST_TIMEOUT})}return Object(N.a)(e,[{key:"get",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.axios.get(e,t).then((function(e){return e}))}},{key:"post",value:function(e,t){return this.axios.post(e,t).then((function(e){return e}))}},{key:"put",value:function(e,t){return this.axios.put(e,t).then((function(e){return e}))}},{key:"delete",value:function(e){var t=arguments.length>1&&void 0!==arguments[1]?arguments[1]:null;return this.axios.delete(e,t).then((function(e){return e}))}}]),e}()),W=function(e){return L.get("adaptive/".concat(e))},K=n(140),F=n(281),G=n(131),B=function(e){return K.a.graphql(Object(F.b)(e))},H=function(e){return K.a.graphql(Object(F.b)(G.a,{input:e}))},V=function(e){return L.get("products/man/".concat(e))},J=function(e){return L.get("products/woman/".concat(e))},z=function(e){return L.get("detail/".concat(e))},M=n(59),Q=function(e){return M.a.signIn(e.userName,e.password)},$=function(e){return M.a.signUp(e)},X=n(23),Y=n(9),Z=I.a.mark(te),ee=I.a.mark(ne);function te(e){var t,n,r;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(Y.b)(W,"index.json");case 4:return n=a.sent,r=n.data,a.next=8,Object(Y.d)(X.a.adaptiveSuccess(r.images[t]));case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(1),a.next=14,Object(Y.d)(X.a.adaptiveFailure(a.t0));case 14:case"end":return a.stop()}}),Z,null,[[1,10]])}function ne(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.e)([S.d[S.l]],te);case 2:case"end":return e.stop()}}),ee)}var re=I.a.mark(se),ae=I.a.mark(ie),ce=I.a.mark(le),ue=I.a.mark(fe),oe=I.a.mark(de);function se(e){var t,n;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(Y.b)(B,t);case 4:return n=r.sent,r.next=7,Object(Y.d)(X.c.awsSuccess(n));case 7:r.next=11;break;case 9:r.prev=9,r.t0=r.catch(1);case 11:case"end":return r.stop()}}),re,null,[[1,9]])}function ie(e){var t,n;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(Y.b)(H,t);case 4:n=r.sent,alert(n),r.next=10;break;case 8:r.prev=8,r.t0=r.catch(1);case 10:case"end":return r.stop()}}),ae,null,[[1,8]])}function le(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.f)([S.e[S.l]],se);case 2:case"end":return e.stop()}}),ce)}function fe(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.f)([S.h[S.l]],ie);case 2:case"end":return e.stop()}}),ue)}function de(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.a)([Object(Y.c)(le),Object(Y.c)(fe)]);case 2:case"end":return e.stop()}}),oe)}var pe=I.a.mark(he),be=I.a.mark(Oe);function he(e){var t,n,r;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:if(t=e.payload,a.prev=1,"man"!==t){a.next=8;break}return a.next=5,Object(Y.b)(V,"index.json");case 5:a.t0=a.sent,a.next=11;break;case 8:return a.next=10,Object(Y.b)(J,"index.json");case 10:a.t0=a.sent;case 11:return n=a.t0,r=n.data,a.next=15,Object(Y.d)(X.f.productsSuccess(r));case 15:a.next=21;break;case 17:return a.prev=17,a.t1=a.catch(1),a.next=21,Object(Y.d)(X.f.productsFailure(a.t1));case 21:case"end":return a.stop()}}),pe,null,[[1,17]])}function Oe(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.e)([S.g[S.l]],he);case 2:case"end":return e.stop()}}),be)}var ve=I.a.mark(je),me=I.a.mark(ge);function je(e){var t,n,r;return I.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return t=e.payload,a.prev=1,a.next=4,Object(Y.b)(z,"index.json");case 4:return n=a.sent,r=n.data,a.next=8,Object(Y.d)(X.e.detailSuccess(r[t]));case 8:a.next=14;break;case 10:return a.prev=10,a.t0=a.catch(1),a.next=14,Object(Y.d)(X.e.detailFailure(a.t0));case 14:case"end":return a.stop()}}),ve,null,[[1,10]])}function ge(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.e)([S.f[S.l]],je);case 2:case"end":return e.stop()}}),me)}var xe=n(36),_e=I.a.mark(Ce),we=I.a.mark(Re),Se=I.a.mark(Pe),Ee=I.a.mark(Ae),ke=I.a.mark(Ie),Te=I.a.mark(De),ye=I.a.mark(Ne);function Ce(e){var t,n;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(Y.b)(Q,t);case 4:return n=r.sent,console.log(n),r.next=8,xe.a.set("AUTH",n.username);case 8:return r.next=10,Object(Y.d)(X.b.loginSuccess(n));case 10:r.next=15;break;case 12:r.prev=12,r.t0=r.catch(1),alert("\uc544\uc774\ub514\uc640 \ube44\ubc00\ubc88\ud638\ub97c \ud655\uc778\ud574\uc8fc\uc138\uc694");case 15:case"end":return r.stop()}}),_e,null,[[1,12]])}function Re(e){return I.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return e.payload,t.prev=1,t.next=4,xe.a.set("AUTH","undefined");case 4:return t.next=6,Object(Y.d)(X.b.logOutSuccess());case 6:t.next=11;break;case 8:t.prev=8,t.t0=t.catch(1),alert("\ub85c\uadf8\uc544\uc6c3 \uc624\ub958");case 11:case"end":return t.stop()}}),we,null,[[1,8]])}function Pe(e){var t,n;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,Object(Y.b)($,t);case 4:return n=r.sent,r.next=7,Object(Y.d)(X.b.registerSuccess(n));case 7:r.next=12;break;case 9:r.prev=9,r.t0=r.catch(1),alert(r.t0);case 12:case"end":return r.stop()}}),Se,null,[[1,9]])}function Ae(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.f)([S.i[S.l]],Ce);case 2:case"end":return e.stop()}}),Ee)}function Ie(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.f)([S.j[S.l]],Re);case 2:case"end":return e.stop()}}),ke)}function De(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.f)([S.k[S.l]],Pe);case 2:case"end":return e.stop()}}),Te)}function Ne(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.a)([Object(Y.c)(Ae),Object(Y.c)(Ie),Object(Y.c)(De)]);case 2:case"end":return e.stop()}}),ye)}var Ue=I.a.mark(Fe),qe=I.a.mark(Ge),Le=I.a.mark(Be),We=I.a.mark(He),Ke=I.a.mark(Ve);function Fe(e){var t,n;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,(n=null===xe.a.get("CART")?[]:xe.a.get("CART")).push(t),console.log(n),r.next=7,xe.a.set("CART",n);case 7:alert("\uc7a5\ubc14\uad6c\ub2c8 \ucd94\uac00\uc644\ub8cc"),r.next=12;break;case 10:r.prev=10,r.t0=r.catch(1);case 12:case"end":return r.stop()}}),Ue,null,[[1,10]])}function Ge(e){var t,n;return I.a.wrap((function(r){for(;;)switch(r.prev=r.next){case 0:return t=e.payload,r.prev=1,r.next=4,xe.a.get("CART");case 4:return(n=r.sent).splice(t,1),console.log(n),r.next=9,xe.a.set("CART",n);case 9:r.next=13;break;case 11:r.prev=11,r.t0=r.catch(1);case 13:case"end":return r.stop()}}),qe,null,[[1,11]])}function Be(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.f)([S.a[S.l]],Fe);case 2:case"end":return e.stop()}}),Le)}function He(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.f)([S.b[S.l]],Ge);case 2:case"end":return e.stop()}}),We)}function Ve(){return I.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,Object(Y.a)([Object(Y.c)(Be),Object(Y.c)(He)]);case 2:case"end":return e.stop()}}),Ke)}var Je=[ne,de,Oe,ge,Ne,Ve];var ze=function(){var e=Object(g.a)(),t=(window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__||j.d)(Object(j.a)(e,_.a)),n=Object(j.e)(P,t);return Je.map(e.run),n}(),Me=n(94);function Qe(){var e=Object(r.a)(["\n  @font-face { font-family: 'GmarketSansBold'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansBold.woff') format('woff'); font-weight: normal; font-style: normal; }\n  @font-face { font-family: 'GmarketSansLight'; src: url('https://cdn.jsdelivr.net/gh/projectnoonnu/noonfonts_2001@1.1/GmarketSansLight.woff') format('woff'); font-weight: normal; font-style: normal; }\n  * {\n    box-sizing: border-box;\n    margin: 0;\n    padding: 0;\n  }\n  b,h2{\n    font-family: 'GmarketSansBold';\n  }\n  p{\n    font-family: 'GmarketSansLight';\n  }\n  ul {\n    list-style-type: none;\n}\n"]);return Qe=function(){return e},e}var $e=Object(Me.a)(Qe());o.a.render(c.a.createElement(O.a,{store:ze},c.a.createElement(h.a,{history:m},c.a.createElement($e,null),c.a.createElement(b,null))),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},36:function(e,t,n){"use strict";var r="object"===typeof localStorage?localStorage:{},a={set:function(e,t){r[e]=JSON.stringify(t)},get:function(e){if(!r[e])return null;var t=r[e];try{return JSON.parse(t)}catch(n){return t}},remove:function(e){delete r[e]},clear:function(){r.clear&&r.clear()}};t.a=a},42:function(e,t,n){"use strict";n.d(t,"a",(function(){return s}));var r=n(71),a=n(72),c=n(161),u=n(159),o=n(2),s=function(e){var t=function(t){Object(c.a)(s,t);var n=Object(u.a)(s);function s(t){var a;return Object(r.a)(this,s),(a=n.call(this,t)).state={Splitted:null},e().then((function(e){var t=e.default;a.setState({Splitted:t})})),a}return Object(a.a)(s,[{key:"render",value:function(){var e=this.state.Splitted;return e?o.createElement(e,this.props):null}}]),s}(o.Component);return t}}},[[170,3,4]]]);
//# sourceMappingURL=main.f31314e3.chunk.js.map