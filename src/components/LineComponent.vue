<template>
  <v-chart class="line-chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";

import VChart, { THEME_KEY } from "vue-echarts";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";

import { GridComponent } from "echarts/components";
use([CanvasRenderer, LineChart, GridComponent]);
export default {
  components: {
    VChart,
  },
  provide: {
    [THEME_KEY]: "light",
  },
  data() {
    return {
      option: {
        xAxis: {
          type: "category",
          data: ["Jan", "Feb", "Mar", "Apr", "May", "Jun", "Jul", "Aug", "Sep"],
        },
        yAxis: {
          type: "value",
          axisLabel: {
            formatter: "{value}k",
          },
        },
        grid: {
          // show: true,
          width: "85%",
          top:"7.5%"
        },
        series: [
          {
            data: [51, 160, 50, 300, 90, 150, 275, 100],
            type: "line",
            smooth: true,
            color: ["#e41613", "#9C90B5"],
            symbol: "roundRect",
   
          },
        ],
        height: "75%",
        // width: "85%",
        padding: "0",
      },
    };
  },
};
</script>

<style></style>
