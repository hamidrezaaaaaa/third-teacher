import React from "react";
import styled from "styled-components";

 const Main =()=>{
    return(
        <Hooo>third-teacher</Hooo>
    )
}

export default Main;

const Hooo =styled.h1`
color:${props=>props.theme.textColor[2]};
`