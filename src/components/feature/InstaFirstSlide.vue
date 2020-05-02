<template>
  <StyledWrapper>
    <StyledFrame>
      <StyledBannerText>vuejs</StyledBannerText>
      <StyledTopRow>
        <span>vuejs</span>
        <StyledArrows :src="require('@/assets/images/arrows.png')" />
        <!-- <span>1/10</span> -->
      </StyledTopRow>
      <StyledMiddleSquare>
        <StyledMiddleSquareContent>
          <StyledHowToText>How to</StyledHowToText>
          <StyledTitleText>create a dynamic chart card</StyledTitleText>
          <StyledSubtitleText>in vuejs</StyledSubtitleText>
        </StyledMiddleSquareContent>
        <StyledCardFrame>
          <FocalCard />
        </StyledCardFrame>
      </StyledMiddleSquare>
      <StyledBottomRow>
        <StyledFrontendJoe :src="require('@/assets/images/frontendjoe.png')" />
      </StyledBottomRow>
    </StyledFrame>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import FocalCard from "@/components/cards/DynamicChartCard";

const StyledWrapper = styled.div`
  flex: 1;
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
  flex: 1 0 75px;
  height: 75px;
  max-height: 75px;
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
  font-size: 106px;
  line-height: 0.925;
  margin-bottom: 10px;
  color: rgba(0, 0, 0, 0.75);
`;

const StyledSubtitleText = styled.div`
  ${"" /* font-size: 38px; */}
  font-size: 58px;
  color: #522cad;
`;

const StyledBottomRow = styled.div`
  flex: 1 0 75px;
  height: 75px;
  max-height: 85px;
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
  z-index: 0;
  right: 70px;
  bottom: 60px;
  width: 300px;
  transform: rotate(-3deg);
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
