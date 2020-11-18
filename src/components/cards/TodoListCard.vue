<template>
  <Card>
    <Header>
      <HeaderText>Todos</HeaderText>
      <Dropdown>
        <span>
          Create
        </span>
        <span class="material-icons-outlined">
          expand_more
        </span>
      </Dropdown>
    </Header>
    <TodoList :items="items" :onClick="handleClick" />
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import TodoList from "./TodoList";

const Card = styled.div`
  width: 300px;
  padding: 1.5rem;
  border-radius: 0.5rem;
  background: #f7f7fd;
  color: ${rgba("#10132F", 0.8)};
  box-shadow: 0 4px 38px 3px rgba(0, 0, 0, 0.025);
`;

const Header = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const HeaderText = styled.div`
  font-weight: 600;
  font-size: 1.175rem;
`;

const Dropdown = styled.div`
  background: #e1f0ff;
  display: flex;
  align-items: center;
  padding: 0.5rem 0.75rem;
  border-radius: 0.325rem;
  font-size: 0.75rem;
  font-weight: 600;

  & > span {
    color: #3699ff;
  }

  & > span.material-icons-outlined {
    font-size: 16px;
    margin-left: 0.325rem;
  }
`;

const items = [
  {
    title: "Learn HTML & CSS",
    subtitle: "Due in 2 Days",
    colorDark: "#1BC5BD",
    colorLight: "#e2efee",
    isChecked: false
  },
  {
    title: "Begin JavaScript",
    subtitle: "Due in 2 Days",
    colorDark: "#3699FF",
    colorLight: "#E1F0FF",
    isChecked: false
  },
  {
    title: "Read about UX",
    subtitle: "Due in 4 Days",
    colorDark: "#9677d3",
    colorLight: "#ebe5f5",
    isChecked: false
  }
];

export default {
  components: {
    TodoList,
    Card,
    Header,
    HeaderText,
    Dropdown
  },
  data() {
    return {
      items
    };
  },
  methods: {
    handleClick(index, isChecked) {
      items[index].isChecked = !isChecked;
    }
  }
};
</script>
