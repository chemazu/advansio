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
use([CanvasRenderer, LineChart,GridComponent]);
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
          data: ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            data: [150, 230, 224, 218, 135, 147, 260],
            type: "line",
          },
        ],
      },
    };
  },
};
</script>

<style></style>
