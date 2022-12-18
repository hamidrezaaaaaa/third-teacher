import React, { useState } from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../../components/sidebar";
import data from "../../data/about.json";
import menuData from "../../data/dashboard.json";
import Library from "./components/library";
import Orders from "./components/orders";
import PersonalInformation from "./components/personalInformation";
import Search from "./components/search";
import Upload from "./components/upload";

const Dashboard = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(0);
  const menuList = menuData.dashboard.map((item, i) => {
    return (
      <Item
        key={i}
        onClick={() => {
          navigate(item.path);
          setSelect(i);
        }}
        className={select == i ? "active" : ""}
      >
        {item.name}
      </Item>
    );
  });

  return (
    <Container>
      <Content>
        <Menu>{menuList}</Menu>
        <Wraper>
          <Routes>
            <Route exact path="/" element={<PersonalInformation />} />
            <Route path="/library" element={<Library />} />
            <Route path="/upload" element={<Upload />} />
            <Route path="/orders" element={<Orders />} />
            <Route path="/search" element={<Search />} />
          </Routes>
        </Wraper>
      </Content>
      <SideBar width="20%" content={data.about[0].test} />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding-left: 1.736vw;
`;

const Content = styled.div`
  width: 68%;
  height: 60vh;
  display: flex;
  gap: 0.736vw;
  padding-top: 4vw;
  padding-right: 4vw;
`;

const Menu = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1.042vw;
`;

const Item = styled.div`
  width: 90%;
  padding: 0.694vw;
  text-align: center;
  font-size: 1.389vw;
  font-weight: 400;
  color: ${(props) => props.theme.textColor[1]};
  border: 2px solid #fe9900;
  cursor: pointer;
  &.active {
    color: ${(props) => props.theme.textColor[2]};
    border-color: ${(props) => props.theme.textColor[2]};
  }
`;

const Wraper = styled.div`
  width: 70%;
`;

export default Dashboard;
