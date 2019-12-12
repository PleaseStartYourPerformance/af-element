<template>
  <div :class="className" :id="chartId" :style="{height:height,width:width}" />
</template>

<script>
  import echarts from "echarts";
  import { randomString } from "@/assets/js/tool/index.js";

  export default {
    props: {
      //id
      id: {
        type: String,
        default: '',
        required: false
      },
      //option
      option: {
        type: Object,
      },
      //地图JSON
      citys: {
        type: Object,
        default: () => {
          return { name: '', map: ''}
        },
        required: false
      },
      //class类
      className: {
        type: String,
        default: "chart"
      },
      //宽
      width: {
        type: String,
        default: "100%"
      },
      //高
      height: {
        type: String,
        default: "100%"
      },
    },
    data() {
      return {
        chartId: '',
        chart: null,
        timer: '',
      };
    },
    beforeDestroy() {
      window.removeEventListener("resize", this.resize);
      if (!this.chart) {
        return;
      }
      this.chart.dispose();
      this.chart = null;
    },
    watch: {
      chartId: {
        handler() {
          this.init()
        },
        immediate: true
      },
      option: {
        handler() {
          this.init()
        },
        deep: true
      }
    },
    methods: {
      resize() {
        if(this.timer) {
          clearTimeout(this.timer)
        }
        this.timer = setTimeout(() => {
          this.chart.resize();
        }, 500)
      },
      init(option) {
        if(this.chartId) {
          if(this.citys.name) {
            echarts.registerMap(citys.name, citys.map);
          }
          this.chart = echarts.init(document.getElementById(this.chartId));
          this.chart.setOption(option || this.option);
        }
      },
      destroy() {
        if (this.chart) {
          this.chart.dispose();
        }
      }
    },
    created() {
      this.chartId = this.id || randomString()
    },
    mounted() {
      window.addEventListener("resize", this.resize);
    }
  };
</script>
