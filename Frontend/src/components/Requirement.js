import React from "react";
import "./RequirementStyles.css";
class Requirement extends React.Component {
  constructor() {
    super();
    this.state = {
      show: false,
      // instead of show any word can be used
    };
  }

  render() {
    return (
      <div>
        <div
          id="cat-req"
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Requirements for cats
        </div>
        {this.state.show ? (
          <div className="cat-intro">
            {" "}
            <br />
            <li>Be between 1 and 8 years old.</li>
            <br />
            <li>Weigh 10 pounds or more.</li>
            <br />
            <li>Be an indoor-only cat.</li>
            <br />
            <li>
              Be considered healthy based on a complete physical exam and blood
              work.
            </li>
            <br />
            <li>Be friendly, calm, and have a good disposition.</li>
            <br />
            <li>Be on year-round heartworm, tick, and flea preventatives.</li>
            <br />
            <li>
              Be current on Rabies and FVRCP (Feline Viral Rhinotracheitis,
              Calicivirus, and Panleukopenia) vaccines. Additional vaccines may
              be required based on geographic location.
            </li>
            <br />
            <li>
              Some chronic medications are permitted on a case-by-case basis.
              Please contact your local blood bank for a list of permitted
              medications.
            </li>
            <br />
            <li>
              Not be on a raw diet due to the concern for salmonella
              transmission via transfusion.
            </li>
            <br />
            <li>Not have received a blood transfusion.</li>
            <br />
            <li>
              Retirement typically occurs on or around a pet’s 8th birthday.
              However, some exceptions may apply based on the discretion of a
              licensed veterinarian.
            </li>
            <br />
          </div>
        ) : null}
      </div>
    );
  }
}
export default Requirement;
