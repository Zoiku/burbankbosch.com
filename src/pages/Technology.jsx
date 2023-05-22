import "../styles/Technology.scss";
import MUIBreadCrumb from "../components/BreadCrumb";
import technologyImg from "../assets/Technology/Environment-bro.svg";

const Technology = () => {
  const links = [
    { name: "home", url: "/" },
    { name: "our technology", url: "/technology" },
  ];

  return (
    <div className="Technology">
      <section className="PageInformationContainer">
        <div className="overlayContainer">
          <div className="overlay">
            <div
              data-aos-duration="1000"
              data-aos="fade-right"
              className="title"
            >
              Our Technology
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
          <div className="TechnologyContentContainer">
            <div className="TechnologyContent">
              <div className="firstImageGridContainer">
                <div
                  data-aos-duration="1000"
                  data-aos="fade-up"
                  className="firstImageContainer"
                >
                  <img src={technologyImg} alt="" className="firstImage" />
                </div>
                <div className="imageOverlayTitle">GREEN HOUSE TECHNOLOGY</div>
              </div>

              <div className="overviewContentContainer">
                <div className="overviewContent">
                  <div className="titleContainer">
                    <div className="titleHelper">An Overview</div>
                    <div className="title">Our Edge Cutting Technology</div>
                  </div>

                  <div className="overviewBodyContainer">
                    <div className="overviewBody">
                      Lorem ipsum dolor sit amet consectetur adipisicing elit.
                      Cum, beatae quae excepturi error nesciunt magnam totam
                      nostrum nam officiis nemo dolore tenetur dignissimos
                      labore quam vitae ipsam, eius officia quo nobis
                      consequatur possimus laboriosam quaerat. Nihil eaque,
                      totam doloremque soluta dolore consectetur velit et,
                      repellat facere adipisci modi quidem fugiat sed deserunt
                      nostrum explicabo blanditiis ut ipsa dolorum nobis non
                      autem ducimus doloribus quos. Iusto, exercitationem
                      consectetur. Aspernatur, exercitationem quam.
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Technology;
