<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { LineChart } from "echarts/charts";
// import {
//   TitleComponent,
//   TooltipComponent,
//   LegendComponent,
// } from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  LineChart,
  // TitleComponent,
  // TooltipComponent,
  // LegendComponent,
]);

export default {
  name: "HelloWorld",
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
          data: ["Q1", "Q2", "Q3", "Q4"],
        },
        yAxis: {
          type: "value",
        },
        series: [
          {
            type: "line",
            data: [63, 75, 24, 92],
          },
        ],
        title: {
          text: "Quarterly Sales Results",
          x: "center",
          textStyle: {
            fontSize: 24,
          },
        },
        color: ["#127ac2"],
      },
    };
  },
};
</script>

<style scoped>
.chart {
  height: 400px;
}
</style>

<style>
body {
  margin: 0;
}
</style>
