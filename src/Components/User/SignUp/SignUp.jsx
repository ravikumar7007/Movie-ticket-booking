import React from "react";
import { Link } from "react-router-dom";
import "./SignUp.css";

export default function SignUp() {
   
  return (
    <div className="signupContainer">
    <div className="signupForm text-center ">
        <div>
        <h2 className="welcomeText">WELCOME</h2>
        <h2 className="welcomeSubText">TO BOLETO</h2>
        </div>
        <div className="mb-3 form-control-group">
            <label className="form-label">
                Email
            </label>
            <input 
            placeholder="Enter your Email"
            type="email" name="email" className="form-control">

            </input>
        </div>
        <div className="mb-3 form-control-group">
            <label className="form-label">
                Password
            </label>
            <input 
              placeholder="Password"
            type="password" name="password" className="form-control ">

            </input>
        </div>
        <div className="mb-3 form-control-group">
            <label className="form-label">
                Confirm Password
            </label>
            <input 
             placeholder="Password"
             type="password" name="confirmPassword" className="form-control">

            </input>
        </div>
        <div className="btn-wrapper">
        <button className="btn btn-primary mb-3">
            Sign Up
        </button>

        </div>
        
        <span className="loginText" htmlFor="">
        Already have an account?  &nbsp;
        <Link className="loginLink mb-3" to="/login">
        Login  </Link>
        </span>
    </div>
</div>
  );
}
