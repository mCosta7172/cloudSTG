(window.webpackJsonp=window.webpackJsonp||[]).push([[11],{567:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(66);t.a=function(e){var t=e.handleEditar,a=e.handleBorrar,n=e.handleInhabilitar,o=e.handleSetup,i=e.rowData,c={label:"Inactivar",className:"p-button-warning",icon:"pi pi-thumbs-down"};return i.estado||(c={label:"Activar",className:"p-button-success",icon:"pi pi-thumbs-up"}),r.a.createElement("div",null,a?r.a.createElement(l.Button,{type:"button",icon:"pi pi-trash",className:"p-button-danger",tooltip:"Borrar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return a(i)}}):null,n?r.a.createElement(l.Button,{type:"button",icon:c.icon,className:c.className,tooltip:c.label,tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return n(i)}}):null,t?r.a.createElement(l.Button,{type:"button",icon:"pi pi-pencil",className:"p-button-info",tooltip:"Editar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return t(i)}}):null,o?r.a.createElement(l.Button,{type:"button",icon:"pi pi-cog",className:"p-button-secondary",tooltip:"Configurar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return o(i)}}):null)}},571:function(e,t,a){"use strict";var n=a(0),r=a.n(n),l=a(568),o=a(66);t.a=function(e){var t=e.texto,a=e.visible,i=e.handleBorrar,c=e.toggleSidebar,s=e.selectedItem;return r.a.createElement(l.Sidebar,{visible:a,position:"top",className:"ui-sidebar-sm",onHide:function(e){return c()}},r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-col-12",style:{textAlign:"center"}},r.a.createElement("h2",null,t)),r.a.createElement("div",{className:"p-col",style:{marginTop:"1em",textAlign:"center"}},r.a.createElement(o.Button,{label:"Borrar",icon:"pi pi-trash",className:"p-button-danger",onClick:function(){i(s.id),c()}}),r.a.createElement(o.Button,{style:{margin:"0px 4px 4px 8px"},label:"Cancelar",icon:"pi pi-undo",className:"p-button-primary",onClick:function(){return c()}})))))}},630:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),l=a(121),o=a(569),i=a(570),c=a(66),s=a(26),u=a(14),p=a(18);function m(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function b(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var d=function(e){var t=e.editar,a=Object(n.useContext)(l.a),o=a.alicuota,i=a.showFormAlicuota,d=a.mostrarFormularioAlicuotas,f=a.addAlicuota,g=a.updateAlicuota,y=a.setAlicuota,E=o.id,x=o.nombre,h=o.tasa,v=o.codigo_Afip,A=Object(n.useContext)(u.a).showMessage,O=function(e){y(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?m(Object(a),!0).forEach((function(t){b(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):m(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},o,b({},e.target.name,e.target.value.toUpperCase())))};return r.a.createElement(n.Fragment,null,i?r.a.createElement("div",{className:"p-grid  p-justify-center",style:{margin:"20px 0px 50px 0px"}},r.a.createElement("div",{className:"p-col "},r.a.createElement("div",{className:"card"},t?r.a.createElement("h1",null,"Editar Alicuota IVA"):r.a.createElement("h1",null,"Agregar Alicuota IVA"),r.a.createElement("form",{onSubmit:function(e){e.preventDefault(),Object(p.b)(E)|Object(p.b)(x)|Object(p.b)(h)|Object(p.b)(v)?A({msg:"Hay campos vacíos",title:"Error",type:"error"}):t?g(o):(f({nombre:x,tasa:h,codigo_Afip:v}),y({nombre:"",tasa:"",codigo_Afip:""}))}},r.a.createElement("div",{className:"p-col-4"},r.a.createElement("span",{className:"p-float-label",style:{margin:"25px 0px 25px 0px"}},r.a.createElement(s.InputText,{id:"id",name:"id",size:"50",disabled:!0,value:E}),r.a.createElement("label",{htmlFor:"id"},"Id")),r.a.createElement("span",{className:"p-float-label",style:{margin:"25px 0px 25px 0px"}},r.a.createElement(s.InputText,{id:"alicuota",name:"nombre",onChange:O,autoFocus:!0,value:x,size:"50"}),r.a.createElement("label",{htmlFor:"alicuota"},"Alícuota")),r.a.createElement("span",{className:"p-float-label",style:{margin:"25px 0px 0px 0px"}},r.a.createElement(s.InputText,{id:"tasa",name:"tasa",onChange:O,value:h,size:"50",keyfilter:"pnum"}),r.a.createElement("label",{htmlFor:"tasa"},"Tasa")),r.a.createElement("span",{className:"p-float-label",style:{margin:"25px 0px 0px 0px"}},r.a.createElement(s.InputText,{id:"codAfip",name:"codigo_Afip",onChange:O,value:v,size:"50",keyfilter:"pnum"}),r.a.createElement("label",{htmlFor:"codAfip"},"Código AFIP")),r.a.createElement("br",null)),r.a.createElement("div",null,r.a.createElement(c.Button,{style:{margin:"15px 0px 0px 0px"},label:"Grabar",icon:"pi pi-save",className:"p-button-success",type:"submit"}),r.a.createElement(c.Button,{style:{margin:"15px 0px 0px 10px"},label:"Cancelar",icon:"pi pi-undo",className:"p-button-primary",onClick:function(){return d()}})))))):null)},f=(a(568),a(567)),g=a(571);function y(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,l=void 0;try{for(var o,i=e[Symbol.iterator]();!(n=(o=i.next()).done)&&(a.push(o.value),!t||a.length!==t);n=!0);}catch(e){r=!0,l=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw l}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return E(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return E(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function E(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(e){var t=y(Object(n.useState)({visible:!1}),2),a=t[0],u=t[1],p=y(Object(n.useState)(!1),2),m=p[0],b=p[1],E=y(Object(n.useState)(""),2),x=E[0],h=E[1],v=y(Object(n.useState)({}),2),A=v[0],O=v[1],N=Object(n.useContext)(l.a),j=N.alicuotas,w=N.mostrarFormularioAlicuotas,C=N.getAlicuotas,I=N.deleteAlicuota,S=N.setAlicuota,B=function(e){S(e),b(!0),w()},F=function(e){O(e),k()},k=function(){u({visible:!a.visible})};return Object(n.useEffect)((function(){C()}),[]),r.a.createElement(n.Fragment,null,r.a.createElement(d,{editar:m}),r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-col-12"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"Alicuotas"),r.a.createElement(g.a,{texto:"¿Está seguro de borrar esta alicuota?",visible:a.visible,handleBorrar:I,toggleSidebar:k,selectedItem:A}),r.a.createElement("div",{style:{textAlign:"right"},className:"p-col-12"},r.a.createElement("i",{className:"pi pi-search",style:{margin:"4px 4px 4px 8px"}}),r.a.createElement(s.InputText,{type:"search",onInput:function(e){return h(e.target.value)},placeholder:"Buscar",size:"50"}),r.a.createElement(c.Button,{style:{margin:"4px 4px 4px 8px"},label:"Agregar",icon:"pi pi-plus",className:"p-button-success",onClick:function(){return b(!1),S({}),void w()}})),r.a.createElement(o.DataTable,{style:{margin:"20px 0px 0px 0px"},value:j,globalFilter:x,emptyMessage:"No se encontraron registros",paginator:!0,rows:10,rowsPerPageOptions:[5,10,20,50],sortField:"codigo",sortOrder:1},r.a.createElement(i.Column,{field:"id",header:"Id",sortable:!0,style:{width:"150px",textAlign:"center"}}),r.a.createElement(i.Column,{field:"nombre",header:"Alícuota",sortable:!0}),r.a.createElement(i.Column,{field:"tasa",header:"Tasa",sortable:!1,style:{textAlign:"center"}}),r.a.createElement(i.Column,{field:"codigo_Afip",header:"Cód. AFIP",sortable:!1,style:{textAlign:"center"}}),r.a.createElement(i.Column,{body:function(e,t){return r.a.createElement(f.a,{handleBorrar:F,handleEditar:B,rowData:e})},style:{textAlign:"center",width:"8em"}}))))))}}}]);