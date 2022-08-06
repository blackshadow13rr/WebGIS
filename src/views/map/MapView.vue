<template>
  <div id="MapView"></div>
</template>

<script>
import { loadModules } from "esri-loader";
export default {
  name: "MapView",
  methods: {
    createView() {
      var options = {
        url: "https://js.arcgis.com/4.24/",
        css: "https://js.arcgis.com/4.24/esri/themes/light/main.css",
      };

      loadModules(
        [
          "esri/config",
          "esri/Map",
          "esri/views/MapView",
          "esri/widgets/Home",
          "esri/layers/FeatureLayer",
          "esri/widgets/LayerList",
          "esri/widgets/Search",
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
            LayerList,
            Search,
            // Basemap,
            // TileLayer,
          ]) => {
            esriConfig.apiKey =
              "AAPK37853f2d8fd242f6ad9df392845bb0855YYrv-aaUh64MrNqmp51tQ6FZBa-YBx9mlRhkoWfEq0QOAMSzDrRbVxMEBBRfVXV";
            var map = new Map({
              basemap: "osm",
            });
            var view = new MapView({
              container: "MapView",
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

            //控制图层显示或隐藏
            var layerList = new LayerList({
              view: view,
              listItemCreatedFunction: (e) => {
                let item = e.item;
                if (item.title.match(/.+NucleicacidTest/g)) {
                  item.title = "核酸检测点";
                }
                if (item.title.match(/.+XYsm/g)) {
                  item.title = "超市";
                }
                if (item.title.match(/.+XYhos/g)) {
                  item.title = "医院";
                }
              },
            });
            view.ui.add(layerList, "bottom-right");

            //分别添加图层
            var supermarketLayer = new FeatureLayer({
              url: "https://localhost:6443/arcgis/rest/services/Point/Point/MapServer/4",
            });
            map.add(supermarketLayer);
            var hospitalLayer = new FeatureLayer({
              url: "https://localhost:6443/arcgis/rest/services/Point/Point/MapServer/3",
            });
            map.add(hospitalLayer);
            var nucleicacidTestLayer = new FeatureLayer({
              url: "https://localhost:6443/arcgis/rest/services/Point/Point/MapServer/2",
            });
            map.add(nucleicacidTestLayer);
            //搜索图层
            var searchWidget = new Search({
                view: view,
                sources: [{
                layer: new FeatureLayer({
                  url: "https://localhost:6443/arcgis/rest/services/Point/Point/MapServer/4",
                }),
                maxResults: 100,
                name: "超市",
              },
              {
                layer: new FeatureLayer({
                  url: "https://localhost:6443/arcgis/rest/services/Point/Point/MapServer/3",
                }),
                name: "医院",
              },
              {
                layer: new FeatureLayer({
                  url: "https://localhost:6443/arcgis/rest/services/Point/Point/MapServer/2",
                }),
                name: "核酸检测点",
              },]

            });
            // Adds the search widget below other elements in
            // the top left corner of the view
            view.ui.add(searchWidget, {
                position: "top-right",
                index: 2
            });
            //添加动态特效
            let highlight;
            let lastUid;
            //鼠标移动的事件
            view.on("pointer-move", (event) => {
              view.hitTest(event, {}).then(function (res) {
                const graphic = getGraphic(res);
                if (graphic && graphic.uid !== lastUid) {
                  showHighlight(graphic);
                  lastUid = graphic.uid;
                } else {
                  showHighlight(null);
                }
              });
            });
            view.popup.watch("visible", (visible) => {
              if (!visible) {
                showHighlight(null);
              }
            });

            //根据鼠标移动获取几何图形
            function getGraphic(response) {
              let graphic;
              if (
                response.results.length &&
                (response.results[0].graphic.layer === supermarketLayer ||
                  response.results[0].graphic.layer === hospitalLayer ||
                  response.results[0].graphic.layer === nucleicacidTestLayer)
              ) {
                graphic = response.results[0].graphic;
              }
              return graphic;
            }

            //高亮显示鼠标覆盖的图形
            function showHighlight(graphic) {
              if (highlight) {
                highlight.remove();
              }
              if (graphic) {
                view.whenLayerView(graphic.layer).then(function (layerView) {
                  highlight = layerView.highlight(graphic);
                });
              }
            }

            view.ui.remove("attribution");
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
#MapView {
  padding: 0;
  margin: 0;
  width: 100%;
  height: 100%;
}
</style>