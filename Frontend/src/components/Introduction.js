import "./IntroductionStyles.css";
import img2 from "../assets/2.jpg";
import Requirements from "./Requirements";
import Requirement from "./Requirement";
import BloodNeed from "./BloodNeed";
import Footer from "./Footer";
import Modal from "../Modal";
import { Link } from "react-router-dom";
import MiniShop from "./MiniShop";
const Introduction = () => {
  const handleButtonClick = () => {
    window.scrollTo(0, 0);
  };
  return (
    <div className="start">
      <div className="btg">
        <h1>Bridging the gap between Donors and Pets. </h1>{" "}
      </div>
      <div className="introduction">
        <div className="first-des">
          <p id="p1">
            Our furry friends sometimes require blood transfusions due to
            various medical conditions or emergencies, that's why we have
            created this platform to help pet owners find suitable blood donors
            for their beloved companions. By utilizing our platform, pet owners
            can save valuable time and potentially lifesaving measures by
            swiftly finding a suitable donor. We prioritize the health and
            safety of both the recipent and the donor, ensuring that all
            potential matches undergo thorough screening processes to guarantee
            a reliable and safe donation.
          </p>
          <div className="photo1">
            <img alt="img" src={img2} style={{ height: 250, width: 400 }} />
          </div>
        </div>

        <div className="trouble">
          <div className="modal">
            <Modal />
          </div>
        </div>

        <div className="view-requirement">
          <Requirements />
          <Requirement />
        </div>

        <div className="enroll">
          {" "}
          <Link to="/dogform">
            <button id="register" onClick={handleButtonClick}>
              Enroll your dog
            </button>
          </Link>
          <Link to="/catform">
            <button id="register2" onClick={handleButtonClick}>
              Enroll your cat
            </button>
          </Link>
        </div>
      </div>
      <div id="bloodneed">
        {" "}
        <BloodNeed />
      </div>
      <div>
        {" "}
        <MiniShop />
      </div>
      <Footer />
    </div>
  );
};
export default Introduction;
