import React, { Component } from "react";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faPlus } from "@fortawesome/free-solid-svg-icons";
import AddSymptomForm from "./AddSymptomForm";

class Sidebar extends Component {
  state = {};

  render() {
    return (
      <div className="sidebar">
        {/* <h3>Your log</h3>
        <div>
          <Link to={"/home/addsymptom"}>
            <button className="start-button">
              <FontAwesomeIcon icon={faPlus} /> Add Symptom
            </button>
          </Link>
        </div> */}
        <div>
          <label htmlFor="organize">Sort symptoms</label>
          <select
            name="organize"
            id="organize"
            onChange={(e) => {
              this.props.sortList(e.target.value);
            }}
          >
            <option className="hidden">Sort</option>
            <option value="date">Date</option>
            <option value="severity">Severity</option>
          </select>
        </div>
        <AddSymptomForm />
      </div>
    );
  }
}

export default Sidebar;
