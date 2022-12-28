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
margin-bottom: 12.778vh important;
cursor: pointer;

@media (min-width: 600px) and (max-width: 800px){
  flex-wrap: wrap;
  width: 80vw;
  margin: 0 auto;
}
@media (max-width: 600px){
    flex-wrap: wrap;
    width: 80vw;
    margin: 0 auto;
  }
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

    @media (min-width: 600px) and (max-width: 800px){
      font-size: 3vw;
    }
    @media (max-width: 600px){
      font-size: 5.736vw;
    }
  }
  @media (min-width: 600px) and (max-width: 800px){
    width:15vw;
    height:15vw;
  }

  @media (max-width: 600px){
    width:30vw;
    height:100px;
  }
`;

export default Control;
