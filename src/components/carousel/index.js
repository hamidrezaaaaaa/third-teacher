import React from "react";
import styled from "styled-components";
import Card from "./components/card";
import zar from "../../assets/pic/zartosht.png";

const Carousel = () => {
  return (
    <Container>
      <Arrow>
        <span></span>
        <span></span>
        <span></span>
      </Arrow>

      <Gallery>
        <Card img={zar} title="زرتشت" />
        <Card img={zar} title="زرتشت" />
        <Card img={zar} title="زرتشت" />
        <Card img={zar} title="زرتشت" />
        <Card img={zar} title="زرتشت" />
        <Card img={zar} title="زرتشت" />
        <Card img={zar} title="زرتشت" />
      </Gallery>

      <Arrow>
        <span></span>
        <span></span>
        <span></span>
      </Arrow>
    </Container>
  );
};

const Container = styled.div`
  width: 100%;
  display: flex;
  justify-content: center;
  gap: 2.083vw;
  margin: 4.861vw auto;
`;

const Gallery = styled.div`
  width: 70%;
  display: flex;
  gap: 2.083vw;
  overflow-x: auto;
`;

const Arrow = styled.div`
  display: flex;
  gap: 0.694vw;
  align-items: center;

  span {
    width: 1.389vw;
    height: 1.389vw;
    background: ${(props) => props.theme.background[3]};
  }
`;

export default Carousel;
