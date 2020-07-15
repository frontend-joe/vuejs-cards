<template>
  <StyledWrapper>
    <FrameWrapper>
      <ImageNext v-if="false" />
      <Frame
        background="radial-gradient(ellipse 100% 100% at 0% 100%, #be71a0 0%, #924faf 50%, #643ec2 100%)"
      >
        <Top isDark centerText="Result" textColor="rgba(255, 255, 255, 0.5)" />
        <Middle>
          <PirateShip />
        </Middle>
        <Bottom />
      </Frame>
    </FrameWrapper>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import Frame from "./shared/Frame";
import FrameWrapper from "./shared/FrameWrapper";
import ImageNext from "./shared/ImageNext";
import Top from "./shared/Top";
import Bottom from "./shared/Bottom";
import Middle from "./shared/Middle";
import PirateShip from "./shared/PirateShip";

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
`;

export default {
  components: {
    StyledWrapper,
    PirateShip,
    Frame,
    FrameWrapper,
    ImageNext,
    Top,
    Middle,
    Bottom
  }
};
</script>
