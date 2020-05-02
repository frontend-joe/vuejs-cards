<template>
  <StyledWrapper>
    <div class="row">
      <div class="col-sm-6 offset-sm-3 col-md-6 offset-md-3">
        <RotatingInfoCard />
        <PulsingMapCard />
        <AnimatedChartCard />
        <SubscribeIconCard />
        <ProfileImageCard />
        <LineChartCard />
        <CarouselCard />
        <AreaChartCard />
        <IconProgressCard />
        <CoolPieChartCard />
        <BlogCard />
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
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import BlogCard from "@/components/cards/BlogCard";
import CoolPieChartCard from "@/components/cards/CoolPieChartCard";
import IconProgressCard from "@/components/cards/IconProgressCard";
import AreaChartCard from "@/components/cards/AreaChartCard";
import CarouselCard from "@/components/cards/CarouselCard";
import LineChartCard from "@/components/cards/LineChartCard";
import ProfileImageCard from "@/components/cards/ProfileImageCard";
import SubscribeIconCard from "@/components/cards/SubscribeIconCard";
import AnimatedChartCard from "@/components/cards/AnimatedChartCard";
import PulsingMapCard from "@/components/cards/PulsingMapCard";
import RotatingInfoCard from "@/components/cards/RotatingInfoCard";

const StyledWrapper = styled.div`
  padding-top: 4rem;
`;

export default {
  components: {
    StyledWrapper,
    BlogCard,
    CoolPieChartCard,
    IconProgressCard,
    AreaChartCard,
    CarouselCard,
    LineChartCard,
    ProfileImageCard,
    SubscribeIconCard,
    AnimatedChartCard,
    PulsingMapCard,
    RotatingInfoCard
  }
};
</script>
