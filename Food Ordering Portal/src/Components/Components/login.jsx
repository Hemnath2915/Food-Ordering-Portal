import React from 'react';
import './login.css';
import { Link } from 'react-router-dom';

const Login = () => {
  return (
    <div style={{backgroundImage:'url("https://img.freepik.com/free-vector/restaurant-mural-wallpaper_23-2148706001.jpg?w=996&t=st=1689183479~exp=1689184079~hmac=7f8dcb30654c2c90abb9e29296af63d0b4499ff5d1bfda382f87fa9c934bb486")'}} className="container">
      <div className="login-form">
        <h1 className='hh1'>Login</h1>
        <form>
          <input className='in' type="text" placeholder="Username" />
          <input className='in' type="password" placeholder="Password"/>
          <div className="options">
            <label htmlFor="rememberMe">
              <input type="checkbox" id="rememberMe" />
              Remember Me
            </label>
            <a href="#">Forgot Password?</a>
          </div>
          <Link to='/home'> <button type="submit">Login</button></Link>
          <div className="register-link">
            Don't have an account? <Link to='/register'> <button type="submit">Register</button></Link>
          </div>
        </form>
      </div>
    </div>
  );
};

export default Login;
