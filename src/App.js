import "./App.css";
import Home from "./components/home";
import ScrollZoom from "./components/ScrollZoom";
import Navbar from "./components/Navbar";
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

      <div id="contact">
        <Contact />
      </div>
    </>
  );
}

export default App;
