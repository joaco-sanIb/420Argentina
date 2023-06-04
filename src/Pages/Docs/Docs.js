import PropTypes from "prop-types";
import React, { Component } from "react";

import "./Docs.css";
import DocBox from "../../Components/DocsBox/DocBox";

const Documentos = {
  Reglas: {
    title: "Reaglas de la clase",
    description:
      "Reglas de la clase 420 internacional. Son las reglas de toda la clase",
    img: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
    link: "https://www.420sailing.org/content/420-class-rules",
  },
  Estatuto: {
    title: "Estatuto de la Clase",
    description:
      "Estatuto de la clase 420 argentina. Explica reglas que la comision derectiva debe de seguir",
    img: "https://cdn-icons-png.flaticon.com/512/337/337946.png",
    link: "https://docs.google.com/document/d/1siCHpnFzAdp5BB7DKOegRdZRLsnmhqvR/edit",
  },
};
export class Docs extends Component {
  static propTypes = {};

  render() {
    return (
      <div>
        <h1>Documentos</h1>
        <div class="Docs">
          {Object.keys(Documentos).map(function (key, index) {
            return <DocBox key={index} {...Documentos[key]} />;
          })}
        </div>
      </div>
    );
  }
}

export default Docs;
