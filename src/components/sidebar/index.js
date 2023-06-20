import styled from "styled-components";
import leftCover from "../../assets/pic/left.png";
import rightCover from "../../assets/pic/right.png";

const SideBar = ({width,saying}) => {
  return (
    <Container className="container" width={width}>
      <p className="text">{saying.speech}</p>
      <p className="writer">{saying.announcer}</p>
      <BorderTop />
      <BorderBottom />
    </Container>
  );
};

const Container = styled.div`
  width: ${(props) => props.width};
  border-left: 2.5px solid #07baa6;
  border-right: 2.5px solid #07baa6;
  padding: 5vw 2vw;
  display: flex;
  flex-direction: column;
  position: relative;
  justify-content: space-between;
  margin-top: -7%;
  justify-content: flex-end;
  margin-bottom: 100px;
  /* height: 100%; */
  height: 50vh;
  .text,.writer {
    margin: auto;
    color: ${(props) => props.theme.textColor[1]};
    font-size: 1vw;
    font-weight: 400;
    width: 88%;
    text-align: justify;
  }
 

  @media (max-width: 800px) {
    box-sizing: border-box;
    width: 100%;
    padding: 12vw 5vh;
    display: flex;
    position: relative;
    margin: 4vh auto;
    gap: 40px;
    .text,.writer {
      margin: auto;
      color: ${(props) => props.theme.textColor[1]};
      font-size: 2.5vw;
      font-weight: 400;
    }

  }

  @media (max-width: 600px) {
    box-sizing: border-box;
    width: 90%;
    padding: 15vw 2vh;
    display: flex;
    gap: 30px;
    position: relative;
    margin: 4vh auto;
    /* height: 20vh; */
    .text ,.writer{
      margin: auto;
      color: ${(props) => props.theme.textColor[1]};
      font-size: 2.5vw;
      font-weight: 400;
    }

  }
`;
const BorderTop = styled.div`
  width: 50%;
  height: 2px;
  background-color: #07baa6;
  position: absolute;
  top: 0;
  right: 0;
`;
const BorderBottom = styled.div`
  width: 50%;
  height: 2px;
  box-sizing: border-box;
  background-color: #07baa6;
  position: absolute;
  bottom: 0;
  left: 0;
`;
export default SideBar;
