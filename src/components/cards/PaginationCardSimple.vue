<template>
  <Card>
    <PageButton
      :disabled="activeIndex === 0"
      @click="buildPagination(0)"
      class="material-icons-outlined"
    >
      first_page</PageButton
    >
    <PageButton
      v-for="item in pages"
      :key="item"
      @click="buildPagination(item)"
      :isActive="activeIndex === item"
      >{{ item + 1 }}</PageButton
    >
    <PageButton
      :disabled="activeIndex === pageCount - 1"
      @click="buildPagination(pageCount - 1)"
      class="material-icons-outlined"
    >
      last_page
    </PageButton>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const colorTextDefault = rgba("white", 0.65);
const colorTextActive = rgba("white", 0.85);
const colorTextDisabled = rgba("white", 0.25);

const Card = styled.div`
  padding: 0.875rem 0.5rem;
  border-radius: 0.5rem;
  background: #191919;
  display: flex;
  align-items: center;
`;

const PageButton = styled("button", { isActive: Boolean })`
  height: 36px;
  width: 36px;
  margin: 0 0.0875rem;
  border-radius: 50%;
  border: 0;
  font-size: 0.825rem;
  font-weight: 700;
  background: ${props => (props.isActive ? "#8868d4" : "transparent")};
  color: ${props => (props.isActive ? colorTextActive : colorTextDefault)};

  &:hover:not(:disabled) {
    ${props => (!props.isActive ? `background: ${rgba("white", 0.05)}` : "")};
  }

  &:disabled {
    color: ${colorTextDisabled};
  }
`;

const pageSize = 4;

export default {
  components: {
    Card,
    PageButton
  },
  created() {
    this.buildPagination(0);
  },
  data() {
    return {
      pages: [],
      pageSize: pageSize,
      pageCount: Math.ceil(32 / pageSize),
      totalRowCount: 32,
      activeIndex: 0
    };
  },
  methods: {
    buildPagination(pageIndex) {
      this.activeIndex = pageIndex;
      const pagesToDisplay = 5;
      let pages = [];
      let start = 0;
      let end = pagesToDisplay;

      if (pageIndex > (pagesToDisplay - 1) / 2) {
        start = pageIndex - (pagesToDisplay - 1) / 2;
        end = start + pagesToDisplay;
      }

      if (pageIndex > this.pageCount - (pagesToDisplay + 1) / 2) {
        start = this.pageCount - pagesToDisplay;
        end = this.pageCount;
      }

      for (var i = start; i < end; i++) {
        pages.push(i);
      }

      this.pages = pages;
    }
  }
};
</script>
