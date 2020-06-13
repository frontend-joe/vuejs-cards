<template>
  <Card>
    <Wrapper>
      <Triangle />
    </Wrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";

const Card = styled.div`
  width: 320px;
  padding: 2rem;
  border-radius: 0.5rem;
  background: #f3f3f3;
  color: #606060;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
`;

const Wrapper = styled.div`
  overflow: hidden;
  display: flex;
  justify-content: center;
  align-items: center;
  height: 200px;
  width: 200px;
  background: blue;
`;

const Triangle = styled.div`
  position: relative;
  z-index: 0;
  width: 50px;
  height: 50px;
  background: #cbe6fe;
  transform: rotate(50deg) skewX(25deg);

  &::before {
    content: "";
    position: absolute;
    left: 0;
    bottom: 0;
    background: red;
    width: 200%;
    height: 50%;
    transform: rotate(-45deg);
  }
`;

export default {
  components: {
    Card,
    Wrapper,
    Triangle
  }
};
</script>
