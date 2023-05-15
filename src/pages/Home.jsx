import "../styles/Home.scss";
import { NavLink } from "react-router-dom";
import { LocalFlorist, Forest, Agriculture } from "@mui/icons-material/";
import bg01 from "../assets/Fresh Folk - Outdoor 1.svg";
import bg02 from "../assets/Amigos - Tree.svg";
import imgSource1 from "../assets/crystal-jo-PKcTuA_CRAo-unsplash.jpg";
import imgSource2 from "../assets/pexels-karolina-grabowska-4750272.jpg";
import imgSource3 from "../assets/zoe-schaeffer-hmoDcZnB7uw-unsplash.jpg";

const Home = () => {
  const services = [
    {
      imgSrc: imgSource1,
      readContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex necessitatibus maxime ut dolor exercitationem corrupti non culpa blanditiis repudiandae!",
      title: "Maintenance",
      readMoreUrl: "/readmore",
      fadeUpTime: 500,
      icon: <Agriculture />,
    },
    {
      imgSrc: imgSource2,
      readContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex necessitatibus maxime ut dolor exercitationem corrupti non culpa blanditiis repudiandae!",
      title: "Landscape",
      readMoreUrl: "/readmore",
      fadeUpTime: 1000,
      icon: <Forest />,
    },
    {
      imgSrc: imgSource3,
      readContent:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. At ex necessitatibus maxime ut dolor exercitationem corrupti non culpa blanditiis repudiandae!",
      title: "Gardening",
      readMoreUrl: "/readmore",
      fadeUpTime: 1500,
      icon: <LocalFlorist />,
    },
  ];

  return (
    <div className="Home">
      <section className="HomeLandingPageBg">
        <div className="overlayContainer">
          <div className="overlayContent">
            <div className="title">Plant a garden today</div>
            <div data-aos-duration="1000" data-aos="fade-up" className="body">
              We work to meet this ambitious goal by focusing on these key areas
              of conservation.
            </div>
          </div>
        </div>
      </section>

      <section
        data-aos-duration="1000"
        data-aos="zoom-in"
        className="HomeSections"
      >
        <div className="sectionBackgroundContainer">
          <img className="sectionBackground" src={bg01} alt="" />
        </div>
        <div className="sectionContentContainer">
          <div className="sectionContent">
            <div className="title">the problem</div>
            <div className="body">
              100,000 tons of tomatoes are imported into Ghana annually due to
              the inability of local production to meet demand. More than half
              of local production is lost to inefficiencies in the supply chain,
              poor cultivation and post-harvest handling. Over $100 million is
              value is lost annually.
            </div>
          </div>
        </div>
      </section>

      <section className="HomeSections">
        <div
          data-aos-duration="1000"
          data-aos="fade-right"
          className="sectionBackgroundContainer"
        >
          <img className="sectionBackground" src={bg02} alt="" />
        </div>
        <div
          data-aos-duration="1000"
          data-aos="fade-left"
          className="sectionContentContainer"
        >
          <div className="sectionContent">
            <div className="title">our solution</div>
            <div className="body">
              100,000 tons of tomatoes are imported into Ghana annually due to
              the inability of local production to meet demand. More than half
              of local production is lost to inefficiencies in the supply chain,
              poor cultivation and post-harvest handling. Over $100 million is
              value is lost annually.
            </div>
          </div>
        </div>
      </section>

      <section className="HomeSectionsCenteredContainer">
        <div className="HomeSectionsCentered">
          <div className="titleContainer">
            <div className="titleHeading">Our Services</div>
            <div className="title">What we do</div>
          </div>
          <div className="wwdCardsContainer">
            {services.map((service, index) => (
              <div
                key={index}
                data-aos-duration={service.fadeUpTime}
                data-aos="fade-up"
                className="wwdCards"
              >
                <div className="imageContainer">
                  <div className="iconContainer">{service?.icon}</div>
                  <img src={service.imgSrc} alt="" className="image" />
                </div>
                <div className="contentContainer">
                  <div className="contentTitleContainer">
                    <div className="contentTitle">{service.title}</div>
                  </div>
                  <div className="contentRead">{service.readContent}</div>
                  <div className="readMoreLinkContainer">
                    <NavLink className="readMoreLink" to={service.readMoreUrl}>
                      Read more
                    </NavLink>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
