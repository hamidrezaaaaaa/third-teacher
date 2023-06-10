import styled from "styled-components";
import SideBar from "../components/sidebar";
import data from "../data/about.json";
import PreviousDesktop from "../components/previousLink/previousDesktop";
import { BaseBackURL } from "../constant/api";
import axios from "axios";
import { useState } from "react";
import { useEffect } from "react";

const About = () => {
  const [sayings, setSayings] = useState([]);
  const [filterSaying,setFilterSaying]=useState({});
  const [aboutText,setAboutText]=useState([]);

  const getSayings = () => {
    let confing = {
      method: "get",
      url: `${BaseBackURL}sayings/`,
    };

    axios(confing)
      .then((res) => {
        setSayings(res.data);
      })
      .catch((err) => {
        console.log(err);
      });
  };

  const getAboutText =()=>{

let config = {
  method: 'get',
  url: `${BaseBackURL}about/`,
  headers: { 
    'Content-Type': 'application/json'
  },
};

axios.request(config)
.then((response) => {
  // console.log(JSON.stringify(response.data));
  setAboutText(response.data.filter(x=>x.active == "1"));
})
.catch((error) => {
  console.log(error);
});
  }

  useEffect(() => {
    getSayings();
    getAboutText();
  },[]);


  useEffect(()=>{
    if(sayings.find(x=>x.position == "درباره ما")){
      setFilterSaying({...sayings.find(x=>x.position == "درباره ما")})
    }
  },[sayings.length>0])



  return (
    <Container>
      <Content>
        <PreviousDesktop position="-25vh" />
        <h1>درباره معلم سوم</h1>
        <div className="content">
          <p className="text">{aboutText.length ==0?'محتوایی برای نمایش وجود ندارد':aboutText[0].description}</p>
          <p className="poetry"></p>
        </div>
      </Content>
      <SideBar saying={filterSaying && filterSaying} width="14.2%" />
    </Container>
  );
};

const Container = styled.section`
  width: 100%;
  // border:3px solid blue;
  box-sizing: border-box;
  margin: 0 auto;
  display: flex;
  justify-content: space-between;
  align-items: flex-start;
  padding-left: 1.736vw;
  @media (max-width: 800px) {
    padding-left: 0;
    flex-direction: column;
    width: 90%;
  }
`;

const Content = styled.div`
  width: 60%;
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
  .content {
    border: 3px solid #ffcf87;
    padding: 2vw;

    .text,
    .poetry {
      margin: 0;
      padding: 0;
      font-size: 1vw;
      font-weight: 400;
      color: ${(props) => props.theme.textColor[1]};
      text-align: justify;
    }
    .text {
      margin-bottom: 1.736vw;
    }
  }

  @media (max-width: 800px) {
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    padding: 6.25vw 0vw 4.861vw 0;

    h1 {
      margin: 0;
      padding: 0;
      color: ${(props) => props.theme.textColor[1]};
      font-size: 3.5vw;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
      &:after {
        content: "";
        display: inline-flex;
        width: 30%;
        height: 3px;
        background: ${(props) => props.theme.background[1]};
      }
    }
    .content {
      width: 100%;
      border: 3px solid #ffcf87;
      padding: 2vw;
      margin: 1vh auto;
      box-sizing: border-box;
      .text,
      .poetry {
        margin: 0;
        padding: 0;
        font-size: 2.7vw;
        line-height: 2.5rem;
        font-weight: 400;
        color: ${(props) => props.theme.textColor[1]};
      }
      .text {
        margin-bottom: 1.736vw;
      }
    }
  }

  @media (max-width: 600px) {
    box-sizing: border-box;
    align-items: center;
    width: 100%;
    padding: 6.25vw 0vw 4.861vw 0;

    h1 {
      margin: 0;
      padding: 0;
      color: ${(props) => props.theme.textColor[1]};
      font-size: 3.5vw;
      font-weight: 500;
      display: flex;
      flex-direction: column;
      width: 100%;
      gap: 10px;
      &:after {
        content: "";
        display: inline-flex;
        width: 30%;
        height: 3px;
        background: ${(props) => props.theme.background[1]};
      }
    }
    .content {
      width: 100%;
      border: 3px solid #ffcf87;
      padding: 2vw;
      margin: 1vh auto;
      box-sizing: border-box;
      .text,
      .poetry {
        margin: 0;
        padding: 0;
        font-size: 3.7vw;
        font-weight: 400;
        color: ${(props) => props.theme.textColor[1]};
        line-height: 2.5rem;
      }
      .text {
        margin-bottom: 1.736vw;
      }
    }
  }
`;
const Sidbar = styled.div``;

export default About;
