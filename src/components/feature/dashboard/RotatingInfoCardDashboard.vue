<template>
  <StyledWrapper>
    <div class="row">
      <div class="col-md-3" v-for="card in topShelf" :key="card.cardLabel">
        <RotatingInfoCardProps
          :cardDropdown="card.cardDropdown"
          :cardValue="card.cardValue"
          :cardLabel="card.cardLabel"
          :cardColor="card.cardColor"
          :cardFooterText="card.cardFooterText"
          :cardFooterValue="card.cardFooterValue"
        />
      </div>
      <div class="col-md-6">
        <DynamicChartCard />
      </div>
      <div class="col-md-6">
        <DataTableCard />
      </div>
    </div>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";
import RotatingInfoCardProps from "@/components/cards/RotatingInfoCardProps";
import DataTableCard from "@/components/cards/DataTableCard";
import DynamicChartCard from "@/components/cards/DynamicChartCard";

const StyledWrapper = styled.div``;

export default {
  components: {
    StyledWrapper,
    RotatingInfoCardProps,
    DataTableCard,
    DynamicChartCard
  },
  data: function() {
    return {
      topShelf: [
        {
          cardDropdown: "Today",
          cardValue: "26",
          cardLabel: "Interactions",
          cardColor: "#522cad",
          cardFooterText: "Achieved",
          cardFooterValue: "420"
        },
        {
          cardDropdown: "Yesterday",
          cardValue: "3K",
          cardLabel: "Reach",
          cardColor: "#c322e0",
          cardFooterText: "Increase",
          cardFooterValue: "+34%"
        },
        {
          cardDropdown: "Worldwide",
          cardValue: "1K",
          cardLabel: "Impressions",
          cardColor: "#522cad",
          cardFooterText: "Capitalised",
          cardFooterValue: "8.7K"
        },
        {
          cardDropdown: "UK Only",
          cardValue: "96",
          cardLabel: "Follows",
          cardColor: "#c322e0",
          cardFooterText: "Uplift",
          cardFooterValue: "+13%"
        }
      ]
    };
  }
};
</script>
