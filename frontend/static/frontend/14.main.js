(window.webpackJsonp=window.webpackJsonp||[]).push([[14],{397:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(58);t.a=function(e){var t=e.handleEditar,a=e.handleBorrar,n=e.handleInhabilitar,l=e.handleSetup,i=e.rowData,c={label:"Inactivar",className:"p-button-warning",icon:"pi pi-thumbs-down"};return i.estado||(c={label:"Activar",className:"p-button-success",icon:"pi pi-thumbs-up"}),r.a.createElement("div",null,a?r.a.createElement(o.Button,{type:"button",icon:"pi pi-trash",className:"p-button-danger",tooltip:"Borrar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return a(i)}}):null,n?r.a.createElement(o.Button,{type:"button",icon:c.icon,className:c.className,tooltip:c.label,tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return n(i)}}):null,t?r.a.createElement(o.Button,{type:"button",icon:"pi pi-pencil",className:"p-button-info",tooltip:"Editar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return t(i)}}):null,l?r.a.createElement(o.Button,{type:"button",icon:"pi pi-cog",className:"p-button-secondary",tooltip:"Configurar",tooltipOptions:{position:"bottom"},style:{marginRight:".5em"},onClick:function(){return l(i)}}):null)}},403:function(e,t,a){"use strict";var n=a(0),r=a.n(n),o=a(399),l=a(58);t.a=function(e){var t=e.texto,a=e.visible,i=e.setEstado,c=e.toggleSidebar,s=e.selectedItem,u={label:"Inactivar",className:"p-button-warning",icon:"pi pi-thumbs-down"};return s.estado||(u={label:"Activar",className:"p-button-success",icon:"pi pi-thumbs-up"}),r.a.createElement(o.Sidebar,{visible:a,position:"top",className:"ui-sidebar-sm",onHide:function(e){return c()}},r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-col-12",style:{textAlign:"center"}},r.a.createElement("h2",null,t)),r.a.createElement("div",{className:"p-col",style:{marginTop:"1em",textAlign:"center"}},r.a.createElement(l.Button,{label:u.label,icon:u.icon,className:u.className,onClick:function(){i(s),c()}}),r.a.createElement(l.Button,{style:{margin:"0px 4px 4px 8px"},label:"Cancelar",icon:"pi pi-undo",className:"p-button-primary",onClick:function(){return c()}})))))}},482:function(e,t,a){"use strict";a.r(t);var n=a(0),r=a.n(n),o=a(416),l=a(37),i=a(400),c=a(401),s=a(58),u=a(26),m=a(398),p=a(65),b=a.n(p),d=a(27),g=a(66);function f(e,t){var a=Object.keys(e);if(Object.getOwnPropertySymbols){var n=Object.getOwnPropertySymbols(e);t&&(n=n.filter((function(t){return Object.getOwnPropertyDescriptor(e,t).enumerable}))),a.push.apply(a,n)}return a}function v(e,t,a){return t in e?Object.defineProperty(e,t,{value:a,enumerable:!0,configurable:!0,writable:!0}):e[t]=a,e}var E=function(e){var t=e.editar,a=Object(n.useContext)(o.a),l=a.zona,i=a.showForm,c=a.mostrarFormulario,m=a.addZona,p=a.updateZona,b=a.setZona,E=l.nombre,y=Object(n.useContext)(d.a).showMessage;return r.a.createElement(n.Fragment,null,i?r.a.createElement(n.Fragment,null,r.a.createElement("div",{className:"card"},r.a.createElement("div",{className:"p-grid p-fluid"},r.a.createElement("div",{className:"p-col-12"},t?r.a.createElement("h1",null,"Editar Zona"):r.a.createElement("h1",null,"Agregar Zona")),r.a.createElement("div",{className:"p-col-12 p-md-6"},r.a.createElement("label",{style:{marginTop:"1em"}},"Nombre*"),r.a.createElement(u.InputText,{id:"nombre",name:"nombre",value:E,onChange:function(e){b(function(e){for(var t=1;t<arguments.length;t++){var a=null!=arguments[t]?arguments[t]:{};t%2?f(Object(a),!0).forEach((function(t){v(e,t,a[t])})):Object.getOwnPropertyDescriptors?Object.defineProperties(e,Object.getOwnPropertyDescriptors(a)):f(Object(a)).forEach((function(t){Object.defineProperty(e,t,Object.getOwnPropertyDescriptor(a,t))}))}return e}({},l,v({},e.target.name,e.target.value.toUpperCase())))},maxLength:"100",autoFocus:!0})),r.a.createElement("div",{className:"p-col-12 p-md-6"}),r.a.createElement("div",{className:"p-col-12 p-md-2"},r.a.createElement(s.Button,{style:{marginTop:"1em"},label:"Grabar",icon:"pi pi-save",className:"p-button-success",onClick:function(){Object(g.b)(E)?y({msg:"Los campos con * son obligatorios",title:"Error",type:"error"}):t?p(l):m(l)}})),r.a.createElement("div",{className:"p-col-12 p-md-2"},r.a.createElement(s.Button,{style:{marginTop:"1em"},label:"Cancelar",icon:"pi pi-undo",className:"p-button-primary",onClick:function(){return c()}}))))):null)},y=a(403),h=a(397);function O(e,t){return function(e){if(Array.isArray(e))return e}(e)||function(e,t){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var a=[],n=!0,r=!1,o=void 0;try{for(var l,i=e[Symbol.iterator]();!(n=(l=i.next()).done)&&(a.push(l.value),!t||a.length!==t);n=!0);}catch(e){r=!0,o=e}finally{try{n||null==i.return||i.return()}finally{if(r)throw o}}return a}(e,t)||function(e,t){if(!e)return;if("string"==typeof e)return N(e,t);var a=Object.prototype.toString.call(e).slice(8,-1);"Object"===a&&e.constructor&&(a=e.constructor.name);if("Map"===a||"Set"===a)return Array.from(a);if("Arguments"===a||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(a))return N(e,t)}(e,t)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function N(e,t){(null==t||t>e.length)&&(t=e.length);for(var a=0,n=new Array(t);a<t;a++)n[a]=e[a];return n}t.default=function(e){var t=O(Object(n.useState)({visible:!1}),2),a=t[0],p=t[1],d=O(Object(n.useState)(!1),2),g=d[0],f=d[1],v=O(Object(n.useState)(""),2),N=v[0],w=v[1],x=O(Object(n.useState)({}),2),j=x[0],C=x[1],A=O(Object(n.useState)("true"),2),S=A[0],I=A[1],P=O(Object(n.useState)({}),2),k=(P[0],P[1],O(Object(n.useState)(!0),2)),T=(k[0],k[1]),B=Object(n.useContext)(o.a),Z=B.zonas,D=B.mostrarFormulario,F=B.getZonas,L=B.setZona,R=B.toggleEstadoZona,V=Object(n.useContext)(l.a).agencia,z=function(e){L(e),f(!0),D()},M=function(e){C(e),q()},q=function(){p({visible:!a.visible})},J=r.a.createRef(),U=r.a.createElement(m.Dropdown,{style:{width:"100%"},placeholder:"ACTIVOS",value:S,options:[{label:"ACTIVOS",value:"true"},{label:"INACTIVOS",value:"false"},{label:"TODOS",value:null}],onChange:function(e){J.filter(e.value,"estado","equals"),I(e.value)}});return Object(n.useEffect)((function(){T(!0),V&&(F(V.id),T(!1))}),[V]),Object(n.useEffect)((function(){J.filter(S,"estado","equals")}),[]),r.a.createElement(n.Fragment,null,r.a.createElement(E,{editar:g}),r.a.createElement("div",{className:"p-grid"},r.a.createElement("div",{className:"p-col-12"},r.a.createElement("div",{className:"card"},r.a.createElement("h1",null,"Zonas"),r.a.createElement(y.a,{texto:"¿Está seguro de ".concat(j.estado?"Inactivar":"Activar"," esta Zona?"),visible:a.visible,setEstado:function(e){L(e),e.estado=!e.estado,R(e)},toggleSidebar:q,selectedItem:j}),r.a.createElement("div",{style:{textAlign:"right"},className:"p-col-12"},r.a.createElement("i",{className:"pi pi-search",style:{margin:"4px 4px 4px 8px"}}),r.a.createElement(u.InputText,{type:"search",onInput:function(e){return w(e.target.value)},placeholder:"Buscar",size:"50"}),r.a.createElement(s.Button,{style:{margin:"4px 4px 4px 8px"},label:"Agregar",icon:"pi pi-plus",className:"p-button-success",onClick:function(){return f(!1),L({}),void D()}})),r.a.createElement("div",{className:"datatable-doc-demo"},r.a.createElement(i.DataTable,{ref:function(e){return J=e},style:{margin:"20px 0px 0px 0px"},value:Z,globalFilter:N,emptyMessage:"No se encontraron registros",paginator:!0,rows:25,rowsPerPageOptions:[5,10,25,50],className:"p-datatable-customers",paginatorTemplate:"FirstPageLink PrevPageLink PageLinks NextPageLink LastPageLink CurrentPageReport RowsPerPageDropdown",dataKey:"id",responsive:!0},r.a.createElement(c.Column,{field:"id",header:"Id",sortable:!0,style:{width:"100px",textAlign:"center"}}),r.a.createElement(c.Column,{field:"nombre",header:"Zona",sortable:!0}),r.a.createElement(c.Column,{field:"estado",header:"Estado",body:function(e){return r.a.createElement("span",{className:b()("customer-badge","status-"+e.estado)},e.estado?"ACTIVO":"INACTIVO")},style:{textAlign:"center",width:"14em"},filter:!0,filterElement:U}),r.a.createElement(c.Column,{header:"Acciones",body:function(e,t){return r.a.createElement(h.a,{handleEditar:z,handleInhabilitar:M,rowData:e})},style:{textAlign:"center",width:"12em"}})))))))}}}]);