<template>
  <Card>
    <ActionButton @click="randomiseSpheres">Click Here</ActionButton>
    <Sphere
      v-for="sphere in spheres"
      :translateX="sphere.translateX"
      :translateY="sphere.translateY"
      :scale="sphere.scale"
      :key="sphere.id"
    />
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import Sphere from "@/components/shared/Sphere";

const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 300px;
  height: 300px;
  border-radius: 0.5rem;
  background: #1e113e;
  color: #606060;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
`;

const ActionButton = styled.button`
  position: absolute;
  z-index: 2;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  padding: 0 1rem;
  height: 44px;
  line-height: 40px;
  font-weight: 700;
  border-radius: 0.5rem;
  border: 0;
  background: rgba(255, 255, 255, 0.15);
  color: white;
  transition: background 0.5s;

  &:hover {
    background: rgba(255, 255, 255, 0.25);
  }
`;

export default {
  components: {
    Card,
    ActionButton,
    Sphere
  },
  methods: {
    getRandomNumber(min, max) {
      return Math.random() * (max - min) + min;
    },
    randomiseSpheres() {
      for (let i = 0; i < 10; i++) {
        const translateX = this.getRandomNumber(
          0 - this.wrapperWidth / 2,
          this.wrapperWidth + this.wrapperWidth / 2
        );
        const translateY = this.getRandomNumber(
          0 - this.wrapperHeight / 2,
          this.wrapperHeight - this.wrapperHeight / 2
        );
        const scale = this.getRandomNumber(0.5, 3);

        this.spheres.splice(i, 1);
        this.spheres[i] = {
          id: i,
          translateX: `${translateX}px`,
          translateY: `${translateY}px`,
          scale: scale.toString()
        };
      }
    }
  },
  created() {
    this.randomiseSpheres();
  },
  data() {
    return {
      wrapperWidth: 300,
      wrapperHeight: 300,
      spheres: []
    };
  }
};
</script>
