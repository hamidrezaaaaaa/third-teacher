import styled from "styled-components";
import SideBar from "../components/sidebar";
import { signInSchema } from "../schema";
import { useFormik } from "formik";
import { useState } from "react";
import SignInForm from "../components/signInForm";
import { useUser } from "../context/useContext";

const SignIn = () => {
  const { state, dispatch } = useUser();
  const [step, setStep] = useState(0);
  const sideBarData =
    "- پس تو را به چه کار آفریده‌اند؟ - به درد کشیدن به خاطر حق و تا - پس تو را به چه کار آفریده‌اند؟ - به درد کشیدن به خاطر حق و تا - پس تو را به چه کار آفریده‌اند؟ - به درد کشیدن به خاطر حق و تا";

  const onSubmit = async (values) => {
    dispatch({ type: "SET_EMAIL", payload: values.userName });
    dispatch({ type: "SET_PASSWORD", payload: values.password });
    setStep(1);
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
      confirmPassword: "",
    },
    validationSchema: signInSchema,
    onSubmit,
  });

  return (
    <Container>
      <Content step={step}>
        {step == 0 ? (
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
                value={values.password}
                onChange={handleChange}
              />
              {errors.password && touched.password && (
                <ErrorText>{errors.password}</ErrorText>
              )}
              <input
                placeholder="تکرار گذرواژه"
                id="confirmPassword"
                value={values.confirmPassword}
                onChange={handleChange}
              />
              {errors.confirmPassword && touched.confirmPassword && (
                <ErrorText>{errors.confirmPassword}</ErrorText>
              )}
              <button type="submit">ثبت‌نام</button>
            </form>
          </Wraper>
        ) : (
          <SignInForm />
        )}
      </Content>

      <SideBar content={sideBarData} width="20%" />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1.736vw;
  @media (max-width: 800px) {
    align-tems: center;
    flex-direction: column;
    justify-content: center;
    // padding-left: 0;
  }
`;

const Content = styled.div`
  box-sizing: content-box;
  width: 60%;
  display: flex;
  height: auto;
  flex-direction: column;
  gap: 1.736vw;
  padding: ${(props) =>
    props.step == 0 ? "6.25vw 6.25vw 4.861vw 0" : "3vw 6.25vw 4.861vw 0"};
`;

const Wraper = styled.div`
  width: 40%;
  margin: auto;
  form {
    display: flex;
    flex-direction: column;
    border: 3px solid #ffe6bf;
    padding-top: 2.778vw;
    padding-inline: 2vw;
    position: relative;
    input {
      margin-bottom: 1.042vw;
      border: none;
      padding: 1.6vw;
      background: ${(props) => props.theme.background[1]};
      font-size: 1.389vw;
      text-align: center;
      outline: none;
    }
    button {
      border: none;
      width: fit-content;
      margin: auto;
      background: ${(props) => props.theme.background[1]};
      padding: 1vw 2vw;
      font-size: 1.389vw;
      font-weight: 400;
      transform: translateY(50%);
    }
    &:before {
      content: "ثبت نام";
      display: block;
      position: absolute;
      background: #ffffff;
      padding: 1vw 2vw;
      font-size: 1.389vw;
      font-weight: 400;
      left: 50%;
      transform: translateX(-50%);
      top: -8%;
    }
  }
  
  @media (max-width: 800px){
    width: 80%;
    form {
      border: 5px solid #ffe6bf;
      padding: 4.6vh 2.6vw 0vh;
      input {
        margin-bottom: 1.042vw;
        border: none;
        padding: 1.6vh 1.6vw;
        background: ${(props) => props.theme.background[1]};
        font-size: 2.889vw;
        text-align: center;
        outline: none;
      }
      button {
        border: none;
        width: fit-content;
        margin: auto;
        background: ${(props) => props.theme.background[1]};
        padding: 1.5vw 4vw;
        font-size: 3.389vw;
        font-weight: 400;
        transform: translateY(55%);
      }
      &:before {
        content: "ثبت نام";
        display: block;
        position: absolute;
        background: #ffffff;
        padding: 1vw 2vw;
        font-size: 3.389vw;
        font-weight: 400;;
        left: 50%;
        transform: translateX(-50%);
        top: -10%;
      }
    }

  @media (max-width: 600px){
    width: 100%;
    // border:4px solid red;
    margin:0 auto;
    form {
      
      border: 5px solid #ffe6bf;
      padding: 4.6vh 2.6vw 0vh;
      input {
        margin-bottom: 1.042vw;
        border: none;
        padding: 2.6vh 2.6vw;
        background: ${(props) => props.theme.background[1]};
        font-size: 4.389vw;
        text-align: center;
        outline: none;
      }
      button {
        border: none;
        width: fit-content;
        margin: auto;
        background: ${(props) => props.theme.background[1]};
        padding: 2vw 4vw;
        font-size: 4.389vw;
        font-weight: 400;
        transform: translateY(55%);
      }
      &:before {
        content: "ورود";
        display: block;
        position: absolute;
        background: #ffffff;
        padding: 1vw 2vw;
        font-size: 4.389vw;
        font-weight: 400;
        left: 50%;
        transform: translateX(-50%);
        top: -8%;
      }
    }
`;

const ErrorText = styled.p`
  color: #fc8181;
  font-size: 1rem;
  width: 100%;
  text-align: right;
  margin: 0;
  margin-right: 2%;
  margin-top: -2%;
  @media (max-width: 800px) {
    font-size: 2.5vw;
    padding: 0.7vh;
  }
  @media (max-width: 600px) {
    font-size: 4vw;
    padding: 0.7vh;
  }
`;

export default SignIn;
