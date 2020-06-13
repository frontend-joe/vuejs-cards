<template>
  <Card>
    <Pricetag>
      £25/month
    </Pricetag>
    <Icon class="ti-Line-Heart" />
    <Value>3,642 Likes</Value>
    <DateRange>This week</DateRange>
    <Description>
      Now kickstart with your next design. Subscribe today and save $20/month
    </Description>
    <CoolButton>Subscribe</CoolButton>
  </Card>
</template>

<script>
import styled from "vue-styled-components";

const Card = styled.div`
  position: relative;
  overflow: hidden;
  width: 100%;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: linear-gradient(to right, #4c429a 0%, #9956ce 20%);
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
  color: #ffffff;
  margin-bottom: 10rem;
`;

const Pricetag = styled.div`
  position: absolute;
  top: 0;
  right: 0;
  font-size: 0.75rem;
  line-height: 2;
  text-align: center;
  border-bottom-left-radius: 0.75rem;
  background: #c322e0;
  padding: 0 0.5rem;
`;

const Icon = styled.span`
  font-size: 2.5rem;
`;

const Value = styled.div`
  padding-top: 1rem;
  font-size: 2rem;
  font-weight: bold;
  margin-bottom: 1rem;
`;

const DateRange = styled.div`
  font-size: 0.875rem;
  margin-bottom: 1rem;
`;

const Description = styled.div`
  font-size: 0.825rem;
  line-height: 1.5;
  color: rgba(255, 255, 255, 0.75);
  margin-bottom: 1.25rem;
`;

const CoolButton = styled.button`
  height: 2.5rem;
  padding: 0 1rem;
  font-size: 0.875rem;
  border: 0;
  border-radius: 0.375rem;
  background: #c322e0;
  color: #ffffff;
`;

export default {
  components: {
    Card,
    Pricetag,
    Icon,
    Value,
    DateRange,
    Description,
    CoolButton
  }
};
</script>
