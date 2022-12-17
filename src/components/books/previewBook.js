import React from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";

const PreviewBook = () =>{
    const {title} =useParams();
    return (
        <Container>
            this book !!!
            {title}
        </Container>
    )
}

const Container= styled.div`

`

export default PreviewBook;