import React, { Component } from "react";

import { BrowserRouter, Routes, Route } from "react-router-dom";

import Layout from "./Components/Navigator/Navigator.js";
import Home from "./Pages/Home/Home.js";
import Docs from "./Pages/Docs/Docs.js";
import Campeonato from "./Pages/Campeonato/Campeonato";
import Calendario from "./Pages/Calendario/Calendario";

export class App extends Component {
  render() {
    return (
      <BrowserRouter class="App">
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Home />} />
            <Route path="Documentos" element={<Docs />} />
            <Route path="Calendario" element={<Calendario />} />
            <Route path="Campeonato" element={<Campeonato />} />
          </Route>
        </Routes>
      </BrowserRouter>
    );
  }
}

export default App;
