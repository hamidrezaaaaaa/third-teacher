import React, { useState } from "react";
import styled from "styled-components";
import instagram from "../../assets/icon/instagram.png";
import whatsapp from "../../assets/icon/instagram.png";
import logo from "../../assets/logo/logo.png";
import search from "../../assets/icon/search.png";

const Navbar = () => {
  const [select, setSelect] = useState(1);
  return (
    <Container>
      <SocialNetwork>
        <div className="instagram"></div>
        <div className="whatsapp"></div>
      </SocialNetwork>

      <Logo />

      <Items>
        <Item
          onClick={() => {
            setSelect(1);
          }}
          className={select == 1 ? "active" : ""}
        >
          صفحه اصلی
        </Item>
        <Item
          onClick={() => {
            setSelect(2);
          }}
          className={select == 2 ? "active" : ""}
        >
          درباره معلم سوم
          <ul className="drop-down">
            <li>اعضای گروه</li>
            <li>معلم سوم</li>
            <li>مکعب سبز خلاق</li>
          </ul>
        </Item>

        <Item
          onClick={() => {
            setSelect(3);
          }}
          className={select == 3 ? "active" : ""}
        >
          ورود/ثبت نام
          <ul className="drop-down">
            <li> ورود</li>
            <li>ثبت نام </li>
          </ul>
        </Item>
      </Items>

      <Search>
        <input type="text" placeholder="جستجو" />
        <span></span>
      </Search>
    </Container>
  );
};

const Container = styled.nav`
  display: flex;
  justify-content: flex-start;
  padding: 3.472vw 5.556vw;
  align-items: center;
  gap: 2.083vw;
`;
const SocialNetwork = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.694vw;
  .instagram,
  .whatsapp {
    width: 1.389vw;
    height: 1.389vw;
    background-repeat: no-repeat;
    background-size: contain;
  }
  .instagram {
    background-image: url(${instagram});
  }
  .whatsapp {
    background-image: url(${whatsapp});
  }
`;

const Logo = styled.div`
  width: 5.556vw;
  height: 5.556vw;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${logo});
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  input {
    outline: none;
    border: none;
    background: ${(props) => props.theme.background[1]};
    font-size: 1.736vw;
    font-weight: 400;
    padding: 5px;
    width: 27.778vw;
  }
  span {
    width: 2.569vw;
    height: 2.569vw;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${search});
  }
`;

const Items = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 2.222vw;
  padding-right: 3.472vw;
`;

const Item = styled.li`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.textColor[1]};
  font-weight: 300;
  font-size: 1.736vw;
  cursor: pointer;
  position: relative;
  &.active {
    font-weight: 500;
    &:after {
      content: "";
      display: block;
      position: absolute;
      bottom: -10px;
      width: 100%;
      height: 3px;
      background: ${(props) => props.theme.background[1]};
    }
  }
  .drop-down {
    margin: 0;
    padding: 0;
    list-style: none;
    display: none;
  }
  &:hover {
    color: ${(props) => props.theme.textColor[3]};
    .drop-down {
      position: absolute;
      display: flex;
      flex-direction: column;
      background: #ffffff;
      padding: 1.042vw;
      gap: 0.694vw;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      // top:30px;
      li {
        color: ${(props) => props.theme.textColor[0]};
        white-space: nowrap;
        text-align: center;
      }
    }
  }
`;

export default Navbar;
