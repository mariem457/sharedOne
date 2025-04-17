import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

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
    <div className="reset-page">
      <div className="reset-header">
        <button onClick={() => navigate("/")} className="reset-back-btn">←</button>
        
        <div className="reset-spacer"></div>
      </div>

      <div className="reset-form-box">
        <h2 className="reset-title">Forgot Password</h2>

        {message && <div className="reset-success">{message}</div>}
        {error && <div className="reset-error">{error}</div>}

        <form onSubmit={handleSubmit}>
          <div className="reset-field-group">
            <label htmlFor="phone" className="reset-label">Phone number</label>
            <input
              type="text"
              id="phone"
              className="reset-input"
              placeholder="Enter your phone number"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
            />
          </div>

          <button type="submit" className="reset-submit-btn">Send Reset Code</button>
          <p onClick={() => navigate("/")} className="reset-back-link">← Back to home</p>
        </form>
      </div>
    </div>
  );
};

export default ForgotPasswordPage;



