<template>
  <Sphere :style="{ transform }" />
</template>

<script>
import styled from "vue-styled-components";

const props = { translateX: String, translateY: String, scale: String };

const Sphere = styled("div", props)`
  position: absolute;
  width: 60px;
  height: 60px;
  border-radius: 50%;
  background: radial-gradient(
    circle at 25%,
    #725aaf 0%,
    #3d2f61 40%,
    #1e0f46 70%,
    #58506f 100%
  );
  transition: all 2s;
`;

export default {
  props,
  components: {
    Sphere
  },
  computed: {
    transform() {
      return (
        "rotate(45deg) translateX(" +
        this.translateX +
        ") translateY(" +
        this.translateY +
        ") scale(" +
        this.scale +
        ")"
      );
    }
  }
};
</script>
