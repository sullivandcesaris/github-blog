import { useContext, useState } from "react";
import { Header } from "../../components/Header";
import { IssueContext } from "../../contexts/IssueContext";
import { PostsGithub } from "./components/PostsGithub";
import { ErrorMsg, HeaderSearchForm, HomeContainer, HomeContent, SearchContent } from "./styles";

export function Home() {
  const { issues, setSearch } = useContext(IssueContext);
  const [inputValue, setInputValue] = useState('');

  function handleKeyDown(event: React.KeyboardEvent<HTMLInputElement>) {
    if (event.key === 'Enter') {
      setSearch(inputValue);
    }
  }

  return (
    <>
      <Header/>
      <HomeContainer>
        <HomeContent>
          <SearchContent>
              <HeaderSearchForm>      
                  <h3>Publicações</h3>
                  <span>{issues.length != 1 ? issues.length + ' resultados' : issues.length + ' resultado'}</span>
              </HeaderSearchForm>
              <input type="text" placeholder="Buscar conteúdo" value={inputValue} onChange={e => setInputValue(e.target.value)} onKeyDown={handleKeyDown} />
          </SearchContent>
          {issues.length ? (
            <PostsGithub />
          ) : (
            <ErrorMsg>Nenhum resultado encontrado!</ErrorMsg>
          )}
        </HomeContent>
      </HomeContainer>
    </>
  )
}
