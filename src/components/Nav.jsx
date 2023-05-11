import "../styles/Nav.scss";
import "../styles/Hamburger.scss";
import { useState } from "react";
import { bubble as Menu } from "react-burger-menu";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";

const Nav = () => {
  const [openMenu, setOpenMenu] = useState(false);
  const toggleMenu = (open) => (event) => {
    setOpenMenu(open);
  };

  return (
    <div className="Nav">
      <div className="NavLogoContainer">
        <img className="NavLogo" src={logo} alt="" />
      </div>

      <div className="NavListContainer">
        <ul className="NavList">
          <li>
            <NavLink className="NavLink" to="/">
              home
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLink" to="/about">
              about us
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLink" to="/news">
              our technology
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLink" to="/faq">
              sdg's
            </NavLink>
          </li>
          <li>
            <NavLink className="NavLink" to="/team">
              our team
            </NavLink>
          </li>
        </ul>
      </div>

      <div className="NavHamburgerContainer">
        <Menu
          width={"100%"}
          onOpen={toggleMenu(true)}
          onClose={toggleMenu(false)}
          isOpen={openMenu}
        >
          <div className="openMenuContainer">
            <div className="openMenu">
              <div className="logoContainer">
                <div className="logo">
                  <img src={logo} alt="" />
                </div>
              </div>
              <div className="contentContainer">
                <div className="content">
                  <ul>
                    <li>
                      <NavLink className="NavLink" to="/">
                        home
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="NavLink" to="/about">
                        about us
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="NavLink" to="/news">
                        our technology
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="NavLink" to="/faq">
                        sdg's
                      </NavLink>
                    </li>
                    <li>
                      <NavLink className="NavLink" to="/team">
                        our team
                      </NavLink>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </Menu>
      </div>
    </div>
  );
};

export default Nav;
