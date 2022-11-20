const Hero = () => {
  return (
    <section class="hero grid--1x2" data-aos="zoom-in">
      <div class="hero__content">
        <h2 class="hero__heading">IKENNA UDEMEZUE</h2>
        <p class="hero__profession">Software Engineer + Full Stack Developer</p>
        <div class="hero__icons">
          <a href="https://github.com/iykethe1st" target="_blank">
            <svg class="icon icon--secondary">
              {/* <use xlink:href="images/svg-sprite.svg#github-brands"></use> */}
            </svg>
          </a>
          <a
            href="https://www.linkedin.com/in/ikenna-udemezue-90b1b121a/"
            target="_blank"
          >
            {" "}
            <svg class="icon icon--secondary">
              <use xlink:href="images/svg-sprite.svg#linkedin-brands"></use>
            </svg>
          </a>

          <a href="https://twitter.com/X_iyke" target="_blank">
            {" "}
            <svg class="icon icon--secondary">
              <use xlink:href="images/svg-sprite.svg#square-twitter-brands"></use>
            </svg>
          </a>
        </div>
        <a href="contact.html" target="">
          {" "}
          <button class="btn btn--secondary">Hire Me</button>
        </a>
      </div>
      <div class="hero__image">
        <img src="images/fullstack.png" alt="" />
      </div>
    </section>
  );
};

export default Hero;
