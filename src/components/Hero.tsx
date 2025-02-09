import RadialGradient from "./RadialGradient";
import { scrollTo } from "./util";
import kdevUrl from "../assets//myimage2.png";
import {  motion } from 'framer-motion';

function Hero() {
  const containerVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { 
        // duration: 0.5, 
        when: "beforeChildren",
        staggerChildren: 0.2,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, y: 20 },
    visible: { 
      opacity: 1, 
      y: 0,
      transition: { duration: 0.5 }
    }
  };

  return (
    <motion.section
      id="hero"
      className="px-6 py-32 sm:py-48 lg:px-8 lg:py-72"
      initial="hidden"
      animate="visible"
      variants={containerVariants}
    >
      <br/>
      <div className="mx-auto max-w-5xl">
        <div className="flex flex-col lg:flex-row lg:items-center lg:space-x-20">
          <motion.div 
            className="relative mx-auto my-auto mb-8 aspect-square w-full max-w-[275px] items-center lg:mx-0 lg:mb-0"
            variants={itemVariants}
          >
            <div className="absolute inset-0 z-10 translate-x-[-22.5%] translate-y-[-20%]">
              <RadialGradient width={400} height={400} className="absolute" />
            </div>
            <img
              src={kdevUrl}
              className="relative z-20 mt-10 rounded-full object-cover opacity-80 sm:mt-0 sm:h-full sm:w-full"
              alt="Kushal's avatar"
            />
          </motion.div>
          <div className="text-left">
            <motion.h1 
              className="text-5xl font-extrabold tracking-tight text-white sm:text-6xl"
              variants={itemVariants}
            >
              Hello, I'm{" "}
              <span className="to-accent bg-gradient-to-br from-purple-400 bg-clip-text font-bold text-transparent">
              Navani
              </span>{" "}
              👋 .
            </motion.h1>
            <motion.p 
              className="mb-10 mt-6 text-xl leading-8 text-gray-300"
              variants={itemVariants}
            >
              I'm a <strong>Software Engineer</strong> & <strong>Ml Practitioner</strong> with a bachelors of Engineering in 
              Computer Science from Bannari Ammam Institue of Technology, Erode.
              <br />
              Dive into my latest experience, projects, and education, where I
              showcase my expertise in creating cutting-edge technology across
              various platforms.
            </motion.p>
            <motion.div variants={itemVariants}>
              <button
                onClick={() => {
                  scrollTo("contact");
                }}
                className="to-accent cursor-pointer rounded-md bg-gradient-to-br from-purple-500 px-3.5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-gradient-to-br hover:from-purple-600 hover:to-purple-900 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-indigo-600"
              >
                Message
              </button>
              <button
                onClick={() => {
                  scrollTo("experience");
                }}
                className="ml-6 cursor-pointer text-sm font-semibold leading-6 text-white hover:text-gray-300"
              >
                Scroll down<span aria-hidden="true"> ↓</span>
              </button>
            </motion.div>
          </div>
        </div>
      </div>
    </motion.section>
  );
}

export default Hero;

