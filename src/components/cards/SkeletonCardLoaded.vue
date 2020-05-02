<template>
  <Card>
    <MainImageWrapper>
      <MainImage :src="require('@/assets/images/setup.png')" />
    </MainImageWrapper>
    <MainContent>
      <Avatar>
        <AvatarImage
          :loading="loading"
          :src="require('@/assets/images/joe.png')"
        />
        <AvatarTitle>frontendjoe</AvatarTitle>
        <span :style="{ fontSize: '12px' }" class="material-icons-outlined"
          >more_horiz</span
        >
      </Avatar>
      <PostContent>
        <AvatarImage
          :loading="loading"
          :src="require('@/assets/images/joe.png')"
        />
        <PostContentText>
          <b>frontendjoe</b>
          Haven’t been doing much flutter these last couple days. Works been
          pretty intense and Ive spent the rest of my time working on Instagram
          content. Think my love addiction with vue is in full swing at the
          moment. 😊⁣ ⁣
        </PostContentText>
      </PostContent>
      <FooterInfo>
        <AvatarImage
          :loading="loading"
          :src="require('@/assets/images/leeo.png')"
        />
        <PostContentText>Liked by <b>leeohgonzalez</b></PostContentText>
      </FooterInfo>
      <FooterDate>
        2 days ago
      </FooterDate>
    </MainContent>
  </Card>
</template>

<script>
import styled from "vue-styled-components";

const skeletonProps = { loading: Boolean };
const skeletonColor = "#ecf1f4";

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

const MainImageWrapper = styled.div`
  flex: 0 0 auto;
  width: 200px;
  max-width: 200px;
`;

const MainImage = styled.img`
  height: 100%;
  width: 100%;
  max-width: 245px;
  flex: 0 0 245px;
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

const Avatar = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 0.75rem;
  border-bottom: 1px solid #efefef;
`;

const AvatarImage = styled("img", skeletonProps)`
  width: 20px;
  height: 20px;
  border-radius: 50%;
  background: ${props => (props.loading ? skeletonColor : "red")};
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.15);
`;

const AvatarTitle = styled.div`
  flex: 1;
  font-size: 0.75rem;
  margin-left: 0.4rem;
  font-weight: bold;
`;

const PostContent = styled.div`
  flex: 1 0 auto;
  display: flex;
  align-items: flex-start;
  padding: 0.75rem;
`;

const PostContentText = styled.span`
  margin-left: 0.4rem;
  font-size: 0.75rem;
  line-height: 1.25;
`;

const FooterInfo = styled.div`
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-top: 1px solid #efefef;
`;

const FooterDate = styled.div`
  color: #a7a7a7;
  padding: 0 0.75rem;
  font-size: 0.75rem;
`;

export default {
  components: {
    Card,
    MainImageWrapper,
    MainImage,
    MainContent,
    Avatar,
    AvatarImage,
    AvatarTitle,
    PostContent,
    PostContentText,
    FooterInfo,
    FooterDate
  },
  data() {
    return {
      loading: true
    };
  },
  mounted() {
    setTimeout(() => {
      //this.loading = false;
    }, 10000);
  }
};
</script>
