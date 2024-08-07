import React from "react";
import PropTypes from "prop-types";
import { ReactComponent as PrintIcon } from "../../assets/icons/print.svg";
import CV from "../../assets/icons/CV.png";

import "./Header.scss";

const Header = ({ onClick = () => {} }) => {
  return (
    <header className="Header">
      <div className="ui-container">
        <div className="Header_content">
          <span className="Header_logo">
            <img src={CV} alt="" />
            Cv builder</span>
          <div className="print_color">
            <button className="ui-button isLink" onClick={onClick}>
              <PrintIcon style={{ marginRight: "0.6rem" }} />
              Print
            </button>
          </div>
        </div>
      </div>
    </header>
  );
};

Header.propTypes = {
  onClick: PropTypes.func,
};

export default Header;
