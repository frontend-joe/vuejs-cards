<template>
  <StyledWrapper>
    <FrameWrapper>
      <ImagePrev
        v-if="false"
        :src="require('@/assets/images/second-slide.png')"
      />
      <Frame background="#100f10">
        <Top isLastSlide textColor="#fff" isDark />
        <Middle verticalAlign="center">
          <div :style="{ padding: ' 24px', marginTop: '0', width: '100%' }">
            <StyledHowToText isDark>Was It Useful?</StyledHowToText>
            <StyledTitleText isDark
              >Let me know in the comments</StyledTitleText
            >

            <StyledCenter v-if="false"> </StyledCenter>

            <StyledRow v-if="true">
              <StyledLeft>
                <StyledNextTimeTitle isDark>Next Time</StyledNextTimeTitle>
                <StyledNextTimeText isDark>
                  Create <br />
                  Wallet <br />
                  Cards
                </StyledNextTimeText>
                <StyledNextTimeLibary isPurple>In Vuejs</StyledNextTimeLibary>
              </StyledLeft>
              <StyledRight>
                <StyledCardFrame> <FocalCard /> </StyledCardFrame>
              </StyledRight>
            </StyledRow>
          </div>
        </Middle>
        <Bottom isDark />
      </Frame>
    </FrameWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import FocalCard from "@/components/cards/ProductCard";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImagePrev from "./shared/ImagePrev";
import Top from "./shared/Top";
import Bottom from "./shared/Bottom";
import Middle from "./shared/Middle";

const StyledWrapper = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
`;

const StyledLeft = styled.div`
  flex: 1 0 auto;
  position: relative;
  z-index: 1;
  padding: 0 0 0 40px;
  font-weight: 600;
`;

const StyledRight = styled.div`
  flex: 0 0 auto;
  transform: rotate(-2deg) translateX(-25px);
`;

const StyledCenter = styled.div`
  flex: 1 1 auto;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 1.5rem;
  text-align: center;
`;

const textProps = { isDark: Boolean, isPurple: Boolean };

const StyledHowToText = styled("div", textProps)`
  font-size: 50px;
  margin-bottom: 0px;
  letter-spacing: -1px;
  line-height: 1.5;
  text-align: center;
  font-weight: ${p => (p.isDark ? 500 : 600)};
  color: ${({ isDark }) =>
    isDark ? rgba("#fff", 0.65) : rgba("#10132F", 0.57)};
`;

const StyledTitleText = styled("div", textProps)`
  font-size: 25px;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
  text-align: center;
  font-weight: ${p => (p.isDark ? 500 : 600)};
  color: ${({ isDark }) =>
    isDark ? rgba("#FFF", 0.95) : rgba("#10132F", 0.85)};
`;

const StyledNextTimeTitle = styled("div", textProps)`
  font-size: 28px;
  letter-spacing: -0.5px;
  font-weight: ${p => (p.isDark ? 500 : 600)};
  color: ${({ isDark }) =>
    isDark ? rgba("#fff", 0.65) : rgba("#10132F", 0.57)};
`;

const StyledNextTimeText = styled("div", textProps)`
  font-size: 38px;
  line-height: 1.2;
  letter-spacing: -1px;
  font-weight: ${p => (p.isDark ? 500 : 600)};
  color: ${({ isDark }) =>
    isDark ? rgba("#FFF", 0.95) : rgba("#10132F", 0.85)};
  margin-bottom: 6px;
`;

const StyledNextTimeLibary = styled("div", textProps)`
  font-size: 28px;
  letter-spacing: -0.5px;
  font-weight: ${p => (p.isDark || p.isPurple ? 500 : 600)};
  color: ${({ isDark, isPurple }) =>
    isDark
      ? "#733bcb"
      : isPurple
      ? rgba("white", 0.38)
      : rgba("#522cad", 0.65)};
`;

const StyledCardFrame = styled.div`
  transform: translateX(15px);
  ${"" /* position: absolute;
  right: 0;
  bottom: 0; */}
`;

export default {
  components: {
    StyledWrapper,
    StyledRow,
    StyledLeft,
    StyledRight,
    StyledCenter,
    StyledHowToText,
    StyledTitleText,
    StyledNextTimeTitle,
    StyledNextTimeText,
    StyledNextTimeLibary,
    StyledCardFrame,
    FocalCard,
    Frame,
    FrameWrapper,
    Top,
    Middle,
    Bottom,
    ImagePrev
  }
};
</script>
