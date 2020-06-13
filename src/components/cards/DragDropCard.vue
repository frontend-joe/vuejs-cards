<template>
  <Card>
    <CardTitle>
      Top Designers
    </CardTitle>
    <Draggable>
      <ListItem v-for="item in items" :key="item.name">
        <ListItemImage :src="item.image" />
        <div>
          <ListItemName>{{ item.name }}</ListItemName>
          <ListItemJob>{{ item.job }}</ListItemJob>
        </div>
      </ListItem>
    </Draggable>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";
import draggable from "vuedraggable";

const Card = styled.div`
  padding: 2rem 1.5rem 1.5rem;
  border-radius: 0.5rem;
  background: #f7f7fd;
  color: ${rgba("#10132F", 0.8)};
  box-shadow: 0 24px 38px 3px rgba(0, 0, 0, 0.025),
    0 9px 46px 8px rgba(0, 0, 0, 0.025), 0 11px 15px -7px rgba(0, 0, 0, 0.025);
`;

const CardTitle = styled.div`
  margin-bottom: 2rem;
`;

const ListItem = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  height: 56px;
  border-radius: 30px;
  overflow: hidden;
  padding: 0 1.5rem 0 3.75rem;
  margin-bottom: 1.25rem;
  width: 100%;
  background: #f7f7fd;
  box-shadow: 6px 6px 15px #eaeaf3, -2px -2px 15px #ffffff;
  }
`;

const ListItemImage = styled.img`
  position: absolute;
  top: 0;
  left: 0;
  height: 100%;
  border-radius: 50%;
  margin-right: 1rem;
  border: 8px solid #f7f7fd;
`;

const ListItemName = styled.div`
  margin-bottom: 0.25rem;
  font-size: 0.875rem;
`;

const ListItemJob = styled.div`
  color: ${rgba("#10132F", 0.5)};
  font-size: 0.75rem;
`;

export default {
  components: {
    Card,
    CardTitle,
    Draggable: draggable,
    ListItem,
    ListItemImage,
    ListItemName,
    ListItemJob
  },
  data() {
    return {
      items: [
        {
          name: "Dan",
          job: "Product Designer",
          image: require("@/assets/images/dan.png")
        },
        {
          name: "Mike",
          job: "UI/UX Designer",
          image: require("@/assets/images/mike.png")
        },
        {
          name: "Leo",
          job: "UX/UI Designer",
          image: require("@/assets/images/leeo.png")
        }
      ]
    };
  }
};
</script>
