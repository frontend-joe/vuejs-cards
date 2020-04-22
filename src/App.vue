<template>
  <Content>
    <div class="row">
      <div class="col-sm-6 offset-sm-3 col-md-6 offset-md-3">
        <BlogCard />
        <CoolPieChartCard />
        <IconProgressCard />
        <AreaChartCard />
        <CarouselCard />
        <LineChartCard />
        <ProfileImageCard />
        <SubscribeIconCard />
      </div>
      <!-- <div class="col-md-10 offset-md-1">
        <div class="row">
          <div class="col-md-4">
            <BlogCard />
            <AreaChartCard />
          </div>
          <div class="col-md-4">
            <IconProgressCard />
            <LineChartCard />
            <CoolPieChartCard />
          </div>
          <div class="col-md-4">
            <CarouselCard />
            <ProfileImageCard />
          </div>
        </div>
      </div> -->
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
import LineChartCard from "./components/cards/LineChartCard";
import ProfileImageCard from "./components/cards/ProfileImageCard";
import SubscribeIconCard from "./components/cards/SubscribeIconCard";

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
    CarouselCard,
    LineChartCard,
    ProfileImageCard,
    SubscribeIconCard
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

* {
  box-sizing: border-box;
  line-height: 1;
}

button {
  font-family: "Alata", Helvetica, Arial, sans-serif;
}
</style>
