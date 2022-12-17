import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Main from "./pages/main";
import Home from "./pages/home";
import { Layout } from "./components/layout";

function App() {
  return (
    <div className="App">
      <ThemeProvider theme={theme}>
        <GlobalStyle />

        <Router>
          <Layout>
            <Routes>
              <Route exact path="/" element={<Main />} />
              <Route path="/home/:title" element={<Home />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
