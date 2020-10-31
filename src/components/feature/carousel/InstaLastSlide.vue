<template>
  <StyledWrapper>
    <FrameWrapper>
      <ImagePrev
        v-if="false"
        :src="require('@/assets/images/second-slide.png')"
      />
      <Frame background="#F9F9FF">
        <Top isLastSlide textColor="#6B6775" />
        <Middle verticalAlign="center">
          <div :style="{ padding: '0 24px', marginTop: '0', width: '100%' }">
            <StyledHowToText>Was It Useful?</StyledHowToText>
            <StyledTitleText>Let me know in the comments</StyledTitleText>

            <StyledCenter v-if="false"> </StyledCenter>

            <StyledRow>
              <StyledLeft>
                <StyledNextTimeTitle>Next Time</StyledNextTimeTitle>
                <StyledNextTimeText>
                  Create <br />
                  Timeline<br />
                  Cards
                </StyledNextTimeText>
                <StyledNextTimeLibary>In Vuejs</StyledNextTimeLibary>
              </StyledLeft>
              <StyledRight>
                <StyledCardFrame>
                  <FocalCard />
                </StyledCardFrame>
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
import FocalCard from "@/components/cards/TimelineCard";
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
  padding: 0 10px 0 40px;
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
`;

const StyledHowToText = styled.div`
  font-size: 50px;
  font-weight: 600;
  margin-bottom: 0px;
  letter-spacing: -1px;
  line-height: 1.5;
  text-align: center;
  color: ${rgba("#565360", 1)};
`;

const StyledTitleText = styled.div`
  font-size: 25px;
  font-weight: 600;
  letter-spacing: -0.5px;
  margin-bottom: 40px;
  text-align: center;
  color: ${rgba("#565360", 0.57)};
`;

const StyledNextTimeTitle = styled.div`
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: ${rgba("#565360", 0.57)};
`;

const StyledNextTimeText = styled.div`
  font-size: 38px;
  font-weight: 600;
  line-height: 1.2;
  letter-spacing: -1px;
  color: ${rgba("#565360", 1)};
  margin-bottom: 6px;
`;

const StyledNextTimeLibary = styled.div`
  font-size: 28px;
  font-weight: 600;
  letter-spacing: -0.5px;
  color: ${rgba("#9770D3", 0.75)};
`;

const StyledCardFrame = styled.div`
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
