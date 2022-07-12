//>>built
define(["../errors/RequestError","./watch","./handlers","./util","../has"],function(p,x,q,g,r){function y(a,b){var c=a.xhr;a.status=a.xhr.status;try{a.text=c.responseText}catch(d){}"xml"===a.options.handleAs&&(a.data=c.responseXML);var h;if(b)this.reject(b);else{try{q(a)}catch(d){h=d}g.checkStatus(c.status)?h?this.reject(h):this.resolve(a):(b=h?new p("Unable to load "+a.url+" status: "+c.status+" and an error in handleAs: transformation of response",a):new p("Unable to load "+a.url+" status: "+c.status,
a),this.reject(b))}}function z(a){return this.xhr.getResponseHeader(a)}function m(a,b,c){var h=b&&b.data&&b.data instanceof FormData,d=g.parseArgs(a,g.deepCreate(A,b),h);a=d.url;b=d.options;var B=!b.data&&"POST"!==b.method&&"PUT"!==b.method;10>=r("ie")&&(a=a.split("#")[0]);var l,f=g.deferred(d,u,v,C,y,function(){l&&l()}),e=d.xhr=m._create();if(!e)return f.cancel(new p("XHR was not created")),c?f:f.promise;d.getHeader=z;t&&(l=t(e,f,d,b.uploadProgress));var D="undefined"===typeof b.data?null:b.data,
E=!b.sync,q=b.method;try{e.open(q,a,E,b.user||void 0,b.password||void 0);b.withCredentials&&(e.withCredentials=b.withCredentials);b.handleAs in w&&(e.responseType=w[b.handleAs]);var k=b.headers;a=h||B?!1:"application/x-www-form-urlencoded";if(k)for(var n in k)"content-type"===n.toLowerCase()?a=k[n]:k[n]&&e.setRequestHeader(n,k[n]);a&&!1!==a&&e.setRequestHeader("Content-Type",a);k&&"X-Requested-With"in k||e.setRequestHeader("X-Requested-With","XMLHttpRequest");g.notify&&g.notify.emit("send",d,f.promise.cancel);
e.send(D)}catch(F){f.reject(F)}x(f);e=null;return c?f:f.promise}r.add("dojo-force-activex-xhr",function(){return 0});var w={blob:"blob",document:"document",arraybuffer:"arraybuffer"},v,C,t,u;v=function(a){return!this.isFulfilled()};u=function(a,b){b.xhr.abort()};t=function(a,b,c,h){function d(a){b.handleResponse(c)}function g(a){a=new p("Unable to load "+c.url+" status: "+a.target.status,c);b.handleResponse(c,a)}function l(a,d){c.transferType=a;d.lengthComputable?(c.loaded=d.loaded,c.total=d.total,
b.progress(c)):3===c.xhr.readyState&&(c.loaded="loaded"in d?d.loaded:d.position,b.progress(c))}function f(a){return l("download",a)}function e(a){return l("upload",a)}a.addEventListener("load",d,!1);a.addEventListener("error",g,!1);a.addEventListener("progress",f,!1);h&&a.upload&&a.upload.addEventListener("progress",e,!1);return function(){a.removeEventListener("load",d,!1);a.removeEventListener("error",g,!1);a.removeEventListener("progress",f,!1);a.upload.removeEventListener("progress",e,!1);a=null}};
var A={data:null,query:null,sync:!1,method:"GET"};m._create=function(){throw Error("XMLHTTP not available");};r("dojo-force-activex-xhr")||(m._create=function(){return new XMLHttpRequest});g.addCommonMethods(m);return m});