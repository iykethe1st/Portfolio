import { AiFillTwitterCircle, AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";

const Footer = () => {
  return (
    <div className="bg-[#000c24] flex flex-col items-center">
      <h1 className="hero__heading">Ikenna Udemezue</h1>
      <div className="flex gap-2">
        <a href="https://github.com/iykethe1st" target="blank">
          <AiOutlineGithub className="w-[2rem] h-[2rem] hover:text-[#f44336] active:text-[#af504acf]" />
        </a>
        <a href="https://www.linkedin.com/in/iyke-udemezue/" target="blank">
          <FaLinkedin className="w-[2rem] h-[2rem] hover:text-[#f44336] active:text-[#af504acf]" />
        </a>
        <a href="https://twitter.com/X_iyke">
          <AiFillTwitterCircle className="w-[2rem] h-[2rem] hover:text-[#f44336] active:text-[#af504acf]" />
        </a>
      </div>
      <span className="py-4">All rights reserved © 2022 Ikenna Udemezue</span>
    </div>
  );
};

export default Footer;
