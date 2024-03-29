import { Row } from "reactstrap";
import i1 from "../../assets/all-images/brand/GIANT-PNG.png";
import i2 from "../../assets/all-images/brand/Polygon-PNG.png";

import i4 from "../../assets/all-images/brand/firefox-PNG.png";
import "../../styles/brand.css";
function Brand() {
  return (
    <>
      <div class="container1">
        <div class="box">
          <img src={i1} alt="image1" />
        </div>
        <div class="box">
          <img src={i2} alt="image1" />
        </div>
        <div class="box">
          <img src={i4} alt="image1" />
        </div>
      </div>
    </>
  );
}

export default Brand;
