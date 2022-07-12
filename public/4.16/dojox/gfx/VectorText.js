//>>built
define("dojo/_base/lang dojo/_base/declare dojo/_base/array dojo/_base/loader dojo/_base/xhr ./_base dojox/xml/DomParser dojox/html/metrics ./matrix".split(" "),function(u,B,n,G,C,k,D,E,w){var F=function(a){var b;C.get({url:a,sync:!0,load:function(a){b=a}});return b};u.getObject("dojox.gfx.VectorText",!0);u.mixin(k,{vectorFontFitting:{NONE:0,FLOW:1,FIT:2},defaultVectorText:{type:"vectortext",x:0,y:0,width:null,height:null,text:"",align:"start",decoration:"none",fitting:0,leading:1.5},defaultVectorFont:{type:"vectorfont",
size:"10pt",family:null},_vectorFontCache:{},_svgFontCache:{},getVectorFont:function(a){return k._vectorFontCache[a]?k._vectorFontCache[a]:new k.VectorFont(a)}});return B("dojox.gfx.VectorFont",null,{_entityRe:/&(quot|apos|lt|gt|amp|#x[^;]+|#\d+);/g,_decodeEntitySequence:function(a){if(a.match(this._entityRe)){for(var b={amp:"\x26",apos:"'",quot:'"',lt:"\x3c",gt:"\x3e"},d,c="";null!==(d=this._entityRe.exec(a));)c="x"==d[1].charAt(1)?c+String.fromCharCode(parseInt(d[1].slice(2),16)):isNaN(parseInt(d[1].slice(1),
10))?c+(b[d[1]]||""):c+String.fromCharCode(parseInt(d[1].slice(1),10));return c}},_parse:function(a,b){a=k._svgFontCache[b]||D.parse(a);var d=a.documentElement.byName("font")[0],c=a.documentElement.byName("font-face")[0],f=parseFloat(c.getAttribute("units-per-em")||1E3,10),h={x:parseFloat(d.getAttribute("horiz-adv-x"),10),y:parseFloat(d.getAttribute("vert-adv-y")||0,10)};h.y||(h.y=f);var d={horiz:{x:parseFloat(d.getAttribute("horiz-origin-x")||0,10),y:parseFloat(d.getAttribute("horiz-origin-y")||
0,10)},vert:{x:parseFloat(d.getAttribute("vert-origin-x")||0,10),y:parseFloat(d.getAttribute("vert-origin-y")||0,10)}},e=c.getAttribute("font-family"),g=c.getAttribute("font-style")||"all",p=c.getAttribute("font-variant")||"normal",m=c.getAttribute("font-weight")||"all",w=c.getAttribute("font-stretch")||"normal",q=c.getAttribute("unicode-range")||"U+0-10FFFF";c.getAttribute("panose-1");c.getAttribute("cap-height");var t=parseFloat(c.getAttribute("ascent")||f-d.vert.y,10),z=parseFloat(c.getAttribute("descent")||
d.vert.y,10),x={},l=e;c.byName("font-face-name")[0]&&(l=c.byName("font-face-name")[0].getAttribute("name"));if(!k._vectorFontCache[l]){n.forEach(["alphabetic","ideographic","mathematical","hanging"],function(a){var d=c.getAttribute(a);null!==d&&(x[a]=parseFloat(d,10))});var r=parseFloat(a.documentElement.byName("missing-glyph")[0].getAttribute("horiz-adv-x")||h.x,10),v={},y={},A=a.documentElement.byName("glyph");n.forEach(A,function(a){var d=a.getAttribute("unicode"),b=a.getAttribute("glyph-name"),
c=parseFloat(a.getAttribute("horiz-adv-x")||h.x,10);a=a.getAttribute("d");d.match(this._entityRe)&&(d=this._decodeEntitySequence(d));c={code:d,name:b,xAdvance:c,path:a};v[d]=c;y[b]=c},this);A=a.documentElement.byName("hkern");n.forEach(A,function(a,d){d=-parseInt(a.getAttribute("k"),10);var c=a.getAttribute("u1"),b=a.getAttribute("g1"),e=a.getAttribute("u2");a=a.getAttribute("g2");var f;c?(c=this._decodeEntitySequence(c),v[c]&&(f=v[c])):y[b]&&(f=y[b]);f&&(f.kern||(f.kern={}),e?(e=this._decodeEntitySequence(e),
f.kern[e]={x:d}):y[a]&&(f.kern[y[a].code]={x:d}))},this);u.mixin(this,{family:e,name:l,style:g,variant:p,weight:m,stretch:w,range:q,viewbox:{width:f,height:f},origin:d,advance:u.mixin(h,{missing:{x:r,y:r}}),ascent:t,descent:z,baseline:x,glyphs:v});k._vectorFontCache[l]=this;k._vectorFontCache[b]=this;l==e||k._vectorFontCache[e]||(k._vectorFontCache[e]=this);k._svgFontCache[b]||(k._svgFontCache[b]=a)}},_clean:function(){var a=this.name,b=this.family;n.forEach("family name style variant weight stretch range viewbox origin advance ascent descent baseline glyphs".split(" "),
function(a){try{delete this[a]}catch(c){}},this);k._vectorFontCache[a]&&delete k._vectorFontCache[a];k._vectorFontCache[b]&&delete k._vectorFontCache[b];return this},constructor:function(a){this._defaultLeading=1.5;void 0!==a&&this.load(a)},load:function(a){this.onLoadBegin(a.toString());this._parse(k._svgFontCache[a.toString()]||F(a.toString()),a.toString());this.onLoad(this);return this},initialized:function(){return null!==this.glyphs},_round:function(a){return Math.round(1E3*a)/1E3},_leading:function(a){return this.viewbox.height*
(a||this._defaultLeading)},_normalize:function(a){return a.replace(/\s+/g,String.fromCharCode(32))},_getWidth:function(a){var b=0,d=0,c=null;n.forEach(a,function(f,h){d=f.xAdvance;a[h]&&f.kern&&f.kern[a[h].code]&&(d+=f.kern[a[h].code].x);b+=d;c=f});c&&" "==c.code&&(b-=c.xAdvance);return this._round(b)},_getLongestLine:function(a){var b=0,d=0;n.forEach(a,function(a,f){a=Math.max(b,this._getWidth(a));a>b&&(b=a,d=f)},this);return{width:b,index:d,line:a[d]}},_trim:function(a){var b=function(a){a.length&&
(" "==a[a.length-1].code&&a.splice(a.length-1,1),a.length&&" "==a[0].code&&a.splice(0,1))};u.isArray(a[0])?n.forEach(a,b):b(a);return a},_split:function(a,b){var d=this._getWidth(a);b=Math.floor(d/b);for(var d=[],c=0,f=[],h=!1,e=0,g=a.length;e<g;e++){" "==a[e].code&&(h=!0);c+=a[e].xAdvance;e+1<g&&a[e].kern&&a[e].kern[a[e+1].code]&&(c+=a[e].kern[a[e+1].code].x);if(c>=b){for(c=a[e];h&&" "!=c.code&&0<=e;)c=f.pop(),e--;d.push(f);f=[];c=0;h=!1}f.push(a[e])}f.length&&d.push(f);return this._trim(d)},_getSizeFactor:function(a){a+=
"";var b=E.getCachedFontMeasurements(),d=this.viewbox.height,c=b["1em"],c=parseFloat(a,10);if(-1<a.indexOf("em"))return this._round(b["1em"]*c/d);if(-1<a.indexOf("ex"))return this._round(b["1ex"]*c/d);if(-1<a.indexOf("pt"))return this._round(b["12pt"]/12*c/d);if(-1<a.indexOf("px"))return this._round(b["16px"]/16*c/d);if(-1<a.indexOf("%"))return this._round(c/100*b["1em"]/d);c=b[a]||b.medium;return this._round(c/d)},_getFitFactor:function(a,b,d,c){if(d){var f=this._getLongestLine(a).width;return this._round(Math.min(b/
f,d/(a.length*this.viewbox.height*c-(this.viewbox.height*c-this.viewbox.height))))}return this._round(b/this._getWidth(a))},_getBestFit:function(a,b,d,c){for(var f=32,h=0,e=f;0<f;){var g=this._getFitFactor(this._split(a,f),b,d,c);g>h&&(h=g,e=f);f--}return{scale:h,lines:this._split(a,e)}},_getBestFlow:function(a,b,d){for(var c=[],f=0,h=[],e=!1,g=0,k=a.length;g<k;g++){" "==a[g].code&&(e=!0);var m=a[g].xAdvance;g+1<k&&a[g].kern&&a[g].kern[a[g+1].code]&&(m+=a[g].kern[a[g+1].code].x);f+=d*m;if(f>=b){for(f=
a[g];e&&" "!=f.code&&0<=g;)f=h.pop(),g--;c.push(h);h=[];f=0;e=!1}h.push(a[g])}h.length&&c.push(h);return this._trim(c)},getWidth:function(a,b){return this._getWidth(n.map(this._normalize(a).split(""),function(a){return this.glyphs[a]||{xAdvance:this.advance.missing.x}},this))*(b||1)},getLineHeight:function(a){return this.viewbox.height*(a||1)},getCenterline:function(a){return this.viewbox.height/2*(a||1)},getBaseline:function(a){return(a||1)*(this.viewbox.height+this.descent)},draw:function(a,b,d,
c,f){if(!this.initialized())throw Error("dojox.gfx.VectorFont.draw(): we have not been initialized yet.");var h=a.createGroup();(b.x||b.y)&&a.applyTransform({dx:b.x||0,dy:b.y||0});var e=n.map(this._normalize(b.text).split(""),function(a){return this.glyphs[a]||{path:null,xAdvance:this.advance.missing.x}},this);a=d.size;var g=b.fitting,p=b.width,m=b.height;d=b.align;b=b.leading||this._defaultLeading;!g||(g!=k.vectorFontFitting.FLOW||p)&&(g!=k.vectorFontFitting.FIT||p&&m)||(g=k.vectorFontFitting.NONE);
switch(g){case k.vectorFontFitting.FIT:e=this._getBestFit(e,p,m,b);a=e.scale;e=e.lines;break;case k.vectorFontFitting.FLOW:a=this._getSizeFactor(a);e=this._getBestFlow(e,p,a);break;default:a=this._getSizeFactor(a),e=[e]}for(var e=n.filter(e,function(a){return 0<a.length}),p=0,g=this._getLongestLine(e).width,m=0,u=e.length;m<u;m++){for(var q=0,t=e[m],z=this._getWidth(t),x=h.createGroup(),l=0;l<t.length;l++){var r=t[l];if(null!==r.path){var v=x.createPath(r.path).setFill(c);f&&v.setStroke(f);v.setTransform([w.flipY,
w.translate(q,-this.viewbox.height-this.descent)])}q+=r.xAdvance;l+1<t.length&&r.kern&&r.kern[t[l+1].code]&&(q+=r.kern[t[l+1].code].x)}q=0;"middle"==d?q=g/2-z/2:"end"==d&&(q=g-z);x.setTransform({dx:q,dy:p});p+=this.viewbox.height*b}h.setTransform(w.scale(a));return h},onLoadBegin:function(a){},onLoad:function(a){}})});