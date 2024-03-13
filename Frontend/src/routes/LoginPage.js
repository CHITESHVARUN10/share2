import { useState } from "react";
import axios from "axios";
import { useNavigate } from "react-router-dom";

const LoginPage = () => {
  const navigate = useNavigate();
  const [formData, setFormData] = useState({
    email: "",
    password: ""
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const response = await axios.post('http://localhost:5000/user/login', formData);
      const authToken = response.data.authtoken;

      // Show success alert
      console.log(authToken);
      alert('Login successful!');

      // Store the auth token in local storage
      localStorage.setItem('authToken', authToken);

      // Redirect the user to another page or update the UI as needed
      navigate("/"); // Example: Redirect to the home page
    } catch (error) {
      console.error('Login failed:', error.response.data);
      // Handle login error (e.g., display error message)
    }
  };

  return (
    <div className="login-container">
      <h2>Login Page</h2>
      <form className="login-form" onSubmit={handleSubmit}>
        <input
          placeholder="Email"
          type="email"
          name="email"
          value={formData.email}
          onChange={handleChange}
        />

        <input
          placeholder="Password"
          type="password"
          name="password"
          value={formData.password}
          onChange={handleChange}
        />

        <button type="submit">
          Login
        </button>
      </form>
    </div>
  );
};

export default LoginPage;
