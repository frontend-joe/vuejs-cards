<template>
  <Card>
    <Row v-for="item in items" :key="item.text">
      <Time>
        {{ item.time }}
      </Time>
      <IndicatorWrapper>
        <Indicator :status="item.status" />
        <IndicatorPulser v-if="item.status === 2" />
        <IndicatorLine :status="item.status" />
      </IndicatorWrapper>
      <Content>
        {{ item.text }}
        <div v-for="a in item.order" :key="a">
          {{ a }}
        </div>
      </Content>
    </Row>
  </Card>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba } from "polished";

const colorPrimary = "#9865ff";

const Card = styled.div`
  overflow: hidden;
  width: 300px;
  padding: 2rem 0;
  background: white;
  border-radius: 0.75rem;
  box-shadow: 0 0 30px 0 ${rgba(colorPrimary, 0.05)};
`;

const Row = styled.div`
  display: flex;
  font-size: 0.875rem;
  padding: 0 2rem;
`;

const Time = styled.div`
  flex: 0 0 50px;
`;

const IndicatorWrapper = styled.div`
  position: relative;
  flex: 0 0 14px;
`;

const indicatorProps = { color: String, status: Number };
const Indicator = styled("div", indicatorProps)`
  position: relative;
  top: 2px;
  z-index: 1;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  background: ${p => (p.status === 1 ? colorPrimary : "white")};
  border: 3px solid
    ${p => (p.status === 1 || p.status === 2 ? colorPrimary : "#e7e7e7")};
`;

const IndicatorLine = styled("div", indicatorProps)`
  position: absolute;
  z-index: 0;
  top: 21px;
  left: 6px;
  width: 3px;
  border-radius: 2px;
  height: calc(100% - 22px);
  background: ${p => (p.status === 1 ? colorPrimary : rgba("black", 0.07))};
`;

const pulse = keyframes`
  0% {
    transform: scale(0);
    opacity: 1;
  }
  100% {
    transform: scale(1.7);
    opacity: 0;
  }
`;

const IndicatorPulser = styled.div`
  position: absolute;
  top: -1px;
  left: -4px;
  width: 21px;
  height: 21px;
  border-radius: 50%;
  border: 3px solid ${colorPrimary};
  animation: ${pulse} 1.35s infinite linear;
`;

const Content = styled.div`
  margin-left: 1rem;
  margin-bottom: 1.5rem;
`;

export default {
  components: {
    Card,
    Row,
    Time,
    IndicatorWrapper,
    Indicator,
    IndicatorLine,
    IndicatorPulser,
    Content
  },
  data() {
    return {
      items: [
        {
          status: 1,
          time: "20:04",
          text: "Restaurant confirmed"
        },
        {
          status: 2,
          time: "20:26",
          text: "Order is being cooked",
          order: ["Chicken Tikka", "Large Fries", "Banana Milkshake"]
        },
        {
          status: 3,
          time: "",
          text: "Out for delivery"
        }
      ]
    };
  }
};
</script>
