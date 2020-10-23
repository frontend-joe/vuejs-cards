<template>
  <Wrapper>
    <Rocket :src="require('@/assets/images/rocket.png')" />
    <ConveyorBelt>
      <Gear class="material-icons-outlined">settings</Gear>
      <Gear class="material-icons-outlined">settings</Gear>
    </ConveyorBelt>
    <Box
      v-for="box in boxesSent"
      :key="box.id"
      :width="box.width"
      :height="box.height"
      :box="box.box"
    >
      <BoxTape :tape="box.tape" />
      <BoxTape :tape="box.tape" bottom />
    </Box>
  </Wrapper>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";

const styleProps = {
  width: String,
  height: String,
  bottom: Boolean,
  box: String,
  tape: String
};

const Wrapper = styled.div`
  position: absolute;
  left: 0;
  bottom: 0;
  width: 100%;
  height: 400px;
`;

const Rocket = styled.img`
  position: absolute;
  z-index: 2;
  top: -4px;
  left: 58px;
  width: 176px;
`;

const ConveyorBelt = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  position: absolute;
  z-index: 3;
  top: 217px;
  left: 199px;
  width: 400px;
  height: 40px;
  padding: 2px;
  border-radius: 20px;
  border: 3px solid #5d7288;
  background: linear-gradient(to bottom, #bdd4e7 0%, #8693ab 74%);
  transform: rotate(15deg);
`;

const spin = keyframes`
  100% {
    transform: rotate(360deg);
  }
`;

const Gear = styled.div`
  font-size: 32px;
  color: #5d7288;
  animation: ${spin} 2s linear infinite;
`;

const move = keyframes`
  0% {
    transform: rotate(17deg) translate(0, 0);
  }
  100% {
    transform: rotate(15deg) translate(-550px, 0px);
  }
`;

const Box = styled("div", styleProps)`
  position: absolute;
  right: -100px;
  bottom: 105px;
  width: ${props => props.width};
  height: ${props => props.height};
  background: ${props => props.box};
  animation: ${move} 8s linear infinite;
`;

const BoxTape = styled("div", styleProps)`
  position: absolute;
  top: 0;
  left: 50%;
  height: 10px;
  width: 25%;
  ${props => (props.bottom ? "top: auto; bottom: 0;" : "")};
  transform: translateX(-50%);
  background: ${props => props.tape};
`;

export default {
  components: {
    Wrapper,
    Rocket,
    ConveyorBelt,
    Gear,
    Box,
    BoxTape
  },
  methods: {
    getRandomInt(min, max) {
      min = Math.ceil(min);
      max = Math.floor(max);
      return Math.floor(Math.random() * (max - min + 1)) + min;
    }
  },
  data: () => ({
    boxesSent: [],
    boxesToSend: [
      {
        width: "40px",
        height: "40px",
        box: "#e9bf71",
        tape: "#b17e56"
      },
      {
        width: "60px",
        height: "60px",
        box: "#bf8859",
        tape: "#774730"
      },
      {
        width: "30px",
        height: "30px",
        box: "#dcc09d",
        tape: "#ce7756"
      },
      {
        width: "40px",
        height: "40px",
        box: "#e9bf71",
        tape: "#b17e56"
      },
      {
        width: "60px",
        height: "60px",
        box: "#e9bf71",
        tape: "#b17e56"
      }
    ]
  }),
  mounted() {
    let index = 0;
    setInterval(() => {
      this.boxesSent.push(this.boxesToSend[index]);
      index++;

      if (index > this.boxesToSend.length - 1) {
        return clearInterval(setInterval);
      }
    }, 1500);
  }
};
</script>
