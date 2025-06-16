import Project from './Project';
import windi from '../assets/windi.png';
import inventory from '../assets/inventory.png';
import ribbit from '../assets/ribbit.png';
import thoughtSpill from '../assets/thoughtSpill.png';
import comet from '../assets/comet.png';
import findIt from '../assets/findIt.png';
export default function Work() {
  return (
    <section id="work-cont">
      <h2 className="cont-title">My work</h2>
      <div id="projects-cont">
        <Project
          name="ThoughtSpill"
          desc="Book blog with a decoupled architecture: a separate backend and two frontends—one public for reading posts and one private for admin management—highlighting flexible, modular development."
          img={thoughtSpill}
          git="https://github.com/Hekimianz/thoughtSpill"
          live="https://thoughtspill.netlify.app/"
        />
        <Project
          name="Inventory Master"
          desc="Efficient inventory management using React, Node.js, PostgreSQL."
          img={inventory}
          git="https://github.com/Hekimianz/inventoryMaster"
          live="https://inventorymaster.onrender.com/"
        />
        <Project
          name="Comet"
          desc="A lightweight messaging app built with modern web technologies for fast, real-time communication. It features secure user authentication, one-on-one private chats, WebSocket-powered instant messaging, and a responsive, intuitive interface across devices."
          img={comet}
          git="https://github.com/Hekimianz/comet"
          live="https://comet-messenger.netlify.app/"
        />
        <Project
          name="FindIt"
          desc="Inspired by 'Where’s Waldo,' where players search for hidden characters in themed illustrations. It uses React Router for navigation, an Express API for game logic, and Prisma for database management."
          img={findIt}
          git="https://github.com/Hekimianz/findIt"
          live="https://findit-hek.netlify.app/"
        />
        <Project
          name="WiNDi"
          desc="Weather app built using OpenWeather API."
          img={windi}
          git="https://github.com/Hekimianz/windi"
          live="https://hekimianz.github.io/windi/"
        />
        <Project
          name="Ribbit (Currently Building)"
          desc="A full-featured Reddit clone with user authentication, built with a Node/Express backend, PostgreSQL, and Prisma for database management."
          img={ribbit}
          git="https://github.com/Hekimianz/ribbit"
          live="https://github.com/Hekimianz/ribbit"
        />
      </div>
    </section>
  );
}
