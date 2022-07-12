// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/libs/gl-matrix-2/vec4f32 ../../../../webgl ../enums ../number ./WGLBrush".split(" "),function(p,q,v,r,w,x,y,z){Object.defineProperty(q,"__esModule",{value:!0});var t=[1,1,1,1];p=function(h){function d(){var c=null!==h&&h.apply(this,arguments)||this;c._color=r.vec4f32.create();c._strokeColor=r.vec4f32.create();c._programOptions={id:!1};c._vertexAttributes={geometry:[{name:"a_pos",count:2,type:5122,offset:0,stride:16,normalized:!1,divisor:0},{name:"a_color",
count:4,type:5121,offset:4,stride:16,normalized:!0,divisor:0},{name:"a_stroke_color",count:4,type:5121,offset:8,stride:16,normalized:!0,divisor:0},{name:"a_data",count:4,type:5121,offset:12,stride:16,normalized:!1,divisor:0}]};return c}v.__extends(d,h);d.prototype.dispose=function(){};d.prototype.drawMany=function(c,u){var m=c.context,e=c.state,b=c.drawPhase,d=c.styleLayerId,f=c.displayLevel,a=c.styleLayer;c=c.painter.getVectorTileProgramCach();var n=a.hasDataDrivenRadius?1:a.getPaintValue("circle-radius",
f),l=a.hasDataDrivenColor?t:a.getPaintValue("circle-color",f),g=a.hasDataDrivenOpacity?1:a.getPaintValue("circle-opacity",f),h=a.hasDataDrivenStrokeWidth?1:a.getPaintValue("circle-stroke-width",f),k=a.hasDataDrivenStrokeColor?t:a.getPaintValue("circle-stroke-color",f),p=a.hasDataDrivenStrokeOpacity?1:a.getPaintValue("circle-stroke-opacity",f),q=a.hasDataDrivenBlur?0:a.getPaintValue("circle-blur",f),g=g*l[3];this._color[0]=g*l[0];this._color[1]=g*l[1];this._color[2]=g*l[2];this._color[3]=g;g=p*k[3];
this._strokeColor[0]=g*k[0];this._strokeColor[1]=g*k[1];this._strokeColor[2]=g*k[2];this._strokeColor[3]=g;l=a.getPaintValue("circle-translate",f);f=a.getPaintValue("circle-translate-anchor",f);k=b===x.WGLDrawPhase.HITTEST;b=this._programOptions;b.id=k;b=c.getProgram(5,k?1:0,b);m.bindProgram(b);b.setUniformMatrix3fv("u_displayMat3",1===f?e.displayMat3:e.displayViewMat3);b.setUniform2fv("u_circleTranslation",l);b.setUniform1f("u_depth",a.z);b.setUniform1f("u_radius",n);b.setUniform4fv("u_color",this._color);
b.setUniform1f("u_blur",q);b.setUniform1f("u_stroke_width",h);b.setUniform4fv("u_stroke_color",this._strokeColor);b.setUniform1f("u_antialiasingWidth",1.2);k&&(e=y.u32to4Xu8(d+1),b.setUniform4fv("u_id",e));for(e=0;e<u.length;e++)if(a=u[e],a.layerData[d]&&(n=a.layerData[d],h=this._getCircleVAO(m,a,c)))m.bindVAO(h),b.setUniformMatrix3fv("u_dvsMat3",a.transforms.dvs),m.setStencilFunction(514,a.stencilRef,255),m.drawElements(4,n.triangleElementCount,5125,12*n.triangleElementStart),a.triangleCount+=n.triangleElementCount/
3};d.prototype._getCircleVAO=function(c,d,h){if(d.circleVertexArrayObject)return d.circleVertexArrayObject;var e=d.circleVertexBuffer,b=d.circleIndexBuffer;if(!e||!b)return null;d.circleVertexArrayObject=new w.VertexArrayObject(c,h.getProgramAttributes(5),this._vertexAttributes,{geometry:e},b);return d.circleVertexArrayObject};return d}(z.default);q.WGLBrushVTLCircle=p});