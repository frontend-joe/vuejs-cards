<template>
  <Wrapper>
    <SkeletonCardLoaded v-if="!loading" />
    <Card v-if="loading">
      <MainImage />
      <MainContent>
        <TopRow>
          <SkeletonRow>
            <SkeletonCircle skeletonSize="20px" />
            <SkeletonRectangle margin="0 0 0 0.4rem" skeletonSize="100px" />
          </SkeletonRow>
        </TopRow>
        <PostContent>
          <FooterRow> </FooterRow>
        </PostContent>
      </MainContent>
    </Card>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";
import SkeletonCardLoaded from "./SkeletonCardLoaded";

const skeletonColor = "#ececec";
const skeletonProps = { skeletonSize: String, margin: String };

const Wrapper = styled.div``;

const Card = styled.div`
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
const MainImage = styled.div`
  height: 260px;
  width: 200px;
  background: ${skeletonColor};
`;

const MainContent = styled.div`
  flex: 1;
  align-self: stretch;
  display: flex;
  flex-direction: column;
  max-width: 180px;
  width: 160px;
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
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-top: 1px solid #efefef;
`;

const SkeletonRow = styled.div`
  display: flex;
  align-items: center;
`;

const SkeletonRectangle = styled("div", skeletonProps)`
  background: ${skeletonColor};
  height: 12px;
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

export default {
  components: {
    Wrapper,
    SkeletonCardLoaded,
    Card,
    MainImage,
    MainContent,
    PostContent,
    TopRow,
    FooterRow,
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
    setInterval(() => {
      this.loading = false;

      setTimeout(() => {
        //this.loading = true;
      }, 2000);
    }, 1000);
  }
};
</script>
