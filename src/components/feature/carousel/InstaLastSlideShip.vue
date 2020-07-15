<template>
  <StyledWrapper>
    <FrameWrapper>
      <ImagePrev
        v-if="false"
        :src="require('@/assets/images/second-slide.png')"
      />
      <Frame
        background="radial-gradient(ellipse 100% 100% at 0% 100%, #be71a0 0%, #924faf 50%, #643ec2 100%)"
      >
        <Top isLastSlide textColor="rgba(255, 255, 255, 0.5)" />
        <Middle>
          <div
            :style="{ padding: '0 24px', marginTop: '-40px', width: '100%' }"
          >
            <StyledHowToText>Was It Useful?</StyledHowToText>
            <StyledTitleText>Let me know in the comments</StyledTitleText>
            <StyledRow>
              <StyledNextTimeTitle>Next Time</StyledNextTimeTitle>
              <StyledNextTimeText>
                Animate a <br />
                Pirate Ship
              </StyledNextTimeText>
              <StyledNextTimeLibary>In Vuejs</StyledNextTimeLibary>
            </StyledRow>
          </div>
        </Middle>
        <PirateShip />
        <Bottom />
      </Frame>
    </FrameWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImagePrev from "./shared/ImagePrev";
import Top from "./shared/Top";
import Bottom from "./shared/Bottom";
import Middle from "./shared/Middle";
import PirateShip from "./shared/PirateShip";

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
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const StyledHowToText = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 0px;
  letter-spacing: -1px;
  line-height: 1.5;
  text-align: center;
  color: ${rgba("#fff", 0.85)};
`;

const StyledTitleText = styled.div`
  font-size: 25px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
  text-align: center;
  color: ${rgba("#fff", 0.57)};
`;

const StyledNextTimeTitle = styled.div`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: ${rgba("#fff", 0.57)};
`;

const StyledNextTimeText = styled.div`
  font-size: 38px;
  line-height: 1.2;
  letter-spacing: -1px;
  text-align: center;
  font-weight: 700;
  color: ${rgba("#fff", 0.85)};
  margin-bottom: 6px;
`;

const StyledNextTimeLibary = styled.div`
  font-size: 28px;
  font-weight: 700;
  letter-spacing: -0.5px;
  color: ${rgba("#fff", 0.57)};
  margin-bottom: 5rem;
`;

export default {
  components: {
    StyledWrapper,
    StyledRow,
    StyledHowToText,
    StyledTitleText,
    StyledNextTimeTitle,
    StyledNextTimeText,
    StyledNextTimeLibary,
    Frame,
    FrameWrapper,
    Top,
    Middle,
    Bottom,
    ImagePrev,
    PirateShip
  }
};
</script>
