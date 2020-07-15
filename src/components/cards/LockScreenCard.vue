<template>
  <Card>
    <Avatar :src="require('@/assets/images/author.jpg')" />
    <AvatarTitle>Bob Davies</AvatarTitle>
    <TextboxWrapper :valid="valid">
      <StyledTextbox
        :type="showPassword ? 'text' : 'password'"
        placeholder="Password"
      />
      <StyledShowPasswordButton
        @click="showPassword = !showPassword"
        class="material-icons-outlined"
      >
        {{ showPassword ? "visibility_off" : "visibility" }}
      </StyledShowPasswordButton>
      <StyledMessage :submitted="submitted" :valid="valid">
        {{
          valid === undefined ? "" : valid ? "Welcome Back" : "Invalid Password"
        }}
      </StyledMessage>
      <StyledButton :valid="valid" :submitted="submitted" @click="onClick">
        <StyledButtonIcon class="material-icons-outlined">
          {{ submitted ? (valid ? "check" : "close") : "arrow_forward" }}
        </StyledButtonIcon>
      </StyledButton>
    </TextboxWrapper>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 3rem 2rem;
  border-radius: 0.5rem;
  background: #ffffff;
  color: #606060;
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
`;

const Avatar = styled.img`
  width: 100px;
  height: 100px;
  border-radius: 50%;
  margin-bottom: 0.5rem;
`;

const AvatarTitle = styled.div`
  font-weight: 700;
  margin-bottom: 2rem;
`;

const backgroundColor = "#6E44FF";
const validColor = "#0DBF9B";
const invalidColor = "#F43E5C";
const transitionDuration = "0.75s";
const buttonProps = { valid: Boolean, submitted: Boolean };

const TextboxWrapper = styled("div", buttonProps)`
  position: relative;
  overflow: hidden;
  display: flex;
  align-items: center;
  background: white;
  border-radius: 0.5rem;
  border: 2px solid
    ${props =>
      props.valid !== undefined
        ? props.valid
          ? validColor
          : invalidColor
        : backgroundColor};
  box-shadow: 0 3px 20px -7px ${rgba("#4e3dc8", 0.5)};
  transition: border-color ${transitionDuration};
`;

const StyledTextbox = styled.input`
  flex: 1;
  border: 0;
  outline: none;
  background: transparent;
  text-indent: 0.75rem;
  font-size: 1rem;
  width: 120px;
`;

const StyledShowPasswordButton = styled("button")`
  padding: 0 0.5rem;
  border: 0;
  font-size: 20px;
`;

const StyledButton = styled("button", buttonProps)`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: center;
  width: 40px;
  height: 40px;
  border: 0;
  background: ${props =>
    props.valid === undefined
      ? backgroundColor
      : props.valid
      ? validColor
      : invalidColor};
  color: white;
  transition: background ${transitionDuration};

  &::after {
    content: "";
    position: absolute;
    z-index: 0;
    top: 0;
    left: 0;
    width: inherit;
    height: inherit;
    background: inherit;
    transform: scaleX(${props => (props.submitted ? 10 : 1)});
    transition: transform ${transitionDuration};
  }
`;

const StyledButtonIcon = styled.span`
  position: relative;
  z-index: 2;
  font-size: 20px;
`;

const StyledMessage = styled("div", buttonProps)`
  position: absolute;
  top: 50%;
  left: 50%;
  z-index: 3;
  transform: translate(-50%, -50%);
  font-weight: 700;
  font-size: 0.75rem;
  opacity: ${props => (props.submitted ? 1 : 0)};
  color: white;
  text-align: center;
  white-space: nowrap;
  transition: opacity ${transitionDuration};
`;

export default {
  components: {
    Card,
    Avatar,
    AvatarTitle,
    TextboxWrapper,
    StyledTextbox,
    StyledShowPasswordButton,
    StyledButton,
    StyledButtonIcon,
    StyledMessage
  },
  methods: {
    onClick() {
      console.log(this.value);

      if (this.value === "password") {
        this.valid = true;
      } else {
        this.attempts++;
        this.valid = false;
      }

      this.submitted = !this.submitted ? true : undefined;

      if (!this.submitted) {
        this.valid = undefined;
      }
    }
  },
  data() {
    return {
      attempts: 0,
      value: String,
      valid: undefined,
      submitted: false,
      showPassword: false
    };
  }
};
</script>
