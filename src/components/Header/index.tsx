import effectLeft from '../../assets/effect-left.svg'
import effectRight from '../../assets/effect-right.svg'
import logoGithubBlob from '../../assets/logo-github-blog.svg'
import { User } from './components/User'
import { EffectBottom, EffectLeft, EffectRight, HeaderContainer, HeaderContent, LogoHeader } from './styles'

export function Header() {
  return (
    <HeaderContainer>
      <EffectLeft></EffectLeft>
      <EffectRight></EffectRight>
      <EffectBottom></EffectBottom>
      <HeaderContent>
        <img src={effectLeft} alt="" />
        <LogoHeader src={logoGithubBlob} alt="" />
        <img src={effectRight} alt="" />
      </HeaderContent>
      <User/>
    </HeaderContainer>
  )
}