import { useNavigate } from "react-router-dom";
import { useFormik } from "formik";
import { logInSchema } from "../schema";
import styled from "styled-components";
import SideBar from "../components/sidebar";

const LogIn = () => {
  const navigate = useNavigate();
  const sideBarData =
    "- پس تو را به چه کار آفریده‌اند؟ - به درد کشیدن به خاطر حق و تا - پس تو را به چه کار آفریده‌اند؟ - به درد کشیدن به خاطر حق و تا - پس تو را به چه کار آفریده‌اند؟ - به درد کشیدن به خاطر حق و تا";

  const onSubmit = async () => {
    navigate("/dashboard");
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

  console.log(values);

  return (
    <Container>
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
      <SideBar content={sideBarData} width="20%" />
    </Container>
  );
};

const Container = styled.section`
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
  padding: 6.25vw 6.25vw 4.861vw 0;
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
      content: "ورود";
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

const ForgetPass = styled.p`
  margin: 0;
  padding: 0;
  text-align: center;
  font-size: 1.389vw;
  font-weight: 400;
  color: ${(props) => props.theme.textColor[2]};
  margin-top: 4vw;
  cursor: pointer;
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
