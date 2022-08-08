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
    <el-form label-width="90px">
      <div id="sketchbox"></div>
      <el-form-item label="缓冲区半径:">
        <div id="sliderbox"></div>
      </el-form-item>
    </el-form>
    <el-form label-width="80px">
      <el-form-item>
        <el-button type="primary" id="createbuffer">创建</el-button>
        <el-button id="clearGeometry">清空</el-button>
      </el-form-item>
    </el-form>
  </el-card>
  <el-card class="box-card" id="resultDiv">
    <div class="count">
      附近的物资点数量:
      <div class="count" id="count">0</div>
    </div>
    <div id="splist"></div>
    <!-- <el-table :data="splist" style="width: 100%">
      <el-table-column prop="Address" label="地址" width="180" />
      <el-table-column prop="Name" label="店名" width="180" />
      <el-table-column prop="Phone_Number" label="电话" />
    </el-table> -->
  </el-card>
</template>

<script>
import "@esri/calcite-components/dist/calcite/calcite.css";
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
      splist: [],
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
  /* data() {
    return {
      splist: [],
    };
  }, */
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
            var orderLayer = new GraphicsLayer();
            view.map.addMany([bufferLayer, sketchLayer, orderLayer]);
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
            this.splist = [
              {
                Address: "2016-05-03",
                Name: "Tom",
                Phone_Number: "No. 189, Grove St, Los Angeles",
              },
            ];
            const supermarkettemplate = {
              // autocasts as new PopupTemplate()
              title: "{Name}",
              content: [
                {
                  type: "fields",
                  fieldInfos: [
                    {
                      fieldName: "Name", // The field whose values you want to format
                      label: "店名",
                    },
                    {
                      fieldName: "Address", // The field whose values you want to format
                      label: "地址",
                    },
                    {
                      fieldName: "Phone_Number", // The field whose values you want to format
                      label: "电话",
                    },
                  ],
                },
              ],
            };
            /* supermarketLayer.popupTemplate = template; */
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
            /* view.ui.add(layerList, "bottom-right"); */
            //分别添加图层
            var supermarketLayer = new FeatureLayer({
              url: "https://localhost:6443/arcgis/rest/services/Point/Point/MapServer/4",
              popupTemplate: supermarkettemplate,
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
                bufferLayer.removeAll();
                createBuffer(event.result.feature.geometry);
                runQuery();
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

            //订单绘制点
            let addPoint = async () => {
              let data = {
                Ostate: "进行中",
              };
              let Point = await GetOrderPoint(data);
              console.log(Point[0].OPlat);
              Point.forEach((result, index) => {
                createPoint(
                  Point[index].OPlon,
                  Point[index].OPlat,
                  Point[index]
                );
              });
            };

            let createPoint = (lon, lat, data) => {
              var point = new Point(lon, lat);
              var simpleMarkerSymbol = new SimpleMarkerSymbol();
              var graphic = new Graphic(point, simpleMarkerSymbol);
              view.graphics.add(graphic);
              view.goTo(view.graphics).then(function () {
                view.popup.open({
                  title: "订单请求",
                  content:
                    "<ul>" +
                    "<li> 订单号: " +
                    data.Oid +
                    "</li>" +
                    "<li> 订单地址: " +
                    data.Oaddress +
                    "</li>" +
                    "<li> 订单状态: " +
                    data.Ostate +
                    "</li>" +
                    "<li> 用户名: " +
                    data.Ouser +
                    "</li>" +
                    "</ul>",
                  /* data.Oid */ /* [data.Oid,data.Oaddress,data.Ostate,data.Ouser,] */ /* [
                    {
                      type: "text",
                      text: "There are 1 trees within census block 1",
                    },
                  ], */ location: [lon, lat],
                });
                console.log(data);
              });
            };
            //高亮显示鼠标覆盖的图形
            /* function showHighlight(graphic) {
              if (highlight) {
                highlight.remove();
              }
              if (graphic) {
                view.whenLayerView(graphic.layer).then(function (layerView) {
                  highlight = layerView.highlight(graphic);
                });
              }
            } */
            //鼠标移动的事件
            /* view.on("pointer-move", (event) => {
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
            }); */
            //鼠标点击生成缓冲区
            view.on("click", (event) => {
              view.hitTest(event).then(function (response) {
                const graphic = getGraphic(response);
                createbufferBtn.addEventListener("click", () => {
                  if (graphic) {
                    sketchGeometry = graphic.geometry;
                    bufferLayer.removeAll();
                    createBuffer(graphic.geometry);
                    bufferGeometry = bufferLayer.graphics.items[0].geometry;
                    runQuery();
                  }
                });
              });
            });
            //清空按钮
            function clear() {
              sketchGeometry = null;
              view.graphics.removeAll();
              bufferLayer.removeAll();
              sketchLayer.removeAll();
              if (highlightHandle) {
                highlightHandle.remove();
                highlightHandle = null;
              }
              document.getElementById("count").innerHTML = 0;
              document.getElementById("splist").innerHTML = "";
            }
            const clearGeometryBtn = document.getElementById("clearGeometry");
            clearGeometryBtn.addEventListener("click", () => {
              clear();
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
              bufferLayer.add(
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
              labelFormatFunction: (values, type) => {
                return `${values.toString()}m`;
              },
              precision: 0,
            });
            let sketchGeometry = null;
            let bufferGeometry = null;
            //滑动条控制半径变化
            slider.on(["thumb-change", "thumb-drag"], function () {
              if (bufferLayer.graphics.items[0]) {
                /*                 let graphicPoint =
                  bufferLayer.graphics.items[0].geometry.centroid; */
                view.graphics.removeAll();
                bufferLayer.removeAll();
                createBuffer(sketchGeometry);
                bufferGeometry = bufferLayer.graphics.items[0].geometry;
                runQuery();
              }
              if (sketchLayer.graphics.items[0]) {
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
              query.geometry = bufferGeometry;
              query.distance = slider.values;
              query.outFields = ["Name", "Address", "Phone_Number"];
              query.outStatistics = [];
              /* supermarketLayer.queryObjectIds(query).then(highlightBuildings); */
              supermarketLayer.queryFeatures(query).then(function (response) {
                const allStats = response.features;
                const dataset = [];
                if (allStats) {
                  document.getElementById("count").innerHTML = allStats.length;
                  document.getElementById("splist").innerHTML = "";
                  allStats.forEach((result, index) => {
                    const attributes = result.attributes;
                    const Name = attributes.Name;
                    const Address = attributes.Address;
                    const PhoneNumber = attributes.Phone_Number;
                    document.getElementById("splist").innerHTML += `<div>${
                      "店名：" +
                      Name +
                      "地址：" +
                      Address +
                      "电话：" +
                      PhoneNumber
                    }</div>`;
                  });
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
            //草图绘制
            let sketch = new Sketch({
              layer: sketchLayer,
              visibleElements: {
                selectionTools: {
                  "lasso-selection": false,
                  "rectangle-selection": false,
                },
                undoRedoMenu: false,
              },
              view: view,
              container: "sketchbox",
            });
            sketch.on("create", (event) => {
              clear();
              if (event.state === "complete") {
                sketchGeometry = event.graphic.geometry;
                createBuffer(sketchGeometry);
                bufferGeometry = bufferLayer.graphics.items[0].geometry;
                runQuery();
              }
            });
            sketch.on("update", (event) => {
              clear();
              if (event.state === "complete") {
                sketchGeometry = event.graphics[0].geometry;
                createBuffer(sketchGeometry);
                bufferGeometry = bufferLayer.graphics.items[0].geometry;
                runQuery();
              }
            });
            //收缩
            const orderlistexpand = new Expand({
              view: view,
              expandIconClass: "esri-icon-layer-list",
              content: orderlist,
            });
            const layerlistexpand = new Expand({
              view: view,
              expandIconClass: "esri-icon-layer-list",
              content: layerList,
            });
            view.ui.remove("attribution");
            view.ui.add([
              {
                component: orderlistexpand,
                position: "top-right",
                index: 1,
              },
              {
                component: layerlistexpand,
                position: "bottom-right",
                index: 1,
              },
              {
                component: "buffermenu",
                position: "bottom-left",
                index: 2,
              },
              {
                component: "resultDiv",
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
#createbuffer,
#clearGeometry {
  width: 130px;
}
.count {
  white-space: nowrap;
  font-size: 16px;
  font-weight: bold;
  display: inline-block;
}
</style>