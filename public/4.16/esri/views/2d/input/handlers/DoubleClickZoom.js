// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","tslib","../../../input/InputHandler","../../../input/handlers/support"],function(b,e,g,h,k){Object.defineProperty(e,"__esModule",{value:!0});b=function(b){function d(a,f){var c=b.call(this,!0)||this;c.view=a;c.registerIncoming("double-click",f,function(a){return c._handleDoubleClick(a,f)});return c}g.__extends(d,b);d.prototype._handleDoubleClick=function(a,b){k.eventMatchesPointerAction(a.data,"primary")&&(a.stopPropagation(),b?this.view.mapViewNavigation.zoomOut([a.data.x,
a.data.y]):this.view.mapViewNavigation.zoomIn([a.data.x,a.data.y]))};return d}(h.InputHandler);e.DoubleClickZoom=b});