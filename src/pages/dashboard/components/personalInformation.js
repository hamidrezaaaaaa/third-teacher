import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useUser } from "../../../context/useContext";
import axios from "axios";
import { BaseBackURL } from "../../../constant/api";
import jwt_decoded from "jwt-decode";
import { useNavigate } from "react-router-dom";

const PersonalInformation = () => {
  const { state, dispatch } = useUser();
  const [info, setInfo] = useState({});
  const token = state.token;
  const decoded = jwt_decoded(token);
  const navigate = useNavigate();

  const getInformation = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}user/${decoded.userId}`,
      headers: {
        Authorization: `Bearer ${token}`,
      },
    };

    axios(config)
      .then((response) => {
        console.log(JSON.stringify(response.data));
        setInfo(response.data.user);
        console.log('responce',response.data.user)
      })
      .catch((error) => {
        console.log(error);
      });
  };

 console.log('data',info)


  useEffect(() => {
    getInformation();
  }, []);

 

  return (
    <Container>
      <Form>
        <input placeholder="نام" value={info.firstname} />
        <input placeholder="نام‌ خانوادگی" value={info.lastname} />
        <input placeholder="تولد" value={info.birtday} />
        <input placeholder="تحصیلات" value={info.education} />
        <input placeholder="دانشگاه" value={info.university} />
        <input placeholder="شغل" value={info.job} />
        <input placeholder="تلفن همراه" value={info.mobilenumber} />
        <input placeholder="آدرس ایمیل" value={info.email} />
        <input placeholder="استان" value={info.province} />
        <input placeholder="آدرس" value={info.address} />
        <input placeholder="کدپستی" value={info.postcode} />
      </Form>
    </Container>
  );
};

const Container = styled.div`
  background: ${(props) => props.theme.background[1]};
  padding: 3vh 2vw;
  @media (max-width: 800px) {
    margin-top: 2vh;
    height: 100%;
  }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  gap: 0.736vw;
  width: 80%;
  margin: 0 auto;
  input {
    outline: none;
    width: 100%;
    padding: 0.5vw;
    border: none;
    background: ${(props) => props.theme.background[4]};
    font-size: 1vw;
    font-weight: 400;
    color: ${(props) => props.theme.textColor[1]};
  }

  @media (max-width: 800px) {
    gap: 1.736vw;
    width: 100%;
    margin: 0 auto;
    input {
      flex-direction: row;
      outline: none;
      width: 90%;
      padding: 1.5vh 1.5vw;
      border: none;
      background: ${(props) => props.theme.background[4]};
      font-size: 2.5vw;
      font-weight: 400;
      color: ${(props) => props.theme.textColor[1]};
    }
  }
`;

export default PersonalInformation;
