// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../geometry ../../Graphic ../../core/JSONSupport ../../core/maybe ../../core/accessorSupport/decorators".split(" "),function(l,m,c,g,e,h,k,d){return function(f){function a(b){b=f.call(this,b)||this;b.displayFieldName=null;b.feature=null;b.layerId=null;b.layerName=null;return b}c.__extends(a,f);a.prototype.readFeature=function(b,a){return e.fromJSON({attributes:c.__assign({},a.attributes),geometry:c.__assign({},a.geometry)})};a.prototype.writeFeature=function(b,a){if(b){var d=
b.attributes;b=b.geometry;d&&(a.attributes=c.__assign({},d));k.isSome(b)&&(a.geometry=b.toJSON(),a.geometryType=g.typeKebabDictionary.toJSON(b.type))}};c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"displayFieldName",void 0);c.__decorate([d.property({type:e})],a.prototype,"feature",void 0);c.__decorate([d.reader("feature",["attributes","geometry"])],a.prototype,"readFeature",null);c.__decorate([d.writer("feature")],a.prototype,"writeFeature",null);c.__decorate([d.property({type:Number,
json:{write:!0}})],a.prototype,"layerId",void 0);c.__decorate([d.property({type:String,json:{write:!0}})],a.prototype,"layerName",void 0);return a=c.__decorate([d.subclass("esri.tasks.support.IdentifyResult")],a)}(h.JSONSupport)});