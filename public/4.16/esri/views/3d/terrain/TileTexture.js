// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(b,c){Object.defineProperty(c,"__esModule",{value:!0});b=function(){function a(a){this._texture=a;this._refCount=1}a.prototype.retain=function(){++this._refCount};a.prototype.release=function(){--this._refCount;0===this._refCount&&this._texture.dispose()};Object.defineProperty(a.prototype,"texture",{get:function(){return this._texture},enumerable:!0,configurable:!0});a.prototype.generateMipmap=function(){this._texture.generateMipmap()};Object.defineProperty(a.prototype,
"descriptor",{get:function(){return this._texture.descriptor},enumerable:!0,configurable:!0});return a}();c.TileTexture=b});