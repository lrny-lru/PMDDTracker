import React, { Component } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faCircleNotch, faHourglassHalf } from "@fortawesome/free-solid-svg-icons";
import { Link } from "react-router-dom";
import patterns from '../images/patterns.png'


class LandingPage extends Component {
  state = {};
  render() {
    return (
      <div className="wrapper landing_bar">
        <div className="landing_left ">
          <h1>
            Open option tracker for more than just PMS <br />
          </h1>

          <i class="fas fa-hourglass-half"></i>

          
          
        </div>
        <ul className="landing_right">
        <FontAwesomeIcon class="itsThatTime" icon={faHourglassHalf}  size="4px" alt="hourglass half full" />
          
          <li>
          
            <FontAwesomeIcon icon={faCircleNotch} size="xs" alt="expand icon" />{" "}
            view by severity
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleNotch} size="xs" alt="expand icon" />{" "}
            sort by date
          </li>
          <li>
            <FontAwesomeIcon icon={faCircleNotch} size="xs" alt="expand icon" />{" "}
            take control
          </li>
          
          <Link to={{ pathname: `/home` }}>
            <button className="start-button">Get Started</button>
          </Link>
        </ul>
      </div>
    );
  }
}

export default LandingPage;
