(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{13:function(e,a,t){},15:function(e,a,t){},17:function(e,a,t){"use strict";t.r(a);var n=t(0),l=t.n(n),r=t(3),c=t.n(r),o=(t(13),t(1));t(15);function s(e){return l.a.createElement("nav",{className:"navbar navbar-expand-lg navbar-dark bg-dark"},l.a.createElement("div",{className:"container-fluid"},l.a.createElement("a",{className:"navbar-brand",href:"#"},e.title),l.a.createElement("button",{className:"navbar-toggler",type:"button","data-bs-toggle":"collapse","data-bs-target":"#navbarNavDropdown","aria-controls":"navbarNavDropdown","aria-expanded":"false","aria-label":"Toggle navigation"},l.a.createElement("span",{className:"navbar-toggler-icon"})),l.a.createElement("div",{className:"collapse navbar-collapse",id:"navbarNavDropdown"},l.a.createElement("ul",{className:"navbar-nav"},l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link active","aria-current":"page",href:"#"},"Home")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"About")),l.a.createElement("li",{className:"nav-item"},l.a.createElement("a",{className:"nav-link",href:"#"},"Pricing")),l.a.createElement("li",{className:"nav-item dropdown"},l.a.createElement("a",{className:"nav-link dropdown-toggle",href:"#",id:"navbarDropdownMenuLink",role:"button","data-bs-toggle":"dropdown","aria-expanded":"false"},"Dropdown link"),l.a.createElement("ul",{className:"dropdown-menu","aria-labelledby":"navbarDropdownMenuLink"},l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"#"},"Action")),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"#"},"Another action")),l.a.createElement("li",null,l.a.createElement("a",{className:"dropdown-item",href:"#"},"Something else here"))))))))}function m(e){var a=Object(n.useState)("enter your text"),t=Object(o.a)(a,2),r=t[0],c=t[1];return l.a.createElement(l.a.Fragment,null,l.a.createElement("h1",null,e.heading),l.a.createElement("div",{className:"mb-3"},l.a.createElement("label",{htmlFor:"Mytextbox",className:"form-label"}),l.a.createElement("textarea",{className:"form-control",value:r,onChange:function(e){c(e.target.value)},id:"Mytextbox",rows:"10"})),l.a.createElement("button",{className:"btn-primary mx-2",onClick:function(){var a=r.toUpperCase();c(a),e.showAlert("Changed to uppercase","Success")}},"CONVERT TO UPPERCASE"),l.a.createElement("button",{className:"btn-primary mx-2",onClick:function(){var a=r.toLowerCase();c(a),e.showAlert("Changed to Lowercase","Success")}},"CONVERT TO LOWERCASE"),l.a.createElement("button",{className:"btn-primary mx-2",onClick:function(){c("")}},"CLEAR TEXT"),l.a.createElement("h1",null,"text summary"),l.a.createElement("p",null,r.split(" ").filter(function(e){return""!==e}).length," words and ",r.length," characters"),l.a.createElement("h3",null,"PREVIEW"),l.a.createElement("p",null,r))}function i(e){return e.alert&&l.a.createElement("div",null,l.a.createElement("div",{className:"alert alert-warning alert-dismissible fade show",role:"alert"},e.alert.msg))}var u=function(){var e=Object(n.useState)("Enable dark mode"),a=Object(o.a)(e,2),t=a[0],r=a[1],c=Object(n.useState)({color:"black",backgroundColor:"white"}),u=Object(o.a)(c,2),d=u[0],b=u[1],E=Object(n.useState)(null),g=Object(o.a)(E,2),v=g[0],h=g[1],p=function(e,a){h({msg:e,type:a}),setTimeout(function(){h(null)},1500)};return l.a.createElement(l.a.Fragment,null,l.a.createElement("div",{style:d},l.a.createElement(s,{title:"TextUtils"}),l.a.createElement(i,{alert:v}),l.a.createElement("div",{className:"container",style:d},l.a.createElement(m,{showAlert:p,heading:"Enter the text here"}),l.a.createElement("button",{className:"btn-primary mx-2",onClick:function(){"black"===d.color?(b({color:"white",backgroundColor:"black"}),document.body.style.backgroundColor="black",r("Enable light mode"),p("dark mode has been enabled","success")):(b({color:"black",backgroundColor:"white"}),document.body.style.backgroundColor="white",r("Enable dark mode"),p("Light mode has been enabled","success"))}},t))))},d=function(e){e&&e instanceof Function&&t.e(1).then(t.bind(null,18)).then(function(a){var t=a.getCLS,n=a.getFID,l=a.getFCP,r=a.getLCP,c=a.getTTFB;t(e),n(e),l(e),r(e),c(e)})};c.a.createRoot(document.getElementById("root")).render(l.a.createElement(l.a.StrictMode,null,l.a.createElement(u,null))),d()},4:function(e,a,t){e.exports=t(17)}},[[4,3,2]]]);
//# sourceMappingURL=main.4b5aa0e3.chunk.js.map