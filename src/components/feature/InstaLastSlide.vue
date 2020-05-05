<template>
  <StyledWrapper>
    <StyledFrame>
      <StyledTopRow>
        <!-- <span>vuejs</span> -->
        <StyledArrows
          :style="{ display: 'none' }"
          :src="require('@/assets/images/arrows.png')"
        />
        <!-- <span>10/10</span> -->
      </StyledTopRow>
      <StyledMiddleSquare>
        <StyledBlock>
          <StyledBlockTitle>Was it useful?</StyledBlockTitle>
          <StyledBlockSubtitle>Let me know in the comments</StyledBlockSubtitle>
        </StyledBlock>
        <StyledMiddleRow>
          <StyledNextTimeBlock>
            <StyledNextTimeLabel>Next Time</StyledNextTimeLabel>
            <StyledNextTimeContent>
              create a login form card
            </StyledNextTimeContent>
          </StyledNextTimeBlock>
          <StyledCardFrame>
            <FocalCard />
          </StyledCardFrame>
        </StyledMiddleRow>
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
import FocalCard from "@/components/cards/LoginFormCard";

const StyledWrapper = styled.div`
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  font-family: "Bebas Neue";
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
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  width: 600px;
  flex: 1 0 auto;
  background: rgba(0, 0, 0, 0);
  padding: 0 28px;
`;

const StyledBlock = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  margin-bottom: 4rem;
`;

const StyledBlockTitle = styled.div`
  font-size: 4rem;
  color: rgba(0, 0, 0, 0.75);
`;

const StyledBlockSubtitle = styled.div`
  font-size: 2rem;
  color: rgba(0, 0, 0, 0.57);
`;

const StyledMiddleRow = styled.div`
  display: flex;
  align-self: stretch;
`;

const StyledNextTimeBlock = styled.div`
  flex: 1 0 auto;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  justify-content: center;
  width: 140px;
  transform: translateY(-28px);
`;

const StyledNextTimeLabel = styled.div`
  font-size: 2.5rem;
  color: rgba(0, 0, 0, 0.57);
  margin-bottom: 0.325rem;
`;

const StyledNextTimeContent = styled.div`
  font-size: 3.5rem;
  line-height: 0.875;
  color: rgba(0, 0, 0, 0.75);
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
  flex: 1 0 auto;
  width: 200px;
  transform: rotate(-3deg) translate(-8px, -16px);
  font-family: "Alata";
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
    StyledBlock,
    StyledBlockTitle,
    StyledBlockSubtitle,
    StyledNextTimeBlock,
    StyledNextTimeLabel,
    StyledNextTimeContent,
    StyledMiddleSquare,
    StyledMiddleRow,
    StyledBottomRow,
    FocalCard,
    StyledCardFrame,
    StyledFrontendJoe,
    StyledArrows,
    StyledSaveIcon
  }
};
</script>
