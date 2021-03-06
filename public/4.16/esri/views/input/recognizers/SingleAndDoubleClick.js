// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../core/clock ../../../core/MapUtils ../InputHandler ./support".split(" "),function(f,e,k,l,m,n,p){Object.defineProperty(e,"__esModule",{value:!0});e.DefaultParameters={maximumDoubleClickDelay:250,maximumDoubleClickDistance:10,maximumDoubleTouchDelay:350,maximumDoubleTouchDistance:35};f=function(f){function b(a,g,d,b,h){void 0===a&&(a=e.DefaultParameters.maximumDoubleClickDelay);void 0===g&&(g=e.DefaultParameters.maximumDoubleClickDistance);void 0===d&&(d=e.DefaultParameters.maximumDoubleTouchDelay);
void 0===b&&(b=e.DefaultParameters.maximumDoubleTouchDistance);void 0===h&&(h=l.default);var c=f.call(this,!1)||this;c.maximumDoubleClickDelay=a;c.maximumDoubleClickDistance=g;c.maximumDoubleTouchDelay=d;c.maximumDoubleTouchDistance=b;c._clock=h;c._pointerState=new Map;c._click=c.registerOutgoing("click");c._doubleClick=c.registerOutgoing("double-click");c.registerIncoming("immediate-click",c._handleImmediateClick.bind(c));c.registerIncoming("pointer-drag",c._handlePointerDrag.bind(c));c.registerIncoming("drag",
c._handleDrag.bind(c));return c}k.__extends(b,f);b.prototype.onUninstall=function(){this._pointerState.forEach(function(a){null!=a.doubleClickTimeout&&(a.doubleClickTimeout.remove(),a.doubleClickTimeout=null)})};Object.defineProperty(b.prototype,"hasPendingInputs",{get:function(){return m.someMap(this._pointerState,function(a){return null!=a.doubleClickTimeout})},enumerable:!0,configurable:!0});b.prototype._pointerId=function(a){a=a.native;return"mouse"===a.pointerType?a.pointerId+":"+a.button:""+
a.pointerType};b.prototype._handleImmediateClick=function(a){var b=a.data,d=this._pointerId(b),e=this._pointerState.get(d);if(e){var f="touch"===b.native.pointerType?this.maximumDoubleTouchDistance:this.maximumDoubleClickDistance;p.manhattanDistance(e.event.data,b)>f?(this._clearDoubleClickTimeout(d,!0),this._startClick(a)):(this._clearDoubleClickTimeout(d,!1),this._doubleClick.emit(e.event.data,void 0,e.event.modifiers))}else this._startClick(a)};b.prototype._startClick=function(a){var b=this,d=
this._pointerId(a.data);this._pointerState.set(d,{event:a,doubleClickTimeout:this._clock.setTimeout(function(){return b._doubleClickTimeoutExceeded(d)},"touch"===a.data.native.pointerType?this.maximumDoubleTouchDelay:this.maximumDoubleClickDelay)});this.refreshHasPendingInputs()};b.prototype._handlePointerDrag=function(a){a=this._pointerId(a.data.currentEvent);this._clearDoubleClickTimeout(a,!0)};b.prototype._handleDrag=function(a){a=this._pointerId(a.data.pointer);this._clearDoubleClickTimeout(a,
!0)};b.prototype._clearDoubleClickTimeout=function(a,b){var d=this._pointerState.get(a);d&&(d.doubleClickTimeout.remove(),d.doubleClickTimeout=null,b&&this._doubleClickTimeoutExceeded(a),this._pointerState.delete(a),this.refreshHasPendingInputs())};b.prototype._doubleClickTimeoutExceeded=function(a){var b=this._pointerState.get(a);this._click.emit(b.event.data,void 0,b.event.modifiers);b.doubleClickTimeout=null;this._pointerState.delete(a);this.refreshHasPendingInputs()};return b}(n.InputHandler);
e.SingleAndDoubleClick=f});