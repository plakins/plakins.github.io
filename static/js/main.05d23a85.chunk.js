(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{14:function(t,e,a){"use strict";a.r(e);var r=a(0),c=a.n(r),n=a(7),s=a.n(n),o=a(1),p=a(2),i=a(4),l=a(3),m=a(5),d=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t;return t="ProductTable"===this.props.page?c.a.createElement("h1",{className:"h1"},"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432"):c.a.createElement("h1",{className:"h1"},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430"),c.a.createElement("header",{className:"header"},t)}}]),e}(c.a.Component),u=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t;return t="ProductTable"===this.props.page?c.a.createElement(c.a.Fragment,null,c.a.createElement("td",{className:"td thead__td"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),c.a.createElement("td",{className:"td thead__td"},"\u0426\u0435\u043d\u0430"),c.a.createElement("td",{className:"td thead__td"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),c.a.createElement("td",{className:"td thead__td"})):c.a.createElement(c.a.Fragment,null,c.a.createElement("td",{className:"td thead__td"},"\u041d\u0430\u0437\u0432\u0430\u043d\u0438\u0435"),c.a.createElement("td",{className:"td thead__td"},"\u0426\u0435\u043d\u0430"),c.a.createElement("td",{className:"td thead__td"},"\u041a\u043e\u043b\u0438\u0447\u0435\u0441\u0442\u0432\u043e"),c.a.createElement("td",{className:"td thead__td"}),c.a.createElement("td",{className:"td thead__td"})),c.a.createElement("thead",{className:"thead"},c.a.createElement("tr",null,t))}}]),e}(c.a.Component),h=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this,e=[];if("ProductTable"===this.props.page){var a;a=this.props.cart[this.props.item.id]?this.props.item.count-this.props.cart[this.props.item.id]:this.props.item.count,e=c.a.createElement(c.a.Fragment,null,c.a.createElement("td",{className:"td tbody__td"},this.props.item.name),c.a.createElement("td",{className:"td tbody__td"},"$",this.props.item.price),c.a.createElement("td",{className:"td tbody__td"},a),c.a.createElement("td",{className:"td tbody__td"},c.a.createElement("button",{className:"btn btn--add",onClick:function(){t.props.addToCart(t.props.item.id)}})))}else{var r=parseInt(this.props.cart[this.props.item.id]);e=c.a.createElement(c.a.Fragment,null,c.a.createElement("td",{className:"td tbody__td"},this.props.item.name),c.a.createElement("td",{className:"td tbody__td"},"$",this.props.item.price),c.a.createElement("td",{className:"td tbody__td"},r),c.a.createElement("td",{className:"td tbody__td"},c.a.createElement("button",{className:"btn",onClick:function(){t.props.removeFromCart(t.props.item.id,1,!1)}})),c.a.createElement("td",{className:"td tbody__td"},c.a.createElement("button",{className:"btn--block",onClick:function(){t.props.removeFromCart(t.props.item.id,r,!1)}},"\u0423\u0434\u0430\u043b\u0438\u0442\u044c \u0432\u0441\u0435")))}return c.a.createElement("tr",{className:"tbody__tr"},e)}}]),e}(c.a.Component),b=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this,e=[];if("ProductTable"===this.props.page)e=this.props.products.map(function(e){return c.a.createElement(h,{page:t.props.page,item:e,cart:t.props.cart,key:e.id,addToCart:t.props.addToCart})});else for(var a in this.props.cart){a=+a;for(var r=0;this.props.products[r].id!==a;)r+=1;var n=c.a.createElement(h,{page:this.props.page,item:this.props.products[r],removeFromCart:this.props.removeFromCart,key:a,cart:this.props.cart});e.push(n)}return c.a.createElement("tbody",{className:"tbody"},e)}}]),e}(c.a.Component),f=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this;if("ProductTable"===this.props.page)return null;var e=this.props.products.reduce(function(e,a){for(var r in t.props.cart)if(a.id===parseInt(r)){e+=a.price*t.props.cart[r];break}return e},0);return c.a.createElement("div",{className:"total"},c.a.createElement("span",{className:"total__text"},"\u0412\u0441\u0435\u0433\u043e:"),c.a.createElement("span",{className:"total__price"},"$",e))}}]),e}(c.a.Component),E=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"wrapper"},c.a.createElement("table",{className:"table"},c.a.createElement(u,{page:this.props.page}),c.a.createElement(b,{page:this.props.page,products:this.props.products,addToCart:this.props.addToCart,removeFromCart:this.props.removeFromCart,cart:this.props.cart})),c.a.createElement(f,{page:this.props.page,products:this.props.products,cart:this.props.cart}))}}]),e}(c.a.Component),j=function(t){function e(){return Object(o.a)(this,e),Object(i.a)(this,Object(l.a)(e).apply(this,arguments))}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){var t=this;return"ProductTable"===this.props.page?c.a.createElement("div",{className:"controls"},c.a.createElement("button",{className:"btn--block",onClick:function(){t.props.switchPage()}},"\u041a\u043e\u0440\u0437\u0438\u043d\u0430")):c.a.createElement("div",{className:"controls"},c.a.createElement("button",{className:"btn--block",onClick:function(){t.props.removeFromCart(0,0,!0)}},"\u041e\u0447\u0438\u0441\u0442\u0438\u0442\u044c \u043a\u043e\u0440\u0437\u0438\u043d\u0443"),c.a.createElement("button",{className:"btn--block fl",onClick:function(){t.props.switchPage()}},"\u0421\u043f\u0438\u0441\u043e\u043a \u0442\u043e\u0432\u0430\u0440\u043e\u0432"))}}]),e}(c.a.Component);var v=function(){return[{id:1,name:"Item 1",price:890,count:0},{id:2,name:"Item 2",price:20,count:3},{id:3,name:"Item 3",price:428,count:0},{id:4,name:"Item 4",price:45,count:23}]},O=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(i.a)(this,Object(l.a)(e).call(this,t))).addToCart=function(t){a.setState(function(e){for(var a=0,r=e.products;r[a].id!==t;)a+=1;if(0!==r[a].count){if(r[a].count!==e.cart[t]){var c=Object.assign({},e.cart);return c[t]?c[t]+=1:c[t]=1,{cart:c}}alert("\u0422\u043e\u0432\u0430\u0440 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f!")}else alert("\u0422\u043e\u0432\u0430\u0440 \u0437\u0430\u043a\u043e\u043d\u0447\u0438\u043b\u0441\u044f!")})},a.removeFromCart=function(t,e,r){a.setState(function(a){if(r)return{cart:{}};for(var c=0;a.products[c].id!==t;)c+=1;var n=Object.assign({},a.cart);return n[t]-=e,0===n[t]&&delete n[t],{cart:n}})},a.state={products:v(),cart:{}},a}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return c.a.createElement("div",{className:"page"},c.a.createElement(d,{page:this.props.page}),c.a.createElement(E,{page:this.props.page,products:this.state.products,addToCart:this.addToCart,removeFromCart:this.removeFromCart,cart:this.state.cart}),c.a.createElement(j,{page:this.props.page,removeFromCart:this.removeFromCart,switchPage:this.props.switchPage}))}}]),e}(c.a.Component),g=function(t){function e(t){var a;return Object(o.a)(this,e),(a=Object(i.a)(this,Object(l.a)(e).call(this,t))).switchPage=function(){"ProductTable"===a.state.page?a.setState({page:"Cart"}):a.setState({page:"ProductTable"})},a.state={page:"ProductTable"},a}return Object(m.a)(e,t),Object(p.a)(e,[{key:"render",value:function(){return c.a.createElement("main",{className:"main"},c.a.createElement(O,{page:this.state.page,switchPage:this.switchPage}))}}]),e}(c.a.Component);s.a.render(c.a.createElement(g,null),document.getElementById("root"))},8:function(t,e,a){t.exports=a(14)}},[[8,1,2]]]);
//# sourceMappingURL=main.05d23a85.chunk.js.map