import { useNavigate } from "react-router-dom";
import styled from "styled-components";
import SideBar from "../components/sidebar";

const LogIn = () => {
  const navigate = useNavigate();
  const sideBarData =
    "- پس تو را به چه کار آفریده‌اند؟ - به درد کشیدن به خاطر حق و تا - پس تو را به چه کار آفریده‌اند؟ - به درد کشیدن به خاطر حق و تا - پس تو را به چه کار آفریده‌اند؟ - به درد کشیدن به خاطر حق و تا";
  return (
    <Container>
      <Content>
        <Wraper>
          <form>
            <input placeholder="نام کاربری یا آدرس ایمیل" />
            <input type="password" placeholder="گذرواژه" />
            <button>ورود</button>
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
      {/* <SideBar content={sideBarData} width="20%" /> */}
    </Container>
  );
};

const Container = styled.section`
  display: flex;
  justify-content: space-between;
  // padding-left: 1.736vw;
`;

const Content = styled.div`
  width: 60%;
  height: 60vh;
  display: flex;
  flex-direction: column;
  gap: 1.736vw;
  margin:0 auto;
  padding: 6.25vw 0 4.861vw 0;

  @media (max-width: 800px){
    width: 90%;
    height: 65vh;
`;

const Wraper = styled.div`
// border:3px solid black;
  width: 80%;
  margin: auto;
  // height:10vh;
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

  @media (max-width: 800px){
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
        top: -10%;
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

  @media (max-width: 800px){
    font-size: 2.389vw;
    margin-top: 8vw;
    font-weight: 400;
  }
`;
const Link = styled(ForgetPass)`
  margin-top: 1vw;
`;
export default LogIn;
