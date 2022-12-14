import React from "react";
import { useNavigate, useParams } from "react-router-dom";
import styled from "styled-components";
import carouselData from "../../data/Philosophers";
import cover from "../../assets/pic/cover2.png"
import zar from "../../assets/pic/zartosht.png"
function Philosopher() {
  const {id} = useParams()
return (
  <Container>
    <Text>
      <Title>
      {carouselData[id-1].Philosopher} {id}
      </Title>
      <Data>
      {carouselData[id-1].longInfo}
      </Data>
    </Text>
    <Image>
      <img src={carouselData[3].image}></img>
    </Image>
  </Container>
)
}

const Text = styled.div`
  display: flex;
  width:70%;
  flex-direction: column;
  gap: 2.083vw;
  align-items: flex-start;
  padding:10px;
  cursor:pointer;
`;

const Title = styled.h1`
  color:#4f594e;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor:pointer;
`;

const Data = styled.span`
color:#875c30;
display: flex;
flex-direction: column;
padding-right:4vw;
gap: 2.083vw;
align-items: center;
cursor:pointer;
`

const Image =styled.div`
  width:25%;
  background:${props=>props.theme.background[2]};
  border-radius:50%;
  margin: 5.083vh 1vw 2.083vw;
  position:relative;
  z-index:0;
  &:before{
    content:'';
    display:block;
    position: absolute;
    padding-top:100%;
    background-image: url(${cover});
    background-size: contain;
    background-repeat: no-repeat;
    right: 20px;
    left:-11%;
    top:-11%;
    z-index:-1;
  }
  img{
    width:100%;
    object-fit:contain;
    transform: translate(-1px, 23px);
  }
`

const Container = styled.div`
  display:flex;
  margin:auto;
  width:85%;
  justify-content:space-between;
  flex-direction: row;
  height:100%;
  cursor:pointer;
`;

export default Philosopher;