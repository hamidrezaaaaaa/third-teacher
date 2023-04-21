import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import styled from "styled-components";
import data from "../../data/education.json";
import back from "../../assets/pic/cover2.png";
import PreviousDesktop from "../previousLink/previousDesktop";
import axios from "axios";
import { BaseBackURL } from "../../constant/api";
import Post from "./post";

const PreviewEducation = () => {
  const { title } = useParams();
  const [posts,setPosts]=useState([]);
  const [sortPosts,setSortPosts]=useState([]);

  const getPosts =()=>{
    let config = {
      method: 'get',
      url: `${BaseBackURL}educations`,
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setPosts(response.data.filter(x=>x.category==title));
    })
    .catch(function (error) {
      console.log(error);
    });
  }

  useEffect(()=>{
    getPosts();
  },[])



  const postCards =posts.map((item,i)=>{
    return(
      <Post key={i} post={item}/>
    )
  })


  return (
    <Container>
      <PreviousDesktop position="-101.35vh" />
      <Content>
        {postCards}
      </Content>
      <Cover>
        <h2 className="title">{title}</h2>
      </Cover>
    </Container>
  );
};

const Container = styled.div`
  padding: 4.861vw 6.944vw;
  display: flex;
  justify-content: space-between;
  height: auto;
  align-items:center;
  @media (max-width: 800px){
    flex-direction:column;

  }
  
  @media (max-width: 600px){
    /* height: 50vh; */
  }
`;

const Content = styled.div`
display: flex;
flex-wrap: wrap;
gap: 24px;
align-items: center;
width: 100%;
margin-top: 20px;
order: 2;
@media (min-width:481px){
  align-items: flex-start;
  /* width: 90%; */
}
@media (min-width: 800px){
  order: 0;
  width: 60%;
}



`;

const Cover = styled.div`
  width: 22.917vw;
  height: 22.917vw;
  border-radius: 100%;
  background: ${(props) => props.theme.background[2]};
  position: relative;
  margin-top: 7%;
  display: flex;
  .title {
    margin: 0;
    padding: 0;
    text-align: center;
    font-size: 2vw;
    font-weight: 400;
    color: ${(props) => props.theme.textColor[1]};
    margin: auto;
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

  @media (max-width: 800px){
    width: 45.917vw;
    height: 45.917vw;
    .title {
      order: 1;
      text-align: center;
      font-size: 3.5vw;
    }
    &:before {
      top: -5.083vw;
      right: 5.083vw;
      z-index: -1;
    }
  }

  @media (max-width: 600px){
    width: 60.917vw;
    height: 60.917vw;
    .title {
      order: 1;
      text-align: center;
      font-size: 4vw;
    }
    &:before {
      top: -6.083vw;
      right: 6.083vw;
      z-index: -1;
    }
  }
`;

export default PreviewEducation;
