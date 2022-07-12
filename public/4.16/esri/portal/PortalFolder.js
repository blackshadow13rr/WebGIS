// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/Error ../core/JSONSupport ../core/accessorSupport/decorators".split(" "),function(g,h,b,e,f,c){return function(d){function a(a){a=d.call(this,a)||this;a.created=null;a.id=null;a.portal=null;a.title=null;a.username=null;return a}b.__extends(a,d);Object.defineProperty(a.prototype,"url",{get:function(){var a=this.get("portal.restUrl");return a?a+"/content/users/"+this.username+"/"+this.id:null},enumerable:!0,configurable:!0});a.prototype.toJSON=function(){throw new e("internal:not-yet-implemented",
"PortalFolder.toJSON is not yet implemented");};b.__decorate([c.property({type:Date})],a.prototype,"created",void 0);b.__decorate([c.property()],a.prototype,"id",void 0);b.__decorate([c.property()],a.prototype,"portal",void 0);b.__decorate([c.property()],a.prototype,"title",void 0);b.__decorate([c.property({dependsOn:["portal.restUrl"],readOnly:!0})],a.prototype,"url",null);b.__decorate([c.property()],a.prototype,"username",void 0);return a=b.__decorate([c.subclass("esri.portal.PortalFolder")],a)}(f.JSONSupport)});