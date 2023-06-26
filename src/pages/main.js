import React, { useEffect, useState } from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import logo from "../assets/logo/logo.png";

const Main = () => {
  const navigate = useNavigate();

  return (
    <Container>
      <span></span>
      <SelectMode>
        <Content>
          <p
            className="schools"
            onClick={() => {
              navigate("/home/schools");
            }}
          >
            مدارس
          </p>
          <p
            className="philosophy"
            onClick={() => {
              navigate("/home/philosophy");
            }}
          >
            فلسفه
          </p>
        </Content>
      </SelectMode>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5.694vw;
  
  @media (max-width: 600px){
    justify-content:space-evenly;
    height: 80vh;
  }
  
  span {
    width: 10.486vw;
    height: 10.625vw;
    background-repeat: no-repeat;
    background-image: url(${logo});
    background-size: contain;
    margin: 0 auto;
    
    @media (max-width:801px){
      justify-content:space-between;
      width: 40.486vw;
      height: 60.625vw;
      font-size: 15.736vw !important;
    }
    @media (max-width: 600px){
    justify-content:space-around;
      width: 45.486vw;
      font-size: 15.736vw !important;
    }
  }

  
`;

const SelectMode = styled.div`
  position: relative;
  border-top: 4px solid #7e7f82;
  @media (max-width: 600px){
  }
`;
const Content = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  gap: 3.472vw;
  left: 50%;
  transform: translate(-50%, -59%);
  background: #ffffff;
  padding: 0 1.389vw;
  
  .schools,
  .philosophy {
    margin: 0;
    font-size: 1.736vw;
    font-weight: 400;
    color: ${(props) => props.theme.textColor[1]};
    cursor: pointer;
  }

  @media (max-width:801px){
    width:50%;
    justify-content:space-around;
    .schools,
    .philosophy {
      font-size: 8.736vw;
    }
  }
  
  @media (max-width: 600px){
    justify-content:space-between;
    width:60%;
    
    .schools,
  .philosophy {
    font-size: 8.736vw;
  }
  
  }
`;
