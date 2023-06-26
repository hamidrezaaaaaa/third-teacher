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
import Philosopher from "./components/philosopher/Philosopher";
import SignIn from "./pages/signIn";
import Dashboard from "./pages/dashboard";
import { UserState } from "./context/useContext";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import AdminDashboard from "./admin"
import School from "./components/school";
import PreviewResearch from "./components/researches/previewResearch";
import PreviewCompetition from "./components/competition/previewCompetition";
import ContactUs from "./components/about/contactUs";

function App() {
  return (
    <div className="App">
      <UserState>
        <ThemeProvider theme={theme}>
          <GlobalStyle />

          <Router>
            <Layout>
              <Routes>
                <Route exact path="/" element={<Main />} />
                <Route path="/home/:title" element={<Home />} />
                <Route path="/home/schools/:id" element={<School/>} />
                <Route path="/home/philosophy/:id" element={<Philosopher />} />
                <Route path="/Book" element={<Books />} />
                <Route path="/Book/:id" element={<PreviewBook />} />
                <Route path="/Research" element={<Research />} />
                <Route path="/Research/:id" element={<PreviewResearch/>} />
                <Route path="/Competition" element={<Competition />} />
                <Route path="/Competition/:id" element={<PreviewCompetition/>}  />
                <Route path="/Education" element={<Education />} />
                <Route path="/Education/:title" element={<PreviewEducation />} />
                <Route path="/about" element={<About />} />
                <Route path="/about/team" element={<Team />} />
                <Route path="/about/contact-us" element={<ContactUs/>}/>
                <Route path="/about/green-squad" element={<GreenSquad />} />
                <Route path="/log-in" element={<LogIn />} />
                <Route path="/sign-in" element={<SignIn />} />
                <Route path="/dashboard/*" element={<Dashboard />} />
                <Route path="/admin" element={<AdminDashboard />} />
                <Route path="/admin/*" element={<AdminDashboard />} />
              </Routes>
            </Layout>
          </Router>
          <ToastContainer />
        </ThemeProvider>
      </UserState>
    </div>
  );
}

export default App;
