import React from "react";
import "./card-style.css";
import "../../src/skills.json";

class Dropdown extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "Paediatric Nurse" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    alert("Your selection is: " + this.state.value);
    event.preventDefault();
  }

  render() {
    const SkillsList = require("../../src/skills.json");
    return (
      <div className="skills-title">
        SKILLS & COMPETENCIES REQUIRED
        <div className="card text-center">
          <div className="overflow">
            <div>
              <form onSubmit={this.handleSubmit} className="dropdown">
                Select Skill or Competency
                {/* <label>
            Pick your favorite flavor:
            <select value={this.state.value} onChange={this.handleChange}>
              <option value="grapefruit">Grapefruit</option>
              <option value="lime">Lime</option>
              <option value="coconut">Coconut</option>
              <option value="mango">Mango</option>
            </select>
          </label> */}
                {/* <br />
          <br /> */}
                <label>
                  <select
                    value={this.state.value}
                    onChange={this.handleChange}
                    className="select1"
                  >
                    {SkillsList.skills.map(item => (
                      <option key={item} value={item}>
                        {item}
                      </option>
                    ))}
                    {console.log(this.state.SkillsList)}
                  </select>
                </label>
                {/* <input type="submit" value="Submit" /> */}
              </form>

              <a href="#">
                {" "}
                <p className="add-skill"> + Add Additional Skill</p>
              </a>
            </div>
          </div>
        </div>
        <a href="#" className="btn btn-outline-success">
          NEXT
        </a>
      </div>
    );
  }
}
export default Dropdown;
