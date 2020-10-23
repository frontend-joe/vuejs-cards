<template>
  <StyledWrapper>
    <FrameWrapper>
      <ImageNext v-if="false" />
      <Frame background="linear-gradient(to top, #b2538c, #2d0542)">
        <Top isDark centerText="Result" textColor="white" />
        <Middle>
          <StyledMiddleSquare>
            <StyledCardFrame> </StyledCardFrame>
          </StyledMiddleSquare>
        </Middle>
        <Bottom isDark />
        <FocalCard />
      </Frame>
    </FrameWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import FocalCard from "@/components/magic/LoadRocketsSvg";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImageNext from "./shared/ImageNext";
import Top from "./shared/Top";
import Bottom from "./shared/Bottom";
import Middle from "./shared/Middle";

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
`;

const StyledMiddleSquare = styled.div`
  position: relative;
  z-index: 2;
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 1 0 auto;
  width: 600px;
`;

const StyledCardFrame = styled.div``;

export default {
  components: {
    StyledWrapper,
    StyledMiddleSquare,
    FocalCard,
    StyledCardFrame,
    Frame,
    FrameWrapper,
    ImageNext,
    Top,
    Middle,
    Bottom
  }
};
</script>
