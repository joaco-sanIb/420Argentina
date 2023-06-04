import "./Campeonato.css";
import React, { Component } from "react";

import Position from "../../Components/Position/Position";

const results = require("./output.json");

export class Campeonato extends Component {
  render() {
    return (
      <div class="Campeonato">
        <h1>Campeonato</h1>
        <Position arr={results.data} />;
      </div>
    );
  }
}

export default Campeonato;
