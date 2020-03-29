<template>
  <Card>
    <TopRow>
      <TitleBlock>
        <TitleBlockLabel>Comments</TitleBlockLabel>
        <TitleBlockValue>175K</TitleBlockValue>
      </TitleBlock>
      <Icon class="material-icons-outlined">comment</Icon>
    </TopRow>
    <PowerBarWrapper>
      <PowerBar :style="{ width: `${66}%` }" />
    </PowerBarWrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";

const Card = styled.div`
  padding: 2rem 1.5rem;
  border-radius: 0.5rem;
  background: #f3f3f3;
  color: #606060;
  width: 100%;
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
  margin-bottom: 10rem;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

const TitleBlock = styled.div`
  flex: 1;
`;

const TitleBlockLabel = styled.div`
  font-size: 0.875rem;
  color: #a7a7a7;
  margin-bottom: 0.375rem;
`;

const TitleBlockValue = styled.div`
  font-size: 2rem;
`;

const Icon = styled.i`
  position: relative;
  font-size: 4rem;
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

const PowerBarWrapper = styled.div`
  display: flex;
  width: 100%;
  background: #e9ecef;
  border-radius: 2px;
`;

const PowerBar = styled.div`
  position: relative;
  background: #522cad;
  height: 4px;
  border-radius: 3px;

  &:after {
    content: "";
    display: block;
    position: absolute;
    z-index: 10;
    right: 0;
    top: 50%;
    transform: translateY(-50%);
    width: 0.5rem;
    height: 0.5rem;
    border-radius: 50%;
    background: #f3f3f3;
    border: 3px solid #522cad;
  }
`;

export default {
  components: {
    Card,
    TopRow,
    TitleBlock,
    TitleBlockLabel,
    TitleBlockValue,
    Icon,
    PowerBarWrapper,
    PowerBar
  }
};
</script>
