<template>
  <div>
    <SkeletonCardLoaded v-if="!loading" />
    <Card v-if="loading">
      <MainImageWrapper>
        <MainImage :src="require('@/assets/images/setup.png')" />
        <MainImageOverlay>
          <SkeletonShimmer />
        </MainImageOverlay>
      </MainImageWrapper>
      <MainContent>
        <TopRow>
          <SkeletonRow>
            <SkeletonCircle margin="0 0.4rem 0 0" skeletonSize="20px" />
            <div>
              <SkeletonRectangle margin="0 0 0.2rem 0" skeletonSize="70px" />
              <SkeletonRectangle skeletonSize="40px" />
            </div>
          </SkeletonRow>
        </TopRow>
        <PostContent> </PostContent>
        <FooterRow>
          <SkeletonRectangle margin="0 0 0.2rem 0" skeletonSize="90px" />
          <SkeletonRectangle skeletonSize="40px" />
        </FooterRow>
      </MainContent>
    </Card>
  </div>
</template>

<script>
import styled, { keyframes } from "vue-styled-components";
import SkeletonCardLoaded from "./SkeletonCardLoaded";

const skeletonColor = "#ececec",
  skeletonProps = {
    skeletonSize: String,
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

// layout components
const MainImageWrapper = styled.div`
  position: relative;
  flex: 0 0 auto;
  width: 200px;
  max-width: 200px;
`;

const MainImage = styled.img`
  width: 100%;
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

const MainContent = styled.div`
  flex: 1 0 180px;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  width: 180px;
  background: white;
  padding-bottom: 0.5rem;
`;

const PostContent = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: flex-start;
  padding: 0.75rem;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  border-bottom: 1px solid #efefef;
`;

const FooterRow = styled.div`
  padding: 0.5rem 0.75rem;
  border-top: 1px solid #efefef;
`;

// skeleton components
const SkeletonRow = styled.div`
  display: flex;
  align-items: center;
`;

const SkeletonRectangle = styled("div", skeletonProps)`
  background: ${skeletonColor};
  height: 7px;
  width: ${props => props.skeletonSize};
  margin: ${props => props.margin || "0"}};
`;

const SkeletonCircle = styled("div", skeletonProps)`
  width: ${props => props.skeletonSize};
  height: ${props => props.skeletonSize};
  margin: ${props => props.margin || "0"}};
  border-radius: 50%;
  background: ${skeletonColor};
`;

const shimmerAnimation = keyframes`
  0% {
    transform: translate(-85%, 0) rotate(18deg);
  }
  100% {
    transform: translate(50%, 0) rotate(18deg);
  }
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
    SkeletonCardLoaded,
    Card,
    MainImageWrapper,
    MainImage,
    MainImageOverlay,
    MainContent,
    PostContent,
    TopRow,
    FooterRow,
    SkeletonShimmer,
    SkeletonRow,
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
