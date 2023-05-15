import "../styles/Footer.scss";
import logo from "../assets/logo-big.png";
import whatsAppIcon from "../assets/icons8-whatsapp.svg";
import instagramAppIcon from "../assets/icons8-instagram.svg";
import linkedInIcon from "../assets/icons8-linkedin.svg";

const Footer = () => {
  return (
    <div className="FooterContainer">
      <div className="footer">
        <div className="footer-columns">
          <div className="logoContainer">
            <img className="logoImg" src={logo} alt="" />
          </div>
          <div className="logoTitleContainer">
            <div className="logoTitle">Burbank Bosch</div>
          </div>
          <div className="logoDescriptionContainer">
            <div className="logoDescription">
              Burbank bosch has an ongoing employee training program that
              includes a regular schedule of seminars and information
              updates.great explorer of the truth, the master-builder.
            </div>
          </div>
          <div className="socialMediaIconsContainer">
            <div className="socialMediaIcons">
              <img src={whatsAppIcon} alt="" className="socialMediaIconsImg" />
              <img
                src={instagramAppIcon}
                alt=""
                className="socialMediaIconsImg"
              />
              <img src={linkedInIcon} alt="" className="socialMediaIconsImg" />
            </div>
          </div>
        </div>
        <div className="footer-columns">
          <div className="footerColumnHeadingContainer">
            <div className="footerColumnHeading">Company</div>
          </div>
          <ul className="footerColumnLinksContainer">
            <li className="footerColumnLinks">Home</li>
            <li className="footerColumnLinks">About us</li>
            <li className="footerColumnLinks">Our Technologies</li>
            <li className="footerColumnLinks">Our SDG's</li>
            <li className="footerColumnLinks">Our Team</li>
          </ul>
        </div>
        <div className="footer-columns">
          <div className="footerColumnHeadingContainer">
            <div className="footerColumnHeading">Products</div>
          </div>
          <ul className="footerColumnLinksContainer">
            <li className="footerColumnLinks">Coming Soon</li>
          </ul>
        </div>
        <div className="footer-columns">
          <div className="footerColumnHeadingContainer">
            <div className="footerColumnHeading">Contact Us</div>
          </div>
          <ul className="footerColumnLinksContainer">
            <li className="footerColumnLinks">Address 1</li>
            <li className="footerColumnLinks">City/Town 1</li>
            <li className="footerColumnLinks">233-000-000</li>
          </ul>
          <ul className="footerColumnLinksContainer">
            <li className="footerColumnLinks">Address 2</li>
            <li className="footerColumnLinks">City/Town 2</li>
            <li className="footerColumnLinks">233-000-000</li>
          </ul>
          <ul className="footerColumnLinksContainer">
            <li className="footerColumnLinks">primaryemail@email.com</li>
            <li className="footerColumnLinks">supportemail@email.com</li>
          </ul>
        </div>
      </div>
      <div className="copyRightContainer">
        <div className="copyRight">
          @ Copyright {new Date().getFullYear()}. All rights reserved |
          Developed by Mark Zoiku
        </div>
      </div>
    </div>
  );
};

export default Footer;
