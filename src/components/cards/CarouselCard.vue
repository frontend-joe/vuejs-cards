<template>
  <Card overflowHidden>
    <VueAgile ref="carousel" :dots="false" :navButtons="false">
      <CardImage :src="slide.image" v-for="slide in slides" :key="slide.id" />
    </VueAgile>
    <CardTitle>Explore: Taj Mahal</CardTitle>
    <CardText>One of the worlds most beautiful wonders.</CardText>
    <Dots>
      <Dot v-for="dot in slides" :key="dot.id" :active="dot.active" />
    </Dots>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { VueAgile } from "vue-agile";

const Card = styled.div`
  border-radius: 0.5rem;
  overflow: hidden;
  background: #f3f3f3;
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
  margin-bottom: 2rem;
`;

const CardTitle = styled.div`
  font-size: 1rem;
  color: #606060;
  padding: 1.5rem 1.5rem 0;
  margin-bottom: 0.875rem;
`;

const CardText = styled.div`
  font-size: 0.875rem;
  line-height: 1.5;
  padding: 0 1.5rem 0;
  margin-bottom: 1rem;
  color: #a7a7a7;
`;

const CardImage = styled.img`
  width: 100%;
`;

const Dots = styled.div`
  display: flex;
  align-items: center;
  padding: 0 1.5rem;
  margin-bottom: 1.5rem;
`;

const dotProps = { active: Boolean };
const Dot = styled("div", dotProps)`
  transform: translateY(${props => (props.active ? "-1px" : "0")});
  border-radius: 50%;
  border: 2px solid ${props => (props.active ? "#522cad" : "#a9a7ac")};
  background: #f3f3f3;
  width: 0.75rem;
  height: 0.75rem;
  margin-right: 0.325rem;
`;

export default {
  components: {
    Card,
    CardImage,
    CardTitle,
    CardText,
    VueAgile,
    Dots,
    Dot
  },
  data: function() {
    return {
      slides: [
        {
          id: 1,
          image: require("@/assets/images/taj1.jpg"),
          active: true
        },
        {
          id: 2,
          image: require("@/assets/images/taj2.jpg"),
          active: false
        },
        {
          id: 3,
          image: require("@/assets/images/taj3.jpg"),
          active: false
        }
      ]
    };
  }
};
</script>
