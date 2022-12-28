import React from "react";
import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import data from "../../data/routing.json";

const Control = () => {
  const navigate = useNavigate();
  const controItem = data.routing.map((item, i) => {
    return (
      <Section
        key={i}
        onClick={() => {
          navigate(item.path);
        }}
      >
        <p className="text">{item.title}</p>
      </Section>
    );
  });

  return <Container>{controItem}</Container>;
};

const Container = styled.div`
  display: flex;
  justify-content: center;
  gap: 5.556vw;
  margin-bottom: 2.778vw;
  cursor: pointer;
`;

const Section = styled.div`
  width: 6.944vw;
  height: 6.944vw;
  display: flex;
  justify-content: center;
  background: ${(props) => props.theme.background[0]};
  .text {
    margin: auto;
    padding: 0;
    text-align: center;
    font-weight: 400;
    font-size: 1.736vw;
    color: ${(props) => props.theme.textColor[1]};
  }
`;

export default Control;
