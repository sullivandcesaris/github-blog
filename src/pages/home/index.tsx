import { Header } from "../../components/Header";
import { HomeContainer } from "./styles";

export function Home() {
  return (
    <>
      <Header/>
      <HomeContainer>
        <div>
          <div>          
            <h1>Publicações</h1>
            <span>6 publicações</span>
          </div>
          <form>
            <input type="text" />
          </form>
        </div>
      </HomeContainer>
    </>
  )
}