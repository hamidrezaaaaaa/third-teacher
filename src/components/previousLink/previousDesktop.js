import React from 'react'
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
import { useUser } from '../../context/useContext';
import Account from '../account';


function PreviousDesktop( props ) {
    const {state,dispatch}=useUser();
    const navigate = useNavigate();

    return (
      <Container>
        {state.loggedIn && <Account  />}
        <Button onClick={() => navigate(-1)} position={props.position} >برگشت</Button>
      </Container>
    
  )
}

const Container = styled.div`
/* -webkit-border-radius: 4; */
/* -moz-border-radius: 4; */
/* border-radius: 4px; */
/* text-shadow: 1px 1px 3px #666666; */
/* -webkit-box-shadow: -1px 1px 3px #666666; */
/* -moz-box-shadow: -1px 1px 3px #666666; */
/* box-shadow: -1px 1px 3px #666666; */
/* color: #564e43;
font-size:0.8rem;
background: #ffcf87;
padding: 6px 20px 6px 20px; */
/* cursor: pointer; */
text-decoration: none;
  margin-top:${(props) => props.position};
  left:16px;
  top: 16px;
  position: absolute;
  display: flex;
  align-items: center;
  gap:10px;
  @media (max-width: 800px){
    display:none
  }
`;

const Button =styled.div`
color: #564e43;
font-size:0.8rem;
background: #ffcf87;
padding: 6px 20px 6px 20px;
cursor: pointer;
`



export default PreviousDesktop