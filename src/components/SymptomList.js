import React, { Component } from "react";
import { Link, withRouter } from "react-router-dom";
import SymptomCards from "./SymptomCards";
import DefaultContext from "./context/DefaultContext";
import Sidebar from "./Sidebar";

class SymptomList extends Component {
  static contextType = DefaultContext;

  generateSymptomList = () => {
    if (typeof this.props.store !== "object") return;

    return this.props.store.symptoms.map((symptom) => {
      return (
        <SymptomCards
          key={symptom.id}
          id={symptom.id}
          date={symptom.date}
          name={symptom.name}
          severity={symptom.severity}
          store={this.props.store}
        />
      );
    });
  };

  render() {
    return (
      <section className="log main">
        <ul className="flex-grid">{this.generateSymptomList()}</ul>
      </section>
    );
  }
}

export default SymptomList;
