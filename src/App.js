import React, { useEffect, useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import GlobalStyle from "./styles/globalStyles";
import { ThemeProvider } from "styled-components";
import theme from "./styles/theme";
import Main from "./pages/main";
import Home from "./pages/home";
import { Layout } from "./components/layout";
import Books from "./pages/book";
import PreviewBook from "./components/books/previewBook";
import Research from "./pages/research";
import Competition from "./pages/competition";
import Education from "./pages/education";
import PreviewEducation from "./components/education/previewEducation";
import About from "./pages/about";
import Team from "./components/about/team";
import GreenSquad from "./components/about/greenSquad";
import LogIn from "./pages/logIn";
import SignIn from "./pages/signIn";
import Dashboard from "./pages/dashboard";

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
              <Route path="/Book" element={<Books />} />
              <Route path="/Book/:id" element={<PreviewBook />} />
              <Route path="/Research" element={<Research />} />
              <Route path="/Competition" element={<Competition />} />
              <Route path="/Education" element={<Education />} />
              <Route path="/Education/:id" element={<PreviewEducation />} />
              <Route path="/about" element={<About />} />
              <Route path="/about/team" element={<Team />} />
              <Route path="/about/green-squad" element={<GreenSquad />} />
              <Route path="/log-in" element={<LogIn />} />
              <Route path="/sign-in" element={<SignIn />} />
              <Route path="/dashboard/*" element={<Dashboard />} />
            </Routes>
          </Layout>
        </Router>
      </ThemeProvider>
    </div>
  );
}

export default App;
