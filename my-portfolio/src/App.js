import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.css";
import "./css/normalize.css";
import "animate.css";
import AOS from "aos";
import "aos/dist/aos.css";
import Home from "./Pages/Home";
import Error404 from "./Pages/Error404";
import About from "./Pages/About";
import ContactPage from "./Pages/ContactPage";
import Projects from "./Pages/Projects";
// ..
AOS.init();

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />}></Route>
        <Route path="/about-me" element={<About />}></Route>
        <Route path="/contact-me" element={<ContactPage />}></Route>
        <Route path="/some-projects" element={<Projects />}></Route>
        <Route path="*" element={<Error404 />}></Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
