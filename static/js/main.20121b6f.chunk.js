(this["webpackJsonpten-shoppingapp"]=this["webpackJsonpten-shoppingapp"]||[]).push([[0],{1105:function(e,t,a){},1106:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),c=a(7),o=a.n(c),l=(a(34),a(28)),i=a(11),m=(a(35),a(36),a(37),a(38),a(1114)),u=a(1115),s=a(1116),d=a(13),p=a(15),f=a.n(p),E=a(26),h=a(27),g=a.n(h),y=a(1109),b=a(1110),v=a(1111),w=a(1112),x=a(1113),N=a(1121),I=function(e){var t=e.product,a=e.addInCart;return r.a.createElement(y.a,{className:"mt-2 mb-1"},r.a.createElement(b.a,{top:!0,height:"250",width:"100%",src:t.mediumImage}),r.a.createElement(v.a,{className:"text-center"},r.a.createElement(w.a,null,t.productName),r.a.createElement(x.a,{className:"secondary"},"Price: RS ",t.productPrice),r.a.createElement(N.a,{color:"success",onClick:function(){return a(t)}},"Buy Now")))},j=a(12),C=function(e){var t=e.addInCart,a=Object(n.useState)([]),c=Object(i.a)(a,2),o=c[0],l=c[1],d=function(){var e=Object(E.a)(f.a.mark((function e(){var t,a,n,r;return f.a.wrap((function(e){for(;;)switch(e.prev=e.next){case 0:return e.next=2,g.a.get("https://jsonware.com/json/3631f2ed0b38f18d32387d6c5c92c665.json");case 2:t=e.sent,a=t.data,n=a.photos,r=n.map((function(e){return{mediumImage:e.src.medium,tinyImage:e.src.tiny,productName:j.random.word(),productPrice:j.commerce.price(),id:j.random.uuid()}})),l(r);case 7:case"end":return e.stop()}}),e)})));return function(){return e.apply(this,arguments)}}();return Object(n.useState)((function(){d()}),[]),r.a.createElement(m.a,{fluid:!0},r.a.createElement("h1",{className:"text-success text-center",style:{fontSize:"80px"}},"Buy your Digital Buddy"),r.a.createElement(u.a,null,o.map((function(e){return r.a.createElement(s.a,{md:4,key:e.id},r.a.createElement(I,{product:e,addInCart:t}))}))))},k=a(1117),O=a(1118),P=a(1119),S=a(1120),B=(a(1105),function(e){var t=e.cartItem,a=e.removeItem,n=e.buyNow,c=0;return t.forEach((function(e){c=parseFloat(c)+parseFloat(e.productPrice)})),r.a.createElement(m.a,{fluid:!0},r.a.createElement("h1",{className:"text-info text-center"},"Your Cart"),r.a.createElement(k.a,null,t.map((function(e){return r.a.createElement(O.a,{key:e.id},r.a.createElement(u.a,null,r.a.createElement(s.a,null,r.a.createElement("img",{height:80,src:e.mediumImage})),r.a.createElement(s.a,{className:"text-center"},r.a.createElement("div",{className:"text-primary"},e.productName),r.a.createElement("p",null,"Price :- ",e.productPrice),r.a.createElement(N.a,{color:"danger",onClick:function(){return a(e)}},"Remove"))))}))),t.length>=1?r.a.createElement(y.a,{className:"text-center mt-3"},r.a.createElement(P.a,null,"Grand Total"),r.a.createElement(v.a,null,"Your amount for ",t.length," product is Rs.",c),r.a.createElement(S.a,null,r.a.createElement(N.a,{color:"success",onClick:n},"Complete your order!"))):r.a.createElement("h2",{className:"text-warning text-center italics"},r.a.createElement("i",null,"Cart is empty")))});var R=function(){var e=Object(n.useState)([]),t=Object(i.a)(e,2),a=t[0],c=t[1];return r.a.createElement(m.a,{fluid:!0},r.a.createElement(d.a,{position:"bottom-right"}),r.a.createElement(u.a,null,r.a.createElement(s.a,{md:"8"},r.a.createElement(C,{addInCart:function(e){-1===a.findIndex((function(t){return t.id===e.id}))?c([].concat(Object(l.a)(a),[e])):Object(d.b)("Already added in Cart",{type:"error"})}})),r.a.createElement(s.a,{md:"4"},r.a.createElement(B,{cartItem:a,removeItem:function(e){c(a.filter((function(t){return t.id!==e.id})))},buyNow:function(){c([]),Object(d.b)("Purchase Complete",{type:"success"})}}))))};Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));o.a.render(r.a.createElement(r.a.StrictMode,null,r.a.createElement(R,null)),document.getElementById("root")),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then((function(e){e.unregister()})).catch((function(e){console.error(e.message)}))},29:function(e,t,a){e.exports=a(1106)},34:function(e,t,a){},35:function(e,t,a){e.exports=a.p+"static/media/logo.5d5d9eef.svg"},38:function(e,t,a){}},[[29,1,2]]]);
//# sourceMappingURL=main.20121b6f.chunk.js.map