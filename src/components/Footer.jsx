import "../styles/Footer.scss";
import logo from "../assets/logo-big.png";
import whatsAppIcon from "../assets/icons8-whatsapp-100.png";
import instagramIcon from "../assets/icons8-instagram-100.png";
import linkedInIcon from "../assets/icons8-linkedin-100.png";
import mailIcon from "../assets/icons8-mail-100.png";
import { useNavigate } from "react-router-dom";

const Footer = () => {
  const navigate = useNavigate();

  const handleRedirect = (redirect) => () => {
    navigate(redirect, { replace: true });
  };

  const socialMediaTypes = {
    INSTAGRAM: "INSTAGRAM",
    WHATSAPP: "WHATSAPP",
    LINKEDIN: "LINKEDIN",
    MAIL: "MAIL",
    CALL: "CALL",
  };

  const openSocial = (socialMediaType, attachment) => () => {
    switch (socialMediaType) {
      case socialMediaTypes.MAIL:
        window.open(`mailto://${attachment}`, "_blank");
        break;
      case socialMediaTypes.INSTAGRAM:
        window.open("https://www.instagram.com/explore/", "_blank");
        break;
      case socialMediaTypes.WHATSAPP:
        window.open(`https://wa.me/${attachment}?text=Hello there!`, "_blank");
        break;
      case socialMediaTypes.LINKEDIN:
        window.open("https://www.linkedin.com/", "_blank");
        break;
      case socialMediaTypes.CALL:
        window.open(`tel:${attachment}`, "_blank");
        break;

      default:
        break;
    }
  };

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
              Burbank Bosch has an ongoing employee training program that
              includes a regular schedule of seminars and information
              updates.great explorer of the truth, the master-builder.
            </div>
          </div>
          <div className="socialMediaIconsContainer">
            <div className="socialMediaIcons">
              <img
                onClick={openSocial(socialMediaTypes.WHATSAPP, "233555777803")}
                src={whatsAppIcon}
                alt=""
                className="socialMediaIconsImg"
              />
              <img
                onClick={openSocial(
                  socialMediaTypes.MAIL,
                  "hello@burbankbosch.com"
                )}
                src={mailIcon}
                alt=""
                className="socialMediaIconsImg"
              />
              <img
                onClick={openSocial(socialMediaTypes.INSTAGRAM)}
                src={instagramIcon}
                alt=""
                className="socialMediaIconsImg"
              />
              <img
                onClick={openSocial(socialMediaTypes.LINKEDIN)}
                src={linkedInIcon}
                alt=""
                className="socialMediaIconsImg"
              />
            </div>
          </div>
        </div>
        <div className="footer-columns">
          <div className="footerColumnHeadingContainer">
            <div className="footerColumnHeading">Company</div>
          </div>
          <ul className="footerColumnLinksContainer">
            <li onClick={handleRedirect("/")} className="footerColumnLinks">
              Home
            </li>
            <li
              onClick={handleRedirect("/about")}
              className="footerColumnLinks"
            >
              About us
            </li>
            <li
              onClick={handleRedirect("/technology")}
              className="footerColumnLinks"
            >
              Our Technologies
            </li>
            <li onClick={handleRedirect("/sdg")} className="footerColumnLinks">
              SDGs
            </li>
            <li onClick={handleRedirect("/team")} className="footerColumnLinks">
              Our Team
            </li>
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
            <li className="footerColumnLinks">A1 Rangoon Lane, Cantonments</li>
            <li
              onClick={openSocial(socialMediaTypes.CALL, "233209384829")}
              className="footerColumnLinks"
            >
              233-209-384-829
            </li>
          </ul>
          <ul className="footerColumnLinksContainer">
            <li className="footerColumnLinks">Address 2</li>
            <li className="footerColumnLinks">A1 Rangoon Lane, Cantonments</li>
            <li
              onClick={openSocial(socialMediaTypes.CALL, "233209384829")}
              className="footerColumnLinks"
            >
              233-209-384-829
            </li>
          </ul>
          <ul className="footerColumnLinksContainer">
            <li
              onClick={openSocial(
                socialMediaTypes.MAIL,
                "primaryemail@email.com"
              )}
              className="footerColumnLinks"
            >
              primaryemail@email.com
            </li>
            <li
              onClick={openSocial(
                socialMediaTypes.MAIL,
                "supportemail@email.com"
              )}
              className="footerColumnLinks"
            >
              supportemail@email.com
            </li>
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
