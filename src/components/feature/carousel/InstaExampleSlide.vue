<template>
  <StyledWrapper>
    <StyledFrame>
      <StyledTopRow>
        <StyledSlideCornerText>vuejs</StyledSlideCornerText>
        <StyledSlideTitle>Example</StyledSlideTitle>
        <div :style="{ width: '80px', textAlign: 'right', maxHeight: '24px' }">
          <StyledArrows :src="require('@/assets/images/arrows.png')" />
        </div>

        <!-- <StyledSlideCornerText :style="{ textAlign: 'right' }"> -->

        <!-- </StyledSlideCornerText> -->
      </StyledTopRow>
      <StyledMiddleSquare>
        <StyledCardFrame>
          <FocalCard />
        </StyledCardFrame>
      </StyledMiddleSquare>
      <StyledBottomRow>
        <StyledFrontendJoe :src="require('@/assets/images/frontendjoe.png')" />
        <StyledSaveIcon class="material-icons-outlined">
          bookmark_outline
        </StyledSaveIcon>
      </StyledBottomRow>
    </StyledFrame>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import FocalCard from "@/components/feature/dashboard/RotatingInfoCardDashboard";

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  background: #f3f3f3;
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
  flex: 011 0 auto;
  width: 600px;

  background: rgba(0, 0, 0, 0);
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

const StyledCardFrame = styled.div`
  position: absolute;
  width: 900px;
  transform: scale(0.6);
`;

const StyledFrontendJoe = styled.img`
  height: 34px;
`;

const StyledArrows = styled.img`
  height: 24px;
`;

const StyledSaveIcon = styled.i`
  position: relative;
  font-size: 38px;
  color: #522cad;

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    background: rgba(82, 44, 173, 0.1);
  }
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
    StyledArrows,
    StyledSaveIcon
  }
};
</script>
