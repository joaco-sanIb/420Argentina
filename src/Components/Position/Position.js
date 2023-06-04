import React from "react";
import PropTypes from "prop-types";

import "./Position.css";
import "../../Colors.js";
import colors from "../../Colors.js";

function Position(props) {
  return (
    <div class="Column">
      <ul class="ylist">
        {props.arr.map((values, index_y) => {
          return (
            <li
              key={index_y}
              class="yComponent"
              style={
                index_y % 2
                  ? { backgroundColor: colors.tertiary }
                  : { backgroundColor: colors.quaternary }
              }
            >
              {
                <ul class="xlist">
                  {values.map((value, index_x) => {
                    return (
                      <li class="xComponent" key={index_x}>
                        {value}
                      </li>
                    );
                  })}
                </ul>
              }
            </li>
          );
        })}
      </ul>
    </div>
  );
}

Position.propTypes = {
  sail: PropTypes.string,
  name: PropTypes.string,
  score: PropTypes.string,
};

export default Position;
