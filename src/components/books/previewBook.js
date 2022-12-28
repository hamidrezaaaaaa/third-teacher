import React, { useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../data/book.json";
import back from "../../assets/pic/cover2.png";

const PreviewBook = () => {
  const { id } = useParams();
  const [index, setIndex] = useState(1);

  const source = data.book.find((item) => parseInt(item.id) == id);

  const page = source.pages.find((x) => x.id == index);

  const turnOver = () => {
    if (index < source.pages.length) {
      setIndex(index + 1);
    } else {
      setIndex(index - 1);
    }
    return index;
  };

  return (
    <Container>
      <Content>
        <h1>{source.name}</h1>
        <p className="text">{page.page}</p>
        <TurnOver onClick={turnOver}>
          {index < source.pages.length ? "صفحه بعد" : "صفحه قبل"}
        </TurnOver>
      </Content>
      <Cover>
        <img src={source.img} alt={source.name} />
      </Cover>
    </Container>
  );
};

const Container = styled.div`
  padding: 4.861vw 6.944vw;
  display: flex;
  justify-content: space-between;
  height:50vh;
  align-items:center;
  @media (max-width: 800px){
    padding: 8.861vw 6.944vw;
    height:66vh;
    flex-direction:column;
  }
  @media (max-width: 600px){
    padding: 8.861vw 6.944vw;
    // margin-top: 5vh;
    height:66vh;
    flex-direction:column;
  }
`;

const Content = styled.div`
  max-width: 70%;
  // max-height: 20.833vw;
  display: flex;
  flex-direction: column;
  gap: 2.083vw;
  h1 {
    font-size: 2.292vw;
    font-weight: 500;
    color: ${(props) => props.theme.textColor[0]};
    margin: 0;
    padding: 0;
  }
  .text {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.textColor[5]};
    font-weight: 400;
    font-size: 1.736vw;
    text-align: justify;
    max-height:20vw;
    overflow:auto;
  }

  @media (max-width: 800px){
    max-width: 90%;
    order: 2;
    margin-top:5vh;
    h1 {
      font-size: 3.792vw;
      font-weight: 500;
      color: ${(props) => props.theme.textColor[0]};
      margin: 0;
      padding: 0;
    }
    .text {
      max-height:40vw;
      font-size: 3.136vw;
    }
  }
  
  @media (max-width: 600px){
    max-width: 90%;
    order: 2;
    h1 {
      font-size: 4.292vw;
      font-weight: 500;
      color: ${(props) => props.theme.textColor[0]};
      margin: 0;
      padding: 0;
    }
    .text {
      max-height:40vw;
      font-size: 3.736vw;
    }
  }
`;

const TurnOver = styled.p`
  margin: 0;
  padding: 0;
  text-align: end;
  color: ${(props) => props.theme.textColor[5]};
  font-weight: 400;
  font-size: 1.736vw;
  cursor: pointer;
  &:hover{
    color: ${(props) => props.theme.textColor[2]};
  }
  @media (max-width: 800px){
    font-size: 2.736vw;
  }
`;

const Cover = styled.div`
  width: 22.917vw;
  height: 22.917vw;
  border-radius: 100%;
  background: ${(props) => props.theme.background[2]};
  position: relative;
  margin-top: 7%;
  img {
    width: 92%;
    height: 92%;
    object-fit: contain;
    transform: translate(-9px, 34px);
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
    top: -2.083vw;
    right: 2.083vw;
    z-index: -1;
  }

  @media (max-width: 800px){
    width: 38.917vw;
  height: 38.917vw;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transform: translate(0px, 14px);
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
      top: -4.083vw;
      right: 4.083vw;
      z-index: -1;
    }
  }

  @media (max-width: 600px){
    width: 55.917vw;
  height: 55.917vw;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transform: translate(0px, 14px);
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
      top: -6.083vw;
      right: 6.083vw;
      z-index: -1;
    }
  }
`;

export default PreviewBook;
