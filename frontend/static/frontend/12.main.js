(window.webpackJsonp=window.webpackJsonp||[]).push([[12],{567:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(66);t.a=function(e){var t=e.handleEditar,r=e.handleBorrar,n=e.handleInhabilitar,i=e.handleSetup,l=e.rowData,c={label:"Inactivar",className:"p-button-warning",icon:"pi pi-thumbs-down"};return l.estado||(c={label:"Activar",className:"p-button-success",icon:"pi pi-thumbs-up"}),a.a.createElement("div",null,r?a.a.createElement(o.Button,{type:"button",icon:"pi pi-trash",className:"p-button-danger",tooltip:"Borrar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return r(l)}}):null,n?a.a.createElement(o.Button,{type:"button",icon:c.icon,className:c.className,tooltip:c.label,tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return n(l)}}):null,t?a.a.createElement(o.Button,{type:"button",icon:"pi pi-pencil",className:"p-button-info",tooltip:"Editar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return t(l)}}):null,i?a.a.createElement(o.Button,{type:"button",icon:"pi pi-cog",className:"p-button-secondary",tooltip:"Configurar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return i(l)}}):null)}},571:function(e,t,r){"use strict";var n=r(0),a=r.n(n),o=r(568),i=r(66);t.a=function(e){var t=e.texto,r=e.visible,l=e.handleBorrar,c=e.toggleSidebar,u=e.selectedItem;return a.a.createElement(o.Sidebar,{visible:r,position:"top",className:"ui-sidebar-sm",onHide:function(e){return c()}},a.a.createElement(n.Fragment,null,a.a.createElement("div",{className:"p-grid"},a.a.createElement("div",{className:"p-col-12",style:{textAlign:"center"}},a.a.createElement("h2",null,t)),a.a.createElement("div",{className:"p-col",style:{marginTop:"1em",textAlign:"center"}},a.a.createElement(i.Button,{label:"Borrar",icon:"pi pi-trash",className:"p-button-danger",onClick:function(){l(u.id),c()}}),a.a.createElement(i.Button,{style:{margin:"0px 4px 4px 8px"},label:"Cancelar",icon:"pi pi-undo",className:"p-button-primary",onClick:function(){return c()}})))))}},629:function(e,t,r){"use strict";r.r(t);var n=r(0),a=r.n(n),o=r(122),i=r(569),l=r(570),c=r(66),u=r(26),s=r(14),p=r(18),m=r(3),d=r.n(m),f=r(118),b=r(8);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return g(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return g(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function g(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var v=function(e){var t=y(Object(n.useState)(e),2),r=t[0],o=t[1],i=y(Object(n.useState)([]),2),l=i[0],c=i[1],u=Object(n.useContext)(b.a).tokenConfig;Object(n.useEffect)((function(){d.a.get("/api/provincias/",u()).then((function(e){c(e.data)})).catch((function(e){return alert.error(e.response.statusText)}))}),[]);var s=function(e){return e.nombre};return[r,function(){return a.a.createElement(f.Dropdown,{style:{width:"100%"},autoWidth:!0,value:r,options:l,itemTemplate:s,optionLabel:"nombre",onChange:function(e){o(e.value)},filter:!0,filterPlaceholder:"Seleccione Provincia",filterBy:"label",placeholder:"Seleccione Provincia"})},o]};function h(e,t){var r=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),r.push.apply(r,n)}return r}function E(e,t,r){return t in e?Object.defineProperty(e,t,{value:r,enumerable:!0,configurable:!0,writable:!0}):e[t]=r,e}function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return O(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return O(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function O(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}var C=function(e){var t=e.editar,r=Object(n.useContext)(o.a),i=r.cp,l=r.showFormCP,m=r.mostrarFormularioCP,d=r.addCP,f=r.updateCP,b=r.setCP,y=i.codigo,g=i.localidad,O=i.provincia,C=Object(n.useContext)(s.a).showMessage,j=x(v({}),3),w=j[0],S=j[1],P=j[2],N=function(e){b(function(e){for(var t=1;t<arguments.length;t++){var r=null!=arguments[t]?arguments[t]:{};t%2?h(Object(r),!0).forEach((function(t){E(e,t,r[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(r)):h(Object(r)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(r,t))}))}return e}({},i,E({},e.target.name,e.target.value.toUpperCase())))};return Object(n.useEffect)((function(){P(O)}),[i]),a.a.createElement(n.Fragment,null,l?a.a.createElement("div",{className:"p-grid  p-justify-center",style:{margin:"20px 0px 50px 0px"}},a.a.createElement("div",{className:"p-col "},a.a.createElement("div",{className:"card"},t?a.a.createElement("h1",null,"Editar Código Postal"):a.a.createElement("h1",null,"Agregar Código Postal"),a.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),Object(p.b)(y)|Object(p.b)(g)|null==w)C({msg:"Hay campos vacíos",title:"Error",type:"error"});else{var r={codigo:y,localidad:g,provincia:w};t?f(r):(d(r),b({localidad:"",codigo:"",provincia:{}}))}}},a.a.createElement("div",{className:"p-col-4"},a.a.createElement("span",{className:"p-float-label",style:{margin:"25px 0px 25px 0px"}},a.a.createElement(u.InputText,{id:"cod",name:"codigo",size:"50",disabled:t,value:y,onChange:N,autoFocus:!0}),a.a.createElement("label",{htmlFor:"cod"},"Código Postal")),a.a.createElement("span",{className:"p-float-label",style:{margin:"25px 0px 25px 0px"}},a.a.createElement(u.InputText,{id:"localidad",name:"localidad",onChange:N,autoFocus:t,value:g,size:"50"}),a.a.createElement("label",{htmlFor:"alicuota"},"Localidad")),a.a.createElement(S,null),a.a.createElement("br",null)),a.a.createElement("div",null,a.a.createElement(c.Button,{style:{margin:"15px 0px 0px 0px"},label:"Grabar",icon:"pi pi-save",className:"p-button-success",type:"submit"}),a.a.createElement(c.Button,{style:{margin:"15px 0px 0px 10px"},label:"Cancelar",icon:"pi pi-undo",className:"p-button-primary",onClick:function(){return m()}})))))):null)},j=r(571),w=r(567);function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var r=[],n=!0,a=!1,o=void 0;try{for(var i,l=e[Symbol.iterator]();!(n=(i=l.next()).done)&&(r.push(i.value),!t||r.length!==t);n=!0);}catch(e){a=!0,o=e}finally{try{n||null==l.return||l.return()}finally{if(a)throw o}}return r}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return P(e,t);var r=Object.prototype.toString.call(e).slice(8,-1);"Object"===r&&e.constructor&&(r=e.constructor.name);if("Map"===r||"Set"===r)return Array.from(r);if("Arguments"===r||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(r))return P(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function P(e,t){(null==t||t>e.length)&&(t=e.length);for(var r=0,n=new Array(t);r<t;r++)n[r]=e[r];return n}t.default=function(e){var t=S(Object(n.useState)({visible:!1}),2),r=t[0],s=t[1],p=S(Object(n.useState)(!1),2),m=p[0],d=p[1],f=S(Object(n.useState)(""),2),b=f[0],y=f[1],g=S(Object(n.useState)({}),2),v=g[0],h=g[1],E=Object(n.useContext)(o.a),x=E.codigospostales,O=E.mostrarFormularioCP,P=E.getCP,N=E.deleteCP,A=E.setCP,B=function(e){A(e),d(!0),O()},I=function(e){h(e),k()},k=function(){s({visible:!r.visible})};return Object(n.useEffect)((function(){P()}),[]),a.a.createElement(n.Fragment,null,a.a.createElement(C,{editar:m}),a.a.createElement("div",{className:"p-grid"},a.a.createElement("div",{className:"p-col-12"},a.a.createElement("div",{className:"card"},a.a.createElement("h1",null,"Códigos Postales"),a.a.createElement(j.a,{texto:"¿Está seguro de borrar este Código Postal?",visible:r.visible,handleBorrar:N,toggleSidebar:k,selectedItem:v}),a.a.createElement("div",{style:{textAlign:"right"},className:"p-col-12"},a.a.createElement("i",{className:"pi pi-search",style:{margin:"4px 4px 4px 8px"}}),a.a.createElement(u.InputText,{type:"search",onInput:function(e){return y(e.target.value)},placeholder:"Buscar",size:"50"}),a.a.createElement(c.Button,{style:{margin:"4px 4px 4px 8px"},label:"Agregar",icon:"pi pi-plus",className:"p-button-success",onClick:function(){return d(!1),A({}),void O()}})),a.a.createElement(i.DataTable,{style:{margin:"20px 0px 0px 0px"},value:x,globalFilter:b,emptyMessage:"No se encontraron registros",paginator:!0,rows:10,rowsPerPageOptions:[5,10,20,50],sortField:"localidad",sortOrder:1},a.a.createElement(l.Column,{field:"codigo",header:"C.P.",sortable:!0,style:{width:"150px",textAlign:"center"}}),a.a.createElement(l.Column,{field:"localidad",header:"Localidad",sortable:!0}),a.a.createElement(l.Column,{field:"provincia.nombre",header:"Provincia",sortable:!0,style:{textAlign:"center"}}),a.a.createElement(l.Column,{body:function(e,t){return a.a.createElement(w.a,{handleBorrar:I,handleEditar:B,rowData:e})},style:{textAlign:"center",width:"8em"}}))))))}}}]);