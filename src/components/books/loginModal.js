import React, { useEffect, useState } from "react";
import styled from "styled-components";
import Modal from "react-modal";
import { useUser } from "../../context/useContext";
import { useNavigate } from "react-router-dom";

//style for modal
const customStyles = {
  overlay: {
    backgroundColor: "rgba(0, 0, 0, 0.75)",
  },
  content: {
    top: "50%",
    left: "50%",
    right: "auto",
    bottom: "auto",
    marginRight: "-50%",
    transform: "translate(-50%, -50%)",
    backgroundColor: "#4C5675",
    border: "none",
    width: "40%",
  },
};

const LoginModal = ({ onClose, visible }) => {
  const { state, dispatch } = useUser();
  const navigate =useNavigate();

  return (
    <Modal
      isOpen={visible}
      onRequestClose={() => onClose(false)}
      style={customStyles}
      ariaHideApp={false}
    >
      <Content>
        <h3> لطفا قبل از دانلود کتاب وارد شوید </h3>
        <p className="text">
          درصورتی که قبلا ثبت نام نکرده اید میتوانید از طریق لینک زیر وارد بخش
          ثبت نام شوید
        </p>

        <Box>
          <button className="fill-button" onClick={()=>{navigate('/log-in')}} >ورود</button>
          <button className="outfill-button" onClick={()=>{navigate('/sign-in')}}>ثبت نام</button>
        </Box>
      </Content>
    </Modal>
  );
};

const Content = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  gap: 24px;
  padding: 2vw;
  h3 {
    margin: 0;
    font-size: 1.4vw;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
  }
  .text {
    margin: 0;
    font-size: 1.2vw;
    font-weight: 400;
    color: #ffffff;
    text-align: center;
  }
`;

const Box = styled.div`
  display: flex;
  align-items: center;
  gap: 24px;
  .fill-button {
    padding:5px 12px;
    border: none;
    background: #8cd7d3;
    cursor: pointer;
    font-size: 16px;
  }
  .outfill-button {
    padding:5px 12px;
    border: none;
    background: #ffcf87;
    cursor: pointer;
    font-size: 16px;
  }
`;

export default LoginModal;
