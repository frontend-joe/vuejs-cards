<template>
  <Card>
    <InstaWrapper>
      <InstaShape isGradient padding="12px">
        <InstaShape padding="6px">
          <InstaShape isGradient>
            <MiddleCircle />
            <TopRightDot />
          </InstaShape>
        </InstaShape>
      </InstaShape>
    </InstaWrapper>
    <FollowMeText>
      Follow Me On
    </FollowMeText>
    <InstagramText>
      Instagram
    </InstagramText>
  </Card>
</template>

<script>
import styled, { css } from "vue-styled-components";

const Card = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  padding: 3.5rem 2rem 3rem;
  border-radius: 0.5rem;
  text-align: center;
  color: #606060;
  background: #f3f3f3;
  box-shadow: 8px 8px 10px #e0e0e0, -2px -2px 15px #ffffff;
`;

const InstaWrapper = styled.div`
  display: flex;
  flex-direction: column;
  width: 120px;
  height: 120px;
  margin-bottom: 2rem;
`;

const instagramGradient = css`
  background: radial-gradient(
    circle at 30% 107%,
    #fdf497 0%,
    #fdf497 5%,
    #fd5949 45%,
    #d6249f 60%,
    #285aeb 90%
  );
`;

const shapeProps = { padding: String, isGradient: Boolean };
const InstaShape = styled("div", shapeProps)`
  position: relative;
  flex: 1;
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  width: 100%;
  border-radius: 30px;
  padding: ${props => props.padding};
  ${props => (props.isGradient ? instagramGradient : "background: #f3f3f3;")};
`;

const MiddleCircle = styled.div`
  border-radius: 50%;
  width: 60%;
  height: 60%;
  border: 8px solid #f3f3f3;
`;

const TopRightDot = styled.div`
  position: absolute;
  top: 12px;
  right: 12px;
  width: 10px;
  height: 10px;
  border-radius: 50%;
  background: #f3f3f3;
`;

const FollowMeText = styled.div`
  color: #a7a7a7;
  margin-bottom: 0.325rem;
`;

const InstagramText = styled.div`
  font-size: 3rem;
  font-family: "Billabong";
`;

export default {
  components: {
    Card,
    InstaWrapper,
    InstaShape,
    MiddleCircle,
    TopRightDot,
    FollowMeText,
    InstagramText
  }
};
</script>
