import React, { Component } from "react";

import "./Home.css";
import Horizontal_d from "../../Components/Horizontal_d/Horizontal_d";

const knews = {
  Bien: {
    title: "Bienvenido a nustra Pagina",
    text: "Hola emos creado estste citio para comunicarnos con ustedes. Ya seas un apasionado de los barcos o simplemente quieras adquirir nuevos conocimientos sobre la navegación, este es el lugar perfecto para ti.",
    image:
      "https://afloat.ie/media/k2/items/cache/47f367a135182d6f20ccfad18d43a891_L.jpg",
  },

  Armada: {
    title: "Se aproxima el campeonato de la Armada",
    text: "Se acerca el campeonato de la Armada,organizado por CUBA. Este es un campeonato de parque cerrado asi que los esperamos a todos en CUBA. Este sera durante los dias 24 y 25. Se espera una cantidad aproximada de 32 barcos. Entre ellos tripulaciones extranjeras. Un especial reconocimiento al CUBA y agradeciemiento por dejarnos usar su sede, su lancha de apoyo, y el quincho para los terceros tiempos @nauticacuba y al CNSI @cnsi.equipodevela , al CNSE @sudestenavega, al CVB @cvb por brindarnos lanchas de apoyo para todos los chicos.",
    image:
      "https://www.cuba.org.ar/sites/default/files/styles/cuba_full/public/armada_2023.jpg?itok=OI3djUuy",
  },
  hola: {
    title: "Se termino el SIL",
    text: "Y se terminó el SIL, un campeonato de condiciones de mucha calma que limitaron la cantidad de regatas realizadas, pero se lograron cocretar unas desafiantes 10 regatas. Felicitamos a todos los competidores, llegamos a ser una flota de 34 barcos! Podio: 🥇Federico Warburg y Delfina Perry 🥈Beltran Lepori y Pedro Bianchi 🥉Diego Pasquariello e Ian Vescio. Además, en este campeonato se finalizó el selectivo para el mundial juvenil en Buzios, Brasil 2023 donde nos representarán Federico Warburg, Delfina Perry, Lola Kakias y Malena Carmuega. 💪🇦🇷 Felicitaciones a todos y muchas gracias @cnsi_sil por la organización y los ricos tercer tiempos! ",
    image:
      "https://cdn.myportfolio.com/6b706a5e-5af3-466e-930e-f5d7bf8562cf/8e546673-23de-41c0-94ac-153760404c4e_rw_1200.jpg?h=54fec789b7be6627545330b7f48d2626",
  },
  Contactos: {
    title: "Nuestros contactos",
    text: "Si necesitan contactarse con nosotros pueden hacerlo en nuestro instagram,420argentina, o por el grupo de whats app. Tamien esta disponible el mail de la clase, Por ontactarse por temas personal pueden usar el siguiente numero: +54 911 345726789",
    image:
      "https://cdn.myportfolio.com/6b706a5e-5af3-466e-930e-f5d7bf8562cf/b59f46d2-c480-46b8-a5dd-594f7d0b4b17_rw_1200.jpg?h=458fe53e03c50e0ae06d0a5247077b09",
  },
};
export class Home extends Component {
  static propTypes = {};
  state = {};

  render() {
    return (
      <div class="Main">
        {Object.keys(knews).map(function (key, index) {
          return (
            <Horizontal_d key={index} LRDir={(index + 1) % 2} {...knews[key]} />
          );
        })}
      </div>
    );
  }
}

export default Home;
