import styled from "styled-components";
import SideBar from "../components/sidebar";
import data from "../data/about.json";

const About = () => {
  return (
    <Container>
      <Content>
        <h1>درباره معلم سوم</h1>
        <div className="content">
          <p className="text">{data.about[0].content}</p>
          <p className="poetry">{data.about[0].poetry}</p>
        </div>
      </Content>
      <SideBar content={data.about[0].sideBar} width="20%"/>
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding-left:1.736vw;
`;

const Content = styled.div`
  width: 60%;
  display: flex;
  flex-direction: column;
  gap: 1.736vw;
  padding: 6.25vw 6.25vw 4.861vw 0;
  h1 {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.textColor[1]};
    font-size: 1.736vw;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    width: 20%;
    gap: 10px;
    &:after {
      content: "";
      display: inline-flex;
      width: 100%;
      height: 3px;
      background: ${(props) => props.theme.background[1]};
    }
  }
  .content {
    border: 3px solid #ffcf87;
    padding: 2vw;

    .text,
    .poetry {
      margin: 0;
      padding: 0;
      font-size: 1.736vw;
      font-weight: 400;
      color: ${(props) => props.theme.textColor[1]};
    }
    .text {
      margin-bottom: 1.736vw;
    }
  }
`;
const Sidbar = styled.div``;

export default About;
