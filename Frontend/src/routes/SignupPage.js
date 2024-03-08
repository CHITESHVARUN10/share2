import { useState } from "react";
import axios from "axios";
import "./SignupStyles.css";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegistration = () => {
    if (username.length === 0) {
      alert("Username is left Blank!");
    } else if (password.length === 0) {
      alert("Password is left Blank!");
    } else if (email.length === 0) {
      alert("Email is left Blank!");
    } else {
      // const url = "http://localhost/test/formsubmit.php";
      // const url = "http://localhost:3001";

      const url =
        "https://pawsitive-match-relsons-projects.vercel.app/user/signup";
      let fData = new FormData();
      fData.append("username", username);
      fData.append("password", password);
      fData.append("emailId", email);
      const data = {
        username: username,
        password: password,
        emailId: email,
      };
      axios
        .post(url, data)
        .then((response) => {
          alert(response.data);
          // Assuming successful registration, redirect to the home page
          handleSignup();
        })
        .catch((error) => alert(error));
    }
  };

  const handleSignup = () => {
    window.scrollTo(0, 0);
    // Perform login logic here
    // For example, send an API request to authenticate the user

    // Assuming login is successful
    // Redirect to the home page
    navigate("/");
  };

  return (
    <div className="signup-container">
      <h2>Signup Page</h2>
      <form className="signup-form">
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Username"
          type="text"
          value={username}
          onChange={(e) => setUsername(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleRegistration}>
          Sign Up
        </button>
      </form>
    </div>
  );
};

export default SignupPage;
