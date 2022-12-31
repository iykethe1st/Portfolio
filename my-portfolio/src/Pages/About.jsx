import React, { Component } from "react";

import NavBar from "../components/Navbar";
import Media from "../components/Media";
import Footer from "../components/Footer";
import ButtonSecondary from "../components/common/ButtonSecondary";

const About = () => {
  return (
    <div className="h-screen grid grid-cols-1 content-between">
      <NavBar />
      <section className="grid grid-cols-1 lg:flex lg:justify-around text-[#000c24] p-8 gap-8 lg:gap-0 justify-items-center items-center">
        <div className="px-8" data-aos="slide-right">
          <picture srcSet="images/me.png 1x, images/me@2x.png 2x">
            <img
              className="md:w-[23rem] md:h-[23rem] rounded-full ring-[#000c24] ring-4 shadow-lg shadow-slate-800"
              src="images/me@2x.webp"
              alt=""
            />
          </picture>
        </div>
        <div
          className="md:w-[30rem]  flex flex-col ring-[#000c24] ring-4 p-8 mx-4 lg:mx-0 rounded shadow-lg shadow-slate-800"
          data-aos="slide-left"
        >
          <h1 className="font-semibold text-[#f44336]">About Me</h1>
          <span className="text-lg md:text-xl font-medium">
            I'm a Software Engineer with 3+ years working experience. I'm
            proficient in Javascript, HTML/CSS, Python, C and Solidity and I've
            worked with Frameworks like React, Vue, Django, Node JS.
          </span>
          <br />
          <span className="text-lg md:text-xl font-medium">
            I'm currently studying Software Engineering at African Leadership
            Unversity, set to graduate in the summer of 2023.
          </span>
          <a
            href="https://www.canva.com/design/DAFWUE25Eus/kNdbUS3T43L5Z0z7Fyl8KA/edit?utm_content=DAFWUE25Eus&utm_campaign=designshare&utm_medium=link2&utm_source=sharebutton"
            className="mt-4"
            target="blank"
          >
            <ButtonSecondary label="View Resume" />
          </a>
        </div>
      </section>
      <Footer />
    </div>
  );
};

export default About;
