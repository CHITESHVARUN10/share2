import { useState } from "react";
import { useNavigate } from "react-router-dom";
import "./LoginStyles.css";

const LoginPage = () => {
  const navigate = useNavigate();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = () => {
    window.scrollTo(0, 0);

    // Perform login logic here
    // For example, send an API request to authenticate the user

    // Assuming login is successful
    // Redirect to the home page
    navigate("/");
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form className="login-form">
        <input
          placeholder="Email"
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />

        <input
          placeholder="Password"
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
        />

        <button type="button" onClick={handleLogin}>
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
