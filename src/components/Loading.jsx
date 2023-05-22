import "../styles/Loading.scss";
import svgArt from "../assets/Fast loading-bro.svg";

const Loading = () => {
  return (
    <div className="LoadingAnimationContainer">
      <div className="LoadingAnimation">
        <div className="svgArtContainer">
          <img src={svgArt} alt="" className="svgArt" />
        </div>
      </div>
    </div>
  );
};

export default Loading;
