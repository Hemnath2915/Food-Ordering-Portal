import React from 'react';
import './register.css';
import { Link } from 'react-router-dom';

const Register = () => {
  return (
    <div className="container">
      <div className="registration-form">
        <h1>Register</h1>
        <form>
          <input type="text" placeholder="Username" />
          <input type="email" placeholder="Email" />
          <input type="password" placeholder="Password" />
          <input type="password" placeholder="Confirm Password" />
          <button type="submit"><Link to="/home">Register</Link></button>
          <div className="login-link">
            Already have an account? <Link to="/home">Login</Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Register;
