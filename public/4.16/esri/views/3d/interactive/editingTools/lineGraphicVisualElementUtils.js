// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../../../core/handleUtils ../../../../core/mathUtils ../../../../core/maybe ../../../../core/libs/gl-matrix-2/vec3 ../../../../core/libs/gl-matrix-2/vec3f64 ../../../../support/elevationInfoUtils ../Manipulator3D ./ManipulatorState ./settings ../visualElements/LaserlineVisualElement ../visualElements/LineVisualElement ../visualElements/OutlineVisualElement ../../layers/graphics/GraphicState".split(" "),function(K,p,m,z,v,q,A,x,B,C,d,D,E,F,G){function H(a,c,e){var f=a.graphic,
b=new F.OutlineVisualElement({view:a.view,geometry:w(f)?f.geometry:null,elevationInfo:x.getGraphicEffectiveElevationInfo(f),attached:!1});d.settings.visualElements.lineGraphics.shadowStyle.apply(b);a=function(){b.attached=c.displaying};d.settings.visualElements.lineGraphics.outline.apply(b);e.push(c.watch("displaying",a),c.watch("isDraped",function(a){return b.isDraped=a}),c.on("changed",function(){return b.geometry=w(f)?f.geometry:null}),m.destroyHandle(b));a();return b}function I(a,c,e,f){var b=
a.graphic,r=a.view,g=x.getGraphicEffectiveElevationInfo(b),q="on-the-ground"===g.mode||!g.offset&&"absolute-height"!==g.mode,k=new C.ManipulatorState,l=new E.LineVisualElement({view:r,infinite:d.settings.visualElements.zVerticalLine.infiniteType,attached:!1});d.settings.visualElements.pointGraphics.shadowStyle.apply(l);var g=z.deg2rad(d.settings.visualElements.heightPlaneAngleCutoff),t=new D.LaserlineVisualElement({view:r,attached:!1,angleCutoff:g});d.settings.visualElements.heightPlane.apply(t);
var p=1,y=1,n=function(){k.update(a);if(e.displaying&&(!q||!e.isDraped&&w(b)&&b.geometry.hasZ)){c.laserlineEnabled=!0;var h=k.grabbingState&4?d.settings.visualElements.laserlineAlphaMultiplier:1;h!==p&&(p=h,d.settings.visualElements.lineGraphics.shadowStyle.apply(c,h),d.settings.visualElements.pointGraphics.shadowStyle.apply(l,h));h=k.grabbingState&2?d.settings.visualElements.laserlineAlphaMultiplier:1;h!==y&&(y=h,d.settings.visualElements.heightPlane.apply(t,h));h=1===k.numSelected?k.firstSelected:
1<k.numSelected&&v.isSome(k.firstGrabbedXY)?k.firstGrabbedXY:null;v.isSome(h)?(d.settings.visualElements.zVerticalLine.infinite&&(l.worldDownAtLocation=h.renderLocation),l.attached=!0):l.attached=!1;J(a,c,t,k)}else c.laserlineEnabled=!1,l.attached=!1,t.attached=!1};d.settings.visualElements.zVerticalLine.apply(l);f.push(e.on("changed",n),e.watch("displaying",n),c.events.on("attachment-origin-changed",n),m.destroyHandle(l),m.destroyHandle(t));var u=[],r=function(){m.handlesGroup(u).remove();u.length=
0;a.forEachManipulator(function(a){return u.push(a.events.on("grab-changed",n))});a.forEachManipulator(function(a){return u.push(a.events.on("select-changed",n))});n()};r();f.push(a.onManipulatorsChanged(r),m.refHandle(function(){return m.handlesGroup(u)}))}function J(a,c,e,f){if(0<f.numSelected){q.vec3.set(g,0,0,0);var b=0;a.forEachManipulator(function(a,c){1===c&&a.selected&&a instanceof B.Manipulator3D&&(q.vec3.add(g,g,a.renderLocation),b++)});0<b?(e.heightManifoldTarget=q.vec3.scale(g,g,1/b),
e.attached=!0):e.attached=!1}else c=c.attachmentOrigin,v.isSome(c)&&a.view.renderCoordsHelper.toRenderCoords(c,g)?(e.heightManifoldTarget=g,e.attached=!0):e.attached=!1}function w(a){return v.isSome(a.geometry)&&("polygon"===a.geometry.type||"polyline"===a.geometry.type)}Object.defineProperty(p,"__esModule",{value:!0});p.createVisualElements=function(a){var c=a.view,e=a.graphic,f=new G.GraphicState({graphic:e}),b=[],d=H(a,f,b);I(a,d,f,b);b.push(c.maskOccludee(e));b.push(c.trackGraphicState(f));return{visualElement:d,
remove:function(){m.handlesGroup(b).remove()}}};var g=A.vec3f64.create()});