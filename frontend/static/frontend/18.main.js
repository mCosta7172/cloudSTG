(window.webpackJsonp=window.webpackJsonp||[]).push([[18],{397:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(58);t.a=function(e){var t=e.handleEditar,n=e.handleBorrar,a=e.handleInhabilitar,o=e.handleSetup,l=e.rowData,c={label:"Inactivar",className:"p-button-warning",icon:"pi pi-thumbs-down"};return l.estado||(c={label:"Activar",className:"p-button-success",icon:"pi pi-thumbs-up"}),r.a.createElement("div",null,n?r.a.createElement(i.Button,{type:"button",icon:"pi pi-trash",className:"p-button-danger",tooltip:"Borrar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return n(l)}}):null,a?r.a.createElement(i.Button,{type:"button",icon:c.icon,className:c.className,tooltip:c.label,tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return a(l)}}):null,t?r.a.createElement(i.Button,{type:"button",icon:"pi pi-pencil",className:"p-button-info",tooltip:"Editar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return t(l)}}):null,o?r.a.createElement(i.Button,{type:"button",icon:"pi pi-cog",className:"p-button-secondary",tooltip:"Configurar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return o(l)}}):null)}},402:function(e,t,n){"use strict";var a=n(0),r=n.n(a),i=n(399),o=n(58);t.a=function(e){var t=e.texto,n=e.visible,l=e.handleBorrar,c=e.toggleSidebar,s=e.selectedItem;return r.a.createElement(i.Sidebar,{visible:n,position:"top",className:"ui-sidebar-sm",onHide:function(e){return c()}},r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-col-12",style:{textAlign:"center"}},r.a.createElement("h2",null,t)),r.a.createElement("div",{className:"p-col",style:{marginTop:"1em",textAlign:"center"}},r.a.createElement(o.Button,{label:"Borrar",icon:"pi pi-trash",className:"p-button-danger",onClick:function(){l(s.id),c()}}),r.a.createElement(o.Button,{style:{margin:"0px 4px 4px 8px"},label:"Cancelar",icon:"pi pi-undo",className:"p-button-primary",onClick:function(){return c()}})))))}},477:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),i=n(410),o=n(400),l=n(401),c=n(58),s=n(26),u=n(27),p=n(66);function m(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function b(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}var d=function(e){var t=e.editar,n=Object(a.useContext)(i.a),o=n.provincia,l=n.showFormProvincia,d=n.mostrarFormularioProvincias,g=n.addProvincia,f=n.updateProvincia,v=n.setProvincia,y=o.codigo,E=o.nombre,x=Object(a.useContext)(u.a).showMessage,h=function(e){v(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?m(Object(n),!0).forEach((function(t){b(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):m(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},o,b({},e.target.name,e.target.value.toUpperCase())))};return r.a.createElement(a.Fragment,null,l?r.a.createElement("div",{className:"p-grid  p-justify-center",style:{margin:"20px 0px 50px 0px"}},r.a.createElement("div",{className:"p-col "},r.a.createElement("div",{className:"card"},t?r.a.createElement("h1",null,"Editar Provincia"):r.a.createElement("h1",null,"Agregar Provincia"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Object(p.b)(y)||Object(p.b)(E)?x({msg:"Hay campos vacíos",title:"Error",type:"error"}):t?f(o):(g(o),v({codigo:"",nombre:""}))}},r.a.createElement("span",{className:"p-float-label",style:{margin:"25px 0px 0px 0px"}},r.a.createElement(s.InputText,{id:"in",name:"codigo",autoFocus:!0,onChange:h,disabled:t,value:y,size:"50",maxlength:"1"}),r.a.createElement("label",{htmlFor:"in"},"Código")),r.a.createElement("span",{className:"p-float-label",style:{margin:"25px 0px 25px 0px"}},r.a.createElement(s.InputText,{id:"provincia",name:"nombre",onChange:h,autoFocus:t,value:E,size:"50"}),r.a.createElement("label",{htmlFor:"provincia"},"Provincia")),r.a.createElement("div",null,r.a.createElement(c.Button,{style:{margin:"15px 0px 0px 0px"},label:"Grabar",icon:"pi pi-save",className:"p-button-success",type:"submit"}),r.a.createElement(c.Button,{style:{margin:"15px 0px 0px 10px"},label:"Cancelar",icon:"pi pi-undo",className:"p-button-primary",onClick:function(){return d()}})))))):null)},g=n(402),f=n(397);function v(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,i=void 0;try{for(var o,l=e[Symbol.iterator]();!(a=(o=l.next()).done)&&(n.push(o.value),!t||n.length!==t);a=!0);}catch(e){r=!0,i=e}finally{try{a||null==l.return||l.return()}finally{if(r)throw i}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return y(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return y(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function y(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(e){var t=v(Object(a.useState)({visible:!1}),2),n=t[0],u=t[1],p=v(Object(a.useState)(!1),2),m=p[0],b=p[1],y=v(Object(a.useState)(""),2),E=y[0],x=y[1],h=v(Object(a.useState)({}),2),O=h[0],j=h[1],w=Object(a.useContext)(i.a),N=w.provincias,P=w.mostrarFormularioProvincias,C=w.getProvincias,S=w.deleteProvincia,B=w.setProvincia,A=function(e){B(e),b(!0),P()},F=function(e){j(e),k()},k=function(){u({visible:!n.visible})};return Object(a.useEffect)((function(){C()}),[]),r.a.createElement(a.Fragment,null,r.a.createElement(d,{editar:m}),r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-col-12"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"Provincias"),r.a.createElement(g.a,{texto:"¿Está seguro de borrar esta Provincia?",visible:n.visible,handleBorrar:S,toggleSidebar:k,selectedItem:O}),r.a.createElement("div",{style:{textAlign:"right"},className:"p-col-12"},r.a.createElement("i",{className:"pi pi-search",style:{margin:"4px 4px 4px 8px"}}),r.a.createElement(s.InputText,{type:"search",onInput:function(e){return x(e.target.value)},placeholder:"Buscar",size:"50"}),r.a.createElement(c.Button,{style:{margin:"4px 4px 4px 8px"},label:"Agregar",icon:"pi pi-plus",className:"p-button-success",onClick:function(){return b(!1),B({}),void P()}})),r.a.createElement(o.DataTable,{style:{margin:"20px 0px 0px 0px"},value:N,globalFilter:E,emptyMessage:"No se encontraron registros",paginator:!0,rows:10,rowsPerPageOptions:[5,10,20,50],sortField:"codigo",sortOrder:1},r.a.createElement(l.Column,{field:"codigo",header:"Codigo",sortable:!0,style:{width:"150px",textAlign:"center"}}),r.a.createElement(l.Column,{field:"nombre",header:"Provicia",sortable:!0}),r.a.createElement(l.Column,{body:function(e,t){return r.a.createElement(f.a,{handleBorrar:F,handleEditar:A,rowData:e})},style:{textAlign:"center",width:"8em"}}))))))}}}]);