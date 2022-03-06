import React from "react";
import Image from "next/image";
import carey from "../assets/carey.png";
import ds from "../assets/ds.png";
import sliit from "../assets/sliit.png";

import { motion } from "framer-motion";

const slideLeft = {
  hidden: { x: -400 },
  show: {
    x: 0,
  },
};

const slideRight = {
  hidden: { x: 400 },
  show: {
    x: 0,
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

function Education() {
  return (
    <div class="container py-20" id="education">
      <h1 className="text-3xl font-bold self-center text-center text-gray-900 mb-4 w-screen">
        My Education
      </h1>
      <div class="flex flex-col md:grid grid-cols-9 mx-auto p-2 mr-auto text-blue-50 w-screen">
        {/* left */}
                {/* left */}
                <div class="flex flex-col-reverse sm:flex-row-reverse md:contents">
          <motion.div
            class="bg-gradient-to-r from-orange-300 to-rose-400  col-start-1 col-end-5 p-4 rounded-xl my-4 sm:ml-auto shadow-md flex lg:flex-row sm:flex-row flex-row md:flex-col xs:flex-row sm:mx-0 mx-2"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            transition={{
              ease: "easeInOut",
              duration: 1.4,
              delay: 0.4,
            }}
            viewport={{ once: viewportOnce }}
          >
            <div className="col w-32 h-32 sm:h-min bg-white mr-4 p-4 rounded-xl md:ml-4 lg:ml-0 sm:ml-0 mt-2">
              <Image src={sliit} class="rounded-none" />
            </div>
            <div className="col px-5 pt-2">
              <h3 class="font-bold text-lg -mb-2">Sri Lanka Institute of </h3>
              <h3 class="font-bold text-lg ">Information Technology</h3>
              <h3 class=" text-lg -mb-2">
                BSc (Hons) in Information Technology
              </h3>
              <h3 class=" text-lg mb-1">Specialized in Software Engineering</h3>
              <ul className="list-disc ml-6">
                {/* <li className="leading-tight text-justify"> First Class Honours</li> */}
                <li className="leading-tight text-justify"> 3.73 WGPA</li>
                <li className="leading-tight text-justify">
                  Included in Deans List (2019, 2020, 2021)
                </li>
              </ul>

              <p class="leading-tight text-justify mt-2">2018 - 2022</p>
            </div>
          </motion.div>

          <div class="col-start-5 col-end-6 md:mx-auto relative mr-10 invisible md:visible">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-orange-600 pointer-events-none"></div>
            </div>

            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pink-400 shadow"></div>
          </div>
          <motion.div
            class="ml-4 -mb-1 sm:mb-0 sm:mr-auto  w-28 h-28 col-start-6 col-end-10 p-4 rounded-full sm:my-8 shadow-md border-8 border-orange-400 items-center "
            variants={popReveal}
            initial="hidden"
            whileInView="show"
            transition={{
              ease: "easeInOut",
              duration: 1.4,
              delay: 0.6,
            }}
            viewport={{ once: viewportOnce }}
          >
            <h3 class="font-bold text-lg mb-1 justify-center text-center text-orange-500  mt-4">
              2022
            </h3>
          </motion.div>
        </div>

        {/* Right */}
        <div class="flex flex-col sm:flex-row-reverse md:contents">
          <motion.div
            class="w-28 h-28 rounded-full col-start-1 col-end-5 border-8 border-orange-400 items-center p-4 sm:my-8 ml-auto shadow-md sm:mr-0 mr-6"
            variants={popReveal}
            initial="hidden"
            whileInView="show"
            transition={{
              ease: "easeInOut",
              duration: 1.4,
              delay: 0.3,
            }}
            viewport={{ once: viewportOnce }}
          >
            <h3 class="font-bold text-lg mb-1 justify-center text-center text-orange-500  mt-4 ">
              2014
            </h3>
          </motion.div>
          <div class="col-start-5 col-end-6 md:mx-auto relative mr-10 invisible md:visible">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-orange-600 pointer-events-none"></div>
            </div>

            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pink-400 shadow"></div>
          </div>
          <motion.div
            class="bg-gradient-to-r from-rose-400 to-orange-300 col-start-6 col-end-10 p-4 rounded-xl my-4 sm:mr-auto shadow-md flex lg:flex-row sm:flex-row flex-row md:flex-col xs:flex-row sm:mx-0 mx-2"
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
              <Image src={ds} class="rounded-none lg:rounded-lg shadow-2xl " />
            </div>
            <div className="col px-5 pt-2">
              <h3 class="font-bold text-lg -mb-1">DS Senanayake College</h3>
              <h3 class="font-semibold text-lg mb-1">Colombo 07</h3>
              <p class="leading-tight text-justify">GCE A/L</p>
              <p class="leading-tight text-justify">2014 - 2017</p>
            </div>
          </motion.div>
        </div>

        <div class="flex flex-col-reverse sm:flex-row-reverse md:contents">
          <motion.div
            class="bg-gradient-to-r from-orange-300 to-rose-400  col-start-1 col-end-5 p-4 rounded-xl my-4 sm:ml-auto shadow-md flex lg:flex-row sm:flex-row flex-row md:flex-col xs:flex-row sm:mx-0 mx-2"
            variants={slideLeft}
            initial="hidden"
            whileInView="show"
            transition={{
              ease: "easeInOut",
              duration: 1.4,
              delay: 0,
            }}
            viewport={{ once: viewportOnce }}
          >
            <div className="col w-32 h-32 bg-white mr-4 p-3 rounded-xl md:ml-4 lg:ml-0 sm:ml-0">
              <Image src={carey} class="rounded-none shadow-2xl " />
            </div>
            <div className="col px-5 pt-2">
              <h3 class="font-bold text-lg -mb-1">Carey College</h3>
              <h3 class="font-semibold text-lg mb-1">Colombo 08</h3>
              <p class="leading-tight text-justify">
                Primary Education / GCE O/L
              </p>
              <p class="leading-tight text-justify">2003 - 2014</p>
            </div>
          </motion.div>

          <div class="col-start-5 col-end-6 md:mx-auto relative mr-10 invisible md:visible">
            <div class="h-full w-6 flex items-center justify-center">
              <div class="h-full w-1 bg-orange-600 pointer-events-none"></div>
            </div>

            <div class="w-6 h-6 absolute top-1/2 -mt-3 rounded-full bg-pink-400 shadow"></div>
          </div>
          <motion.div
            class="ml-4 -mb-1 sm:mb-0 sm:mr-auto  w-28 h-28 col-start-6 col-end-10 p-4 rounded-full my-8 shadow-md border-8 border-orange-400 items-center"
            variants={popReveal}
            initial="hidden"
            whileInView="show"
            transition={{
              ease: "easeInOut",
              duration: 1.4,
              delay: 0.2,
            }}
            viewport={{ once: viewportOnce }}
          >
            <h3 class="font-bold text-lg mb-1 justify-center text-center text-orange-500  mt-4">
              2003
            </h3>
          </motion.div>
        </div>

        


      </div>
    </div>
  );
}

export default Education;
