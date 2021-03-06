// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../../../../core/screenUtils ../../alignmentUtils ../../color ../../materialKey/MaterialKey ./util ./WGLBaseTextTemplate ./WGLDynamicMeshTemplate ../../../../layers/features/textUtils".split(" "),function(k,q,n,f,r,l,t,c,u,v,w){Object.defineProperty(q,"__esModule",{value:!0});k=function(k){function g(e,a){var b=k.call(this,a)||this;b._horizontalAlignment="center";b._verticalAlignment="middle";b._textToGlyphs=new Map;var p=a.scaleFactor||1;b._cimTextLayer=a;c.isFunction(a.color)?
b._dynamicPropertyMap.set("_color",function(b,c,d){return l.premultiplyAlphaRGBA(a.color(b,c,d))}):b._color=l.premultiplyAlphaRGBA(a.color);c.isFunction(a.color)?b._dynamicPropertyMap.set("_haloColor",function(b,c,d){return l.premultiplyAlphaRGBA(a.outlineColor(b,c,d))}):b._haloColor=l.premultiplyAlphaRGBA(a.outlineColor);var m;c.isFunction(a.size)||(m=Math.min(Math.round(f.pt2px(a.size*a.sizeRatio)),127));b._dynamicPropertyMap.set("_size",function(b,d,e){return c.isFunction(a.size)?Math.min(Math.round(f.pt2px(a.size(b,
d,e)*a.sizeRatio)),127):m});c.isFunction(a.outlineSize)?b._dynamicPropertyMap.set("_haloSize",function(b,d,c){return Math.min(Math.floor(5*f.pt2px(a.outlineSize(b,d,c)*a.sizeRatio)),127)}):b._haloSize=Math.min(Math.floor(5*f.pt2px(a.outlineSize*a.sizeRatio)),127);var h;c.isFunction(a.offsetX)||(h=Math.round(f.pt2px(a.offsetX*a.sizeRatio)));b._dynamicPropertyMap.set("_xOffset",function(b,d,e){return c.isFunction(a.offsetX)?Math.round(f.pt2px(a.offsetX(b,d,e)*a.sizeRatio)):h});var d;c.isFunction(a.offsetY)||
(d=Math.round(f.pt2px(a.offsetY*a.sizeRatio)));b._dynamicPropertyMap.set("_yOffset",function(b,e,m){return c.isFunction(a.offsetY)?Math.round(f.pt2px(a.offsetY(b,e,m)*a.sizeRatio)):d});c.isFunction(a.angle)?b._dynamicPropertyMap.set("_angle",a.angle):b._angle=a.angle;c.isFunction(a.horizontalAlignment)?b._dynamicPropertyMap.set("_horizontalAlignment",a.horizontalAlignment):b._horizontalAlignment=a.horizontalAlignment;c.isFunction(a.verticalAlignment)?b._dynamicPropertyMap.set("_verticalAlignment",
a.verticalAlignment):b._verticalAlignment=a.verticalAlignment;b._scaleFactor=p;c.isFunction(a.text)?b._dynamicPropertyMap.set("_text",a.text):b._text=a.text;p=Math.min(Math.round(f.pt2px(a.referenceSize*a.sizeRatio)),127);b._referenceSize=Math.round(Math.sqrt(256*p));b._materialKey=t.createMaterialKey(b.geometryType,e,!1);e=t.TextMaterialKey.load(b._materialKey);e.sdf=!0;b._bitset=(1===a.alignment?1:0)|(a.colorLocked?1:0)<<1;b._materialKey=e.data;b._decoration="none";b._lineHeight=1;b._lineWidth=
512;b._textPlacement=a.markerPlacement;b.effects=a.effects;b._isCIM=!0;return b}n.__extends(g,k);g.fromCIMText=function(c,a){return new g(c,a)};g.prototype.analyze=function(c,a,b,f){return n.__awaiter(this,void 0,void 0,function(){var e,h;return n.__generator(this,function(d){switch(d.label){case 0:return d=this._cimTextLayer,e="string"===typeof d.text?d.text:"function"===typeof d.text?d.text(a,b,f):"",[4,c.getMosaicItem(this._cimTextLayer.cim,!1,w.codepoints(e))];case 1:return h=d.sent(),this._textToGlyphs.set(e,
h.glyphMosaicItems),[2,h]}})})};g.prototype.bindFeature=function(c,a,b){var e=this;this._dynamicPropertyMap.forEach(function(f,d){e[d]=f(c,a,b)});if(this._text&&0!==this._text.length){this._size*=this._scaleFactor;this._scale=this._size/24;this._xOffset*=this._scaleFactor;this._yOffset*=this._scaleFactor;this._xAlignD=r.getXAnchorDirection(this._horizontalAlignment||"center");this._yAlignD=r.getYAnchorDirection(this._verticalAlignment||"baseline");var f=this._textToGlyphs.get(this._text);this.bindTextInfo(f,
!1)}else this._shapingInfo=null};return g}(u.default(v.default));q.default=k});