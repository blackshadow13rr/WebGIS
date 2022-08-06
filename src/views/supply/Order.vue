<template>
  <div id="MapView"></div>
  <!-- <supply id="orderlist"></supply> -->
  <div id="orderlist">
    <el-card class="box-card">
      <el-button @click="getOrder">刷新订单</el-button>
      <el-button id="getlocation" type="success">
        <el-icon>
          <AddLocation />
        </el-icon>
      </el-button>
      <el-table :data="tableData" style="width: 100%">
        <el-table-column prop="Oid" label="订单编号" width="200" />
        <el-table-column prop="Oaddress" label="订单地址" width="250" />
        <el-table-column
          prop="Ostate"
          label="状态"
          width="100"
          :filters="[
            { text: '待处理', value: '待处理' },
            { text: '进行中', value: '进行中' },
            { text: '已完成', value: '已完成' },
          ]"
          :filter-method="filterTag"
          filter-placement="bottom-end"
        >
        </el-table-column>
      </el-table>
    </el-card>
  </div>
  <el-card id="buffermenu">
    <el-form :model="form" label-width="0px">
      <el-form-item>
        <div id="sketchbox"></div>
      </el-form-item>
      <el-form-item>
        <div id="sliderbox"></div>
        <!-- <el-select v-model="radius" placeholder="please select your zone">
          <el-option label="300m" value="300" />
          <el-option label="400m" value="400" />
          <el-option label="500m" value="500" />
          <el-option label="600m" value="600" />
        </el-select> -->
      </el-form-item>
    </el-form>
    <el-form :model="form" label-width="120px">
      <el-form-item>
        <el-button type="primary" id="createbuffer">创建</el-button>
        <el-button id="clearGeometry">清空</el-button>
      </el-form-item>
    </el-form>
  </el-card>
</template>

<script>
import { loadModules } from "esri-loader";
import { GetOrderPoint, GetOrderList } from "@/../api/admin";
import { reactive, toRefs } from "vue";
import { AddLocation, Edit } from "@element-plus/icons-vue";
import Supply from "@/views/supply/Supply.vue";
export default {
  name: "MapView",
  components: {
    Supply,
    AddLocation,
    Edit,
  },
  setup() {
    const filterTag = (value, row) => {
      return row.Ostate === value;
    };
    let data = reactive({
      tableData: [],
      Ostate: "",
    });
    /* let tableData = []; */
    let getinfo = (row) => {
      console.log(row);
    };
    let getOrder = async () => {
      let Order = await GetOrderList();
      data.tableData = Order;
    };
    return { ...toRefs(data), getOrder, filterTag, getinfo };
  },
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
          "esri/geometry/Point",
          "esri/symbols/SimpleMarkerSymbol",
          "esri/Graphic",
          "esri/widgets/Expand",
          "esri/layers/GraphicsLayer",
          "esri/widgets/Sketch",
          "esri/widgets/Sketch/SketchViewModel",
          "esri/widgets/Slider",
          "esri/geometry/geometryEngine",
          "esri/rest/support/Query",
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
            Point,
            SimpleMarkerSymbol,
            Graphic,
            Expand,
            GraphicsLayer,
            Sketch,
            SketchViewModel,
            Slider,
            geometryEngine,
            Query,
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
            //添加绘制图层
            var sketchLayer = new GraphicsLayer();
            var bufferLayer = new GraphicsLayer();
            view.map.addMany([bufferLayer, sketchLayer]);
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
                if (item.title === "Point") {
                  item.title = "超市";
                }
              },
            });
            view.ui.add(layerList, "bottom-right");

            //分别添加图层
            var supermarketLayer = new FeatureLayer({
              url: "https://localhost:6443/arcgis/rest/services/Point/Point/MapServer/4",
            });
            map.add(supermarketLayer);
            //搜索图层
            var searchWidget = new Search({
              view: view,
              sources: [
                {
                  layer: new FeatureLayer({
                    url: "https://localhost:6443/arcgis/rest/services/Point/Point/MapServer/4",
                  }),
                  maxResults: 100,
                  name: "超市",
                },
              ],
            });
            //搜索建立缓冲区
            searchWidget.on("select-result", function (event) {
              createbufferBtn.addEventListener("click", () => {
                view.graphics.removeAll();
                createBuffer(event.result.feature.geometry);
              });
            });
            // Adds the search widget below other elements in
            // the top left corner of the view
            view.ui.add(searchWidget, {
              position: "top-right",
              index: 2,
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
                response.results[0].graphic.layer === supermarketLayer
              ) {
                graphic = response.results[0].graphic;
              }
              return graphic;
            }
            let addPoint = async () => {
              let data = {
                Ostate: "进行中",
              };
              let Point = await GetOrderPoint(data);
              console.log(Point[0].OPlat);
              createPoint(Point[0].OPlon, Point[0].OPlat, Point[0]);
            };
            let createPoint = (lon, lat, data) => {
              var point = new Point(lon, lat);
              var simpleMarkerSymbol = new SimpleMarkerSymbol();
              var graphic = new Graphic(point, simpleMarkerSymbol);
              view.graphics.add(graphic);
              view.goTo(view.graphics).then(function () {
                view.popup.open({
                  content: data,
                  location: [lon, lat],
                });
                console.log(data);
              });
            };
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
            view.on("click", (event) => {
              view.hitTest(event).then(function (response) {
                const graphic = getGraphic(response);
                createbufferBtn.addEventListener("click", () => {
                  if (graphic) {
                    view.graphics.removeAll();
                    createBuffer(graphic.geometry);
                  }
                });
              });
            });
            const clearGeometryBtn = document.getElementById("clearGeometry");
            clearGeometryBtn.addEventListener("click", () => {
              view.graphics.removeAll();
              highlightHandle.remove();
              highlightHandle = null;
            });
            //创建按钮
            const createbufferBtn = document.getElementById("createbuffer");

            //创建缓冲区
            var polySym = {
              type: "simple-fill", // autocasts as new SimpleFillSymbol()
              color: [140, 140, 222, 0.5],
              outline: {
                color: [0, 0, 0, 0.5],
                width: 2,
              },
            };
            function createBuffer(geometry) {
              // var buffer=geometryEngine.geodesicBuffer(geometry,150,"kilometers",false);
              var buffer = geometryEngine.buffer(
                geometry,
                slider.values,
                "meters",
                false
              );
              view.graphics.add(
                new Graphic({
                  geometry: buffer,
                  symbol: polySym,
                })
              );
            }

            //滑动条
            const slider = new Slider({
              container: "sliderbox",
              min: 300,
              max: 1000,
              values: [300],
              snapOnClickEnabled: false,
              visibleElements: {
                labels: true,
                rangeLabels: true,
              },
              precision: 0,
            });
            let sketchGeometry;
            //滑动条控制半径变化
            slider.on(["thumb-change", "thumb-drag"], function () {
              if (view.graphics.items[0]) {
                let graphicPoint = view.graphics.items[0].geometry.centroid;
                view.graphics.removeAll();
                createBuffer(graphicPoint);
                sketchGeometry = view.graphics.items[0].geometry;
                runQuery();
              }
            });
            //画点按钮
            let locationBtn = document.getElementById("getlocation");
            locationBtn.addEventListener("click", () => {
              addPoint();
            });

            //查询功能
            let highlightHandle = null;
            function runQuery() {
              const query = supermarketLayer.createQuery();
              query.geometry = sketchGeometry;
              query.distance = slider.values;
              query.outFields = [
                "Name",
                "Address",
                "Phone_Number",
                "lon",
                "lat",
              ];
              /* supermarketLayer.queryObjectIds(query).then(highlightBuildings); */
              supermarketLayer.queryFeatures(query).then(function (response) {
                if (response) {
                  console.log(response);
                }
              });
              view.whenLayerView(supermarketLayer).then(function (layerView) {
                supermarketLayer.queryObjectIds(query).then((ids) => {
                  if (highlightHandle) {
                    highlightHandle.remove();
                    highlightHandle = null;
                  }
                  highlightHandle = layerView.highlight(ids);
                });
              });
              /* console.log(supermarketLayer.queryFeatures(query)); */
            }
            //窗口弹出
            const popupTemplate = {
              // autocasts as new PopupTemplate()
              title: "{NAME} in {COUNTY}",
              content: [
                {
                  type: "fields",
                  fieldInfos: [
                    {
                      fieldName: "Oid",
                      label: "订单号",
                    },
                    {
                      fieldName: "Oaddress",
                      label: "地址",
                    },
                    {
                      fieldName: "B12001_calc_numNeverE",
                      label: "Never Married",
                      format: {
                        places: 0,
                        digitSeparator: true,
                      },
                    },
                    {
                      fieldName: "B12001_calc_numDivorcedE",
                      label: "Total Divorced",
                      format: {
                        places: 0,
                        digitSeparator: true,
                      },
                    },
                  ],
                },
              ],
            };
            //草图绘制
            let sketch = new Sketch({
              layer: sketchLayer,
              view: view,
              container: "sketchbox",
            });
            //收缩
            var layerlistexpand = new Expand({
              view: view,
              expandIconClass: "esri-icon-layer-list",
              content: orderlist,
            });
            view.ui.remove("attribution");
            view.ui.add([
              {
                component: layerlistexpand,
                position: "top-right",
                index: 1,
              },
              {
                component: "buffermenu",
                position: "bottom-left",
                index: 2,
              },
            ]);
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
#buffermenu {
  width: 450px;
}
#sketchbox {
  padding-bottom: 15px;
}
</style>