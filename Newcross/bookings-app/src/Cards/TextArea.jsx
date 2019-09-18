import React from "react";
import "./card-style.css";

const TextArea = props => {
  return (
    <div>
      <span className="textarea-title"> CLIENT SUMMARY </span>
      <div className="card text-center">
        <div className="overflow">
          <div class="input-group">
            {/* <div class="input-group-prepend">
            <span class="input-group-text">CLIENT SUMMARY</span>
          </div> */}
            <textarea
              class="form-control"
              aria-label="With textarea"
              placeholder="  Please add summary of the client and why they need care..."
            ></textarea>
          </div>
        </div>
        {/* <div className="card-body text-dark">
        <a href="#" className="btn btn-outline-success"></a>
      </div> */}
      </div>
    </div>
  );
};

export default TextArea;
