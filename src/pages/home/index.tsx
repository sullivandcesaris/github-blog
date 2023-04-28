import { Header } from "../../components/Header";
import { PostsGithub } from "./components/PostsGithub";
import { HeaderSearchForm, HomeContainer, HomeContent, SearchContent } from "./styles";

export function Home() {
  return (
    <>
      <Header/>
      <HomeContainer>
        <HomeContent>
          <SearchContent>
            <HeaderSearchForm>          
              <h3>Publicações</h3>
              <span>6 publicações</span>
            </HeaderSearchForm>
            <input type="text" placeholder="Buscar conteúdo" />
          </SearchContent>
          <PostsGithub />
        </HomeContent>
      </HomeContainer>
    </>
  )
}