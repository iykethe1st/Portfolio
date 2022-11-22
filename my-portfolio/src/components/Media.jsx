import ButtonSecondary from "./common/ButtonSecondary";

const Media = () => {
  return (
    <section className="grid grid-cols-1 lg:flex lg:justify-around text-[#000c24] p-8 gap-8 lg:gap-0 justify-items-center items-center">
      <div className="px-8" data-aos="slide-right">
        <picture srcset="images/me.png 1x, images/me@2x.png 2x">
          <img
            className="md:w-[23rem] md:h-[23rem] rounded-full ring-[#000c24] ring-4 shadow-lg shadow-slate-800"
            src="images/me@2x.webp"
            alt=""
          />
        </picture>
      </div>
      <div className="md:w-[30rem] md:h-[23rem] flex flex-col ring-[#000c24] ring-4 p-8 mx-4 lg:mx-0 rounded shadow-lg shadow-slate-800">
        <h1 className="font-semibold text-[#f44336]">About Me</h1>
        <span className="text-lg md:text-xl font-medium">
          I'm a Software Engineer with 4 years+ working experience. I'm
          proficient in Javascript, HTMl/CSS, Python, C and Solidity and I've
          worked with Frameworks like React, Vue, Django, Node JS, Want to know
          more? ...
        </span>

        <div className="py-6 mx-auto lg:mx-0">
          <ButtonSecondary label="Read more" />
        </div>
      </div>
    </section>
  );
};

export default Media;
