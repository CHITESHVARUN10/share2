import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const SignupPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [username, setUsername] = useState("");

  const handleRegistration = () => {
    if (!username || !password || !email) {
      alert("Please fill in all fields.");
      return;
    }

    const url = "http://localhost:5000/user/signup";
    const data = {
      username: username,
      password: password,
      email: email
      
    };

    axios
      .post(url, data, {
        headers: {
          "Content-Type": "application/json",
        },
      })
      .then((response) => {
        alert(response.data.auth_token);
        navigate("/");
      })
      .catch((error) => {
        alert(error.response.data.error || "An error occurred.");
      });
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
