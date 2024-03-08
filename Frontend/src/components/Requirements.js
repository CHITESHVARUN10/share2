import React from "react";
import "./RequirementsStyles.css";
class Requirements extends React.Component {
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
          id="req"
          onClick={() => {
            this.setState({ show: !this.state.show });
          }}
        >
          Requirements for dogs
        </div>
        {this.state.show ? (
          <div className="dog-intro">
            {" "}
            <br />
            <li>Be between 1 and 8 years old.</li>
            <br />
            <li>Weigh 50 pounds or more.</li>
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
              Be current on Rabies and DAPP (Distemper, Adenovirus, Parvovirus
              and Parainfluenza) vaccines. Additional vaccines may be required
              based on geographic location.
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
            Retirement typically occurs on or around a pet’s 8th birthday.
            However, some exceptions may apply based on the discretion of a
            licensed veterinarian
          </div>
        ) : null}
      </div>
    );
  }
}
export default Requirements;
