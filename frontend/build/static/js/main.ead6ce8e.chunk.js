(this.webpackJsonpfrontend=this.webpackJsonpfrontend||[]).push([[0],{38:function(e,c,a){},62:function(e,c,a){"use strict";a.r(c);var s=a(1),t=a(0),r=a.n(t),n=a(28),i=a.n(n),d=(a(38),a(12)),j=a(3),o=a(18),l=a(15),h=a.n(l),m=a(29),u=a(32),b=a(30),p=a.n(b);function O(e){var c=e.rating,a=e.numReviews;return Object(s.jsxs)("div",{className:"rating",children:[Object(s.jsx)("span",{children:Object(s.jsx)("i",{className:c>=1?"fa fa-star":c>=.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(s.jsx)("span",{children:Object(s.jsx)("i",{className:c>=2?"fa fa-star":c>=1.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(s.jsx)("span",{children:Object(s.jsx)("i",{className:c>=3?"fa fa-star":c>=2.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(s.jsx)("span",{children:Object(s.jsx)("i",{className:c>=4?"fa fa-star":c>=3.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(s.jsx)("span",{children:Object(s.jsx)("i",{className:c>=5?"fa fa-star":c>=4.5?"fa fa-star-half-o":"fa fa-star-o"})}),Object(s.jsx)("span",{children:a+" reviews "})]})}function f(e){var c=e.product;return Object(s.jsxs)("div",{className:"card",children:[Object(s.jsx)("a",{href:"/product/".concat(c._id),children:Object(s.jsx)("img",{className:"medium",src:c.image,alt:c.name})}),Object(s.jsxs)("div",{className:"card-body",children:[Object(s.jsx)("a",{href:"/product/".concat(c._id),className:"card-name",children:Object(s.jsx)("h2",{children:c.name})}),Object(s.jsx)(O,{rating:c.rating,numReviews:c.numReviews}),Object(s.jsxs)("div",{className:"price",children:["$",c.price]})]})]},c._id)}function x(){var e=Object(t.useState)([]),c=Object(u.a)(e,2),a=c[0],r=c[1];return Object(t.useEffect)((function(){(function(){var e=Object(m.a)(h.a.mark((function e(){var c,a;return h.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,p.a.get("https://amazonaaa-app.herokuapp.com/api/products");case 2:c=e.sent,a=c.data,r(a);case 5:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}})()()}),[]),Object(s.jsx)("div",{children:Object(s.jsx)("div",{className:"row center",children:a.map((function(e){return Object(s.jsx)(f,{product:e},e._id)}))})})}var g={products:[{_id:"1",name:"Prom Red Dress",category:"Dress",image:"/images/p1.jpg",price:120,countInStock:10,brand:"VIISHOW",rating:4.5,numReviews:10,description:"high quality product"},{_id:"2",name:"African Print Shirt Dress",category:"Dress",image:"/images/p2.jpg",price:80,countInStock:0,brand:"Maison Chateau Rouge",rating:4.6,numReviews:10,description:"high quality product"},{_id:"3",name:"VIISHOW Women's Summer Off Shoulder  Dress",category:"Dress",image:"/images/p3.jpg",price:50,countInStock:2,brand:"VIISHOW",rating:4.5,numReviews:17,description:"high quality product"},{_id:"4",name:"Black Fit Long Sleeve Bodycon Top",category:"Top",image:"/images/p4.jpg",price:40,countInStock:5,brand:"VIISHOW",rating:4.8,numReviews:17,description:"high quality product"},{_id:"5",name:"InsNova Women Long Sleeve Floral Velvet Dress",category:"Dress",image:"/images/p5.jpg",price:150,countInStock:15,brand:"InsNova",rating:4.5,numReviews:10,description:"high quality product"},{_id:"6",name:"InsNova Women Off Shoulder Cocktail Dress",category:"Dress",image:"/images/p6.jpg",price:200,countInStock:10,brand:"VIISHOW",rating:4.9,numReviews:15,description:"high quality product"}]};function v(e){var c=g.products.find((function(c){return c._id===e.match.params.id}));return c?Object(s.jsxs)("div",{children:[Object(s.jsx)(d.b,{to:"/",children:"Back to result"}),Object(s.jsxs)("div",{className:"row top",children:[Object(s.jsx)("div",{className:"col-2",children:Object(s.jsx)("img",{className:"large",src:c.image,alt:c.name})}),Object(s.jsx)("div",{className:"col-1 first-col",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsx)("h1",{children:c.name})}),Object(s.jsx)("li",{children:Object(s.jsx)(O,{rating:c.rating,numReviews:c.numReviews})}),Object(s.jsxs)("li",{children:["Price : $",c.price]}),Object(s.jsxs)("li",{children:["Description : ",c.description]})]})}),Object(s.jsx)("div",{className:"col-1",children:Object(s.jsx)("div",{className:"card card-body",children:Object(s.jsxs)("ul",{children:[Object(s.jsx)("li",{children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{children:"Price"}),Object(s.jsxs)("div",{className:"price",children:["$",c.price]})]})}),Object(s.jsx)("li",{children:Object(s.jsxs)("div",{className:"row",children:[Object(s.jsx)("div",{children:"Status"}),Object(s.jsx)("div",{children:c.countInStock>0?Object(s.jsx)("span",{className:"success",children:"In Stock"}):Object(s.jsx)("span",{className:"error",children:"Unavailable"})})]})}),Object(s.jsx)("li",{children:Object(s.jsx)("button",{className:"primary block",children:"Add to cart"})})]})})})]})]}):Object(s.jsx)("div",{children:" Product Not Found"})}var N=function(){var e=Object(o.b)({opacity:1,from:{opacity:0}});return Object(s.jsx)(d.a,{children:Object(s.jsxs)("div",{className:"grid-container",children:[Object(s.jsxs)("header",{className:"row",children:[Object(s.jsx)(o.a.a,{style:e,className:"brand",children:"amazona"}),Object(s.jsxs)("div",{children:[Object(s.jsx)("a",{href:"/cart",children:"Cart"}),Object(s.jsx)("a",{href:"/signin",children:"Sign In"})]})]}),Object(s.jsxs)("main",{children:[Object(s.jsx)(j.a,{path:"/",exact:!0,component:x}),Object(s.jsx)(j.a,{path:"/product/:id",component:v})]}),Object(s.jsx)("footer",{className:"row center",children:"All rights reserved"})]})})},I=function(e){e&&e instanceof Function&&a.e(3).then(a.bind(null,63)).then((function(c){var a=c.getCLS,s=c.getFID,t=c.getFCP,r=c.getLCP,n=c.getTTFB;a(e),s(e),t(e),r(e),n(e)}))};i.a.render(Object(s.jsx)(r.a.StrictMode,{children:Object(s.jsx)(N,{})}),document.getElementById("root")),I()}},[[62,1,2]]]);
//# sourceMappingURL=main.ead6ce8e.chunk.js.map