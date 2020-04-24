<template>
  <Card>
    <Title>Realtime Users</Title>
    <Window>
      <ChartWrapper>
        <apexchart
          width="300px"
          height="160px"
          type="area"
          :options="areaChartOptions"
          :series="areaChartSeries"
        ></apexchart>
      </ChartWrapper>
      <WindowLabel>275</WindowLabel>
    </Window>
    <apexchart
      height="130px"
      type="bar"
      :options="barChartOptions"
      :series="barChartSeries"
    ></apexchart>
    <BottomRow>
      <span>12:00AM</span>
      <span>1:00PM</span>
    </BottomRow>
  </Card>
</template>

<script>
import VueApexCharts from "vue-apexcharts";
import styled from "vue-styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 2rem 1rem 1.5rem;
  border-radius: 0.5rem;
  color: #ffffff;
  background: #f3f3f3;
  background-image: linear-gradient(to bottom, #8771c1 65%, #522ea9 100%);
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
`;

const Title = styled.div`
  font-size: 1rem;
  margin-bottom: 2rem;
`;

const WindowLabel = styled.div`
  font-size: 2rem;
  color: #606060;
`;

const Window = styled.div`
  position: relative;
  z-index: 0;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 100px;
  height: 100px;
  border-radius: 50%;
  background: #e2e2e2;
  margin-bottom: 1rem;
`;

const ChartWrapper = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: -16px;
`;

const BottomRow = styled.div`
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  font-size: 0.875rem;
`;

export default {
  components: {
    Card,
    Title,
    Window,
    WindowLabel,
    ChartWrapper,
    BottomRow,
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      areaChartSeries: [
        {
          data: [20, 10, 30, 15, 10, 20, 10, 30, 15, 10]
        }
      ],
      areaChartOptions: {
        grid: {
          show: false
        },
        fill: {
          colors: ["#fbc00a"],
          opacity: 0.7,
          type: "solid"
        },
        chart: {
          toolbar: {
            show: false
          },
          parentHeightOffset: 0,
          animations: {
            enabled: true,
            easing: "linear",
            dynamicAnimation: {
              enabled: true,
              speed: 1000
            }
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false
        },
        yaxis: {
          min: 0,
          show: false,
          lines: {
            show: false
          },
          labels: {
            show: false
          }
        },
        xaxis: {
          lines: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          enabled: false
        }
      },
      barChartSeries: [
        {
          data: [20, 10, 30, 15, 10, 20, 10, 30, 15, 10]
        }
      ],
      barChartOptions: {
        grid: {
          show: false
        },
        fill: {
          colors: ["#000000"],
          opacity: 0.2
        },
        chart: {
          toolbar: {
            show: false
          },
          parentHeightOffset: 0
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          show: false
        },
        yaxis: {
          show: false
        },
        xaxis: {
          show: false,
          lines: {
            show: false
          },
          axisBorder: {
            show: false
          },
          axisTicks: {
            show: false
          },
          labels: {
            show: false
          }
        },
        legend: {
          show: false
        },
        tooltip: {
          enabled: false
        }
      }
    };
  },
  methods: {
    updateChart() {
      let newData = this.areaChartSeries[0].data;
      newData.splice(0, 1);

      const lastValue = newData[newData.length - 1];
      const max = 40,
        min = 1;
      const numberData =
        lastValue > max / 2
          ? { max: max / 2, min: min + 10 }
          : { max: max - 10, min: max / 2 };

      newData.push(
        Math.floor(Math.random() * (numberData.max - numberData.min + 1)) +
          numberData.min
      );

      this.areaChartSeries = [{ data: newData }];
    }
  },
  mounted() {
    setInterval(() => {
      this.updateChart();
    }, 1000);
  }
};
</script>
