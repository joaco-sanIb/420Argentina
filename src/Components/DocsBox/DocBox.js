import React from "react";
import PropTypes from "prop-types";
import { Link } from "react-router-dom";

import "./DocBox.css";
import Colors from "../../Colors";

import DocI from "../../Images/Doc.png";
function DoxBox(props) {
  return (
    <div class="DocBox" style={{ backgroundColor: Colors.secondary }}>
      <div class="ImageC">
        <img src={DocI} />
      </div>
      <div class="TextC">
        <h1>{props.title}</h1>
        <p>{props.description}</p>
        <Link to={props.link} className="Link">
          Ir
        </Link>
      </div>
    </div>
  );
}

DoxBox.propTypes = {
  title: PropTypes.string,
  link: PropTypes.string,
  description: PropTypes.string,
  img: PropTypes.string,
};

export default DoxBox;
