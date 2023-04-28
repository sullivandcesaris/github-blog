import { ArrowSquareOut, Buildings, GithubLogo, Users } from '@phosphor-icons/react';
import Avatar from '../../../../assets/avatar.png'
import { InfoContainer, InfoContent } from "./style";

export function Info() {
  return (
    <InfoContainer>
      <img src={Avatar} />
      <InfoContent>
        <header>
          <h2>Cameron Williamson</h2>
          <div>
            <a href="#">GITHUB <ArrowSquareOut weight='bold' /></a>
          </div>
        </header>
        <p>Tristique volutpat pulvinar vel massa, pellentesque egestas. Eu viverra massa quam dignissim aenean malesuada suscipit. Nunc, volutpat pulvinar vel mass.</p>
        <footer>
          <span><GithubLogo weight='fill' /> cameronwll</span>
          <span><Buildings weight='fill' /> Rocketseat</span>
          <span><Users weight='fill'/> 32 seguidores</span>
        </footer>
      </InfoContent>
    </InfoContainer>
  )
}