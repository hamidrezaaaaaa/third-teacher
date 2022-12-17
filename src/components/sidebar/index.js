import styled from "styled-components";
import leftCover from "../../assets/pic/left.png";
import rightCover from "../../assets/pic/right.png";

const SideBar = (props) => {
  return (
    <Container width={props.width}>
      <p className="text">{props.content}</p>
    </Container>
  );
};

const Container = styled.div`
  width: ${(props) => props.width};
  padding: 2vw;
  display: flex;
  position: relative;
  margin-top: -7%;
  .text {
    margin: auto;
    color: ${(props) => props.theme.textColor[1]};
    font-size: 1.736vw;
    font-weight: 400;
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    left: 0;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: url(${leftCover});
    background-size: contain;
    background-repeat: no-repeat;
  }
  &:after {
    content: "";
    display: block;
    position: absolute;
    left: 67%;
    bottom: 0;
    width: 100%;
    height: 100%;
    background-image: url(${rightCover});
    background-size: contain;
    background-repeat: no-repeat;
  }
`;

export default SideBar;
