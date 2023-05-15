import "./App.css";
import About from "./components/About.js";
import Work from "./components/Work";
import Skills from "./components/Skills";
import Contact from "./components/Contact";
export default function App() {
  return (
    <main id="main-cont">
      <About />
      <Work />
      <Skills />
      <Contact />
    </main>
  );
}
