<template>
  <Card>
    <CardTitle>Congratulations!</CardTitle>
    <CardSubtitle>Here's the code for your £50 Domino's Gift Card</CardSubtitle>
    <CoolButton>Reveal It</CoolButton>
  </Card>
</template>

<script>
import styled from "vue-styled-components";

const Card = styled.div`
  width: 300px;
  height: 300px;
  background: white;
`;

const CardTitle = styled.div``;

const CardSubtitle = styled.div``;

const CoolButton = styled.button``;

export default {
  components: {
    Card,
    CardTitle,
    CardSubtitle,
    CoolButton
  }
};
</script>
