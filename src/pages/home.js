import React, { useEffect } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const Home = () => {
  const { title } = useParams();

 
  return (
    <Container>

      
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
  justify-content: center;
`;

const Swap = styled.div`
  width: 10%;
  display: flex;
  justify-content: center;
  margin: 0 auto;
  gap: 10px;
  padding: 3px 10px;
  background: ${(props) => props.theme.background[2]};
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
`;

export default Home;
