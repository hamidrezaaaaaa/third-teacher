import styled from "styled-components";
import SideBar from "../sidebar";
import data from "../../data/about.json";
import PreviousDesktop from "../previousLink/previousDesktop";

const GreenSquad = () => {
    const sideBarData = data.about[0].sideBar;
  return (
    <Container>
      <PreviousDesktop position="-22.5vh" />
      <Content>
        <h1>مکعب سبز خلاق</h1>
        <Gallery></Gallery>
      </Content>
      <SideBar width="17.65%" content={sideBarData} />
    </Container>
  );
};

const Container = styled.section`
width:100%;
box-sizing:border-box;
display: flex;
justify-content: space-between;
padding-left: 1.736vw;
@media (max-width: 800px){
  width:90%;
  margin: auto;
  align-items:center;
  flex-direction:column;
  .container{

  }
 }
`;

const Content = styled.div`
box-sizing:border-box;
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 1.736vw;
  padding: 1.25vw 6.25vw 4.861vw 0;
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
    padding: 6.25vw 2.75vw 4.861vw 0;
    h1 {
      font-size: 4.736vw;
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
      &:after {
        content: "";
        display: inline-flex;
        width: 28%;
    }
   }

`;

const Gallery = styled.div`
  display: flex;
  justify-content: space-between;
`;

export default GreenSquad;
