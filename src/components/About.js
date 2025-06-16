export default function About() {
  return (
    <section id="about-cont">
      <div id="profile">
        <h1 id="name">Aram Hekimian</h1>
      </div>
      <div id="about-div">
        <h2 className="cont-title">About me</h2>
        <p className="about-text">
          Hi, I’m Aram Hekimian Guerrero—a 27-year-old web developer with 4
          years of experience, based in Mexico City.
        </p>
        <p className="about-text">
          I’m self-taught, with a strong passion for continuous learning and
          building from the ground up. Every project in this portfolio reflects
          that mindset—from full-stack apps with decoupled architectures to
          real-time features and efficient data handling. I enjoy diving into
          new technologies and turning ideas into practical, user-focused tools.
        </p>
        <p className="about-text">
          When I’m not coding, I’m usually reading or spending time with family
          and friends. Thanks for taking the time to learn a bit about me—I look
          forward to working together.
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
