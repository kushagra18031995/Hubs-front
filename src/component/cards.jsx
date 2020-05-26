import React from "react";
function Cards() {
  const navStyle = {
    color: "white",
  };
  return (
    <div className="card-backgroun-text">
      <div className="class card text left">
        <h1>Powerful alone. Better together.</h1>
        <p>
          {" "}
          HubSpot offers a full stack of software for marketing, sales, and
          customer service, with a completely free CRM at its core. They’re
          powerful alone — but even better when used together.
        </p>
      </div>
      <div className="card">
        <div className="card-deck">
          <div className="card card-hover">
            <div className="card-body text-center">
              <div className="card-body card border-secondary mb-3">
                <h5 className="card-title">Free HubSpot CRM</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Everything you need to organize, track, and build better
                  relationships with leads and customers. Yes, it's 100% free.
                  Forever.
                </h6>
                <p className="card-text">
                  <h1>POPULAR FEATURES</h1>
                  <ul>
                    <li>Contact</li>
                    <li>Insights</li>
                    <li>Deals</li>
                    <li>Tasks</li>
                  </ul>{" "}
                </p>
                <button type="button" class="btn btn-danger">
                  {" "}
                  <a href="#" className="card-link" style={navStyle}>
                    Get Free CRM
                  </a>
                </button>
              </div>{" "}
            </div>
          </div>
          <div className="card  card-hover">
            <div className="card-body text-center">
              <div className="card-body  card border-secondary mb-3">
                <h5 className="card-title">CMS Hub</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Content management software that’s flexible for marketers,
                  powerful for developers, and gives customers a personalized,
                  secure experience.
                </h6>
                <p className="card-text">
                  <h1>POPULAR FEATURES</h1>
                  <ul>
                    <li>Drag-and-Drop Editor</li>
                    <li>SEO Recommendations</li>
                    <li>Website Themes</li>
                  </ul>{" "}
                </p>
                <button type="button" class="btn btn-danger">
                  {" "}
                  <a href="#" className="card-link" style={navStyle}>
                    Get started
                  </a>
                </button>
              </div>{" "}
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
export default Cards;
