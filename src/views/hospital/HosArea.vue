<template>
  <div class="buffer"></div>  
</template>

<script>
import { loadModules } from "esri-loader";
import("../../../public/4.16/esri/themes/light/main.css");
export default {
  name:"HosArea",
  methods:{
    createView(){
      
    }
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

</style>