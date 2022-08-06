<template>
  <div id="MapRoute"></div>
</template>

<script>
import { loadModules } from "esri-loader";
export default {
  name: "MapRoute",
  methods: {
    createView() {
      var options = {
        url: "https://js.arcgis.com/4.16/init.js",
        css: "https://js.arcgis.com/4.16/esri/themes/light/main.css",
      };

      loadModules(
        [
          "esri/config",
          "esri/Map",
          "esri/views/MapView",
          "esri/widgets/Home",
          "esri/layers/FeatureLayer",
          "esri/widgets/Directions",
          // "esri/Basemap",
          // "esri/layers/TileLayer",
        ],
        options
      )
        .then(
          ([
            esriConfig,
            Map,
            MapView,
            Home,
            FeatureLayer,
            Directions,
            // Basemap,
            // TileLayer,
          ]) => {
            esriConfig.apiKey =
              "AAPK37853f2d8fd242f6ad9df392845bb0855YYrv-aaUh64MrNqmp51tQ6FZBa-YBx9mlRhkoWfEq0QOAMSzDrRbVxMEBBRfVXV";

            // var layer = new TileLayer({
            //   url: "https://map.geoq.cn/ArcGIS/rest/services/ChinaOnlineStreetGray/MapServer",
            // });
            // var customBasemap = new Basemap({
            //   baselayers: [layer],
            // });

            var map = new Map({
              basemap: "osm",
            });
            var view = new MapView({
              container: "MapRoute",
              map: map,
              center: [104.08, 30.68],
              zoom: 13,
            });

            //全图按钮
            var homeBtn = new Home({
              view: view,
            });
            view.ui.add(homeBtn, "top-left");
            //弹出窗口
            var popup = view.popup;
            popup.actions = [];
            popup.dockEnable = true;
            popup.dockOptions = {
              breakpoints: false,
              buttonEnabled: false,
            };
            popup.defaultPopupTemplateEnabled = true;

            var supermarketLayer = new FeatureLayer({
              url: "http://43.142.31.47:6080/arcgis/rest/services/C991/MapServer/0",
            });
            map.add(supermarketLayer);
            var hospitalLayer = new FeatureLayer({
              url: "http://43.142.31.47:6080/arcgis/rest/services/C991/MapServer/1",
            });
            map.add(hospitalLayer);

            const directionsWidget = new Directions({
                routeServiceUrl: "http://43.142.31.47:6080/arcgis/rest/services/C991Network/NAServer/route",
                view: view
            });
            view.ui.add(directionsWidget, {
                position: "top-right"
            });
          }
        )
        .catch((e) => {
          console.log("出现错误" + e.message);
        });
    },
  },
  mounted: function () {
    this.createView();
  },
  beforeDestory() {
    if (this.view) {
      this.view.container = null;
    }
  },
};
</script>

<style scoped>
#MapRoute {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>