(window.webpackJsonp=window.webpackJsonp||[]).push([[19],{397:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(58);t.a=function(e){var t=e.handleEditar,a=e.handleBorrar,n=e.handleInhabilitar,o=e.handleSetup,i=e.rowData,c={label:"Inactivar",className:"p-button-warning",icon:"pi pi-thumbs-down"};return i.estado||(c={label:"Activar",className:"p-button-success",icon:"pi pi-thumbs-up"}),r.a.createElement("div",null,a?r.a.createElement(l.Button,{type:"button",icon:"pi pi-trash",className:"p-button-danger",tooltip:"Borrar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return a(i)}}):null,n?r.a.createElement(l.Button,{type:"button",icon:c.icon,className:c.className,tooltip:c.label,tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return n(i)}}):null,t?r.a.createElement(l.Button,{type:"button",icon:"pi pi-pencil",className:"p-button-info",tooltip:"Editar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return t(i)}}):null,o?r.a.createElement(l.Button,{type:"button",icon:"pi pi-cog",className:"p-button-secondary",tooltip:"Configurar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return o(i)}}):null)}},402:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(399),o=a(58);t.a=function(e){var t=e.texto,a=e.visible,i=e.handleBorrar,c=e.toggleSidebar,s=e.selectedItem;return r.a.createElement(l.Sidebar,{visible:a,position:"top",className:"ui-sidebar-sm",onHide:function(e){return c()}},r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-col-12",style:{textAlign:"center"}},r.a.createElement("h2",null,t)),r.a.createElement("div",{className:"p-col",style:{marginTop:"1em",textAlign:"center"}},r.a.createElement(o.Button,{label:"Borrar",icon:"pi pi-trash",className:"p-button-danger",onClick:function(){i(s.id),c()}}),r.a.createElement(o.Button,{style:{margin:"0px 4px 4px 8px"},label:"Cancelar",icon:"pi pi-undo",className:"p-button-primary",onClick:function(){return c()}})))))}},475:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(454),o=a(406),i=a.n(o),c=(a(167),a(113)),s=a(400),u=a(401),m=a(58),d=a(26),p=a(27),f=a(457),b=a(459),g=a(66),y=a(13),v=a.n(y),E=a(398),h=a(37);function x(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var w=function(e){var t=x(Object(n.useState)(e),2),a=t[0],l=t[1],o=x(Object(n.useState)([]),2),i=o[0],c=o[1],s=Object(n.useContext)(h.a).tokenConfig;Object(n.useEffect)((function(){v.a.get("/api/auth/user/list",s()).then((function(e){c(e.data)})).catch((function(e){return console.log(e.response.statusText)}))}),[]);var u=function(e){return e.fullname};return[a,function(){return r.a.createElement(E.Dropdown,{style:{width:"100%"},autoWidth:!0,value:a,options:i,itemTemplate:u,optionLabel:"fullname",onChange:function(e){l(e.value)},filter:!0,filterPlaceholder:"Buscar Usuario",filterBy:"fullname",placeholder:"Seleccione Usuario"})},l]};function j(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function O(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}function S(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return A(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return A(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function A(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var C=function(e){var t=e.editar,a=Object(n.useContext)(c.a),l=a.notificacion,o=a.showFormNotificacion,i=a.mostrarFormularioNotificacion,s=a.addNotificacion,u=a.updateNotificacion,y=a.setNotificacion,v=l.id,E=(l.estado,l.asunto),h=l.mensaje,x=l.prioridad,N=(l.leida,l.user_destino,Object(n.useContext)(p.a).showMessage),A=S(w({}),3),C=A[0],P=A[1],T=(A[2],function(e){y(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?j(Object(a),!0).forEach((function(t){O(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):j(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l,O({},e.target.name,e.target.value)))});return r.a.createElement(n.Fragment,null,o?r.a.createElement("div",{className:"p-grid  p-justify-center",style:{margin:"20px 0px 50px 0px"}},r.a.createElement("div",{className:"p-col "},r.a.createElement("div",{className:"card"},t?r.a.createElement("h1",null,"Editar Notificacion"):r.a.createElement("h1",null,"Agregar Notificacion"),r.a.createElement("form",{onSubmit:function(e){if(e.preventDefault(),Object(g.b)(E)||Object(g.b)(h)||Object(g.b)(x)||null==C)N({msg:"Hay campos vacíos",title:"Error",type:"error"});else{var a={usuario:C,asunto:E,mensaje:h,prioridad:x,estado:!0,leida:!1};console.log(a),t?u(miCP):(s(a),y({asunto:"",mensaje:"",prioridad:null}))}}},r.a.createElement("div",{className:"p-col-4"},r.a.createElement("span",{className:"p-float-label",style:{margin:"25px 0px 25px 0px"}},r.a.createElement(d.InputText,{id:"id",name:"id",size:"50",hidden:!0,value:v})),r.a.createElement(P,null),r.a.createElement("span",{className:"p-float-label",style:{margin:"25px 0px 25px 0px"}},r.a.createElement(d.InputText,{id:"asunto",name:"asunto",onChange:T,value:E,size:"50"}),r.a.createElement("label",{htmlFor:"asunto"},"Asunto")),r.a.createElement("span",{className:"p-float-label",style:{margin:"25px 0px 25px 0px"}},r.a.createElement(f.InputTextarea,{rows:5,cols:50,id:"mensaje",name:"mensaje",onChange:T,value:h}),r.a.createElement("label",{htmlFor:"mensaje"},"Mensaje")),r.a.createElement("label",{htmlFor:"prioridad"},"Prioridad"),r.a.createElement(b.SelectButton,{style:{marginTop:"0.5em"},id:"prioridad",name:"prioridad",value:x,options:[{label:"Baja",value:"B"},{label:"Media",value:"M"},{label:"Alta",value:"A"}],onChange:T}),r.a.createElement("br",null)),r.a.createElement("div",null,r.a.createElement(m.Button,{style:{margin:"15px 0px 0px 0px"},label:"Grabar",icon:"pi pi-save",className:"p-button-success",type:"submit"}),r.a.createElement(m.Button,{style:{margin:"15px 0px 0px 10px"},label:"Cancelar",icon:"pi pi-undo",className:"p-button-primary",onClick:function(){return i()}})))))):null)},P=a(397),T=a(402);function k(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return D(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return D(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function D(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var B=function(e){var t=k(Object(n.useState)({visible:!1}),2),a=t[0],l=t[1],o=k(Object(n.useState)(!1),2),p=o[0],f=o[1],b=k(Object(n.useState)(""),2),g=b[0],y=b[1],v=k(Object(n.useState)({}),2),E=v[0],h=v[1],x=k(Object(n.useState)({}),2),N=x[0],w=x[1],j=k(Object(n.useState)(!0),2),O=j[0],S=j[1],A=Object(n.useContext)(c.a),D=A.notificaciones_enviadas,B=A.mostrarFormularioNotificacion,I=A.getNotificaciones_Enviadas,M=A.deleteNotificacion,F=A.setNotificacion,R=function(e){h(e),L()},L=function(){l({visible:!a.visible})};return Object(n.useEffect)((function(){I(),S(!1)}),[]),r.a.createElement(n.Fragment,null,r.a.createElement(C,{editar:p}),r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-col-12"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"Notificaciones Enviadas"),r.a.createElement(T.a,{texto:"¿Está seguro de borrar esta notificación?",visible:a.visible,handleBorrar:M,toggleSidebar:L,selectedItem:E}),r.a.createElement("div",{style:{textAlign:"right"},className:"p-col-12"},r.a.createElement("i",{className:"pi pi-search",style:{margin:"4px 4px 4px 8px"}}),r.a.createElement(d.InputText,{type:"search",onInput:function(e){return y(e.target.value)},placeholder:"Buscar",size:"50"}),r.a.createElement(m.Button,{style:{margin:"4px 4px 4px 8px"},label:"Nueva",icon:"pi pi-plus",className:"p-button-success",onClick:function(){return f(!1),F({}),void B()}})),r.a.createElement("div",{className:"datatable-doc-demo"},r.a.createElement(s.DataTable,{style:{margin:"20px 0px 0px 0px"},loading:O,value:D,globalFilter:g,emptyMessage:"No se encontraron notificaciones",paginator:!0,rows:20,rowsPerPageOptions:[10,20,50],paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",sortField:"fc",sortOrder:-1,expandedRows:N,onRowToggle:function(e){return w(e.data)},rowExpansionTemplate:function(e){var t=e.avatar;return r.a.createElement("div",{className:"p-grid p-fluid",style:{padding:"2em 1em 1em 1em"}},r.a.createElement("div",{className:"p-col-12 p-md-3",style:{textAlign:"center"}},r.a.createElement("img",{src:t,alt:e.username,width:"100px",height:"100px",style:{borderRadius:"50%"}})),r.a.createElement("div",{className:"p-col-12 p-md-9"},r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-md-2"},"Para: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},"".concat(e.userTo," (").concat(e.user_destino.username,")")),r.a.createElement("div",{className:"p-md-2"},"Fecha: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},r.a.createElement(i.a,{locale:"es",format:"DD-MM-YYYY HH:mm"},e.fc)),r.a.createElement("div",{className:"p-md-2"},"Asunto: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},e.asunto),r.a.createElement("div",{className:"p-md-2"},"Mensaje: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},e.mensaje))))},dataKey:"id",responsive:!0,className:"p-datatable-customers"},r.a.createElement(u.Column,{expander:!0,style:{width:"3em"}}),r.a.createElement(u.Column,{field:"leida",header:"Leída",sortable:!0,body:function(e,t){return e.leida?r.a.createElement("i",{className:"fas fa-check-double",style:{color:"green"}}):r.a.createElement("i",{className:"fas fa-check-double",style:{color:"red"}})},style:{textAlign:"center",width:"8em"}}),r.a.createElement(u.Column,{field:"fc",header:"Fecha",body:function(e,t){var a="normal";return e.leida||(a="bold"),r.a.createElement("span",{style:{fontWeight:a}},r.a.createElement(i.a,{locale:"es",format:"DD-MM-YYYY HH:mm",fromNowDuring:216e5},e.fc))},sortable:!0,style:{width:"250px"}}),r.a.createElement(u.Column,{field:"userTo",header:"Para",sortable:!0,body:function(e,t){var a="normal";return e.leida||(a="bold"),r.a.createElement("div",{className:"p-grid p-align-center"},r.a.createElement("img",{src:e.avatar,alt:"",width:"30px",height:"30px",style:{borderRadius:"50%",margin:"0 1em 0 1em"}}),r.a.createElement("span",{style:{fontWeight:a}},e.userTo))}}),r.a.createElement(u.Column,{field:"asunto",header:"Asunto",body:function(e,t){var a="normal";return e.leida||(a="bold"),r.a.createElement("span",{style:{fontWeight:a}},e.asunto)}}),r.a.createElement(u.Column,{body:function(e,t){return r.a.createElement(P.a,{handleBorrar:R,rowData:e})},style:{textAlign:"center",width:"8em"}})))))))};a(399);function I(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return M(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return M(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function M(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}var F=function(e){var t=I(Object(n.useState)({visible:!1}),2),a=(t[0],t[1],I(Object(n.useState)(""),2)),l=a[0],o=a[1],p=I(Object(n.useState)({}),2),f=(p[0],p[1],I(Object(n.useState)({}),2)),b=f[0],g=f[1],y=I(Object(n.useState)(!0),2),v=y[0],E=y[1],h=Object(n.useContext)(c.a),x=h.notificaciones_recibidas,N=h.getNotificaciones_Recibidas,w=h.setNotificacion,j=h.toggleNotificacionLeida,O=function(e){w(e),e.leida=!e.leida,j(e)};return Object(n.useEffect)((function(){N(),E(!1)}),[]),r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-col-12"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"Notificaciones Recibidas"),r.a.createElement("div",{style:{textAlign:"right"},className:"p-col-12"},r.a.createElement("i",{className:"pi pi-search",style:{margin:"4px 4px 4px 8px"}}),r.a.createElement(d.InputText,{type:"search",onInput:function(e){return o(e.target.value)},placeholder:"Buscar",size:"50"})),r.a.createElement("div",{className:"datatable-doc-demo"},r.a.createElement(s.DataTable,{style:{margin:"20px 0px 0px 0px"},loading:v,value:x,globalFilter:l,emptyMessage:"No se encontraron notificaciones",paginator:!0,rows:20,rowsPerPageOptions:[10,20,50],paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",sortField:"fc",sortOrder:-1,expandedRows:b,onRowToggle:function(e){return g(e.data)},onRowExpand:function(e){e.data.leida||O(e.data)},rowExpansionTemplate:function(e){var t=e.avatar;return r.a.createElement("div",{className:"p-grid p-fluid",style:{padding:"2em 1em 1em 1em"}},r.a.createElement("div",{className:"p-col-12 p-md-3",style:{textAlign:"center"}},r.a.createElement("img",{src:t,alt:e.username,width:"100px",height:"100px",style:{borderRadius:"50%"}})),r.a.createElement("div",{className:"p-col-12 p-md-9"},r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-md-2"},"De: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},"".concat(e.userfrom," (").concat(e.uc.username,")")),r.a.createElement("div",{className:"p-md-2"},"Fecha: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},r.a.createElement(i.a,{locale:"es",format:"DD-MM-YYYY HH:mm"},e.fc)),r.a.createElement("div",{className:"p-md-2"},"Asunto: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},e.asunto),r.a.createElement("div",{className:"p-md-2"},"Mensaje: "),r.a.createElement("div",{className:"p-md-10",style:{fontWeight:"bold"}},e.mensaje))))},dataKey:"id",responsive:!0,className:"p-datatable-customers"},r.a.createElement(u.Column,{expander:!0,style:{width:"3em"}}),r.a.createElement(u.Column,{field:"leida",header:"Leída",sortable:!0,body:function(e,t){var a="p-button-success",n="Marcar como no leída";return e.leida||(a="p-button-danger",n="Click para leer"),r.a.createElement(m.Button,{type:"button",icon:"pi pi-file-o",className:a,tooltip:n,tooltipOptions:{position:"bottom"},onClick:function(){return O(e)}})},style:{textAlign:"center",width:"8em"}}),r.a.createElement(u.Column,{field:"fc",header:"Fecha",body:function(e,t){var a="normal";return e.leida||(a="bold"),r.a.createElement("span",{style:{fontWeight:a}},r.a.createElement(i.a,{locale:"es",format:"DD-MM-YYYY HH:mm",fromNowDuring:216e5},e.fc))},sortable:!0,style:{width:"250px"}}),r.a.createElement(u.Column,{field:"userfrom",header:"De",sortable:!0,body:function(e,t){var a="normal";return e.leida||(a="bold"),r.a.createElement("div",{className:"p-grid p-align-center"},r.a.createElement("img",{src:e.avatar,alt:"",width:"30px",height:"30px",style:{borderRadius:"50%",margin:"0 1em 0 1em"}}),r.a.createElement("span",{style:{fontWeight:a}},e.userfrom))}}),r.a.createElement(u.Column,{field:"asunto",header:"Asunto",body:function(e,t){var a="normal";return e.leida||(a="bold"),r.a.createElement("span",{style:{fontWeight:a}},e.asunto)}})))))))};t.default=function(){return r.a.createElement(l.TabView,null,r.a.createElement(l.TabPanel,{header:"Recibidas"},r.a.createElement(F,null)),r.a.createElement(l.TabPanel,{header:"Enviadas"},r.a.createElement(B,null)))}}}]);