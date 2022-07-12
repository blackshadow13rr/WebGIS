// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../intl ../core/deprecate ../core/events ../core/Logger ../core/maybe ../core/accessorSupport/decorators ../core/libs/pep/pep ../libs/resize-observer/ResizeObserver ./Widget ./Slider/SliderViewModel ./support/widget".split(" "),function(H,I,e,y,z,u,D,l,g,w,E,F,G,k){var A=D.getLogger("esri.widgets.Slider"),B={labels:!1,rangeLabels:!1};return function(C){function b(a,c){var d=C.call(this,a,c)||this;d._activeLabelInputIndex=null;d._anchorElements=[];d._baseNode=null;d._dragged=
!1;d._dragStartInfo=null;d._focusedAnchorIndex=null;d._isMinInputActive=!1;d._isMaxInputActive=!1;d._labelElements=[];d._lastMovedHandleIndex=null;d._observer=null;d._positionPrecision=5;d._segmentDragStartInfo=null;d._segmentElements=[];d._thumbElements=[];d._tickElements=[];d._trackHeight=null;d._trackWidth=null;d._zIndices=null;d._zIndexOffset=3;d.disabled=!1;d.extraNodes=[];d.draggableSegmentsEnabled=!0;d.inputCreatedFunction=null;d.inputFormatFunction=null;d.inputParseFunction=null;d.label=void 0;
d.labelInputsEnabled=!1;d.labelFormatFunction=null;d.labels=null;d.max=null;d.messages=null;d.min=null;d.precision=4;d.rangeLabelInputsEnabled=!1;d.snapOnClickEnabled=!0;d.steps=null;d.thumbsConstrained=!0;d.thumbCreatedFunction=null;d.tickConfigs=null;d.trackElement=null;d.values=null;d.viewModel=new G;d.visibleElements=e.__assign({},B);d._observer=new E(function(){return d.scheduleRender()});d._onAnchorPointerDown=d._onAnchorPointerDown.bind(d);d._onAnchorPointerMove=d._onAnchorPointerMove.bind(d);
d._onAnchorPointerUp=d._onAnchorPointerUp.bind(d);d._onLabelPointerDown=d._onLabelPointerDown.bind(d);d._onLabelPointerUp=d._onLabelPointerUp.bind(d);d._onSegmentPointerDown=d._onSegmentPointerDown.bind(d);d._onSegmentPointerMove=d._onSegmentPointerMove.bind(d);d._onSegmentPointerUp=d._onSegmentPointerUp.bind(d);d._onTrackPointerDown=d._onTrackPointerDown.bind(d);return d}e.__extends(b,C);b.prototype.destroy=function(){document.removeEventListener("pointerup",this._onLabelPointerUp);document.removeEventListener("pointermove",
this._onLabelPointerMove);document.removeEventListener("pointerup",this._onAnchorPointerUp);document.removeEventListener("pointermove",this._onAnchorPointerMove)};Object.defineProperty(b.prototype,"labelsVisible",{set:function(a){z.deprecatedProperty(A,"labelsVisible",{replacement:"visibleElements.labels",version:"4.15"});this.visibleElements=e.__assign(e.__assign({},this.visibleElements),{labels:a})},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"layout",{set:function(a){-1===
["vertical","vertical-reversed","horizontal","horizontal-reversed"].indexOf(a)&&(a="horizontal");this._set("layout",a)},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"rangeLabelsVisible",{set:function(a){z.deprecatedProperty(A,"rangeLabelsVisible",{replacement:"visibleElements.rangeLabels",version:"4.15"});this.visibleElements=e.__assign(e.__assign({},this.visibleElements),{rangeLabels:a})},enumerable:!0,configurable:!0});Object.defineProperty(b.prototype,"state",{get:function(){var a=
this._activeLabelInputIndex,c=this._isMaxInputActive,d=this._isMinInputActive,m=this._segmentDragStartInfo,b=this.viewModel,m=l.isSome(this._dragStartInfo)||l.isSome(m);return null!==a||c||d?"editing":m?"dragging":b.state},enumerable:!0,configurable:!0});b.prototype.castVisibleElements=function(a){return e.__assign(e.__assign({},B),a)};b.prototype.render=function(){var a=this.label,c=this.classes("esri-slider","esri-widget",this._isHorizontalLayout()?"esri-slider--horizontal":"esri-slider--vertical",
this._isReversedLayout()?"esri-slider--reversed":null,this._isDisabled()?"esri-disabled":null);this._storeTrackDimensions();return k.tsx("div",{afterCreate:this._afterBaseNodeCreate,bind:this,"aria-label":a,class:c,"touch-action":"none"},this.renderContent())};b.prototype.toNextStep=function(a){this._toStep(a,1)};b.prototype.toPreviousStep=function(a){this._toStep(a,-1)};b.prototype.renderContent=function(){var a=this.max,c=this.min;if(l.isSome(c)&&l.isSome(a)&&!(c>a))return[this.renderMin(),this.renderSliderContainer(),
this.renderMax()]};b.prototype.renderSliderContainer=function(){return k.tsx("div",{key:"slider-container",bind:this,class:"esri-slider__content"},this.renderTrackElement(),this.renderTicksContainer(),this.renderExtraContentElements())};b.prototype.renderTrackElement=function(){return k.tsx("div",{afterCreate:this._afterTrackCreate,bind:this,class:"esri-slider__track","data-node-ref":"trackElement","touch-action":"none"},this.renderSegmentElements(),this.renderAnchorElements())};b.prototype.renderSegmentElements=
function(){if(this.trackElement&&this.values&&this.values.length){for(var a=this.values.length+1,c=[],d=0;d<a;d++)c.push(this.renderSegmentElement(d));return c}};b.prototype.renderSegmentElement=function(a){var c=this._trackHeight,d=this._trackWidth,m=this.draggableSegmentsEnabled,b=this.id,h=this.state,v=this.values,r=this._isHorizontalLayout(),g=r?d:c,c=a===v.length?null:a,d=0===a?null:a-1,t=l.isSome(c),n=l.isSome(d),p,q=e.__spreadArrays(v).sort(function(a,c){return a-c});this._isReversedLayout()?
(v=n?this._positionFromValue(q[d]):r?g:0,p=t?this._positionFromValue(q[c]):r?0:g):(v=t?this._positionFromValue(q[c]):r?g:0,p=n?this._positionFromValue(q[d]):r?0:g);q=this._applyPrecisionToPosition(100*p/g);g=(v-p)/g;r=r?"transform: translate("+q+"%, 0px) scale("+g+", 1);":"transform: translate(0px, "+q+"%) scale(1, "+g+");";m=this.classes("esri-slider__segment","esri-slider__segment-"+a,m&&t&&n&&"disabled"!==h?"esri-slider__segment--interactive":null);return k.tsx("div",{afterCreate:this._afterSegmentCreate,
afterRemoved:this._afterSegmentRemoved,bind:this,class:m,"data-max-thumb-index":c,"data-min-thumb-index":d,"data-segment-index":a,key:b+"-segment-"+a,style:r,"touch-action":"none"})};b.prototype.renderAnchorElements=function(){var a=this,c=this.trackElement,d=this.values;if(d&&d.length)return this._zIndices=d.map(function(c,b){c=a._positionFromValue(c);c=a._positionToPercent(c);c=a._isHorizontalLayout()?50<c:50>c;return a._zIndexOffset+(d.length+(c?-1:1)*b)}),c&&d&&d.length?d.map(function(c,d){return a.renderAnchorElement(c,
d)}):null};b.prototype.renderAnchorElement=function(a,c){var d=this._positionFromValue(a),d=this._valueFromPosition(d);if(l.isSome(d)&&!isNaN(d)){var b=this._dragStartInfo,d=this.id,f=this.layout,h=this.values,e=this.visibleElements.labels,g=b&&b.index===c,x=this._lastMovedHandleIndex===c,b=this.classes("esri-slider__anchor","esri-slider__anchor-"+c,g?"esri-slider__anchor--moving":null,x?"esri-slider__anchor--moved":null),t=this.labels.values[c],g=this._getStyleForAnchor(a,c,g||x),n=this.viewModel.getBoundsForValueAtIndex(c),
x=n.min,n=n.max,p=this.messages,t=2===h.length?0===c?y.substitute(p.rangeMinimum,{value:a}):y.substitute(p.rangeMaximum,{value:a}):t;return k.tsx("div",{afterCreate:this._afterAnchorCreate,afterUpdate:this._afterAnchorUpdate,afterRemoved:this._afterAnchorRemoved,"aria-controls":1===h.length?null:0===c?d+"-handle-"+(c+1):c===h.length-1?d+"-handle-"+(c-1):d+"-handle-"+(c-1)+" "+d+"-handle-"+(c+1),"aria-label":p.sliderValue,"aria-labelledby":e?d+"-label-"+c:null,"aria-orientation":f,"aria-valuemax":n.toString(),
"aria-valuemin":x.toString(),"aria-valuenow":a.toString(),"aria-valuetext":t,bind:this,class:b,"data-thumb-index":c,"data-value":a,id:d+"-handle-"+c,key:d+"-handle-"+c,onkeydown:this._onAnchorKeyDown,"touch-action":"none",role:"slider",style:g,tabIndex:0},k.tsx("span",{afterCreate:this._afterThumbCreate,afterRemoved:this._afterThumbRemoved,bind:this,class:"esri-slider__thumb","data-thumb-index":c,"touch-action":"none"}),this.renderThumbLabel(c))}};b.prototype.renderThumbLabel=function(a){var c=this.id,
d=this.labelInputsEnabled,b=this.state,f=this.visibleElements.labels,h=this.labels.values[a],b=this.classes("esri-slider__label",f?null:"esri-hidden",d&&"disabled"!==b?"esri-slider__label--interactive":null);return k.tsx("span",{afterCreate:this._afterLabelCreate,afterRemoved:this._afterLabelRemoved,"aria-hidden":!f,bind:this,class:b,"data-thumb-index":a,key:c+"-label-"+a,id:c+"-label-"+a,role:d?"button":null,"touch-action":"none"},this._activeLabelInputIndex===a?this.renderValueInput(a):h)};b.prototype.renderValueInput=
function(a){return k.tsx("input",{afterCreate:this._afterInputCreate,"aria-label":this.messages.sliderValue,bind:this,class:"esri-slider__label-input","data-input-type":"thumb","data-input-index":a,required:!0,tabIndex:0,type:"text",value:this._formatInputValue(this.values[a],"value",a),onblur:this._onLabelInputBlur,onkeydown:this._onInputKeyDown})};b.prototype.renderMax=function(){var a=this._isMaxInputActive,c=this.labels,d=this.rangeLabelInputsEnabled,b=this.state,f=this.visibleElements.rangeLabels,
b=this.classes("esri-slider__max",f?null:"esri-hidden",d&&"disabled"!==b?"esri-slider__max--interactive":null);return k.tsx("div",{"aria-hidden":!f,bind:this,class:b,onclick:this._onMaxLabelClick,onkeydown:this._onMaxLabelKeyDown,role:d?"button":null,tabIndex:d?0:null},a?this.renderMaxInput():c.max)};b.prototype.renderMin=function(){var a=this._isMinInputActive,c=this.labels,d=this.rangeLabelInputsEnabled,b=this.state,f=this.visibleElements.rangeLabels,b=this.classes("esri-slider__min",f?null:"esri-hidden",
d&&"disabled"!==b?"esri-slider__min--interactive":null);return k.tsx("div",{"aria-hidden":!f,bind:this,class:b,onclick:this._onMinLabelClick,onkeydown:this._onMinLabelKeyDown,role:d?"button":null,tabIndex:d?0:null},a?this.renderMinInput():c.min)};b.prototype.renderMaxInput=function(){return k.tsx("input",{afterCreate:this._afterInputCreate,"aria-label":this.messages.maximumValue,bind:this,class:"esri-slider__range-input","data-input-type":"max",required:!0,tabIndex:0,type:"text",value:this._formatInputValue(this.max,
"max"),onblur:this._onMaxInputBlur,onkeydown:this._onInputKeyDown})};b.prototype.renderMinInput=function(){return k.tsx("input",{afterCreate:this._afterInputCreate,"aria-label":this.messages.minimumValue,bind:this,class:"esri-slider__range-input","data-input-type":"min",required:!0,tabIndex:0,type:"text",value:this._formatInputValue(this.min,"min"),onblur:this._onMinInputBlur,onkeydown:this._onInputKeyDown})};b.prototype.renderExtraContentElements=function(){return k.tsx("div",{bind:this,class:"esri-slider__extra-content"},
this.extraNodes)};b.prototype.renderTicksContainer=function(){var a=this;if(this.tickConfigs&&this.trackElement&&(0!==this._trackHeight||0!==this._trackWidth))return this.tickConfigs.map(function(c,d){return k.tsx("div",{key:"ticks-container",class:a.classes("esri-slider__ticks")},a.renderTicks(c,d))})};b.prototype.renderTicks=function(a,c){var d=this,b=a.mode,f=a.values;this._tickElements[c]=[];if("position"===b)return b=Array.isArray(f)?f:[f],this._calculateTickPositions(b).map(function(b,m){return d.renderTickGroup(a,
m,c,b)});if("percent"===b&&Array.isArray(f)){var h=this.min,e=this.max-h,b=f.map(function(a){return d._applyPrecisionToPosition(a/100*e+h)});return this._calculateTickPositions(b).map(function(b,m){return d.renderTickGroup(a,m,c,b)})}b=Array.isArray(f)&&f.length?f[0]:isNaN(f)?null:f;b=this._getTickCounts(b,a);return this._calculateEquidistantTickPositions(b).map(function(b,m){return d.renderTickGroup(a,m,c,b)})};b.prototype.renderTickGroup=function(a,c,d,b){var m="position"===a.mode?Array.isArray(a.values)?
a.values[c]:a.values:this._valueFromPosition(b);if(l.isSome(m)&&!isNaN(m))return k.tsx("div",{afterCreate:this._afterTickGroupCreate,bind:this,"data-config":a,"data-position":b,"data-tick-config-index":d,"data-tick-group-index":c,"data-value":m,key:"tick-group-"+c},this.renderTickLine(a,c,d,m),a.labelsVisible?this.renderTickLabel(a,c,d,m):null)};b.prototype.renderTickLine=function(a,c,d,b){return k.tsx("div",{afterCreate:this._afterTickLineCreate,"aria-valuenow":b.toString(),bind:this,class:"esri-slider__tick",
"data-tick-config-index":d,"data-tick-group-index":c,"data-value":b,key:"tick-label-"+c,style:this._getPositionStyleForElement(b)})};b.prototype.renderTickLabel=function(a,c,d,b){a=a.labelFormatFunction?a.labelFormatFunction(b,"tick",c):this.viewModel.getLabelForValue(b,"tick",c);return k.tsx("div",{afterCreate:this._afterTickLabelCreate,"aria-label":a,"aria-valuenow":b.toString(),"aria-valuetext":a,bind:this,class:"esri-slider__tick-label","data-tick-config-index":d,"data-tick-group-index":c,"data-value":b,
key:"tick-label-"+c,style:"transform: translate(-50%); "+this._getPositionStyleForElement(b)},a)};b.prototype._afterBaseNodeCreate=function(a){this._baseNode&&this._observer.unobserve(this._baseNode);this._baseNode=a;this._observer.observe(this._baseNode)};b.prototype._afterTrackCreate=function(a){k.storeNode.call(this,a);w.applyLocal(a);a.addEventListener("pointerdown",this._onTrackPointerDown);this.scheduleRender()};b.prototype._afterSegmentCreate=function(a){this._segmentElements.push(a);w.applyLocal(a);
a.addEventListener("pointerdown",this._onSegmentPointerDown)};b.prototype._afterSegmentRemoved=function(a){var c=this._segmentElements.indexOf(a,0);-1<c&&this._segmentElements.splice(c,1);a.removeEventListener("pointerdown",this._onSegmentPointerDown)};b.prototype._afterAnchorCreate=function(a){this._anchorElements.push(a);w.applyLocal(a);a.addEventListener("pointerdown",this._onAnchorPointerDown);if(this.thumbCreatedFunction){var c=a["data-thumb-index"];this.thumbCreatedFunction(c,a["data-value"],
this._thumbElements[c]||null,this._labelElements[c]||null)}};b.prototype._afterAnchorUpdate=function(a){l.isSome(this._focusedAnchorIndex)&&a["data-thumb-index"]===this._focusedAnchorIndex&&(a.focus(),this._focusedAnchorIndex=null)};b.prototype._afterAnchorRemoved=function(a){var c=this._anchorElements.indexOf(a,0);-1<c&&this._anchorElements.splice(c,1);a.removeEventListener("pointerdown",this._onAnchorPointerDown)};b.prototype._afterThumbCreate=function(a){this._thumbElements.push(a)};b.prototype._afterThumbRemoved=
function(a){a=this._thumbElements.indexOf(a,0);-1<a&&this._thumbElements.splice(a,1)};b.prototype._afterLabelCreate=function(a){this._labelElements.push(a);w.applyLocal(a);a.addEventListener("pointerdown",this._onLabelPointerDown);a.addEventListener("pointerup",this._onLabelPointerUp)};b.prototype._afterLabelRemoved=function(a){var c=this._labelElements.indexOf(a,0);-1<c&&this._labelElements.splice(c,1);a.removeEventListener("pointerdown",this._onLabelPointerDown);a.removeEventListener("pointerup",
this._onLabelPointerUp)};b.prototype._afterInputCreate=function(a){a.focus();a.select();if(this.inputCreatedFunction){var c=a.getAttribute("data-input-type");this.inputCreatedFunction(a,c,"thumb"===c?a["data-input-index"]:null)}};b.prototype._afterTickLineCreate=function(a){var c=a["data-tick-group-index"],d=this._tickElements[a["data-tick-config-index"]];d[c]?d[c].line=a:d[c]={line:a,label:null}};b.prototype._afterTickLabelCreate=function(a){var c=a["data-tick-group-index"],d=this._tickElements[a["data-tick-config-index"]];
d[c]?d[c].label=a:d[c]={label:a,line:null}};b.prototype._afterTickGroupCreate=function(a){var c=a["data-config"];if(c&&c.tickCreatedFunction){var d=a["data-value"];(a=this._tickElements[a["data-tick-config-index"]][a["data-tick-group-index"]])&&c.tickCreatedFunction(d,a.line||null,a.label||null)}};b.prototype._onAnchorKeyDown=function(a){if(!this._isDisabled()&&"editing"!==this.state){var c=a.target,d=u.eventKey(a),c=c["data-thumb-index"],b=this._anchorElements[c],f=this.values[c],h=this._isHorizontalLayout(),
e=["ArrowUp","ArrowDown","ArrowLeft","ArrowRight"];if("Enter"===d&&this.labelInputsEnabled)this._activeLabelInputIndex=c,this.notifyChange("state");else if(-1<e.indexOf(d))a.preventDefault(),d="ArrowUp"===d||"ArrowRight"===d?1:-1,l.isSome(this.steps)?this._toStep(c,this._isReversedLayout()?-1*d:d):(h=this._getPositionOfElement(b),d=this._isHorizontalLayout()?d:-1*d,h+=d,d=0===this.precision?this._positionFromValue(this._valueFromPosition(h)+d):h,this._toPosition(c,d)),d=this.values[c],f!==d&&this._emitThumbChangeEvent({index:c,
oldValue:f,value:d});else if("End"===d||"Home"===d)a.preventDefault(),b=this._getAnchorBoundsInPixels(c),a=b.min,b=b.max,this._toPosition(c,h?"End"===d?b:a:"Home"===d?b:a),d=this.values[c],f!==d&&this._emitThumbChangeEvent({index:c,oldValue:f,value:d})}};b.prototype._onAnchorPointerDown=function(a){if(!this._isDisabled()){var c=a.clientX,d=a.clientY,b=a.target["data-thumb-index"];void 0!==b&&(a.preventDefault(),this._anchorElements[b]&&this._anchorElements[b].focus(),this._storeTrackDimensions(),
this._dragStartInfo={clientX:c,clientY:d,index:b,position:this._getPositionOfElement(this._anchorElements[b])},this.notifyChange("state"),document.addEventListener("pointerup",this._onAnchorPointerUp),document.addEventListener("pointermove",this._onAnchorPointerMove))}};b.prototype._onAnchorPointerMove=function(a){if("editing"!==this.state&&this._dragStartInfo){a.preventDefault();var c=this.values,d=this._dragged,b=this._dragStartInfo,f=this._dragStartInfo,h=f.index,f=f.position,e=a.clientX,g=a.clientY;
a=d?"drag":"start";var k=this._getPositionOfElement(this._anchorElements[h]),b=this._applyPrecisionToPosition(this._isHorizontalLayout()?f+e-b.clientX:f+g-b.clientY);k!==b&&(c=c[h],this._dragged=!0,this._toPosition(h,b),b=this.values[h],d?c!==b&&this._emitThumbDragEvent({index:h,state:a,value:b}):this._emitThumbDragEvent({index:h,state:a,value:c}))}};b.prototype._onAnchorPointerUp=function(a){document.removeEventListener("pointerup",this._onAnchorPointerUp);document.removeEventListener("pointermove",
this._onAnchorPointerMove);if(this._dragStartInfo){a.preventDefault();a=this._dragStartInfo.index;var c=this._dragged;this._dragged=!1;this._dragStartInfo=null;this._lastMovedHandleIndex=a;c?(this.notifyChange("state"),this._emitThumbDragEvent({index:a,state:"stop",value:this.values[a]})):this.scheduleRender()}};b.prototype._onTrackPointerDown=function(a){var c=this._dragStartInfo,d=this.snapOnClickEnabled,b=this.state,f=this.values;if(!this._isDisabled()&&"editing"!==b&&!c&&d&&f.length){var b=this.steps,
c=a.clientX,d=a.clientY,h=this._getCursorPositionFromEvent(a);a=this._valueFromPosition(h);a=this._getIndexOfNearestValue(a);l.isSome(a)&&(f=f[a],b=l.isSome(b)?this._calculateNearestStepPosition(h):h,this._toPosition(a,b),this._dragged=!0,this._dragStartInfo={clientX:c,clientY:d,index:a,position:b},this._focusedAnchorIndex=a,this.notifyChange("state"),this._emitThumbDragEvent({index:a,state:"start",value:f}),c=this.values[a],f!==c&&this._emitThumbDragEvent({index:a,state:"drag",value:c}),document.addEventListener("pointerup",
this._onAnchorPointerUp),document.addEventListener("pointermove",this._onAnchorPointerMove))}};b.prototype._onSegmentPointerDown=function(a){a.preventDefault();var c=this.draggableSegmentsEnabled,d=a.target,b=d["data-segment-index"],f=d["data-min-thumb-index"],d=d["data-max-thumb-index"];!this._isDisabled()&&c&&l.isSome(f)&&l.isSome(d)&&(a.stopPropagation(),this._storeTrackDimensions(),this._segmentDragStartInfo={cursorPosition:this._getCursorPositionFromEvent(a),index:b,details:this._normalizeSegmentDetails({min:this._getAnchorDetails(f),
max:this._getAnchorDetails(d)})},this.notifyChange("state"),this._emitSegmentDragEvent({index:b,state:"start",thumbIndices:[f,d]}),document.addEventListener("pointerup",this._onSegmentPointerUp),document.addEventListener("pointermove",this._onSegmentPointerMove))};b.prototype._onSegmentPointerMove=function(a){if(this._segmentDragStartInfo){a.preventDefault();var c=this._trackHeight,d=this._trackWidth,b=this._segmentDragStartInfo,f=b.index,h=b.cursorPosition,b=b.details,e=b.min,g=b.max,b=e.index,k=
e.position,l=e.value,e=g.index,n=g.position,g=g.value;this._dragged=!0;a=this._getCursorPositionFromEvent(a);if(a!==h){h=this._positionToPercent(h);a=this._positionToPercent(a)-h;h=this._positionToPercent(k)+a;k=this._positionToPercent(n)+a;n=this._getAnchorBoundsAsPercents(b).min;a=this._getAnchorBoundsAsPercents(e).max;var p=!1,q=!1;h<n?p=!0:k>a&&(q=!0);if(p)c=this.viewModel.getBoundsForValueAtIndex(b),f=c.min,c=c.max,f=this._isPositionInverted()?c:f,this._updateAnchorValues([b,e],[f,g+(f-l)]);
else if(q)c=this.viewModel.getBoundsForValueAtIndex(e),f=c.min,c=c.max,f=this._isPositionInverted()?f:c,this._updateAnchorValues([b,e],[l+(f-g),f]);else{var l=this._isHorizontalLayout()?d:c,g=k/100*l,c=this.values,u=[c[b],c[e]],l=this._getValueForAnchorAtPosition(b,h/100*l),g=this._getValueForAnchorAtPosition(e,g);this._updateAnchorValues([b,e],[l,g]);[this.values[b],this.values[e]].every(function(a,c){return a===u[c]})||this._emitSegmentDragEvent({index:f,state:"drag",thumbIndices:[b,e]})}}}};b.prototype._onSegmentPointerUp=
function(a){a.preventDefault();document.removeEventListener("pointerup",this._onSegmentPointerUp);document.removeEventListener("pointermove",this._onSegmentPointerMove);if(this._segmentDragStartInfo){a=this.values;var c=this._segmentDragStartInfo,d=c.index,b=c.details,c=b.min.index,b=b.max.index,f=this.max-this.min,e=a[c];this._lastMovedHandleIndex=e===a[b]?e>f/2?c:b:null;this._dragged=!1;this._segmentDragStartInfo=null;this.notifyChange("state");this._emitSegmentDragEvent({index:d,state:"stop",thumbIndices:[c,
b]})}};b.prototype._storeTrackDimensions=function(){if(this.trackElement){var a=this._getDimensions(this.trackElement);this._trackHeight=a.height;this._trackWidth=a.width}};b.prototype._onLabelPointerDown=function(){this._isDisabled()||(this._dragged=!1,document.addEventListener("pointerup",this._onAnchorPointerUp),document.addEventListener("pointermove",this._onAnchorPointerMove))};b.prototype._onLabelPointerMove=function(){this._isDisabled()||(this._dragged=!0)};b.prototype._onLabelPointerUp=function(a){this._isDisabled()||
(a=a.target["data-thumb-index"],this.labelInputsEnabled&&!this._dragged&&l.isSome(a)&&(this._activeLabelInputIndex=a),this._dragged=!1,this.notifyChange("state"),document.removeEventListener("pointerup",this._onLabelPointerUp),document.removeEventListener("pointermove",this._onLabelPointerMove))};b.prototype._onLabelInputBlur=function(a){var c=this._activeLabelInputIndex,d=this.values,b=this.viewModel;a=a.target.value;this._activeLabelInputIndex=null;this.notifyChange("state");if(a){a=this._parseInputValue(a,
"value",c);var d=d[c],f=this.viewModel.getBoundsForValueAtIndex(c),e=f.max;a<f.min||a>e||(b.setValue(c,a),b=this.values[c],d!==b&&this._emitThumbChangeEvent({index:c,oldValue:d,value:b}))}};b.prototype._onInputKeyDown=function(a){if(!this._isDisabled()){var c=a.target,b=u.eventKey(a),e=this._activeLabelInputIndex,f=this._anchorElements;if("Enter"===b||"Escape"===b||"Tab"===b)a.stopPropagation(),c.blur(),l.isSome(e)?f[e].focus():c.parentElement.focus()}};b.prototype._onMaxLabelClick=function(){!this._isDisabled()&&
this.rangeLabelInputsEnabled&&(this._isMaxInputActive=!0,this.notifyChange("state"))};b.prototype._onMaxLabelKeyDown=function(a){this._isDisabled()||"Enter"!==u.eventKey(a)||(this._isMaxInputActive=!0,this.notifyChange("state"))};b.prototype._onMaxInputBlur=function(a){var c=a.target.value;this._isMaxInputActive=!1;this.notifyChange("state");c&&(a=this.max,c=this._parseInputValue(c,"max"),c<=this.min||(this.viewModel.set("max",c),this.max!==a&&this._emitMaxChangeEvent({oldValue:a,value:this.max})))};
b.prototype._onMinLabelClick=function(){!this._isDisabled()&&this.rangeLabelInputsEnabled&&(this._isMinInputActive=!0,this.notifyChange("state"))};b.prototype._onMinLabelKeyDown=function(a){this._isDisabled()||"Enter"!==u.eventKey(a)||(this._isMinInputActive=!0,this.notifyChange("state"))};b.prototype._onMinInputBlur=function(){var a=event.target.value;this._isMinInputActive=!1;this.notifyChange("state");if(a){var c=this.min,a=this._parseInputValue(a,"min");a>=this.max||(this.viewModel.set("min",
a),this.min!==c&&this._emitMinChangeEvent({oldValue:c,value:this.min}))}};b.prototype._isDisabled=function(){return this.disabled||"disabled"===this.state};b.prototype._positionFromValue=function(a){var c=this.max,b=this.min,e=c-b;if(0===e)return 0;var f=this._trackHeight,h=this._trackWidth,g=this._isHorizontalLayout();a=g?parseFloat((h*(a-b)/e).toFixed(2)):parseFloat((f*(c-a)/e).toFixed(2));this._isReversedLayout()&&(a=g?h-a:f-a);return a};b.prototype._valueFromPosition=function(a){var c=this._trackHeight,
b=this._trackWidth,e=this.max,f=this.min,h=this.precision,g=e-f;a=this._isHorizontalLayout()?a*g/b+f:g*(1E3-a/c*1E3)/1E3+f;this._isReversedLayout()&&(a=e+f-a);return parseFloat(a.toFixed(h))};b.prototype._positionToPercent=function(a){var c=this._trackHeight,b=this._trackWidth,c=this._isHorizontalLayout()?b:c;return this._applyPrecisionToPosition(100*a/c)};b.prototype._applyPrecisionToPosition=function(a){return parseFloat(a.toFixed(this._positionPrecision))};b.prototype._isPositionInverted=function(){var a=
this.layout;return"horizontal-reversed"===a||"vertical"===a};b.prototype._isHorizontalLayout=function(){return-1<this.layout.indexOf("horizontal")};b.prototype._isReversedLayout=function(){return-1<this.layout.indexOf("reversed")};b.prototype._normalizeSegmentDetails=function(a){return this._isPositionInverted()?{min:a.max,max:a.min}:a};b.prototype._parseInputValue=function(a,c,b){return this.inputParseFunction?this.inputParseFunction(a,c,b):this.viewModel.defaultInputParseFunction(a)};b.prototype._formatInputValue=
function(a,c,b){return this.inputFormatFunction?this.inputFormatFunction(a,c,b):this.viewModel.defaultInputFormatFunction(a)};b.prototype._getAnchorDetails=function(a){var c=this._getPositionOfElement(this._anchorElements[a]);return{index:a,position:c,value:this.values[a]}};b.prototype._updateAnchorStyle=function(a,c){if(a=this._anchorElements[a])this._isHorizontalLayout()?a.style.left=""+c:a.style.top=""+c};b.prototype._getStyleForAnchor=function(a,c,b){a=this._getPositionStyleForElement(a);if(1===
this.values.length)return""+a;c=this._zIndices[c];return a+"; z-index: "+(b?this._zIndexOffset+c:c)};b.prototype._getPositionStyleForElement=function(a){a=this._positionFromValue(a);a=this._positionToPercent(a);return(this._isHorizontalLayout()?"left":"top")+": "+(a+"%")};b.prototype._getPositionOfElement=function(a){var c=this._getDimensions(a.offsetParent);a=this._getDimensions(a);return this._isHorizontalLayout()?this._applyPrecisionToPosition(a.left-c.left):this._applyPrecisionToPosition(a.top-
c.top)};b.prototype._updateAnchorValues=function(a,c){var b=this;a.forEach(function(a,d){return b._toValue(a,c[d])})};b.prototype._toValue=function(a,c){if(l.isSome(this.steps)){var b=this._getStepValues();c=this._getIndexOfNearestStepValue(c);c=b[c]}this._updateAnchorStyle(a,this._getPositionStyleForElement(c));this.viewModel.setValue(a,c)};b.prototype._toPosition=function(a,c){c=l.isSome(this.steps)?this._getStepValueForAnchorAtPosition(a,c):this._getValueForAnchorAtPosition(a,c);this._updateAnchorStyle(a,
this._getPositionStyleForElement(c));this.viewModel.setValue(a,c)};b.prototype._getValueForAnchorAtPosition=function(a,c){var b=this._getAnchorBoundsInPixels(a),e=b.min,b=b.max,f=this.viewModel.getBoundsForValueAtIndex(a);a=f.min;var f=f.max,h=null,g;this._isPositionInverted()?(h=a,g=f):(h=f,g=a);h=c>b?h:c<e?g:this._valueFromPosition(c);h>f?h=f:h<a&&(h=a);return h};b.prototype._getStepValueForAnchorAtPosition=function(a,c){var b=this._getStepValues();c=this._calculateNearestStepPosition(c);a=this._getValueForAnchorAtPosition(a,
c);a=this._getIndexOfNearestStepValue(a);return b[a]};b.prototype._getAnchorBoundsAsPercents=function(a){a=this._getAnchorBoundsInPixels(a);var b=a.max;return{min:this._positionToPercent(a.min),max:this._positionToPercent(b)}};b.prototype._getAnchorBoundsInPixels=function(a){var b=this._anchorElements,d=this._trackHeight,e=this._trackWidth,f=this.thumbsConstrained,g=b[a-1];a=b[a+1];d=this._isHorizontalLayout()?e:d;return f?this._isPositionInverted()?{max:g?this._getPositionOfElement(g):d,min:a?this._getPositionOfElement(a):
0}:{max:a?this._getPositionOfElement(a):d,min:g?this._getPositionOfElement(g):0}:{max:d,min:0}};b.prototype._getIndexOfNearestValue=function(a){return this.values.indexOf(this.values.reduce(function(b,d){return Math.abs(d-a)<Math.abs(b-a)?d:b}))};b.prototype._getCursorPositionFromEvent=function(a){var b=this._getDimensions(this.trackElement);return this._isHorizontalLayout()?a.clientX-b.left:a.clientY-b.top};b.prototype._getStepValues=function(){var a=this.steps;if(Array.isArray(a))return a;for(var b=
this.max,d=this.min,e=Math.ceil((b-d)/a),f=[],g=0;g<=e;g++){var k=d+a*g;f.push(k>b?b:k)}return f};b.prototype._toStep=function(a,b){var c=this.viewModel,e=this.values[a],f=this._getStepValues(),g=f.indexOf(e),k=null;-1<g?(b=this._positionFromValue(f[g+b]),k=this._getStepValueForAnchorAtPosition(a,b)):(e=this._getIndexOfNearestStepValue(e),k=f[e+b]);c.setValue(a,k)};b.prototype._getIndexOfNearestStepValue=function(a){if(!l.isSome(this.steps))return null;var b=this._getStepValues(),d=b.reduce(function(b,
c){return Math.abs(c-a)<Math.abs(b-a)?c:b});return b.indexOf(d)};b.prototype._calculateNearestStepPosition=function(a){a=this._valueFromPosition(a);a=this._getIndexOfNearestStepValue(a);var b=this._getStepValues();return this._positionFromValue(b[a])};b.prototype._getTickCounts=function(a,b){b=b.mode;return"count"===b||"position"===b?a||0:"percent"===b?100/a||0:0};b.prototype._calculateTickPositions=function(a){var b=this;return a.map(function(a){return b._positionFromValue(a)})};b.prototype._calculateEquidistantTickPositions=
function(a){var b=this._trackWidth,d=this._trackHeight,b=this._isHorizontalLayout()?b:d,d=b/(a-1),e=[];if(1===a)return[b/2];for(var f=0;f<a;f++){var g=f*d;g<=b&&e.push(g)}return e};b.prototype._getDimensions=function(a){try{return a.getBoundingClientRect()}catch(c){if("object"===typeof c&&null!==c)return{top:0,bottom:0,left:0,width:0,height:0,right:0};throw c;}};b.prototype._emitMaxChangeEvent=function(a){this.emit("max-change",e.__assign(e.__assign({},a),{type:"max-change"}))};b.prototype._emitMinChangeEvent=
function(a){this.emit("min-change",e.__assign(e.__assign({},a),{type:"min-change"}))};b.prototype._emitThumbChangeEvent=function(a){this.emit("thumb-change",e.__assign(e.__assign({},a),{type:"thumb-change"}))};b.prototype._emitThumbDragEvent=function(a){this.emit("thumb-drag",e.__assign(e.__assign({},a),{type:"thumb-drag"}))};b.prototype._emitSegmentDragEvent=function(a){this.emit("segment-drag",e.__assign(e.__assign({},a),{type:"segment-drag"}))};e.__decorate([g.property(),k.renderable()],b.prototype,
"disabled",void 0);e.__decorate([g.property()],b.prototype,"extraNodes",void 0);e.__decorate([g.property(),k.renderable()],b.prototype,"draggableSegmentsEnabled",void 0);e.__decorate([g.property()],b.prototype,"inputCreatedFunction",void 0);e.__decorate([g.aliasOf("viewModel.inputFormatFunction")],b.prototype,"inputFormatFunction",void 0);e.__decorate([g.aliasOf("viewModel.inputParseFunction")],b.prototype,"inputParseFunction",void 0);e.__decorate([g.property({aliasOf:{source:"messages.widgetLabel",
overridable:!0}})],b.prototype,"label",void 0);e.__decorate([g.property()],b.prototype,"labelInputsEnabled",void 0);e.__decorate([g.aliasOf("viewModel.labelFormatFunction")],b.prototype,"labelFormatFunction",void 0);e.__decorate([g.aliasOf("viewModel.labels")],b.prototype,"labels",void 0);e.__decorate([g.property(),k.renderable()],b.prototype,"labelsVisible",null);e.__decorate([g.property({value:"horizontal"}),k.renderable()],b.prototype,"layout",null);e.__decorate([g.aliasOf("viewModel.max")],b.prototype,
"max",void 0);e.__decorate([g.property(),k.renderable(),k.messageBundle("esri/widgets/Slider/t9n/Slider")],b.prototype,"messages",void 0);e.__decorate([g.aliasOf("viewModel.min")],b.prototype,"min",void 0);e.__decorate([g.aliasOf("viewModel.precision")],b.prototype,"precision",void 0);e.__decorate([g.property()],b.prototype,"rangeLabelInputsEnabled",void 0);e.__decorate([g.property(),k.renderable()],b.prototype,"rangeLabelsVisible",null);e.__decorate([g.property()],b.prototype,"snapOnClickEnabled",
void 0);e.__decorate([g.property({dependsOn:["viewModel.state"],readOnly:!0}),k.renderable()],b.prototype,"state",null);e.__decorate([g.property(),k.renderable()],b.prototype,"steps",void 0);e.__decorate([g.aliasOf("viewModel.thumbsConstrained")],b.prototype,"thumbsConstrained",void 0);e.__decorate([g.property()],b.prototype,"thumbCreatedFunction",void 0);e.__decorate([g.property(),k.renderable()],b.prototype,"tickConfigs",void 0);e.__decorate([g.property()],b.prototype,"trackElement",void 0);e.__decorate([g.aliasOf("viewModel.values")],
b.prototype,"values",void 0);e.__decorate([g.property(),k.renderable("viewModel.thumbsConstrained viewModel.max viewModel.min viewModel.precision viewModel.labelFormatFunction viewModel.labels viewModel.values".split(" "))],b.prototype,"viewModel",void 0);e.__decorate([g.property(),k.renderable()],b.prototype,"visibleElements",void 0);e.__decorate([g.cast("visibleElements")],b.prototype,"castVisibleElements",null);return b=e.__decorate([g.subclass("esri.widgets.Slider")],b)}(F)});