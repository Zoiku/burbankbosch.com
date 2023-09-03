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
import ourSDG12 from "../assets/sdgs/CoopsDay-846x476.jpg";
import ourSDG2 from "../assets/sdgs/1594841230.3497.jpg";
import ourSDG9 from "../assets/sdgs/sdg09-hero-62a1926a97030.jpg";
import ourSDG4 from "../assets/sdgs/sdg-7.png";
import ourSDG6 from "../assets/sdgs/sdg-12.png";

const SDGs = () => {
  const links = [
    { name: "home", url: "/" },
    { name: "sdgs", url: "/sdg" },
  ];

  const ourSDGs = [
    {
      fadeUpDuration: 500,
      imageHeader: ourSDG2,
      content:
        "We focus on increasing agricultural productivity, implementing sustainable food production systems, and investing in rural infrastructure and technology development",
      icon: sdg2,
      title: "SDG 2",
    },
    {
      fadeUpDuration: 600,
      imageHeader: ourSDG12,
      content:
        "We target food waste reduction, minimize waste, and boost technology in farming with greenhouse tech, blockchain traceability, and waste reduction practices.",
      icon: sdg12,
      title: "SDG 12",
    },
    {
      fadeUpDuration: 700,
      imageHeader: ourSDG6,
      content:
        "We are dedicated to promoting responsible water management and increasing water-use efficiency. Specifically, we align with target 6.4: substantially increasing water-use efficiency.",
      icon: sdg6,
      title: "SDG 6",
    },
    {
      fadeUpDuration: 500,
      imageHeader: ourSDG4,
      content:
        "Our activities align with the targets of achieving higher levels of economic productivity, promoting job creation and entrepreneurship, and improving resource efficiency.",
      icon: sdg8,
      title: "SDG 8",
    },
    {
      fadeUpDuration: 600,
      imageHeader: ourSDG9,
      content:
        "Our activities directly align with this goal as we leverage advanced technologies and innovative farming practices to create resilient infrastructure within the agricultural industry.",
      icon: sdg9,
      title: "SDG 9",
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

      <section className="MainPageSectionCenteredContentContainer">
        <div className="MainPageSectionCentered">
          <div className="LoopCirclesSVGArtContainer">
            <img src={svgArt} alt="" className="LoopCirclesSVGArt" />
          </div>

          <div className="sdgContentContainer">
            <div className="sdgContent">
              <div className="sdgArtContainer">
                <img
                  data-aos="fade-down"
                  data-aos-duration="1000"
                  src={sdgArt}
                  alt=""
                  className="sdgArt"
                />
              </div>

              <div className="sdgHeadingContainer">
                <div className="sdgHeading">
                  Technology ventures for the <span>future of humanity</span>
                </div>
              </div>

              <div className="sdgGridHeadingsContainer">
                <div className="sdgGridItemContainer">
                  <img src={sdg1} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg2} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg3} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg4} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg5} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg6} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg7} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg8} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg9} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg10} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg11} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg12} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg13} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg14} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg15} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg16} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg17} alt="" className="sdgGridItem" />
                </div>
                <div className="sdgGridItemContainer">
                  <img src={sdg18} alt="" className="sdgGridItem" />
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
                          src={ourSDG.icon}
                          alt=""
                          className="ourSDGItemImageContainerIcon"
                        />
                      </div>
                      <img
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
        </div>
      </section>
    </div>
  );
};

export default SDGs;
