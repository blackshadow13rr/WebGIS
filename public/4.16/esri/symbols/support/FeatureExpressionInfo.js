// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/JSONSupport ../../core/accessorSupport/decorators ../../layers/support/fieldUtils".split(" "),function(h,k,b,f,c,g){return function(d){function a(){return null!==d&&d.apply(this,arguments)||this}b.__extends(a,d);e=a;a.prototype.collectRequiredFields=function(a,c){return b.__awaiter(this,void 0,void 0,function(){return b.__generator(this,function(b){return[2,g.collectArcadeFieldNames(a,c,this.expression)]})})};a.prototype.clone=function(){return new e({expression:this.expression,
title:this.title})};var e;b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"expression",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"title",void 0);return a=e=b.__decorate([c.subclass("esri.layers.support.FeatureExpressionInfo")],a)}(f.JSONSupport)});