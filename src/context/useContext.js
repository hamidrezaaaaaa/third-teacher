import React, { useReducer, useContext, useEffect } from "react";
// import Cookies from "js-cookie";

const initialState = {
  email: "",
  password: "",
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
