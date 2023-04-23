import styled from 'styled-components'

export const HeaderContainer = styled.div`
  height: 18.625rem;
  background-color: ${(props) => props.theme['base-profile']}; 
  z-index: 9;
`

export const HeaderContent = styled.header`
  display: flex;
  justify-content: space-between;
  align-items: center;
`

export const LogoHeader = styled.img`
  margin-top: -5rem;

`

export const EffectLeft = styled.div`
  position: absolute;
  width: 236px;
  height: 236px;
  left: -130px;
  top: -96px;

  background: #14589C;
  filter: blur(200px);
`

export const EffectRight = styled.div`
  position: absolute;
  width: 155.25px;
  height: 155.25px;
  right: 0px;
  top: -52.14px;

  background: #14589C;
  filter: blur(184px);
`

export const EffectBottom = styled.div`
  position: absolute;
  width: 891px;
  height: 52px;
  left: calc(50% - 891px/2 - 2.5px);
  top: 235px;

  background: #14589C;
  filter: blur(106px);
`