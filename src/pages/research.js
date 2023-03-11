import React, { useState, useEffect } from "react";
import styled from "styled-components";
import PreviousDesktop from "../components/previousLink/previousDesktop";
import axios from "axios";
import { BaseBackURL } from "../constant/api";
import SideBar from "../components/sidebar";

const Research = () => {
  const [sayings, setSayings] = useState([]);
  const [filterSaying, setFilterSaying] = useState({});

  const getSayings = () => {
    let confing = {
      method: "get",
      url: `${BaseBackURL}sayings`,
    };

    axios(confing)
      .then((res) => {
        setSayings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getSayings();
  });

  useEffect(() => {
    if (sayings.find((x) => x.position == "پژوهش ها")) {
      setFilterSaying({ ...sayings.find((x) => x.position == "پژوهش ها") });
    }
  }, [sayings.length > 0]);

  return (
    <Container>
      <Content>
        <PreviousDesktop position="-18.8vh" />
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
      </Content>
      <SideBar saying={filterSaying} width="14.2%"  />
    </Container>
  );
};

const Container = styled.section`
  height: 70vh;
  height: auto;
  display: flex;
  padding-left: 1.736vw;

  @media (max-width: 600px) {
    flex-direction: column;

  }
  @media (max-width: 800px) {
    flex-direction: column;
    padding: 0 8vw;

  }
`;

const Content = styled.div`
  display: flex;
  flex-direction: column;
  gap: 3.083vw;
  padding: 1.861vw 6.25vw 4vh;
  flex-grow: 1;
  @media (max-width: 800px) {
    gap: 8.083vw;
  } ;
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.textColor[1]};
  font-size: 1vw;
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
  @media (max-width: 800px) {
    width: 14%;
    font-size: 3.5vw;
  }

  @media (max-width: 600px) {
    font-size: 3.5vw;
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
  @media (max-width: 800px) {
    width: 100%;
  }
`;

const Item = styled.div`
  width: 100%;
  padding: 1.042vw;
  border: 3px solid #fe9900;
  .text {
    margin: 0;
    padding: 0;
    font-size: 1vw;
    font-weight: 400;
    color: ${(props) => props.theme.textColor[1]};
  }
  @media (max-width: 800px) {
    width: 100%;
    font-size: 2.7vw;
    padding: 2.5vh 0vw;
  }
`;

export default Research;
