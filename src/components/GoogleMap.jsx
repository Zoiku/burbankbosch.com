import "../styles/GoogleMap.scss";
import src from "../assets/googleLocation.jpeg";

const GoogleMap = () => {
  return (
    <div className="GoogleMap">
      <div className="googleMapContainer">
        <div className="overlayContainer">
          <div className="overlay"></div>
        </div>
        <img src={src} alt="" className="googleMap" />
      </div>
    </div>
  );
};

export default GoogleMap;
