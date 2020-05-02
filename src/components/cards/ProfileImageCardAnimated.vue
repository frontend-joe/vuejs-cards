<template>
  <Card>
    <BackgroundColor>
      <SendButton @click="open = !open">
        <Icon class="material-icons-outlined">send</Icon>
      </SendButton>
      <TopRow>
        <Icon class="material-icons-outlined">menu</Icon>
        <Icon class="material-icons-outlined">more_vert</Icon>
      </TopRow>
      <AvatarRow>
        <Avatar :src="require('@/assets/images/profileImage.jpg')" />
        <AvatarTitle>
          Bob Taylor
        </AvatarTitle>
        <AvatarSubtitle>
          Senior Dev
        </AvatarSubtitle>
      </AvatarRow>
    </BackgroundColor>
    <Content>
      Expert in building apps, with over 10 years experience.
    </Content>

    <Overlay :open="open" @click="open = false" />
    <Dialog :open="open" @click="open = false" />
  </Card>
</template>

<script>
import styled from "vue-styled-components";

const Card = styled.div`
  position: relative;
  border-radius: 0.5rem;
  background: #f3f3f3;
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
  overflow: hidden;
  margin-bottom: 2rem;
`;

const BackgroundColor = styled.div`
  position: relative;
  padding: 1.5rem;
  background-image: linear-gradient(0deg, #3f51b5, #7684cf);
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const Icon = styled.span`
  color: rgba(255, 255, 255, 0.8);
`;

const AvatarRow = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
`;

const Avatar = styled.img`
  width: 4.5rem;
  height: 4.5rem;
  border-radius: 50%;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.15);
`;

const AvatarTitle = styled.div`
  color: rgba(255, 255, 255, 0.8);
  font-size: 15px;
  margin-bottom: 0.325rem;
  padding-top: 1rem;
`;

const AvatarSubtitle = styled.div`
  color: rgba(255, 255, 255, 0.57);
  font-size: 13px;
`;

const SendButton = styled.button`
  position: absolute;
  right: 1.5rem;
  bottom: 0;
  border: 0;
  transform: translateY(50%);
  width: 48px;
  height: 48px;
  border-radius: 50%;
  background: #c322e0;
  box-shadow: 0 6px 20px 0 rgba(0, 0, 0, 0.19), 0 8px 17px 0 rgba(0, 0, 0, 0.2);
  display: flex;
  align-items: center;
  justify-content: center;
`;

const Content = styled.div`
  padding: 2.5rem;
  text-align: center;
  line-height: 1.75;
  color: #606060;
`;

const dialogProps = { open: Boolean };

const Overlay = styled("div", dialogProps)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  border-radius: 0.5rem;
  background: rgba(0, 0, 0, 0.175);
  visibility: ${props => (props.open ? "visible" : "hidden")};
  opacity: ${props => (props.open ? 1 : 0)};
  transition: visibility 0.25s, opacity 0.25s;
`;

const Dialog = styled("div", dialogProps)`
  position: absolute;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 120px;
  border-radius: 0.5rem;
  background: #f3f3f3;
  transform: translateY(${props => (props.open ? "1rem" : "100%")});
  transition: transform 0.25s ease-in-out;
`;

export default {
  components: {
    Card,
    TopRow,
    BackgroundColor,
    Icon,
    AvatarRow,
    Avatar,
    AvatarTitle,
    AvatarSubtitle,
    SendButton,
    Content,
    Overlay,
    Dialog
  },
  data: function() {
    return {
      open: false
    };
  }
};
</script>
