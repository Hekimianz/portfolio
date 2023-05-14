import "./App.css";
export default function App() {
  return (
    <main id="main-cont">
      <About />
    </main>
  );
}

function About() {
  return (
    <section id="about-cont">
      <div id="profile">
        <h1 id="name">Aram Hekimian</h1>
      </div>
      <h2 id="about-title">About me</h2>
      <p className="about-text">
        Hi! My name is Aram Hekimian Guerrero and I'm a 24-year-old web
        developer based in Mexico City.
      </p>
      <p className="about-text">
        I have a passion for creating clean, responsive, and user-friendly
        websites that help businesses and individuals establish a strong online
        presence.
      </p>
      <p className="about-text">
        When I'm not coding, you can find me exploring new places, watching
        basketball, or simply enjoying some downtime with family and friends.
        Thank you for taking the time to get to know me a little better, and I
        hope to work with you soon!
      </p>
      <div id="socials">
        <a href="https://github.com/Hekimianz" target="_blank" rel="noreferrer">
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
    </section>
  );
}
