import React from "react";
import "../App.css";
function NavFixed() {
  return (
    <nav className="navbar sticky-top navbar-light sticky-navbar-color ">
      <ul className="navbar-nav ">
        <li className="nav-item active dropdown ">
          <a
            href="#"
            className="nav-link dropdown-toggle"
            data-toggle="dropdown"
            id="servicedrop"
          >
            English
          </a>
          <div className="dropdown-menu">
            <a href="#" className="dropdown-item">
              Deutsch
            </a>
            <a href="#" className="dropdown-item">
              English
            </a>{" "}
            <a href="#" className="dropdown-item">
              Espanol
            </a>
          </div>
        </li>
        {/* <li>Contact Sales</li> */}
      </ul>
      <div className="fixed">
        <form action="">
          <input
            className="input-btn"
            type="text"
            name="search"
            placeholder="Search.."
          ></input>
        </form>
        <button type="button" className="btn btn-outline-danger login-button">
          Login
        </button>
        <button type="button" className="btn btn-danger login-button">
          Get HubSpot Free
        </button>
      </div>
    </nav>
  );
}
export default NavFixed;
