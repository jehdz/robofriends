(this.webpackJsonprobofriends=this.webpackJsonprobofriends||[]).push([[0],{13:function(e,t,n){},14:function(e,t,n){},16:function(e,t,n){"use strict";n.r(t);var r=n(0),c=n(1),s=n(7),o=n.n(s),a=(n(13),n(2)),i=n(3),h=n(5),l=n(4),u=function(e){var t=e.name,n=e.email,c=e.id;return Object(r.jsxs)("div",{className:"tc bg-light-green dib br3 ma2 grow bw2 shadow-5",children:[Object(r.jsx)("img",{alt:"robots",src:"https://robohash.org/".concat(c,"?200x200")}),Object(r.jsxs)("div",{children:[Object(r.jsxs)("h2",{children:[" ",t," "]}),Object(r.jsxs)("p",{children:[" ",n]})]})]})},b=function(e){var t=e.robots;return Object(r.jsx)("div",{children:t.map((function(e,n){return Object(r.jsx)(u,{user:e,id:t[n].id,name:t[n].name,email:t[n].email},n)}))})},d=function(e){e.searchField;var t=e.searchChange;return Object(r.jsx)("div",{children:Object(r.jsx)("input",{className:"pa3 ba b--green bg-lightest-blue",type:"search",placeholder:"Search robots",onChange:t})})},j=function(e){return Object(r.jsx)("div",{style:{overflow:"scroll",border:" none",height:"650px"},children:e.children})},f=function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(e){var r;return Object(a.a)(this,n),(r=t.call(this,e)).state={hasErrors:!1},r}return Object(i.a)(n,[{key:"componentDidCatch",value:function(e,t){this.setState({hasErrors:!0})}},{key:"render",value:function(){return this.state.hasErrors?Object(r.jsx)("h1",{children:" Oooooop. That is not good"}):this.props.children}}]),n}(c.Component),O=(n(14),function(e){Object(h.a)(n,e);var t=Object(l.a)(n);function n(){var e;return Object(a.a)(this,n),(e=t.call(this)).onSearchChange=function(t){e.setState({searchField:t.target.value}),console.log(t.target.value)},e.state={robots:[],searchField:""},e}return Object(i.a)(n,[{key:"componentDidMount",value:function(){var e=this;fetch("https://jsonplaceholder.typicode.com/users").then((function(e){return e.json()})).then((function(t){return e.setState({robots:t})}))}},{key:"render",value:function(){var e=this.state,t=e.robots,n=e.searchField,c=t.filter((function(e){return e.name.toLowerCase().includes(n.toLowerCase())}));return 0===t.length?Object(r.jsx)("h1",{children:" Loading "}):Object(r.jsxs)("div",{className:"tc",children:[Object(r.jsx)("h1",{className:"f1",children:" Robofriends"}),Object(r.jsx)(d,{searchChange:this.onSearchChange}),Object(r.jsx)(j,{children:Object(r.jsx)(f,{children:Object(r.jsx)(b,{robots:c})})})]})}}]),n}(c.Component)),g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,17)).then((function(t){var n=t.getCLS,r=t.getFID,c=t.getFCP,s=t.getLCP,o=t.getTTFB;n(e),r(e),c(e),s(e),o(e)}))};n(15);o.a.render(Object(r.jsx)(O,{}),document.getElementById("root")),g()}},[[16,1,2]]]);
//# sourceMappingURL=main.75d7aa94.chunk.js.map