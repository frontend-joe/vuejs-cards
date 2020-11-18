<template>
  <Wrapper>
    <RainWrapper
      :style="{
        left: `${i === 0 ? 0 : i * 30}px`,
        top: `-${i === 0 ? 0 : i * 30}px`
      }"
      v-for="(l, i) in rainLines"
      :key="`${i}-${l}`"
    >
      <RainDrop v-for="(r, i) in rainDrops" :key="`${i}-${r}`" />
    </RainWrapper>
    <WaterWrapper>
      <RainWater :style="{ backgroundImage: `url(${rainWater})` }" />
    </WaterWrapper>
  </Wrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";

const wrapperIn = keyframes`
  0% { opacity: 0; }
  100% { opacity: 1 }
`;

const Wrapper = styled.div`
  position: absolute;
  z-index: 100;
  top: -100px;
  left: 8px;
  width: 100%;
  height: 100%;
  animation ${wrapperIn} 20s;
`;

const rainFall = keyframes`
  0% { transform: translateY(-60px); }
  100% { transform: translateY(60px); }
`;

const RainWrapper = styled.div`
  position: absolute;
  top: 0;
  left: 10px;
  animation: ${rainFall} 0.65s 30 linear;
`;

const RainDrop = styled.div`
  width: 10px;
  height: 40px;
  border-radius: 5px;
  opacity: 0.5;
  background: #67c0ff;
  margin-bottom: 20px;
`;

export default {
  components: {
    Wrapper,
    RainWrapper,
    RainDrop
  },
  data() {
    return {
      rainLines: new Array(20).fill(0),
      rainDrops: new Array(30).fill(0)
    };
  }
};
</script>
