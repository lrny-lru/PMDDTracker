import React, { Component } from "react";
import DefaultContext from "./context/DefaultContext";
import { Link } from "react-router-dom";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {
  faTrashAlt,
  faEdit,
  faExpandArrowsAlt,
} from "@fortawesome/free-solid-svg-icons";

//import EditSymptomForm from './EditSymptomForm'
//import { Link } from 'react-router-dom';

class SymptomCards extends Component {
  static contextType = DefaultContext;
  deleteSymptom = () => {
    fetch(`${this.context.url}/symptoms/${this.props.id}`, {
      method: "DELETE",
      headers: {
        "content-type": "application/json",
      },
    })
      .then((res) => {
        this.context.updateStore();
        //this.props.history.push("/");
      })
      .catch((e) => {
        throw new Error(`Error deleting: ${e.message}`);
      });
  };

  render() {
    const { date, id, name, severity, description } = this.props;
    const dateString = new Date(date).toLocaleDateString();
    return (
      <li className="grid-item">
        <h4>{dateString}</h4>
        <p className="textOver">{name}</p>
        <p>Severity: {severity}</p>
        <p>{description}</p>

        <Link
          to={{
            pathname: `/home/details/${id}`,
          }}
        >
          <button
            name="expand"
            aria-label="expand"
            aria-pressed="false"
            className="symptom-button"
          >
            <FontAwesomeIcon
              icon={faExpandArrowsAlt}
              size="1x"
              alt="expand icon"
            />
          </button>
        </Link>

        <Link
          to={{
            pathname: `/home/edit/${id}`,
          }}
        >
          <button
            name="edit"
            aria-label="edit"
            aria-pressed="false"
            className="symptom-button"
          >
            <FontAwesomeIcon icon={faEdit} size="1x" alt="edit icon" />
          </button>
        </Link>
        <button
          id="delete"
          name="delete"
          aria-label="delete"
          className="symptom-button"
          onClick={this.deleteSymptom}
        >
          <FontAwesomeIcon icon={faTrashAlt} size="1x" />
        </button>
      </li>
    );
  }
}

export default SymptomCards;
