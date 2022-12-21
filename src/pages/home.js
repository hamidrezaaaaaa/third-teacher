import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import Carousel from "../components/carousel";
import Control from "../components/control";

const Home = () => {
  const { title } = useParams();
 
  return (
    <Container>
      <Carousel/>
      <Control/>
      <Swap>
        <p className={title == "philosophy" ? "text active" : "text"}>فلاسفه</p>
        <p className={title == "schools" ? "text active" : "text"}>مدارس</p>
      </Swap>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  justify-content: space-around;
  height:84vh;
`;

const Swap = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 10px;
  padding: 3px 10px;
  background: ${(props) => props.theme.background[1]};

  .text {
    margin: 0;
    padding: 5px 10px;
    font-size: 1.111vw;
    font-weight: 300;
    color: ${(props) => props.theme.textColor[1]};
  }
  .active {
    background: #ffffff;
  }

  @media (max-width: 600px){
    width: 70%;
    .text {
      margin: 0;
      padding: 5px 10px;
      font-size: 5.111vw;
      font-weight: 300;
      color: ${(props) => props.theme.textColor[1]};
    }
  }

  
`;

export default Home;
