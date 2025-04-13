import React, { useState } from "react";
import { useNavigate } from "react-router-dom";
import logo from "./image.png"; // Assure-toi que le chemin est correct
import './ForgotPasswordPage.css';

const ForgotPasswordPage = () => {
  const [phone, setPhone] = useState("");
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();

  const handleSubmit = async (e) => {
    e.preventDefault();

    if (!phone) {
      setError("Please enter your phone number.");
      return;
    }

    try {
      const response = await fetch("http://localhost:5216/api/donors/forgot-password", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ phone }),
      });

      const result = await response.json();

      if (response.ok) {
        setMessage("A password reset code has been sent to your phone.");
        setError("");
      } else {
        setError(result.message || "Something went wrong.");
        setMessage("");
      }
    } catch (err) {
      setError("Server error. Please try again later.");
      setMessage("");
    }
  };

  return (
    <div className="forgot-password-container">
      <div className="header">
        <button onClick={() => navigate("/")} className="back-button">←</button>
        <img src={logo} alt="Blood Bank Logo" className="logo" />
        <div className="spacer"></div>
      </div>

      <div className="form-container">
        <h2 className="form-title">Forgot Password</h2>

        {message && <div className="success-message">{message}</div>}
        {error && <div className="error-message">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="input-group">
            <label htmlFor="phone" className="input-label">Phone number</label>
            <input
              type="text"
              id="phone"
              className="input-field"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button type="submit" className="submit-button">Send Reset Code</button>
          <p onClick={() => navigate("/")} className="back-link">← Back to home</p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;


