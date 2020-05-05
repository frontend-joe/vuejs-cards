<template>
  <Card>
    <Sky>
      <CardTitle>Friday</CardTitle>
      <CardWeather>32° Cloudy</CardWeather>
      <CloudWrapper>
        <Cloud />
      </CloudWrapper>
      <Mountain left="-160px" bottom="-230px" color="#78c7f7" />
      <Mountain left="0px" bottom="-230px" color="#78c7f7" />
      <Mountain left="140px" bottom="-260px" color="#78c7f7" />
    </Sky>
    <List>
      <ListItem v-for="item in weather" :key="item.day">
        <Day>{{ item.day }}</Day>
        <Icon :class="`wi ${item.icon}`"></Icon>
        <Temp>{{ item.temp }}</Temp>
      </ListItem>
    </List>
  </Card>
</template>

<script>
import styled from "vue-styled-components";
import { rgba } from "polished";

const Card = styled.div`
  overflow: hidden;
  border-radius: 0.5rem;
  width: 330px;
  background: #f3f3f3;
  color: #606060;
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
`;

const CardTitle = styled.div`
  font-size: 1.5rem;
  margin-bottom: 0.5rem;
`;

const CardWeather = styled.div`
  font-size: 1rem;
  color: ${rgba("#000000", 0.4)};
`;

const Sky = styled.div`
  position: relative;
  overflow: hidden;
  background: #c4e7ff;
  height: 190px;
  padding: 2rem;
`;

const CloudWrapper = styled.div`
  position: absolute;
  top: 50px;
  right: 32px;
`;

const Cloud = styled.div`
  position: relative;
  width: 70px;
  height: 30px;
  border-radius: 15px;
  background: #ffffff;

  &::before {
    content: "";
    position: absolute;
    z-index: 1;
    top: 0;
    left: 50%;
    transform: translate(-50%, -50%);
    width: 40px;
    height: 40px;
    border-radius: 50%;
    background: inherit;
  }
`;

const mountainProps = { bottom: String, left: String, color: String };
const Mountain = styled("div", mountainProps)`
  position: absolute;
  left: ${props => props.left};
  bottom: ${props => props.bottom};
  height: 300px;
  width: 300px;
  transform: rotate(45deg) skew(-15deg, -15deg);
  border-radius: 20px;
  background: ${props => rgba(props.color, 0.25)};
`;

const List = styled.div`
  background: #ffffff;
  display: flex;
  align-items: center;
  padding: 1rem 1rem;
`;

const ListItem = styled.div`
  flex: 1;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: center;
  height: 70px;
`;

const Day = styled.div`
  font-size: 12px;
`;

const Icon = styled.span`
  font-size: 18px;
`;

const Temp = styled.div`
  font-size: 14px;
`;

export default {
  components: {
    Card,
    CardTitle,
    CardWeather,
    Sky,
    Mountain,
    CloudWrapper,
    Cloud,
    List,
    ListItem,
    Day,
    Icon,
    Temp
  },
  data() {
    return {
      weather: [
        { day: "Mon", icon: "wi-day-cloudy", temp: "28°" },
        { day: "Tue", icon: "wi-day-cloudy", temp: "29°" },
        { day: "Wed", icon: "wi-day-rain", temp: "30°" },
        { day: "Thu", icon: "wi-day-sunny", temp: "32°" },
        { day: "Fri", icon: "wi-day-cloudy", temp: "32°" }
      ]
    };
  }
};
</script>
