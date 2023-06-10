import React, { useState, useEffect } from "react";
import styled from "styled-components";
import instagram from "../../assets/icon/insta.svg";
import whatsapp from "../../assets/icon/what.svg";
import logo from "../../assets/logo/logo.jpg";
import search from "../../assets/icon/search.png";
import data from "../../data/navbar.json";
import { useNavigate } from "react-router-dom";
import PreviousTablet from "../previousLink/previousTablet";

const Navbar = () => {
  const [select, setSelect] = useState(0);
  const navigate = useNavigate();
  const [mobileNavbarSelecter, setMobileNavbarSelecter] = useState(false);

  const [screenWidthSize, setScreenWidthSize] = useState(window.innerWidth);
  const updateMedia = () => {
    setScreenWidthSize(window.innerWidth);
  };
  useEffect(() => {
    window.addEventListener("resize", updateMedia);
    return () => window.removeEventListener("resize", updateMedia);
  });
  const menuItemDesktop = data.navbar.map((x, i) => {
    return (
      <Wraper key={i}>
        <Item
          
          onClick={(e) => {
            setSelect(i);
            navigate(x.path);
            handleMobileNavbar();
          }}
          className={select == i ? "active" : ""}
        >
          {x.section}
        </Item>
        {x.dropDown && (
          <ul className="drop-down">
            {x.dropDown.map((z, g) => {
              return (
                <li
                  key={g}
                  onClick={() => {
                    navigate(z.path);
                    handleMobileNavbar();
                    setSelect(i);
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
  const menuItemMobile = data.navbar.map((x, i) => {
    return (
      <Wraper   key={x.section}>
        <Item
          onClick={(e) => {
            if (i == 0) {
              setSelect(i);
              navigate(x.path);
              handleMobileNavbar();
            }
          }}
          className={select == i ? "active" : ""}
        >
          {x.section}
        </Item>
        {x.dropDown && (
          <ul className="drop-down">
            {x.dropDown.map((z, g) => {
              return (
                <li
                  key={z.title}
                  onClick={() => {
                    navigate(z.path);
                    handleMobileNavbar();
                    setSelect(i);
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
  function handleMobileNavbar() {
    setMobileNavbarSelecter((x) => !x);
  }

 

  return (
    <Container>
      {800 < screenWidthSize ? (
        <NavbarDesktop>
          <Logo
            onClick={(e) => {
              navigate("/");
            }}
          >
            <SocialNetwork>
              <div className="instagram" onClick={(e)=>{e.stopPropagation(); window.open('https://www.instagram.com/thethird_teacher', '_blank', 'noreferrer');}} ></div>
              <div className="whatsapp" onClick={(e)=>{e.stopPropagation(); window.open('https://wa.me/09134431746', '_blank', 'noreferrer');}} ></div>
            </SocialNetwork>
          </Logo>
          <Items>{menuItemDesktop}</Items>
          <Search>
            <input type="text" placeholder="جستجو" />
            <span></span>
          </Search>
        </NavbarDesktop>
      ) : (
        <MobileNavbar>
          <OverlayNav mobileNavbarSelecter={mobileNavbarSelecter}>
            <CloseNavbar onClick={() => handleMobileNavbar()}>
              <span className="closebtn">+</span>
            </CloseNavbar>
            <Items>
              {menuItemMobile}
              <Search>
                <input type="text" placeholder="جستجو" />
                <span></span>
              </Search>
            </Items>
          </OverlayNav>
          <FixNavbar className="fixNavbar">
            <Hubmerger
              className="burgersss"
              onClick={() => handleMobileNavbar()}
            >
              <span className="burger"></span>
              <span className="burger"></span>
              <span className="burger"></span>
            </Hubmerger>
            <PreviousTablet />
            <LogoMobile
              onClick={() => {
                navigate("/");
              }}
            >
              {/* <SocialNetwork>
              <div className="instagram"></div>
              <div className="whatsapp"></div>
            </SocialNetwork> */}
            </LogoMobile>
          </FixNavbar>
        </MobileNavbar>
      )}
    </Container>
  );
};

const FixNavbar = styled.div`
  width: 90vw;
  margin: 0px auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
`;

const OverlayNav = styled.div`
display:flex;
height:100vh;
position:absolute;
position: fixed;
top:0vh;
overflow-y:hidden;
touch-action: none;
left : ${props=>props.mobileNavbarSelecter ==true ? '0%':'150%'};
z-index:102;
padding:0;
background-color: #444444;
transition: 0.7s;
width : ${props=>props.mobileNavbarSelecter ==true ?'100%':'0'};
overflow-x: hidden;

@media (min-width: 600px) and (max-width: 800px){
}

`;

const NavbarDesktop = styled.div`
  display: flex;
  width: 80%;
  justify-content: flex-start;
  padding: 3.472vw 0.556vw;
  align-items: center;
  gap: 2.083vw;
`;
const MobileNavbar = styled.div`
  @media (min-width: 600px) and (max-width: 800px) {
    margin-bottom: 2vh;
  }
  position: relative;
  width: 100%;
  margin: 10px auto;
  display: flex;
  justify-content: space-between;
  align-items: center;
  .close {
    font-size: 2rem;
    font-weight: 600;
    display: inline-block;
  }
`;

const LogoMobile = styled.div`
  width: 14vw;
  height: 11.66vw;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${logo});
`;

const CloseNavbar = styled.div`
  width: 12vw;
  height: 12vw;
  display: flex;
  align-items: center;
  justify-content: center;
  z-index: 101;
  position: absolute;
  right: 4.5vw;
  top: 3.5vh;

  .closebtn {
    color: white;
    transform: rotate(45deg);
    font-size: 4rem;
  }
`;

const Hubmerger = styled.div`
  width: 25px;
  height: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  z-index: 101;
  .burger {
    border-radius: 7.5px;
    background-color: black;
    width: 100%;
    height: 3px;
  }
  @media (min-width: 600px) and (max-width: 800px) {
    width: 4vw;
    height: 3vw;
  }
`;

const Container = styled.nav`
  display: flex;
  justify-content: flex-start;
  padding: 0.472vw 5.556vw;
  align-items: center;

  @media (max-width: 600px) {
    padding: 3.472vw 0vw;
  }
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
    cursor: pointer;
  }
  .instagram {
    background-image: url(${instagram});
  }
  .whatsapp {
    background-image: url(${whatsapp});
  }
`;

const Logo = styled.div`
  display: flex;
  align-items: center;
  width: 7vw;
  height: 5vw;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${logo});
`;

const Search = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  input {
    outline: none;
    border: none;
    background: ${(props) => props.theme.background[1]};
    font-size: 1vw;
    font-weight: 400;
    padding: 5px;
    width: 28vw;
  }
  span {
    width: 2.569vw;
    height: 2.569vw;
    background-repeat: no-repeat;
    background-size: contain;
    background-image: url(${search});
  }

  @media (max-width: 800px) {
    flex-direction: column;
    position: relative;
    input {
      outline: none;
      border: none;
      background: ${(props) => props.theme.background[1]};
      font-size: 2.5vw;
      font-weight: 400;
      padding: 25px 25px 25px 0;
      width: 98%;
    }
    span {
      position: absolute;
      left: 1vw;
      width: 7.569vw;
      height: 7.569vw;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url(${search});
    }
  }

  @media (max-width: 600px) {
    flex-direction: column;
    align-items: center;
    position: relative;
    input {
      outline: none;
      border: none;
      background: ${(props) => props.theme.background[1]};
      font-size: 3.5vw;
      font-weight: 400;
      padding: 20px 25px 20px 0;
      width: 100%;
    }
    span {
      position: absolute;
      left: 0;
      width: 10.569vw;
      height: 10.569vw;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url(${search});
    }
  }
`;

const Items = styled.ul`
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 2vw;
  padding-right: 2vw;
  @media (max-width: 800px) {
    padding: 20vh 5vh;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5vh;
    color: white !important;
    align-items: space-between;
    width: 100%;
  }

  @media (max-width: 600px) {
    padding: 20vh 5vh;
    flex-direction: column;
    justify-content: flex-start;
    gap: 5vh;
    align-items: space-between;
    width: 100%;
  }
`;

const Wraper = styled.div`
  .drop-down {
    margin: 0;
    padding: 0;
    list-style: none;
    display: none;
    z-index: 100;
    li{
      font-size: 0.8vw;
    }
  }
 
  &:hover{
    .drop-down {
      position: absolute;
      display: flex;
      flex-direction: column;
      background: #ffffff;
      padding: 1.042vw;
      gap: 1.042vw;
      box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
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
  
  @media (max-width: 800px){
    flex-direction:column;
    display:flex;
    align-items:center;
    .drop-down {
      
      margin: 20px 0 0;
      padding: 0;
      list-style: none;
      display: none;
      z-index: 100;
    }
    &:hover {
      .drop-down {
        text-align: center;
        position: relative;
        flex-direction: column;
        background: #444444;
        gap: 1.042vw;
        width:100%;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        li {
          color: ${(props) => props.theme.textColor[0]};
          white-space: nowrap;
          color:white;
          width:100%;
          text-align: center;
          padding:5px 0 ;
          cursor:pointer;
          font-size: 1rem;

          &:hover {
            color: ${(props) => props.theme.textColor[3]};
          }
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
  font-size: 1vw;
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

  @media (max-width: 800px) {
    color: white;
    width: 100%;
    text-align: center;
    padding: 0;
    font-size: 2rem;
  }

  @media (max-width: 600px) {
    color: white;
    width: 100%;
    text-align: center;
    padding: 0;
    font-size: 1rem;
  }
`;

export default Navbar;
