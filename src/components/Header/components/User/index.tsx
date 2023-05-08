import { ArrowSquareOut, Buildings, GithubLogo, Users } from '@phosphor-icons/react';
import { useContext } from 'react';
import { InfoContainer, InfoContent } from "./style";
import { UserContext } from '../../../../contexts/UserContext';

export function User() {

  const user = useContext(UserContext);

  return (
    <InfoContainer>
      {user && (
        <>
          <img src={user.avatar_url} alt={user.login} />
          <InfoContent>
            <header>
              <h2>{user.name}</h2>
              <div>
                <a href={`https://github.com/${user.login}`} target="_blank">GITHUB <ArrowSquareOut weight='bold' /></a>
              </div>
            </header>
            <p>{user.bio}</p>
            <footer>
              <span><GithubLogo weight='fill' /> {user.login}</span>
              <span><Buildings weight='fill' /> Rocketseat</span>
              <span><Users weight='fill'/> {user.followers} seguidores</span>
            </footer>
          </InfoContent>
        </>
      )}
    </InfoContainer>
  );
}