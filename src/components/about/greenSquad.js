import styled from "styled-components";
import SideBar from "../sidebar";
import data from "../../data/about.json";

const GreenSquad = () => {
    const sideBarData = data.about[0].sideBar;
  return (
    <Container>
      <Content>
        <h1>مکعب سبز خلاق</h1>
        <Gallery></Gallery>
      </Content>
      <SideBar width="20%" content={sideBarData} />
    </Container>
  );
};

const Container = styled.section`
width:95%;
display: flex;
justify-content: space-between;
padding-left: 1.736vw;`;

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

  @media (max-width: 800px){
    h1 {
      font-size: 4.736vw;
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
      &:after {
        content: "";
        display: inline-flex;
        width: 45%;
    }
   }

`;

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default GreenSquad;
