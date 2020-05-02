<template>
  <StyledWrapper>
    <slot />
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  flex: 1 1 auto;
  overflow: auto;
  display: flex;
  flex-direction: column;
  ${"" /* padding: 10rem 1.5rem; */}

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
