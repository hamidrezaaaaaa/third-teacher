import React from "react";
import styled from "styled-components";
import back from "../../../assets/pic/cover.png";
import { BaseBackURL } from "../../../constant/api";

const Card =({img,title,index})=>{

  console.log(title)
    return(
        <Container>
          <Image className="imageincarousel">
            <img src={`${BaseBackURL}uploads/${img}`} alt="philosophy"/>
            <div className="curtain"></div>
          </Image>
          <Title className="title">
            {title}
          </Title>

        </Container>
    )
}


const Container =styled.div`
display:flex;
width:100%;
flex-direction:column;
height:250px ;
align-items:center;
justify-content:center;
background:${props=>props.theme.background[0]};
padding:0.764vw 0 3.125vw;
position:relative;

@media (min-width:1400px){
  min-height:500px ;
  height:70%;
}

@media (max-width:801px){
height:350px ;
}

@media (max-width: 600px){
justify-content:space-around;
  height:43.5vh ;
}
`

const Image =styled.div`
  width:50%;
 
  background:${props=>props.theme.background[2]};
  border-radius:100%;
  margin:0 1vw 2.083vw;
  position:relative;
  z-index:0;

  @media (max-width: 800px){

  }
  
  @media (max-width: 600px){
    margin-top:3vh;
    // width:70%;
  }


  &:before{
    content:'';
    display:block;
    position: absolute;
    width:100%;
    padding-top:100%;
    background-image: url(${back});
    background-size: contain;
    background-repeat: no-repeat;
    left:-11%;
    top:-11%;
    z-index:-1;
  }
  img{
    width:100%;
    border-radius:100%;
    height:auto;
    object-fit:contain;
    transform: translate(-1px, 13px);
  }
`

const Title=styled.h2`
  margin:0;
  font-size:2.569vw;
  font-weight:500;
  color:${props=>props.theme.textColor[1]};
  white-space:nowrap;
  @media (min-width: 600px) and (max-width: 800px){
    position:absolute;
    top:70%;
    font-size: 4vw;
  }
  @media (max-width: 600px){
    font-size:5vh ;
  }
`

export default Card;