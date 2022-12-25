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
  const [mobileNavbarSelecter, setMobileNavbarSelecter] = useState(false)
  const menuItem = data.navbar.map((x, i) => {
    return (
      <Wraper>
        <Item
          key={i}
          onClick={() => {
            setSelect(i);
            navigate(x.path);
            handleMobileNavbar()
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
                    handleMobileNavbar()
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
  function handleMobileNavbar(){
    setMobileNavbarSelecter(x => !x)
    console.log(mobileNavbarSelecter)
  }
  return (
    <Container>
      <NavbarDesktop>
          <Logo>
            <SocialNetwork>
              <div className="instagram"></div>
              <div className="whatsapp"></div>
            </SocialNetwork>
          </Logo>
          <Items>{menuItem}</Items>
          <Search>
            <input type="text" placeholder="جستجو" />
            <span></span>
          </Search>
      </NavbarDesktop>
      <MobileNavbar>
      <OverlayNav mobileNavbarSelecter={mobileNavbarSelecter}> 
      <CloseNavbar onClick={() => handleMobileNavbar()}>
          <span className="closebtn">
            +
          </span>
        </CloseNavbar>
            <Items>{menuItem}
            <Search>
              <input type="text" placeholder="جستجو" />
              <span></span>
            </Search>
            </Items>
            
      </OverlayNav>
      <FixNavbar className="fixNavbar">
        <Hubmerger className="burgersss" onClick={() => handleMobileNavbar()}>
          <span className="burger"></span>
          <span className="burger"></span>
          <span className="burger"></span>
        </Hubmerger>
        {/* }  */}
        <LogoMobile>
        {/* <SocialNetwork>
              <div className="instagram"></div>
              <div className="whatsapp"></div>
            </SocialNetwork> */}
        </LogoMobile>
        </FixNavbar>
      </MobileNavbar>
    </Container>
  );
};



const FixNavbar = styled.div`
width:90vw;
margin:0px auto;
display:flex;
align-items:center;
// border:4px solid red;
justify-content:space-between;
`

const OverlayNav = styled.div`
display:flex;
// border:3px solid red;
height:150vh;
position:absolute;
position: fixed;
top:0vh;
overflow-y:hidden;
touch-action: none;

left:${props => props.mobileNavbarSelecter == true ? "0%" : "150%"}};
z-index:102;
padding:0;
background-color: #444444;
transition: 0.7s;
width:${props => props.mobileNavbarSelecter == true ? "100%" : "0"}};
overflow-x: hidden;
// box-sizing:border-box;
`

const NavbarDesktop = styled.div`
display: flex;
width:80%;
justify-content: flex-start;
padding: 3.472vw 0.556vw;
align-items: center;
gap: 2.083vw;
@media (max-width: 800px){
  display:none;
}

`
const MobileNavbar = styled.div`
position:relative;
width:100%;
margin:10px auto;
display:flex;
justify-content: space-between;
align-items:center;
// border:10px solid black;

.close {
  font-size: 5rem;
  font-weight: 600;
  display: inline-block;
  // transform: rotate(45deg);
}


@media (min-width: 600px){
  display:none;

`

const LogoMobile = styled.div`
height:8vh;
width:8vh;
background-repeat: no-repeat;
background-size: contain;
background-image: url(${logo});
`

const CloseNavbar = styled.div`
width:12vw;
height: 12vw;
display:flex;
align-items:center;
justify-content:center;
z-index:101;
position:absolute;
right:4.5vw;
top:3.5vh;

.closebtn{
  color:white;
  transform: rotate(45deg);
  font-size: 6rem;
}
`

const Hubmerger = styled.div`
width:12vw;
height: 10vw;
display:flex;
flex-direction:column;
justify-content:space-between;
z-index:101;
.burger{
  border-radius:7.5px;
  background-color:black;
  width:100%;
  height:20%;
}
`

const Container = styled.nav`
  display: flex;
  justify-content: flex-start;
  padding: 0.472vw 5.556vw;
  align-items: center;

  @media (max-width: 600px){
    // gap: 4vh;
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
  }
  .instagram {
    background-image: url(${instagram});
  }
  .whatsapp {
    background-image: url(${whatsapp});
  }
`;

const Logo = styled.div`
display:flex;
align-items:center;
  width: 7vw;
  height: 5vw;
  background-repeat: no-repeat;
  background-size: contain;
  background-image: url(${logo});
`;

const Search = styled.div`
  // border:3px solid red;
  display: flex;
  align-items: center;
  justify-content:center;
  input {
    outline: none;
    border: none;
    background: ${(props) => props.theme.background[1]};
    font-size: 1.736vw;
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


  @media (max-width: 600px){
    flex-direction:column;
    position:relative;
    input {
      outline: none;
      border: none;
      background: ${(props) => props.theme.background[1]};
      font-size: 4.736vw;
      font-weight: 400;
      padding: 25px 25px 25px 0;
      width: 100%;
      // color:white;
    }
    span {
      position:absolute;
      // display:none;
      left:0;
      width: 10.569vw;
      height: 10.569vw;
      background-repeat: no-repeat;
      background-size: contain;
      background-image: url(${search});
    }
  }

`;

const Items = styled.ul`
// border:3px solid red;
  margin: 0;
  padding: 0;
  list-style: none;
  display: flex;
  gap: 2vw;
  padding-right: 2vw;

  @media (max-width: 600px){
    padding:20vh 5vh;
    // border:3px solid white;
    flex-direction:column;
    justify-content:flex-start;
    gap:5vh;
    align-items:space-between;
    width:100%;
  }
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
  @media (max-width: 600px){
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
        // display: flex;
        flex-direction: column;
        background: #444444;
        // background: red;
        // padding: 1.042vw;
        gap: 1.042vw;
        box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
        li {
          color: ${(props) => props.theme.textColor[0]};
          white-space: nowrap;
          color:white;
          text-align: center;
          padding:5px 0 ;
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

  @media (max-width: 600px){
    color: white;
    // border:2px solid yellow;
    width:100%;
    text-align:center;
    padding: 0;
    font-size: 2.2rem;
  }

`;

export default Navbar;
