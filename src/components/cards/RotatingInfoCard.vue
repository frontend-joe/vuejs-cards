<template>
  <Wrapper>
    <CardFront @click="rotated = !rotated" :rotated="rotated">
      <TopRow>
        <CardTitle>
          <span>Today</span>
          <DropdownIcon class="material-icons-outlined">
            keyboard_arrow_down
          </DropdownIcon>
        </CardTitle>
        <span class="material-icons-outlined">more_vert</span>
      </TopRow>
      <CardValue>
        <span>14</span>
        <CardValueLabel>Interactions</CardValueLabel>
      </CardValue>
      <BottomRow>
        <StatusLabel>Responded:</StatusLabel>
        <span>27</span>
      </BottomRow>
    </CardFront>
    <CardBack @click="rotated = !rotated" :rotated="rotated">
      <TopRow floating>
        <span class="material-icons-outlined">close</span>
      </TopRow>
      <BackText>
        This is a great way to show extra information without cluttering your
        dashboard.
      </BackText>
    </CardBack>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";

const Wrapper = styled.div`
  position: relative;
  perspective: 1000px;
`;

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  backface-visibility: hidden;
  height: 300px;
  border-radius: 0.5rem;
  color: rgba(255, 255, 255, 0.75);
  background: linear-gradient(to right, #4c429a 0%, #6648b1 100%);
  transition: transform 0.7s;
`;

const cardProps = { rotated: Boolean, floating: Boolean };

const CardFront = styled(Card, cardProps)`
  transform: rotateY(${props => (props.rotated ? "180deg" : "0deg")});
`;

const CardBack = styled(Card, cardProps)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  transform: rotateY(${props => (props.rotated ? "1turn" : "180deg")});
`;

const CardTitle = styled.div`
  display: flex;
  align-items: center;
`;

const TopRow = styled("div", cardProps)`
  ${props => (props.floating ? "position: absolute; right: 0; top: 0;" : "")}
  align-self: stretch;
  display: flex;
  justify-content: space-between;
  padding: 1.5rem 1.5rem 0;
`;

const DropdownIcon = styled.span`
  font-size: 20px;
  margin-left: 0.25rem;
`;

const CardValue = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  font-size: 6rem;
  padding: 1.5rem 0 2rem;
  color: rgba(255, 255, 255, 0.85);
`;

const CardValueLabel = styled.div`
  font-size: 1.125rem;
`;

const BottomRow = styled.div`
  align-self: stretch;
  display: flex;
  align-items: center;
  justify-content: flex-start;
  padding: 1.5rem;
  border-top: 1px solid rgba(0, 0, 0, 0.1);
`;

const StatusLabel = styled.div`
  color: rgba(255, 255, 255, 0.57);
  margin-right: 0.325rem;
`;

const BackText = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0 2rem;
  line-height: 1.5;
  text-align: center;
`;

export default {
  components: {
    Wrapper,
    CardFront,
    CardBack,
    TopRow,
    CardTitle,
    DropdownIcon,
    CardValue,
    CardValueLabel,
    BottomRow,
    StatusLabel,
    BackText
  },
  data: () => ({ rotated: false })
};
</script>
