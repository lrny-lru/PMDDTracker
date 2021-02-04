import React from "react";

import { Link } from "react-router-dom";

const Header = () => {

  return (
    <header className="header">
        <div className="header_flex ">
          <Link
            to={{
              pathname: `/`,
            }}
          >
            <h1 id="logo">PMDDTracker</h1>
          </Link>
        </div>
        <div className="headerBar"></div>
      
    </header>
  );
};

export default Header;
