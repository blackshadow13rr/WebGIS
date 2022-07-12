// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","./Settings"],function(c,d,e){Object.defineProperty(d,"__esModule",{value:!0});c=function(){function b(a){this.createCamera=a;this.compared={sourceZoom:0,targetZoom:0,pan:0,rotate:0};this.settings={desiredScreenFlow:e.defaultSettings.desiredScreenFlow};this.source=a();this.target=a()}b.prototype.clone=function(){var a=new b(this.createCamera);a.copyFrom(this);return a};b.prototype.copyFrom=function(a){this.update(a.source,a.target,a.settings)};b.prototype.update=function(a,
b,c){this.source!==a&&this.source.copyFrom(a);this.target!==b&&this.target.copyFrom(b);this.compared=this.source.compareTo(this.target,this.compared);this.settings.desiredScreenFlow=null!=c.desiredScreenFlow?c.desiredScreenFlow:e.defaultSettings.desiredScreenFlow;this.desiredPixelFlow=this.settings.desiredScreenFlow*this.target.size;this.halfWindowSize=this.target.size/2};b.prototype.halfWindowPanAtZoom=function(a){a=this.target.pixelsPerPanAtZoom(a);return this.halfWindowSize/a};Object.defineProperty(b.prototype,
"hasZoom",{get:function(){return 1E-5<Math.abs(this.compared.sourceZoom-this.compared.targetZoom)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasPan",{get:function(){return 1E-9<this.compared.pan},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"hasRotate",{get:function(){return 1E-9<this.compared.rotate},enumerable:!0,configurable:!0});return b}();d.Definition=c;d.default=c});