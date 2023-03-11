import styled from "styled-components";
import SideBar from "../sidebar";
import data from "../../data/about.json";
import PreviousDesktop from "../previousLink/previousDesktop";
import { useState } from "react";
import axios from "axios";
import {BaseBackURL} from "../../constant/api";
import { useEffect } from "react";


const Team = () => {
  const [members,setMembers]=useState([]);
  const sideBarData = data.about[0].sideBar;

  const getMembers=()=>{
    let config = {
      method: 'get',
      url: `${BaseBackURL}members`,
    };
    
    axios(config)
    .then(function (response) {
      console.log(JSON.stringify(response.data));
      setMembers(response.data)
    })
    .catch(function (error) {
      console.log(error);
    });

  }

  useEffect(()=>{
    getMembers();
  },[])


  const membersCard = members.map((item, i) => {
    return (
      <Member key={i}>
        <div className="image">
          <img src={`${BaseBackURL}uploads/${item.image}`} alt={item.name} />
        </div>
        <h3>{item.firstName+" "+item.lastName}</h3>
        <p className="post">{item.position}</p>
        <p className="education">{item.education}</p>
      </Member>
    );
  });

  return (
    <Container>
      <PreviousDesktop position="-22.5vh" />
      <Content>
        <h1>معرفی اعضا</h1>
        <Gallery>{membersCard}</Gallery>
      </Content>
      <SideBar width="17%" content={sideBarData} />
    </Container>
  );
};

const Container = styled.section`
  width:100%;
  margin: 0 auto;
  display: flex;
  box-sizing:border-box;
  justify-content:center;
  padding-left: 1.736vw;
  @media (max-width: 800px){
    align-items:center;
    flex-direction:column;
    width: 90%;
   }
`;

const Content = styled.div`
  width: 90%;
  display: flex;
  flex-direction: column;
  gap: 1.736vw;
  padding: 1.25vw 6.25vw 4.861vw 0;
  h1 {
    margin: 0;
    padding: 0;
    color: ${(props) => props.theme.textColor[1]};
    font-size: 1vw;
    font-weight: 500;
    display: flex;
    flex-direction: column;
    width: 20%;
    gap: 10px;
    &:after {
      content: "";
      display: inline-flex;
      width: 100%;
      height: 3px;
      background: ${(props) => props.theme.background[1]};
    }
  }

  @media (max-width: 800px){
    padding: 6.25vw 0vw 4.861vw 0;
    width: 100%;
    h1 {
      font-size: 3.5vw;
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
      padding:0;
      &:after {
        content: "";
        display: inline-flex;
        width: 25%;
    }
   }
  }

`;

const Gallery = styled.div`
  display: flex;
  justify-content: space-evenly;
  width:100%;
  @media (max-width: 800px){
    margin:4vh auto 0;
    flex-wrap:wrap;
   }
`;

const Member = styled.div`
  display: flex;
  flex-direction: column;
  width:20%;
  .image {
    width: 12.5vw;
    height: 12.5vw;
    border: 3px solid #ffcf87;
    margin-bottom:1.042vw;
    img {
      width: 100%;
      height: 100%;
      object-fit: contain;
    }
  }
  h3 {
    margin: 0;
    color: ${(props) => props.theme.textColor[1]};
    font-size: 1vw;
    font-weight: 500;
  }
  .post,.education {
    margin: 0;
    color: ${(props) => props.theme.textColor[1]};
    font-size: 1vw;
    font-weight: 200;
  }
 

  @media (max-width: 800px){
    align-items:center;
    width: 30%;
    flex-wrap:wrap;
    margin-bottom:5vh;
    .image {
      width: 25.5vw;
      height: 25.5vw;
      border: 3px solid #ffcf87;
      margin-bottom: 4.042vw;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    h3 {
      margin: 0;
      color: ${(props) => props.theme.textColor[1]};
      font-size: 2.5vw;
      font-weight: 500;
    }
    .post {
      margin: 10px 0;
      color: ${(props) => props.theme.textColor[1]};
      font-size: 2vw;
      font-weight: 200;
    }
    .education{
      font-size: 1.2vw;
    }
   }

  @media (max-width: 600px){
    align-items:center;
    width: 50%;
    flex-wrap:wrap;
    .image {
      width: 32.5vw;
      height: 32.5vw;
      border: 3px solid #ffcf87;
      margin-bottom: 4.042vw;
      img {
        width: 100%;
        height: 100%;
        object-fit: contain;
      }
    }
    h3 {
      margin: 0;
      color: ${(props) => props.theme.textColor[1]};
      font-size: 3.5vw;
      font-weight: 500;
    }
    .post {
      margin: 10px 0;
      color: ${(props) => props.theme.textColor[1]};
      font-size: 2vw;
      font-weight: 200;
    }
    .education{
      font-size: 1.2vw;
    }
   }
`;

export default Team;
