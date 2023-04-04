import {  useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export function Navbar() {
  const [scroll, setscroll] = useState(false);


    function handlescroll() {
      let show=window.scrollY >= 56
      if(show){
        setscroll(true)
      }
      else{
        setscroll(false)
      }
    }
    window.addEventListener("scroll", handlescroll);


  return (
    <div>
      <nav
        className={
          scroll
            ? "navbar navbar-expand-lg bg-body-tertiary fixed-top  navbar-scrolled"
            : "navbar navbar-expand-lg bg-body-tertiary fixed-top"
        }
      >
        <div className="container-fluid">
          <Link className="navbar-brand">
            <img
              src="https://pixner.net/boleto/demo/assets/images/logo/logo.png"
              alt="logo"
            />
          </Link>
          <button
            className="navbar-toggler"
            type="button"
            data-bs-toggle="collapse"
            data-bs-target="#navbarSupportedContent"
            aria-controls="navbarSupportedContent"
            aria-expanded="false"
            aria-label="Toggle navigation"
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div className="collapse navbar-collapse" id="navbarSupportedContent">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <Link className="nav-link active" aria-current="page" href="/">
                  Home
                </Link>
              </li>
              <li className="nav-item">
                <Link className="nav-link">Contact</Link>
              </li>
            </ul>
            <Link to="/signup" className="btn btn-primary me-3">
              <div className="d-flex align-self-center fw-bold">Join Us</div>
            </Link>
          </div>
        </div>
      </nav>
    </div>
  );
}
