<template>
  <TopRow>
    <span :style="{ width: centerText ? '100px' : 'auto' }">
      UI Cards
    </span>
    <CenterText v-if="centerText">
      {{ centerText }}
    </CenterText>
    <div
      :style="{
        textAlign: 'right',
        height: '24px',
        width: centerText ? '100px' : 'auto'
      }"
    >
      <Arrow v-if="!isLastSlide" :src="require('@/assets/images/arrow.png')" />
      <PostNotifications
        :src="require('@/assets/images/post-notifications.png')"
        v-if="isLastSlide"
      />
    </div>
  </TopRow>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const TopRow = styled.div`
  position: relative;
  z-index: 1;
  flex: 0 0 75px;
  height: 75px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0 28px;
  font-family: DM Sans;
  font-size: 24px;
  font-weight: 800;
  color: ${rgba("#10132F", 0.38)};
`;

const Arrow = styled.img`
  height: 20px;
`;

const CenterText = styled.div`
  color: ${rgba("#10132F", 0.75)};
`;

const PostNotifications = styled.img`
  height: 26px;
`;

export default {
  props: {
    centerText: String,
    isLastSlide: Boolean
  },
  components: {
    TopRow,
    CenterText,
    Arrow,
    PostNotifications
  }
};
</script>
