// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/accessorSupport/decorators ./mixins/ChartMediaInfo ./support/chartMediaInfoUtils".split(" "),function(h,k,b,d,f,g){return function(e){function a(a){a=e.call(this,a)||this;a.type="bar-chart";return a}b.__extends(a,e);c=a;a.prototype.clone=function(){return new c({title:this.title,caption:this.caption,value:this.value?this.value.clone():null})};var c;b.__decorate([d.property({type:["bar-chart"],readOnly:!0,json:{type:["barchart"],read:!1,write:g.chartTypeKebabDict.write}})],
a.prototype,"type",void 0);return a=c=b.__decorate([d.subclass("esri.popup.content.BarChartMediaInfo")],a)}(f)});