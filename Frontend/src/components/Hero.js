import "./HeroStyles.css";
import img1 from "../assets/intro.jpg";
function Hero() {
  return (
    <>
      <div className="hero">
        <img className="photo" alt="HeroImg" src={img1} />
      </div>
    </>
  );
}
export default Hero;
