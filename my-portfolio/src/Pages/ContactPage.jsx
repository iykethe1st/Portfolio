import Contact from "../components/Contact";
import Footer from "../components/Footer";
import NavBar from "../components/Navbar";

const ContactPage = () => {
  return (
    <div className="h-screen flex flex-col">
      <NavBar />
      <Contact />
      <Footer />
    </div>
  );
};

export default ContactPage;
