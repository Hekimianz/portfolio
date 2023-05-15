import "./App.css";
import windi from "./windi.png";
import battleship from "./battleship.png";
import cv from "./cv.png";
import doit from "./doit.png";
import library from "./library.png";
import memoron from "./memoron.png";
import tenzies from "./tenzies.png";
export default function App() {
  return (
    <main id="main-cont">
      <About />
      <Work />
    </main>
  );
}

function About() {
  return (
    <section id="about-cont">
      <div id="profile">
        <h1 id="name">Aram Hekimian</h1>
      </div>
      <div id="about-div">
        <h2 className="cont-title">About me</h2>
        <p className="about-text">
          Hi! My name is Aram Hekimian Guerrero and I'm a 24-year-old web
          developer based in Mexico City.
        </p>
        <p className="about-text">
          I have a passion for creating clean, responsive, and user-friendly
          websites that help businesses and individuals establish a strong
          online presence.
        </p>
        <p className="about-text">
          When I'm not coding, you can find me exploring new places, watching
          basketball, or simply enjoying some downtime with family and friends.
          Thank you for taking the time to get to know me a little better, and I
          hope to work with you soon!
        </p>
        <div id="socials">
          <a
            href="https://github.com/Hekimianz"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
              alt="github"
              className="socialIcon"
            />
          </a>
          <a
            href="https://www.linkedin.com/in/aram-hekimian/"
            target="_blank"
            rel="noreferrer"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-plain.svg"
              alt="linked in"
              className="socialIcon"
            />
          </a>
        </div>
      </div>
    </section>
  );
}

function Work() {
  return (
    <section id="work-cont">
      <h2 className="cont-title">My work</h2>
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
        name="CV Generator"
        desc="Curriculum Generator App."
        img={cv}
        git="https://github.com/Hekimianz/cv-application"
        live="https://hekimianz.github.io/cv-application/"
      />
      <Project
        name="Library"
        desc="App that keeps track on books you have read, or books you want to read."
        img={library}
        git="https://github.com/Hekimianz/library"
        live="https://hekimianz.github.io/library/"
      />
    </section>
  );
}

function Project(props) {
  return (
    <div className="project-cont">
      <img className="project-img" alt="" src={props.img} />
      <div className="project-info">
        <h2 className="project-title">{props.name}</h2>
        <a
          href={props.git}
          className="project-icon"
          target="_blank"
          rel="noreferrer"
        >
          <img
            alt="github"
            src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/github/github-original.svg"
          />
        </a>
        <a
          href={props.live}
          className="project-icon"
          target="_blank"
          rel="noreferrer"
        >
          <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
            <title>open-in-new</title>
            <path d="M14,3V5H17.59L7.76,14.83L9.17,16.24L19,6.41V10H21V3M19,19H5V5H12V3H5C3.89,3 3,3.9 3,5V19A2,2 0 0,0 5,21H19A2,2 0 0,0 21,19V12H19V19Z" />
          </svg>
        </a>
      </div>
      <p className="project-desc">{props.desc}</p>
    </div>
  );
}
