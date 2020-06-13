<template>
  <StyledWrapper>
    <FrameWrapper>
      <ImagePrev
        v-if="false"
        :src="require('@/assets/images/second-slide.png')"
      />
      <Frame background="#FAF9FE">
        <StyledWaves />
        <Top isLastSlide />
        <Middle>
          <div
            :style="{ padding: '0 24px', marginTop: '-40px', width: '100%' }"
          >
            <StyledHowToText>Was It Useful?</StyledHowToText>
            <StyledTitleText>Let me know in the comments</StyledTitleText>
            <StyledRow>
              <StyledLeft :style="{ transform: 'translateY(-10px)' }">
                <StyledNextTimeTitle>Next Time</StyledNextTimeTitle>
                <StyledNextTimeText>
                  Create a <br />
                  Datepicker<br />
                  Card
                </StyledNextTimeText>
                <StyledNextTimeLibary>In Vuejs</StyledNextTimeLibary>
              </StyledLeft>
              <StyledRight>
                <FocalCard />
              </StyledRight>
            </StyledRow>
          </div>
        </Middle>
        <Bottom />
      </Frame>
    </FrameWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import FocalCard from "@/components/cards/DatePickerCard";
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
  font-family: "DM Sans";
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
  padding: 0 30px 0 20px;
  font-family: "DM Sans";
  font-weight: 600;
`;

const StyledRight = styled.div`
  flex: 2 0 auto;
  transform: rotate(-1deg) translateX(-17px);
`;

const StyledHowToText = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 0px;
  letter-spacing: -1px;
  line-height: 1.5;
  text-align: center;
  color: ${rgba("#10132F", 0.85)};
`;

const StyledTitleText = styled.div`
  font-size: 25px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
  text-align: center;
  color: ${rgba("#090C22", 0.57)};
`;

const StyledNextTimeTitle = styled.div`
  font-size: 28px;
  letter-spacing: -0.5px;
  color: ${rgba("#090C22", 0.57)};
`;

const StyledNextTimeText = styled.div`
  font-size: 38px;
  line-height: 1.2;
  letter-spacing: -1px;
  color: ${rgba("#10132F", 0.85)};
  margin-bottom: 6px;
`;

const StyledNextTimeLibary = styled.div`
  font-size: 28px;
  letter-spacing: -0.5px;
  color: ${rgba("#522cad", 0.75)};
`;

const StyledWaves = styled.div`
  position: absolute;
  z-index: 0;
  bottom: -5px;
  left: 0;
  width: 100%;
  height: 500px;
  background: url(${require("@/assets/images/first-slide-wave.png")});
  background-size: 200%;
  background-position: left bottom;
  background-repeat: no-repeat;
`;

export default {
  components: {
    StyledWrapper,
    StyledRow,
    StyledLeft,
    StyledRight,
    StyledHowToText,
    StyledTitleText,
    StyledNextTimeTitle,
    StyledNextTimeText,
    StyledNextTimeLibary,
    StyledWaves,
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
