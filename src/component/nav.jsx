import React from "react";
import "../App.css";
import image1 from "../images/image1.jpg";

function Nav() {
  return (
    <div>
      <nav className="navbar navbar-expand-sm navbar-dark bg-dark">
        <a href="#" className="navbar-brand">
          <img src={image1} alt="logo" className="image-logo"></img>
        </a>
        <ul className="navbar-nav ml-auto">
          <li className="nav-item active dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              id="servicedrop1"
            >
              Services
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                Free Hub Spot CRM
              </a>
              <a href="#" className="dropdown-item">
                Marketing Hub
              </a>{" "}
              <a href="#" className="dropdown-item">
                Sales Hub
              </a>
            </div>
          </li>

          <li className="nav-item ">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              id="pricingdrop2"
            >
              Pricing
            </a>
          </li>
          <li className="nav-item active dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              id="ressourcesdrop3"
            >
              Resources
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                Blog{" "}
              </a>
              <a href="#" className="dropdown-item">
                Customes Stores
              </a>{" "}
              <a href="#" className="dropdown-item">
                Developers
              </a>
            </div>
          </li>
          <li className="nav-item active dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              id="partnersdrop4"
            >
              Partners
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                Hire a partner
              </a>
              <a href="#" className="dropdown-item">
                Partner with us
              </a>{" "}
            </div>
          </li>
          <li className="nav-item active dropdown">
            <a
              href="#"
              className="nav-link dropdown-toggle"
              data-toggle="dropdown"
              id="aboutdrop5"
            >
              About
            </a>
            <div className="dropdown-menu">
              <a href="#" className="dropdown-item">
                Company
              </a>
              <a href="#" className="dropdown-item">
                News{" "}
              </a>{" "}
              <a href="#" className="dropdown-item">
                Investor{" "}
              </a>
            </div>
          </li>
        </ul>
      </nav>
    </div>
  );
}

export default Nav;
