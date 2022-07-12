// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/MapUtils ../../../core/maybe ../../../core/promiseUtils ../../../core/SetUtils ../../../geometry/support/quantizationUtils ../../../geometry/support/spatialReferenceUtils ../featureConversionUtils ./AttributesBuilder ./attributeSupport ./projectionSupport ./timeSupport ./utils".split(" "),function(z,E,r,J,M,p,N,A,v,O,K,P,B,Q,q){function C(d){return d.substr(24,12)+d.substr(19,4)+d.substr(16,2)+d.substr(14,2)+d.substr(11,2)+d.substr(9,2)+d.substr(6,2)+d.substr(4,
2)+d.substr(2,2)+d.substr(0,2)}function L(d,a,b,c){if(b&&"esriFieldTypeDate"===b.type){var k=(new Date(d)).getTime(),e=(new Date(a)).getTime();if(!isNaN(k)&&!isNaN(e))return c?e-k:k-e}return"number"===typeof d&&"number"===typeof a?c?a-d:d-a:"string"===typeof d&&"string"===typeof a?(k=d.toUpperCase(),e=a.toUpperCase(),!b||"esriFieldTypeGUID"!==b.type&&"esriFieldTypeGlobalID"!==b.type?c=(c?k>e:k<e)?-1:(c?k<e:k>e)?1:0:(d=C(k),e=C(e),c=(c?d>e:d<e)?-1:(c?d<e:d>e)?1:0),c):c?1:-1}Object.defineProperty(E,
"__esModule",{value:!0});z=function(){function d(a,b,c){this.items=a;this.queryGeometry=b;this.definitionExpression=c.definitionExpression;this.geometryType=c.geometryType;this.hasM=c.hasM;this.hasZ=c.hasZ;this.objectIdField=c.objectIdField;this.spatialReference=c.spatialReference;this.fieldsIndex=c.fieldsIndex;this.timeInfo=c.timeInfo;this.featureAdapter=c.featureAdapter}Object.defineProperty(d.prototype,"size",{get:function(){return this.items.length},enumerable:!0,configurable:!0});d.prototype.createQueryResponse=
function(a){var b;b=a.outStatistics?a.outStatistics.some(function(a){return"exceedslimit"===a.statisticType})?this._createExceedsLimitQueryResponse(a):this._createStatisticsQueryResponse(a):this._createFeatureQueryResponse(a);a.returnQueryGeometry&&(v.isValid(a.outSR)&&!v.equals(this.queryGeometry.spatialReference,a.outSR)?b.queryGeometry=q.cleanFromGeometryEngine(r.__assign({spatialReference:a.outSR},B.project(this.queryGeometry,this.queryGeometry.spatialReference,a.outSR))):b.queryGeometry=q.cleanFromGeometryEngine(r.__assign({spatialReference:a.outSR},
this.queryGeometry)));return b};d.prototype.executeAttributesQuery=function(a){var b=P.getWhereClause(a.where,this.fieldsIndex);if(!b)return p.resolve(this);if(b.isStandardized){for(var c=0,k=[],e=0,f=this.items;e<f.length;e++){var l=f[e];b.testFeature(l,this.featureAdapter)&&(k[c++]=l)}b=new d(k,this.queryGeometry,this);b.definitionExpression=a.where;return p.resolve(b)}return p.reject(new TypeError("Where clause is not standardized"))};d.prototype.executeObjectIdsQuery=function(a){if(!a.objectIds||
!a.objectIds.length)return p.resolve(this);var b=N.SetFromValues(a.objectIds),c=this.featureAdapter.getObjectId;return p.resolve(new d(this.items.filter(function(a){return b.has(c(a))}),this.queryGeometry,this))};d.prototype.executeTimeQuery=function(a){a=Q.getTimeOperator(this.timeInfo,a.timeExtent,this.featureAdapter);if(!M.isSome(a))return p.resolve(this);a=this.items.filter(a);return p.resolve(new d(a,this.queryGeometry,this))};d.prototype.filterLatest=function(){for(var a=this.timeInfo,b=a.trackIdField,
c=a.startTimeField,a=a.endTimeField||c,c=new Map,k=this.featureAdapter.getAttribute,e=0,f=this.items;e<f.length;e++){var l=f[e],g=k(l,b),h=k(l,a),n=c.get(g);(!n||h>k(n,a))&&c.set(g,l)}b=J.valuesOfMap(c);return p.resolve(new d(b,this.queryGeometry,this))};d.prototype.project=function(a){return r.__awaiter(this,void 0,void 0,function(){var b,c,k,e=this;return r.__generator(this,function(f){switch(f.label){case 0:if(!a||v.equals(this.spatialReference,a))return[2,this];b=this.featureAdapter;return[4,
B.projectMany(this.items.map(function(a){return q.getGeometry(e.geometryType,e.hasZ,e.hasM,b.getGeometry(a))}),this.spatialReference,a)];case 1:return c=f.sent(),k=c.map(function(a,c){return b.cloneWithGeometry(e.items[c],O.convertFromGeometry(a,e.hasZ,e.hasM))}),[2,new d(k,this.queryGeometry,{definitionExpression:this.definitionExpression,geometryType:this.geometryType,hasM:this.hasM,hasZ:this.hasZ,objectIdField:this.objectIdField,spatialReference:a,fieldsIndex:this.fieldsIndex,timeInfo:this.timeInfo,
featureAdapter:this.featureAdapter})]}})})};d.prototype._sortFeatures=function(a,b,c){if(1<a.length&&b&&b.length){var k=function(b){b=b.split(" ");var f=b[0],k=e.fieldsIndex.get(f),d=b[1]&&"desc"===b[1].toLowerCase();a.sort(function(a,b){a=c(a,f,k);b=c(b,f,k);return L(a,b,k,d)})},e=this,f=0;for(b=b.reverse();f<b.length;f++)k(b[f])}};d.prototype._createFeatureQueryResponse=function(a){var b=this,c=this.items,k=this.geometryType,e=this.hasM,f=this.hasZ,d=this.objectIdField,g=this.spatialReference,h=
a.outFields,n=a.outSR,m=a.quantizationParameters,D=a.resultRecordCount,p=a.resultOffset,w=a.returnZ,R=a.returnM,F=!1;null!=D&&null!=p&&(D=p+D,F=c.length>D,c=c.slice(p,Math.min(c.length,D)));h=h&&(-1<h.indexOf("*")?r.__spreadArrays(this.fieldsIndex.fields):h.map(function(a){return b.fieldsIndex.get(a)}));return{exceededTransferLimit:F,features:this._createFeatures(a,c),fields:h,geometryType:k,hasM:e&&R,hasZ:f&&w,objectIdFieldName:d,spatialReference:q.cleanFromGeometryEngine(n?n:g),transform:m&&A.toQuantizationTransform(m)||
null}};d.prototype._createFeatures=function(a,b){var c=new K.default(a,this.featureAdapter,this.fieldsIndex),k=a.orderByFields,e=a.quantizationParameters,f=a.returnGeometry,d=a.returnCentroid,g=a.maxAllowableOffset,h=a.returnZ;a=a.returnM;var n=this.hasZ&&(void 0===h?!1:h),m=this.hasM&&(void 0===a?!1:a),h=[];a=0;if(f||d)if(e=A.toQuantizationTransform(e),f&&!d)for(d=0;d<b.length;d++)f=b[d],h[a++]={attributes:c.getAttributes(f),geometry:q.getGeometry(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(f),
g,e,n,m)};else if(!f&&d)for(g=0;g<b.length;g++)f=b[g],h[a++]={attributes:c.getAttributes(f),centroid:q.transformCentroid(this,this.featureAdapter.getCentroid(f,this),e)};else for(d=0;d<b.length;d++)f=b[d],h[a++]={attributes:c.getAttributes(f),centroid:q.transformCentroid(this,this.featureAdapter.getCentroid(f,this),e),geometry:q.getGeometry(this.geometryType,this.hasZ,this.hasM,this.featureAdapter.getGeometry(f),g,e,n,m)};else for(g=0;g<b.length;g++)f=b[g],(n=c.getAttributes(f))&&(h[a++]={attributes:n});
this._sortFeatures(h,k,function(a,b,e){return c.getFieldValue(a,b,e)});return h};d.prototype._createExceedsLimitQueryResponse=function(a){var b=!1,c=Number.POSITIVE_INFINITY,d=Number.POSITIVE_INFINITY,b=Number.POSITIVE_INFINITY,e=0;for(a=a.outStatistics;e<a.length;e++){var f=a[e];if("exceedslimit"===f.statisticType){c=null!=f.maxPointCount?f.maxPointCount:Number.POSITIVE_INFINITY;d=null!=f.maxRecordCount?f.maxRecordCount:Number.POSITIVE_INFINITY;b=null!=f.maxVertexCount?f.maxVertexCount:Number.POSITIVE_INFINITY;
break}}if("esriGeometryPoint"===this.geometryType)b=this.items.length>c;else if(this.items.length>d)b=!0;else var c=this.hasZ?this.hasM?4:3:this.hasM?3:2,l=this.featureAdapter,b=this.items.reduce(function(a,b){b=l.getGeometry(b);return a+(b&&b.coords.length||0)},0)/c>b;return{fields:[{name:"exceedslimit",type:"esriFieldTypeInteger",alias:"exceedslimit",sqlType:"sqlTypeInteger",domain:null,defaultValue:null}],features:[{attributes:{exceedslimit:Number(b)}}]}};d.prototype._createStatisticsQueryResponse=
function(a){var b=this,c={attributes:{}},d=[],e=new Map,f=new Map,l=new Map,g=new Map,h=new K.default(a,this.featureAdapter,this.fieldsIndex),n=a.outStatistics,m=a.groupByFieldsForStatistics,p=a.having;a=a.orderByFields;for(var q=m&&m.length,w=!!q,r=w&&m[0],F=w&&!this.fieldsIndex.get(r),v=0;v<n.length;v++){var t=n[v],G=t.outStatisticFieldName,u=t.statisticType,x=t,y="exceedslimit"!==u?t.onStatisticField:void 0,z="percentile_disc"===u||"percentile_cont"===u,E=w&&1===q&&(y===r||F)&&"count"===u;if(w){if(!l.has(y)){for(var t=
[],u=0,A=m;u<A.length;u++){var H=this._getAttributeValues(h,A[u],e);t.push(H)}l.set(y,this._calculateUniqueValues(t))}var B=l.get(y),t=function(a){var c=B[a];a=c.count;var d=c.data,f=c.items,k=c.itemPositions,c=d.join(",");if(!p||h.validateItems(f,p)){var l=g.get(c)||{attributes:{}},f=null;if(E)f=a;else{var n=I._getAttributeValues(h,y,e);a=k.map(function(a){return n[a]});f=z&&"statisticParameters"in x?I._getPercentileValue(x,a):I._getStatisticValue(x,a)}l.attributes[G]=f;m.forEach(function(a,c){return l.attributes[b.fieldsIndex.get(a)?
a:"EXPR_"+(c+1)]=d[c]});g.set(c,l)}},I=this,C;for(C in B)t(C)}else H=this._getAttributeValues(h,y,e),c.attributes[G]=z&&"statisticParameters"in x?this._getPercentileValue(x,H):this._getStatisticValue(x,H,f);d.push({name:G,alias:G,type:"esriFieldTypeDouble"})}c=w?J.valuesOfMap(g):[c];this._sortFeatures(c,a,function(a,b){return a.attributes[b]});return{fields:d,features:c}};d.prototype._getStatisticValue=function(a,b,c){var d=a.onStatisticField;a=a.statisticType;b=c&&c.has(d)?c.get(d):this._calculateStatistics(b);
c&&c.set(d,b);return b["var"===a?"variance":a]};d.prototype._getPercentileValue=function(a,b){var c=a.statisticParameters,d=a.statisticType,e=c.value,f="desc"===c.orderBy,l=this.fieldsIndex.get(a.onStatisticField);a=r.__spreadArrays(b).sort(function(a,b){return L(a,b,l,f)});return this._calculatePercentile(a,e,"percentile_disc"===d)};d.prototype._getAttributeValues=function(a,b,c){if(c.has(b))return c.get(b);var d=this.fieldsIndex.get(b),e=this.items.map(function(c){return a.getFieldValue(c,b,d)});
c.set(b,e);return e};d.prototype._calculateStatistics=function(a){for(var b=Number.POSITIVE_INFINITY,c=Number.NEGATIVE_INFINITY,d=null,e=null,f=null,l=null,g=[],h=0,n=0;n<a.length;n++){var m=a[n];"string"===typeof m?h++:null==m||isNaN(m)||(d+=m,b=Math.min(b,m),c=Math.max(c,m),g.push(m),h++)}if(h){e=d/h;for(f=a=0;f<g.length;f++)m=g[f],a+=Math.pow(m-e,2);l=1<h?a/(h-1):0;f=Math.sqrt(l)}else c=b=null;return{avg:e,count:h,max:c,min:b,stddev:f,sum:d,variance:l}};d.prototype._calculateUniqueValues=function(a){for(var b=
{},c=this.items,d=c.length,e=0;e<d;e++){for(var f=c[e],l=[],g=0,h=a;g<h.length;g++)l.push(h[g][e]);g=l.join(",");null==b[g]?b[g]={count:1,data:l,items:[f],itemPositions:[e]}:(b[g].count++,b[g].items.push(f),b[g].itemPositions.push(e))}return b};d.prototype._calculatePercentile=function(a,b,c){if(0===a.length)return null;if(0>=b)return a[0];if(1<=b)return a[a.length-1];var d=(a.length-1)*b,e=Math.floor(d);b=e+1;var d=d%1,e=a[e],f=a[b];return b>=a.length||c||"string"===typeof e||"string"===typeof f?
e:e*(1-d)+f*d};return d}();E.default=z});