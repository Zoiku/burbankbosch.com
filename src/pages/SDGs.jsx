import "../styles/SDGs.scss";
import svgArt from "../assets/Apollonius_problem_typical_solution.svg.png";
import MUIBreadCrumb from "../components/BreadCrumb";
import sdg1 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-01.png";
import sdg2 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-02.png";
import sdg3 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-03.png";
import sdg4 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-04.png";
import sdg5 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-05.png";
import sdg6 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-06.png";
import sdg7 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-07.png";
import sdg8 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-08.png";
import sdg9 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-09.png";
import sdg10 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-10.png";
import sdg11 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-11.png";
import sdg12 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-12.png";
import sdg13 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-13.png";
import sdg14 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-14.png";
import sdg15 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-15.png";
import sdg16 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-16.png";
import sdg17 from "../assets/sdgs/E_SDG-goals_icons-individual-rgb-17.png";
import sdg18 from "../assets/sdgs/SDG-Logo_widget.png";
import sdgArt from "../assets/sdgs/istockphoto-1328414688-612x612-removebg-preview.png";
import ourSDG1 from "../assets/sdgs/FINCA No poverty by 2030.jpg";
import ourSDG2 from "../assets/sdgs/1594841230.3497.jpg";
import ourSDG3 from "../assets/sdgs/world-immunization-week-sees-big-catch-up-to-get-vaccines-back-on-track.jpg";
import ourSDG4 from "../assets/sdgs/sdg-7.png";
import ourSDG5 from "../assets/sdgs/2022-08-17-Africa-on-the-verge-of-gender-parity.jpg";
import ourSDG6 from "../assets/sdgs/sdg-12.png";

const SDGs = () => {
  const links = [
    { name: "home", url: "/" },
    { name: "sdgs", url: "/sdg" },
  ];

  const ourSDGs = [
    {
      fadeUpDuration: 500,
      imageHeader: ourSDG1,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, recusandae qui facere corporis placeat fugiat dolor cum nesciunt deserunt fuga amet tenetur veniam accusamus. Minima iure delectus aut architecto?",
      icon: sdg1,
      title: "SDG 1",
    },
    {
      fadeUpDuration: 600,
      imageHeader: ourSDG2,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, recusandae qui facere corporis placeat fugiat dolor cum nesciunt deserunt fuga amet tenetur veniam accusamus. Minima iure delectus aut architecto?",
      icon: sdg2,
      title: "SDG 2",
    },
    {
      fadeUpDuration: 700,
      imageHeader: ourSDG3,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, recusandae qui facere corporis placeat fugiat dolor cum nesciunt deserunt fuga amet tenetur veniam accusamus. Minima iure delectus aut architecto?",
      icon: sdg3,
      title: "SDG 3",
    },
    {
      fadeUpDuration: 500,
      imageHeader: ourSDG4,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, recusandae qui facere corporis placeat fugiat dolor cum nesciunt deserunt fuga amet tenetur veniam accusamus. Minima iure delectus aut architecto?",
      icon: sdg4,
      title: "SDG 4",
    },
    {
      fadeUpDuration: 600,
      imageHeader: ourSDG5,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, recusandae qui facere corporis placeat fugiat dolor cum nesciunt deserunt fuga amet tenetur veniam accusamus. Minima iure delectus aut architecto?",
      icon: sdg5,
      title: "SDG 5",
    },
    {
      fadeUpDuration: 700,
      imageHeader: ourSDG6,
      content:
        "Lorem ipsum dolor sit amet consectetur adipisicing elit. Officiis quod, recusandae qui facere corporis placeat fugiat dolor cum nesciunt deserunt fuga amet tenetur veniam accusamus. Minima iure delectus aut architecto?",
      icon: sdg6,
      title: "SDG 6",
    },
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
          <div className="sdgContentContainer">
            <div className="sdgArtContainer">
              <img src={sdgArt} alt="" className="sdgArt" />
            </div>
            <div className="sdgHeadingContainer">
              <div className="sdgHeading">
                Technology ventures for the <span>future of humanity</span>
              </div>
            </div>
            <div className="sdgGridHeadingsContainer">
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg1}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg2}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg3}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg4}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg5}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg6}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg7}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg8}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg9}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg10}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg11}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg12}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg13}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg14}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg15}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg16}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg17}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
              <div className="sdgGridItemContainer">
                <img
                  decoding="async"
                  src={sdg18}
                  alt=""
                  className="sdgGridItem"
                />
              </div>
            </div>

            <div className="ourSDGsGridContainer">
              {ourSDGs.map((ourSDG, index) => (
                <div
                  data-aos="fade-up"
                  data-aos-duration={ourSDG.fadeUpDuration}
                  key={index}
                  className="ourSDGItemContainer"
                >
                  <div className="ourSDGItemImageContainer">
                    <div className="ourSDGItemImageContainerIconContainer">
                      <img
                        decoding="async"
                        src={ourSDG.icon}
                        alt=""
                        className="ourSDGItemImageContainerIcon"
                      />
                    </div>
                    <img
                      decoding="async"
                      src={ourSDG.imageHeader}
                      alt=""
                      className="ourSDGItemImage"
                    />
                  </div>
                  <div className="ourSDGItemContentContainer">
                    <div className="ourSDGItemContent">
                      <div className="ourSDGItemContentTitle">
                        {ourSDG.title}
                      </div>
                      <div className="ourSDGItemContentBody">
                        {ourSDG.content}
                      </div>
                    </div>
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

export default SDGs;
