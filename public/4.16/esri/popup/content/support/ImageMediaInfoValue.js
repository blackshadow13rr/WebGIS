// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../core/JSONSupport","../../../core/accessorSupport/decorators"],function(g,h,b,f,c){return function(e){function a(a){a=e.call(this,a)||this;a.linkURL=null;a.sourceURL=null;return a}b.__extends(a,e);d=a;a.prototype.clone=function(){return new d({linkURL:this.linkURL,sourceURL:this.sourceURL})};var d;b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"linkURL",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"sourceURL",
void 0);return a=d=b.__decorate([c.subclass("esri.popup.content.support.ImageMediaInfoValue")],a)}(f.JSONSupport)});