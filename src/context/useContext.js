import React, { useReducer, useContext, useEffect } from "react";
// import Cookies from "js-cookie";

const initialState = {
  email: "",
  password: "",
  userInfo: {},
  adminAccess: false,
  update: false,
  loggedIn: false,
  token: null,
};

export const userContext = React.createContext({});

const reducer = (state, action) => {
  switch (action.type) {
    case "SET_EMAIL":
      return { ...state, email: action.payload };
    case "SET_PASSWORD":
      return { ...state, password: action.payload };
    case "SET_ADMIN_ACCESS":
      return { ...state, adminAccess: action.payload };
    case "SET_USER_INFO":
      return { ...state, userInfo: action.payload };
    case "SET_UPDATE":
      return { ...state, update: action.payload };
    case "SET_LOGIN":
      return { ...state, loggedIn: action.payload };
    case "SET_TOKEN":
      return { ...state, token: action.payload };
    case "CLEAR_DATA":
      return initialState;
    default:
      return { ...state };
  }
};

export const UserState = (props) => {
  //Defining the global state and dispatching fucntion as the ruducer function
  const [state, dispatch] = useReducer(reducer, initialState);

  //   useEffect(() => {
  //     console.log(Cookies.get("token"));
  //     if (Cookies.get("token")) {
  //       console.log("token");
  //       dispatch({ type: "SET_TOKEN", payload: Cookies.get("token") });
  //     }
  //   }, []);

  return (
    <userContext.Provider value={{ state, dispatch }}>
      {props.children}
    </userContext.Provider>
  );
};

const useUser = () => {
  return useContext(userContext);
};
export { useUser };
