// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports"],function(f,g){return function(){function b(a,d,c){this._op=a;"$type"===d?(this._val=c instanceof Array?c.map(function(a){return b._types.indexOf(a)}):b._types.indexOf(c),this._op+=11):(this._key=d,this._val=c)}b.prototype.filter=function(a){switch(this._op){case 0:return this._val;case 1:return a.values[this._key]===this._val;case 2:return a.values[this._key]!==this._val;case 3:return a.values[this._key]<this._val;case 4:return a.values[this._key]>this._val;case 5:return a.values[this._key]<=
this._val;case 6:return a.values[this._key]>=this._val;case 7:return-1!==this._val.indexOf(a.values[this._key]);case 8:return-1===this._val.indexOf(a.values[this._key]);case 9:for(var b=0,c=this._val;b<c.length;b++){var e=c[b];if(e.filter(a))return!0}return!1;case 10:b=0;for(c=this._val;b<c.length;b++)if(e=c[b],!e.filter(a))return!1;return!0;case 11:b=0;for(c=this._val;b<c.length;b++)if(e=c[b],e.filter(a))return!1;return!0;case 12:return a.type===this._val;case 13:return a.type!==this._val;case 14:return a.type<
this._val;case 15:return a.type>this._val;case 16:return a.type>=this._val;case 17:return a.type<=this._val;case 18:return-1!==this._val.indexOf(a.type);case 19:return-1===this._val.indexOf(a.type);case 20:return void 0!==a.values[this._key];case 21:return void 0===a.values[this._key]}};b.createFilter=function(a){if(!a)return new b(0,void 0,!0);var d=a[0];if(1>=a.length)return new b(0,void 0,"any"!==d);switch(d){case "\x3d\x3d":return new b(1,a[1],a[2]);case "!\x3d":return new b(2,a[1],a[2]);case "\x3e":return new b(4,
a[1],a[2]);case "\x3c":return new b(3,a[1],a[2]);case "\x3e\x3d":return new b(6,a[1],a[2]);case "\x3c\x3d":return new b(5,a[1],a[2]);case "in":return new b(7,a[1],a.slice(2));case "!in":return new b(8,a[1],a.slice(2));case "any":return new b(9,void 0,a.slice(1).map(b.createFilter.bind(this)));case "all":return new b(10,void 0,a.slice(1).map(b.createFilter.bind(this)));case "none":return new b(11,void 0,a.slice(1).map(b.createFilter.bind(this)));case "has":return new b(20,a[1],void 0);case "!has":return new b(21,
a[1],void 0);default:throw Error("invalid operator: "+d);}};b._types=["Unknown","Point","LineString","Polygon"];return b}()});