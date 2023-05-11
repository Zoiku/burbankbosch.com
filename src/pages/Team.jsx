import MUIBreadCrumb from "../components/BreadCrumb";
import "../styles/Team.scss";

const Team = () => {
  const links = [
    { name: "home", url: "/" },
    { name: "our team", url: "/team" },
  ];

  return (
    <div className="Team">
      <section className="PageInformationContainer">
        <div className="overlayContainer">
          <div className="overlay">
            <div
              data-aos-duration="1000"
              data-aos="fade-right"
              className="title"
            >
              Our Team
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
          <div className="titleContainer">
            <div className="title">
              Meet our team of <span className="key">creators</span>,{" "}
              <span className="key">designers</span>, and world class{" "}
              <span className="key">problem solvers</span>.
            </div>
            <div className="titleHelper">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, maxime culpa. Ipsum totam soluta minus tenetur expedita
              omnis illo deserunt eaque.
            </div>
          </div>
          <div className="membersGridContainer">
            <div className="membersGrid">
              <div
                className="members"
                data-aos-duration="1000"
                data-aos="fade-up"
              >
                <div className="imageContainer">
                  <div className="image"></div>
                </div>
                <div className="nameTitleContainer">
                  <div className="name">Mark Zoiku</div>
                  <div className="title">Designer</div>
                </div>
              </div>
              <div
                className="members"
                data-aos-duration="1500"
                data-aos="fade-up"
              >
                <div className="imageContainer">
                  <div className="image"></div>
                </div>
                <div className="nameTitleContainer">
                  <div className="name">Mark Zoiku</div>
                  <div className="title">Designer</div>
                </div>
              </div>
              <div
                className="members"
                data-aos-duration="2000"
                data-aos="fade-up"
              >
                <div className="imageContainer">
                  <div className="image"></div>
                </div>
                <div className="nameTitleContainer">
                  <div className="name">Mark Zoiku</div>
                  <div className="title">Designer</div>
                </div>
              </div>
              <div
                className="members"
                data-aos-duration="1000"
                data-aos="fade-up"
              >
                <div className="imageContainer">
                  <div className="image"></div>
                </div>
                <div className="nameTitleContainer">
                  <div className="name">Mark Zoiku</div>
                  <div className="title">Designer</div>
                </div>
              </div>
              <div
                className="members"
                data-aos-duration="1500"
                data-aos="fade-up"
              >
                <div className="imageContainer">
                  <div className="image"></div>
                </div>
                <div className="nameTitleContainer">
                  <div className="name">Mark Zoiku</div>
                  <div className="title">Designer</div>
                </div>
              </div>
              <div
                className="members"
                data-aos-duration="2000"
                data-aos="fade-up"
              >
                <div className="imageContainer">
                  <div className="image"></div>
                </div>
                <div className="nameTitleContainer">
                  <div className="name">Mark Zoiku</div>
                  <div className="title">Designer</div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
