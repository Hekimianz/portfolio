import Project from "./Project";
import windi from "../assets/windi.png";
import routem from "../assets/routem.png";
import bookhaven from "../assets/bookhaven.png";
import battleship from "../assets/battleship.png";
import doit from "../assets/doit.png";
import library from "../assets/library.png";
import inventory from "../assets/inventory.png";
import tenzies from "../assets/tenzies.png";
import mountain from "../assets/mountain.png";
export default function Work() {
  return (
    <section id="work-cont">
      <h2 className="cont-title">My work</h2>
      <div id="projects-cont">
        <Project
          name="Mountain Harmony"
          desc="Online tea shop PERN app, with user authentication. Built with React, React Routing, Express.js, Node.js, hooked up to a PostgreSQL database."
          img={mountain}
          git="https://github.com/Hekimianz/mountain-harmony"
          live="https://github.com/Hekimianz/mountain-harmony"
        />
        <Project
          name="Inventory Master"
          desc="Efficient inventory management using React, Node.js, PostgreSQL."
          img={inventory}
          git="https://github.com/Hekimianz/inventoryMaster"
          live="https://inventorymaster.onrender.com/"
        />
        <Project
          name="Bookhaven"
          desc="Book e-shop. Built with Redux, React, React Routing and Redux toolkit."
          img={bookhaven}
          git="https://github.com/Hekimianz/bookhaven"
          live="https://bookhaven-hekimian.netlify.app"
        />
        <Project
          name="Gotta Routtem All"
          desc="Pokemon lookup app. Built with React, React Routing"
          img={routem}
          git="https://github.com/Hekimianz/gotta-routem-all"
          live="https://gotta-route-em-all.netlify.app"
        />
        <Project
          name="Tenzies"
          desc="Fast-paced dice game that involves rolling and re-rolling ten dice to match a specific number."
          img={tenzies}
          git="https://github.com/Hekimianz/tenzies"
          live="https://hekimianz.github.io/tenzies/"
        />{" "}
        <Project
          name="WiNDi"
          desc="Weather app built using OpenWeather API."
          img={windi}
          git="https://github.com/Hekimianz/windi"
          live="https://hekimianz.github.io/windi/"
        />
      </div>
    </section>
  );
}
