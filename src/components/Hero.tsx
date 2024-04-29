// import bgImg from "../assets/images/footer-bg.webp";

const Hero = () => {
  return (
    <div
      style={{
        backgroundImage: `linear-gradient(to right, rgba(0,0,0,0.085), rgba(0,0,0,0.085)), url(./assets/images/footer-bg.webp)`,
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
      className="lg:h-[240px] md:h-[232px] sm:h-[214px] h-[196px] relative"
    >
      <h2 className="text-white font-nunito capitalize font-semibold md:text-2xl sm:text-lg absolute md:top-[40%] sm:top-[65%] xs:top-[60%] top-[57.75%]  left-1/2 -translate-x-1/2  ">
      Lights, Camera, Explore: Your Gateway to Cinematic Bliss
      </h2>
    </div>
  );
};

export default Hero;