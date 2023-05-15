import Project from "./Project";
import windi from "../assets/windi.png";
import battleship from "../assets/battleship.png";
import doit from "../assets/doit.png";
import library from "../assets/library.png";
import memoron from "../assets/memoron.png";
import tenzies from "../assets/tenzies.png";
export default function Work() {
  return (
    <section id="work-cont">
      <h2 className="cont-title">My work</h2>
      <div id="projects-cont">
        <Project
          name="WINDi"
          desc="Weather lookup app. Built using OpenWeather API."
          img={windi}
          git="https://github.com/Hekimianz/windi"
          live="https://hekimianz.github.io/windi/"
        />
        <Project
          name="Memorón"
          desc="Pokémon themed memory game."
          img={memoron}
          git="https://github.com/Hekimianz/react-memory-card"
          live="https://hekimianz.github.io/react-memory-card/"
        />
        <Project
          name="Battleship"
          desc="Classic Battleship board game."
          img={battleship}
          git="https://github.com/Hekimianz/battleship"
          live="https://hekimianz.github.io/battleship/"
        />
        <Project
          name="Tenzies"
          desc="Fast-paced dice game that involves rolling and re-rolling ten dice to match a specific number."
          img={tenzies}
          git="https://github.com/Hekimianz/tenzies"
          live="https://hekimianz.github.io/tenzies/"
        />{" "}
        <Project
          name="DOiT"
          desc="Simple To Do App."
          img={doit}
          git="https://github.com/Hekimianz/ToDo"
          live="https://hekimianz.github.io/ToDo/"
        />
        <Project
          name="Library"
          desc="App that keeps track on books you have read, or books you want to read."
          img={library}
          git="https://github.com/Hekimianz/library"
          live="https://hekimianz.github.io/library/"
        />
      </div>
    </section>
  );
}
