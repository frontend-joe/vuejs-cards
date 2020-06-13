<template>
  <Card>
    <CardTitle>
      Login
    </CardTitle>
    <form>
      <MaterialTextbox label="Username" type="text" icon="account_circle" />
      <MaterialTextbox label="Password" type="password" icon="lock" />
      <CoolButton>Login</CoolButton>
    </form>
    <IconListTitle>Or login with</IconListTitle>
    <IconList>
      <SocialIcon
        v-for="item in items"
        :key="item.iconName"
        :iconColor="item.iconColor"
      >
        <font-awesome-icon :icon="['fab', item.iconName]" />
      </SocialIcon>
    </IconList>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import MaterialTextbox from "@/components/shared/MaterialTextbox";

const Card = styled.div`
  width: 100%;
  padding: 2rem;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #606060;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
`;

const CardTitle = styled.div`
  font-size: 1.25rem;
  margin-bottom: 1.75rem;
`;

const CoolButton = styled.button`
  width: 100%;
  height: 36px;
  line-height: 36px;
  padding: 0 2rem;
  font-size: 0.875rem;
  border-radius: 18px;
  border: 0;
  background: linear-gradient(45deg, #499be7, #f506ff);
  color: #ffffff
  box-shadow: 0 2px 2px 0 rgba(0, 0, 0, 0.14),
    0 3px 1px -2px rgba(0, 0, 0, 0.12),
    0 1px 5px 0 rgba(0, 0, 0, 0.2);

  margin-bottom: 1.75rem;
`;

const IconListTitle = styled.div`
  font-size: 0.875rem;
  text-align: center;
  color: #a7a7a7;
  margin-bottom: 1.25rem;
`;

const IconList = styled.div`
  display: flex;
  justify-content: center;
`;

const iconProps = { iconColor: String };
const SocialIcon = styled("div", iconProps)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 35px;
  height: 35px;
  margin: 0 0.25rem;
  border-radius: 50%;
  color: #ffffff;
  background: ${props => props.iconColor};
`;

export default {
  components: {
    Card,
    CardTitle,
    CoolButton,
    IconList,
    IconListTitle,
    SocialIcon,
    MaterialTextbox
  },
  data: () => ({
    items: [
      {
        iconColor: "#3f589b",
        iconName: "facebook-f"
      },
      {
        iconColor: "#dd2a7b",
        iconName: "instagram"
      },
      {
        iconColor: "#4285f4",
        iconName: "google"
      }
    ]
  })
};
</script>
