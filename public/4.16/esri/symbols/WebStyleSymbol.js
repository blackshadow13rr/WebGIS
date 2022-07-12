// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../core/jsonMap ../core/Logger ../core/promiseUtils ../core/accessorSupport/decorators ../portal/Portal ../support/persistableUrlUtils ./Symbol ./support/Thumbnail @dojo/framework/shim/Promise".split(" "),function(h,u,b,k,l,m,c,n,g,p,q){function r(){return new Promise(function(b,a){h(["./support/styleUtils"],b,a)})}var t=l.getLogger("esri.symbols.WebStyleSymbol"),d=k.strict()({styleSymbolReference:"web-style"});return function(e){function a(a){a=e.call(this,a)||this;
a.styleName=null;a.portal=null;a.styleUrl=null;a.thumbnail=null;a.name=null;a.type="web-style";return a}b.__extends(a,e);f=a;a.prototype.read=function(a,b){this.portal=b?b.portal:void 0;e.prototype.read.call(this,a,b)};a.prototype.clone=function(){return new f({name:this.name,styleUrl:this.styleUrl,styleName:this.styleName,portal:this.portal})};a.prototype.fetchSymbol=function(a){return this._fetchSymbol("webRef",a)};a.prototype.fetchCIMSymbol=function(a){return this._fetchSymbol("cimRef",a)};a.prototype._fetchSymbol=
function(a,c){return b.__awaiter(this,void 0,void 0,function(){var e,d;return b.__generator(this,function(b){switch(b.label){case 0:return[4,r()];case 1:return e=b.sent(),m.throwIfAborted(c),d=e.resolveWebStyleSymbol(this,{portal:this.portal},a,c),d.catch(function(a){t.error("#fetchSymbol()","Failed to create symbol from style",a)}),[2,d]}})})};var f;b.__decorate([c.property({json:{write:!1}})],a.prototype,"color",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"styleName",
void 0);b.__decorate([c.property({type:n,json:{write:!1}})],a.prototype,"portal",void 0);b.__decorate([c.property({type:String,json:{read:g.read,write:g.write}})],a.prototype,"styleUrl",void 0);b.__decorate([c.property({type:q.default,json:{read:!1}})],a.prototype,"thumbnail",void 0);b.__decorate([c.property({type:String,json:{write:!0}})],a.prototype,"name",void 0);b.__decorate([c.property({type:d.apiValues,readOnly:!0,json:{type:d.jsonValues,read:!1,write:d.write}})],a.prototype,"type",void 0);
return a=f=b.__decorate([c.subclass("esri.symbols.WebStyleSymbol")],a)}(p)});