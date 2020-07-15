<template>
  <StyledWrapper>
    <FrameWrapper>
      <ImageNext
        v-if="false"
        :src="require('@/assets/images/second-slide.png')"
      />
      <Frame
        background="radial-gradient(ellipse 100% 100% at 0% 100%, #be71a0 0%, #924faf 50%, #643ec2 100%)"
      >
        <Top isDark textColor="rgba(255, 255, 255, 0.5)" />
        <Middle verticalAlign="flex-start">
          <StyledBannerText>Pirate Ships</StyledBannerText>
          <StyledMiddleSquareContent>
            <StyledHowToText>How To</StyledHowToText>
            <StyledTitleText>
              Animate a<br />
              Pirate Ship
              <!-- Create a <br />Call To Action <br />Card -->
            </StyledTitleText>
            <StyledSubtitleText>
              <StyledIconWrapper>
                <font-awesome-icon :icon="['fab', 'vuejs']" />
              </StyledIconWrapper>
              <span>
                Vuejs
              </span>

              <!-- In React -->
            </StyledSubtitleText>
          </StyledMiddleSquareContent>
        </Middle>
        <PirateShip />
        <Bottom :style="{ opacity: 0 }" />
      </Frame>
    </FrameWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba, lighten } from "polished";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImageNext from "./shared/ImageNext";
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
`;

const StyledMiddleSquareContent = styled.div`
  position: relative;
  z-index: 1;
  width: 100%;
  padding: 19px 28px 0;
  font-family: "DM Sans";
  font-weight: 600;
`;

const StyledHowToText = styled.div`
  font-size: 50px;
  font-weight: 600;
  line-height: 52px;
  margin-bottom: 14px;
  letter-spacing: -2px;
  color: ${rgba("#fff", 0.38)};
`;

const StyledTitleText = styled.div`
  font-size: 5.25rem;
  font-weight: 600;
  letter-spacing: -2px;
  line-height: 92px;
  margin-bottom: 35px;
  color: ${rgba("#fff", 0.85)};
`;

const StyledSubtitleText = styled.div`
  ${"" /* font-size: 38px; */}
  font-size: 50px;
  letter-spacing: -2px;
  color: ${rgba("#fff", 0.5)};
  display: flex;
  align-items: center;
`;

const StyledBannerText = styled.div`
  position: absolute;
  z-index: 0;
  top: 173px;
  left: -25px;
  letter-spacing: -15px;
  font-size: 180px;
  font-family: "DM Sans";
  font-weight: 600;
  color: rgba(255, 255, 255, 0.05);
  white-space: nowrap;
`;

const StyledIconWrapper = styled.span`
  width: 54px;
  height: 54px;
  border-radius: 10px;
  color: white;
  font-size: 34px;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-right: 0.75rem;
  box-shadow: 0 11px 15px -7px ${rgba("#4e3dc8", 0.5)};
  background: linear-gradient(
    45deg,
    ${lighten(0.2, "#522cad")} 0%,
    #522cad 100%
  );
`;

export default {
  components: {
    StyledWrapper,
    StyledMiddleSquareContent,
    Frame,
    FrameWrapper,
    Top,
    Middle,
    Bottom,
    ImageNext,
    StyledBannerText,
    StyledHowToText,
    StyledTitleText,
    StyledSubtitleText,
    StyledIconWrapper,
    PirateShip
  }
};
</script>
