// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../webgl"],function(d,e,b){return function(){function a(a,c){this.rctx=a;this._vertexBuffer=b.BufferObject.createVertex(a,35044,new Uint16Array(c));this._vao=new b.VertexArrayObject(a,{a_position:0},{geometry:[{name:"a_position",count:2,type:5122,offset:0,stride:4,normalized:!1}]},{geometry:this._vertexBuffer})}a.prototype.bind=function(){this._vao.bind()};a.prototype.unbind=function(){this._vao.unbind()};a.prototype.dispose=function(){this._vao.dispose(!1);this._vertexBuffer.dispose()};
a.prototype.draw=function(){this.rctx.bindVAO(this._vao);this.rctx.drawArrays(5,0,4)};return a}()});