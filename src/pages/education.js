import React,{useState,useEffect} from "react";
import styled from "styled-components";
import EducationCard from "../components/education/educationCard";
import data from "../data/education.json";
import PreviousDesktop from "../components/previousLink/previousDesktop";
import SideBar from "../components/sidebar";
import axios from "axios";
import { BaseBackURL } from "../constant/api";

const Education = () => {
  const [sayings, setSayings] = useState([]);
  const [filterSaying,setFilterSaying]=useState({});
  const [category,setCategory]=useState([]);

  const getEducationns = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}educations`,
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setCategory(response.data.map((x) => x.category));
      })
      .catch((error) => {
        console.log(error);
      });
  };

  const getSayings = () => {
    let confing = {
      method: "get",
      url: `${BaseBackURL}sayings`,
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
    getEducationns();
  });


  useEffect(()=>{
    if(sayings.find(x=>x.position == "آموزش ها")){
      setFilterSaying({...sayings.find(x=>x.position == "آموزش ها")})
    }
  },[sayings.length>0])

  const source = category.map((item, i) => {
    return <EducationCard key={i} title={item} name={item} />;
  });
  return (
    <Container>
      <Content>
        <PreviousDesktop position="-19.2vh" />
        <Title>آموزش</Title>
        <Gallery>{source}</Gallery>
      </Content>
      <SideBar width='14.2%' saying={filterSaying} />
    </Container>
  );
};

const Container = styled.section`
  height: 70vh;
  height: auto;
  display: flex;
  justify-content: space-between;
  padding-left: 1.736vw;
  
  @media (max-width: 600px){
    flex-direction: column;
  }
  @media (max-width: 800px){
    flex-direction: column;
    padding:0  4vw;
  }
 
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.083vw;
  padding: 1.861vw 6.25vw 4vh;
  flex-grow: 1;
  @media (max-width: 800px) {
    gap: 8.083vw;
  } ;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.textColor[1]};
  font-size: 1vw;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  width: 10%;
  gap: 10px;
  &:after {
    content: "";
    display: inline-flex;
    width: 100%;
    height: 3px;
    background: ${(props) => props.theme.background[1]};
  }

  @media (max-width: 800px) {
    font-size: 3.5vw;
    width: 14%;
    &:after {
      content: "";
      display: inline-flex;
      width: 100%;
      height: 3px;
      background: ${(props) => props.theme.background[1]};
    }
  }

  @media (max-width: 600px) {
    font-size: 3.7vw;
    width: 14%;
    &:after {
      content: "";
      display: inline-flex;
      width: 100%;
      height: 3px;
      background: ${(props) => props.theme.background[1]};
    }
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  gap: 7.736vw;
  margin: 0 auto;
  @media (min-width: 600px) and (max-width: 800px) {
    width: 80%;
    justify-content: space-evenly;
  }
  @media (max-width: 600px) {
    margin: 5vh auto;
    width: 85%;
    justify-content: space-between;
  }
`;

export default Education;
