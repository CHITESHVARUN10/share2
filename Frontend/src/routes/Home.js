import Hero from "../components/Hero";
import Introduction from "../components/Introduction";
// import Navbar from "../components/Navbar";
import "./HomeStyles.css";

function Home() {
  return (
    <div className="Home">
      {/* <Navbar /> */}
      <Hero />
      <Introduction />
    </div>
  );
}
export default Home;
