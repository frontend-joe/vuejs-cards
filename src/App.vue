<template>
  <Content>
    <div class="row">
      <div class="col-md-6 offset-md-3">
        <BlogCard />
        <CoolPieChartCard />
        <IconProgressCard />
        <AreaChartCard />
        <CarouselCard />
      </div>
    </div>
  </Content>
</template>

<script>
import Content from "./components/layout/Content";
import BlogCard from "./components/cards/BlogCard";
import CoolPieChartCard from "./components/cards/CoolPieChartCard";
import IconProgressCard from "./components/cards/IconProgressCard";
import AreaChartCard from "./components/cards/AreaChartCard";
import CarouselCard from "./components/cards/CarouselCard";

require("./assets/css/bootstrap.css");
require("./assets/css/tonicons.css");
require("chartist/dist/chartist.min.css");

export default {
  name: "App",
  components: {
    Content,
    BlogCard,
    CoolPieChartCard,
    IconProgressCard,
    AreaChartCard,
    CarouselCard
  }
};
</script>

<style>
body {
  background: #f3f3f3;
  font-family: "Poppins", Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
}

* {
  box-sizing: border-box;
  line-height: 1;
}
</style>
