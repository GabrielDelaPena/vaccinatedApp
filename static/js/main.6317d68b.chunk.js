(this.webpackJsonplist_vaccinated=this.webpackJsonplist_vaccinated||[]).push([[0],{25:function(e,t,n){},26:function(e,t,n){},36:function(e,t,n){"use strict";n.r(t);var c=n(0),i=n.n(c),a=n(18),s=n.n(a),r=(n(25),n(26),n(7)),j=n(1),d=function(){return Object(j.jsxs)("nav",{children:[Object(j.jsx)(r.b,{to:"/",children:"Home"}),Object(j.jsx)(r.b,{to:"/lists",children:"Lists"})]})},l=n(11),o=n(20),b=n(17),u=Object(c.createContext)(),O=function(e){var t=e.children,n=Object(c.useState)([{name:"Shaira Dela Pe\xf1a",isVaccinated:!0,id:1},{name:"Gabriel Dela Pe\xf1a",isVaccinated:!0,id:2},{name:"Patrick Dela Pe\xf1a",isVaccinated:!1,id:3},{name:"Shirlmies Balat",isVaccinated:!0,id:4},{name:"Maximo Dela Pe\xf1a",isVaccinated:!1,id:5}]),i=Object(l.a)(n,2),a=i[0],s=i[1],r={lists:a,onDelete:function(e){s(a.filter((function(t){return t.id!==e})))},onAdd:function(e){var t=Math.floor(996*Math.random())+4,n=Object(b.a)(Object(b.a)({},e),{},{id:t});s([].concat(Object(o.a)(a),[n]))}};return Object(j.jsx)(u.Provider,{value:r,children:t})},h=function(){var e=Object(c.useContext)(u).onAdd,t=Object(c.useState)(""),n=Object(l.a)(t,2),i=n[0],a=n[1],s=Object(c.useState)(!1),r=Object(l.a)(s,2),d=r[0],o=r[1];return Object(j.jsxs)("form",{onSubmit:function(t){t.preventDefault(),e({name:i,isVaccinated:d}),a(""),o("")},children:[Object(j.jsxs)("label",{children:["Name: ",Object(j.jsx)("span",{children:Object(j.jsx)("input",{type:"text",value:i,onChange:function(e){a(e.target.value)}})})]}),Object(j.jsxs)("label",{children:["Status: ",Object(j.jsx)("input",{type:"checkbox",value:d,onChange:function(e){o(e.currentTarget.checked)}})]}),Object(j.jsx)("button",{type:"submit",children:"Submit"})]})},x=function(){var e=Object(c.useContext)(u).lists;return Object(j.jsxs)(j.Fragment,{children:[Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Lists"}),e.map((function(e){return Object(j.jsx)(r.b,{to:"/list/".concat(e.name),className:"lists",children:e.name},e.id)}))]}),Object(j.jsx)("div",{children:Object(j.jsx)(h,{})})]})},m=function(){return Object(j.jsx)("div",{children:Object(j.jsx)("h3",{children:"Home Page"})})},f=n(2),p=function(){var e=Object(c.useContext)(u),t=e.lists,n=e.onDelete,i=Object(f.f)().name;return Object(j.jsxs)("div",{children:[Object(j.jsx)("h3",{children:"Information"}),t.filter((function(e){return e.name===i})).map((function(e){return Object(j.jsxs)("div",{children:[Object(j.jsxs)("p",{children:["Name: ",e.name]}),Object(j.jsxs)("p",{children:["Status: ",Object(j.jsx)("span",{className:e.isVaccinated?"green":"red",children:e.isVaccinated?"Vaccinated":"Not Vaccinated"})]}),Object(j.jsx)("button",{onClick:function(){return n(e.id)},children:"Delete"})]},e.id)}))]})};var v=function(){return Object(j.jsx)(r.a,{children:Object(j.jsx)("div",{className:"App",children:Object(j.jsx)(f.c,{children:Object(j.jsxs)(O,{children:[Object(j.jsx)(d,{}),Object(j.jsx)(f.a,{path:"/",exact:!0,component:m}),Object(j.jsx)(f.a,{path:"/lists",exact:!0,component:x}),Object(j.jsx)(f.a,{path:"/list/:name",component:p})]})})})})},g=function(e){e&&e instanceof Function&&n.e(3).then(n.bind(null,37)).then((function(t){var n=t.getCLS,c=t.getFID,i=t.getFCP,a=t.getLCP,s=t.getTTFB;n(e),c(e),i(e),a(e),s(e)}))};s.a.render(Object(j.jsx)(i.a.StrictMode,{children:Object(j.jsx)(v,{})}),document.getElementById("root")),g()}},[[36,1,2]]]);
//# sourceMappingURL=main.6317d68b.chunk.js.map