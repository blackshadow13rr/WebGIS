// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../CIMCursor","../CIMEffects","../CIMOperators"],function(c,d,e,g,h){Object.defineProperty(d,"__esModule",{value:!0});var k=96/72;c=function(){function a(){}a.executeEffects=function(f,b){b=e.cloneAndDecodeGeometry(b);b=new g.SimpleGeometryCursor(b);for(var a=0;a<f.length;a++){var c=f[a],d=h.getEffectOperator(c);d&&(b=d.execute(b,c,k))}return b};a.next=function(a){a=a.next();e.deltaEncodeGeometry(a);return a};return a}();d.CIMEffectHelper=c});