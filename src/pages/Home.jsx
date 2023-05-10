import "../styles/Home.scss";
import bg01 from "../assets/Fresh Folk - Outdoor 1.svg";
import bg02 from "../assets/Amigos - Tree.svg";
import { useState } from "react";

const Home = () => {
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
        data-aos-duration="2000"
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
          data-aos-duration="2000"
          data-aos="fade-right"
          className="sectionBackgroundContainer"
        >
          <img className="sectionBackground" src={bg02} alt="" />
        </div>
        <div
          data-aos-duration="2000"
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
            <div
              data-aos-duration="500"
              data-aos="fade-up"
              className="wwdCards"
            ></div>
            <div
              data-aos-duration="1000"
              data-aos="fade-up"
              className="wwdCards"
            ></div>
            <div
              data-aos-duration="1500"
              data-aos="fade-up"
              className="wwdCards"
            ></div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Home;
