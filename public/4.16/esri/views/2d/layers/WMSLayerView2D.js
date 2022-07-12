// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/Error ../../../core/Logger ../../../core/promiseUtils ../../../core/accessorSupport/decorators ../../../geometry/Extent ../../../layers/support/ExportWMSImageParameters ../engine/BitmapContainer ./LayerView2D ./support/ExportStrategy ../../layers/LayerView ../../layers/RefreshableLayerView ../../layers/WMSLayerView".split(" "),function(B,C,c,p,q,f,d,r,t,u,v,w,x,y,z){var A=q.getLogger("esri.views.2d.layers.WMSLayerView2D");return function(e){function a(){var b=
null!==e&&e.apply(this,arguments)||this;b.container=new u.BitmapContainer;return b}c.__extends(a,e);a.prototype.initialize=function(){var b=this.layer;b.supportsSpatialReference(this.view.spatialReference)||this.addResolvingPromise(f.reject(new p("layerview:spatial-reference-incompatible","The spatial references supported by this WMS layer are incompatible with the spatial reference of the view",{layer:b})))};a.prototype.hitTest=function(){return null};a.prototype.update=function(b){this.strategy.update(b).catch(function(b){f.isAbortError(b)||
A.error(b)})};a.prototype.attach=function(){var b=this,a=this.layer,c=this.view,k=a.imageMaxHeight,g=a.imageMaxWidth;this.strategy=new w({container:this.container,fetchSource:this.fetchImage.bind(this),requestUpdate:this.requestUpdate.bind(this),imageMaxHeight:k,imageMaxWidth:g,imageRotationSupported:!1,imageNormalizationSupported:!1,hidpi:!1});this._exportWMSImageParameters=new t({layer:a,view:c});this.handles.add(this._exportWMSImageParameters.watch("version",function(a){b._exportImageVersion!==
a&&(b._exportImageVersion=a,b.requestUpdate())}),"wms")};a.prototype.detach=function(){this.handles.remove("wms");this.container.removeAllChildren();this.strategy.destroy();this._exportWMSImageParameters.layer=null;this._exportWMSImageParameters.destroy();this._exportWMSImageParameters=null;this.container.removeAllChildren()};a.prototype.moveStart=function(){};a.prototype.viewChange=function(){};a.prototype.moveEnd=function(){this.requestUpdate()};a.prototype.createFetchPopupFeaturesQuery=function(a){var b=
a.x,c=a.y,k=this.view.spatialReference,g=null,d=0,e=0;this.container.children.some(function(a){var f=a.width,m=a.height,h=a.resolution,l=a.x;a=a.y;var n=l+h*f,h=a-h*m;return b>=l&&b<=n&&c<=a&&c>=h?(g=new r({xmin:l,ymin:h,xmax:n,ymax:a,spatialReference:k}),d=f,e=m,!0):!1});a=g.width/d;return{extent:g,width:d,height:e,x:Math.round((b-g.xmin)/a),y:Math.round((g.ymax-c)/a)}};a.prototype.doRefresh=function(){return c.__awaiter(this,void 0,void 0,function(){return c.__generator(this,function(a){this.requestUpdate();
return[2]})})};a.prototype.isUpdating=function(){return this.strategy.updating||this.updateRequested};a.prototype.fetchImage=function(a,d,e,f){return this.layer.fetchImage(a,d,e,c.__assign({timestamp:this.refreshTimestamp},f))};c.__decorate([d.property()],a.prototype,"strategy",void 0);c.__decorate([d.property({dependsOn:["strategy.updating"]})],a.prototype,"updating",void 0);return a=c.__decorate([d.subclass("esri.views.2d.layers.WMSLayerView2D")],a)}(z.WMSLayerView(y.RefreshableLayerView(v.LayerView2DMixin(x))))});