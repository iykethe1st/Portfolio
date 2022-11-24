import NavBar from "../components/Navbar";
import Hero from "../components/Hero";
import Media from "../components/Media";
import Skills from "../components/Skills";
import Recommendations from "../components/Recommendations";
import Contact from "../components/Contact";
import Footer from "../components/Footer";

const Home = () => {
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
};

export default Home;
