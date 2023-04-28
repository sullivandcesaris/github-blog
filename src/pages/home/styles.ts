import styled from "styled-components";

export const HomeContainer = styled.div`
  height: 100vh;
  position: relative;
  background-color: ${(props) => props.theme["base-background"]};
  padding-top: 7rem;
`

export const HomeContent = styled.div`
  width: 54rem;
  margin: 0 auto;
`

export const SearchContent = styled.form`
  display: flex;
  flex-direction: column;

  input {
    height: 3.125rem;
    padding: 12px 16px;
    background: #040F1A;
    border: 1px solid #1C2F41;
    border-radius: 6px;
    color: ${props => props.theme["base-label"]};
  }

  input::placeholder {
    font: 400 1rem 'Nunito';
    color: ${props => props.theme["base-label"]};
  }
`

export const HeaderSearchForm = styled.header`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1rem;

  h3 {
    font: 700 1.125rem 'Nunito';
    color: ${props => props.theme["base-subtitle"]};
  }

  span {
    font: 400 0.875rem 'Nunito';
    color: ${props => props.theme["base-span"]};
  }
`