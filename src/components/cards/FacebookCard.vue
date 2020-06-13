<template>
  <Card>
    <LogoWrapper>
      <BaseRectangle curveRadius="35px">
        <Loader :loading="loading" />
      </BaseRectangle>
      <Blocker
        width="15%"
        height="19%"
        bottom="38%"
        right="70%"
        background="white"
        translate="1px, 0"
      />
      <Blocker
        width="22%"
        height="38%"
        bottom="0"
        right="30%"
        translate="1px, 1px"
      />
      <Blocker
        width="17%"
        height="30%"
        bottom="28%"
        right="18%"
        translate="1px, 0"
        rotate="6deg"
      />
      <Blocker
        width="22%"
        height="24%"
        bottom="57%"
        right="30%"
        borderRadius="20px 0 0 0"
        translate="1px, 0"
      />
    </LogoWrapper>
    <LoadingText>{{ loading ? "Loading" : "Done!" }}</LoadingText>
  </Card>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import { rgba } from "polished";

const backgroundColor = "#3b5998";
const blockerBackground = backgroundColor;

const Card = styled.div`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  justify-content: center;
  flex-direction: column;
  border-radius: 0.5rem;
  background: ${backgroundColor};
  color: white;
  width: 300px;
  height: 300px;
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
`;

const LogoWrapper = styled.div`
  position: relative;
  width: 120px;
  height: 120px;
  transform: translateX(12px);
  margin-bottom: 1rem;
`;

const baseProps = { curveRadius: String };
const BaseRectangle = styled("div", baseProps)`
  position: absolute;
  bottom: 0;
  right: 30%;
  width: 40%;
  height: 100%;
  background: white;
  border-top-left-radius: ${props => props.curveRadius};
`;

const blockerProps = {
  top: String,
  right: String,
  bottom: String,
  left: String,
  width: String,
  height: String,
  borderRadius: String,
  background: String,
  translate: String,
  rotate: String
};

const Blocker = styled("div", blockerProps)`
  position: absolute;
  top: ${props => props.top || "auto"};
  right: ${props => props.right || "auto"};
  bottom: ${props => props.bottom || "auto"};
  left: ${props => props.left || "auto"};
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.background || blockerBackground};
  transform: translate(${props => props.translate || 0})
    rotate(${props => props.rotate || 0});
  border-radius: ${props => props.borderRadius || 0};
`;

const loaderAnimation = keyframes`
  0% { transform: translateY(102%); }
  10% { transform: translateY(100%); }
  33% { transform: translateY(45%); }
  66% { transform: translateY(-2%); }
`;

const Loader = styled.div`
  position: absolute;
  z-index: 2;
  top: 0;
  right: 0;
  width: 200%;
  height: 102%;
  animation: ${loaderAnimation} 10s linear;
  background: ${rgba(backgroundColor, 0.5)};
`;

const loadingTextAnimation = keyframes`
  0% { opacity: 0; }
  50% { opacity: 1; }
  100% { opacity: 0; }
`;

const LoadingText = styled.div`
  font-size: 1.25rem;
  animation: ${loadingTextAnimation} 2s;
  animation-iteration-count: 4;
`;

export default {
  components: {
    Card,
    BaseRectangle,
    Blocker,
    Loader,
    LoadingText,
    LogoWrapper
  },
  created() {
    setTimeout(() => {
      this.loading = false;
    }, 8000);
  },
  data() {
    return {
      loading: true
    };
  }
};
</script>
