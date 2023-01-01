import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import back from "../../assets/pic/cover.png";

const CoverBook = ({ bookCover, bookName, writer, id }) => {
  const navigate = useNavigate();
  return (
    <Container
      onClick={() => {
        navigate(`${id}`);
      }}
    >
      <Cover>
        <img src={bookCover} alt={bookName} />
      </Cover>
      <Expand>
        <p className="text">{bookName}</p>
        <p className="text">{writer}</p>
      </Expand>
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  flex-direction: column;
  gap: 2.083vw;
  align-items: center;
  cursor:pointer;
  @media (max-width: 800px){
    margin:0 0 12vh 0;
    width:27%;
    justify-content:space-between;
    height:200px;
  }

  @media (max-width: 600px){
    margin:0 0 12vh 0;
    width:45%;
    justify-content:space-between;
    height:200px;
  }

  @media (max-width: 600px) {
    margin: 0 0 12vh 0;
    width: 45%;
    justify-content: space-between;
    height: 200px;
  }
`;

const Cover = styled.div`
  width: 11.944vw;
  height: 11.944vw;
  border-radius: 100%;
  background: ${(props) => props.theme.background[2]};
  position: relative;

  img {
    width: 100%;
    height: 100%;
    object-fit: contain;
    transform: translate(18px, 17px);
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
  
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transform: translate(18px, 17px);
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
  }

  @media (max-width: 600px){
    width: 28.944vw;
    height: 28.944vw;

    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transform: translate(18px, 17px);
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
  }
`;

const Expand = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  width: 14.931vw;
  height: 14.931vw;
  max-height:75px;
  border: 3px solid #fe9900;
  padding: 1vw;
  .text {
    margin: 0;
    padding: 0;
    font-size: 1.389vw;
    font-weight: 400;
    color: ${(props) => props.theme.textColor[4]};
    text-align: center;
  }

  @media (max-width: 800px){
    margin-top:2vh;
    min-height: 100px;
    height:auto;
    width:100%;
    .text {
      font-size: 2.736vw;
    }
  }

  @media (max-width: 600px){
    width:100%;
    .text {
      font-size: 3.736vw;
    }
  }
`;

export default CoverBook;
