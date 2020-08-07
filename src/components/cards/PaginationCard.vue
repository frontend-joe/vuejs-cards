<template>
  <Card>
    <CardHeader>
      Awesome Devs
    </CardHeader>
    <CardList>
      <CardItem v-for="item in getPagedItems" :key="item.id">
        <CardAvatar :background="item.background" />
        <CardTitle>
          {{ item.name }}
        </CardTitle>
        <CardText>
          {{ item.followers }}
        </CardText>
      </CardItem>
    </CardList>

    <div :style="{ display: 'flex' }">
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
        :disabled="activeIndex === pageCount - 1 || activeIndex > pageCount - 2"
        @click="buildPagination(pageCount - 1)"
        class="material-icons-outlined"
      >
        last_page
      </PageButton>
    </div>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const CardList = styled.div`
  width: 100%;
  margin-bottom: 1.25rem;
`;

const CardHeader = styled.div`
  font-weight: 500;
  font-size: 1rem;
  margin-bottom: 1.75rem;
  color: ${rgba("white", 0.5)};
`;

const CardItem = styled.div`
  display: flex;
  align-items: center;
  margin-bottom: 1rem;
  padding-bottom: 1rem;
  border-bottom: 1px solid ${rgba("white", 0.05)};

  &:last-child {
    margin-bottom: 0;
  }
`;

const CardTitle = styled.div`
  flex: 1 0 100px;
  font-weight: 700;
  color: ${rgba("white", 0.85)};
`;

const CardText = styled.p`
  margin: 0;
  color: ${rgba("white", 0.57)};
`;

const styleProps = {
  isActive: Boolean,
  background: String
};

const CardAvatar = styled("div", styleProps)`
  flex: 0 0 14px;
  margin-right: 1rem;
  width: 14px;
  height: 14px;
  border-radius: 50%;
  color: white;
  background: ${props => props.background};
`;

const colorTextDefault = rgba("white", 0.65);
const colorTextActive = rgba("white", 0.85);
const colorTextDisabled = rgba("white", 0.3);

const Card = styled.div`
  padding: 1.5rem 1rem;
  border-radius: 0.5rem;
  background: #191919;
`;

const PageButton = styled("button", styleProps)`
  margin: 0 0.0875rem;
  border: 0;
  border-radius: 50%;
  background: ${props => (props.isActive ? "#8868d4" : "transparent")};
  color: ${props => (props.isActive ? colorTextActive : colorTextDefault)};
  padding: 0;
  height: 36px;
  width: 36px;
  flex: 0 0 auto;
  line-height: 0.5;
  font-size: 13px;
  font-weight: 700;

  &:hover {
    ${props => (!props.isActive ? `background: ${rgba("white", 0.05)}` : "")};
  }

  &:disabled {
    color: ${colorTextDisabled};
  }
`;

export default {
  components: {
    CardList,
    CardHeader,
    CardItem,
    CardTitle,
    CardText,
    CardAvatar,
    Card,
    PageButton
  },
  data() {
    return {
      items: [
        { id: 1, name: "Aral", background: "#EDF060", followers: "94k" },
        { id: 10, name: "Andres", background: "#FF5A5F", followers: "61k" },
        {
          id: 10,
          name: "TheCodeCrumbs",
          background: "#8868d4",
          followers: "61k"
        },
        { id: 2, name: "Fidalgo", background: "#F0803C", followers: "47k" },
        { id: 3, name: "Jessica", background: "#50D8D7", followers: "45k" },
        { id: 4, name: "Sasha", background: "#F0803C", followers: "42k" },
        { id: 5, name: "Nerd JFPB", background: "#EDF060", followers: "29k" },
        { id: 56, name: "Bianca", background: "#09BC8A", followers: "27k" },
        { id: 55, name: "Joe", background: "#8868d4", followers: "24k" },
        {
          id: 6,
          name: "TheCodingRoom",
          background: "#F0803C",
          followers: "17k"
        },
        { id: 6, name: "Yusuf", background: "#09BC8A", followers: "14k" },
        { id: 7, name: "James", background: "#ffffff", followers: "12k" },
        { id: 9, name: "Luca", background: "#8868d4", followers: "8k" },
        { id: 8, name: "Dylan", background: "#F0803C", followers: "7k" },
        { id: 18, name: "Lazar", background: "#09BC8A", followers: "3k" },
        { id: 19, name: "Luke", background: "#e7e7e7", followers: "2k" },
        { id: 1, name: "Aral", background: "#EDF060", followers: "94k" },
        { id: 10, name: "Andres", background: "#8868d4", followers: "61k" },
        {
          id: 10,
          name: "TheCodeCrumbs",
          background: "#8868d4",
          followers: "61k"
        },
        { id: 2, name: "Fidalgo", background: "#F0803C", followers: "47k" },
        { id: 3, name: "Jessica", background: "#50D8D7", followers: "45k" },
        { id: 4, name: "Sasha", background: "#F0803C", followers: "42k" },
        { id: 5, name: "Nerd JFPB", background: "#EDF060", followers: "29k" },
        { id: 56, name: "Bianca", background: "#09BC8A", followers: "27k" },
        { id: 55, name: "Joe", background: "#8868d4", followers: "24k" },
        {
          id: 6,
          name: "TheCodingRoom",
          background: "#F0803C",
          followers: "17k"
        },
        { id: 6, name: "Yusuf", background: "#09BC8A", followers: "14k" },
        { id: 7, name: "James", background: "#ffffff", followers: "12k" },
        { id: 9, name: "Luca", background: "#8868d4", followers: "8k" },
        { id: 8, name: "Dylan", background: "#F0803C", followers: "7k" },
        { id: 18, name: "Lazar", background: "#09BC8A", followers: "3k" },
        { id: 19, name: "Luke", background: "#e7e7e7", followers: "2k" }
      ],
      pages: [],
      pageSize: 4,
      pageCount: Math.ceil(32 / 4),
      totalRowCount: 32,
      activeIndex: 0
    };
  },
  computed: {
    getPagedItems() {
      const start = this.activeIndex * this.pageSize;
      const end = start + this.pageSize;
      const pagedItems = this.items.slice(start, end);
      return pagedItems;
    }
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
  },
  created() {
    this.buildPagination(0);
  }
};
</script>
