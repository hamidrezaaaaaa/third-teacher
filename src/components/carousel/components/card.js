import React from "react";
import styled from "styled-components";
import back from "../../../assets/pic/cover.png";

const Card =({img,title,expand,index})=>{
    return(
        <Container>
          <Image className="kos">
            <img src={img} alt="philosophy"/>
            {/* <div className="curtain"></div> */}
          </Image>
          <Title className="title">
            {index}
            {title}
          </Title>
        </Container>
    )
}

const Container =styled.div`
display:flex;
width:100%;
flex-direction:column;
// border:2px solid red;
height:100%;
height:300px !important;
align-items:center;
justify-content:center;
background:${props=>props.theme.background[0]};
padding:0.764vw 0 3.125vw;
// max-width:13.889vw;
// min-width:13.889vw;
// min-height:21.528vw;
`

const Image =styled.div`
  width:80%;
  //  height:100%;
  background:${props=>props.theme.background[2]};
  border-radius:100%;
  margin:0 1vw 2.083vw;
  position:relative;
  z-index:10;
  // border:4px solid white;
  &:before{
    // border:2px solid white;
    content:'';
    display:block;
    position: absolute;
    width:100%;
    padding-top:100%;
    background-image: url(${back});
    background-size: contain;
    background-repeat: no-repeat;
    // right: 20px;
    // top: -20px;
    left:-11%;
    top:-11%;
    z-index:-1;
  }
  img{
    // max-width:120px;
    // max-height:120px;
    // height:320px;
    width:100%;
    // border:4px solid red;
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
`

export default Card;