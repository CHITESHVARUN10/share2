import { useState } from "react";
import LoginPage from "./LoginPage";
import SignupPage from "./SignupPage";
import "./SigninStyles.css";

const SignIn = () => {
  const [showSignup, setShowSignup] = useState(true);
  const [showLogin, setShowLogin] = useState(false);

  const handleShowLogin = () => {
    setShowSignup(false);
    setShowLogin(true);
  };

  const handleShowSignup = () => {
    setShowSignup(true);
    setShowLogin(false);
  };

  return (
    <div>
      <div className="signin-background"></div>
      <div className="signin-container">
        <div className="signin">
          <div className="sign">
            {/* <div className="bg-img"><img alt="o" src={bgimg} style={{backgroundSize}}/> */}
            {showSignup && <SignupPage />}
            {showLogin && <LoginPage />}
            {/* <img alt="im" src={img3} style={{ width: 300 }} /> */}
          </div>
          <div className="ahac">
            {!showLogin && (
              <p>
                Already have an account?
                <button className="log-in" onClick={handleShowLogin}>
                  Login
                </button>
              </p>
            )}
          </div>
          <div className="ahas">
            {!showSignup && (
              <p>
                Don't have an account?
                <button className="log-in" onClick={handleShowSignup}>
                  Sign Up
                </button>
              </p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default SignIn;
