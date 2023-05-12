import MUIBreadCrumb from "../components/BreadCrumb";
import profileImg from "../assets/user-svgrepo-com.svg";
import "../styles/Team.scss";
import svgArt from "../assets/scale-svgrepo-com.svg";

const Team = () => {
  const links = [
    { name: "home", url: "/" },
    { name: "our team", url: "/team" },
  ];

  const members = [
    {
      name: "Mark Zoiku",
      title: "Designer",
      fadeUpTime: 500,
      profilePicture: profileImg,
    },
    {
      name: "Mark Zoiku",
      title: "Designer",
      fadeUpTime: 1000,
      profilePicture: profileImg,
    },
    {
      name: "Mark Zoiku",
      title: "Designer",
      fadeUpTime: 1500,
      profilePicture: profileImg,
    },
    {
      name: "Mark Zoiku",
      title: "Designer",
      fadeUpTime: 500,
      profilePicture: profileImg,
    },
    {
      name: "Mark Zoiku",
      title: "Designer",
      fadeUpTime: 1000,
      profilePicture: profileImg,
    },
    {
      name: "Mark Zoiku",
      title: "Designer",
      fadeUpTime: 1500,
      profilePicture: profileImg,
    },
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
          <div className="PageSvgArtContainer">
            <img className="PageSvgArt" src={svgArt} alt="" />
          </div>

          <div className="titleContainer">
            <div className="title">
              Meet our team of <span className="key">garderners</span>,{" "}
              <span className="key">advocates</span>, and world class{" "}
              <span className="key">ecologists</span>.
            </div>
            <div className="titleHelper">
              Lorem ipsum dolor sit amet consectetur adipisicing elit.
              Inventore, maxime culpa. Ipsum totam soluta minus tenetur expedita
              omnis illo deserunt eaque.
            </div>
          </div>
          <div className="membersGridContainer">
            <div className="membersGrid">
              {members.map((member, index) => (
                <div
                  key={index}
                  className="members"
                  data-aos-duration={member.fadeUpTime}
                  data-aos="fade-up"
                >
                  <div className="imageContainer">
                    <img className="image" src={member.profilePicture} alt="" />
                  </div>
                  <div className="nameTitleContainer">
                    <div className="name">{member.name}</div>
                    <div className="title">{member.title}</div>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Team;
