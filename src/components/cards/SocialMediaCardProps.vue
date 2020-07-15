<template>
  <Card>
    <div :style="{ position: 'relative', marginBottom: '0.75rem' }">
      <ProfileImage :src="cardImage" />
      <Badge :background="badgeColor">
        <i class="material-icons-outlined">{{ badgeIcon }}</i>
      </Badge>
    </div>
    <CardText margin="0.325rem" size="1.175rem" :opacity="0.85">
      {{ cardTitle }}
    </CardText>
    <CardText margin="1rem" size="0.75rem" :opacity="0.38">
      {{ cardSubtitle }}
    </CardText>
    <FollowButton :isFollowing="isFollowing">
      <i class="material-icons-outlined">
        {{ isFollowing ? "check" : "arrow_forward" }}
      </i>
      <span>{{ isFollowing ? "Following" : "follow" }}</span>
    </FollowButton>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const Card = styled.div`
  width: 260px;
  height: 280px;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  border-radius: 0.25rem;
  font-weight: 700;
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

const badgeProps = { background: String };
const Badge = styled("div", badgeProps)`
  display: flex;
  align-items: center;
  justify-content: center;
  position: absolute;
  z-index: 5;
  top: 0px;
  right: 2px;
  width: 18px;
  height: 18px;
  background-color: ${props => props.background || "#00c3cc"};
  border-radius: 50%;

  & > i {
    font-size: 10px;
    color: white;
  }
`;

const followProps = { isFollowing: Boolean };
const FollowButton = styled("button", followProps)`
  display: flex;
  align-items: center;
  padding: 0.25rem;
  height: 32px;
  border-radius: 18px;
  border: 0;
  background: ${props => rgba(props.isFollowing ? "#00CC9C" : "#9d66e4", 0.1)};

  & > span {
    padding: 0 0.75rem 0 0.5rem;
    font-size: 0.675rem;
    font-weight: 700;
    text-transform: uppercase;
    color: ${props => (props.isFollowing ? "#00CC9C" : "#9d66e4")};
  }

  & > i {
    display: flex;
    align-items: center;
    justify-content: center;
    font-size: 14px;
    background: ${props => (props.isFollowing ? "#00CC9C" : "#9d66e4")};
    color: white;
    width: 24px;
    height: 24px;
    border-radius: 50%;
  }
`;

export default {
  props: {
    cardTitle: String,
    cardSubtitle: String,
    cardImage: String,
    badgeIcon: String,
    badgeColor: String,
    isFollowing: Boolean
  },
  components: {
    Card,
    CardText,
    ProfileImage,
    Badge,
    FollowButton
  }
};
</script>
