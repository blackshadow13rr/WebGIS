// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define(["require","exports","../../../core/scheduling","./GamepadInputDevice","./GamepadState"],function(e,h,k,l,f){Object.defineProperty(h,"__esModule",{value:!0});e=function(){function c(a,b){var d=this;this.element=a;this.input=b;this._hasEventListeners=!1;this.frameTask=null;this.latestUpdate=[];this.inputDevices=[];this.callback=null;if(this.supported="getGamepads"in window.navigator)this.forEachGamepad(function(a){return d.connectGamepad(a)}),window.addEventListener("gamepadconnected",function(a){return d.connectGamepad(a.gamepad)}),
window.addEventListener("gamepaddisconnected",function(a){return d.disconnectGamepad(a.gamepad)}),this.ensurePollingState()}c.prototype.destroy=function(){var a=this;this.ensurePollingState();this.supported&&(window.removeEventListener("gamepadconnected",function(b){return a.connectGamepad(b.gamepad)}),window.removeEventListener("gamepaddisconnected",function(b){return a.disconnectGamepad(b.gamepad)}))};Object.defineProperty(c.prototype,"hasEventListeners",{set:function(a){this._hasEventListeners!==
a&&(this._hasEventListeners=a,this.ensurePollingState())},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"eventsEnabled",{get:function(){return this.supported&&0<this.inputDevices.length&&this._hasEventListeners},enumerable:!0,configurable:!0});Object.defineProperty(c.prototype,"onEvent",{set:function(a){this.callback=a},enumerable:!0,configurable:!0});c.prototype.connectGamepad=function(a){var b=new l(a);"unknown"!==b.deviceType&&(this.inputDevices[a.index]=b,this.input.gamepad.devices.add(b));
this.ensurePollingState()};c.prototype.disconnectGamepad=function(a){var b=a.index,d=this.inputDevices[b];d&&(this.emitGamepadEvent(a,f.extractState(d),!1),this.inputDevices.splice(b,1),this.latestUpdate.splice(b,1),this.input.gamepad.devices.remove(d),this.ensurePollingState())};c.prototype.ensurePollingState=function(){this.eventsEnabled?this.startPolling():this.stopPolling()};c.prototype.startPolling=function(){var a=this;null==this.frameTask&&(this.frameTask=k.addFrameTask({update:function(){return a.readGamepadState()}}))};
c.prototype.stopPolling=function(){null!=this.frameTask&&(this.frameTask.remove(),this.frameTask=null,this.latestUpdate=[])};c.prototype.readGamepadState=function(){var a=this,b=document.hasFocus(),d=this.element.contains(document.activeElement),c="document"===this.input.gamepad.enabledFocusMode&&!b||"view"===this.input.gamepad.enabledFocusMode&&!d;this.forEachGamepad(function(b){var d=a.inputDevices[b.index];if(d){var g=a.latestUpdate[b.index],d=f.extractState(d),e=c||f.stateIdle(d);g&&(g.timestamp===
b.timestamp||!g.active&&e||f.stateEqual(g.state,d))||a.emitGamepadEvent(b,d,!e)}})};c.prototype.forEachGamepad=function(a){for(var b=window.navigator.getGamepads(),d=0;d<b.length;d++){var c=b[d];this.validate(c)&&a(c)}};c.prototype.emitGamepadEvent=function(a,b,d){var c=this.latestUpdate[a.index];if((c=c&&c.active)||d)this.latestUpdate[a.index]={timestamp:a.timestamp,state:b,active:d},this.callback&&this.callback({device:this.inputDevices[a.index],state:b,action:!c&&d?"start":c&&d?"update":"end"})};
c.prototype.validate=function(a){if(!a||!a.connected)return!1;for(var b=0;b<a.axes.length;b++)if(isNaN(a.axes[b]))return!1;return!0};return c}();h.GamepadSource=e});