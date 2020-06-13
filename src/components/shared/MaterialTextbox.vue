<template>
  <Wrapper>
    <Textbox v-model="value" :type="type" />
    <TextboxLabel :notEmpty="value.length > 0">{{ label }}</TextboxLabel>
    <Icon class="material-icons-outlined">{{ icon }}</Icon>
  </Wrapper>
</template>

<script>
import styled from "vue-styled-components";

const Wrapper = styled.div`
  position: relative;
  z-index: 0;
  margin-bottom: 1.75rem;
`;

const labelProps = { notEmpty: Boolean };
const TextboxLabel = styled("div", labelProps)`
  position: absolute;
  z-index: 0;
  top: 0;
  left: 0;
  transform: ${props =>
    props.notEmpty
      ? "translate(0, -0.5rem) scale(0.75, 0.75);"
      : "translate(2rem, 1.175rem)"};
  transform-origin: top left;
  color: #a7a7a7;
  transition: transform 0.25s;
`;

const Textbox = styled.input`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 56px;
  line-height: 56px;
  border: 0;
  border-bottom: 1px solid #c7c7c7;
  background: transparent;
  color: #606060;
  text-indent: 2rem;

  &::placeholder {
    color: #a7a7a7;
  }

  &:focus {
    outline: none;
    border-color: #b44ff6;
  }

  &:focus ~ span {
    color: #b44ff6;
  }

  &:focus ~ div {
    transform: translate(0, -0.5rem) scale(0.75, 0.75);
    color: #b44ff6;
  }
`;

const Icon = styled.span`
  position: absolute;
  top: 50%;
  left: 0;
  transform: translateY(-50%);
  font-size: 20px;
`;

export default {
  props: {
    label: String,
    icon: String,
    placeholder: String,
    type: String
  },
  components: {
    Wrapper,
    Textbox,
    Icon,
    TextboxLabel
  },
  data() {
    return {
      value: ""
    };
  }
};
</script>
