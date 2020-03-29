<template>
  <div class="chart">
    <chartist
      type="Pie"
      ratio="ct-major-second"
      :data="chartData"
      :options="chartOptions"
    />
  </div>
</template>

<script>
import Plugin from "chartist-plugin-fill-donut";

export default {
  data: function() {
    return {
      chartData: {
        series: [1, 3, 2]
      },
      chartOptions: {
        donut: true,
        donutWidth: 10,
        showLabel: false,
        plugins: [
          Plugin({
            items: [
              {
                content: `<div class="ct-donut-label-text">Balance</div>
                   <div class="ct-donut-label-value">$10K</div>`
              }
            ]
          })
        ]
      }
    };
  }
};
</script>

<style>
.chart .ct-major-second {
  height: 200px;
  max-height: 200px;
}

.chart .ct-series-a .ct-slice-donut {
  stroke: #522cad;
}

.chart .ct-series-b .ct-slice-donut {
  stroke: #c322e0;
}

.chart .ct-series-c .ct-slice-donut {
  stroke: #f3f3f3;
}

.chart .ct-chart-donut {
  filter: drop-shadow(0px 10px 4px rgba(195, 34, 224, 0.15));
}

.chart .ct-fill-donut-label {
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
}

.chart .ct-donut-label-text {
  color: #a7a7a7;
  font-size: 0.875rem;
  margin-bottom: 0.325rem;
}

.chart .ct-donut-label-value {
  font-size: 2rem;
  color: #606060;
  text-shadow: 0px 5px 4px rgba(195, 34, 224, 0.15);
}
</style>
