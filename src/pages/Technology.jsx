import MUIBreadCrumb from "../components/BreadCrumb";

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
    </div>
  );
};

export default Technology;
