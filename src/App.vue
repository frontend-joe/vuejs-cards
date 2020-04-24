<template>
  <Content>
    <router-view />
  </Content>
</template>

<script>
import Content from "./components/layout/Content";

require("./assets/css/bootstrap.css");
require("./assets/css/tonicons.css");
require("chartist/dist/chartist.min.css");

export default {
  name: "App",
  components: {
    Content
  }
};
</script>

<style>
body {
  background: #f3f3f3;
  font-family: "Alata", Helvetica, Arial, sans-serif;
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
  line-height: 1;
}

button {
  font-family: "Alata", Helvetica, Arial, sans-serif;
}
</style>
