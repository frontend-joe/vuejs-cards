<template>
  <Wrapper>
    <CardFront @click="rotated = !rotated" :rotated="rotated">
      <TopRow>
        <CardTitle>
          <span>{{ cardDropdown }}</span>
          <DropdownIcon class="material-icons-outlined">
            keyboard_arrow_down
          </DropdownIcon>
        </CardTitle>
        <span class="material-icons-outlined">more_vert</span>
      </TopRow>
      <CardValue :cardColor="cardColor">
        <span>{{ cardValue }}</span>
        <CardValueLabel>{{ cardLabel }}</CardValueLabel>
      </CardValue>
      <BottomRow>
        <StatusLabel>{{ cardFooterText }}:</StatusLabel>
        <StatusValue>{{ cardFooterValue }}</StatusValue>
      </BottomRow>
    </CardFront>
    <CardBack @click="rotated = !rotated" :rotated="rotated">
      <TopRow floating>
        <span class="material-icons-outlined">close</span>
      </TopRow>
      <BackText>
        This is a great place to show some extra information.
        <apexchart
          :style="{ display: 'none' }"
          width="150px"
          height="150px"
          type="pie"
          :options="options"
          :series="series"
        ></apexchart>
      </BackText>
    </CardBack>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import VueApexCharts from "vue-apexcharts";

const Wrapper = styled.div`
  position: relative;
  perspective: 1000px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  align-items: center;
  border-radius: 0.5rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  color: #606060;
  backface-visibility: hidden;
  height: 265px;
  transition: transform 0.7s;
  margin-bottom: 2rem;
`;

const cardProps = { rotated: Boolean, floating: Boolean };

const CardFront = styled(Card, cardProps)`
  transform: rotateY(${props => (props.rotated ? "180deg" : "0deg")});
`;

const CardBack = styled(Card, cardProps)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: rotateY(${props => (props.rotated ? "1turn" : "180deg")});
`;

const TopRow = styled("div", cardProps)`
  ${props => (props.floating ? "position: absolute; right: 0;" : "")}
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0;
  color: #606060;
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
`;

const DropdownIcon = styled.span`
  font-size: 20px;
  margin-left: 0.25rem;
`;

const cardValueProps = { cardColor: String };
const CardValue = styled("div", cardValueProps)`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 3rem;
  padding: 2rem 0;
  color: ${props => props.cardColor};
`;

const CardValueLabel = styled.div`
  font-size: 1.125rem;
  padding-top: 0.25rem;
`;

const BottomRow = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const StatusLabel = styled.div`
  color: #a7a7a7;
`;

const StatusValue = styled.div`
  margin-left: 0.325rem;
  color: #606060;
`;

const BackText = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 180px;
  font-size: 0.875rem;
  line-height: 1.5;
  text-align: center;
  padding: 0 1.5rem;
`;

export default {
  props: {
    cardDropdown: String,
    cardValue: String,
    cardLabel: String,
    cardFooterText: String,
    cardFooterValue: String,
    cardColor: String
  },
  components: {
    Wrapper,
    CardFront,
    CardBack,
    TopRow,
    CardTitle,
    DropdownIcon,
    CardValue,
    CardValueLabel,
    BottomRow,
    StatusLabel,
    StatusValue,
    BackText,
    apexchart: VueApexCharts
  },
  data: function() {
    return {
      rotated: false,
      series: [1, 3, 2],
      labels: ["A", "B", "C"],
      options: {
        colors: ["#c322e0", "red", "grey"],
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
          type: "solid",
          opacity: 0.8
        },
        chart: {
          parentHeightOffset: 0,
          sparkline: {
            enabled: true
          },
          toolbar: {
            show: false
          }
        },
        dataLabels: {
          enabled: false
        },
        stroke: {
          enabled: false
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

<style>
.chart .ct-major-second {
  height: 140px;
  max-height: 140px;
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
