// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports ./mathUtils ./string ./unitUtils ../intl/number".split(" "),function(r,h,p,q,g,l){function m(e,a,c){return e.units[a][c]}function k(e,a,c,b,d){void 0===b&&(b=2);void 0===d&&(d="abbr");return l.formatNumber(a,{minimumFractionDigits:b,maximumFractionDigits:b})+" "+m(e,c,d)}Object.defineProperty(h,"__esModule",{value:!0});h.unitName=m;h.formatDecimal=k;h.formatMetricLength=function(e,a,c,b,d){void 0===b&&(b=2);void 0===d&&(d="abbr");var f=g.preferredMetricLengthUnit(a,c);return k(e,
g.convertUnit(a,c,f),f,b,d)};h.formatMetricVerticalLength=function(e,a,c,b,d){void 0===b&&(b=2);void 0===d&&(d="abbr");var f=g.preferredMetricVerticalLengthUnit(a,c);return k(e,g.convertUnit(a,c,f),f,b,d)};h.formatImperialLength=function(e,a,c,b,d){void 0===b&&(b=2);void 0===d&&(d="abbr");var f=g.preferredImperialLengthUnit(a,c);return k(e,g.convertUnit(a,c,f),f,b,d)};h.formatImperialVerticalLength=function(e,a,c,b,d){void 0===b&&(b=2);void 0===d&&(d="abbr");var f=g.preferredImperialVerticalLengthUnit(a,
c);return k(e,g.convertUnit(a,c,f),f,b,d)};h.formatMetricArea=function(e,a,c,b,d){void 0===b&&(b=2);void 0===d&&(d="abbr");var f=g.preferredMetricAreaUnit(a,c);return k(e,g.convertUnit(a,c,f),f,b,d)};h.formatImperialArea=function(e,a,c,b,d){void 0===b&&(b=2);void 0===d&&(d="abbr");var f=g.preferredImperialAreaUnit(a,c);return k(e,g.convertUnit(a,c,f),f,b,d)};h.formatDMS=function(e,a,c){void 0===c&&(c=2);e=g.convertUnit(e,a,"degrees");a=e-Math.floor(e);e-=a;a*=60;var b=a-Math.floor(a);a-=b;b*=60;return e.toFixed()+
"\u00b0 "+a.toFixed()+"' "+b.toFixed(c)+'"'};var n=["B","kB","MB","GB","TB"];h.formatFileSize=function(e,a){var c=0===a?0:Math.floor(Math.log(a)/Math.log(1024)),c=p.clamp(c,0,n.length-1);a=l.formatNumber(a/Math.pow(1024,c),{maximumFractionDigits:2});return q.replace(e.units.bytes[n[c]],{fileSize:a})}});