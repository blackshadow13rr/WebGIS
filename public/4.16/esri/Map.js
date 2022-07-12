// All material copyright ESRI, All Rights Reserved, unless otherwise specified.
// See https://js.arcgis.com/4.16/esri/copyright.txt for details.
//>>built
define("require exports tslib ./Basemap ./Ground ./core/Accessor ./core/CollectionFlattener ./core/Evented ./core/Logger ./core/accessorSupport/decorators ./support/basemapUtils ./support/groundUtils ./support/LayersMixin".split(" "), function (t, u, c, h, e, k, l, m, n, d, f, p, q) {
    var r = n.getLogger("esri.Map"); return function (g) {
        function b(a) { a = g.call(this, a) || this; a.basemap = null; a.ground = new e; a._basemapCache = f.createCache(); return a } c.__extends(b, g); Object.defineProperty(b.prototype, "allLayers", {
            get: function () {
                return new l({
                    root: this,
                    rootCollectionNames: ["basemap.baseLayers", "ground.layers", "layers", "basemap.referenceLayers"], getChildrenFunction: function (a) { return a.layers }
                })
            }, enumerable: !0, configurable: !0
        }); b.prototype.castBasemap = function (a) { return f.ensureType(a, this._basemapCache) }; b.prototype.castGround = function (a) { a = p.ensureType(a); return a ? a : (r.error("Map.ground may not be set to null or undefined"), this._get("ground")) }; b.prototype.findLayerById = function (a) { return this.allLayers.find(function (b) { return b.id === a }) }; c.__decorate([d.property({ readOnly: !0 })],
            b.prototype, "allLayers", null); c.__decorate([d.property({ type: h })], b.prototype, "basemap", void 0); c.__decorate([d.cast("basemap")], b.prototype, "castBasemap", null); c.__decorate([d.property({ type: e, nonNullable: !0 })], b.prototype, "ground", void 0); c.__decorate([d.cast("ground")], b.prototype, "castGround", null); return b = c.__decorate([d.subclass("esri.Map")], b)
    }(q.LayersMixin(m.EventedMixin(k)))
});