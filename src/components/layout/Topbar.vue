<template>
  <StyledWrapper>
    <StyledNavItem v-for="item in items" :key="item.text">
      <router-link :to="{ path: item.url }">
        {{ item.text }}
      </router-link>
    </StyledNavItem>
  </StyledWrapper>
</template>

<script>
import styled from "vue-styled-components";

const StyledWrapper = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  padding: 0.75rem 0;
`;

const StyledNavItem = styled.div`
  & > a {
    margin: 0 0.75rem;
    color: #888888;
    text-decoration: none;
    transition: color 0.25s;
  }

  & > a.router-link-exact-active {
    color: #522cad;
  }

  & > a:hover {
    color: #606060;
  }
`;

export default {
  components: {
    StyledWrapper,
    StyledNavItem
  },
  data: function() {
    return {
      items: [
        {
          url: "/",
          text: "All"
        },
        {
          url: "/dashboard",
          text: "Dashboard"
        },
        {
          url: "/insta-first",
          text: "First"
        },
        {
          url: "/insta-first-alt",
          text: "First 2"
        },
        {
          url: "/insta-result",
          text: "Result"
        },
        {
          url: "/insta-example",
          text: "Example"
        },
        {
          url: "/insta-last",
          text: "Last"
        },
        {
          url: "/insta-last-alt",
          text: "Last 2"
        }
      ]
    };
  }
};
</script>
