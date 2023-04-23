import styled from "styled-components";

export const HomeContainer = styled.div`
height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme["base-background"]};
  padding-top: 7rem;

  div:first-child {
    display: flex;
    justify-content: center;
  }
`