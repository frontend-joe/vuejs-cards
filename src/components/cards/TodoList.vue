<template>
  <Wrapper>
    <Row
      @click="onClick(index, item.isChecked)"
      v-for="(item, index) in items"
      :key="item.title"
      :color="item.colorDark"
    >
      <Checkbox
        :colorLight="item.colorLight"
        :colorDark="item.colorDark"
        :isChecked="item.isChecked"
      >
        <CheckboxIcon class="checkbox-icon material-icons">
          check
        </CheckboxIcon>
      </Checkbox>
      <span :style="{ flex: '1 0 auto' }">
        <Title>{{ item.title }}</Title>
        <Subtitle>{{ item.subtitle }}</Subtitle>
      </span>
      <MoreIcon class="material-icons">
        more_horiz
      </MoreIcon>
    </Row>
  </Wrapper>
</template>

<script>
import styled, { css } from "vue-styled-components";
import { rgba } from "polished";

const Wrapper = styled.div`
  padding: 2rem 0 1rem;
`;

const rowBorder = css`
  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 0;
    width: 4px;
    height: 100%;
    border-radius: 2px;
    background: ${p => p.color};
  }
`;

const Row = styled("button", { color: String })`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  background: transparent;
  border: 0;
  padding: 0;
  width: 100%;
  height: 50px;
  margin-bottom: 1.5rem;
  text-align: left;
  cursor: pointer;

  &:last-child {
    margin-bottom: 0;
  }

  ${rowBorder}
`;

const checkboxProps = {
  colorDark: String,
  colorLight: String,
  isChecked: Boolean
};

const Checkbox = styled("span", checkboxProps)`
  display: flex;
  align-items: center;
  justify-content: center;
  width: 24px;
  height: 24px;
  margin: 0 1.25rem 0 1.5rem;
  border-radius: 2px;
  background: ${p => p.colorLight};

  & > .checkbox-icon {
    color: ${p => p.colorDark};
    opacity: ${p => (p.isChecked ? 1 : 0)};
    font-size:  20px;
    transition: opacity: 0.35s;
  }
`;

const Title = styled.span`
  display: block;
  font-weight: 600;
  font-size: 0.875rem;
`;

const Subtitle = styled.span`
  display: block;
  font-weight: 600;
  font-size: 0.75rem;
  color: ${rgba("#10132F", 0.38)};
`;

const MoreIcon = styled.span`
  font-size: 28px;
  color: ${rgba("#10132F", 0.38)};
`;

export default {
  props: {
    items: String,
    onClick: Function
  },
  components: {
    Wrapper,
    Row,
    Checkbox,
    Title,
    Subtitle,
    MoreIcon
  }
};
</script>
