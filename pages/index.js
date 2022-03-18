import Head from "next/head";
import Image from "next/image";
import me from "../assets/me.webp";
import Typewriter from "typewriter-effect";
import Nav from "../components/Nav";
import Profile from "../components/Profile";
import Education from "../components/Education";
import WorkExperience from "../components/WorkExperience.js";
import Skills from "../components/Skills";
import Technologies from "../components/Technologies";
import Projects from "../components/Projects";
import ContactMe from "../components/ContactMe";
import { motion } from "framer-motion";
import Footer from "../components/Footer";
import { useEffect } from "react";
import scrollIntoView from "scroll-into-view-if-needed";

const textAnimation = {
  hidden: { y: 100 },
  show: {
    y: 0,
  },
  transition: { ease: [0.17, 0.67, 0.83, 0.67] },
};

const imageAnimation = {
  hidden: { scale: 0 },
  show: {
    scale: 1,
  },
};

const typerAnimation = {
  hidden: { opacity: 0 },
  show: {
    opacity: 1,
  },
};

const buttonAnimation = {
  hidden: { opacity: 0, y: 200 },
  show: {
    opacity: 1,
    y: 0,
  },
};
const buttonAnimation2 = {
  hidden: { opacity: 0, y: 70 },
  show: {
    opacity: 1,
    y: 0,
  },
};

const viewportOnce = true;

const techLogoItem = {
  hidden: { scale: 0 },
  show: { scale: 1, transition: { ease: "anticipate", duration: 1 } },
};

const cvUrl = "https://drive.google.com/file/d/1BCwFhYtqwQwYFdeUZBbxo8bV_dADLO_M/view?usp=sharing";
export default function Home() {
  let contact;
  useEffect(() => {
    contact = document.getElementById("contact");
  }, []);

  return (
    <div className="overflow-hidden">
      <Head>
        <title>Ushan Fernando</title>
        <meta name="description" content="Generated by create next app" />
        <link rel="icon" href="/favicon.ico" />
      </Head>

      <Nav />
      <div className="banner h-screen sm:mt-0 mt-16">
        <div className="arrow arrow--top mt-24 hidden sm:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={270.11}
            height={649.9}
            overflow="visible"
          >
            <style>
              {
                ".geo-arrow{fill:none;stroke:#fff;stroke-width:2;stroke-miterlimit:10}"
              }
            </style>
            <g className="item-to bounce-1">
              <path
                className="geo-arrow draw-in"
                d="M135.06 142.564 267.995 275.5 135.06 408.434 2.125 275.499z"
              />
            </g>
            <circle
              className="geo-arrow item-to bounce-2"
              cx={194.65}
              cy={69.54}
              r={7.96}
            />
            <circle
              className="geo-arrow draw-in"
              cx={194.65}
              cy={39.5}
              r={7.96}
            />
            <circle
              className="geo-arrow item-to bounce-3"
              cx={194.65}
              cy={9.46}
              r={7.96}
            />
            <g className="geo-arrow item-to bounce-2">
              <path
                className="st0 draw-in"
                d="m181.21 619.5 13.27 27 13.27-27zm13.27 25v-552"
              />
            </g>
          </svg>
        </div>
        <div className="arrow arrow--bottom mb-4 hidden sm:block">
          <svg
            xmlns="http://www.w3.org/2000/svg"
            width={31.35}
            height={649.9}
            overflow="visible"
          >
            <style>
              {
                ".geo-arrow{fill:none;stroke:#fff;stroke-width:2;stroke-miterlimit:10}"
              }
            </style>
            <g className="item-to bounce-1">
              <circle
                className="geo-arrow item-to bounce-3"
                cx={15.5}
                cy={580.36}
                r={7.96}
              />
              <circle
                className="geo-arrow draw-in"
                cx={15.5}
                cy={610.4}
                r={7.96}
              />
              <circle
                className="geo-arrow item-to bounce-2"
                cx={15.5}
                cy={640.44}
                r={7.96}
              />
              <g className="item-to bounce-2">
                <path
                  className="geo-arrow draw-in"
                  d="m28.94 30.4-13.26-27-13.27 27zm-13.26-25v552"
                />
              </g>
            </g>
          </svg>
        </div>

        <div className="main" id="home">
          <div className="main__text-wrapper">
            {/* <div className="flex flex-row justify-center">
              <div className="flex-none">
                <Image
                  className="inline object-cover w-16 h-16 mr-2 rounded-full drop-shadow-lg"
                  src={me}
                  alt="Profile image"
                  height={400}
                  width={400}
                />
              </div>
              <div className="flex-initial w-12"></div>
              <div className="flex flex-col justify-center basis-1/2 items-start">
                <div className="flex-initial w-96 self-start">
                  <span className="font-sans text-6xl font-semibold self-start">
                    Hi,
                  </span>
                </div>
                <div className="basis-1/4 items-start">
                  <span>
                    I'am a
                    <Typewriter
                      options={{
                        strings: [
                          "Web Developer",
                          "Android Developer",
                          "Backend Developer",
                          "Blogger",
                          "Video Editor",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </span>
                </div>
              </div>
            </div> */}
            <div className="pt-2  -ml-8">
              <div className="container px-3 w-screen justify-center mx-auto flex flex-wrap flex-col md:flex-row items-center ">
                <div className="flex flex-col justify-center items-start text-center md:text-left">
                  <motion.div
                    className="flex flex-col h-64 w-64 md:h-64 md:w-64 lg:h-80 lg:w-80 relative self-center items-center justify-center"
                    variants={imageAnimation}
                    initial="hidden"
                    whileInView="show"
                    transition={{
                      ease: "easeInOut",
                      duration: 1.4,
                      delay: 0,
                    }}
                    viewport={{ once: viewportOnce }}
                  >
                    <Image
                      src={me}
                      alt="Profile image"
                      layout="fill" // required
                      objectFit="cover" // change to suit your needs
                      className="rounded-full"
                    />

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="dotted-circle hidden relative md:block"
                      width={352}
                      height={352}
                      overflow="visible"
                    >
                      <circle
                        cx={176}
                        cy={176}
                        r={174}
                        fill="none"
                        stroke="#fff"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeDasharray="12.921,11.9271"
                      />
                    </svg>

                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      className="dotted-circle relative md:hidden"
                      width={352}
                      height={352}
                      overflow="visible"
                    >
                      <circle
                        cx={176}
                        cy={176}
                        r={138}
                        fill="none"
                        stroke="#fff"
                        strokeWidth={2}
                        strokeMiterlimit={10}
                        strokeDasharray="12.921,11.9271"
                      />
                    </svg>
                  </motion.div>
                </div>

                <div className="w-full md:w-auto py-6 md:text-left md:ml-20">
                  <motion.h1
                    className="my-4 text-5xl font-bold leading-tight"
                    variants={textAnimation}
                    initial="hidden"
                    whileInView="show"
                    transition={{
                      ease: "easeInOut",
                      duration: 1,
                      delay: 0,
                    }}
                    viewport={{ once: viewportOnce }}
                  >
                    Hello, I&apos;am
                  </motion.h1>

                  <motion.div
                    className="leading-normal text-2xl mb-8"
                    variants={typerAnimation}
                    initial="hidden"
                    whileInView="show"
                    transition={{
                      duration: 2,
                      opacity: { delay: 1 },
                    }}
                    viewport={{ once: viewportOnce }}
                  >
                    <Typewriter
                      options={{
                        strings: [
                          "a Web Developer",
                          "an Android Developer",
                          "a Backend Developer",
                          "a Blogger",
                          "a Video Editor",
                        ],
                        autoStart: true,
                        loop: true,
                      }}
                    />
                  </motion.div>
                  {/* <p >
                    Sub-hero message, not too long and not too short. Make it
                    just right!
                  </p> */}
                  <div className="sm:flex flex-row hidden">
                    <motion.div
                      variants={buttonAnimation}
                      initial="hidden"
                      whileInView="show"
                      transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 1.2,
                      }}
                      viewport={{ once: viewportOnce }}
                     
                    >
                      <button
                        className="rounded-full my-6 py-4 px-8 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80   text-3xl  text-center mr-2 mb-2 hover:scale-105 duration-300 ease-in-out"
                        onClick={() =>
                          scrollIntoView(contact, {
                            scrollMode: "if-needed",
                            behavior: "smooth",
                            block: "start",
                          })
                        }
                      >
                        Hire Me
                      </button>
                      {/* </motion.div> */}
                    </motion.div>

                    <motion.a
                      variants={buttonAnimation}
                      initial="hidden"
                      whileInView="show"
                      transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 1.4,
                      }}
                      viewport={{ once: viewportOnce }}
                      target="_blank"
                      href={cvUrl}
                    >
                      <button
                        type="button"
                        className="rounded-full ml-4 my-6 py-4 px-8 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium  text-3xl  text-center mr-2 mb-2 hover:scale-105 duration-300 ease-in-out"
                        ty
             
                      >
                        Download CV
                      </button>
                    </motion.a>
                  </div>
                  {/* //Mobile View */}
                  <div className="flex flex-row sm:hidden  justify-center -ml-3">
                    <motion.div
                      variants={buttonAnimation2}
                      initial="hidden"
                      whileInView="show"
                      transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 1.2,
                      }}
                      viewport={{ once: viewportOnce }}
                      
                    >
                      <button
                        className="rounded-full my-6 py-4 px-8 text-white bg-gradient-to-r from-cyan-400 via-cyan-500 to-cyan-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-cyan-300 dark:focus:ring-cyan-800 shadow-lg shadow-cyan-500/50 dark:shadow-lg dark:shadow-cyan-800/80   text-xl  text-center mr-2 mb-2 hover:scale-105 duration-300 ease-in-out"
                        onClick={() =>
                          scrollIntoView(contact, {
                            scrollMode: "if-needed",
                            behavior: "smooth",
                            block: "start",
                          })
                        }
                      >
                        Hire Me
                      </button>
                      {/* </motion.div> */}
                    </motion.div>

                    <motion.a
                      variants={buttonAnimation2}
                      initial="hidden"
                      whileInView="show"
                      transition={{
                        ease: "easeInOut",
                        duration: 1,
                        delay: 1.4,
                      }}
                      viewport={{ once: viewportOnce }}
                      href={cvUrl}
                      target="_blank"
                    >
                      <button
                        type="button"
                        className="rounded-full ml-4 my-6 py-4 px-6 text-white bg-gradient-to-r from-pink-400 via-pink-500 to-pink-600 hover:bg-gradient-to-br focus:ring-4 focus:ring-pink-300 dark:focus:ring-pink-800 shadow-lg shadow-pink-500/50 dark:shadow-lg dark:shadow-pink-800/80 font-medium  text-xl  text-center  mb-2 hover:scale-105 duration-300 ease-in-out"
                      >
                        Download CV
                      </button>
                    </motion.a>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="bg-gradient-to-r from-white  via-slate-300 to-gray-400">
        <Profile />
      </div>

      <div className="bg-gradient-to-r from-rose-100 to-orange-100">
        <Education />
      </div>

      <div className="bg-gradient-to-r from-green-100 via-blue-100 to-purple-100">
        <WorkExperience />
      </div>

      <div className="bg-gradient-to-r from-green-100 via-teal-100 to-lime-100">
        <Skills />
      </div>

      <div className="bg-white">
        <Technologies />
      </div>

      <div className="bg-gradient-to-r from-green-100 to-purple-100">
        <Projects />
      </div>

      <div className="bg-gradient-to-r from-yellow-200 via-yellow-300 to-yellow-400">
        <ContactMe />
      </div>

      <div className="bg-white">
        <Footer />
      </div>
    </div>
  );
}
