import React, { useState } from "react";
import styled from "styled-components";
import { useUser } from "../../context/useContext";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { BaseBackURL } from "../../constant/api";
import jwt_decoded from "jwt-decode";
import {  toast } from 'react-toastify';



const DropdownContainer = styled.div`
  position: relative;
  display: inline-block;
`;

const DropdownButton = styled.button`
  background: inherit;
  border: none;
  color: #564e43;
  font-size: 0.8rem;
  /* background: #ffcf87; */
  padding: 6px 20px 6px 20px;
  cursor: pointer;
  z-index: 80;
`;

const DropdownMenu = styled.ul`
  position: absolute;
  box-shadow: rgba(0, 0, 0, 0.35) 0px 5px 15px;
  top: 100%;
  left: 0;
  /* background-color: #f1f1f1; */
  list-style-type: none;
  margin: 0;
  padding: 1.042vw;
  z-index: 80;
`;

const DropdownMenuItem = styled.li`
  color: #4f594e;
  font-size: 0.8vw;
  white-space: nowrap;
  text-align: center;
  cursor: pointer;
  margin-bottom: 1.042vw;
  &:hover {
    background-color: #ddd;
  }
`;

function Account() {
  const { state, dispatch } = useUser();
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();
  const token = state.token;
  const decoded = jwt_decoded(token);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const logout =()=>{
    let data = JSON.stringify({
      "token": `${state.token}`
    });
    
    let config = {
      method: 'post',
      url: `${BaseBackURL}user/logout/${decoded.userId}/`,
      headers: { 
        'Content-Type': 'application/json'
      },
      data : data
    };
    
    axios.request(config)
    .then((response) => {
      // console.log(JSON.stringify(response.data));
      dispatch({ type: "SET_LOGIN", payload: false});
      dispatch({ type: "SET_TOKEN", payload: '' });
      dispatch({ type: "SET_USER_INFO", payload: {} });
      navigate('/')
      toast.success("خروج با موفقیت انجام شد", {
        position: toast.POSITION.TOP_RIGHT,
      });
    })
    .catch((error) => {
      console.log(error);
      toast.error("لطفا مجدد تلاش کنید", {
        position: toast.POSITION.TOP_RIGHT,
      });
    });
  }

  return (
    <DropdownContainer>
      <DropdownButton onClick={toggleMenu}>
        {state.userInfo.firstname + " " + state.userInfo.lastname}
      </DropdownButton>
      {isOpen && (
        <DropdownMenu>
          <DropdownMenuItem
            onClick={() => {
              setIsOpen(false);
              navigate("/dashboard");
            }}
          >
            ورود به داشبورد
          </DropdownMenuItem>
          <DropdownMenuItem
            onClick={() => {
              setIsOpen(false);
              logout()
            }}
          >
            خروج از حساب کاربری
          </DropdownMenuItem>
        </DropdownMenu>
      )}
    </DropdownContainer>
  );
}

export default Account;
