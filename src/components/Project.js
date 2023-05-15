export default function Project(props) {
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
