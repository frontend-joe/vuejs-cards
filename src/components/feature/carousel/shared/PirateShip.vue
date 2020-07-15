<template>
  <div>
    <Mountains :src="require('@/assets/images/mountain.png')" />
    <Island v-if="false" :src="require('@/assets/images/island.png')" />
    <ShipWrapper>
      <Ship :src="require('@/assets/images/ship.png')" />
    </ShipWrapper>
    <Wave1 :src="require('@/assets/images/wave1.png')" />
    <Wave2 :src="require('@/assets/images/wave2.png')" />
    <Wave3 :src="require('@/assets/images/wave3.png')" />
  </div>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";

const Mountains = styled.img`
  position: absolute;
  width: 870px;
  right: -250px;
  bottom: 10px;
`;

const Island = styled.img`
  position: absolute;
  z-index: 8;
  right: -100px;
  bottom: 8px;
  width: 450px;
`;

const shipMove = keyframes`
  0% { transform: translate(0, 0); }
  100% { transform: translate(1080px, 10px); }
`;

const ShipWrapper = styled.div`
  position: absolute;
  z-index: 9;
  left: -400px;
  bottom: 20px;
  animation: ${shipMove} 20s infinite linear;
`;

const waveAnimation = keyframes`
  0% {
    transform: translateX(0) scaleY(1);
  }
  50% {
    transform: translateX(25%) scaleY(0.625);
  }
  100% {
    transform: translateX(0) scaleY(1);
  }
`;

const Wave = styled.img`
  position: absolute;
  width: 1000px;
  height: 80px;
  transform-origin: 0 100%;
`;

const Wave1 = styled(Wave)`
  z-index: 6;
  left: -200px;
  bottom: 12px;
  animation: ${waveAnimation} 10s infinite linear;
`;

const Wave2 = styled(Wave)`
  z-index: 7;
  left: -250px;
  bottom: 5px;
  animation: ${waveAnimation} 6.66s infinite linear;
`;

const Wave3 = styled(Wave)`
  z-index: 10;
  left: -310px;
  bottom: -4px;
  animation: ${waveAnimation} 5s infinite linear;
`;

const shipRock = keyframes`
  50% {
    transform: rotate(4deg) translateY(6px);
  }
`;

const Ship = styled.img`
  width: 400px;
  transform: rotate(4deg);
  animation: ${shipRock} 0.9375s infinite linear;
`;

export default {
  components: {
    Mountains,
    ShipWrapper,
    Ship,
    Island,
    Wave1,
    Wave2,
    Wave3
  }
};
</script>
