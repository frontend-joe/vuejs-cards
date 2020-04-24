<template>
  <StyledWrapper>
    <StyledFrame>
      <StyledTopRow>
        <StyledSlideCornerText>vuejs</StyledSlideCornerText>
        <StyledSlideTitle>End Result</StyledSlideTitle>
        <StyledSlideCornerText :style="{ textAlign: 'right' }">
          9/10
        </StyledSlideCornerText>
      </StyledTopRow>
      <StyledMiddleSquare>
        <StyledCardFrame>
          <FocalCard />
        </StyledCardFrame>
      </StyledMiddleSquare>
      <StyledBottomRow>
        <StyledFrontendJoe :src="require('@/assets/images/frontendjoe.png')" />
        <StyledArrows :src="require('@/assets/images/arrows.png')" />
      </StyledBottomRow>
    </StyledFrame>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import FocalCard from "@/components/cards/AnimatedChartCard";

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
`;

const StyledFrame = styled.div`
  position: relative;
  display: flex;
  flex-direction: column;
  overflow: hidden;
  width: 600px;
  height: 750px;
  border: 1px solid rgba(0, 0, 0, 0.05);
`;

const StyledTopRow = styled.div`
  flex: 1 0 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  color: rgba(0, 0, 0, 0.4);
  font-family: "Bebas Neue";
  font-size: 28px;
`;

const StyledSlideCornerText = styled.div`
  width: 80px;
`;

const StyledSlideTitle = styled.div`
  flex: 1;
  text-align: center;
`;

const StyledMiddleSquare = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  flex: 0 0 600px;
  width: 600px;
  height: 600px;

  background: rgba(0, 0, 0, 0);
`;

const StyledBottomRow = styled.div`
  flex: 1 0 74px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
`;

const StyledCardFrame = styled.div`
  width: 350px;
`;

const StyledFrontendJoe = styled.img`
  height: 34px;
`;

const StyledArrows = styled.img`
  height: 24px;
`;

export default {
  components: {
    StyledWrapper,
    StyledFrame,
    StyledTopRow,
    StyledSlideTitle,
    StyledSlideCornerText,
    StyledMiddleSquare,
    StyledBottomRow,
    FocalCard,
    StyledCardFrame,
    StyledFrontendJoe,
    StyledArrows
  }
};
</script>
