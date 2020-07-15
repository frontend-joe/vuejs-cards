<template>
  <TopRow>
    <span
      :style="{
        color: textColor || 'inherit',
        width: centerText ? '160px' : 'auto'
      }"
    >
      CSS Magic
    </span>
    <CenterText :textColor="textColor" v-if="centerText">
      {{ centerText }}
    </CenterText>
    <div
      :style="{
        textAlign: 'right',
        height: '24px',
        width: centerText ? '160px' : 'auto'
      }"
    >
      <Arrow
        v-if="!isLastSlide && true"
        :src="
          require(isDark
            ? '@/assets/images/arrow-white.png'
            : '@/assets/images/arrow.png')
        "
      />
      <PostNotifications :textColor="textColor" v-if="isLastSlide">
        <span>Post Notifications</span>
        <i class="material-icons-outlined">arrow_upward</i>
      </PostNotifications>
    </div>
  </TopRow>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba } from "polished";

const styleProps = { textColor: String };

const TopRow = styled("div", styleProps)`
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
  color: ${props => rgba(props.textColor || "#10132F", 0.38)};
`;

const Arrow = styled.img`
  height: 20px;
`;

const CenterText = styled("div", styleProps)`
  color: ${props => rgba(props.textColor || "#10132F", 0.75)};
`;

const notificationAnimation = keyframes`
  50% {
    transform: translateY(-6px);
  }
`;

const PostNotifications = styled("div", styleProps)`
  height: 26px;
  color: ${props => rgba(props.textColor || "#10132F", 0.38)};
  display: flex;
  align-items: center;

  & > span {
    margin-right: 0.5rem;
  }

  & > i {
    padding-top: 6px;
    animation: ${notificationAnimation} 1.5s infinite linear;
    font-size: 30px;
  }
`;

export default {
  props: {
    isDark: Boolean,
    textColor: String,
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
