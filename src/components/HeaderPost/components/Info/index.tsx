import { ArrowSquareOut, Buildings, CaretLeft, GithubLogo, Users } from '@phosphor-icons/react';
import { useContext } from 'react';
import { InfoContainer, InfoContent } from "./style";
import { PostContext } from '../../../../contexts/PostContext';
import { UserContext } from '../../../../contexts/UserContext';

export function Info() {
  const user = useContext(UserContext);
  const { post } = useContext(PostContext);
  console.log(post)
  return (
    <InfoContainer>
          <InfoContent>
            <header>
              <div>
                <a href="/"><CaretLeft weight='bold' /> VOLTAR</a>
              </div>
              <div>
                <a href={post.html_url} target="_blank">VER NO GITHUB <ArrowSquareOut weight='bold' /></a>
              </div>
            </header>
            <h2>{post.title}</h2>
            <footer>
              <span><GithubLogo weight='fill' /> {user?.login}</span>
              <span><Buildings weight='fill' /> {user?.company}</span>
              <span><Users weight='fill'/> {user?.followers} seguidores</span>
            </footer>
          </InfoContent>
    </InfoContainer>
  );
}