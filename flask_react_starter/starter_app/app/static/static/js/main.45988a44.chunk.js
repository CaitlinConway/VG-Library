(this.webpackJsonpclient=this.webpackJsonpclient||[]).push([[0],{31:function(e,t,a){e.exports=a(43)},36:function(e,t,a){},43:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),s=a(19),o=a.n(s),i=(a(36),a(2)),c=a.n(i),l=a(5),u=a(16),m=a(30),p=a(3),d=a(12),f=a(4);var g=function(e){return r.a.createElement(r.a.Fragment,null,r.a.createElement("strong",null,"Username:")," ",e.user.username,r.a.createElement("br",null),r.a.createElement("strong",null,"Email:")," ",e.user.email,r.a.createElement("br",null),r.a.createElement("hr",null))};var h=function(e){var t=Object(n.useState)([]),a=Object(u.a)(t,2),s=a[0],o=a[1];Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(c.a.mark((function e(){var t,a;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/");case 2:return t=e.sent,e.next=5,t.json();case 5:a=e.sent,o(a.users);case 7:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}()}),[]);var i=s.map((function(e){return r.a.createElement(g,{key:e.id,user:e})}));return console.log("____Rendering User List____"),r.a.createElement(r.a.Fragment,null,r.a.createElement("h1",null,"User List: "),i)},v="auth/login";var b=function(e,t,a,n,r){return{type:v,id:e,email:t,firstName:a,lastName:n,zipCode:r}},E=function(e,t){return function(){var a=Object(l.a)(c.a.mark((function a(n){var r,s;return c.a.wrap((function(a){for(;;)switch(a.prev=a.next){case 0:return a.next=2,fetch("/api/users/login",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({email:e,password:t})});case 2:if(!(r=a.sent).ok){a.next=8;break}return a.next=6,r.json();case 6:s=a.sent,n(b(s.id,s.email,s.firstName,s.lastName,s.zipCode));case 8:case"end":return a.stop()}}),a)})));return function(e){return a.apply(this,arguments)}}()},y=a(10),j=a(11),w=a(14),N=a(13),O=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).handleSubmit=function(e){e.preventDefault();var t=n.state,a=t.email,r=t.password;n.props.login(a,r)},n.updateEmail=function(e){n.setState({email:e.target.value})},n.updatePassword=function(e){n.setState({password:e.target.value})},n.demoUserLogin=function(e){e.preventDefault();n.props.login("guest@guest.com","password")},n.state={email:"",password:""},n}return Object(j.a)(a,[{key:"render",value:function(){if(this.props.isLoggedIn)return r.a.createElement(p.a,{to:"/"});var e=this.state,t=e.email,a=e.password;return r.a.createElement("div",{className:"login-page"},r.a.createElement("div",{className:"login-background"}),r.a.createElement("div",{className:"login-page-div"},r.a.createElement("div",{className:"login-form-header"},"Welcome!"),r.a.createElement("div",{className:"error-container"},r.a.createElement("ul",{id:"errors",className:"errors"})),r.a.createElement("div",{className:"login-form-div"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"login-form"},r.a.createElement("div",{className:"login-form-email-header"},"Email"),r.a.createElement("input",{className:"login-input",type:"email",value:t,onChange:this.updateEmail}),r.a.createElement("div",{className:"login-form-email-header"},"Password"),r.a.createElement("div",null,r.a.createElement("input",{className:"login-input",type:"password",value:a,onChange:this.updatePassword})),r.a.createElement("div",{className:"login-sign-in-button"},r.a.createElement("button",{type:"submit",className:"login-button"},"Sign In")))),r.a.createElement("form",{onSubmit:this.demoUserLogin,className:"login-sign-in-button"},r.a.createElement("button",{type:"submit",className:"login-sign-in-button"},"Demo User"))))}}]),a}(r.a.Component),k=Object(f.b)((function(e){return{isLoggedIn:!!e.auth.id}}),(function(e){return{login:function(t,a){return e(E(t,a))}}}))(O),x=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(e){var n;return Object(y.a)(this,a),(n=t.call(this,e)).updateFirstName=function(e){n.setState({firstName:e.target.value})},n.updateLastName=function(e){n.setState({lastName:e.target.value})},n.updateEmail=function(e){n.setState({email:e.target.value})},n.updateZipCode=function(e){n.setState({zipCode:e.target.value})},n.updatePassword=function(e){n.setState({password:e.target.value}),e.target.value.length<8&&e.target.value.length>0?n.setState({errors:"Your password must be at least 8 characters."}):n.setState({errors:""})},n.handleSubmit=function(){var e=Object(l.a)(c.a.mark((function e(t){var a,r,s,o,i;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:t.preventDefault(),a=n.state,r=a.firstName,s=a.lastName,o=a.email,i=a.password,a.zipCode,n.props.signUp(r,s,o,i.zipCode),"none"===document.getElementById("errors").style.display&&(window.location.href="/");case 5:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}(),n.state={firstName:"",lastName:"",email:"",password:"",zipCode:"",errors:""},n}return Object(j.a)(a,[{key:"render",value:function(){if(this.props.isLoggedIn)return r.a.createElement(p.a,{to:"/"});var e=this.state,t=e.firstName,a=e.lastName,n=e.email,s=e.password,o=e.errors;e.zipCode;return r.a.createElement("div",{className:"signup-page"},r.a.createElement("img",{src:"",alt:""}),r.a.createElement("div",{className:"signup-form-content"},r.a.createElement("div",{className:"signup-form-div"},r.a.createElement("form",{onSubmit:this.handleSubmit,className:"signup-form"},r.a.createElement("input",{className:"signup-input",type:"text",value:t,onChange:this.updateFirstName,placeholder:"First name"}),r.a.createElement("input",{className:"signup-input",type:"text",value:a,onChange:this.updateLastName,placeholder:"Last name"}),r.a.createElement("div",{className:"break"}),r.a.createElement("input",{className:"signup-input",type:"email",value:n,onChange:this.updateEmail,placeholder:"Email"}),r.a.createElement("div",{className:"break"}),r.a.createElement("input",{className:"signup-input",type:"password",value:s,onChange:this.updatePassword,placeholder:"Password (min. 10 characters)"}),r.a.createElement("div",{className:"break"}),r.a.createElement("button",{type:"submit",className:"signup-button"},"Sign up!"),r.a.createElement("span",{className:"signup-text"},"Already signed up?",r.a.createElement("a",{href:"/login",className:"login-link"},"Login to your account here."))))),r.a.createElement("div",{className:"signup-error-container"},r.a.createElement("ul",{id:"errors",className:"errors"},o)))}}]),a}(r.a.Component),C=Object(f.b)((function(e){return{isLoggedIn:!!e.auth.id}}),(function(e){return{signUp:function(t,a,n,r,s){return e(function(e,t,a,n,r){return function(){var s=Object(l.a)(c.a.mark((function s(o){var i,l;return c.a.wrap((function(s){for(;;)switch(s.prev=s.next){case 0:return s.next=2,fetch("/api/users/signup",{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify({firstName:e,lastName:t,email:a,password:n,zipCode:r})});case 2:return i=s.sent,s.next=5,i.json();case 5:i.data=s.sent,l=i.data.error,i.data.error?alert(l):i.ok&&!i.data.error&&o(b(i.data.id,i.data.email,i.data.firstName,i.data.lastName,i.data.zipCode));case 8:case"end":return s.stop()}}),s)})));return function(e){return s.apply(this,arguments)}}()}(t,a,n,r,s))},login:function(t,a){return e(E(t,a))}}}))(x),S=function(e){var t=e.console;return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"console-links"},r.a.createElement(d.b,{id:"console-name",to:"/consoles/".concat(t)},t)))},P=function(e,t){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"ConsoleFeed-div"},r.a.createElement("h1",{className:"ConsoleFeed-title"},"Consoles"),r.a.createElement("ul",{id:"ConsoleFeed"},e.consoles.map((function(e){return r.a.createElement("li",{key:e,id:"console-li"},r.a.createElement(S,{console:e,games:t}))})))))},F=function(e){return{type:"consoles",consoles:e}},L=function(e){return{type:"games",games:e}};var z=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(){var e;Object(y.a)(this,a);for(var n=arguments.length,r=new Array(n),s=0;s<n;s++)r[s]=arguments[s];return(e=t.call.apply(t,[this].concat(r))).logout=function(t){t.preventDefault(),e.props.logOut()},e}return Object(j.a)(a,[{key:"componentDidMount",value:function(){this.props.getAllConsoles()}},{key:"render",value:function(){return this.props.consoles&&void 0==this.props.user.id?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"homepage-title"},"Play With Pals"),r.a.createElement(P,{consoles:this.props.consoles.consoles,games:this.props.consoles.games}),r.a.createElement("div",{id:"welcome"},"Have you been wanting to try out the latest games but don't have money to buy them? Does your video game collection vastly exceed your free time and you wish they weren't just collecting dust? Play with Pals is here to connect friends together to share their libraries. Users can post their own video game libraries, or request to borrow a game from a friend. Want to start swapping?"),r.a.createElement("div",{id:"welcome-buttons"},r.a.createElement(d.b,{id:"join",to:"/signup"},"Join now!"),r.a.createElement(d.b,{id:"sign-in",to:"/login"},"Already a friend? Sign in here"))):this.props.consoles?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"homepage-title"},"Play With Pals"),r.a.createElement(P,{consoles:this.props.consoles.consoles,games:this.props.consoles.games}),r.a.createElement("div",{id:"welcome"},"Have you been wanting to try out the latest games but don't have money to buy them? Does your video game collection vastly exceed your free time and you wish they weren't just collecting dust? Play with Pals is here to connect friends together to share their libraries. Users can post their own video game libraries, or request to borrow a game from a friend. Want to start swapping?"),r.a.createElement("div",{id:"welcome-buttons"},r.a.createElement("button",{id:"logout-button",onClick:this.logout},"Logout"),r.a.createElement(d.b,{to:"/profile",user:this.props.user,id:"profile-button"},"Account"))):r.a.createElement(r.a.Fragment,null)}}]),a}(r.a.Component),I=Object(f.b)((function(e){return{consoles:e.games.consoles,user:e.auth}}),(function(e){return{getAllConsoles:function(){return e(function(){var e=Object(l.a)(c.a.mark((function e(t){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/games/consoles");case 2:if(!(a=e.sent).ok){e.next=8;break}return e.next=6,a.json();case 6:n=e.sent,t(F(n));case 8:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())},logOut:function(){return e(function(){var e=Object(l.a)(c.a.mark((function e(t){return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/logout",{method:"DELETE"});case 2:if(!e.sent.ok){e.next=6;break}return t({type:"auth/logout"}),e.abrupt("return","success");case 6:case"end":return e.stop()}}),e)})));return function(t){return e.apply(this,arguments)}}())}}}))(z),D=function(e){var t=e.game,a=Object(n.useState)({}),s=Object(u.a)(a,2),o=s[0],i=s[1],m=Object(n.useState)(0),p=Object(u.a)(m,2),d=p[0],f=p[1];Object(n.useEffect)((function(){function e(){return(e=Object(l.a)(c.a.mark((function e(){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/games/".concat(t));case 2:if(!(a=e.sent).ok){e.next=8;break}return e.next=6,a.json();case 6:n=e.sent,i(n[t].query.search[0].snippet);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}function a(){return(a=Object(l.a)(c.a.mark((function e(){var a,n;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/games/owners/".concat(t));case 2:if(!(a=e.sent).ok){e.next=8;break}return e.next=6,a.json();case 6:n=e.sent,f(n.owners);case 8:case"end":return e.stop()}}),e)})))).apply(this,arguments)}!function(){e.apply(this,arguments)}(),function(){a.apply(this,arguments)}()}),[t]);var g=o.toString().split('<span class="searchmatch">').join(" ").split("</span>").join().split(",").join();return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"game-feed-divs"},r.a.createElement("div",{id:"game-name"},t),r.a.createElement("div",{id:"game-blurb"},g),r.a.createElement("div",{id:"game-owner"},"Owned by: ",d)))},U=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"componentDidMount",value:function(){var e=this.props.match.params.console;this.props.getAllGames(e)}},{key:"render",value:function(){var e=this.props.match.params.console;return this.props.games&&void 0!==this.props.games[e]?r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"homepage-title"},"Play With Pals"),r.a.createElement("div",{id:"ConsoleFeed-div"},r.a.createElement("h1",{className:"ConsoleFeed-title"},e),r.a.createElement("ul",{id:"ConsoleFeed"},this.props.games[e].map((function(e){return r.a.createElement("li",{key:e,id:"console-game-li"},r.a.createElement(D,{game:e}))}))))):r.a.createElement("div",{id:"no-games"},"No games")}}]),a}(r.a.Component),A=Object(f.b)((function(e){return{games:e.games.games,user:e.auth}}),(function(e){return{getAllGames:function(t){return e(function(e){return function(){var t=Object(l.a)(c.a.mark((function t(a){var n,r;return c.a.wrap((function(t){for(;;)switch(t.prev=t.next){case 0:return t.next=2,fetch("/api/games/console/".concat(e));case 2:if(!(n=t.sent).ok){t.next=8;break}return t.next=6,n.json();case 6:r=t.sent,a(L(r));case 8:case"end":return t.stop()}}),t)})));return function(e){return t.apply(this,arguments)}}()}(t))}}}))(U),_=function(e){Object(w.a)(a,e);var t=Object(N.a)(a);function a(){return Object(y.a)(this,a),t.apply(this,arguments)}return Object(j.a)(a,[{key:"render",value:function(){return r.a.createElement(r.a.Fragment,null,r.a.createElement("div",{id:"homepage-title"},"Play With Pals"),r.a.createElement("div",{id:"profile-header"},"My Profile"))}}]),a}(r.a.Component),W=Object(f.b)((function(e){return{consoles:e.games.consoles,user:e.auth}}),(function(e){return{}}))(_),J=Object(f.b)((function(e){return{loggedIn:!!e.auth.id}}),null)((function(e){var t=e.component,a=e.loggedIn,n=Object(m.a)(e,["component","loggedIn"]);return a?r.a.createElement(p.b,Object.assign({},n,{component:t})):r.a.createElement(p.a,{to:"/"})}));var T,M=function(){var e=Object(n.useState)(!0),t=Object(u.a)(e,2),a=t[0],s=t[1],o=Object(f.c)();return Object(n.useEffect)((function(){(function(){var e=Object(l.a)(c.a.mark((function e(){var t;return c.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,fetch("/api/users/current");case 2:if(!(t=e.sent).ok){e.next=8;break}return e.next=6,t.json();case 6:t.data=e.sent,o(b(t.data.userId,t.data.userEmail,t.data.userFirstName,t.data.userLastName,t.data.zipCode));case 8:s(!1);case 9:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[o]),a?null:r.a.createElement(d.a,null,r.a.createElement(p.d,null,r.a.createElement(p.b,{path:"/login",render:function(e){return r.a.createElement(k,e)}}),r.a.createElement(p.b,{path:"/signup",component:C}),r.a.createElement(p.b,{path:"/consoles/:console",render:function(e){return r.a.createElement(A,e)}}),r.a.createElement(p.b,{exact:!0,path:"/",render:function(e){return r.a.createElement(I,e)}}),r.a.createElement(p.b,{path:"/users"},r.a.createElement(h,null)),r.a.createElement(J,{path:"/profile",render:function(e){return r.a.createElement(W,e)}})))},q=a(15),B=a(28),G=Object(q.c)({auth:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case v:return a.id=t.id,a.email=t.email,a.firstName=t.firstName,a.lastName=t.lastName,a.zipCode=t.zipCode,a;case"auth/logout":return{};default:return e}},games:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0,a=Object.assign({},e);switch(t.type){case"consoles":return a.consoles=t.consoles,a;case"games":return a.games=t.games,a;default:return e}}}),H=a(29),R=a.n(H);T=Object(q.a)(B.a,R.a);var Y=function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{};return Object(q.d)(G,e,T)}();o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(f.a,{store:Y},r.a.createElement(M,null))),document.getElementById("root"))}},[[31,1,2]]]);
//# sourceMappingURL=main.45988a44.chunk.js.map