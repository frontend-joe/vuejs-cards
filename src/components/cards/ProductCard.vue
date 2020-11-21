<template>
  <Card>
    <Row :style="{ marginBottom: '3rem' }">
      <div>
        <CardText :opacity="0.5" size="0.875rem">
          Balance
        </CardText>
        <CardText :opacity="0.85" size="1.5rem">$7,248</CardText>
      </div>

      <div>
        <CardText :opacity="0.5" size="0.875rem">
          Cards
        </CardText>
        <CardText align="right" :opacity="0.85" size="1.5rem">03</CardText>
      </div>
    </Row>
    <Row>
      <div>
        <CardText :opacity="0.5" size="0.75rem">
          Wallet Name
        </CardText>
        <CardText :opacity="0.85" size="1.25rem">Joe's</CardText>
      </div>
      <Logo />
    </Row>
  </Card>
</template>

<script>
import styled, { css } from "vue-styled-components";
import { rgba } from "polished";

const shadowStyles = isBefore => css`
  content: "";
  position: absolute;
  z-index: ${isBefore ? "-2" : "-1"};
  top: ${isBefore ? "-10px" : "-20px"};
  left: ${isBefore ? "10px" : "20px"};
  top: ${isBefore ? "-10px" : "-20px"};
  width: calc(100% - ${isBefore ? "20px" : "40px"});
  height: 100%;
  border-radius: 3rem;
  background: ${rgba("#6700c3", 0.5)};
`;

const Card = styled.div`
  position: relative;
  width: 300px;
  padding: 2rem 2.5rem;
  border-radius: 2.5rem;
  background: linear-gradient(to right, #6700c3, #7a00ff);
  color: white;

  &::before {
    ${shadowStyles(true)};
  }

  &::after {
    ${shadowStyles(false)};
  }
`;

const Row = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const textProps = {
  size: String,
  opacity: Number,
  margin: String,
  align: String
};

const CardText = styled("div", textProps)`
  margin: ${p => p.margin || 0};
  font-weight: 600;
  font-size: ${p => p.size || "1rem"};
  text-align: ${p => p.align || "left"};
  color: ${p => rgba("white", p.opacity || 1)};
`;

const Logo = styled.div`
  display: inline-block;
  position: relative;
  width: 30px;
  height: 30px;
  border-radius: 50%;
  background: #baa2d0;

  &::before {
    content: "";
    position: absolute;
    top: 0;
    left: -15px;
    width: 100%;
    height: 100%;
    border-radius: 50%;
    background: #e3ccf7;
  }
`;

export default {
  components: {
    Card,
    Row,
    CardText,
    Logo
  }
};
</script>
