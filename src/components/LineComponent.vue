<template>
  Pop
  <v-chart class="chart" :option="option" />
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
        },
        series: [
          {
            data: [51, 160, 50, 300, 90, 150, 275,100],
            type: "line",
            smooth: true
          },
        ],
      },
    };
  },
};
</script>

<style></style>
