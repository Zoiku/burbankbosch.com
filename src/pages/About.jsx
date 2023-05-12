import "../styles/About.scss";
import MUIBreadCrumb from "../components/BreadCrumb";

const About = () => {
  const links = [
    { name: "home", url: "/" },
    { name: "about us", url: "/about" },
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

      <section className="MainPageSectionCenteredContentContainer">
        <div className="MainPageSectionCenteredContent"></div>
      </section>
    </div>
  );
};

export default About;
