import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../data/book.json";
import back from "../../assets/pic/cover2.png";
import PreviousDesktop from "../previousLink/previousDesktop";
import axios from "axios";
import { BaseBackURL } from "../../constant/api";
import { useUser } from "../../context/useContext";
import LoginModal from "./loginModal";

const PreviewBook = () => {
  const { state, dispatch } = useUser();
  const { id } = useParams();
  const [book, setBook] = useState({});
  const [loginModal,setLoginModal]=useState(false);

  const getBook = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}books/${id}`,
    };

    axios(config)
      .then(function (response) {
        // console.log(JSON.stringify(response.data));
        setBook(response.data);
      })
      .catch(function (error) {
        console.log(error);
      });
  };

  useEffect(() => {
    getBook();
  }, []);

  const onButtonClick = () => {
    // using Java Script method to get PDF file
    fetch(`${BaseBackURL}documents/${book.pdf}`).then((response) => {
      response.blob().then((blob) => {
        if (state.loggedIn) {
          // Creating new object of PDF file
          const fileURL = window.URL.createObjectURL(blob);
          // Setting various property values
          let alink = document.createElement("a");
          alink.href = fileURL;
          alink.download = `${BaseBackURL}documents/${book.pdf}`;
          alink.click();
        }else{
          setLoginModal(true);
        }
      });
    });
  };

  return (
    <Container>
      <PreviousDesktop position="-93.3vh" />
      <Content>
        <h1>{book && book.title}</h1>
        <p className="text">{book && book.summary}</p>
      
        <Download onClick={onButtonClick}>دریافت کتاب</Download>
      </Content>
      <Cover>
        <img src={`${BaseBackURL}uploads/${book.image}`} alt={book.title} />
      </Cover>
      <LoginModal visible={loginModal} onClose={setLoginModal} />
    </Container>
  );
};

const Container = styled.div`
  padding: 4.861vw 6.944vw;
  display: flex;
  justify-content: space-between;
  height: 50vh;
  align-items: center;
  @media (max-width: 800px) {
    padding: 8.861vw 6.944vw;
    height: 66vh;
    flex-direction: column;
  }
  @media (max-width: 600px) {
    padding: 8.861vw 6.944vw;
    height: 66vh;
    flex-direction: column;
  }
`;

const Content = styled.div`
  max-width: 70%;
  display: flex;
  flex-direction: column;
  gap: 2.083vw;
  h1 {
    font-size: 1.7vw;
    font-weight: 500;
    color: ${(props) => props.theme.textColor[0]};
    margin: 0;
    padding: 0;
  }
  .text {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.textColor[5]};
    font-weight: 400;
    font-size: 1vw;
    text-align: justify;
    max-height: 20vw;
    overflow: auto;
  }

  @media (max-width: 800px) {
    max-width: 90%;
    order: 2;
    margin-top: 5vh;
    h1 {
      font-size: 2.7vw;
      font-weight: 500;
      color: ${(props) => props.theme.textColor[0]};
      margin: 0;
      padding: 0;
    }
    .text {
      max-height: 40vw;
      font-size: 2.6vw;
    }
  }

  @media (max-width: 600px) {
    max-width: 90%;
    order: 2;
    h1 {
      font-size: 3.6vw;
      font-weight: 500;
      color: ${(props) => props.theme.textColor[0]};
      margin: 0;
      padding: 0;
    }
    .text {
      max-height: 40vw;
      font-size: 2.6vw;
    }
  }
`;

const TurnOver = styled.p`
  margin: 0;
  padding: 0;
  text-align: end;
  color: ${(props) => props.theme.textColor[5]};
  font-weight: 400;
  font-size: 1vw;
  cursor: pointer;
  &:hover {
    color: ${(props) => props.theme.textColor[2]};
  }
  @media (max-width: 800px) {
    font-size: 2vw;
  }
`;

const Cover = styled.div`
  width: 22.917vw;
  height: 22.917vw;
  border-radius: 100%;
  background: ${(props) => props.theme.background[2]};
  position: relative;
  margin-top: 7%;
  img {
    width: 92%;
    height: 92%;
    border-radius: 100%;
    object-fit: cover;
    transform: translate(-9px, 34px);
  }
  &:before {
    content: "";
    display: block;
    position: absolute;
    width: 100%;
    padding-top: 100%;
    background-image: url(${back});
    background-size: contain;
    background-repeat: no-repeat;
    top: -2.083vw;
    right: 2.083vw;
    z-index: -1;
  }

  @media (max-width: 800px) {
    width: 38.917vw;
    height: 38.917vw;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transform: translate(0px, 14px);
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      padding-top: 100%;
      background-image: url(${back});
      background-size: contain;
      background-repeat: no-repeat;
      top: -4.083vw;
      right: 4.083vw;
      z-index: -1;
    }
  }

  @media (max-width: 600px) {
    width: 55.917vw;
    height: 55.917vw;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
      transform: translate(0px, 14px);
    }
    &:before {
      content: "";
      display: block;
      position: absolute;
      width: 100%;
      padding-top: 100%;
      background-image: url(${back});
      background-size: contain;
      background-repeat: no-repeat;
      top: -6.083vw;
      right: 6.083vw;
      z-index: -1;
    }
  }
`;

const Download = styled.button`
  border: none;
  padding: 10px 20px;
  cursor: pointer;
  outline: none;
  width: fit-content;
  background: #8cd7d3;
  border-radius: 2px;
`;

export default PreviewBook;
