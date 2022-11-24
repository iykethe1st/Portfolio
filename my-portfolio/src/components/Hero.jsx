import { AiFillTwitterCircle, AiOutlineGithub } from "react-icons/ai";
import { FaLinkedin } from "react-icons/fa";
import Fullstack from "../images/fullstack.png";
import ButtonPrimary from "./common/ButtonPrimary";
const Hero = () => {
  return (
    <section
      className="grid grid-cols-1 lg:flex skew-right justify-around bg-[#000c24] gap-[3rem] lg:gap-0 px-4 pt-8 pb-[5rem]"
      data-aos="zoom-in"
    >
      <div className="flex flex-col items-center my-auto">
        <div className="flex flex-col items-center">
          <h4 className="text-4xl hero__heading font-semibold px-8">
            IKENNA UDEMEZUE
          </h4>

          <h1 className="text-[1.2rem] md:text-[1.4rem] font-medium">
            Software Enginner + Full Stack Developer
          </h1>
        </div>
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
        <div className="py-4">
          <ButtonPrimary label="Hire Me" />
        </div>
      </div>
      <div className="mx-auto lg:mx-0 border-4 rounded-full">
        <img src={Fullstack} alt="" className="h-[15rem] lg:h-[25rem]" />
      </div>
    </section>
  );
};

export default Hero;
