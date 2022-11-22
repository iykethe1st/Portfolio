import logo from "./logo.svg";
import "./App.css";
// import "./css/style.css";
import "./css/normalize.css";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import AOS from "aos";
import "aos/dist/aos.css"; // You can also use <link> for styles
import Media from "./components/Media";
import Skills from "./components/Skills";
import Recommendations from "./components/Recommendations";
import Contact from "./components/Contact";
import Footer from "./components/Footer";
// ..
AOS.init();

function App() {
  return (
    <div>
      <NavBar />
      <Hero />
      <Media />
      <Skills />
      <Recommendations />
      <Contact />
      <Footer />
    </div>
  );
}

export default App;
