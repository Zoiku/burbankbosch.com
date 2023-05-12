import "../styles/Footer.scss";
// import logo from "../assets/logo-big.png";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="footer">
        <div className="logoContainer">
          {/* <img className="logo" src={logo} alt="logo" /> */}
        </div>
      </div>
      <div className="copyRightContainer">
        <div className="copyRight">@ Copyright {new Date().getFullYear()}. All rights reserved | Developed by Mark Zoiku</div>
      </div>
    </div>
  );
};

export default Footer;
