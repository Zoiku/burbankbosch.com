import MUIBreadCrumb from "../components/BreadCrumb";
import profileImg1 from "../assets/msg358981222-121868-removebg-preview.png";
import "../styles/Team.scss";
// import svgArt from "../assets/Apollonius_problem_typical_solution.svg.png";
// import svgArt from "../assets/concentric-circles.svg.hi.png";
import svgArt from "../assets/20537.png";
import whatsAppIcon from "../assets/icons8-whatsapp.svg";
import instagramIcon from "../assets/icons8-instagram.svg";
import linkedInIcon from "../assets/icons8-linkedin.svg";

const Team = () => {
  const links = [
    { name: "home", url: "/" },
    { name: "our team", url: "/team" },
  ];

  const socialMediaTypes = {
    INSTAGRAM: "INSTAGRAM",
    WHATSAPP: "WHATSAPP",
    LINKEDIN: "LINKEDIN",
  };

  const openSocial = (socialMediaType, attachment) => () => {
    switch (socialMediaType) {
      case socialMediaTypes.INSTAGRAM:
        window.open("https://www.instagram.com/explore/", "_blank");
        break;
      case socialMediaTypes.WHATSAPP:
        window.open(`https://wa.me/${attachment}?text=Hello there!`, "_blank");
        break;
      case socialMediaTypes.LINKEDIN:
        window.open("https://www.linkedin.com/", "_blank");
        break;

      default:
        break;
    }
  };

  const members = [
    {
      name: "Mark Zoiku",
      title: "Designer",
      fadeUpTime: 500,
      profilePicture: profileImg1,
      socials: [
        {
          src: whatsAppIcon,
          handleClick: openSocial(socialMediaTypes.WHATSAPP, ""),
        },
        {
          src: instagramIcon,
          handleClick: openSocial(socialMediaTypes.INSTAGRAM, ""),
        },
        {
          src: linkedInIcon,
          handleClick: openSocial(socialMediaTypes.LINKEDIN, ""),
        },
      ],
    },
    {
      name: "Mark Zoiku",
      title: "Designer",
      fadeUpTime: 600,
      profilePicture: profileImg1,
      socials: [
        {
          src: whatsAppIcon,
          handleClick: openSocial(socialMediaTypes.WHATSAPP, ""),
        },
        {
          src: instagramIcon,
          handleClick: openSocial(socialMediaTypes.INSTAGRAM, ""),
        },
        {
          src: linkedInIcon,
          handleClick: openSocial(socialMediaTypes.LINKEDIN, ""),
        },
      ],
    },
    {
      name: "Mark Zoiku",
      title: "Designer",
      fadeUpTime: 700,
      profilePicture: profileImg1,
      socials: [
        {
          src: whatsAppIcon,
          handleClick: openSocial(socialMediaTypes.WHATSAPP, ""),
        },
        {
          src: instagramIcon,
          handleClick: openSocial(socialMediaTypes.INSTAGRAM, ""),
        },
        {
          src: linkedInIcon,
          handleClick: openSocial(socialMediaTypes.LINKEDIN, ""),
        },
      ],
    },
    {
      name: "Mark Zoiku",
      title: "Designer",
      fadeUpTime: 800,
      profilePicture: profileImg1,
      socials: [
        {
          src: whatsAppIcon,
          handleClick: openSocial(socialMediaTypes.WHATSAPP, ""),
        },
        {
          src: instagramIcon,
          handleClick: openSocial(socialMediaTypes.INSTAGRAM, ""),
        },
        {
          src: linkedInIcon,
          handleClick: openSocial(socialMediaTypes.LINKEDIN, ""),
        },
      ],
    },
    {
      name: "Mark Zoiku",
      title: "Designer",
      fadeUpTime: 1000,
      profilePicture: profileImg1,
      socials: [
        {
          src: whatsAppIcon,
          handleClick: openSocial(socialMediaTypes.WHATSAPP, ""),
        },
        {
          src: instagramIcon,
          handleClick: openSocial(socialMediaTypes.INSTAGRAM, ""),
        },
        {
          src: linkedInIcon,
          handleClick: openSocial(socialMediaTypes.LINKEDIN, ""),
        },
      ],
    },
    {
      name: "Mark Zoiku",
      title: "Designer",
      fadeUpTime: 1100,
      profilePicture: profileImg1,
      socials: [
        {
          src: whatsAppIcon,
          handleClick: openSocial(socialMediaTypes.WHATSAPP, ""),
        },
        {
          src: instagramIcon,
          handleClick: openSocial(socialMediaTypes.INSTAGRAM, ""),
        },
        {
          src: linkedInIcon,
          handleClick: openSocial(socialMediaTypes.LINKEDIN, ""),
        },
      ],
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
                    <div className="memberCardOverlayContainer">
                      <div className="memberCardOverlayContentContainer">
                        <div className="memberCardOverlayContent">
                          <div className="innerProfileImgContainer">
                            <img
                              className="innerProfileImg"
                              src={member.profilePicture}
                              alt=""
                            />
                          </div>
                          <div className="innerProfileTitleContainer">
                            {member.title}
                          </div>
                          <div className="innerProfileNameContainer">
                            {member.name}
                          </div>
                          <div className="innerProfileSocialsContainer">
                            {member.socials.map((social, index) => (
                              <img
                                key={index}
                                className="innerProfileSocials"
                                src={social.src}
                                onClick={social.handleClick}
                                alt=""
                              />
                            ))}
                          </div>
                        </div>
                      </div>
                    </div>
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
