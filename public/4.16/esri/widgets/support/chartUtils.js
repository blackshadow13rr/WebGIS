// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../intl ../../core/MapUtils ../../core/promiseUtils ../../core/string @dojo/framework/shim/Promise".split(" "),function(c,g,l,p,h,q,r){function m(a){if(!a)return"en-us";if(k.has(a.toLowerCase()))return a.toLowerCase();a=a.split("-")[0].toLowerCase();for(var b=null,c=0,d=h.keysOfMap(k);c<d.length;c++){var e=d[c];if(r.startsWith(e,a)){b=e;break}}return b||"en-us"}Object.defineProperty(g,"__esModule",{value:!0});var k=h.MapFromValues([["ar",function(){return new Promise(function(a,
b){c(["../../libs/amcharts4/lang/ar"],a,b)})}],["bs-ba",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/bs_BA"],a,b)})}],["ca-es",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/ca_ES"],a,b)})}],["cs-cz",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/cs_CZ"],a,b)})}],["da-dk",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/da_DK"],a,b)})}],["de-de",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/de_DE"],
a,b)})}],["de-ch",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/de_CH"],a,b)})}],["el-gr",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/el_GR"],a,b)})}],["en-us",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/en_US"],a,b)})}],["en-ca",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/en_CA"],a,b)})}],["es-es",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/es_ES"],a,
b)})}],["et-ee",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/et_EE"],a,b)})}],["fi-fi",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/fi_FI"],a,b)})}],["fr-fr",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/fr_FR"],a,b)})}],["he-il",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/he_IL"],a,b)})}],["hr-hr",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/hr_HR"],a,b)})}],
["hu-hu",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/hu_HU"],a,b)})}],["id-id",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/id_ID"],a,b)})}],["it-it",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/it_IT"],a,b)})}],["ja-jp",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/ja_JP"],a,b)})}],["ko-kr",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/ko_KR"],a,b)})}],["lt-lt",
function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/lt_LT"],a,b)})}],["lv-lv",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/lv_LV"],a,b)})}],["nb-no",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/nb_NO"],a,b)})}],["nl-nl",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/nl_NL"],a,b)})}],["pl-pl",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/pl_PL"],a,b)})}],["pt-br",function(){return new Promise(function(a,
b){c(["../../libs/amcharts4/lang/pt_BR"],a,b)})}],["pt-pt",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/pt_PT"],a,b)})}],["ro-ro",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/ro_RO"],a,b)})}],["ru-ru",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/ru_RU"],a,b)})}],["sl-sl",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/sl_SL"],a,b)})}],["sr-rs",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/sr_RS"],
a,b)})}],["sv-se",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/sv_SE"],a,b)})}],["th-th",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/th_TH"],a,b)})}],["tr-tr",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/tr_TR"],a,b)})}],["uk-ua",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/uk_UA"],a,b)})}],["vi-vn",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/vi_VN"],a,
b)})}],["zh-cn",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/zh_Hans"],a,b)})}],["zh-hk",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/zh_Hant"],a,b)})}],["zh-tw",function(){return new Promise(function(a,b){c(["../../libs/amcharts4/lang/zh_Hant"],a,b)})}]]);g.getChartLocale=m;var d,e;g.loadChartsModule=function(a){void 0===a&&(a=p.getLocale());return l.__awaiter(this,void 0,void 0,function(){var b,g,h,n;return l.__generator(this,function(f){switch(f.label){case 0:a=
m(a);if(d&&a===e)return[2,d];d=new Promise(function(a,b){c(["../../libs/amcharts4/index"],a,b)});e=a;f.label=1;case 1:return f.trys.push([1,5,,6]),[4,q.all([d,k.get(e)()])];case 2:return b=f.sent(),g=b[0],h=b[1],e===a&&(g.am4core.options.defaultLocale=h.default),"function"===typeof Object.assign?[3,4]:[4,new Promise(function(a,b){c(["@dojo/framework/shim/object"],a,b)})];case 3:n=f.sent(),Object.defineProperty(Object,"assign",{value:n.assign,writable:!0,configurable:!0}),f.label=4;case 4:return[3,
6];case 5:return f.sent(),e=d=null,[2,null];case 6:return[2,d]}})})}});