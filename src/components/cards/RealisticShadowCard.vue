<template>
  <Wrapper>
    <Card class="card" />
    <Shadow class="shadow" />
  </Wrapper>
</template>

<script>
import styled, { css } from "vue-styled-components";

const Wrapper = styled.div`
  position: relative;
  width: 300px;
  height: 300px;

  &:hover .card {
    transform: translateY(-10px);
  }

  &:hover .shadow {
    transform: translateY(10px);
  }
`;

const sharedCss = css`
  border-radius: 60px;
  background: url(${require("@/assets/images/2.jpg")}) 50% 50%;
  background-size: 100%;
  background-repeat: no-repeat;
  transition: transform 0.45s;
`;

const Card = styled.div`
  height: 100%;
  ${sharedCss};
`;

const Shadow = styled.div`
  position: absolute;
  z-index: 0;
  top: 10px;
  left: -10px;
  width: calc(100% + 20px);
  height: calc(100% + 20px);
  ${sharedCss};
  filter: blur(15px);
  opacity: 0.25;
`;

export default {
  components: {
    Wrapper,
    Card,
    Shadow
  }
};
</script>
