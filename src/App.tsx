import { ThemeProvider } from "styled-components";
import { BrowserRouter } from 'react-router-dom'
import { Router } from './Router'
import { defaultTheme } from "./styles/themes/default";
import { GlobalStyle } from "./styles/global";
import { UserProvider } from "./contexts/UserContext";
import { IssueProvider } from "./contexts/IssueContext";
import { PostProvider } from "./contexts/PostContext";

export function App() {

  return (

      <ThemeProvider theme={defaultTheme}>
        <UserProvider>
            <BrowserRouter>
                <IssueProvider>
                  <PostProvider>
                    <Router />
                  </PostProvider>
                </IssueProvider>
            </BrowserRouter>
            <GlobalStyle />
        </UserProvider>
      </ThemeProvider>

  )
}
