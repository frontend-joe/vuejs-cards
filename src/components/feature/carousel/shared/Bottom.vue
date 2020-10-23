<template>
  <BottomRow>
    <FrontendJoe :src="getHandleImage" />
    <SaveIcon
      v-if="!hideSaveIcon"
      :style="{ display: 'block' }"
      class="material-icons-outlined"
      :isDark="isDark"
    >
      bookmark_outline
    </SaveIcon>
  </BottomRow>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const BottomRow = styled.div`
  position: relative;
  z-index: 1;
  flex: 0 0 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  font-size: 28px;
`;

const FrontendJoe = styled.img`
  height: 40px;
`;

const styleProps = {
  isDark: Boolean
};

const SaveIcon = styled("i", styleProps)`
  position: relative;
  font-size: 38px;
  color: ${props => (props.isDark ? rgba("white", 0.38) : "#522cad")};

  &::before {
    content: "";
    position: absolute;
    top: 10%;
    left: 10%;
    width: 90%;
    height: 90%;
    border-radius: 50%;
    ${"" /* background: rgba(82, 44, 173, 0.1); */}
  }
`;

export default {
  props: {
    hideSaveIcon: Boolean,
    isDark: Boolean
  },
  computed: {
    getHandleImage() {
      const imageUrl = require(`@/assets/images/${
        !this.isDark ? "frontendjoe.png" : "frontendjoe-grey.png"
      }`);

      console.log("getHandleImage", imageUrl);

      return imageUrl;
    }
  },
  components: {
    BottomRow,
    FrontendJoe,
    SaveIcon
  }
};
</script>
