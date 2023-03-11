import { useState } from "react";
import styled from "styled-components";
import { BaseBackURL } from "../../constant/api";

const Post = ({ post }) => {
  const [show,setShow]=useState(false);
  
  return (
    <Container show={show}>
      <div className="cover" onClick={()=>{setShow(!show)}} >
        <img
          src={`${BaseBackURL}uploads/${post.imageurl}`}
          alt={post.category}
        />
      </div>
      <p className="text">{post.description}</p>
    </Container>
  );
};

const Container = styled.div`
  border-radius: 4px;
  width: 100%;
  display: flex;
  flex-direction: column;
  cursor: pointer;
  background-color: #ffcf87;
  .cover {
    width: 100%;
    height: auto;
    img {
      width: 100%;
      height: auto;
      object-fit: contain;
      border-radius: 4px 4px 0 0;
    }
  }
  .text {
    display: ${props=>props.show?'flex':'none'};
    margin: 0;
    padding: 12px;
    font-size: 12px;
    font-weight: 400;
    color: #4f594e;
  }
  @media (min-width:481px){
    width: 48%;
    .cover{
      max-height: 200px;
      overflow: hidden;
      img{
        height: 100%;
      }
    }
  }
  @media (min-width: 800px){
    align-items: flex-start;
    padding-bottom: 10px;
    width: 47%;
    .cover{
      width: 100%;
      max-height: inherit;
      height: 18vw;
      img{
        object-fit: cover;
      }
      
    }
  }
`;

export default Post;
