(this.webpackJsonpDobbyAndFriends=this.webpackJsonpDobbyAndFriends||[]).push([[0],{40:function(e,c,t){},42:function(e,c,t){},68:function(e,c,t){},69:function(e,c,t){},88:function(e,c,t){},89:function(e,c,t){},90:function(e,c,t){"use strict";t.r(c);var s=t(1),i=t.n(s),r=t(31),a=t.n(r),n=t(10),l=t(2),o=(t(40),t(0)),d=function(){return Object(o.jsxs)("div",{className:"quiz",children:[Object(o.jsx)("h1",{className:"title",children:"Test your knowledge about Dobby and his friends"}),Object(o.jsx)("input",{type:"button",id:"start-quiz",value:"Let's start"})]})},j=(t(42),t.p+"static/media/logo-navbar.a7c1ea8a.png"),b=function(){return Object(o.jsxs)("div",{className:"header",children:[Object(o.jsx)("div",{children:Object(o.jsx)(n.b,{exact:!0,to:"/",children:Object(o.jsx)("img",{className:"cursor",src:j,alt:"Dobby"})})}),Object(o.jsx)("div",{children:Object(o.jsx)("img",{src:"../solemnly-swear.png",alt:"I solemnly swear..."})}),Object(o.jsxs)("ul",{className:"nav-bar",children:[Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{className:"cursor",activeClassName:"active",exact:!0,to:"/",children:"Home"})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{className:"cursor",activeClassName:"active",to:"/quiz",children:"Quiz"})}),Object(o.jsx)("li",{children:Object(o.jsx)(n.b,{className:"cursor",activeClassName:"active",to:"/library",children:"Library"})})]})]})},u=t(15),h=t(34),f=t.n(h),m=(t(68),function(e){var c=e.name,t=e.dateOfBirth,s=e.species,i=e.house,r=e.image,a=e.wand,n=e.patronus,l=e.ancestry,d=e.font;return Object(o.jsx)("div",{className:"flip-card",children:Object(o.jsxs)("div",{className:"flip-card-inner",children:[Object(o.jsxs)("div",{className:"card flip-card-front",children:[Object(o.jsx)("div",{className:"card-img",children:r?Object(o.jsx)("img",{alt:c,src:r}):Object(o.jsx)("img",{alt:c,src:"../photoeffets.com__final_265151983864119616_.jpg"})}),Object(o.jsxs)("div",{className:"card-details",style:d,children:[Object(o.jsx)("h2",{children:c}),Object(o.jsxs)("div",{children:["Date of Birth: ",t]}),Object(o.jsxs)("div",{children:["Species: ",s]}),Object(o.jsxs)("div",{children:["House: ",i]})]})]}),Object(o.jsx)("div",{className:"card flip-card-back",children:Object(o.jsxs)("div",{className:"card-details",style:d,children:[Object(o.jsx)("h2",{children:c}),n?Object(o.jsxs)("div",{children:["Patronus: ",n]}):Object(o.jsx)("div",{children:"Patronus: Not provided"}),a.wood||a.core||a.length?Object(o.jsxs)("div",{children:["Wand:",a.wood?Object(o.jsxs)("li",{children:["Wood: Made of ",a.wood]}):Object(o.jsx)("li",{children:"Wood: Not provided"}),a.core?Object(o.jsxs)("li",{children:["Core: Made of ",a.core]}):Object(o.jsx)("li",{children:"Core: Not provided"}),a.length?Object(o.jsxs)("li",{children:["Length: ",a.length,"'"]}):Object(o.jsx)("li",{children:"Length: Not provided"})]}):Object(o.jsx)("div",{children:"Wand: Not provided"}),l?Object(o.jsxs)("div",{children:["Ancestry: ",l]}):Object(o.jsx)("div",{children:"Ancestry: Not provided"})]})})]})})});m.defaultProps={name:"Harry",dateOfBirth:"17/12/200",species:"human",house:"Gryffindor",image:"",wand:"",patronus:"stag",ancestry:"half-blood",font:"black"};var O=m,p=(t(69),t.p+"static/media/gryffindor.64055a7b.png"),x=t.p+"static/media/ravenclaw.9610bcde.png",v=t.p+"static/media/hufflepuff.dc9c2866.png",g=t.p+"static/media/slytherin.2f1ae136.png";var y=function(){var e=Object(s.useState)([]),c=Object(u.a)(e,2),t=c[0],i=c[1],r=Object(s.useState)(""),a=Object(u.a)(r,2),n=a[0],l=a[1],d=Object(s.useState)({color:"#740001"}),j=Object(u.a)(d,2),b=j[0],h=j[1];Object(s.useEffect)((function(){f.a.get("https://hp-api.herokuapp.com/api/characters").then((function(e){return e.data})).then((function(e){return i(e)}))}),[]),Object(s.useEffect)((function(){var e=document.querySelector("#library");switch(n){case"Gryffindor":e.className="gryffindor-background";break;case"Hufflepuff":e.className="hufflepuff-background";break;case"Ravenclaw":e.className="ravenclaw-background";break;case"Slytherin":e.className="slytherin-background";break;default:e.className="default-background"}}),[n]);var m={color:"#740001"},y={color:"#1A472A"},N={color:"#af712a"},w={color:"#0E1A40"};function k(e){l(e)}return Object(o.jsxs)("div",{id:"library",className:"library",children:[Object(o.jsx)("h1",{className:"title",children:"Harry Potter's characters"}),Object(o.jsxs)("div",{className:"house-container",children:[Object(o.jsx)("div",{onClick:function(){k("Gryffindor"),h(m)},onKeyPress:function(){return k("Gryffindor")},role:"presentation",children:Object(o.jsx)("img",{className:"cursor",id:"gryffindorImg",src:p,alt:"hufflepuff logo",height:"150px"})}),Object(o.jsx)("div",{onClick:function(){k("Hufflepuff"),h(N)},onKeyPress:function(){return k("Hufflepuff")},role:"presentation",children:Object(o.jsx)("img",{id:"hufflepuffImg",className:"cursor",src:v,alt:"hufflepuff logo",height:"150px"})}),Object(o.jsx)("div",{onClick:function(){k("Ravenclaw"),h(w)},onKeyPress:function(){return k("Ravenclaw")},role:"presentation",children:Object(o.jsx)("img",{id:"ravenclawImg",className:"cursor",src:x,alt:"ravenclaw logo",height:"150px"})}),Object(o.jsx)("div",{onClick:function(){k("Slytherin"),h(y)},onKeyPress:function(){return k("Slytherin")},role:"presentation",children:Object(o.jsx)("img",{id:"slytherinImg",className:"cursor",src:g,alt:"slytherin logo",height:"150px"})})]}),Object(o.jsx)("div",{className:"cards-container",children:t.filter((function(e){return""===n||e.house===n})).map((function(e){return Object(o.jsx)(O,{name:e.name,dateOfBirth:e.dateOfBirth,species:e.species,house:e.house,image:e.image,wand:e.wand,patronus:e.patronus,ancestry:e.ancestry,font:b})}))})]})},N=t(35),w=t.n(N),k=(t(88),t.p+"static/media/video_home_library.7a544003.mp4"),C=function(){return Object(o.jsxs)("div",{className:"home",children:[Object(o.jsx)("div",{children:Object(o.jsx)("h1",{className:"title",children:"Welcome to Hogwarts"})}),Object(o.jsxs)("section",{className:"home-section",children:[Object(o.jsxs)("div",{className:"home-div-texte",children:[Object(o.jsx)("h3",{children:"Discover the library"}),Object(o.jsx)("p",{children:"Lorem ipsum dolor sit amet consectetur, adipisicing elit. Repellat possimus nulla exercitationem sapiente. Reiciendis quas error officiis nihil placeat quibusdam ut fugiat, ipsa dicta nesciunt veniam amet dolore ipsum aspernatur!"}),Object(o.jsx)("button",{type:"button",className:"cursor",children:Object(o.jsx)(n.b,{to:"/library",children:"Go to library"})})]}),Object(o.jsx)("div",{className:"home-div-video",children:Object(o.jsx)(w.a,{url:k,autoPlay:"true",playing:"true",loop:"true",width:"550px"})})]})]})};t(89);var P=function(){return Object(o.jsxs)("div",{children:[Object(o.jsx)(b,{}),Object(o.jsxs)(l.c,{children:[Object(o.jsx)(l.a,{exact:!0,path:"http://bast44trl.github.io/DobbyAndFriends/",component:C}),Object(o.jsx)(l.a,{path:"/quiz",component:d}),Object(o.jsx)(l.a,{path:"/library",component:y})]})]})};a.a.render(Object(o.jsx)(n.a,{children:Object(o.jsx)(i.a.StrictMode,{children:Object(o.jsx)(P,{})})}),document.getElementById("root"))}},[[90,1,2]]]);
//# sourceMappingURL=main.cf44e197.chunk.js.map