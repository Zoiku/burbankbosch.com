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

      <section className="meetTheTeamContainer">
        <div className="meetTheTeam">
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
              <div data-aos-duration="1000" data-aos="zoom-in"></div>
              <div data-aos-duration="1000" data-aos="zoom-in"></div>
              <div data-aos-duration="1000" data-aos="zoom-in"></div>
              <div data-aos-duration="1000" data-aos="zoom-in"></div>
              <div data-aos-duration="1000" data-aos="zoom-in"></div>
              <div data-aos-duration="1000" data-aos="zoom-in"></div>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
