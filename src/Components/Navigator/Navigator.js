import "./Navigator.css";

import { Outlet, useNavigate } from "react-router-dom";

import Banner from "../../Images/BanerTest1.jpg";
import colors from "../../Colors";

const Layout = () => {
  const navigate = useNavigate();
  return (
    <>
      <div class="ImDiv">
        <img src={Banner} id="banner" />
      </div>
      <div class="navB" style={{ backgroundColor: colors.primary }}>
        <button
          class="button"
          onClick={() => {
            navigate("/");
          }}
        >
          Home
        </button>
        <button
          class="button"
          onClick={() => {
            navigate("/Calendario");
          }}
        >
          Calendario
        </button>
        <button
          class="button"
          onClick={() => {
            navigate("/Documentos");
          }}
        >
          Documentos
        </button>
        <button
          class="button"
          onClick={() => {
            navigate("/Campeonato");
          }}
        >
          Campeonato
        </button>
      </div>

      <Outlet />
    </>
  );
};

export default Layout;
