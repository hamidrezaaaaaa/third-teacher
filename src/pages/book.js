import React from "react";
import styled from "styled-components";
import CoverBook from "../components/books/coverBook";
import data from "../data/book.json";

const Books = () => {
  const library = data.book.map((item, i) => {
    return (
      <CoverBook
        key={i}
        bookCover={item.img}
        bookName={item.name}
        writer={item.writer}
        id={item.id}
      />
    );
  });

  return (
    <Container>
      <Title>کتاب‌ها</Title>
      <Gallery>{library}</Gallery>
    </Container>
  );
};

const Container = styled.section`
  height: auto;
  display: flex;
  flex-direction: column;
  padding: 1.861vw 6.25vw 4vh;
  gap: 3.083vw;
  @media (max-width: 800px){
    gap: 8.083vw;
  }
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
 
  }
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
  @media (max-width: 800px){
  width:100%;
  padding-top:10px;
  }
`;

export default Books;
