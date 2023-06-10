import React, { useState ,useEffect} from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../../components/sidebar";
import menuData from "../../data/dashboard.json";
import Library from "./components/library";
import Orders from "./components/orders";
import PersonalInformation from "./components/personalInformation";
import Search from "./components/search";
import Upload from "./components/upload";
import axios from "axios";
import { BaseBackURL } from "../../constant/api";

const Dashboard = () => {
  const navigate = useNavigate();
  const [select, setSelect] = useState(0);
  const [sayings, setSayings] = useState([]);
  const [filterSaying,setFilterSaying]=useState({});

  const getSayings = () => {
    let confing = {
      method: "get",
      url: `${BaseBackURL}sayings/`,
    };

    axios(confing)
      .then((res) => {
        setSayings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSayings();
  },[]);


  useEffect(()=>{
    if(sayings.find(x=>x.position == "کتاب ها")){
      setFilterSaying({...sayings.find(x=>x.position == "کتاب ها")})
    }
  },[sayings.length>0])

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
            {/* <Route path="/search" element={<Search />} /> */}
          </Routes>
        </Wraper>
      </Content>
      <SideBar moblieborder="83vw" width="20%" saying={filterSaying} />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding-left: 1.736vw;
  @media (max-width: 800px){
    flex-direction:column;
    justify-content: center;
    align-tems:center;
    padding-left: 0;
  }
`;

const Content = styled.div`
  width: 68%;
  height: 60vh;
  display: flex;
  gap: 0.736vw;
  padding-top: 4vw;
  padding-right: 4vw;
  @media (max-width: 800px){
    flex-direction:column;
    width: 90%;
    margin: 0 auto;
    padding:6.25vw 0 4.861vw 0;
    justify-content:center;
    height: auto;
    align-tems:center;
    padding-left: 0;
  }

`;

const Menu = styled.div`
  width: 30%;
  display: flex;
  flex-direction: column;
  gap: 1.042vw;
  height:auto;
  
  @media (max-width: 800px){
  flex-direction:row;
  width: 100%; 
  }
`;

const Item = styled.div`
  width: 90%;
  padding: 0.694vw;
  text-align: center;
  align-tems:center;
  font-size: 1vw;
  font-weight: 400;
  color: ${(props) => props.theme.textColor[1]};
  border: 2px solid #fe9900;
  cursor: pointer;
  &.active {
    color: ${(props) => props.theme.textColor[2]};
    border-color: ${(props) => props.theme.textColor[2]};
  }

  @media (max-width: 800px){
    padding: 0.694vw;
    font-size: 2.6vw;
    font-weight: 400; 
    display: flex;
    justify-content: center;
    align-items:center;
    }
`;

const Wraper = styled.div`
  width: 70%;
  @media (max-width: 800px){
    height:auto;
    flex-direction:row;
    width: 100%;
    }
`;

export default Dashboard;
