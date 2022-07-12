// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ../../core/Error ../../core/maybe ./support/utils ../support/utils".split(" "),function(w,x,b,k,t,u,l){function v(a){return b.__awaiter(this,void 0,void 0,function(){var c,f,d,g,n,h,e,p,q,r;return b.__generator(this,function(m){switch(m.label){case 0:if(!a||!a.layer||!a.field&&!a.valueExpression)throw new k("unique-values:missing-parameters","'layer' and 'field' or 'valueExpression' parameters are required");f=(c=a.valueExpression||a.sqlExpression)&&!a.sqlExpression;
if(c)if(f){if(!a.view)throw new k("unique-values:missing-parameters","View is required when 'valueExpression' is specified");}else if(!a.valueExpression)throw new k("unique-values:missing-parameters","'valueExpression' parameters are required");d=[0,2,1,3,4];g=a.layer;n=b.__rest(a,["layer"]);h=l.createLayerAdapter(g,d);e=b.__assign({layerAdapter:h},n);if(!h)throw new k("unique-values:invalid-parameters","'layer' must be one of these types: "+l.getLayerTypeLabels(d).join(", "));p=t.isSome(e.signal)?
{signal:e.signal}:null;return[4,h.load(p)];case 1:return m.sent(),[4,l.getFieldsList({field:e.field,valueExpression:e.valueExpression})];case 2:q=m.sent();if(r=u.verifyBasicFieldValidity(h,q,"unique-values:invalid-parameters"))throw r;return[2,e]}})})}return function(a){return b.__awaiter(this,void 0,void 0,function(){var c,f,d;return b.__generator(this,function(g){switch(g.label){case 0:return[4,v(a)];case 1:return c=g.sent(),f=c.layerAdapter,d=b.__rest(c,["layerAdapter"]),[2,f.uniqueValues(d)]}})})}});