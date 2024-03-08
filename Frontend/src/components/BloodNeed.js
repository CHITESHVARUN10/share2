import "./BloodNeedStyles.css";
import clinic from "../assets/clinic.jpg";

function BloodNeed() {
  return (
    <div>
      <h1 id="Bd"> Why We Need Blood Donors </h1>
      <div className="clinic">
        <p id="para">
          Just as humans require blood transfusions for medical conditions or
          emergency situations, so do our beloved pets. Unfortunately, there is
          a shortage of available blood for pets, while the need for life-saving
          blood transfusions grows. We rely on the invaluable contributions of
          dog and cat donors to help save and improve the quality of pets’
          lives, expand blood donor programs, and strengthen the human-animal
          bond. Every blood donor is considered a hero and their contribution
          can give the gift of life to animals in need.
        </p>
        <div>
          <img id="clinic" alt="imag" src={clinic} />{" "}
        </div>
      </div>
    </div>
  );
}
export default BloodNeed;
