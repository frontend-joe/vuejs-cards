<template>
  <Card>
    <Icon class="material-icons-outlined">close</Icon>
    <Carousel
      :navigateTo="activeSlideIndex"
      :perPage="1"
      :paginationEnabled="false"
      v-on:page-change="handlePageChanged"
    >
      <Slide v-for="slide in slides" :key="slide.text">
        <SlideInner>
          <MainImage :src="slide.image" />
          <CardText>
            <span>{{ slide.text }}</span>
            <template v-if="slide.showButton">
              <br /><br /><CoolButton>Get Started</CoolButton>
            </template>
          </CardText>
        </SlideInner>
      </Slide>
    </Carousel>
    <CirclesWrapper>
      <CirclesOverlay />
      <CircleShape v-for="c in circles" :key="c">
        <CircleShapeFloating />
        <CircleShapeFloating isSecond />
      </CircleShape>
    </CirclesWrapper>
    <Dots>
      <Dot
        v-for="(dot, index) in slides"
        :key="dot.text"
        :active="activeSlideIndex === index"
        @click="activeSlideIndex = index"
      />
    </Dots>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { Carousel, Slide } from "vue-carousel";

const Card = styled.div`
  position: relative;
  z-index: 0;
  border-radius: 0.5rem;
  background: #ffffff;
  width: 100%;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
  overflow: hidden;
`;

const Icon = styled.button`
  position: absolute;
  top: 1rem;
  right: 1rem;
  border: 0;
  padding: 0;
  color: #6b6f82;
`;

const SlideInner = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 4rem 0 0;
`;

const MainImage = styled.img`
  height: 120px;
  margin-bottom: 2rem;
`;

const CardText = styled.div`
  text-align: center;
  line-height: 1.5;
  padding: 0 2rem;
  color: #6b6f82;
  margin-bottom: 6rem;
`;

const Dots = styled.div`
  position: absolute;
  left: 50%;
  bottom: 0;
  display: flex;
  height: 56px;
  align-items: center;
  transform: translateX(-50%);
`;

const dotProps = { active: Boolean };
const Dot = styled("button", dotProps)`
  width: 8px;
  height: 8px;
  padding: 0;
  border-radius: 50%;
  border: 0;
  background: ${props => (props.active ? "#6d45bd" : "#c8bde0")};

  &:not(:first-child),
  &:not(:last-child) {
    margin: 0 0.25rem;
  }
`;

const CirclesWrapper = styled.div`
  position: absolute;
  z-index: -1;
  bottom: 0;
  left: -20px;
  display: flex;
  align-items: flex-end;
  height: 120px;
  padding-bottom: 0.75rem;
`;

const CirclesOverlay = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  background-image: linear-gradient(
    to bottom,
    rgba(255, 255, 255, 1) 0%,
    rgba(255, 255, 255, 0) 100%
  );
`;

const circleDiameter = "14px",
  circleDistance = "35px";

const CircleShape = styled.div`
  flex: 0 0 auto;
  position: relative;
  width: ${circleDiameter};
  height: ${circleDiameter};
  border-radius: 50%;
  background: #f6e7f9;
  margin-right: 56px;
`;

const circleProps = { isSecond: Boolean };
const CircleShapeFloating = styled(CircleShape, circleProps)`
  position: absolute;
  z-index: 1;
  top: calc(-${circleDistance} * ${props => (props.isSecond ? 2 : 1)});
  left: calc(-${circleDistance} * ${props => (props.isSecond ? 2 : 1)});
`;

const CoolButton = styled.button`
  height: 36px;
  line-height: 36px;
  padding: 0 2rem;
  font-size: 0.875rem;
  border-radius: 28px;
  border: 0;
  background: linear-gradient(45deg, #8e24aa, #ff6e40);
  color: #ffffff
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12), 0 1px 5px 0 rgba(0, 0, 0, 0.2);
`;

export default {
  components: {
    Card,
    Carousel,
    Slide,
    SlideInner,
    MainImage,
    CardText,
    CirclesWrapper,
    CirclesOverlay,
    CircleShape,
    CircleShapeFloating,
    Dots,
    Dot,
    Icon,
    CoolButton
  },
  methods: {
    handlePageChanged(value) {
      this.activeSlideIndex = value;
    }
  },
  data() {
    return {
      activeSlideIndex: 0,
      slides: [
        {
          image: require("@/assets/images/intro1.png"),
          text:
            "This first slide is where we introduce our users to our app and what it does.",
          showButton: false
        },
        {
          image: require("@/assets/images/intro2.png"),
          text:
            "This second slide could be where we talk about some cool new features we've added.",
          showButton: false
        },
        {
          image: require("@/assets/images/intro3.png"),
          text: "Finally a call to action.",
          showButton: true
        }
      ],
      circles: Array(8)
        .fill()
        .map((_, index) => index + 1)
    };
  }
};
</script>
