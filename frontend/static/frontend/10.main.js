(window.webpackJsonp=window.webpackJsonp||[]).push([[10],{397:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(58);t.a=function(e){var t=e.handleEditar,n=e.handleBorrar,a=e.handleInhabilitar,l=e.handleSetup,i=e.rowData,c={label:"Inactivar",className:"p-button-warning",icon:"pi pi-thumbs-down"};return i.estado||(c={label:"Activar",className:"p-button-success",icon:"pi pi-thumbs-up"}),r.a.createElement("div",null,n?r.a.createElement(o.Button,{type:"button",icon:"pi pi-trash",className:"p-button-danger",tooltip:"Borrar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return n(i)}}):null,a?r.a.createElement(o.Button,{type:"button",icon:c.icon,className:c.className,tooltip:c.label,tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return a(i)}}):null,t?r.a.createElement(o.Button,{type:"button",icon:"pi pi-pencil",className:"p-button-info",tooltip:"Editar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return t(i)}}):null,l?r.a.createElement(o.Button,{type:"button",icon:"pi pi-cog",className:"p-button-secondary",tooltip:"Configurar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return l(i)}}):null)}},403:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(399),l=n(58);t.a=function(e){var t=e.texto,n=e.visible,i=e.setEstado,c=e.toggleSidebar,u=e.selectedItem,s={label:"Inactivar",className:"p-button-warning",icon:"pi pi-thumbs-down"};return u.estado||(s={label:"Activar",className:"p-button-success",icon:"pi pi-thumbs-up"}),r.a.createElement(o.Sidebar,{visible:n,position:"top",className:"ui-sidebar-sm",onHide:function(e){return c()}},r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-col-12",style:{textAlign:"center"}},r.a.createElement("h2",null,t)),r.a.createElement("div",{className:"p-col",style:{marginTop:"1em",textAlign:"center"}},r.a.createElement(l.Button,{label:s.label,icon:s.icon,className:s.className,onClick:function(){i(u),c()}}),r.a.createElement(l.Button,{style:{margin:"0px 4px 4px 8px"},label:"Cancelar",icon:"pi pi-undo",className:"p-button-primary",onClick:function(){return c()}})))))}},409:function(e,t,n){"use strict";var a=n(0),r=n.n(a),o=n(13),l=n.n(o),i=n(398),c=n(37);function u(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return s(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return s(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function s(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.a=function(e){var t=u(Object(a.useState)(e),2),n=t[0],o=t[1],s=u(Object(a.useState)([]),2),m=s[0],p=s[1],d=Object(a.useContext)(c.a).tokenConfig;Object(a.useEffect)((function(){l.a.get("/api/codigospostales/",d()).then((function(e){p(e.data)})).catch((function(e){return console.log(e.response)}))}),[]);var f=function(e){return"(".concat(e.codigo,") ").concat(e.localidad)};return[n,function(){return r.a.createElement(i.Dropdown,{style:{width:"100%"},autoWidth:!0,value:n,options:m,itemTemplate:f,optionLabel:"localidad",onChange:function(e){o(e.value)},filter:!0,filterPlaceholder:"Buscar...",filterBy:"label",placeholder:"Seleccione Localidad"})},o]}},477:function(e,t,n){"use strict";n.r(t);var a=n(0),r=n.n(a),o=n(407),l=n(37),i=n(400),c=n(401),u=n(58),s=n(26),m=n(398),p=n(65),d=n.n(p),f=n(27),b=(n(422),n(405)),g=n(451),y={firstDayOfWeek:1,dayNames:["domingo","lunes","martes","miércoles","jueves","viernes","sábado"],dayNamesShort:["dom","lun","mar","mié","jue","vie","sáb"],dayNamesMin:["D","L","M","X","J","V","S"],monthNames:["enero","febrero","marzo","abril","mayo","junio","julio","agosto","septiembre","octubre","noviembre","diciembre"],monthNamesShort:["ene","feb","mar","abr","may","jun","jul","ago","sep","oct","nov","dic"],today:"Hoy",clear:"Limpiar",dateFormat:"dd/mm/yy",weekHeader:"Sm"},v=n(66),h=n(13),E=n.n(h);function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return j(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return j(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function j(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var S=function(e){var t=O(Object(a.useState)(e),2),n=t[0],o=t[1],i=O(Object(a.useState)([]),2),c=i[0],u=i[1],s=Object(a.useContext)(l.a).tokenConfig;Object(a.useEffect)((function(){E.a.get("/api/tipodocumento/",s()).then((function(e){u(e.data)})).catch((function(e){return console.log(e.response.statusText)}))}),[]);var p=function(e){return e.nombre};return[n,function(){return r.a.createElement(m.Dropdown,{style:{width:"100%"},autoWidth:!0,value:n,options:c,itemTemplate:p,optionLabel:"nombre",onChange:function(e){o(e.value)},filter:!0,filterPlaceholder:"Buscar...",filterBy:"label",placeholder:"Seleccione Tipo de Documento"})},o]};function C(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var w=function(e){var t=C(Object(a.useState)(e),2),n=t[0],o=t[1],i=C(Object(a.useState)([]),2),c=i[0],u=i[1],s=Object(a.useContext)(l.a).tokenConfig;Object(a.useEffect)((function(){E.a.get("/api/condicioniva/",s()).then((function(e){u(e.data)})).catch((function(e){return alert.error(e.response.statusText)}))}),[]);var p=function(e){return e.nombre};return[n,function(){return r.a.createElement(m.Dropdown,{style:{width:"100%"},autoWidth:!0,value:n,options:c,itemTemplate:p,optionLabel:"nombre",onChange:function(e){o(e.value)},filter:!0,filterPlaceholder:"Buscar...",filterBy:"label",placeholder:"Seleccione Condicion IVA"})},o]},x=n(409);function A(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return T(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return T(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function T(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var I=function(e){var t=A(Object(a.useState)(e),2),n=t[0],o=t[1],i=A(Object(a.useState)([]),2),c=i[0],u=i[1],s=Object(a.useContext)(l.a),p=s.tokenConfig,d=s.agencia,f=(s.user,function(e){o(e.value)});Object(a.useEffect)((function(){d&&E.a.get("/api/cobrador-agencia/".concat(d.id),p()).then((function(e){var t=e.data.filter((function(e){return e.estado}));u(t)})).catch((function(e){return console.log(e.response.statusText)}))}),[d]);var b=function(e){return e.nombre};return[n,function(){return r.a.createElement(m.Dropdown,{style:{width:"90%"},autoWidth:!0,value:n,options:c,itemTemplate:b,optionLabel:"nombre",onChange:f,placeholder:"Seleccione Cobrador"})},o]};function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return _(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return _(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function _(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var P=function(e){var t=k(Object(a.useState)(e),2),n=t[0],o=t[1],i=k(Object(a.useState)([]),2),c=i[0],u=i[1],s=Object(a.useContext)(l.a),p=s.tokenConfig,d=s.agencia,f=function(e){o(e.value)};Object(a.useEffect)((function(){d&&E.a.get("/api/zona-agencia/".concat(d.id),p()).then((function(e){var t=e.data.filter((function(e){return e.estado}));u(t)})).catch((function(e){return console.log(e.response.statusText)}))}),[d]);var b=function(e){return e.nombre};return[n,function(){return r.a.createElement(m.Dropdown,{style:{width:"90%"},autoWidth:!0,value:n,options:c,itemTemplate:b,optionLabel:"nombre",onChange:f,placeholder:"Seleccione Zona"})},o]};function D(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return L(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return L(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function L(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var B=function(e){var t=D(Object(a.useState)(e),2),n=t[0],o=t[1],i=D(Object(a.useState)([]),2),c=i[0],u=i[1],s=Object(a.useContext)(l.a),p=s.tokenConfig,d=s.agencia,f=(s.user,function(e){o(e.value)});Object(a.useEffect)((function(){d&&E.a.get("/api/tarifa-agencia/".concat(d.id),p()).then((function(e){var t=e.data.filter((function(e){return e.estado}));u(t)})).catch((function(e){return console.log(e.response.statusText)}))}),[d]);var b=function(e){return e.nombre};return[n,function(){return r.a.createElement(m.Dropdown,{style:{width:"90%"},autoWidth:!0,value:n,options:c,itemTemplate:b,optionLabel:"nombre",onChange:f,placeholder:"Seleccione Tarifa"})},o]};function R(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function M(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?R(Object(n),!0).forEach((function(t){W(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):R(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}function W(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function F(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return V(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return V(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function V(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}var U=function(e){var t=e.editar,n=Object(a.useContext)(o.a),l=n.cliente,i=n.showForm,c=n.mostrarFormulario,m=n.addCliente,p=n.updateCliente,d=n.setCliente,h=n.cliente_agencia,E=n.setClienteAgencia,O=l.nombre,j=l.tipo_documento,C=l.nro_documento,N=l.iva,A=l.codigo_postal,T=l.domicilio,k=l.telefono,_=l.email,D=l.representante,L=l.seguro_propio,R=l.seguro_propio_vencimiento,V=h.cobrador,U=h.zona,$=h.tarifa,z=h.tarifa_bulto,Y=h.tarifa_kg,H=h.tarifa_m3,J=h.tarifa_porcentaje,q=h.cta_cte,K=Object(a.useContext)(f.a).showMessage,Z=F(S({}),3),G=Z[0],X=Z[1],Q=Z[2],ee=F(w({}),3),te=ee[0],ne=ee[1],ae=ee[2],re=F(Object(x.a)({}),3),oe=re[0],le=re[1],ie=re[2],ce=F(I({}),3),ue=ce[0],se=ce[1],me=ce[2],pe=F(P({}),3),de=pe[0],fe=pe[1],be=pe[2],ge=F(B({}),3),ye=ge[0],ve=ge[1],he=ge[2],Ee=F(Object(a.useState)(!0),2),Oe=(Ee[0],Ee[1],function(e){d(M({},l,W({},e.target.name,e.target.value.toUpperCase())))});return Object(a.useEffect)((function(){Q(j),ie(A),ae(N),me(V),be(U),he($)}),[j,A,N,V,U,$]),r.a.createElement(a.Fragment,null,i?r.a.createElement(a.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"p-grid p-fluid"},r.a.createElement("div",{className:"p-col-12"},t?r.a.createElement("h1",null,"Editar Cliente"):r.a.createElement("h1",null,"Agregar Cliente")),r.a.createElement("div",{className:"p-col-12 p-md-6"},r.a.createElement("label",{style:{marginTop:"1em"}},"Nombre/Razón Social*"),r.a.createElement(s.InputText,{id:"nombre",name:"nombre",value:O,onChange:Oe,maxLength:"150",autoFocus:!0})),r.a.createElement("div",{className:"p-col-6"}),r.a.createElement("div",{className:"p-col-12 p-md-4"},r.a.createElement("label",{style:{marginTop:"1em"}},"Tipo Documento*"),r.a.createElement(X,null)),r.a.createElement("div",{className:"p-col-12 p-md-2"},r.a.createElement("label",{style:{marginTop:"1em"}},"Nro. Documento"),r.a.createElement(s.InputText,{id:"nro_documento",name:"nro_documento",onChange:Oe,value:C,maxLength:"11"})),r.a.createElement("div",{className:"p-col-12 p-md-6"},r.a.createElement("label",{style:{marginTop:"1em"}},"Cond. I.V.A.*"),r.a.createElement(ne,null)),r.a.createElement("div",{className:"p-col-12 p-md-6"},r.a.createElement("label",{style:{marginTop:"1em"}},"Domicilio"),r.a.createElement(s.InputText,{id:"domicilio",name:"domicilio",onChange:Oe,value:T,maxLength:"150"})),r.a.createElement("div",{className:"p-col-12 p-md-6"},r.a.createElement("label",{style:{marginTop:"1em"}},"Localidad*"),r.a.createElement(le,null)),r.a.createElement("div",{className:"p-col-12 p-md-6"},r.a.createElement("label",{style:{marginTop:"1em"}},"Teléfono"),r.a.createElement(s.InputText,{id:"telefono",name:"telefono",onChange:Oe,value:k,maxLength:"150"})),r.a.createElement("div",{className:"p-col-12 p-md-6"},r.a.createElement("label",{style:{marginTop:"1em"}},"Email"),r.a.createElement(s.InputText,{id:"email",name:"email",onChange:Oe,value:_,maxLength:"150"})),r.a.createElement("div",{className:"p-col-12 p-md-6"},r.a.createElement("label",{style:{marginTop:"1em"}},"Representante"),r.a.createElement(s.InputText,{id:"representante",name:"representante",onChange:Oe,value:D,maxLength:"150"})),r.a.createElement("div",{className:"p-col-12 p-md-6"},r.a.createElement("label",{style:{marginTop:"1em"}},"Cobrador*"),r.a.createElement(se,null)),r.a.createElement("div",{className:"p-col-12 p-md-6"},r.a.createElement("label",{style:{marginTop:"1em"}},"Zona*"),r.a.createElement(fe,null)),r.a.createElement("div",{className:"p-col-12 p-md-6"},r.a.createElement("label",{style:{marginTop:"1em"}},"Tarifa*"),r.a.createElement(ve,null)),r.a.createElement("div",{className:"p-col-12 p-md-3 p-col-align-center"},r.a.createElement("label",{style:{marginTop:"1em",marginRight:"1em"}},"Tarifa Bulto"),r.a.createElement(b.Checkbox,{checked:z,onChange:function(e){E(M({},h,{tarifa_bulto:e.checked}))}})),r.a.createElement("div",{className:"p-col-12 p-md-3 p-col-align-center"},r.a.createElement("label",{style:{marginTop:"1em",marginRight:"1em"}},"Tarifa Kg"),r.a.createElement(b.Checkbox,{checked:Y,onChange:function(e){E(M({},h,{tarifa_kg:e.checked}))}})),r.a.createElement("div",{className:"p-col-12 p-md-3 p-col-align-center"},r.a.createElement("label",{style:{marginTop:"1em",marginRight:"1em"}},"Tarifa m3"),r.a.createElement(b.Checkbox,{checked:H,onChange:function(e){E(M({},h,{tarifa_m3:e.checked}))}})),r.a.createElement("div",{className:"p-col-12 p-md-3 p-col-align-center"},r.a.createElement("label",{style:{marginTop:"1em",marginRight:"1em"}},"Tarifa %"),r.a.createElement(b.Checkbox,{checked:J,onChange:function(e){E(M({},h,{tarifa_porcentaje:e.checked}))}})),r.a.createElement("div",{className:"p-col-12 p-md-3 p-col-align-center"},r.a.createElement("label",{style:{marginTop:"1em",marginRight:"1em"}},"Seguro Propio"),r.a.createElement(b.Checkbox,{checked:L,onChange:function(e){d(M({},l,{seguro_propio:e.checked}))}})),r.a.createElement("div",{className:"p-col-12 p-md-3 p-col-align-center"},r.a.createElement(g.Calendar,{value:R,onChange:function(e){d(M({},l,{seguro_propio_vencimiento:e.value}))},locale:y,dateFormat:"dd/mm/yy",placeholder:"Fecha Vencimiento Seguro",showIcon:!0,disabled:!L})),r.a.createElement("div",{className:"p-col-12 p-md-6 p-col-align-center"},r.a.createElement("label",{style:{marginTop:"1em",marginRight:"1em"}},"Cuenta Corriente"),r.a.createElement(b.Checkbox,{checked:q,onChange:function(e){E(M({},h,{cta_cte:e.checked}))}})),r.a.createElement("div",{className:"p-col-12 p-md-2"},r.a.createElement(u.Button,{style:{marginTop:"1em"},label:"Grabar",icon:"pi pi-save",className:"p-button-success",onClick:function(){return function(){if(Object(v.b)(O)|null==G|null==te|null==oe|null==ue|null==de|null==ye)K({msg:"Los campos con * son obligatorios.",title:"Error",type:"error"});else{var e=Object(v.a)(R),n=M({},l,{tipo_documento:G,iva:te,codigo_postal:oe,seguro_propio_vencimiento:e}),a=M({},h,{cobrador:ue,zona:de,tarifa:ye});t?p(n,a):m(n,a)}}()}})),r.a.createElement("div",{className:"p-col-12 p-md-2"},r.a.createElement(u.Button,{style:{marginTop:"1em"},label:"Cancelar",icon:"pi pi-undo",className:"p-button-primary",onClick:function(){c()}}))))):null)},$=n(406),z=n.n($),Y=(n(167),n(403)),H=n(397),J=n(114),q=n.n(J);function K(e,t){var n=Object.keys(e);if(Object.getOwnPropertySymbols){var a=Object.getOwnPropertySymbols(e);t&&(a=a.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),n.push.apply(n,a)}return n}function Z(e,t,n){return t in e?Object.defineProperty(e,t,{value:n,enumerable:!0,configurable:!0,writable:!0}):e[t]=n,e}function G(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var n=[],a=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(a=(l=i.next()).done)&&(n.push(l.value),!t||n.length!==t);a=!0);}catch(e){r=!0,o=e}finally{try{a||null==i.return||i.return()}finally{if(r)throw o}}return n}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return X(e,t);var n=Object.prototype.toString.call(e).slice(8,-1);"Object"===n&&e.constructor&&(n=e.constructor.name);if("Map"===n||"Set"===n)return Array.from(n);if("Arguments"===n||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(n))return X(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function X(e,t){(null==t||t>e.length)&&(t=e.length);for(var n=0,a=new Array(t);n<t;n++)a[n]=e[n];return a}t.default=function(e){var t=G(Object(a.useState)({visible:!1}),2),n=t[0],p=t[1],f=G(Object(a.useState)(!1),2),b=f[0],g=f[1],y=G(Object(a.useState)(""),2),v=y[0],h=y[1],E=G(Object(a.useState)({}),2),O=E[0],j=E[1],S=G(Object(a.useState)("true"),2),C=S[0],N=S[1],w=G(Object(a.useState)({}),2),x=w[0],A=w[1],T=G(Object(a.useState)(!0),2),I=(T[0],T[1]),k=Object(a.useContext)(o.a),_=k.clientes,P=k.mostrarFormulario,D=k.getClientes,L=k.setCliente,B=k.toggleEstadoCliente,R=k.getClienteAgencia,M=(k.cliente_agencia,k.setClienteAgencia),W=Object(a.useContext)(l.a).agencia,F=function(e){var t=null;e.seguro_propio_vencimiento&&(t=q()(e.seguro_propio_vencimiento).toDate()),L(function(e){for(var t=1;t<arguments.length;t++){var n=null!=arguments[t]?arguments[t]:{};t%2?K(Object(n),!0).forEach((function(t){Z(e,t,n[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(n)):K(Object(n)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(n,t))}))}return e}({},e,{seguro_propio_vencimiento:t})),R(W.id,e.id),g(!0),P()},V=function(e){j(e),$()},$=function(){p({visible:!n.visible})},J=r.a.createRef(),X=r.a.createElement(m.Dropdown,{style:{width:"100%"},placeholder:"ACTIVOS",value:C,options:[{label:"ACTIVOS",value:"true"},{label:"INACTIVOS",value:"false"},{label:"TODOS",value:null}],onChange:function(e){J.filter(e.value,"estado","equals"),N(e.value)}});return Object(a.useEffect)((function(){D(),I(!1)}),[]),Object(a.useEffect)((function(){J.filter(C,"estado","equals")}),[]),r.a.createElement(a.Fragment,null,r.a.createElement(U,{editar:b}),r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-col-12"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"Clientes"),r.a.createElement(Y.a,{texto:"¿Está seguro de ".concat(O.estado?"Inactivar":"Activar"," este Cliente?"),visible:n.visible,setEstado:function(e){L(e),e.estado=!e.estado,B(e)},toggleSidebar:$,selectedItem:O}),r.a.createElement("div",{style:{textAlign:"right"},className:"p-col-12"},r.a.createElement("i",{className:"pi pi-search",style:{margin:"4px 4px 4px 8px"}}),r.a.createElement(s.InputText,{type:"search",onInput:function(e){return h(e.target.value)},placeholder:"Buscar",size:"50"}),r.a.createElement(u.Button,{style:{margin:"4px 4px 4px 8px"},label:"Agregar",icon:"pi pi-plus",className:"p-button-success",onClick:function(){return g(!1),L({}),M({}),void P()}})),r.a.createElement("div",{className:"datatable-doc-demo"},r.a.createElement(i.DataTable,{ref:function(e){return J=e},style:{margin:"20px 0px 0px 0px"},value:_,globalFilter:v,emptyMessage:"No se encontraron registros",paginator:!0,rows:25,rowsPerPageOptions:[5,10,25,50],className:"p-datatable-customers",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",expandedRows:x,onRowToggle:function(e){return A(e.data)},rowExpansionTemplate:function(e){var t=!1;return q()().diff(e.seguro_propio_vencimiento,"days")>0&&(t=!0),r.a.createElement("div",{className:"p-grid p-fluid",style:{padding:"2em 1em 1em 1em"}},r.a.createElement("div",{className:"p-col-12 p-md-6"},r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-md-2"},"Id: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},e.id),r.a.createElement("div",{className:"p-md-2"},"Nombre: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},e.nombre),r.a.createElement("div",{className:"p-md-2"},"Documento: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},e.tipo_documento.nombre," ",e.nro_documento),r.a.createElement("div",{className:"p-md-2"},"I.V.A: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},e.iva.nombre),r.a.createElement("div",{className:"p-md-2"},"Seguro Propio: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},e.seguro_propio?"Sí":"No"))),r.a.createElement("div",{className:"p-col-12 p-md-6"},r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-md-2"},"Domicilio: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},e.domicilio),r.a.createElement("div",{className:"p-md-2"},"Localidad: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},"(".concat(e.codigo_postal.codigo,") ").concat(e.codigo_postal.localidad)),r.a.createElement("div",{className:"p-md-2"},"Teléfono: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},e.telefono),r.a.createElement("div",{className:"p-md-2"},"Representante: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},e.representante),r.a.createElement("div",{className:"p-md-2"},"Vto. Seguro: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},e.seguro_propio?[r.a.createElement(z.a,{locale:"es",format:"DD-MM-YYYY"},e.seguro_propio_vencimiento),t?" (VENCIDO)":null]:null))))},dataKey:"id",responsive:!0},r.a.createElement(c.Column,{expander:!0,style:{width:"3em"}}),r.a.createElement(c.Column,{field:"nro_documento",header:"Documento",sortable:!0,style:{width:"150px",textAlign:"center"},filter:!0,filterPlaceholder:"Filtrar",filterMatchMode:"contains"}),r.a.createElement(c.Column,{field:"nombre",header:"Nombre/Razón Social",sortable:!0,filter:!0,filterPlaceholder:"Filtrar",filterMatchMode:"contains"}),r.a.createElement(c.Column,{field:"telefono",header:"Teléfono"}),r.a.createElement(c.Column,{field:"estado",header:"Estado",body:function(e){return r.a.createElement("span",{className:d()("customer-badge","status-"+e.estado)},e.estado?"ACTIVO":"INACTIVO")},style:{textAlign:"center",width:"14em"},filter:!0,filterElement:X}),r.a.createElement(c.Column,{header:"Acciones",body:function(e,t){return r.a.createElement(H.a,{handleEditar:F,handleInhabilitar:V,rowData:e})},style:{textAlign:"center",width:"12em"}})))))))}}}]);