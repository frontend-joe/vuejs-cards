<template>
  <Card>
    <TopRow>
      <span>Direct Messages</span>
      <Dropdown>
        <span>Unread</span>
        <span class="material-icons-outlined">expand_more</span>
      </Dropdown>
    </TopRow>
    <List>
      <Row v-for="item in items" :key="item.name">
        <RowImage :src="item.image" />
        <RowContent>
          <RowText>{{ item.text }}</RowText>
          <div>
            <Author>{{ item.name }}</Author>
            <Created>{{ item.created }}</Created>
          </div>
        </RowContent>
        <RowStatus>
          <StatusBadge class="status-badge" :status="item.status">
            <StatusBadgeText class="status-badge-text">
              {{ item.status }}
            </StatusBadgeText>
          </StatusBadge>
        </RowStatus>
      </Row>
    </List>
  </Card>
</template>

<script>
import styled from "vue-styled-components";

const Card = styled.div`
  border-radius: 0.5rem;
  background: #ffffff;
  border: 1px solid rgba(0, 0, 0, 0.05);
  color: #606060;
  padding: 1.5rem;
`;

const TopRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  margin-bottom: 1rem;
`;

const Dropdown = styled.div`
  display: flex;
  align-items: center;
  padding: 0.25rem 0.25rem 0.25rem 0.5rem
  font-size: 0.75rem;
  color: #7d61c3;
  border-radius: 0.25rem;
  border: 1px solid rgba(0, 0, 0, 0.125);

  & > .material-icons-outlined { font-size: 20px; }
`;

const List = styled.div`
  display: flex;
  flex-direction: column;
`;

const Row = styled.div`
  position: relative;
  display: flex;
  align-items: center;
  justify-content: space-between;
  flex-wrap: wrap;
  padding: 0.75rem 0;

  &:hover .status-badge {
    ${"" /* max-width: 100px; */}
    transform: scale(1, 1);
    ${"" /* transform: scale(4, 1); */}
  }

  &:hover .status-badge-text {
    transform: scale(1, 1);
    ${"" /* max-width: 100px; */}
    padding: 0.175rem 0.5rem;
    font-size: 0.75rem;
  }
`;

const RowImage = styled.img`
  flex: 0 0 40px;
  width: 40px;
  height: 40px;
  border-radius: 50%;
  margin-right: 1rem;
`;

const RowContent = styled.div`
  flex: 1;
  min-width: 1px;
  transition: all 0.25s;
`;

const RowText = styled.div`
  flex: 0 1 auto;
  white-space: nowrap;
  overflow: hidden;
  text-overflow: ellipsis;
  font-size: 0.875rem;
  line-height: 1.5;
`;

const RowStatus = styled.div`
  flex: 0 0 auto;
  margin-left: 1rem;
`;

const Author = styled.span`
  font-size: 0.75rem;
  margin-right: 0.5rem;
`;

const Created = styled.span`
  font-size: 0.75rem;
  color: #a7a7a7;
`;

const badgeProps = { status: String };
const StatusBadge = styled("div", badgeProps)`
  position: relative;
  min-height: 10px;
  max-height: 10px;

  ${"" /* max-width: 1px; */}

  font-size: 0.75rem;
  text-transform: capitalize;
  color: #ffffff;
  ${props => (props.status === "critical" ? "background: #c322e0;" : "")};
  ${props => (props.status === "normal" ? "background: #49289c;" : "")};
  ${props => (props.status === "high" ? "background: #4d8fd4;" : "")};

  ${"" /* transition: max-width 0.35s ease-in-out; */}

  transition: transform 0.35s ease-in-out;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: inherit;
  }

  &::after {
    content: "";
    position: absolute;
    top: 0;
    right: -5px;
    width: 10px;
    height: 10px;
    border-radius: 50%;
    background: inherit;
  }
`;

const StatusBadgeText = styled.div`
  position: relative;
  z-index: 2;
  ${"" /* max-width: 0;
  overflow: hidden; */}
  font-size: 0;
  ${"" /* transition: max-width 0.25s; */}
  transform: scale(0, 0);
  transform-origin: 100% 50%;
  transition: transform 0.35s ease-in-out;
`;

export default {
  components: {
    Card,
    TopRow,
    Dropdown,
    List,
    Row,
    RowImage,
    RowContent,
    RowText,
    RowStatus,
    Author,
    Created,
    StatusBadge,

    StatusBadgeText
  },
  data() {
    return {
      items: [
        {
          image: require("@/assets/images/person1.jpeg"),
          name: "Benik",
          text: "How do I capitalise on my increased impressions bro?",
          created: "Just now",
          status: "critical"
        },
        {
          image: require("@/assets/images/person2.jpg"),
          name: "Adnan",
          text: "Wow how do you get so many followers?",
          created: "2 minutes ago",
          status: "normal"
        },
        {
          image: require("@/assets/images/person3.jpg"),
          name: "Florence",
          text: "Can you tell me some good places to learn Vue?",
          created: "An hour ago",
          status: "high"
        }
      ]
    };
  }
};
</script>
