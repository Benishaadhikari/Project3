// LoginPage.jsx
import React from 'react';
import './LoginPage.css';

const LoginPage = () => {
  return (
    <div className="login-container">
      <div className="login-card">
        <h2 className="login-title">Welcome Back, Gorgeous!</h2>
        <p className="login-subtitle">Log in to your makeup account</p>
        <form className="login-form">
          <input
            type="email"
            placeholder="Email Address"
            className="login-input"
            required
          />
          <input
            type="password"
            placeholder="Password"
            className="login-input"
            required
          />
          <button type="submit" className="login-button">Log In</button>
          <p className="login-footer">Don't have an account? <a href="#">Sign Up</a></p>
        </form>
      </div>
    </div>
  );
};

export default LoginPage;
