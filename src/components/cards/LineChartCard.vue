<template>
  <Card>
    <TopRow>
      <Block>
        <BlockValue>4,200</BlockValue>
        <BlockLabel>Confirmed Cases</BlockLabel>
      </Block>
      <Percentage>8.9%</Percentage>
      <Icon class="material-icons-outlined">arrow_drop_down</Icon>
    </TopRow>
    <Chart>
      <apexchart
        width="100%"
        height="100%"
        type="line"
        :options="options"
        :series="series"
      ></apexchart>
    </Chart>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import VueApexCharts from "vue-apexcharts";

const Card = styled.div`
  border-radius: 0.5rem;
  background: #f3f3f3;
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
  margin-bottom: 2rem;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  padding: 1.5rem 1.5rem 0;
`;

const Block = styled.div`
  margin-right: 1.25rem;
`;

const BlockValue = styled.div`
  font-size: 2rem;
  color: #606060;
  margin-bottom: 0.325rem;
`;

const BlockLabel = styled.div`
  font-size: 0.875rem;
  color: #a7a7a7;
`;

const Percentage = styled.div`
  font-size: 0.875rem;
  color: #de5b5b;
`;

const Icon = styled.i`
  font-size: 1.5rem;
  color: #de5b5b;
`;

const Chart = styled.div`
  position: relative;
  height: 150px;
  padding: 0 1rem 1rem;
`;

export default {
  components: {
    Card,
    TopRow,
    Block,
    BlockValue,
    BlockLabel,
    Percentage,
    Icon,
    Chart,
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      series: [{ data: [40, 60, 30, 70, 40, 90, 50] }],
      options: {
        grid: { yaxis: { lines: { show: false } } },
        chart: { toolbar: { show: false } },
        markers: {
          size: 4,
          strokeColors: "#522cad",
          colors: ["#f3f3f3"]
        },
        stroke: { curve: "straight", width: 2, colors: ["#522cad"] },
        yaxis: { show: false, min: 0 },
        xaxis: {
          show: false,
          axisBorder: { show: false },
          axisTicks: { show: false },
          floating: true
        }
      }
    };
  }
};
</script>
