<template>
  <StyledWrapper>
    <FrameWrapper>
      <ImageNext
        v-if="false"
        :src="require('@/assets/images/second-slide.png')"
      />
      <Frame background="#6330B4">
        <Top textColor="#fff" isDark />
        <Middle verticalAlign="flex-start">
          <StyledBannerText isDark>Todo List</StyledBannerText>
          <StyledMiddleSquareContent>
            <StyledHowToText isDark>How To</StyledHowToText>
            <StyledTitleText isDark>
              Create <br />
              Todo List <br />
              Cards
              <!-- Create a <br />Call To Action <br />Card -->
            </StyledTitleText>
            <StyledSubtitleText isDark>
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
        <Bottom v-if="true" isDark />
      </Frame>
    </FrameWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import FocalCard from "@/components/cards/TodoListCard";
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
  font-weight: 500;
`;

const props = {
  isDark: Boolean
};

const StyledHowToText = styled("div", props)`
  font-size: 50px;
  line-height: 52px;
  margin-bottom: 14px;
  letter-spacing: -2px;
  font-weight: ${p => (p.isDark ? 500 : 600)};
  color: ${({ isDark }) =>
    isDark ? rgba("#fff", 0.65) : rgba("#10132F", 0.57)};
`;

const StyledTitleText = styled("div", props)`
  margin-bottom: 35px;
  letter-spacing: -2px;
  line-height: 92px;
  font-size: 5.25rem;
  font-weight: ${p => (p.isDark ? 500 : 600)};
  color: ${({ isDark }) =>
    isDark ? rgba("#FFF", 0.95) : rgba("#10132F", 0.85)};
`;

const StyledSubtitleText = styled("div", props)`
  letter-spacing: -1px;
  font-size: 50px;
  font-weight: ${p => (p.isDark ? 500 : 600)};
  color: ${({ isDark }) =>
    isDark ? rgba("#fff", 0.38) : rgba("#522cad", 0.65)};
  display: flex;
  align-items: center;
`;

const StyledBannerText = styled("div", props)`
  position: absolute;
  z-index: 0;
  top: 173px;
  left: -25px;
  letter-spacing: -10px;
  font-size: 180px;
  font-weight: ${p => (p.isDark ? 500 : 600)};
  color: ${rgba("white", 0.025)};
  color: ${p => rgba(p.isDark ? "white" : "black", 0.025)};
  white-space: nowrap;
`;

const StyledCardFrame = styled.div`
  position: absolute;
  z-index: 2;
  bottom: 85px;
  right: 25px;
  transform: rotate(-3deg) scale(1);
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
  background: linear-gradient(45deg, #742cea 0%, #462790 100%);
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
    StyledIconWrapper
  }
};
</script>
