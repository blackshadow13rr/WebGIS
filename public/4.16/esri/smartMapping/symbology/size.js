// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../Color ./support/SymbologyBase ./support/utils".split(" "),function(d,e,p,f,t,h){function q(c,b){var a="mesh"!==c.geometryType&&c.worldScale?c.view:null;switch(c.geometryType){case "point":case "multipoint":return r({color:b.color,noDataColor:b.noDataColor,outline:b.outline,size:b.size,noDataSize:b.noDataSize,minSize:b.minSize,maxSize:b.maxSize,opacity:b.opacity||1},a);case "polyline":c=b.noDataColor;var m=b.width,d=b.noDataWidth,e=b.minWidth,g=b.maxWidth;return{color:new f(b.color),
noDataColor:new f(c),width:a?h.toWorldScale(m,a):m,noDataWidth:a?h.toWorldScale(d,a):d,minWidth:a?h.toWorldScale(e,a):e,maxWidth:a?h.toWorldScale(g,a):g,opacity:1};case "polygon":return m=b.marker,delete m.opacity,c=b.background,b=b.opacity||1,a=r(m,a),delete a.opacity,c={color:new f(c.color),outline:{color:new f(c.outline.color),width:c.outline.width}},{marker:a,background:c,opacity:b}}}function r(c,b){return{color:new f(c.color),noDataColor:new f(c.noDataColor),outline:{color:new f(c.outline.color),
width:c.outline.width},size:b?h.toWorldScale(c.size,b):c.size,noDataSize:b?h.toWorldScale(c.noDataSize,b):c.noDataSize,minSize:b?h.toWorldScale(c.minSize,b):c.minSize,maxSize:b?h.toWorldScale(c.maxSize,b):c.maxSize,opacity:c.opacity}}d=[128,128,128,1];e=[128,128,128,1];var g={primary:{color:[227,139,79,1],noDataColor:d,outline:{color:[255,255,255,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:"8px",maxSize:"50px",opacity:.8},secondary:[{color:[128,128,128,1],noDataColor:d,outline:{color:[255,
255,255,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:"8px",maxSize:"50px",opacity:.8},{color:[255,255,255,1],noDataColor:d,outline:{color:[128,128,128,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:"8px",maxSize:"50px",opacity:.8}]},k={primary:{color:[227,139,79,1],noDataColor:e,outline:{color:[92,92,92,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:"8px",maxSize:"50px",opacity:.8},secondary:[{color:[178,178,178,1],noDataColor:e,outline:{color:[92,92,92,.25],width:"1px"},
noDataSize:"4px",size:"12px",minSize:"8px",maxSize:"50px",opacity:.8},{color:[26,26,26,1],noDataColor:e,outline:{color:[128,128,128,.25],width:"1px"},noDataSize:"4px",size:"12px",minSize:"8px",maxSize:"50px",opacity:.8}]},l=[0,0,0,0],n={color:l,outline:{color:[166,166,166,.25],width:"1px"}},l={color:l,outline:{color:[153,153,153,.25],width:"1px"}},u={default:{name:"default",label:"Default",description:"Default theme for visualizing features by varying their size to show data.",schemes:{point:{light:g,
dark:k},polyline:{light:{primary:{color:[226,119,40,1],noDataColor:d,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"},secondary:[{color:[77,77,77,1],noDataColor:d,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"},{color:[153,153,153,1],noDataColor:d,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"}]},dark:{primary:{color:[226,119,40,1],noDataColor:e,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"},secondary:[{color:[255,255,255,1],noDataColor:e,noDataWidth:"1px",
width:"1px",minWidth:"1px",maxWidth:"18px"},{color:[153,153,153,1],noDataColor:e,noDataWidth:"1px",width:"1px",minWidth:"1px",maxWidth:"18px"}]}},polygon:{light:{primary:{marker:g.primary,background:l,opacity:g.primary.opacity},secondary:[{marker:g.secondary[0],background:l,opacity:g.secondary[0].opacity},{marker:g.secondary[1],background:l,opacity:g.secondary[1].opacity}]},dark:{primary:{marker:k.primary,background:n,opacity:k.primary.opacity},secondary:[{marker:k.secondary[0],background:n,opacity:k.secondary[0].opacity},
{marker:k.secondary[1],background:n,opacity:k.secondary[1].opacity}]}}}}};return new (function(c){function b(){return c.call(this,{themeDictionary:u})||this}p.__extends(b,c);b.prototype.getSchemes=function(a){if("mesh"===a.geometryType)return null;var b=this.getRawSchemes({theme:"default",basemap:a.basemap,geometryType:a.geometryType,basemapTheme:a.basemapTheme});if(b){var c=b.schemesInfo,d=b.basemapId,b=b.basemapTheme;return{primaryScheme:q(a,c.primary),secondarySchemes:c.secondary.map(function(b){return q(a,
b)}).filter(Boolean),basemapId:d,basemapTheme:b}}};b.prototype.cloneScheme=function(a){if(a)return a=p.__assign({},a),"color"in a&&a.color&&(a.color=new f(a.color)),"noDataColor"in a&&a.noDataColor&&(a.noDataColor=new f(a.noDataColor)),"outline"in a&&a.outline&&(a.outline={color:a.outline.color&&new f(a.outline.color),width:a.outline.width}),"marker"in a&&a.marker&&(a.marker=this.cloneScheme(a.marker)),"background"in a&&a.background&&(a.background=this.cloneScheme(a.background)),a};return b}(t))});