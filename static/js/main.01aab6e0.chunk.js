(this.webpackJsonpuserdirectory=this.webpackJsonpuserdirectory||[]).push([[0],{5:function(e,t,s){},50:function(e,t,s){"use strict";s.r(t);var n=s(0),r=s(2),c=s.n(r),a=s(14),i=s.n(a),o=s(15),l=s(16),d=s(22),h=s(21),j=(s(5),s(17)),u=s.n(j);var b={usersList:function(){return u.a.get("https://randomuser.me/api/?results=200&nat=US")}},m=function(e){Object(d.a)(s,e);var t=Object(h.a)(s);function s(){var e;Object(o.a)(this,s);for(var r=arguments.length,c=new Array(r),a=0;a<r;a++)c[a]=arguments[a];return(e=t.call.apply(t,[this].concat(c))).state={users:[],search:"",sortDirection:"",col:""},e.handleSearchChange=function(t){e.setState({search:t.target.value})},e.renderUsers=function(){return e.filteredUsers().sort(e.sortUsers).map((function(e,t){return Object(n.jsxs)("tr",{children:[Object(n.jsx)("td",{children:Object(n.jsx)("img",{src:e.image,alt:"user"})}),Object(n.jsx)("td",{children:e.first}),Object(n.jsx)("td",{children:e.last}),Object(n.jsx)("td",{children:e.email}),Object(n.jsx)("td",{children:new Date(e.dob).toDateString()})]},t)}))},e.getHeaderClassName=function(t){return e.state.col===t?"clickable ".concat(e.state.sortDirection):"clickable"},e.handleSortDirectionChange=function(t){e.state.col===t&&"ascending"===e.state.sortDirection?e.setState({sortDirection:"descending",col:t}):e.setState({sortDirection:"ascending",col:t})},e.sortUsers=function(t,s){return t[e.state.col]<s[e.state.col]?"ascending"===e.state.sortDirection?-1:1:t[e.state.col]>s[e.state.col]?"ascending"===e.state.sortDirection?1:-1:0},e}return Object(l.a)(s,[{key:"componentDidMount",value:function(){var e=this;b.usersList().then((function(t){var s=t.data.results.map((function(e){return{first:e.name.first,last:e.name.last,email:e.email,dob:e.dob.date,image:e.picture.medium}}));e.setState({users:s})})).catch((function(e){return console.log(e)}))}},{key:"filteredUsers",value:function(){var e=this.state.search.toLowerCase();return this.state.users.filter((function(t){return t.first.toLowerCase().includes(e)||t.last.toLowerCase().includes(e)}))}},{key:"render",value:function(){var e=this;return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsxs)("div",{className:"input-group justify-content-center",children:[Object(n.jsx)("div",{className:"input-group-prepend"}),Object(n.jsx)("input",{onChange:this.handleSearchChange,type:"search",className:"form-control m-3",placeholder:"Search","aria-label":"SearchBox","aria-describedby":"basic-addon1"})]}),Object(n.jsx)("div",{className:"table m-3",children:Object(n.jsxs)("table",{className:"table table-striped",children:[Object(n.jsx)("thead",{children:Object(n.jsxs)("tr",{children:[Object(n.jsx)("th",{scope:"col",children:"Image"}),Object(n.jsx)("th",{scope:"col",children:Object(n.jsx)("span",{className:this.getHeaderClassName("first"),onClick:function(){e.handleSortDirectionChange("first")},children:"First Name"})}),Object(n.jsx)("th",{scope:"col",children:Object(n.jsx)("span",{className:this.getHeaderClassName("last"),onClick:function(){return e.handleSortDirectionChange("last")},children:"Last Name"})}),Object(n.jsx)("th",{scope:"col",children:Object(n.jsx)("span",{className:this.getHeaderClassName("email"),onClick:function(){return e.handleSortDirectionChange("email")},children:"Email Address"})}),Object(n.jsx)("th",{scope:"col",children:Object(n.jsx)("span",{className:this.getHeaderClassName("dob"),onClick:function(){return e.handleSortDirectionChange("dob")},children:"Date of Birth"})})]})}),Object(n.jsx)("tbody",{children:this.renderUsers()})]})})]})}}]),s}(c.a.Component),f=s(18);var O=function(){return Object(n.jsxs)("div",{children:[Object(n.jsx)(f.a,{children:Object(n.jsxs)("title",{children:[" ","User Directory"," "]})}),Object(n.jsx)("div",{class:"jumbotron jumbotron-fluid",children:Object(n.jsxs)("div",{class:"container",children:[Object(n.jsx)("h1",{class:"display-4",children:"User Directory"}),Object(n.jsx)("p",{class:"lead",children:"This is a list of your employees."})]})})]})};var x=function(){return Object(n.jsxs)(n.Fragment,{children:[Object(n.jsx)(O,{}),Object(n.jsx)(m,{})]})},g=function(e){e&&e instanceof Function&&s.e(3).then(s.bind(null,51)).then((function(t){var s=t.getCLS,n=t.getFID,r=t.getFCP,c=t.getLCP,a=t.getTTFB;s(e),n(e),r(e),c(e),a(e)}))};s(49);i.a.render(Object(n.jsx)(c.a.StrictMode,{children:Object(n.jsx)(x,{})}),document.getElementById("root")),g()}},[[50,1,2]]]);
//# sourceMappingURL=main.01aab6e0.chunk.js.map