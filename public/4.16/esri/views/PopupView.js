// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/arrayUtils ../core/maybe ../core/promiseUtils ../core/accessorSupport/decorators".split(" "),function(v,c,e,t,g,p,u){Object.defineProperty(c,"__esModule",{value:!0});c.PopupView=function(c){return function(c){function d(){return null!==c&&c.apply(this,arguments)||this}e.__extends(d,c);d.prototype.fetchPopupFeatures=function(a,h){return e.__awaiter(this,void 0,void 0,function(){var b,q,f,m,n,k,l,d,r;return e.__generator(this,function(c){switch(c.label){case 0:return[4,
this.when()];case 1:return c.sent(),[4,this._prepareFetchPopupFeatures(a,h)];case 2:return b=c.sent(),q=b.location,f=b.queryArea,m=b.layerViewsAndGraphics,n=b.clientOnlyGraphics,k=p.resolve(n),l=this._queryLayerPopupFeatures({queryArea:f,layerViewsAndGraphics:m,options:h}),d=l.map(function(b){return b.promise}),r=p.eachAlwaysValues(e.__spreadArrays([k],d)).then(t.flatten),[2,{location:q,clientOnlyGraphics:n,allGraphicsPromise:r,promisesPerLayerView:l}]}})})};d.prototype._queryLayerPopupFeatures=function(a){var h=
a.queryArea,b=a.options;return a.layerViewsAndGraphics.map(function(a){var f=a.layerView;a={clientGraphics:a.graphics,event:g.isSome(b)?b.event:null,signal:g.isSome(b)?b.signal:null,defaultPopupTemplateEnabled:g.isSome(b)?!!b.defaultPopupTemplateEnabled:!1};a=f.fetchPopupFeatures(h,a);return{layerView:f,promise:a}})};d.prototype._isValidPopupGraphic=function(a,h){return a&&!!a.getEffectivePopupTemplate(g.isSome(h)&&h.defaultPopupTemplateEnabled)};d.prototype._prepareFetchPopupFeatures=function(a,
h){return e.__awaiter(this,void 0,void 0,function(){var b,d,f,m,c,k,l,g;return e.__generator(this,function(e){switch(e.label){case 0:return[4,this._popupHitTestGraphics(a,h)];case 1:return b=e.sent(),d=b.clientGraphics,f=b.queryArea,m=b.location,c=this._getFetchPopupLayerViews(),k=this._graphicsPerFetchPopupLayerView(d,c),l=k.layerViewsAndGraphics,g=k.clientOnlyGraphics,[2,{clientOnlyGraphics:g,layerViewsAndGraphics:l,queryArea:f,location:m}]}})})};d.prototype._popupHitTestGraphics=function(a,h){return e.__awaiter(this,
void 0,void 0,function(){var b,d,f,c,g,k,l=this;return e.__generator(this,function(e){switch(e.label){case 0:return[4,this.popupHitTest(a)];case 1:return b=e.sent(),d=b.results,f=b.mapPoint,c=d.filter(function(a){return l._isValidPopupGraphic(a.graphic,h)}),g=c.length?c[0].mapPoint:null,k=c.map(function(a){return a.graphic}),[2,{clientGraphics:k,queryArea:f,location:f||g}]}})})};d.prototype._getFetchPopupLayerViews=function(){var a=this,c=[];this.allLayerViews.forEach(function(b){a._isValidPopupLayerView(b)&&
c.push(b)});g.isSome(this.graphicsView)&&this._isValidPopupLayerView(this.graphicsView)&&c.push(this.graphicsView);return c.reverse()};d.prototype._isValidPopupLayerView=function(a){return g.isSome(a)&&(!("layer"in a)||!a.suspended)&&"fetchPopupFeatures"in a};d.prototype._graphicsPerFetchPopupLayerView=function(a,c){var b=[],d=new Map;c=c.map(function(a){var b=[];"layer"in a?d.set(a.layer,b):d.set(a.graphics,b);return{layerView:a,graphics:b}});for(var f=0;f<a.length;f++){var e=a[f],g=d.get(e.layer)||
null;g?g.push(e):b.push(e)}return{layerViewsAndGraphics:c,clientOnlyGraphics:b}};return d=e.__decorate([u.subclass("esri.views.PopupView")],d)}(c)}});