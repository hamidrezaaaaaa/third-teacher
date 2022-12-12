import React from "react";
import styled from "styled-components";
import logo from "../assets/logo/logo.png";

const Main = () => {
  return (
    <Container>
      <span></span>
      <SelectMode>
        <Content>
          <p className="schools">مدارس</p>
          <p className="philosophy">فلسفه</p>
        </Content>
      </SelectMode>
    </Container>
  );
};

export default Main;

const Container = styled.div`
  width: 100%;
  height: 100vh;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5.694vw;
  span {
    width: 10.486vw;
    height: 10.625vw;
    background-repeat: no-repeat;
    background-image: url(${logo});
    background-size: contain;
    margin: 0 auto;
  }
`;

const SelectMode = styled.div`
  position: relative;
  border-top: 4px solid #7e7f82;
`;
const Content = styled.div`
  position: absolute;
  top: 50%;
  display: flex;
  gap: 3.472vw;
  left: 50%;
  transform: translate(-50%, -59%);
  background: #ffffff;
  padding: 0 1.389vw;
  .schools,
  .philosophy {
    margin: 0;
    font-size: 1.736vw;
    font-weight: 400;
    color: ${(props) => props.theme.textColor[1]};
    cursor: pointer;
  }
`;
