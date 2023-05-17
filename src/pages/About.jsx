import "../styles/About.scss";
// import { useState } from "react";
// import { ToggleButton } from "@mui/material";
// import ToggleButtonGroup from "@mui/material/ToggleButtonGroup";
import MUIBreadCrumb from "../components/BreadCrumb";
import imageSrc from "../assets/Dayflow - Message.svg";
import profilePictureSrc from "../assets/msg358981222-121867-removebg-preview.png";
import Marquee from "react-fast-marquee";
import logoSrc1 from "../assets/client-logo-hme-1-1 (2).png";
import logoSrc2 from "../assets/client-logo-hme-1-2 (1).png";
import logoSrc3 from "../assets/client-logo-hme-1-3 (1).png";
import logoSrc4 from "../assets/client-logo-hme-1-4 (1).png";

const About = () => {
  // const [alignment, setAlignment] = useState("mission");
  // const handleChangeAlignment = (event, newAlignment) => {
  //   if (newAlignment !== null) {
  //     setAlignment(newAlignment);
  //   }
  // };

  // const ColorToggleButton = () => {
  //   return (
  //     <ToggleButtonGroup
  //       color="success"
  //       value={alignment}
  //       exclusive
  //       onChange={handleChangeAlignment}
  //       aria-label="Platform"
  //     >
  //       <ToggleButton value="mission">Mission</ToggleButton>
  //       <ToggleButton value="vision">Vision</ToggleButton>
  //       <ToggleButton value="values">Values</ToggleButton>
  //     </ToggleButtonGroup>
  //   );
  // };

  const links = [
    { name: "home", url: "/" },
    { name: "about us", url: "/about" },
  ];

  const partners = [
    { logoSrc: logoSrc1 },
    { logoSrc: logoSrc2 },
    { logoSrc: logoSrc3 },
    { logoSrc: logoSrc4 },
    { logoSrc: logoSrc1 },
    { logoSrc: logoSrc2 },
    { logoSrc: logoSrc3 },
    { logoSrc: logoSrc4 },
  ];

  const reasonsToChooseBurbank = [
    {
      title: "Fully Insured",
      content:
        "Sequi enim libero, ad reiciendis rerum alias consequuntur dolore? Fuga nulla recusandae facere eaque.",
      icon: "location_automation",
      fadeUpTime: 500,
    },
    {
      title: "Superior Products",
      content:
        "Sequi enim libero, ad reiciendis rerum alias consequuntur dolore? Fuga nulla recusandae facere eaque.",
      icon: "potted_plant",
      fadeUpTime: 600,
    },
    {
      title: "No Contracts",
      content:
        "Sequi enim libero, ad reiciendis rerum alias consequuntur dolore? Fuga nulla recusandae facere eaque.",
      icon: "receipt_long",
      fadeUpTime: 700,
    },
    {
      title: "Competitive Pricing",
      content:
        "Sequi enim libero, ad reiciendis rerum alias consequuntur dolore? Fuga nulla recusandae facere eaque.",
      icon: "insights",
      fadeUpTime: 800,
    },
  ];

  return (
    <div className="About">
      <section className="PageInformationContainer">
        <div className="overlayContainer">
          <div className="overlay">
            <div
              data-aos-duration="1000"
              data-aos="fade-right"
              className="title"
            >
              About Us
            </div>
            <div className="breadCrumb-container">
              <div className="breadCrumb">
                <MUIBreadCrumb links={links} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <div className="MainPageSectionCenteredContentContainer">
        <div className="MainPageSectionCenteredContent">
          <div className="aboutUsPageContentContainer">
            <div className="aboutUsPageContent">
              <section className="pageHeaderSectionContainer">
                <div className="leftContainer">
                  <div className="left">
                    <div
                      data-aos-duration="1000"
                      data-aos="fade-up"
                      className="imageContainer"
                    >
                      <img className="image" src={imageSrc} alt="" />
                    </div>
                  </div>
                </div>
                <div className="rightContainer">
                  <div className="right">
                    <div
                      data-aos-duration="1000"
                      data-aos="fade-up"
                      className="contentContainer"
                    >
                      <div className="content">
                        <div className="titleContainer">
                          <div className="titleHelper">Learn More</div>
                          <div className="title">About Us</div>
                        </div>

                        <div className="contentTextContainer">
                          <div className="contentText">
                            Burbank Bosch is a tech-enabled agribusiness
                            guaranteeing fresh food for communities. By
                            leveraging greenhouse technology, scientific farming
                            practices and blockchain technology, we grow fresh
                            healthy food in controlled environments and ensure
                            traceability. We are committed to responsible land
                            use and conserving water resources.
                          </div>
                        </div>
                        <div className="contentAuthorContainer">
                          <div className="contentAuthor">
                            <div className="profilePictureContainer">
                              <img
                                className="profilePicture"
                                src={profilePictureSrc}
                                alt=""
                              />
                            </div>
                            <div className="recommendationContainer">
                              <div className="recommendationExtra">
                                “Award winning landscape design & gardening
                                business operating for 24 years.”
                              </div>
                              <div className="recommendationTitle">
                                Joseph Mireku Nti , Team Leader of Burbank Bosch
                              </div>
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="aboutPageFullWidthSectionsCenteredContainer">
                <div className="aboutPageFullWidthSectionsCentered">
                  <div className="fullWidthTitleContainer">
                    <div className="fullWidthTitleHelper">Why You Should</div>
                    <div className="fullWidthTitle">Choose BurbankBosch</div>
                  </div>
                  <div className="reasonsToChooseContainer">
                    {reasonsToChooseBurbank.map((reason, index) => (
                      <div
                        data-aos-duration={reason.fadeUpTime}
                        data-aos="fade-up"
                        key={index}
                        className="reasonToChooseCards"
                      >
                        <div className="reasonToChoose">
                          <div className="reasonToChooseIcon">
                            <span className="material-symbols-rounded">
                              {reason.icon}
                            </span>
                          </div>
                          <div className="reasonToChooseTitle">
                            {reason.title}
                          </div>
                          <div className="reasonToChooseContent">
                            {reason.content}
                          </div>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </section>

              {/* <section className="aboutPageFullWidthSectionsCenteredContainer">
                <div className="aboutPageFullWidthSectionsCentered">
                  <div className="fullWidthTitleContainer">
                    <div className="fullWidthTitle">What We Stand For</div>
                    <div className="wwsfContainer">
                      <div className="toggleButtonsContainer">
                        <ColorToggleButton />
                      </div>
                      <div className="toggledContentContainer">
                        {alignment === "mission" && (
                          <div>
                            Obligations of business will frequently occur sed
                            that pleasures have repudiateds our annoyances
                            matters to this principle to take a undertakes
                            laborious physical exercise.
                          </div>
                        )}
                        {alignment === "vision" && (
                          <div>
                            Obligations of business will frequently occur sed
                            that pleasures have repudiateds our annoyances
                            matters to this principle to take a undertakes
                            laborious physical exercise.
                          </div>
                        )}
                        {alignment === "values" && (
                          <div>
                            Obligations of business will frequently occur sed
                            that pleasures have repudiateds our annoyances
                            matters to this principle to take a undertakes
                            laborious physical exercise.
                          </div>
                        )}
                      </div>
                    </div>
                  </div>
                </div>
              </section> */}

              <section className="aboutPageFullWidthSectionsCenteredContainer marqueeContainerContainer">
                <div className="aboutPageFullWidthSectionsCentered">
                  <div className="aboutPageFullWidthOverlayContainer">
                    <div className="aboutPageFullWidthOverlay">
                      <div className="aboutPageOverlayTitleContainer">
                        {/* <div className="aboutPageOverlayTitle">
                          Our Partners
                        </div> */}
                      </div>
                      <div className="MarqueeContainer">
                        <Marquee
                          gradient={false}
                          pauseOnClick={true}
                          speed={100}
                        >
                          {partners.map((partner, index) => (
                            <img
                              key={index}
                              className="marqueeImage"
                              src={partner.logoSrc}
                              alt=""
                            />
                          ))}
                        </Marquee>
                      </div>
                    </div>
                  </div>
                </div>
              </section>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
