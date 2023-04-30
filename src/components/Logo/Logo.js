import { Tilt } from "react-tilt";
import "./Logo.css";
import brain from "./brain.png";

function Logo() {
  return (
    <div className="logoWrapper ma4 mt0">
      <Tilt
        className="Tilt br2 shadow-2"
        options={{ max: 55 }}
        style={{ height: 200, width: 200 }}
      >
        <div className="Tilt-inner pa5">
          <img style={{ paddingTop: "5px" }} src={brain} alt="Logo" />
        </div>
      </Tilt>
    </div>
  );
}

export default Logo;
