// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../assets ../intl ../core/Collection ../core/events ../core/Handles ../core/watchUtils ../core/accessorSupport/decorators ../intl/moment ../libs/sortablejs/Sortable ./Search ./Widget ./Directions/DirectionsViewModel ./Directions/support/CostSummary ./Directions/support/directionsUtils ./Directions/support/maneuverUtils ./Directions/support/RouteSections ./support/DatePicker ./support/TimePicker ./support/widget".split(" "),function(N,O,f,x,u,y,v,z,k,g,A,B,C,D,w,E,p,F,
G,H,I,c){function J(c){c=c.getTimezoneOffset();var b=Math.abs(Math.floor(c)%60);return"GMT"+(0<c?"-":"+")+u.formatNumber(Math.abs(Math.floor(c/60)),q)+u.formatNumber(b,q)}var K=x.getAssetUrl("esri/themes/base/images/maneuvers/"),L={hour:"numeric",minute:"numeric"},q={minimumIntegerDigits:2};return function(q){function b(a,e){var d=q.call(this,a,e)||this;d._autoStopRemovalDelay=100;d._costSummary=new E;d._departureTime="now";d._datePicker=new H;d._handles=new z;d._newPlaceholderStop=null;d._routeSections=
new G;d._stops=new y([{},{}]);d._stopsToSearches=new Map;d._timePicker=new I;d.goToOverride=null;d.iconClass="esri-icon-directions";d.label=void 0;d.lastRoute=null;d.maxStops=null;d.messages=null;d.messagesCommon=null;d.routeServiceUrl=null;d.routeSymbol=null;d.searchProperties=null;d.stopSymbols=null;d.view=null;d.viewModel=new w;d._setUpDragAndDropStops=function(a){d._sortable=B.create(a,{draggable:".esri-directions__stop-row--valid",ghostClass:"esri-directions__stop-row-ghost",handle:".esri-directions__stop-handle",
onEnd:d._handleStopInputDragEnd})};d._handleDragHandlePointerDown=function(){return d._stops.forEach(function(a){return d._acquireSearch(a).activeMenu="none"})};d._handleStopInputDragEnd=function(a){var e=a.oldIndex,c=a.newIndex;a=a.target;if(e!==c){var b=a.children,l=b[e];a.insertBefore(b[c],0>c-e?l.nextElementSibling:l);a=d._stops;a.reorder(a.getItemAt(e),c);d._processStops()}};return d}f.__extends(b,q);b.prototype.loadLocale=function(){return f.__awaiter(this,void 0,void 0,function(){var a;return f.__generator(this,
function(e){switch(e.label){case 0:return a=this,[4,A.loadMoment()];case 1:return a._moment=e.sent(),[2]}})})};b.prototype.initialize=function(){var a=this;this.own([k.init(this,"viewModel.lastRoute",function(){a._routeSections.routePath=a.get("viewModel.directionLines");a._activeManeuver=null;a._focusedManeuver=null;a.scheduleRender()}),k.init(this,"viewModel.selectedTravelMode, viewModel.departureTime",function(){1<a.get("viewModel.stops.length")&&a.getDirections()}),k.when(this,"view",function(e,
d){d&&(a._viewClickHandle=null,a._handles.remove(d));e&&(d=a._prepViewClick(),a._handles.add([v.on(e.surface,"mousedown",function(){return a._autoStopRemovalDelay=500}),v.on(e.surface,"mouseup",function(){return a._autoStopRemovalDelay=100}),d],a.view.surface),a._viewClickHandle=d)}),k.whenOnce(this,"routeServiceUrl",function(){return a.viewModel.load()}),k.watch(this,"viewModel.stops.length",function(e){0===e&&(a._stops.toArray().forEach(function(e){return a._removeStop(e,!0)}),a._stops.addMany([{},
{}]),a.scheduleRender())})])};b.prototype.destroy=function(){this._datePicker.destroy();this._timePicker.destroy();this._stopsToSearches.forEach(function(a){return a.destroy()});this._sortable&&this._sortable.destroy()};b.prototype.getDirections=function(){return null};b.prototype.zoomToRoute=function(){};b.prototype.render=function(){return c.tsx("div",{class:this.classes("esri-directions esri-widget esri-widget--panel","esri-directions__scroller")},this._renderPanelContent())};b.prototype._renderPanelContent=
function(){var a,e=this.viewModel.state,d="initializing"===e,b="error"===e&&!this.viewModel.serviceDescription,h="unauthenticated"===e,e=(a={},a["esri-directions__panel-content--loading"]=d,a["esri-directions__panel-content--error"]=b,a["esri-directions__panel-content--sign-in"]=h,a);a=d?"presentation":"group";d=h?this._renderSignIn():b?this._renderMessage(this._getErrorMessage()):d?this._renderLoader():this._renderReadyContent();return c.tsx("div",{class:this.classes("esri-directions__panel-content",
e),role:a},d)};b.prototype._renderReadyContent=function(){return[this._renderStopsContainer(),this._renderTravelModeOptions(),this._renderDepartureTimeControls(),this._renderSectionSplitter(),this._renderDirectionsContainer(),this._renderDisclaimer()]};b.prototype._renderSignIn=function(){return c.tsx("div",{key:"sign-in",class:"esri-directions__sign-in-content"},c.tsx("h2",{class:this.classes("esri-widget__heading","esri-directions__content-title")},this.messages.widgetLabel),this._renderPlaceholder(),
c.tsx("h3",{class:"esri-widget__heading"},this.messages.signInRequired),c.tsx("button",{class:this.classes("esri-button","esri-button--secondary","esri-directions__sign-in-button"),tabIndex:0,onclick:this._handleSignInClick,bind:this},this.messagesCommon.auth.signIn))};b.prototype._handleSignInClick=function(){this.viewModel.load().catch(function(){})};b.prototype._renderTravelModeOptions=function(){var a=this.viewModel.travelModes;if(0===a.length)return null;var e=this.viewModel.selectedTravelMode,
d=e.name||this.messages.travelMode;return c.tsx("select",{"aria-label":d,bind:this,class:this.classes("esri-directions__travel-modes-select","esri-select"),key:"esri-directions__travel-mode-options",onchange:this._handleTravelModeChange,title:d},a.map(function(a){return c.tsx("option",{key:a,"data-mode":a,selected:a.id===e.id,value:a.id},a.name)}))};b.prototype._handleTravelModeChange=function(a){a=a.currentTarget;a=a.item(a.selectedIndex);this.viewModel.selectedTravelMode=a["data-mode"]};b.prototype._renderStopsContainer=
function(){return c.tsx("div",{class:"esri-directions__section",key:"esri-directions__stops-container",role:"group"},this._renderStops())};b.prototype._renderDepartureTimeControls=function(){var a="now"===this._departureTime,e=this.messages,d=e.departureTime;return c.tsx("div",{class:"esri-directions__departure-time",key:"esri-directions__departure-time-controls",role:"group"},c.tsx("select",{"aria-label":d,bind:this,class:this.classes("esri-directions__departure-time-select","esri-select"),onchange:this._handleDepartureOptionChange,
title:d},c.tsx("option",{value:"now",selected:a},e.leaveNow),c.tsx("option",{value:"depart-by",selected:!a},e.departBy)),a?null:this._renderTimeControls())};b.prototype._renderStops=function(){var a=this,e=this._stops,d=0;e.forEach(function(e){"none"!==a._acquireSearch(e).activeMenu&&(d+=1)});var b=e.toArray().map(function(b,h){var l,f,g,n=e.length,m=1<h&&!b.result,M=(l={},l["esri-icon-radio-unchecked"]=0<=h&&h<n-1,l["esri-icon-radio-checked"]=h===n-1,l);l=(f={},f["esri-directions__stop-icon-container--last"]=
h===n-1,f);f=(g={},g["esri-directions__stop-row--valid"]=!m,g);var k=(g=e.getItemAt(n-1))&&g.result;g=(g=e.getItemAt(h+1))&&g.result;var t=h===n-1,r=h===n-2;g=2===n&&0===h||2<n&&!t&&!r||2<n&&r&&g||2<n&&t&&!b.result;var n=2===n||3===n&&!k||m,m=a._acquireSearch(b),r=a.messages,k=r.removeStop,t=r.reverseStops,p=r.unlocated,r=u.substitute(r.stopLabelTemplate,{number:h+1,label:b.result?b.result.name:p}),p=a.id+"__stop--"+h;b=!!m.searchTerm&&!!m.selectedResult&&!!b.result&&m.selectedResult===b.result;var q=
{zIndex:"none"!==m.activeMenu?""+d--:""};return c.tsx("li",{"aria-label":r,afterCreate:a._handleStopFieldCreation,bind:a,class:a.classes("esri-directions__stop-row",f),id:p,key:h,"data-stop-index":h,styles:q},c.tsx("div",{class:"esri-directions__stop-handle"},c.tsx("span",{"aria-hidden":"true",class:a.classes("esri-directions__stop-icon","esri-icon-handle-vertical","esri-directions__stop-handle-icon","esri-directions__stop-icon--interactive"),onpointerdown:a._handleDragHandlePointerDown}),c.tsx("div",
{bind:a,"aria-labelledby":p,class:a.classes("esri-directions__stop-icon-container",l),"data-stop-index":h,onclick:a._handleStopIconClick,onkeydown:a._handleStopIconClick,role:"button"},c.tsx("span",{class:a.classes("esri-directions__stop-icon",M),tabindex:b?"0":null}))),c.tsx("div",{class:"esri-directions__stop-input"},m.render()),c.tsx("div",{class:"esri-directions__stop-options",role:"group"},c.tsx("div",{"aria-label":k,class:"esri-directions__remove-stop",bind:a,"data-stop-index":h,hidden:n,onkeydown:a._handleRemoveStop,
onclick:a._handleRemoveStop,role:"button",tabIndex:0,title:k},c.tsx("span",{"aria-hidden":"true",class:a.classes("esri-directions__stop-icon","esri-directions__remove-stop-icon","esri-icon-trash","esri-directions__stop-icon--interactive")}),c.tsx("span",{class:"esri-icon-font-fallback-text"},"removeStopTitle")),c.tsx("div",{"aria-label":t,class:"esri-directions__reverse-stops",bind:a,hidden:g,onkeydown:a._handleReverseStops,onclick:a._handleReverseStops,role:"button",tabIndex:0,title:t},c.tsx("span",
{"aria-hidden":"true",class:a.classes("esri-directions__stop-icon","esri-icon-up-down-arrows","esri-directions__stop-icon--interactive")}),c.tsx("span",{class:"esri-icon-font-fallback-text"},"removeStopTitle"))))}),h=e.every(function(e){var b=a._stopsToSearches.get(e);return e.result&&b.selectedResult===e.result}),f=this._stops.length>=this.maxStops,g=this.messages.addStop,h=2<=e.length&&h&&!f?c.tsx("div",{"aria-label":g,bind:this,class:"esri-directions__add-stop",key:"esri-directions__add-stop",
onfocus:this._handleAddStopFocus,tabIndex:0},c.tsx("span",{"aria-hidden":"true",class:this.classes("esri-icon-plus","esri-directions__stop-icon","esri-directions__stop-icon--interactive")}),c.tsx("div",{"aria-hidden":"true",class:"esri-directions__add-stop-text"},g)):null;return c.tsx("div",null,c.tsx("ol",{class:"esri-directions__stops",role:"group",afterCreate:this._setUpDragAndDropStops},b),h)};b.prototype._handleStopIconClick=function(a){(a=this._stops.getItemAt(a.currentTarget["data-stop-index"]))&&
a.result&&this._centerAtStop(a)};b.prototype._handleClearRouteClick=function(){this.viewModel.reset()};b.prototype._centerAtStop=function(a){this.viewModel.centerAt(a.result.feature)};b.prototype._handleStopFieldCreation=function(a){var e=this._newPlaceholderStop;e&&(a=this._stops.getItemAt(a["data-stop-index"]),e===a&&this._acquireSearch(a).focus(),this._newPlaceholderStop=null)};b.prototype._handleStopInputBlur=function(a,e){var b=this;this._handles.remove("awaiting-view-click-stop");this.view.cursor=
this._previousCursor;a.selectedResult&&e.result&&a.selectedResult===e.result||("none"!==a.activeMenu||!a.searchTerm||a.selectedResult===e.result&&(a.selectedResult||e.result)?a.searchTerm||(this._viewClickHandle.resume(),clearTimeout(this._autoStopRemovalTimeoutId),this._autoStopRemovalTimeoutId=setTimeout(function(){b.destroyed||(b._viewClickHandle.pause(),"searching"!==a.viewModel.state&&(b._removeStop(e),e.result&&(e.result=null,b._processStops()),b.scheduleRender()))},this._autoStopRemovalDelay)):
a.search())};b.prototype._handleStopInputFocus=function(a,b){if(!this._handles.has("awaiting-view-click-stop")){var e=this.view,c=this.view.cursor;this._previousCursor=c;this._handles.add(k.init(a,"searchTerm",function(a){e.cursor=0===a.length?"copy":c}),"awaiting-view-click-stop");this._activeStop=b}};b.prototype._prepViewClick=function(){var a=this,b=this.get("viewModel.view"),c=v.pausable(b,"click",this._handleViewClick.bind(this)),l=v.pausable(b.surface,"click",function(){clearTimeout(a._autoStopRemovalTimeoutId);
l.pause()});return{remove:function(){l.remove();c.remove()},pause:function(){l.pause();c.pause()},resume:function(){l.resume();c.resume()}}};b.prototype._handleViewClick=function(a){var b=this,c=this._stopsToSearches.get(this._activeStop);c&&!c.searchTerm&&(c.search(a.mapPoint).then(function(a){a=a.results[0].results[0];var e=b._activeStop;e.result=a;e.result.feature.attributes.Name=a.name;c.searchTerm=a.name}),this.scheduleRender());this._viewClickHandle.pause();clearTimeout(this._autoStopRemovalTimeoutId)};
b.prototype._handleAddStopFocus=function(){this._addNewPlaceholder()};b.prototype._addNewPlaceholder=function(){if(!this._newPlaceholderStop){var a={};this._stops.add(a);this._newPlaceholderStop=a}};b.prototype._handleReverseStops=function(){this._reverseStops()};b.prototype._reverseStops=function(){this._stops.reverse();this._processStops()};b.prototype._handleRemoveStop=function(a){this._removeStop(this._stops.getItemAt(a.currentTarget["data-stop-index"]));this._processStops()};b.prototype._removeStop=
function(a,b){void 0===b&&(b=!1);2>=this._stops.length&&!b||(this._disposeSearch(a),this._stops.remove(a))};b.prototype._handleDepartureOptionChange=function(){var a=this,b=event.currentTarget,b=b.item(b.selectedIndex);"now"===b.value?(this._departureTime="now",this.viewModel.departureTime="now",this._handles.remove("departure-time-controls")):"depart-by"===b.value&&(this._departureTime="depart-by",this._handles.add([k.init(this._datePicker,"value",function(){return a._updateDepartureTime()}),k.init(this._timePicker,
"value",function(){return a._updateDepartureTime()})],"departure-time-controls"))};b.prototype._updateDepartureTime=function(){var a=this._moment(this._datePicker.value),b=this._moment(this._timePicker.value),a=this._moment({date:a.date(),month:a.month(),year:a.year(),hour:b.hour(),minute:b.minute()});this.viewModel.departureTime=a.toDate()};b.prototype._renderTimeControls=function(){return c.tsx("div",{class:"esri-directions__departure-time-controls",key:"esri-directions__time-controls",role:"group"},
this._datePicker.render(),this._timePicker.render())};b.prototype._renderSectionSplitter=function(){return c.tsx("div",{class:"esri-directions__section-splitter"})};b.prototype._renderDisclaimer=function(){var a=this.messages,a=u.substitute(a.disclaimer,{esriTerms:'\x3ca class\x3d"esri-widget__anchor" href\x3d"http://www.esri.com/legal/software-license" rel\x3d"noreferrer" target\x3d"_blank"\x3e'+a.esriTerms+"\x3c/a\x3e"});return c.tsx("div",{class:"esri-directions__disclaimer",innerHTML:a,key:"esri-directions__disclaimer"})};
b.prototype._renderDirectionsContainer=function(){return c.tsx("div",{class:this.classes("esri-directions__directions-section","esri-directions__section"),key:"esri-directions__container"},this._renderDirectionsContainerContent())};b.prototype._renderLoader=function(){return c.tsx("div",{class:"esri-directions__loader",key:"loader"})};b.prototype._renderWarningCard=function(){return c.tsx("div",{class:"esri-directions__warning-card",role:"alert"},c.tsx("div",{class:"esri-directions__warning-header"},
c.tsx("span",{class:"esri-icon-notice-triangle","aria-hidden":"true"}),c.tsx("div",{class:this.classes("esri-widget__heading","esri-directions__warning-heading")},this.messagesCommon.warning)),c.tsx("div",{class:"esri-directions__warning-message"},this._getErrorMessage()))};b.prototype._renderDirectionsContainerContent=function(){var a=this.viewModel,b=a.lastRoute,a=a.state,d="routing"===a;return"error"===a?this._renderWarningCard():d?this._renderLoader():b?c.tsx("div",{class:"esri-directions__summary",
key:"esri-directions__summary",role:"group"},this._renderCosts(),this._renderRouteActions(),this._renderManeuverSections()):c.tsx("div",{key:"esri-directions__placeholder",class:"esri-widget__content--empty"},this._renderPlaceholder(),c.tsx("h3",{class:this.classes("esri-directions__message","esri-widget__heading")},this.messages.directionsPlaceholder))};b.prototype._renderPlaceholder=function(){return c.tsx("svg",{class:"esri-widget__content-illustration--empty",xmlns:"http://www.w3.org/2000/svg",
viewBox:"0 0 256 256"},c.tsx("path",{fill:"currentcolor",d:"M192 36c-15.477 0-24 6.034-24 16.99v45.822l24 24 24-24v-45.82C216 42.033 207.477 36 192 36zm20 61.155l-20 20-20-20V52.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM192 52a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zM92 140.99C92 130.035 83.477 124 68 124s-24 6.034-24 16.99v45.822l24 24 24-24zm-4 44.165l-20 20-20-20V140.99c0-8.62 6.73-12.99 20-12.99s20 4.37 20 12.99zM68 140a12 12 0 1 0 12 12 12.013 12.013 0 0 0-12-12zm0 20a8 8 0 1 1 8-8 8.008 8.008 0 0 1-8 8zm84-44h16v4h-16zm-24 80h4v12h-12v-4h8zm0-28h4v16h-4zm0-52h12v4h-8v8h-4zm0 24h4v16h-4zm-36 64h16v4H92z"}))};
b.prototype._renderMessage=function(a){return c.tsx("h3",null,a)};b.prototype._renderRouteActions=function(){return c.tsx("div",{class:"esri-directions__route-actions"},c.tsx("button",{"aria-label":this.messages.clearRoute,class:this.classes("esri-directions__clear-route-button","esri-button","esri-button--tertiary"),tabIndex:0,onclick:this._handleClearRouteClick,bind:this},this.messages.clearRoute))};b.prototype._renderManeuverSections=function(){var a=this,b=this._routeSections.sections;return c.tsx("div",
{class:"esri-directions__maneuvers",role:"group"},b.map(function(e,l){var d,f,g=e.open,m;0<e.maneuvers.length&&g&&(m=c.tsx("ol",{class:"esri-directions__maneuver-list"},e.maneuvers.map(function(b){return a._renderManeuver(b)})));var k=2<b.length,p=l===b.length-1;l=(d={},d["esri-directions__maneuver-section--collapsible"]=k,d);d=(f={},f["esri-icon-right-triangle-arrow"]=!g,f["esri-icon-down-arrow"]=g,f);k&&!p?(f=g?a.messagesCommon.open:a.messagesCommon.close,e=c.tsx("header",{class:a.classes("esri-directions__maneuver-section-header",
"esri-directions__maneuver-section-toggle"),key:"esri-directions__maneuver-section-header"},c.tsx("div",{"aria-expanded":g,"aria-label":f,bind:a,class:"esri-directions__maneuver-section-header-toggle-button","data-maneuver-section":e,onkeydown:a._handleSectionToggle,onclick:a._handleSectionToggle,role:"button",tabIndex:0,title:f},c.tsx("span",{"aria-hidden":"true",class:a.classes(d)}),c.tsx("h2",{class:a.classes("esri-widget__heading","esri-directions__maneuver-section-title")},e.name)))):e=c.tsx("header",
{class:"esri-directions__maneuver-section-header",key:"esri-directions__maneuver-section-header"},p?c.tsx("span",{"aria-hidden":"true",class:"esri-icon-radio-checked"}):null,c.tsx("h2",{class:a.classes("esri-widget__heading","esri-directions__maneuver-section-title")},e.name));return c.tsx("section",{class:a.classes("esri-directions__maneuver-section",l)},e,m)}))};b.prototype._handleSectionToggle=function(a){a=a.currentTarget["data-maneuver-section"];a.open=!a.open};b.prototype._renderCosts=function(){var a=
this.get("viewModel.directionLines"),b=new Date(a[a.length-1].attributes.arriveTimeUTC),a=this._costSummary.set({directionsViewModel:this.viewModel,messages:this.messages}),d=this.messages,f=d.zoomToRoute,h=u.formatDate(b,L),b=u.substitute(d.etaTemplate,{time:"\x3cstrong\x3e"+h+"\x3c/strong\x3e",gmt:""+J(b)}),h=d.primaryCosts,g=d.secondaryCosts,d=d.eta;return c.tsx("div",{"aria-label":f,bind:this,class:"esri-directions__costs",onkeydown:this._handleSummaryInteraction,onclick:this._handleSummaryInteraction,
role:"button",tabIndex:0,title:f},c.tsx("div",{class:"esri-directions__costs-details",role:"group"},c.tsx("div",{"aria-label":h,class:"esri-directions__costs-value",title:h},a.primary),c.tsx("div",{class:"esri-directions__vertical-splitter"}),c.tsx("div",{"aria-label":g,class:"esri-directions__other-costs-total",title:g},a.secondary)),c.tsx("div",{"aria-label":d,innerHTML:b,title:d}))};b.prototype._handleSummaryInteraction=function(){this._focusedManeuver=this._activeManeuver=null;this.viewModel.clearHighlights();
this.zoomToRoute()};b.prototype._getErrorMessage=function(){var a=this.messages,b=this.viewModel.error;return"directions-view-model:unable-to-route"===b.name?a.errors.unableToRoute:"directions-view-model:service-metadata-unavailable"===b.name?a.errors.unableToLoadServiceMetadata:a.errors.unknownError};b.prototype._normalizeSearchSources=function(a){this._overrideDefaultSources(a);this._ensureLocationTypeOnLocatorSources(a)};b.prototype._overrideDefaultSources=function(a){a.viewModel.defaultSources.forEach(function(a){a.autoNavigate=
!1})};b.prototype._ensureLocationTypeOnLocatorSources=function(a){a=a.allSources;0!==a.length&&a.forEach(function(a){"locator"in a&&a.locator&&null===a.locationType&&(a.locationType="street")})};b.prototype._acquireSearch=function(a){var b=this,c=this.get("viewModel.view");if(this._stopsToSearches.has(a)){var g=this._stopsToSearches.get(a);g.view=c;this._overrideDefaultSources(g);return g}var h=new C(f.__assign({view:c,resultGraphicEnabled:!1,popupEnabled:!1},this.searchProperties));this._normalizeSearchSources(h);
this._handles.add([k.on(h,"allSources","change",function(){return b._normalizeSearchSources(h)}),h.on("select-result",function(){a.result=h.selectedResult;a.result.feature.attributes.Name=h.selectedResult.name;b._processStops();b.scheduleRender()}),h.on("search-focus",function(){return b._handleStopInputFocus(h,a)}),h.on("search-blur",function(){return b._handleStopInputBlur(h,a)})],h);this._stopsToSearches.set(a,h);return h};b.prototype._disposeSearch=function(a){this._stopsToSearches.get(a).destroy();
this._stopsToSearches.delete(a)};b.prototype._processStops=function(){var a=this.viewModel;a.stops.removeAll();a.stops.addMany(this._stops.filter(function(a){return!!a.result}).map(function(a){return a.result.feature}));1<a.stops.length&&a.getDirections()};b.prototype._renderManeuver=function(a){var b,d,f=a.attributes,h=this.get("viewModel.routeParameters.directionsLengthUnits"),g=this.messages,h=p.formatDistance(g,f.length,{toUnits:h}),k=p.formatTime(f.time),m=p.getAssociatedStop(a);p.useSpatiallyLocalTime(a,
this.get("viewModel.routeParameters.startTime"))?d=p.toSpatiallyLocalTimeString(g,f.arriveTimeUTC,f.ETA,"now"===this._departureTime):h&&(d=k?h+"\x26nbsp;\x26middot;\x26nbsp;"+k:h);h=this._getFormattedManeuverText(a);f=this._getIconPath(f.maneuverType);if(m)return c.tsx("li",{class:"esri-directions__maneuver",key:a},c.tsx("header",null,m.attributes.Name));var m="esri-directions__maneuver-"+a.uid,k="esri-directions__cumulative-costs-"+a.uid,t="esri-directions__intermediate-costs-"+a.uid,q=(b={},b["esri-directions__maneuver--active"]=
this._activeManeuver===a,b);return c.tsx("li",{"aria-labelledby":m+" "+k+" "+t,bind:this,class:this.classes("esri-directions__maneuver",q),"data-maneuver":a,key:a,onclick:this._handleManeuverClick,onkeydown:this._handleManeuverClick,onfocus:this._handleManeuverFocus,onmouseover:this._handleManeuverMouseOver,onmouseout:this._handleManeuverMouseOut,onblur:this._handleManeuverBlur,tabIndex:0},c.tsx("img",{alt:"",class:"esri-directions__maneuver-icon",src:f}),c.tsx("div",{class:"esri-directions__maneuver-costs-container"},
c.tsx("span",{id:m,innerHTML:h}),c.tsx("div",{class:"esri-directions__maneuver-costs"},c.tsx("div",{class:"esri-directions__horizontal-splitter"}),c.tsx("div",{id:k,"aria-label":g.cumulativeCosts,class:"esri-directions__cost--cumulative",innerHTML:"",title:g.cumulativeCosts}),c.tsx("div",{id:t,"aria-label":g.intermediateCosts,class:"esri-directions__cost--intermediate",innerHTML:d,title:g.intermediateCosts}))))};b.prototype._getIconPath=function(a){a=F.toIconName(a);return""+K+a+(2===window.devicePixelRatio?
"@2x":"")+".png"};b.prototype._handleManeuverClick=function(a){a=a.currentTarget["data-maneuver"];this._activeManeuver===a?(this._activeManeuver=null,this.zoomToRoute()):(this._activeManeuver=a,this.viewModel.centerAt(a),this.viewModel.highlightSegment(a))};b.prototype._handleManeuverMouseOver=function(a){this._activeManeuver||this._focusedManeuver||this.viewModel.highlightSegment(a.currentTarget["data-maneuver"])};b.prototype._handleManeuverMouseOut=function(){this._activeManeuver||this._focusedManeuver||
this.viewModel.clearHighlights()};b.prototype._handleManeuverBlur=function(){this._activeManeuver||(this._focusedManeuver=null,this.viewModel.clearHighlights())};b.prototype._handleManeuverFocus=function(a){this._activeManeuver||(this._focusedManeuver=a=a.currentTarget["data-maneuver"],this.viewModel.highlightSegment(a))};b.prototype._getFormattedManeuverText=function(a){var b=a.attributes.text;a=a.strings;if(!a)return b;var c=b;a.forEach(function(a){c=c.replace(a.string,"\x3cstrong\x3e"+a.string+
"\x3c/strong\x3e")});return c};f.__decorate([g.aliasOf("viewModel.goToOverride")],b.prototype,"goToOverride",void 0);f.__decorate([g.property()],b.prototype,"iconClass",void 0);f.__decorate([g.property({aliasOf:{source:"messages.widgetLabel",overridable:!0}})],b.prototype,"label",void 0);f.__decorate([g.aliasOf("viewModel.lastRoute")],b.prototype,"lastRoute",void 0);f.__decorate([g.aliasOf("viewModel.maxStops")],b.prototype,"maxStops",void 0);f.__decorate([g.property(),c.renderable(),c.messageBundle("esri/widgets/Directions/t9n/Directions")],
b.prototype,"messages",void 0);f.__decorate([g.property(),c.renderable(),c.messageBundle("esri/t9n/common")],b.prototype,"messagesCommon",void 0);f.__decorate([g.aliasOf("viewModel.routeServiceUrl")],b.prototype,"routeServiceUrl",void 0);f.__decorate([g.aliasOf("viewModel.routeSymbol")],b.prototype,"routeSymbol",void 0);f.__decorate([g.property()],b.prototype,"searchProperties",void 0);f.__decorate([g.aliasOf("viewModel.stopSymbols")],b.prototype,"stopSymbols",void 0);f.__decorate([g.aliasOf("viewModel.view")],
b.prototype,"view",void 0);f.__decorate([c.renderable(["lastRoute","state","travelModes"]),g.property({type:w})],b.prototype,"viewModel",void 0);f.__decorate([g.aliasOf("viewModel.getDirections")],b.prototype,"getDirections",null);f.__decorate([g.aliasOf("viewModel.zoomToRoute")],b.prototype,"zoomToRoute",null);f.__decorate([c.accessibleHandler()],b.prototype,"_handleStopIconClick",null);f.__decorate([c.accessibleHandler()],b.prototype,"_handleClearRouteClick",null);f.__decorate([c.accessibleHandler()],
b.prototype,"_handleReverseStops",null);f.__decorate([c.accessibleHandler()],b.prototype,"_handleRemoveStop",null);f.__decorate([c.accessibleHandler()],b.prototype,"_handleSectionToggle",null);f.__decorate([c.accessibleHandler()],b.prototype,"_handleSummaryInteraction",null);f.__decorate([c.accessibleHandler()],b.prototype,"_handleManeuverClick",null);return b=f.__decorate([g.subclass("esri.widgets.Directions")],b)}(D)});