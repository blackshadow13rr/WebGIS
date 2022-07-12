// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../core/Evented","../../../core/SetUtils"],function(e,f,h,k,g){Object.defineProperty(f,"__esModule",{value:!0});e=function(d){function a(){var b=null!==d&&d.apply(this,arguments)||this;b._set=new Set;return b}h.__extends(a,d);a.prototype.clear=function(){if(0<this._set.size){var b=this.toArray();this._set.clear();this.emit("after-changes",{type:2});this.emit("change",{added:[],removed:b})}};Object.defineProperty(a.prototype,"length",{get:function(){return this._set.size},
enumerable:!0,configurable:!0});a.prototype.addMany=function(b){if(0!==b.length){for(var c=0;c<b.length;c++)this._set.add(b[c]);this.emit("after-changes",{type:1});this.emit("change",{added:b,removed:[]})}};a.prototype.remove=function(b){this._set.delete(b)&&(this.emit("after-changes",{type:2}),this.emit("change",{added:[],removed:[b]}))};a.prototype.removeMany=function(b){for(var c=[],a=0;a<b.length;a++){var d=b[a];this._set.delete(d)&&c.push(d)}0<c.length&&(this.emit("after-changes",{type:2}),this.emit("change",
{added:[],removed:c}))};a.prototype.toArray=function(){return g.valuesOfSet(this._set)};a.prototype.find=function(b){var a;g.someSet(this._set,function(c){return b(c)?(a=c,!0):!1});return a};a.prototype.forEach=function(b){this._set.forEach(function(a){return b(a)})};return a}(k);f.EventedSet=e});