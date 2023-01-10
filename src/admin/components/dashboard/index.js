import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import data from "../../../data/adminDashboard.json";
import Competitions from "./components/competitions/competitions";
import Philosophes from "./components/philosophes/philosophes";
import Researchs from "./components/researches/researches";
import Schools from "./components/schools/schools";
import Users from "./components/users/users";
import Educations from "./components/educations/educations";
import Books from "./components/books/books";

const MainDashboard = () => {
  const navigate = useNavigate();
  const menuItem = data.adminDashboard.map((item, i) => {
    return (
      <Item
        key={i}
        onClick={() => {
          navigate(item.path);
        }}
      >
        <p className="text">{item.name}</p>
      </Item>
    );
  });

  return (
    <Container>
      <Menu>{menuItem}</Menu>
      <Monitor>
        <Routes>
          <Route exact path="/" element={<Users />} />
          <Route path="/philosophes" element={<Philosophes />} />
          <Route path="/schools" element={<Schools/>} />
          <Route path="/competitions" element={<Competitions />} />
          <Route path="/researchs" element={<Researchs />} />
          <Route path="/books" element={< Books/>} />
          <Route path="/educations" element={<Educations />} />
        </Routes>
      </Monitor>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  flex-direction: row;
  gap: 2vw;
`;

const Menu = styled.div`
  width: 20%;
  display: flex;
  flex-direction: column;
  padding: 1vw;
  gap: 2vw;
`;

const Item = styled.div`
  width: 100%;
  padding: 1vw;
  background-color: #616283;
  border-radius: 8px;
  cursor: pointer;
  .text {
    text-align: center;
    color: #0e1116;
    font-size: 2vw;
    font-weight: 400;
  }
`;

const Monitor = styled.div`
  width: 70%;
  border-radius: 8px;
  background-color: #616283;
  padding: 2vw;
  margin: 1vw;
`;

export default MainDashboard;