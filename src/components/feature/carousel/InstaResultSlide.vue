<template>
  <StyledWrapper>
    <FrameWrapper>
      <ImageNext v-if="false" />
      <Frame background="#f7f7fd">
        <StyledWaves />
        <Top centerText="Result" />
        <Middle>
          <StyledMiddleSquare>
            <StyledCardFrame>
              <FocalCard />
            </StyledCardFrame>
          </StyledMiddleSquare>
        </Middle>
        <Bottom />
      </Frame>
    </FrameWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import FocalCard from "@/components/cards/DatePickerCard";
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

const StyledCardFrame = styled.div`
  width: 320px;
`;

const StyledWaves = styled.div`
  position: absolute;
  z-index: 1;
  bottom: 0;
  right: 0;
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
    StyledMiddleSquare,
    FocalCard,
    StyledCardFrame,
    StyledWaves,
    Frame,
    FrameWrapper,
    ImageNext,
    Top,
    Middle,
    Bottom
  }
};
</script>
