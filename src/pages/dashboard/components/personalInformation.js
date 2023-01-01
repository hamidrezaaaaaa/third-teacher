import styled from "styled-components";
import { useUser } from "../../../context/useContext";

const PersonalInformation = () => {
  const { state, dispatch } = useUser();


  return (
    <Container>
      <Form>
        <input placeholder="نام" />
        <input placeholder="نام‌ خانوادگی" />
        <input placeholder="تولد" />
        <input placeholder="تحصیلات" />
        <input placeholder="دانشگاه" />
        <input placeholder="شغل" />
        <input placeholder="تلفن همراه" />
        <input placeholder="آدرس ایمیل" />
        <input placeholder="استان" />
        <input placeholder="آدرس" />
        <input placeholder="کدپستی" />
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
