// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../intl","../../../core/string"],function(r,c,f,q){function g(a){return"esriNAUSeconds"===a||"esriNAUMinutes"===a||"esriNAUHours"===a||"esriNAUDays"===a}function l(a,b,d){var c=g(b),e=g(d);b=c?h(a,b):k(a,b);return c===e?e?n(b,d):p(b,d):a}function h(a,b,d){a=a||0;switch(b){case "esriNAUSeconds":a/=Math.pow(60,d?-1:1);break;case "esriNAUHours":a*=Math.pow(60,d?-1:1);break;case "esriNAUDays":a*=Math.pow(1440,d?-1:1)}return a}function n(a,b){return h(a,b,!0)}function k(a,
b,d){a=a||0;switch((b||"").replace("esriNAU","esri")){case "esriInches":a*=Math.pow(.0254,d?-1:1);break;case "esriFeet":a*=Math.pow(.3048,d?-1:1);break;case "esriYards":a*=Math.pow(.9144,d?-1:1);break;case "esriMiles":a*=Math.pow(1609.344,d?-1:1);break;case "esriNauticalMiles":a*=Math.pow(1851.995396854,d?-1:1);break;case "esriMillimeters":a/=Math.pow(1E3,d?-1:1);break;case "esriCentimeters":a/=Math.pow(100,d?-1:1);break;case "esriKilometers":a*=Math.pow(1E3,d?-1:1);break;case "esriDecimeters":a/=
Math.pow(10,d?-1:1)}return a}function p(a,b){return k(a,b,!0)}Object.defineProperty(c,"__esModule",{value:!0});c.useSpatiallyLocalTime=function(a,b){return!(!a._associatedStop||!b||-22091616E5===a.get("attributes.ETA"))};c.toSpatiallyLocalTimeString=function(a,b,d,c){var e=new Date(d),m=new Date(e.getTime()+6E4*e.getTimezoneOffset()),e=f.formatDate(m,{hour:"2-digits",minute:"2-digits",hour12:!1});return b?(d=(d-b)/1E3/60/60,b=Math.floor(d),c=60*(d-b),d=f.formatNumber(b,{minimumIntegerDigits:2}),c=
f.formatNumber(c,{minimumIntegerDigits:2}),e+" "+a.gmt+(0>b?"":"+")+d+c):c?f.formatDate(m,{hour:"numeric",minute:"numeric"}):e};c.isTimeUnits=g;c.convertCostValue=l;c.toMinutes=h;c.fromMinutes=n;c.toMeters=k;c.fromMeters=p;c.isFirstStop=function(a){a=a&&a.attributes||{};return null===(a.ArriveCurbApproach||null)&&null!==(a.DepartCurbApproach||null)};c.isMiddleStop=function(a){a=a&&a.attributes||{};return null!==(a.ArriveCurbApproach||null)&&null!==(a.DepartCurbApproach||null)};c.isLastStop=function(a){a=
a&&a.attributes||{};return null!==(a.ArriveCurbApproach||null)&&null===(a.DepartCurbApproach||null)};c.isWaypoint=function(a){return a&&a.get("attributes.isWaypoint")};c.isStopLocated=function(a){a=a&&a.get("attributes.Status");return!a||6===a};c.getAssociatedStop=function(a){return a._associatedStop};c.formatTime=function(a,b){void 0===b&&(b={});b=b.unit;b=(void 0===b?"minutes":b).toLowerCase();a="days"===b?24*a:"hours"===b?a:"minutes"===b?a/60:a/60/60;a=1>a?Math.floor(60*a)+"m":Math.floor(a)+":"+
q.padStart(""+Math.floor(a%1*60),2,"0")+"h";return a};c.formatDistance=function(a,b,d){void 0===d&&(d={});var c=d.toUnits;b=l(b,d.fromUnits,c);if(!b)return"";c=(d=a.units[c])?d.abbr:c.replace("esri","").toLowerCase();return f.substitute(a.distanceTemplate,{distance:b,units:c},{format:{distance:{type:"number",intlOptions:{minimumFractionDigits:2,maximumFractionDigits:2}}}})}});