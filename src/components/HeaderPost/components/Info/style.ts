import styled from 'styled-components'

export const InfoContainer = styled.div`
  width: 54rem;
  background-color: ${(props) => props.theme['base-profile']};
  margin: -5.5rem auto 0 auto;
  padding: 2.25rem 2rem;
  border-radius: 10px;

  display: flex;
  gap: 2rem;
  position: relative;
  z-index: 15;

  img{
    width: 148px;
    height: 148px;
  }
`;

export const InfoContent = styled.div`
  flex-grow: 1;
  display: flex;
  flex-direction: column;
  gap: 0.5rem;

  > * {
    order: 1;
  }

  p {
    line-height: 160%;
  }

  header {
    display: flex;
    justify-content: space-between;
    outline: none;
    margin-bottom: 1.2rem;

    div {
      color: ${(props) => props.theme.blue};

      display: flex;
      align-items: center;
      justify-content: center;
      gap: 0.5rem;

      a {
        color: ${(props) => props.theme.blue};
        font-family: 'Nunito', sans-serif;
        font-weight: bold;
        line-height: 1rem;
        text-decoration: none;

        padding-bottom: 2px;

        display: flex;
        align-items: center;
        gap: 0.5rem;

        svg {
          margin-top: -0.2rem;
        }

        &:hover {
          border-bottom: 1px solid ${(props) => props.theme.blue};
          padding-bottom: 2px;
        }
      }
    }
  }

  footer {
    display: flex;
    gap: 1.5rem;
    order: 2;
    margin-top: auto;

    span {
      display: flex;
      justify-content: center;
      align-items: center;
      gap: 0.5rem;
    }

    svg {
      color: ${(props) => props.theme['base-label']};
    }
  }
`