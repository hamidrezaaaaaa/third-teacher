import React,{useEffect,useState} from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import cover from "../../assets/pic/cover2.png";
import { BaseBackURL } from "../../constant/api";
import axios from "axios";
import PreviousDesktop from "../previousLink/previousDesktop";

function School() {
  const {id} = useParams();
  const [data, setData] = useState({});

  const getCarouselData = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}schools/`,
    };
    axios(config)
      .then((res) => {
        setData(res.data.find((item) => parseInt(item.id) === parseInt(id)));
      })
      .catch((err) => {
        console.log(err);
      });
  };

  useEffect(() => {
    getCarouselData();
  }, []);

  
return (
  <Container>
    <PreviousDesktop position="-15.5vh" />
    <Text>
      <Title>
      {data.name}
      </Title>
      <Data>
      {data.description}
      </Data>
    </Text>
    <Image>
    <img src={`${BaseBackURL}uploads/${data.imageurl}`}></img>
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
  @media (max-width: 800px){
    width:100%;
  }
`;

const Title = styled.h1`
  color:#4f594e;
  display: flex;
  flex-direction: column;
  align-items: center;
  cursor:pointer;

  @media (max-width: 800px){
    font-size: 3.792vw
  }
  @media (max-width: 600px){
    font-size: 5.736vw;
  }
`;

const Data = styled.span`
color:#875c30;
display: flex;
flex-direction: column;
padding-right:4vw;
gap: 2.083vw;
align-items: center;
cursor:pointer;
@media (max-width: 800px){
  font-size: 3.136vw;
}

@media (max-width: 600px){
  font-size: 3.736vw;
}
`

const Image =styled.div`

  width:25vw;
  height: 25vw;
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
    height: 100%;
    border-radius:100%;
    object-fit:cover;
    transform: translate(-1px, 23px);
  }

  @media (max-width: 800px){
    width:38.917vw;
    background:${props=>props.theme.background[2]};
    border-radius:50%;
    margin: 5.083vh 1vw 2.083vw;
    position:relative;
    z-index:0;
    order:-1;
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
      /* object-fit:contain; */
      transform: translate(-1px, 23px);
    }
  }

  @media (max-width: 600px){
    width:53vw;
    height: 53vw;
    background:${props=>props.theme.background[2]};
    border-radius:50%;
    margin: 5.083vh 1vw 2.083vw;
    position:relative;
    z-index:0;
    order:-1;
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
      /* object-fit:contain; */
      transform: translate(-1px, 23px);
    }
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
  @media (max-width: 800px){
    flex-direction:column;
    align-items:center;
  }
  @media (max-width: 600px){
    padding: 8.861vw 6.944vw;
    height:66vh;
    flex-direction:column;
  }
`;

export default School;