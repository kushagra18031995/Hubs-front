import React from "react";
function CardsNew() {
  const navStyle = {
    color: "white",
  };
  return (
    <div className="card-backgroun-text">
      <div className="card card-hover">
        <div className="card-deck card-margin">
          <div className="card card-hover">
            <div className="card-body text-center">
              <div className="card-body card border-secondary mb-3">
                <h5 className="card-title">Marketing Hub</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Marketing software to help you grow traffic, convert more
                  visitors, and run complete inbound marketing campaigns at
                  scale.
                </h6>
                <p className="card-text">
                  <h1>POPULAR FEATURES</h1>
                  <ul>
                    <li>Lead Generation</li>
                    <li>Marketing Automation</li>
                    <li>Analytics</li>
                  </ul>{" "}
                </p>
                <button type="button" class="btn btn-danger">
                  {" "}
                  <a href="#" className="card-link" style={navStyle}>
                    Get Started
                  </a>
                </button>
              </div>{" "}
            </div>
          </div>
          <div className="card  card-hover">
            <div className="card-body text-center">
              <div className="card-body card border-secondary mb-3">
                <h5 className="card-title">Sales Hub</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Time-saving sales software that helps you get deeper insights
                  into prospects, automate the tasks you hate, and close more
                  deals faster.
                </h6>
                <p className="card-text">
                  <h1>POPULAR FEATURES</h1>
                  <ul>
                    <li>Email Tracking</li>
                    <li>Meeting Schedulings</li>
                    <li>Email Automation</li>
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
              <div className="card-body card border-secondary mb-2">
                <h5 className="card-title">Service Hub</h5>
                <h6 className="card-subtitle mb-2 text-muted">
                  Customer service software to help you connect with customers,
                  exceed expectations, and turn them into promoters that grow
                  your business.
                </h6>
                <p className="card-text">
                  <h1>POPULAR FEATURE</h1>
                  <ul>
                    <li>Tickets</li>
                    <li>Customer Feedback</li>
                    <li>Knowledge Base</li>
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
        </div>
      </div>
    </div>
  );
}
export default CardsNew;
