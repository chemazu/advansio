<template>
  <v-chart class="chart" :option="option" />
</template>

<script>
import { use } from "echarts/core";
import { CanvasRenderer } from "echarts/renderers";
import { PieChart } from "echarts/charts";
import {
  TitleComponent,
  TooltipComponent,
  LegendComponent,
} from "echarts/components";
import VChart, { THEME_KEY } from "vue-echarts";

use([
  CanvasRenderer,
  PieChart,
  TitleComponent,
  TooltipComponent,
  LegendComponent,
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
        title: {
          text: "",
          left: "left",
        },
        tooltip: {
          trigger: "item",
          formatter: "{a} <br/>{b} : {c} ({d}%)",
        },

        // legend: {
        //   // right: "right",

        //   // data: ["Active", "Inactive"],
        //   position: "bottom",
        // },
        // backgroundColor: ["rgb(255, 99, 132)", "rgb(54, 162, 235)"],

        series: [
          {
            name: "Loan Ratio",
            type: "pie",
            radius: "70%",
            itemStyle: {
              normal: {
                label: {
                  show: true,
                  position: "inner",
                  formatter: function (params) {
                    return params.value + "%\n";
                  },
                },
                labelLine: {
                  show: false,
                },
              },
            },
            grid: {
              // show: true,
              width: "85%",
              top: "5%",
            },
            // center: ["50%", "60%"],
            data: [
              { value: 14, name: "Active" },
              { value: 86, name: "Inactive" },
            ],

            emphasis: {
              itemStyle: {
                shadowBlur: 10,
                shadowOffsetX: 0,
                shadowColor: "rgba(0, 0, 0, 0.5)",
              },
            },
            color: ["#FF9737", "#FFf"],
          },
        ],
      },
    };
  },
};
</script>

<style scoped>
.chart {
  height: 250px;
  /* display: flex;
  align-items: center; */
}
</style>

<style>
body {
  margin: 0;
}
</style>
