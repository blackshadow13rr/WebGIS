// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../core/JSONSupport","../core/accessorSupport/decorators"],function(g,h,b,f,c){return function(e){function a(a){return e.call(this,a)||this}b.__extends(a,e);d=a;a.prototype.clone=function(){return new d({name:this.name,path:this.path,title:this.title})};var d;b.__decorate([c.property({json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"path",void 0);b.__decorate([c.property({json:{write:!0}})],a.prototype,"title",
void 0);return a=d=b.__decorate([c.subclass("esri.webscene.TransportationNetwork")],a)}(f.JSONSupport)});