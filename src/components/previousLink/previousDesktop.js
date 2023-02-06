import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";


function PreviousDesktop( props ) {
    const navigate = useNavigate();

    return (
    <Button onClick={() => navigate(-1)} position={props.position} >برگشت</Button>
  )
}

const Button = styled.h4`
-webkit-border-radius: 15;
-moz-border-radius: 15;
border-radius: 15px;
text-shadow: 1px 1px 3px #666666;
-webkit-box-shadow: -1px 1px 3px #666666;
-moz-box-shadow: -1px 1px 3px #666666;
box-shadow: -1px 1px 3px #666666;
color: #ffffff;
font-size:0.8rem;
background: #ffcf87;
padding: 6px 20px 6px 20px;
text-decoration: none;
  margin-top:${(props) => props.position};
  left:2vw;
  position: absolute;
  @media (max-width: 800px){
    display:none
  }
`;

export default PreviousDesktop