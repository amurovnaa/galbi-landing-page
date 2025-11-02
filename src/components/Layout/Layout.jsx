import { Outlet } from "react-router";
import AppBar from "../AppBar/AppBar.jsx";
import Footer from "../Footer/Footer.jsx";

const Layout = () => {
  return (
    <>
      <AppBar />
      <Outlet />
      <Footer />
    </>
  );
};

export default Layout;
