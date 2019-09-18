import React, { Component } from "react";
import TextArea from "./TextArea";
import Dropdown from "./Dropdown";
import DatePickerWidget from "./DatePicker";
import GenderPref from "./GenderPref";
import TabbedHeader from "./ArrowHeader";

class Cards extends Component {
  render() {
    return (
      <div>
        <TabbedHeader />
        <div className="container-fluid d-flex justify-content-center">
          <div className="row">
            <div className="col-md-6">
              <TextArea />
            </div>

            <div className="col-md-6">
              <DatePickerWidget />
            </div>

            <div className="col-md-6">
              <Dropdown />
            </div>

            <div className="col-md-6">
              <GenderPref />
            </div>
          </div>
        </div>
      </div>
    );
  }
}

export default Cards;
