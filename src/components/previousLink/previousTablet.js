import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import back from "../../assets/icon/back_arrow_icon.png"

function PreviousTablet() {
    const navigate = useNavigate();
    
    return (
        <Mamad onClick={() => navigate(-1)} />
  )
}

const Mamad = styled.div`
background-image: url(${back});
background-size: cover;
background-repeat: no-repeat;
background-color:white;
height: 14vw;
width: 14vw;
padding:0 0vw;
margin-right:-30vw;
@media (min-width: 600px){
    height: 9vw;
    width: 9vw;
    margin-right:-45vw;
  }
`;

export default PreviousTablet;