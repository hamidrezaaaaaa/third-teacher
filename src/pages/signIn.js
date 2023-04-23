import styled from "styled-components";
import SideBar from "../components/sidebar";
import { signInSchema } from "../schema";
import { useFormik } from "formik";
import { useState, useEffect } from "react";
import SignInForm from "../components/signInForm";
import { useUser } from "../context/useContext";
import axios from "axios";
import { toast } from "react-toastify";
import { BaseBackURL } from "../constant/api";
import PreviousDesktop from "../components/previousLink/previousDesktop";

const SignIn = () => {
  const { state, dispatch } = useUser();
  const [step, setStep] = useState(0);
  const [users, setUsers] = useState([]);
  const [sayings, setSayings] = useState([]);
  const [filterSaying, setFilterSaying] = useState({});

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

  const getUsers = () => {
    let config = {
      method: "get",
      url: `${BaseBackURL}user/`,
    };

    axios(config)
      .then((response) => {
        // console.log(JSON.stringify(response.data));
        setUsers(response.data);
      })
      .catch((error) => {
        console.log(error);
      });
  };

  useEffect(() => {
    getUsers();
    getSayings();
  }, []);

  useEffect(() => {
    if (sayings.find((x) => x.position == "ثبت نام")) {
      setFilterSaying({ ...sayings.find((x) => x.position == "ثبت نام") });
    }
  }, [sayings.length > 0]);

  const onSubmit = async (values) => {
    if (users.find((x) => x.email === values.userName)) {
      toast.error("ایمیل تکراری است!", {
        position: toast.POSITION.TOP_RIGHT,
      });
    } else {
      dispatch({ type: "SET_EMAIL", payload: values.userName });
      dispatch({ type: "SET_PASSWORD", payload: values.password });
      setStep(1);
    }
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
      <PreviousDesktop position="-22.5vh" />
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

      <SideBar
        // moblieborder="94%"
        // tabletborder="95%"
        // desktopBorder="65%"
        saying={filterSaying}
        width="14.2%"
      />
    </Container>
  );
};

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  padding-left: 1.736vw;
  @media (max-width: 800px) {
    padding-left: 0;
    width: 90%;
    margin: auto;
    align-tems: center;
    flex-direction: column;
    justify-content: center;
  }
`;

const Content = styled.div`
  box-sizing: content-box;
  width: 60%;
  display: flex;
  height: auto;
  flex-direction: column;
  gap: 1.736vw;
  // padding:${(props) =>
    props.step == 0 ? "2.25vw 6.25vw 4.861vw 0" : "3vw 6.25vw 4.861vw 0"}  ;
  padding: ${"2.25vw 6.25vw 4.861vw 0"};

  @media (max-width: 800px) {
    width: 90%;
    padding-left: 0;
    margin: 0 auto;
    margin-top: 5vh;
    height: auto;
    padding: ${(props) =>
      props.step == 0 ? "2.25vw 0vw 4.861vw 0" : "3vw 0vw 4.861vw 0"};
  }

  @media (max-width: 600px) {
    width: 80%;
    margin: 0 auto;
    padding: 6.25vw 0 4.861vw 0;
    justify-content: center;
    align-tems: center;
    padding-left: 0;
  }
`;

const Wraper = styled.div`
  width: 40%;
  margin: auto;
  box-sizing: border-box;
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
      content: "ثبت نام";
      display: block;
      position: absolute;
      background: #ffffff;
      padding: 1vw 2vw;
      font-size: 1vw;
      font-weight: 400;
      left: 50%;
      transform: translateX(-50%);
      top: -8%;
    }
  }

  @media (max-width: 800px) {
    width: 80%;
    form {
      border: 5px solid #ffe6bf;
      padding: 4.6vh 2.6vw 0vh;
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
        content: "ثبت نام";
        display: block;
        position: absolute;
        background: #ffffff;
        padding: 1vw 2vw;
        font-size: 2.7vw;
        font-weight: 400;
        left: 50%;
        transform: translateX(-50%);
        top: -10%;
      }
    }
  }

  @media (max-width: 600px) {
    width: 100%;
    margin: 0 auto;
    form {
      border: 5px solid #ffe6bf;
      padding: 4.6vh 2.6vw 0vh;
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
        top: -8%;
      }
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
