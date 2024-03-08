import "./VetStyles.css";
// import bgimg from "../assets/vc.jpg";
import Vc from "../routes/Vcimg";
import Faq from "../routes/Faq";
import Footer from "../components/Footer.js";

function VetCorner() {
  return (
    <>
      {/* <h1> This is Vet Corner</h1> */}
      <Vc />
      <h1>
        <b> Welcome to the VetCorner</b>
      </h1>
      <div className="v1">
        In the heart of our pet-loving community, we've carved out a special
        place just for you and your furry friends - the Vet Corner. Here, our
        dedicated team of veterinary experts is on a mission to share knowledge,
        provide guidance, and celebrate the bond between pets and their devoted
        owners.
      </div>
      <h1>
        {" "}
        <b>FAQs answered by our Vets</b>
      </h1>
      <div className="v2">
        <Faq />
      </div>
      <div className="v3">
        {" "}
        If you have any question that isn't answered here, you can connect with
        our veterinarians
        <br />
        <br />
        <b>Dr.Rajiv Mishra (Mumbai)- 9872098327</b>
        <br />
        <br />
        <b>Dr.Prakash Gadge (Mumbai)-9094585223</b>
        <br />
        <br />
        <b>Dr.Clint Dsouza (Goa)- 8896327790</b>
        <br />
        <br />
        <b>Dr.Arshq Khan (Hyderabad) - 9008467994</b>
        <br />
        <br />
      </div>
      <div>
        {" "}
        <Footer />
      </div>
    </>
  );
}
export default VetCorner;
