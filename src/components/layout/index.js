import Navbar from "../navbar";

import { useLocation } from "react-router";



export function Layout({ children }) {
  const location = useLocation();
  const IsMainPage = location.pathname=='/';

  return (
    <>
      {!IsMainPage && <Navbar />}

      <main >{children}</main>
    </>
  );
}
