//>>built
define(["dojo/_base/declare","dojo/_base/window","dojo/_base/array","dojo/dom-construct","./common"],function(d,e,b,f,c){return d(null,{postCreate:function(){this.inherited(arguments);!this.textDir&&this.getParent()&&this.getParent().get("textDir")&&this.set("textDir",this.getParent().get("textDir"))},_setTextDirAttr:function(a){!a||this._created&&this.textDir===a||(this.textDir=a,this._setTextDirToNodes(this.textDir))},_setTextDirToNodes:function(a){b.forEach(this.panelNodes,function(a){b.forEach(a.childNodes,
function(a,b){a.innerHTML=c.removeUCCFromText(a.innerHTML);a.innerHTML=c.enforceTextDirWithUcc(a.innerHTML,this.textDir);a.style.textAlign="rtl"===this.dir.toLowerCase()?"right":"left"},this)},this)}})});