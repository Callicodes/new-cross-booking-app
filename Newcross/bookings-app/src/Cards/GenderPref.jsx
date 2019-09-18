import React from "react";
import "./card-style.css";

const GenderPref = props => {
  return (
    <div className="genderpref-title">
      <span>STAFF GENDER PREFERENCES</span>
      <div className="card text-center1">
        <div className="overflow">
          <div className="input-group-gender">
            <div className="input-group-prepend"></div>

            <input
              type="checkbox"
              class="form-check-input1"
              id="exampleCheck2"
            ></input>
            <span className="genderpref-text">None</span>

            <input
              type="checkbox"
              class="form-check-input2"
              id="exampleCheck2"
            ></input>

            <span className="genderpref-text">Male</span>

            <input
              type="checkbox"
              class="form-check-input3"
              id="exampleCheck2"
            ></input>

            <span className="genderpref-text">Female</span>
          </div>
        </div>
        <div className="card-body text-dark">
          {/* <a href="#" className="btn btn-outline-success"></a> */}
        </div>
      </div>
    </div>
  );
};

export default GenderPref;
