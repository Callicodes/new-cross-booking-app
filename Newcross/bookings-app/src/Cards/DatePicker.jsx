import React from "react";
import "./card-style.css";

const DatePickerWidget = props => {
  return (
    <div>
      <span className="package-title">DURATION OF PACKAGE</span>

      <div className="card text-center1">
        <div className="overflow">
          <label for="startdate" className="startdate-title"></label>
          <div className="datepicker-container"> </div>
          <span className="enddate-title">
            End Date{" "}
            <input
              type="checkbox"
              class="form-check-input4"
              id="exampleCheck4"
            ></input>
            <input
              type="checkbox"
              class="form-check-input4"
              id="exampleCheck4"
            ></input>
          </span>

          <span className="startdate-title">Start Date</span>

          <input
            className="datepicker"
            type="date"
            name="startdate"
            id="startdate"
            placeholder="dd/mm/yyyy"
          ></input>

          {/* <input
            type="checkbox"
            class="form-check-input"
            id="exampleCheck1"
          ></input>

          <input
            type="checkbox"
            class="form-check-input2"
            id="exampleCheck2"
          ></input> */}
        </div>
      </div>
    </div>
  );
};

export default DatePickerWidget;
