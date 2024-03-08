import "./styles.css";
import Navbar from "./components/Navbar.js";
// import Navbar from "./component/Navbar";
import { Route, Routes } from "react-router-dom";
import Home from "./routes/Home";
import VetCorner from "./routes/VetCorner";
import Shop from "./routes/Shop";
import About from "./routes/About";
import FindHospital from "./routes/FindHospital";
import SignIn from "./routes/SignIn";
import DogForm from "./routes/DogForm";
import CatForm from "./routes/CatForm";

export default function App() {
  return (
    <div className="App">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/findhospital" element={<FindHospital />} />
        <Route path="/vetcorner" element={<VetCorner />} />
        <Route path="/signin" element={<SignIn />} />
        <Route path="/dogform" element={<DogForm />} />
        <Route path="/catform" element={<CatForm />} />
      </Routes>
    </div>
  );
}
