import "../styles/About.scss";
import svgArt from "../assets/Apollonius_problem_typical_solution.svg.png";
import MUIBreadCrumb from "../components/BreadCrumb";
import imageSrc from "../assets/Company-pana.svg";
import profilePictureSrc from "../assets/msg358981222-121868-removebg-preview.png";
import insuranceImage from "../assets/Technology/Insurance-bro.svg";
import superiorproductImage from "../assets/Technology/Gardening-cuate.svg";
import noContractImage from "../assets/Technology/Agreement-bro.svg";
import competitivePricingImage from "../assets/Technology/Growth curve-cuate.svg";
import waterDrops from "../assets/Technology/Uploading-bro.svg";

const About = () => {
  const links = [
    { name: "home", url: "/" },
    { name: "about us", url: "/about" },
  ];

  const reasonsToChooseBurbank = [
    {
      title: "Fully Insured",
      content:
        "Sequi enim libero, ad reiciendis rerum alias consequuntur dolore? Fuga nulla recusandae facere eaque.",
      icon: insuranceImage,
      fadeUpTime: 600,
    },
    {
      title: "Superior Products",
      content:
        "Sequi enim libero, ad reiciendis rerum alias consequuntur dolore? Fuga nulla recusandae facere eaque.",
      icon: superiorproductImage,
      fadeUpTime: 700,
    },
    {
      title: "No Contracts",
      content:
        "Sequi enim libero, ad reiciendis rerum alias consequuntur dolore? Fuga nulla recusandae facere eaque.",
      icon: noContractImage,
      fadeUpTime: 800,
    },
    {
      title: "Competitive Pricing",
      content:
        "Sequi enim libero, ad reiciendis rerum alias consequuntur dolore? Fuga nulla recusandae facere eaque.",
      icon: competitivePricingImage,
      fadeUpTime: 900,
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

      <div className="MainPageSectionContentContainer">
        <div className="MainPageSectionContent">
          <div className="aboutUsPageContentContainer">
            <div className="aboutUsPageContent">
              <section className="pageHeaderSectionContainer">
                <div
                  data-aos-duration={1000}
                  data-aos="fade-down"
                  className="imageContainer"
                >
                  <img src={imageSrc} alt="" className="image" />
                </div>

                <div className="pageHeaderContentContainer">
                  <div className="pageHeaderContent">
                    <div className="pageHeaderTitleContainer">
                      <div className="titleHelper">Learn More</div>
                      <div className="title">About Us</div>
                    </div>
                    <div
                      data-aos-duration={800}
                      data-aos="fade-up"
                      className="pageHeaderBody"
                    >
                      Burbank Bosch is a tech-enabled agribusiness guaranteeing
                      fresh food for communities. By leveraging greenhouse
                      technology, scientific farming practices and blockchain
                      technology, we grow fresh healthy food in controlled
                      environments and ensure traceability. We are committed to
                      responsible land use and conserving water resources.
                    </div>

                    <div className="recommendationContentContainer">
                      <div className="recommendationContent">
                        <div
                          data-aos-duration={800}
                          data-aos="fade-up"
                          className="profilePictureContainer"
                        >
                          <img
                            src={profilePictureSrc}
                            alt=""
                            className="profilePicture"
                          />
                        </div>
                        <div
                          data-aos-duration={1000}
                          data-aos="fade-up"
                          className="recommendationBodyContainer"
                        >
                          <div className="recommendationBody">
                            <div className="quote">
                              "Award winning landscape design & gardening
                              business"
                            </div>
                            <div className="quoted">
                              Joseph Mireku Nti, Team Leader of Burbank Bosch
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </section>

              <section className="pageHeaderSectionContainer">
                <div className="pageHeaderContentContainer">
                  <div className="pageHeaderContent">
                    <div className="pageHeaderTitleContainer">
                      <div className="titleHelper">Introduction</div>
                      <div className="title">Our Name</div>
                    </div>
                    <div
                      data-aos-duration={800}
                      data-aos="fade-up"
                      className="pageHeaderBody"
                    >
                      Burbank Bosch takes its name from the revolutionary
                      scientists Luther Burbank and Carl Bosch, whose
                      contributions transformed the landscape of food
                      production. We pay homage to these pioneers as we continue
                      their legacy of leveraging science and innovation to
                      ensure accessible food for communities.
                    </div>
                  </div>
                </div>
              </section>

              <section className="pageHeaderSectionContainer">
                <div className="pageHeaderContentContainer">
                  <div className="pageHeaderContent">
                    <div className="pageHeaderTitleContainer">
                      <div className="titleHelper">Our Origin</div>
                      <div className="title">How We Started</div>
                    </div>
                    <div
                      data-aos-duration={800}
                      data-aos="fade-up"
                      className="pageHeaderBody"
                    >
                      Burbank Bosch is a tech-enabled agribusiness guaranteeing
                      fresh food for communities. By leveraging greenhouse
                      technology, scientific farming practices and blockchain
                      technology, we grow fresh healthy food in controlled
                      environments and ensure traceability. We are committed to
                      responsible land use and conserving water resources.
                      <br />
                      One day, their conversation turned to the topic of food
                      waste, particularly in vegetables like tomatoes.
                      Recognizing the urgency of the issue, the trio decided to
                      take action. Combining their diverse backgrounds and
                      expertise in technology, agriculture, and business, they
                      set out on a mission to find a solution.
                    </div>
                  </div>
                </div>
              </section>

              <section className="aboutPageFullWidthSectionsCenteredContainer">
                <div className="backgroundSvgArtContainer">
                  <img src={svgArt} alt="" className="backgroundSvgArt" />
                </div>

                <div className="aboutPageFullWidthSectionsCentered">
                  <div className="fullWidthTitleContainer">
                    <div className="fullWidthTitleHelper">Why Choose</div>
                    <div className="fullWidthTitle">Burbank Bosch</div>
                  </div>
                  <div className="reasonsToChooseContainer">
                    {reasonsToChooseBurbank.map((reason, index) => (
                      <div
                        data-aos-duration={reason.fadeUpTime}
                        data-aos="fade-up"
                        key={index}
                        className="reasonToChooseCards"
                      >
                        <div className="waterDropsArtContainer">
                          <img
                            src={waterDrops}
                            alt=""
                            className="waterDropArt"
                          />
                        </div>
                        <div className="reasonToChoose">
                          <div className="reasonToChooseIconContainer">
                            <img
                              src={reason.icon}
                              alt=""
                              className="reasonToChooseIcon"
                            />
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
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default About;
