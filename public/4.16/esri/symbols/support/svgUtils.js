// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ../../Color ../../core/has ../../core/libs/gl-matrix-2/mat2df32 ../../core/libs/gl-matrix-2/math/mat2d ../../widgets/support/widget".split(" "),function(U,k,x,M,y,q,l){function z(a){return a.map(function(a){return a.command+" "+a.values.join(" ")}).join(" ").trim()}function A(a,b,c,e){if(a){if("circle"===a.type)return l.tsx("circle",{fill:b,"fill-rule":"evenodd",stroke:c.color,"stroke-width":c.width,"stroke-linecap":c.cap,"stroke-linejoin":c.join,"stroke-dasharray":c.dashArray,
"stroke-miterlimit":"4",cx:a.cx,cy:a.cy,r:a.r});if("ellipse"===a.type)return l.tsx("ellipse",{fill:b,"fill-rule":"evenodd",stroke:c.color,"stroke-width":c.width,"stroke-linecap":c.cap,"stroke-linejoin":c.join,"stroke-dasharray":c.dashArray,"stroke-miterlimit":"4",cx:a.cx,cy:a.cy,rx:a.rx,ry:a.ry});if("rect"===a.type)return l.tsx("rect",{fill:b,"fill-rule":"evenodd",stroke:c.color,"stroke-width":c.width,"stroke-linecap":c.cap,"stroke-linejoin":c.join,"stroke-dasharray":c.dashArray,"stroke-miterlimit":"4",
x:a.x,y:a.y,width:a.width,height:a.height});if("image"===a.type)return l.tsx("image",{href:a.src,x:a.x,y:a.y,width:a.width,height:a.height,preserveAspectRatio:"none"});if("path"===a.type)return a="string"!==typeof a.path?z(a.path):a.path,l.tsx("path",{fill:b,"fill-rule":"evenodd",stroke:c.color,"stroke-width":c.width,"stroke-linecap":c.cap,"stroke-linejoin":c.join,"stroke-dasharray":c.dashArray,"stroke-miterlimit":"4",d:a});if("text"===a.type)return l.tsx("text",{fill:b,"fill-rule":"evenodd",stroke:c.color,
"stroke-width":c.width,"stroke-linecap":c.cap,"stroke-linejoin":c.join,"stroke-dasharray":c.dashArray,"stroke-miterlimit":"4","text-anchor":e.align,"text-decoration":e.decoration,kerning:e.kerning,rotate:e.rotate,"text-rendering":N,"font-style":e.font.style,"font-variant":e.font.variant,"font-weight":e.font.weight,"font-size":e.font.size,"font-family":e.font.family,x:a.x,y:a.y},a.text)}return null}function B(a){var b={fill:"none",pattern:null,linearGradient:null};if(a)if("type"in a&&"pattern"===a.type){var c=
"patternId-"+ ++O;b.fill="url(#"+c+")";b.pattern={id:c,x:a.x,y:a.y,width:a.width,height:a.height,image:{x:0,y:0,width:a.width,height:a.height,href:a.src}}}else"type"in a&&"linear"===a.type?(c="linearGradientId-"+ ++P,b.fill="url(#"+c+")",b.linearGradient={id:c,x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2,stops:a.colors.map(function(a){return{offset:a.offset,color:a.color&&(new x(a.color)).toString()}})}):a&&(a=new x(a),b.fill=a.toString());return b}function C(a){var b={color:"none",width:1,cap:"butt",join:"4",
dashArray:"none"};if(a&&(null!=a.width&&(b.width=a.width),a.cap&&(b.cap=a.cap),a.join&&(b.join=a.join.toString()),a.color&&(b.color=(new x(a.color)).toString()),a.style)){var c=null;a.style in D&&(c=D[a.style]);if(Array.isArray(c)){for(var c=c.slice(0),e=0;e<c.length;++e)c[e]*=a.width;if("butt"!==a.cap){for(e=0;e<c.length;e+=2)c[e]-=a.width,1>c[e]&&(c[e]=1);for(e=1;e<c.length;e+=2)c[e]+=a.width}c=c.join(",")}b.dashArray=c}return b}function E(a,b){var c={align:null,decoration:null,kerning:null,rotate:null,
font:{style:null,variant:null,weight:null,size:null,family:null}};a&&(c.align=a.align,c.decoration=a.decoration,c.kerning=a.kerning?"auto":"0",c.rotate=a.rotated?"90":"0",c.font.style=b.style||"normal",c.font.variant=b.variant||"normal",c.font.weight=b.weight||"normal",c.font.size=b.size&&b.size.toString()||"10pt",c.font.family=b.family||"serif");return c}function F(a){var b=a.pattern;a=a.linearGradient;return b?l.tsx("pattern",{id:b.id,patternUnits:"userSpaceOnUse",x:b.x,y:b.y,width:b.width,height:b.height},
l.tsx("image",{x:b.image.x,y:b.image.y,width:b.image.width,height:b.image.height,href:b.image.href})):a?(b=a.stops.map(function(a,b){return l.tsx("stop",{key:b+"-stop",offset:a.offset,"stop-color":a.color})}),l.tsx("linearGradient",{id:a.id,gradientUnits:"userSpaceOnUse",x1:a.x1,y1:a.y1,x2:a.x2,y2:a.y2},b)):null}function Q(a,b,c){return q.translate(a,q.identity(a),[b,c])}function G(a,b,c,e,d){q.scale(a,q.identity(a),[b,c]);a[4]=a[4]*b-e*b+e;a[5]=a[5]*c-d*c+d;return a}function R(a,b,c,e){var d=b%360*
Math.PI/180;q.rotate(a,q.identity(a),d);b=Math.cos(d);var d=Math.sin(d),f=a[4],g=a[5];a[4]=f*b-g*d+e*d-c*b+c;a[5]=g*b+f*d-c*d-e*b+e;return a}function h(a,b){f&&"left"in f?(f.left>a&&(f.left=a),f.right<a&&(f.right=a),f.top>b&&(f.top=b),f.bottom<b&&(f.bottom=b)):f={left:a,bottom:b,right:a,top:b}}function H(a){var b=a.args,c=b.length;switch(a.action){case "M":case "L":case "C":case "S":case "Q":case "T":for(a=0;a<c;a+=2)h(b[a],b[a+1]);d.x=b[c-2];d.y=b[c-1];break;case "H":for(a=0;a<c;++a)h(b[a],d.y);
d.x=b[c-1];break;case "V":for(a=0;a<c;++a)h(d.x,b[a]);d.y=b[c-1];break;case "m":a=0;"x"in d||(h(d.x=b[0],d.y=b[1]),a=2);for(;a<c;a+=2)h(d.x+=b[a],d.y+=b[a+1]);break;case "l":case "t":for(a=0;a<c;a+=2)h(d.x+=b[a],d.y+=b[a+1]);break;case "h":for(a=0;a<c;++a)h(d.x+=b[a],d.y);break;case "v":for(a=0;a<c;++a)h(d.x,d.y+=b[a]);break;case "c":for(a=0;a<c;a+=6)h(d.x+b[a],d.y+b[a+1]),h(d.x+b[a+2],d.y+b[a+3]),h(d.x+=b[a+4],d.y+=b[a+5]);break;case "s":case "q":for(a=0;a<c;a+=4)h(d.x+b[a],d.y+b[a+1]),h(d.x+=b[a+
2],d.y+=b[a+3]);break;case "A":for(a=0;a<c;a+=7)h(b[a+5],b[a+6]);d.x=b[c-2];d.y=b[c-1];break;case "a":for(a=0;a<c;a+=7)h(d.x+=b[a+5],d.y+=b[a+6])}}function I(a,b,c){var e=S[a.toLowerCase()];"number"===typeof e&&(e?b.length>=e&&(a={action:a,args:b.slice(0,b.length-b.length%e)},c.push(a),H(a)):(a={action:a,args:[]},c.push(a),H(a)))}function J(a){var b={x:0,y:0,width:0,height:0};if("circle"===a.type)b.x=a.cx-a.r,b.y=a.cy-a.r,b.width=2*a.r,b.height=2*a.r;else if("ellipse"===a.type)b.x=a.cx-a.rx,b.y=a.cy-
a.ry,b.width=2*a.rx,b.height=2*a.ry;else if("image"===a.type||"rect"===a.type)b.x=a.x,b.y=a.y,b.width=a.width,b.height=a.height;else if("path"===a.type){a=("string"!==typeof a.path?z(a.path):a.path).match(T);var c=[];f={};d={};if(a){for(var e="",w=[],h=a.length,g=0;g<h;++g){var l=a[g],p=parseFloat(l);isNaN(p)?(e&&I(e,w,c),w=[],e=l):w.push(p)}I(e,w,c);a={x:0,y:0,width:0,height:0};f&&"left"in f&&(a.x=f.left,a.y=f.top,a.width=f.right-f.left,a.height=f.bottom-f.top)}else a=null;b.x=a.x;b.y=a.y;b.width=
a.width;b.height=a.height}return b}function K(a){for(var b={x:0,y:0,width:0,height:0},c=null,e=Number.NEGATIVE_INFINITY,d=Number.NEGATIVE_INFINITY,f=0;f<a.length;f++){var g=a[f];c?(c.x=Math.min(c.x,g.x),c.y=Math.min(c.y,g.y),e=Math.max(e,g.x+g.width),d=Math.max(d,g.y+g.height)):(c=b,c.x=g.x,c.y=g.y,e=g.x+g.width,d=g.y+g.height)}c&&(c.width=e-c.x,c.height=d-c.y);return c}function L(a,b,c,d,f,h){var e=b/2,l=c/2,p=a.width+d,r=a.height+d,k=y.mat2df32.create(),m=y.mat2df32.create(),n=!1;if(f&&0!==p&&0!==
r){f=p/r;var n=b>c?b:c,t=1,u=1;isNaN(n)||(1<f?(t=n/p,u=n/f/r):(u=n/r,t=n*f/p));q.multiply(m,m,G(k,t,u,e,l));n=!0}f=a.x+(p-d)/2;a=a.y+(r-d)/2;q.multiply(m,m,Q(k,e-f,l-a));!n&&(p>b||r>c)&&(e=p/b>r/c,b=(e?b:c)/(e?p:r),q.multiply(m,m,G(k,b,b,f,a)));h&&q.multiply(m,m,R(k,h,f,a));return"matrix("+m[0]+","+m[1]+","+m[2]+","+m[3]+","+m[4]+","+m[5]+")"}Object.defineProperty(k,"__esModule",{value:!0});var O=0,P=0,N=M("chrome")?"auto":"optimizeLegibility",S={m:2,l:2,h:1,v:1,c:6,s:4,q:4,t:2,a:7,z:0},T=/([A-DF-Za-df-z])|([-+]?\d*[.]?\d+(?:[eE][-+]?\d+)?)/g,
f={},d={},D={solid:"none",shortdash:[4,1],shortdot:[1,1],shortdashdot:[4,1,1,1],shortdashdotdot:[4,1,1,1,1,1],dot:[1,3],dash:[4,3],longdash:[8,3],dashdot:[4,3,1,3],longdashdot:[8,3,1,3],longdashdotdot:[8,3,1,3,1,3]};k.renderShape=A;k.generateFillAttributes=B;k.generateStrokeAttributes=C;k.generateTextAttributes=E;k.renderDef=F;k.getBoundingBox=J;k.computeBBox=K;k.getTransformMatrix=L;k.renderSVG=function(a,b,c,d){for(var e=[],f=[],g=0;g<a.length;g++){for(var h=[],p=[],k=0,q=0,m=a[g];q<m.length;q++){var n=
m[q],t=n.shape,u=n.fill,v=n.stroke,n=n.font,k=k+(v&&v.width||0),u=B(u),v=C(v),n="text"===t.type?E(t,n):null;e.push(F(u));h.push(A(t,u.fill,v,n));p.push(J(t))}p=L(K(p),b,c,k,d&&d.scale,d&&d.rotation);f.push(l.tsx("g",{transform:p},h))}return l.tsx("svg",{xmlns:"http://www.w3.org/2000/svg",width:b,height:c},l.tsx("defs",null,e),f)}});