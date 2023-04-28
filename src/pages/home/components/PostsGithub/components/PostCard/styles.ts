import styled from "styled-components";

export const PostContent = styled.div`
  padding: 2rem;
  background-color: ${props => props.theme["base-post"]};
  border-radius: 10px;
  outline: 0px solid ${props => props.theme["base-label"]};

  display: flex;
  flex-direction: column;
  gap: 1.25rem;

  header {
    display: flex;
    justify-content: space-between;
    gap: 1rem;

    h2{
      font: 700 1.25rem 'Nunito';
      color: ${props => props.theme["base-title"]};
      flex: 1;
    }

    span {
      font-size: 0.875rem;
      color: ${props => props.theme["base-span"]};
    }
  }

  section {
    p {
      font-size: 1rem;
      color: ${props => props.theme["base-text"]};
    }
  }

  &:hover {
    outline: 2px solid ${props => props.theme["base-label"]};
    cursor: pointer;
  }
`