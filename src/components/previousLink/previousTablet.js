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
height: 8vw;
width: 8vw;
padding:0 0vw;
margin-right:-30vw;
@media (min-width: 600px){
    height: 4vw;
    width: 4vw;
    margin-right:-45vw;
  }
`;

export default PreviousTablet;