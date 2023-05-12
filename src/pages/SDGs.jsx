import "../styles/SDGs.scss";
import MUIBreadCrumb from "../components/BreadCrumb";

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

      <section className="MainPageSectionContentContainer">
        <div className="MainPageSectionContent">
          <div className="AccordionContainer">
            <div className="Accordion"></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default SDGs;
