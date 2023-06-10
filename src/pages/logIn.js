import { useState,useEffect } from "react";
import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { logInSchema } from "../schema";
import styled from "styled-components";
import SideBar from "../components/sidebar";
import { BaseBackURL } from "../constant/api";
import axios from "axios";
import { useUser } from "../context/useContext";
import {  toast } from 'react-toastify';
import PreviousDesktop from "../components/previousLink/previousDesktop";

const LogIn = () => {
  const { state, dispatch } = useUser();
  const navigate = useNavigate();
  const [sayings, setSayings] = useState([]);
  const [filterSaying,setFilterSaying]=useState({});

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

  useEffect(() => {
    getSayings();
  },[]);


  useEffect(()=>{
    if(sayings.find(x=>x.position == "ورود")){
      setFilterSaying({...sayings.find(x=>x.position == "ورود")})
    }
  },[sayings.length>0])


    const onSubmit = async (values) => {
      var data = JSON.stringify({
        email: `${values.userName}`,
        password: `${values.password}`,
      });
  
      var config = {
        method: "post",
        url: `${BaseBackURL}user/login/`,
        headers: {
          "Content-Type": "application/json",
        },
        data: data,
      };
  
      axios(config)
        .then((response) => {
          console.log('login',JSON.stringify(response.data));
          dispatch({ type: "SET_TOKEN", payload: response.data.token });
          dispatch({ type: "SET_LOGIN", payload: true});
          navigate("/dashboard");
        })
        .catch((error) => {
          if(error.response.statusText === "Unauthorized"){
            toast.error("ایمیل یا رمز عبور اشتباه است!", {
              position: toast.POSITION.TOP_RIGHT,
            });
          }
          console.log("sag",error);
        });
    };



    const {
      values,
      errors,
      touched,
      isSubmitting,
      handleBlur,
      handleChange,
      handleSubmit,
    } = useFormik({
      initialValues: {
        userName: "",
        password: "",
      },
      validationSchema: logInSchema,
      onSubmit,
    });
  return (
    <Container>
      <PreviousDesktop position="-22.5vh" />
      <Content>
        <Wraper>
        <form onSubmit={handleSubmit} autoComplete="off">
            <input
              placeholder="نام کاربری یا آدرس ایمیل"
              id="userName"
              value={values.userName}
              onChange={handleChange}
            />
            {errors.userName && touched.userName && (
              <ErrorText>{errors.userName}</ErrorText>
            )}
            <input
              placeholder="گذرواژه"
              id="password"
              value={values.usepasswordrName}
              onChange={handleChange}
            />
            {errors.password && touched.password && (
              <ErrorText>{errors.password}</ErrorText>
            )}
            <button type="submit">ورود</button>
          </form>
          <ForgetPass>گذرواژه خود را فراموش کرده‌اید؟</ForgetPass>
          <Link
            onClick={() => {
              navigate("/sign-in");
            }}
          >
            ثبت‌نام
          </Link>
        </Wraper>
      </Content>
      <SideBar
        saying={filterSaying}
        width="14.2%"
      />
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  padding-left: 1.736vw;
  @media (max-width: 800px) {
    width: 90%;
    margin: auto;
    flex-direction: column;
    justify-content: center;
    align-tems: center;
    padding-left: 0;
  }
`;

const Content = styled.div`
  width: 60%;
  height: 60vh;
  height: auto;
  display: flex;
  flex-direction: column;
  gap: 1.736vw;
  margin: 0 auto;
  box-sizing: content-box;
  align-tems: center;
  padding: 1.25vw 0 4.861vw 0;
  @media (max-width: 800px) {
    width: 90%;
    margin-top: 5vh;
    height: auto;
  }

  @media (max-width: 600px) {
    margin-top: 5vh;
    width: 80%;
    height: auto;
  }
`;

const Wraper = styled.div`
  width: 40%;
  margin: auto;
  form {
    display: flex;
    flex-direction: column;
    border: 3px solid #ffe6bf;
    padding-top: 2.778vw;
    position: relative;
    input {
      margin-bottom: 1.042vw;
      border: none;
      padding: 1.6vw;
      background: ${(props) => props.theme.background[1]};
      font-size: 1vw;
      text-align: center;
      outline: none;
    }
    button {
      border: none;
      width: fit-content;
      margin: auto;
      background: ${(props) => props.theme.background[1]};
      padding: 1vw 2vw;
      font-size: 1vw;
      font-weight: 400;
      transform: translateY(50%);
    }
    &:before {
      content: "ورود";
      display: block;
      position: absolute;
      background: #ffffff;
      padding: 1vw 2vw;
      font-size: 1vw;
      font-weight: 400;
      left: 50%;
      transform: translateX(-50%);
      top: -12%;
    }
  }

  @media (max-width: 800px){
    width: 80%;
    form {
      border: 5px solid #ffe6bf;
      padding: 4.6vh 0.2vw 0vh;
      input {
        margin-bottom: 1.042vw;
        border: none;
        padding: 1.6vh 1.6vw;
        background: ${(props) => props.theme.background[1]};
        font-size: 2vw;
        text-align: center;
        outline: none;
      }
      button {
        border: none;
        width: fit-content;
        margin: auto;
        background: ${(props) => props.theme.background[1]};
        padding: 1.5vw 4vw;
        font-size: 2.7vw;
        font-weight: 400;
        transform: translateY(55%);
      }
      &:before {
        content: "ورود";
        display: block;
        position: absolute;
        background: #ffffff;
        padding: 1vw 2vw;
        font-size: 2.7vw;
        font-weight: 400;
        left: 50%;
        transform: translateX(-50%);
        top: -13%;
      }
    }
  }

  @media (max-width: 600px){
    width:100%;
    form {
      border: 5px solid #ffe6bf;
      padding: 4.6vh 0vw 0vh;
      input {
        margin-bottom: 1.042vw;
        border: none;
        padding: 2.2vh 2.6vw;
        background: ${(props) => props.theme.background[1]};
        font-size: 3.5vw;
        text-align: center;
        outline: none;
      }
      button {
        border: none;
        width: fit-content;
        margin: auto;
        background: ${(props) => props.theme.background[1]};
        padding: 2vw 4vw;
        font-size: 3.5vw;
        font-weight: 400;
        transform: translateY(55%);
      }
      &:before {
        content: "ورود";
        display: block;
        position: absolute;
        background: #ffffff;
        padding: 1vw 2vw;
        font-size: 3.5vw;
        font-weight: 400;
        left: 50%;
        transform: translateX(-50%);
        top: -10%;
      }
    }
  }
`;

const ForgetPass = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 1vw;
  font-weight: 400;
  color: ${(props) => props.theme.textColor[2]};
  margin-top: 4vw;
  cursor: pointer;

  @media (max-width: 800px) {
    font-size: 2vw;
    margin-top: 8vw;
    font-weight: 400;
  }
  @media (max-width: 600px) {
    font-size: 2.7vw;
    margin-top: 8vw;
    font-weight: 400;
  }
`;
const Link = styled(ForgetPass)`
  margin-top: 1vw;
`;

const ErrorText = styled.p`
  color: #fc8181;
  font-size: 1rem;
  width: 100%;
  text-align: right;
  margin: 0;
  margin-right: 2%;
  margin-top: -2%;
`;
export default LogIn;
