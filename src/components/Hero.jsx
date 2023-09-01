import { motion } from "framer-motion";

import { styles } from "../styles";
import { ComputersCanvas } from "./canvas";

const Hero = () => {
  return (
    <section className="h-screen relative w-full mx-auto">
      <div
        className={`${styles.paddingX} absolute inset-0 top-[120px] max-w-7xl mx-auto flex flex-row items-start gap-5`}
      >
        <div className="flex flex-col justify-center items-center mt-5">
          <div className="bg-[#915eff] h-5 w-5 rounded-full" />
          <div className="violet-gradient w-1 sm:h-80 h-40" />
        </div>

        <div>
          <h1 className={`${styles.heroHeadText} text-white`}>
            Hi, I'm <span className="text-[#915eff]">Justice</span>{" "}
          </h1>

          <p className={`${styles.heroSubText} mt-2 text-white`}>
            I create amazing websites using the most{" "}
            <br className="sm:block hidden" /> trendiest and updated
            technologies.
          </p>
        </div>
      </div>

      <ComputersCanvas />
    </section>
  );
};

export default Hero;
