// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../core/JSONSupport","../../core/accessorSupport/decorators"],function(f,g,b,e,c){return function(d){function a(a){a=d.call(this,a)||this;a.itemId=null;a.url=null;return a}b.__extends(a,d);b.__decorate([c.property({type:String,json:{read:{source:"itemID"},write:{target:"itemID"}}})],a.prototype,"itemId",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"url",void 0);return a=b.__decorate([c.subclass("esri.tasks.support.DataFile")],
a)}(e.JSONSupport)});