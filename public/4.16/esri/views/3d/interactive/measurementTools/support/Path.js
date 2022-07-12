// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/Accessor ../../../../../core/Collection ../../../../../core/Evented ../../../../../core/accessorSupport/decorators".split(" "),function(k,l,c,f,g,h,d){return function(e){function a(){var b=null!==e&&e.apply(this,arguments)||this;b.vertices=new g;return b}c.__extends(a,e);Object.defineProperty(a.prototype,"front",{get:function(){return this.vertices.items[0]||null},enumerable:!0,configurable:!0});Object.defineProperty(a.prototype,"back",{get:function(){return this.vertices.items[this.vertices.length-
1]||null},enumerable:!0,configurable:!0});a.prototype.clear=function(){this.vertices.removeAll();this.emit("cleared",{});this._notifyFrontBack()};a.prototype.vertex=function(b){return this.vertices.items[b]};a.prototype.add=function(b){this.vertices.add(b);b=this.vertices.length-1;this._notifyFrontBack();this.emit("vertex-added",{index:b});return b};a.prototype.insert=function(b,a){this.vertices.splice(b,0,a);this._notifyFrontBack();this.emit("vertex-inserted",{index:b});return b};a.prototype.remove=
function(b){this.vertices.removeAt(b);this._notifyFrontBack();this.emit("vertex-removed",{index:b})};a.prototype.update=function(b,a){null!=a&&(this.vertices.splice(b,1,a),this._notifyFrontBack());this.emit("vertex-updated",{index:b})};a.prototype._notifyFrontBack=function(){this.notifyChange("front");this.notifyChange("back")};c.__decorate([d.property({readOnly:!0})],a.prototype,"vertices",void 0);c.__decorate([d.property({aliasOf:"vertices.length"})],a.prototype,"length",void 0);c.__decorate([d.property({readOnly:!0})],
a.prototype,"front",null);c.__decorate([d.property({readOnly:!0})],a.prototype,"back",null);return a=c.__decorate([d.subclass("esri.views.3d.interactive.measurementTools.support.Path")],a)}(h.EventedMixin(f))});