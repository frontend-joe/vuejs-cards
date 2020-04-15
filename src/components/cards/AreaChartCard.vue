<template>
  <Card>
    <TopRow>
      <div>
        <CardTitle>Reach</CardTitle>
        <CardSubtitle>This month impressions</CardSubtitle>
      </div>
      <ActionIcon class="material-icons-outlined">arrow_right_alt</ActionIcon>
    </TopRow>
    <MiddleRow>
      <Value>
        143K
      </Value>
      <ValueIcon class="material-icons-outlined">arrow_drop_up</ValueIcon>
    </MiddleRow>
    <Chart>
      <apexchart
        width="100%"
        height="100%"
        type="area"
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
  justify-content: space-between;
  padding: 2rem 1.5rem 0;
  margin-bottom: 1rem;
`;

const CardTitle = styled.div`
  font-size: 1.075rem;
  color: #606060;
  margin-bottom: 0.325rem;
`;

const CardSubtitle = styled.div`
  font-size: 0.875rem;
  color: #a7a7a7;
`;

const ActionIcon = styled.i`
  font-size: 2rem;
  color: #c322e0;
`;

const MiddleRow = styled.div`
  display: flex;
  padding: 0 1.5rem;
`;

const Value = styled.div`
  font-size: 2rem;
  color: #c322e0;
`;

const ValueIcon = styled.div`
  font-size: 2rem;
  color: #a7a7a7;
`;

const Chart = styled.div`
  max-height: 9rem;
`;

export default {
  components: {
    Card,
    TopRow,
    CardTitle,
    CardSubtitle,
    ActionIcon,
    MiddleRow,
    Value,
    ValueIcon,
    Chart,
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      series: [
        {
          name: "series1",
          data: [40, 60, 30, 70, 40, 90, 50]
        }
      ],
      options: {
        colors: ["#c322e0"],
        grid: {
          strokeDashArray: 3,
          padding: {
            top: -12,
            right: -12,
            left: -12
          },
          xaxis: {
            lines: {
              show: true
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        fill: {
          type: "gradient",
          gradient: {
            shade: "light",
            type: "vertical",
            shadeIntensity: 1,
            opacityFrom: 0.6,
            opacityTo: 0,
            stops: [0, 90, 100],
            colorStops: []
          }
        },
        chart: {
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          width: 2,
          colors: ["#c322e0"]
        },
        yaxis: {
          show: false
        },
        xaxis: {
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          floating: true
        },
        legend: {
          show: false
        }
      }
    };
  }
};
</script>
