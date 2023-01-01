import React from "react";
import styled from "styled-components";

const Research = () => {
  return (
    <Container>
      <Title>پژوهش</Title>
      <Gallery>
        <Item>
          <p className="text"></p>
        </Item>
        <Item>
          <p className="text"></p>
        </Item>
        <Item>
          <p className="text"></p>
        </Item>
        <Item>
          <p className="text"></p>
        </Item>
        <Item>
          <p className="text"></p>
        </Item>
      </Gallery>
    </Container>
  );
};

const Container = styled.section`
  height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 4.861vw 6.25vw;
  gap: 8.083vw;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.textColor[1]};
  font-size: 1.736vw;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  width: 10%;
  gap: 10px;
  &:after {
    content: "";
    display: inline-flex;
    width: 100%;
    height: 5px;
    background: ${(props) => props.theme.background[1]};
  }
  @media (max-width: 800px){
    width: 14%;
    font-size: 4.136vw;
  }

  @media (max-width: 600px){
    font-size: 4.736vw;
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
  flex-direction: column;
  gap: 1.736vw;
  width: 80%;
`;

const Item = styled.div`
  width: 100%;
  padding: 1.042vw;
  border: 3px solid #fe9900;
  .text {
    margin: 0;
    padding: 0;
    font-size: 1.736vw;
    font-weight: 400;
    color: ${(props) => props.theme.textColor[1]};
  }
  @media (max-width: 800px){
    width: 100%;
    font-size: 3.736vw;
    padding: 2.5vh 0vw;
  }
`;

export default Research;
