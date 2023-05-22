import "../styles/GoogleMap.scss";
import {
  GoogleMap as ReactGoogleMap,
  Marker,
  useLoadScript,
} from "@react-google-maps/api";

const GoogleMap = () => {
  const center = { lat: 5.573825, lng: -0.181943 };
  const markerPosition = { lat: 5.573825, lng: -0.181943 };

  const { isLoaded } = useLoadScript({
    googleMapsApiKey: process.env.REACT_APP_GOOGLE_MAP_API_KEY,
  });

  return (
    <div className="GoogleMap">
      <div className="googleMapContainer">
        <div className="overlayContainer">
          <div className="overlay"></div>
        </div>
        {isLoaded && (
          <ReactGoogleMap
            mapContainerClassName="googleMapBody"
            center={center}
            zoom={18}
          >
            <Marker position={markerPosition} />
          </ReactGoogleMap>
        )}
      </div>
    </div>
  );
};

export default GoogleMap;
