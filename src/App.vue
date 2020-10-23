<template>
  <StyledWrapper>
    <Topbar />
    <Content>
      <router-view />
    </Content>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import Content from "./components/layout/Content";
import Topbar from "./components/layout/Topbar";

require("./assets/css/bootstrap.css");
require("./assets/css/tonicons.css");
require("./assets/css/weather-icons.min.css");
require("./assets/css/billabong.css");
require("chartist/dist/chartist.min.css");

const StyledWrapper = styled.div`
  flex: 1;
  height: 100%;
  display: flex;
  flex-direction: column;
`;

export default {
  name: "App",
  components: {
    StyledWrapper,
    Content,
    Topbar
  }
};
</script>

<style>
body {
  background: #f3f3f3;
  font-family: "Euclid Circular A";
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

body,
html {
  margin: 0;
  padding: 0;
  height: 100%;
}

* {
  box-sizing: border-box;
  cursor: default;
}

button,
input {
  font-family: "Euclid Circular A";
}

button,
a,
input {
  background: transparent;
  outline: none;
  cursor: pointer;
  font-size: 1rem;
}
</style>
