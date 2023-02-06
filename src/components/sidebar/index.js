import styled from "styled-components";
import leftCover from "../../assets/pic/left.png";
import rightCover from "../../assets/pic/right.png";

const SideBar = (props) => {
  return (
    <Container className="container" width={props.width}>
      <p className="text">{props.content}</p>
      <BorderTop />
      <BorderBottom />
    </Container>
  );
};

const Container = styled.div`
  width: ${(props) => props.width};
  border-left:2.5px solid #07baa6;
  border-right:2.5px solid #07baa6;
  padding: 5vw 2vw;
  display: flex;
  position: relative;
  margin-top: -7%;
  justify-content: flex-end;
  margin-bottom:100px;
  .text {
    margin: auto;
    color: ${(props) => props.theme.textColor[1]};
    font-size: 1.336vw;
    font-weight: 400;
    width:85%;
  }
  
  @media (max-width: 800px){
    box-sizing:border-box;
    width: 100% ;
    padding: 12vw 5vh;
    display: flex;
    position: relative;
    margin:4vh auto ;
    .text {
      margin: auto;
      color: ${(props) => props.theme.textColor[1]};
      font-size: 3.736vw;
      font-weight: 400;
    }
  
  @media (max-width: 600px){
    box-sizing:border-box;
    width:90% ;
    padding: 15vw 2vh;
    display: flex;
    position: relative;
    margin:4vh auto ;
    .text {
      margin: auto;
      color: ${(props) => props.theme.textColor[1]};
      font-size: 3.736vw;
      font-weight: 400;
    }
    `
    const BorderTop  = styled.div`
    width:50%;
    height:2px;
    background-color: #07baa6;
    position:absolute;
    top:0;
    right:0
    `
    const BorderBottom  = styled.div`
    width:50%;
    height:2px;
    box-sizing:border-box;
    background-color: #07baa6;
    position:absolute;
    bottom:0;
    left:0
    
    `
    ;

export default SideBar;
