import "../styles/NotFound.scss";
import svgArt from "../assets/404/400 Error Bad Request-rafiki.svg";
import { Button2 } from "../components/MUIButton";
import { RoofingRounded } from "@mui/icons-material/";
import { useNavigate } from "react-router-dom";

const BadRequest = () => {
  const navigate = useNavigate();
  const handleRedirect = (redirect) => () => {
    navigate(redirect, { replace: true });
  };

  return (
    <div className="NotFoundContentContainer">
      <div className="NotFoundContent">
        <div className="svgArtContainer">
          <img src={svgArt} alt="" className="svgArt" />
        </div>
        <div className="buttonContainter">
          <Button2
            onClick={handleRedirect("/")}
            startIcon={<RoofingRounded />}
            variant="text"
          >
            Go back home
          </Button2>
        </div>
      </div>
    </div>
  );
};

export default BadRequest;
