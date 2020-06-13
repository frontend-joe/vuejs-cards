<template>
  <div>
    <CardLoaded v-if="!loading" />
    <Card v-if="loading">
      <MainImageWrapper>
        <MainImage :src="require('@/assets/images/setup.png')" />
        <MainImageOverlay>
          <SkeletonShimmer />
        </MainImageOverlay>
      </MainImageWrapper>
      <MainContent>
        <TopRow>
          <SkeletonCircle margin="0 0.4rem 0 0" size="20px" />
          <div>
            <SkeletonRectangle margin="0 0 0.2rem 0" size="70px" />
            <SkeletonRectangle size="40px" />
          </div>
        </TopRow>
        <PostContent> </PostContent>
        <FooterRow>
          <SkeletonRectangle margin="2px 0 0.3rem 0" size="60px" />
          <SkeletonRectangle margin="0 0 0.3rem 0" size="90px" />
          <SkeletonRectangle margin="0 0 0.25rem" size="40px" />
        </FooterRow>
      </MainContent>
    </Card>
  </div>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import CardLoaded from "./SkeletonCardLoaded";

const skeletonColor = "#ececec",
  skeletonProps = {
    size: String,
    margin: String
  };

const Card = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  overflow: hidden;
  border-radius: 0.5rem;
  background: #f3f3f3;
  color: #606060;
  width: 100%;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
`;

const MainImageOverlay = styled.div`
  position: absolute;
  top: 0;
  left: 0;
  overflow: hidden;
  width: 100%;
  height: 100%;
  background: ${skeletonColor};
`;

const MainImage = styled.img`
  width: 100%;
  visibility: hidden;
`;

const MainImageWrapper = styled.div`
  position: relative;
  width: 200px;
`;

const MainContent = styled.div`
  flex: 1 0 auto;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  background: #ffffff;
  padding-bottom: 0.5rem;
`;

const PostContent = styled.div`
  flex: 1 0 auto;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  padding: 0.75rem;
  border-bottom: 1px solid #efefef;
`;

const FooterRow = styled.div`
  padding: 0.5rem 0.75rem 0;
  border-top: 1px solid #efefef;
`;

const SkeletonRectangle = styled("div", skeletonProps)`
  height: 7px;
  width: ${props => props.size};
  margin: ${props => props.margin || "0"}};
  background: ${skeletonColor};
`;

const SkeletonCircle = styled("div", skeletonProps)`
  width: ${props => props.size};
  height: ${props => props.size};
  margin: ${props => props.margin || "0"}};
  border-radius: 50%;
  background: ${skeletonColor};
`;

const shimmerAnimation = keyframes`
  0% { transform: translate(-85%, 0) rotate(18deg); }
  100% { transform: translate(50%, 0) rotate(18deg); }
`;

const SkeletonShimmer = styled.div`
  position: absolute;
  z-index: 2;
  top: -30%;
  left: 0;
  width: 200%;
  height: 200%;
  background: linear-gradient(
    to right,
    rgba(255, 255, 255, 0) 0%,
    rgba(255, 255, 255, 0) 25%,
    rgba(255, 255, 255, 0.375) 50%,
    rgba(255, 255, 255, 0) 75%,
    rgba(255, 255, 255, 0) 100%
  );
  animation: ${shimmerAnimation} 1.25s infinite ease-in-out;
`;

export default {
  components: {
    CardLoaded,
    Card,
    MainImageWrapper,
    MainImage,
    MainImageOverlay,
    MainContent,
    PostContent,
    TopRow,
    FooterRow,
    SkeletonShimmer,
    SkeletonRectangle,
    SkeletonCircle
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    this.interval = setInterval(() => {
      this.loading = !this.loading;
    }, 3750);
  },
  destroyed() {
    clearInterval(this.interval);
  }
};
</script>
