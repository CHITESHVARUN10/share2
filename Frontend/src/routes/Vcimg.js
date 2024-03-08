import "./VetStyles.css";
import bgimg from "../assets/vc.jpg";

function Vcimg() {
  return (
    <>
      {/* <h1> This is Vet Corner</h1> */}
      <img className="vc" alt="vc" src={bgimg} />
    </>
  );
}
export default Vcimg;
