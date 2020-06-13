<template>
  <StyledWrapper>
    <FrameWrapper>
      <ImageNext
        v-if="false"
        :src="require('@/assets/images/second-slide.png')"
      />
      <Frame background="#FAF9FE">
        <StyledWaves />
        <Top />
        <Middle verticalAlign="flex-start">
          <StyledBannerText>Datepicker</StyledBannerText>
          <StyledMiddleSquareContent>
            <StyledHowToText>How To</StyledHowToText>
            <StyledTitleText>
              Create a Datepicker Card
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
          <StyledCardFrame>
            <FocalCard />
          </StyledCardFrame>
        </Middle>
        <Bottom hideSaveIcon />
      </Frame>
    </FrameWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba, lighten } from "polished";
import FocalCard from "@/components/cards/DatePickerCard";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImageNext from "./shared/ImageNext";
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
  letter-spacing: -1px;
  color: ${rgba("#10132F", 0.57)};
`;

const StyledTitleText = styled.div`
  font-size: 5.25rem;
  font-weight: 600;
  letter-spacing: -1px;
  line-height: 92px;
  margin-bottom: 35px;
  color: ${rgba("#090C22", 0.85)};
`;

const StyledSubtitleText = styled.div`
  ${"" /* font-size: 38px; */}
  font-size: 50px;
  letter-spacing: -1px;
  color: ${rgba("#522cad", 0.85)};
  display: flex;
  align-items: center;
`;

const StyledBannerText = styled.div`
  position: absolute;
  z-index: 0;
  top: 173px;
  left: -25px;
  letter-spacing: -20px;
  font-size: 180px;
  font-family: "DM Sans";
  font-weight: 600;
  color: #f1f1fa;
  white-space: nowrap;
`;

const StyledCardFrame = styled.div`
  position: absolute;
  z-index: 1;
  right: 61px;
  bottom: 6px;
  width: 290px;
  transform: rotate(-3deg);
`;

const StyledWaves = styled.div`
  position: absolute;
  z-index: 1;
  bottom: -18px;
  left: -100%;
  width: 100%;
  height: 500px;
  background: url(${require("@/assets/images/first-slide-wave.png")});
  background-size: 200%;
  background-position: left bottom;
  background-repeat: no-repeat;
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
    FocalCard,
    Frame,
    FrameWrapper,
    Top,
    Middle,
    Bottom,
    ImageNext,
    StyledBannerText,
    StyledCardFrame,
    StyledHowToText,
    StyledTitleText,
    StyledSubtitleText,
    StyledWaves,
    StyledIconWrapper
  }
};
</script>
