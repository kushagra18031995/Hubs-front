import React from "react";
import "../App.css";

function NavBottom() {
  const navStyle = {
    color: "white",
  };
  return (
    <nav className="navbar navbar-inverse navbar-dark bg-dark">
      <div className="container-fluid">
        <div className="navbar-header">
          <a class="navbar-brand" href="#">
            HubSpot
          </a>
        </div>
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#" style={navStyle}>
              <h5> Increase Your Traffic</h5>
            </a>
          </li>
          <li>
            <a href="#" style={navStyle}>
              Add Software
            </a>
          </li>
          <li>
            <a href="#" style={navStyle}>
              Blog Software
            </a>
          </li>
          <li>
            <a href="#" style={navStyle}>
              Social Media Software
            </a>
          </li>
        </ul>{" "}
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#" style={navStyle}>
              <h5>Connect with Leads</h5>{" "}
            </a>
          </li>
          <li>
            <a href="#" style={navStyle}>
              Find New Prospects
            </a>
          </li>
          <li>
            <a href="#" style={navStyle}>
              Email Tracking
            </a>
          </li>
          <li>
            <a href="#" style={navStyle}>
              Sales Email Templates
            </a>
          </li>
        </ul>{" "}
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#" style={navStyle}>
              <h5> Close and Manage Leads</h5>
            </a>
          </li>
          <li>
            <a href="#" style={navStyle}>
              Document Tracking Tool
            </a>
          </li>
          <li>
            <a href="#" style={navStyle}>
              Meeting Schedule Tool
            </a>
          </li>
          <li>
            <a href="#" style={navStyle}>
              Sales Automation Tool
            </a>
          </li>
        </ul>{" "}
        <ul className="nav navbar-nav">
          <li className="active">
            <a href="#" style={navStyle}>
              <h5>Support and Tools</h5>
            </a>
          </li>
          <li>
            <a href="#" style={navStyle}>
              HubSpor Partner
            </a>
          </li>
          <li>
            <a href="#" style={navStyle}>
              Join a Local User Group
            </a>
          </li>
          <li>
            <a href="#" style={navStyle}>
              PieSync Inregration
            </a>
          </li>
        </ul>{" "}
      </div>
      <button className="bottom-nav-btn">Connect HubSpot Spupport</button>
    </nav>
  );
}

export default NavBottom;
