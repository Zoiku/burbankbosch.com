import "../styles/Technology.scss";
import MUIBreadCrumb from "../components/BreadCrumb";
import technologyImg from "../assets/Technology/Environment-bro.svg";
import questionImg from "../assets/Technology/Shrug-bro.svg";
import blockchainImg from "../assets/Technology/Fingerprint-bro.svg";

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
                    <div className="title">
                      Edge Cutting Green House Technology
                    </div>
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

              <div className="advantagesContentContainer">
                <div className="advantagesContent">
                  <div className="advantagesBodyContainer">
                    <div className="advantagesBody">
                      <div className="titleContainer">
                        <div className="titleHelper">Related Benefits</div>
                        <div className="title">
                          Reasons To Use Our Technology
                        </div>
                      </div>

                      <div
                        data-aos-duration="1000"
                        data-aos="fade-right"
                        className="whyUsTwoBoxesContainer"
                      >
                        <div className="whyUsTwoBoxes">
                          <div className="whyUsTwoBoxItemContainer">
                            <div className="whyUsTwoBoxItem">
                              <div>5</div>
                              <div>years of experiencee</div>
                            </div>
                          </div>
                          <div
                            data-aos-duration="1500"
                            data-aos="fade-right"
                            className="whyUsTwoBoxItemContainer"
                          >
                            <div className="whyUsTwoBoxItem">
                              <div>100%</div>
                              <div>recommended</div>
                            </div>
                          </div>
                        </div>
                      </div>

                      <div
                        data-aos-duration="1000"
                        data-aos="fade-up"
                        className="firstBodyHelperContainer"
                      >
                        <div className="firstBodyHelper">
                          <span className="key">Lorem ipsum dolor</span>, sit
                          amet consectetur adipisicing elit. Vero enim similique
                          est, nobis esse ipsam natus ducimus dolorum quasi
                          numquam, assumenda ullam non iusto iure quibusdam
                          dicta eveniet libero cumque ea maxime modi eius!
                          Voluptate reiciendis odit deserunt quam provident.
                        </div>
                      </div>

                      <div
                        data-aos-duration="1200"
                        data-aos="fade-up"
                        className="firstBodyHelperContainer"
                      >
                        <div className="firstBodyHelper">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Vero enim similique est, nobis esse ipsam natus
                          ducimus dolorum quasi numquam, assumenda ullam non
                          iusto iure quibusdam dicta eveniet libero cumque ea
                          maxime modi eius! Voluptate reiciendis odit deserunt
                          quam provident.
                        </div>
                      </div>

                      <div className="advantagesListContainer">
                        <div className="advantagesList">
                          <ul
                            data-aos-duration="1400"
                            data-aos="fade-up"
                            className="advantagesListContentContainer"
                          >
                            <li>Quick response time</li>
                            <li>Incredible customer service</li>
                            <li>High level Work completed</li>
                            <li>Work completed in time</li>
                            <li>Competitive prices</li>
                            <li>We understand customer needs</li>
                          </ul>
                          <ul
                            data-aos-duration="1600"
                            data-aos="fade-up"
                            className="advantagesListContentContainer"
                          >
                            <li>Quick response time</li>
                            <li>Incredible customer service</li>
                            <li>High level Work completed</li>
                            <li>Work completed in time</li>
                            <li>Competitive prices</li>
                            <li>We understand customer needs</li>
                          </ul>
                        </div>
                      </div>

                      <div className="callUsTodayContainer">
                        <div className="callUsToday">
                          Lorem ipsum dolor sit amet consectetur adipisicing
                          elit. Aliquid dignissimos dolorem voluptatem facere
                          ducimus architecto a sit eligendi non rem!
                        </div>
                      </div>
                    </div>
                  </div>
                  <div
                    data-aos-duration="1000"
                    data-aos="fade-left"
                    className="advantagesBackgroundArtContainer"
                  >
                    <img
                      src={questionImg}
                      alt=""
                      className="advantagesBackgroundArt"
                    />
                  </div>
                </div>
              </div>

              <div className="blockChainIncorporationContentContainer">
                <div className="blockChainIncorporationContent">
                  <div
                    data-aos-duration="1000"
                    data-aos="fade-right"
                    className="backgroundArtContainer"
                  >
                    <img src={blockchainImg} alt="" className="backgroundArt" />
                  </div>

                  <div className="blockChainIncorporationBodyContainer">
                    <div className="blockChainIncorporationBody">
                      <div className="titleContainer">
                        <div className="titleHelper">How it works</div>
                        <div className="title">
                          Improved Traceability With Blockchain
                        </div>
                      </div>

                      <div
                        data-aos-duration="1000"
                        data-aos="fade-up"
                        className="howContentBodyContainer"
                      >
                        <div className="howContentBody">
                          <span className="key">Lorem ipsum dolor</span> sit
                          amet consectetur, adipisicing elit. Officia alias
                          eaque facere dolor natus recusandae ex span.key
                          blanditiis incidunt aperiam sit voluptatem beatae,
                          nobis omnis obcaecati illo officiis consequuntur
                          distinctio quos? Nobis aspernatur corporis
                          perspiciatis cum, necessitatibus rem inventore
                          obcaecati?
                        </div>
                      </div>

                      <div
                        data-aos-duration="1200"
                        data-aos="fade-up"
                        className="howContentBodyContainer"
                      >
                        <div className="howContentBody">
                          Lorem ipsum dolor sit amet consectetur, adipisicing
                          elit. Officia alias eaque facere dolor natus
                          recusandae ex span.key blanditiis incidunt aperiam sit
                          voluptatem beatae, nobis omnis obcaecati illo officiis
                          consequuntur distinctio quos? Nobis aspernatur
                          corporis perspiciatis cum, necessitatibus rem
                          inventore obcaecati?
                        </div>
                      </div>

                      <div className="advantagesListContainer">
                        <div className="advantagesList">
                          <ul
                            data-aos-duration="1400"
                            data-aos="fade-up"
                            className="advantagesListContentContainer"
                          >
                            <li>Quick response time</li>
                            <li>Incredible customer service</li>
                            <li>High level Work completed</li>
                            <li>Work completed in time</li>
                            <li>Competitive prices</li>
                            <li>We understand customer needs</li>
                          </ul>
                          <ul
                            data-aos-duration="1600"
                            data-aos="fade-up"
                            className="advantagesListContentContainer"
                          >
                            <li>Quick response time</li>
                            <li>Incredible customer service</li>
                            <li>High level Work completed</li>
                            <li>Work completed in time</li>
                            <li>Competitive prices</li>
                            <li>We understand customer needs</li>
                          </ul>
                        </div>
                      </div>
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
