// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/jsonMap ../core/accessorSupport/decorators ./SimpleLineSymbol ./Symbol".split(" "),function(k,l,b,f,c,g,h){var d=new f.default({esriSFS:"simple-fill",esriPFS:"picture-fill"});return function(e){function a(a){a=e.call(this,a)||this;a.outline=null;a.type=null;return a}b.__extends(a,e);a.prototype.hash=function(){return this.type+"."+(this.outline&&this.outline.hash())};b.__decorate([c.property({type:g,json:{default:null,write:!0}})],a.prototype,"outline",void 0);
b.__decorate([c.property({type:d.apiValues,readOnly:!0,json:{type:d.jsonValues}})],a.prototype,"type",void 0);return a=b.__decorate([c.subclass("esri.symbols.FillSymbol")],a)}(h)});