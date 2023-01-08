import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import { useFormik } from "formik";
import { signInFormSchema } from "../../schema";

const SignInForm = () => {
  const navigate = useNavigate();

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
      firstName: "",
      lastName: "",
      birthPlace: "",
      education: "",
      university: "",
      job: "",
      phoneNumber: "",
      email: "",
      province: "",
      address: "",
      postCode: "",
    },
    validationSchema: signInFormSchema,
    onSubmit,
  });

  return (
    <Container>
      <Title>عضویت</Title>
      <Form onSubmit={handleSubmit} autoComplete="off">
        <div className="form" >
          <input
            placeholder="نام"
            id="firstName"
            value={values.firstName}
            onChange={handleChange}
          />
          {errors.firstName && touched.firstName && (
            <ErrorText>{errors.firstName}</ErrorText>
          )}
          <input
            placeholder="نام‌ خانوادگی"
            id="lastName"
            value={values.lastName}
            onChange={handleChange}
          />
          {errors.lastName && touched.lastName && (
            <ErrorText>{errors.lastName}</ErrorText>
          )}
          <input
            placeholder="تولد"
            id="birthPlace"
            value={values.birthPlace}
            onChange={handleChange}
          />
          {errors.birthPlace && touched.birthPlace && (
            <ErrorText>{errors.birthPlace}</ErrorText>
          )}
          <input
            placeholder="تحصیلات"
            id="education"
            value={values.education}
            onChange={handleChange}
          />
          {errors.education && touched.education && (
            <ErrorText>{errors.education}</ErrorText>
          )}
          <input
            placeholder="دانشگاه"
            id="university"
            value={values.university}
            onChange={handleChange}
          />
          {errors.university && touched.university && (
            <ErrorText>{errors.university}</ErrorText>
          )}
          <input
            placeholder="شغل"
            id="job"
            value={values.job}
            onChange={handleChange}
          />
          {errors.job && touched.job && <ErrorText>{errors.job}</ErrorText>}
          <input
            placeholder="تلفن همراه"
            id="phoneNumber"
            value={values.phoneNumber}
            onChange={handleChange}
          />
          {errors.phoneNumber && touched.phoneNumber && (
            <ErrorText>{errors.phoneNumber}</ErrorText>
          )}
          <input
            placeholder="آدرس ایمیل"
            id="email"
            value={values.email}
            onChange={handleChange}
          />
          {errors.email && touched.email && (
            <ErrorText>{errors.email}</ErrorText>
          )}
          <input
            placeholder="استان"
            id="province"
            value={values.province}
            onChange={handleChange}
          />
          {errors.province && touched.province && (
            <ErrorText>{errors.province}</ErrorText>
          )}
          <input
            placeholder="آدرس"
            id="address"
            value={values.address}
            onChange={handleChange}
          />
          {errors.address && touched.address && (
            <ErrorText>{errors.address}</ErrorText>
          )}
          <input
            placeholder="کدپستی"
            id="postCode"
            value={values.postCode}
            onChange={handleChange}
          />
          {errors.postCode && touched.postCode && (
            <ErrorText>{errors.postCode}</ErrorText>
          )}
        </div>
        <button type="submit">عضویت</button>

      </Form>
    </Container>
  );
};

const Container = styled.div`
width:100%;
box-sizing:border-box;
@media (max-width: 800px){
  padding:0px 0vw 0 1vw;
  width: 92%;
  box-sizing:border-box;
  margin:0 auto;
  margin-top: -2vh;
}
@media (max-width: 600px){
  heigth: auto;
  width: 100%;
  padding:0px 0vw 0 1vw;
  width: 100%;
  box-sizing:border-box;
  margin:0 auto;
}
`;

const Title = styled.h1`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.textColor[1]};
  font-size: 1.736vw;
  font-weight: 500;
  display: flex;
  flex-direction: column;
  width: 10%;
  gap: 10px;
  margin-bottom: 0.694vw;
  &:after {
    content: "";
    display: inline-flex;
    width: 100%;
    height: 3px;
    background: ${(props) => props.theme.background[1]};
  }
  @media (max-width: 800px){
    
    font-size: 4.236vw;
    margin: 0 5vw 2vw;
    width: 18%;
  }
  &:after {
    content: "";
    display: inline-flex;
    height: 5px;
    background: ${(props) => props.theme.background[1]};
  }
  @media (max-width: 600px){
    font-size: 3.736vw;
    margin: 0 0vw 5vw;
    width: 25%;
    font-size: 5.389vw;
  }
  &:after {
    content: "";
    display: inline-flex;
    height: 3px;
    background: ${(props) => props.theme.background[1]};
  }
  }

  `;
  
  const Form = styled.form`
  display: flex;
  justify-content: space-between;
  .form {
    display: flex;
  flex-direction: column;
  gap: 0.736vw;
  width: 100%;
  input {
      outline: none;
      width: 70%;
      padding: 0.5vw;
      border: none;
      background: ${(props) => props.theme.background[1]};
      font-size: 1.736vw;
      font-weight: 400;
      color: ${(props) => props.theme.textColor[1]};
    }
  }
  button {
    margin-top: auto;
    border: none;
    background: ${(props) => props.theme.background[1]};
    padding: 0.694vw 1.389vw;
    font-size: 1.389vw;
    padding:3vh;
    color: ${(props) => props.theme.textColor[0]};
    z-index:20;
  }
  
  @media (max-width: 800px){
    
    margin: 0 auto;
    width: 100%;
    align-items:center;
    gap:3vh;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    button {
      margin-top: auto;
      border: none;
      background: ${(props) => props.theme.background[1]};
      padding: 1.694vw 3.389vw;
      font-size: 3.389vw;
      color: ${(props) => props.theme.textColor[0]};
      z-index:20;
    }
    .form {
      margin: 0 auto;
      width: 80%;
      border: 5px solid #ffe6bf;
      padding: 4.6vh 2.6vw 0vh;
      input {
        width: 100%;
        margin-bottom: 1.042vw;
        border: none;
        padding: 1.6vh 0vw;
        background: ${(props) => props.theme.background[1]};
        font-size: 2.889vw;
        text-align: center;
        outline: none;
      }
    }
  }

  @media (max-width: 600px){
    box-sizing:border-box;
    margin: 0 auto;
    width: 100%;
    align-items:center;
    gap:3vh;
    flex-direction:column;
    justify-content: center;
    align-items:center;
    button {
      margin-top: auto;
      border: none;
      background: ${(props) => props.theme.background[1]};
      padding: 1.694vw 3.389vw;
      padding: 2vw 4vw;
      font-size: 4.389vw;
      color: ${(props) => props.theme.textColor[0]};
      z-index:20;
    }
    .form {
      margin: 0 auto;
      width: 100%;
      border: 5px solid #ffe6bf;
      padding: 4.6vh 0vw 0vh;
      input {
        margin-bottom: 1.042vw;
        border: none;
        padding: 1.6vh 0vw;
        background: ${(props) => props.theme.background[1]};
        font-size: 4.389vw;
        text-align: center;
        outline: none;
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
  @media (max-width: 800px){
    font-size: 2.5vw;
    padding:0.7vh;

  }
  @media (max-width: 600px){
    font-size: 3.5vw;
  }
`;

export default SignInForm;
