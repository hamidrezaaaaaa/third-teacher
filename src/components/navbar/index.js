import React, { useState } from "react";
import styled from "styled-components";
import instagram from "../../assets/icon/instagram.png";
import whatsapp from "../../assets/icon/instagram.png";
import logo from "../../assets/logo/logo.png";
import search from "../../assets/icon/search.png";
import data from "../../data/navbar.json";
import { useNavigate } from "react-router-dom";

const Navbar = () => {
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();

  const menuItem = data.navbar.map((x, i) => {
    return (
      <Wraper>
        <Item
          key={i}
          onClick={() => {
            setSelect(i);
            navigate(x.path);
          }}
          className={select == i ? "active" : ""}
        >
          {x.section}
        </Item>
        {x.dropDown && (
          <ul className="drop-down">
            {x.dropDown.map((z, i) => {
              return (
                <li
                  key={i}
                  onClick={() => {
                    navigate(z.path);
                  }}
                >
                  {z.title}
                </li>
              );
            })}
          </ul>
        )}
      </Wraper>
    );
  });

  return (
    <Container>
      <SocialNetwork>
        <div className="instagram"></div>
        <div className="whatsapp"></div>
      </SocialNetwork>

      <Logo />

      <Items>{menuItem}</Items>

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
  width: 5vw;
  height: 5vw;
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
    width: 22vw;
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
  gap: 2vw;
  padding-right: 2vw;
`;

const Wraper = styled.div`
  .drop-down {
    margin: 0;
    padding: 0;
    list-style: none;
    display: none;
    z-index: 100;
  }
  &:hover {
    .drop-down {
      position: absolute;
      display: flex;
      flex-direction: column;
      background: #ffffff;
      padding: 1.042vw;
      gap: 1.042vw;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
      // top:30px;
      li {
        color: ${(props) => props.theme.textColor[0]};
        white-space: nowrap;
        text-align: center;
        cursor:pointer;
        &:hover {
          color: ${(props) => props.theme.textColor[3]};
        }
      }
    }
  }
`;

const Item = styled.li`
  margin: 0;
  padding: 0;
  color: ${(props) => props.theme.textColor[1]};
  font-weight: 300;
  font-size: 1.4vw;
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

  &:hover {
    color: ${(props) => props.theme.textColor[3]};
  }
`;

export default Navbar;
