import React from "react";
import "../App.css";
function NavNew() {
  const navStyle = {
    color: "white",
  };
  return (
    <div className="image-global-health">
      <h5 style={navStyle}>
        Global health and safety is our top priority.{" "}
        <a href="url" style={navStyle}>
          Learn how HubSpot is responding
        </a>{" "}
        to COVID-19 and its economic impact on the communities we serve.
      </h5>
    </div>
  );
}
export default NavNew;
