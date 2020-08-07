<template>
  <Card>
    <Scrollbar>
      <List>
        <Item v-for="item in items" :key="item.name">
          <ImageWrapper :isActive="item.isActive">
            <ItemImage :src="require(`@/assets/images/${item.name}.png`)" />
          </ImageWrapper>
          <ItemTitle>{{ item.name }}</ItemTitle>
          <ItemFooter>
            <i class="material-icons-outlined likes">favorite</i>
            <span>{{ item.follows }}k</span>
            <i class="material-icons-outlined">bookmark_outline</i>
            <span>{{ item.saves }}k</span>
          </ItemFooter>
        </Item>
      </List>
    </Scrollbar>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import VuePerfectScrollbar from "vue-perfect-scrollbar";

const Card = styled.div`
  width: 300px;
  display: flex;
  flex-direction: column;
  padding: 3rem 2rem;
  font-weight: 700;
  border-radius: 1rem;
  background: white;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.05);
`;

const Scrollbar = styled(VuePerfectScrollbar)`
  flex: 1 1 auto;
  min-height: 0;
`;

const List = styled.div`
  display: flex;
  justify-content: flex-start;
  padding-bottom: 2rem;
`;

const Item = styled.div`
  margin-right: 1.5rem;
`;

const ItemTitle = styled.div`
  font-weight: 700;
  font-size: 1.25rem;
  text-align: center;
  text-transform: capitalize;
  margin-bottom: 0.325rem;
  color: ${rgba("#10132F", 0.75)};
`;

const styleProps = { isActive: Boolean };
const ImageWrapper = styled("div", styleProps)`
  width: 140px;
  height: 140px;
  padding: 3px;
  border-radius: 50%;
  margin-bottom: 1rem;
  box-shadow: 0px 8px 16px rgba(0, 0, 0, 0.05);
  background: ${props =>
    props.isActive
      ? "linear-gradient(to bottom,#bda0f1 0%,#89d0c3 100%)"
      : "white"};
`;

const ItemImage = styled.img`
  width: 100%;
  height: 100%;
  border-radius: 50%;
  border: 5px solid white;
`;

const ItemFooter = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  color: ${rgba("#10132F", 0.38)};

  & > span {
    font-size: 12px;
  }

  & > i {
    font-size: 16px;
    margin: 0 0.325rem;
  }

  & i.likes {
    color: #fe0f7c;
  }
`;

export default {
  components: {
    Card,
    Scrollbar,
    List,
    Item,
    ItemTitle,
    ImageWrapper,
    ItemImage,
    ItemFooter
  },
  data() {
    return {
      items: [
        { name: "andrew", follows: 9, saves: 1 },
        { name: "miriam", follows: 39, saves: 4, isActive: true },
        { name: "jan", follows: 29, saves: 3 },
        { name: "dan", follows: 34, saves: 4 },
        { name: "mike", follows: 29, saves: 3 },
        { name: "leeo", follows: 9, saves: 1 }
      ]
    };
  }
};
</script>
