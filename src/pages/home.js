import React, { useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import Carousel from "../components/carousel";
import Control from "../components/control";
import PreviousDesktop from "../components/previousLink/previousDesktop";

const Home = () => {
  const navigate = useNavigate();
  const { title } = useParams();
  const [select, setSelect] = useState(title);

  return (
    <Container>
      <PreviousDesktop position="-103vh" />
      <Carousel />
      <Control />
      <Swap>
        <p
          className={select == "philosophy" ? "text active" : "text"}
          onClick={() => {
            setSelect("philosophy");
            navigate('/home/philosophy')
          }}
        >
          فلاسفه
        </p>
        <p
          className={select == "schools" ? "text active" : "text"}
          onClick={() => {
            setSelect("schools");
            navigate('/home/schools')
          }}
        >
          مدارس
        </p>
      </Swap>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  flex-direction: column;
  gap: 7.5vh;
  justify-content: space-around;

  padding-bottom: 4vh;
  @media (max-width: 600px) {
    gap: 4vh;
  }
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
    font-size: 1vw;
    font-weight: 300;
    color: ${(props) => props.theme.textColor[1]};
    cursor: pointer;
    @media (min-width: 600px) and (max-width: 800px) {
      font-size: 2vw;
    }
  }
  .active {
    background: #ffffff;
  }
  @media (min-width: 600px) and (max-width: 800px) {
    width: 30%;
  }

  @media (max-width: 600px) {
    width: 70%;
    .text {
      padding: 15px 10px;
      font-size: 4vw;
      font-weight: 300;
      color: ${(props) => props.theme.textColor[1]};
    }
  }
`;

export default Home;
