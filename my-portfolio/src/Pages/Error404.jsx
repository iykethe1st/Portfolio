import NavBar from "../components/Navbar";
import Footer from "../components/Footer";
import ButtonAccent from "../components/common/ButtonAccent";
import { Link } from "react-router-dom";

const Error404 = () => {
  return (
    <div className="grid grid-cols-1 content-between h-screen">
      <NavBar />

      <div className="grid grid-cols-1 justify-items-center items-center lg:flex lg:justify-center justify-around">
        <img
          className="lg:w-[30rem] animate__animated animate__jackInTheBox"
          src="../images/error.png"
          alt=""
        />
        <div className="flex flex-col gap-2 items-center animate__animated animate__bounce">
          <h1 className="text-slate-600">Oops... Page not found</h1>
          <Link to="/">
            <ButtonAccent label="GO HOME" />
          </Link>
        </div>
      </div>

      <Footer />
    </div>
  );
};

export default Error404;
