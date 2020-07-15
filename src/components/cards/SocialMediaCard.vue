<template>
  <Card>
    <div
      :style="{
        position: 'relative',
        marginBottom: '0.75rem'
      }"
    >
      <ProfileImage :src="require('@/assets/images/profile-pic.jpg')" />
      <Badge>
        <i class="material-icons-outlined">star</i>
      </Badge>
    </div>
    <CardText margin="0.325rem" size="1.175rem" :opacity="0.85">
      Lexi Wood
    </CardText>
    <CardText margin="1rem" size="0.75rem" :opacity="0.38">
      Master • 2.4k followers
    </CardText>
    <FollowButton>
      <FollowIcon class="material-icons-outlined">
        arrow_forward
      </FollowIcon>
      <span>FOLLOW</span>
    </FollowButton>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 260px;
  height: 280px;
  font-weight: 700;
  border-radius: 0.25rem;
  background: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.05);
`;

const textProps = { margin: String, size: String, opacity: Number };
const CardText = styled("div", textProps)`
  font-size: ${props => props.size};
  margin-bottom: ${props => props.margin};
  color: ${props => rgba("#10132F", props.opacity)};
`;

const ProfileImage = styled.img`
  width: 64px;
  height: 64px;
  border-radius: 50%;
  box-shadow: 0px 4px 15px rgba(0, 0, 0, 0.1);
`;

const Badge = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 1;
  top: 0px;
  right: 2px;
  width: 18px;
  height: 18px;
  background-color: #00c3cc;
  border-radius: 50%;

  & > i {
    font-size: 10px;
    color: white;
  }
`;

const FollowButton = styled.button`
  display: flex;
  align-items: center;
  height: 32px;
  border-radius: 18px;
  border: 0;
  padding: 0 0.25rem;
  background: ${rgba("#9d66e4", 0.1)};

  & > span {
    padding: 0 1rem 0 0.5rem;
    font-size: 0.675rem;
    font-weight: 700;
    color: #9d66e4;
  }
`;

const FollowIcon = styled.i`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  font-size: 0.875rem;
  border-radius: 50%;
  background: #9d66e4;
  color: white;
`;

export default {
  components: {
    Card,
    CardText,
    ProfileImage,
    Badge,
    FollowButton,
    FollowIcon
  }
};
</script>
