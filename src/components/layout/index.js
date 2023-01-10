import Navbar from "../navbar";

import { useLocation } from "react-router";

export function Layout({ children }) {
  const location = useLocation();
  const IsMainPage = location.pathname == "/";
  const IsAdminDashboard = location.pathname.includes("/admin");

  return (
    <>
      {!IsMainPage && !IsAdminDashboard ? <Navbar /> : ""}

      <main>{children}</main>
    </>
  );
}
