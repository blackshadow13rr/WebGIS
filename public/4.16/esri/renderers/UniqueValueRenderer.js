// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../symbols ../symbols ../core/arrayUtils ../core/Error ../core/lang ../core/Logger ../core/maybe ../core/promiseUtils ../core/accessorSupport/decorators ../core/accessorSupport/diffUtils ../core/accessorSupport/ensureType ../layers/support/fieldUtils ../portal/Portal ./Renderer ./mixins/VisualVariablesMixin ./support/LegendOptions ./support/UniqueValueInfo ../support/arcadeOnDemand ../support/persistableUrlUtils ../symbols/support/jsonUtils ../symbols/support/styleUtils".split(" "),
function(K,L,d,u,m,w,C,n,D,h,x,e,E,y,r,v,F,G,H,t,z,A,p,I){var l=D.getLogger("esri.renderers.UniqueValueRenderer"),J=y.ensureType(t);return function(B){function a(b){b=B.call(this,b)||this;b._valueInfoMap={};b._isDefaultSymbolDerived=!1;b.type="unique-value";b.backgroundFillSymbol=null;b.field=null;b.field2=null;b.field3=null;b.valueExpression=null;b.valueExpressionTitle=null;b.legendOptions=null;b.defaultLabel=null;b.fieldDelimiter=null;b.portal=null;b.styleOrigin=null;b.diff={uniqueValueInfos:function(b,
f){if(b||f){if(!b||!f)return{type:"complete",oldValue:b,newValue:f};for(var c=!1,a={type:"collection",added:[],removed:[],changed:[],unchanged:[]},d=function(g){var d=w.find(b,function(b){return b.value===f[g].value});d?E.diff(d,f[g])?(a.changed.push({type:"complete",oldValue:d,newValue:f[g]}),c=!0):a.unchanged.push({oldValue:d,newValue:f[g]}):(a.added.push(f[g]),c=!0)},e=0;e<f.length;e++)d(e);d=function(g){w.find(f,function(c){return c.value===b[g].value})||(a.removed.push(b[g]),c=!0)};for(e=0;e<
b.length;e++)d(e);return c?a:void 0}}};b._set("uniqueValueInfos",[]);return b}d.__extends(a,B);q=a;Object.defineProperty(a.prototype,"_cache",{get:function(){return{compiledFunc:null}},enumerable:!0,configurable:!0});a.prototype.writeBackgroundFillSymbolWebScene=function(b,c,f,a){p.writeTarget(b,c,f,a)};a.prototype.castField=function(b){return null==b||"function"===typeof b?b:y.ensureString(b)};a.prototype.writeField=function(b,c,f,a){"string"===typeof b?c[f]=b:a&&a.messages?a.messages.push(new C("property:unsupported",
"UniqueValueRenderer.field set to a function cannot be written to JSON")):l.error(".field: cannot write field to JSON since it's not a string value")};Object.defineProperty(a.prototype,"defaultSymbol",{set:function(b){this._isDefaultSymbolDerived=!1;this._set("defaultSymbol",b)},enumerable:!0,configurable:!0});a.prototype.readDefaultSymbol=function(b,c,f){return p.read(b,c,f)};a.prototype.writeDefaultSymbolWebScene=function(b,c,f,a){this._isDefaultSymbolDerived||p.writeTarget(b,c,f,a)};a.prototype.writeDefaultSymbol=
function(b,c,a,d){this._isDefaultSymbolDerived||p.writeTarget(b,c,a,d)};a.prototype.readPortal=function(b,c,a){return a.portal||v.getDefault()};a.prototype.readStyleOrigin=function(b,c,a){if(c.styleName)return Object.freeze({styleName:c.styleName});if(c.styleUrl)return b=A.fromJSON(c.styleUrl,a),Object.freeze({styleUrl:b})};a.prototype.writeStyleOrigin=function(b,c,a,d){b.styleName?c.styleName=b.styleName:b.styleUrl&&(c.styleUrl=A.toJSON(b.styleUrl,d))};Object.defineProperty(a.prototype,"uniqueValueInfos",
{set:function(b){this.styleOrigin?l.error("#uniqueValueInfos\x3d","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(this._set("uniqueValueInfos",b),this._updateValueInfoMap())},enumerable:!0,configurable:!0});a.prototype.addUniqueValueInfo=function(b,c){this.styleOrigin?l.error("#addUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style"):(b="object"===typeof b?J(b):new t({value:b,symbol:m.ensureType(c)}),this.uniqueValueInfos.push(b),
this._valueInfoMap[b.value]=b)};a.prototype.removeUniqueValueInfo=function(b){if(this.styleOrigin)l.error("#removeUniqueValueInfo()","Cannot modify unique value infos of a UniqueValueRenderer created from a web style");else for(var c=0;c<this.uniqueValueInfos.length;c++)if(this.uniqueValueInfos[c].value===b+""){delete this._valueInfoMap[b];this.uniqueValueInfos.splice(c,1);break}};a.prototype.getUniqueValueInfo=function(b,c){return d.__awaiter(this,void 0,void 0,function(){var a,g,e;return d.__generator(this,
function(f){switch(f.label){case 0:a=c;if(!this.valueExpression||!h.isNone(c)&&!h.isNone(c.arcade))return[3,2];g=[d.__assign({},a)];e={};return[4,z.loadArcade()];case 1:a=d.__assign.apply(void 0,g.concat([(e.arcade=f.sent(),e)])),f.label=2;case 2:return[2,this._getUniqueValueInfo(b,a)]}})})};a.prototype.getSymbol=function(b,c){if(this.valueExpression&&(h.isNone(c)||h.isNone(c.arcade)))l.error("#getSymbol()","Please use getSymbolAsync if valueExpression is used");else return(b=this._getUniqueValueInfo(b,
c))&&b.symbol||this.defaultSymbol};a.prototype.getSymbolAsync=function(b,c){return d.__awaiter(this,void 0,void 0,function(){var a,g,e,k;return d.__generator(this,function(f){switch(f.label){case 0:a=c;if(!this.valueExpression||!h.isNone(a)&&!h.isNone(a.arcade))return[3,2];g=[d.__assign({},a)];e={};return[4,z.loadArcade()];case 1:a=d.__assign.apply(void 0,g.concat([(e.arcade=f.sent(),e)])),f.label=2;case 2:return k=this._getUniqueValueInfo(b,a),[2,k&&k.symbol||this.defaultSymbol]}})})};a.prototype.getSymbols=
function(){for(var b=[],c=0,a=this.uniqueValueInfos;c<a.length;c++){var d=a[c];d.symbol&&b.push(d.symbol)}this.defaultSymbol&&b.push(this.defaultSymbol);return b};a.prototype.getAttributeHash=function(){return this.visualVariables&&this.visualVariables.reduce(function(b,c){return b+c.getAttributeHash()},"")};a.prototype.getMeshHash=function(){var b=JSON.stringify(this.backgroundFillSymbol),c=JSON.stringify(this.defaultSymbol),a=this.uniqueValueInfos.reduce(function(b,c){return b+c.getMeshHash()},
"");return b+"."+c+"."+a+"."+(this.field+"."+this.field2+"."+this.field3+"."+this.fieldDelimiter)+"."+this.valueExpression};a.prototype.clone=function(){var b=new q({field:this.field,field2:this.field2,field3:this.field3,defaultLabel:this.defaultLabel,defaultSymbol:n.clone(this.defaultSymbol),valueExpression:this.valueExpression,valueExpressionTitle:this.valueExpressionTitle,fieldDelimiter:this.fieldDelimiter,visualVariables:n.clone(this.visualVariables),legendOptions:n.clone(this.legendOptions),
authoringInfo:this.authoringInfo&&this.authoringInfo.clone(),backgroundFillSymbol:n.clone(this.backgroundFillSymbol)});this._isDefaultSymbolDerived&&(b._isDefaultSymbolDerived=!0);b._set("portal",this.portal);var c=n.clone(this.uniqueValueInfos);this.styleOrigin&&(b._set("styleOrigin",Object.freeze(n.clone(this.styleOrigin))),Object.freeze(c));b._set("uniqueValueInfos",c);b._updateValueInfoMap();return b};Object.defineProperty(a.prototype,"arcadeRequired",{get:function(){return this.arcadeRequiredForVisualVariables||
!!this.valueExpression},enumerable:!0,configurable:!0});a.prototype.collectRequiredFields=function(b,c){return d.__awaiter(this,void 0,void 0,function(){var a;return d.__generator(this,function(d){switch(d.label){case 0:return a=[this.collectVVRequiredFields(b,c),this.collectSymbolFields(b,c)],[4,x.all(a)];case 1:return d.sent(),[2]}})})};a.prototype.collectSymbolFields=function(b,c){return d.__awaiter(this,void 0,void 0,function(){var a;return d.__generator(this,function(f){switch(f.label){case 0:return a=
d.__spreadArrays(this.getSymbols().map(function(a){return a.collectRequiredFields(b,c)}),[r.collectArcadeFieldNames(b,c,this.valueExpression)]),r.collectField(b,c,this.field),r.collectField(b,c,this.field2),r.collectField(b,c,this.field3),[4,x.all(a)];case 1:return f.sent(),[2]}})})};a.prototype.populateFromStyle=function(){var b=this;return I.fetchStyle(this.styleOrigin,{portal:this.portal}).then(function(c){var a=[];b._valueInfoMap={};c&&c.data&&Array.isArray(c.data.items)&&c.data.items.forEach(function(d){var f=
new u.WebStyleSymbol({styleUrl:c.styleUrl,styleName:c.styleName,portal:b.portal,name:d.name});b.defaultSymbol||d.name!==c.data.defaultItem||(b.defaultSymbol=f,b._isDefaultSymbolDerived=!0);f=new t({value:d.name,symbol:f});a.push(f);b._valueInfoMap[d.name]=f});b._set("uniqueValueInfos",Object.freeze(a));!b.defaultSymbol&&b.uniqueValueInfos.length&&(b.defaultSymbol=b.uniqueValueInfos[0].symbol,b._isDefaultSymbolDerived=!0);return b})};a.prototype._updateValueInfoMap=function(){var b=this;this._valueInfoMap=
{};this.uniqueValueInfos.forEach(function(a){return b._valueInfoMap[a.value+""]=a})};a.prototype._getUniqueValueInfo=function(b,a){return this.valueExpression?this._getUnqiueValueInfoForExpression(b,a):this._getUnqiueValueInfoForFields(b)};a.prototype._getUnqiueValueInfoForExpression=function(b,a){var c=h.unwrapOr(a,{});a=c.viewingMode;var d=c.scale,e=c.spatialReference,k=this._cache.compiledFunc,c=h.unwrap(c.arcade).arcadeUtils;k||(k=c.createSyntaxTree(this.valueExpression),k=c.createFunction(k),
this._cache.compiledFunc=k);b=c.executeFunction(k,c.createExecContext(b,c.getViewInfo({viewingMode:a,scale:d,spatialReference:e})));return this._valueInfoMap[b+""]};a.prototype._getUnqiueValueInfoForFields=function(b){var a=this.field,d=b.attributes,e;if("function"!==typeof a&&this.field2){b=this.field2;e=this.field3;var h=[];a&&h.push(d[a]);b&&h.push(d[b]);e&&h.push(d[e]);e=h.join(this.fieldDelimiter||"")}else"function"===typeof a?e=a(b):a&&(e=d[a]);return this._valueInfoMap[e+""]};a.fromPortalStyle=
function(b,a){var c=new q(a&&a.properties);c._set("styleOrigin",Object.freeze({styleName:b}));c._set("portal",a&&a.portal||v.getDefault());a=c.populateFromStyle();a.catch(function(a){l.error("#fromPortalStyle('"+b+"'[, ...])","Failed to create unique value renderer from style name",a)});return a};a.fromStyleUrl=function(b,a){a=new q(a&&a.properties);a._set("styleOrigin",Object.freeze({styleUrl:b}));a=a.populateFromStyle();a.catch(function(a){l.error("#fromStyleUrl('"+b+"'[, ...])","Failed to create unique value renderer from style URL",
a)});return a};var q;d.__decorate([e.property({readOnly:!0,dependsOn:["valueExpression"]})],a.prototype,"_cache",null);d.__decorate([e.enumeration({uniqueValue:"unique-value"})],a.prototype,"type",void 0);d.__decorate([e.property({types:{base:u.BaseSymbol,key:"type",typeMap:{"simple-fill":m.symbolTypesRenderer.typeMap["simple-fill"],"picture-fill":m.symbolTypesRenderer.typeMap["picture-fill"],"polygon-3d":m.symbolTypesRenderer.typeMap["polygon-3d"]}},json:{read:p.read,write:p.writeTarget}})],a.prototype,
"backgroundFillSymbol",void 0);d.__decorate([e.writer("web-scene","backgroundFillSymbol",{backgroundFillSymbol:{type:u.PolygonSymbol3D}})],a.prototype,"writeBackgroundFillSymbolWebScene",null);d.__decorate([e.property({json:{type:String,read:{source:"field1"},write:{target:"field1"}}})],a.prototype,"field",void 0);d.__decorate([e.cast("field")],a.prototype,"castField",null);d.__decorate([e.writer("field")],a.prototype,"writeField",null);d.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,
"field2",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"field3",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"valueExpression",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"valueExpressionTitle",void 0);d.__decorate([e.property({type:H.default,json:{write:!0}})],a.prototype,"legendOptions",void 0);d.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"defaultLabel",void 0);d.__decorate([e.property({types:m.symbolTypesRenderer})],
a.prototype,"defaultSymbol",null);d.__decorate([e.reader("defaultSymbol")],a.prototype,"readDefaultSymbol",null);d.__decorate([e.writer("web-scene","defaultSymbol",{defaultSymbol:{types:m.symbolTypesRenderer3D}})],a.prototype,"writeDefaultSymbolWebScene",null);d.__decorate([e.writer("defaultSymbol")],a.prototype,"writeDefaultSymbol",null);d.__decorate([e.property({type:String,json:{write:!0}})],a.prototype,"fieldDelimiter",void 0);d.__decorate([e.property({type:v,readOnly:!0})],a.prototype,"portal",
void 0);d.__decorate([e.reader("portal",["styleName"])],a.prototype,"readPortal",null);d.__decorate([e.property({readOnly:!0,json:{write:{enabled:!1,overridePolicy:function(){return{enabled:!0}}}}})],a.prototype,"styleOrigin",void 0);d.__decorate([e.reader("styleOrigin",["styleName","styleUrl"])],a.prototype,"readStyleOrigin",null);d.__decorate([e.writer("styleOrigin",{styleName:{type:String},styleUrl:{type:String}})],a.prototype,"writeStyleOrigin",null);d.__decorate([e.property({type:[t],json:{write:{overridePolicy:function(){return this.styleOrigin?
{enabled:!1}:{enabled:!0}}}}})],a.prototype,"uniqueValueInfos",null);return a=q=d.__decorate([e.subclass("esri.renderers.UniqueValueRenderer")],a)}(G.VisualVariablesMixin(F))});