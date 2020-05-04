<template>
  <Card>
    <TopRow>
      <CardTitle>Follows</CardTitle>
      <TabButton @click="updateData('2019')" :active="activeData === '2019'">
        2019
      </TabButton>
      <TabButton @click="updateData('2020')" :active="activeData === '2020'">
        2020
      </TabButton>
    </TopRow>
    <MiddleRow>
      <span>24K</span>
      <span class="material-icons-outlined">arrow_drop_up</span>
    </MiddleRow>
    <Chart>
      <apexchart
        width="100%"
        height="200px"
        type="area"
        :options="options"
        :series="activeData === '2020' ? seriesB : seriesA"
      />
    </Chart>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import VueApexCharts from "vue-apexcharts";

const Card = styled.div`
  overflow: hidden;
  height: 290px;
  border-radius: 0.5rem;
  background-image: linear-gradient(0deg, #522dad, #371e76);
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 2rem 1.5rem 0;
  margin-bottom: 1rem;
`;

const CardTitle = styled.div`
  flex: 1;
  color: rgba(255, 255, 255, 1);
`;

const buttonProps = { active: Boolean };
const TabButton = styled("button", buttonProps)`
  padding: 0;
  border: 0;
  margin-left: 1rem;
  font-size: 0.875rem;
  color: rgba(255, 255, 255, ${props => (props.active ? 1 : 0.57)});
  background: transparent;
`;

const MiddleRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  font-size: 2rem;
  color: rgba(255, 255, 255, 0.75);
`;

const Chart = styled.div`
  max-height: 12rem;
`;

export default {
  components: {
    Card,
    CardTitle,
    TopRow,
    TabButton,
    MiddleRow,
    Chart,
    apexchart: VueApexCharts
  },
  methods: {
    updateData(activeData) {
      this.activeData = activeData;
    }
  },
  data() {
    return {
      activeData: "2020",
      seriesA: [
        {
          name: "series1",
          data: [40, 60, 50, 100, 60, 90, 50]
        }
      ],
      seriesB: [
        {
          name: "series1",
          data: [60, 20, 40, 30, 70, 50, 80]
        }
      ],
      options: {
        colors: ["#4CC9F0"],
        grid: {
          strokeDashArray: 3,
          padding: {
            top: -20,
            right: -5,
            left: -5
          },
          xaxis: {
            lines: {
              show: false
            }
          },
          yaxis: {
            lines: {
              show: false
            }
          }
        },
        fill: {
          type: "solid",
          opacity: 0.6
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
          show: false
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
