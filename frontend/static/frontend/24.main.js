(window.webpackJsonp=window.webpackJsonp||[]).push([[24],{472:function(e,a,t){"use strict";t.r(a);var r=t(0),n=t.n(r),l=t(462),s=t(113);function c(e,a){return function(e){if(Array.isArray(e))return e}(e)||function(e,a){if("undefined"==typeof Symbol||!(Symbol.iterator in Object(e)))return;var t=[],r=!0,n=!1,l=void 0;try{for(var s,c=e[Symbol.iterator]();!(r=(s=c.next()).done)&&(t.push(s.value),!a||t.length!==a);r=!0);}catch(e){n=!0,l=e}finally{try{r||null==c.return||c.return()}finally{if(n)throw l}}return t}(e,a)||function(e,a){if(!e)return;if("string"==typeof e)return o(e,a);var t=Object.prototype.toString.call(e).slice(8,-1);"Object"===t&&e.constructor&&(t=e.constructor.name);if("Map"===t||"Set"===t)return Array.from(t);if("Arguments"===t||/^(?:Ui|I)nt(?:8|16|32)(?:Clamped)?Array$/.test(t))return o(e,a)}(e,a)||function(){throw new TypeError("Invalid attempt to destructure non-iterable instance.\nIn order to be iterable, non-array objects must have a [Symbol.iterator]() method.")}()}function o(e,a){(null==a||a>e.length)&&(a=e.length);for(var t=0,r=new Array(a);t<a;t++)r[t]=e[t];return r}a.default=function(){var e=Object(r.useContext)(s.a).nuevasNotificaciones,a=c(Object(r.useState)({labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"],datasets:[{label:"IVA Ventas",data:[65,59,80,81,56,55,40],fill:!1,borderColor:"#03A9F4"},{label:"Iva Compras",data:[28,48,40,19,86,27,90],fill:!1,borderColor:"#FFC107"}]}),2),t=a[0],o=(a[1],c(Object(r.useState)({labels:["Enero","Febrero","Marzo","Abril","Mayo","Junio","Julio"],datasets:[{label:"Ingresos",backgroundColor:"#03A9F4",borderColor:"#03A9F4",data:[65,59,80,81,56,55,40]},{label:"Egresos",backgroundColor:"#FFC107",borderColor:"#FFC107",data:[28,48,40,19,86,27,90]}]}),2)),i=o[0];o[1];return n.a.createElement("div",{className:"p-grid p-fluid dashboard"},n.a.createElement("div",{className:"p-col-12"},n.a.createElement("h1",null,"Dashboard")),n.a.createElement("div",{className:"p-col-12 p-lg-4"},n.a.createElement("div",{className:"card summary"},n.a.createElement("span",{className:"title"},"Notificaciones"),n.a.createElement("span",{className:"detail"},"Notificaciones sin leer"),n.a.createElement("span",{className:"count revenue"},e))),n.a.createElement("div",{className:"p-col-12 p-lg-4"},n.a.createElement("div",{className:"card summary"},n.a.createElement("span",{className:"title"},"Envíos"),n.a.createElement("span",{className:"detail"},"Cantidad de guías generadas"),n.a.createElement("span",{className:"count purchases"},"534"))),n.a.createElement("div",{className:"p-col-12 p-lg-4"},n.a.createElement("div",{className:"card summary"},n.a.createElement("span",{className:"title"},"Ventas"),n.a.createElement("span",{className:"detail"},"Total facturado del día"),n.a.createElement("span",{className:"count visitors"},"$ 35,200"))),n.a.createElement("div",{className:"p-col-12 p-lg-6"},n.a.createElement("div",{className:"card"},n.a.createElement("h1",{className:"centerText"},"Posición I.V.A."),n.a.createElement(l.Chart,{type:"line",data:t}))),n.a.createElement("div",{className:"p-col-12 p-lg-6"},n.a.createElement("div",{className:"card"},n.a.createElement("h1",{className:"centerText"},"Ingresos/Egresos"),n.a.createElement(l.Chart,{type:"bar",data:i}))))}}}]);