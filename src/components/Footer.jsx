import "../styles/Footer.scss";
import logo from "../assets/logo-big.png";

const Footer = () => {
  return (
    <footer className="FooterContainer">
      <div className="footer">
        <div className="logoContainer">
          <img className="logo" src={logo} alt="logo" />
        </div>
      </div>
    </footer>
  );
};

export default Footer;
