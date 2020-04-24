<template>
  <StyledWrapper>
    <StyledFrame>
      <StyledBannerText>vuejs</StyledBannerText>
      <StyledTopRow>
        <span>vuejs</span>
        <span>1/10</span>
      </StyledTopRow>
      <StyledMiddleSquare>
        <StyledMiddleSquareContent>
          <StyledHowToText>How to</StyledHowToText>
          <StyledTitleText>CREATE An animated chart CARD</StyledTitleText>
          <StyledSubtitleText>VUEJS AND CSS</StyledSubtitleText>
        </StyledMiddleSquareContent>
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
  height: 80px;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  color: rgba(0, 0, 0, 0.4);
  font-family: "Bebas Neue";
  font-size: 28px;
`;

const StyledMiddleSquare = styled.div`
  width: 600px;
  flex: 1 0 auto;
  background: rgba(0, 0, 0, 0);
`;

const StyledMiddleSquareContent = styled.div`
  padding: 20px 28px 0;
  font-family: "Bebas Neue";
`;

const StyledHowToText = styled.div`
  font-size: 66px;
  margin-bottom: 8px;
  color: rgba(0, 0, 0, 0.58);
`;

const StyledTitleText = styled.div`
  font-size: 105px;
  line-height: 0.925;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.75);
`;

const StyledSubtitleText = styled.div`
  font-size: 38px;
  color: #522cad;
`;

const StyledBottomRow = styled.div`
  flex: 1 0 80px;
  height: 80px;
  max-height: 80px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
`;

const StyledBannerText = styled.div`
  position: absolute;
  z-index: -1;
  top: -40px;
  left: -8px;
  font-size: 344px;
  font-family: "Bebas Neue";
  color: rgba(0, 0, 0, 0.025);
`;

const StyledCardFrame = styled.div`
  position: absolute;
  z-index: -1;
  right: 22px;
  bottom: 0px;
  width: 350px;
  transform: rotate(-3deg);
`;

const StyledFrontendJoe = styled.img`
  height: 34px;
`;

const StyledArrows = styled.img`
  height: 20px;
  display: none;
`;

export default {
  components: {
    StyledWrapper,
    StyledFrame,
    StyledTopRow,
    StyledMiddleSquare,
    StyledMiddleSquareContent,
    StyledBottomRow,
    FocalCard,
    StyledBannerText,
    StyledCardFrame,
    StyledHowToText,
    StyledTitleText,
    StyledSubtitleText,
    StyledFrontendJoe,
    StyledArrows
  }
};
</script>
