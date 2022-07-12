// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../core/accessorSupport/decorators ../../../../../core/libs/gl-matrix-2/vec3 ../../../../../core/libs/gl-matrix-2/vec3f64 ../../../camera/constraintUtils ../PointToPointAnimationController ../../utils/navigationUtils ../../../support/geometryUtils ../../../webgl-engine/lib/Camera ../../../webgl-engine/lib/Intersector ../../../../animation/easing".split(" "),function(k,l,m,t,c,d,n,u,v,p,q,w,x){Object.defineProperty(l,"__esModule",{value:!0});k=function(h){function b(){var a=
null!==h&&h.apply(this,arguments)||this;a.zoomLocation=d.vec3f64.create();a.tmpCamera=new q.default;a.tmpViewDir=d.vec3f64.create();a.targetOnSphere=d.vec3f64.create();a.tmpCenter=d.vec3f64.create();a.constraintOptions={selection:7,interactionType:1,interactionFactor:null,interactionStartCamera:new q.default,interactionDirection:null,tiltMode:0};a.sphere=p.sphere.create();return a}m.__extends(b,h);b.prototype.initialize=function(){this.intersector=new w.Intersector(this.view.viewingMode)};b.prototype.zoomStep=
function(a,r){if(this.active){var b=this.view.state,e=this.constraintOptions.interactionStartCamera;this.animation.finished?e.copyFrom(b.camera):this.animation.cameraAt(1,e);e=!1;0<a&&this.intersectionHelper.intersectScreen(r,this.zoomLocation)&&(e=!0);this.tmpCamera.copyFrom(b.camera);e?this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.intersector,this.tmpCenter)&&(this.tmpCamera.center=this.tmpCenter):this.intersectionHelper.intersectRay(this.tmpCamera.ray,this.intersector,this.zoomLocation)?
this.tmpCamera.center=this.zoomLocation:c.vec3.copy(this.zoomLocation,this.tmpCamera.center);this.updateCamera(this.tmpCamera,Math.pow(.6,a),this.zoomLocation,r);this.begin(this.tmpCamera)}};b.prototype.animationSettings=function(){return{apex:null,duration:.6,easing:x.outExpo}};b.prototype.updateCamera=function(a,b,d,e){this.sphere.radius=c.vec3.length(d);c.vec3.subtract(this.tmpViewDir,a.center,a.eye);var f=c.vec3.length(this.tmpViewDir),g=f*b;1>=b&&4>g&&(g=4,b=g/f);1E-6>Math.abs(f-g)||(f=c.vec3.length(a.center),
this.sphere.radius!==f&&c.vec3.scale(a.center,a.center,(this.sphere.radius+b*(f-this.sphere.radius))/f),c.vec3.scale(this.tmpViewDir,this.tmpViewDir,-b),c.vec3.add(a.eye,a.center,this.tmpViewDir),n.applyAll(this.view,a,this.constraintOptions),1E-12<c.vec3.squaredDistance(d,a.center)&&p.sphere.intersectScreen(this.sphere,a,e,this.targetOnSphere)&&v.panToPosition(this.sphere,a,d,this.targetOnSphere,this.view.camera.heading,this.view.camera.tilt,!0),n.applySurfaceCollisionConstraint(this.view,a))};return b=
m.__decorate([t.subclass("esri.views.3d.state.controllers.global.ZoomStepController")],b)}(u.PointToPointAnimationController);l.ZoomStepController=k});