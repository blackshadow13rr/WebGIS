// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/maybe","../../../core/libs/gl-matrix-2/vec4f64"],function(e,d,c,g){Object.defineProperty(d,"__esModule",{value:!0});e=function(){function b(a){this._getFadeDuration=a;this._delayedTime=this._fadeStart=0}b.prototype.clear=function(){this._current=c.destroyMaybe(this._current);this._next=c.destroyMaybe(this._next);this._waiting=c.destroyMaybe(this._waiting);this._delayed=c.destroyMaybe(this._delayed)};Object.defineProperty(b.prototype,"current",{get:function(){if(c.isNone(this._current))return null;
if(!this._isFading){var a=this._delayed||this._waiting||this._next||this._current;a!==this._current&&(this._current=null,this.clear(),this._current=a)}a=performance.now();c.isSome(this._delayed)&&a>=this._delayedTime&&(this._push(this._delayed,0),this._delayed=null);c.isSome(this._next)&&a-this._fadeStart>=this._fadeDuration&&(c.destroyMaybe(this._current),this._current=this._next,this._next=this._waiting,this._waiting=null,this._fadeStart=a);return this._current},enumerable:!0,configurable:!0});
Object.defineProperty(b.prototype,"next",{get:function(){return this._next},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"fadeFactor",{get:function(){if(c.isNone(this._next))return 1;var a=performance.now()-this._fadeStart,b=this._fadeDuration;return a>b?0:1-a/b},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"isFading",{get:function(){return c.isSome(this._next)||c.isSome(this._delayed)},enumerable:!0,configurable:!0});b.prototype.push=function(a,b,h,k,d){void 0===
d&&(d=0);this._delayed=c.destroyMaybe(this._delayed);a=c.isSome(a)?new f(a,b,h,k):null;this._push(a,d)};b.prototype._push=function(a,b){this._isFading||this.clear();if(c.isNone(this._current))this._current=a;else{var d=performance.now();0!==b?(this._delayed=a,this._delayedTime=d+b):c.isNone(this._next)?(this._next=a,this._fadeStart=d):c.isNone(a)||(c.destroyMaybe(this._waiting),this._waiting=a)}};Object.defineProperty(b.prototype,"_fadeDuration",{get:function(){return c.isNone(this._waiting)?this._getFadeDuration():
.5*this._getFadeDuration()},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"_isFading",{get:function(){return 0<this._getFadeDuration()},enumerable:!0,configurable:!0});return b}();d.default=e;var f=function(){function b(a,b,c,d){this.texture=a;a.retain();this.offsetAndScale=g.vec4f64.fromValues(b,c,d,d)}b.prototype.destroy=function(){this.texture.release()};return b}();d.TextureReference=f});