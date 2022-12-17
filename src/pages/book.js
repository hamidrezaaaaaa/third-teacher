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
`;

const Gallery = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: space-between;
  width: 80%;
  margin: 0 auto;
`;

export default Books;
