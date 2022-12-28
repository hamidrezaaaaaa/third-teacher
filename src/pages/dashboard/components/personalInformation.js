import styled from "styled-components";

const PersonalInformation = () => {
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
  padding: 3vh 2vw;
  @media (max-width: 800px){
    margin-top:2vh;
      height:100%;
    }
`;
const Form = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items:center;
  gap: 0.736vw;
  width: 80%;
  margin: 0 auto;
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

  @media (max-width: 800px){
    
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
      font-size: 3.736vw;
      font-weight: 400;
      color: ${(props) => props.theme.textColor[1]};
    }
  }
`;

export default PersonalInformation;
