import styled from "styled-components";

export const PostContainer = styled.div`
  position: relative;
  background-color: ${(props) => props.theme["base-background"]};
  padding-top: 7rem;
`

export const PostContent = styled.div`
  width: 54rem;
  margin: 0 auto;
  display: flex;
  flex-direction: column;
  gap: 1rem;

  a {
    color: ${props => props.theme.blue};
  }

  code {
    background-color: ${props => props.theme["base-post"]};
    display: block;
    margin: 1rem 0;
    padding: 1rem;
    border-radius: 8px;
  }
`