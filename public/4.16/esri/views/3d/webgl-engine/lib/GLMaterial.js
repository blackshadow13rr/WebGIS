// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","./AutoDisposable"],function(b,d,e,f){Object.defineProperty(d,"__esModule",{value:!0});b=function(b){function a(a){var c=b.call(this)||this;c.material=a.material;c.techniqueRep=a.techniqueRep;c.output=a.output;return c}e.__extends(a,b);a.prototype.getTechnique=function(){return this.technique};a.prototype.getPipelineState=function(a,b){return this.getTechnique().pipeline};a.prototype.ensureResources=function(a){return 2};a.prototype.ensureParameters=function(a){};
return a}(f.AutoDisposable);d.GLMaterial=b});