import React from "react";
import { Link } from "react-router-dom";
import "./Login.css";

export default function Login() {
  return (
    <div>
      <div className="logbackground">
        <div className="loginForm text-center">
          <div>
            <h2 className="welcomeText">HELLO</h2>
            <h2 className="welcomeSubText">WELCOME BACK</h2>
          </div>
          <div className="mb-3 form-control-group">
            <label className="form-label">Email</label>
            <input
              placeholder="Enter your Email"
              type="email"
              name="email"
              className="form-control"
            ></input>
          </div>
          <div className="mb-3 form-control-group ">
            <label className="form-label">Password</label>
            <input
              placeholder="Password"
              type="password"
              name="password"
              className="form-control "
            ></input>
          </div>

          <div className="d-flex justify-content-between mb-5">
            <div className="downtext">
              <input type="checkbox" className="form-check-input" /> &nbsp;
              Remember Password
            </div>
            <Link className="downtext text-decoration-none">
              Forget Password
            </Link>
          </div>
          <div className="btn-wrapper">
            <Link to="/" className="btn btn-primary mb-3">Log In</Link>
          </div>
          <span className="loginText" htmlFor="">
          Don't have an account? &nbsp;
            <Link className="loginLink mb-3" to="/signup">
              Sign Up
            </Link>
          </span>
        </div>
      </div>
    </div>
  );
}
