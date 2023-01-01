import React from "react";
import styled from "styled-components";
import { useUser } from "../../context/useContext";
import { useFormik } from "formik";
import { logInSchema } from "../../schema";
import { toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const LoginForm = () => {
  const { state, dispatch } = useUser();
  const userName = "Admin";
  const password = "Admin";

  const onSubmit = async (values) => {
    if (userName === values.userName && password === values.password) {
      dispatch({ type: "SET_ADMIN_ACCESS", payload: true });
    } else {
      toast.error("نام کاربری یا رمز عبور اشتباه است!", {
        position: toast.POSITION.TOP_RIGHT,
      });
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
    },
    validationSchema: logInSchema,
    onSubmit,
  });
  return (
    <Container>
      <h3>ورود به پنل ادمین</h3>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <input
          placeholder="نام کاربری"
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
      </Form>
    </Container>
  );
};

const Container = styled.p`
  width: 40%;
  background-color: #616283;
  border-radius: 8px;
  padding: 2vw;
  h3 {
    text-align: center;
    font-size: 2vw;
    font-weight: bold;
    color: #0e1116;
  }
`;

const Form = styled.form`
  display: flex;
  flex-direction: column;
  gap: 1vw;
  input {
    border: none;
    padding: 1.6vw;
    border-radius: 4px;
    background: #374a67;
    color: #9e7b9b;
    font-size: 1.389vw;
    outline: none;
    ::placeholder {
      color: #9e7b9b;
      //   color:#0E1116;
    }
  }
  button {
    border: none;
    width: fit-content;
    margin: auto;
    background: #9e7b9b;
    padding: 1vw 2vw;
    font-size: 1.389vw;
    font-weight: bold;
    border-radius: 4px;
    color: #374a67;
  }
`;

const ErrorText = styled.p`
  color: #cb9cf2;
  font-size: 1vw;
  width: 100%;
  text-align: right;
  margin: 0;
  margin-right: 2%;
  margin-top: -2%;
`;

export default LoginForm;
