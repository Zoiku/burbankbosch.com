import "../styles/Layout.scss";
import Nav from "../components/Nav";
import Contact from "../components/Contact";
import Footer from "../components/Footer";
import { Outlet } from "react-router-dom";

const Layout = () => {
  return (
    <div className="Layout">
      <Nav />
      <div className="MainPageContainer">
        <Outlet />
        <Contact />
      </div>
      <Footer />
    </div>
  );
};

export default Layout;
