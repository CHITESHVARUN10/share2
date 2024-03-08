import { useState } from "react";
import "./ModalStyles.css";
// import { fcSearch } from "react-icons/fc";

const Modal = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [selectedState, setSelectedState] = useState("");
  const [selectedCity, setSelectedCity] = useState("");

  const openModal = () => {
    setIsOpen(true);
  };

  const closeModal = () => {
    setIsOpen(false);
  };

  const handleStateChange = (e) => {
    setSelectedState(e.target.value);
    setSelectedCity("");
  };

  const handleCityChange = (e) => {
    setSelectedCity(e.target.value);
  };

  const states = [
    {
      name: "Andhra Pradesh",
      cities: ["Visakhapatnam", "Vijayawada", "Guntur"],
    },
    { name: "Assam", cities: ["Guwahati"] },
    { name: "Gujarat", cities: ["Surat", "Rajkot"] },
    { name: "Karnataka", cities: ["Bengaluru", "Mysuru", "Hubli"] },
    { name: "Punjab", cities: ["Amritsar", "Patiala"] },
    { name: "Uttar Pradesh", cities: ["Agra", "Lucknow"] },
    { name: "West Bengal", cities: ["Kolkata"] },
    // Add more states and cities as needed
  ];

  return (
    <div>
      <div className="donordhundo">
        <button className="find-donorog" onClick={openModal}>
          Find Donor
        </button>
      </div>
      {isOpen && (
        <div className="modal-overlay">
          <div className="modal">
            <div className="modal-content">
              <span className="close" onClick={closeModal}>
                &times;
              </span>
              <div className="modalfd">
                <h2> Find Donor </h2>
              </div>
              <form>
                <div className="sel-state">
                  <label htmlFor="state">Select State/UT:</label>
                  <select
                    id="state"
                    value={selectedState}
                    onChange={handleStateChange}
                  >
                    <option value="">Select a state</option>
                    {states.map((state, index) => (
                      <option key={index} value={state.name}>
                        {state.name}
                      </option>
                    ))}
                  </select>{" "}
                </div>

                {selectedState && (
                  <div className="sel-city">
                    <label htmlFor="city">Select City:</label>
                    <select
                      id="city"
                      value={selectedCity}
                      onChange={handleCityChange}
                    >
                      <option value="">Select a city</option>
                      {states
                        .find((state) => state.name === selectedState)
                        .cities.map((city, index) => (
                          <option key={index} value={city}>
                            {city}
                          </option>
                        ))}
                    </select>
                  </div>
                )}

                <button className="search" type="submit">
                  Search
                </button>
              </form>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default Modal;
