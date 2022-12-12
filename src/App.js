import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Main from "./pages/main";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />
        <Main />
      </ThemeProvider>
    </div>
  );
}

export default App;
