// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../core/lang ../../../geometry/support/aaBoundingRect ../../../geometry/support/boundsUtils ../../../geometry/support/jsonUtils".split(" "),function(f,g,e,l,m,d){Object.defineProperty(g,"__esModule",{value:!0});f=function(){function b(){}b.local=function(){null===b.instance&&(b.instance=new b);return b.instance};b.prototype.execute=function(a,c,b){return new n(a,c,b)};b.instance=null;return b}();g.EffectRotate=f;var n=function(){function b(a,c,b){this._inputGeometries=
a;this._rotateAngle=void 0!==c.angle?-c.angle*Math.PI/180:0;b}b.prototype.next=function(){for(var a=this._inputGeometries.next();a;){if(0===this._rotateAngle)return a;var c=l.create();m.getBoundsXY(c,a);var b=(c[2]+c[0])/2,c=(c[3]+c[1])/2;if(d.isExtent(a))return a={rings:[[[a.xmin,a.ymin],[a.xmin,a.ymax],[a.xmax,a.ymax],[a.xmax,a.ymin],[a.xmin,a.ymin]]]},this._rotateMultipath(a.rings,b,c),a;if(d.isPolygon(a))return a=e.clone(a),this._rotateMultipath(a.rings,b,c),a;if(d.isPolyline(a))return a=e.clone(a),
this._rotateMultipath(a.paths,b,c),a;if(d.isMultipoint(a))return a=e.clone(a),this._rotatePath(a.points,b,c),a;if(d.isPoint(a))return a;a=this._inputGeometries.next()}return null};b.prototype._rotateMultipath=function(a,b,d){if(a)for(var c=0;c<a.length;c++)this._rotatePath(a[c],b,d)};b.prototype._rotatePath=function(a,b,d){if(a)for(var c=Math.cos(this._rotateAngle),e=Math.sin(this._rotateAngle),k=0;k<a.length;k++){var h=a[k],f=h[0]-b,g=h[1]-d;h[0]=b+f*c-g*e;h[1]=d+f*e+g*c}};return b}()});