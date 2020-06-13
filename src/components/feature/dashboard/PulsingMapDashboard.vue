<template>
  <StyledWrapper>
    <div class="row">
      <div class="col-md-8 offset-md-2">
        <div class="row">
          <div class="col-md-5">
            <ProfileImageCard />
            <PulsingMapCard />
          </div>
          <div class="col-md-7">
            <CoolPieChartCard />
            <AreaChartCard />
          </div>
        </div>
      </div>
    </div>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import PulsingMapCard from "@/components/cards/PulsingMapCard";
import AreaChartCard from "@/components/cards/AreaChartCard";
import ProfileImageCard from "@/components/cards/ProfileImageCard";
import CoolPieChartCard from "@/components/cards/CoolPieChartCard";

const StyledWrapper = styled.div`
  padding: 10rem 0;
`;

export default {
  components: {
    StyledWrapper,
    PulsingMapCard,
    AreaChartCard,
    ProfileImageCard,
    CoolPieChartCard
  }
};
</script>
