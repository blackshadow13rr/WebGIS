// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../core/Promise ../../../../core/promiseUtils ../../../../core/workers ../../../../core/accessorSupport/decorators".split(" "),function(d,l,a,m,f,n,e){Object.defineProperty(l,"__esModule",{value:!0});d=function(d){function b(c){c=d.call(this,c)||this;c._startupResolver=f.createResolver();c.isReady=!1;return c}a.__extends(b,d);b.prototype.initialize=function(){this._controller=f.createAbortController();this.addResolvingPromise(this._startWorker(this._controller.signal))};
b.prototype.destroy=function(){this._controller.abort();this._connection&&this._connection.close()};Object.defineProperty(b.prototype,"tileRenderer",{set:function(c){this.client.tileRenderer=c},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"closed",{get:function(){return this._connection.closed},enumerable:!0,configurable:!0});b.prototype.startup=function(c,k,b,h){return a.__awaiter(this,void 0,void 0,function(){var g,d,e,f;return a.__generator(this,function(a){switch(a.label){case 0:return[4,
this.when()];case 1:return a.sent(),g=this._controller.signal,d=Array.isArray(b.source)?{transferList:b.source,signal:g}:void 0,e=c.tileInfo.toJSON(),f={service:b,config:k,tileInfo:e,options:h},[4,this._connection.invoke("startup",f,d)];case 2:return a.sent(),this._startupResolver.resolve(),this._set("isReady",!0),[2]}})})};b.prototype.update=function(c,k){return a.__awaiter(this,void 0,void 0,function(){var b;return a.__generator(this,function(a){switch(a.label){case 0:return b={config:c,options:k},
[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("update",b)]}})})};b.prototype.setHighlight=function(c){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.setHighlight",c)]}})})};b.prototype.refresh=function(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,
this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.refresh")]}})})};b.prototype.setViewState=function(c){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("setViewState",c.toJSON())]}})})};b.prototype.queryFeatures=function(c,b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,
this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.queryFeatures",c.toJSON(),b)]}})})};b.prototype.queryObjectIds=function(c,b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.queryObjectIds",c.toJSON(),b)]}})})};b.prototype.queryFeatureCount=function(c,b){return a.__awaiter(this,void 0,void 0,
function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.queryFeatureCount",c.toJSON(),b)]}})})};b.prototype.queryExtent=function(c,b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){return[2,this._connection.invoke("controller.queryExtent",c.toJSON(),b)]})})};b.prototype.queryLatestObservations=function(c,b){return a.__awaiter(this,void 0,void 0,
function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.queryLatestObservations",c.toJSON(),b)]}})})};b.prototype.queryStatistics=function(b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.queryStatistics",b)]}})})};b.prototype.getObjectId=
function(b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.getObjectId",b)]}})})};b.prototype.getLocalId=function(b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.getLocalId",
b)]}})})};b.prototype.getAggregate=function(b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.getAggregate",b)]}})})};b.prototype.getAggregateValueRanges=function(){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),
[2,this._connection.invoke("controller.getAggregateValueRanges")]}})})};b.prototype.mapValidLocalIds=function(b){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.mapValidLocalIds",b)]}})})};b.prototype.onEdits=function(b){return a.__awaiter(this,void 0,void 0,function(){var c,g,h;return a.__generator(this,function(a){switch(a.label){case 0:return[4,
this._startupResolver.promise];case 1:return a.sent(),c=b.addedFeatures,g=b.deletedFeatures,h=b.updatedFeatures,[2,this._connection.invoke("controller.onEdits",{addedFeatures:c,deletedFeatures:g,updatedFeatures:h})]}})})};b.prototype.enableEvent=function(b,d){return a.__awaiter(this,void 0,void 0,function(){return a.__generator(this,function(a){switch(a.label){case 0:return[4,this._startupResolver.promise];case 1:return a.sent(),[2,this._connection.invoke("controller.enableEvent",{name:b,value:d})]}})})};
b.prototype._startWorker=function(b){return a.__awaiter(this,void 0,void 0,function(){var c,d;return a.__generator(this,function(a){switch(a.label){case 0:return a.trys.push([0,2,,3]),c=this,[4,n.open("Pipeline",{client:this.client,strategy:"dedicated",signal:b})];case 1:return c._connection=a.sent(),[3,3];case 2:return d=a.sent(),f.throwIfNotAbortError(d),[3,3];case 3:return[2]}})})};a.__decorate([e.property()],b.prototype,"isReady",void 0);a.__decorate([e.property()],b.prototype,"client",void 0);
a.__decorate([e.property()],b.prototype,"tileRenderer",null);return b=a.__decorate([e.subclass("esri.views.2d.layers.support.FeatureLayerProxy")],b)}(m.EsriPromise);l.default=d});