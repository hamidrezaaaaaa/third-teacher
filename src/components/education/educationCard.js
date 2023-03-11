import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import back from "../../assets/pic/cover.png";

const EducationCard = ({ name, id }) => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate(`${id}`);
      }}
    >
      <h2 className="title">{name}</h2>
    </Container>
  );
};

const Container = styled.div`
  width: 11.944vw;
  height: 11.944vw;
  border-radius: 100%;
  background: ${(props) => props.theme.background[2]};
  position: relative;
  display: flex;
  cursor: pointer;
  .title {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 1vw;
    font-weight: 400;
    color: ${(props) => props.theme.textColor[1]};
    margin: auto;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    padding-top: 100%;
    background-image: url(${back});
    background-size: contain;
    background-repeat: no-repeat;
    top: -20px;
    right: 20px;
    z-index: -1;
  }

  @media (max-width: 800px){
    width: 20.944vw;
    height: 20.944vw;

    .title {
      font-size: 2vw;
  }
}

  @media (max-width: 600px){
    width: 30.944vw;
    height: 30.944vw;

    .title {
      font-size: 3vw;
  }
}
`;

export default EducationCard;
