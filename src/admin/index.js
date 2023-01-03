import React from "react";
import styled from "styled-components";
import { useUser } from "../context/useContext";
import MainDashboard from "./components/dashboard";
import LoginForm from "./components/loginForm";

const AdminDashboard = () => {
  const { state, dispatch } = useUser();

  return(
    <Container>
        {state.adminAccess ? (<MainDashboard/> ):(<LoginForm/>)}
    </Container>
  )
 
};

const Container = styled.section`
  margin: 0;
  padding: 0;
  display: flex;
  justify-content: center;
  align-items: center;
  background-color: #0e1116;
  width: 100%;
  // height: 100vh;
`;

export default AdminDashboard;
