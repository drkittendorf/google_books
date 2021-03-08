/*! For license information please see main.9549bd05.chunk.js.LICENSE.txt */
(this.webpackJsonpmern=this.webpackJsonpmern||[]).push([[0],{36:function(e,t,n){e.exports=n(70)},40:function(e,t,n){},58:function(e,t,n){},59:function(e,t,n){},68:function(e,t,n){},69:function(e,t,n){},70:function(e,t,n){"use strict";n.r(t);var a=n(0),l=n.n(a),o=n(17),r=n.n(o),c=n(9),i=n(1);n(40);var s=function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",backgroundColor:"orange",font:"black",color:"white",padding:"10px",fontsize:"1.25rem",textDecoration:"none"}},l.a.createElement("a",{className:"navbar-brand",href:"/search"},"Search Google Books"),l.a.createElement("a",{className:"navbar-brand",href:"/"},"Add a Custom Title to List"),l.a.createElement("a",{className:"navbar-brand",href:"/bookslist"},"The Saved Books List"))},u=n(14),m=n(7),h=n(8),f=n.n(h),d=function(){return console.log("something hit this line 6 API.js"),f.a.get("/api/books")},E=function(e){return console.log("something hit this line 11 API.js"),f.a.get("/api/books/"+e)},b=function(e){return console.log("something hit this line 16 API.js"),f.a.delete("/api/books/"+e)},g=function(e){return console.log("something hit this line 22 API.js"),f.a.post("/api/books",e)},p=function(){return console.log("something hit this line 26 API.js"),f.a.get("/api/gbooks")},k=function(e){return console.log("something hit this-- line 31 API.js"),console.log("line 32 api.js",e),f.a.post("/api/gbooks",e)},v=function(e){return console.log("something hit this-- line 38 API.js"),f.a.get("/api/gbooks/"+e)},j=function(e){return console.log("something hit this-- line 43 API.js"),f.a.delete("/api/gbooks/"+e)};function y(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("input",Object.assign({className:"form-control"},e)))}function O(e){return l.a.createElement("div",{className:"form-group"},l.a.createElement("textarea",Object.assign({className:"form-control",rows:"6"},e)))}function N(e){return l.a.createElement("button",Object.assign({},e,{style:{float:"right",marginBottom:5},className:"btn btn-success"}),e.children)}function S(e){return l.a.createElement("button",e,e.children)}var I=function(){var e={title:"",author:"",synopsis:""},t=Object(a.useState)(Object(u.a)({},e)),n=Object(m.a)(t,2),o=n[0],r=n[1],c=function(){console.log(o),r(e),console.log("reset triggered"),console.log(o)};function i(e){var t=e.target,n=t.name,a=t.value;r(Object(u.a)(Object(u.a)({},o),{},{[n]:a}))}return l.a.createElement("div",{className:"container"},l.a.createElement("h2",null,"What book title would you like to add to your list?"),l.a.createElement("form",{className:"card-container3",align:"center"},l.a.createElement(y,{onChange:i,name:"title",placeholder:"title (required)",value:o.title}),l.a.createElement(y,{onChange:i,name:"author",placeholder:"author (required)",value:o.author}),l.a.createElement(O,{onChange:i,name:"synopsis",placeholder:"synopsis(Optional)",value:o.synopsis}),l.a.createElement(N,{disabled:!(o.author&&o.title),onClick:function(e){e.preventDefault(),o.title&&o.author&&g({title:o.title,author:o.author,synopsis:o.synopsis}).then(console.log("book has been submitted to list")).then((function(e){d().then(c).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}}," Submit Book")))};n(58);var B=function(e){return l.a.createElement("span",Object.assign({className:"delete-btn"},e,{role:"button",tabIndex:"0"}),"\u2717")};function x(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"container".concat(t?"-fluid":"",' {horizontalAlignment ? "center"}')},n)}function C(e){var t=e.fluid,n=e.children;return l.a.createElement("div",{className:"row".concat(t?"-fluid":"")},n)}function A(e){var t=e.size,n=e.children;return l.a.createElement("div",{className:t.split(" ").map((function(e){return"col-"+e})).join(" ")},n)}n(59);function w(e){var t=e.children;return l.a.createElement("div",{className:"list-overflow-container"},l.a.createElement("ul",{className:"list-group"},t))}function L(e){var t=e.children;return l.a.createElement("li",{className:"list-group-item"},t)}var D=function(){var e=Object(a.useState)([]),t=Object(m.a)(e,2),n=t[0],o=t[1],r=Object(a.useState)([]),i=Object(m.a)(r,2),s=i[0],u=i[1];function h(){d().then((function(e){return o(e.data)})).catch((function(e){return console.log(e)}))}function f(){p().then((function(e){console.log("console from Bookslist.js",e),u(e.data)})).catch((function(e){return console.log(e)}))}return Object(a.useEffect)((function(){h()}),[]),Object(a.useEffect)((function(){f()}),[]),l.a.createElement(x,{fluid:!0},l.a.createElement(C,null,l.a.createElement(A,{size:"md-6 sm-12"},l.a.createElement("h2",null,"Books Added Manually to the List"),n.length?l.a.createElement(w,null,n.map((function(e){return l.a.createElement(L,{key:e._id},l.a.createElement(c.b,{to:"/books/"+e._id},l.a.createElement("strong",null,e.title," by ",e.author)),l.a.createElement(B,{onClick:function(){return t=e._id,void b(t).then((function(e){return h()})).catch((function(e){return console.log(e)}));var t}}))}))):l.a.createElement("h3",null,"No Results to Display")),l.a.createElement(A,{size:"md-6 sm-12"},l.a.createElement("h2",null,"Books added from Google Books"),s.length?l.a.createElement(w,null,s.map((function(e){return l.a.createElement(L,{key:e._id},l.a.createElement(c.b,{to:"/gbooks/"+e._id},l.a.createElement("strong",null,e.title," by ",e.authors,console.log("console logging book",e))),l.a.createElement(B,{onClick:function(){return t=e._id,void j(t).then((function(e){return f()})).catch((function(e){return console.log(e)}));var t}}))}))):l.a.createElement("h3",null,"No Google Books have been added to the list"))))};var z=function(e){var t=Object(a.useState)({}),n=Object(m.a)(t,2),o=n[0],r=n[1],s=Object(i.f)().id;return Object(a.useEffect)((function(){E(s).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(x,{fluid:!0},l.a.createElement(C,null,l.a.createElement(A,{size:"md-12"},l.a.createElement("h1",null,o.title," by ",o.author))),l.a.createElement(C,null,l.a.createElement(A,{size:"md-10 md-offset-1"},l.a.createElement("article",null,l.a.createElement("h1",null,"Synopsis"),l.a.createElement("p",null,o.synopsis)))),l.a.createElement(C,null,l.a.createElement(A,{size:"md-2"},l.a.createElement(c.b,{to:"/bookslist"},"\u2190 Back to Saved Books List"))))};var P=function(e){var t=Object(a.useState)({}),n=Object(m.a)(t,2),o=n[0],r=n[1],s=Object(i.f)().id;return Object(a.useEffect)((function(){v(s).then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))}),[]),l.a.createElement(x,{fluid:!0,align:"center"},l.a.createElement(c.b,{to:"/bookslist"},"\u2190 Back to Saved Books List"),l.a.createElement(C,null,l.a.createElement("div",{className:"card-container2"},l.a.createElement("a",{href:o.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:o.image,alt:o.title,title:o.title})),l.a.createElement("h2",null,o.title),l.a.createElement("h4",null,o.subtitle),l.a.createElement("h3",null,o.authors),console.log("GBDETAILS",o),l.a.createElement("p",null,o.description),l.a.createElement("h6",null,"Published Date: ",o.date),l.a.createElement("a",{href:o.link,target:"_blank",rel:"noopener noreferrer"},"Google Book link to: ",o.title))),l.a.createElement(C,null,l.a.createElement(A,{size:"md-2"},l.a.createElement(c.b,{to:"/bookslist"},"\u2190 Back to Saved Books List"))))};var G=function(){return l.a.createElement(x,{fluid:!0},l.a.createElement(C,null,l.a.createElement(A,{size:"md-12"},l.a.createElement("h1",null,"404 Page Not Found"),l.a.createElement("h1",null,l.a.createElement("span",{role:"img","aria-label":"Face With Rolling Eyes Emoji"},"\ud83d\ude44")))))},_=n(34),R=n(31),T=n(32),F=n(35),q=n(33),J=(n(65),function(e){return f.a.get("https://www.googleapis.com/books/v1/volumes?q="+e+"&maxResults=24")});n(68);function K(e){var t=Object(a.useState)([]),n=Object(m.a)(t,2),o=n[0],r=n[1];return l.a.createElement("div",{className:"card-container"},l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},l.a.createElement("img",{src:e.image,alt:e.title,title:e.title})),l.a.createElement("div",{className:"desc"},l.a.createElement("h2",null,e.title),l.a.createElement("h4",null,e.subtitle),l.a.createElement("h3",null,e.authors),l.a.createElement("h4",null,"Published Date: ",e.date),l.a.createElement("p",null,e.description),l.a.createElement("a",{href:e.link,target:"_blank",rel:"noopener noreferrer"},"Google Book link to: ",e.title),l.a.createElement("form",null,l.a.createElement(S,{className:"button",onClick:function(t){t.preventDefault(),k({title:e.title,subtitle:e.subtitle,authors:e.authors,description:e.description,date:e.date,image:e.image,link:e.link}).then((function(e){console.log("is this hit? line 13 Bookcard",o),p().then((function(e){return r(e.data)})).catch((function(e){return console.log(e)}))})).catch((function(e){return console.log(e)}))}},"Add to List"))))}function W(e){return l.a.createElement("div",{className:"list"},e.books.map((function(e,t){return l.a.createElement(K,{key:t,image:e.volumeInfo.imageLinks?e.volumeInfo.imageLinks.thumbnail:"https://via.placeholder.com/128x195",authors:e.volumeInfo.authors?e.volumeInfo.authors[0]:"No Author Information Available",title:e.volumeInfo.title,subtitle:e.volumeInfo.subtitle,date:e.volumeInfo.publishedDate,description:e.volumeInfo.description,link:e.volumeInfo.infoLink})})))}var H=function(e){Object(F.a)(n,e);var t=Object(q.a)(n);function n(){var e;Object(R.a)(this,n);for(var a=arguments.length,l=new Array(a),o=0;o<a;o++)l[o]=arguments[o];return(e=t.call.apply(t,[this].concat(l))).state={userInput:"",bookSearchResults:[]},e.handleInputChange=function(t){var n=t.target.value;t.target.value;e.setState({userInput:n})},e.handleFormSubmit=function(t){t.preventDefault(),console.log("this runs on click from line 27 Search.js"),e.setState({userInput:""}),J(e.state.userInput).then((function(t){console.log("line 35 Search.js",t.data.items);var n=t.data.items;e.setState({bookSearchResults:Object(_.a)(n)})}))},e}return Object(T.a)(n,[{key:"render",value:function(){var e={display:"flex",flexDirection:"row",textAlign:"center",alignSelf:"center",justifyContent:"center"};return l.a.createElement("div",null,l.a.createElement("form",{style:e,className:"search-form"},l.a.createElement("input",{className:"col-md-4",name:"booktitle",onChange:this.handleInputChange,type:"text",placeholder:"Enter Keyword for Book"}),l.a.createElement("button",{onClick:this.handleFormSubmit},"SEARCH GOOGLE BOOKS")),l.a.createElement("h1",{style:e},"Google Book Search Results"),l.a.createElement(W,{books:this.state.bookSearchResults}))}}]),n}(a.Component);var M=function(){return l.a.createElement("div",{style:{display:"flex",justifyContent:"center",backgroundColor:"orange",font:"black",color:"white",padding:"10px",fontsize:"1.25rem",textDecoration:"none"}},l.a.createElement("h1",null,"Dale's React Book Page"))};n(69);var Q=function(){return l.a.createElement("div",{className:"footer",style:{display:"flex",justifyContent:"center",backgroundColor:"orange",font:"black",color:"white",padding:"10px",fontsize:"1.25rem",textDecoration:"none"}},l.a.createElement("a",{className:"navbar-brand",href:"/search"},"Search Google Books"),l.a.createElement("a",{className:"navbar-brand",href:"/"},"Add a Custom Title to List"),l.a.createElement("a",{className:"navbar-brand",href:"/bookslist"},"The Saved Books List"))};var U=function(){return l.a.createElement(c.a,null,l.a.createElement("div",null,l.a.createElement(M,null),l.a.createElement(s,null),l.a.createElement(i.c,null,l.a.createElement(i.a,{exact:!0,path:["/","/books"]},l.a.createElement(I,null)),l.a.createElement(i.a,{exact:!0,path:"/books/:id"},l.a.createElement(z,null)),l.a.createElement(i.a,{exact:!0,path:"/gbooks/:id"},l.a.createElement(P,null)),l.a.createElement(i.a,{exact:!0,path:"/search"},l.a.createElement(H,null)),l.a.createElement(i.a,null,l.a.createElement(D,null)),l.a.createElement(i.a,null,l.a.createElement(G,null))),l.a.createElement(Q,null)))};r.a.render(l.a.createElement(U,null),document.getElementById("root"))}},[[36,1,2]]]);
//# sourceMappingURL=main.9549bd05.chunk.js.map