import React, { useEffect, useState } from "react";
import styled from "styled-components";
import { useUser } from "../../../context/useContext";
import axios from "axios";
import { BaseBackURL } from "../../../components/constant/api";
import jwt_decoded from "jwt-decode";

const PersonalInformation = () => {
  const { state, dispatch } = useUser();
  const [info, setInfo] = useState({});
  const token = state.token;
  const decoded = jwt_decoded(token);

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
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getInformation();
  }, []);

  console.log("decoded token", info);

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
  padding: 2vw;
  //   height:100%;
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 0.736vw;
  width: 80%;
  margin: auto;
  input {
    outline: none;
    width: 100%;
    padding: 0.5vw;
    border: none;
    background: ${(props) => props.theme.background[4]};
    font-size: 1.736vw;
    font-weight: 400;
    color: ${(props) => props.theme.textColor[1]};
  }
`;

export default PersonalInformation;
