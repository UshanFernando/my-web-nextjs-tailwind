import React from "react";
import Image from "next/image";

import fl from "../assets/freelancer.png";
import dp from "../assets/dpulz.jpg";

import { motion } from "framer-motion";

const slideLeft = {
  hidden: { x: -300 },
  show: {
    x: 0,
  },
};

const slideRight = {
  hidden: { x: 300, opacity: 0 },
  show: {
    x: 0,
    opacity: 1,
  },
};

const popReveal = {
  hidden: { opacity: 0, scale: 0 },
  show: {
    opacity: 1,
    scale: 1,
  },
};

const viewportOnce = true;
function WorkExperience() {
  return (
    <div className="container py-20" id="experience">
      <div className="flex flex-col md:grid grid-cols-9 mx-auto p-2 mr-auto text-blue-50 w-screen">
        {/* Right */}
        <div className="flex flex-col sm:flex-row-reverse md:contents">
          <h1 className="text-3xl font-bold self-start text-left lg:text-center text-gray-900 mb-10  col-start-3 col-end-4 ml-4 sm:ml-0">
            Work Experience
          </h1>
          <motion.div
            className="w-28 h-28 rounded-full col-start-2 col-end-3 border-8 border-blue-400 items-center p-4 sm:my-8 ml-auto shadow-md sm:mr-0 mr-6"
            variants={popReveal}
            initial="hidden"
            whileInView="show"
            transition={{
              ease: "easeInOut",
              duration: 1.4,
              delay: 0,
            }}
            viewport={{ once: true }}
          >
            <h3 className="font-bold text-lg mb-1 justify-center text-center text-blue-500  mt-4 ">
              2017
            </h3>
          </motion.div>
          <div className="col-start-3 col-end-4 md:mx-auto relative mr-10 invisible md:visible">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-600 pointer-events-none"></div>
            </div>

            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-purple-400 shadow"></div>
          </div>

          <motion.div
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 col-start-4 col-end-10 p-4 rounded-xl my-4 sm:mr-auto shadow-md flex lg:flex-row sm:flex-row flex-row md:flex-col xs:flex-row sm:mx-0 mx-2"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            transition={{
              ease: "easeInOut",
              duration: 1.4,
              delay: 0.3,
            }}
            viewport={{ once: viewportOnce }}
          >
            <div className="col w-32 h-32 bg-white mr-4 p-3 rounded-xl md:ml-4 lg:ml-0 sm:ml-0 ">
              <Image
                src={fl}
                className="rounded-none lg:rounded-lg shadow-2xl "
              />
            </div>
            <div className="col px-5 pt-1">
              <h3 className="font-bold text-lg -mb-1">
                Freelance Fullstack Developer
              </h3>
              <ul className="list-disc ml-6 my-2">
                {/* <li className="leading-tight text-justify"> First Class Honours</li> */}
                <li className="leading-tight text-justify">
                  {" "}
                  Commercial Web Sites
                </li>
                <li className="leading-tight text-justify">
                  University Assignments
                </li>
                <li className="leading-tight text-justify">
                  Final Year Research Projects
                </li>
              </ul>

              <p className="leading-tight text-justify">2017 - Present</p>
            </div>
          </motion.div>

          <motion.div
            className="w-28 h-28 rounded-full col-start-2 col-end-3 border-8 border-blue-400 items-center p-4 sm:my-8 ml-auto shadow-md sm:mr-0 mr-6"
            variants={popReveal}
            initial="hidden"
            whileInView="show"
            transition={{
              ease: "easeInOut",
              duration: 1.4,
              delay: 0.5,
            }}
            viewport={{ once: viewportOnce }}
          >
            <h3 className="font-bold text-lg mb-1 justify-center text-center text-blue-500  mt-4 ">
              2021
            </h3>
          </motion.div>
          <div className="col-start-3 col-end-4 md:mx-auto relative mr-10 invisible md:visible">
            <div className="h-full w-6 flex items-center justify-center">
              <div className="h-full w-1 bg-blue-600 pointer-events-none"></div>
            </div>

            <div className="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-purple-400 shadow"></div>
          </div>

          <motion.div
            className="bg-gradient-to-r from-green-300 via-blue-500 to-purple-600 col-start-4 col-end-10 p-4 rounded-xl my-4 sm:mr-auto shadow-md flex lg:flex-row sm:flex-row flex-row md:flex-col xs:flex-row sm:mx-0 mx-2"
            variants={slideRight}
            initial="hidden"
            whileInView="show"
            transition={{
              ease: "easeInOut",
              duration: 1.4,
              delay: 0.8,
            }}
            viewport={{ once: viewportOnce }}
          >
            <div className="col w-32 h-32 bg-white mr-4 p-3 rounded-xl md:ml-4 lg:ml-0 sm:ml-0 ">
              <Image
                src={dp}
                className="rounded-none lg:rounded-lg shadow-2xl "
              />
            </div>
            <div className="col px-5 pt-1">
              <h3 className="font-bold text-lg -mb-1">
                Trainee Software Engineer
              </h3>
              <ul className="list-disc ml-6 my-2">
                {/* <li className="leading-tight text-justify"> First Class Honours</li> */}
                <li className="leading-tight text-justify"> React Native</li>
                <li className="leading-tight text-justify">Amazon AWS</li>
                <li className="leading-tight text-justify">Spring Boot</li>
              </ul>

              <p className="leading-tight text-justify">
                2021 July - 2022 January (6 months)
              </p>
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}

export default WorkExperience;
