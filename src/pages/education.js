import React from "react";
import styled from "styled-components";
import EducationCard from "../components/education/educationCard";
import data from "../data/education.json";

const Education = () => {
  const source = data.education.map((item, i) => {
    return <EducationCard key={i} id={item.id} name={item.name} />;
  });
  return (
    <Container>
      <Title>آموزش</Title>
      <Gallery>{source}</Gallery>
    </Container>
  );
};

const Container = styled.section`
  height: 70vh;
  display: flex;
  flex-direction: column;
  padding: 1.861vw 6.25vw;
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
    height: 3px;
    background: ${(props) => props.theme.background[1]};
  }
  @media (max-width: 800px){
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
  flex-wrap: wrap;
  justify-content: center;
  width: 80%;
  gap: 7.736vw;
  margin: 0 auto;
  @media (max-width: 800px){

    margin: 5vh auto;
  }
`;

export default Education;
