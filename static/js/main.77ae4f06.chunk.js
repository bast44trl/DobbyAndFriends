(this.webpackJsonpDobbyAndFriends=this.webpackJsonpDobbyAndFriends||[]).push([[0],{106:function(e,t,c){},107:function(e,t,c){},108:function(e,t,c){},109:function(e,t,c){"use strict";c.r(t);var s=c(1),a=c.n(s),r=c(38),n=c.n(r),i=c(12),o=c(4),l=(c(51),c(3)),j=c.p+"static/media/logo_footer.7c23c9a8.png",h=c(0),u=function(){var e=Object(o.f)();return Object(h.jsxs)("div",{className:"footer-container",children:[Object(h.jsxs)("div",{className:"footer-container-column",children:[Object(h.jsx)("div",{className:"footer-column",children:Object(h.jsxs)(l.a,{to:"".concat(e.pathname,"#root"),children:[Object(h.jsx)("img",{src:j,className:"cursor",alt:"logo du footer"})," "]})}),Object(h.jsxs)("div",{className:"footer-column",children:[Object(h.jsx)("h3",{children:"Dobby and his friends"}),Object(h.jsx)(l.a,{className:"cursor nav-link",to:"/#root",children:"Home"}),Object(h.jsx)(l.a,{className:"cursor nav-link",to:"/quiz#root",children:"Quiz"}),Object(h.jsx)(l.a,{className:"cursor nav-link",to:"/favorite#root",children:"Character"}),Object(h.jsx)(l.a,{className:"cursor nav-link",to:"/library#root",children:"Library"}),Object(h.jsx)(l.a,{className:"cursor nav-link",to:"/contact#root",children:"Contact us"})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"footer-column",children:[Object(h.jsx)("h3",{children:"WarnerBros's Wizarding World"}),Object(h.jsxs)("a",{className:"cursor nav-link",href:"https://wizardingworld.warnerbros.fr/",target:"_blank",rel:"noreferrer",children:[" ","Official website"]})]}),Object(h.jsx)("hr",{}),Object(h.jsxs)("div",{className:"footer-column",children:[Object(h.jsx)("h3",{children:"GitHub links"}),Object(h.jsx)("a",{target:"_blank",className:"cursor nav-link",href:"https://github.com/bast44trl",rel:"noreferrer",children:"Bastien"}),Object(h.jsxs)("a",{target:"_blank",className:"cursor nav-link",href:"https://github.com/Just4Joy",rel:"noreferrer",children:["Laurent"," "]}),Object(h.jsxs)("a",{className:"cursor nav-link",href:"https://github.com/ChleaBourtoule",target:"_blank",rel:"noreferrer",children:["Chl\xe9a"," "]}),Object(h.jsx)("a",{className:"cursor nav-link",href:"https://github.com/amandine-ctns",target:"_blank",rel:"noreferrer",children:"Amandine"})]})]}),Object(h.jsx)("div",{className:"footer-container-h4",children:Object(h.jsx)("p",{children:"HARRY POTTER characters, names and related indicia are \xa9 ' \u2122 Warner Bros. Entertainment Inc. J.K. ROWLING'S WIZARDING WORLD \u2122 J.K. Rowling and Warner Bros. Entertainment Inc. Publishing Rights \xa9 JKR. (s18)"})})]})},d=(c(60),c.p+"static/media/harry-potter-flying.5b71d52f.png"),b=function(e){var t=e.result;return Object(h.jsx)("div",{className:"result-page",children:Object(h.jsxs)("div",{className:"result-section",children:[Object(h.jsxs)("h2",{children:["Your final score is ",t,"/5"]}),Object(h.jsx)("img",{src:d,id:"harry-flying",alt:"Harry flying on his brum"}),5===t?Object(h.jsxs)("div",{className:"final-score-5-div",children:[Object(h.jsx)("h3",{children:"Congratulations, you are a true wizard from Hogwarts !!"}),Object(h.jsx)("p",{children:"Dobby is very proud of you"})]}):Object(h.jsxs)("div",{className:"final-score-div",children:[Object(h.jsx)("h3",{children:"Keep on training !"}),Object(h.jsx)("p",{children:"Dobby has faith in you !"})]}),Object(h.jsx)("button",{type:"button",className:"play-again-button cursor",children:Object(h.jsx)(l.a,{className:"nav-link",exact:!0,to:"/quiz#root",children:"Try again"})})]})})};b.defaultProps={result:0};var m=b,O=c(45),f=c(16),x=c.n(f),p=c(22),v=c(2),g=c(15),N=c.n(g),y=(c(80),c(41)),w=c(42),k=c(46),S=c(44),C=c.p+"static/media/harryPotterPhotoBomb.e807cb51.jpg",z=function(e){var t,c=e.buttonNb,a=e.house,r=e.houseUpperCase,n=e.logo,i=e.characterHouse,o=e.checkCorrectAnswer,l=Object(s.useState)(""),j=Object(v.a)(l,2),u=j[0],d=j[1],b=Object(s.useState)(!1),m=Object(v.a)(b,2),O=m[0],f=m[1];return Object(h.jsxs)("button",{type:"button",id:"button-".concat(c),value:r,className:(t=u,O?t===i?"answer cursor true-answer":"answer cursor wrong-answer":"answer cursor"),onClick:function(e){f(!0),d(e.target.value),setTimeout((function(){o(e.target.value),d(""),f(!1)}),500)},children:[r,Object(h.jsx)("img",{className:"house cursor",id:"".concat(a,"Img"),src:n,alt:"".concat(a," logo")})]})};z.defaultProps={buttonNb:1,house:"house",houseUpperCase:"House",characterHouse:"house",logo:C,checkCorrectAnswer:function(){}};var A=z,q=c.p+"static/media/gryffindor.64055a7b.png",H=c.p+"static/media/ravenclaw.9610bcde.png",D=c.p+"static/media/hufflepuff.dc9c2866.png",P=c.p+"static/media/slytherin.2f1ae136.png",E=function(e){Object(k.a)(c,e);var t=Object(S.a)(c);function c(e){var s;return Object(y.a)(this,c),(s=t.call(this,e)).state={},s}return Object(w.a)(c,[{key:"render",value:function(){var e=this.props,t=e.characterName,c=e.characterImg,s=e.characterHouse,a=e.checkCorrectAnswer,r=e.trueAnswer,n=e.setTrueAnswer,i=[{key:1,houseUpperCase:"Gryffindor",house:"gryffindor",logo:q},{key:2,houseUpperCase:"Hufflepuff",house:"hufflepuff",logo:D},{key:3,houseUpperCase:"Ravenclaw",house:"ravenclaw",logo:H},{key:4,houseUpperCase:"Slytherin",house:"slytherin",logo:P}];return Object(h.jsxs)("div",{className:"img-question-answers",children:[Object(h.jsx)("div",{className:"img",children:Object(h.jsx)("img",{src:c||C,alt:""})}),Object(h.jsxs)("div",{className:"question-answers",children:[Object(h.jsx)("div",{className:"question",children:Object(h.jsxs)("p",{children:["Can you guess the house"," ",""===t?" this character ":t," ","belongs to ?"]})}),Object(h.jsx)("div",{className:"answers",children:i.map((function(e,t){return Object(h.jsx)(A,{buttonNb:t+1,house:e.house,houseUpperCase:e.houseUpperCase,logo:e.logo,characterHouse:s,checkCorrectAnswer:function(e){return a(e)},trueAnswer:r,setTrueAnswer:n},e.house)}))})]})]})}}]),c}(a.a.Component);E.defaultProps={characterName:"this character",characterImg:C,characterHouse:"house",trueAnswer:"normal",checkCorrectAnswer:function(){},setTrueAnswer:function(){}};var L=E,T=function(){var e=Object(s.useState)([]),t=Object(v.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)("this character"),n=Object(v.a)(r,2),i=n[0],o=n[1],l=Object(s.useState)("photoTest"),j=Object(v.a)(l,2),u=j[0],d=j[1],b=Object(s.useState)(""),f=Object(v.a)(b,2),g=f[0],y=f[1],w=Object(s.useState)(0),k=Object(v.a)(w,2),S=k[0],C=k[1],z=Object(s.useState)(0),A=Object(v.a)(z,2),q=A[0],H=A[1],D=Object(s.useState)("normal"),P=Object(v.a)(D,2),E=P[0],T=P[1],I=Object(s.useState)(!1),U=Object(v.a)(I,2),_=U[0],F=U[1],R=Object(s.useState)([]),W=Object(v.a)(R,2),B=W[0],G=W[1];Object(s.useEffect)(Object(p.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("https://hp-api.herokuapp.com/api/characters").then((function(e){return e.data})).then((function(e){a(e.filter((function(e){return e.house&&e.image})))}));case 2:case"end":return e.stop()}}),e)}))),[]),Object(s.useEffect)((function(){if(c.length>1){for(var e=Math.floor(Math.random()*c.length);B.includes(e);)e=Math.floor(Math.random()*c.length);G([].concat(Object(O.a)(B),[e])),o(c[e].name),y(c[e].house),d(c[e].image)}}),[_,q]);return Object(h.jsx)("div",{className:"quiz-page",children:q<5?Object(h.jsxs)("div",{className:"quiz-start",children:[Object(h.jsx)("div",{className:"quiz-rules",children:Object(h.jsx)("h2",{children:"Answer 5 questions and find out how well you know Dobby's friends"})}),_?Object(h.jsx)(L,{checkCorrectAnswer:function(e){return function(e){e===g?(C(S+1),H(q+1),T(null)):(H(q+1),T(null))}(e)},characterName:i,characterImg:u,characterHouse:g,trueAnswer:E,setTrueAnswer:T}):Object(h.jsx)("button",{className:"cursor",type:"button",id:"start",onClick:function(){return F(!_)},children:"Start"})]}):Object(h.jsx)(m,{result:S})})},I=(c(81),c.p+"static/media/have-you-seen-this-wizard.2b9687fa.jpg"),U=c.p+"static/media/dobby-img.65b02575.jpg",_=function(e){var t=e.name,c=e.dateOfBirth,s=e.species,a=e.house,r=e.image,n=e.wand,i=e.patronus,o=e.ancestry,l=e.font;return Object(h.jsx)("div",{className:"flip-card",children:Object(h.jsxs)("div",{className:"flip-card-inner",children:[Object(h.jsxs)("div",{className:"card flip-card-front",children:[Object(h.jsx)("div",{className:"card-img",children:"Dobby"===t?Object(h.jsx)("img",{alt:t,src:U}):r||"Dobby"===t?Object(h.jsx)("img",{alt:t,src:r}):Object(h.jsx)("img",{alt:t,src:I})}),Object(h.jsxs)("div",{className:"card-details",style:l,children:[Object(h.jsx)("h2",{children:t}),Object(h.jsxs)("div",{children:["Date of Birth: ",c]}),Object(h.jsxs)("div",{children:["Species: ",s]}),Object(h.jsxs)("div",{children:["House: ",a]})]})]}),Object(h.jsx)("div",{className:"card flip-card-back",children:Object(h.jsxs)("div",{className:"card-details",style:l,children:[Object(h.jsx)("h2",{children:t}),i?Object(h.jsxs)("div",{children:["Patronus: ",i]}):Object(h.jsx)("div",{children:"Patronus: Not provided"}),n.wood||n.core||n.length?Object(h.jsxs)("div",{children:["Wand:",n.wood?Object(h.jsxs)("li",{children:["Wood: Made of ",n.wood]}):Object(h.jsx)("li",{children:"Wood: Not provided"}),n.core?Object(h.jsxs)("li",{children:["Core: Made of ",n.core]}):Object(h.jsx)("li",{children:"Core: Not provided"}),n.length?Object(h.jsxs)("li",{children:["Length: ",n.length,"'"]}):Object(h.jsx)("li",{children:"Length: Not provided"})]}):Object(h.jsx)("div",{children:"Wand: Not provided"}),o?Object(h.jsxs)("div",{children:["Ancestry: ",o]}):Object(h.jsx)("div",{children:"Ancestry: Not provided"})]})})]})})};_.defaultProps={name:"Harry",dateOfBirth:"17/12/200",species:"human",house:"Gryffindor",image:"",wand:{core:"",wood:"",length:""},patronus:"stag",ancestry:"half-blood",font:{color:"black"}};var F=_,R=(c(82),function(){var e=Object(s.useState)([]),t=Object(v.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)([]),n=Object(v.a)(r,2),i=n[0],o=n[1],l=Object(s.useState)([]),j=Object(v.a)(l,2),u=j[0],d=j[1],b=Object(s.useState)([]),m=Object(v.a)(b,2),O=m[0],f=m[1],g=Object(s.useState)([]),y=Object(v.a)(g,2),w=y[0],k=y[1],S=Object(s.useState)([]),C=Object(v.a)(S,2),z=C[0],A=C[1],q=Object(s.useState)([]),H=Object(v.a)(q,2),D=H[0],P=H[1],E=Object(s.useState)(!1),L=Object(v.a)(E,2),T=L[0],I=L[1],U=[],_=[],R=[];function W(e){switch(e.target.name){case"house":k(e.target.value);break;case"species":A(e.target.value);break;case"ancestry":P(e.target.value)}}return Object(s.useEffect)(Object(p.a)(x.a.mark((function e(){return x.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,N.a.get("http://hp-api.herokuapp.com/api/characters").then((function(e){return e.data})).then((function(e){return a(e)}));case 2:case"end":return e.stop()}}),e)}))),[]),Object(s.useEffect)((function(){for(var e=0;e<c.length;e+=1)Object.entries(c[e]).forEach((function(e){"house"===e[0]&&(U.includes(e[1])||U.push(e[1]))}));o(U);for(var t=0;t<c.length;t+=1)Object.entries(c[t]).forEach((function(e){"species"===e[0]&&(_.includes(e[1])||_.push(e[1]))}));d(_);for(var s=0;s<c.length;s+=1)Object.entries(c[s]).forEach((function(e){"ancestry"===e[0]&&(R.includes(e[1])||R.push(e[1]))}));f(R)}),[c]),Object(h.jsx)("div",{className:"favorite",children:Object(h.jsxs)("div",{className:"sub_favorite",children:[Object(h.jsxs)("form",{className:"form_fav",children:[Object(h.jsx)("h1",{className:"title",children:"Find Your Character"}),Object(h.jsxs)("div",{className:"selectors",children:[Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"House"}),Object(h.jsxs)("select",{className:"cursor",name:"house",id:"",defaultValue:"DEFAULT",onChange:function(e){return W(e)},children:[Object(h.jsx)("option",{value:"DEFAULT",children:"Please Select"}),i.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Species"}),Object(h.jsxs)("select",{className:"cursor",name:"species",id:"",defaultValue:"DEFAULT",onChange:function(e){return W(e)},children:[Object(h.jsx)("option",{value:"DEFAULT",children:"Please Select"}),u.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))]})]}),Object(h.jsxs)("div",{children:[Object(h.jsx)("span",{children:"Ancestry"}),Object(h.jsxs)("select",{className:"cursor",name:"ancestry",id:"",defaultValue:"DEFAULT",onChange:function(e){return W(e)},children:[Object(h.jsx)("option",{value:"DEFAULT",children:"Please Select"}),O.map((function(e){return Object(h.jsx)("option",{value:e,children:e},e)}))]})]})]}),Object(h.jsxs)("button",{type:"button",className:"cursor",onClick:function(){return I(!T)},children:[" ","Show Search ",T?" On":null]})]}),Object(h.jsx)("div",{className:"cards-container card-fav",children:T&&c.filter((function(e){return e.house===w&&e.species===z&&e.ancestry===D})).map((function(e){return Object(h.jsx)(F,{name:e.name,dateOfBirth:e.dateOfBirth,species:e.species,house:e.house,image:e.image,patronus:e.patronus,ancestry:e.ancestry},e.name)}))})]})})}),W=(c(83),c(84),function(){return Object(h.jsxs)("div",{className:"quiz",children:[Object(h.jsx)("h1",{className:"title-bis",id:"quiz-title",children:"Do you know Dobby's friends ?"}),Object(h.jsxs)("div",{className:"container-arrows",children:[Object(h.jsxs)("svg",{className:"arrows",children:[Object(h.jsx)("path",{className:"a1",d:"M0 0 L30 32 L60 0"}),Object(h.jsx)("path",{className:"a2",d:"M0 20 L30 52 L60 20"}),Object(h.jsx)("path",{className:"a3",d:"M0 40 L30 72 L60 40"})]}),Object(h.jsx)(l.a,{className:"nav-link",exact:!0,to:"/quiz-start#root",children:Object(h.jsx)("button",{type:"button",id:"start-quiz",className:"cursor",children:"Enter into the Chamber of Secrets"})})]})]})}),B=(c(85),c(43)),G=c.n(B),M=c.p+"static/media/music.9ea5e17a.ogg",K=c.p+"static/media/logo-navbar.4aa728b5.png",J=c.p+"static/media/solemnly-swear.aacc2d8e.png",Y=function(){var e=Object(s.useState)("cursor nav-link"),t=Object(v.a)(e,2),c=t[0],a=(t[1],Object(s.useState)("dropdown")),r=Object(v.a)(a,2),n=r[0],i=r[1];return Object(h.jsxs)("div",{className:"header-container",children:[Object(h.jsx)(G.a,{src:M,autoPlay:!0,volume:1}),Object(h.jsxs)("div",{className:"header",children:[Object(h.jsx)("div",{children:Object(h.jsx)(l.a,{exact:!0,to:"/#root",children:Object(h.jsx)("img",{className:"cursor",src:K,alt:"Dobby"})})}),Object(h.jsx)("div",{children:Object(h.jsx)("img",{className:"solemnly",src:J,alt:"I solemnly swear..."})}),Object(h.jsxs)("ul",{className:"nav-bar",children:[Object(h.jsx)(l.a,{className:"nav-link",exact:!0,to:"/#root",children:Object(h.jsx)("li",{className:"cursor",children:"Home"})}),Object(h.jsx)(l.a,{className:"cursor nav-link",to:"/quiz#root",children:Object(h.jsx)("li",{className:"cursor",children:"Quiz"})}),Object(h.jsx)(l.a,{className:"cursor nav-link",to:"/library#root",children:Object(h.jsx)("li",{className:"cursor",children:"Library"})}),Object(h.jsx)(l.a,{className:"cursor nav-link",to:"/favorite",children:Object(h.jsx)("li",{className:"cursor",children:"Your Character"})})]}),Object(h.jsx)("button",{type:"button",htmlFor:"toggle",className:"icon cursor",onClick:function(){"dropdown"===n&&i("toggle"),"toggle"===n&&i("dropdown")},children:"\u2630"})]}),Object(h.jsx)("div",{className:n,children:Object(h.jsxs)("ul",{className:"nav-bar",children:[Object(h.jsx)(l.a,{className:c,onClick:function(){return i("dropdown")},to:"/#root",children:Object(h.jsx)("li",{children:"Home"})}),Object(h.jsx)(l.a,{className:c,onClick:function(){return i("dropdown")},to:"/quiz#root",children:Object(h.jsx)("li",{children:"Quiz"})}),Object(h.jsx)(l.a,{className:c,onClick:function(){return i("dropdown")},to:"/library#root",children:Object(h.jsx)("li",{children:"Library"})}),Object(h.jsx)(l.a,{className:c,onClick:function(){return i("dropdown")},to:"/favorite#root",children:Object(h.jsx)("li",{children:"Your Character"})})]})})]})},Q=(c(86),function(e){var t=e.searchName,c=e.setSearchName;return Object(h.jsx)("div",{className:"containerSearch",children:Object(h.jsx)("div",{className:"searchBar",children:Object(h.jsx)("div",{children:Object(h.jsx)("input",{className:"searchbar cursor",type:"text",value:t,id:"search",placeholder:"",onChange:function(e){return c(e.target.value)}})})})})}),V=(c(87),c.p+"static/media/ghostGryffindor.41cbfc23.png"),Z=c.p+"static/media/ghostHufflepuff.a0436161.png",X=c.p+"static/media/ghostRavenclaw.60afaec6.png",$=c.p+"static/media/ghostSlytherin.75a6ef1d.png",ee=c.p+"static/media/homeles-logo.e5c4d829.png";var te=function(){var e=Object(s.useState)([]),t=Object(v.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(null),n=Object(v.a)(r,2),i=n[0],o=n[1],l=Object(s.useState)({color:"#740001"}),j=Object(v.a)(l,2),u=j[0],d=j[1],b=Object(s.useState)(0),m=Object(v.a)(b,2),O=m[0],f=m[1],x=Object(s.useState)(10),p=Object(v.a)(x,2),g=p[0],y=p[1],w=Object(s.useState)(""),k=Object(v.a)(w,2),S=k[0],C=k[1];Object(s.useEffect)((function(){N.a.get("https://hp-api.herokuapp.com/api/characters").then((function(e){return e.data})).then((function(e){return a(e)}))}),[]),Object(s.useEffect)((function(){var e=document.querySelector("#library");switch(i){case"Gryffindor":e.className="gryffindor-background";break;case"Hufflepuff":e.className="hufflepuff-background";break;case"Ravenclaw":e.className="ravenclaw-background";break;case"Slytherin":e.className="slytherin-background";break;default:e.className="default-background"}}),[i]);var z={color:"#740001"},A={color:"#1A472A"},E={color:"#af712a"},L={color:"#0E1A40"},T={color:"black"};function I(e){o(e)}return Object(h.jsxs)("div",{id:"library",className:"library",children:[Object(h.jsxs)("div",{className:"search-bar",children:[Object(h.jsx)("h1",{className:"title",children:"Harry Potter's characters"}),Object(h.jsx)("h3",{className:"search-title",children:"Search a character by his name:"}),Object(h.jsx)(Q,{searchName:S,setSearchName:C})]}),Object(h.jsxs)("div",{className:"library-container",children:[Object(h.jsxs)("div",{className:"house-container",children:[Object(h.jsx)("div",{onClick:function(){I(""),d(T),f(0),y(10)},onKeyPress:function(){return I("")},role:"presentation",children:Object(h.jsx)("div",{children:Object(h.jsx)("img",{id:"homelessImg",src:ee,alt:"homeless logo",height:"150px",className:"cursor"})})}),Object(h.jsx)("div",{onClick:function(){I("Gryffindor"),d(z),f(0),y(10)},onKeyPress:function(){return I("Gryffindor")},role:"presentation",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"house",id:"gryffindorImg",src:q,alt:"hufflepuff logo",height:"150px"}),Object(h.jsx)("img",{className:"ghost cursor",src:V,alt:"ghost"})]})}),Object(h.jsx)("div",{onClick:function(){I("Hufflepuff"),d(E),f(0),y(10)},onKeyPress:function(){return I("Hufflepuff")},role:"presentation",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"house",id:"hufflepuffImg",src:D,alt:"hufflepuff logo",height:"150px"}),Object(h.jsx)("img",{className:"ghost cursor",src:Z,alt:"ghost",height:"80px"})]})}),Object(h.jsx)("div",{onClick:function(){I("Ravenclaw"),d(L),f(0),y(10)},onKeyPress:function(){return I("Ravenclaw")},role:"presentation",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"house",id:"ravenclawImg",src:H,alt:"ravenclaw logo",height:"150px"}),Object(h.jsx)("img",{className:"ghost cursor",src:X,alt:"ghost"})]})}),Object(h.jsx)("div",{onClick:function(){I("Slytherin"),d(A),f(0),y(10)},onKeyPress:function(){return I("Slytherin")},role:"presentation",children:Object(h.jsxs)("div",{children:[Object(h.jsx)("img",{className:"house",id:"slytherinImg",src:P,alt:"slytherin logo",height:"150px"}),Object(h.jsx)("img",{className:"ghost cursor",src:$,alt:"ghost"})]})})]}),Object(h.jsxs)("div",{className:"card-button-container",children:[Object(h.jsx)("div",{className:"cards-container",children:c.filter((function(e){return null===i||e.house===!i||e.house===i})).filter((function(e){return e.name.toUpperCase().includes(S.toUpperCase())})).slice(O,g).map((function(e){return Object(h.jsx)(F,{name:e.name,dateOfBirth:e.dateOfBirth,species:e.species,house:e.house,image:e.image,wand:e.wand,patronus:e.patronus,ancestry:e.ancestry,font:u},e.name)}))}),Object(h.jsxs)("div",{className:"btn_return",children:[Object(h.jsxs)("div",{className:"button",children:[O>0&&Object(h.jsx)("button",{type:"button",className:"next cursor",onClick:function(){f(O-10),y(g-10)},children:"Previous 10"}),g<=c.filter((function(e){return null===i||e.house===!i||e.house===i})).length&&Object(h.jsx)("button",{type:"button",className:"next cursor",onClick:function(){f(O+10),y(g+10)},children:"Next 10"})]}),Object(h.jsx)("button",{type:"button",className:"next next-return cursor",onClick:function(){I(null),d(z),f(0),y(10)},onKeyPress:function(){return I("")},children:"Return"})]})]})]})]})},ce=c(18),se=c.n(ce),ae=(c(106),c.p+"static/media/video_home_library.7a544003.mp4"),re=c.p+"static/media/home_video_section_battle.75104439.mp4",ne=c.p+"static/media/home_video_section_quizz.39e6dcb9.mp4",ie=c.p+"static/media/HarryShots.52d1d724.mp4",oe=function(){return Object(h.jsxs)("div",{className:"home",children:[Object(h.jsxs)("div",{className:"home-div-video",children:[Object(h.jsx)("h1",{className:"title-bis",children:"Welcome to Hogwarts"}),Object(h.jsx)(se.a,{className:"home-video",url:ie,volume:1,muted:!0,playing:!0,loop:!0,width:"100%",height:"100%"})]}),Object(h.jsxs)("section",{className:"home-section-library",children:[Object(h.jsxs)("div",{className:"home-div-library-texte",children:[Object(h.jsx)("h3",{children:"Discover the library"}),Object(h.jsx)("p",{children:"\"It matters not what somebody is born but what they grow to be\" once said Albus Dumbledore, the famous headteacher of Hogwarts. Twenty years later, Harry Potter's magic is still operating. The adventures of the wizard with round glasses have enthralled millions of readers and viewers around the world. Discover without further ado our library page dedicated to the characters of Harry Potter's series."}),Object(h.jsx)(l.a,{to:"/library#root",className:"nav-link",children:Object(h.jsx)("button",{type:"button",className:"cursor",children:"Go to library"})})]}),Object(h.jsx)("div",{className:"home-div-library-video",children:Object(h.jsx)(se.a,{url:ae,volume:1,muted:!0,playing:!0,loop:!0,width:"100%",height:"80%"})})]}),Object(h.jsxs)("section",{className:"home-section-quizz",children:[Object(h.jsx)("div",{className:"home-div-quizz-video",children:Object(h.jsx)(se.a,{url:ne,volume:1,muted:!0,playing:!0,loop:!0,width:"100%",height:"80%"})}),Object(h.jsxs)("div",{className:"home-div-quizz-texte",children:[Object(h.jsx)("h3",{children:"Discover the quizz"}),Object(h.jsx)("p",{children:"Time flies and Harry Potter's fans stay loyal. J.K. Rowling managed to create a world so totally complete that diehard fans of the series continue to only swear to it. Today, we suggest they challenge themselves with a new top-level quizz that only the most complete fans will be able to accomplish."}),Object(h.jsx)(l.a,{className:"nav-link",to:"/quiz#root",children:Object(h.jsx)("button",{type:"button",className:"cursor",children:"Go to quiz"})})]})]}),Object(h.jsxs)("section",{className:"home-section-battle",children:[Object(h.jsxs)("div",{className:"home-div-battle-texte",children:[Object(h.jsx)("h3",{children:"Discover your favorite character"}),Object(h.jsx)("p",{children:"This epic franchise may be known for its magical world and huge battles, but the most memorable aspect is its many characters. The cast is extensive and full of vibrant personalities. Some of the characters are loveable, while others teach fans what not to do in life."}),Object(h.jsx)(l.a,{className:"nav-link",to:"/favorite#root",children:Object(h.jsx)("button",{type:"button",className:"cursor",children:"Go to favorite"})})]}),Object(h.jsx)("div",{className:"home-div-battle-video",children:Object(h.jsx)(se.a,{url:re,volume:1,muted:!0,playing:!0,loop:!0,width:"100%",height:"80%"})})]})]})},le=c.p+"static/media/hedwige.8581b8ed.png",je=(c(107),function(){var e=Object(s.useState)("off"),t=Object(v.a)(e,2),c=t[0],a=t[1],r=Object(s.useState)(""),n=Object(v.a)(r,2),i=n[0],o=n[1];return Object(h.jsx)("div",{className:"contact-container",children:Object(h.jsxs)("div",{className:"form-container",children:[Object(h.jsx)("div",{children:Object(h.jsx)("h1",{className:"title-contact",children:"SEND US AN OWL NOW !"})}),Object(h.jsxs)("div",{className:"image-form",children:[Object(h.jsx)("div",{className:"image",children:Object(h.jsx)("img",{src:le,alt:""})}),Object(h.jsxs)("form",{className:"form-contact",name:"myForm",action:"",onSubmit:"",method:"post",children:[Object(h.jsx)("h3",{className:"h3-contact",htmlFor:"firstname",children:"First Name"}),Object(h.jsx)("input",{className:"cursor",type:"text",id:"firstname",name:"firstname",placeholder:"Your first name...",required:!0,onChange:function(e){return o(e.target.value)}}),Object(h.jsx)("h3",{className:"h3-contact",htmlFor:"lastname",children:"Last Name"}),Object(h.jsx)("input",{className:"cursor",type:"text",id:"lastname",name:"lastname",placeholder:"Your last name...",required:!0}),Object(h.jsx)("h3",{className:"h3-contact",htmlFor:"email",children:"Email Address"}),Object(h.jsx)("input",{className:"cursor",type:"email",name:"email",id:"email",placeholder:"firstname.lastname@gmail.com",required:!0}),Object(h.jsx)("h3",{className:"h3-contact",htmlFor:"message",children:"Message"}),Object(h.jsx)("textarea",{className:"cursor",id:"message",name:"message",placeholder:"Write something..."}),Object(h.jsx)("button",{type:"button",className:"btn-contact cursor",id:"submit",value:"Submit",onClick:function(){return a("active")},children:"Send"})]})]}),Object(h.jsx)("div",{className:c,children:Object(h.jsxs)("p",{children:["Message sent. Thank you ",i," for the feedback!"]})})]})})});c(108);var he=function(){return Object(h.jsx)("div",{children:Object(h.jsxs)(i.b,{basename:"/",children:[Object(h.jsx)(Y,{}),Object(h.jsxs)(o.c,{children:[Object(h.jsx)(o.a,{exact:!0,path:"/",component:oe}),Object(h.jsx)(o.a,{exact:!0,path:"/quiz",component:W}),Object(h.jsx)(o.a,{exact:!0,path:"/library",component:te}),Object(h.jsx)(o.a,{exact:!0,path:"/quiz-start",component:T}),Object(h.jsx)(o.a,{path:"/favorite",component:R}),Object(h.jsx)(o.a,{path:"/quiz-result",component:m}),Object(h.jsx)(o.a,{path:"/contact",component:je})]}),Object(h.jsx)(u,{})]})})};n.a.render(Object(h.jsx)(i.a,{children:Object(h.jsx)(a.a.StrictMode,{children:Object(h.jsx)(he,{})})}),document.getElementById("root"))},51:function(e,t,c){},60:function(e,t,c){},80:function(e,t,c){},81:function(e,t,c){},82:function(e,t,c){},83:function(e,t,c){},84:function(e,t,c){},85:function(e,t,c){},86:function(e,t,c){},87:function(e,t,c){}},[[109,1,2]]]);
//# sourceMappingURL=main.77ae4f06.chunk.js.map