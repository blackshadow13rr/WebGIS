// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/libs/gl-matrix-2/mat4 ../../../core/libs/gl-matrix-2/mat4f64 ../environment/Stars.glsl ../webgl-engine/core/shaderTechnique/ReloadableShaderModule ../webgl-engine/core/shaderTechnique/ShaderTechnique ../webgl-engine/lib/DefaultVertexAttributeLocations ../../webgl/Program ../../webgl/renderState @dojo/framework/shim/Promise".split(" "),function(k,h,l,f,m,n,p,e,q,r,g){Object.defineProperty(h,"__esModule",{value:!0});e=function(e){function d(){return null!==
e&&e.apply(this,arguments)||this}l.__extends(d,e);d.prototype.initializeProgram=function(a){var b=d.shader.get().build();return new r(a.rctx,b.generateSource("vertex"),b.generateSource("fragment"),q.Default3D)};d.prototype.initializePipeline=function(){return g.makePipelineState({blending:g.separateBlendingParams(770,1,771,771),depthTest:{func:515},colorWrite:g.defaultColorWriteParams})};d.prototype.bindPass=function(a,b){a=b.camera;b=b.modelMatrix;var c=this.makeInfiniteProjectionMatrix(a.projectionMatrix,
a.near,t);f.mat4.multiply(c,c,a.viewMatrix);f.mat4.multiply(c,c,b);this.program.setUniformMatrix4fv("transform",c);this.program.setUniform4fv("viewport",a.fullViewport);this.program.setUniform1f("pixelRatio",a.pixelRatio)};d.prototype.makeInfiniteProjectionMatrix=function(a,b,c){f.mat4.copy(c,a);c[10]=2.4E-7-1;c[11]=-1;c[14]=(2.4E-7-2)*b;return c};d.shader=new p.ReloadableShaderModule(n,function(){return new Promise(function(a,b){k(["../environment/Stars.glsl"],a,b)})});return d}(e.ShaderTechnique);
h.StarsTechnique=e;var t=m.mat4f64.create()});