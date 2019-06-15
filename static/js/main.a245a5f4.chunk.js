(window.webpackJsonp=window.webpackJsonp||[]).push([[0],{192:function(e,t){var a=function(){function e(t,a){this.data=new Array(t.length);for(var n=0,r=t[0].length;n<t.length;n++){this.data[n]=new Array(r);for(var i=0;i<r;i++)this.data[n][i]=t[n][i]}if(a){if("object"!==typeof a[0])for(n=0;n<a.length;n++)a[n]=[a[n]];this.mirror=new e(a)}}return e.prototype.swap=function(e,t){this.mirror&&this.mirror.swap(e,t);var a=this.data[e];this.data[e]=this.data[t],this.data[t]=a},e.prototype.multline=function(e,t){this.mirror&&this.mirror.multline(e,t);for(var a=this.data[e],n=a.length-1;n>=0;n--)a[n]*=t},e.prototype.addmul=function(e,t,a){this.mirror&&this.mirror.addmul(e,t,a);for(var n=this.data[e],r=this.data[t],i=n.length-1;i>=0;i--)n[i]=n[i]+a*r[i]},e.prototype.hasNullLine=function(e){for(var t=0;t<this.data[e].length;t++)if(0!==this.data[e][t])return!1;return!0},e.prototype.gauss=function(){for(var e=0,t=this.data.length,a=this.data[0].length,n=[],r=0;r<a;r++){for(var i=0,o=0,c=e;c<t;c++){var l=this.data[c][r];Math.abs(l)>Math.abs(i)&&(o=c,i=l)}if(0===i)n.push(e);else{this.multline(o,1/i),this.swap(o,e);for(var u=0;u<t;u++)u!==e&&this.addmul(u,e,-this.data[u][r])}e++}for(u=0;u<n.length;u++)if(!this.mirror.hasNullLine(n[u]))throw new Error("singular matrix");return this.mirror.data},t.solve=function(t,a){var n=new e(t,a).gauss();if(n.length>0&&1===n[0].length)for(var r=0;r<n.length;r++)n[r]=n[r][0];return n},t.invert=function(t){return new e(t,function(e){for(var t=new Array(e),a=0;a<e;a++){t[a]=new Array(e);for(var n=0;n<e;n++)t[a][n]=a===n?1:0}return t}(t.length)).gauss()},t}();"object"===typeof e.exports&&(e.exports=a)},203:function(e,t,a){e.exports=a(367)},366:function(e,t,a){},367:function(e,t,a){"use strict";a.r(t);var n=a(1),r=a.n(n),i=a(7),o=a.n(i);Boolean("localhost"===window.location.hostname||"[::1]"===window.location.hostname||window.location.hostname.match(/^127(?:\.(?:25[0-5]|2[0-4][0-9]|[01]?[0-9][0-9]?)){3}$/));var c=a(22),l=a(66),u=a(185),s=a(26),d=a(25),v="ADD_EQUIPO",h="BORRAR_EQUIPO",m="CONECTAR_ENLACE",f="BORRAR_ENLACE",p="ADD_DATO",b="CAMBIAR_DATO",g="BORRAR_DATO",y="ADD_INCOGNITA",E="BORRAR_INCOGNITA",O="CAMBIAR_VALOR_INICIAL",j="ADD_ECUACION",I="BORRAR_ECUACION",w="ADD_RELACION",A="BORRAR_RELACION",_="CAMBIAR_SELECCION",C="TOGGLE_DRAWER",k=a(368),R=a(369),x=a(370),S=a(381),V=a(380),N=a(387),D=a(371),q=a(385),M=k.a(function(e,t,a){var n=a.payload,r=n.idObjetivo,i=n.id,o=Object(s.a)({},r,Object(s.a)({},e,R.a(i)));return x.a(o,t)}),T=k.a(function(e,t,a){var n=a.payload.id,r=Object(s.a)({},e,S.a(V.a(n)));return N.a(x.a(r),t)});function L(e,t){return D.a([t.payload.id],e)}var B=k.a(function(e,t,a){var n=a.payload,r=n.id,i=n.nuevoValor;return q.a([r,e],i,t)});var P=L,G=M("ecuaciones"),F=T("ecuaciones"),U=M("datos"),z=T("datos"),W=M("incognitas"),J=T("incognitas");var Q=L,Y=M("relaciones"),K=T("relaciones");var $=L,H=B("valor");var X=L,Z=B("valorInicial");var ee=L;var te=L;var ae,ne,re=Object(l.c)({seleccionado:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:"",t=arguments.length>1?arguments[1]:void 0;switch(t.type){case _:return t.payload.nuevaSeleccion;case h:case f:return"";default:return e}},isDrawerOpen:function(){var e=arguments.length>0&&void 0!==arguments[0]&&arguments[0];switch((arguments.length>1?arguments[1]:void 0).type){case C:return!e;case h:case f:return!1;default:return e}},entities:Object(l.c)({equipos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case v:return function(e,t){var a={id:t.payload.id,nombre:t.payload.nombre,datos:[],incognitas:[],ecuaciones:[]};return Object(d.a)({},e,Object(s.a)({},t.payload.id,a))}(e,t);case h:return P(e,t);case j:return G(e,t);case I:return F(e,t);case p:return U(e,t);case g:return z(e,t);case y:return W(e,t);case E:return J(e,t);default:return e}},enlaces:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case m:return function(e,t){var a;a=e[t.payload.id]?e[t.payload.id].relaciones:[];var n={id:t.payload.id,origen:t.payload.idOrigen,destino:t.payload.idDestino,relaciones:a};return Object(d.a)({},e,Object(s.a)({},t.payload.id,n))}(e,t);case f:return Q(e,t);case w:return Y(e,t);case A:return K(e,t);default:return e}},datos:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case p:return function(e,t){var a={id:t.payload.id,nombre:t.payload.nombre,valor:0};return Object(d.a)({},e,Object(s.a)({},t.payload.id,a))}(e,t);case g:return $(e,t);case b:return H(e,t);default:return e}},incognitas:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case y:return function(e,t){return Object(d.a)({},e,Object(s.a)({},t.payload.id,{id:t.payload.id,nombre:t.payload.nombre,valorInicial:1}))}(e,t);case E:return X(e,t);case O:return Z(e,t);default:return e}},ecuaciones:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case j:return function(e,t){return Object(d.a)({},e,Object(s.a)({},t.payload.id,{id:t.payload.id,valor:t.payload.valor}))}(e,t);case I:return ee(e,t);default:return e}},relaciones:function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:{},t=arguments.length>1?arguments[1]:void 0;switch(t.type){case w:return function(e,t){var a=t.payload,n=a.id,r=a.idVar1,i=a.idVar2;return Object(d.a)({},e,Object(s.a)({},n,[r,i]))}(e,t);case A:return te(e,t);default:return e}}})}),ie=Object(u.createLogger)(),oe=Object(l.d)(re,void 0,Object(l.a)(ie)),ce=a(41),le=a(378),ue=a(376),se=a(383),de=a(31),ve=a(124),he=a(34),me=a.n(he);function fe(e){return{type:_,payload:{nuevaSeleccion:e}}}function pe(){return{type:C}}function be(){ne.findViewsInArea(ne.getContentArea()).forEach(function(e){e.unhighlight()}),oe.dispatch(fe(""))}var ge=le.a.Title;function ye(e){var t=Object(n.useState)(""),a=Object(ce.a)(t,2),i=a[0],o=a[1];return r.a.createElement(ue.a,{layout:"inline"},r.a.createElement(ue.a.Item,null,r.a.createElement(ge,{level:4},"TFG")),r.a.createElement(ue.a.Item,null,r.a.createElement(se.a,{placeholder:"Nombre de equipo",value:i,onChange:function(e){o(e.target.value)}})),r.a.createElement(ue.a.Item,null,r.a.createElement(de.a,{onClick:function(){!function(e){var t=new ve.shapes.standard.Rectangle({ports:{groups:{inputs:{position:{name:"left",args:{}},attrs:{circle:{magnet:!0}}},outputs:{position:{name:"right",args:{}},attrs:{circle:{magnet:!0}}}},items:[{group:"inputs"},{group:"outputs"}]}});t.position(800,400),t.resize(100,40),t.attr({body:{fill:"white"},label:{text:e,fill:"black"},root:{magnet:"false"}}),t.addTo(ae)}(i),o("")}},"Nuevo equipo")),r.a.createElement(ue.a.Item,null,r.a.createElement(de.a,{onClick:e.onResolver,type:"primary"},"Resolver")))}var Ee=a(379),Oe=a(375),je=a(38),Ie=a(36),we=a(58),Ae=function(){function e(t){var a=arguments.length>1&&void 0!==arguments[1]?arguments[1]:void 0;Object(Ie.a)(this,e),this._simbolo="x",this.setSimbolo(t),this._valor=a}return Object(we.a)(e,[{key:"setSimbolo",value:function(e){this._simbolo=e}},{key:"getSimbolo",value:function(){return this._simbolo}},{key:"setValor",value:function(e){this._valor=e}},{key:"getValor",value:function(){return this._valor}}]),e}(),_e=a(192),Ce=a.n(_e),ke=function(){function e(){Object(Ie.a)(this,e),this.nCifras=5,this.nIterMax=1e3}return Object(we.a)(e,[{key:"resolver",value:function(e,t){var a=arguments.length>2&&void 0!==arguments[2]?arguments[2]:[],n=0,r=!1,i=e.length,o=t.length;a.length;if(o!=i)throw"Error: El n\xfamero de ecuaciones no es igual al n\xfamero de inc\xf3gnitas";var c=[],l=[],u=[],s=[],d=[],v=[],h=[],m=[],f=0,p=0,b=0;for(f=0;f<o;f++)c[f]=new Ae(t[f].getSimbolo(),t[f].valorInicial),l[f]=new Ae(t[f].getSimbolo(),t[f].valorInicial),h[f]=[];for(;n<this.nIterMax;){for(d=[].concat(c,Object(je.a)(a)),f=0;f<i;f++)v[f]=e[f].getResiduo(d);for(p=0;p<i;p++){for(b=0;b<i;b++)l[b].setValor(c[b].getValor());for(l[p].setValor(l[p].getValor()+.01),d=[].concat(l,Object(je.a)(a)),b=0;b<i;b++)s[b]=e[b].getResiduo(d);for(f=0;f<i;f++)h[f][p]=(s[f]-v[f])/.01}for(m=Ce.a.solve(h,v),r=!0,f=0;f<i;f++)u[f]=c[f].getValor()-m[f],u[f]>t[f].maximo?u[f]=t[f].maximo-.01:u[f]<t[f].minimo&&(u[f]=t[f].minimo+.01),this._haConvergido(u[f],c[f].getValor())||(r=!1),c[f].setValor(u[f]);if(r)return u;n++}throw"N\xba de iteraciones: "+this.nIterMax+" superado sin encontrar soluci\xf3n"}},{key:"_haConvergido",value:function(e,t){var a;a=0===e?1:Math.ceil(Math.log10(Math.abs(e)));var n=Math.pow(10,a-this.nCifras);return a>this.nCifras?Math.abs(e-t)<.1:Math.abs(e-t)<n}}]),e}(),Re=a(121),xe=a(114),Se=a(122),Ve=function(e){function t(e,a){return Object(Ie.a)(this,t),Object(Re.a)(this,Object(xe.a)(t).call(this,e,a))}return Object(Se.a)(t,e),t}(Ae);var Ne=function(e){function t(e){var a,n=arguments.length>1&&void 0!==arguments[1]?arguments[1]:1;return Object(Ie.a)(this,t),(a=Object(Re.a)(this,Object(xe.a)(t).call(this,e,void 0))).minimo=Number.NEGATIVE_INFINITY,a.maximo=Number.POSITIVE_INFINITY,a.valorInicial=n,a}return Object(Se.a)(t,e),t}(Ae);var De=a(89),qe=function(){function e(t){Object(Ie.a)(this,e),this._expresion="1",this._parser=De.Parser.parse(this._expresion),this.setExpresion(t)}return Object(we.a)(e,[{key:"setExpresion",value:function(e){this._expresion=e;try{this._parser=De.Parser.parse(this._expresion)}catch(t){throw t.message+" en '"+this._expresion+"'"}}},{key:"getListaVariables",value:function(){var e=[];try{for(var t=this._parser.variables(),a=0;a<t.length;a++)e.push(new Ae(t[a]))}catch(n){throw n.message+" en '"+this._expresion+"'"}return e}},{key:"calcular",value:function(e){try{var t={};e.forEach(function(e){t[e.getSimbolo()]=e.getValor()});return this._parser.evaluate(t)}catch(a){throw a.message+" en '"+this._expresion+"'"}}}]),e}(),Me=function(){function e(t){Object(Ie.a)(this,e),this._ecuacion="0 = 0",this._miembros=[],this._expresion=new qe("0"),this.nCifras=5,this.nIterMax=100,this.setEcuacion(t)}return Object(we.a)(e,[{key:"setEcuacion",value:function(e){if(this._ecuacion=e,this._miembros=e.split("="),1===this._miembros.length)throw"No se encuentra = en '"+e+"'";if(this._miembros.length>2)throw"M\xe1s de un = en '"+e+"'";this._expresion.setExpresion("( "+this._miembros[0]+") - ("+this._miembros[1]+" )")}},{key:"getListaVariables",value:function(){return this._expresion.getListaVariables()}},{key:"getResiduo",value:function(e){return this._expresion.calcular(e)}},{key:"resolver",value:function(e){var t,a,n,r,i,o=arguments.length>1&&void 0!==arguments[1]?arguments[1]:[],c=!1;t=e.valorInicial;for(var l=[],u=0;u<this.nIterMax;u++){if(a=t+.01,e.setValor(t),l=[].concat(Object(je.a)(o),[e]),i=this._expresion.calcular(l),e.setValor(a),l=[].concat(Object(je.a)(o),[e]),c=!1,(n=0===(r=(this._expresion.calcular(l)-i)/(a-t))?a:t-i/r)>e.maximo?(n=e.maximo-.01,c=!1):n<e.minimo?(n=e.minimo+.01,c=!1):c=this._haConvergido(n,t),c)return n;t=n}throw"N\xba de iteraciones: "+this.nIterMax+" superado sin encontrar soluci\xf3n"}},{key:"_haConvergido",value:function(e,t){var a;a=0===e?1:Math.ceil(Math.log10(Math.abs(e)));var n=Math.pow(10,a-this.nCifras);return a>this.nCifras?Math.abs(e-t)<.1:Math.abs(e-t)<n}}]),e}();function Te(e,t){var a=e.split("=").map(function(e){return De.Parser.parse(e)}),n=function(e){a=a.map(function(a){return a.substitute(e,t[e])})};for(var r in t)n(r);return a[0].toString()+"="+a[1].toString()}function Le(e){var t=e.equipos,a=e.datos,n=e.incognitas,r=e.ecuaciones,i=e.relaciones,o=function(e){var t={},a=1;for(var n in e)t[n]={nombre:e[n].nombre,nombreSolver:"v_".concat(a)},a++;return t}(Object(d.a)({},a,n)),c=function(e,t){return Object.keys(e).map(function(a){return new Ve(t[a].nombreSolver,e[a].valor)})}(a,o),l=function(e,t){var a=[],n=[];for(var r in e)a.push(r),n.push(new Ne(t[r].nombreSolver,e[r].valorInicial));return{ordenDeIds:a,arrayIncognitas:n}}(n,o),u=l.ordenDeIds,v=l.arrayIncognitas,h=function(e,t){var a={},n=function(n){var r=e[n],i=r.ecuaciones,o=r.datos,c=r.incognitas;i.forEach(function(e){var n=[].concat(Object(je.a)(o),Object(je.a)(c));a=Object(d.a)({},a,Object(s.a)({},e,function(e,t){var a={};return e.forEach(function(e){var n=t[e],r=n.nombre,i=n.nombreSolver;a[r]=i}),a}(n,t)))})};for(var r in e)n(r);return a}(t,o),m=[].concat(Object(je.a)(function(e,t){var a=[];for(var n in e)a.push(Te(e[n].valor,t[n]));return a}(r,h)),Object(je.a)(function(e,t){var a=[];for(var n in e){var r=e[n],i=t[r[0]].nombreSolver,o=t[r[1]].nombreSolver;a.push("".concat(i,"=").concat(o))}return a}(i,o))),f=m.map(function(e){return new Me(e)});return function(e,t){var a={};return e.forEach(function(e,n){a[e]={id:e,solucion:t[n]}}),a}(u,(new ke).resolver(f,v,c))}var Be=a(199),Pe=a(389),Ge=a(372),Fe=le.a.Text,Ue=[{title:"Nombre",dataIndex:"nombre",key:"nombre"},{title:"Equipo",dataIndex:"equipo",key:"equipo"},{title:"Resultado",dataIndex:"resultado",key:"resultado"}];function ze(e,t,a){return{key:a.id,nombre:t[a.id].nombre,equipo:We(e,a.id),resultado:a.solucion}}function We(e,t){for(var a in e){var n=e[a];return n.incognitas.some(V.a(t))?n.nombre:""}}var Je=Object(c.b)(function(e){var t=!0,a="",n=[];try{var r=Le(e.entities),i=e.entities,o=i.equipos,c=i.incognitas;n=Be.a(N.a(Pe.a(ze,[o,c])),Ge.a)(r)}catch(l){a=l,t=!1}return{dataSource:n,errorMsg:a,haySolucion:t}})(function(e){return r.a.createElement(Ee.a,{title:"Resultados",visible:e.visible,onCancel:e.onCancel,onOk:e.onCancel,centered:!0},e.haySolucion?r.a.createElement(Oe.a,{dataSource:e.dataSource,columns:Ue,size:"small"}):r.a.createElement(Fe,{type:"danger"},e.errorMsg))}),Qe=a(384),Ye=a(373),Ke=a(91),$e=Ke.a.Option;var He=Object(c.b)(function(e,t){var a=t.idEquipo,n=t.tipo,r=e.entities.equipos[a],i=e.entities,o=i.datos,c=i.incognitas,l=Object(d.a)({},o,c),u=r.datos,s=r.incognitas;return"origen"===n&&(s=s.concat(u)),{arrayVariables:Be.a(Ye.a(s),Ge.a,N.a(Ye.a(["id","nombre"])))(l)}})(function(e){return r.a.createElement(Ke.a,{style:{width:200},placeholder:e.placeholder,value:e.value,onSelect:e.onSelect},e.arrayVariables.map(function(e){return r.a.createElement($e,{key:e.id},e.nombre)}))}),Xe=a(386),Ze=a(9);var et=le.a.Text;var tt=Object(c.b)(null,function(e){return{borrarRelacion:function(t){return e({type:A,payload:{id:t}})}}})(function(e){return r.a.createElement(Xe.a.Item,null,r.a.createElement(et,null,e.nombre1,"=",e.nombre2),r.a.createElement(de.a,{onClick:function(){e.borrarRelacion(e.idRelacion)}},r.a.createElement(Ze.a,{type:"delete",theme:"filled"})))}),at=le.a.Text;var nt=Object(c.b)(function(e){var t=e.entities.enlaces[e.seleccionado].relaciones;return{relaciones:Ye.a(t,e.entities.relaciones),variables:Object(d.a)({},e.entities.datos,e.entities.incognitas)}})(function(e){return r.a.createElement(Xe.a,{header:r.a.createElement(at,{strong:!0},"Variable de Origen = Variable de Destino")},Object.keys(e.relaciones).map(function(t){var a=e.relaciones[t][0],n=e.relaciones[t][1];return r.a.createElement(tt,{nombre1:e.variables[a].nombre,nombre2:e.variables[n].nombre,idRelacion:t,key:t})}))}),rt=le.a.Title;var it=Object(c.b)(function(e){var t=e.entities.enlaces[e.seleccionado];return{idOrigen:t.origen,idDestino:t.destino,idEnlace:t.id}},function(e){return{addRelacion:function(t,a,n){e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me()(),t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0,n=arguments.length>3?arguments[3]:void 0;return{type:w,payload:{id:e,idObjetivo:t,idVar1:a,idVar2:n}}}(void 0,t,a,n))}}})(function(e){var t=Object(n.useState)(void 0),a=Object(ce.a)(t,2),i=a[0],o=a[1],c=Object(n.useState)(void 0),l=Object(ce.a)(c,2),u=l[0],s=l[1];return r.a.createElement("div",null,r.a.createElement(He,{idEquipo:e.idOrigen,tipo:"origen",placeholder:"Equipo de origen",value:i,onSelect:function(e){return o(e)}}),r.a.createElement(He,{idEquipo:e.idDestino,tipo:"destino",placeholder:"Equipo de destino",value:u,onSelect:function(e){return s(e)}}),r.a.createElement(de.a,{onClick:function(){e.addRelacion(e.idEnlace,i,u)}},"A\xf1adir relaci\xf3n"),r.a.createElement(rt,{level:4},"Relaciones"),r.a.createElement(nt,null))});var ot=a(382),ct=le.a.Text;var lt=Object(c.b)(function(e,t){var a=e.entities[t.tipo][t.variableAsId],n=a.nombre,r=a.valor;return void 0===r&&(r=e.entities[t.tipo][t.variableAsId].valorInicial),{nombre:n,valor:r}},function(e){return{doCambiarVariable:function(t,a,n){"datos"===t?e(function(e,t){return{type:b,payload:{id:e,nuevoValor:t}}}(a,n)):"incognitas"===t&&e(function(e,t){return{type:O,payload:{id:e,nuevoValor:t}}}(a,n))},doBorrarVariable:function(t,a){"datos"===t?e({type:g,payload:{id:a}}):"incognitas"===t&&e(function(e){return{type:E,payload:{id:e}}}(a))}}})(function(e){return r.a.createElement(ue.a,{layout:"inline"},r.a.createElement(ue.a.Item,null,r.a.createElement(ct,null,e.nombre)),r.a.createElement(ue.a.Item,null,r.a.createElement(ot.a,{value:e.valor,onChange:function(t){e.doCambiarVariable(e.tipo,e.variableAsId,parseInt(t))}})),r.a.createElement(ue.a.Item,null,r.a.createElement(de.a,{onClick:function(){e.doBorrarVariable(e.tipo,e.variableAsId)}},r.a.createElement(Ze.a,{type:"delete"}))))});var ut=Object(c.b)(function(e,t){return{variablesAsIds:e.entities.equipos[e.seleccionado][t.tipo],idEquipo:e.seleccionado}},function(e){return{doAddVariable:function(t,a,n){"datos"===t?e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me()(),t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;return{type:p,payload:{id:e,idObjetivo:t,nombre:a}}}(void 0,a,n)):"incognitas"===t&&e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me()(),t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;return{type:y,payload:{id:e,idObjetivo:t,nombre:a}}}(void 0,a,n))}}})(function(e){var t=Object(n.useState)(""),a=Object(ce.a)(t,2),i=a[0],o=a[1],c=r.a.createElement("div",null,r.a.createElement(se.a,{value:i,onChange:function(e){o(e.target.value)},placeholder:"Nombre"}),r.a.createElement(de.a,{type:"button",onClick:function(){e.doAddVariable(e.tipo,e.idEquipo,i),o("")}},"A\xf1adir"));return r.a.createElement(Xe.a,{header:c},e.variablesAsIds.map(function(t){return r.a.createElement(Xe.a.Item,{key:t},r.a.createElement(lt,{variableAsId:t,tipo:e.tipo}))}))});function st(e){return{type:I,payload:{id:e}}}var dt=a(388),vt=le.a.Text;var ht=Object(c.b)(function(e,t){return{ecuacion:e.entities.ecuaciones[t.ecuacionAsId].valor}},function(e){return{borrarEcuacion:dt.a(e,st)}})(function(e){return r.a.createElement(ue.a,{layout:"inline"},r.a.createElement(ue.a.Item,null,r.a.createElement(vt,null,e.ecuacion)),r.a.createElement(ue.a.Item,null,r.a.createElement(de.a,{onClick:function(){e.borrarEcuacion(e.ecuacionAsId)}},r.a.createElement(Ze.a,{type:"delete",theme:"filled"}))))});var mt=Object(c.b)(function(e){return{ecuacionesAsIds:e.entities.equipos[e.seleccionado].ecuaciones,idObjetivo:e.seleccionado}},function(e){return{addEcuacion:function(t,a){return e(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me()(),t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;return{type:j,payload:{id:e,idObjetivo:t,valor:a}}}(void 0,t,a))}}})(function(e){var t=Object(n.useState)(""),a=Object(ce.a)(t,2),i=a[0],o=a[1];return r.a.createElement("div",null,r.a.createElement(se.a,{value:i,onChange:function(e){o(e.target.value)}}),r.a.createElement(Xe.a,{header:r.a.createElement(de.a,{type:"button",onClick:function(){e.addEcuacion(e.idObjetivo,i),o("")}},"A\xf1adir")},e.ecuacionesAsIds.map(function(e){return r.a.createElement(Xe.a.Item,{key:e},r.a.createElement(ht,{ecuacionAsId:e}))})))}),ft=a(377),pt=ft.a.TabPane;var bt=function(e){return r.a.createElement("div",null,r.a.createElement(de.a,{type:"danger",onClick:function(){!function(){var e=oe.getState().seleccionado;oe.getState().entities.equipos[e]&&ae.getCell(e).remove()}()}},"Borrar equipo"),r.a.createElement(ft.a,{defaultActiveKey:"1"},r.a.createElement(pt,{tab:"Datos",key:"1"},r.a.createElement(ut,{tipo:"datos"})),r.a.createElement(pt,{tab:"Incognitas",key:"2"},r.a.createElement(ut,{tipo:"incognitas"})),r.a.createElement(pt,{tab:"Ecuaciones",key:"3"},r.a.createElement(mt,{isEquipo:!0}))))};var gt=Object(c.b)(function(e){var t=!1,a=!1,n="",r=e.seleccionado,i=e.entities,o=i.equipos,c=i.enlaces;return""!==r&&(o[r]?(t=!0,n=o[r].nombre):c[r]&&(a=!0,n="".concat(o[c[r].origen].nombre," -> ").concat(o[c[r].destino].nombre))),{isDrawerOpen:e.isDrawerOpen,isEquipo:t,isEnlace:a,drawerTitle:n}},function(e){return{handleCloseDrawer:function(){return e(pe())}}})(function(e){var t;return t=e.isEquipo?r.a.createElement(bt,null):e.isEnlace?r.a.createElement(it,null):"",r.a.createElement(Qe.a,{title:e.drawerTitle,placement:"right",visible:e.isDrawerOpen,width:400,onClose:e.handleCloseDrawer},t)}),yt=a(374),Et=(a(366),yt.a.Content),Ot=yt.a.Footer;var jt=function(e){var t=Object(n.useState)(!1),a=Object(ce.a)(t,2),i=a[0],o=a[1];return r.a.createElement(yt.a,{style:{height:"100vh"}},r.a.createElement(Et,{className:"diagrama"}),r.a.createElement(Ot,null,r.a.createElement(ye,{onResolver:function(){o(!0)}})),r.a.createElement(gt,null),i&&r.a.createElement(Je,{visible:i,onCancel:function(){o(!1)}}))};o.a.render(r.a.createElement(c.a,{store:oe},r.a.createElement(jt,null)),document.getElementById("root")),ae=new ve.dia.Graph,ne=new ve.dia.Paper({el:document.querySelector(".diagrama"),model:ae,width:"100%",height:"100%",gridSize:10,drawGrid:!0,defaultRouter:{name:"manhattan"},linkPinning:!1,interactive:{vertexAdd:!1}}),ae.on("add",function(e){e.isElement()&&oe.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me()(),t=arguments.length>1?arguments[1]:void 0;return{type:v,payload:{id:e,nombre:t}}}(e.id,e.attr("label/text")))}),ae.on("remove",function(e){var t;e.isElement()&&oe.dispatch((t=e.id,{type:h,payload:{id:t}})),e.isLink()&&oe.dispatch(function(e){return{type:f,payload:{id:e}}}(e.id))}),ne.on("link:connect",function(e){oe.dispatch(function(){var e=arguments.length>0&&void 0!==arguments[0]?arguments[0]:me()(),t=arguments.length>1?arguments[1]:void 0,a=arguments.length>2?arguments[2]:void 0;return{type:m,payload:{id:e,idOrigen:t,idDestino:a}}}(e.model.id,e.model.attributes.source.id,e.model.attributes.target.id))}),ne.on("element:pointerdown",function(e){be(),e.highlight(e),oe.dispatch(fe(e.model.id))}),ne.on("link:pointerclick",function(e){be(),oe.dispatch(fe(e.model.id))}),ne.on("link:pointerdblclick",function(e){oe.dispatch(fe(e.model.id)),oe.dispatch(pe())}),ne.on("element:pointerdblclick",function(){oe.dispatch(pe())}),ne.on("blank:pointerdown",be),"serviceWorker"in navigator&&navigator.serviceWorker.ready.then(function(e){e.unregister()})}},[[203,1,2]]]);
//# sourceMappingURL=main.a245a5f4.chunk.js.map