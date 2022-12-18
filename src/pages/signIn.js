import styled from "styled-components";
import SideBar from "../components/sidebar";
import { signInSchema } from "../schema";
import { useFormik } from "formik";
import { useState } from "react";
import SignInForm from "../components/signInForm";

const SignIn = () => {
  const [step, setStep] = useState(0);
  const sideBarData =
    "- پس تو را به چه کار آفریده‌اند؟ - به درد کشیدن به خاطر حق و تا - پس تو را به چه کار آفریده‌اند؟ - به درد کشیدن به خاطر حق و تا - پس تو را به چه کار آفریده‌اند؟ - به درد کشیدن به خاطر حق و تا";

  const onSubmit = async () => {
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
`;

const Content = styled.div`
  width: 60%;
  height: 50vh;
  display: flex;
  flex-direction: column;
  gap: 1.736vw;
  padding:${props=>props.step==0 ? "6.25vw 6.25vw 4.861vw 0" : "3vw 6.25vw 4.861vw 0"}  ;

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
      content: "عضویت";
      display: block;
      position: absolute;
      background: #ffffff;
      padding: 1vw 2vw;
      font-size: 1.389vw;
      font-weight: 400;
      left: 50%;
      transform: translateX(-50%);
      top: -12%;
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
`;

export default SignIn;
