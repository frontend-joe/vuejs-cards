<template>
  <Wrapper>
    <SocialMediaCard
      cardTitle="Asim Riaz"
      cardSubtitle="Novice • 31 followers"
      :cardImage="require('@/assets/images/profile-pic2.jpg')"
      badgeIcon="security"
      badgeColor="#5EA0FD"
      isFollowing
    />
    <BackgroundCard>
      <SocialMediaCard
        cardTitle="Lexi Wood"
        cardSubtitle="Master • 2.4k followers"
        :cardImage="require('@/assets/images/profile-pic.jpg')"
        badgeIcon="star"
      />
    </BackgroundCard>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import SocialMediaCard from "./SocialMediaCardProps";

const Wrapper = styled.div`
  position: relative;
  transform: translateX(90px);
`;

const BackgroundCard = styled.div`
  position: absolute;
  z-index: -1;
  top: 0;
  left: -194px;
  transform: scale(0.85);
`;

export default {
  components: {
    Wrapper,
    SocialMediaCard,
    BackgroundCard
  }
};
</script>
