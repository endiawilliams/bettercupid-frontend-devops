(this["webpackJsonpgamelib-client"]=this["webpackJsonpgamelib-client"]||[]).push([[0],{28:function(e,t,c){},34:function(e,t,c){},35:function(e,t,c){"use strict";c.r(t);var n=c(0),a=c(1),s=c.n(a),i=c(20),r=c.n(i),o=c(5),l=(c(28),c(2)),j=function(e){return Object(n.jsxs)("header",{className:"navbar",children:[Object(n.jsx)("div",{children:Object(n.jsxs)("ul",{children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/",className:"logo",children:"BetterCupid"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/about",className:"about-link",children:"About"})})]})}),Object(n.jsx)("div",{className:"links",children:Object(n.jsx)("ul",{children:e.currentUser?Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/browse",children:"Browse"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/matches",children:"Matches"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/profile",children:"Profile"})}),Object(n.jsx)("li",{children:Object(n.jsx)("a",{href:"/logout",onClick:e.logout,children:"Log Out"})})]}):Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/browse",children:"Browse"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/register",children:"Register"})}),Object(n.jsx)("li",{children:Object(n.jsx)(o.b,{to:"/login",children:"Login"})})]})})})]})},d=function(){return Object(n.jsx)("p",{children:"You must be 18 or older to use this site."})},u=c(9),b=c(22),h=c(3),m=function(){var e=["I hate to see you go, I love to watch you leave. - John Travolta","Gimme some sugar, baby. - Bruce Campbell","It is better to be hated for what you are than to be loved for what you're not. - Andre Gide","You are everything I never knew I always wanted. - Matthew Perry","The best thing to hold onto in life is each other. - Audrey Hepburn","Love is the absence of judgement. - Dalai Lama","To be brave is to love someone unconditionally, without expecting anything in return. - Madonna ","You know you're in love when you can't fall asleep because the reality is finally better than your dreams. - Dr Seuss"],t=e[Math.floor(Math.random()*e.length)];return Object(n.jsx)("h1",{className:"quote text-center",children:t})},f=function(){return Object(n.jsxs)("div",{className:"about-page",children:[Object(n.jsx)("h1",{children:"Who We Are"}),Object(n.jsx)("p",{children:"BetterCupid was created to provide a neutral platform where people of all different orientations, identities and backgrounds can find each other and make connections. This isn't a site that's primarily for straight and cisgender individuals where LGBTQ+ identities are tacked on as a feature after the fact, but it's also not specifically for LGBTQ+ individuals either. With a wide variety of features and a modular approach to design, we've got something for everyone."})]})},p=function(e){console.log(e.match);return Object(n.jsxs)("div",{className:"card flex-row flex-wrap user-info",children:[Object(n.jsx)("div",{className:"card-header border-0",children:null!==e.match.image&&void 0!==e.match.image&&""!==e.match.image?Object(n.jsx)("img",{src:e.match.image,height:"180px",width:"180px",alt:"image"}):Object(n.jsx)("img",{src:"https://i.imgur.com/4Zx85np.png",height:"180px",width:"180px",alt:"user icon"})}),Object(n.jsxs)("div",{className:"card-block info-card-text",children:[Object(n.jsx)("h4",{className:"card-title",children:e.match.display_name}),Object(n.jsx)("div",{className:"card-text",children:Object(n.jsxs)("p",{children:[e.match.city,", ",e.match.state]})}),Object(n.jsx)(o.b,{to:"/profile/"+e.match.userId,className:"btn pink-button info-card-button",children:"View Profile"})]})]})},O=c(11),x=c(12),g="https://bettercupidapi.endia.dev/api/v1",v=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,null,[{key:"likeUser",value:function(e,t){return fetch("".concat(g,"/relationship/").concat(t),{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()}))}},{key:"unlikeUser",value:function(e,t){return fetch("".concat(g,"/relationship/").concat(t),{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()}))}},{key:"checkLikeStatus",value:function(e,t){return fetch("".concat(g,"/relationship/").concat(t),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()}))}},{key:"findMatches",value:function(){return fetch("".concat(g,"/relationship"),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()}))}}]),e}(),y=function(e){var t=Object(a.useState)([]),c=Object(l.a)(t,2),s=c[0],i=c[1];return Object(a.useEffect)((function(){v.findMatches().then((function(e){i(e),console.log(JSON.stringify(e))}))}),[]),console.log(s),Object(n.jsx)("div",{className:"profile-container",children:s.map((function(e,t){return Object(n.jsx)(p,{match:e},t)}))})},N="https://bettercupidapi.endia.dev/api/v1",w=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,null,[{key:"create",value:function(e){return fetch("".concat(N,"/auth/register"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e)}).then((function(e){return e.json()}))}},{key:"login",value:function(e){return fetch("".concat(N,"/auth/login"),{method:"POST",headers:{"Content-Type":"application/json"},body:JSON.stringify(e),credentials:"include"}).then((function(e){return e.json()}))}},{key:"logout",value:function(){return fetch("".concat(N,"/auth/logout"),{method:"DELETE",credentials:"include"})}},{key:"deleteUser",value:function(e){return fetch("".concat(N,"/auth/delete"),{method:"DELETE",credentials:"include",body:JSON.stringify(e)})}}]),e}(),S=function(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1],u=Object(a.useState)(""),b=Object(l.a)(u,2),h=b[0],m=b[1],f=Object(a.useState)(""),p=Object(l.a)(f,2),O=p[0],x=p[1],g=Object(a.useState)(""),v=Object(l.a)(g,2),y=v[0],N=v[1],S=Object(a.useState)(""),k=Object(l.a)(S,2);k[0],k[1];return Object(n.jsxs)("div",{className:"register-form card",children:[Object(n.jsx)("h4",{className:"register-header",children:"Register"}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),Date.now()-y<568025136e3&&console.log("Sorry, you must be 18 to use this site"),h===O&&w.create({name:s,email:j,password:h,birthday:y}).then((function(t){console.log("Successful register",t),e.history.push("/login")}))},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"name",className:"col-form-label",children:"Name"}),Object(n.jsx)("div",{className:"col-sm-10",children:Object(n.jsx)("input",{onChange:function(e){i(e.target.value)},value:s,type:"text",id:"name",name:"name",required:!0})})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"email",className:"col-form-label",children:"Email"}),Object(n.jsx)("div",{className:"col-sm-10",children:Object(n.jsx)("input",{onChange:function(e){d(e.target.value)},value:j,type:"email",id:"email",name:"email",required:!0})})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"password",className:"col-form-label",children:"Password"}),Object(n.jsx)("div",{className:"col-sm-10",children:Object(n.jsx)("input",{onChange:function(e){m(e.target.value)},value:h,type:"password",id:"password",name:"password",required:!0})})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"confirm-password",className:"col-form-label",children:"Confirm Password"}),Object(n.jsx)("div",{className:"col-sm-10",children:Object(n.jsx)("input",{onChange:function(e){x(e.target.value)},value:O,type:"password",id:"confirm-password",name:"confirm-password",required:!0})})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"birthday",className:"col-form-label",children:"Birthday"}),Object(n.jsx)("div",{className:"col-sm-10 wide-inputs",children:Object(n.jsx)("input",{onChange:function(e){N(e.target.value)},value:y,type:"date",id:"birthday",name:"birthday",required:!0})})]}),Object(n.jsx)("button",{type:"submit",className:"btn pink-button register-button",children:"Register"})]})]})},k=function(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1];return e.currentUser?Object(n.jsx)(h.a,{to:"/profile"}):Object(n.jsxs)("div",{className:"login-form card",children:[Object(n.jsx)("h4",{className:"login-header",children:"Login"}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),w.login({email:s,password:j}).then((function(t){if(!t.user)return console.log("Login Unsuccessful"),!1;e.storeUser(t.user)})).catch((function(e){return console.log("Login Error",e)}))},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"email",className:"col-form-label",children:"Email"}),Object(n.jsx)("div",{className:"col-sm-10",children:Object(n.jsx)("input",{onChange:function(e){i(e.target.value)},value:s,type:"email",id:"email",name:"email",required:!0})})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"password",className:"col-form-label",children:"Password"}),Object(n.jsx)("div",{className:"col-sm-10",children:Object(n.jsx)("input",{onChange:function(e){d(e.target.value)},value:j,type:"password",id:"password",name:"password",required:!0})})]}),Object(n.jsx)("button",{type:"submit",className:"btn pink-button login-button",children:"Login"})]})]})},U="https://bettercupidapi.endia.dev/api/v1",C=function(){function e(){Object(O.a)(this,e)}return Object(x.a)(e,null,[{key:"getAllProfiles",value:function(e){return fetch("".concat(U,"/profile/browse"),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()}))}},{key:"getOwnProfile",value:function(){return fetch("".concat(U,"/profile"),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()}))}},{key:"viewProfile",value:function(e){return fetch("".concat(U,"/profile/").concat(e),{method:"GET",headers:{"Content-Type":"application/json"},credentials:"include"}).then((function(e){return e.json()}))}},{key:"createProfile",value:function(e){return fetch("".concat(U,"/profile"),{method:"POST",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()}))}},{key:"editProfile",value:function(e){return fetch("".concat(U,"/profile/").concat(e.id),{method:"PUT",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()}))}},{key:"deleteProfile",value:function(e){return fetch("".concat(U,"/profile"),{method:"DELETE",headers:{"Content-Type":"application/json"},credentials:"include",body:JSON.stringify(e)}).then((function(e){return e.json()}))}}]),e}(),T=function(e){var t=Object(a.useState)(!1),c=Object(l.a)(t,2),s=c[0],i=c[1],r=e.targetProfile,o=e.currentUser,j=function(){v.checkLikeStatus({currentUser:o},r).then(i)};Object(a.useEffect)((function(){j()}),[e.targetProfile]);console.log(e.image);return Object(n.jsxs)("div",{className:"card flex-row flex-wrap user-info",children:[Object(n.jsx)("div",{className:"card-header border-0",children:null!==e.image&&void 0!==e.image&&""!==e.image?Object(n.jsx)("img",{src:e.image,height:"180px",width:"180px",alt:"image"}):Object(n.jsx)("img",{src:"https://i.imgur.com/4Zx85np.png",height:"180px",width:"180px",alt:"user icon"})}),Object(n.jsxs)("div",{className:"card-block info-card-text",children:[Object(n.jsx)("h4",{className:"card-title",children:e.displayName}),Object(n.jsxs)("div",{className:"card-text",children:[Object(n.jsx)("p",{children:e.age}),Object(n.jsxs)("p",{children:[e.city,", ",e.state]})]}),Object(n.jsx)("a",{href:"#",className:"info-card-button",onClick:function(){return function(e){s?v.unlikeUser({currentUser:e},r).then((function(){return j()})):v.likeUser({currentUser:e},r).then((function(){return j()}))}(e.currentUser)},children:s?Object(n.jsx)("img",{src:"https://i.imgur.com/7LesXMV.png",height:"20px",width:"20px",alt:"heart"}):Object(n.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/1077/1077035.svg",height:"20px",width:"20px",alt:"heart"})}),Object(n.jsx)("a",{href:"#",className:"info-card-button",children:Object(n.jsx)("img",{src:"https://www.flaticon.com/svg/static/icons/svg/1077/1077071.svg",height:"20px",width:"20px",alt:"message"})})]})]})},P=function(e){return Object(n.jsxs)("div",{className:"card flex-wrap about-me",children:[Object(n.jsx)("h4",{className:"card-title",children:"About Me"}),Object(n.jsx)("p",{className:"card-text",children:e.aboutMe})]})},E=function(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1],u=Object(a.useState)(""),b=Object(l.a)(u,2),h=b[0],m=b[1],f=Object(a.useState)(""),p=Object(l.a)(f,2),O=p[0],x=p[1],g=Object(a.useState)(""),v=Object(l.a)(g,2),y=v[0],N=v[1],w=Object(a.useState)(""),S=Object(l.a)(w,2),k=S[0],U=S[1],E=function(){C.viewProfile(e.match.params.id).then((function(e){console.log(e.profile),i(e.profile.display_name),d(e.profile.age),m(e.profile.city),x(e.profile.state),N(e.profile.image),U(e.profile.about_me)}))};return Object(a.useEffect)((function(){E()}),[]),Object(n.jsxs)("div",{className:"profile-container",children:[Object(n.jsx)(T,{displayName:s,age:j,city:h,state:O,image:y,currentUser:e.currentUser,targetProfile:e.match.params.id,viewProfile:E}),Object(n.jsx)(P,{aboutMe:k})]})},L=function(e){var t=Object(a.useState)(!1),c=Object(l.a)(t,2);c[0],c[1],e.targetProfile,e.currentUser;return Object(n.jsxs)("div",{className:"card flex-row flex-wrap user-info",children:[Object(n.jsx)("div",{className:"card-header border-0",children:null!==e.image&&void 0!==e.image&&""!==e.image?Object(n.jsx)("img",{src:e.image,height:"180px",width:"180px",alt:"image"}):Object(n.jsx)("img",{src:"https://i.imgur.com/4Zx85np.png",height:"180px",width:"180px",alt:"user icon"})}),Object(n.jsxs)("div",{className:"card-block info-card-text",children:[Object(n.jsx)("h4",{className:"card-title",children:e.displayName}),Object(n.jsxs)("div",{className:"card-text",children:[Object(n.jsx)("p",{children:e.age}),Object(n.jsxs)("p",{children:[e.city,", ",e.state]})]}),Object(n.jsx)("a",{href:"/profile/edit",className:"btn pink-button info-card-button",children:"Edit"}),Object(n.jsx)("a",{href:"/",className:"btn pink-button info-card-button",onClick:function(){w.deleteUser({}).then(C.deleteProfile({}).then(localStorage.clear()))},children:"Delete"})]})]})},I=function(e){var t=Object(a.useState)(""),c=Object(l.a)(t,2),s=c[0],i=c[1],r=Object(a.useState)(""),o=Object(l.a)(r,2),j=o[0],d=o[1],u=Object(a.useState)(""),b=Object(l.a)(u,2),h=b[0],m=b[1],f=Object(a.useState)(""),p=Object(l.a)(f,2),O=p[0],x=p[1],g=Object(a.useState)(""),v=Object(l.a)(g,2),y=v[0],N=v[1],w=Object(a.useState)(""),S=Object(l.a)(w,2),k=S[0],U=S[1];return Object(a.useEffect)((function(){C.getOwnProfile().then((function(e){e&&(i(e.display_name),d(e.age),m(e.city),x(e.state),U(e.about_me),N(e.image))}))}),[]),console.log(s),Object(n.jsxs)("div",{className:"profile-container",children:[Object(n.jsx)(L,{displayName:s,age:j,city:h,state:O,image:y}),Object(n.jsx)(P,{aboutMe:k})]})},_=function(e){return console.log(e.image),Object(n.jsxs)("div",{className:"card flex-row flex-wrap user-info",children:[Object(n.jsx)("div",{className:"card-header border-0",children:null!==e.image&&void 0!==e.image&&""!==e.image?Object(n.jsx)("img",{src:e.image,height:"180px",width:"180px",alt:"image"}):Object(n.jsx)("img",{src:"https://i.imgur.com/4Zx85np.png",height:"180px",width:"180px",alt:"user icon"})}),Object(n.jsxs)("div",{className:"card-block info-card-text",children:[Object(n.jsx)("h4",{className:"card-title",children:e.displayName}),Object(n.jsx)("div",{className:"card-text",children:Object(n.jsxs)("p",{children:[e.city,", ",e.state]})}),Object(n.jsx)(o.b,{to:"/profile/"+e.userId,className:"btn pink-button info-card-button",children:"View Profile"})]})]})},F=function(e){var t=Object(a.useState)([]),c=Object(l.a)(t,2),s=(c[0],c[1],Object(a.useState)("")),i=Object(l.a)(s,2),r=i[0],o=i[1],j=Object(a.useState)(""),d=Object(l.a)(j,2),u=(d[0],d[1],Object(a.useState)("")),b=Object(l.a)(u,2),h=b[0],m=b[1],f=Object(a.useState)(""),p=Object(l.a)(f,2),O=p[0],x=p[1],g=Object(a.useState)(""),v=Object(l.a)(g,2),y=v[0],N=v[1],w=Object(a.useState)(""),S=Object(l.a)(w,2),k=S[0],U=S[1],T=[],P=[],E=[],L=[],I=[];return console.log("The userIds: "+y),Object(a.useEffect)((function(){C.getAllProfiles().then((function(e){for(var t=0;t<e.profiles.length;t++)T.push(e.profiles[t].display_name),P.push(e.profiles[t].city),E.push(e.profiles[t].state),L.push(e.profiles[t].userId),I.push(e.profiles[t].image);o(T),m(P),x(E),N(L),U(I),console.log(e.profiles)}))}),[]),Object(n.jsxs)("div",{className:"profile-container",children:[Object(n.jsx)(_,{displayName:r[0],city:h[0],state:O[0],userId:y[0],image:k[0]}),Object(n.jsx)(_,{displayName:r[1],city:h[1],state:O[1],userId:y[1],image:k[1]}),Object(n.jsx)(_,{displayName:r[2],city:h[2],state:O[2],userId:y[2],image:k[2]})]})},M=c(14),D=function(e){var t=Object(a.useState)({}),c=Object(l.a)(t,2),s=c[0],i=c[1];Object(a.useEffect)((function(){C.getOwnProfile().then((function(e){e&&i(e)}))}),[]);var r=function(e){i(Object(u.a)(Object(u.a)({},s),{},Object(M.a)({},e.target.name,e.target.value)))};return Object(n.jsxs)("div",{className:"edit-profile-form card",children:[Object(n.jsx)("h4",{className:"edit-profile-header",children:"Edit Profile"}),Object(n.jsxs)("form",{onSubmit:function(t){t.preventDefault(),C.editProfile(s).then((function(t){console.log("Successfully updated profile",t),e.history.push("/profile")}))},children:[Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"display_name",className:"col-form-label",children:"Display Name"}),Object(n.jsx)("div",{className:"col-sm-10",children:Object(n.jsx)("input",{onChange:r,value:s.display_name?s.display_name:"",type:"text",id:"display_name",name:"display_name"})})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"gender",className:"col-form-label",children:"Gender"}),Object(n.jsx)("div",{className:"col-sm-10",children:Object(n.jsx)("input",{onChange:r,value:s.gender?s.gender:"",type:"text",id:"gender",name:"gender"})})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"image",className:"col-form-label",children:"Profile Picture (URL)"}),Object(n.jsx)("div",{className:"col-sm-10",children:Object(n.jsx)("input",{onChange:r,value:s.image?s.image:"",type:"text",id:"image",name:"image"})})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"city",className:"col-form-label",children:"City"}),Object(n.jsx)("div",{className:"col-sm-10",children:Object(n.jsx)("input",{onChange:r,value:s.city?s.city:"",type:"text",id:"city",name:"city"})})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"state",className:"col-form-label",children:"State"}),Object(n.jsx)("div",{className:"col-sm-10",children:Object(n.jsx)("input",{onChange:r,value:s.state?s.state:"",type:"text",id:"state",name:"state"})})]}),Object(n.jsxs)("div",{className:"form-group",children:[Object(n.jsx)("label",{htmlFor:"about_me",className:"col-form-label",children:"About Me"}),Object(n.jsx)("div",{className:"col-sm-10",children:Object(n.jsx)("input",{onChange:r,value:s.about_me?s.about_me:"",type:"text",id:"about_me",name:"about_me"})})]}),Object(n.jsx)("button",{type:"submit",className:"btn pink-button submit-button",children:"Submit"})]})]})},J=function(e){var t=e.component,c=Object(b.a)(e,["component"]),a=localStorage.getItem("id");return Object(n.jsx)(h.b,Object(u.a)(Object(u.a)({},c),{},{render:function(e){return a?Object(n.jsx)(t,Object(u.a)(Object(u.a)({},c),e)):Object(n.jsx)(h.a,{to:"/login"})}}))},G=function(e){return Object(n.jsxs)(h.d,{children:[Object(n.jsx)(h.b,{exact:!0,path:"/",component:m}),Object(n.jsx)(h.b,{path:"/about",component:f}),Object(n.jsx)(J,{path:"/matches",component:y,currentUser:e.currentUser}),Object(n.jsx)(h.b,{path:"/browse",component:F}),Object(n.jsx)(h.b,{path:"/register",component:S}),Object(n.jsx)(J,{path:"/profile/edit",component:D,currentUser:e.currentUser}),Object(n.jsx)(h.b,{path:"/login",render:function(t){return Object(n.jsx)(k,Object(u.a)(Object(u.a)({},t),{},{currentUser:e.currentUser,storeUser:e.storeUser}))}}),Object(n.jsx)(J,{path:"/profile/:id",component:E,currentUser:e.currentUser}),Object(n.jsx)(J,{path:"/profile",component:I,currentUser:e.currentUser}),Object(n.jsx)(h.b,{path:"/browse",component:F})]})};c(34);var A=function(){var e=Object(a.useState)(localStorage.getItem("id")),t=Object(l.a)(e,2),c=t[0],s=t[1];return Object(n.jsxs)("div",{className:"App",children:[Object(n.jsx)(j,{currentUser:c,logout:function(e){e.preventDefault(),localStorage.removeItem("id"),w.logout().then((function(e){s(null)}))}}),Object(n.jsx)(G,{currentUser:c,storeUser:function(e){localStorage.setItem("id",e),s(e)}}),Object(n.jsx)(d,{})]})};r.a.render(Object(n.jsx)(s.a.StrictMode,{children:Object(n.jsx)(o.a,{children:Object(n.jsx)(A,{})})}),document.getElementById("root"))}},[[35,1,2]]]);
//# sourceMappingURL=main.42a20770.chunk.js.map