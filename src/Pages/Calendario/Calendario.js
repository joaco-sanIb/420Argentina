import React from "react";
import "./Calendario.css";

import Calendar_ from "../../Components/Calendario/Calendario";

class Calendar extends React.Component {
  render() {
    return (
      <div className="Caalendar">
        <h1>Claendario de Campeonatos</h1>
        <div className="Calendar_C">
          <Calendar_ />
        </div>
      </div>
    );
  }
}

export default Calendar;
