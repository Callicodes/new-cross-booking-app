import React from "react";
import "./card-style.css";

const TabbedHeader = props => {
  return (
    // <div class="container">
    <div className="wrapper">
      <div className="arrow-steps clearfix">
        <div className="step current">
          {" "}
          <span>
            <span className="dot1">1</span> General Information
          </span>{" "}
        </div>
        <div class="step">
          {" "}
          <span>
            <span className="dot2">2</span>Package Details
          </span>{" "}
        </div>
      </div>
      {/* <div class="nav clearfix">
        <a href="#" class="prev">
          Previous
        </a>
        <a href="#" class="next pull-right">
          Next
        </a>
        {/* </div> */}
      {/* </div> */}
    </div>
  );
};

export default TabbedHeader;
