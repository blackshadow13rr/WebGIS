// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../core/promiseUtils"],function(e,f,d){Object.defineProperty(f,"__esModule",{value:!0});e=function(){function a(){this._tasks=[]}Object.defineProperty(a.prototype,"length",{get:function(){return this._tasks.length},enumerable:!0,configurable:!0});a.prototype.push=function(c){var b=this;return d.create(function(a,d){return b._tasks.push(new g(a,d,c))})};a.prototype.unshift=function(c){var b=this;return d.create(function(a,d){return b._tasks.unshift(new g(a,d,c))})};
a.prototype.process=function(){if(0===this._tasks.length)return!1;var c=this._tasks.shift();try{var b=c.callback();b&&"then"in b&&"function"===typeof b.then?b.then(c.resolve,c.reject):c.resolve(b)}catch(h){c.reject(h)}return!0};a.prototype.cancelAll=function(){for(var c=d.createAbortError(),b=0,a=this._tasks;b<a.length;b++)a[b].reject(c);this._tasks.length=0};return a}();f.default=e;var g=function(){return function(a,c,b){this.resolve=a;this.reject=c;this.callback=b}}()});