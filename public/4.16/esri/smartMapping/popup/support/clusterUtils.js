// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../../PopupTemplate ../../../intl/messages ../../../intl/substitute ../../../layers/support/fieldUtils ../../../popup/ExpressionInfo ../../../popup/FieldInfo ../../../popup/support/FieldInfoFormat ../../support/clusterUtils ../../../views/2d/layers/support/clusterUtils".split(" "),function(N,q,r,H,I,x,y,J,K,L,d,M){function z(a){var b=a.fieldName,m=a.label;a=a.type;var c=-1<y.numericTypes.indexOf(a),b=new K({fieldName:b,label:m,visible:!0,format:c?{places:"integer"===
a||"small-integer"===a?0:2,digitSeparator:!0}:null});"date"===a&&(b.format=new L({dateFormat:"short-date-short-time"}));return b}function t(a,b){return(a=b.getField(a))&&(a.alias||a.name)}function E(a,b,m,c){var g=b.attributeInfo,d=b.statisticType,h=g.field;b=g.normalizationField;var e="",f;"avg"===d?f=b?c.clusters.avgNormFieldSummary:c.clusters.avgFieldSummary:"type"===d&&(f=c.clusters.predominantFieldSummary);f&&(c=g.valueExpression?g.valueExpressionTitle:t(h,a),a=b&&t(b,a),e=x.substitute(f,{fieldLabel:c||
"",normFieldLabel:a||"",fieldValue:"{"+m+"}"}));return e}Object.defineProperty(q,"__esModule",{value:!0});q.createPopupTemplate=function(a,b){return r.__awaiter(this,void 0,void 0,function(){var m,c,g,q,h,e,f,u,A,k,v,F,n,B,C;return r.__generator(this,function(l){switch(l.label){case 0:if(!M.isClusterCompatibleRenderer(b))return[2,null];m=d.getStatisticInfos(a,b);return[4,I.loadMessageBundle("esri/smartMapping/t9n/smartMapping")];case 1:c=l.sent();g=c.clusters.predominantNoneValue;q="unique-value"===
b.type?b.uniqueValueInfos:[];h=[];e=[];f=[];h.push(x.substitute(c.clusters.countSummary,{count:"{"+d.clusterCountField+"}"}));e.push(z({fieldName:d.clusterCountField,label:c.clusters.numFeatures,type:"integer"}));u=0;for(A=m;u<A.length;u++){k=A[u];v=k.statisticType;F=k.attributeInfo;n=d.getClusterField(F,v);var w=a,p=k.attributeInfo,r=k.statisticType,y=p.field,D=p.normalizationField,G="";l=void 0;"avg"===r?l=D?c.clusters.avgNormFieldLabel:c.clusters.avgFieldLabel:"type"===r&&(l=c.clusters.predominantFieldLabel);
l&&(p=p.valueExpression?p.valueExpressionTitle:t(y,w),w=D&&t(D,w),G=x.substitute(l,{fieldLabel:p||"",normFieldLabel:w||""}));B=G;"avg"===v?(h.push(E(a,k,n,c)),e.push(z({fieldName:n,label:B,type:"double"}))):"type"===v&&(C="expression/"+n,h.push(E(a,k,C,c)),f.push(new J({name:n,title:B,returnType:"string",expression:d.getPredominantTypeExpression(q,n,g)})),e.push(z({fieldName:C})))}return[2,new H({fieldInfos:e,expressionInfos:f,content:h.join("\x3cbr/\x3e\x3cbr/\x3e")})]}})})}});