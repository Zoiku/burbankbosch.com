import "../styles/SDGs.scss";
import svgArt from "../assets/Apollonius_problem_typical_solution.svg.png";
import MUIBreadCrumb from "../components/BreadCrumb";
import MUIAccordion from "../components/MUIAccordion";

const SDGs = () => {
  const links = [
    { name: "home", url: "/" },
    { name: "sdgs", url: "/sdg" },
  ];

  return (
    <div className="SDGs">
      <section className="PageInformationContainer">
        <div className="overlayContainer">
          <div className="overlay">
            <div
              data-aos-duration="1000"
              data-aos="fade-right"
              className="title"
            >
              SDGs
            </div>
            <div className="breadCrumb-container">
              <div className="breadCrumb">
                <MUIBreadCrumb links={links} />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="sdgPageFullWidthSectionsCenteredContainer">
        <div className="svgArtContainer">
          <img src={svgArt} alt="" className="svgArt" />
        </div>
        <div className="sdgPageFullWidthSectionsCentered">
          <div className="fullWidthTitleContainer">
            <div className="fullWidthTitleHelper">Our SDGs</div>
            <div className="fullWidthTitle">What We Stand For</div>
          </div>

          <div className="sdgContentContainer">
            <MUIAccordion />
          </div>
        </div>
      </section>
    </div>
  );
};

export default SDGs;
