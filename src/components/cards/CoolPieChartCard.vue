<template>
  <Card>
    <CardHeader>
      <div>
        <CardTitle>Current Balance</CardTitle>
        <CardSubtitle>This billing period</CardSubtitle>
      </div>
      <IconButton>
        <Icon class="material-icons-outlined">more_vert</Icon>
      </IconButton>
    </CardHeader>
    <Chart class="chart">
      <chartist
        type="Pie"
        ratio="ct-major-second"
        :data="chartData"
        :options="chartOptions"
      />
    </Chart>
    <BottomRow>
      <BottomRowValue>£50,409.23 </BottomRowValue>
      <BottomRowLabel>Used Balance this year </BottomRowLabel>
    </BottomRow>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import Plugin from "chartist-plugin-fill-donut";

const Card = styled.div`
  padding: 2rem 1.5rem 3rem;
  border-radius: 0.5rem;
  background: #f3f3f3;
  width: 100%;
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
`;

const CardHeader = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 2rem;
`;

const CardTitle = styled.div`
  color: #606060;
  font-size: 1.075rem;
  margin-bottom: 0.325rem;
`;

const CardSubtitle = styled.div`
  color: #a7a7a7;
  font-size: 0.875rem;
`;

const Chart = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  max-width: 200px;
  margin: 0 auto 2rem;
`;

const BottomRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  height: 50px;
`;

const BottomRowLabel = styled.div`
  font-size: 0.875rem;
  color: #a7a7a7;
`;

const BottomRowValue = styled.div`
  font-size: 1.375rem;
  color: #606060;
  margin-bottom: 0.5rem;
`;

const IconButton = styled.button`
  background: transparent;
  border: 0;
  cursor: pointer;
`;

const Icon = styled.i`
  color: #a6a6a6;
`;

export default {
  components: {
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    Chart,
    BottomRow,
    BottomRowLabel,
    BottomRowValue,
    IconButton,
    Icon
  },
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
                content:
                  '<div class="ct-donut-label-text">Balance</div><div class="ct-donut-label-value">$10K</div>'
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
