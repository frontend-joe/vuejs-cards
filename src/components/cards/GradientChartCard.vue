<template>
  <Card>
    <CardHeader>
      <CardTitle>Follower Breakdown</CardTitle>
      <CardSubtitle>26,666 followers</CardSubtitle>
      <CardDescription
        ><PrimaryText>+0.7%</PrimaryText> vs Oct 24</CardDescription
      >
    </CardHeader>
    <chartist
      id="test"
      ratio="ct-minor-seventh"
      type="Line"
      :event-handlers="eventHandlers"
      :data="chartData"
      :options="chartOptions"
    />
  </Card>
</template>

<script>
import Vue from "vue";
import styled from "vue-styled-components";
import { rgba } from "polished";

const theme = {
  colorAccent: "#3B0986",
  colorCardBackground: "#191919",
  chartColors: ["#5520a4", "#565cf9"]
};

const CardHeader = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  height: 72px;
  margin-bottom: 2rem;
`;

const CardTitle = styled.div`
  margin-bottom: 0.5rem;
  color: ${rgba("white", 0.85)};
`;

const CardSubtitle = styled.div`
  margin-bottom: 0.5rem;
  font-size: 0.875rem;
  color: ${rgba("white", 0.38)};
`;

const CardDescription = styled.div`
  font-size: 0.625rem;
  color: ${rgba("white", 0.38)};
`;

const PrimaryText = styled.span`
  color: #565cf9;
`;

const Card = styled.div`
  width: 300px;
  height: 300px;
  padding: 2.5rem 1rem 2rem 1.35rem;
  border-radius: 3rem;
  background: ${theme.colorCardBackground};
  color: white;

  & .ct-series .ct-line {
    stroke: url(#shadowLineChartGradient);
  }

  & .ct-point {
    display: none;
  }

  & .ct-line-marker {
    fill: ${theme.colorCardBackground};
    stroke: ${theme.chartColors[1]};
    stroke-width: 4px;
  }
`;
export default {
  components: {
    Card,
    CardHeader,
    CardTitle,
    CardSubtitle,
    CardDescription,
    PrimaryText
  },
  data() {
    return {
      chartData: {
        series: [{ data: [12, 30, 15, 60, 24, 70, 31, 25] }]
      },
      chartOptions: {
        height: "120px",
        width: "300px",
        axisX: {
          showGrid: false,
          showLabel: false
        },
        axisY: {
          offset: 0,
          showLabel: false,
          showGrid: false
        }
      }
    };
  },
  computed: {
    eventHandlers: function() {
      return [
        {
          event: "draw",
          fn(ctx) {
            if (ctx.type === "point") {
              if (ctx.index === 5) {
                var circle = new Vue.chartist.Svg(
                  "circle",
                  {
                    cx: ctx.x,
                    cy: ctx.y,
                    r: 7
                  },
                  "ct-line-marker"
                );
                ctx.element.replace(circle);
              }
            }
          }
        },
        {
          event: "created",
          fn(ctx) {
            var defs = ctx.svg.elem("defs");
            defs
              .elem("linearGradient", {
                id: "shadowLineChartGradient",
                x1: 0,
                y1: 0,
                x2: 1,
                y2: 0
              })
              .elem("stop", {
                offset: 0,
                "stop-color": theme.colorCardBackground
              })
              .parent()
              .elem("stop", {
                offset: 0.25,
                "stop-color": theme.chartColors[0]
              })
              .parent()
              .elem("stop", {
                offset: 0.75,
                "stop-color": theme.chartColors[1]
              })
              .parent()
              .elem("stop", {
                offset: 1,
                "stop-color": theme.colorCardBackground
              })
              .parent();
          }
        }
      ];
    }
  }
};
</script>
