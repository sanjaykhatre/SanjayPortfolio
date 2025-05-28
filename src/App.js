import logo from "./logo.svg";
import "./App.css";
import Home from "./components/home";
import ZoomImage from "./components/ZoomImage";
import Experience from "./components/Experience";
import ScrollZoom from "./components/ScrollZoom";
import Navbar from "./components/Navbar";
// import Projects from "./components/Projects";
import ProjectsScroll from "./components/ProjectScroll";
import Contact from "./components/Contact";

function App() {
  return (
    <>
      <Navbar />
      <div id="home">
        <Home />
      </div>
      <div id="about">
        <ScrollZoom />
      </div>
      <div id="projects">
        <ProjectsScroll />
      </div>
      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
