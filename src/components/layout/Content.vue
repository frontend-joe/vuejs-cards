<template>
  <StyledWrapper>
    <slot />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  height: 100%;
  ${"" /* padding: 10rem 1.5rem; */}
  margin: 0 auto;

  ${"" /* @media (min-width: 901px) {
    width: 900px;
  } */}
`;

export default {
  components: {
    StyledWrapper
  }
};
</script>
