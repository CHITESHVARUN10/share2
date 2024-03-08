import "./MiniStyles.css";
import rcog from "../assets/rcog.png";
import rcc from "../assets/rcc.jpg";
import tr from "../assets/tr.jpg";
import { Link } from "react-router-dom";

const MiniShop = () => {
  //   const pageUrl = "/shop";
  // const divStyle = {
  //   display: 'block',
  // };

  return (
    <div className="mis">
      {" "}
      <h2> Our Best seller</h2>
      <div className=" minishop ">
        <div className="minis">
          <Link to="/shop">
            <img id="mini" alt="rc" src={rcog} />
          </Link>
        </div>{" "}
        <div className="minis1">
          <Link to="/shop">
            <img id="mini2" alt="rc" src={rcc} />
          </Link>
        </div>
        {/* <a href={"/shop"}> */}
        <div className="minis2">
          <Link to="/shop">
            <img id="mini2" alt="rc" src={tr} />
          </Link>
        </div>
        {/* </a> */}
      </div>
    </div>
  );
};
export default MiniShop;
