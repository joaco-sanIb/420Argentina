import React from "react";
import PropTypes from "prop-types";
import "./Horizontal_d.css";

import colors from "../../Colors";

function Disptext(props) {
  return (
    <div class="Disptext">
      <div>
        <h1 style={{ color: "aliceblue" }}>{props.title}</h1>
      </div>
      <div style={{ backgroundColor: colors.secondary }} class="textC">
        <p class="p">{props.text}</p>
      </div>
    </div>
  );
}
function Dispimage(props) {
  return (
    <div class="ImagC">
      <img class="Imag" src={props.image} alt="hello" />
    </div>
  );
}

function Horizontal_d(props) {
  return (
    <div class="Box">
      {props.LRDir ? (
        <div class="Block" style={{ backgroundColor: colors.primary }}>
          <Dispimage {...props} /> <Disptext {...props} />{" "}
        </div>
      ) : (
        <div class="Block" style={{ backgroundColor: colors.primary }}>
          <Disptext {...props} /> <Dispimage {...props} />
        </div>
      )}
    </div>
  );
}

Horizontal_d.propTypes = {
  title: PropTypes.string,
  text: PropTypes.string,
  image: PropTypes.string,

  LRDir: PropTypes.bool,
};

export default Horizontal_d;
