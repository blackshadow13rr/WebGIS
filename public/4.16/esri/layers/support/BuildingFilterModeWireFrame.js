// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/lang ../../core/accessorSupport/decorators ./BuildingFilterMode ../../symbols/edges/utils".split(" "),function(k,l,b,f,c,g,h){return function(d){function a(){var a=null!==d&&d.apply(this,arguments)||this;a.type="wire-frame";a.edges=null;return a}b.__extends(a,d);e=a;a.prototype.clone=function(){return new e({edges:f.clone(this.edges)})};var e;b.__decorate([c.enumeration({wireFrame:"wire-frame"})],a.prototype,"type",void 0);b.__decorate([c.property(h.symbol3dEdgesProperty)],
a.prototype,"edges",void 0);return a=e=b.__decorate([c.subclass("esri.layers.support.BuildingFilterModeWireFrame")],a)}(g)});